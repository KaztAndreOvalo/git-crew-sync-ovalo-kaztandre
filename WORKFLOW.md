!\[Task 1 screenshot](screenshots/IT327 TASK 1.png)



!\[Task 2 screenshot](screenshots/IT327 TASK 2.png)



!\[Task 3 screenshot](screenshots/IT327 TASK 3.png)



!\[Task 4 screenshot](screenshots/IT327 TASK 4.0.png)



!\[Task 4 screenshot](screenshots/IT327 TASK 4.1.png)



!\[Task 5 screenshot](screenshots/IT327 TASK 5.png)



!\[Task 6 screenshot](screenshots/IT327 TASK 6.png)



1\. What did the rejected push error message tell you, and why did it happen?

The error warned that pushing would overwrite commits on the remote branch that weren't in my local repo. It happened because the remote had newer changes pushed to it, so Git blocked the non-fast-forward push to protect those changes.



2\. What's the actual difference between how you resolved Task 3 (merge) vs Task 4 (rebase)?

Merge keeps both histories intact and connects them using a brand-new merge commit. Rebase rewrites history by replaying your local commits directly on top of the remote ones to keep a single linear timeline.



3\. What one habit would have avoided both rejected pushes in this lab?

Always running git fetch or git pull before every push would have caught the remote changes early and prevented the rejection.



4\. Which approach — merge or rebase — would you default to on a shared team branch, and why?

I’d default to merge because it avoids rewriting history that teammates are actively pulling from. Rebase is better saved for personal, unshared branches to clean up commits before pushing.

