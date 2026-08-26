# Deployment — zaborpomor.ru

## Architecture

| Layer | Location |
|-------|----------|
| Development | Cursor / local (`npm run dev`) |
| Source control | GitHub — [oney29rus/zaborpomor](https://github.com/oney29rus/zaborpomor), branch `main` |
| CI/CD | GitHub Actions — `.github/workflows/deploy-production.yml` |
| Production | Timeweb VPS `213.171.12.145` |
| App path | `/var/www/zaborpomor` |
| Process manager | `systemctl` service `zaborpomor` |
| Reverse proxy | Nginx (HTTPS via Certbot) |

## Automatic deploy (normal flow)

```
Local changes → git push origin main
              → GitHub Actions workflow "Deploy Production"
              → SSH to Timeweb
              → git pull --ff-only
              → npm ci (only if package.json / package-lock.json changed)
              → rm -rf .next && npm run build
              → systemctl restart zaborpomor
              → smoke test (curl homepage + robots.txt)
```

Trigger: every push to `main`, or manual **Run workflow** in GitHub Actions.

Concurrency: one deploy at a time (`production-deploy` group). A running deploy is not cancelled by a newer push.

### Safety

- If the server working tree is dirty, deploy aborts.
- If `npm run build` fails, **no** `systemctl restart` — the previous build keeps running.
- `.env.local` on the server is never touched by the workflow.
- On failure, the workflow log prints a manual rollback hint with `OLD_SHA`.

## GitHub Secrets (required)

Configure in **GitHub → Repository → Settings → Secrets and variables → Actions → New repository secret**:

| Secret | Value |
|--------|-------|
| `TIMEWEB_HOST` | `213.171.12.145` |
| `TIMEWEB_USER` | `root` |
| `TIMEWEB_SSH_KEY` | Private deploy key (see below) |

Optional:

| Secret | Value |
|--------|-------|
| `TIMEWEB_PORT` | `22` (default if omitted) |

Never commit secrets to the repository.

## Deploy SSH key

A dedicated key pair lives on the server:

- Private: `/root/.ssh/github-actions-zaborpomor` → copy into `TIMEWEB_SSH_KEY` secret
- Public: `/root/.ssh/github-actions-zaborpomor.pub` → in `/root/.ssh/authorized_keys`

Do **not** reuse your personal SSH key for GitHub Actions.

### Add private key to GitHub (secure)

From your local machine (using your existing admin key):

```powershell
ssh -i C:\Users\User1\.ssh\id_ed25519_zaborpomor root@213.171.12.145 "cat /root/.ssh/github-actions-zaborpomor"
```

Copy the **entire** output (including `-----BEGIN OPENSSH PRIVATE KEY-----` / `-----END ...`) into the `TIMEWEB_SSH_KEY` secret. Do not paste it in chat, issues, or commit messages.

Public key fingerprint (for verification):

```
SHA256:UreeAfLgvpUCPEZzGtInTn5FIn/9QPq9lwa3/DG9xVU
```

## Manual emergency deploy

```bash
ssh -i ~/.ssh/id_ed25519_zaborpomor root@213.171.12.145
cd /var/www/zaborpomor
git fetch origin main
git pull --ff-only origin main
# if package-lock.json changed:
env -u NODE_ENV npm ci
rm -rf .next
npm run build
systemctl restart zaborpomor
systemctl is-active zaborpomor nginx
curl -I https://zaborpomor.ru/
```

## Rollback

```bash
ssh root@213.171.12.145
cd /var/www/zaborpomor
git log --oneline -10          # find last good commit
git checkout <good-commit-sha> # or: git reset --hard <sha>
rm -rf .next
npm run build
systemctl restart zaborpomor
curl -I https://zaborpomor.ru/
```

`.env.local` is unchanged by git operations (gitignored).

## First-time checklist

1. Add GitHub Secrets (`TIMEWEB_HOST`, `TIMEWEB_USER`, `TIMEWEB_SSH_KEY`)
2. Commit and push `.github/workflows/deploy-production.yml` to `main`
3. Watch **Actions** tab for the first run
4. Confirm smoke tests pass and https://zaborpomor.ru loads the new version

## What the workflow does NOT change

- DNS
- Nginx configuration
- SSL / Certbot
- `/var/www/zaborpomor/.env.local`
- Vercel backup project
