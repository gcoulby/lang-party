(function(){const T=document.createElement("link").relList;if(T&&T.supports&&T.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))D(h);new MutationObserver(h=>{for(const C of h)if(C.type==="childList")for(const W of C.addedNodes)W.tagName==="LINK"&&W.rel==="modulepreload"&&D(W)}).observe(document,{childList:!0,subtree:!0});function p(h){const C={};return h.integrity&&(C.integrity=h.integrity),h.referrerPolicy&&(C.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?C.credentials="include":h.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function D(h){if(h.ep)return;h.ep=!0;const C=p(h);fetch(h.href,C)}})();var Li={exports:{}},Cr={},Ii={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu;function Vd(){if(Lu)return J;Lu=1;var c=Symbol.for("react.element"),T=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),W=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),U=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),re=Symbol.iterator;function ee(d){return d===null||typeof d!="object"?null:(d=re&&d[re]||d["@@iterator"],typeof d=="function"?d:null)}var Ae={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Le=Object.assign,Y={};function I(d,w,B){this.props=d,this.context=w,this.refs=Y,this.updater=B||Ae}I.prototype.isReactComponent={},I.prototype.setState=function(d,w){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,w,"setState")},I.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function Z(){}Z.prototype=I.prototype;function ce(d,w,B){this.props=d,this.context=w,this.refs=Y,this.updater=B||Ae}var Je=ce.prototype=new Z;Je.constructor=ce,Le(Je,I.prototype),Je.isPureReactComponent=!0;var ve=Array.isArray,nt=Object.prototype.hasOwnProperty,Pe={current:null},Ie={key:!0,ref:!0,__self:!0,__source:!0};function Ke(d,w,B){var V,$={},G=null,te=null;if(w!=null)for(V in w.ref!==void 0&&(te=w.ref),w.key!==void 0&&(G=""+w.key),w)nt.call(w,V)&&!Ie.hasOwnProperty(V)&&($[V]=w[V]);var K=arguments.length-2;if(K===1)$.children=B;else if(1<K){for(var ie=Array(K),We=0;We<K;We++)ie[We]=arguments[We+2];$.children=ie}if(d&&d.defaultProps)for(V in K=d.defaultProps,K)$[V]===void 0&&($[V]=K[V]);return{$$typeof:c,type:d,key:G,ref:te,props:$,_owner:Pe.current}}function Pt(d,w){return{$$typeof:c,type:d.type,key:w,ref:d.ref,props:d.props,_owner:d._owner}}function St(d){return typeof d=="object"&&d!==null&&d.$$typeof===c}function Kt(d){var w={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(B){return w[B]})}var dt=/\/+/g;function Ve(d,w){return typeof d=="object"&&d!==null&&d.key!=null?Kt(""+d.key):w.toString(36)}function rt(d,w,B,V,$){var G=typeof d;(G==="undefined"||G==="boolean")&&(d=null);var te=!1;if(d===null)te=!0;else switch(G){case"string":case"number":te=!0;break;case"object":switch(d.$$typeof){case c:case T:te=!0}}if(te)return te=d,$=$(te),d=V===""?"."+Ve(te,0):V,ve($)?(B="",d!=null&&(B=d.replace(dt,"$&/")+"/"),rt($,w,B,"",function(We){return We})):$!=null&&(St($)&&($=Pt($,B+(!$.key||te&&te.key===$.key?"":(""+$.key).replace(dt,"$&/")+"/")+d)),w.push($)),1;if(te=0,V=V===""?".":V+":",ve(d))for(var K=0;K<d.length;K++){G=d[K];var ie=V+Ve(G,K);te+=rt(G,w,B,ie,$)}else if(ie=ee(d),typeof ie=="function")for(d=ie.call(d),K=0;!(G=d.next()).done;)G=G.value,ie=V+Ve(G,K++),te+=rt(G,w,B,ie,$);else if(G==="object")throw w=String(d),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.");return te}function ft(d,w,B){if(d==null)return d;var V=[],$=0;return rt(d,V,"","",function(G){return w.call(B,G,$++)}),V}function ze(d){if(d._status===-1){var w=d._result;w=w(),w.then(function(B){(d._status===0||d._status===-1)&&(d._status=1,d._result=B)},function(B){(d._status===0||d._status===-1)&&(d._status=2,d._result=B)}),d._status===-1&&(d._status=0,d._result=w)}if(d._status===1)return d._result.default;throw d._result}var de={current:null},N={transition:null},M={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:N,ReactCurrentOwner:Pe};function P(){throw Error("act(...) is not supported in production builds of React.")}return J.Children={map:ft,forEach:function(d,w,B){ft(d,function(){w.apply(this,arguments)},B)},count:function(d){var w=0;return ft(d,function(){w++}),w},toArray:function(d){return ft(d,function(w){return w})||[]},only:function(d){if(!St(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},J.Component=I,J.Fragment=p,J.Profiler=h,J.PureComponent=ce,J.StrictMode=D,J.Suspense=R,J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,J.act=P,J.cloneElement=function(d,w,B){if(d==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+d+".");var V=Le({},d.props),$=d.key,G=d.ref,te=d._owner;if(w!=null){if(w.ref!==void 0&&(G=w.ref,te=Pe.current),w.key!==void 0&&($=""+w.key),d.type&&d.type.defaultProps)var K=d.type.defaultProps;for(ie in w)nt.call(w,ie)&&!Ie.hasOwnProperty(ie)&&(V[ie]=w[ie]===void 0&&K!==void 0?K[ie]:w[ie])}var ie=arguments.length-2;if(ie===1)V.children=B;else if(1<ie){K=Array(ie);for(var We=0;We<ie;We++)K[We]=arguments[We+2];V.children=K}return{$$typeof:c,type:d.type,key:$,ref:G,props:V,_owner:te}},J.createContext=function(d){return d={$$typeof:W,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},d.Provider={$$typeof:C,_context:d},d.Consumer=d},J.createElement=Ke,J.createFactory=function(d){var w=Ke.bind(null,d);return w.type=d,w},J.createRef=function(){return{current:null}},J.forwardRef=function(d){return{$$typeof:v,render:d}},J.isValidElement=St,J.lazy=function(d){return{$$typeof:X,_payload:{_status:-1,_result:d},_init:ze}},J.memo=function(d,w){return{$$typeof:U,type:d,compare:w===void 0?null:w}},J.startTransition=function(d){var w=N.transition;N.transition={};try{d()}finally{N.transition=w}},J.unstable_act=P,J.useCallback=function(d,w){return de.current.useCallback(d,w)},J.useContext=function(d){return de.current.useContext(d)},J.useDebugValue=function(){},J.useDeferredValue=function(d){return de.current.useDeferredValue(d)},J.useEffect=function(d,w){return de.current.useEffect(d,w)},J.useId=function(){return de.current.useId()},J.useImperativeHandle=function(d,w,B){return de.current.useImperativeHandle(d,w,B)},J.useInsertionEffect=function(d,w){return de.current.useInsertionEffect(d,w)},J.useLayoutEffect=function(d,w){return de.current.useLayoutEffect(d,w)},J.useMemo=function(d,w){return de.current.useMemo(d,w)},J.useReducer=function(d,w,B){return de.current.useReducer(d,w,B)},J.useRef=function(d){return de.current.useRef(d)},J.useState=function(d){return de.current.useState(d)},J.useSyncExternalStore=function(d,w,B){return de.current.useSyncExternalStore(d,w,B)},J.useTransition=function(){return de.current.useTransition()},J.version="18.3.1",J}var Iu;function Mi(){return Iu||(Iu=1,Ii.exports=Vd()),Ii.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zu;function Wd(){if(zu)return Cr;zu=1;var c=Mi(),T=Symbol.for("react.element"),p=Symbol.for("react.fragment"),D=Object.prototype.hasOwnProperty,h=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C={key:!0,ref:!0,__self:!0,__source:!0};function W(v,R,U){var X,re={},ee=null,Ae=null;U!==void 0&&(ee=""+U),R.key!==void 0&&(ee=""+R.key),R.ref!==void 0&&(Ae=R.ref);for(X in R)D.call(R,X)&&!C.hasOwnProperty(X)&&(re[X]=R[X]);if(v&&v.defaultProps)for(X in R=v.defaultProps,R)re[X]===void 0&&(re[X]=R[X]);return{$$typeof:T,type:v,key:ee,ref:Ae,props:re,_owner:h.current}}return Cr.Fragment=p,Cr.jsx=W,Cr.jsxs=W,Cr}var Ou;function Hd(){return Ou||(Ou=1,Li.exports=Wd()),Li.exports}var _=Hd(),he=Mi(),Ol={},zi={exports:{}},Be={},Oi={exports:{}},Di={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du;function $d(){return Du||(Du=1,(function(c){function T(N,M){var P=N.length;N.push(M);e:for(;0<P;){var d=P-1>>>1,w=N[d];if(0<h(w,M))N[d]=M,N[P]=w,P=d;else break e}}function p(N){return N.length===0?null:N[0]}function D(N){if(N.length===0)return null;var M=N[0],P=N.pop();if(P!==M){N[0]=P;e:for(var d=0,w=N.length,B=w>>>1;d<B;){var V=2*(d+1)-1,$=N[V],G=V+1,te=N[G];if(0>h($,P))G<w&&0>h(te,$)?(N[d]=te,N[G]=P,d=G):(N[d]=$,N[V]=P,d=V);else if(G<w&&0>h(te,P))N[d]=te,N[G]=P,d=G;else break e}}return M}function h(N,M){var P=N.sortIndex-M.sortIndex;return P!==0?P:N.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var C=performance;c.unstable_now=function(){return C.now()}}else{var W=Date,v=W.now();c.unstable_now=function(){return W.now()-v}}var R=[],U=[],X=1,re=null,ee=3,Ae=!1,Le=!1,Y=!1,I=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Je(N){for(var M=p(U);M!==null;){if(M.callback===null)D(U);else if(M.startTime<=N)D(U),M.sortIndex=M.expirationTime,T(R,M);else break;M=p(U)}}function ve(N){if(Y=!1,Je(N),!Le)if(p(R)!==null)Le=!0,ze(nt);else{var M=p(U);M!==null&&de(ve,M.startTime-N)}}function nt(N,M){Le=!1,Y&&(Y=!1,Z(Ke),Ke=-1),Ae=!0;var P=ee;try{for(Je(M),re=p(R);re!==null&&(!(re.expirationTime>M)||N&&!Kt());){var d=re.callback;if(typeof d=="function"){re.callback=null,ee=re.priorityLevel;var w=d(re.expirationTime<=M);M=c.unstable_now(),typeof w=="function"?re.callback=w:re===p(R)&&D(R),Je(M)}else D(R);re=p(R)}if(re!==null)var B=!0;else{var V=p(U);V!==null&&de(ve,V.startTime-M),B=!1}return B}finally{re=null,ee=P,Ae=!1}}var Pe=!1,Ie=null,Ke=-1,Pt=5,St=-1;function Kt(){return!(c.unstable_now()-St<Pt)}function dt(){if(Ie!==null){var N=c.unstable_now();St=N;var M=!0;try{M=Ie(!0,N)}finally{M?Ve():(Pe=!1,Ie=null)}}else Pe=!1}var Ve;if(typeof ce=="function")Ve=function(){ce(dt)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ft=rt.port2;rt.port1.onmessage=dt,Ve=function(){ft.postMessage(null)}}else Ve=function(){I(dt,0)};function ze(N){Ie=N,Pe||(Pe=!0,Ve())}function de(N,M){Ke=I(function(){N(c.unstable_now())},M)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(N){N.callback=null},c.unstable_continueExecution=function(){Le||Ae||(Le=!0,ze(nt))},c.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Pt=0<N?Math.floor(1e3/N):5},c.unstable_getCurrentPriorityLevel=function(){return ee},c.unstable_getFirstCallbackNode=function(){return p(R)},c.unstable_next=function(N){switch(ee){case 1:case 2:case 3:var M=3;break;default:M=ee}var P=ee;ee=M;try{return N()}finally{ee=P}},c.unstable_pauseExecution=function(){},c.unstable_requestPaint=function(){},c.unstable_runWithPriority=function(N,M){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var P=ee;ee=N;try{return M()}finally{ee=P}},c.unstable_scheduleCallback=function(N,M,P){var d=c.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?d+P:d):P=d,N){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=P+w,N={id:X++,callback:M,priorityLevel:N,startTime:P,expirationTime:w,sortIndex:-1},P>d?(N.sortIndex=P,T(U,N),p(R)===null&&N===p(U)&&(Y?(Z(Ke),Ke=-1):Y=!0,de(ve,P-d))):(N.sortIndex=w,T(R,N),Le||Ae||(Le=!0,ze(nt))),N},c.unstable_shouldYield=Kt,c.unstable_wrapCallback=function(N){var M=ee;return function(){var P=ee;ee=M;try{return N.apply(this,arguments)}finally{ee=P}}}})(Di)),Di}var Mu;function Gd(){return Mu||(Mu=1,Oi.exports=$d()),Oi.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu;function Qd(){if(Fu)return Be;Fu=1;var c=Mi(),T=Gd();function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var D=new Set,h={};function C(e,t){W(e,t),W(e+"Capture",t)}function W(e,t){for(h[e]=t,e=0;e<t.length;e++)D.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),R=Object.prototype.hasOwnProperty,U=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,X={},re={};function ee(e){return R.call(re,e)?!0:R.call(X,e)?!1:U.test(e)?re[e]=!0:(X[e]=!0,!1)}function Ae(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Le(e,t,n,r){if(t===null||typeof t>"u"||Ae(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Y(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){I[e]=new Y(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];I[t]=new Y(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){I[e]=new Y(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){I[e]=new Y(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){I[e]=new Y(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){I[e]=new Y(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){I[e]=new Y(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){I[e]=new Y(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){I[e]=new Y(e,5,!1,e.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function ce(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Z,ce);I[t]=new Y(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Z,ce);I[t]=new Y(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Z,ce);I[t]=new Y(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){I[e]=new Y(e,1,!1,e.toLowerCase(),null,!1,!1)}),I.xlinkHref=new Y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){I[e]=new Y(e,1,!1,e.toLowerCase(),null,!0,!0)});function Je(e,t,n,r){var l=I.hasOwnProperty(t)?I[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Le(t,n,l,r)&&(n=null),r||l===null?ee(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ve=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nt=Symbol.for("react.element"),Pe=Symbol.for("react.portal"),Ie=Symbol.for("react.fragment"),Ke=Symbol.for("react.strict_mode"),Pt=Symbol.for("react.profiler"),St=Symbol.for("react.provider"),Kt=Symbol.for("react.context"),dt=Symbol.for("react.forward_ref"),Ve=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),N=Symbol.iterator;function M(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var P=Object.assign,d;function w(e){if(d===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);d=t&&t[1]||""}return`
`+d+e}var B=!1;function V(e,t){if(!e||B)return"";B=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var r=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){r=g}e.call(t.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var l=g.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,a=o.length-1;1<=i&&0<=a&&l[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==o[a]){var s=`
`+l[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{B=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?w(e):""}function $(e){switch(e.tag){case 5:return w(e.type);case 16:return w("Lazy");case 13:return w("Suspense");case 19:return w("SuspenseList");case 0:case 2:case 15:return e=V(e.type,!1),e;case 11:return e=V(e.type.render,!1),e;case 1:return e=V(e.type,!0),e;default:return""}}function G(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ie:return"Fragment";case Pe:return"Portal";case Pt:return"Profiler";case Ke:return"StrictMode";case Ve:return"Suspense";case rt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kt:return(e.displayName||"Context")+".Consumer";case St:return(e._context.displayName||"Context")+".Provider";case dt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ft:return t=e.displayName||null,t!==null?t:G(e.type)||"Memo";case ze:t=e._payload,e=e._init;try{return G(e(t))}catch{}}return null}function te(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return G(t);case 8:return t===Ke?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function K(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ie(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function We(e){var t=ie(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Er(e){e._valueTracker||(e._valueTracker=We(e))}function Fi(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ie(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fl(e,t){var n=t.checked;return P({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ui(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=K(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bi(e,t){t=t.checked,t!=null&&Je(e,"checked",t,!1)}function Ul(e,t){Bi(e,t);var n=K(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bl(e,t.type,K(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ji(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bl(e,t,n){(t!=="number"||Tr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function dn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+K(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Jl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(p(91));return P({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(p(92));if(Fn(n)){if(1<n.length)throw Error(p(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:K(n)}}function Wi(e,t){var n=K(t.value),r=K(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Hi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $i(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$i(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var br,Gi=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(br=br||document.createElement("div"),br.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=br.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Un(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gu=["Webkit","ms","Moz","O"];Object.keys(Bn).forEach(function(e){Gu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bn[t]=Bn[e]})});function Qi(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Bn.hasOwnProperty(e)&&Bn[e]?(""+t).trim():t+"px"}function Ki(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Qi(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Qu=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wl(e,t){if(t){if(Qu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(p(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(p(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(p(61))}if(t.style!=null&&typeof t.style!="object")throw Error(p(62))}}function Hl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $l=null;function Gl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ql=null,fn=null,pn=null;function qi(e){if(e=ur(e)){if(typeof Ql!="function")throw Error(p(280));var t=e.stateNode;t&&(t=Xr(t),Ql(e.stateNode,e.type,t))}}function Xi(e){fn?pn?pn.push(e):pn=[e]:fn=e}function Yi(){if(fn){var e=fn,t=pn;if(pn=fn=null,qi(e),t)for(e=0;e<t.length;e++)qi(t[e])}}function Zi(e,t){return e(t)}function ea(){}var Kl=!1;function ta(e,t,n){if(Kl)return e(t,n);Kl=!0;try{return Zi(e,t,n)}finally{Kl=!1,(fn!==null||pn!==null)&&(ea(),Yi())}}function Jn(e,t){var n=e.stateNode;if(n===null)return null;var r=Xr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(p(231,t,typeof n));return n}var ql=!1;if(v)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){ql=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{ql=!1}function Ku(e,t,n,r,l,o,i,a,s){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(S){this.onError(S)}}var Wn=!1,Pr=null,jr=!1,Xl=null,qu={onError:function(e){Wn=!0,Pr=e}};function Xu(e,t,n,r,l,o,i,a,s){Wn=!1,Pr=null,Ku.apply(qu,arguments)}function Yu(e,t,n,r,l,o,i,a,s){if(Xu.apply(this,arguments),Wn){if(Wn){var g=Pr;Wn=!1,Pr=null}else throw Error(p(198));jr||(jr=!0,Xl=g)}}function qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function na(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ra(e){if(qt(e)!==e)throw Error(p(188))}function Zu(e){var t=e.alternate;if(!t){if(t=qt(e),t===null)throw Error(p(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return ra(l),e;if(o===r)return ra(l),t;o=o.sibling}throw Error(p(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i)throw Error(p(189))}}if(n.alternate!==r)throw Error(p(190))}if(n.tag!==3)throw Error(p(188));return n.stateNode.current===n?e:t}function la(e){return e=Zu(e),e!==null?oa(e):null}function oa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=oa(e);if(t!==null)return t;e=e.sibling}return null}var ia=T.unstable_scheduleCallback,aa=T.unstable_cancelCallback,ec=T.unstable_shouldYield,tc=T.unstable_requestPaint,pe=T.unstable_now,nc=T.unstable_getCurrentPriorityLevel,Yl=T.unstable_ImmediatePriority,sa=T.unstable_UserBlockingPriority,Rr=T.unstable_NormalPriority,rc=T.unstable_LowPriority,ua=T.unstable_IdlePriority,Ar=null,pt=null;function lc(e){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Ar,e,void 0,(e.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:ac,oc=Math.log,ic=Math.LN2;function ac(e){return e>>>=0,e===0?32:31-(oc(e)/ic|0)|0}var Lr=64,Ir=4194304;function Hn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~l;a!==0?r=Hn(a):(o&=i,o!==0&&(r=Hn(o)))}else i=n&~l,i!==0?r=Hn(i):o!==0&&(r=Hn(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-lt(t),l=1<<n,r|=e[n],t&=~l;return r}function sc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-lt(o),a=1<<i,s=l[i];s===-1?((a&n)===0||(a&r)!==0)&&(l[i]=sc(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Zl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ca(){var e=Lr;return Lr<<=1,(Lr&4194240)===0&&(Lr=64),e}function eo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $n(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-lt(t),e[t]=n}function cc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-lt(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function to(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-lt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var q=0;function da(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var fa,no,pa,ma,ga,ro=!1,Or=[],jt=null,Rt=null,At=null,Gn=new Map,Qn=new Map,Lt=[],dc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ha(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qn.delete(t.pointerId)}}function Kn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=ur(t),t!==null&&no(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function fc(e,t,n,r,l){switch(t){case"focusin":return jt=Kn(jt,e,t,n,r,l),!0;case"dragenter":return Rt=Kn(Rt,e,t,n,r,l),!0;case"mouseover":return At=Kn(At,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Gn.set(o,Kn(Gn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Qn.set(o,Kn(Qn.get(o)||null,e,t,n,r,l)),!0}return!1}function va(e){var t=Xt(e.target);if(t!==null){var n=qt(t);if(n!==null){if(t=n.tag,t===13){if(t=na(n),t!==null){e.blockedOn=t,ga(e.priority,function(){pa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=oo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$l=r,n.target.dispatchEvent(r),$l=null}else return t=ur(n),t!==null&&no(t),e.blockedOn=n,!1;t.shift()}return!0}function ya(e,t,n){Dr(e)&&n.delete(t)}function pc(){ro=!1,jt!==null&&Dr(jt)&&(jt=null),Rt!==null&&Dr(Rt)&&(Rt=null),At!==null&&Dr(At)&&(At=null),Gn.forEach(ya),Qn.forEach(ya)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,ro||(ro=!0,T.unstable_scheduleCallback(T.unstable_NormalPriority,pc)))}function Xn(e){function t(l){return qn(l,e)}if(0<Or.length){qn(Or[0],e);for(var n=1;n<Or.length;n++){var r=Or[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jt!==null&&qn(jt,e),Rt!==null&&qn(Rt,e),At!==null&&qn(At,e),Gn.forEach(t),Qn.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)va(n),n.blockedOn===null&&Lt.shift()}var mn=ve.ReactCurrentBatchConfig,Mr=!0;function mc(e,t,n,r){var l=q,o=mn.transition;mn.transition=null;try{q=1,lo(e,t,n,r)}finally{q=l,mn.transition=o}}function gc(e,t,n,r){var l=q,o=mn.transition;mn.transition=null;try{q=4,lo(e,t,n,r)}finally{q=l,mn.transition=o}}function lo(e,t,n,r){if(Mr){var l=oo(e,t,n,r);if(l===null)_o(e,t,r,Fr,n),ha(e,r);else if(fc(l,e,t,n,r))r.stopPropagation();else if(ha(e,r),t&4&&-1<dc.indexOf(e)){for(;l!==null;){var o=ur(l);if(o!==null&&fa(o),o=oo(e,t,n,r),o===null&&_o(e,t,r,Fr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else _o(e,t,r,null,n)}}var Fr=null;function oo(e,t,n,r){if(Fr=null,e=Gl(r),e=Xt(e),e!==null)if(t=qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=na(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fr=e,null}function wa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nc()){case Yl:return 1;case sa:return 4;case Rr:case rc:return 16;case ua:return 536870912;default:return 16}default:return 16}}var It=null,io=null,Ur=null;function Sa(){if(Ur)return Ur;var e,t=io,n=t.length,r,l="value"in It?It.value:It.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Ur=l.slice(e,1<r?1-r:void 0)}function Br(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jr(){return!0}function ka(){return!1}function He(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Jr:ka,this.isPropagationStopped=ka,this}return P(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jr)},persist:function(){},isPersistent:Jr}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ao=He(gn),Yn=P({},gn,{view:0,detail:0}),hc=He(Yn),so,uo,Zn,Vr=P({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zn&&(Zn&&e.type==="mousemove"?(so=e.screenX-Zn.screenX,uo=e.screenY-Zn.screenY):uo=so=0,Zn=e),so)},movementY:function(e){return"movementY"in e?e.movementY:uo}}),xa=He(Vr),vc=P({},Vr,{dataTransfer:0}),yc=He(vc),wc=P({},Yn,{relatedTarget:0}),co=He(wc),Sc=P({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),kc=He(Sc),xc=P({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_c=He(xc),Cc=P({},gn,{data:0}),_a=He(Cc),Nc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ec={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tc[e])?!!t[e]:!1}function fo(){return bc}var Pc=P({},Yn,{key:function(e){if(e.key){var t=Nc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ec[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fo,charCode:function(e){return e.type==="keypress"?Br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jc=He(Pc),Rc=P({},Vr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ca=He(Rc),Ac=P({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fo}),Lc=He(Ac),Ic=P({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),zc=He(Ic),Oc=P({},Vr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dc=He(Oc),Mc=[9,13,27,32],po=v&&"CompositionEvent"in window,er=null;v&&"documentMode"in document&&(er=document.documentMode);var Fc=v&&"TextEvent"in window&&!er,Na=v&&(!po||er&&8<er&&11>=er),Ea=" ",Ta=!1;function ba(e,t){switch(e){case"keyup":return Mc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hn=!1;function Uc(e,t){switch(e){case"compositionend":return Pa(t);case"keypress":return t.which!==32?null:(Ta=!0,Ea);case"textInput":return e=t.data,e===Ea&&Ta?null:e;default:return null}}function Bc(e,t){if(hn)return e==="compositionend"||!po&&ba(e,t)?(e=Sa(),Ur=io=It=null,hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Na&&t.locale!=="ko"?null:t.data;default:return null}}var Jc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jc[e.type]:t==="textarea"}function Ra(e,t,n,r){Xi(r),t=Qr(t,"onChange"),0<t.length&&(n=new ao("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var tr=null,nr=null;function Vc(e){Ka(e,0)}function Wr(e){var t=kn(e);if(Fi(t))return e}function Wc(e,t){if(e==="change")return t}var Aa=!1;if(v){var mo;if(v){var go="oninput"in document;if(!go){var La=document.createElement("div");La.setAttribute("oninput","return;"),go=typeof La.oninput=="function"}mo=go}else mo=!1;Aa=mo&&(!document.documentMode||9<document.documentMode)}function Ia(){tr&&(tr.detachEvent("onpropertychange",za),nr=tr=null)}function za(e){if(e.propertyName==="value"&&Wr(nr)){var t=[];Ra(t,nr,e,Gl(e)),ta(Vc,t)}}function Hc(e,t,n){e==="focusin"?(Ia(),tr=t,nr=n,tr.attachEvent("onpropertychange",za)):e==="focusout"&&Ia()}function $c(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wr(nr)}function Gc(e,t){if(e==="click")return Wr(t)}function Qc(e,t){if(e==="input"||e==="change")return Wr(t)}function Kc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:Kc;function rr(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!R.call(t,l)||!ot(e[l],t[l]))return!1}return!0}function Oa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Da(e,t){var n=Oa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oa(n)}}function Ma(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ma(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fa(){for(var e=window,t=Tr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tr(e.document)}return t}function ho(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qc(e){var t=Fa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ma(n.ownerDocument.documentElement,n)){if(r!==null&&ho(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Da(n,o);var i=Da(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xc=v&&"documentMode"in document&&11>=document.documentMode,vn=null,vo=null,lr=null,yo=!1;function Ua(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yo||vn==null||vn!==Tr(r)||(r=vn,"selectionStart"in r&&ho(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lr&&rr(lr,r)||(lr=r,r=Qr(vo,"onSelect"),0<r.length&&(t=new ao("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vn)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yn={animationend:Hr("Animation","AnimationEnd"),animationiteration:Hr("Animation","AnimationIteration"),animationstart:Hr("Animation","AnimationStart"),transitionend:Hr("Transition","TransitionEnd")},wo={},Ba={};v&&(Ba=document.createElement("div").style,"AnimationEvent"in window||(delete yn.animationend.animation,delete yn.animationiteration.animation,delete yn.animationstart.animation),"TransitionEvent"in window||delete yn.transitionend.transition);function $r(e){if(wo[e])return wo[e];if(!yn[e])return e;var t=yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ba)return wo[e]=t[n];return e}var Ja=$r("animationend"),Va=$r("animationiteration"),Wa=$r("animationstart"),Ha=$r("transitionend"),$a=new Map,Ga="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zt(e,t){$a.set(e,t),C(t,[e])}for(var So=0;So<Ga.length;So++){var ko=Ga[So],Yc=ko.toLowerCase(),Zc=ko[0].toUpperCase()+ko.slice(1);zt(Yc,"on"+Zc)}zt(Ja,"onAnimationEnd"),zt(Va,"onAnimationIteration"),zt(Wa,"onAnimationStart"),zt("dblclick","onDoubleClick"),zt("focusin","onFocus"),zt("focusout","onBlur"),zt(Ha,"onTransitionEnd"),W("onMouseEnter",["mouseout","mouseover"]),W("onMouseLeave",["mouseout","mouseover"]),W("onPointerEnter",["pointerout","pointerover"]),W("onPointerLeave",["pointerout","pointerover"]),C("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),C("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),C("onBeforeInput",["compositionend","keypress","textInput","paste"]),C("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ed=new Set("cancel close invalid load scroll toggle".split(" ").concat(or));function Qa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yu(r,t,void 0,e),e.currentTarget=null}function Ka(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,g=a.currentTarget;if(a=a.listener,s!==o&&l.isPropagationStopped())break e;Qa(l,a,g),o=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,g=a.currentTarget,a=a.listener,s!==o&&l.isPropagationStopped())break e;Qa(l,a,g),o=s}}}if(jr)throw e=Xl,jr=!1,Xl=null,e}function le(e,t){var n=t[Po];n===void 0&&(n=t[Po]=new Set);var r=e+"__bubble";n.has(r)||(qa(t,e,2,!1),n.add(r))}function xo(e,t,n){var r=0;t&&(r|=4),qa(n,e,r,t)}var Gr="_reactListening"+Math.random().toString(36).slice(2);function ir(e){if(!e[Gr]){e[Gr]=!0,D.forEach(function(n){n!=="selectionchange"&&(ed.has(n)||xo(n,!1,e),xo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gr]||(t[Gr]=!0,xo("selectionchange",!1,t))}}function qa(e,t,n,r){switch(wa(t)){case 1:var l=mc;break;case 4:l=gc;break;default:l=lo}n=l.bind(null,t,n,e),l=void 0,!ql||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function _o(e,t,n,r,l){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;i=i.return}for(;a!==null;){if(i=Xt(a),i===null)return;if(s=i.tag,s===5||s===6){r=o=i;continue e}a=a.parentNode}}r=r.return}ta(function(){var g=o,S=Gl(n),k=[];e:{var y=$a.get(e);if(y!==void 0){var E=ao,j=e;switch(e){case"keypress":if(Br(n)===0)break e;case"keydown":case"keyup":E=jc;break;case"focusin":j="focus",E=co;break;case"focusout":j="blur",E=co;break;case"beforeblur":case"afterblur":E=co;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=xa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=yc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Lc;break;case Ja:case Va:case Wa:E=kc;break;case Ha:E=zc;break;case"scroll":E=hc;break;case"wheel":E=Dc;break;case"copy":case"cut":case"paste":E=_c;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Ca}var A=(t&4)!==0,me=!A&&e==="scroll",f=A?y!==null?y+"Capture":null:y;A=[];for(var u=g,m;u!==null;){m=u;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,f!==null&&(x=Jn(u,f),x!=null&&A.push(ar(u,x,m)))),me)break;u=u.return}0<A.length&&(y=new E(y,j,null,n,S),k.push({event:y,listeners:A}))}}if((t&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",y&&n!==$l&&(j=n.relatedTarget||n.fromElement)&&(Xt(j)||j[kt]))break e;if((E||y)&&(y=S.window===S?S:(y=S.ownerDocument)?y.defaultView||y.parentWindow:window,E?(j=n.relatedTarget||n.toElement,E=g,j=j?Xt(j):null,j!==null&&(me=qt(j),j!==me||j.tag!==5&&j.tag!==6)&&(j=null)):(E=null,j=g),E!==j)){if(A=xa,x="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(A=Ca,x="onPointerLeave",f="onPointerEnter",u="pointer"),me=E==null?y:kn(E),m=j==null?y:kn(j),y=new A(x,u+"leave",E,n,S),y.target=me,y.relatedTarget=m,x=null,Xt(S)===g&&(A=new A(f,u+"enter",j,n,S),A.target=m,A.relatedTarget=me,x=A),me=x,E&&j)t:{for(A=E,f=j,u=0,m=A;m;m=wn(m))u++;for(m=0,x=f;x;x=wn(x))m++;for(;0<u-m;)A=wn(A),u--;for(;0<m-u;)f=wn(f),m--;for(;u--;){if(A===f||f!==null&&A===f.alternate)break t;A=wn(A),f=wn(f)}A=null}else A=null;E!==null&&Xa(k,y,E,A,!1),j!==null&&me!==null&&Xa(k,me,j,A,!0)}}e:{if(y=g?kn(g):window,E=y.nodeName&&y.nodeName.toLowerCase(),E==="select"||E==="input"&&y.type==="file")var L=Wc;else if(ja(y))if(Aa)L=Qc;else{L=$c;var z=Hc}else(E=y.nodeName)&&E.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(L=Gc);if(L&&(L=L(e,g))){Ra(k,L,n,S);break e}z&&z(e,y,g),e==="focusout"&&(z=y._wrapperState)&&z.controlled&&y.type==="number"&&Bl(y,"number",y.value)}switch(z=g?kn(g):window,e){case"focusin":(ja(z)||z.contentEditable==="true")&&(vn=z,vo=g,lr=null);break;case"focusout":lr=vo=vn=null;break;case"mousedown":yo=!0;break;case"contextmenu":case"mouseup":case"dragend":yo=!1,Ua(k,n,S);break;case"selectionchange":if(Xc)break;case"keydown":case"keyup":Ua(k,n,S)}var O;if(po)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else hn?ba(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(Na&&n.locale!=="ko"&&(hn||F!=="onCompositionStart"?F==="onCompositionEnd"&&hn&&(O=Sa()):(It=S,io="value"in It?It.value:It.textContent,hn=!0)),z=Qr(g,F),0<z.length&&(F=new _a(F,e,null,n,S),k.push({event:F,listeners:z}),O?F.data=O:(O=Pa(n),O!==null&&(F.data=O)))),(O=Fc?Uc(e,n):Bc(e,n))&&(g=Qr(g,"onBeforeInput"),0<g.length&&(S=new _a("onBeforeInput","beforeinput",null,n,S),k.push({event:S,listeners:g}),S.data=O))}Ka(k,t)})}function ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Jn(e,n),o!=null&&r.unshift(ar(e,o,l)),o=Jn(e,t),o!=null&&r.push(ar(e,o,l))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xa(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,g=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&g!==null&&(a=g,l?(s=Jn(n,o),s!=null&&i.unshift(ar(n,s,a))):l||(s=Jn(n,o),s!=null&&i.push(ar(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var td=/\r\n?/g,nd=/\u0000|\uFFFD/g;function Ya(e){return(typeof e=="string"?e:""+e).replace(td,`
`).replace(nd,"")}function Kr(e,t,n){if(t=Ya(t),Ya(e)!==t&&n)throw Error(p(425))}function qr(){}var Co=null,No=null;function Eo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var To=typeof setTimeout=="function"?setTimeout:void 0,rd=typeof clearTimeout=="function"?clearTimeout:void 0,Za=typeof Promise=="function"?Promise:void 0,ld=typeof queueMicrotask=="function"?queueMicrotask:typeof Za<"u"?function(e){return Za.resolve(null).then(e).catch(od)}:To;function od(e){setTimeout(function(){throw e})}function bo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Xn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Xn(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function es(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sn=Math.random().toString(36).slice(2),mt="__reactFiber$"+Sn,sr="__reactProps$"+Sn,kt="__reactContainer$"+Sn,Po="__reactEvents$"+Sn,id="__reactListeners$"+Sn,ad="__reactHandles$"+Sn;function Xt(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=es(e);e!==null;){if(n=e[mt])return n;e=es(e)}return t}e=n,n=e.parentNode}return null}function ur(e){return e=e[mt]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(p(33))}function Xr(e){return e[sr]||null}var jo=[],xn=-1;function Dt(e){return{current:e}}function oe(e){0>xn||(e.current=jo[xn],jo[xn]=null,xn--)}function ne(e,t){xn++,jo[xn]=e.current,e.current=t}var Mt={},Ne=Dt(Mt),Oe=Dt(!1),Yt=Mt;function _n(e,t){var n=e.type.contextTypes;if(!n)return Mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function De(e){return e=e.childContextTypes,e!=null}function Yr(){oe(Oe),oe(Ne)}function ts(e,t,n){if(Ne.current!==Mt)throw Error(p(168));ne(Ne,t),ne(Oe,n)}function ns(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(p(108,te(e)||"Unknown",l));return P({},n,r)}function Zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mt,Yt=Ne.current,ne(Ne,e),ne(Oe,Oe.current),!0}function rs(e,t,n){var r=e.stateNode;if(!r)throw Error(p(169));n?(e=ns(e,t,Yt),r.__reactInternalMemoizedMergedChildContext=e,oe(Oe),oe(Ne),ne(Ne,e)):oe(Oe),ne(Oe,n)}var xt=null,el=!1,Ro=!1;function ls(e){xt===null?xt=[e]:xt.push(e)}function sd(e){el=!0,ls(e)}function Ft(){if(!Ro&&xt!==null){Ro=!0;var e=0,t=q;try{var n=xt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xt=null,el=!1}catch(l){throw xt!==null&&(xt=xt.slice(e+1)),ia(Yl,Ft),l}finally{q=t,Ro=!1}}return null}var Cn=[],Nn=0,tl=null,nl=0,qe=[],Xe=0,Zt=null,_t=1,Ct="";function en(e,t){Cn[Nn++]=nl,Cn[Nn++]=tl,tl=e,nl=t}function os(e,t,n){qe[Xe++]=_t,qe[Xe++]=Ct,qe[Xe++]=Zt,Zt=e;var r=_t;e=Ct;var l=32-lt(r)-1;r&=~(1<<l),n+=1;var o=32-lt(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,_t=1<<32-lt(t)+l|n<<l|r,Ct=o+e}else _t=1<<o|n<<l|r,Ct=e}function Ao(e){e.return!==null&&(en(e,1),os(e,1,0))}function Lo(e){for(;e===tl;)tl=Cn[--Nn],Cn[Nn]=null,nl=Cn[--Nn],Cn[Nn]=null;for(;e===Zt;)Zt=qe[--Xe],qe[Xe]=null,Ct=qe[--Xe],qe[Xe]=null,_t=qe[--Xe],qe[Xe]=null}var $e=null,Ge=null,ae=!1,it=null;function is(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function as(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Ge=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zt!==null?{id:_t,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,Ge=null,!0):!1;default:return!1}}function Io(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zo(e){if(ae){var t=Ge;if(t){var n=t;if(!as(e,t)){if(Io(e))throw Error(p(418));t=Ot(n.nextSibling);var r=$e;t&&as(e,t)?is(r,n):(e.flags=e.flags&-4097|2,ae=!1,$e=e)}}else{if(Io(e))throw Error(p(418));e.flags=e.flags&-4097|2,ae=!1,$e=e}}}function ss(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function rl(e){if(e!==$e)return!1;if(!ae)return ss(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Eo(e.type,e.memoizedProps)),t&&(t=Ge)){if(Io(e))throw us(),Error(p(418));for(;t;)is(e,t),t=Ot(t.nextSibling)}if(ss(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=$e?Ot(e.stateNode.nextSibling):null;return!0}function us(){for(var e=Ge;e;)e=Ot(e.nextSibling)}function En(){Ge=$e=null,ae=!1}function Oo(e){it===null?it=[e]:it.push(e)}var ud=ve.ReactCurrentBatchConfig;function cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(p(309));var r=n.stateNode}if(!r)throw Error(p(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var a=l.refs;i===null?delete a[o]:a[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(p(284));if(!n._owner)throw Error(p(290,e))}return e}function ll(e,t){throw e=Object.prototype.toString.call(t),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cs(e){var t=e._init;return t(e._payload)}function ds(e){function t(f,u){if(e){var m=f.deletions;m===null?(f.deletions=[u],f.flags|=16):m.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function l(f,u){return f=Gt(f,u),f.index=0,f.sibling=null,f}function o(f,u,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<u?(f.flags|=2,u):m):(f.flags|=2,u)):(f.flags|=1048576,u)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,u,m,x){return u===null||u.tag!==6?(u=Ti(m,f.mode,x),u.return=f,u):(u=l(u,m),u.return=f,u)}function s(f,u,m,x){var L=m.type;return L===Ie?S(f,u,m.props.children,x,m.key):u!==null&&(u.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===ze&&cs(L)===u.type)?(x=l(u,m.props),x.ref=cr(f,u,m),x.return=f,x):(x=bl(m.type,m.key,m.props,null,f.mode,x),x.ref=cr(f,u,m),x.return=f,x)}function g(f,u,m,x){return u===null||u.tag!==4||u.stateNode.containerInfo!==m.containerInfo||u.stateNode.implementation!==m.implementation?(u=bi(m,f.mode,x),u.return=f,u):(u=l(u,m.children||[]),u.return=f,u)}function S(f,u,m,x,L){return u===null||u.tag!==7?(u=un(m,f.mode,x,L),u.return=f,u):(u=l(u,m),u.return=f,u)}function k(f,u,m){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ti(""+u,f.mode,m),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case nt:return m=bl(u.type,u.key,u.props,null,f.mode,m),m.ref=cr(f,null,u),m.return=f,m;case Pe:return u=bi(u,f.mode,m),u.return=f,u;case ze:var x=u._init;return k(f,x(u._payload),m)}if(Fn(u)||M(u))return u=un(u,f.mode,m,null),u.return=f,u;ll(f,u)}return null}function y(f,u,m,x){var L=u!==null?u.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return L!==null?null:a(f,u,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case nt:return m.key===L?s(f,u,m,x):null;case Pe:return m.key===L?g(f,u,m,x):null;case ze:return L=m._init,y(f,u,L(m._payload),x)}if(Fn(m)||M(m))return L!==null?null:S(f,u,m,x,null);ll(f,m)}return null}function E(f,u,m,x,L){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(m)||null,a(u,f,""+x,L);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case nt:return f=f.get(x.key===null?m:x.key)||null,s(u,f,x,L);case Pe:return f=f.get(x.key===null?m:x.key)||null,g(u,f,x,L);case ze:var z=x._init;return E(f,u,m,z(x._payload),L)}if(Fn(x)||M(x))return f=f.get(m)||null,S(u,f,x,L,null);ll(u,x)}return null}function j(f,u,m,x){for(var L=null,z=null,O=u,F=u=0,xe=null;O!==null&&F<m.length;F++){O.index>F?(xe=O,O=null):xe=O.sibling;var Q=y(f,O,m[F],x);if(Q===null){O===null&&(O=xe);break}e&&O&&Q.alternate===null&&t(f,O),u=o(Q,u,F),z===null?L=Q:z.sibling=Q,z=Q,O=xe}if(F===m.length)return n(f,O),ae&&en(f,F),L;if(O===null){for(;F<m.length;F++)O=k(f,m[F],x),O!==null&&(u=o(O,u,F),z===null?L=O:z.sibling=O,z=O);return ae&&en(f,F),L}for(O=r(f,O);F<m.length;F++)xe=E(O,f,F,m[F],x),xe!==null&&(e&&xe.alternate!==null&&O.delete(xe.key===null?F:xe.key),u=o(xe,u,F),z===null?L=xe:z.sibling=xe,z=xe);return e&&O.forEach(function(Qt){return t(f,Qt)}),ae&&en(f,F),L}function A(f,u,m,x){var L=M(m);if(typeof L!="function")throw Error(p(150));if(m=L.call(m),m==null)throw Error(p(151));for(var z=L=null,O=u,F=u=0,xe=null,Q=m.next();O!==null&&!Q.done;F++,Q=m.next()){O.index>F?(xe=O,O=null):xe=O.sibling;var Qt=y(f,O,Q.value,x);if(Qt===null){O===null&&(O=xe);break}e&&O&&Qt.alternate===null&&t(f,O),u=o(Qt,u,F),z===null?L=Qt:z.sibling=Qt,z=Qt,O=xe}if(Q.done)return n(f,O),ae&&en(f,F),L;if(O===null){for(;!Q.done;F++,Q=m.next())Q=k(f,Q.value,x),Q!==null&&(u=o(Q,u,F),z===null?L=Q:z.sibling=Q,z=Q);return ae&&en(f,F),L}for(O=r(f,O);!Q.done;F++,Q=m.next())Q=E(O,f,F,Q.value,x),Q!==null&&(e&&Q.alternate!==null&&O.delete(Q.key===null?F:Q.key),u=o(Q,u,F),z===null?L=Q:z.sibling=Q,z=Q);return e&&O.forEach(function(Jd){return t(f,Jd)}),ae&&en(f,F),L}function me(f,u,m,x){if(typeof m=="object"&&m!==null&&m.type===Ie&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case nt:e:{for(var L=m.key,z=u;z!==null;){if(z.key===L){if(L=m.type,L===Ie){if(z.tag===7){n(f,z.sibling),u=l(z,m.props.children),u.return=f,f=u;break e}}else if(z.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===ze&&cs(L)===z.type){n(f,z.sibling),u=l(z,m.props),u.ref=cr(f,z,m),u.return=f,f=u;break e}n(f,z);break}else t(f,z);z=z.sibling}m.type===Ie?(u=un(m.props.children,f.mode,x,m.key),u.return=f,f=u):(x=bl(m.type,m.key,m.props,null,f.mode,x),x.ref=cr(f,u,m),x.return=f,f=x)}return i(f);case Pe:e:{for(z=m.key;u!==null;){if(u.key===z)if(u.tag===4&&u.stateNode.containerInfo===m.containerInfo&&u.stateNode.implementation===m.implementation){n(f,u.sibling),u=l(u,m.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=bi(m,f.mode,x),u.return=f,f=u}return i(f);case ze:return z=m._init,me(f,u,z(m._payload),x)}if(Fn(m))return j(f,u,m,x);if(M(m))return A(f,u,m,x);ll(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,u!==null&&u.tag===6?(n(f,u.sibling),u=l(u,m),u.return=f,f=u):(n(f,u),u=Ti(m,f.mode,x),u.return=f,f=u),i(f)):n(f,u)}return me}var Tn=ds(!0),fs=ds(!1),ol=Dt(null),il=null,bn=null,Do=null;function Mo(){Do=bn=il=null}function Fo(e){var t=ol.current;oe(ol),e._currentValue=t}function Uo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pn(e,t){il=e,Do=bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Me=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(Do!==e)if(e={context:e,memoizedValue:t,next:null},bn===null){if(il===null)throw Error(p(308));bn=e,il.dependencies={lanes:0,firstContext:e}}else bn=bn.next=e;return t}var tn=null;function Bo(e){tn===null?tn=[e]:tn.push(e)}function ps(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Bo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Jo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ms(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(H&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Nt(e,n)}return l=r.interleaved,l===null?(t.next=t,Bo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Nt(e,n)}function al(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,to(e,n)}}function gs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function sl(e,t,n,r){var l=e.updateQueue;Ut=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,g=s.next;s.next=null,i===null?o=g:i.next=g,i=s;var S=e.alternate;S!==null&&(S=S.updateQueue,a=S.lastBaseUpdate,a!==i&&(a===null?S.firstBaseUpdate=g:a.next=g,S.lastBaseUpdate=s))}if(o!==null){var k=l.baseState;i=0,S=g=s=null,a=o;do{var y=a.lane,E=a.eventTime;if((r&y)===y){S!==null&&(S=S.next={eventTime:E,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var j=e,A=a;switch(y=t,E=n,A.tag){case 1:if(j=A.payload,typeof j=="function"){k=j.call(E,k,y);break e}k=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=A.payload,y=typeof j=="function"?j.call(E,k,y):j,y==null)break e;k=P({},k,y);break e;case 2:Ut=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,y=l.effects,y===null?l.effects=[a]:y.push(a))}else E={eventTime:E,lane:y,tag:a.tag,payload:a.payload,callback:a.callback,next:null},S===null?(g=S=E,s=k):S=S.next=E,i|=y;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;y=a,a=y.next,y.next=null,l.lastBaseUpdate=y,l.shared.pending=null}}while(!0);if(S===null&&(s=k),l.baseState=s,l.firstBaseUpdate=g,l.lastBaseUpdate=S,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);ln|=i,e.lanes=i,e.memoizedState=k}}function hs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(p(191,l));l.call(r)}}}var dr={},gt=Dt(dr),fr=Dt(dr),pr=Dt(dr);function nn(e){if(e===dr)throw Error(p(174));return e}function Vo(e,t){switch(ne(pr,t),ne(fr,e),ne(gt,dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vl(t,e)}oe(gt),ne(gt,t)}function jn(){oe(gt),oe(fr),oe(pr)}function vs(e){nn(pr.current);var t=nn(gt.current),n=Vl(t,e.type);t!==n&&(ne(fr,e),ne(gt,n))}function Wo(e){fr.current===e&&(oe(gt),oe(fr))}var se=Dt(0);function ul(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ho=[];function $o(){for(var e=0;e<Ho.length;e++)Ho[e]._workInProgressVersionPrimary=null;Ho.length=0}var cl=ve.ReactCurrentDispatcher,Go=ve.ReactCurrentBatchConfig,rn=0,ue=null,ye=null,Se=null,dl=!1,mr=!1,gr=0,cd=0;function Ee(){throw Error(p(321))}function Qo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function Ko(e,t,n,r,l,o){if(rn=o,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,cl.current=e===null||e.memoizedState===null?md:gd,e=n(r,l),mr){o=0;do{if(mr=!1,gr=0,25<=o)throw Error(p(301));o+=1,Se=ye=null,t.updateQueue=null,cl.current=hd,e=n(r,l)}while(mr)}if(cl.current=ml,t=ye!==null&&ye.next!==null,rn=0,Se=ye=ue=null,dl=!1,t)throw Error(p(300));return e}function qo(){var e=gr!==0;return gr=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?ue.memoizedState=Se=e:Se=Se.next=e,Se}function Ze(){if(ye===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Se===null?ue.memoizedState:Se.next;if(t!==null)Se=t,ye=e;else{if(e===null)throw Error(p(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Se===null?ue.memoizedState=Se=e:Se=Se.next=e}return Se}function hr(e,t){return typeof t=="function"?t(e):t}function Xo(e){var t=Ze(),n=t.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=e;var r=ye,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var a=i=null,s=null,g=o;do{var S=g.lane;if((rn&S)===S)s!==null&&(s=s.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var k={lane:S,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};s===null?(a=s=k,i=r):s=s.next=k,ue.lanes|=S,ln|=S}g=g.next}while(g!==null&&g!==o);s===null?i=r:s.next=a,ot(r,t.memoizedState)||(Me=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,ue.lanes|=o,ln|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yo(e){var t=Ze(),n=t.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);ot(o,t.memoizedState)||(Me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ys(){}function ws(e,t){var n=ue,r=Ze(),l=t(),o=!ot(r.memoizedState,l);if(o&&(r.memoizedState=l,Me=!0),r=r.queue,Zo(xs.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,vr(9,ks.bind(null,n,r,l,t),void 0,null),ke===null)throw Error(p(349));(rn&30)!==0||Ss(n,t,l)}return l}function Ss(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ks(e,t,n,r){t.value=n,t.getSnapshot=r,_s(t)&&Cs(e)}function xs(e,t,n){return n(function(){_s(t)&&Cs(e)})}function _s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function Cs(e){var t=Nt(e,1);t!==null&&ct(t,e,1,-1)}function Ns(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hr,lastRenderedState:e},t.queue=e,e=e.dispatch=pd.bind(null,ue,e),[t.memoizedState,e]}function vr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Es(){return Ze().memoizedState}function fl(e,t,n,r){var l=ht();ue.flags|=e,l.memoizedState=vr(1|t,n,void 0,r===void 0?null:r)}function pl(e,t,n,r){var l=Ze();r=r===void 0?null:r;var o=void 0;if(ye!==null){var i=ye.memoizedState;if(o=i.destroy,r!==null&&Qo(r,i.deps)){l.memoizedState=vr(t,n,o,r);return}}ue.flags|=e,l.memoizedState=vr(1|t,n,o,r)}function Ts(e,t){return fl(8390656,8,e,t)}function Zo(e,t){return pl(2048,8,e,t)}function bs(e,t){return pl(4,2,e,t)}function Ps(e,t){return pl(4,4,e,t)}function js(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rs(e,t,n){return n=n!=null?n.concat([e]):null,pl(4,4,js.bind(null,t,e),n)}function ei(){}function As(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ls(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Is(e,t,n){return(rn&21)===0?(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=n):(ot(n,t)||(n=ca(),ue.lanes|=n,ln|=n,e.baseState=!0),t)}function dd(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=Go.transition;Go.transition={};try{e(!1),t()}finally{q=n,Go.transition=r}}function zs(){return Ze().memoizedState}function fd(e,t,n){var r=Ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Os(e))Ds(t,n);else if(n=ps(e,t,n,r),n!==null){var l=Re();ct(n,e,r,l),Ms(n,t,r)}}function pd(e,t,n){var r=Ht(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Os(e))Ds(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,a=o(i,n);if(l.hasEagerState=!0,l.eagerState=a,ot(a,i)){var s=t.interleaved;s===null?(l.next=l,Bo(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=ps(e,t,l,r),n!==null&&(l=Re(),ct(n,e,r,l),Ms(n,t,r))}}function Os(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Ds(e,t){mr=dl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ms(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,to(e,n)}}var ml={readContext:Ye,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},md={readContext:Ye,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:Ts,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fl(4194308,4,js.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fl(4194308,4,e,t)},useInsertionEffect:function(e,t){return fl(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=fd.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:Ns,useDebugValue:ei,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=Ns(!1),t=e[0];return e=dd.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ue,l=ht();if(ae){if(n===void 0)throw Error(p(407));n=n()}else{if(n=t(),ke===null)throw Error(p(349));(rn&30)!==0||Ss(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Ts(xs.bind(null,r,o,e),[e]),r.flags|=2048,vr(9,ks.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ht(),t=ke.identifierPrefix;if(ae){var n=Ct,r=_t;n=(r&~(1<<32-lt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=gr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gd={readContext:Ye,useCallback:As,useContext:Ye,useEffect:Zo,useImperativeHandle:Rs,useInsertionEffect:bs,useLayoutEffect:Ps,useMemo:Ls,useReducer:Xo,useRef:Es,useState:function(){return Xo(hr)},useDebugValue:ei,useDeferredValue:function(e){var t=Ze();return Is(t,ye.memoizedState,e)},useTransition:function(){var e=Xo(hr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:ys,useSyncExternalStore:ws,useId:zs,unstable_isNewReconciler:!1},hd={readContext:Ye,useCallback:As,useContext:Ye,useEffect:Zo,useImperativeHandle:Rs,useInsertionEffect:bs,useLayoutEffect:Ps,useMemo:Ls,useReducer:Yo,useRef:Es,useState:function(){return Yo(hr)},useDebugValue:ei,useDeferredValue:function(e){var t=Ze();return ye===null?t.memoizedState=e:Is(t,ye.memoizedState,e)},useTransition:function(){var e=Yo(hr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:ys,useSyncExternalStore:ws,useId:zs,unstable_isNewReconciler:!1};function at(e,t){if(e&&e.defaultProps){t=P({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ti(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:P({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gl={isMounted:function(e){return(e=e._reactInternals)?qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Re(),l=Ht(e),o=Et(r,l);o.payload=t,n!=null&&(o.callback=n),t=Bt(e,o,l),t!==null&&(ct(t,e,l,r),al(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Re(),l=Ht(e),o=Et(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Bt(e,o,l),t!==null&&(ct(t,e,l,r),al(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Re(),r=Ht(e),l=Et(n,r);l.tag=2,t!=null&&(l.callback=t),t=Bt(e,l,r),t!==null&&(ct(t,e,r,n),al(t,e,r))}};function Fs(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!rr(n,r)||!rr(l,o):!0}function Us(e,t,n){var r=!1,l=Mt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ye(o):(l=De(t)?Yt:Ne.current,r=t.contextTypes,o=(r=r!=null)?_n(e,l):Mt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Bs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gl.enqueueReplaceState(t,t.state,null)}function ni(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Jo(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Ye(o):(o=De(t)?Yt:Ne.current,l.context=_n(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ti(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&gl.enqueueReplaceState(l,l.state,null),sl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Rn(e,t){try{var n="",r=t;do n+=$(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function ri(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function li(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vd=typeof WeakMap=="function"?WeakMap:Map;function Js(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xl||(xl=!0,wi=r),li(e,t)},n}function Vs(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){li(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){li(e,t),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ws(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vd;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Rd.bind(null,e,t,n),t.then(e,e))}function Hs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $s(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var yd=ve.ReactCurrentOwner,Me=!1;function je(e,t,n,r){t.child=e===null?fs(t,null,n,r):Tn(t,e.child,n,r)}function Gs(e,t,n,r,l){n=n.render;var o=t.ref;return Pn(t,l),r=Ko(e,t,n,r,o,l),n=qo(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Tt(e,t,l)):(ae&&n&&Ao(t),t.flags|=1,je(e,t,r,l),t.child)}function Qs(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Ei(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ks(e,t,o,r,l)):(e=bl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&l)===0){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:rr,n(i,r)&&e.ref===t.ref)return Tt(e,t,l)}return t.flags|=1,e=Gt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ks(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(rr(o,r)&&e.ref===t.ref)if(Me=!1,t.pendingProps=r=o,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Me=!0);else return t.lanes=e.lanes,Tt(e,t,l)}return oi(e,t,n,r,l)}function qs(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Ln,Qe),Qe|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(Ln,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ne(Ln,Qe),Qe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ne(Ln,Qe),Qe|=r;return je(e,t,l,n),t.child}function Xs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function oi(e,t,n,r,l){var o=De(n)?Yt:Ne.current;return o=_n(t,o),Pn(t,l),n=Ko(e,t,n,r,o,l),r=qo(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Tt(e,t,l)):(ae&&r&&Ao(t),t.flags|=1,je(e,t,n,l),t.child)}function Ys(e,t,n,r,l){if(De(n)){var o=!0;Zr(t)}else o=!1;if(Pn(t,l),t.stateNode===null)vl(e,t),Us(t,n,r),ni(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,g=n.contextType;typeof g=="object"&&g!==null?g=Ye(g):(g=De(n)?Yt:Ne.current,g=_n(t,g));var S=n.getDerivedStateFromProps,k=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function";k||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==g)&&Bs(t,i,r,g),Ut=!1;var y=t.memoizedState;i.state=y,sl(t,r,i,l),s=t.memoizedState,a!==r||y!==s||Oe.current||Ut?(typeof S=="function"&&(ti(t,n,S,r),s=t.memoizedState),(a=Ut||Fs(t,n,a,r,y,s,g))?(k||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=g,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,ms(e,t),a=t.memoizedProps,g=t.type===t.elementType?a:at(t.type,a),i.props=g,k=t.pendingProps,y=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ye(s):(s=De(n)?Yt:Ne.current,s=_n(t,s));var E=n.getDerivedStateFromProps;(S=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==k||y!==s)&&Bs(t,i,r,s),Ut=!1,y=t.memoizedState,i.state=y,sl(t,r,i,l);var j=t.memoizedState;a!==k||y!==j||Oe.current||Ut?(typeof E=="function"&&(ti(t,n,E,r),j=t.memoizedState),(g=Ut||Fs(t,n,g,r,y,j,s)||!1)?(S||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,j,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,j,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=j),i.props=r,i.state=j,i.context=s,r=g):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return ii(e,t,n,r,o,l)}function ii(e,t,n,r,l,o){Xs(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&rs(t,n,!1),Tt(e,t,o);r=t.stateNode,yd.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Tn(t,e.child,null,o),t.child=Tn(t,null,a,o)):je(e,t,a,o),t.memoizedState=r.state,l&&rs(t,n,!0),t.child}function Zs(e){var t=e.stateNode;t.pendingContext?ts(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ts(e,t.context,!1),Vo(e,t.containerInfo)}function eu(e,t,n,r,l){return En(),Oo(l),t.flags|=256,je(e,t,n,r),t.child}var ai={dehydrated:null,treeContext:null,retryLane:0};function si(e){return{baseLanes:e,cachePool:null,transitions:null}}function tu(e,t,n){var r=t.pendingProps,l=se.current,o=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),ne(se,l&1),e===null)return zo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Pl(i,r,0,null),e=un(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=si(n),t.memoizedState=ai,e):ui(t,i));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return wd(e,t,i,r,a,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Gt(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?o=Gt(a,o):(o=un(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?si(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=ai,r}return o=e.child,e=o.sibling,r=Gt(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ui(e,t){return t=Pl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hl(e,t,n,r){return r!==null&&Oo(r),Tn(t,e.child,null,n),e=ui(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wd(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=ri(Error(p(422))),hl(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Pl({mode:"visible",children:r.children},l,0,null),o=un(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Tn(t,e.child,null,i),t.child.memoizedState=si(i),t.memoizedState=ai,o);if((t.mode&1)===0)return hl(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(p(419)),r=ri(o,r,void 0),hl(e,t,i,r)}if(a=(i&e.childLanes)!==0,Me||a){if(r=ke,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|i))!==0?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Nt(e,l),ct(r,e,l,-1))}return Ni(),r=ri(Error(p(421))),hl(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Ad.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Ge=Ot(l.nextSibling),$e=t,ae=!0,it=null,e!==null&&(qe[Xe++]=_t,qe[Xe++]=Ct,qe[Xe++]=Zt,_t=e.id,Ct=e.overflow,Zt=t),t=ui(t,r.children),t.flags|=4096,t)}function nu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Uo(e.return,t,n)}function ci(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function ru(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(je(e,t,r.children,n),r=se.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nu(e,n,t);else if(e.tag===19)nu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(se,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ul(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ci(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ul(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ci(t,!0,n,null,o);break;case"together":ci(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function vl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ln|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(p(153));if(t.child!==null){for(e=t.child,n=Gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sd(e,t,n){switch(t.tag){case 3:Zs(t),En();break;case 5:vs(t);break;case 1:De(t.type)&&Zr(t);break;case 4:Vo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;ne(ol,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(se,se.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?tu(e,t,n):(ne(se,se.current&1),e=Tt(e,t,n),e!==null?e.sibling:null);ne(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return ru(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ne(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,qs(e,t,n)}return Tt(e,t,n)}var lu,di,ou,iu;lu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},di=function(){},ou=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,nn(gt.current);var o=null;switch(n){case"input":l=Fl(e,l),r=Fl(e,r),o=[];break;case"select":l=P({},l,{value:void 0}),r=P({},r,{value:void 0}),o=[];break;case"textarea":l=Jl(e,l),r=Jl(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qr)}Wl(n,r);var i;n=null;for(g in l)if(!r.hasOwnProperty(g)&&l.hasOwnProperty(g)&&l[g]!=null)if(g==="style"){var a=l[g];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(h.hasOwnProperty(g)?o||(o=[]):(o=o||[]).push(g,null));for(g in r){var s=r[g];if(a=l!=null?l[g]:void 0,r.hasOwnProperty(g)&&s!==a&&(s!=null||a!=null))if(g==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(o||(o=[]),o.push(g,n)),n=s;else g==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(g,s)):g==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(g,""+s):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(h.hasOwnProperty(g)?(s!=null&&g==="onScroll"&&le("scroll",e),o||a===s||(o=[])):(o=o||[]).push(g,s))}n&&(o=o||[]).push("style",n);var g=o;(t.updateQueue=g)&&(t.flags|=4)}},iu=function(e,t,n,r){n!==r&&(t.flags|=4)};function yr(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function kd(e,t,n){var r=t.pendingProps;switch(Lo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return De(t.type)&&Yr(),Te(t),null;case 3:return r=t.stateNode,jn(),oe(Oe),oe(Ne),$o(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(rl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,it!==null&&(xi(it),it=null))),di(e,t),Te(t),null;case 5:Wo(t);var l=nn(pr.current);if(n=t.type,e!==null&&t.stateNode!=null)ou(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(p(166));return Te(t),null}if(e=nn(gt.current),rl(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[mt]=t,r[sr]=o,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(l=0;l<or.length;l++)le(or[l],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":Ui(r,o),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},le("invalid",r);break;case"textarea":Vi(r,o),le("invalid",r)}Wl(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Kr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Kr(r.textContent,a,e),l=["children",""+a]):h.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&le("scroll",r)}switch(n){case"input":Er(r),Ji(r,o,!0);break;case"textarea":Er(r),Hi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=qr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$i(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[mt]=t,e[sr]=r,lu(e,t,!1,!1),t.stateNode=e;e:{switch(i=Hl(n,r),n){case"dialog":le("cancel",e),le("close",e),l=r;break;case"iframe":case"object":case"embed":le("load",e),l=r;break;case"video":case"audio":for(l=0;l<or.length;l++)le(or[l],e);l=r;break;case"source":le("error",e),l=r;break;case"img":case"image":case"link":le("error",e),le("load",e),l=r;break;case"details":le("toggle",e),l=r;break;case"input":Ui(e,r),l=Fl(e,r),le("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=P({},r,{value:void 0}),le("invalid",e);break;case"textarea":Vi(e,r),l=Jl(e,r),le("invalid",e);break;default:l=r}Wl(n,l),a=l;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Ki(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Gi(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Un(e,s):typeof s=="number"&&Un(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(h.hasOwnProperty(o)?s!=null&&o==="onScroll"&&le("scroll",e):s!=null&&Je(e,o,s,i))}switch(n){case"input":Er(e),Ji(e,r,!1);break;case"textarea":Er(e),Hi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+K(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?dn(e,!!r.multiple,o,!1):r.defaultValue!=null&&dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=qr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)iu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(p(166));if(n=nn(pr.current),nn(gt.current),rl(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(o=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:Kr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Kr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return Te(t),null;case 13:if(oe(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Ge!==null&&(t.mode&1)!==0&&(t.flags&128)===0)us(),En(),t.flags|=98560,o=!1;else if(o=rl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(p(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(p(317));o[mt]=t}else En(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),o=!1}else it!==null&&(xi(it),it=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(se.current&1)!==0?we===0&&(we=3):Ni())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return jn(),di(e,t),e===null&&ir(t.stateNode.containerInfo),Te(t),null;case 10:return Fo(t.type._context),Te(t),null;case 17:return De(t.type)&&Yr(),Te(t),null;case 19:if(oe(se),o=t.memoizedState,o===null)return Te(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)yr(o,!1);else{if(we!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ul(e),i!==null){for(t.flags|=128,yr(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(se,se.current&1|2),t.child}e=e.sibling}o.tail!==null&&pe()>In&&(t.flags|=128,r=!0,yr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ul(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!ae)return Te(t),null}else 2*pe()-o.renderingStartTime>In&&n!==1073741824&&(t.flags|=128,r=!0,yr(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=pe(),t.sibling=null,n=se.current,ne(se,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return Ci(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Qe&1073741824)!==0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(p(156,t.tag))}function xd(e,t){switch(Lo(t),t.tag){case 1:return De(t.type)&&Yr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jn(),oe(Oe),oe(Ne),$o(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Wo(t),null;case 13:if(oe(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(p(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(se),null;case 4:return jn(),null;case 10:return Fo(t.type._context),null;case 22:case 23:return Ci(),null;case 24:return null;default:return null}}var yl=!1,be=!1,_d=typeof WeakSet=="function"?WeakSet:Set,b=null;function An(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function fi(e,t,n){try{n()}catch(r){fe(e,t,r)}}var au=!1;function Cd(e,t){if(Co=Mr,e=Fa(),ho(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,g=0,S=0,k=e,y=null;t:for(;;){for(var E;k!==n||l!==0&&k.nodeType!==3||(a=i+l),k!==o||r!==0&&k.nodeType!==3||(s=i+r),k.nodeType===3&&(i+=k.nodeValue.length),(E=k.firstChild)!==null;)y=k,k=E;for(;;){if(k===e)break t;if(y===n&&++g===l&&(a=i),y===o&&++S===r&&(s=i),(E=k.nextSibling)!==null)break;k=y,y=k.parentNode}k=E}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(No={focusedElem:e,selectionRange:n},Mr=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var j=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var A=j.memoizedProps,me=j.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?A:at(t.type,A),me);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(x){fe(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return j=au,au=!1,j}function wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&fi(t,n,o)}l=l.next}while(l!==r)}}function wl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function su(e){var t=e.alternate;t!==null&&(e.alternate=null,su(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[sr],delete t[Po],delete t[id],delete t[ad])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function uu(e){return e.tag===5||e.tag===3||e.tag===4}function cu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qr));else if(r!==4&&(e=e.child,e!==null))for(mi(e,t,n),e=e.sibling;e!==null;)mi(e,t,n),e=e.sibling}function gi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gi(e,t,n),e=e.sibling;e!==null;)gi(e,t,n),e=e.sibling}var _e=null,st=!1;function Jt(e,t,n){for(n=n.child;n!==null;)du(e,t,n),n=n.sibling}function du(e,t,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Ar,n)}catch{}switch(n.tag){case 5:be||An(n,t);case 6:var r=_e,l=st;_e=null,Jt(e,t,n),_e=r,st=l,_e!==null&&(st?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(st?(e=_e,n=n.stateNode,e.nodeType===8?bo(e.parentNode,n):e.nodeType===1&&bo(e,n),Xn(e)):bo(_e,n.stateNode));break;case 4:r=_e,l=st,_e=n.stateNode.containerInfo,st=!0,Jt(e,t,n),_e=r,st=l;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&((o&2)!==0||(o&4)!==0)&&fi(n,t,i),l=l.next}while(l!==r)}Jt(e,t,n);break;case 1:if(!be&&(An(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,t,a)}Jt(e,t,n);break;case 21:Jt(e,t,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,Jt(e,t,n),be=r):Jt(e,t,n);break;default:Jt(e,t,n)}}function fu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _d),t.forEach(function(r){var l=Ld.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:_e=a.stateNode,st=!1;break e;case 3:_e=a.stateNode.containerInfo,st=!0;break e;case 4:_e=a.stateNode.containerInfo,st=!0;break e}a=a.return}if(_e===null)throw Error(p(160));du(o,i,l),_e=null,st=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(g){fe(l,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pu(t,e),t=t.sibling}function pu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),vt(e),r&4){try{wr(3,e,e.return),wl(3,e)}catch(A){fe(e,e.return,A)}try{wr(5,e,e.return)}catch(A){fe(e,e.return,A)}}break;case 1:ut(t,e),vt(e),r&512&&n!==null&&An(n,n.return);break;case 5:if(ut(t,e),vt(e),r&512&&n!==null&&An(n,n.return),e.flags&32){var l=e.stateNode;try{Un(l,"")}catch(A){fe(e,e.return,A)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Bi(l,o),Hl(a,i);var g=Hl(a,o);for(i=0;i<s.length;i+=2){var S=s[i],k=s[i+1];S==="style"?Ki(l,k):S==="dangerouslySetInnerHTML"?Gi(l,k):S==="children"?Un(l,k):Je(l,S,k,g)}switch(a){case"input":Ul(l,o);break;case"textarea":Wi(l,o);break;case"select":var y=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var E=o.value;E!=null?dn(l,!!o.multiple,E,!1):y!==!!o.multiple&&(o.defaultValue!=null?dn(l,!!o.multiple,o.defaultValue,!0):dn(l,!!o.multiple,o.multiple?[]:"",!1))}l[sr]=o}catch(A){fe(e,e.return,A)}}break;case 6:if(ut(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(p(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(A){fe(e,e.return,A)}}break;case 3:if(ut(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xn(t.containerInfo)}catch(A){fe(e,e.return,A)}break;case 4:ut(t,e),vt(e);break;case 13:ut(t,e),vt(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(yi=pe())),r&4&&fu(e);break;case 22:if(S=n!==null&&n.memoizedState!==null,e.mode&1?(be=(g=be)||S,ut(t,e),be=g):ut(t,e),vt(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!S&&(e.mode&1)!==0)for(b=e,S=e.child;S!==null;){for(k=b=S;b!==null;){switch(y=b,E=y.child,y.tag){case 0:case 11:case 14:case 15:wr(4,y,y.return);break;case 1:An(y,y.return);var j=y.stateNode;if(typeof j.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(A){fe(r,n,A)}}break;case 5:An(y,y.return);break;case 22:if(y.memoizedState!==null){hu(k);continue}}E!==null?(E.return=y,b=E):hu(k)}S=S.sibling}e:for(S=null,k=e;;){if(k.tag===5){if(S===null){S=k;try{l=k.stateNode,g?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=k.stateNode,s=k.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Qi("display",i))}catch(A){fe(e,e.return,A)}}}else if(k.tag===6){if(S===null)try{k.stateNode.nodeValue=g?"":k.memoizedProps}catch(A){fe(e,e.return,A)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===e)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===e)break e;for(;k.sibling===null;){if(k.return===null||k.return===e)break e;S===k&&(S=null),k=k.return}S===k&&(S=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:ut(t,e),vt(e),r&4&&fu(e);break;case 21:break;default:ut(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(uu(n)){var r=n;break e}n=n.return}throw Error(p(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Un(l,""),r.flags&=-33);var o=cu(e);gi(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,a=cu(e);mi(e,a,i);break;default:throw Error(p(161))}}catch(s){fe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nd(e,t,n){b=e,mu(e)}function mu(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var l=b,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||yl;if(!i){var a=l.alternate,s=a!==null&&a.memoizedState!==null||be;a=yl;var g=be;if(yl=i,(be=s)&&!g)for(b=l;b!==null;)i=b,s=i.child,i.tag===22&&i.memoizedState!==null?vu(l):s!==null?(s.return=i,b=s):vu(l);for(;o!==null;)b=o,mu(o),o=o.sibling;b=l,yl=a,be=g}gu(e)}else(l.subtreeFlags&8772)!==0&&o!==null?(o.return=l,b=o):gu(e)}}function gu(e){for(;b!==null;){var t=b;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:be||wl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!be)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:at(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&hs(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hs(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var S=g.memoizedState;if(S!==null){var k=S.dehydrated;k!==null&&Xn(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}be||t.flags&512&&pi(t)}catch(y){fe(t,t.return,y)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function hu(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function vu(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{wl(4,t)}catch(s){fe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){fe(t,l,s)}}var o=t.return;try{pi(t)}catch(s){fe(t,o,s)}break;case 5:var i=t.return;try{pi(t)}catch(s){fe(t,i,s)}}}catch(s){fe(t,t.return,s)}if(t===e){b=null;break}var a=t.sibling;if(a!==null){a.return=t.return,b=a;break}b=t.return}}var Ed=Math.ceil,Sl=ve.ReactCurrentDispatcher,hi=ve.ReactCurrentOwner,et=ve.ReactCurrentBatchConfig,H=0,ke=null,ge=null,Ce=0,Qe=0,Ln=Dt(0),we=0,Sr=null,ln=0,kl=0,vi=0,kr=null,Fe=null,yi=0,In=1/0,bt=null,xl=!1,wi=null,Vt=null,_l=!1,Wt=null,Cl=0,xr=0,Si=null,Nl=-1,El=0;function Re(){return(H&6)!==0?pe():Nl!==-1?Nl:Nl=pe()}function Ht(e){return(e.mode&1)===0?1:(H&2)!==0&&Ce!==0?Ce&-Ce:ud.transition!==null?(El===0&&(El=ca()),El):(e=q,e!==0||(e=window.event,e=e===void 0?16:wa(e.type)),e)}function ct(e,t,n,r){if(50<xr)throw xr=0,Si=null,Error(p(185));$n(e,n,r),((H&2)===0||e!==ke)&&(e===ke&&((H&2)===0&&(kl|=n),we===4&&$t(e,Ce)),Ue(e,r),n===1&&H===0&&(t.mode&1)===0&&(In=pe()+500,el&&Ft()))}function Ue(e,t){var n=e.callbackNode;uc(e,t);var r=zr(e,e===ke?Ce:0);if(r===0)n!==null&&aa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&aa(n),t===1)e.tag===0?sd(wu.bind(null,e)):ls(wu.bind(null,e)),ld(function(){(H&6)===0&&Ft()}),n=null;else{switch(da(r)){case 1:n=Yl;break;case 4:n=sa;break;case 16:n=Rr;break;case 536870912:n=ua;break;default:n=Rr}n=Tu(n,yu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yu(e,t){if(Nl=-1,El=0,(H&6)!==0)throw Error(p(327));var n=e.callbackNode;if(zn()&&e.callbackNode!==n)return null;var r=zr(e,e===ke?Ce:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Tl(e,r);else{t=r;var l=H;H|=2;var o=ku();(ke!==e||Ce!==t)&&(bt=null,In=pe()+500,an(e,t));do try{Pd();break}catch(a){Su(e,a)}while(!0);Mo(),Sl.current=o,H=l,ge!==null?t=0:(ke=null,Ce=0,t=we)}if(t!==0){if(t===2&&(l=Zl(e),l!==0&&(r=l,t=ki(e,l))),t===1)throw n=Sr,an(e,0),$t(e,r),Ue(e,pe()),n;if(t===6)$t(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Td(l)&&(t=Tl(e,r),t===2&&(o=Zl(e),o!==0&&(r=o,t=ki(e,o))),t===1))throw n=Sr,an(e,0),$t(e,r),Ue(e,pe()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(p(345));case 2:sn(e,Fe,bt);break;case 3:if($t(e,r),(r&130023424)===r&&(t=yi+500-pe(),10<t)){if(zr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Re(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=To(sn.bind(null,e,Fe,bt),t);break}sn(e,Fe,bt);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-lt(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ed(r/1960))-r,10<r){e.timeoutHandle=To(sn.bind(null,e,Fe,bt),r);break}sn(e,Fe,bt);break;case 5:sn(e,Fe,bt);break;default:throw Error(p(329))}}}return Ue(e,pe()),e.callbackNode===n?yu.bind(null,e):null}function ki(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=Tl(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&xi(t)),e}function xi(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function Td(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!ot(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~vi,t&=~kl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-lt(t),r=1<<n;e[n]=-1,t&=~r}}function wu(e){if((H&6)!==0)throw Error(p(327));zn();var t=zr(e,0);if((t&1)===0)return Ue(e,pe()),null;var n=Tl(e,t);if(e.tag!==0&&n===2){var r=Zl(e);r!==0&&(t=r,n=ki(e,r))}if(n===1)throw n=Sr,an(e,0),$t(e,t),Ue(e,pe()),n;if(n===6)throw Error(p(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,Fe,bt),Ue(e,pe()),null}function _i(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(In=pe()+500,el&&Ft())}}function on(e){Wt!==null&&Wt.tag===0&&(H&6)===0&&zn();var t=H;H|=1;var n=et.transition,r=q;try{if(et.transition=null,q=1,e)return e()}finally{q=r,et.transition=n,H=t,(H&6)===0&&Ft()}}function Ci(){Qe=Ln.current,oe(Ln)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rd(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(Lo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yr();break;case 3:jn(),oe(Oe),oe(Ne),$o();break;case 5:Wo(r);break;case 4:jn();break;case 13:oe(se);break;case 19:oe(se);break;case 10:Fo(r.type._context);break;case 22:case 23:Ci()}n=n.return}if(ke=e,ge=e=Gt(e.current,null),Ce=Qe=t,we=0,Sr=null,vi=kl=ln=0,Fe=kr=null,tn!==null){for(t=0;t<tn.length;t++)if(n=tn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}tn=null}return e}function Su(e,t){do{var n=ge;try{if(Mo(),cl.current=ml,dl){for(var r=ue.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}dl=!1}if(rn=0,Se=ye=ue=null,mr=!1,gr=0,hi.current=null,n===null||n.return===null){we=1,Sr=t,ge=null;break}e:{var o=e,i=n.return,a=n,s=t;if(t=Ce,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var g=s,S=a,k=S.tag;if((S.mode&1)===0&&(k===0||k===11||k===15)){var y=S.alternate;y?(S.updateQueue=y.updateQueue,S.memoizedState=y.memoizedState,S.lanes=y.lanes):(S.updateQueue=null,S.memoizedState=null)}var E=Hs(i);if(E!==null){E.flags&=-257,$s(E,i,a,o,t),E.mode&1&&Ws(o,g,t),t=E,s=g;var j=t.updateQueue;if(j===null){var A=new Set;A.add(s),t.updateQueue=A}else j.add(s);break e}else{if((t&1)===0){Ws(o,g,t),Ni();break e}s=Error(p(426))}}else if(ae&&a.mode&1){var me=Hs(i);if(me!==null){(me.flags&65536)===0&&(me.flags|=256),$s(me,i,a,o,t),Oo(Rn(s,a));break e}}o=s=Rn(s,a),we!==4&&(we=2),kr===null?kr=[o]:kr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Js(o,s,t);gs(o,f);break e;case 1:a=s;var u=o.type,m=o.stateNode;if((o.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Vt===null||!Vt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Vs(o,a,t);gs(o,x);break e}}o=o.return}while(o!==null)}_u(n)}catch(L){t=L,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function ku(){var e=Sl.current;return Sl.current=ml,e===null?ml:e}function Ni(){(we===0||we===3||we===2)&&(we=4),ke===null||(ln&268435455)===0&&(kl&268435455)===0||$t(ke,Ce)}function Tl(e,t){var n=H;H|=2;var r=ku();(ke!==e||Ce!==t)&&(bt=null,an(e,t));do try{bd();break}catch(l){Su(e,l)}while(!0);if(Mo(),H=n,Sl.current=r,ge!==null)throw Error(p(261));return ke=null,Ce=0,we}function bd(){for(;ge!==null;)xu(ge)}function Pd(){for(;ge!==null&&!ec();)xu(ge)}function xu(e){var t=Eu(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?_u(e):ge=t,hi.current=null}function _u(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=kd(n,t,Qe),n!==null){ge=n;return}}else{if(n=xd(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ge=null;return}}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);we===0&&(we=5)}function sn(e,t,n){var r=q,l=et.transition;try{et.transition=null,q=1,jd(e,t,n,r)}finally{et.transition=l,q=r}return null}function jd(e,t,n,r){do zn();while(Wt!==null);if((H&6)!==0)throw Error(p(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(p(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(cc(e,o),e===ke&&(ge=ke=null,Ce=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||_l||(_l=!0,Tu(Rr,function(){return zn(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=et.transition,et.transition=null;var i=q;q=1;var a=H;H|=4,hi.current=null,Cd(e,n),pu(n,e),qc(No),Mr=!!Co,No=Co=null,e.current=n,Nd(n),tc(),H=a,q=i,et.transition=o}else e.current=n;if(_l&&(_l=!1,Wt=e,Cl=l),o=e.pendingLanes,o===0&&(Vt=null),lc(n.stateNode),Ue(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(xl)throw xl=!1,e=wi,wi=null,e;return(Cl&1)!==0&&e.tag!==0&&zn(),o=e.pendingLanes,(o&1)!==0?e===Si?xr++:(xr=0,Si=e):xr=0,Ft(),null}function zn(){if(Wt!==null){var e=da(Cl),t=et.transition,n=q;try{if(et.transition=null,q=16>e?16:e,Wt===null)var r=!1;else{if(e=Wt,Wt=null,Cl=0,(H&6)!==0)throw Error(p(331));var l=H;for(H|=4,b=e.current;b!==null;){var o=b,i=o.child;if((b.flags&16)!==0){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var g=a[s];for(b=g;b!==null;){var S=b;switch(S.tag){case 0:case 11:case 15:wr(8,S,o)}var k=S.child;if(k!==null)k.return=S,b=k;else for(;b!==null;){S=b;var y=S.sibling,E=S.return;if(su(S),S===g){b=null;break}if(y!==null){y.return=E,b=y;break}b=E}}}var j=o.alternate;if(j!==null){var A=j.child;if(A!==null){j.child=null;do{var me=A.sibling;A.sibling=null,A=me}while(A!==null)}}b=o}}if((o.subtreeFlags&2064)!==0&&i!==null)i.return=o,b=i;else e:for(;b!==null;){if(o=b,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:wr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,b=f;break e}b=o.return}}var u=e.current;for(b=u;b!==null;){i=b;var m=i.child;if((i.subtreeFlags&2064)!==0&&m!==null)m.return=i,b=m;else e:for(i=u;b!==null;){if(a=b,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:wl(9,a)}}catch(L){fe(a,a.return,L)}if(a===i){b=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,b=x;break e}b=a.return}}if(H=l,Ft(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Ar,e)}catch{}r=!0}return r}finally{q=n,et.transition=t}}return!1}function Cu(e,t,n){t=Rn(n,t),t=Js(e,t,1),e=Bt(e,t,1),t=Re(),e!==null&&($n(e,1,t),Ue(e,t))}function fe(e,t,n){if(e.tag===3)Cu(e,e,n);else for(;t!==null;){if(t.tag===3){Cu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){e=Rn(n,e),e=Vs(t,e,1),t=Bt(t,e,1),e=Re(),t!==null&&($n(t,1,e),Ue(t,e));break}}t=t.return}}function Rd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&n,ke===e&&(Ce&n)===n&&(we===4||we===3&&(Ce&130023424)===Ce&&500>pe()-yi?an(e,0):vi|=n),Ue(e,t)}function Nu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ir,Ir<<=1,(Ir&130023424)===0&&(Ir=4194304)));var n=Re();e=Nt(e,t),e!==null&&($n(e,t,n),Ue(e,n))}function Ad(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nu(e,n)}function Ld(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(p(314))}r!==null&&r.delete(t),Nu(e,n)}var Eu;Eu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)Me=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Me=!1,Sd(e,t,n);Me=(e.flags&131072)!==0}else Me=!1,ae&&(t.flags&1048576)!==0&&os(t,nl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;vl(e,t),e=t.pendingProps;var l=_n(t,Ne.current);Pn(t,n),l=Ko(null,t,r,e,l,n);var o=qo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,De(r)?(o=!0,Zr(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Jo(t),l.updater=gl,t.stateNode=l,l._reactInternals=t,ni(t,r,e,n),t=ii(null,t,r,!0,o,n)):(t.tag=0,ae&&o&&Ao(t),je(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(vl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=zd(r),e=at(r,e),l){case 0:t=oi(null,t,r,e,n);break e;case 1:t=Ys(null,t,r,e,n);break e;case 11:t=Gs(null,t,r,e,n);break e;case 14:t=Qs(null,t,r,at(r.type,e),n);break e}throw Error(p(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:at(r,l),oi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:at(r,l),Ys(e,t,r,l,n);case 3:e:{if(Zs(t),e===null)throw Error(p(387));r=t.pendingProps,o=t.memoizedState,l=o.element,ms(e,t),sl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Rn(Error(p(423)),t),t=eu(e,t,r,n,l);break e}else if(r!==l){l=Rn(Error(p(424)),t),t=eu(e,t,r,n,l);break e}else for(Ge=Ot(t.stateNode.containerInfo.firstChild),$e=t,ae=!0,it=null,n=fs(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(En(),r===l){t=Tt(e,t,n);break e}je(e,t,r,n)}t=t.child}return t;case 5:return vs(t),e===null&&zo(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Eo(r,l)?i=null:o!==null&&Eo(r,o)&&(t.flags|=32),Xs(e,t),je(e,t,i,n),t.child;case 6:return e===null&&zo(t),null;case 13:return tu(e,t,n);case 4:return Vo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tn(t,null,r,n):je(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:at(r,l),Gs(e,t,r,l,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,ne(ol,r._currentValue),r._currentValue=i,o!==null)if(ot(o.value,i)){if(o.children===l.children&&!Oe.current){t=Tt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Et(-1,n&-n),s.tag=2;var g=o.updateQueue;if(g!==null){g=g.shared;var S=g.pending;S===null?s.next=s:(s.next=S.next,S.next=s),g.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Uo(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(p(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Uo(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}je(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Pn(t,n),l=Ye(l),r=r(l),t.flags|=1,je(e,t,r,n),t.child;case 14:return r=t.type,l=at(r,t.pendingProps),l=at(r.type,l),Qs(e,t,r,l,n);case 15:return Ks(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:at(r,l),vl(e,t),t.tag=1,De(r)?(e=!0,Zr(t)):e=!1,Pn(t,n),Us(t,r,l),ni(t,r,l,n),ii(null,t,r,!0,e,n);case 19:return ru(e,t,n);case 22:return qs(e,t,n)}throw Error(p(156,t.tag))};function Tu(e,t){return ia(e,t)}function Id(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,r){return new Id(e,t,n,r)}function Ei(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zd(e){if(typeof e=="function")return Ei(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dt)return 11;if(e===ft)return 14}return 2}function Gt(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bl(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Ei(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ie:return un(n.children,l,o,t);case Ke:i=8,l|=8;break;case Pt:return e=tt(12,n,t,l|2),e.elementType=Pt,e.lanes=o,e;case Ve:return e=tt(13,n,t,l),e.elementType=Ve,e.lanes=o,e;case rt:return e=tt(19,n,t,l),e.elementType=rt,e.lanes=o,e;case de:return Pl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case St:i=10;break e;case Kt:i=9;break e;case dt:i=11;break e;case ft:i=14;break e;case ze:i=16,r=null;break e}throw Error(p(130,e==null?e:typeof e,""))}return t=tt(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function un(e,t,n,r){return e=tt(7,e,r,t),e.lanes=n,e}function Pl(e,t,n,r){return e=tt(22,e,r,t),e.elementType=de,e.lanes=n,e.stateNode={isHidden:!1},e}function Ti(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function bi(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Od(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eo(0),this.expirationTimes=eo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eo(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Pi(e,t,n,r,l,o,i,a,s){return e=new Od(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=tt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jo(o),e}function Dd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pe,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bu(e){if(!e)return Mt;e=e._reactInternals;e:{if(qt(e)!==e||e.tag!==1)throw Error(p(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(De(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(p(171))}if(e.tag===1){var n=e.type;if(De(n))return ns(e,n,t)}return t}function Pu(e,t,n,r,l,o,i,a,s){return e=Pi(n,r,!0,e,l,o,i,a,s),e.context=bu(null),n=e.current,r=Re(),l=Ht(n),o=Et(r,l),o.callback=t??null,Bt(n,o,l),e.current.lanes=l,$n(e,l,r),Ue(e,r),e}function jl(e,t,n,r){var l=t.current,o=Re(),i=Ht(l);return n=bu(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(l,t,i),e!==null&&(ct(e,l,i,o),al(e,l,i)),i}function Rl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ju(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ji(e,t){ju(e,t),(e=e.alternate)&&ju(e,t)}function Md(){return null}var Ru=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ri(e){this._internalRoot=e}Al.prototype.render=Ri.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(p(409));jl(e,t,null,null)},Al.prototype.unmount=Ri.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){jl(null,e,null,null)}),t[kt]=null}};function Al(e){this._internalRoot=e}Al.prototype.unstable_scheduleHydration=function(e){if(e){var t=ma();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&va(e)}};function Ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Au(){}function Fd(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var g=Rl(i);o.call(g)}}var i=Pu(t,r,e,0,null,!1,!1,"",Au);return e._reactRootContainer=i,e[kt]=i.current,ir(e.nodeType===8?e.parentNode:e),on(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var g=Rl(s);a.call(g)}}var s=Pi(e,0,!1,null,null,!1,!1,"",Au);return e._reactRootContainer=s,e[kt]=s.current,ir(e.nodeType===8?e.parentNode:e),on(function(){jl(t,s,n,r)}),s}function Il(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var a=l;l=function(){var s=Rl(i);a.call(s)}}jl(t,i,e,l)}else i=Fd(n,t,e,l,r);return Rl(i)}fa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hn(t.pendingLanes);n!==0&&(to(t,n|1),Ue(t,pe()),(H&6)===0&&(In=pe()+500,Ft()))}break;case 13:on(function(){var r=Nt(e,1);if(r!==null){var l=Re();ct(r,e,1,l)}}),ji(e,1)}},no=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=Re();ct(t,e,134217728,n)}ji(e,134217728)}},pa=function(e){if(e.tag===13){var t=Ht(e),n=Nt(e,t);if(n!==null){var r=Re();ct(n,e,t,r)}ji(e,t)}},ma=function(){return q},ga=function(e,t){var n=q;try{return q=e,t()}finally{q=n}},Ql=function(e,t,n){switch(t){case"input":if(Ul(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Xr(r);if(!l)throw Error(p(90));Fi(r),Ul(r,l)}}}break;case"textarea":Wi(e,n);break;case"select":t=n.value,t!=null&&dn(e,!!n.multiple,t,!1)}},Zi=_i,ea=on;var Ud={usingClientEntryPoint:!1,Events:[ur,kn,Xr,Xi,Yi,_i]},_r={findFiberByHostInstance:Xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bd={bundleType:_r.bundleType,version:_r.version,rendererPackageName:_r.rendererPackageName,rendererConfig:_r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ve.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=la(e),e===null?null:e.stateNode},findFiberByHostInstance:_r.findFiberByHostInstance||Md,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zl.isDisabled&&zl.supportsFiber)try{Ar=zl.inject(Bd),pt=zl}catch{}}return Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ud,Be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ai(t))throw Error(p(200));return Dd(e,t,null,n)},Be.createRoot=function(e,t){if(!Ai(e))throw Error(p(299));var n=!1,r="",l=Ru;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Pi(e,1,!1,null,null,n,!1,r,l),e[kt]=t.current,ir(e.nodeType===8?e.parentNode:e),new Ri(t)},Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=la(t),e=e===null?null:e.stateNode,e},Be.flushSync=function(e){return on(e)},Be.hydrate=function(e,t,n){if(!Ll(t))throw Error(p(200));return Il(null,e,t,!0,n)},Be.hydrateRoot=function(e,t,n){if(!Ai(e))throw Error(p(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=Ru;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Pu(t,null,e,1,n??null,l,!1,o,i),e[kt]=t.current,ir(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Al(t)},Be.render=function(e,t,n){if(!Ll(t))throw Error(p(200));return Il(null,e,t,!1,n)},Be.unmountComponentAtNode=function(e){if(!Ll(e))throw Error(p(40));return e._reactRootContainer?(on(function(){Il(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1},Be.unstable_batchedUpdates=_i,Be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ll(n))throw Error(p(200));if(e==null||e._reactInternals===void 0)throw Error(p(38));return Il(e,t,n,!1,r)},Be.version="18.3.1-next-f1338f8080-20240426",Be}var Uu;function Kd(){if(Uu)return zi.exports;Uu=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(T){console.error(T)}}return c(),zi.exports=Qd(),zi.exports}var Bu;function qd(){if(Bu)return Ol;Bu=1;var c=Kd();return Ol.createRoot=c.createRoot,Ol.hydrateRoot=c.hydrateRoot,Ol}var Xd=qd();function Yd(){const[c,T]=he.useState("java"),[p,D]=he.useState("ts"),[h,C]=he.useState("variables");return{fromLang:c,toLang:p,activeSectionId:h,setFromLang:T,setToLang:D,setActiveSectionId:C}}const Zd=120;function ef(){const[c,T]=he.useState(""),[p,D]=he.useState([]),h=he.useRef(null),C=he.useRef(null);he.useEffect(()=>{const R=new Worker(new URL("/lang-party/assets/search.worker-B0V2-pg4.js",import.meta.url),{type:"module"});return h.current=R,R.onmessage=U=>{D(U.data)},()=>{R.terminate(),h.current=null}},[]);const W=he.useCallback(R=>{if(T(R),C.current!==null&&clearTimeout(C.current),R.trim().length===0){D([]);return}C.current=setTimeout(()=>{var U;(U=h.current)==null||U.postMessage(R)},Zd)},[]),v=he.useCallback(()=>{T(""),D([])},[]);return{query:c,results:p,setQuery:W,clear:v}}const tf="_wrapper_1616g_1",nf="_inputWrapper_1616g_7",rf="_icon_1616g_13",lf="_input_1616g_7",of="_clear_1616g_50",af="_dropdown_1616g_66",sf="_item_1616g_83",uf="_itemConcept_1616g_97",cf="_itemSection_1616g_102",yt={wrapper:tf,inputWrapper:nf,icon:rf,input:lf,clear:of,dropdown:af,item:sf,itemConcept:uf,itemSection:cf};function df({onSelect:c}){const{query:T,results:p,setQuery:D,clear:h}=ef(),[C,W]=he.useState(!1),[v,R]=he.useState(-1),U=he.useRef(null),X=he.useRef(null);he.useEffect(()=>{function I(Z){var ve;const ce=Z.target,Je=ce.tagName==="INPUT"||ce.tagName==="TEXTAREA";(Z.key==="/"&&!Je||(Z.metaKey||Z.ctrlKey)&&Z.key==="k")&&(Z.preventDefault(),(ve=U.current)==null||ve.focus(),W(!0))}return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[]),he.useEffect(()=>{p.length>0&&W(!0),R(-1)},[p]);function re(I){D(I.target.value)}function ee(){T.length>0&&p.length>0&&W(!0)}function Ae(){setTimeout(()=>W(!1),150)}function Le(I){var Z;if(!(!C||p.length===0))if(I.key==="ArrowDown")I.preventDefault(),R(ce=>Math.min(ce+1,p.length-1));else if(I.key==="ArrowUp")I.preventDefault(),R(ce=>Math.max(ce-1,0));else if(I.key==="Enter"){I.preventDefault();const ce=p[v>=0?v:0];ce&&Y(ce)}else I.key==="Escape"&&(h(),W(!1),(Z=U.current)==null||Z.blur())}const Y=he.useCallback(I=>{var Z;c(I.sectionId),h(),W(!1),(Z=U.current)==null||Z.blur()},[c,h]);return _.jsxs("div",{className:yt.wrapper,role:"search",children:[_.jsxs("div",{className:yt.inputWrapper,children:[_.jsx("span",{className:yt.icon,"aria-hidden":"true",children:"⌕"}),_.jsx("input",{ref:U,className:yt.input,type:"search",placeholder:"Search… (/ or ⌘K)",value:T,onChange:re,onFocus:ee,onBlur:Ae,onKeyDown:Le,"aria-label":"Search sections and concepts","aria-autocomplete":"list","aria-controls":"search-results","aria-activedescendant":v>=0?`search-result-${v}`:void 0,autoComplete:"off",spellCheck:!1}),T&&_.jsx("button",{className:yt.clear,onClick:()=>{var I;h(),W(!1),(I=U.current)==null||I.focus()},"aria-label":"Clear search",tabIndex:-1,children:"×"})]}),C&&p.length>0&&_.jsx("ul",{id:"search-results",ref:X,className:yt.dropdown,role:"listbox","aria-label":"Search results",children:p.map((I,Z)=>_.jsx("li",{id:`search-result-${Z}`,role:"option","aria-selected":Z===v,className:yt.item,"data-active":Z===v?"true":"false",onMouseDown:ce=>{ce.preventDefault(),Y(I)},onMouseEnter:()=>R(Z),children:I.conceptTitle?_.jsxs(_.Fragment,{children:[_.jsx("span",{className:yt.itemConcept,children:I.conceptTitle}),_.jsx("span",{className:yt.itemSection,children:I.sectionTitle})]}):_.jsx("span",{className:yt.itemSection,children:I.sectionTitle})},`${I.sectionId}-${I.conceptId??"section"}`))})]})}const ff="_header_aenja_1",pf="_menuBtn_aenja_15",mf="_menuIcon_aenja_30",gf="_logo_aenja_34",hf="_controls_aenja_46",vf="_label_aenja_54",yf="_select_aenja_63",wf="_arrow_aenja_94",wt={header:ff,menuBtn:pf,menuIcon:mf,logo:gf,controls:hf,label:vf,select:yf,arrow:wf},Ju=[{value:"java",label:"Java"},{value:"cpp",label:"C++"},{value:"python",label:"Python"},{value:"go",label:"Go"},{value:"js",label:"JavaScript"},{value:"ts",label:"TypeScript"}];function Sf({fromLang:c,toLang:T,onFromChange:p,onToChange:D,onSectionChange:h,menuOpen:C,onMenuToggle:W}){function v(U){const X=U.target.value;X===T&&D(c),p(X)}function R(U){const X=U.target.value;X===c&&p(T),D(X)}return _.jsxs("header",{className:wt.header,children:[_.jsx("button",{className:wt.menuBtn,onClick:W,"aria-label":C?"Close navigation":"Open navigation","aria-expanded":C,"aria-controls":"sidebar-nav",children:_.jsx("span",{className:wt.menuIcon,"aria-hidden":"true",children:C?"✕":"☰"})}),_.jsxs("div",{className:wt.logo,"aria-label":"lang.party",children:["lang",_.jsx("span",{children:"."}),"party"]}),_.jsx(df,{onSelect:h}),_.jsxs("div",{className:wt.controls,children:[_.jsx("label",{className:wt.label,htmlFor:"from-lang",children:"from"}),_.jsx("select",{id:"from-lang",className:wt.select,value:c,onChange:v,"data-lang":c,"aria-label":"Source language",children:Ju.map(({value:U,label:X})=>_.jsx("option",{value:U,children:X},U))}),_.jsx("span",{className:wt.arrow,"aria-hidden":"true",children:"→"}),_.jsx("label",{className:wt.label,htmlFor:"to-lang",children:"to"}),_.jsx("select",{id:"to-lang",className:wt.select,value:T,onChange:R,"data-lang":T,"aria-label":"Target language",children:Ju.map(({value:U,label:X})=>_.jsx("option",{value:U,children:X},U))})]})]})}const kf="_sidebar_1a7gq_1",xf="_group_1a7gq_29",_f="_groupLabel_1a7gq_33",Cf="_navItem_1a7gq_42",Dl={sidebar:kf,group:xf,groupLabel:_f,navItem:Cf},Nf=[{id:"variables",title:"Variables & Types",group:"basics"},{id:"functions",title:"Functions",group:"basics"},{id:"classes",title:"Classes & OOP",group:"basics"},{id:"interfaces",title:"Interfaces",group:"basics"},{id:"generics",title:"Generics",group:"basics"},{id:"errors",title:"Error Handling",group:"basics"},{id:"async",title:"Async",group:"basics"},{id:"collections",title:"Collections",group:"basics"},{id:"modules",title:"Modules",group:"basics"},{id:"conceptual",title:"Conceptual Gaps",group:"differences"},{id:"gotchas",title:"Gotchas",group:"differences"},{id:"ecosystem",title:"Tool Equivalents",group:"ecosystem"},{id:"frameworks",title:"UI Frameworks",group:"ecosystem"}],Ef={basics:"Language Basics",differences:"Key Differences",ecosystem:"Ecosystem"},Tf=["basics","differences","ecosystem"];function bf({activeSectionId:c,onSectionChange:T,mobileOpen:p}){return _.jsx("nav",{id:"sidebar-nav",className:Dl.sidebar,"aria-label":"Section navigation","data-mobile-open":p?"true":"false",children:Tf.map(D=>{const h=Nf.filter(C=>C.group===D);return _.jsxs("div",{className:Dl.group,children:[_.jsx("div",{className:Dl.groupLabel,children:Ef[D]}),h.map(({id:C,title:W})=>_.jsx("button",{className:Dl.navItem,"data-active":c===C?"true":"false",onClick:()=>T(C),"aria-current":c===C?"page":void 0,children:W},C))]},D)})})}const Pf=new Set(["abstract","assert","boolean","break","byte","case","catch","char","class","const","continue","default","do","double","else","enum","extends","final","finally","float","for","goto","if","implements","import","instanceof","int","interface","long","native","new","package","private","protected","public","return","short","static","strictfp","super","switch","synchronized","this","throw","throws","transient","try","var","void","volatile","while","record","sealed","permits","yield","true","false","null"]),jf=new Set(["alignas","alignof","asm","auto","bool","break","case","catch","char","char8_t","char16_t","char32_t","class","concept","const","consteval","constexpr","constinit","const_cast","continue","co_await","co_return","co_yield","decltype","default","delete","do","double","dynamic_cast","else","enum","explicit","export","extern","false","float","for","friend","goto","if","inline","int","long","mutable","namespace","new","noexcept","nullptr","operator","private","protected","public","register","reinterpret_cast","requires","return","short","signed","sizeof","static","static_assert","static_cast","struct","switch","template","this","thread_local","throw","true","try","typedef","typeid","typename","union","unsigned","using","virtual","void","volatile","wchar_t","while","include","define","pragma","ifndef","ifdef","endif","undef"]),Hu=new Set(["async","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","export","extends","false","finally","for","from","function","if","import","in","instanceof","let","new","null","of","return","static","super","switch","this","throw","true","try","typeof","undefined","var","void","while","with","yield"]),Rf=new Set([...Hu,"abstract","as","asserts","bigint","boolean","declare","enum","implements","infer","interface","is","keyof","module","namespace","never","number","object","override","private","protected","public","readonly","satisfies","string","symbol","type","unique","unknown"]),Af=new Set(["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield","int","float","str","bool","list","dict","set","tuple","type","object","super","self","cls","print","len","range","enumerate","zip","map","filter","isinstance","issubclass","hasattr","getattr","setattr","staticmethod","classmethod","property","abstractmethod"]),Lf=new Set(["break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var","bool","byte","complex64","complex128","error","float32","float64","int","int8","int16","int32","int64","rune","string","uint","uint8","uint16","uint32","uint64","uintptr","true","false","nil","iota","append","cap","close","copy","delete","len","make","new","panic","recover"]),If=new Set(["string","number","boolean","void","never","any","unknown","object","bigint","symbol"]);function zf(c){switch(c){case"java":return Pf;case"cpp":return jf;case"python":return Af;case"go":return Lf;case"js":return Hu;case"ts":return Rf}}function Of(c,T){const p=[],D=zf(T);let h=0;const C=c.length;for(;h<C;){if(c[h]==="/"&&c[h+1]==="/"){const v=c.indexOf(`
`,h),R=v===-1?c.slice(h):c.slice(h,v);p.push({type:"comment",value:R}),h+=R.length;continue}if(c[h]==="/"&&c[h+1]==="*"){const v=c.indexOf("*/",h+2),R=v===-1?c.slice(h):c.slice(h,v+2);p.push({type:"comment",value:R}),h+=R.length;continue}if(c[h]==="#"){const v=c.indexOf(`
`,h),R=v===-1?c.slice(h):c.slice(h,v);p.push({type:"comment",value:R}),h+=R.length;continue}if(c[h]==="`"){let v=h+1;for(;v<C;){if(c[v]==="\\"){v+=2;continue}if(c[v]==="`"){v++;break}v++}p.push({type:"string",value:c.slice(h,v)}),h=v;continue}if(c[h]==='"'&&c[h+1]==='"'&&c[h+2]==='"'||c[h]==="'"&&c[h+1]==="'"&&c[h+2]==="'"){const v=c.slice(h,h+3),R=c.indexOf(v,h+3),U=R===-1?c.slice(h):c.slice(h,R+3);p.push({type:"string",value:U}),h+=U.length;continue}if(c[h]==='"'){let v=h+1;for(;v<C;){if(c[v]==="\\"){v+=2;continue}if(c[v]==='"'){v++;break}if(c[v]===`
`)break;v++}p.push({type:"string",value:c.slice(h,v)}),h=v;continue}if(c[h]==="'"){let v=h+1;for(;v<C;){if(c[v]==="\\"){v+=2;continue}if(c[v]==="'"){v++;break}if(c[v]===`
`)break;v++}p.push({type:"string",value:c.slice(h,v)}),h=v;continue}if(/[0-9]/.test(c[h])||c[h]==="."&&h+1<C&&/[0-9]/.test(c[h+1])){let v=h;if(c[v]==="0"&&(c[v+1]==="x"||c[v+1]==="X"))for(v+=2;v<C&&/[0-9a-fA-F_]/.test(c[v]);)v++;else if(c[v]==="0"&&(c[v+1]==="b"||c[v+1]==="B"))for(v+=2;v<C&&/[01_]/.test(c[v]);)v++;else{for(;v<C&&/[0-9_]/.test(c[v]);)v++;if(v<C&&c[v]===".")for(v++;v<C&&/[0-9_]/.test(c[v]);)v++;if(v<C&&(c[v]==="e"||c[v]==="E"))for(v++,v<C&&(c[v]==="+"||c[v]==="-")&&v++;v<C&&/[0-9]/.test(c[v]);)v++;v<C&&/[fFdDlLuU]/.test(c[v])&&v++}p.push({type:"number",value:c.slice(h,v)}),h=v;continue}if(/[a-zA-Z_$]/.test(c[h])){let v=h;for(;v<C&&/[a-zA-Z0-9_$]/.test(c[v]);)v++;const R=c.slice(h,v);let U=v;for(;U<C&&c[U]===" ";)U++;D.has(R)?p.push({type:"keyword",value:R}):/^[A-Z][a-zA-Z0-9_$]*$/.test(R)||T==="ts"&&If.has(R)&&c[U]!=="("?p.push({type:"type",value:R}):c[U]==="("?p.push({type:"fn",value:R}):p.push({type:"text",value:R}),h=v;continue}const W=c.slice(h).match(/^(===|!==|:=|=>|->|::|<<|>>|<=|>=|==|!=|\|\||&&|\+\+|--|[+\-*/%&|^~<>=!?:;,.])/);if(W){p.push({type:"op",value:W[0]}),h+=W[0].length;continue}p.push({type:"text",value:c[h]}),h++}return p}const Df="_panel_12ubv_1",Mf="_header_12ubv_13",Ff="_dot_12ubv_23",Uf="_langName_12ubv_37",Bf="_pre_12ubv_45",On={panel:Df,header:Mf,dot:Ff,langName:Uf,pre:Bf,"token-keyword":"_token-keyword_12ubv_72","token-type":"_token-type_12ubv_73","token-string":"_token-string_12ubv_74","token-comment":"_token-comment_12ubv_75","token-number":"_token-number_12ubv_76","token-fn":"_token-fn_12ubv_77","token-op":"_token-op_12ubv_78","token-text":"_token-text_12ubv_79"},Vu={java:"Java",cpp:"C++",python:"Python",go:"Go",js:"JavaScript",ts:"TypeScript"};function Jf({panel:c}){const T=Of(c.code,c.lang);return _.jsxs("div",{className:On.panel,children:[_.jsxs("div",{className:On.header,children:[_.jsx("span",{className:On.dot,"data-lang":c.lang,"aria-hidden":"true"}),_.jsx("span",{className:On.langName,children:Vu[c.lang]??c.lang})]}),_.jsx("pre",{className:On.pre,tabIndex:0,"aria-label":`${Vu[c.lang]??c.lang} code example`,children:T.map((p,D)=>_.jsx("span",{className:On[`token-${p.type}`],children:p.value},D))})]})}const Vf="_callout_19b00_1",Wf={callout:Vf};function Hf(c){const T=[],p=/(\*\*[^*]+\*\*|`[^`]+`)/g;let D=0,h;for(;(h=p.exec(c))!==null;){h.index>D&&T.push(c.slice(D,h.index));const C=h[0];C.startsWith("**")?T.push(_.jsx("strong",{children:C.slice(2,-2)},h.index)):T.push(_.jsx("code",{children:C.slice(1,-1)},h.index)),D=h.index+C.length}return D<c.length&&T.push(c.slice(D)),T}function $f({variant:c,content:T}){return _.jsx("div",{className:Wf.callout,"data-variant":c,role:"note",children:Hf(T)})}const Gf="_card_qc7ah_1",Qf="_header_qc7ah_9",Kf="_title_qc7ah_19",qf="_note_qc7ah_25",Xf="_tag_qc7ah_33",Yf="_panels_qc7ah_60",Zf="_calloutWrap_qc7ah_70",cn={card:Gf,header:Qf,title:Kf,note:qf,tag:Xf,panels:Yf,calloutWrap:Zf},ep={breaking:"breaking",similar:"similar",gotcha:"gotcha"};function tp({concept:c,fromLang:T,toLang:p}){const D=c.panels.filter(h=>h.lang===T||h.lang===p);return _.jsxs("article",{className:cn.card,children:[_.jsxs("div",{className:cn.header,children:[_.jsx("h3",{className:cn.title,children:c.title}),c.tag&&_.jsx("span",{className:cn.tag,"data-tag":c.tag,children:ep[c.tag]}),c.note&&_.jsx("span",{className:cn.note,children:c.note})]}),_.jsx("div",{className:cn.panels,"data-count":String(D.length),children:D.map(h=>_.jsx(Jf,{panel:h},h.lang))}),c.callout&&_.jsx("div",{className:cn.calloutWrap,children:_.jsx($f,{variant:c.callout.variant,content:c.callout.content})})]})}const np="_card_ao6vr_1",rp="_from_ao6vr_8",lp="_label_ao6vr_15",op="_chips_ao6vr_22",ip="_chip_ao6vr_22",ap="_note_ao6vr_43",Dn={card:np,from:rp,label:lp,chips:op,chip:ip,note:ap};function sp({mapping:c}){return _.jsxs("div",{className:Dn.card,children:[_.jsx("div",{className:Dn.from,children:c.fromLabel}),_.jsx("div",{className:Dn.label,children:c.from}),_.jsx("div",{className:Dn.chips,children:c.to.map(T=>{const p=T.startsWith("★"),D=p?T.slice(1).trim():T;return _.jsx("span",{className:Dn.chip,"data-recommended":p?"true":"false",children:D},T)})}),c.note&&_.jsx("div",{className:Dn.note,children:c.note})]})}const up="_legend_1iixz_1",cp="_item_1iixz_10",dp="_tag_1iixz_17",fp="_desc_1iixz_45",Ml={legend:up,item:cp,tag:dp,desc:fp},pp=[{tag:"similar",label:"similar",desc:"Same concept, different syntax. Works the way you expect."},{tag:"breaking",label:"breaking",desc:"Same name or idea — but behavior differs significantly. High bug risk."},{tag:"gotcha",label:"gotcha",desc:"Easy mistake coming from another language. Read carefully."}];function mp(){return _.jsx("dl",{className:Ml.legend,"aria-label":"Tag legend",children:pp.map(({tag:c,label:T,desc:p})=>_.jsxs("div",{className:Ml.item,children:[_.jsx("dt",{children:_.jsx("span",{className:Ml.tag,"data-tag":c,children:T})}),_.jsx("dd",{className:Ml.desc,children:p})]},c))})}const gp="_section_ejabt_1",hp="_header_ejabt_5",vp="_group_ejabt_11",yp="_title_ejabt_20",wp="_description_ejabt_27",Sp="_ecoGrid_ejabt_35",Mn={section:gp,header:hp,group:vp,title:yp,description:wp,ecoGrid:Sp},kp={basics:"Language Basics",differences:"Key Differences",ecosystem:"Ecosystem"};function xp({section:c,fromLang:T,toLang:p}){const D=c.concepts.some(h=>h.tag);return _.jsxs("div",{className:Mn.section,children:[_.jsxs("div",{className:Mn.header,children:[_.jsx("div",{className:Mn.group,children:kp[c.group]}),_.jsx("h1",{className:Mn.title,children:c.title}),_.jsx("p",{className:Mn.description,children:c.description}),D&&_.jsx(mp,{})]}),c.ecoMappings&&c.ecoMappings.length>0&&_.jsx("div",{className:Mn.ecoGrid,children:c.ecoMappings.map(h=>_.jsx(sp,{mapping:h},`${h.fromLabel}-${h.from}`))}),c.concepts.map(h=>_.jsx(tp,{concept:h,fromLang:T,toLang:p},h.id))]})}const _p={id:"variables",slug:"variables",group:"basics",title:"Variables & Types",description:"Declaration, mutability, type inference, and primitive types across Java, C++, and JS/TS.",concepts:[{id:"var-declaration",title:"Variable Declaration",tag:"similar",panels:[{lang:"java",code:`// Java: explicit type required (pre-Java 10)
int count = 0;
String name = "Alice";
double price = 9.99;

// Java 10+: local type inference
var items = new ArrayList<String>();
var total = 42;`},{lang:"cpp",code:`// C++: explicit type
int count = 0;
std::string name = "Alice";
double price = 9.99;

// C++11: auto (type inference)
auto items = std::vector<std::string>{};
auto total = 42;`},{lang:"python",code:`x: int = 42
name: str = "Alice"
active: bool = True

# Type annotation is optional — Python infers
count = 0
`},{lang:"go",code:`// Short declaration (type inferred)
x := 42
name := "Alice"
active := true

// Explicit declaration
var age int = 30
var score float64
`},{lang:"js",code:`// JS: prefer const for all non-reassigned values
const count = 0;
const name = 'Alice';
const price = 9.99;

// let for values that change
let total = 0;
total += 42;`},{lang:"ts",code:`// TS: same as JS, with optional type annotation
const count: number = 0;
const name: string = 'Alice';
const price: number = 9.99;

// Type is inferred — annotation not required here
const total = 42;        // inferred: number
let running = false;     // inferred: boolean`}],callout:{variant:"warn",content:"Never use `var` in modern JS/TS. It has function scope (not block scope) and is hoisted — both are footguns."}},{id:"const-final",title:"Constants / Final",tag:"similar",panels:[{lang:"java",code:`final int MAX_SIZE = 100;
final String VERSION = "1.0.0";

// Class-level constant
static final double PI = 3.14159265358979;`},{lang:"cpp",code:`const int MAX_SIZE = 100;
const std::string VERSION = "1.0.0";

// Prefer constexpr for compile-time constants
constexpr double PI = 3.14159265358979;`},{lang:"python",code:`# No built-in const — use UPPER_SNAKE_CASE convention
MAX_SIZE = 100
PI = 3.14159

# typing.Final signals no re-assignment to type checkers
from typing import Final
MAX_RETRIES: Final = 3
`},{lang:"go",code:`const MaxSize = 100
const Pi = 3.14159

// Typed constant
const Greeting string = "hello"

// iota for enumerations
const (
    Small = iota  // 0
    Medium        // 1
    Large         // 2
)
`},{lang:"js",code:`const MAX_SIZE = 100;
const VERSION = '1.0.0';
const PI = 3.14159265358979;

// Note: const prevents reassignment, not mutation
const arr = [1, 2, 3];
arr.push(4); // OK — array contents can change`},{lang:"ts",code:`const MAX_SIZE = 100;          // inferred: number
const VERSION = '1.0.0';      // inferred: string

// const assertion — narrows to literal type
const CONFIG = { port: 3000, host: 'localhost' } as const;
// CONFIG.port is 3000, not number`}]},{id:"primitive-types",title:"Primitive Types",tag:"breaking",panels:[{lang:"java",code:`// 8 primitive types
boolean flag = true;
byte  b = 127;
short s = 32767;
int   i = 2_147_483_647;
long  l = 9_223_372_036_854_775_807L;
float  f = 3.14f;
double d = 3.14;
char   c = 'A';  // UTF-16 code unit`},{lang:"cpp",code:`bool   flag = true;
char   c    = 'A';
short  s    = 32767;
int    i    = 2147483647;
long   l    = 9223372036854775807L;
float  f    = 3.14f;
double d    = 3.14;

// C++11: fixed-width integers
#include <cstdint>
uint8_t  byte = 255;
int32_t  i32  = 42;`},{lang:"python",code:`age: int = 30
price: float = 9.99
name: str = "Alice"
active: bool = True
none_val: None = None

# Python ints are arbitrary-precision — no overflow
big: int = 10 ** 100
`},{lang:"go",code:`var age int = 30
var price float64 = 9.99
var name string = "Alice"
var active bool = true
var nothing interface{} = nil

// Explicit int sizes when needed
var b byte = 255  // uint8
var r rune = 'A'  // int32 (Unicode code point)
`},{lang:"js",code:`// JS has one numeric type: Number (IEEE 754 double)
const i   = 42;
const d   = 3.14;
const big = 9007199254740991; // Number.MAX_SAFE_INTEGER

// BigInt for integers beyond MAX_SAFE_INTEGER
const huge = 9007199254740992n;

const flag = true;
const c    = 'A';   // strings, not chars`},{lang:"ts",code:`// Same runtime types as JS; TS adds compile-time checks
const i: number  = 42;
const d: number  = 3.14;
const flag: boolean = true;
const c: string  = 'A';       // no char type — string

// BigInt
const huge: bigint = 9007199254740992n;

// Literal types
const one: 1 = 1;
const dir: 'left' | 'right' = 'left';`}],callout:{variant:"warn",content:"`0.1 + 0.2 !== 0.3` in JS (and any IEEE 754 language). Use integer arithmetic or a decimal library for money."}},{id:"null-undefined",title:"Null / Undefined",tag:"breaking",panels:[{lang:"java",code:`String s = null;     // reference types can be null
// int x = null;     // compile error — primitives cannot

// Java 8+ Optional to avoid null
Optional<String> opt = Optional.ofNullable(s);
String val = opt.orElse("default");`},{lang:"cpp",code:`// Raw pointer can be nullptr (C++11)
std::string* s = nullptr;

// Prefer std::optional (C++17)
#include <optional>
std::optional<std::string> opt = std::nullopt;
std::string val = opt.value_or("default");`},{lang:"python",code:`# Python has only None — no undefined equivalent
value: str | None = None

# Idiomatic None check
if value is None:
    print("no value")

# Falsy check (like JS !value)
if not value:
    print("falsy")
`},{lang:"go",code:`// Go has nil for pointers, interfaces, maps, slices, channels
var p *int = nil    // nil pointer
var s []int = nil   // nil slice (valid, len=0)
var m map[string]int = nil  // nil map

// Zero values — Go initialises everything
var x int    // 0
var s2 string // ""
var b bool   // false
`},{lang:"js",code:`// JS has BOTH null (intentional absence) and
// undefined (variable declared but not assigned)
let a;          // undefined
let b = null;   // null

// Nullish coalescing: ?? returns right side if left is null/undefined
const val = b ?? 'default';  // 'default'

// Optional chaining: ?. short-circuits on null/undefined
const len = b?.length;       // undefined (no throw)`},{lang:"ts",code:`// With strictNullChecks (default in strict mode):
// null and undefined are not assignable to other types

let a: string | undefined;
let b: string | null = null;

const val = b ?? 'default';    // string

// Non-null assertion (use sparingly)
const el = document.getElementById('root')!;

// Optional chaining
const len = b?.length;         // number | undefined`}],callout:{variant:"warn",content:"Always enable `strict` in tsconfig. Without it, `null` and `undefined` silently creep into every type — which is the same bug `Optional` was invented to prevent."}},{id:"type-inference",title:"Type Inference",tag:"similar",panels:[{lang:"java",code:`// Java 10+ local variable type inference
var count = 0;              // int
var name  = "Alice";        // String
var items = List.of(1,2,3); // List<Integer>

// Diamond operator (Java 7+)
var map = new HashMap<String, Integer>();`},{lang:"cpp",code:`// C++11 auto
auto count = 0;              // int
auto name  = std::string{"Alice"};
auto items = std::vector{1, 2, 3}; // C++17 deduction

// decltype: get the type of an expression
decltype(count) other = 5;  // int`},{lang:"python",code:`# Python always infers — annotations are optional metadata
count = 0           # int
message = "hello"   # str
items = [1, 2, 3]   # list[int]

# mypy / pyright use hints for static analysis
def greet(name: str) -> str:
    return f"Hello, {name}"
`},{lang:"go",code:`// := infers type from the right-hand side
count := 0            // int
message := "hello"    // string
items := []int{1, 2, 3}  // []int

// var with initialiser also infers
var ratio = 3.14      // float64
`},{lang:"js",code:`// JS is dynamically typed — no inference, no types
// Values have types; variables don't
const count = 0;        // runtime: number
const name  = 'Alice';  // runtime: string`},{lang:"ts",code:`// TS infers types from initialiser — annotation optional
const count = 0;        // inferred: 0 (literal)
const name  = 'Alice';  // inferred: string
const items = [1,2,3];  // inferred: number[]

// Generic function inference
function identity<T>(x: T): T { return x }
const n = identity(42); // T inferred as number`}]}]},Cp={id:"functions",slug:"functions",group:"basics",title:"Functions",description:"Function declarations, signatures, overloading, lambdas, and higher-order patterns.",concepts:[{id:"fn-declaration",title:"Function Declaration",tag:"similar",panels:[{lang:"java",code:`public int add(int a, int b) {
    return a + b;
}

// Void method
public void greet(String name) {
    System.out.println("Hello, " + name);
}`},{lang:"cpp",code:`int add(int a, int b) {
    return a + b;
}

// void function
void greet(const std::string& name) {
    std::cout << "Hello, " << name << "
";
}`},{lang:"python",code:`def add(a: int, b: int) -> int:
    return a + b

result = add(3, 4)  # 7
`},{lang:"go",code:`func add(a, b int) int {
    return a + b
}

result := add(3, 4)  // 7
`},{lang:"js",code:`function add(a, b) {
    return a + b;
}

function greet(name) {
    console.log('Hello, ' + name);
}`},{lang:"ts",code:`function add(a: number, b: number): number {
    return a + b;
}

function greet(name: string): void {
    console.log('Hello, ' + name);
}`}]},{id:"fn-arrow",title:"Arrow / Lambda Functions",tag:"similar",panels:[{lang:"java",code:`// Java 8+ lambda (implements a functional interface)
Comparator<String> byLength =
    (a, b) -> a.length() - b.length();

// Method reference
Function<String, Integer> len = String::length;

// Multi-line lambda
Runnable task = () -> {
    System.out.println("running");
};`},{lang:"cpp",code:`// C++11 lambda
auto byLength = [](const std::string& a,
                   const std::string& b) {
    return a.length() < b.length();
};

// Capture by value [=] or by reference [&]
int threshold = 5;
auto isLong = [threshold](const std::string& s) {
    return s.length() > threshold;
};`},{lang:"python",code:`# lambda: single expression only
double = lambda x: x * 2
print(double(5))  # 10

# For multi-line, use def
def triple(x: int) -> int:
    return x * 3

# map with lambda
nums = [1, 2, 3]
doubled = list(map(lambda x: x * 2, nums))
`},{lang:"go",code:`// Go has no lambdas, but functions are first-class values
double := func(x int) int {
    return x * 2
}
fmt.Println(double(5))  // 10

// Passed as argument
nums := []int{1, 2, 3}
apply := func(n int, f func(int) int) int { return f(n) }
fmt.Println(apply(4, double))  // 8
`},{lang:"js",code:`// Arrow function — concise syntax
const add = (a, b) => a + b;

// Arrow function with body
const clamp = (val, min, max) => {
    if (val < min) return min;
    if (val > max) return max;
    return val;
};

// Single-param, no parens needed
const double = x => x * 2;`},{lang:"ts",code:`const add = (a: number, b: number): number => a + b;

const clamp = (val: number, min: number, max: number): number => {
    if (val < min) return min;
    if (val > max) return max;
    return val;
};

// Arrow function type annotation
const double: (x: number) => number = x => x * 2;`}],callout:{variant:"info",content:"Arrow functions in JS/TS do not have their own `this`. They capture `this` from the enclosing scope — unlike regular `function` declarations."}},{id:"fn-default-params",title:"Default Parameters",tag:"similar",panels:[{lang:"java",code:`// Java has no default parameters — use overloads
public String greet(String name) {
    return greet(name, "Hello");
}
public String greet(String name, String prefix) {
    return prefix + ", " + name + "!";
}`},{lang:"cpp",code:`// C++ has default arguments (right-to-left only)
std::string greet(const std::string& name,
                  const std::string& prefix = "Hello") {
    return prefix + ", " + name + "!";
}

// Call: greet("Alice") or greet("Alice", "Hi")`},{lang:"python",code:`def greet(name: str, greeting: str = "Hello") -> str:
    return f"{greeting}, {name}!"

greet("Alice")          # "Hello, Alice!"
greet("Alice", "Hi")    # "Hi, Alice!"

# NOTE: never use mutable defaults
# def bad(items=[]):  # BUG — shared across calls
# def good(items=None):
#     if items is None: items = []
`},{lang:"go",code:`// Go has no default params — use variadic or options pattern
func greet(name string, args ...string) string {
    greeting := "Hello"
    if len(args) > 0 {
        greeting = args[0]
    }
    return greeting + ", " + name + "!"
}

greet("Alice")        // "Hello, Alice!"
greet("Alice", "Hi")  // "Hi, Alice!"
`},{lang:"js",code:`function greet(name, prefix = 'Hello') {
    return prefix + ', ' + name + '!';
}

greet('Alice');          // 'Hello, Alice!'
greet('Alice', 'Hi');    // 'Hi, Alice!'`},{lang:"ts",code:`function greet(name: string, prefix = 'Hello'): string {
    return \`\${prefix}, \${name}!\`;
}

// Default inferred as string — no annotation needed
greet('Alice');          // 'Hello, Alice!'
greet('Alice', 'Hi');    // 'Hi, Alice!'`}]},{id:"fn-rest-spread",title:"Variadic / Rest Parameters",tag:"similar",panels:[{lang:"java",code:`// Varargs — must be last parameter
public int sum(int... numbers) {
    int total = 0;
    for (int n : numbers) total += n;
    return total;
}

sum(1, 2, 3);     // 6
sum(new int[]{1, 2, 3}); // same`},{lang:"cpp",code:`// C++11: variadic templates
template<typename... Args>
int sum(Args... args) {
    return (args + ...);  // C++17 fold expression
}

// Or traditional approach with initializer_list
int sum(std::initializer_list<int> nums) {
    int total = 0;
    for (int n : nums) total += n;
    return total;
}`},{lang:"python",code:`# *args collects positional arguments
def sum_all(*args: int) -> int:
    return sum(args)

sum_all(1, 2, 3)  # 6

# **kwargs collects keyword arguments
def config(**kwargs: str) -> None:
    for k, v in kwargs.items():
        print(f"{k}={v}")

# Spread: * unpacks into function call
nums = [1, 2, 3]
print(*nums)  # 1 2 3

merged = {**{"a": 1}, **{"b": 2}}  # {a:1, b:2}
`},{lang:"go",code:`// Variadic parameters with ...
func sumAll(nums ...int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}

sumAll(1, 2, 3)      // 6

// Spread a slice into variadic call
nums := []int{1, 2, 3}
sumAll(nums...)      // 6
`},{lang:"js",code:`// Rest parameter collects remaining args into array
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3);       // 6

// Spread: unpack array into args
const nums = [1, 2, 3];
sum(...nums);        // 6`},{lang:"ts",code:`function sum(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3);        // 6

// Typed spread
const nums: number[] = [1, 2, 3];
sum(...nums);         // 6`}]},{id:"fn-overloading",title:"Function Overloading",tag:"breaking",panels:[{lang:"java",code:`// Java: true runtime overloading by parameter types
public int process(int x) {
    return x * 2;
}
public double process(double x) {
    return x * 2.0;
}
public String process(String s) {
    return s.repeat(2);
}`},{lang:"cpp",code:`// C++: also true runtime overloading
int    process(int x)         { return x * 2; }
double process(double x)      { return x * 2.0; }
std::string process(const std::string& s) {
    return s + s;
}`},{lang:"python",code:`from typing import overload, Union

# @overload gives type-checker hints; one impl handles all cases
@overload
def process(x: int) -> int: ...
@overload
def process(x: str) -> str: ...

def process(x: Union[int, str]) -> Union[int, str]:
    if isinstance(x, int):
        return x * 2
    return x.upper()

process(5)      # 10
process("hi")   # "HI"
`},{lang:"go",code:`// Go has no overloading — use different names or interfaces
func doubleInt(x int) int    { return x * 2 }
func doubleStr(x string) string { return x + x }

// Or use an interface
func double(x interface{}) interface{} {
    switch v := x.(type) {
    case int:
        return v * 2
    case string:
        return v + v
    }
    return x
}
`},{lang:"js",code:`// JS has no overloading — one function, handle types manually
function process(x) {
    if (typeof x === 'number') return x * 2;
    if (typeof x === 'string') return x.repeat(2);
    throw new TypeError('unsupported type');
}`},{lang:"ts",code:`// TS overload signatures (compile-time only — single impl)
function process(x: number): number;
function process(x: string): string;
function process(x: number | string): number | string {
    if (typeof x === 'number') return x * 2;
    return x.repeat(2);
}

// process(1)    → number
// process('hi') → string`}],callout:{variant:"info",content:"TS overloads are **compile-time only**. There is one function at runtime. The overload signatures constrain call sites; the implementation signature is never directly callable."}}]},Np={id:"classes",slug:"classes",group:"basics",title:"Classes & OOP",description:"Class syntax, constructors, inheritance, access modifiers, and object patterns.",concepts:[{id:"class-basic",title:"Basic Class",tag:"similar",panels:[{lang:"java",code:`public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge()     { return age; }

    @Override
    public String toString() {
        return name + " (" + age + ")";
    }
}`},{lang:"cpp",code:`class Person {
public:
    Person(std::string name, int age)
        : name_(std::move(name)), age_(age) {}

    const std::string& getName() const { return name_; }
    int getAge() const { return age_; }

    std::string toString() const {
        return name_ + " (" + std::to_string(age_) + ")";
    }

private:
    std::string name_;
    int age_;
};`},{lang:"python",code:`class Animal:
    def __init__(self, name: str) -> None:
        self.name = name

    def speak(self) -> str:
        return f"{self.name} makes a sound"

dog = Animal("Rex")
print(dog.speak())  # "Rex makes a sound"
`},{lang:"go",code:`type Animal struct {
    Name string
}

func (a Animal) Speak() string {
    return a.Name + " makes a sound"
}

// Constructor function (convention)
func NewAnimal(name string) Animal {
    return Animal{Name: name}
}

dog := NewAnimal("Rex")
fmt.Println(dog.Speak())  // "Rex makes a sound"
`},{lang:"js",code:`class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age  = age;
    }

    getName() { return this.#name; }
    getAge()  { return this.#age; }

    toString() {
        return \`\${this.#name} (\${this.#age})\`;
    }
}`},{lang:"ts",code:`class Person {
    constructor(
        private readonly name: string,
        private readonly age: number,
    ) {}

    getName(): string { return this.name; }
    getAge(): number  { return this.age; }

    toString(): string {
        return \`\${this.name} (\${this.age})\`;
    }
}`}],callout:{variant:"info",content:"TS constructor parameter properties (`private readonly name: string`) declare and assign the field in one line. No `this.name = name` boilerplate needed."}},{id:"class-inheritance",title:"Inheritance",tag:"similar",panels:[{lang:"java",code:`public class Animal {
    protected String name;
    public Animal(String name) { this.name = name; }
    public String speak() { return "..."; }
}

public class Dog extends Animal {
    public Dog(String name) { super(name); }

    @Override
    public String speak() { return "Woof!"; }
}

Animal a = new Dog("Rex");
a.speak(); // "Woof!" — dynamic dispatch`},{lang:"cpp",code:`class Animal {
public:
    Animal(std::string name) : name_(std::move(name)) {}
    virtual std::string speak() const { return "..."; }
    virtual ~Animal() = default; // virtual destructor!
protected:
    std::string name_;
};

class Dog : public Animal {
public:
    Dog(std::string name) : Animal(std::move(name)) {}
    std::string speak() const override { return "Woof!"; }
};

std::unique_ptr<Animal> a = std::make_unique<Dog>("Rex");
a->speak(); // "Woof!" — requires virtual`},{lang:"python",code:`class Animal:
    def __init__(self, name: str) -> None:
        self.name = name

    def speak(self) -> str:
        return "..."

class Dog(Animal):
    def speak(self) -> str:  # override
        return f"{self.name} barks"

dog = Dog("Rex")
print(dog.speak())  # "Rex barks"
print(isinstance(dog, Animal))  # True
`},{lang:"go",code:`// Go has no inheritance — use embedding for composition
type Animal struct{ Name string }
func (a Animal) Speak() string { return a.Name + " makes a sound" }

type Dog struct {
    Animal  // embed — promotes methods
    Breed string
}

func (d Dog) Speak() string {  // override
    return d.Name + " barks"
}

dog := Dog{Animal: Animal{Name: "Rex"}, Breed: "Labrador"}
fmt.Println(dog.Speak())  // "Rex barks"
`},{lang:"js",code:`class Animal {
    constructor(name) { this.name = name; }
    speak() { return '...'; }
}

class Dog extends Animal {
    speak() { return 'Woof!'; }
}

const a = new Dog('Rex');
a.speak(); // 'Woof!'
a instanceof Animal; // true`},{lang:"ts",code:`class Animal {
    constructor(protected readonly name: string) {}
    speak(): string { return '...'; }
}

class Dog extends Animal {
    override speak(): string { return 'Woof!'; }
}

const a: Animal = new Dog('Rex');
a.speak(); // 'Woof!'
a instanceof Dog; // true`}],callout:{variant:"warn",content:"In C++, methods are **not** virtual by default — you must explicitly mark them `virtual` to get polymorphic dispatch. In Java and JS/TS, all instance methods are virtual."}},{id:"class-access",title:"Access Modifiers",tag:"similar",panels:[{lang:"java",code:`public class Vault {
    public    int visible = 1;    // everyone
    protected int subclass = 2;   // package + subclass
    /* package */ int pkg = 3;    // same package only
    private   int secret = 4;     // this class only

    public int getSecret() { return secret; }
}`},{lang:"cpp",code:`class Vault {
public:
    int visible = 1;    // everyone

protected:
    int subclass = 2;   // subclasses

private:
    int secret = 4;     // this class only
    // Note: no "package" concept in C++

public:
    int getSecret() const { return secret; }
};`},{lang:"python",code:`class BankAccount:
    def __init__(self, balance: float) -> None:
        self.owner = "Alice"      # public (convention)
        self._balance = balance   # "protected" (convention)
        self.__secret = "key"     # name-mangled (_BankAccount__secret)

    def get_balance(self) -> float:
        return self._balance

# Python has no true private — it is convention, not enforced
account = BankAccount(100.0)
print(account.owner)     # "Alice" — accessible
print(account._balance)  # works (convention says don't)
`},{lang:"go",code:`// Go uses capitalisation: Exported = public, lowercase = package-private
type bankAccount struct {
    owner   string   // package-private
    balance float64  // package-private
}

func (b bankAccount) Balance() float64 {  // Exported method
    return b.balance
}

func NewBankAccount(owner string, balance float64) bankAccount {
    return bankAccount{owner: owner, balance: balance}
}
`},{lang:"js",code:`class Vault {
    visible = 1;       // public (default)
    #secret = 4;       // private (hard private — enforced at runtime)

    getSecret() { return this.#secret; }
}

// No protected in JS
// No package-private concept`},{lang:"ts",code:`class Vault {
    public    visible  = 1;    // default
    protected subclass = 2;    // soft: compile-time only
    private   tsSecret = 4;    // soft: compile-time only
    readonly #jsSecret = 4;    // hard: JS private field

    getSecret(): number { return this.tsSecret; }
}`}],callout:{variant:"warn",content:"TS `private` is **compile-time only** — it is erased at runtime. JS `#privateField` is enforced by the runtime and cannot be accessed externally by any means."}},{id:"class-static",title:"Static Members",tag:"similar",panels:[{lang:"java",code:`public class Counter {
    private static int count = 0;

    public Counter() { count++; }

    public static int getCount() { return count; }
    public static void reset()   { count = 0; }
}

Counter.getCount(); // static call — no instance needed`},{lang:"cpp",code:`class Counter {
public:
    Counter() { ++count_; }

    static int getCount()  { return count_; }
    static void reset()    { count_ = 0; }

private:
    static int count_;  // declaration
};

int Counter::count_ = 0; // definition (in .cpp)`},{lang:"python",code:`class MathUtils:
    PI = 3.14159  # class variable (shared across instances)

    @staticmethod
    def square(n: float) -> float:
        return n * n

    @classmethod
    def circle_area(cls, r: float) -> float:
        return cls.PI * r * r

MathUtils.square(4)         # 16.0
MathUtils.circle_area(5)    # 78.54...
`},{lang:"go",code:`// Go has package-level variables and functions — no static members
const Pi = 3.14159

func Square(n float64) float64 {
    return n * n
}

func CircleArea(r float64) float64 {
    return Pi * r * r
}

Square(4)       // 16.0
CircleArea(5)   // 78.54...
`},{lang:"js",code:`class Counter {
    static #count = 0;

    constructor() { Counter.#count++; }

    static getCount() { return Counter.#count; }
    static reset()    { Counter.#count = 0; }
}

Counter.getCount(); // no instance needed`},{lang:"ts",code:`class Counter {
    static #count = 0;

    constructor() { Counter.#count++; }

    static getCount(): number { return Counter.#count; }
    static reset(): void      { Counter.#count = 0; }
}

Counter.getCount(); // number`}]}]},Ep={id:"interfaces",slug:"interfaces",group:"basics",title:"Interfaces",description:"Contracts, structural typing, abstract classes, and duck typing across languages.",concepts:[{id:"interface-basic",title:"Interface / Protocol",tag:"breaking",panels:[{lang:"java",code:`// Java: nominal typing — must explicitly implement
public interface Printable {
    void print();
    default String label() { return "Printable"; }
}

public class Report implements Printable {
    @Override
    public void print() {
        System.out.println("Printing report...");
    }
}

// Checked at compile time: Report IS-A Printable`},{lang:"cpp",code:`// C++: no interface keyword — use abstract class
class Printable {
public:
    virtual void print() = 0;   // pure virtual
    virtual std::string label() const { return "Printable"; }
    virtual ~Printable() = default;
};

class Report : public Printable {
public:
    void print() override {
        std::cout << "Printing report...
";
    }
};`},{lang:"python",code:`from typing import Protocol

# Protocol = structural typing (no explicit "implements")
class Drawable(Protocol):
    def draw(self) -> None: ...
    def area(self) -> float: ...

class Circle:
    def __init__(self, radius: float) -> None:
        self.radius = radius
    def draw(self) -> None:
        print(f"circle r={self.radius}")
    def area(self) -> float:
        import math
        return math.pi * self.radius ** 2

def render(shape: Drawable) -> None:
    shape.draw()

render(Circle(5))  # works — Circle satisfies Drawable
`},{lang:"go",code:`// Go interfaces are implicit — no "implements" keyword
type Drawable interface {
    Draw()
    Area() float64
}

type Circle struct{ Radius float64 }

func (c Circle) Draw()         { fmt.Printf("circle r=%.1f\\n", c.Radius) }
func (c Circle) Area() float64 { return math.Pi * c.Radius * c.Radius }

func render(d Drawable) { d.Draw() }

render(Circle{Radius: 5})  // Circle satisfies Drawable automatically
`},{lang:"js",code:`// JS: no interface keyword — duck typing only
// A value "implements" a contract if it has the right shape

class Report {
    print() {
        console.log('Printing report...');
    }
}

// No explicit declaration needed — if it has print(), it works
function printAll(items) {
    items.forEach(item => item.print());
}`},{lang:"ts",code:`// TS: structural typing — shape matters, not name
interface Printable {
    print(): void;
    label?(): string;   // optional method
}

class Report implements Printable {
    print(): void {
        console.log('Printing report...');
    }
}

// This also satisfies Printable — no extends/implements needed:
const obj = { print: () => console.log('hi') };
const p: Printable = obj; // valid`}],callout:{variant:"info",content:"TS uses **structural typing** (duck typing). A class does not need to declare `implements Foo` to be assignable to `Foo` — it just needs the right shape. Java uses **nominal typing** — you must explicitly declare the relationship."}},{id:"interface-extend",title:"Interface Inheritance",tag:"similar",panels:[{lang:"java",code:`public interface Shape {
    double area();
}

public interface Colored {
    String getColor();
}

// Multiple interface implementation is allowed
public interface ColoredShape extends Shape, Colored {}

public class Circle implements ColoredShape {
    private double radius;
    private String color;

    public Circle(double r, String c) {
        radius = r; color = c;
    }

    @Override public double area()  { return Math.PI * radius * radius; }
    @Override public String getColor() { return color; }
}`},{lang:"cpp",code:`class Shape {
public:
    virtual double area() const = 0;
    virtual ~Shape() = default;
};

class Colored {
public:
    virtual std::string getColor() const = 0;
    virtual ~Colored() = default;
};

class Circle : public Shape, public Colored {
public:
    Circle(double r, std::string c)
        : radius_(r), color_(std::move(c)) {}

    double area() const override {
        return 3.14159 * radius_ * radius_;
    }
    std::string getColor() const override { return color_; }

private:
    double radius_;
    std::string color_;
};`},{lang:"python",code:`from typing import Protocol
from abc import ABC, abstractmethod

class Printable(Protocol):
    def print(self) -> None: ...

class Loggable(Protocol):
    def log(self, msg: str) -> None: ...

# Combine protocols
class PrintLoggable(Printable, Loggable, Protocol): ...

# Abstract base classes for enforcement at instantiation
class Shape(ABC):
    @abstractmethod
    def area(self) -> float: ...

# class Bad(Shape): pass  # TypeError: can't instantiate
`},{lang:"go",code:`type Reader interface { Read(p []byte) (n int, err error) }
type Writer interface { Write(p []byte) (n int, err error) }

// Interface composition — embed other interfaces
type ReadWriter interface {
    Reader
    Writer
}

// Any type implementing both Read and Write satisfies ReadWriter
type Buffer struct{ data []byte }
func (b *Buffer) Read(p []byte) (int, error)  { /* ... */; return 0, nil }
func (b *Buffer) Write(p []byte) (int, error) { /* ... */; return len(p), nil }
`},{lang:"js",code:`// JS: no interfaces — mix behaviour with mixins or composition
const ShapeMixin = (Base) => class extends Base {
    area() { throw new Error('area() not implemented'); }
};

const ColoredMixin = (Base) => class extends Base {
    getColor() { return this.color; }
};

class Circle extends ColoredMixin(ShapeMixin(class {})) {
    constructor(radius, color) {
        super();
        this.radius = radius;
        this.color  = color;
    }
    area() { return Math.PI * this.radius ** 2; }
}`},{lang:"ts",code:`interface Shape {
    area(): number;
}

interface Colored {
    getColor(): string;
}

// Intersection type — alternative to extends
type ColoredShape = Shape & Colored;

class Circle implements Shape, Colored {
    constructor(
        private readonly radius: number,
        private readonly color: string,
    ) {}

    area(): number { return Math.PI * this.radius ** 2; }
    getColor(): string { return this.color; }
}`}]},{id:"interface-vs-type",title:"interface vs type (TS)",tag:"similar",note:"TS only",panels:[{lang:"python",code:`from typing import TypedDict, Protocol
from dataclasses import dataclass

# TypedDict: shape of a dict (like TS interface for data)
class User(TypedDict):
    id: int
    name: str
    email: str

# Protocol: structural behaviour contract
class Hashable(Protocol):
    def __hash__(self) -> int: ...

# dataclass: auto-generates __init__, __repr__, __eq__
@dataclass
class Point:
    x: float
    y: float
`},{lang:"go",code:`// struct: data shape
type User struct {
    ID    int
    Name  string
    Email string
}

// interface: behaviour contract
type Stringer interface {
    String() string
}

// type alias
type UserID = int

// type definition (new distinct type)
type Celsius float64
type Fahrenheit float64
// Can't accidentally mix Celsius and Fahrenheit — distinct types
`},{lang:"ts",code:`// interface: open (can be re-opened / merged)
interface User {
    id: number;
    name: string;
}
interface User {
    email: string;  // merged — User now has id, name, email
}

// type alias: closed, more flexible
type Point = { x: number; y: number };
type ID    = string | number;          // union — not possible with interface
type Pair<T> = [T, T];                 // tuple alias

// Rule of thumb:
// - use interface for object shapes that others may extend
// - use type for unions, tuples, and mapped types`}]}]},Tp={id:"generics",slug:"generics",group:"basics",title:"Generics",description:"Type parameters, constraints, variance, and generic patterns.",concepts:[{id:"generics-basic",title:"Generic Functions",tag:"similar",panels:[{lang:"java",code:`// Type parameter <T>
public <T> T identity(T value) {
    return value;
}

// Generic class
public class Box<T> {
    private T value;
    public Box(T value) { this.value = value; }
    public T get()      { return value; }
}

Box<String> strBox = new Box<>("hello");
String s = strBox.get(); // no cast needed`},{lang:"cpp",code:`// Function template
template<typename T>
T identity(T value) {
    return value;
}

// Class template
template<typename T>
class Box {
public:
    Box(T value) : value_(std::move(value)) {}
    const T& get() const { return value_; }
private:
    T value_;
};

Box<std::string> strBox{"hello"};
auto s = strBox.get();`},{lang:"python",code:`from typing import TypeVar

T = TypeVar("T")

def first(items: list[T]) -> T:
    return items[0]

first([1, 2, 3])   # int
first(["a", "b"])  # str

# Python 3.12+ syntax:
# def first[T](items: list[T]) -> T:
#     return items[0]
`},{lang:"go",code:`// Go generics (1.18+)
func first[T any](items []T) T {
    return items[0]
}

first([]int{1, 2, 3})   // 1 — int
first([]string{"a"})    // "a" — string
`},{lang:"js",code:`// JS: no generics — use JSDoc for IDE hints only
/**
 * @template T
 * @param {T} value
 * @returns {T}
 */
function identity(value) {
    return value;
}

class Box {
    constructor(value) { this.value = value; }
    get() { return this.value; }
}`},{lang:"ts",code:`function identity<T>(value: T): T {
    return value;
}

class Box<T> {
    constructor(private readonly value: T) {}
    get(): T { return this.value; }
}

const strBox = new Box('hello');  // Box<string> inferred
const s = strBox.get();            // string`}]},{id:"generics-constraints",title:"Generic Constraints",tag:"similar",panels:[{lang:"java",code:`// Upper bound: T must extend Comparable<T>
public <T extends Comparable<T>> T max(T a, T b) {
    return a.compareTo(b) >= 0 ? a : b;
}

// Multiple bounds
public <T extends Comparable<T> & Serializable>
    T clampAndStore(T val) { ... }

// Wildcard: accept List of any subtype of Number
public double sum(List<? extends Number> nums) {
    return nums.stream()
               .mapToDouble(Number::doubleValue)
               .sum();
}`},{lang:"cpp",code:`// C++20 concept constraint
#include <concepts>

template<std::totally_ordered T>
T max(T a, T b) {
    return a >= b ? a : b;
}

// Requires clause (C++20)
template<typename T>
requires std::is_arithmetic_v<T>
T sum(std::initializer_list<T> nums) {
    T total{};
    for (auto n : nums) total += n;
    return total;
}

// Pre-C++20: SFINAE or static_assert
template<typename T,
         typename = std::enable_if_t<std::is_arithmetic_v<T>>>
T square(T x) { return x * x; }`},{lang:"python",code:`from typing import TypeVar

# Bound TypeVar — T must be int or float
Numeric = TypeVar("Numeric", int, float)

def add(a: Numeric, b: Numeric) -> Numeric:
    return a + b

add(1, 2)      # 3   — int
add(1.5, 2.5)  # 4.0 — float
# add("a", "b")  # type error
`},{lang:"go",code:`import "golang.org/x/exp/constraints"

// Constrain T to numeric types
func add[T constraints.Number](a, b T) T {
    return a + b
}

add(1, 2)          // 3
add(1.5, 2.5)      // 4.0

// Custom constraint interface
type Stringer interface {
    String() string
}
func print[T Stringer](v T) { fmt.Println(v.String()) }
`},{lang:"js",code:`// No constraints — runtime checks only
function max(a, b) {
    if (typeof a !== typeof b)
        throw new TypeError('types must match');
    return a >= b ? a : b;
}`},{lang:"ts",code:`// extends constrains the type parameter
function max<T extends { valueOf(): number }>(a: T, b: T): T {
    return a.valueOf() >= b.valueOf() ? a : b;
}

// keyof constraint — common pattern
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = { name: 'Alice', age: 30 };
getProperty(user, 'name'); // string
getProperty(user, 'age');  // number
// getProperty(user, 'x'); // compile error`}]},{id:"generics-utility-types",title:"Utility Types (TS)",tag:"breaking",note:"TS only",panels:[{lang:"python",code:`from typing import Optional, Union, Callable

# Optional[X] is shorthand for Union[X, None]
def find(items: list[str], key: str) -> Optional[str]:
    return next((i for i in items if i == key), None)

# Union — accept multiple types
def parse(raw: Union[str, int]) -> str:
    return str(raw)

# Callable[[arg_types], return_type]
def apply(fn: Callable[[int], int], x: int) -> int:
    return fn(x)
`},{lang:"go",code:`// Go standard library generics
// maps.Keys, slices.Contains, etc. (Go 1.21+)
import "slices"

// Optional via pointer (nil = absent)
func find(items []string, key string) *string {
    for _, v := range items {
        if v == key { return &v }
    }
    return nil
}

// Functional helpers using generics
func Map[T, U any](items []T, f func(T) U) []U {
    result := make([]U, len(items))
    for i, v := range items {
        result[i] = f(v)
    }
    return result
}
`},{lang:"ts",code:`interface User {
    id: number;
    name: string;
    email: string;
}

// Partial — all fields optional
type UserUpdate = Partial<User>;

// Required — all fields required
type FullUser = Required<User>;

// Pick — subset of fields
type UserPreview = Pick<User, 'id' | 'name'>;

// Omit — all except specified
type PublicUser = Omit<User, 'email'>;

// Record — map type
type ScoreMap = Record<string, number>;

// ReturnType — extract function return type
function getUser(): User { return { id: 1, name: 'A', email: 'a@b.com' }; }
type UserResult = ReturnType<typeof getUser>; // User`}]}]},bp={id:"errors",slug:"errors",group:"basics",title:"Error Handling",description:"Exceptions, checked vs unchecked, error types, and result patterns.",concepts:[{id:"errors-try-catch",title:"try / catch / finally",tag:"similar",panels:[{lang:"java",code:`try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.err.println("Math error: " + e.getMessage());
} catch (Exception e) {
    System.err.println("Unexpected: " + e);
} finally {
    System.out.println("always runs");
}

// Multi-catch (Java 7+)
try {
    riskyOperation();
} catch (IOException | SQLException e) {
    handleError(e);
}`},{lang:"cpp",code:`try {
    int result = riskyOperation();
} catch (const std::invalid_argument& e) {
    std::cerr << "Invalid arg: " << e.what() << "
";
} catch (const std::exception& e) {
    std::cerr << "Error: " << e.what() << "
";
} catch (...) {
    std::cerr << "Unknown error
";
}

// C++ has no finally — use RAII or scope_exit
{
    std::ifstream file("data.txt");
    // file closes automatically when scope exits`},{lang:"python",code:`try:
    result = int("abc")
except ValueError as e:
    print(f"parse error: {e}")
except (TypeError, RuntimeError) as e:
    print(f"other error: {e}")
else:
    print("no error")  # runs if no exception
finally:
    print("always runs")
`},{lang:"go",code:`// Go uses multiple return values — no exceptions
result, err := strconv.Atoi("abc")
if err != nil {
    fmt.Printf("parse error: %v\\n", err)
    return
}
fmt.Println(result)

// defer runs on function exit (like finally)
defer func() { fmt.Println("always runs") }()
`},{lang:"js",code:`try {
    const result = JSON.parse(badJson);
} catch (err) {
    // err can be anything — no type guarantee
    console.error(err.message);
} finally {
    cleanup();
}

// Rethrowing
try {
    riskyOp();
} catch (err) {
    if (err instanceof TypeError) throw err;
    console.warn('recoverable:', err);
}`},{lang:"ts",code:`try {
    const result = JSON.parse(badJson);
} catch (err) {
    // err is unknown in strict TS — must narrow
    if (err instanceof Error) {
        console.error(err.message);
    } else {
        console.error(String(err));
    }
} finally {
    cleanup();
}`}],callout:{variant:"warn",content:"In TS (and modern JS), caught errors are typed `unknown`, not `Error`. Always check `err instanceof Error` before accessing `.message`."}},{id:"errors-custom",title:"Custom Error Types",tag:"similar",panels:[{lang:"java",code:`// Checked exception (must be declared or caught)
public class ValidationException extends Exception {
    private final String field;

    public ValidationException(String field, String msg) {
        super(msg);
        this.field = field;
    }

    public String getField() { return field; }
}

// Unchecked exception
public class AppError extends RuntimeException {
    public AppError(String message) { super(message); }
    public AppError(String message, Throwable cause) {
        super(message, cause);
    }
}`},{lang:"cpp",code:`#include <stdexcept>

class ValidationError : public std::runtime_error {
public:
    ValidationError(const std::string& field,
                    const std::string& msg)
        : std::runtime_error(msg), field_(field) {}

    const std::string& field() const { return field_; }

private:
    std::string field_;
};

// Throw and catch
throw ValidationError("email", "invalid format");`},{lang:"python",code:`class ValidationError(Exception):
    def __init__(self, field: str, message: str) -> None:
        self.field = field
        super().__init__(f"{field}: {message}")

class NotFoundError(Exception):
    pass

def find_user(user_id: int) -> dict:
    if user_id <= 0:
        raise ValidationError("id", "must be positive")
    raise NotFoundError(f"user {user_id} not found")
`},{lang:"go",code:`import "errors"
import "fmt"

// Sentinel errors for type-checking with errors.Is
var ErrNotFound = errors.New("not found")

// Structured error with context
type ValidationError struct {
    Field   string
    Message string
}

func (e *ValidationError) Error() string {
    return fmt.Sprintf("%s: %s", e.Field, e.Message)
}

func findUser(id int) error {
    if id <= 0 {
        return &ValidationError{Field: "id", Message: "must be positive"}
    }
    return fmt.Errorf("user %d: %w", id, ErrNotFound)
}
`},{lang:"js",code:`class ValidationError extends Error {
    constructor(field, message) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

try {
    throw new ValidationError('email', 'invalid format');
} catch (err) {
    if (err instanceof ValidationError) {
        console.error(err.field, err.message);
    }
}`},{lang:"ts",code:`class ValidationError extends Error {
    readonly name = 'ValidationError' as const;

    constructor(
        readonly field: string,
        message: string,
    ) {
        super(message);
    }
}

try {
    throw new ValidationError('email', 'invalid format');
} catch (err) {
    if (err instanceof ValidationError) {
        // err.field and err.message typed correctly
        console.error(\`\${err.field}: \${err.message}\`);
    }
}`}]},{id:"errors-result",title:"Result / Either Pattern",tag:"breaking",panels:[{lang:"java",code:`// Java uses Optional or throws for errors
// No built-in Result type, but can build one:
public sealed interface Result<T>
    permits Result.Ok, Result.Err {

    record Ok<T>(T value) implements Result<T> {}
    record Err<T>(String error) implements Result<T> {}
}

Result<Integer> parse(String s) {
    try {
        return new Result.Ok<>(Integer.parseInt(s));
    } catch (NumberFormatException e) {
        return new Result.Err<>("not a number: " + s);
    }
}`},{lang:"cpp",code:`// C++23: std::expected
#include <expected>

std::expected<int, std::string>
parseNumber(const std::string& s) {
    try {
        return std::stoi(s);
    } catch (...) {
        return std::unexpected("not a number: " + s);
    }
}

auto result = parseNumber("42");
if (result) {
    std::cout << *result;
} else {
    std::cerr << result.error();
}`},{lang:"python",code:`from dataclasses import dataclass
from typing import Generic, TypeVar, Union

T = TypeVar("T")
E = TypeVar("E", bound=BaseException)

@dataclass
class Ok(Generic[T]):
    value: T

@dataclass
class Err(Generic[E]):
    error: E

Result = Union[Ok[T], Err[E]]

def divide(a: float, b: float) -> Result:
    if b == 0:
        return Err(ZeroDivisionError("cannot divide by zero"))
    return Ok(a / b)

match divide(10, 2):
    case Ok(value=v): print(f"result: {v}")
    case Err(error=e): print(f"error: {e}")
`},{lang:"go",code:`// Go's idiomatic Result pattern: (T, error)
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("cannot divide by zero")
    }
    return a / b, nil
}

// Usage — must check error explicitly
result, err := divide(10, 2)
if err != nil {
    fmt.Printf("error: %v\\n", err)
    return
}
fmt.Printf("result: %v\\n", result)
`},{lang:"js",code:`// Common pattern: return [error, value] tuple
function parseNumber(s) {
    const n = Number(s);
    if (isNaN(n)) return [new Error('not a number'), null];
    return [null, n];
}

const [err, value] = parseNumber('42');
if (err) {
    console.error(err.message);
} else {
    console.log(value);
}`},{lang:"ts",code:`// Discriminated union Result type
type Result<T, E = Error> =
    | { ok: true;  value: T }
    | { ok: false; error: E }

function parseNumber(s: string): Result<number, string> {
    const n = Number(s);
    if (isNaN(n)) return { ok: false, error: 'not a number' };
    return { ok: true, value: n };
}

const result = parseNumber('42');
if (result.ok) {
    console.log(result.value); // number
} else {
    console.error(result.error); // string
}`}],callout:{variant:"info",content:"The Result/Either pattern avoids exceptions for expected failures (validation, parsing). Reserve `throw` for truly unexpected states."}}]},Pp={id:"async",slug:"async",group:"basics",title:"Async",description:"Promises, async/await, futures, and concurrent patterns.",concepts:[{id:"async-promise-future",title:"Promise / Future / CompletableFuture",tag:"similar",panels:[{lang:"java",code:`// Java: CompletableFuture (Java 8+)
CompletableFuture<String> future =
    CompletableFuture.supplyAsync(() -> {
        return fetchData();  // runs on ForkJoinPool
    });

future
    .thenApply(data -> data.toUpperCase())
    .thenAccept(result -> System.out.println(result))
    .exceptionally(err -> {
        System.err.println("Failed: " + err.getMessage());
        return null;
    });`},{lang:"cpp",code:`// C++11: std::future / std::async
#include <future>

std::future<std::string> future =
    std::async(std::launch::async, []() {
        return fetchData();
    });

// Blocks until result is available
try {
    std::string result = future.get();
    std::cout << result << "
";
} catch (const std::exception& e) {
    std::cerr << "Failed: " << e.what() << "
";
}`},{lang:"python",code:`import asyncio

# Python uses coroutines instead of Promises
async def fetch_data() -> str:
    await asyncio.sleep(1)  # non-blocking pause
    return "data"

# asyncio.gather = Promise.all
async def main() -> None:
    a, b = await asyncio.gather(fetch_data(), fetch_data())
    print(a, b)

asyncio.run(main())
`},{lang:"js",code:`// Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), 1000);
});

promise
    .then(result => console.log(result))
    .catch(err   => console.error(err))
    .finally(()  => console.log('cleanup'));

// Promise.all — parallel
Promise.all([fetchA(), fetchB()])
    .then(([a, b]) => console.log(a, b));`},{lang:"ts",code:`// Promise<T> carries the resolved type
const promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve('done'), 1000);
});

promise.then((result: string) => console.log(result));

// Promise.all with typed tuple
const [a, b]: [User, Post[]] = await Promise.all([
    fetchUser(1),
    fetchPosts(1),
]);`}]},{id:"async-await",title:"async / await",tag:"similar",panels:[{lang:"java",code:`// Java has no async/await — use CompletableFuture chains
// or Java 21 virtual threads (Project Loom)

// Virtual threads (Java 21+)
try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
    Future<String> user  = scope.fork(() -> fetchUser(1));
    Future<Post[]> posts = scope.fork(() -> fetchPosts(1));

    scope.join().throwIfFailed();
    process(user.get(), posts.get());
}`},{lang:"cpp",code:`// C++20 coroutines — low-level, needs a framework
// (cppcoro, Asio, or similar)
#include <cppcoro/task.hpp>

cppcoro::task<std::string> fetchUser(int id) {
    auto response = co_await httpGet("/user/" + std::to_string(id));
    co_return response.body();
}

cppcoro::task<void> run() {
    auto user = co_await fetchUser(1);
    std::cout << user << "
";
}`},{lang:"python",code:`import asyncio
import aiohttp  # third-party async HTTP client

async def get_user(user_id: int) -> dict:
    async with aiohttp.ClientSession() as session:
        async with session.get(f"/api/users/{user_id}") as resp:
            return await resp.json()

async def main() -> None:
    user = await get_user(1)
    print(user["name"])

asyncio.run(main())
`},{lang:"js",code:`async function loadProfile(userId) {
    try {
        const user  = await fetchUser(userId);
        const posts = await fetchPosts(userId);
        return { user, posts };
    } catch (err) {
        console.error('load failed:', err);
        throw err;
    }
}

// Parallel — don't await one-by-one if independent
async function loadProfileFast(userId) {
    const [user, posts] = await Promise.all([
        fetchUser(userId),
        fetchPosts(userId),
    ]);
    return { user, posts };
}`},{lang:"ts",code:`async function loadProfile(userId: number): Promise<Profile> {
    try {
        const user  = await fetchUser(userId);   // User
        const posts = await fetchPosts(userId);  // Post[]
        return { user, posts };
    } catch (err) {
        if (err instanceof NetworkError) throw err;
        throw new Error('load failed', { cause: err });
    }
}

// Parallel
const [user, posts] = await Promise.all([
    fetchUser(userId),
    fetchPosts(userId),
]);`}],callout:{variant:"warn",content:"Do **not** `await` in a loop if the calls are independent. Use `Promise.all` for parallel execution — sequential `await` is 2–N× slower."}},{id:"async-error-handling",title:"Async Error Handling",tag:"gotcha",panels:[{lang:"java",code:`// CompletableFuture: use exceptionally or handle
CompletableFuture.supplyAsync(() -> riskyOp())
    .handle((result, err) -> {
        if (err != null) return "fallback";
        return result;
    });`},{lang:"cpp",code:`// std::future: exception propagated through get()
auto f = std::async(std::launch::async, []() {
    if (fail) throw std::runtime_error("failed");
    return 42;
});

try {
    int val = f.get(); // exception re-thrown here
} catch (const std::runtime_error& e) { ... }`},{lang:"python",code:`import asyncio

async def risky() -> str:
    await asyncio.sleep(0.1)
    raise ConnectionError("network timeout")

async def main() -> None:
    # Single await with try/except
    try:
        result = await risky()
    except ConnectionError as e:
        print(f"caught: {e}")

    # gather with return_exceptions=True — like Promise.allSettled
    results = await asyncio.gather(
        risky(), risky(),
        return_exceptions=True,
    )
    for r in results:
        if isinstance(r, Exception):
            print(f"error: {r}")
`},{lang:"js",code:`// Unhandled promise rejections are a common gotcha
// BAD — rejection swallowed silently
async function bad() {
    fetchData(); // no await, no catch
}

// GOOD
async function good() {
    try {
        const data = await fetchData();
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

// Or attach .catch() to the promise chain
fetchData().then(use).catch(handleError);`},{lang:"ts",code:`// Unhandled rejections crash Node.js and log in browsers
// Always handle: try/catch or .catch()

process.on('unhandledRejection', (err) => {
    console.error('FATAL:', err);
    process.exit(1);
});

// Wrap in try/catch — err is unknown
async function safe(): Promise<string | null> {
    try {
        return await riskyFetch();
    } catch (err) {
        if (err instanceof Error) console.error(err.message);
        return null;
    }
}`}]}]},jp={id:"collections",slug:"collections",group:"basics",title:"Collections",description:"Arrays, lists, maps, sets, and iteration across the languages.",concepts:[{id:"collections-array-list",title:"Array / List",tag:"similar",panels:[{lang:"java",code:`// Fixed-size array
int[] nums = {1, 2, 3, 4, 5};

// Dynamic list (ArrayList)
List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.get(0);       // "Alice"
names.size();       // 2

// Immutable list (Java 9+)
List<String> fixed = List.of("x", "y", "z");

// Stream operations
names.stream()
     .filter(n -> n.startsWith("A"))
     .map(String::toUpperCase)
     .collect(Collectors.toList());`},{lang:"cpp",code:`// Raw array
int nums[] = {1, 2, 3, 4, 5};

// std::vector (dynamic array)
std::vector<std::string> names{"Alice", "Bob"};
names.push_back("Carol");
names[0];            // "Alice"
names.size();        // 3

// Immutable: std::array (size fixed at compile time)
std::array<int, 3> fixed{1, 2, 3};

// Range-based iteration (C++11)
for (const auto& name : names) {
    std::cout << name << "
";
}`},{lang:"js",code:`// Array literals
const nums  = [1, 2, 3, 4, 5];
const names = ['Alice', 'Bob'];

names.push('Carol');
names[0];            // 'Alice'
names.length;        // 3

// Functional methods (all return new arrays)
nums.filter(n => n > 2);       // [3, 4, 5]
nums.map(n => n * 2);          // [2, 4, 6, 8, 10]
nums.reduce((a, b) => a + b);  // 15

// Spread & destructuring
const copy = [...nums];
const [first, second, ...rest] = nums;`},{lang:"ts",code:`const nums: number[]      = [1, 2, 3, 4, 5];
const names: string[]     = ['Alice', 'Bob'];

// Readonly array — no mutation
const fixed: readonly string[] = ['x', 'y', 'z'];
// fixed.push('w'); // compile error

// Tuple — fixed-length, typed per position
const pair: [string, number] = ['Alice', 30];

// Functional methods with inferred types
const doubled = nums.map(n => n * 2);  // number[]
const long    = names.filter(n => n.length > 3); // string[]`}]},{id:"collections-map",title:"Map / Dictionary",tag:"similar",panels:[{lang:"java",code:`Map<String, Integer> scores = new HashMap<>();
scores.put("Alice", 95);
scores.put("Bob",   87);

scores.get("Alice");          // 95
scores.getOrDefault("X", 0);  // 0
scores.containsKey("Bob");    // true
scores.size();                // 2

// Immutable map (Java 9+)
Map<String, Integer> fixed = Map.of("a", 1, "b", 2);

// Iteration
for (var entry : scores.entrySet()) {
    System.out.println(entry.getKey() + "=" + entry.getValue());
}`},{lang:"cpp",code:`// std::unordered_map (hash map)
std::unordered_map<std::string, int> scores{
    {"Alice", 95}, {"Bob", 87}
};

scores["Alice"];         // 95
scores["Carol"] = 92;    // insert
scores.count("Bob");     // 1 (exists) or 0 (not)
scores.size();           // 3

// std::map (ordered, O(log n))
std::map<std::string, int> ordered{{"b", 2}, {"a", 1}};

for (const auto& [key, val] : scores) {
    std::cout << key << "=" << val << "
";
}`},{lang:"js",code:`// Map — ordered insertion, any key type
const scores = new Map();
scores.set('Alice', 95);
scores.set('Bob',   87);

scores.get('Alice');       // 95
scores.has('Bob');         // true
scores.size;               // 2

// Object literal — fine for string keys
const obj = { Alice: 95, Bob: 87 };

// Iteration
for (const [key, val] of scores) {
    console.log(key, val);
}

scores.forEach((val, key) => console.log(key, val));`},{lang:"ts",code:`const scores = new Map<string, number>();
scores.set('Alice', 95);
scores.set('Bob',   87);

scores.get('Alice');      // number | undefined
scores.has('Bob');        // boolean

// Object with index signature
const obj: Record<string, number> = { Alice: 95, Bob: 87 };

// Strongly-typed object shape (not a Map)
interface ScoreBoard {
    [name: string]: number;
}`}]},{id:"collections-set",title:"Set",tag:"similar",panels:[{lang:"java",code:`Set<String> tags = new HashSet<>();
tags.add("typescript");
tags.add("react");
tags.add("typescript"); // duplicate — ignored

tags.contains("react");  // true
tags.size();             // 2

// Immutable set (Java 9+)
Set<String> fixed = Set.of("a", "b", "c");`},{lang:"cpp",code:`// std::unordered_set (hash set)
std::unordered_set<std::string> tags{
    "typescript", "react"
};
tags.insert("typescript"); // duplicate — ignored

tags.count("react");   // 1 (exists)
tags.size();           // 2

// std::set (ordered, O(log n))
std::set<int> sorted{3, 1, 2}; // stored as 1, 2, 3`},{lang:"js",code:`const tags = new Set(['typescript', 'react']);
tags.add('typescript'); // duplicate — ignored

tags.has('react');      // true
tags.size;              // 2

// Set operations via spread
const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);
const union     = new Set([...a, ...b]);
const intersect = new Set([...a].filter(x => b.has(x)));`},{lang:"ts",code:`const tags = new Set<string>(['typescript', 'react']);
tags.add('typescript');

tags.has('react');     // boolean
tags.size;             // number

// Type-safe set operations
function intersection<T>(a: Set<T>, b: Set<T>): Set<T> {
    return new Set([...a].filter(x => b.has(x)));
}`}]},{id:"collections-destructuring",title:"Destructuring",tag:"breaking",panels:[{lang:"java",code:`// Java: no destructuring syntax
// Use getters or manual assignment
Person p = new Person("Alice", 30);
String name = p.getName();
int    age  = p.getAge();

// Java 21 record patterns (preview)
if (p instanceof Person(String n, int a)) {
    System.out.println(n + " is " + a);
}`},{lang:"cpp",code:`// C++17 structured bindings
auto person = std::make_tuple("Alice", 30);
auto [name, age] = person;

// With std::pair
std::pair<std::string, int> p{"Alice", 30};
auto [n, a] = p;

// In range-based for loop
std::map<std::string, int> m{{"a", 1}, {"b", 2}};
for (auto& [key, val] : m) {
    std::cout << key << "=" << val << "
";
}`},{lang:"js",code:`// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// Object destructuring
const { name, age, city = 'Unknown' } = person;

// Rename
const { name: personName } = person;

// Nested
const { address: { street } } = user;

// In function params
function greet({ name, age }) {
    return \`\${name} is \${age}\`;
}`},{lang:"ts",code:`// Array destructuring
const [first, second, ...rest]: number[] = [1, 2, 3, 4, 5];

// Object destructuring with types
const { name, age }: { name: string; age: number } = person;

// Default value
const { city = 'Unknown' } = person;

// In function params — param properties typed inline
function greet({ name, age }: { name: string; age: number }) {
    return \`\${name} is \${age}\`;
}`}]}]},Rp={id:"modules",slug:"modules",group:"basics",title:"Modules",description:"Import, export, namespaces, and module systems.",concepts:[{id:"modules-export-import",title:"Export & Import",tag:"breaking",panels:[{lang:"java",code:`// Java: package + import
// File: com/example/utils/MathUtils.java
package com.example.utils;

public class MathUtils {
    public static int add(int a, int b) { return a + b; }
    public static int mul(int a, int b) { return a * b; }
}

// Usage (another file):
import com.example.utils.MathUtils;
// or wildcard:
import com.example.utils.*;

int result = MathUtils.add(1, 2);`},{lang:"cpp",code:`// C++: headers + #include (traditional)
// mathutils.hpp
#pragma once
namespace utils {
    int add(int a, int b);
    int mul(int a, int b);
}

// mathutils.cpp
#include "mathutils.hpp"
int utils::add(int a, int b) { return a + b; }
int utils::mul(int a, int b) { return a * b; }

// Usage:
#include "mathutils.hpp"
int result = utils::add(1, 2);

// C++20 modules (new approach)
import utils;
int result = utils::add(1, 2);`},{lang:"js",code:`// Named exports
// mathUtils.js
export function add(a, b) { return a + b; }
export function mul(a, b) { return a * b; }
export const PI = 3.14159;

// Default export
export default class Calculator { ... }

// Import — named
import { add, mul } from './mathUtils.js';

// Import — default
import Calculator from './mathUtils.js';

// Import — all named exports as namespace
import * as math from './mathUtils.js';
math.add(1, 2);`},{lang:"ts",code:`// Named exports with types
// mathUtils.ts
export function add(a: number, b: number): number {
    return a + b;
}

export type MathOp = (a: number, b: number) => number;

// Type-only import (erased at compile time)
import type { MathOp } from './mathUtils';
import { add } from './mathUtils';

// Re-export
export { add } from './mathUtils';
export type { MathOp } from './mathUtils';`}],callout:{variant:"info",content:"Use `import type` in TS for type-only imports. These are fully erased at compile time and cannot cause circular dependency issues at runtime."}},{id:"modules-namespaces",title:"Namespaces",tag:"similar",panels:[{lang:"java",code:`// Java packages are the namespace system
package com.myapp.domain.user;

// Fully qualified name avoids ambiguity
java.util.Date d1 = new java.util.Date();
// vs
java.sql.Date  d2 = new java.sql.Date(0L);`},{lang:"cpp",code:`namespace myapp {
    namespace domain {
        class User {
            std::string name;
        };
    }
}

// Usage
myapp::domain::User u;

// Using declaration (avoid in headers)
using namespace myapp::domain;
User u2;

// Namespace alias
namespace dom = myapp::domain;`},{lang:"js",code:`// JS has no namespace keyword
// Use module files + import/export for scoping

// Or group related exports in an object:
const StringUtils = {
    trim: (s) => s.trim(),
    truncate: (s, n) => s.slice(0, n),
};

export { StringUtils };`},{lang:"ts",code:`// TS has namespace keyword (avoid for new code — use modules)
namespace StringUtils {
    export function trim(s: string): string { return s.trim(); }
    export function truncate(s: string, n: number): string {
        return s.slice(0, n);
    }
}

// Namespaces are useful for augmenting global libraries:
declare namespace NodeJS {
    interface ProcessEnv {
        DATABASE_URL: string;
        PORT?: string;
    }
}`}]},{id:"modules-cjs-esm",title:"CommonJS vs ESM",tag:"gotcha",note:"JS/TS only",panels:[{lang:"js",code:`// CommonJS (Node.js legacy, .cjs files)
const path   = require('path');
const { add } = require('./mathUtils');
module.exports = { result: add(1, 2) };

// ES Modules (modern, .mjs or "type":"module" in package.json)
import path from 'path';
import { add } from './mathUtils.js'; // .js required in ESM!
export const result = add(1, 2);

// Top-level await — ESM only
const data = await fetch('/api/data').then(r => r.json());`},{lang:"ts",code:`// TS always uses ESM syntax — tsc or bundler converts
import path from 'path';
import { add } from './mathUtils';  // .ts ext omitted

// tsconfig: "module": "ESNext" + "moduleResolution": "bundler"
// handles the .js extension requirement automatically

// Dynamic import — available in both CJS and ESM
const { heavy } = await import('./heavyModule');

// Type for dynamic import
type LazyModule = typeof import('./heavyModule');`}],callout:{variant:"warn",content:'Mixing CJS and ESM causes subtle runtime errors. Pick one. For new projects, use ESM (`"type": "module"` in package.json). For Node.js libraries, output both with a bundler.'}}]},Ap={id:"conceptual",slug:"conceptual",group:"differences",title:"Conceptual Gaps",description:"Ideas that exist in Java/C++ but work fundamentally differently in JS/TS — or don't exist at all.",concepts:[{id:"concept-prototypes",title:"Prototype Chain vs Class Hierarchy",tag:"breaking",panels:[{lang:"java",code:`// Java: nominal class hierarchy
// Classes are blueprints; objects are instances
// Inheritance is declared, checked at compile time

class Animal { }
class Dog extends Animal { }

Dog d = new Dog();
// d's class is Dog, parent is Animal — fixed at compile time`},{lang:"cpp",code:`// C++: same — nominal class hierarchy
// Multiple inheritance allowed
class Animal {};
class Pet {};
class Dog : public Animal, public Pet {};

Dog d;
// d's class tree is fixed at compile time`},{lang:"js",code:`// JS: prototype-based inheritance
// Every object has a [[Prototype]] link — not a class copy

function Animal(name) { this.name = name; }
Animal.prototype.speak = function() { return '...'; };

function Dog(name) { Animal.call(this, name); }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.speak = function() { return 'Woof'; };

// class syntax is syntactic sugar over this
class Cat extends Animal {
    speak() { return 'Meow'; }
}

// You can modify prototypes at runtime — don't
Array.prototype.last = function() { return this[this.length - 1]; }; // evil`},{lang:"ts",code:`// TS adds static types but the runtime is still prototype-based
// class is still syntactic sugar — no real class hierarchy at runtime

class Animal {
    constructor(readonly name: string) {}
    speak(): string { return '...'; }
}
class Dog extends Animal {
    override speak(): string { return 'Woof'; }
}

// Structural check — not nominal:
const fake = { name: 'Bob', speak: () => 'Hi' };
const a: Animal = fake; // valid — same shape`}],callout:{variant:"info",content:"JS `class` is syntactic sugar over prototype chains. The runtime still uses prototypes. This matters when debugging, using `Object.getPrototypeOf`, or working with frameworks that manipulate prototypes."}},{id:"concept-this",title:"The `this` Problem",tag:"breaking",panels:[{lang:"java",code:`// Java: this always refers to the current instance
// It never changes based on how a method is called
public class Timer {
    private int count = 0;

    public void tick() {
        this.count++; // always refers to this Timer instance
    }

    public void start() {
        // Passing method reference: still bound correctly
        scheduler.run(this::tick);
    }
}`},{lang:"cpp",code:`// C++: 'this' is a pointer to the current object
// Like Java, 'this' binding is stable in member functions
class Timer {
    int count = 0;
public:
    void tick() {
        this->count++;
    }

    // std::bind or lambda to capture 'this'
    auto getCallback() {
        return [this]() { this->tick(); };
    }
};`},{lang:"js",code:`// JS: 'this' depends on HOW a function is called, not where defined
class Timer {
    count = 0;

    tick() { this.count++; }

    start() {
        // BUG: 'this' is lost when passed as callback
        setInterval(this.tick, 1000); // this is undefined (strict mode)

        // FIX 1: arrow function (captures 'this' lexically)
        setInterval(() => this.tick(), 1000);

        // FIX 2: .bind()
        setInterval(this.tick.bind(this), 1000);
    }
}`},{lang:"ts",code:`// TS can detect 'this' errors with noImplicitThis + explicit this param
class Timer {
    count = 0;

    // 'this' param is a fake param — erased at compile time
    // it tells TS what 'this' must be when this function is called
    tick(this: Timer): void {
        this.count++;
    }

    start(): void {
        // Error: the 'this' context of type 'void' is not assignable to 'Timer'
        // setInterval(this.tick, 1000);

        // Correct:
        setInterval(() => this.tick(), 1000);
    }
}`}],callout:{variant:"warn",content:"In JS/TS, **always use arrow functions for callbacks** inside class methods unless you know exactly what `this` will be. Lost `this` is one of the most common JS bugs."}},{id:"concept-closures",title:"Closures",tag:"breaking",panels:[{lang:"java",code:`// Java: anonymous classes / lambdas capture effectively-final vars
int multiplier = 3; // effectively final
Function<Integer, Integer> triple = n -> n * multiplier;

// multiplier = 4; // would make lambda invalid — compile error

// Java doesn't have first-class closures with mutable captures
// Workaround: use array or AtomicInteger
int[] counter = {0};
Runnable inc = () -> counter[0]++;`},{lang:"cpp",code:`// C++: lambdas can capture by value [=] or reference [&]
int multiplier = 3;

// Capture by value — snapshot at creation
auto triple = [multiplier](int n) { return n * multiplier; };
multiplier = 10; // triple still uses 3

// Capture by reference — sees later changes
auto liveTriple = [&multiplier](int n) { return n * multiplier; };
multiplier = 10; // liveTriple now uses 10

// Mutable closure (modifies local copy)
auto counter = [count = 0]() mutable { return ++count; };`},{lang:"js",code:`// JS: functions close over variables, not values
function makeCounter(start = 0) {
    let count = start; // captured by reference
    return {
        inc: () => ++count,
        get: () => count,
        reset: () => { count = start; },
    };
}

const c = makeCounter(10);
c.inc(); // 11
c.inc(); // 12
c.get(); // 12

// Classic loop-closure bug (var, not let):
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0); // logs 3, 3, 3 — NOT 0, 1, 2
}
// Fix: use let (block-scoped)
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0); // logs 0, 1, 2`},{lang:"ts",code:`function makeCounter(start = 0) {
    let count = start;
    return {
        inc: (): number => ++count,
        get: (): number => count,
        reset: (): void => { count = start; },
    };
}

// Return type inferred correctly
const c = makeCounter(10);
c.inc(); // number: 11

// The classic var-loop bug is avoided — use const/let always
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0); // 0, 1, 2
}`}],callout:{variant:"warn",content:"The `var` loop closure bug (`for (var i...)` logging the final value) is one of the most famous JS traps. `let` fixes it. This is why `var` must never be used."}},{id:"concept-event-loop",title:"Event Loop vs Threads",tag:"breaking",panels:[{lang:"java",code:`// Java: true multi-threading
Thread t = new Thread(() -> {
    // Runs concurrently on a separate OS thread
    processData();
});
t.start();
t.join(); // wait for completion

// ExecutorService for thread pools
ExecutorService pool = Executors.newFixedThreadPool(4);
Future<String> result = pool.submit(() -> fetchData());
String data = result.get(); // blocks until done`},{lang:"cpp",code:`// C++: true multi-threading (C++11)
#include <thread>
#include <future>

std::thread t([] { processData(); });
t.join();

// std::async for futures
auto result = std::async(std::launch::async,
                         [] { return fetchData(); });
std::string data = result.get();`},{lang:"js",code:`// JS: single-threaded event loop — no shared mutable state
// Concurrency via non-blocking I/O callbacks, not threads

// This does NOT run in parallel — it queues a callback
setTimeout(() => console.log('later'), 0);
console.log('now'); // prints first

// Web Workers for true parallelism (separate context, message passing)
const worker = new Worker('heavy.js');
worker.postMessage({ data: bigArray });
worker.onmessage = (e) => console.log(e.data);

// Node.js: worker_threads module
const { Worker } = require('worker_threads');`},{lang:"ts",code:`// Same event loop model as JS
// async/await does NOT create threads — it yields control

async function main(): Promise<void> {
    console.log('1');
    await new Promise(r => setTimeout(r, 0));
    console.log('3'); // executes after current call stack clears
}
console.log('2'); // prints between 1 and 3

// Worker thread with types
import { Worker, isMainThread, parentPort } from 'worker_threads';

if (isMainThread) {
    const w = new Worker(__filename);
    w.on('message', (result: number) => console.log(result));
} else {
    parentPort?.postMessage(heavyCompute());
}`}],callout:{variant:"info",content:"JS is single-threaded. `async/await` is not parallelism — it is cooperative multitasking. CPU-bound work blocks the event loop. Move heavy computation to a Web Worker or worker_threads."}},{id:"concept-memory",title:"Memory Management",tag:"breaking",panels:[{lang:"java",code:`// Java: garbage collected — no manual memory management
// Objects are allocated on the heap; GC reclaims unreachable objects

String s = new String("hello"); // heap allocation
s = null; // eligible for GC — but GC decides when

// No destructors — use try-with-resources for cleanup
try (var conn = new DBConnection()) {
    conn.query("SELECT 1");
} // conn.close() called automatically`},{lang:"cpp",code:`// C++: manual memory OR smart pointers (prefer smart pointers)

// Raw pointer — don't use in modern C++
int* raw = new int(42);
delete raw; // must manually free

// std::unique_ptr — exclusive ownership, auto-deleted
auto ptr = std::make_unique<MyClass>(args...);

// std::shared_ptr — shared ownership, ref-counted
auto shared = std::make_shared<MyClass>(args...);

// Stack allocation — destroyed at end of scope
{
    MyClass obj(args...); // RAII: constructor/destructor called
} // obj destroyed here`},{lang:"js",code:`// JS: garbage collected like Java
// V8 uses generational GC — most allocations are cheap

const obj = { data: new Array(1000000) };
// obj is GC'd when no longer reachable — no destructor

// WeakRef / FinalizationRegistry for cache patterns
const cache = new WeakMap(); // keys GC'd when unreachable
cache.set(someObj, computedValue);

// No way to force GC — don't try
// Memory leaks: forgotten event listeners, closures over large data
element.addEventListener('click', handler);
// Remember to remove when done:
element.removeEventListener('click', handler);`},{lang:"ts",code:`// Same GC model as JS — TS adds no memory semantics

// Common leak: closures keeping references alive
class Component {
    private handlers: Array<() => void> = [];

    mount(): void {
        const handler = () => this.update();
        window.addEventListener('resize', handler);
        this.handlers.push(handler); // track for cleanup
    }

    unmount(): void {
        this.handlers.forEach(h =>
            window.removeEventListener('resize', h)
        );
        this.handlers = [];
    }

    private update(): void { /* ... */ }
}`}]}]},Lp={id:"gotchas",slug:"gotchas",group:"differences",title:"Gotchas",description:"The things that will burn you. Especially == vs ===, type coercion, and prototype surprises.",concepts:[{id:"gotcha-equality",title:"== vs ===",tag:"gotcha",panels:[{lang:"java",code:`// Java: == compares object identity for reference types
String a = new String("hello");
String b = new String("hello");

a == b;       // false — different objects
a.equals(b);  // true — same content

// Primitives: == compares values (safe)
int x = 5, y = 5;
x == y; // true`},{lang:"cpp",code:`// C++: == is an operator, overloaded per type
std::string a = "hello";
std::string b = "hello";

a == b;  // true — std::string overloads == to compare content

// Pointer comparison
std::string* pa = &a;
std::string* pb = &b;
pa == pb; // false — different addresses`},{lang:"js",code:`// == performs type coercion — results are surprising
0   == false;    // true
0   == '';       // true
0   == '0';      // true
''  == false;    // true
null == undefined; // true
null == false;   // false (!)
NaN == NaN;      // false (!)

// === is strict equality — no coercion
0   === false;   // false
0   === '';      // false
null === undefined; // false

// Rule: NEVER use ==. Always use ===.`},{lang:"ts",code:`// TS doesn't prevent == but type-checking catches many coercion bugs
// With strict mode, comparing incompatible types is a compile error

// Still allowed (both sides could be number):
const x: number = 0;
const y: number | boolean = false;
x == y; // allowed — types overlap

// Better: always use ===
x === 0; // true
0 === false; // TS error: 'This condition will always return false since
             // the types 'number' and 'boolean' have no overlap'`}],callout:{variant:"warn",content:"Never use `==` in JS/TS. Ever. There is no situation where `==` is the right choice and `===` is not. Configure ESLint `eqeqeq: error` to enforce this."}},{id:"gotcha-nan",title:"NaN",tag:"gotcha",panels:[{lang:"java",code:`// Java: NaN exists for double/float
double nan = Double.NaN;
nan == nan;                      // false
Double.isNaN(nan);               // true

// Integer division by zero throws ArithmeticException
int result = 5 / 0; // throws!`},{lang:"cpp",code:`#include <cmath>
double nan = std::numeric_limits<double>::quiet_NaN();
nan == nan;          // false
std::isnan(nan);     // true

// Integer division by zero: undefined behaviour
int x = 5 / 0; // undefined behaviour!`},{lang:"js",code:`// NaN is a number type — check with Number.isNaN, not ==
typeof NaN;      // 'number' (!!)
NaN === NaN;     // false
NaN == NaN;      // false

// Bad check:
if (x == NaN) {} // always false — NaN != anything

// Safe checks:
Number.isNaN(NaN);     // true
Number.isNaN('text');  // false (no coercion)
isNaN('text');         // true (global isNaN coerces — bad!)

// Sources of NaN:
parseInt('abc');       // NaN
0 / 0;                 // NaN
Math.sqrt(-1);         // NaN
Number(undefined);     // NaN`},{lang:"ts",code:`// TS doesn't prevent NaN — it's just a number
const x: number = NaN; // valid TS

// Always use Number.isNaN(), never isNaN()
function safeDiv(a: number, b: number): number | null {
    if (b === 0) return null;
    return a / b;
}

// Type guard for NaN-safety
function isValidNumber(n: number): boolean {
    return !Number.isNaN(n) && Number.isFinite(n);
}`}],callout:{variant:"warn",content:'`typeof NaN === "number"` is one of JS\'s most infamous quirks. Use `Number.isNaN()` not `isNaN()` — the global `isNaN` coerces strings to numbers first.'}},{id:"gotcha-type-coercion",title:"Type Coercion",tag:"gotcha",panels:[{lang:"java",code:`// Java: very limited implicit coercion — mostly numeric widening
int    i = 42;
long   l = i;    // widening: safe
double d = l;    // widening: safe

// No string + number magic:
// "value: " + 42  works — but it's toString() under the hood
String s = "value: " + 42; // "value: 42"`},{lang:"cpp",code:`// C++: implicit conversions exist (be careful)
int    i = 42;
double d = i;    // widening: safe
int    j = 3.9;  // truncates to 3 — no warning by default!

// Use explicit casts for safety:
int k = static_cast<int>(3.9); // explicit — clear intent`},{lang:"js",code:`// JS coercion is aggressive and surprising
'5' + 3;       // '53'  — 3 is coerced to string
'5' - 3;       // 2     — '5' coerced to number for -
'5' * '3';     // 15    — both coerced
true + true;   // 2
[] + [];        // ''    — both coerce to ''
[] + {};        // '[object Object]'
{} + [];        // 0     — {} parsed as empty block!

// Number conversions:
Number('');    // 0
Number(null);  // 0
Number(false); // 0
Number(undefined); // NaN
Number('3px'); // NaN`},{lang:"ts",code:`// TS prevents most coercion via type checking
// But coercion still happens at RUNTIME for 'any' typed values

const x: string = '5';
const y: number = 3;
// x + y; // TS error: operator '+' cannot be applied

// Explicit conversion:
const sum = Number(x) + y;  // 8

// Template literals do safe toString:
const msg = \`value: \${y}\`;  // 'value: 3'

// Danger zone: 'any' bypasses all checks
const z: any = '5';
z + 3; // '53' — TS allows it, runtime coerces`}]},{id:"gotcha-hoisting",title:"Hoisting",tag:"gotcha",note:"JS/TS only",panels:[{lang:"js",code:`// var declarations are hoisted to function top — initialized to undefined
console.log(x); // undefined — not an error!
var x = 5;
console.log(x); // 5

// let and const are hoisted but NOT initialized (temporal dead zone)
console.log(y); // ReferenceError: Cannot access 'y' before init
let y = 10;

// Function DECLARATIONS are fully hoisted
greet('Alice'); // works!
function greet(name) { return 'Hello ' + name; }

// Function EXPRESSIONS are not
hello('Bob'); // TypeError: hello is not a function
var hello = function(name) { return 'Hi ' + name; };`},{lang:"ts",code:`// TS catches hoisting issues at compile time (with strict mode)
// But they still exist at runtime in compiled JS

// This is a TS error:
// console.log(x); // Block-scoped variable 'x' used before its declaration
const x = 5;

// Function declarations work anywhere in the file — fully hoisted
greet('Alice'); // OK in both TS and runtime

function greet(name: string): string {
    return \`Hello \${name}\`;
}`}],callout:{variant:"warn",content:"`var` hoisting is why `var` must never be used. `const` and `let` have temporal dead zones — use them, and declare variables at the top of their block."}},{id:"gotcha-optional-chaining",title:"Truthy / Falsy",tag:"gotcha",note:"JS/TS only",panels:[{lang:"js",code:`// JS falsy values — all these are false in a boolean context:
// false, 0, -0, 0n, '', null, undefined, NaN

// Truthy surprises:
if ([])    console.log('empty array is truthy');  // prints!
if ({})    console.log('empty object is truthy'); // prints!
if ('0')   console.log('"0" is truthy');          // prints!
if (-1)    console.log('negative is truthy');     // prints!

// Ternary traps:
const count = 0;
const msg = count ? 'has items' : 'empty'; // 'empty' — 0 is falsy!

// Safe: explicit comparison
const msg2 = count > 0 ? 'has items' : 'empty';

// Nullish coalescing vs OR:
const a = 0   ?? 'default'; // 0    (0 is not null/undefined)
const b = 0   || 'default'; // 'default' (0 is falsy)`},{lang:"ts",code:`// TS strict mode helps but doesn't eliminate all truthy traps
// The classic 0/empty string issue still compiles

const count: number = 0;
const msg = count ? 'has items' : 'empty'; // 'empty' — valid TS, runtime surprise

// Prefer explicit null checks:
const data: string | null = getDataMaybeNull();
const result = data !== null ? data : 'fallback';

// Or nullish coalescing (only null/undefined):
const result2 = data ?? 'fallback';

// Guard: check the type, not truthiness
const items: string[] = [];
if (items.length > 0) {   // explicit — not just 'if (items)'
    process(items);
}`}],callout:{variant:"warn",content:'Never use `||` for defaults when `0`, `""`, or `false` are valid values. Use `??` (nullish coalescing) instead — it only triggers on `null` and `undefined`.'}},{id:"gotcha-reference-vs-value",title:"Reference vs Value Semantics",tag:"gotcha",panels:[{lang:"java",code:`// Java: primitives by value, objects by reference
int a = 5;
int b = a;
b = 10;
System.out.println(a); // 5 — primitive, copied

int[] arr1 = {1, 2, 3};
int[] arr2 = arr1; // reference copy — same array!
arr2[0] = 99;
System.out.println(arr1[0]); // 99 — both point to same array

// Deep copy
int[] arr3 = arr1.clone();
arr3[0] = 0;
System.out.println(arr1[0]); // 99 — arr1 unaffected`},{lang:"cpp",code:`// C++: value semantics by default (copy constructor)
std::vector<int> v1 = {1, 2, 3};
std::vector<int> v2 = v1; // deep copy — independent
v2[0] = 99;
std::cout << v1[0]; // 1 — v1 unaffected

// Reference semantics: explicit ref or pointer
std::vector<int>& ref = v1;
ref[0] = 99;
std::cout << v1[0]; // 99 — same object`},{lang:"js",code:`// JS: primitives by value, objects/arrays by reference
let a = 5;
let b = a;
b = 10;
console.log(a); // 5 — primitive, copied

const arr1 = [1, 2, 3];
const arr2 = arr1; // reference — same array
arr2[0] = 99;
console.log(arr1[0]); // 99 — both see the change

// Shallow copy:
const arr3 = [...arr1];       // spread
const arr4 = arr1.slice();    // slice
const obj2 = { ...obj };      // spread object

// Deep copy (simple objects):
const obj3 = JSON.parse(JSON.stringify(obj)); // lossy for Date, undefined
// Or: structuredClone(obj) — modern, handles more types`},{lang:"ts",code:`// TS can enforce immutability with 'readonly'
const arr1: readonly number[] = [1, 2, 3];
// arr1[0] = 99; // compile error — readonly

const obj: Readonly<{ x: number }> = { x: 1 };
// obj.x = 2; // compile error

// Still reference semantics at runtime:
const arr2: number[] = [1, 2, 3];
const arr3 = arr2; // reference
arr3[0] = 99;
console.log(arr2[0]); // 99

// structuredClone for deep copy (Node 17+, modern browsers)
const deep = structuredClone(arr2);`}]}]},Ip={id:"ecosystem",slug:"ecosystem",group:"ecosystem",title:"Tool Equivalents",description:"Java and C++ tools mapped to their JS/TS equivalents. ★ = recommended first pick.",concepts:[],ecoMappings:[{from:"Maven / Gradle",fromLabel:"Java",to:["★ pnpm","npm","yarn"],note:"pnpm is fastest and strictest about dependency isolation. All three use package.json."},{from:"Make / CMake",fromLabel:"C++",to:["★ pnpm scripts","Makefile","just"],note:"Most JS projects use npm/pnpm scripts for build tasks."},{from:"javac / java",fromLabel:"Java",to:["★ tsc","esbuild","swc"],note:"tsc is the reference compiler. esbuild and swc are faster but skip type-checking."},{from:"g++ / clang++",fromLabel:"C++",to:["★ tsc","esbuild","swc"],note:"Same as Java — tsc for correctness, esbuild/swc for speed in CI."},{from:"JAR / WAR packaging",fromLabel:"Java",to:["★ Vite","esbuild","Rollup","webpack"],note:"Vite is standard for web apps. Rollup for libraries. webpack for legacy projects."},{from:"Static lib / .so / .dll",fromLabel:"C++",to:["★ npm package","Rollup library mode"],note:"Publish to npm. Use Rollup to generate CJS + ESM dual output."},{from:"JUnit 5",fromLabel:"Java",to:["★ Vitest","Jest"],note:"Vitest is the modern choice for Vite projects. Jest for legacy/non-Vite."},{from:"Google Test / Catch2",fromLabel:"C++",to:["★ Vitest","Jest"],note:"Same ecosystem — pick based on your bundler."},{from:"Mockito",fromLabel:"Java",to:["★ Vitest (vi.fn, vi.mock)","Jest mocks"],note:"Built-in mocking — no separate library needed."},{from:"Selenium",fromLabel:"Java",to:["★ Playwright","Cypress"],note:"Playwright is the modern end-to-end standard. Works across all browsers."},{from:"Checkstyle / PMD",fromLabel:"Java",to:["★ ESLint","oxlint","Biome"],note:"ESLint is most configurable. Biome combines linting + formatting in one tool."},{from:"clang-format / clang-tidy",fromLabel:"C++",to:["★ Prettier","Biome"],note:"Prettier for formatting only. Biome for formatting + linting."},{from:"JVM",fromLabel:"Java",to:["★ Node.js","Bun","Deno"],note:"Node.js is the standard. Bun is faster for scripts. Deno for security-first workloads."},{from:"Native executable",fromLabel:"C++",to:["★ Node.js","Bun compile","Deno compile"],note:"Node.js for servers. Bun compile / Deno compile for single-file executables."},{from:"Spring Boot",fromLabel:"Java",to:["★ Fastify","Express","Hono","NestJS"],note:"Fastify for performance. NestJS if you want Spring-like structure. Hono for edge runtimes."},{from:"Crow / Drogon",fromLabel:"C++",to:["★ Fastify","Hono"],note:"Fastify is the fastest mainstream Node.js server framework."},{from:"Hibernate / JPA",fromLabel:"Java",to:["★ Drizzle ORM","Prisma","Kysely"],note:"Prisma for DX. Drizzle for type safety + SQL control. Kysely for query builder."},{from:"SLF4J / Logback",fromLabel:"Java",to:["★ pino","winston"],note:"pino is the fastest Node.js logger with structured JSON output."},{from:"Jackson / Gson",fromLabel:"Java",to:["★ zod","valibot","superjson"],note:"JSON.parse is built-in. Use zod/valibot to validate and infer types from parsed data."},{from:"Bean Validation (JSR-380)",fromLabel:"Java",to:["★ zod","valibot"],note:"zod schemas double as type definitions and runtime validators."},{from:"Spring IoC / Guice",fromLabel:"Java",to:["★ manual DI (factory functions)","tsyringe","inversify"],note:"Manual DI is idiomatic in JS/TS. DI containers exist but are uncommon outside NestJS."}]},zp={id:"frameworks",slug:"frameworks",group:"ecosystem",title:"UI Frameworks",description:"UI and application framework equivalents. ★ = recommended first pick for new projects.",concepts:[],ecoMappings:[{from:"JavaFX",fromLabel:"Java",to:["★ React","Vue","Svelte","Angular"],note:"React is the dominant choice. Vue is gentler for beginners. Svelte compiles away the runtime. Angular for large teams wanting a full framework."},{from:"Qt (QML)",fromLabel:"C++",to:["★ React","Vue","Svelte"],note:"React maps best to Qt's declarative component model. All three compile to efficient DOM updates."},{from:"Swing / AWT",fromLabel:"Java",to:["★ React","Angular"],note:"Swing's imperative mutation model is closest to Angular's two-way binding. React's unidirectional flow is the modern standard."},{from:"wxWidgets / GTK (C++)",fromLabel:"C++",to:["★ React","Svelte"],note:"Widget-based GUI maps loosely to component trees. Svelte's compiled output is closest to native widget efficiency."},{from:"Spring MVC (server-rendered)",fromLabel:"Java",to:["★ Next.js","Remix","Astro"],note:"Next.js for React-based SSR/SSG. Remix for form-centric apps. Astro for content-heavy static sites."},{from:"Thymeleaf / JSP",fromLabel:"Java",to:["★ Astro","Next.js"],note:"Server-side templating maps directly to Astro (zero-JS by default) or Next.js server components."},{from:"JUCE (audio/desktop)",fromLabel:"C++",to:["★ Electron","Tauri"],note:"Electron bundles a Chromium runtime (large but battle-tested). Tauri uses the OS WebView (smaller, Rust backend)."},{from:"JavaFX Properties / Bindings",fromLabel:"Java",to:["★ Zustand","Jotai","Redux Toolkit"],note:"Zustand for simple shared state. Jotai for atomic state. Redux Toolkit for complex event-sourced state."},{from:"Qt Signals & Slots",fromLabel:"C++",to:["★ Zustand","Jotai"],note:"Signals/slots map to reactive stores. Jotai atoms are the closest conceptual equivalent."},{from:"Electron (Java wrapper)",fromLabel:"Java",to:["★ Electron","Tauri"],note:"Electron is the standard for cross-platform desktop apps. Tauri is faster and lighter using OS WebViews."},{from:"Qt (cross-platform native)",fromLabel:"C++",to:["★ Tauri","Electron"],note:"Tauri is the modern lightweight option. Electron for maximum browser API compatibility."},{from:"Android (Java)",fromLabel:"Java",to:["★ React Native","Expo"],note:"React Native for full native bridge. Expo adds managed workflow and OTA updates on top of React Native."},{from:"Qt Mobile",fromLabel:"C++",to:["★ React Native","Capacitor"],note:"Capacitor wraps a web app in a native shell — minimal native code. React Native for performance-critical mobile apps."}]},Wu=[_p,Cp,Np,Ep,Tp,bp,Pp,jp,Rp,Ap,Lp,Ip,zp],Op="_shell_1vcss_1",Dp="_skipLink_1vcss_7",Mp="_body_1vcss_26",Fp="_backdrop_1vcss_32",Up="_main_1vcss_36",Nr={shell:Op,skipLink:Dp,body:Mp,backdrop:Fp,main:Up};function Bp({state:c}){const T=Wu.find(C=>C.id===c.activeSectionId)??Wu[0],[p,D]=he.useState(!1),h=he.useCallback(C=>{c.setActiveSectionId(C),D(!1)},[c]);return _.jsxs("div",{className:Nr.shell,children:[_.jsx("a",{href:"#main-content",className:Nr.skipLink,children:"Skip to main content"}),_.jsx(Sf,{fromLang:c.fromLang,toLang:c.toLang,onFromChange:c.setFromLang,onToChange:c.setToLang,onSectionChange:h,menuOpen:p,onMenuToggle:()=>D(C=>!C)}),_.jsxs("div",{className:Nr.body,children:[p&&_.jsx("div",{className:Nr.backdrop,onClick:()=>D(!1),"aria-hidden":"true"}),_.jsx(bf,{activeSectionId:c.activeSectionId,onSectionChange:h,mobileOpen:p}),_.jsx("main",{id:"main-content",className:Nr.main,tabIndex:-1,children:_.jsx(xp,{section:T,fromLang:c.fromLang,toLang:c.toLang})})]})]})}function Jp(){const c=Yd();return _.jsx(Bp,{state:c})}const $u=document.getElementById("root");if(!$u)throw new Error("Root element not found");Xd.createRoot($u).render(_.jsx(he.StrictMode,{children:_.jsx(Jp,{})}));
