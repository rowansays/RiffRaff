# RiffRaff

My personal theme for the [phpDocumentor](https://phpdoc.org/) application.
Feel free to use it under the terms of the MIT license but, be warned! This is
a work in progress and, therefore, all of the things are capable of breaking at
any time, for any reason. RiffRaff uses [webpack](https://webpack.js.org/) and
a small army of other [node packages](https://www.npmjs.com/).

## Modifications

  1. Syntax highlighting is used for all code blocks.
  1. All text color contrast ratios meet or exceed the minimums outlined in the
     [Success Criterion 1.4.3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
     for WCAG 2.1 Level AA.
  1. The sidebar has been set to position `sticky`.
  1. The search box has been moved into the sidebar.
  1. Many of the twig templates have been merged together.
  1. Two spaces are used, instead of four, for indenting code blocks.

## Development

Three directories are used for development:

  1. The __src__ directory contains all files which are used to build the final
  tempate. Here you will find css, scss, js, and _ever-so-many_
[twig](https://twig.symfony.com/) files.
  2. The __data__ directory contains a couple of directories that store mock
  data for spinning up documentation sites using the `phpdoc` terminal command.
  3. The __make__ directory is a temporary place to store the output of calling
     `phpdoc` while parsing the test code found in __data__ and using the
     template from __src__. This directory is used only for testing during
     development and it's contents should not be under version control.

Eventually, I will add __build__ and __dist__ to this flow.

## Attribution

  1. This template was forked from the default template of phpDocumentor v3.0.0
     by [Mike van Riel](https://mikevanriel.com/). Original License: MIT.
  2. The link icon from the [Font Awesome](https://fontawesome.com/) library
     has been embedded. It has be altered by first running it through
     [SVGOMG](https://jakearchibald.github.io/svgomg/) and then running that
     output through [URL-encoder for SVG](https://yoksel.github.io/url-encoder/).
     Original license: [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/).
  3. [PrismJs](https://prismjs.com/) is directly embedded in the bundled
     javascript. Original License: MIT.
