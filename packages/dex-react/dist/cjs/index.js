"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t,r=e(require("react")),n={exports:{}},o={};var a,i,u={};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function c(){return a||(a=1,"production"!==process.env.NODE_ENV&&function(){var e=r.default,t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen"),v=Symbol.iterator;var g=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function b(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];h("error",e,r)}function h(e,t,r){var n=g.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(t+="%s",r=r.concat([n]));var o=r.map((function(e){return String(e)}));o.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,o)}var _;function x(e){return e.displayName||"Context"}function w(e){if(null==e)return null;if("number"==typeof e.tag&&b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case o:return"Fragment";case n:return"Portal";case i:return"Profiler";case a:return"StrictMode";case f:return"Suspense";case p:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case s:return x(e)+".Consumer";case c:return x(e._context)+".Provider";case l:return function(e,t,r){var n=e.displayName;if(n)return n;var o=t.displayName||t.name||"";return""!==o?r+"("+o+")":r}(e,e.render,"ForwardRef");case d:var t=e.displayName||null;return null!==t?t:w(e.type)||"Memo";case y:var r=e,u=r._payload,m=r._init;try{return w(m(u))}catch(e){return null}}return null}_=Symbol.for("react.module.reference");var k,S,D,O,j,R,E,B=Object.assign,P=0;function T(){}T.__reactDisabledLog=!0;var N,C=g.ReactCurrentDispatcher;function $(e,t,r){if(void 0===N)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);N=n&&n[1]||""}return"\n"+N+e}var F,I=!1,z="function"==typeof WeakMap?WeakMap:Map;function A(e,t){if(!e||I)return"";var r,n=F.get(e);if(void 0!==n)return n;I=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=C.current,C.current=null,function(){if(0===P){k=console.log,S=console.info,D=console.warn,O=console.error,j=console.group,R=console.groupCollapsed,E=console.groupEnd;var e={configurable:!0,enumerable:!0,value:T,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}P++}();try{if(t){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(i,[])}catch(e){r=e}Reflect.construct(e,[],i)}else{try{i.call()}catch(e){r=e}e.call(i.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var u=t.stack.split("\n"),c=r.stack.split("\n"),s=u.length-1,l=c.length-1;s>=1&&l>=0&&u[s]!==c[l];)l--;for(;s>=1&&l>=0;s--,l--)if(u[s]!==c[l]){if(1!==s||1!==l)do{if(s--,--l<0||u[s]!==c[l]){var f="\n"+u[s].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&F.set(e,f),f}}while(s>=1&&l>=0);break}}}finally{I=!1,C.current=o,function(){if(0==--P){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:B({},e,{value:k}),info:B({},e,{value:S}),warn:B({},e,{value:D}),error:B({},e,{value:O}),group:B({},e,{value:j}),groupCollapsed:B({},e,{value:R}),groupEnd:B({},e,{value:E})})}P<0&&b("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",d=p?$(p):"";return"function"==typeof e&&F.set(e,d),d}function L(e,t,r){if(null==e)return"";if("function"==typeof e)return A(e,!(!(n=e.prototype)||!n.isReactComponent));var n;if("string"==typeof e)return $(e);switch(e){case f:return $("Suspense");case p:return $("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case l:return A(e.render,!1);case d:return L(e.type,t,r);case y:var o=e,a=o._payload,i=o._init;try{return L(i(a),t,r)}catch(e){}}return""}F=new z;var W=Object.prototype.hasOwnProperty,U={},M=g.ReactDebugCurrentFrame;function Y(e){if(e){var t=e._owner,r=L(e.type,e._source,t?t.type:null);M.setExtraStackFrame(r)}else M.setExtraStackFrame(null)}var V=Array.isArray;function q(e){return V(e)}function G(e){return""+e}function Q(e){if(function(e){try{return G(e),!1}catch(e){return!0}}(e))return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),G(e)}var Z,H,J,X=g.ReactCurrentOwner,K={key:!0,ref:!0,__self:!0,__source:!0};J={};function ee(e,r,n,o,a){var i,u={},c=null,s=null;for(i in void 0!==n&&(Q(n),c=""+n),function(e){if(W.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}(r)&&(Q(r.key),c=""+r.key),function(e){if(W.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}(r)&&(s=r.ref,function(e,t){if("string"==typeof e.ref&&X.current&&t&&X.current.stateNode!==t){var r=w(X.current.type);J[r]||(b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',w(X.current.type),e.ref),J[r]=!0)}}(r,a)),r)W.call(r,i)&&!K.hasOwnProperty(i)&&(u[i]=r[i]);if(e&&e.defaultProps){var l=e.defaultProps;for(i in l)void 0===u[i]&&(u[i]=l[i])}if(c||s){var f="function"==typeof e?e.displayName||e.name||"Unknown":e;c&&function(e,t){var r=function(){Z||(Z=!0,b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}(u,f),s&&function(e,t){var r=function(){H||(H=!0,b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}(u,f)}return function(e,r,n,o,a,i,u){var c={$$typeof:t,type:e,key:r,ref:n,props:u,_owner:i,_store:{}};return Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c}(e,c,s,a,o,X.current,u)}var te,re=g.ReactCurrentOwner,ne=g.ReactDebugCurrentFrame;function oe(e){if(e){var t=e._owner,r=L(e.type,e._source,t?t.type:null);ne.setExtraStackFrame(r)}else ne.setExtraStackFrame(null)}function ae(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}function ie(){if(re.current){var e=w(re.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}te=!1;var ue={};function ce(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=ie();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!ue[r]){ue[r]=!0;var n="";e&&e._owner&&e._owner!==re.current&&(n=" It was passed a child from "+w(e._owner.type)+"."),oe(e),b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,n),oe(null)}}}function se(e,t){if("object"==typeof e)if(q(e))for(var r=0;r<e.length;r++){var n=e[r];ae(n)&&ce(n,t)}else if(ae(e))e._store&&(e._store.validated=!0);else if(e){var o=function(e){if(null===e||"object"!=typeof e)return null;var t=v&&e[v]||e["@@iterator"];return"function"==typeof t?t:null}(e);if("function"==typeof o&&o!==e.entries)for(var a,i=o.call(e);!(a=i.next()).done;)ae(a.value)&&ce(a.value,t)}}function le(e){var t,r=e.type;if(null!=r&&"string"!=typeof r){if("function"==typeof r)t=r.propTypes;else{if("object"!=typeof r||r.$$typeof!==l&&r.$$typeof!==d)return;t=r.propTypes}if(t){var n=w(r);!function(e,t,r,n,o){var a=Function.call.bind(W);for(var i in e)if(a(e,i)){var u=void 0;try{if("function"!=typeof e[i]){var c=Error((n||"React class")+": "+r+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}u=e[i](t,i,n,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){u=e}!u||u instanceof Error||(Y(o),b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",r,i,typeof u),Y(null)),u instanceof Error&&!(u.message in U)&&(U[u.message]=!0,Y(o),b("Failed %s type: %s",r,u.message),Y(null))}}(t,e.props,"prop",n,e)}else if(void 0!==r.PropTypes&&!te){te=!0,b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",w(r)||"Unknown")}"function"!=typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function fe(e,r,n,u,v,g){var h=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===i||e===a||e===f||e===p||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===d||e.$$typeof===c||e.$$typeof===s||e.$$typeof===l||e.$$typeof===_||void 0!==e.getModuleId)}(e);if(!h){var x="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(x+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var k,S=function(e){return void 0!==e?"\n\nCheck your code at "+e.fileName.replace(/^.*[\\\/]/,"")+":"+e.lineNumber+".":""}(v);x+=S||ie(),null===e?k="null":q(e)?k="array":void 0!==e&&e.$$typeof===t?(k="<"+(w(e.type)||"Unknown")+" />",x=" Did you accidentally export a JSX literal instead of a component?"):k=typeof e,b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",k,x)}var D=ee(e,r,n,v,g);if(null==D)return D;if(h){var O=r.children;if(void 0!==O)if(u)if(q(O)){for(var j=0;j<O.length;j++)se(O[j],e);Object.freeze&&Object.freeze(O)}else b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else se(O,e)}return e===o?function(e){for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){oe(e),b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),oe(null);break}}null!==e.ref&&(oe(e),b("Invalid attribute `ref` supplied to `React.Fragment`."),oe(null))}(D):le(D),D}var pe=function(e,t,r){return fe(e,t,r,!1)},de=function(e,t,r){return fe(e,t,r,!0)};u.Fragment=o,u.jsx=pe,u.jsxs=de}()),u}i=n,"production"===process.env.NODE_ENV?i.exports=function(){if(t)return o;t=1;var e=r.default,n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,u=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var o,a={},s=null,l=null;for(o in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,o)&&!c.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:n,type:e,key:s,ref:l,props:a,_owner:u.current}}return o.Fragment=a,o.jsx=s,o.jsxs=s,o}():i.exports=c();var s={exports:{}};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(e){!function(){var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)){if(o.length){var i=r.apply(null,o);i&&e.push(i)}}else if("object"===a)if(o.toString===Object.prototype.toString)for(var u in o)t.call(o,u)&&o[u]&&e.push(u);else e.push(o.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()}(s);var l=s.exports;var f={DexButton:"DexButton-module_DexButton__0cu-G","DexButton--secondary":"DexButton-module_DexButton--secondary__SBnr7","DexButton--plain":"DexButton-module_DexButton--plain__t6AZt","DexButton--small":"DexButton-module_DexButton--small__R533R","DexButton--medium":"DexButton-module_DexButton--medium__0Ezan","DexButton--large":"DexButton-module_DexButton--large__4Doxc"};function p(e){return n.exports.jsx("button",Object.assign({className:l(f.Button)},{children:e.children}))}!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("/**\n * Variables\n */ /**\n * Media Queries for Sized\n *\n * @include respond-to('md') {}\n * @include respond-to('lg') {}\n *\n */\n/**\n * Media Queries for Features\n *\n * @include feature-to('hover') {}\n *\n */\n/**\n * Input Placeholder\n *\n * @include input-placeholder() {}\n *\n */\n/**\n * Button reset\n *\n * @include button-reset;\n *\n */\n:root {\n  --button-background-color: blue;\n}\n\n:root body.dark {\n  --button-background-color: red;\n}\n\n.DexButton-module_DexButton__0cu-G {\n  all: revert;\n  -webkit-appearance: none;\n  font-size: 1.125rem;\n  font-weight: 400;\n  font-style: normal;\n  min-width: 5rem;\n  min-height: 2.5rem;\n  margin: 0;\n  padding: 0 1rem;\n  cursor: pointer;\n  text-align: center;\n  white-space: nowrap;\n  color: inherit;\n  color: #fff;\n  border: none;\n  border-radius: 0;\n  background: var(--button-background-color);\n  box-shadow: none;\n}\n\n.DexButton-module_DexButton--secondary__SBnr7 {\n  background: #ebeced;\n  color: #121f26;\n}\n\n.DexButton-module_DexButton--plain__t6AZt {\n  background: transparent;\n  color: #005eb8;\n}\n\n.DexButton-module_DexButton--small__R533R {\n  font-size: 1rem;\n  min-width: 4.5rem;\n  min-height: 1.75rem;\n}\n\n.DexButton-module_DexButton--medium__0Ezan {\n  font-size: 1rem;\n  min-width: 4.5rem;\n  min-height: 1.75rem;\n}\n\n.DexButton-module_DexButton--large__4Doxc {\n  font-size: 1rem;\n  min-width: 4.5rem;\n  min-height: 1.75rem;\n}"),p.displayName="DexButton",exports.DexButton=p;
//# sourceMappingURL=index.js.map
