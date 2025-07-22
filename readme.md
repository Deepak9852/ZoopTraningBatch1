# IN this repository we have covered basic to advanvce javascript

D:\Tutorial>git init
Initialized empty Git repository in D:/Tutorial/.git/

D:\Tutorial>git add .

D:\Tutorial>git add.
git: 'add.' is not a git command. See 'git --help'.

The most similar command is
add

D:\Tutorial>git add .

D:\Tutorial>git status
On branch master

No commits yet

Changes to be committed:
(use "git rm --cached <file>..." to unstage)
new file: dom.js
new file: index.html
new file: index.js
new file: module1 .js
new file: module2.js

D:\Tutorial>git commit -m "first commit"
[master (root-commit) a1ae77c] first commit
5 files changed, 1948 insertions(+)
create mode 100644 dom.js
create mode 100644 index.html
create mode 100644 index.js
create mode 100644 module1 .js
create mode 100644 module2.js

D:\Tutorial>git branch -M main

D:\Tutorial>git remote add origin https://github.com/Deepak9852/ZoopTraningBatch1.git

D:\Tutorial>git push -u origin main
info: please complete authentication in your browser...
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 4 threads
Compressing objects: 100% (7/7), done.
Writing objects: 100% (7/7), 10.78 KiB | 3.59 MiB/s, done.
Total 7 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/Deepak9852/ZoopTraningBatch1.git

- [new branch] main -> main
  branch 'main' set up to track 'origin/main'.

D:\Tutorial> git add readme.md
fatal: pathspec 'readme.md' did not match any files

D:\Tutorial>git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
(use "git add <file>..." to include in what will be committed)
readme.md

nothing added to commit but untracked files present (use "git add" to track)

D:\Tutorial>git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
(use "git add <file>..." to update what will be committed)
(use "git restore <file>..." to discard changes in working directory)
modified: index.js

Untracked files:
(use "git add <file>..." to include in what will be committed)
readme.md

no changes added to commit (use "git add" and/or "git commit -a")

D:\Tutorial>git add readme.md

D:\Tutorial>git commit -m "Added a readme file"
[main 2e45019] Added a readme file
1 file changed, 1 insertion(+)
create mode 100644 readme.md

D:\Tutorial>git push origin main
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 334 bytes | 334.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/Deepak9852/ZoopTraningBatch1.git
a1ae77c..2e45019 main -> main

D:\Tutorial>git add index.js

D:\Tutorial>git push origin main
Everything up-to-date

D:\Tutorial>git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
(use "git restore --staged <file>..." to unstage)
modified: index.js

D:\Tutorial>git commit -m "add a comment in index .js"
[main 61272ee] add a comment in index .js
1 file changed, 2 insertions(+)

D:\Tutorial>git push origin main
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 355 bytes | 355.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/Deepak9852/ZoopTraningBatch1.git
2e45019..61272ee main -> main

D:\Tutorial>git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
(use "git add <file>..." to update what will be committed)
(use "git restore <file>..." to discard changes in working directory)
modified: dom.js
modified: index.js

no changes added to commit (use "git add" and/or "git commit -a")

D:\Tutorial>git add .

D:\Tutorial>git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
(use "git restore --staged <file>..." to unstage)
modified: dom.js
modified: index.js

D:\Tutorial>git commit -m "add a comment in both"
[main 32f7240] add a comment in both
2 files changed, 3 insertions(+)

D:\Tutorial>git push origin main
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 4 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 461 bytes | 461.00 KiB/s, done.
Total 4 (delta 3), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To https://github.com/Deepak9852/ZoopTraningBatch1.git
61272ee..32f7240 main -> main

D:\Tutorial>

D:\Tutorial>git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean

D:\Tutorial>git branch tutorial

D:\Tutorial>git branch

- main
  tutorial

D:\Tutorial>git checkout
Your branch is up to date with 'origin/main'.

D:\Tutorial>git switch tutorial
Switched to branch 'tutorial'

D:\Tutorial>git checkout

D:\Tutorial>git branch
main

- tutorial

D:\Tutorial>git branch -b test
error: unknown switch `b'
usage: git branch [<options>] [-r | -a] [--merged] [--no-merged]
or: git branch [<options>] [-f] [--recurse-submodules] <branch-name> [<start-point>]
or: git branch [<options>] [-l] [<pattern>...]
or: git branch [<options>] [-r] (-d | -D) <branch-name>...
or: git branch [<options>] (-m | -M) [<old-branch>] <new-branch>
or: git branch [<options>] (-c | -C) [<old-branch>] <new-branch>
or: git branch [<options>] [-r | -a] [--points-at]
or: git branch [<options>] [-r | -a] [--format]
