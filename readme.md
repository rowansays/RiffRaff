# RiffRaff

My personal theme for the [phpDocumentor](https://phpdoc.org/) application.
Feel free to use it under the terms of the MIT license but, be warned! This is
a work in progress and, therefore, all of the things are capable of breaking at
any time, for any reason. RiffRaff uses [webpack](https://webpack.js.org/) and a small army of other [node packages](https://www.npmjs.com/).

## Development



Three directories are used for development:

  1. The __src__ directory contains all files which are used to build the final
  tempate. Here you will find css, scss, js, and _ever-so-many_
[twig](https://twig.symfony.com/) files.
  2. The __data__ directory contains a couple of directories that store mock
  data for spinning up documentation sites using the `phpdoc` terminal command.
  3. The __make__ directory is a temporary place to store the output of calling
`phpdoc` while parsing the test code found in __data__ and using the template
from __src__. This directory is used only for testing during development and
it's contents should not be under version control.

Eventually, there will be __build__ and __dist__ directories as well...

## Attribution

This template was forked from the default template of phpDocumentor v3.0.0 by
[Mike van Riel](https://mikevanriel.com/).

This template include the link icon from the
[Font Awesome](https://fontawesome.com/) library. It hass be altered by first
running it through [SVGOMG](https://jakearchibald.github.io/svgomg/) and then
running it through [URL-encoder for SVG](https://yoksel.github.io/url-encoder/).
