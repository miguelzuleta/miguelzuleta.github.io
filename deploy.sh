echo "Enter test deploy commit message"
read commitMessage

function deleteInit() {
    if [ -e init.sh ]
    then
        rm -rf init.sh
    fi
}
deleteInit

gulp --prod --deploy

git checkout master

deleteInit

git checkout dev site
mv site/* .
rm -rf site

git add .
git commit -m "$commitMessage"
git push test master

git checkout dev