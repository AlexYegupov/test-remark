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
