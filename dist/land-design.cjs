"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const X=require("react");var H={exports:{}},A={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Te;function sr(){if(Te)return A;Te=1;var c=X,d=Symbol.for("react.element"),v=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,m=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function T(O,p,w){var y,E={},C=null,$=null;w!==void 0&&(C=""+w),p.key!==void 0&&(C=""+p.key),p.ref!==void 0&&($=p.ref);for(y in p)s.call(p,y)&&!P.hasOwnProperty(y)&&(E[y]=p[y]);if(O&&O.defaultProps)for(y in p=O.defaultProps,p)E[y]===void 0&&(E[y]=p[y]);return{$$typeof:d,type:O,key:C,ref:$,props:E,_owner:m.current}}return A.Fragment=v,A.jsx=T,A.jsxs=T,A}var I={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe;function fr(){return Oe||(Oe=1,process.env.NODE_ENV!=="production"&&function(){var c=X,d=Symbol.for("react.element"),v=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),O=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),Z=Symbol.iterator,Pe="@@iterator";function we(e){if(e===null||typeof e!="object")return null;var r=Z&&e[Z]||e[Pe];return typeof r=="function"?r:null}var j=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function g(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];je("error",e,t)}}function je(e,r,t){{var n=j.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var xe=!1,ke=!1,De=!1,Fe=!1,Ae=!1,Q;Q=Symbol.for("react.module.reference");function Ie(e){return!!(typeof e=="string"||typeof e=="function"||e===s||e===P||Ae||e===m||e===w||e===y||Fe||e===$||xe||ke||De||typeof e=="object"&&e!==null&&(e.$$typeof===C||e.$$typeof===E||e.$$typeof===T||e.$$typeof===O||e.$$typeof===p||e.$$typeof===Q||e.getModuleId!==void 0))}function $e(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function ee(e){return e.displayName||"Context"}function R(e){if(e==null)return null;if(typeof e.tag=="number"&&g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case s:return"Fragment";case v:return"Portal";case P:return"Profiler";case m:return"StrictMode";case w:return"Suspense";case y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case O:var r=e;return ee(r)+".Consumer";case T:var t=e;return ee(t._context)+".Provider";case p:return $e(e,e.render,"ForwardRef");case E:var n=e.displayName||null;return n!==null?n:R(e.type)||"Memo";case C:{var i=e,u=i._payload,o=i._init;try{return R(o(u))}catch{return null}}}return null}var S=Object.assign,D=0,re,te,ne,ae,oe,ie,ue;function se(){}se.__reactDisabledLog=!0;function We(){{if(D===0){re=console.log,te=console.info,ne=console.warn,ae=console.error,oe=console.group,ie=console.groupCollapsed,ue=console.groupEnd;var e={configurable:!0,enumerable:!0,value:se,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}D++}}function Ye(){{if(D--,D===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:S({},e,{value:re}),info:S({},e,{value:te}),warn:S({},e,{value:ne}),error:S({},e,{value:ae}),group:S({},e,{value:oe}),groupCollapsed:S({},e,{value:ie}),groupEnd:S({},e,{value:ue})})}D<0&&g("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var V=j.ReactCurrentDispatcher,U;function W(e,r,t){{if(U===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);U=n&&n[1]||""}return`
`+U+e}}var B=!1,Y;{var Ne=typeof WeakMap=="function"?WeakMap:Map;Y=new Ne}function fe(e,r){if(!e||B)return"";{var t=Y.get(e);if(t!==void 0)return t}var n;B=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=V.current,V.current=null,We();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(_){n=_}Reflect.construct(e,[],o)}else{try{o.call()}catch(_){n=_}e.call(o.prototype)}}else{try{throw Error()}catch(_){n=_}e()}}catch(_){if(_&&n&&typeof _.stack=="string"){for(var a=_.stack.split(`
`),b=n.stack.split(`
`),f=a.length-1,l=b.length-1;f>=1&&l>=0&&a[f]!==b[l];)l--;for(;f>=1&&l>=0;f--,l--)if(a[f]!==b[l]){if(f!==1||l!==1)do if(f--,l--,l<0||a[f]!==b[l]){var h=`
`+a[f].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),typeof e=="function"&&Y.set(e,h),h}while(f>=1&&l>=0);break}}}finally{B=!1,V.current=u,Ye(),Error.prepareStackTrace=i}var k=e?e.displayName||e.name:"",_e=k?W(k):"";return typeof e=="function"&&Y.set(e,_e),_e}function Le(e,r,t){return fe(e,!1)}function Me(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function N(e,r,t){if(e==null)return"";if(typeof e=="function")return fe(e,Me(e));if(typeof e=="string")return W(e);switch(e){case w:return W("Suspense");case y:return W("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case p:return Le(e.render);case E:return N(e.type,r,t);case C:{var n=e,i=n._payload,u=n._init;try{return N(u(i),r,t)}catch{}}}return""}var L=Object.prototype.hasOwnProperty,le={},ce=j.ReactDebugCurrentFrame;function M(e){if(e){var r=e._owner,t=N(e.type,e._source,r?r.type:null);ce.setExtraStackFrame(t)}else ce.setExtraStackFrame(null)}function Ve(e,r,t,n,i){{var u=Function.call.bind(L);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var b=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw b.name="Invariant Violation",b}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(f){a=f}a&&!(a instanceof Error)&&(M(i),g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),M(null)),a instanceof Error&&!(a.message in le)&&(le[a.message]=!0,M(i),g("Failed %s type: %s",t,a.message),M(null))}}}var Ue=Array.isArray;function q(e){return Ue(e)}function Be(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function qe(e){try{return de(e),!1}catch{return!0}}function de(e){return""+e}function ve(e){if(qe(e))return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Be(e)),de(e)}var F=j.ReactCurrentOwner,Je={key:!0,ref:!0,__self:!0,__source:!0},pe,ge,J;J={};function Ge(e){if(L.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function ze(e){if(L.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Ke(e,r){if(typeof e.ref=="string"&&F.current&&r&&F.current.stateNode!==r){var t=R(F.current.type);J[t]||(g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',R(F.current.type),e.ref),J[t]=!0)}}function He(e,r){{var t=function(){pe||(pe=!0,g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function Xe(e,r){{var t=function(){ge||(ge=!0,g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var Ze=function(e,r,t,n,i,u,o){var a={$$typeof:d,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function Qe(e,r,t,n,i){{var u,o={},a=null,b=null;t!==void 0&&(ve(t),a=""+t),ze(r)&&(ve(r.key),a=""+r.key),Ge(r)&&(b=r.ref,Ke(r,i));for(u in r)L.call(r,u)&&!Je.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var f=e.defaultProps;for(u in f)o[u]===void 0&&(o[u]=f[u])}if(a||b){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&He(o,l),b&&Xe(o,l)}return Ze(e,a,b,i,n,F.current,o)}}var G=j.ReactCurrentOwner,be=j.ReactDebugCurrentFrame;function x(e){if(e){var r=e._owner,t=N(e.type,e._source,r?r.type:null);be.setExtraStackFrame(t)}else be.setExtraStackFrame(null)}var z;z=!1;function K(e){return typeof e=="object"&&e!==null&&e.$$typeof===d}function ye(){{if(G.current){var e=R(G.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function er(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var he={};function rr(e){{var r=ye();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function me(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=rr(r);if(he[t])return;he[t]=!0;var n="";e&&e._owner&&e._owner!==G.current&&(n=" It was passed a child from "+R(e._owner.type)+"."),x(e),g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),x(null)}}function Ee(e,r){{if(typeof e!="object")return;if(q(e))for(var t=0;t<e.length;t++){var n=e[t];K(n)&&me(n,r)}else if(K(e))e._store&&(e._store.validated=!0);else if(e){var i=we(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)K(o.value)&&me(o.value,r)}}}function tr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===p||r.$$typeof===E))t=r.propTypes;else return;if(t){var n=R(r);Ve(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!z){z=!0;var i=R(r);g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function nr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){x(e),g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),x(null);break}}e.ref!==null&&(x(e),g("Invalid attribute `ref` supplied to `React.Fragment`."),x(null))}}function Re(e,r,t,n,i,u){{var o=Ie(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var b=er(i);b?a+=b:a+=ye();var f;e===null?f="null":q(e)?f="array":e!==void 0&&e.$$typeof===d?(f="<"+(R(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):f=typeof e,g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",f,a)}var l=Qe(e,r,t,i,u);if(l==null)return l;if(o){var h=r.children;if(h!==void 0)if(n)if(q(h)){for(var k=0;k<h.length;k++)Ee(h[k],e);Object.freeze&&Object.freeze(h)}else g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ee(h,e)}return e===s?nr(l):tr(l),l}}function ar(e,r,t){return Re(e,r,t,!0)}function or(e,r,t){return Re(e,r,t,!1)}var ir=or,ur=ar;I.Fragment=s,I.jsx=ir,I.jsxs=ur}()),I}process.env.NODE_ENV==="production"?H.exports=sr():H.exports=fr();var lr=H.exports;function Ce(c){var d,v,s="";if(typeof c=="string"||typeof c=="number")s+=c;else if(typeof c=="object")if(Array.isArray(c)){var m=c.length;for(d=0;d<m;d++)c[d]&&(v=Ce(c[d]))&&(s&&(s+=" "),s+=v)}else for(v in c)c[v]&&(s&&(s+=" "),s+=v);return s}function cr(){for(var c,d,v=0,s="",m=arguments.length;v<m;v++)(c=arguments[v])&&(d=Ce(c))&&(s&&(s+=" "),s+=d);return s}const dr=(c,d)=>{const{className:v,style:s,children:m,color:P,...T}=c;return lr.jsxs("div",{ref:d,style:s,...T,className:cr(v,"s-button",`s-button-${P}`),children:[m,"Land Design Button Bingo!"]})},Se=X.forwardRef(dr);Se.displayName="Button";exports.Button=Se;
