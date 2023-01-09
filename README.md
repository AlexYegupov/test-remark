# Project documentation strategy hypotesis

It's about a project documentation that is created mostly created by developer than someone else like a customer.

1. Create docs as a markdown files in project repository

   Proc:
    - easy to modify (any text editor OR VS code also has cool markdown editor and useful markdown plugins with hyperlink substitution)

    - easy to read (directly OR in browser+markdown plugin OR in simply in browser after markdown->html convertion (see p.3)

    - documentation is always synchronized with functionality (assummed that deeloper write documentation together with a code changes)

    - QA can easily see DIFF changes in documentation => can pay attentiions to the correspondent parts of the system that were changed

   Cons:
    - a little harder documentation edition than WYSIWYG wiki editing (although simply editing could be made simply at the gitlab site commit).


2. Format docs via prettier & validate by remark-cli & plugins (formatting, styles, template substitution, dead links check etc)

3. visualize docs via docsify (md -> preview in the browser)

   NOTE: docsify is considered just as a quick & simple visuailzation tool.

   In case of problems with docsify can append rehype plugins to remark plugin chain that can do the same work (md -> html convertion)



## Current scheme

```
md --(remark-plugins)--> validated_md --(docsify)--> html

```

## Alternative scheme (if docsify will have limits)

```
md --(remark-plugins)--> validated_md --(rehype-plugiins)--> html

```

### Add images to md

Either:

* By any text editor manually
* VSCode > Markdown Paste extenstion & Ctrl+Alt+v hotkey
* VSCode > drag&drop & manual fix path
* VSCode > Ctrl+Shift+p > "markdown insert image from the workspace" (can set custom key for this)

### Add link to md

Either:

* by any text editor manually
* `VSCode >  Ctrl+Shift+p > "markdown insert image from the workspace"` (can set custom key for this)
* VSCode > type `[](` and press `Ctrl+space` and in the dropdown select desired file.md#chapter




## See also
remark/plugins.md at main · remarkjs/remark https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins

remark-plugin · GitHub Topics https://github.com/topics/remark-plugin

rehype/plugins.md at main · rehypejs/rehype https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins

Transforming Markdown with Remark & Rehype | ryanfiller.com https://www.ryanfiller.com/blog/remark-and-rehype-plugins#basic-plugin-structure

Explore - unified https://unifiedjs.com/explore/

Quick start https://docsify.js.org/#/quickstart



# TODO

   todo/find remark plugin: empty lnks
     [](doc#chapter3)   ->>>  [doc#chapter3](doc#chapter3)

 - TOC
 - styling
 - header, footer
 - link prevew
 - link
 - convert it all to the library with instruction & create demo how to attach to project

 - autolink items like JIRA-123 to links using one of:
   - https://gitlab.com/staltz/remark-linkify-regex
   - https://unifiedjs.com/explore/package/remark-autolink-references/
   - https://github.com/remarkjs/remark-gfm
   - https://github.com/remarkjs/remark-github
