(function(){const T=document.createElement("link").relList;if(T&&T.supports&&T.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))I(v);new MutationObserver(v=>{for(const _ of v)if(_.type==="childList")for(const V of _.addedNodes)V.tagName==="LINK"&&V.rel==="modulepreload"&&I(V)}).observe(document,{childList:!0,subtree:!0});function p(v){const _={};return v.integrity&&(_.integrity=v.integrity),v.referrerPolicy&&(_.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?_.credentials="include":v.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function I(v){if(v.ep)return;v.ep=!0;const _=p(v);fetch(v.href,_)}})();var Li={exports:{}},Cr={},zi={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu;function Bd(){if(Lu)return B;Lu=1;var c=Symbol.for("react.element"),T=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),V=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),H=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),ne=Symbol.iterator;function Z(d){return d===null||typeof d!="object"?null:(d=ne&&d[ne]||d["@@iterator"],typeof d=="function"?d:null)}var Le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ze=Object.assign,X={};function A(d,w,U){this.props=d,this.context=w,this.refs=X,this.updater=U||Le}A.prototype.isReactComponent={},A.prototype.setState=function(d,w){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,w,"setState")},A.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function Y(){}Y.prototype=A.prototype;function ue(d,w,U){this.props=d,this.context=w,this.refs=X,this.updater=U||Le}var Je=ue.prototype=new Y;Je.constructor=ue,ze(Je,A.prototype),Je.isPureReactComponent=!0;var he=Array.isArray,nt=Object.prototype.hasOwnProperty,Pe={current:null},Ie={key:!0,ref:!0,__self:!0,__source:!0};function Ke(d,w,U){var J,$={},Q=null,ee=null;if(w!=null)for(J in w.ref!==void 0&&(ee=w.ref),w.key!==void 0&&(Q=""+w.key),w)nt.call(w,J)&&!Ie.hasOwnProperty(J)&&($[J]=w[J]);var K=arguments.length-2;if(K===1)$.children=U;else if(1<K){for(var oe=Array(K),We=0;We<K;We++)oe[We]=arguments[We+2];$.children=oe}if(d&&d.defaultProps)for(J in K=d.defaultProps,K)$[J]===void 0&&($[J]=K[J]);return{$$typeof:c,type:d,key:Q,ref:ee,props:$,_owner:Pe.current}}function Pt(d,w){return{$$typeof:c,type:d.type,key:w,ref:d.ref,props:d.props,_owner:d._owner}}function St(d){return typeof d=="object"&&d!==null&&d.$$typeof===c}function Kt(d){var w={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(U){return w[U]})}var ft=/\/+/g;function Ve(d,w){return typeof d=="object"&&d!==null&&d.key!=null?Kt(""+d.key):w.toString(36)}function rt(d,w,U,J,$){var Q=typeof d;(Q==="undefined"||Q==="boolean")&&(d=null);var ee=!1;if(d===null)ee=!0;else switch(Q){case"string":case"number":ee=!0;break;case"object":switch(d.$$typeof){case c:case T:ee=!0}}if(ee)return ee=d,$=$(ee),d=J===""?"."+Ve(ee,0):J,he($)?(U="",d!=null&&(U=d.replace(ft,"$&/")+"/"),rt($,w,U,"",function(We){return We})):$!=null&&(St($)&&($=Pt($,U+(!$.key||ee&&ee.key===$.key?"":(""+$.key).replace(ft,"$&/")+"/")+d)),w.push($)),1;if(ee=0,J=J===""?".":J+":",he(d))for(var K=0;K<d.length;K++){Q=d[K];var oe=J+Ve(Q,K);ee+=rt(Q,w,U,oe,$)}else if(oe=Z(d),typeof oe=="function")for(d=oe.call(d),K=0;!(Q=d.next()).done;)Q=Q.value,oe=J+Ve(Q,K++),ee+=rt(Q,w,U,oe,$);else if(Q==="object")throw w=String(d),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.");return ee}function pt(d,w,U){if(d==null)return d;var J=[],$=0;return rt(d,J,"","",function(Q){return w.call(U,Q,$++)}),J}function Ae(d){if(d._status===-1){var w=d._result;w=w(),w.then(function(U){(d._status===0||d._status===-1)&&(d._status=1,d._result=U)},function(U){(d._status===0||d._status===-1)&&(d._status=2,d._result=U)}),d._status===-1&&(d._status=0,d._result=w)}if(d._status===1)return d._result.default;throw d._result}var ce={current:null},C={transition:null},D={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:C,ReactCurrentOwner:Pe};function P(){throw Error("act(...) is not supported in production builds of React.")}return B.Children={map:pt,forEach:function(d,w,U){pt(d,function(){w.apply(this,arguments)},U)},count:function(d){var w=0;return pt(d,function(){w++}),w},toArray:function(d){return pt(d,function(w){return w})||[]},only:function(d){if(!St(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},B.Component=A,B.Fragment=p,B.Profiler=v,B.PureComponent=ue,B.StrictMode=I,B.Suspense=L,B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,B.act=P,B.cloneElement=function(d,w,U){if(d==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+d+".");var J=ze({},d.props),$=d.key,Q=d.ref,ee=d._owner;if(w!=null){if(w.ref!==void 0&&(Q=w.ref,ee=Pe.current),w.key!==void 0&&($=""+w.key),d.type&&d.type.defaultProps)var K=d.type.defaultProps;for(oe in w)nt.call(w,oe)&&!Ie.hasOwnProperty(oe)&&(J[oe]=w[oe]===void 0&&K!==void 0?K[oe]:w[oe])}var oe=arguments.length-2;if(oe===1)J.children=U;else if(1<oe){K=Array(oe);for(var We=0;We<oe;We++)K[We]=arguments[We+2];J.children=K}return{$$typeof:c,type:d.type,key:$,ref:Q,props:J,_owner:ee}},B.createContext=function(d){return d={$$typeof:V,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},d.Provider={$$typeof:_,_context:d},d.Consumer=d},B.createElement=Ke,B.createFactory=function(d){var w=Ke.bind(null,d);return w.type=d,w},B.createRef=function(){return{current:null}},B.forwardRef=function(d){return{$$typeof:h,render:d}},B.isValidElement=St,B.lazy=function(d){return{$$typeof:we,_payload:{_status:-1,_result:d},_init:Ae}},B.memo=function(d,w){return{$$typeof:H,type:d,compare:w===void 0?null:w}},B.startTransition=function(d){var w=C.transition;C.transition={};try{d()}finally{C.transition=w}},B.unstable_act=P,B.useCallback=function(d,w){return ce.current.useCallback(d,w)},B.useContext=function(d){return ce.current.useContext(d)},B.useDebugValue=function(){},B.useDeferredValue=function(d){return ce.current.useDeferredValue(d)},B.useEffect=function(d,w){return ce.current.useEffect(d,w)},B.useId=function(){return ce.current.useId()},B.useImperativeHandle=function(d,w,U){return ce.current.useImperativeHandle(d,w,U)},B.useInsertionEffect=function(d,w){return ce.current.useInsertionEffect(d,w)},B.useLayoutEffect=function(d,w){return ce.current.useLayoutEffect(d,w)},B.useMemo=function(d,w){return ce.current.useMemo(d,w)},B.useReducer=function(d,w,U){return ce.current.useReducer(d,w,U)},B.useRef=function(d){return ce.current.useRef(d)},B.useState=function(d){return ce.current.useState(d)},B.useSyncExternalStore=function(d,w,U){return ce.current.useSyncExternalStore(d,w,U)},B.useTransition=function(){return ce.current.useTransition()},B.version="18.3.1",B}var zu;function Mi(){return zu||(zu=1,zi.exports=Bd()),zi.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu;function Jd(){if(Iu)return Cr;Iu=1;var c=Mi(),T=Symbol.for("react.element"),p=Symbol.for("react.fragment"),I=Object.prototype.hasOwnProperty,v=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function V(h,L,H){var we,ne={},Z=null,Le=null;H!==void 0&&(Z=""+H),L.key!==void 0&&(Z=""+L.key),L.ref!==void 0&&(Le=L.ref);for(we in L)I.call(L,we)&&!_.hasOwnProperty(we)&&(ne[we]=L[we]);if(h&&h.defaultProps)for(we in L=h.defaultProps,L)ne[we]===void 0&&(ne[we]=L[we]);return{$$typeof:T,type:h,key:Z,ref:Le,props:ne,_owner:v.current}}return Cr.Fragment=p,Cr.jsx=V,Cr.jsxs=V,Cr}var Au;function Vd(){return Au||(Au=1,Li.exports=Jd()),Li.exports}var E=Vd(),ge=Mi(),Ol={},Ii={exports:{}},Be={},Ai={exports:{}},Oi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ou;function Wd(){return Ou||(Ou=1,(function(c){function T(C,D){var P=C.length;C.push(D);e:for(;0<P;){var d=P-1>>>1,w=C[d];if(0<v(w,D))C[d]=D,C[P]=w,P=d;else break e}}function p(C){return C.length===0?null:C[0]}function I(C){if(C.length===0)return null;var D=C[0],P=C.pop();if(P!==D){C[0]=P;e:for(var d=0,w=C.length,U=w>>>1;d<U;){var J=2*(d+1)-1,$=C[J],Q=J+1,ee=C[Q];if(0>v($,P))Q<w&&0>v(ee,$)?(C[d]=ee,C[Q]=P,d=Q):(C[d]=$,C[J]=P,d=J);else if(Q<w&&0>v(ee,P))C[d]=ee,C[Q]=P,d=Q;else break e}}return D}function v(C,D){var P=C.sortIndex-D.sortIndex;return P!==0?P:C.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var _=performance;c.unstable_now=function(){return _.now()}}else{var V=Date,h=V.now();c.unstable_now=function(){return V.now()-h}}var L=[],H=[],we=1,ne=null,Z=3,Le=!1,ze=!1,X=!1,A=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Je(C){for(var D=p(H);D!==null;){if(D.callback===null)I(H);else if(D.startTime<=C)I(H),D.sortIndex=D.expirationTime,T(L,D);else break;D=p(H)}}function he(C){if(X=!1,Je(C),!ze)if(p(L)!==null)ze=!0,Ae(nt);else{var D=p(H);D!==null&&ce(he,D.startTime-C)}}function nt(C,D){ze=!1,X&&(X=!1,Y(Ke),Ke=-1),Le=!0;var P=Z;try{for(Je(D),ne=p(L);ne!==null&&(!(ne.expirationTime>D)||C&&!Kt());){var d=ne.callback;if(typeof d=="function"){ne.callback=null,Z=ne.priorityLevel;var w=d(ne.expirationTime<=D);D=c.unstable_now(),typeof w=="function"?ne.callback=w:ne===p(L)&&I(L),Je(D)}else I(L);ne=p(L)}if(ne!==null)var U=!0;else{var J=p(H);J!==null&&ce(he,J.startTime-D),U=!1}return U}finally{ne=null,Z=P,Le=!1}}var Pe=!1,Ie=null,Ke=-1,Pt=5,St=-1;function Kt(){return!(c.unstable_now()-St<Pt)}function ft(){if(Ie!==null){var C=c.unstable_now();St=C;var D=!0;try{D=Ie(!0,C)}finally{D?Ve():(Pe=!1,Ie=null)}}else Pe=!1}var Ve;if(typeof ue=="function")Ve=function(){ue(ft)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,pt=rt.port2;rt.port1.onmessage=ft,Ve=function(){pt.postMessage(null)}}else Ve=function(){A(ft,0)};function Ae(C){Ie=C,Pe||(Pe=!0,Ve())}function ce(C,D){Ke=A(function(){C(c.unstable_now())},D)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(C){C.callback=null},c.unstable_continueExecution=function(){ze||Le||(ze=!0,Ae(nt))},c.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Pt=0<C?Math.floor(1e3/C):5},c.unstable_getCurrentPriorityLevel=function(){return Z},c.unstable_getFirstCallbackNode=function(){return p(L)},c.unstable_next=function(C){switch(Z){case 1:case 2:case 3:var D=3;break;default:D=Z}var P=Z;Z=D;try{return C()}finally{Z=P}},c.unstable_pauseExecution=function(){},c.unstable_requestPaint=function(){},c.unstable_runWithPriority=function(C,D){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=Z;Z=C;try{return D()}finally{Z=P}},c.unstable_scheduleCallback=function(C,D,P){var d=c.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?d+P:d):P=d,C){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=P+w,C={id:we++,callback:D,priorityLevel:C,startTime:P,expirationTime:w,sortIndex:-1},P>d?(C.sortIndex=P,T(H,C),p(L)===null&&C===p(H)&&(X?(Y(Ke),Ke=-1):X=!0,ce(he,P-d))):(C.sortIndex=w,T(L,C),ze||Le||(ze=!0,Ae(nt))),C},c.unstable_shouldYield=Kt,c.unstable_wrapCallback=function(C){var D=Z;return function(){var P=Z;Z=D;try{return C.apply(this,arguments)}finally{Z=P}}}})(Oi)),Oi}var Mu;function Hd(){return Mu||(Mu=1,Ai.exports=Wd()),Ai.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du;function $d(){if(Du)return Be;Du=1;var c=Mi(),T=Hd();function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var I=new Set,v={};function _(e,t){V(e,t),V(e+"Capture",t)}function V(e,t){for(v[e]=t,e=0;e<t.length;e++)I.add(t[e])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),L=Object.prototype.hasOwnProperty,H=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,we={},ne={};function Z(e){return L.call(ne,e)?!0:L.call(we,e)?!1:H.test(e)?ne[e]=!0:(we[e]=!0,!1)}function Le(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ze(e,t,n,r){if(t===null||typeof t>"u"||Le(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function X(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){A[e]=new X(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];A[t]=new X(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){A[e]=new X(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){A[e]=new X(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){A[e]=new X(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){A[e]=new X(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){A[e]=new X(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){A[e]=new X(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){A[e]=new X(e,5,!1,e.toLowerCase(),null,!1,!1)});var Y=/[\-:]([a-z])/g;function ue(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Y,ue);A[t]=new X(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Y,ue);A[t]=new X(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Y,ue);A[t]=new X(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){A[e]=new X(e,1,!1,e.toLowerCase(),null,!1,!1)}),A.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){A[e]=new X(e,1,!1,e.toLowerCase(),null,!0,!0)});function Je(e,t,n,r){var l=A.hasOwnProperty(t)?A[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ze(t,n,l,r)&&(n=null),r||l===null?Z(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var he=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nt=Symbol.for("react.element"),Pe=Symbol.for("react.portal"),Ie=Symbol.for("react.fragment"),Ke=Symbol.for("react.strict_mode"),Pt=Symbol.for("react.profiler"),St=Symbol.for("react.provider"),Kt=Symbol.for("react.context"),ft=Symbol.for("react.forward_ref"),Ve=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),pt=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),C=Symbol.iterator;function D(e){return e===null||typeof e!="object"?null:(e=C&&e[C]||e["@@iterator"],typeof e=="function"?e:null)}var P=Object.assign,d;function w(e){if(d===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);d=t&&t[1]||""}return`
`+d+e}var U=!1;function J(e,t){if(!e||U)return"";U=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var r=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){r=g}e.call(t.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var l=g.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{U=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?w(e):""}function $(e){switch(e.tag){case 5:return w(e.type);case 16:return w("Lazy");case 13:return w("Suspense");case 19:return w("SuspenseList");case 0:case 2:case 15:return e=J(e.type,!1),e;case 11:return e=J(e.type.render,!1),e;case 1:return e=J(e.type,!0),e;default:return""}}function Q(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ie:return"Fragment";case Pe:return"Portal";case Pt:return"Profiler";case Ke:return"StrictMode";case Ve:return"Suspense";case rt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kt:return(e.displayName||"Context")+".Consumer";case St:return(e._context.displayName||"Context")+".Provider";case ft:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pt:return t=e.displayName||null,t!==null?t:Q(e.type)||"Memo";case Ae:t=e._payload,e=e._init;try{return Q(e(t))}catch{}}return null}function ee(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Q(t);case 8:return t===Ke?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function K(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function We(e){var t=oe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Nr(e){e._valueTracker||(e._valueTracker=We(e))}function Di(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=oe(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Dl(e,t){var n=t.checked;return P({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=K(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ui(e,t){t=t.checked,t!=null&&Je(e,"checked",t,!1)}function Fl(e,t){Ui(e,t);var n=K(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ul(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ul(e,t.type,K(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ul(e,t,n){(t!=="number"||Tr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function dn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+K(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Bl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(p(91));return P({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ji(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(p(92));if(Fn(n)){if(1<n.length)throw Error(p(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:K(n)}}function Vi(e,t){var n=K(t.value),r=K(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Wi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hi(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jr,$i=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jr=jr||document.createElement("div"),jr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Un(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hu=["Webkit","ms","Moz","O"];Object.keys(Bn).forEach(function(e){Hu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bn[t]=Bn[e]})});function Qi(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Bn.hasOwnProperty(e)&&Bn[e]?(""+t).trim():t+"px"}function Gi(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Qi(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var $u=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vl(e,t){if(t){if($u[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(p(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(p(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(p(61))}if(t.style!=null&&typeof t.style!="object")throw Error(p(62))}}function Wl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hl=null;function $l(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ql=null,fn=null,pn=null;function Ki(e){if(e=ur(e)){if(typeof Ql!="function")throw Error(p(280));var t=e.stateNode;t&&(t=Xr(t),Ql(e.stateNode,e.type,t))}}function qi(e){fn?pn?pn.push(e):pn=[e]:fn=e}function Xi(){if(fn){var e=fn,t=pn;if(pn=fn=null,Ki(e),t)for(e=0;e<t.length;e++)Ki(t[e])}}function Yi(e,t){return e(t)}function Zi(){}var Gl=!1;function es(e,t,n){if(Gl)return e(t,n);Gl=!0;try{return Yi(e,t,n)}finally{Gl=!1,(fn!==null||pn!==null)&&(Zi(),Xi())}}function Jn(e,t){var n=e.stateNode;if(n===null)return null;var r=Xr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(p(231,t,typeof n));return n}var Kl=!1;if(h)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){Kl=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{Kl=!1}function Qu(e,t,n,r,l,o,i,s,a){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(S){this.onError(S)}}var Wn=!1,Pr=null,br=!1,ql=null,Gu={onError:function(e){Wn=!0,Pr=e}};function Ku(e,t,n,r,l,o,i,s,a){Wn=!1,Pr=null,Qu.apply(Gu,arguments)}function qu(e,t,n,r,l,o,i,s,a){if(Ku.apply(this,arguments),Wn){if(Wn){var g=Pr;Wn=!1,Pr=null}else throw Error(p(198));br||(br=!0,ql=g)}}function qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ts(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ns(e){if(qt(e)!==e)throw Error(p(188))}function Xu(e){var t=e.alternate;if(!t){if(t=qt(e),t===null)throw Error(p(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return ns(l),e;if(o===r)return ns(l),t;o=o.sibling}throw Error(p(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(p(189))}}if(n.alternate!==r)throw Error(p(190))}if(n.tag!==3)throw Error(p(188));return n.stateNode.current===n?e:t}function rs(e){return e=Xu(e),e!==null?ls(e):null}function ls(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ls(e);if(t!==null)return t;e=e.sibling}return null}var os=T.unstable_scheduleCallback,is=T.unstable_cancelCallback,Yu=T.unstable_shouldYield,Zu=T.unstable_requestPaint,fe=T.unstable_now,ec=T.unstable_getCurrentPriorityLevel,Xl=T.unstable_ImmediatePriority,ss=T.unstable_UserBlockingPriority,Rr=T.unstable_NormalPriority,tc=T.unstable_LowPriority,as=T.unstable_IdlePriority,Lr=null,mt=null;function nc(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Lr,e,void 0,(e.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:oc,rc=Math.log,lc=Math.LN2;function oc(e){return e>>>=0,e===0?32:31-(rc(e)/lc|0)|0}var zr=64,Ir=4194304;function Hn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ar(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=Hn(s):(o&=i,o!==0&&(r=Hn(o)))}else i=n&~l,i!==0?r=Hn(i):o!==0&&(r=Hn(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-lt(t),l=1<<n,r|=e[n],t&=~l;return r}function ic(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-lt(o),s=1<<i,a=l[i];a===-1?((s&n)===0||(s&r)!==0)&&(l[i]=ic(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function Yl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function us(){var e=zr;return zr<<=1,(zr&4194240)===0&&(zr=64),e}function Zl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $n(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-lt(t),e[t]=n}function ac(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-lt(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function eo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-lt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var q=0;function cs(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ds,to,fs,ps,ms,no=!1,Or=[],bt=null,Rt=null,Lt=null,Qn=new Map,Gn=new Map,zt=[],uc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gs(e,t){switch(e){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":Qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function Kn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=ur(t),t!==null&&to(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function cc(e,t,n,r,l){switch(t){case"focusin":return bt=Kn(bt,e,t,n,r,l),!0;case"dragenter":return Rt=Kn(Rt,e,t,n,r,l),!0;case"mouseover":return Lt=Kn(Lt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Qn.set(o,Kn(Qn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Gn.set(o,Kn(Gn.get(o)||null,e,t,n,r,l)),!0}return!1}function hs(e){var t=Xt(e.target);if(t!==null){var n=qt(t);if(n!==null){if(t=n.tag,t===13){if(t=ts(n),t!==null){e.blockedOn=t,ms(e.priority,function(){fs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Hl=r,n.target.dispatchEvent(r),Hl=null}else return t=ur(n),t!==null&&to(t),e.blockedOn=n,!1;t.shift()}return!0}function vs(e,t,n){Mr(e)&&n.delete(t)}function dc(){no=!1,bt!==null&&Mr(bt)&&(bt=null),Rt!==null&&Mr(Rt)&&(Rt=null),Lt!==null&&Mr(Lt)&&(Lt=null),Qn.forEach(vs),Gn.forEach(vs)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,no||(no=!0,T.unstable_scheduleCallback(T.unstable_NormalPriority,dc)))}function Xn(e){function t(l){return qn(l,e)}if(0<Or.length){qn(Or[0],e);for(var n=1;n<Or.length;n++){var r=Or[n];r.blockedOn===e&&(r.blockedOn=null)}}for(bt!==null&&qn(bt,e),Rt!==null&&qn(Rt,e),Lt!==null&&qn(Lt,e),Qn.forEach(t),Gn.forEach(t),n=0;n<zt.length;n++)r=zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&(n=zt[0],n.blockedOn===null);)hs(n),n.blockedOn===null&&zt.shift()}var mn=he.ReactCurrentBatchConfig,Dr=!0;function fc(e,t,n,r){var l=q,o=mn.transition;mn.transition=null;try{q=1,ro(e,t,n,r)}finally{q=l,mn.transition=o}}function pc(e,t,n,r){var l=q,o=mn.transition;mn.transition=null;try{q=4,ro(e,t,n,r)}finally{q=l,mn.transition=o}}function ro(e,t,n,r){if(Dr){var l=lo(e,t,n,r);if(l===null)xo(e,t,r,Fr,n),gs(e,r);else if(cc(l,e,t,n,r))r.stopPropagation();else if(gs(e,r),t&4&&-1<uc.indexOf(e)){for(;l!==null;){var o=ur(l);if(o!==null&&ds(o),o=lo(e,t,n,r),o===null&&xo(e,t,r,Fr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else xo(e,t,r,null,n)}}var Fr=null;function lo(e,t,n,r){if(Fr=null,e=$l(r),e=Xt(e),e!==null)if(t=qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ts(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fr=e,null}function ys(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ec()){case Xl:return 1;case ss:return 4;case Rr:case tc:return 16;case as:return 536870912;default:return 16}default:return 16}}var It=null,oo=null,Ur=null;function ws(){if(Ur)return Ur;var e,t=oo,n=t.length,r,l="value"in It?It.value:It.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Ur=l.slice(e,1<r?1-r:void 0)}function Br(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jr(){return!0}function Ss(){return!1}function He(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Jr:Ss,this.isPropagationStopped=Ss,this}return P(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jr)},persist:function(){},isPersistent:Jr}),t}var gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},io=He(gn),Yn=P({},gn,{view:0,detail:0}),mc=He(Yn),so,ao,Zn,Vr=P({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:co,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zn&&(Zn&&e.type==="mousemove"?(so=e.screenX-Zn.screenX,ao=e.screenY-Zn.screenY):ao=so=0,Zn=e),so)},movementY:function(e){return"movementY"in e?e.movementY:ao}}),ks=He(Vr),gc=P({},Vr,{dataTransfer:0}),hc=He(gc),vc=P({},Yn,{relatedTarget:0}),uo=He(vc),yc=P({},gn,{animationName:0,elapsedTime:0,pseudoElement:0}),wc=He(yc),Sc=P({},gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kc=He(Sc),xc=P({},gn,{data:0}),xs=He(xc),_c={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ec={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ec[e])?!!t[e]:!1}function co(){return Nc}var Tc=P({},Yn,{key:function(e){if(e.key){var t=_c[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:co,charCode:function(e){return e.type==="keypress"?Br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jc=He(Tc),Pc=P({},Vr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_s=He(Pc),bc=P({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:co}),Rc=He(bc),Lc=P({},gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),zc=He(Lc),Ic=P({},Vr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ac=He(Ic),Oc=[9,13,27,32],fo=h&&"CompositionEvent"in window,er=null;h&&"documentMode"in document&&(er=document.documentMode);var Mc=h&&"TextEvent"in window&&!er,Cs=h&&(!fo||er&&8<er&&11>=er),Es=" ",Ns=!1;function Ts(e,t){switch(e){case"keyup":return Oc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function js(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hn=!1;function Dc(e,t){switch(e){case"compositionend":return js(t);case"keypress":return t.which!==32?null:(Ns=!0,Es);case"textInput":return e=t.data,e===Es&&Ns?null:e;default:return null}}function Fc(e,t){if(hn)return e==="compositionend"||!fo&&Ts(e,t)?(e=ws(),Ur=oo=It=null,hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cs&&t.locale!=="ko"?null:t.data;default:return null}}var Uc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Uc[e.type]:t==="textarea"}function bs(e,t,n,r){qi(r),t=Gr(t,"onChange"),0<t.length&&(n=new io("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var tr=null,nr=null;function Bc(e){Gs(e,0)}function Wr(e){var t=kn(e);if(Di(t))return e}function Jc(e,t){if(e==="change")return t}var Rs=!1;if(h){var po;if(h){var mo="oninput"in document;if(!mo){var Ls=document.createElement("div");Ls.setAttribute("oninput","return;"),mo=typeof Ls.oninput=="function"}po=mo}else po=!1;Rs=po&&(!document.documentMode||9<document.documentMode)}function zs(){tr&&(tr.detachEvent("onpropertychange",Is),nr=tr=null)}function Is(e){if(e.propertyName==="value"&&Wr(nr)){var t=[];bs(t,nr,e,$l(e)),es(Bc,t)}}function Vc(e,t,n){e==="focusin"?(zs(),tr=t,nr=n,tr.attachEvent("onpropertychange",Is)):e==="focusout"&&zs()}function Wc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wr(nr)}function Hc(e,t){if(e==="click")return Wr(t)}function $c(e,t){if(e==="input"||e==="change")return Wr(t)}function Qc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:Qc;function rr(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!L.call(t,l)||!ot(e[l],t[l]))return!1}return!0}function As(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Os(e,t){var n=As(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=As(n)}}function Ms(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ms(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ds(){for(var e=window,t=Tr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tr(e.document)}return t}function go(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gc(e){var t=Ds(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ms(n.ownerDocument.documentElement,n)){if(r!==null&&go(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Os(n,o);var i=Os(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kc=h&&"documentMode"in document&&11>=document.documentMode,vn=null,ho=null,lr=null,vo=!1;function Fs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vo||vn==null||vn!==Tr(r)||(r=vn,"selectionStart"in r&&go(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lr&&rr(lr,r)||(lr=r,r=Gr(ho,"onSelect"),0<r.length&&(t=new io("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vn)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yn={animationend:Hr("Animation","AnimationEnd"),animationiteration:Hr("Animation","AnimationIteration"),animationstart:Hr("Animation","AnimationStart"),transitionend:Hr("Transition","TransitionEnd")},yo={},Us={};h&&(Us=document.createElement("div").style,"AnimationEvent"in window||(delete yn.animationend.animation,delete yn.animationiteration.animation,delete yn.animationstart.animation),"TransitionEvent"in window||delete yn.transitionend.transition);function $r(e){if(yo[e])return yo[e];if(!yn[e])return e;var t=yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Us)return yo[e]=t[n];return e}var Bs=$r("animationend"),Js=$r("animationiteration"),Vs=$r("animationstart"),Ws=$r("transitionend"),Hs=new Map,$s="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function At(e,t){Hs.set(e,t),_(t,[e])}for(var wo=0;wo<$s.length;wo++){var So=$s[wo],qc=So.toLowerCase(),Xc=So[0].toUpperCase()+So.slice(1);At(qc,"on"+Xc)}At(Bs,"onAnimationEnd"),At(Js,"onAnimationIteration"),At(Vs,"onAnimationStart"),At("dblclick","onDoubleClick"),At("focusin","onFocus"),At("focusout","onBlur"),At(Ws,"onTransitionEnd"),V("onMouseEnter",["mouseout","mouseover"]),V("onMouseLeave",["mouseout","mouseover"]),V("onPointerEnter",["pointerout","pointerover"]),V("onPointerLeave",["pointerout","pointerover"]),_("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_("onBeforeInput",["compositionend","keypress","textInput","paste"]),_("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yc=new Set("cancel close invalid load scroll toggle".split(" ").concat(or));function Qs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qu(r,t,void 0,e),e.currentTarget=null}function Gs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,g=s.currentTarget;if(s=s.listener,a!==o&&l.isPropagationStopped())break e;Qs(l,s,g),o=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,g=s.currentTarget,s=s.listener,a!==o&&l.isPropagationStopped())break e;Qs(l,s,g),o=a}}}if(br)throw e=ql,br=!1,ql=null,e}function re(e,t){var n=t[jo];n===void 0&&(n=t[jo]=new Set);var r=e+"__bubble";n.has(r)||(Ks(t,e,2,!1),n.add(r))}function ko(e,t,n){var r=0;t&&(r|=4),Ks(n,e,r,t)}var Qr="_reactListening"+Math.random().toString(36).slice(2);function ir(e){if(!e[Qr]){e[Qr]=!0,I.forEach(function(n){n!=="selectionchange"&&(Yc.has(n)||ko(n,!1,e),ko(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qr]||(t[Qr]=!0,ko("selectionchange",!1,t))}}function Ks(e,t,n,r){switch(ys(t)){case 1:var l=fc;break;case 4:l=pc;break;default:l=ro}n=l.bind(null,t,n,e),l=void 0,!Kl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function xo(e,t,n,r,l){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;s!==null;){if(i=Xt(s),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}s=s.parentNode}}r=r.return}es(function(){var g=o,S=$l(n),k=[];e:{var y=Hs.get(e);if(y!==void 0){var N=io,b=e;switch(e){case"keypress":if(Br(n)===0)break e;case"keydown":case"keyup":N=jc;break;case"focusin":b="focus",N=uo;break;case"focusout":b="blur",N=uo;break;case"beforeblur":case"afterblur":N=uo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=ks;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=hc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Rc;break;case Bs:case Js:case Vs:N=wc;break;case Ws:N=zc;break;case"scroll":N=mc;break;case"wheel":N=Ac;break;case"copy":case"cut":case"paste":N=kc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=_s}var R=(t&4)!==0,pe=!R&&e==="scroll",f=R?y!==null?y+"Capture":null:y;R=[];for(var u=g,m;u!==null;){m=u;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,f!==null&&(x=Jn(u,f),x!=null&&R.push(sr(u,x,m)))),pe)break;u=u.return}0<R.length&&(y=new N(y,b,null,n,S),k.push({event:y,listeners:R}))}}if((t&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",y&&n!==Hl&&(b=n.relatedTarget||n.fromElement)&&(Xt(b)||b[kt]))break e;if((N||y)&&(y=S.window===S?S:(y=S.ownerDocument)?y.defaultView||y.parentWindow:window,N?(b=n.relatedTarget||n.toElement,N=g,b=b?Xt(b):null,b!==null&&(pe=qt(b),b!==pe||b.tag!==5&&b.tag!==6)&&(b=null)):(N=null,b=g),N!==b)){if(R=ks,x="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(R=_s,x="onPointerLeave",f="onPointerEnter",u="pointer"),pe=N==null?y:kn(N),m=b==null?y:kn(b),y=new R(x,u+"leave",N,n,S),y.target=pe,y.relatedTarget=m,x=null,Xt(S)===g&&(R=new R(f,u+"enter",b,n,S),R.target=m,R.relatedTarget=pe,x=R),pe=x,N&&b)t:{for(R=N,f=b,u=0,m=R;m;m=wn(m))u++;for(m=0,x=f;x;x=wn(x))m++;for(;0<u-m;)R=wn(R),u--;for(;0<m-u;)f=wn(f),m--;for(;u--;){if(R===f||f!==null&&R===f.alternate)break t;R=wn(R),f=wn(f)}R=null}else R=null;N!==null&&qs(k,y,N,R,!1),b!==null&&pe!==null&&qs(k,pe,b,R,!0)}}e:{if(y=g?kn(g):window,N=y.nodeName&&y.nodeName.toLowerCase(),N==="select"||N==="input"&&y.type==="file")var z=Jc;else if(Ps(y))if(Rs)z=$c;else{z=Wc;var O=Vc}else(N=y.nodeName)&&N.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(z=Hc);if(z&&(z=z(e,g))){bs(k,z,n,S);break e}O&&O(e,y,g),e==="focusout"&&(O=y._wrapperState)&&O.controlled&&y.type==="number"&&Ul(y,"number",y.value)}switch(O=g?kn(g):window,e){case"focusin":(Ps(O)||O.contentEditable==="true")&&(vn=O,ho=g,lr=null);break;case"focusout":lr=ho=vn=null;break;case"mousedown":vo=!0;break;case"contextmenu":case"mouseup":case"dragend":vo=!1,Fs(k,n,S);break;case"selectionchange":if(Kc)break;case"keydown":case"keyup":Fs(k,n,S)}var M;if(fo)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else hn?Ts(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(Cs&&n.locale!=="ko"&&(hn||F!=="onCompositionStart"?F==="onCompositionEnd"&&hn&&(M=ws()):(It=S,oo="value"in It?It.value:It.textContent,hn=!0)),O=Gr(g,F),0<O.length&&(F=new xs(F,e,null,n,S),k.push({event:F,listeners:O}),M?F.data=M:(M=js(n),M!==null&&(F.data=M)))),(M=Mc?Dc(e,n):Fc(e,n))&&(g=Gr(g,"onBeforeInput"),0<g.length&&(S=new xs("onBeforeInput","beforeinput",null,n,S),k.push({event:S,listeners:g}),S.data=M))}Gs(k,t)})}function sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Jn(e,n),o!=null&&r.unshift(sr(e,o,l)),o=Jn(e,t),o!=null&&r.push(sr(e,o,l))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qs(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,g=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&g!==null&&(s=g,l?(a=Jn(n,o),a!=null&&i.unshift(sr(n,a,s))):l||(a=Jn(n,o),a!=null&&i.push(sr(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Zc=/\r\n?/g,ed=/\u0000|\uFFFD/g;function Xs(e){return(typeof e=="string"?e:""+e).replace(Zc,`
`).replace(ed,"")}function Kr(e,t,n){if(t=Xs(t),Xs(e)!==t&&n)throw Error(p(425))}function qr(){}var _o=null,Co=null;function Eo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var No=typeof setTimeout=="function"?setTimeout:void 0,td=typeof clearTimeout=="function"?clearTimeout:void 0,Ys=typeof Promise=="function"?Promise:void 0,nd=typeof queueMicrotask=="function"?queueMicrotask:typeof Ys<"u"?function(e){return Ys.resolve(null).then(e).catch(rd)}:No;function rd(e){setTimeout(function(){throw e})}function To(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Xn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Xn(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Zs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sn=Math.random().toString(36).slice(2),gt="__reactFiber$"+Sn,ar="__reactProps$"+Sn,kt="__reactContainer$"+Sn,jo="__reactEvents$"+Sn,ld="__reactListeners$"+Sn,od="__reactHandles$"+Sn;function Xt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Zs(e);e!==null;){if(n=e[gt])return n;e=Zs(e)}return t}e=n,n=e.parentNode}return null}function ur(e){return e=e[gt]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(p(33))}function Xr(e){return e[ar]||null}var Po=[],xn=-1;function Mt(e){return{current:e}}function le(e){0>xn||(e.current=Po[xn],Po[xn]=null,xn--)}function te(e,t){xn++,Po[xn]=e.current,e.current=t}var Dt={},Ee=Mt(Dt),Oe=Mt(!1),Yt=Dt;function _n(e,t){var n=e.type.contextTypes;if(!n)return Dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Me(e){return e=e.childContextTypes,e!=null}function Yr(){le(Oe),le(Ee)}function ea(e,t,n){if(Ee.current!==Dt)throw Error(p(168));te(Ee,t),te(Oe,n)}function ta(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(p(108,ee(e)||"Unknown",l));return P({},n,r)}function Zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dt,Yt=Ee.current,te(Ee,e),te(Oe,Oe.current),!0}function na(e,t,n){var r=e.stateNode;if(!r)throw Error(p(169));n?(e=ta(e,t,Yt),r.__reactInternalMemoizedMergedChildContext=e,le(Oe),le(Ee),te(Ee,e)):le(Oe),te(Oe,n)}var xt=null,el=!1,bo=!1;function ra(e){xt===null?xt=[e]:xt.push(e)}function id(e){el=!0,ra(e)}function Ft(){if(!bo&&xt!==null){bo=!0;var e=0,t=q;try{var n=xt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xt=null,el=!1}catch(l){throw xt!==null&&(xt=xt.slice(e+1)),os(Xl,Ft),l}finally{q=t,bo=!1}}return null}var Cn=[],En=0,tl=null,nl=0,qe=[],Xe=0,Zt=null,_t=1,Ct="";function en(e,t){Cn[En++]=nl,Cn[En++]=tl,tl=e,nl=t}function la(e,t,n){qe[Xe++]=_t,qe[Xe++]=Ct,qe[Xe++]=Zt,Zt=e;var r=_t;e=Ct;var l=32-lt(r)-1;r&=~(1<<l),n+=1;var o=32-lt(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,_t=1<<32-lt(t)+l|n<<l|r,Ct=o+e}else _t=1<<o|n<<l|r,Ct=e}function Ro(e){e.return!==null&&(en(e,1),la(e,1,0))}function Lo(e){for(;e===tl;)tl=Cn[--En],Cn[En]=null,nl=Cn[--En],Cn[En]=null;for(;e===Zt;)Zt=qe[--Xe],qe[Xe]=null,Ct=qe[--Xe],qe[Xe]=null,_t=qe[--Xe],qe[Xe]=null}var $e=null,Qe=null,ie=!1,it=null;function oa(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ia(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Qe=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zt!==null?{id:_t,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,Qe=null,!0):!1;default:return!1}}function zo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Io(e){if(ie){var t=Qe;if(t){var n=t;if(!ia(e,t)){if(zo(e))throw Error(p(418));t=Ot(n.nextSibling);var r=$e;t&&ia(e,t)?oa(r,n):(e.flags=e.flags&-4097|2,ie=!1,$e=e)}}else{if(zo(e))throw Error(p(418));e.flags=e.flags&-4097|2,ie=!1,$e=e}}}function sa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function rl(e){if(e!==$e)return!1;if(!ie)return sa(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Eo(e.type,e.memoizedProps)),t&&(t=Qe)){if(zo(e))throw aa(),Error(p(418));for(;t;)oa(e,t),t=Ot(t.nextSibling)}if(sa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=$e?Ot(e.stateNode.nextSibling):null;return!0}function aa(){for(var e=Qe;e;)e=Ot(e.nextSibling)}function Nn(){Qe=$e=null,ie=!1}function Ao(e){it===null?it=[e]:it.push(e)}var sd=he.ReactCurrentBatchConfig;function cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(p(309));var r=n.stateNode}if(!r)throw Error(p(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(p(284));if(!n._owner)throw Error(p(290,e))}return e}function ll(e,t){throw e=Object.prototype.toString.call(t),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ua(e){var t=e._init;return t(e._payload)}function ca(e){function t(f,u){if(e){var m=f.deletions;m===null?(f.deletions=[u],f.flags|=16):m.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function l(f,u){return f=Qt(f,u),f.index=0,f.sibling=null,f}function o(f,u,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<u?(f.flags|=2,u):m):(f.flags|=2,u)):(f.flags|=1048576,u)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,m,x){return u===null||u.tag!==6?(u=Ni(m,f.mode,x),u.return=f,u):(u=l(u,m),u.return=f,u)}function a(f,u,m,x){var z=m.type;return z===Ie?S(f,u,m.props.children,x,m.key):u!==null&&(u.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ae&&ua(z)===u.type)?(x=l(u,m.props),x.ref=cr(f,u,m),x.return=f,x):(x=jl(m.type,m.key,m.props,null,f.mode,x),x.ref=cr(f,u,m),x.return=f,x)}function g(f,u,m,x){return u===null||u.tag!==4||u.stateNode.containerInfo!==m.containerInfo||u.stateNode.implementation!==m.implementation?(u=Ti(m,f.mode,x),u.return=f,u):(u=l(u,m.children||[]),u.return=f,u)}function S(f,u,m,x,z){return u===null||u.tag!==7?(u=un(m,f.mode,x,z),u.return=f,u):(u=l(u,m),u.return=f,u)}function k(f,u,m){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ni(""+u,f.mode,m),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case nt:return m=jl(u.type,u.key,u.props,null,f.mode,m),m.ref=cr(f,null,u),m.return=f,m;case Pe:return u=Ti(u,f.mode,m),u.return=f,u;case Ae:var x=u._init;return k(f,x(u._payload),m)}if(Fn(u)||D(u))return u=un(u,f.mode,m,null),u.return=f,u;ll(f,u)}return null}function y(f,u,m,x){var z=u!==null?u.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return z!==null?null:s(f,u,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case nt:return m.key===z?a(f,u,m,x):null;case Pe:return m.key===z?g(f,u,m,x):null;case Ae:return z=m._init,y(f,u,z(m._payload),x)}if(Fn(m)||D(m))return z!==null?null:S(f,u,m,x,null);ll(f,m)}return null}function N(f,u,m,x,z){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(m)||null,s(u,f,""+x,z);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case nt:return f=f.get(x.key===null?m:x.key)||null,a(u,f,x,z);case Pe:return f=f.get(x.key===null?m:x.key)||null,g(u,f,x,z);case Ae:var O=x._init;return N(f,u,m,O(x._payload),z)}if(Fn(x)||D(x))return f=f.get(m)||null,S(u,f,x,z,null);ll(u,x)}return null}function b(f,u,m,x){for(var z=null,O=null,M=u,F=u=0,xe=null;M!==null&&F<m.length;F++){M.index>F?(xe=M,M=null):xe=M.sibling;var G=y(f,M,m[F],x);if(G===null){M===null&&(M=xe);break}e&&M&&G.alternate===null&&t(f,M),u=o(G,u,F),O===null?z=G:O.sibling=G,O=G,M=xe}if(F===m.length)return n(f,M),ie&&en(f,F),z;if(M===null){for(;F<m.length;F++)M=k(f,m[F],x),M!==null&&(u=o(M,u,F),O===null?z=M:O.sibling=M,O=M);return ie&&en(f,F),z}for(M=r(f,M);F<m.length;F++)xe=N(M,f,F,m[F],x),xe!==null&&(e&&xe.alternate!==null&&M.delete(xe.key===null?F:xe.key),u=o(xe,u,F),O===null?z=xe:O.sibling=xe,O=xe);return e&&M.forEach(function(Gt){return t(f,Gt)}),ie&&en(f,F),z}function R(f,u,m,x){var z=D(m);if(typeof z!="function")throw Error(p(150));if(m=z.call(m),m==null)throw Error(p(151));for(var O=z=null,M=u,F=u=0,xe=null,G=m.next();M!==null&&!G.done;F++,G=m.next()){M.index>F?(xe=M,M=null):xe=M.sibling;var Gt=y(f,M,G.value,x);if(Gt===null){M===null&&(M=xe);break}e&&M&&Gt.alternate===null&&t(f,M),u=o(Gt,u,F),O===null?z=Gt:O.sibling=Gt,O=Gt,M=xe}if(G.done)return n(f,M),ie&&en(f,F),z;if(M===null){for(;!G.done;F++,G=m.next())G=k(f,G.value,x),G!==null&&(u=o(G,u,F),O===null?z=G:O.sibling=G,O=G);return ie&&en(f,F),z}for(M=r(f,M);!G.done;F++,G=m.next())G=N(M,f,F,G.value,x),G!==null&&(e&&G.alternate!==null&&M.delete(G.key===null?F:G.key),u=o(G,u,F),O===null?z=G:O.sibling=G,O=G);return e&&M.forEach(function(Ud){return t(f,Ud)}),ie&&en(f,F),z}function pe(f,u,m,x){if(typeof m=="object"&&m!==null&&m.type===Ie&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case nt:e:{for(var z=m.key,O=u;O!==null;){if(O.key===z){if(z=m.type,z===Ie){if(O.tag===7){n(f,O.sibling),u=l(O,m.props.children),u.return=f,f=u;break e}}else if(O.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ae&&ua(z)===O.type){n(f,O.sibling),u=l(O,m.props),u.ref=cr(f,O,m),u.return=f,f=u;break e}n(f,O);break}else t(f,O);O=O.sibling}m.type===Ie?(u=un(m.props.children,f.mode,x,m.key),u.return=f,f=u):(x=jl(m.type,m.key,m.props,null,f.mode,x),x.ref=cr(f,u,m),x.return=f,f=x)}return i(f);case Pe:e:{for(O=m.key;u!==null;){if(u.key===O)if(u.tag===4&&u.stateNode.containerInfo===m.containerInfo&&u.stateNode.implementation===m.implementation){n(f,u.sibling),u=l(u,m.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=Ti(m,f.mode,x),u.return=f,f=u}return i(f);case Ae:return O=m._init,pe(f,u,O(m._payload),x)}if(Fn(m))return b(f,u,m,x);if(D(m))return R(f,u,m,x);ll(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,u!==null&&u.tag===6?(n(f,u.sibling),u=l(u,m),u.return=f,f=u):(n(f,u),u=Ni(m,f.mode,x),u.return=f,f=u),i(f)):n(f,u)}return pe}var Tn=ca(!0),da=ca(!1),ol=Mt(null),il=null,jn=null,Oo=null;function Mo(){Oo=jn=il=null}function Do(e){var t=ol.current;le(ol),e._currentValue=t}function Fo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pn(e,t){il=e,Oo=jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(De=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(Oo!==e)if(e={context:e,memoizedValue:t,next:null},jn===null){if(il===null)throw Error(p(308));jn=e,il.dependencies={lanes:0,firstContext:e}}else jn=jn.next=e;return t}var tn=null;function Uo(e){tn===null?tn=[e]:tn.push(e)}function fa(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Uo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Et(e,r)}function Et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Bo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(W&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Et(e,n)}return l=r.interleaved,l===null?(t.next=t,Uo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Et(e,n)}function sl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,eo(e,n)}}function ma(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function al(e,t,n,r){var l=e.updateQueue;Ut=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,g=a.next;a.next=null,i===null?o=g:i.next=g,i=a;var S=e.alternate;S!==null&&(S=S.updateQueue,s=S.lastBaseUpdate,s!==i&&(s===null?S.firstBaseUpdate=g:s.next=g,S.lastBaseUpdate=a))}if(o!==null){var k=l.baseState;i=0,S=g=a=null,s=o;do{var y=s.lane,N=s.eventTime;if((r&y)===y){S!==null&&(S=S.next={eventTime:N,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,R=s;switch(y=t,N=n,R.tag){case 1:if(b=R.payload,typeof b=="function"){k=b.call(N,k,y);break e}k=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=R.payload,y=typeof b=="function"?b.call(N,k,y):b,y==null)break e;k=P({},k,y);break e;case 2:Ut=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,y=l.effects,y===null?l.effects=[s]:y.push(s))}else N={eventTime:N,lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},S===null?(g=S=N,a=k):S=S.next=N,i|=y;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;y=s,s=y.next,y.next=null,l.lastBaseUpdate=y,l.shared.pending=null}}while(!0);if(S===null&&(a=k),l.baseState=a,l.firstBaseUpdate=g,l.lastBaseUpdate=S,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);ln|=i,e.lanes=i,e.memoizedState=k}}function ga(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(p(191,l));l.call(r)}}}var dr={},ht=Mt(dr),fr=Mt(dr),pr=Mt(dr);function nn(e){if(e===dr)throw Error(p(174));return e}function Jo(e,t){switch(te(pr,t),te(fr,e),te(ht,dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Jl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Jl(t,e)}le(ht),te(ht,t)}function bn(){le(ht),le(fr),le(pr)}function ha(e){nn(pr.current);var t=nn(ht.current),n=Jl(t,e.type);t!==n&&(te(fr,e),te(ht,n))}function Vo(e){fr.current===e&&(le(ht),le(fr))}var se=Mt(0);function ul(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wo=[];function Ho(){for(var e=0;e<Wo.length;e++)Wo[e]._workInProgressVersionPrimary=null;Wo.length=0}var cl=he.ReactCurrentDispatcher,$o=he.ReactCurrentBatchConfig,rn=0,ae=null,ve=null,Se=null,dl=!1,mr=!1,gr=0,ad=0;function Ne(){throw Error(p(321))}function Qo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function Go(e,t,n,r,l,o){if(rn=o,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,cl.current=e===null||e.memoizedState===null?fd:pd,e=n(r,l),mr){o=0;do{if(mr=!1,gr=0,25<=o)throw Error(p(301));o+=1,Se=ve=null,t.updateQueue=null,cl.current=md,e=n(r,l)}while(mr)}if(cl.current=ml,t=ve!==null&&ve.next!==null,rn=0,Se=ve=ae=null,dl=!1,t)throw Error(p(300));return e}function Ko(){var e=gr!==0;return gr=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?ae.memoizedState=Se=e:Se=Se.next=e,Se}function Ze(){if(ve===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=Se===null?ae.memoizedState:Se.next;if(t!==null)Se=t,ve=e;else{if(e===null)throw Error(p(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Se===null?ae.memoizedState=Se=e:Se=Se.next=e}return Se}function hr(e,t){return typeof t=="function"?t(e):t}function qo(e){var t=Ze(),n=t.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=e;var r=ve,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,a=null,g=o;do{var S=g.lane;if((rn&S)===S)a!==null&&(a=a.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var k={lane:S,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};a===null?(s=a=k,i=r):a=a.next=k,ae.lanes|=S,ln|=S}g=g.next}while(g!==null&&g!==o);a===null?i=r:a.next=s,ot(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,ae.lanes|=o,ln|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xo(e){var t=Ze(),n=t.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);ot(o,t.memoizedState)||(De=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function va(){}function ya(e,t){var n=ae,r=Ze(),l=t(),o=!ot(r.memoizedState,l);if(o&&(r.memoizedState=l,De=!0),r=r.queue,Yo(ka.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,vr(9,Sa.bind(null,n,r,l,t),void 0,null),ke===null)throw Error(p(349));(rn&30)!==0||wa(n,t,l)}return l}function wa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sa(e,t,n,r){t.value=n,t.getSnapshot=r,xa(t)&&_a(e)}function ka(e,t,n){return n(function(){xa(t)&&_a(e)})}function xa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function _a(e){var t=Et(e,1);t!==null&&ct(t,e,1,-1)}function Ca(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hr,lastRenderedState:e},t.queue=e,e=e.dispatch=dd.bind(null,ae,e),[t.memoizedState,e]}function vr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ea(){return Ze().memoizedState}function fl(e,t,n,r){var l=vt();ae.flags|=e,l.memoizedState=vr(1|t,n,void 0,r===void 0?null:r)}function pl(e,t,n,r){var l=Ze();r=r===void 0?null:r;var o=void 0;if(ve!==null){var i=ve.memoizedState;if(o=i.destroy,r!==null&&Qo(r,i.deps)){l.memoizedState=vr(t,n,o,r);return}}ae.flags|=e,l.memoizedState=vr(1|t,n,o,r)}function Na(e,t){return fl(8390656,8,e,t)}function Yo(e,t){return pl(2048,8,e,t)}function Ta(e,t){return pl(4,2,e,t)}function ja(e,t){return pl(4,4,e,t)}function Pa(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ba(e,t,n){return n=n!=null?n.concat([e]):null,pl(4,4,Pa.bind(null,t,e),n)}function Zo(){}function Ra(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function La(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function za(e,t,n){return(rn&21)===0?(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n):(ot(n,t)||(n=us(),ae.lanes|=n,ln|=n,e.baseState=!0),t)}function ud(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=$o.transition;$o.transition={};try{e(!1),t()}finally{q=n,$o.transition=r}}function Ia(){return Ze().memoizedState}function cd(e,t,n){var r=Ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Aa(e))Oa(t,n);else if(n=fa(e,t,n,r),n!==null){var l=Re();ct(n,e,r,l),Ma(n,t,r)}}function dd(e,t,n){var r=Ht(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Aa(e))Oa(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,ot(s,i)){var a=t.interleaved;a===null?(l.next=l,Uo(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=fa(e,t,l,r),n!==null&&(l=Re(),ct(n,e,r,l),Ma(n,t,r))}}function Aa(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Oa(e,t){mr=dl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ma(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,eo(e,n)}}var ml={readContext:Ye,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},fd={readContext:Ye,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:Na,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fl(4194308,4,Pa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fl(4194308,4,e,t)},useInsertionEffect:function(e,t){return fl(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cd.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:Ca,useDebugValue:Zo,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=Ca(!1),t=e[0];return e=ud.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,l=vt();if(ie){if(n===void 0)throw Error(p(407));n=n()}else{if(n=t(),ke===null)throw Error(p(349));(rn&30)!==0||wa(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Na(ka.bind(null,r,o,e),[e]),r.flags|=2048,vr(9,Sa.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=vt(),t=ke.identifierPrefix;if(ie){var n=Ct,r=_t;n=(r&~(1<<32-lt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=gr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ad++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pd={readContext:Ye,useCallback:Ra,useContext:Ye,useEffect:Yo,useImperativeHandle:ba,useInsertionEffect:Ta,useLayoutEffect:ja,useMemo:La,useReducer:qo,useRef:Ea,useState:function(){return qo(hr)},useDebugValue:Zo,useDeferredValue:function(e){var t=Ze();return za(t,ve.memoizedState,e)},useTransition:function(){var e=qo(hr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:va,useSyncExternalStore:ya,useId:Ia,unstable_isNewReconciler:!1},md={readContext:Ye,useCallback:Ra,useContext:Ye,useEffect:Yo,useImperativeHandle:ba,useInsertionEffect:Ta,useLayoutEffect:ja,useMemo:La,useReducer:Xo,useRef:Ea,useState:function(){return Xo(hr)},useDebugValue:Zo,useDeferredValue:function(e){var t=Ze();return ve===null?t.memoizedState=e:za(t,ve.memoizedState,e)},useTransition:function(){var e=Xo(hr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:va,useSyncExternalStore:ya,useId:Ia,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=P({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ei(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:P({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gl={isMounted:function(e){return(e=e._reactInternals)?qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Re(),l=Ht(e),o=Nt(r,l);o.payload=t,n!=null&&(o.callback=n),t=Bt(e,o,l),t!==null&&(ct(t,e,l,r),sl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Re(),l=Ht(e),o=Nt(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Bt(e,o,l),t!==null&&(ct(t,e,l,r),sl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Re(),r=Ht(e),l=Nt(n,r);l.tag=2,t!=null&&(l.callback=t),t=Bt(e,l,r),t!==null&&(ct(t,e,r,n),sl(t,e,r))}};function Da(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!rr(n,r)||!rr(l,o):!0}function Fa(e,t,n){var r=!1,l=Dt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ye(o):(l=Me(t)?Yt:Ee.current,r=t.contextTypes,o=(r=r!=null)?_n(e,l):Dt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ua(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gl.enqueueReplaceState(t,t.state,null)}function ti(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Bo(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Ye(o):(o=Me(t)?Yt:Ee.current,l.context=_n(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ei(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&gl.enqueueReplaceState(l,l.state,null),al(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Rn(e,t){try{var n="",r=t;do n+=$(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function ni(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ri(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gd=typeof WeakMap=="function"?WeakMap:Map;function Ba(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xl||(xl=!0,yi=r),ri(e,t)},n}function Ja(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){ri(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ri(e,t),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Va(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gd;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Pd.bind(null,e,t,n),t.then(e,e))}function Wa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ha(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var hd=he.ReactCurrentOwner,De=!1;function be(e,t,n,r){t.child=e===null?da(t,null,n,r):Tn(t,e.child,n,r)}function $a(e,t,n,r,l){n=n.render;var o=t.ref;return Pn(t,l),r=Go(e,t,n,r,o,l),n=Ko(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Tt(e,t,l)):(ie&&n&&Ro(t),t.flags|=1,be(e,t,r,l),t.child)}function Qa(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Ei(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ga(e,t,o,r,l)):(e=jl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&l)===0){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:rr,n(i,r)&&e.ref===t.ref)return Tt(e,t,l)}return t.flags|=1,e=Qt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ga(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(rr(o,r)&&e.ref===t.ref)if(De=!1,t.pendingProps=r=o,(e.lanes&l)!==0)(e.flags&131072)!==0&&(De=!0);else return t.lanes=e.lanes,Tt(e,t,l)}return li(e,t,n,r,l)}function Ka(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(zn,Ge),Ge|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(zn,Ge),Ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,te(zn,Ge),Ge|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,te(zn,Ge),Ge|=r;return be(e,t,l,n),t.child}function qa(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function li(e,t,n,r,l){var o=Me(n)?Yt:Ee.current;return o=_n(t,o),Pn(t,l),n=Go(e,t,n,r,o,l),r=Ko(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Tt(e,t,l)):(ie&&r&&Ro(t),t.flags|=1,be(e,t,n,l),t.child)}function Xa(e,t,n,r,l){if(Me(n)){var o=!0;Zr(t)}else o=!1;if(Pn(t,l),t.stateNode===null)vl(e,t),Fa(t,n,r),ti(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,g=n.contextType;typeof g=="object"&&g!==null?g=Ye(g):(g=Me(n)?Yt:Ee.current,g=_n(t,g));var S=n.getDerivedStateFromProps,k=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function";k||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==g)&&Ua(t,i,r,g),Ut=!1;var y=t.memoizedState;i.state=y,al(t,r,i,l),a=t.memoizedState,s!==r||y!==a||Oe.current||Ut?(typeof S=="function"&&(ei(t,n,S,r),a=t.memoizedState),(s=Ut||Da(t,n,s,r,y,a,g))?(k||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=g,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,pa(e,t),s=t.memoizedProps,g=t.type===t.elementType?s:st(t.type,s),i.props=g,k=t.pendingProps,y=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ye(a):(a=Me(n)?Yt:Ee.current,a=_n(t,a));var N=n.getDerivedStateFromProps;(S=typeof N=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==k||y!==a)&&Ua(t,i,r,a),Ut=!1,y=t.memoizedState,i.state=y,al(t,r,i,l);var b=t.memoizedState;s!==k||y!==b||Oe.current||Ut?(typeof N=="function"&&(ei(t,n,N,r),b=t.memoizedState),(g=Ut||Da(t,n,g,r,y,b,a)||!1)?(S||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,b,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,b,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),i.props=r,i.state=b,i.context=a,r=g):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return oi(e,t,n,r,o,l)}function oi(e,t,n,r,l,o){qa(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&na(t,n,!1),Tt(e,t,o);r=t.stateNode,hd.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Tn(t,e.child,null,o),t.child=Tn(t,null,s,o)):be(e,t,s,o),t.memoizedState=r.state,l&&na(t,n,!0),t.child}function Ya(e){var t=e.stateNode;t.pendingContext?ea(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ea(e,t.context,!1),Jo(e,t.containerInfo)}function Za(e,t,n,r,l){return Nn(),Ao(l),t.flags|=256,be(e,t,n,r),t.child}var ii={dehydrated:null,treeContext:null,retryLane:0};function si(e){return{baseLanes:e,cachePool:null,transitions:null}}function eu(e,t,n){var r=t.pendingProps,l=se.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),te(se,l&1),e===null)return Io(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Pl(i,r,0,null),e=un(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=si(n),t.memoizedState=ii,e):ai(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return vd(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Qt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=Qt(s,o):(o=un(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?si(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=ii,r}return o=e.child,e=o.sibling,r=Qt(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ai(e,t){return t=Pl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hl(e,t,n,r){return r!==null&&Ao(r),Tn(t,e.child,null,n),e=ai(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vd(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=ni(Error(p(422))),hl(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Pl({mode:"visible",children:r.children},l,0,null),o=un(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Tn(t,e.child,null,i),t.child.memoizedState=si(i),t.memoizedState=ii,o);if((t.mode&1)===0)return hl(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(p(419)),r=ni(o,r,void 0),hl(e,t,i,r)}if(s=(i&e.childLanes)!==0,De||s){if(r=ke,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|i))!==0?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Et(e,l),ct(r,e,l,-1))}return Ci(),r=ni(Error(p(421))),hl(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=bd.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Qe=Ot(l.nextSibling),$e=t,ie=!0,it=null,e!==null&&(qe[Xe++]=_t,qe[Xe++]=Ct,qe[Xe++]=Zt,_t=e.id,Ct=e.overflow,Zt=t),t=ai(t,r.children),t.flags|=4096,t)}function tu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fo(e.return,t,n)}function ui(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function nu(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(be(e,t,r.children,n),r=se.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tu(e,n,t);else if(e.tag===19)tu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(se,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ul(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ui(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ul(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ui(t,!0,n,null,o);break;case"together":ui(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function vl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ln|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(p(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yd(e,t,n){switch(t.tag){case 3:Ya(t),Nn();break;case 5:ha(t);break;case 1:Me(t.type)&&Zr(t);break;case 4:Jo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;te(ol,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(se,se.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?eu(e,t,n):(te(se,se.current&1),e=Tt(e,t,n),e!==null?e.sibling:null);te(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return nu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),te(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,Ka(e,t,n)}return Tt(e,t,n)}var ru,ci,lu,ou;ru=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ci=function(){},lu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,nn(ht.current);var o=null;switch(n){case"input":l=Dl(e,l),r=Dl(e,r),o=[];break;case"select":l=P({},l,{value:void 0}),r=P({},r,{value:void 0}),o=[];break;case"textarea":l=Bl(e,l),r=Bl(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qr)}Vl(n,r);var i;n=null;for(g in l)if(!r.hasOwnProperty(g)&&l.hasOwnProperty(g)&&l[g]!=null)if(g==="style"){var s=l[g];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(v.hasOwnProperty(g)?o||(o=[]):(o=o||[]).push(g,null));for(g in r){var a=r[g];if(s=l!=null?l[g]:void 0,r.hasOwnProperty(g)&&a!==s&&(a!=null||s!=null))if(g==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(o||(o=[]),o.push(g,n)),n=a;else g==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(g,a)):g==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(g,""+a):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(v.hasOwnProperty(g)?(a!=null&&g==="onScroll"&&re("scroll",e),o||s===a||(o=[])):(o=o||[]).push(g,a))}n&&(o=o||[]).push("style",n);var g=o;(t.updateQueue=g)&&(t.flags|=4)}},ou=function(e,t,n,r){n!==r&&(t.flags|=4)};function yr(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wd(e,t,n){var r=t.pendingProps;switch(Lo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Me(t.type)&&Yr(),Te(t),null;case 3:return r=t.stateNode,bn(),le(Oe),le(Ee),Ho(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(rl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,it!==null&&(ki(it),it=null))),ci(e,t),Te(t),null;case 5:Vo(t);var l=nn(pr.current);if(n=t.type,e!==null&&t.stateNode!=null)lu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(p(166));return Te(t),null}if(e=nn(ht.current),rl(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[gt]=t,r[ar]=o,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(l=0;l<or.length;l++)re(or[l],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":Fi(r,o),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},re("invalid",r);break;case"textarea":Ji(r,o),re("invalid",r)}Vl(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Kr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Kr(r.textContent,s,e),l=["children",""+s]):v.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&re("scroll",r)}switch(n){case"input":Nr(r),Bi(r,o,!0);break;case"textarea":Nr(r),Wi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=qr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hi(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[gt]=t,e[ar]=r,ru(e,t,!1,!1),t.stateNode=e;e:{switch(i=Wl(n,r),n){case"dialog":re("cancel",e),re("close",e),l=r;break;case"iframe":case"object":case"embed":re("load",e),l=r;break;case"video":case"audio":for(l=0;l<or.length;l++)re(or[l],e);l=r;break;case"source":re("error",e),l=r;break;case"img":case"image":case"link":re("error",e),re("load",e),l=r;break;case"details":re("toggle",e),l=r;break;case"input":Fi(e,r),l=Dl(e,r),re("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=P({},r,{value:void 0}),re("invalid",e);break;case"textarea":Ji(e,r),l=Bl(e,r),re("invalid",e);break;default:l=r}Vl(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?Gi(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&$i(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Un(e,a):typeof a=="number"&&Un(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(v.hasOwnProperty(o)?a!=null&&o==="onScroll"&&re("scroll",e):a!=null&&Je(e,o,a,i))}switch(n){case"input":Nr(e),Bi(e,r,!1);break;case"textarea":Nr(e),Wi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+K(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?dn(e,!!r.multiple,o,!1):r.defaultValue!=null&&dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=qr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)ou(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(p(166));if(n=nn(pr.current),nn(ht.current),rl(t)){if(r=t.stateNode,n=t.memoizedProps,r[gt]=t,(o=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:Kr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Kr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=t,t.stateNode=r}return Te(t),null;case 13:if(le(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Qe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)aa(),Nn(),t.flags|=98560,o=!1;else if(o=rl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(p(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(p(317));o[gt]=t}else Nn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),o=!1}else it!==null&&(ki(it),it=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(se.current&1)!==0?ye===0&&(ye=3):Ci())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return bn(),ci(e,t),e===null&&ir(t.stateNode.containerInfo),Te(t),null;case 10:return Do(t.type._context),Te(t),null;case 17:return Me(t.type)&&Yr(),Te(t),null;case 19:if(le(se),o=t.memoizedState,o===null)return Te(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)yr(o,!1);else{if(ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ul(e),i!==null){for(t.flags|=128,yr(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(se,se.current&1|2),t.child}e=e.sibling}o.tail!==null&&fe()>In&&(t.flags|=128,r=!0,yr(o,!1),t.lanes=4194304)}else{if(!r)if(e=ul(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!ie)return Te(t),null}else 2*fe()-o.renderingStartTime>In&&n!==1073741824&&(t.flags|=128,r=!0,yr(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=fe(),t.sibling=null,n=se.current,te(se,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return _i(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ge&1073741824)!==0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(p(156,t.tag))}function Sd(e,t){switch(Lo(t),t.tag){case 1:return Me(t.type)&&Yr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(),le(Oe),le(Ee),Ho(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Vo(t),null;case 13:if(le(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(p(340));Nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(se),null;case 4:return bn(),null;case 10:return Do(t.type._context),null;case 22:case 23:return _i(),null;case 24:return null;default:return null}}var yl=!1,je=!1,kd=typeof WeakSet=="function"?WeakSet:Set,j=null;function Ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function di(e,t,n){try{n()}catch(r){de(e,t,r)}}var iu=!1;function xd(e,t){if(_o=Dr,e=Ds(),go(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,g=0,S=0,k=e,y=null;t:for(;;){for(var N;k!==n||l!==0&&k.nodeType!==3||(s=i+l),k!==o||r!==0&&k.nodeType!==3||(a=i+r),k.nodeType===3&&(i+=k.nodeValue.length),(N=k.firstChild)!==null;)y=k,k=N;for(;;){if(k===e)break t;if(y===n&&++g===l&&(s=i),y===o&&++S===r&&(a=i),(N=k.nextSibling)!==null)break;k=y,y=k.parentNode}k=N}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Co={focusedElem:e,selectionRange:n},Dr=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var b=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var R=b.memoizedProps,pe=b.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?R:st(t.type,R),pe);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(x){de(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return b=iu,iu=!1,b}function wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&di(t,n,o)}l=l.next}while(l!==r)}}function wl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function su(e){var t=e.alternate;t!==null&&(e.alternate=null,su(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gt],delete t[ar],delete t[jo],delete t[ld],delete t[od])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function au(e){return e.tag===5||e.tag===3||e.tag===4}function uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||au(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qr));else if(r!==4&&(e=e.child,e!==null))for(pi(e,t,n),e=e.sibling;e!==null;)pi(e,t,n),e=e.sibling}function mi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(mi(e,t,n),e=e.sibling;e!==null;)mi(e,t,n),e=e.sibling}var _e=null,at=!1;function Jt(e,t,n){for(n=n.child;n!==null;)cu(e,t,n),n=n.sibling}function cu(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Lr,n)}catch{}switch(n.tag){case 5:je||Ln(n,t);case 6:var r=_e,l=at;_e=null,Jt(e,t,n),_e=r,at=l,_e!==null&&(at?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(at?(e=_e,n=n.stateNode,e.nodeType===8?To(e.parentNode,n):e.nodeType===1&&To(e,n),Xn(e)):To(_e,n.stateNode));break;case 4:r=_e,l=at,_e=n.stateNode.containerInfo,at=!0,Jt(e,t,n),_e=r,at=l;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&((o&2)!==0||(o&4)!==0)&&di(n,t,i),l=l.next}while(l!==r)}Jt(e,t,n);break;case 1:if(!je&&(Ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){de(n,t,s)}Jt(e,t,n);break;case 21:Jt(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,Jt(e,t,n),je=r):Jt(e,t,n);break;default:Jt(e,t,n)}}function du(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new kd),t.forEach(function(r){var l=Rd.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:_e=s.stateNode,at=!1;break e;case 3:_e=s.stateNode.containerInfo,at=!0;break e;case 4:_e=s.stateNode.containerInfo,at=!0;break e}s=s.return}if(_e===null)throw Error(p(160));cu(o,i,l),_e=null,at=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(g){de(l,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fu(t,e),t=t.sibling}function fu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),yt(e),r&4){try{wr(3,e,e.return),wl(3,e)}catch(R){de(e,e.return,R)}try{wr(5,e,e.return)}catch(R){de(e,e.return,R)}}break;case 1:ut(t,e),yt(e),r&512&&n!==null&&Ln(n,n.return);break;case 5:if(ut(t,e),yt(e),r&512&&n!==null&&Ln(n,n.return),e.flags&32){var l=e.stateNode;try{Un(l,"")}catch(R){de(e,e.return,R)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Ui(l,o),Wl(s,i);var g=Wl(s,o);for(i=0;i<a.length;i+=2){var S=a[i],k=a[i+1];S==="style"?Gi(l,k):S==="dangerouslySetInnerHTML"?$i(l,k):S==="children"?Un(l,k):Je(l,S,k,g)}switch(s){case"input":Fl(l,o);break;case"textarea":Vi(l,o);break;case"select":var y=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var N=o.value;N!=null?dn(l,!!o.multiple,N,!1):y!==!!o.multiple&&(o.defaultValue!=null?dn(l,!!o.multiple,o.defaultValue,!0):dn(l,!!o.multiple,o.multiple?[]:"",!1))}l[ar]=o}catch(R){de(e,e.return,R)}}break;case 6:if(ut(t,e),yt(e),r&4){if(e.stateNode===null)throw Error(p(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(R){de(e,e.return,R)}}break;case 3:if(ut(t,e),yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xn(t.containerInfo)}catch(R){de(e,e.return,R)}break;case 4:ut(t,e),yt(e);break;case 13:ut(t,e),yt(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(vi=fe())),r&4&&du(e);break;case 22:if(S=n!==null&&n.memoizedState!==null,e.mode&1?(je=(g=je)||S,ut(t,e),je=g):ut(t,e),yt(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!S&&(e.mode&1)!==0)for(j=e,S=e.child;S!==null;){for(k=j=S;j!==null;){switch(y=j,N=y.child,y.tag){case 0:case 11:case 14:case 15:wr(4,y,y.return);break;case 1:Ln(y,y.return);var b=y.stateNode;if(typeof b.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(R){de(r,n,R)}}break;case 5:Ln(y,y.return);break;case 22:if(y.memoizedState!==null){gu(k);continue}}N!==null?(N.return=y,j=N):gu(k)}S=S.sibling}e:for(S=null,k=e;;){if(k.tag===5){if(S===null){S=k;try{l=k.stateNode,g?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=k.stateNode,a=k.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Qi("display",i))}catch(R){de(e,e.return,R)}}}else if(k.tag===6){if(S===null)try{k.stateNode.nodeValue=g?"":k.memoizedProps}catch(R){de(e,e.return,R)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===e)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===e)break e;for(;k.sibling===null;){if(k.return===null||k.return===e)break e;S===k&&(S=null),k=k.return}S===k&&(S=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:ut(t,e),yt(e),r&4&&du(e);break;case 21:break;default:ut(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(au(n)){var r=n;break e}n=n.return}throw Error(p(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Un(l,""),r.flags&=-33);var o=uu(e);mi(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=uu(e);pi(e,s,i);break;default:throw Error(p(161))}}catch(a){de(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _d(e,t,n){j=e,pu(e)}function pu(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var l=j,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||yl;if(!i){var s=l.alternate,a=s!==null&&s.memoizedState!==null||je;s=yl;var g=je;if(yl=i,(je=a)&&!g)for(j=l;j!==null;)i=j,a=i.child,i.tag===22&&i.memoizedState!==null?hu(l):a!==null?(a.return=i,j=a):hu(l);for(;o!==null;)j=o,pu(o),o=o.sibling;j=l,yl=s,je=g}mu(e)}else(l.subtreeFlags&8772)!==0&&o!==null?(o.return=l,j=o):mu(e)}}function mu(e){for(;j!==null;){var t=j;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:je||wl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ga(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ga(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var S=g.memoizedState;if(S!==null){var k=S.dehydrated;k!==null&&Xn(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}je||t.flags&512&&fi(t)}catch(y){de(t,t.return,y)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function gu(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function hu(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{wl(4,t)}catch(a){de(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){de(t,l,a)}}var o=t.return;try{fi(t)}catch(a){de(t,o,a)}break;case 5:var i=t.return;try{fi(t)}catch(a){de(t,i,a)}}}catch(a){de(t,t.return,a)}if(t===e){j=null;break}var s=t.sibling;if(s!==null){s.return=t.return,j=s;break}j=t.return}}var Cd=Math.ceil,Sl=he.ReactCurrentDispatcher,gi=he.ReactCurrentOwner,et=he.ReactCurrentBatchConfig,W=0,ke=null,me=null,Ce=0,Ge=0,zn=Mt(0),ye=0,Sr=null,ln=0,kl=0,hi=0,kr=null,Fe=null,vi=0,In=1/0,jt=null,xl=!1,yi=null,Vt=null,_l=!1,Wt=null,Cl=0,xr=0,wi=null,El=-1,Nl=0;function Re(){return(W&6)!==0?fe():El!==-1?El:El=fe()}function Ht(e){return(e.mode&1)===0?1:(W&2)!==0&&Ce!==0?Ce&-Ce:sd.transition!==null?(Nl===0&&(Nl=us()),Nl):(e=q,e!==0||(e=window.event,e=e===void 0?16:ys(e.type)),e)}function ct(e,t,n,r){if(50<xr)throw xr=0,wi=null,Error(p(185));$n(e,n,r),((W&2)===0||e!==ke)&&(e===ke&&((W&2)===0&&(kl|=n),ye===4&&$t(e,Ce)),Ue(e,r),n===1&&W===0&&(t.mode&1)===0&&(In=fe()+500,el&&Ft()))}function Ue(e,t){var n=e.callbackNode;sc(e,t);var r=Ar(e,e===ke?Ce:0);if(r===0)n!==null&&is(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&is(n),t===1)e.tag===0?id(yu.bind(null,e)):ra(yu.bind(null,e)),nd(function(){(W&6)===0&&Ft()}),n=null;else{switch(cs(r)){case 1:n=Xl;break;case 4:n=ss;break;case 16:n=Rr;break;case 536870912:n=as;break;default:n=Rr}n=Nu(n,vu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vu(e,t){if(El=-1,Nl=0,(W&6)!==0)throw Error(p(327));var n=e.callbackNode;if(An()&&e.callbackNode!==n)return null;var r=Ar(e,e===ke?Ce:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Tl(e,r);else{t=r;var l=W;W|=2;var o=Su();(ke!==e||Ce!==t)&&(jt=null,In=fe()+500,sn(e,t));do try{Td();break}catch(s){wu(e,s)}while(!0);Mo(),Sl.current=o,W=l,me!==null?t=0:(ke=null,Ce=0,t=ye)}if(t!==0){if(t===2&&(l=Yl(e),l!==0&&(r=l,t=Si(e,l))),t===1)throw n=Sr,sn(e,0),$t(e,r),Ue(e,fe()),n;if(t===6)$t(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Ed(l)&&(t=Tl(e,r),t===2&&(o=Yl(e),o!==0&&(r=o,t=Si(e,o))),t===1))throw n=Sr,sn(e,0),$t(e,r),Ue(e,fe()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(p(345));case 2:an(e,Fe,jt);break;case 3:if($t(e,r),(r&130023424)===r&&(t=vi+500-fe(),10<t)){if(Ar(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Re(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=No(an.bind(null,e,Fe,jt),t);break}an(e,Fe,jt);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-lt(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cd(r/1960))-r,10<r){e.timeoutHandle=No(an.bind(null,e,Fe,jt),r);break}an(e,Fe,jt);break;case 5:an(e,Fe,jt);break;default:throw Error(p(329))}}}return Ue(e,fe()),e.callbackNode===n?vu.bind(null,e):null}function Si(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(sn(e,t).flags|=256),e=Tl(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&ki(t)),e}function ki(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function Ed(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!ot(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~hi,t&=~kl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-lt(t),r=1<<n;e[n]=-1,t&=~r}}function yu(e){if((W&6)!==0)throw Error(p(327));An();var t=Ar(e,0);if((t&1)===0)return Ue(e,fe()),null;var n=Tl(e,t);if(e.tag!==0&&n===2){var r=Yl(e);r!==0&&(t=r,n=Si(e,r))}if(n===1)throw n=Sr,sn(e,0),$t(e,t),Ue(e,fe()),n;if(n===6)throw Error(p(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,Fe,jt),Ue(e,fe()),null}function xi(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(In=fe()+500,el&&Ft())}}function on(e){Wt!==null&&Wt.tag===0&&(W&6)===0&&An();var t=W;W|=1;var n=et.transition,r=q;try{if(et.transition=null,q=1,e)return e()}finally{q=r,et.transition=n,W=t,(W&6)===0&&Ft()}}function _i(){Ge=zn.current,le(zn)}function sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,td(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Lo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yr();break;case 3:bn(),le(Oe),le(Ee),Ho();break;case 5:Vo(r);break;case 4:bn();break;case 13:le(se);break;case 19:le(se);break;case 10:Do(r.type._context);break;case 22:case 23:_i()}n=n.return}if(ke=e,me=e=Qt(e.current,null),Ce=Ge=t,ye=0,Sr=null,hi=kl=ln=0,Fe=kr=null,tn!==null){for(t=0;t<tn.length;t++)if(n=tn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}tn=null}return e}function wu(e,t){do{var n=me;try{if(Mo(),cl.current=ml,dl){for(var r=ae.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}dl=!1}if(rn=0,Se=ve=ae=null,mr=!1,gr=0,gi.current=null,n===null||n.return===null){ye=1,Sr=t,me=null;break}e:{var o=e,i=n.return,s=n,a=t;if(t=Ce,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var g=a,S=s,k=S.tag;if((S.mode&1)===0&&(k===0||k===11||k===15)){var y=S.alternate;y?(S.updateQueue=y.updateQueue,S.memoizedState=y.memoizedState,S.lanes=y.lanes):(S.updateQueue=null,S.memoizedState=null)}var N=Wa(i);if(N!==null){N.flags&=-257,Ha(N,i,s,o,t),N.mode&1&&Va(o,g,t),t=N,a=g;var b=t.updateQueue;if(b===null){var R=new Set;R.add(a),t.updateQueue=R}else b.add(a);break e}else{if((t&1)===0){Va(o,g,t),Ci();break e}a=Error(p(426))}}else if(ie&&s.mode&1){var pe=Wa(i);if(pe!==null){(pe.flags&65536)===0&&(pe.flags|=256),Ha(pe,i,s,o,t),Ao(Rn(a,s));break e}}o=a=Rn(a,s),ye!==4&&(ye=2),kr===null?kr=[o]:kr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Ba(o,a,t);ma(o,f);break e;case 1:s=a;var u=o.type,m=o.stateNode;if((o.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Vt===null||!Vt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Ja(o,s,t);ma(o,x);break e}}o=o.return}while(o!==null)}xu(n)}catch(z){t=z,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function Su(){var e=Sl.current;return Sl.current=ml,e===null?ml:e}function Ci(){(ye===0||ye===3||ye===2)&&(ye=4),ke===null||(ln&268435455)===0&&(kl&268435455)===0||$t(ke,Ce)}function Tl(e,t){var n=W;W|=2;var r=Su();(ke!==e||Ce!==t)&&(jt=null,sn(e,t));do try{Nd();break}catch(l){wu(e,l)}while(!0);if(Mo(),W=n,Sl.current=r,me!==null)throw Error(p(261));return ke=null,Ce=0,ye}function Nd(){for(;me!==null;)ku(me)}function Td(){for(;me!==null&&!Yu();)ku(me)}function ku(e){var t=Eu(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,t===null?xu(e):me=t,gi.current=null}function xu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=wd(n,t,Ge),n!==null){me=n;return}}else{if(n=Sd(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,me=null;return}}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ye===0&&(ye=5)}function an(e,t,n){var r=q,l=et.transition;try{et.transition=null,q=1,jd(e,t,n,r)}finally{et.transition=l,q=r}return null}function jd(e,t,n,r){do An();while(Wt!==null);if((W&6)!==0)throw Error(p(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(p(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ac(e,o),e===ke&&(me=ke=null,Ce=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||_l||(_l=!0,Nu(Rr,function(){return An(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=et.transition,et.transition=null;var i=q;q=1;var s=W;W|=4,gi.current=null,xd(e,n),fu(n,e),Gc(Co),Dr=!!_o,Co=_o=null,e.current=n,_d(n),Zu(),W=s,q=i,et.transition=o}else e.current=n;if(_l&&(_l=!1,Wt=e,Cl=l),o=e.pendingLanes,o===0&&(Vt=null),nc(n.stateNode),Ue(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(xl)throw xl=!1,e=yi,yi=null,e;return(Cl&1)!==0&&e.tag!==0&&An(),o=e.pendingLanes,(o&1)!==0?e===wi?xr++:(xr=0,wi=e):xr=0,Ft(),null}function An(){if(Wt!==null){var e=cs(Cl),t=et.transition,n=q;try{if(et.transition=null,q=16>e?16:e,Wt===null)var r=!1;else{if(e=Wt,Wt=null,Cl=0,(W&6)!==0)throw Error(p(331));var l=W;for(W|=4,j=e.current;j!==null;){var o=j,i=o.child;if((j.flags&16)!==0){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var g=s[a];for(j=g;j!==null;){var S=j;switch(S.tag){case 0:case 11:case 15:wr(8,S,o)}var k=S.child;if(k!==null)k.return=S,j=k;else for(;j!==null;){S=j;var y=S.sibling,N=S.return;if(su(S),S===g){j=null;break}if(y!==null){y.return=N,j=y;break}j=N}}}var b=o.alternate;if(b!==null){var R=b.child;if(R!==null){b.child=null;do{var pe=R.sibling;R.sibling=null,R=pe}while(R!==null)}}j=o}}if((o.subtreeFlags&2064)!==0&&i!==null)i.return=o,j=i;else e:for(;j!==null;){if(o=j,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:wr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,j=f;break e}j=o.return}}var u=e.current;for(j=u;j!==null;){i=j;var m=i.child;if((i.subtreeFlags&2064)!==0&&m!==null)m.return=i,j=m;else e:for(i=u;j!==null;){if(s=j,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:wl(9,s)}}catch(z){de(s,s.return,z)}if(s===i){j=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,j=x;break e}j=s.return}}if(W=l,Ft(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Lr,e)}catch{}r=!0}return r}finally{q=n,et.transition=t}}return!1}function _u(e,t,n){t=Rn(n,t),t=Ba(e,t,1),e=Bt(e,t,1),t=Re(),e!==null&&($n(e,1,t),Ue(e,t))}function de(e,t,n){if(e.tag===3)_u(e,e,n);else for(;t!==null;){if(t.tag===3){_u(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){e=Rn(n,e),e=Ja(t,e,1),t=Bt(t,e,1),e=Re(),t!==null&&($n(t,1,e),Ue(t,e));break}}t=t.return}}function Pd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&n,ke===e&&(Ce&n)===n&&(ye===4||ye===3&&(Ce&130023424)===Ce&&500>fe()-vi?sn(e,0):hi|=n),Ue(e,t)}function Cu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ir,Ir<<=1,(Ir&130023424)===0&&(Ir=4194304)));var n=Re();e=Et(e,t),e!==null&&($n(e,t,n),Ue(e,n))}function bd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cu(e,n)}function Rd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(p(314))}r!==null&&r.delete(t),Cu(e,n)}var Eu;Eu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)De=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return De=!1,yd(e,t,n);De=(e.flags&131072)!==0}else De=!1,ie&&(t.flags&1048576)!==0&&la(t,nl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;vl(e,t),e=t.pendingProps;var l=_n(t,Ee.current);Pn(t,n),l=Go(null,t,r,e,l,n);var o=Ko();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(o=!0,Zr(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Bo(t),l.updater=gl,t.stateNode=l,l._reactInternals=t,ti(t,r,e,n),t=oi(null,t,r,!0,o,n)):(t.tag=0,ie&&o&&Ro(t),be(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(vl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=zd(r),e=st(r,e),l){case 0:t=li(null,t,r,e,n);break e;case 1:t=Xa(null,t,r,e,n);break e;case 11:t=$a(null,t,r,e,n);break e;case 14:t=Qa(null,t,r,st(r.type,e),n);break e}throw Error(p(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:st(r,l),li(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:st(r,l),Xa(e,t,r,l,n);case 3:e:{if(Ya(t),e===null)throw Error(p(387));r=t.pendingProps,o=t.memoizedState,l=o.element,pa(e,t),al(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Rn(Error(p(423)),t),t=Za(e,t,r,n,l);break e}else if(r!==l){l=Rn(Error(p(424)),t),t=Za(e,t,r,n,l);break e}else for(Qe=Ot(t.stateNode.containerInfo.firstChild),$e=t,ie=!0,it=null,n=da(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Nn(),r===l){t=Tt(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return ha(t),e===null&&Io(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Eo(r,l)?i=null:o!==null&&Eo(r,o)&&(t.flags|=32),qa(e,t),be(e,t,i,n),t.child;case 6:return e===null&&Io(t),null;case 13:return eu(e,t,n);case 4:return Jo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tn(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:st(r,l),$a(e,t,r,l,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,te(ol,r._currentValue),r._currentValue=i,o!==null)if(ot(o.value,i)){if(o.children===l.children&&!Oe.current){t=Tt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Nt(-1,n&-n),a.tag=2;var g=o.updateQueue;if(g!==null){g=g.shared;var S=g.pending;S===null?a.next=a:(a.next=S.next,S.next=a),g.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Fo(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(p(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Fo(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}be(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Pn(t,n),l=Ye(l),r=r(l),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,l=st(r,t.pendingProps),l=st(r.type,l),Qa(e,t,r,l,n);case 15:return Ga(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:st(r,l),vl(e,t),t.tag=1,Me(r)?(e=!0,Zr(t)):e=!1,Pn(t,n),Fa(t,r,l),ti(t,r,l,n),oi(null,t,r,!0,e,n);case 19:return nu(e,t,n);case 22:return Ka(e,t,n)}throw Error(p(156,t.tag))};function Nu(e,t){return os(e,t)}function Ld(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,r){return new Ld(e,t,n,r)}function Ei(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zd(e){if(typeof e=="function")return Ei(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ft)return 11;if(e===pt)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function jl(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Ei(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ie:return un(n.children,l,o,t);case Ke:i=8,l|=8;break;case Pt:return e=tt(12,n,t,l|2),e.elementType=Pt,e.lanes=o,e;case Ve:return e=tt(13,n,t,l),e.elementType=Ve,e.lanes=o,e;case rt:return e=tt(19,n,t,l),e.elementType=rt,e.lanes=o,e;case ce:return Pl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case St:i=10;break e;case Kt:i=9;break e;case ft:i=11;break e;case pt:i=14;break e;case Ae:i=16,r=null;break e}throw Error(p(130,e==null?e:typeof e,""))}return t=tt(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function un(e,t,n,r){return e=tt(7,e,r,t),e.lanes=n,e}function Pl(e,t,n,r){return e=tt(22,e,r,t),e.elementType=ce,e.lanes=n,e.stateNode={isHidden:!1},e}function Ni(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function Ti(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Id(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ji(e,t,n,r,l,o,i,s,a){return e=new Id(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=tt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bo(o),e}function Ad(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pe,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tu(e){if(!e)return Dt;e=e._reactInternals;e:{if(qt(e)!==e||e.tag!==1)throw Error(p(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(p(171))}if(e.tag===1){var n=e.type;if(Me(n))return ta(e,n,t)}return t}function ju(e,t,n,r,l,o,i,s,a){return e=ji(n,r,!0,e,l,o,i,s,a),e.context=Tu(null),n=e.current,r=Re(),l=Ht(n),o=Nt(r,l),o.callback=t??null,Bt(n,o,l),e.current.lanes=l,$n(e,l,r),Ue(e,r),e}function bl(e,t,n,r){var l=t.current,o=Re(),i=Ht(l);return n=Tu(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(l,t,i),e!==null&&(ct(e,l,i,o),sl(e,l,i)),i}function Rl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pi(e,t){Pu(e,t),(e=e.alternate)&&Pu(e,t)}function Od(){return null}var bu=typeof reportError=="function"?reportError:function(e){console.error(e)};function bi(e){this._internalRoot=e}Ll.prototype.render=bi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(p(409));bl(e,t,null,null)},Ll.prototype.unmount=bi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){bl(null,e,null,null)}),t[kt]=null}};function Ll(e){this._internalRoot=e}Ll.prototype.unstable_scheduleHydration=function(e){if(e){var t=ps();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&t!==0&&t<zt[n].priority;n++);zt.splice(n,0,e),n===0&&hs(e)}};function Ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ru(){}function Md(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var g=Rl(i);o.call(g)}}var i=ju(t,r,e,0,null,!1,!1,"",Ru);return e._reactRootContainer=i,e[kt]=i.current,ir(e.nodeType===8?e.parentNode:e),on(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var g=Rl(a);s.call(g)}}var a=ji(e,0,!1,null,null,!1,!1,"",Ru);return e._reactRootContainer=a,e[kt]=a.current,ir(e.nodeType===8?e.parentNode:e),on(function(){bl(t,a,n,r)}),a}function Il(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var a=Rl(i);s.call(a)}}bl(t,i,e,l)}else i=Md(n,t,e,l,r);return Rl(i)}ds=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hn(t.pendingLanes);n!==0&&(eo(t,n|1),Ue(t,fe()),(W&6)===0&&(In=fe()+500,Ft()))}break;case 13:on(function(){var r=Et(e,1);if(r!==null){var l=Re();ct(r,e,1,l)}}),Pi(e,1)}},to=function(e){if(e.tag===13){var t=Et(e,134217728);if(t!==null){var n=Re();ct(t,e,134217728,n)}Pi(e,134217728)}},fs=function(e){if(e.tag===13){var t=Ht(e),n=Et(e,t);if(n!==null){var r=Re();ct(n,e,t,r)}Pi(e,t)}},ps=function(){return q},ms=function(e,t){var n=q;try{return q=e,t()}finally{q=n}},Ql=function(e,t,n){switch(t){case"input":if(Fl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Xr(r);if(!l)throw Error(p(90));Di(r),Fl(r,l)}}}break;case"textarea":Vi(e,n);break;case"select":t=n.value,t!=null&&dn(e,!!n.multiple,t,!1)}},Yi=xi,Zi=on;var Dd={usingClientEntryPoint:!1,Events:[ur,kn,Xr,qi,Xi,xi]},_r={findFiberByHostInstance:Xt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fd={bundleType:_r.bundleType,version:_r.version,rendererPackageName:_r.rendererPackageName,rendererConfig:_r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:he.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rs(e),e===null?null:e.stateNode},findFiberByHostInstance:_r.findFiberByHostInstance||Od,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{Lr=Al.inject(Fd),mt=Al}catch{}}return Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dd,Be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ri(t))throw Error(p(200));return Ad(e,t,null,n)},Be.createRoot=function(e,t){if(!Ri(e))throw Error(p(299));var n=!1,r="",l=bu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ji(e,1,!1,null,null,n,!1,r,l),e[kt]=t.current,ir(e.nodeType===8?e.parentNode:e),new bi(t)},Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=rs(t),e=e===null?null:e.stateNode,e},Be.flushSync=function(e){return on(e)},Be.hydrate=function(e,t,n){if(!zl(t))throw Error(p(200));return Il(null,e,t,!0,n)},Be.hydrateRoot=function(e,t,n){if(!Ri(e))throw Error(p(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=bu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=ju(t,null,e,1,n??null,l,!1,o,i),e[kt]=t.current,ir(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Ll(t)},Be.render=function(e,t,n){if(!zl(t))throw Error(p(200));return Il(null,e,t,!1,n)},Be.unmountComponentAtNode=function(e){if(!zl(e))throw Error(p(40));return e._reactRootContainer?(on(function(){Il(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1},Be.unstable_batchedUpdates=xi,Be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zl(n))throw Error(p(200));if(e==null||e._reactInternals===void 0)throw Error(p(38));return Il(e,t,n,!1,r)},Be.version="18.3.1-next-f1338f8080-20240426",Be}var Fu;function Qd(){if(Fu)return Ii.exports;Fu=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(T){console.error(T)}}return c(),Ii.exports=$d(),Ii.exports}var Uu;function Gd(){if(Uu)return Ol;Uu=1;var c=Qd();return Ol.createRoot=c.createRoot,Ol.hydrateRoot=c.hydrateRoot,Ol}var Kd=Gd();function qd(){const[c,T]=ge.useState("both"),[p,I]=ge.useState("ts"),[v,_]=ge.useState("variables");return{sourceFilter:c,targetLang:p,activeSectionId:v,setSourceFilter:T,setTargetLang:I,setActiveSectionId:_}}const Xd=120;function Yd(){const[c,T]=ge.useState(""),[p,I]=ge.useState([]),v=ge.useRef(null),_=ge.useRef(null);ge.useEffect(()=>{const L=new Worker(new URL("/lang-party/assets/search.worker-BSFQa-d1.js",import.meta.url),{type:"module"});return v.current=L,L.onmessage=H=>{I(H.data)},()=>{L.terminate(),v.current=null}},[]);const V=ge.useCallback(L=>{if(T(L),_.current!==null&&clearTimeout(_.current),L.trim().length===0){I([]);return}_.current=setTimeout(()=>{var H;(H=v.current)==null||H.postMessage(L)},Xd)},[]),h=ge.useCallback(()=>{T(""),I([])},[]);return{query:c,results:p,setQuery:V,clear:h}}const Zd="_wrapper_1616g_1",ef="_inputWrapper_1616g_7",tf="_icon_1616g_13",nf="_input_1616g_7",rf="_clear_1616g_50",lf="_dropdown_1616g_66",of="_item_1616g_83",sf="_itemConcept_1616g_97",af="_itemSection_1616g_102",wt={wrapper:Zd,inputWrapper:ef,icon:tf,input:nf,clear:rf,dropdown:lf,item:of,itemConcept:sf,itemSection:af};function uf({onSelect:c}){const{query:T,results:p,setQuery:I,clear:v}=Yd(),[_,V]=ge.useState(!1),[h,L]=ge.useState(-1),H=ge.useRef(null),we=ge.useRef(null);ge.useEffect(()=>{function A(Y){var he;const ue=Y.target,Je=ue.tagName==="INPUT"||ue.tagName==="TEXTAREA";(Y.key==="/"&&!Je||(Y.metaKey||Y.ctrlKey)&&Y.key==="k")&&(Y.preventDefault(),(he=H.current)==null||he.focus(),V(!0))}return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[]),ge.useEffect(()=>{p.length>0&&V(!0),L(-1)},[p]);function ne(A){I(A.target.value)}function Z(){T.length>0&&p.length>0&&V(!0)}function Le(){setTimeout(()=>V(!1),150)}function ze(A){var Y;if(!(!_||p.length===0))if(A.key==="ArrowDown")A.preventDefault(),L(ue=>Math.min(ue+1,p.length-1));else if(A.key==="ArrowUp")A.preventDefault(),L(ue=>Math.max(ue-1,0));else if(A.key==="Enter"){A.preventDefault();const ue=p[h>=0?h:0];ue&&X(ue)}else A.key==="Escape"&&(v(),V(!1),(Y=H.current)==null||Y.blur())}const X=ge.useCallback(A=>{var Y;c(A.sectionId),v(),V(!1),(Y=H.current)==null||Y.blur()},[c,v]);return E.jsxs("div",{className:wt.wrapper,role:"search",children:[E.jsxs("div",{className:wt.inputWrapper,children:[E.jsx("span",{className:wt.icon,"aria-hidden":"true",children:"⌕"}),E.jsx("input",{ref:H,className:wt.input,type:"search",placeholder:"Search… (/ or ⌘K)",value:T,onChange:ne,onFocus:Z,onBlur:Le,onKeyDown:ze,"aria-label":"Search sections and concepts","aria-autocomplete":"list","aria-controls":"search-results","aria-activedescendant":h>=0?`search-result-${h}`:void 0,autoComplete:"off",spellCheck:!1}),T&&E.jsx("button",{className:wt.clear,onClick:()=>{var A;v(),V(!1),(A=H.current)==null||A.focus()},"aria-label":"Clear search",tabIndex:-1,children:"×"})]}),_&&p.length>0&&E.jsx("ul",{id:"search-results",ref:we,className:wt.dropdown,role:"listbox","aria-label":"Search results",children:p.map((A,Y)=>E.jsx("li",{id:`search-result-${Y}`,role:"option","aria-selected":Y===h,className:wt.item,"data-active":Y===h?"true":"false",onMouseDown:ue=>{ue.preventDefault(),X(A)},onMouseEnter:()=>L(Y),children:A.conceptTitle?E.jsxs(E.Fragment,{children:[E.jsx("span",{className:wt.itemConcept,children:A.conceptTitle}),E.jsx("span",{className:wt.itemSection,children:A.sectionTitle})]}):E.jsx("span",{className:wt.itemSection,children:A.sectionTitle})},`${A.sectionId}-${A.conceptId??"section"}`))})]})}const cf="_header_n379z_1",df="_menuBtn_n379z_15",ff="_menuIcon_n379z_30",pf="_controls_n379z_40",mf="_logo_n379z_45",gf="_label_n379z_65",hf="_pillGroup_n379z_73",vf="_pill_n379z_73",dt={header:cf,menuBtn:df,menuIcon:ff,controls:pf,logo:mf,label:gf,pillGroup:hf,pill:vf},yf=[{value:"java",label:"Java"},{value:"cpp",label:"C++"},{value:"both",label:"Both"}],wf=[{value:"js",label:"JS"},{value:"ts",label:"TS"}];function Sf({sourceFilter:c,targetLang:T,onSourceChange:p,onTargetChange:I,onSectionChange:v,menuOpen:_,onMenuToggle:V}){return E.jsxs("header",{className:dt.header,children:[E.jsx("button",{className:dt.menuBtn,onClick:V,"aria-label":_?"Close navigation":"Open navigation","aria-expanded":_,"aria-controls":"sidebar-nav",children:E.jsx("span",{className:dt.menuIcon,"aria-hidden":"true",children:_?"✕":"☰"})}),E.jsxs("div",{className:dt.logo,"aria-label":"lang.party",children:["lang",E.jsx("span",{children:"."}),"party"]}),E.jsx(uf,{onSelect:v}),E.jsxs("div",{className:dt.controls,children:[E.jsx("span",{className:dt.label,children:"from"}),E.jsx("div",{className:dt.pillGroup,role:"group","aria-label":"Source language",children:yf.map(({value:h,label:L})=>E.jsx("button",{className:dt.pill,"data-active":c===h?"true":"false","data-lang":h,onClick:()=>p(h),"aria-pressed":c===h,children:L},h))}),E.jsx("span",{className:dt.label,children:"to"}),E.jsx("div",{className:dt.pillGroup,role:"group","aria-label":"Target language",children:wf.map(({value:h,label:L})=>E.jsx("button",{className:dt.pill,"data-active":T===h?"true":"false","data-lang":h,onClick:()=>I(h),"aria-pressed":T===h,children:L},h))})]})]})}const kf="_sidebar_1a7gq_1",xf="_group_1a7gq_29",_f="_groupLabel_1a7gq_33",Cf="_navItem_1a7gq_42",Ml={sidebar:kf,group:xf,groupLabel:_f,navItem:Cf},Ef=[{id:"variables",title:"Variables & Types",group:"basics"},{id:"functions",title:"Functions",group:"basics"},{id:"classes",title:"Classes & OOP",group:"basics"},{id:"interfaces",title:"Interfaces",group:"basics"},{id:"generics",title:"Generics",group:"basics"},{id:"errors",title:"Error Handling",group:"basics"},{id:"async",title:"Async",group:"basics"},{id:"collections",title:"Collections",group:"basics"},{id:"modules",title:"Modules",group:"basics"},{id:"conceptual",title:"Conceptual Gaps",group:"differences"},{id:"gotchas",title:"Gotchas",group:"differences"},{id:"ecosystem",title:"Tool Equivalents",group:"ecosystem"},{id:"frameworks",title:"UI Frameworks",group:"ecosystem"}],Nf={basics:"Language Basics",differences:"Key Differences",ecosystem:"Ecosystem"},Tf=["basics","differences","ecosystem"];function jf({activeSectionId:c,onSectionChange:T,mobileOpen:p}){return E.jsx("nav",{id:"sidebar-nav",className:Ml.sidebar,"aria-label":"Section navigation","data-mobile-open":p?"true":"false",children:Tf.map(I=>{const v=Ef.filter(_=>_.group===I);return E.jsxs("div",{className:Ml.group,children:[E.jsx("div",{className:Ml.groupLabel,children:Nf[I]}),v.map(({id:_,title:V})=>E.jsx("button",{className:Ml.navItem,"data-active":c===_?"true":"false",onClick:()=>T(_),"aria-current":c===_?"page":void 0,children:V},_))]},I)})})}const Pf=new Set(["abstract","assert","boolean","break","byte","case","catch","char","class","const","continue","default","do","double","else","enum","extends","final","finally","float","for","goto","if","implements","import","instanceof","int","interface","long","native","new","package","private","protected","public","return","short","static","strictfp","super","switch","synchronized","this","throw","throws","transient","try","var","void","volatile","while","record","sealed","permits","yield","true","false","null"]),bf=new Set(["alignas","alignof","asm","auto","bool","break","case","catch","char","char8_t","char16_t","char32_t","class","concept","const","consteval","constexpr","constinit","const_cast","continue","co_await","co_return","co_yield","decltype","default","delete","do","double","dynamic_cast","else","enum","explicit","export","extern","false","float","for","friend","goto","if","inline","int","long","mutable","namespace","new","noexcept","nullptr","operator","private","protected","public","register","reinterpret_cast","requires","return","short","signed","sizeof","static","static_assert","static_cast","struct","switch","template","this","thread_local","throw","true","try","typedef","typeid","typename","union","unsigned","using","virtual","void","volatile","wchar_t","while","include","define","pragma","ifndef","ifdef","endif","undef"]),Vu=new Set(["async","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","export","extends","false","finally","for","from","function","if","import","in","instanceof","let","new","null","of","return","static","super","switch","this","throw","true","try","typeof","undefined","var","void","while","with","yield"]),Rf=new Set([...Vu,"abstract","as","asserts","bigint","boolean","declare","enum","implements","infer","interface","is","keyof","module","namespace","never","number","object","override","private","protected","public","readonly","satisfies","string","symbol","type","unique","unknown"]),Lf=new Set(["string","number","boolean","void","never","any","unknown","object","bigint","symbol"]);function zf(c){switch(c){case"java":return Pf;case"cpp":return bf;case"js":return Vu;case"ts":return Rf}}function If(c,T){const p=[],I=zf(T);let v=0;const _=c.length;for(;v<_;){if(c[v]==="/"&&c[v+1]==="/"){const h=c.indexOf(`
`,v),L=h===-1?c.slice(v):c.slice(v,h);p.push({type:"comment",value:L}),v+=L.length;continue}if(c[v]==="/"&&c[v+1]==="*"){const h=c.indexOf("*/",v+2),L=h===-1?c.slice(v):c.slice(v,h+2);p.push({type:"comment",value:L}),v+=L.length;continue}if(c[v]==="#"){const h=c.indexOf(`
`,v),L=h===-1?c.slice(v):c.slice(v,h);p.push({type:"comment",value:L}),v+=L.length;continue}if(c[v]==="`"){let h=v+1;for(;h<_;){if(c[h]==="\\"){h+=2;continue}if(c[h]==="`"){h++;break}h++}p.push({type:"string",value:c.slice(v,h)}),v=h;continue}if(c[v]==='"'){let h=v+1;for(;h<_;){if(c[h]==="\\"){h+=2;continue}if(c[h]==='"'){h++;break}if(c[h]===`
`)break;h++}p.push({type:"string",value:c.slice(v,h)}),v=h;continue}if(c[v]==="'"){let h=v+1;for(;h<_;){if(c[h]==="\\"){h+=2;continue}if(c[h]==="'"){h++;break}if(c[h]===`
`)break;h++}p.push({type:"string",value:c.slice(v,h)}),v=h;continue}if(/[0-9]/.test(c[v])||c[v]==="."&&v+1<_&&/[0-9]/.test(c[v+1])){let h=v;if(c[h]==="0"&&(c[h+1]==="x"||c[h+1]==="X"))for(h+=2;h<_&&/[0-9a-fA-F_]/.test(c[h]);)h++;else if(c[h]==="0"&&(c[h+1]==="b"||c[h+1]==="B"))for(h+=2;h<_&&/[01_]/.test(c[h]);)h++;else{for(;h<_&&/[0-9_]/.test(c[h]);)h++;if(h<_&&c[h]===".")for(h++;h<_&&/[0-9_]/.test(c[h]);)h++;if(h<_&&(c[h]==="e"||c[h]==="E"))for(h++,h<_&&(c[h]==="+"||c[h]==="-")&&h++;h<_&&/[0-9]/.test(c[h]);)h++;h<_&&/[fFdDlLuU]/.test(c[h])&&h++}p.push({type:"number",value:c.slice(v,h)}),v=h;continue}if(/[a-zA-Z_$]/.test(c[v])){let h=v;for(;h<_&&/[a-zA-Z0-9_$]/.test(c[h]);)h++;const L=c.slice(v,h);let H=h;for(;H<_&&c[H]===" ";)H++;I.has(L)?p.push({type:"keyword",value:L}):/^[A-Z][a-zA-Z0-9_$]*$/.test(L)||T==="ts"&&Lf.has(L)&&c[H]!=="("?p.push({type:"type",value:L}):c[H]==="("?p.push({type:"fn",value:L}):p.push({type:"text",value:L}),v=h;continue}const V=c.slice(v).match(/^(===|!==|=>|->|::|<<|>>|<=|>=|==|!=|\|\||&&|\+\+|--|[+\-*/%&|^~<>=!?:;,.])/);if(V){p.push({type:"op",value:V[0]}),v+=V[0].length;continue}p.push({type:"text",value:c[v]}),v++}return p}const Af="_panel_1ne0z_1",Of="_header_1ne0z_13",Mf="_dot_1ne0z_23",Df="_langName_1ne0z_35",Ff="_pre_1ne0z_43",On={panel:Af,header:Of,dot:Mf,langName:Df,pre:Ff,"token-keyword":"_token-keyword_1ne0z_70","token-type":"_token-type_1ne0z_71","token-string":"_token-string_1ne0z_72","token-comment":"_token-comment_1ne0z_73","token-number":"_token-number_1ne0z_74","token-fn":"_token-fn_1ne0z_75","token-op":"_token-op_1ne0z_76","token-text":"_token-text_1ne0z_77"},Bu={java:"Java",cpp:"C++",js:"JavaScript",ts:"TypeScript"};function Uf({panel:c}){const T=If(c.code,c.lang);return E.jsxs("div",{className:On.panel,children:[E.jsxs("div",{className:On.header,children:[E.jsx("span",{className:On.dot,"data-lang":c.lang,"aria-hidden":"true"}),E.jsx("span",{className:On.langName,children:Bu[c.lang]??c.lang})]}),E.jsx("pre",{className:On.pre,tabIndex:0,"aria-label":`${Bu[c.lang]??c.lang} code example`,children:T.map((p,I)=>E.jsx("span",{className:On[`token-${p.type}`],children:p.value},I))})]})}const Bf="_callout_19b00_1",Jf={callout:Bf};function Vf(c){const T=[],p=/(\*\*[^*]+\*\*|`[^`]+`)/g;let I=0,v;for(;(v=p.exec(c))!==null;){v.index>I&&T.push(c.slice(I,v.index));const _=v[0];_.startsWith("**")?T.push(E.jsx("strong",{children:_.slice(2,-2)},v.index)):T.push(E.jsx("code",{children:_.slice(1,-1)},v.index)),I=v.index+_.length}return I<c.length&&T.push(c.slice(I)),T}function Wf({variant:c,content:T}){return E.jsx("div",{className:Jf.callout,"data-variant":c,role:"note",children:Vf(T)})}const Hf="_card_qc7ah_1",$f="_header_qc7ah_9",Qf="_title_qc7ah_19",Gf="_note_qc7ah_25",Kf="_tag_qc7ah_33",qf="_panels_qc7ah_60",Xf="_calloutWrap_qc7ah_70",cn={card:Hf,header:$f,title:Qf,note:Gf,tag:Kf,panels:qf,calloutWrap:Xf},Yf={breaking:"breaking",similar:"similar",gotcha:"gotcha"};function Zf({concept:c,sourceFilter:T,targetLang:p}){const I=c.panels.filter(v=>!(v.lang==="java"&&T==="cpp"||v.lang==="cpp"&&T==="java"||v.lang==="js"&&p==="ts"||v.lang==="ts"&&p==="js"));return E.jsxs("article",{className:cn.card,children:[E.jsxs("div",{className:cn.header,children:[E.jsx("h3",{className:cn.title,children:c.title}),c.tag&&E.jsx("span",{className:cn.tag,"data-tag":c.tag,children:Yf[c.tag]}),c.note&&E.jsx("span",{className:cn.note,children:c.note})]}),E.jsx("div",{className:cn.panels,"data-count":String(I.length),children:I.map(v=>E.jsx(Uf,{panel:v},v.lang))}),c.callout&&E.jsx("div",{className:cn.calloutWrap,children:E.jsx(Wf,{variant:c.callout.variant,content:c.callout.content})})]})}const ep="_card_ao6vr_1",tp="_from_ao6vr_8",np="_label_ao6vr_15",rp="_chips_ao6vr_22",lp="_chip_ao6vr_22",op="_note_ao6vr_43",Mn={card:ep,from:tp,label:np,chips:rp,chip:lp,note:op};function ip({mapping:c}){return E.jsxs("div",{className:Mn.card,children:[E.jsx("div",{className:Mn.from,children:c.fromLabel}),E.jsx("div",{className:Mn.label,children:c.from}),E.jsx("div",{className:Mn.chips,children:c.to.map(T=>{const p=T.startsWith("★"),I=p?T.slice(1).trim():T;return E.jsx("span",{className:Mn.chip,"data-recommended":p?"true":"false",children:I},T)})}),c.note&&E.jsx("div",{className:Mn.note,children:c.note})]})}const sp="_section_ejabt_1",ap="_header_ejabt_5",up="_group_ejabt_11",cp="_title_ejabt_20",dp="_description_ejabt_27",fp="_ecoGrid_ejabt_35",Dn={section:sp,header:ap,group:up,title:cp,description:dp,ecoGrid:fp},pp={basics:"Language Basics",differences:"Key Differences",ecosystem:"Ecosystem"};function mp({section:c,sourceFilter:T,targetLang:p}){return E.jsxs("div",{className:Dn.section,children:[E.jsxs("div",{className:Dn.header,children:[E.jsx("div",{className:Dn.group,children:pp[c.group]}),E.jsx("h1",{className:Dn.title,children:c.title}),E.jsx("p",{className:Dn.description,children:c.description})]}),c.ecoMappings&&c.ecoMappings.length>0&&E.jsx("div",{className:Dn.ecoGrid,children:c.ecoMappings.map(I=>E.jsx(ip,{mapping:I},`${I.fromLabel}-${I.from}`))}),c.concepts.map(I=>E.jsx(Zf,{concept:I,sourceFilter:T,targetLang:p},I.id))]})}const gp={id:"variables",slug:"variables",group:"basics",title:"Variables & Types",description:"Declaration, mutability, type inference, and primitive types across Java, C++, and JS/TS.",concepts:[{id:"var-declaration",title:"Variable Declaration",tag:"similar",panels:[{lang:"java",code:`// Java: explicit type required (pre-Java 10)
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
auto total = 42;`},{lang:"js",code:`// JS: prefer const for all non-reassigned values
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
constexpr double PI = 3.14159265358979;`},{lang:"js",code:`const MAX_SIZE = 100;
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
int32_t  i32  = 42;`},{lang:"js",code:`// JS has one numeric type: Number (IEEE 754 double)
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
std::string val = opt.value_or("default");`},{lang:"js",code:`// JS has BOTH null (intentional absence) and
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
decltype(count) other = 5;  // int`},{lang:"js",code:`// JS is dynamically typed — no inference, no types
// Values have types; variables don't
const count = 0;        // runtime: number
const name  = 'Alice';  // runtime: string`},{lang:"ts",code:`// TS infers types from initialiser — annotation optional
const count = 0;        // inferred: 0 (literal)
const name  = 'Alice';  // inferred: string
const items = [1,2,3];  // inferred: number[]

// Generic function inference
function identity<T>(x: T): T { return x }
const n = identity(42); // T inferred as number`}]}]},hp={id:"functions",slug:"functions",group:"basics",title:"Functions",description:"Function declarations, signatures, overloading, lambdas, and higher-order patterns.",concepts:[{id:"fn-declaration",title:"Function Declaration",tag:"similar",panels:[{lang:"java",code:`public int add(int a, int b) {
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
}`},{lang:"js",code:`function add(a, b) {
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
};`},{lang:"js",code:`// Arrow function — concise syntax
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

// Call: greet("Alice") or greet("Alice", "Hi")`},{lang:"js",code:`function greet(name, prefix = 'Hello') {
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
}`},{lang:"js",code:`// Rest parameter collects remaining args into array
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
}`},{lang:"js",code:`// JS has no overloading — one function, handle types manually
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
// process('hi') → string`}],callout:{variant:"info",content:"TS overloads are **compile-time only**. There is one function at runtime. The overload signatures constrain call sites; the implementation signature is never directly callable."}}]},vp={id:"classes",slug:"classes",group:"basics",title:"Classes & OOP",description:"Class syntax, constructors, inheritance, access modifiers, and object patterns.",concepts:[{id:"class-basic",title:"Basic Class",tag:"similar",panels:[{lang:"java",code:`public class Person {
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
};`},{lang:"js",code:`class Person {
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
a->speak(); // "Woof!" — requires virtual`},{lang:"js",code:`class Animal {
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
};`},{lang:"js",code:`class Vault {
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

int Counter::count_ = 0; // definition (in .cpp)`},{lang:"js",code:`class Counter {
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

Counter.getCount(); // number`}]}]},yp={id:"interfaces",slug:"interfaces",group:"basics",title:"Interfaces",description:"Contracts, structural typing, abstract classes, and duck typing across languages.",concepts:[{id:"interface-basic",title:"Interface / Protocol",tag:"breaking",panels:[{lang:"java",code:`// Java: nominal typing — must explicitly implement
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
};`},{lang:"js",code:`// JS: no interface keyword — duck typing only
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
};`},{lang:"js",code:`// JS: no interfaces — mix behaviour with mixins or composition
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
}`}]},{id:"interface-vs-type",title:"interface vs type (TS)",tag:"similar",note:"TS only",panels:[{lang:"ts",code:`// interface: open (can be re-opened / merged)
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
// - use type for unions, tuples, and mapped types`}]}]},wp={id:"generics",slug:"generics",group:"basics",title:"Generics",description:"Type parameters, constraints, variance, and generic patterns.",concepts:[{id:"generics-basic",title:"Generic Functions",tag:"similar",panels:[{lang:"java",code:`// Type parameter <T>
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
auto s = strBox.get();`},{lang:"js",code:`// JS: no generics — use JSDoc for IDE hints only
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
T square(T x) { return x * x; }`},{lang:"js",code:`// No constraints — runtime checks only
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
// getProperty(user, 'x'); // compile error`}]},{id:"generics-utility-types",title:"Utility Types (TS)",tag:"breaking",note:"TS only",panels:[{lang:"ts",code:`interface User {
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
type UserResult = ReturnType<typeof getUser>; // User`}]}]},Sp={id:"errors",slug:"errors",group:"basics",title:"Error Handling",description:"Exceptions, checked vs unchecked, error types, and result patterns.",concepts:[{id:"errors-try-catch",title:"try / catch / finally",tag:"similar",panels:[{lang:"java",code:`try {
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
    // file closes automatically when scope exits`},{lang:"js",code:`try {
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
throw ValidationError("email", "invalid format");`},{lang:"js",code:`class ValidationError extends Error {
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
}`},{lang:"js",code:`// Common pattern: return [error, value] tuple
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
}`}],callout:{variant:"info",content:"The Result/Either pattern avoids exceptions for expected failures (validation, parsing). Reserve `throw` for truly unexpected states."}}]},kp={id:"async",slug:"async",group:"basics",title:"Async",description:"Promises, async/await, futures, and concurrent patterns.",concepts:[{id:"async-promise-future",title:"Promise / Future / CompletableFuture",tag:"similar",panels:[{lang:"java",code:`// Java: CompletableFuture (Java 8+)
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
}`},{lang:"js",code:`// Promise
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
}`},{lang:"js",code:`async function loadProfile(userId) {
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
} catch (const std::runtime_error& e) { ... }`},{lang:"js",code:`// Unhandled promise rejections are a common gotcha
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
}`}]}]},xp={id:"collections",slug:"collections",group:"basics",title:"Collections",description:"Arrays, lists, maps, sets, and iteration across the languages.",concepts:[{id:"collections-array-list",title:"Array / List",tag:"similar",panels:[{lang:"java",code:`// Fixed-size array
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
}`}]}]},_p={id:"modules",slug:"modules",group:"basics",title:"Modules",description:"Import, export, namespaces, and module systems.",concepts:[{id:"modules-export-import",title:"Export & Import",tag:"breaking",panels:[{lang:"java",code:`// Java: package + import
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
type LazyModule = typeof import('./heavyModule');`}],callout:{variant:"warn",content:'Mixing CJS and ESM causes subtle runtime errors. Pick one. For new projects, use ESM (`"type": "module"` in package.json). For Node.js libraries, output both with a bundler.'}}]},Cp={id:"conceptual",slug:"conceptual",group:"differences",title:"Conceptual Gaps",description:"Ideas that exist in Java/C++ but work fundamentally differently in JS/TS — or don't exist at all.",concepts:[{id:"concept-prototypes",title:"Prototype Chain vs Class Hierarchy",tag:"breaking",panels:[{lang:"java",code:`// Java: nominal class hierarchy
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
}`}]}]},Ep={id:"gotchas",slug:"gotchas",group:"differences",title:"Gotchas",description:"The things that will burn you. Especially == vs ===, type coercion, and prototype surprises.",concepts:[{id:"gotcha-equality",title:"== vs ===",tag:"gotcha",panels:[{lang:"java",code:`// Java: == compares object identity for reference types
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
const deep = structuredClone(arr2);`}]}]},Np={id:"ecosystem",slug:"ecosystem",group:"ecosystem",title:"Tool Equivalents",description:"Java and C++ tools mapped to their JS/TS equivalents. ★ = recommended first pick.",concepts:[],ecoMappings:[{from:"Maven / Gradle",fromLabel:"Java",to:["★ pnpm","npm","yarn"],note:"pnpm is fastest and strictest about dependency isolation. All three use package.json."},{from:"Make / CMake",fromLabel:"C++",to:["★ pnpm scripts","Makefile","just"],note:"Most JS projects use npm/pnpm scripts for build tasks."},{from:"javac / java",fromLabel:"Java",to:["★ tsc","esbuild","swc"],note:"tsc is the reference compiler. esbuild and swc are faster but skip type-checking."},{from:"g++ / clang++",fromLabel:"C++",to:["★ tsc","esbuild","swc"],note:"Same as Java — tsc for correctness, esbuild/swc for speed in CI."},{from:"JAR / WAR packaging",fromLabel:"Java",to:["★ Vite","esbuild","Rollup","webpack"],note:"Vite is standard for web apps. Rollup for libraries. webpack for legacy projects."},{from:"Static lib / .so / .dll",fromLabel:"C++",to:["★ npm package","Rollup library mode"],note:"Publish to npm. Use Rollup to generate CJS + ESM dual output."},{from:"JUnit 5",fromLabel:"Java",to:["★ Vitest","Jest"],note:"Vitest is the modern choice for Vite projects. Jest for legacy/non-Vite."},{from:"Google Test / Catch2",fromLabel:"C++",to:["★ Vitest","Jest"],note:"Same ecosystem — pick based on your bundler."},{from:"Mockito",fromLabel:"Java",to:["★ Vitest (vi.fn, vi.mock)","Jest mocks"],note:"Built-in mocking — no separate library needed."},{from:"Selenium",fromLabel:"Java",to:["★ Playwright","Cypress"],note:"Playwright is the modern end-to-end standard. Works across all browsers."},{from:"Checkstyle / PMD",fromLabel:"Java",to:["★ ESLint","oxlint","Biome"],note:"ESLint is most configurable. Biome combines linting + formatting in one tool."},{from:"clang-format / clang-tidy",fromLabel:"C++",to:["★ Prettier","Biome"],note:"Prettier for formatting only. Biome for formatting + linting."},{from:"JVM",fromLabel:"Java",to:["★ Node.js","Bun","Deno"],note:"Node.js is the standard. Bun is faster for scripts. Deno for security-first workloads."},{from:"Native executable",fromLabel:"C++",to:["★ Node.js","Bun compile","Deno compile"],note:"Node.js for servers. Bun compile / Deno compile for single-file executables."},{from:"Spring Boot",fromLabel:"Java",to:["★ Fastify","Express","Hono","NestJS"],note:"Fastify for performance. NestJS if you want Spring-like structure. Hono for edge runtimes."},{from:"Crow / Drogon",fromLabel:"C++",to:["★ Fastify","Hono"],note:"Fastify is the fastest mainstream Node.js server framework."},{from:"Hibernate / JPA",fromLabel:"Java",to:["★ Drizzle ORM","Prisma","Kysely"],note:"Prisma for DX. Drizzle for type safety + SQL control. Kysely for query builder."},{from:"SLF4J / Logback",fromLabel:"Java",to:["★ pino","winston"],note:"pino is the fastest Node.js logger with structured JSON output."},{from:"Jackson / Gson",fromLabel:"Java",to:["★ zod","valibot","superjson"],note:"JSON.parse is built-in. Use zod/valibot to validate and infer types from parsed data."},{from:"Bean Validation (JSR-380)",fromLabel:"Java",to:["★ zod","valibot"],note:"zod schemas double as type definitions and runtime validators."},{from:"Spring IoC / Guice",fromLabel:"Java",to:["★ manual DI (factory functions)","tsyringe","inversify"],note:"Manual DI is idiomatic in JS/TS. DI containers exist but are uncommon outside NestJS."}]},Tp={id:"frameworks",slug:"frameworks",group:"ecosystem",title:"UI Frameworks",description:"UI and application framework equivalents. ★ = recommended first pick for new projects.",concepts:[],ecoMappings:[{from:"JavaFX",fromLabel:"Java",to:["★ React","Vue","Svelte","Angular"],note:"React is the dominant choice. Vue is gentler for beginners. Svelte compiles away the runtime. Angular for large teams wanting a full framework."},{from:"Qt (QML)",fromLabel:"C++",to:["★ React","Vue","Svelte"],note:"React maps best to Qt's declarative component model. All three compile to efficient DOM updates."},{from:"Swing / AWT",fromLabel:"Java",to:["★ React","Angular"],note:"Swing's imperative mutation model is closest to Angular's two-way binding. React's unidirectional flow is the modern standard."},{from:"wxWidgets / GTK (C++)",fromLabel:"C++",to:["★ React","Svelte"],note:"Widget-based GUI maps loosely to component trees. Svelte's compiled output is closest to native widget efficiency."},{from:"Spring MVC (server-rendered)",fromLabel:"Java",to:["★ Next.js","Remix","Astro"],note:"Next.js for React-based SSR/SSG. Remix for form-centric apps. Astro for content-heavy static sites."},{from:"Thymeleaf / JSP",fromLabel:"Java",to:["★ Astro","Next.js"],note:"Server-side templating maps directly to Astro (zero-JS by default) or Next.js server components."},{from:"JUCE (audio/desktop)",fromLabel:"C++",to:["★ Electron","Tauri"],note:"Electron bundles a Chromium runtime (large but battle-tested). Tauri uses the OS WebView (smaller, Rust backend)."},{from:"JavaFX Properties / Bindings",fromLabel:"Java",to:["★ Zustand","Jotai","Redux Toolkit"],note:"Zustand for simple shared state. Jotai for atomic state. Redux Toolkit for complex event-sourced state."},{from:"Qt Signals & Slots",fromLabel:"C++",to:["★ Zustand","Jotai"],note:"Signals/slots map to reactive stores. Jotai atoms are the closest conceptual equivalent."},{from:"Electron (Java wrapper)",fromLabel:"Java",to:["★ Electron","Tauri"],note:"Electron is the standard for cross-platform desktop apps. Tauri is faster and lighter using OS WebViews."},{from:"Qt (cross-platform native)",fromLabel:"C++",to:["★ Tauri","Electron"],note:"Tauri is the modern lightweight option. Electron for maximum browser API compatibility."},{from:"Android (Java)",fromLabel:"Java",to:["★ React Native","Expo"],note:"React Native for full native bridge. Expo adds managed workflow and OTA updates on top of React Native."},{from:"Qt Mobile",fromLabel:"C++",to:["★ React Native","Capacitor"],note:"Capacitor wraps a web app in a native shell — minimal native code. React Native for performance-critical mobile apps."}]},Ju=[gp,hp,vp,yp,wp,Sp,kp,xp,_p,Cp,Ep,Np,Tp],jp="_shell_1vcss_1",Pp="_skipLink_1vcss_7",bp="_body_1vcss_26",Rp="_backdrop_1vcss_32",Lp="_main_1vcss_36",Er={shell:jp,skipLink:Pp,body:bp,backdrop:Rp,main:Lp};function zp({state:c}){const T=Ju.find(_=>_.id===c.activeSectionId)??Ju[0],[p,I]=ge.useState(!1),v=ge.useCallback(_=>{c.setActiveSectionId(_),I(!1)},[c]);return E.jsxs("div",{className:Er.shell,children:[E.jsx("a",{href:"#main-content",className:Er.skipLink,children:"Skip to main content"}),E.jsx(Sf,{sourceFilter:c.sourceFilter,targetLang:c.targetLang,onSourceChange:c.setSourceFilter,onTargetChange:c.setTargetLang,onSectionChange:v,menuOpen:p,onMenuToggle:()=>I(_=>!_)}),E.jsxs("div",{className:Er.body,children:[p&&E.jsx("div",{className:Er.backdrop,onClick:()=>I(!1),"aria-hidden":"true"}),E.jsx(jf,{activeSectionId:c.activeSectionId,onSectionChange:v,mobileOpen:p}),E.jsx("main",{id:"main-content",className:Er.main,tabIndex:-1,children:E.jsx(mp,{section:T,sourceFilter:c.sourceFilter,targetLang:c.targetLang})})]})]})}function Ip(){const c=qd();return E.jsx(zp,{state:c})}const Wu=document.getElementById("root");if(!Wu)throw new Error("Root element not found");Kd.createRoot(Wu).render(E.jsx(ge.StrictMode,{children:E.jsx(Ip,{})}));
