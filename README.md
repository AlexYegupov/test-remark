# this is index.md

\##subheader 1.1

[#chapter-1](#chapter-1)

[#chapter2](#chapter2)

[#BROKEN-chapter](#BROKEN-chapter)

[./doc2.md](./doc2.md)

[doc2](doc2)

[doc2.md](doc2.md)

[doc2.html](./doc2.html)

[doc2.md#chapter2](./doc2.md#chapter2)

[doc2.md#BROKEN-chapter](doc2.md#BROKEN-chapter)

[docBROKENLINK](docBROKENLINK)

[dead--url.com](http://dead--url.com)

[docчетыре](./docчетыре.md)

fdffdties textddddfd dfsadf sadffdsa sdafdf

## subchapter 1.2

dffdff fdfdf fddf df dfddf eee

[1](./doc2.md#chapter3)

My definitons:

*   [my definition][my-definition]
*   [my-definition][]
*   [my-definition2][my-definition2]
*   [my-definition2][]

automatic link:

*   </doc3>
*   <a>doc3</a>
*   <a href="doc3">doc3</a>

[my-definition]: doc2.md#chapter-1

[my-definition2]: #chapter2

Visit [Daring Fireball][] for more information.
And then define the link:

Visit [Daring Fireball][] for more information2.
And then define the link:

Visit \[BROKEN]\[] for more information2.
And then define the link:

definition:

[Daring Fireball]: http://daringfireball.net/

other:

Visit [Daring Fireball][] for more information3.
And then define the link:

## chapter 1

asdffdas

## chapter2

dffsdfdsas
  In case of problems with docsify can append rehype plugins to remark plugin chain that can do the same work (md -> html convertion)

## Current scheme

```
md --(remark-plugins)--> validated_md --(docsify)--> html

```

## Alternative scheme (if docsify will have limits)

```
md --(remark-plugins)--> validated_md --(rehype-plugiins)--> html

```

## See also

remark/plugins.md at main · remarkjs/remark https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins

remark-plugin · GitHub Topics https://github.com/topics/remark-plugin

rehype/plugins.md at main · rehypejs/rehype https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins

Transforming Markdown with Remark & Rehype | ryanfiller.com https://www.ryanfiller.com/blog/remark-and-rehype-plugins#basic-plugin-structure

Explore - unified https://unifiedjs.com/explore/

Quick start https://docsify.js.org/#/quickstart

### how to add/edit images in md

*   drug\&drop & manual fix fixfilename in VScode
*   copy-paste by ctrl+alt+v using Markdown Paste VSCode extension

# TODO

*   remark-reference-links & how to create a terms?
*   format md (by pretter or natively by remark?)
*   terms storage strategy (md references?)
*   TOC
*   styling
*   header, footer
*   link prevew
*   link
*   convert it all to the library with instruction & create demo how to attach to project
*   apply remark-autolink-references to convert links like JIRA-123 to project-configurable links (like project jira tickets etc)

    (OR maybe use remark-linkify-regex for this?)
*   add remark-truncate-links
*   add remark-gfm (autolink urls, tables, linst, strikethrough, footnotes)
*   ?(not sure) landakram/remark-wiki-link: Parse and render wiki links.
