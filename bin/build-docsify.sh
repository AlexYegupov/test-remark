#/bin/bash

# build docsify sidebar from docs/*.md files
cd $(dirname "$0")/../docs

# Generate docsify sidebar

echo '<!-- Generated automatically by prepare-docsify.sh -->' > _sidebar.md
echo '* [Home](README.md)' >> _sidebar.md

ls *.md  |grep -v '^_' |grep -v 'README.md' | xargs -I % -n1 basename % .md |xargs -I % -n1 echo \* [%]\(%.md\) >> _sidebar.md


