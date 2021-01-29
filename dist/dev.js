/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index.scss */ "./src/index.scss");
// Styles


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \***********************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/**\n * Spin mixin\n *\n * @param {Number} $speed [4s] How fast the element will spin.\n */\n/**\n * Get an item from a map.\n *\n * @param {map} $map The map in which the key exists.\n * @param {string} $key Name of the rey to return.\n * @param {string} $error An error message only used when the requested key\n *     does not exist in the map.\n *\n * @return {mixed}\n */\n/**\n * Encode hex color\n *\n * @param {string|color} $aught The value to encode.\n * @return {string} The requested color in hexidecimal natation: #RRGGBB.\n */\n/**\n * Visible box.\n *\n * A block-level element that can be seen either by having a visible\n * background color or border. Elements like this should be able to\n * define their own padding without having to account for vertical\n * whitespace that may be introduced by their direct descendants.\n * The styles here remove such vertical whitespace.\n *\n * @since v1.0.0\n */\n/**\n * Utility Classes.\n */\n.BlockLevelLink:hover {\n  cursor: pointer;\n}\n\n.Breakable {\n  overflow-wrap: break-word;\n}\n\n.ScreenReader,\n.ScreenReaderOnly,\n.screen-reader-text {\n  border: 0;\n  clip: rect(1px, 1px, 1px, 1px);\n  clip-path: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute !important;\n  width: 1px;\n  word-wrap: normal !important;\n}\n\n.Unbreakable {\n  overflow-wrap: normal;\n  white-space: nowrap;\n}\n\n/**\n * Primary color scheme.\n *\n *   bg ....... ffffff\n *   border ... dddddd\n *   copy ..... 767676 ... 4.54 ... AA\n *   accent ... 555555 ... 7.45 ... AAA\n *   stress ... b30000 ... 7.19 ... AAA\n *\n * @param {string} $key\n * @return {color}\n */\n/**\n * Primary, alternative color scheme.\n *\n *   bg ....... dddddd\n *   border ... aaaaaa\n *   copy ..... 555555 ... 5.75 ... AA\n *   accent ... 616161 ... 4.55 ... AAA\n *   stress ... 8f0000 ... 7.13 ... AAA\n *\n * @param {string} $key\n * @return {color}\n */\n/**\n * Secondary color scheme.\n *\n *   bg ....... 23282d\n *   border ... 23282d\n *   copy ..... ffffff ... 14.86 ... AAA\n *   accent ... dddddd ... 10.94 ... AA\n *   stress ... ff4d4d ...  4.54 ... AA\n *\n * @param {string} $key\n * @return {color}\n */\n/**\n * Secondary alternative color scheme.\n *\n *   bg ....... 000000\n *   border ... 000000\n *   copy ..... dddddd ... 15.46 ... AAA\n *   accent ... ffffff ... 21:10 ... AAA\n *\n * @param {string} $key\n * @return {color}\n */\n/**\n * Red boxen.\n *\n *   bg ....... ff4d4d\n *   border ... ff0000\n *   copy ..... 23282d ... 4.54 ... AA\n *   accent ... 000000 ... 6.42 ... AA\n *\n * @param {string} $key\n * @return {color}\n */\n/**\n * SVG Icon Library\n *\n * @package ChimeraBlog\\Wp\\Euphemism\n * @author Michael Fields\n * @copyright 2020 Michael Fields\n * @license GPL-3.0-or-later\n * @since 1.0.0\n */\n/**\n * SVG downward facing arrow icon.\n *\n * @param  {color} $color The fill color for the icon. Defaults to black.\n * @return {string} An SVG file encode for use in CSS url().\n * @since 1.0.0\n */\n/**\n * SVG downward facing, hollow arrow icon.\n *\n * @param  {color} $color The fill color for the icon. Defaults to black.\n * @return {string} An SVG file encode for use in CSS url().\n * @since 1.0.0\n */\n/**\n * SVG checkmark icon.\n *\n * @param  {color} $color The fill color for the icon. Defaults to black.\n * @return {string} An SVG file encode for use in CSS url().\n * @since 1.0.0\n */\n/**\n * SVG circle icon.\n *\n * @param  {color} $color The fill color for the icon. Defaults to black.\n * @return {string} An SVG file encode for use in CSS url().\n * @since 1.0.0\n */\n/**\n * SVG star icon.\n *\n * @param {color} $color The fill color for the icon.\n * @return {string} An SVG file encode for use in CSS url().\n * @since 1.0.0\n */\n/**\n * Remove pointer events from every direct descendant of button.\n *\n * @see https://css-tricks.com/slightly-careful-sub-elements-clickable-things/\n * @since 1.0.0\n */\nbutton > * {\n  pointer-events: none;\n}\n\n/**\n * Flat Button.\n *\n * @param {color} $b1 Required. Resting background color.\n * @param {color} $c1 Required. Resting text color.\n * @param {color} $b2 Required. Active background color.\n * @param {color} $c1 Required. Active text color.\n */\n/**\n * General HTML Elements\n */\nhtml {\n  box-sizing: border-box;\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n}\n\n@media (min-width: 500px) {\n  html {\n    font-size: 16px;\n  }\n}\n@media (min-width: 700px) {\n  html {\n    font-size: 18px;\n  }\n}\n@media (min-width: 900px) {\n  html {\n    font-size: 20px;\n  }\n}\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nb {\n  font-weight: 500;\n}\n\nbig {\n  font-size: inherit;\n}\n\nbody {\n  background-color: #fff;\n  color: #767676;\n  font-family: Hepta Slab, monospace;\n  line-height: 1.5;\n  margin: 0;\n  padding: 0;\n}\n\ncite {\n  color: #767676;\n  font-family: Special Elite, monospace;\n  font-size: 0.8rem;\n  font-style: normal;\n  text-transform: uppercase;\n}\n\ncode {\n  border-style: solid;\n  border-width: 1px;\n  display: inline-block;\n  font-size: 0.9rem;\n  font-weight: normal;\n  line-height: 1.1;\n  padding: 0 0.25rem 0.15rem 0.25rem;\n}\n\nh1, h2, h3, h4 {\n  font-family: Special Elite, monospace;\n  font-size: 2.5rem;\n  font-weight: 300;\n  letter-spacing: -0.05rem;\n  line-height: 1;\n  margin: 1.5rem 0;\n}\n\nh1 {\n  font-size: 2.5rem;\n  color: #555;\n}\n\nh2 {\n  font-size: 2rem;\n}\n\nh3 {\n  font-size: 1.5rem;\n}\n\nh4 {\n  font-size: 1.25rem;\n}\n\nh1 strong, h2 strong, h3 strong, h4 strong {\n  font-weight: 500;\n}\n\nh5, h6 {\n  font-family: Hepta Slab, monospace;\n  font-size: 1rem;\n  font-weight: 700;\n  letter-spacing: -0.05rem;\n  line-height: 1.1;\n  margin: 0 0 0.125rem;\n}\n\npre {\n  border-style: solid;\n  border-width: 1px;\n  font-size: 0.9rem;\n  overflow: auto;\n  padding: 0.625rem 0.75rem 0.75rem;\n}\n\nsmall {\n  font-size: inherit;\n}\n\nvar {\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 0.25rem;\n  display: inline-block;\n  font-family: monospace;\n  font-size: 0.9rem;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.1;\n  padding: 0 0.25rem;\n}\n\naddress, blockquote, details, dialog, dl, fieldset,\nfigcaption, figure, form, ol, p, pre, table, ul {\n  margin: 1.5rem 0;\n}\n\n/* ######################################################################### */\n/* # Colors                                                                  */\n/* ######################################################################### */\ncode, var {\n  background-color: rgba(0, 0, 0, 0.05);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n\nmark {\n  background-color: #ffffbd;\n}\n\n/* ######################################################################### */\n/* # Anchors                                                                 */\n/* ######################################################################### */\na {\n  color: #555;\n  text-decoration: underline;\n}\n\n/* ######################################################################### */\n/* # Boxes                                                                   */\n/* ######################################################################### */\ninput[type=date], input[type=datetime-local], input[type=email],\ninput[type=month], input[type=number], input[type=password],\ninput[type=search], input[type=tel], input[type=text],\ninput[type=time], input[type=url], input[type=week],\nselect, textarea {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem;\n  color: #767676;\n  font-family: inherit;\n  font-size: 1rem;\n}\n\ninput[type=date], input[type=datetime-local], input[type=email],\ninput[type=month], input[type=number], input[type=password],\ninput[type=search], input[type=tel], input[type=text],\ninput[type=time], input[type=url], input[type=week],\nselect {\n  align-items: center;\n  box-shadow: 0 0 0 2px transparent inset;\n  display: inline-flex;\n  flex-direction: row;\n  margin-bottom: 0.4rem;\n  min-height: 2.5rem;\n  padding: 0.4rem 0.7rem 0.4rem 1rem;\n  vertical-align: top;\n  width: 100%;\n}\n\ninput[type=date]:focus, input[type=datetime-local]:focus,\ninput[type=email]:focus, input[type=month]:focus,\ninput[type=number]:focus, input[type=password]:focus,\ninput[type=search]:focus, input[type=tel]:focus,\ninput[type=text]:focus, input[type=time]:focus,\ninput[type=url]:focus, input[type=week]:focus,\nselect::-ms-expand {\n  display: none;\n}\n\nselect:focus {\n  border-color: #555;\n  box-shadow: 0 0 0 2px #767676 inset;\n  outline: none;\n}\n\nselect {\n  appearance: none;\n  background-color: #fff;\n  background-image: url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' style='isolation:isolate' viewBox='0 0 16 16'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M0 0h16v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill='%23767676' d='M13.634.099q.134-.036.276-.036.35 0 .708.178t.655.472q.298.293.481.65.183.356.184.692-.001.251-.149.639-.149.388-.376.797-.227.409-.489.776-.262.367-.507.556v.168q0 .167.018.314.017.147.017.315 0 .356-.262.671-.262.335-.367.598-.105.262-.157.524-.053.262-.105.524-.053.262-.21.598-.245.524-.594.985-.35.462-.699.86-.28.839-.498 1.489-.219.65-.463 1.248-.245.598-.56 1.185-.314.587-.803 1.3l-.263-.021q-.506 0-.978.178-.472.179-.961.179-.263 0-.411-.116-.149-.115-.254-.293-.104-.179-.183-.399-.079-.22-.201-.43v-.587q-.07-.084-.175-.094-.105-.011-.21-.021-.104-.011-.2-.042-.097-.032-.149-.158-.105-.209-.14-.419-.035-.21-.078-.43-.044-.22-.114-.451-.07-.23-.245-.503-.14-.231-.288-.472-.149-.241-.323-.493-.175-.272-.289-.608-.113-.335-.209-.671-.097-.335-.21-.661-.114-.325-.323-.597-.175-.231-.341-.399-.166-.167-.315-.335-.148-.168-.288-.367-.14-.199-.262-.514-.21-.545-.324-.839-.113-.293-.183-.43-.07-.136-.114-.188-.043-.053-.096-.095-.052-.042-.148-.147-.097-.104-.289-.356-.629-.86-.882-1.583-.254-.724-.254-1.29 0-.441.131-.787Q.296.817.506.576.716.335.978.22q.262-.116.507-.116.346 0 .615.226.277.103.44.093.17-.01.27-.067t.168-.12q.068-.063.177-.046.245.028.473.066.228.039.473.067.2.024.498-.029.299-.052.618-.124.32-.071.605-.121.285-.049.424.002.019.01.036.068.017.058.032.144.014.086.037.157.023.071.041.08.037.019.104-.064.067-.084.137-.175.071-.092.123-.193.052-.101.06-.116l.304.097q.716.212 1.384.221.667.01 1.326-.034.66-.044 1.311-.072.652-.028 1.336.108l.059-.205q.008-.016.261-.004.253.013.542.024.153.006.295.012z'/%3E%3C/g%3E%3C/svg%3E\");\n  background-position: right 0.8rem top 50%;\n  background-repeat: no-repeat;\n  background-size: 0.65em auto;\n  cursor: pointer;\n  display: inline-block;\n  padding-right: 1.9rem;\n  max-width: 100%;\n}\nselect:hover {\n  background-image: url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' style='isolation:isolate' viewBox='0 0 16 16'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M0 0h16v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill='%23555555' d='M13.634.099q.134-.036.276-.036.35 0 .708.178t.655.472q.298.293.481.65.183.356.184.692-.001.251-.149.639-.149.388-.376.797-.227.409-.489.776-.262.367-.507.556v.168q0 .167.018.314.017.147.017.315 0 .356-.262.671-.262.335-.367.598-.105.262-.157.524-.053.262-.105.524-.053.262-.21.598-.245.524-.594.985-.35.462-.699.86-.28.839-.498 1.489-.219.65-.463 1.248-.245.598-.56 1.185-.314.587-.803 1.3l-.263-.021q-.506 0-.978.178-.472.179-.961.179-.263 0-.411-.116-.149-.115-.254-.293-.104-.179-.183-.399-.079-.22-.201-.43v-.587q-.07-.084-.175-.094-.105-.011-.21-.021-.104-.011-.2-.042-.097-.032-.149-.158-.105-.209-.14-.419-.035-.21-.078-.43-.044-.22-.114-.451-.07-.23-.245-.503-.14-.231-.288-.472-.149-.241-.323-.493-.175-.272-.289-.608-.113-.335-.209-.671-.097-.335-.21-.661-.114-.325-.323-.597-.175-.231-.341-.399-.166-.167-.315-.335-.148-.168-.288-.367-.14-.199-.262-.514-.21-.545-.324-.839-.113-.293-.183-.43-.07-.136-.114-.188-.043-.053-.096-.095-.052-.042-.148-.147-.097-.104-.289-.356-.629-.86-.882-1.583-.254-.724-.254-1.29 0-.441.131-.787Q.296.817.506.576.716.335.978.22q.262-.116.507-.116.346 0 .615.226.277.103.44.093.17-.01.27-.067t.168-.12q.068-.063.177-.046.245.028.473.066.228.039.473.067.2.024.498-.029.299-.052.618-.124.32-.071.605-.121.285-.049.424.002.019.01.036.068.017.058.032.144.014.086.037.157.023.071.041.08.037.019.104-.064.067-.084.137-.175.071-.092.123-.193.052-.101.06-.116l.304.097q.716.212 1.384.221.667.01 1.326-.034.66-.044 1.311-.072.652-.028 1.336.108l.059-.205q.008-.016.261-.004.253.013.542.024.153.006.295.012z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n@media (min-width: 400px) {\n  input[type=date], input[type=datetime-local], input[type=email],\ninput[type=month], input[type=number], input[type=password],\ninput[type=search], input[type=tel], input[type=text],\ninput[type=time], input[type=url], input[type=week],\nselect {\n    width: auto;\n  }\n}\n/* ######################################################################### */\n/* # Buttons                                                                 */\n/* ######################################################################### */\n.Button,\na.Button,\ninput[type=button],\ninput[type=submit],\ninput[type=reset] {\n  align-items: center;\n  background-color: #23282d;\n  border: 2px solid #23282d;\n  border-radius: 0.25rem;\n  color: #fff;\n  cursor: pointer;\n  display: inline-flex;\n  fill: #fff;\n  font-family: Special Elite, monospace;\n  font-size: 1rem;\n  font-weight: 500;\n  justify-content: center;\n  line-height: 1;\n  margin: 0 0.4rem 0.4rem 0;\n  min-height: 44px;\n  min-width: 44px;\n  padding: 0.3rem 0.9rem 0;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  vertical-align: top;\n  -webkit-font-smoothing: auto;\n}\n.Button:active, .Button:focus, .Button:hover,\na.Button:active,\na.Button:focus,\na.Button:hover,\ninput[type=button]:active,\ninput[type=button]:focus,\ninput[type=button]:hover,\ninput[type=submit]:active,\ninput[type=submit]:focus,\ninput[type=submit]:hover,\ninput[type=reset]:active,\ninput[type=reset]:focus,\ninput[type=reset]:hover {\n  background-color: #000;\n  color: #ddd;\n  fill: #ddd;\n}\n\n/* ######################################################################### */\n/* # Buttons: Subtle                                                         */\n/* ######################################################################### */\n.ButtonSubtle,\na.ButtonSubtle,\ninput[type=button].ButtonSubtle,\ninput[type=submit].ButtonSubtle,\ninput[type=reset].ButtonSubtle {\n  align-items: center;\n  background-color: #fff;\n  border: 2px solid #fff;\n  border-radius: 0.25rem;\n  color: #767676;\n  cursor: pointer;\n  display: inline-flex;\n  fill: #767676;\n  font-family: Special Elite, monospace;\n  font-size: 1rem;\n  font-weight: 500;\n  justify-content: center;\n  line-height: 1;\n  margin: 0 0.4rem 0.4rem 0;\n  min-height: 44px;\n  min-width: 44px;\n  padding: 0.3rem 0.9rem 0;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  vertical-align: top;\n  -webkit-font-smoothing: auto;\n  border-color: #ddd;\n}\n.ButtonSubtle:active, .ButtonSubtle:focus, .ButtonSubtle:hover,\na.ButtonSubtle:active,\na.ButtonSubtle:focus,\na.ButtonSubtle:hover,\ninput[type=button].ButtonSubtle:active,\ninput[type=button].ButtonSubtle:focus,\ninput[type=button].ButtonSubtle:hover,\ninput[type=submit].ButtonSubtle:active,\ninput[type=submit].ButtonSubtle:focus,\ninput[type=submit].ButtonSubtle:hover,\ninput[type=reset].ButtonSubtle:active,\ninput[type=reset].ButtonSubtle:focus,\ninput[type=reset].ButtonSubtle:hover {\n  background-color: #ddd;\n  color: #555;\n  fill: #555;\n}\n\n.ButtonSubtle.Disabled,\na.ButtonSubtle.Disabled,\ninput[type=button]:disabled.ButtonSubtle,\ninput[type=submit]:disabled.ButtonSubtle,\ninput[type=reset]:disabled.ButtonSubtle {\n  border-color: transparent;\n  cursor: default;\n}\n.ButtonSubtle.Disabled:hover,\na.ButtonSubtle.Disabled:hover,\ninput[type=button]:disabled.ButtonSubtle:hover,\ninput[type=submit]:disabled.ButtonSubtle:hover,\ninput[type=reset]:disabled.ButtonSubtle:hover {\n  color: inherit;\n  background: inherit;\n}\n\n/* ######################################################################### */\n/* # Tickables                                                               */\n/* ######################################################################### */\ninput[type=checkbox], input[type=radio] {\n  cursor: pointer;\n}\n\ninput[type=checkbox]:focus, input[type=radio]:focus {\n  border-color: #555;\n  box-shadow: 0 0 0 2px #767676 inset;\n  outline: none;\n}\n\n/* ######################################################################### */\n/* # Custom Tickables                                                        */\n/* ######################################################################### */\n.checkbox, .radio {\n  position: relative;\n}\n\n.checkbox input[type=checkbox],\n.radio input[type=radio] {\n  position: absolute;\n  left: -99999rem;\n}\n\n.checkbox label,\n.radio label {\n  align-items: center;\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n}\n\n.checkbox label::before,\n.radio label::before {\n  content: \"\";\n  display: inline-block;\n  margin-right: 0.5rem;\n  height: 1.25rem;\n  width: 1.25rem;\n  border: 2px solid #767676;\n  background-color: #fff;\n}\n\n.checkbox input[type=checkbox]:focus + label::before,\n.radio input[type=radio]:focus + label::before {\n  box-shadow: 0 0 0 2px #767676;\n  outline: none;\n}\n\n.checkbox label::before {\n  border-radius: 0.25rem;\n}\n\n.checkbox input[type=checkbox]:checked + label::before {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' style='isolation:isolate' viewBox='0 0 16 14'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath d='M0 0h16v14H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill='%23000000' d='M6 13L16 3l-3-3-7 7-3-2-3 3 6 5z'/%3E%3C/g%3E%3C/svg%3E\");\n  background-position: right 50% top 50%;\n  background-repeat: no-repeat;\n  background-size: 0.65em auto;\n}\n\n.radio label::before {\n  border-radius: 100%;\n  padding: 0.3rem;\n}\n\n.radio input[type=radio]:checked + label::before {\n  background-color: #000;\n  background-clip: content-box;\n}\n\n/* ######################################################################### */\n/* # Labels                                                                  */\n/* ######################################################################### */\nlabel {\n  cursor: pointer;\n}\n\n/* ######################################################################### */\n/* # Etc.                                                                    */\n/* ######################################################################### */\n::-moz-focus-inner {\n  border: 0;\n}\n\n/**\n * Structure.\n *\n * Styles for the main layout elements.\n */\n.Bling {\n  color: #b30000;\n}\n\n/* ######################################################################### */\n/* # Template                                                                */\n/* ######################################################################### */\nbody > footer, body > section, body > main, body > header {\n  max-width: 36rem;\n  margin: 0 auto;\n  padding: 1rem;\n}\n\nbody > header {\n  background: #23282d;\n  color: #fff;\n  fill: #fff;\n  max-width: none;\n}\nbody > header a {\n  color: inherit;\n}\nbody > header > div {\n  align-items: stretch;\n  background: inherit;\n  color: inherit;\n  display: flex;\n  flex-grow: 1;\n  justify-content: space-between;\n  max-width: 36rem;\n  margin: 0 auto;\n}\nbody > header .Heading {\n  margin: 0 0.5rem 0 0;\n  padding: 0.5rem;\n}\nbody > header .Heading .SiteName {\n  color: inherit;\n  display: inline-block;\n  font-family: Special Elite, monospace;\n  font-size: 2rem;\n  font-weight: normal;\n  line-height: 1;\n  margin: 0;\n  position: relative;\n}\n@media (min-width: 630px) {\n  body > header .Heading .SiteName:before {\n    color: #ff4d4d;\n    content: \"⊛\";\n    display: inline-block;\n    font-size: 3.5rem;\n    line-height: 0.8;\n    position: absolute;\n    top: -0.25rem;\n    left: -2.5rem;\n    text-align: left;\n    text-indent: -0.21rem;\n    width: 2.1rem;\n    height: 2.1rem;\n  }\n}\n@media (min-width: 630px) {\n  body > header .Heading .SiteName.Spin:before {\n    animation-name: spin-uc7flrl;\n    animation-duration: 4s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n  @keyframes spin-uc7flrl {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n}\nbody > header .Heading .SiteName a {\n  text-decoration: none;\n}\nbody > header .Heading .SiteName a:focus {\n  outline: 0;\n  text-decoration: underline;\n}\nbody > header .Heading .SiteName .Bling {\n  color: #ff4d4d;\n}\nbody > header .Heading .Tagline {\n  color: inherit;\n  display: block;\n  font-size: 0.7rem;\n  margin: 0;\n}\n@media (min-width: 400px) {\n  body > header .Heading .Tagline {\n    font-size: 0.75rem;\n  }\n}\n@media (min-width: 520px) {\n  body > header .Heading .Tagline {\n    font-size: 0.8rem;\n  }\n}\nbody > header .Heading.Focused, body > header .Heading.Focused * {\n  background: #ff4d4d;\n  color: #23282d;\n}\nbody > header #Navigation {\n  font-family: Special Elite, monospace;\n  font-weight: bold;\n  position: relative;\n  text-align: right;\n}\nbody > header #Navigation .ToggleButton {\n  appearance: none;\n  background: inherit;\n  border: 0;\n  color: #ff4d4d;\n  cursor: pointer;\n  fill: #ff4d4d;\n  font-family: Special Elite, monospace;\n  font-size: 0.8rem;\n  margin: 0;\n  min-width: 44px;\n  min-height: 44px;\n  padding: 0;\n}\nbody > header #Navigation .ToggleButton .Icon {\n  background-color: inherit;\n  color: inherit;\n  fill: inherit;\n}\nbody > header #Navigation .ToggleButton:focus {\n  outline: 0;\n  background: #ff4d4d;\n  color: #23282d;\n  fill: #23282d;\n}\nbody > header #Navigation #NavigationToggleClose {\n  display: none;\n}\nbody > header #Navigation .ToggleArea {\n  background: #ff4d4d;\n  color: #23282d;\n  fill: #23282d;\n  position: absolute;\n  top: 44px;\n  right: 0;\n  z-index: 99999;\n  text-align: left;\n  width: 292px;\n}\nbody > header #Navigation .ToggleArea ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\nbody > header #Navigation .ToggleArea a {\n  align-items: center;\n  background: inherit;\n  color: inherit;\n  display: flex;\n  min-height: 44px;\n  padding: 0 0.5rem;\n  text-decoration: none;\n}\nbody > header #Navigation .ToggleArea a:focus {\n  background: #ff4d4d;\n  color: #23282d;\n  outline: 0;\n}\nbody > footer {\n  margin: 3rem auto 0;\n  max-width: 36rem;\n  padding: 0 1rem 1rem;\n  text-align: left;\n}\nbody > footer .Menu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\nbody > footer .Menu li {\n  display: inline-block;\n}\nbody > footer .Menu li:before {\n  color: #ddd;\n  content: \"✪ \";\n}\nbody > footer .Menu li:first-child:before {\n  content: \"\";\n}\nbody > footer .Menu a {\n  display: inline-block;\n  margin-right: 0.5rem;\n  text-decoration: none;\n  white-space: pre-wrap;\n}\n@media (min-width: 520px) {\n  body > footer {\n    text-align: center;\n  }\n}\n\n/* ######################################################################### */\n/* # HTTP Error Screens                                                      */\n/* ######################################################################### */\nbody.error404 {\n  text-align: center;\n}\nbody.error404 > main {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\nbody.error404 > main > div {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\nbody.error404 h1 {\n  font-size: 15vw;\n  line-height: 0.7;\n  margin: 0;\n}\nbody.error404 p {\n  margin: 0;\n  white-space: pre;\n}\n\n#Signature404 .Bling {\n  font-weight: bold;\n}\n\n/* ######################################################################### */\n/* # Text Feeds                                                              */\n/* ######################################################################### */\n.TextFeed {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.TextFeedHead {\n  display: flex;\n  align-items: baseline;\n}\n.TextFeedHead .Headline {\n  align-self: flex-start;\n  font-size: 1.5rem;\n  flex-grow: 1;\n  margin: 0;\n}\n.TextFeedHead .Status {\n  align-self: flex-end;\n  font-size: 0.8rem;\n  margin: 0rem;\n  padding-bottom: 0.25rem;\n  text-align: right;\n}\n.TextFeedHead .Status:focus {\n  outline: none;\n}\n.TextFeedBody {\n  margin: 0 0 2rem;\n  padding: 0;\n}\n.TextFeedBody .SearchResult .Title {\n  font-family: Hepta Slab, monospace;\n  font-size: 1.2rem;\n  font-weight: 700;\n  line-height: 1.5;\n  margin-bottom: 0;\n}\n.TextFeedBody .SearchResult .Title a {\n  text-decoration: none;\n}\n.TextFeedBody .SearchResult .Excerpt > :first-child {\n  margin-top: 0;\n}\n.TextFeedBody .SearchResult .Excerpt > :last-child {\n  margin-bottom: 0;\n}\n.TextFeedArticle {\n  /* Structure. */\n  display: grid;\n  grid-gap: 0;\n  grid-template-columns: repeat(36, 1fr);\n  /* Style */\n  border-bottom: 0.125rem solid #ddd;\n  color: #767676;\n  padding: 0.25rem 0;\n}\n.TextFeedArticleDate {\n  grid-column: 1/12;\n  grid-row: 1/1;\n}\n@media (min-width: 400px) {\n  .TextFeedArticleDate {\n    grid-column: 1/9;\n  }\n}\n@media (min-width: 550px) {\n  .TextFeedArticleDate {\n    grid-column: 1/8;\n  }\n}\n.TextFeedArticleIcon {\n  align-self: center;\n  justify-self: center;\n  grid-column: 1/3;\n  grid-row: 2/2;\n}\n@media (min-width: 400px) {\n  .TextFeedArticleIcon {\n    display: flex;\n    grid-column: 9/11;\n    grid-row: 1/1;\n  }\n}\n@media (min-width: 550px) {\n  .TextFeedArticleIcon {\n    grid-column: 8/10;\n  }\n}\n.TextFeedArticleTitle {\n  grid-column: 3/27;\n  grid-row: 2/3;\n}\n@media (min-width: 400px) {\n  .TextFeedArticleTitle {\n    grid-column: 11/30;\n    grid-row: 1/2;\n  }\n}\n@media (min-width: 550px) {\n  .TextFeedArticleTitle {\n    grid-column: 10/31;\n  }\n}\n.TextFeedArticleCategory {\n  grid-column: 27/37;\n  grid-row: 1/3;\n}\n@media (min-width: 400px) {\n  .TextFeedArticleCategory {\n    grid-column: 30/37;\n    grid-row: 1/2;\n  }\n}\n@media (min-width: 550px) {\n  .TextFeedArticleCategory {\n    grid-column: 31/37;\n  }\n}\n.TextFeedArticle a {\n  color: #767676;\n  font-weight: normal;\n  text-decoration: none;\n}\n.TextFeedArticle:first-child {\n  border-top: 0.125rem solid #ddd;\n}\n.TextFeedArticle.Focused, .TextFeedArticle:hover {\n  background-color: #e8f9fc;\n  /* TODO */\n  cursor: pointer;\n}\n.TextFeedArticle.Focused a, .TextFeedArticle:hover a {\n  outline: none;\n}\n.TextFeedArticleDate {\n  display: block;\n}\n.TextFeedArticleDate a {\n  text-decoration: none;\n}\n.TextFeedArticleIcon {\n  line-height: 1;\n}\n.TextFeedArticleIcon svg {\n  fill: #b30000;\n  margin: 0 0.1rem 0 0;\n  height: 0.95rem;\n  width: 0.95rem;\n}\n.TextFeedArticleTitle {\n  font-size: 1rem;\n  word-wrap: break-word;\n  word-break: break-word;\n}\n.TextFeedArticleTitle a {\n  display: block;\n}\n.TextFeedArticleTitle .Bling {\n  font-weight: bold;\n}\n.TextFeedArticleCategory {\n  align-self: top;\n  text-align: right;\n}\n@media (min-width: 400px) {\n  .TextFeedArticleCategory {\n    font-size: 0.8rem;\n  }\n}\n.TextFeedArticleCategory a {\n  background-color: #b30000;\n  color: #fff;\n  display: inline-block;\n  padding: 0 0.3rem;\n}\n.TextFeedFootNavigation {\n  display: flex;\n  justify-content: space-between;\n  list-style: none;\n  margin: 1rem 0;\n  padding: 0;\n}\n.TextFeedFootNavigation li {\n  margin: 0;\n  padding: 0;\n}\n\n/* ######################################################################### */\n/* # Thumbnail Feeds                                                         */\n/* ######################################################################### */\n.ThumbFeed {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.ThumbFeedHead {\n  display: flex;\n  align-items: baseline;\n}\n.ThumbFeedHead .Headline {\n  align-self: flex-start;\n  font-size: 1.5rem;\n  flex-grow: 1;\n  margin: 0;\n}\n.ThumbFeedHead .Status {\n  align-self: flex-end;\n  font-size: 0.8rem;\n  margin: 0rem;\n  padding-bottom: 0.25rem;\n  text-align: right;\n}\n.ThumbFeedHead .Status:focus {\n  outline: none;\n}\n.ThumbFeedBody {\n  border-top: 2px solid #ddd;\n  border-bottom: 2px solid #ddd;\n  list-style: none;\n  margin: 0 0 2rem;\n  padding: 2% 0 0 0;\n}\n.ThumbFeedBody:after {\n  clear: both;\n  content: \"\";\n  display: block;\n}\n.ThumbFeedArticle {\n  border: none;\n  margin: 2% 0;\n}\n.ThumbFeedArticle img {\n  display: block;\n  line-height: 1;\n}\n.ThumbFeedArticle:first-child {\n  margin-top: 0;\n}\n@media (min-width: 330px) {\n  .ThumbFeedArticle {\n    /* 2 Column Grid. */\n    float: left;\n    width: 48%;\n    margin: 0 2% 2% 0;\n    width: 49%;\n  }\n  .ThumbFeedArticle:nth-child(2n) {\n    margin-right: 0;\n  }\n}\n@media (min-width: 600px) {\n  .ThumbFeedArticle {\n    /* 3 Column Grid. */\n    width: 32%;\n  }\n  .ThumbFeedArticle:nth-child(2n) {\n    margin-right: 2%;\n  }\n  .ThumbFeedArticle:nth-child(3n) {\n    margin-right: 0;\n  }\n}\n.ThumbFeedArticleThumbnail {\n  cursor: pointer;\n}\n.ThumbFeedArticleCategory, .ThumbFeedArticleDate, .ThumbFeedArticleIcon, .ThumbFeedArticleTitle {\n  border: 0;\n  clip: rect(1px, 1px, 1px, 1px);\n  clip-path: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute !important;\n  width: 1px;\n  word-wrap: normal !important;\n}\n.ThumbFeedFootNavigation {\n  display: flex;\n  justify-content: space-between;\n  list-style: none;\n  margin: 1rem 0;\n  padding: 0;\n}\n.ThumbFeedFootNavigation li {\n  margin: 0;\n  padding: 0;\n}\n\n/* ######################################################################### */\n/* # Single Articles                                                         */\n/* ######################################################################### */\n#Subheading {\n  font-family: Special Elite, monospace;\n  font-size: 1rem;\n  margin: 0;\n}\n#Subheading .Category, #Subheading .Posted {\n  display: inline-block;\n  padding: 0.25rem 0.25rem 0;\n  line-height: 1;\n}\n#Subheading .Category {\n  background-color: #b30000;\n  color: #fff;\n}\n#Subheading .Posted {\n  background-color: #23282d;\n  color: #fff;\n}\n#Subheading a {\n  text-decoration: none;\n}\n\nbody.single-post .Poem {\n  display: flex;\n  flex-direction: column;\n}\nbody.single-post .Poem #Headline {\n  margin-bottom: 1rem;\n  text-align: center;\n}\nbody.single-post .Poem #Subheading {\n  order: 99998;\n  text-align: center;\n}\nbody.single-post .Poem #Subheading .Posted {\n  background: transparent;\n  color: inherit;\n}\nbody.single-post .Poem .wp-block-verse {\n  margin-top: 0;\n}\nbody.single-post .Poem .TermMenu {\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n  order: 99999;\n  text-align: center;\n}\n\n/* ######################################################################### */\n/* # Copy                                                                    */\n/* ######################################################################### */\nmain:after {\n  clear: both;\n  content: \"\";\n  display: block;\n}\nmain .DateTime {\n  color: #767676;\n  display: block;\n  font-family: Special Elite, monospace;\n  margin-bottom: 0.5rem;\n  text-transform: uppercase;\n}\nmain .Title {\n  margin: 0;\n  position: relative;\n}\nmain .Title .Bling {\n  color: #767676;\n}\nmain .Title + h2 {\n  font-size: 1.4rem;\n  margin-top: 0;\n}\nmain .Title .Icon {\n  fill: #b30000;\n  margin: 0 0.4rem 0 0;\n  height: 1.5rem;\n  width: 1.5rem;\n}\n@media (min-width: 730px) {\n  main .Title .Icon {\n    position: absolute;\n    top: 0;\n    left: -1.7rem;\n  }\n}\n\n.labelMakerText {\n  background-color: #23282d;\n  color: #fff;\n  padding: 0 0.25rem;\n}\n\n/* ######################################################################### */\n/* # Headlines                                                               */\n/* ######################################################################### */\n#Headline {\n  position: relative;\n}\n\n#TermShortname {\n  background-color: #b30000;\n  color: #fff;\n  display: inline-block;\n  font-family: Hepta Slab, monospace;\n  font-size: 0.8rem;\n  line-height: 1.5;\n  padding: 0 0.3rem;\n  position: relative;\n  top: -1rem;\n}\n\n/* ######################################################################### */\n/* # Term Menu                                                               */\n/* ######################################################################### */\n.TermMenu {\n  list-style: none;\n}\n.TermMenuHeading {\n  font-size: 1.5rem;\n  margin: 0;\n}\n.TermMenuList {\n  margin: 0.75rem 0 0;\n  padding: 0;\n}\n.TermMenuList li {\n  display: inline;\n  margin: 0;\n  padding: 0;\n}\n.TermMenuList li a {\n  align-items: center;\n  background-color: #fff;\n  border: 2px solid #fff;\n  border-radius: 0.25rem;\n  color: #767676;\n  cursor: pointer;\n  display: inline-flex;\n  fill: #767676;\n  font-family: Special Elite, monospace;\n  font-size: 1rem;\n  font-weight: 500;\n  justify-content: center;\n  line-height: 1;\n  margin: 0 0.4rem 0.4rem 0;\n  min-height: 44px;\n  min-width: 44px;\n  padding: 0.3rem 0.9rem 0;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  vertical-align: top;\n  -webkit-font-smoothing: auto;\n  border-color: #ddd;\n}\n.TermMenuList li a:active, .TermMenuList li a:focus, .TermMenuList li a:hover {\n  background-color: #ddd;\n  color: #555;\n  fill: #555;\n}\n\n/* ######################################################################### */\n/* # Homepage                                                                */\n/* ######################################################################### */\nbody.home h1, body.home h2, body.home h3 {\n  font-size: 1.5rem;\n}\nbody.home #Welcome {\n  margin-bottom: 1rem;\n}\nbody.home #Welcome #Headline {\n  margin-bottom: 0;\n  text-align: center;\n}\n@media (min-width: 600px) {\n  body.home #Welcome #Headline {\n    text-align: left;\n    text-indent: 150px;\n  }\n}\n\n/**\n * WordPress block content.\n *\n * @since 1.0.0\n */\n.wp-block-button {\n  margin: 1rem 0;\n}\n.wp-block-button .wp-block-button__link {\n  align-items: center;\n  background-color: #23282d;\n  border: 2px solid #23282d;\n  border-radius: 0.25rem;\n  color: #fff;\n  cursor: pointer;\n  display: inline-flex;\n  fill: #fff;\n  font-family: Special Elite, monospace;\n  font-size: 1rem;\n  font-weight: 500;\n  justify-content: center;\n  line-height: 1;\n  margin: 0 0.4rem 0.4rem 0;\n  min-height: 44px;\n  min-width: 44px;\n  padding: 0.3rem 0.9rem 0;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  vertical-align: top;\n  -webkit-font-smoothing: auto;\n}\n.wp-block-button .wp-block-button__link:active, .wp-block-button .wp-block-button__link:focus, .wp-block-button .wp-block-button__link:hover {\n  background-color: #000;\n  color: #ddd;\n  fill: #ddd;\n}\n.wp-block-button.is-style-squared .wp-block-button__link {\n  border-radius: 0;\n}\n.wp-block-button.is-style-outline .wp-block-button__link {\n  align-items: center;\n  background-color: #fff;\n  border: 2px solid #fff;\n  border-radius: 0.25rem;\n  color: #767676;\n  cursor: pointer;\n  display: inline-flex;\n  fill: #767676;\n  font-family: Special Elite, monospace;\n  font-size: 1rem;\n  font-weight: 500;\n  justify-content: center;\n  line-height: 1;\n  margin: 0 0.4rem 0.4rem 0;\n  min-height: 44px;\n  min-width: 44px;\n  padding: 0.3rem 0.9rem 0;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  vertical-align: top;\n  -webkit-font-smoothing: auto;\n  border-color: #ddd;\n}\n.wp-block-button.is-style-outline .wp-block-button__link:active, .wp-block-button.is-style-outline .wp-block-button__link:focus, .wp-block-button.is-style-outline .wp-block-button__link:hover {\n  background-color: #ddd;\n  color: #555;\n  fill: #555;\n}\n\n.wp-block-code {\n  border: 0;\n  overflow: auto;\n  padding: 0;\n}\n.wp-block-code > code {\n  border: 1px solid #ccc;\n  display: block;\n  font-size: 0.8rem;\n  overflow: auto;\n  padding: 1rem;\n}\n.wp-block-code > code:focus {\n  box-shadow: 0 0 0 3px #555;\n  outline: none;\n}\n\n.wp-block-gallery ul {\n  margin: 0;\n  padding: 0;\n}\n.wp-block-gallery .blocks-gallery-item {\n  padding: 0;\n}\n.wp-block-gallery .blocks-gallery-item:before {\n  background: none;\n}\n.wp-block-gallery .blocks-gallery-item__caption {\n  margin: 0;\n}\n\n.wp-block-group.has-background .wp-block-group__inner-container {\n  padding: 1rem;\n}\n.wp-block-group.has-background .wp-block-group__inner-container > :first-child {\n  margin-top: 0;\n}\n.wp-block-group.has-background .wp-block-group__inner-container > :last-child {\n  margin-bottom: 0;\n}\n\n.wp-block-image {\n  margin: 1rem 0;\n}\n.wp-block-image figcaption {\n  margin-top: 0.25rem;\n  margin-bottom: 1rem;\n  color: #555d66;\n  text-align: left;\n  font-size: 1rem;\n}\n.wp-block-image figure {\n  margin: 0.365rem 0 0;\n}\n.wp-block-image figure.alignleft {\n  margin-right: 1rem;\n}\n.wp-block-image figure.alignright {\n  margin-left: 1rem;\n}\n.wp-block-image img {\n  display: block;\n}\n\n.wp-block-media-text .wp-block-media-text__content {\n  padding: 1rem;\n}\n.wp-block-media-text .wp-block-media-text__content > :first-child {\n  margin-top: 0;\n}\n.wp-block-media-text .wp-block-media-text__content > :last-child {\n  margin-bottom: 0;\n}\n.wp-block-media-text .wp-block-media-text__media {\n  padding: 1rem;\n}\n.wp-block-media-text .wp-block-media-text__media > :first-child {\n  margin-top: 0;\n}\n.wp-block-media-text .wp-block-media-text__media > :last-child {\n  margin-bottom: 0;\n}\n\n.wp-block-preformatted {\n  overflow: auto;\n}\n\n.wp-block-pullquote {\n  padding: 1rem 0;\n  border-color: #ddd;\n  border-style: solid;\n  border-width: 0.365rem 0;\n  position: relative;\n}\n.wp-block-pullquote > blockquote {\n  margin: 0;\n}\n.wp-block-pullquote cite {\n  color: #767676;\n  margin-top: 0.25rem;\n}\n.wp-block-pullquote p {\n  line-height: 1.35;\n}\n.wp-block-pullquote p:last-of-type {\n  margin-bottom: 0;\n}\n.wp-block-pullquote.is-style-solid-color {\n  border-width: 0;\n}\n.wp-block-pullquote.is-style-solid-color blockquote cite {\n  color: #767676;\n  font-family: Special Elite, monospace;\n  font-size: 0.8rem;\n  font-style: normal;\n  text-transform: uppercase;\n}\n\n.wp-block-quote {\n  border: 0 solid #ddd;\n  border-left-width: 0.3rem;\n  padding: 0 0 0 1rem;\n}\n.wp-block-quote[style*=\"text-align:right\"] {\n  border-right-width: 0.3rem;\n  border-left-width: 0;\n  padding: 0 1rem 0 0;\n}\n.wp-block-quote.is-style-large {\n  margin: 1.5rem 0;\n}\n.wp-block-quote.is-style-large p {\n  font-family: Hepta Slab, monospace;\n  font-size: 1.5rem;\n  font-style: normal;\n  font-weight: 200;\n  line-height: 1.5;\n}\n.wp-block-quote > p {\n  margin-bottom: 0;\n}\n\n.wp-block-verse {\n  border: none;\n  font-family: Special Elite, monospace;\n  font-size: 1.25rem;\n  text-align: center;\n  white-space: break-spaces;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\nimg.alignleft {\n  float: left;\n  margin-right: 1rem;\n}\n\nimg.alignright {\n  float: right;\n  margin-left: 1rem;\n}\n\nimg.aligncenter {\n  display: block;\n  margin: 1rem auto;\n}\n\nfigure.wp-caption {\n  max-width: 100%;\n  margin: 1rem 0;\n}\n\n.is-style-labelMakerText {\n  background-color: #333;\n  color: #fff;\n  padding: 0 0.25rem;\n}\n\np.has-drop-cap:not(:focus):first-letter {\n  font-size: 2.9em;\n  font-weight: inherit;\n  line-height: 0.95;\n  margin-right: 0.2rem;\n}\n\n.wp-video, video.wp-video-shortcode {\n  width: 100% !important;\n}\n\n/*****************************************************************************/\n/*  Custom Block Styles                                                      */\n/*****************************************************************************/\n.is-style-greater-than {\n  list-style: none;\n  padding: 0;\n}\n.is-style-greater-than:after {\n  clear: both;\n  content: \"\";\n  display: block;\n}\n.is-style-greater-than li {\n  background: #ddd;\n  border-radius: 0.5rem;\n  display: inline-block;\n  font-size: 0;\n  /* Inline-block whitespace hack. Also hides the word \"over\". */\n  margin: 0 0.5rem 0.6rem 0;\n  text-align: center;\n}\n.is-style-greater-than li:before {\n  display: none;\n}\n.is-style-greater-than li > * {\n  display: inline-block;\n  font-size: 1rem;\n  /* Inline-block whitespace hack. */\n  padding: 0.25rem 0.5rem 0.2rem 0.5rem;\n}\n.is-style-greater-than li > a {\n  text-decoration: none;\n}\n.is-style-greater-than li > a:first-of-type {\n  background: #555;\n  border-radius: 0.5rem 0 0 0.5rem;\n  color: #ddd;\n}\n.is-style-greater-than li > a:last-of-type {\n  background: #ddd;\n  border-radius: 0 0.5rem 0.5rem 0;\n  color: #555;\n}\n.is-style-greater-than li > span {\n  border: 0;\n  clip: rect(1px, 1px, 1px, 1px);\n  clip-path: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute !important;\n  width: 1px;\n  word-wrap: normal !important;\n  margin: 0;\n}\n\n.is-style-star-points {\n  list-style: none;\n  padding: 0 0 0 1.5rem;\n}\n.is-style-star-points li {\n  margin: 0.25rem 0;\n  position: relative;\n}\n.is-style-star-points li:before {\n  color: #b30000;\n  content: \"✪\";\n  display: inline-block;\n  font-size: 1.15rem;\n  line-height: 1;\n  position: absolute;\n  top: 0.2rem;\n  left: -1.5rem;\n  text-align: center;\n  width: 1.15rem;\n  height: 1.15rem;\n}\n.is-style-star-points li ul {\n  list-style: none;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.is-style-star-points li li:before {\n  color: #555;\n}\n\n/*****************************************************************************/\n/*  Prismatic Plugin                                                         */\n/*****************************************************************************/\ndiv.code-toolbar > div.toolbar {\n  top: 0;\n  right: 0;\n  opacity: 1;\n}\ndiv.code-toolbar > div.toolbar .toolbar-item span {\n  background-color: #ff4d4d;\n  border-radius: 0;\n  color: #23282d;\n  font-weight: bold;\n  padding: 0.5rem;\n}\n\n.wp-block-prismatic-blocks {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n.wp-block-prismatic-blocks code {\n  font-size: 0.7rem;\n}\n\nhtml {\n  box-sizing: border-box;\n  overflow-y: scroll;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.Copy {\n  margin: 0;\n}\n.Copy > :first-child {\n  margin-top: 0;\n}\n.Copy > :last-child {\n  margin-bottom: 0;\n}\n.Copy img {\n  height: auto;\n  max-width: 100%;\n}\n.Copy > :first-child {\n  margin-top: 0;\n}\n.Copy > :last-child {\n  margin-bottom: 0;\n}\n.Copy:after {\n  clear: both;\n  content: \"\";\n  display: block;\n}\n\n.Menu ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n@media (min-width: 520px) {\n  .Menu ul {\n    display: flex;\n    align-items: baseline;\n  }\n}\n.Menu li {\n  display: block;\n}\n.Menu a {\n  display: block;\n  margin-right: 0.5rem;\n  text-decoration: none;\n  white-space: pre-wrap;\n}\n\n.Active {\n  background: #ccc;\n}\n\na {\n  color: #555;\n}\n\npre,\n.wp-caption {\n  max-width: 100%;\n}\n\n.wp-caption img[class*=wp-image-] {\n  display: block;\n}\n\n#Sidebar {\n  background: pink;\n  position: fixed;\n}\n@media (min-width: 450px) {\n  #Sidebar {\n    background: lightblue;\n    color: green;\n  }\n}\n\n/*\n@use 'css/normalize.css';\n@use 'css/base.scss';\n*/", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;