version=$(node -p "const { version } = require('./package.json'); version")

git checkout master

# commit
git add -A
standard-version --commit-all --release-as $version


# push
git push --tags origin
git push --all origin

# publish
npm publish 
