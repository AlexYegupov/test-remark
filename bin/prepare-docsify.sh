#/bin/bash

# build docsify sidebar from docs/*.md files
cd $(dirname "$0")/../docs

echo '<!-- do not modify, Generated automatically by prepare-docsify.sh -->' > _sidebar.md
echo '* [Home](README.md)' >> _sidebar.md

ls *.md  |grep -v '^_' |grep -v 'README.md' |xargs -I % -n1 echo \* [%]\(%\) >> _sidebar.md

