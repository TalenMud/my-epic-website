# 🌍 GitHub and GitHub Pages From Zero

Learn Git and GitHub by building your own website and putting it on the internet for free.

Built for a 2 hour workshop stream. Every change you make is one more round of the same loop: edit, commit, push, see it live.

## Before the workshop

Installing is slow to do live, so please do this first:

1. Create a free account at [github.com](https://github.com/signup) and verify your email.
2. Install [Git](https://git-scm.com/downloads) and [VS Code](https://code.visualstudio.com/).
3. On macOS or Linux, also install the [GitHub CLI](https://cli.github.com/) and run `gh auth login`. Choose HTTPS and say yes to authenticating Git. Windows users don't need this, because Git opens a browser login on your first push.
4. Keep your email private: open [your email settings](https://github.com/settings/emails), turn on **Keep my email addresses private**, and copy the address ending in `@users.noreply.github.com`. You'll use it during setup, because every commit you publish shows the email attached to it.

## The plan

| Time | What we do |
|------|------------|
| 0:00 | What Git, GitHub and Pages are, and a look at the finished site |
| 0:10 | Copy the template, turn on Pages, make your first commit in the browser |
| 0:30 | Set up Git and download your site |
| 0:45 | Write your About section together: edit, commit, push |
| 1:00 | Do the rest yourself: colors, photo, projects, links |
| 1:25 | Branches and pull requests |
| 1:45 | Bonus: join the wall, and undo a mistake |

## The words you need

| Word | What it means |
|------|---------------|
| Git | The program that saves the history of your project |
| GitHub | The website where that history lives online |
| Repository (repo) | One project and its whole history |
| Commit | One saved change, with a message saying what changed |
| Push | Send your commits to GitHub |
| Pull | Get new commits from GitHub |
| Clone | Download a repo to your computer |
| Branch | A separate line of work that doesn't touch the main site yet |
| Pull request | A request to merge a branch, which people can review first |
| Fork | Your own copy of someone else's repo |
| GitHub Pages | Free website hosting from a repo |

## Every command, in order

Swap `YOURNAME` for your GitHub username and `REPO` for your repo's name.

```bash
# 1. Tell Git who you are (once per computer)
git config --global user.name "Your Name"
git config --global user.email "your-address@users.noreply.github.com"

# 2. Download your site (once)
git clone https://github.com/YOURNAME/REPO.git
cd REPO
code .

# 3. The loop: repeat this for every change
git status
git add .
git commit -m "Say what you changed"
git push

# 4. Work on a branch
git switch -c add-now-section
git add .
git commit -m "Add what I'm doing now"
git push -u origin add-now-section

# 5. After merging the pull request on GitHub
git switch main
git pull

# 6. Undo the last commit safely
git log --oneline
git revert --no-edit HEAD
git push
```

## 1. Make your repo

1. Near the top of this page, click **Use this template**, then **Create a new repository**.
2. Name it `YOURNAME.github.io`, using your exact username, and make it **Public**. That name gives you the address `https://YOURNAME.github.io`.
3. Open your new repo's **Settings**, then **Pages**. Under **Branch**, pick `main` and `/ (root)`, then click **Save**.

Already have a repo with that name? Give this one any other name, like `my-first-site`. Your address will be `https://YOURNAME.github.io/my-first-site/`.

Wait about a minute, then open your address. You're on the internet.

## 2. Make your first commit, in the browser

Do **TODO 1**. Open `index.html` on GitHub, click the pencil icon, put in your name and your one-line description, then click **Commit changes**.

Open the **Actions** tab to watch it publish. When the dot turns green, refresh your site. If it looks the same, press `Ctrl+Shift+R`, or `Cmd+Shift+R` on a Mac.

## 3. Download your site

Run steps 1 and 2 of the commands above. Your files are now on your computer, and `code .` opens them in VS Code. Double-click `index.html` in your file explorer to preview it.

## 4. The loop

We do **TODO 2** together. Write your About section in `index.html`, save it, then:

```bash
git status
git add .
git commit -m "Write my about section"
git push
```

`status` shows what changed, `add` picks what to save, `commit` saves it, and `push` sends it to GitHub. Your first push may ask you to log in. Then check your live site.

## 5. Now you do the rest

One TODO, one commit, one push. Search your files for `TODO`.

| TODO | Change | File |
|------|--------|------|
| 3 | Pick your four colors | `style.css` |
| 4 | Add a photo and change the file name | `index.html` |
| 5 | Add two more projects | `index.html` |
| 6 | Add your links | `index.html` |

Look at your repo's **Commits** page afterwards. That's your project's whole history.

## 6. Branches and pull requests

Make a branch, so your live site stays safe while you work:

```bash
git switch -c add-now-section
```

At **TODO 7** in `index.html`, paste this and write your own text:

```html
<section class="commit branch" id="now">
  <h2>What I'm doing now</h2>
  <p>Tell people what you're working on this month.</p>
</section>
```

Then send your branch to GitHub:

```bash
git add .
git commit -m "Add what I'm doing now"
git push -u origin add-now-section
```

On GitHub, click **Compare & pull request**, then **Create pull request**, read your changes, and click **Merge pull request**. Your live site now has a section that branches off the line and joins it again, just like the work you just did.

Bring the merged work back to your computer:

```bash
git switch main
git pull
```

## 7. Bonus: join the wall

This is how people contribute to projects they don't own.

1. Click **Fork** at the top of the [workshop repo](https://github.com/TalenMud/github-pages-workshop), then **Create fork**.
2. In your fork, open the `wall` folder and click **Add file**, then **Create new file**.
3. Name it `YOURNAME.json` and fill this in. Keep every quote mark and comma:

   ```json
   {
     "name": "Your Name",
     "site": "https://YOURNAME.github.io/",
     "message": "One short line for the wall."
   }
   ```

4. Click **Commit changes**. Then click **Contribute** and **Open pull request**.

Once it's merged, you're on the [wall](https://talenmud.github.io/github-pages-workshop/wall/).

## 8. Bonus: undo a mistake

Commit something silly, push it, then take it back:

```bash
git log --oneline
git revert --no-edit HEAD
git push
```

Revert adds a new commit that cancels the last one, so your history stays honest.

## Common problems

| Problem | Fix |
|---------|-----|
| `git` or `code` isn't recognized | Close and reopen your terminal after installing |
| The site shows a 404 | Check **Settings**, then **Pages**, and wait a minute. Your repo must be Public |
| My change isn't showing | Check the **Actions** tab is green, then press `Ctrl+Shift+R` |
| Photo works on my computer but not live | File names are case-sensitive online. `Me.JPG` and `me.jpg` are different |
| `rejected` or `fetch first` when pushing | Run `git pull`, then push again |
| A strange screen with `~` down the side | You're in the Vim editor. Type `:wq` and press Enter |
| `fatal: not a git repository` | You're in the wrong folder. `cd` into your site |
| `Author identity unknown` | Run the two `git config` commands, then commit again |

## Project structure

```
github-pages-workshop/
├── index.html    # Your website. Most TODOs are in here
├── style.css     # How it looks. Your colors are at the top
├── me.svg        # The placeholder photo
├── .nojekyll     # Tells Pages to publish your files exactly as they are
└── wall/         # The shared wall for the pull request bonus
```

## License

[MIT](LICENSE)
