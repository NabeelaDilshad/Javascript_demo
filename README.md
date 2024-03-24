Git—

git config —global user.name 
—-----  to show user name 

git config —global user.email
------ to show user email

git config —global user.name “your name “
—----- to set git account to github

git config —global user.email “your email “
—----- to set git account to github

git init 
—----- intialise git ( version control system to local machine)

git remote add origin <github repo https link>
—----- add project to github 

git clone <github repo https link>
—----- get project from github 

git status 
—----- check the status of verson control of file

git add <filename>
—----- file goes to staging area

git add .
—----- All file goes to staging area

git reset HEAD <filename>
—----- git undo file from staging area

git reset HEAD .
—----- git undo  All file from staging area

git commit -m “commit msg”
—----- commit to git 

git push origin <branch name>
—----- push code to github branch


git log 
—----- list of all commit

git log —oneline  
—----- list of all comit in short

git blame <filename> 
 —----- to show us file m kis kis n kya chnage kra h 

git show coomitID
—----- to file chnages in this commit 

git diff 
—----- to show changes in files

git reset  —hard  commitID
—----- go to specific commit   uske bad k sare commit will lose (delete)

git push -f
—-----  forcefully push after remove HEAD

git revert  commitID 
—----- to undo specific file commit code  only 

git merge origin <branch>
—----- isme m us branch ka sare changes code ek hi  single commit m merge hota h 

git rebase origin <branch>
—----- isme m us branch ka sare changes code  single-single  commit m merge hota h , 

GITHUB - its remote server  It makes it easy for developers to share code files and collaborate with fellow developers on open-source projects




