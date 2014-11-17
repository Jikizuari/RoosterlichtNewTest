//jQuery
var is_phonegap_app = (document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1);
// alert(is_phonegap_app ? 'is PhoneGap'  : 'is web');

function onDeviceReady() {
  application.initialize();
  application.activate_push();
}
document.addEventListener( 'deviceready', onDeviceReady, false);

$(document).ready(function(){
  application.initialize();
});


//touchSwipe
(function(e){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";function N(t){if(t&&t.allowPageScroll===undefined&&(t.swipe!==undefined||t.swipeStatus!==undefined)){t.allowPageScroll=u}if(t.click!==undefined&&t.tap===undefined){t.tap=t.click}if(!t){t={}}t=e.extend({},e.fn.swipe.defaults,t);return this.each(function(){var n=e(this);var r=n.data(x);if(!r){r=new C(this,t);n.data(x,r)}})}function C(T,N){function Z(t){if(e(t.target).closest(N.excludedElements,R).length>0)return;var n=t.originalEvent?t.originalEvent:t;var r,i=S?n.touches[0]:n;U=y;if(S){z=n.touches.length}else{t.preventDefault()}_=0;D=null;I=null;P=0;H=0;B=0;j=1;F=0;W=It();q=Ut();_t();if(!S||z===N.fingers||N.fingers===m||dt()){Bt(0,i);X=Gt();if(z==2){Bt(1,n.touches[1]);H=B=Xt(W[0].start,W[1].start)}if(N.swipeStatus||N.pinchStatus){r=ot(n,U)}}else{r=false}if(r===false){U=E;ot(n,U);return r}else{Ht(true)}return null}function et(e){var t=e.originalEvent?e.originalEvent:e;if(U===w||U===E||Dt())return;var n,r=S?t.touches[0]:t;var i=jt(r);V=Gt();if(S){z=t.touches.length}U=b;if(z==2){if(H==0){Bt(1,t.touches[1]);H=B=Xt(W[0].start,W[1].start)}else{jt(t.touches[1]);B=Xt(W[0].end,W[1].end);I=$t(W[0].end,W[1].end)}j=Vt(H,B);F=Math.abs(H-B)}if(z===N.fingers||N.fingers===m||!S||dt()){D=Qt(i.start,i.end);ht(e,D);_=Jt(i.start,i.end);P=Wt();qt(D,_);if(N.swipeStatus||N.pinchStatus){n=ot(t,U)}if(!N.triggerOnTouchEnd||N.triggerOnTouchLeave){var s=true;if(N.triggerOnTouchLeave){var o=Yt(this);s=Zt(i.end,o)}if(!N.triggerOnTouchEnd&&s){U=st(b)}else if(N.triggerOnTouchLeave&&!s){U=st(w)}if(U==E||U==w){ot(t,U)}}}else{U=E;ot(t,U)}if(n===false){U=E;ot(t,U)}}function tt(e){var t=e.originalEvent;if(S){if(t.touches.length>0){Mt();return true}}if(Dt()){z=K}e.preventDefault();V=Gt();P=Wt();if(ft()){U=E;ot(t,U)}else if(N.triggerOnTouchEnd||N.triggerOnTouchEnd==false&&U===b){U=w;ot(t,U)}else if(!N.triggerOnTouchEnd&&Et()){U=w;ut(t,U,c)}else if(U===b){U=E;ot(t,U)}Ht(false);return null}function nt(){z=0;V=0;X=0;H=0;B=0;j=1;_t();Ht(false)}function rt(e){var t=e.originalEvent;if(N.triggerOnTouchLeave){U=st(w);ot(t,U)}}function it(){R.unbind(k,Z);R.unbind(M,nt);R.unbind(L,et);R.unbind(A,tt);if(O){R.unbind(O,rt)}Ht(false)}function st(e){var t=e;var n=ct();var r=at();var i=ft();if(!n||i){t=E}else if(r&&e==b&&(!N.triggerOnTouchEnd||N.triggerOnTouchLeave)){t=w}else if(!r&&e==w&&N.triggerOnTouchLeave){t=E}return t}function ot(e,t){var n=undefined;if(yt()||gt()){n=ut(e,t,f)}else if((vt()||dt())&&n!==false){n=ut(e,t,l)}if(At()&&n!==false){n=ut(e,t,h)}else if(Ot()&&n!==false){n=ut(e,t,p)}else if(Lt()&&n!==false){n=ut(e,t,c)}if(t===E){nt(e)}if(t===w){if(S){if(e.touches.length==0){nt(e)}}else{nt(e)}}return n}function ut(u,a,d){var v=undefined;if(d==f){R.trigger("swipeStatus",[a,D||null,_||0,P||0,z]);if(N.swipeStatus){v=N.swipeStatus.call(R,u,a,D||null,_||0,P||0,z);if(v===false)return false}if(a==w&&mt()){R.trigger("swipe",[D,_,P,z]);if(N.swipe){v=N.swipe.call(R,u,D,_,P,z);if(v===false)return false}switch(D){case t:R.trigger("swipeLeft",[D,_,P,z]);if(N.swipeLeft){v=N.swipeLeft.call(R,u,D,_,P,z)}break;case n:R.trigger("swipeRight",[D,_,P,z]);if(N.swipeRight){v=N.swipeRight.call(R,u,D,_,P,z)}break;case r:R.trigger("swipeUp",[D,_,P,z]);if(N.swipeUp){v=N.swipeUp.call(R,u,D,_,P,z)}break;case i:R.trigger("swipeDown",[D,_,P,z]);if(N.swipeDown){v=N.swipeDown.call(R,u,D,_,P,z)}break}}}if(d==l){R.trigger("pinchStatus",[a,I||null,F||0,P||0,z,j]);if(N.pinchStatus){v=N.pinchStatus.call(R,u,a,I||null,F||0,P||0,z,j);if(v===false)return false}if(a==w&&pt()){switch(I){case s:R.trigger("pinchIn",[I||null,F||0,P||0,z,j]);if(N.pinchIn){v=N.pinchIn.call(R,u,I||null,F||0,P||0,z,j)}break;case o:R.trigger("pinchOut",[I||null,F||0,P||0,z,j]);if(N.pinchOut){v=N.pinchOut.call(R,u,I||null,F||0,P||0,z,j)}break}}}if(d==c){if(a===E||a===w){clearTimeout(G);if(St()&&!Nt()){Q=Gt();G=setTimeout(e.proxy(function(){Q=null;R.trigger("tap",[u.target]);if(N.tap){v=N.tap.call(R,u,u.target)}},this),N.doubleTapThreshold)}else{Q=null;R.trigger("tap",[u.target]);if(N.tap){v=N.tap.call(R,u,u.target)}}}}else if(d==h){if(a===E||a===w){clearTimeout(G);Q=null;R.trigger("doubletap",[u.target]);if(N.doubleTap){v=N.doubleTap.call(R,u,u.target)}}}else if(d==p){if(a===E||a===w){clearTimeout(G);Q=null;R.trigger("longtap",[u.target]);if(N.longTap){v=N.longTap.call(R,u,u.target)}}}return v}function at(){var e=true;if(N.threshold!==null){e=_>=N.threshold}return e}function ft(){var e=false;if(N.cancelThreshold!==null&&D!==null){e=Rt(D)-_>=N.cancelThreshold}return e}function lt(){if(N.pinchThreshold!==null){return F>=N.pinchThreshold}return true}function ct(){var e;if(N.maxTimeThreshold){if(P>=N.maxTimeThreshold){e=false}else{e=true}}else{e=true}return e}function ht(e,s){if(N.allowPageScroll===u||dt()){e.preventDefault()}else{var o=N.allowPageScroll===a;switch(s){case t:if(N.swipeLeft&&o||!o&&N.allowPageScroll!=d){e.preventDefault()}break;case n:if(N.swipeRight&&o||!o&&N.allowPageScroll!=d){e.preventDefault()}break;case r:if(N.swipeUp&&o||!o&&N.allowPageScroll!=v){e.preventDefault()}break;case i:if(N.swipeDown&&o||!o&&N.allowPageScroll!=v){e.preventDefault()}break}}}function pt(){var e=bt();var t=wt();var n=lt();return e&&t&&n}function dt(){return!!(N.pinchStatus||N.pinchIn||N.pinchOut)}function vt(){return!!(pt()&&dt())}function mt(){var e=ct();var t=at();var n=bt();var r=wt();var i=ft();var s=!i&&r&&n&&t&&e;return s}function gt(){return!!(N.swipe||N.swipeStatus||N.swipeLeft||N.swipeRight||N.swipeUp||N.swipeDown)}function yt(){return!!(mt()&&gt())}function bt(){return z===N.fingers||N.fingers===m||!S}function wt(){return W[0].end.x!==0}function Et(){return!!N.tap}function St(){return!!N.doubleTap}function xt(){return!!N.longTap}function Tt(){if(Q==null){return false}var e=Gt();return St()&&e-Q<=N.doubleTapThreshold}function Nt(){return Tt()}function Ct(){return(z===1||!S)&&(isNaN(_)||_===0)}function kt(){return P>N.longTapThreshold&&_<g}function Lt(){return!!(Ct()&&Et())}function At(){return!!(Tt()&&St())}function Ot(){return!!(kt()&&xt())}function Mt(){J=Gt();K=event.touches.length+1}function _t(){J=0;K=0}function Dt(){var e=false;if(J){var t=Gt()-J;if(t<=N.fingerReleaseThreshold){e=true}}return e}function Pt(){return!!(R.data(x+"_intouch")===true)}function Ht(e){if(e===true){R.bind(L,et);R.bind(A,tt);if(O){R.bind(O,rt)}}else{R.unbind(L,et,false);R.unbind(A,tt,false);if(O){R.unbind(O,rt,false)}}R.data(x+"_intouch",e===true)}function Bt(e,t){var n=t.identifier!==undefined?t.identifier:0;W[e].identifier=n;W[e].start.x=W[e].end.x=t.pageX||t.clientX;W[e].start.y=W[e].end.y=t.pageY||t.clientY;return W[e]}function jt(e){var t=e.identifier!==undefined?e.identifier:0;var n=Ft(t);n.end.x=e.pageX||e.clientX;n.end.y=e.pageY||e.clientY;return n}function Ft(e){for(var t=0;t<W.length;t++){if(W[t].identifier==e){return W[t]}}}function It(){var e=[];for(var t=0;t<=5;t++){e.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return e}function qt(e,t){t=Math.max(t,Rt(e));q[e].distance=t}function Rt(e){if(q[e])return q[e].distance;return undefined}function Ut(){var e={};e[t]=zt(t);e[n]=zt(n);e[r]=zt(r);e[i]=zt(i);return e}function zt(e){return{direction:e,distance:0}}function Wt(){return V-X}function Xt(e,t){var n=Math.abs(e.x-t.x);var r=Math.abs(e.y-t.y);return Math.round(Math.sqrt(n*n+r*r))}function Vt(e,t){var n=t/e*1;return n.toFixed(2)}function $t(){if(j<1){return o}else{return s}}function Jt(e,t){return Math.round(Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)))}function Kt(e,t){var n=e.x-t.x;var r=t.y-e.y;var i=Math.atan2(r,n);var s=Math.round(i*180/Math.PI);if(s<0){s=360-Math.abs(s)}return s}function Qt(e,s){var o=Kt(e,s);if(o<=45&&o>=0){return t}else if(o<=360&&o>=315){return t}else if(o>=135&&o<=225){return n}else if(o>45&&o<135){return i}else{return r}}function Gt(){var e=new Date;return e.getTime()}function Yt(t){t=e(t);var n=t.offset();var r={left:n.left,right:n.left+t.outerWidth(),top:n.top,bottom:n.top+t.outerHeight()};return r}function Zt(e,t){return e.x>t.left&&e.x<t.right&&e.y>t.top&&e.y<t.bottom}var C=S||!N.fallbackToMouseEvents,k=C?"touchstart":"mousedown",L=C?"touchmove":"mousemove",A=C?"touchend":"mouseup",O=C?null:"mouseleave",M="touchcancel";var _=0,D=null,P=0,H=0,B=0,j=1,F=0,I=0,q=null;var R=e(T);var U="start";var z=0;var W=null;var X=0,V=0,J=0,K=0,Q=0;var G=null;try{R.bind(k,Z);R.bind(M,nt)}catch(Y){e.error("events not supported "+k+","+M+" on jQuery.swipe")}this.enable=function(){R.bind(k,Z);R.bind(M,nt);return R};this.disable=function(){it();return R};this.destroy=function(){it();R.data(x,null);return R};this.option=function(t,n){if(N[t]!==undefined){if(n===undefined){return N[t]}else{N[t]=n}}else{e.error("Option "+t+" does not exist on jQuery.swipe.options")}return null};}var t="left",n="right",r="up",i="down",s="in",o="out",u="none",a="auto",f="swipe",l="pinch",c="tap",h="doubletap",p="longtap",d="horizontal",v="vertical",m="all",g=10,y="start",b="move",w="end",E="cancel",S="ontouchstart"in window,x="TouchSwipe";var T={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};e.fn.swipe=function(t){var n=e(this),r=n.data(x);if(r&&typeof t==="string"){if(r[t]){return r[t].apply(this,Array.prototype.slice.call(arguments,1))}else{e.error("Method "+t+" does not exist on jQuery.swipe")}}else if(!r&&(typeof t==="object"||!t)){return N.apply(this,arguments)}return n};e.fn.swipe.defaults=T;e.fn.swipe.phases={PHASE_START:y,PHASE_MOVE:b,PHASE_END:w,PHASE_CANCEL:E};e.fn.swipe.directions={LEFT:t,RIGHT:n,UP:r,DOWN:i,IN:s,OUT:o};e.fn.swipe.pageScroll={NONE:u,HORIZONTAL:d,VERTICAL:v,AUTO:a};e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:m}})
//modernizr
window.Modernizr=function(e,t,n){function A(e){f.cssText=e}function O(e,t){return A(p.join(e+";")+(t||""))}function M(e,t){return typeof e===t}function _(e,t){return!!~(""+e).indexOf(t)}function D(e,t){for(var r in e){var i=e[r];if(!_(i,"-")&&f[i]!==n){return t=="pfx"?i:true}}return false}function P(e,t,r){for(var i in e){var s=t[e[i]];if(s!==n){if(r===false)return e[i];if(M(s,"function")){return s.bind(r||t)}return s}}return false}function H(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+v.join(r+" ")+r).split(" ");if(M(t,"string")||M(t,"undefined")){return D(i,t)}else{i=(e+" "+m.join(r+" ")+r).split(" ");return P(i,t,n)}}function B(){i["input"]=function(n){for(var r=0,i=n.length;r<i;r++){w[n[r]]=!!(n[r]in l)}if(w.list){w.list=!!(t.createElement("datalist")&&e.HTMLDataListElement)}return w}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));i["inputtypes"]=function(e){for(var r=0,i,s,u,a=e.length;r<a;r++){l.setAttribute("type",s=e[r]);i=l.type!=="text";if(i){l.value=c;l.style.cssText="position:absolute;visibility:hidden;";if(/^range$/.test(s)&&l.style.WebkitAppearance!==n){o.appendChild(l);u=t.defaultView;i=u.getComputedStyle&&u.getComputedStyle(l,null).WebkitAppearance!=="textfield"&&l.offsetHeight!==0;o.removeChild(l)}else if(/^(search|tel)$/.test(s)){}else if(/^(url|email)$/.test(s)){i=l.checkValidity&&l.checkValidity()===false}else{i=l.value!=c}}b[e[r]]=!!i}return b}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var r="2.6.2",i={},s=true,o=t.documentElement,u="modernizr",a=t.createElement(u),f=a.style,l=t.createElement("input"),c=":)",h={}.toString,p=" -webkit- -moz- -o- -ms- ".split(" "),d="Webkit Moz O ms",v=d.split(" "),m=d.toLowerCase().split(" "),g={svg:"http://www.w3.org/2000/svg"},y={},b={},w={},E=[],S=E.slice,x,T=function(e,n,r,i){var s,a,f,l,c=t.createElement("div"),h=t.body,p=h||t.createElement("body");if(parseInt(r,10)){while(r--){f=t.createElement("div");f.id=i?i[r]:u+(r+1);c.appendChild(f)}}s=["&#173;",'<style id="s',u,'">',e,"</style>"].join("");c.id=u;(h?c:p).innerHTML+=s;p.appendChild(c);if(!h){p.style.background="";p.style.overflow="hidden";l=o.style.overflow;o.style.overflow="hidden";o.appendChild(p)}a=n(c,e);if(!h){p.parentNode.removeChild(p);o.style.overflow=l}else{c.parentNode.removeChild(c)}return!!a},N=function(t){var n=e.matchMedia||e.msMatchMedia;if(n){return n(t).matches}var r;T("@media "+t+" { #"+u+" { position: absolute; } }",function(t){r=(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle)["position"]=="absolute"});return r},C=function(){function r(r,i){i=i||t.createElement(e[r]||"div");r="on"+r;var s=r in i;if(!s){if(!i.setAttribute){i=t.createElement("div")}if(i.setAttribute&&i.removeAttribute){i.setAttribute(r,"");s=M(i[r],"function");if(!M(i[r],"undefined")){i[r]=n}i.removeAttribute(r)}}i=null;return s}var e={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return r}(),k={}.hasOwnProperty,L;if(!M(k,"undefined")&&!M(k.call,"undefined")){L=function(e,t){return k.call(e,t)}}else{L=function(e,t){return t in e&&M(e.constructor.prototype[t],"undefined")}}if(!Function.prototype.bind){Function.prototype.bind=function(t){var n=this;if(typeof n!="function"){throw new TypeError}var r=S.call(arguments,1),i=function(){if(this instanceof i){var e=function(){};e.prototype=n.prototype;var s=new e;var o=n.apply(s,r.concat(S.call(arguments)));if(Object(o)===o){return o}return s}else{return n.apply(t,r.concat(S.call(arguments)))}};return i}}y["flexbox"]=function(){return H("flexWrap")};y["flexboxlegacy"]=function(){return H("boxDirection")};y["canvas"]=function(){var e=t.createElement("canvas");return!!(e.getContext&&e.getContext("2d"))};y["canvastext"]=function(){return!!(i["canvas"]&&M(t.createElement("canvas").getContext("2d").fillText,"function"))};y["webgl"]=function(){return!!e.WebGLRenderingContext};y["touch"]=function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch){n=true}else{T(["@media (",p.join("touch-enabled),("),u,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=e.offsetTop===9})}return n};y["geolocation"]=function(){return"geolocation"in navigator};y["postmessage"]=function(){return!!e.postMessage};y["websqldatabase"]=function(){return!!e.openDatabase};y["indexedDB"]=function(){return!!H("indexedDB",e)};y["hashchange"]=function(){return C("hashchange",e)&&(t.documentMode===n||t.documentMode>7)};y["history"]=function(){return!!(e.history&&history.pushState)};y["draganddrop"]=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e};y["websockets"]=function(){return"WebSocket"in e||"MozWebSocket"in e};y["rgba"]=function(){A("background-color:rgba(150,255,150,.5)");return _(f.backgroundColor,"rgba")};y["hsla"]=function(){A("background-color:hsla(120,40%,100%,.5)");return _(f.backgroundColor,"rgba")||_(f.backgroundColor,"hsla")};y["multiplebgs"]=function(){A("background:url(https://),url(https://),red url(https://)");return/(url\s*\(.*?){3}/.test(f.background)};y["backgroundsize"]=function(){return H("backgroundSize")};y["borderimage"]=function(){return H("borderImage")};y["borderradius"]=function(){return H("borderRadius")};y["boxshadow"]=function(){return H("boxShadow")};y["textshadow"]=function(){return t.createElement("div").style.textShadow===""};y["opacity"]=function(){O("opacity:.55");return/^0.55$/.test(f.opacity)};y["cssanimations"]=function(){return H("animationName")};y["csscolumns"]=function(){return H("columnCount")};y["cssgradients"]=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";A((e+"-webkit- ".split(" ").join(t+e)+p.join(n+e)).slice(0,-e.length));return _(f.backgroundImage,"gradient")};y["cssreflections"]=function(){return H("boxReflect")};y["csstransforms"]=function(){return!!H("transform")};y["csstransforms3d"]=function(){var e=!!H("perspective");if(e&&"webkitPerspective"in o.style){T("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=t.offsetLeft===9&&t.offsetHeight===3})}return e};y["csstransitions"]=function(){return H("transition")};y["fontface"]=function(){var e;T('@font-face {font-family:"font";src:url("https://")}',function(n,r){var i=t.getElementById("smodernizr"),s=i.sheet||i.styleSheet,o=s?s.cssRules&&s.cssRules[0]?s.cssRules[0].cssText:s.cssText||"":"";e=/src/i.test(o)&&o.indexOf(r.split(" ")[0])===0});return e};y["generatedcontent"]=function(){var e;T(["#",u,"{font:0/0 a}#",u,':after{content:"',c,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3});return e};y["video"]=function(){var e=t.createElement("video"),n=false;try{if(n=!!e.canPlayType){n=new Boolean(n);n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,"");n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,"");n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}}catch(r){}return n};y["audio"]=function(){var e=t.createElement("audio"),n=false;try{if(n=!!e.canPlayType){n=new Boolean(n);n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"");n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,"");n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"");n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,"")}}catch(r){}return n};y["localstorage"]=function(){try{localStorage.setItem(u,u);localStorage.removeItem(u);return true}catch(e){return false}};y["sessionstorage"]=function(){try{sessionStorage.setItem(u,u);sessionStorage.removeItem(u);return true}catch(e){return false}};y["webworkers"]=function(){return!!e.Worker};y["applicationcache"]=function(){return!!e.applicationCache};y["svg"]=function(){return!!t.createElementNS&&!!t.createElementNS(g.svg,"svg").createSVGRect};y["inlinesvg"]=function(){var e=t.createElement("div");e.innerHTML="<svg/>";return(e.firstChild&&e.firstChild.namespaceURI)==g.svg};y["smil"]=function(){return!!t.createElementNS&&/SVGAnimate/.test(h.call(t.createElementNS(g.svg,"animate")))};y["svgclippaths"]=function(){return!!t.createElementNS&&/SVGClipPath/.test(h.call(t.createElementNS(g.svg,"clipPath")))};for(var j in y){if(L(y,j)){x=j.toLowerCase();i[x]=y[j]();E.push((i[x]?"":"no-")+x)}}i.input||B();i.addTest=function(e,t){if(typeof e=="object"){for(var r in e){if(L(e,r)){i.addTest(r,e[r])}}}else{e=e.toLowerCase();if(i[e]!==n){return i}t=typeof t=="function"?t():t;if(typeof s!=="undefined"&&s){o.className+=" "+(t?"":"no-")+e}i[e]=t}return i};A("");a=l=null;(function(e,t){function l(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;n.innerHTML="x<style>"+t+"</style>";return r.insertBefore(n.lastChild,r.firstChild)}function c(){var e=g.elements;return typeof e=="string"?e.split(" "):e}function h(e){var t=a[e[o]];if(!t){t={};u++;e[o]=u;a[u]=t}return t}function p(e,n,s){if(!n){n=t}if(f){return n.createElement(e)}if(!s){s=h(n)}var o;if(s.cache[e]){o=s.cache[e].cloneNode()}else if(i.test(e)){o=(s.cache[e]=s.createElem(e)).cloneNode()}else{o=s.createElem(e)}return o.canHaveChildren&&!r.test(e)?s.frag.appendChild(o):o}function d(e,n){if(!e){e=t}if(f){return e.createDocumentFragment()}n=n||h(e);var r=n.frag.cloneNode(),i=0,s=c(),o=s.length;for(;i<o;i++){r.createElement(s[i])}return r}function v(e,t){if(!t.cache){t.cache={};t.createElem=e.createElement;t.createFrag=e.createDocumentFragment;t.frag=t.createFrag()}e.createElement=function(n){if(!g.shivMethods){return t.createElem(n)}return p(n,e,t)};e.createDocumentFragment=Function("h,f","return function(){"+"var n=f.cloneNode(),c=n.createElement;"+"h.shivMethods&&("+c().join().replace(/\w+/g,function(e){t.createElem(e);t.frag.createElement(e);return'c("'+e+'")'})+");return n}")(g,t.frag)}function m(e){if(!e){e=t}var n=h(e);if(g.shivCSS&&!s&&!n.hasCSS){n.hasCSS=!!l(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}"+"mark{background:#FF0;color:#000}")}if(!f){v(e,n)}return e}var n=e.html5||{};var r=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var i=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;var s;var o="_html5shiv";var u=0;var a={};var f;(function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>";s="hidden"in e;f=e.childNodes.length==1||function(){t.createElement("a");var e=t.createDocumentFragment();return typeof e.cloneNode=="undefined"||typeof e.createDocumentFragment=="undefined"||typeof e.createElement=="undefined"}()}catch(n){s=true;f=true}})();var g={elements:n.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:n.shivCSS!==false,supportsUnknownElements:f,shivMethods:n.shivMethods!==false,type:"default",shivDocument:m,createElement:p,createDocumentFragment:d};e.html5=g;m(t)})(this,t);i._version=r;i._prefixes=p;i._domPrefixes=m;i._cssomPrefixes=v;i.mq=N;i.hasEvent=C;i.testProp=function(e){return D([e])};i.testAllProps=H;i.testStyles=T;i.prefixed=function(e,t,n){if(!t){return H(e,"pfx")}else{return H(e,t,n)}};o.className=o.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(s?" js "+E.join(" "):"");return i}(this,this.document)
//fastclick
function FastClick(e){"use strict";var t,n=this;this.trackingClick=false;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=10;this.layer=e;if(!e||!e.nodeType){throw new TypeError("Layer must be a document node")}this.onClick=function(){return FastClick.prototype.onClick.apply(n,arguments)};this.onMouse=function(){return FastClick.prototype.onMouse.apply(n,arguments)};this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(n,arguments)};this.onTouchMove=function(){return FastClick.prototype.onTouchMove.apply(n,arguments)};this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(n,arguments)};this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(n,arguments)};if(FastClick.notNeeded(e)){return}if(this.deviceIsAndroid){e.addEventListener("mouseover",this.onMouse,true);e.addEventListener("mousedown",this.onMouse,true);e.addEventListener("mouseup",this.onMouse,true)}e.addEventListener("click",this.onClick,true);e.addEventListener("touchstart",this.onTouchStart,false);e.addEventListener("touchmove",this.onTouchMove,false);e.addEventListener("touchend",this.onTouchEnd,false);e.addEventListener("touchcancel",this.onTouchCancel,false);if(!Event.prototype.stopImmediatePropagation){e.removeEventListener=function(t,n,r){var i=Node.prototype.removeEventListener;if(t==="click"){i.call(e,t,n.hijacked||n,r)}else{i.call(e,t,n,r)}};e.addEventListener=function(t,n,r){var i=Node.prototype.addEventListener;if(t==="click"){i.call(e,t,n.hijacked||(n.hijacked=function(e){if(!e.propagationStopped){n(e)}}),r)}else{i.call(e,t,n,r)}}}if(typeof e.onclick==="function"){t=e.onclick;e.addEventListener("click",function(e){t(e)},false);e.onclick=null}}FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0;FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent);FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent);FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);FastClick.prototype.needsClick=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled){return true}break;case"input":if(this.deviceIsIOS&&e.type==="file"||e.disabled){return true}break;case"label":case"video":return true}return/\bneedsclick\b/.test(e.className)};FastClick.prototype.needsFocus=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"textarea":return true;case"select":return!this.deviceIsAndroid;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return false}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}};FastClick.prototype.sendClick=function(e,t){"use strict";var n,r;if(document.activeElement&&document.activeElement!==e){document.activeElement.blur()}r=t.changedTouches[0];n=document.createEvent("MouseEvents");n.initMouseEvent(this.determineEventType(e),true,true,window,1,r.screenX,r.screenY,r.clientX,r.clientY,false,false,false,false,0,null);n.forwardedTouchEvent=true;e.dispatchEvent(n)};FastClick.prototype.determineEventType=function(e){"use strict";if(this.deviceIsAndroid&&e.tagName.toLowerCase()==="select"){return"mousedown"}return"click"};FastClick.prototype.focus=function(e){"use strict";var t;if(this.deviceIsIOS&&e.setSelectionRange&&e.type.indexOf("date")!==0&&e.type!=="time"){t=e.value.length;e.setSelectionRange(t,t)}else{e.focus()}};FastClick.prototype.updateScrollParent=function(e){"use strict";var t,n;t=e.fastClickScrollParent;if(!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n;e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}if(t){t.fastClickLastScrollTop=t.scrollTop}};FastClick.prototype.getTargetElementFromEventTarget=function(e){"use strict";if(e.nodeType===Node.TEXT_NODE){return e.parentNode}return e};FastClick.prototype.onTouchStart=function(e){"use strict";var t,n,r;if(e.targetTouches.length>1){return true}t=this.getTargetElementFromEventTarget(e.target);n=e.targetTouches[0];if(this.deviceIsIOS){r=window.getSelection();if(r.rangeCount&&!r.isCollapsed){return true}if(!this.deviceIsIOS4){if(n.identifier===this.lastTouchIdentifier){e.preventDefault();return false}this.lastTouchIdentifier=n.identifier;this.updateScrollParent(t)}}this.trackingClick=true;this.trackingClickStart=e.timeStamp;this.targetElement=t;this.touchStartX=n.pageX;this.touchStartY=n.pageY;if(e.timeStamp-this.lastClickTime<200){e.preventDefault()}return true};FastClick.prototype.touchHasMoved=function(e){"use strict";var t=e.changedTouches[0],n=this.touchBoundary;if(Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n){return true}return false};FastClick.prototype.onTouchMove=function(e){"use strict";if(!this.trackingClick){return true}if(this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e)){this.trackingClick=false;this.targetElement=null}return true};FastClick.prototype.findControl=function(e){"use strict";if(e.control!==undefined){return e.control}if(e.htmlFor){return document.getElementById(e.htmlFor)}return e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")};FastClick.prototype.onTouchEnd=function(e){"use strict";var t,n,r,i,s,o=this.targetElement;if(!this.trackingClick){return true}if(e.timeStamp-this.lastClickTime<200){this.cancelNextClick=true;return true}this.cancelNextClick=false;this.lastClickTime=e.timeStamp;n=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;if(this.deviceIsIOSWithBadTarget){s=e.changedTouches[0];o=document.elementFromPoint(s.pageX-window.pageXOffset,s.pageY-window.pageYOffset)||o;o.fastClickScrollParent=this.targetElement.fastClickScrollParent}r=o.tagName.toLowerCase();if(r==="label"){t=this.findControl(o);if(t){this.focus(o);if(this.deviceIsAndroid){return false}o=t}}else if(this.needsFocus(o)){if(e.timeStamp-n>100||this.deviceIsIOS&&window.top!==window&&r==="input"){this.targetElement=null;return false}this.focus(o);if(!this.deviceIsIOS4||r!=="select"){this.targetElement=null;e.preventDefault()}return false}if(this.deviceIsIOS&&!this.deviceIsIOS4){i=o.fastClickScrollParent;if(i&&i.fastClickLastScrollTop!==i.scrollTop){return true}}if(!this.needsClick(o)){e.preventDefault();this.sendClick(o,e)}return false};FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=false;this.targetElement=null};FastClick.prototype.onMouse=function(e){"use strict";if(!this.targetElement){return true}if(e.forwardedTouchEvent){return true}if(!e.cancelable){return true}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(e.stopImmediatePropagation){e.stopImmediatePropagation()}else{e.propagationStopped=true}e.stopPropagation();e.preventDefault();return false}return true};FastClick.prototype.onClick=function(e){"use strict";var t;if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true}if(e.target.type==="submit"&&e.detail===0){return true}t=this.onMouse(e);if(!t){this.targetElement=null}return t};FastClick.prototype.destroy=function(){"use strict";var e=this.layer;if(this.deviceIsAndroid){e.removeEventListener("mouseover",this.onMouse,true);e.removeEventListener("mousedown",this.onMouse,true);e.removeEventListener("mouseup",this.onMouse,true)}e.removeEventListener("click",this.onClick,true);e.removeEventListener("touchstart",this.onTouchStart,false);e.removeEventListener("touchmove",this.onTouchMove,false);e.removeEventListener("touchend",this.onTouchEnd,false);e.removeEventListener("touchcancel",this.onTouchCancel,false)};FastClick.notNeeded=function(e){"use strict";var t;if(typeof window.ontouchstart==="undefined"){return true}if(/Chrome\/[0-9]+/.test(navigator.userAgent)){if(FastClick.prototype.deviceIsAndroid){t=document.querySelector("meta[name=viewport]");if(t&&t.content.indexOf("user-scalable=no")!==-1){return true}}else{return true}}if(e.style.msTouchAction==="none"){return true}return false};FastClick.attach=function(e){"use strict";return new FastClick(e)};if(typeof define!=="undefined"&&define.amd){define(function(){"use strict";return FastClick})}else if(typeof module!=="undefined"&&module.exports){module.exports=FastClick.attach;module.exports.FastClick=FastClick}else{window.FastClick=FastClick}
//touchScroll
(function(t){"use strict";var e={cursor:"move",decelerate:!0,triggerHardware:!1,y:!0,x:!0,slowdown:.9,maxvelocity:40,throttleFPS:60,movingClass:{up:"kinetic-moving-up",down:"kinetic-moving-down",left:"kinetic-moving-left",right:"kinetic-moving-right"},deceleratingClass:{up:"kinetic-decelerating-up",down:"kinetic-decelerating-down",left:"kinetic-decelerating-left",right:"kinetic-decelerating-right"}},n="kinetic-settings",i="kinetic-active";window.requestAnimationFrame||(window.requestAnimationFrame=function(){return window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}()),t.support=t.support||{},t.extend(t.support,{touch:"ontouchend"in document});var o=function(){return!1},c=function(t,e){return 0===Math.floor(Math.abs(t))?0:t*e},l=function(t,e){var n=t;return t>0?t>e&&(n=e):0-e>t&&(n=0-e),n},s=function(t,e){this.removeClass(t.movingClass.up).removeClass(t.movingClass.down).removeClass(t.movingClass.left).removeClass(t.movingClass.right).removeClass(t.deceleratingClass.up).removeClass(t.deceleratingClass.down).removeClass(t.deceleratingClass.left).removeClass(t.deceleratingClass.right),t.velocity>0&&this.addClass(e.right),0>t.velocity&&this.addClass(e.left),t.velocityY>0&&this.addClass(e.down),0>t.velocityY&&this.addClass(e.up)},a=function(t,e){e.velocity=0,e.velocityY=0,e.decelerate=!0,"function"==typeof e.stopped&&e.stopped.call(t,e)},r=function(t,e){var n=t[0];e.x&&n.scrollWidth>0?(n.scrollLeft=e.scrollLeft=n.scrollLeft+e.velocity,Math.abs(e.velocity)>0&&(e.velocity=e.decelerate?c(e.velocity,e.slowdown):e.velocity)):e.velocity=0,e.y&&n.scrollHeight>0?(n.scrollTop=e.scrollTop=n.scrollTop+e.velocityY,Math.abs(e.velocityY)>0&&(e.velocityY=e.decelerate?c(e.velocityY,e.slowdown):e.velocityY)):e.velocityY=0,s.call(t,e,e.deceleratingClass),"function"==typeof e.moved&&e.moved.call(t,e),Math.abs(e.velocity)>0||Math.abs(e.velocityY)>0?window.requestAnimationFrame(function(){r(t,e)}):a(t,e)},u=function(e){var i=t.kinetic.callMethods[e],o=Array.prototype.slice.call(arguments);i&&this.each(function(){var e=o.slice(1),c=t(this).data(n);e.unshift(c),i.apply(this,e)})},v=function(e,n){e[0],t.support.touch?e.bind("touchstart",n.events.touchStart).bind("touchend",n.events.inputEnd).bind("touchmove",n.events.touchMove):e.mousedown(n.events.inputDown).mouseup(n.events.inputEnd).mousemove(n.events.inputMove),e.click(n.events.inputClick).scroll(n.events.scroll).bind("selectstart",o).bind("dragstart",n.events.dragStart)},d=function(e,n){e[0],t.support.touch?e.unbind("touchstart",n.events.touchStart).unbind("touchend",n.events.inputEnd).unbind("touchmove",n.events.touchMove):e.unbind("mousedown",n.events.inputDown).unbind("mouseup",n.events.inputEnd).unbind("mousemove",n.events.inputMove).unbind("scroll",n.events.scroll),e.unbind("click",n.events.inputClick).unbind("selectstart",o),e.unbind("dragstart",n.events.dragStart)},f=function(o){this.addClass(i).each(function(){var i=this,c=t(this);if(!c.data(n)){var a,u,d,f,p=t.extend({},e,o),m=!1,h=!1,g=!1,w=1e3/p.throttleFPS;p.velocity=0,p.velocityY=0;var y=function(){a=!1,u=!1,g=!1};t(document).mouseup(y).click(y);var C=function(){p.velocity=l(m-a,p.maxvelocity),p.velocityY=l(h-u,p.maxvelocity)},b=function(e){return t.isFunction(p.filterTarget)?p.filterTarget.call(i,e)!==!1:!0},k=function(t,e){g=!0,p.velocity=m=0,p.velocityY=h=0,a=t,u=e},Y=function(){a&&m&&p.decelerate===!1&&(p.decelerate=!0,C(),a=m=g=!1,r(c,p))},D=function(e,n){(!d||new Date>new Date(d.getTime()+w))&&(d=new Date,g&&(a||u)&&(f&&(t(f).blur(),f=null,c.focus()),p.decelerate=!1,p.velocity=p.velocityY=0,c[0].scrollLeft=p.scrollLeft=p.x?c[0].scrollLeft-(e-a):c[0].scrollLeft,c[0].scrollTop=p.scrollTop=p.y?c[0].scrollTop-(n-u):c[0].scrollTop,m=a,h=u,a=e,u=n,C(),s.call(c,p,p.movingClass),"function"==typeof p.moved&&p.moved.call(c,p)))};p.events={touchStart:function(t){var e;b(t.target)&&(e=t.originalEvent.touches[0],k(e.clientX,e.clientY),t.stopPropagation())},touchMove:function(t){var e;g&&(e=t.originalEvent.touches[0],D(e.clientX,e.clientY),t.preventDefault&&t.preventDefault())},inputDown:function(t){b(t.target)&&(k(t.clientX,t.clientY),f=t.target,"IMG"===t.target.nodeName&&t.preventDefault(),t.stopPropagation())},inputEnd:function(t){Y(),f=null,t.preventDefault&&t.preventDefault()},inputMove:function(t){g&&(D(t.clientX,t.clientY),t.preventDefault&&t.preventDefault())},scroll:function(t){"function"==typeof p.moved&&p.moved.call(c,p),t.preventDefault&&t.preventDefault()},inputClick:function(t){return Math.abs(p.velocity)>0?(t.preventDefault(),!1):void 0},dragStart:function(){return f?!1:void 0}},v(c,p),c.data(n,p).css("cursor",p.cursor),p.triggerHardware&&c.css({"-webkit-transform":"translate3d(0,0,0)","-webkit-perspective":"1000","-webkit-backface-visibility":"hidden"})}})};t.kinetic={settingsKey:n,callMethods:{start:function(e,n){var i=t(this);e=t.extend(e,n),e&&(e.decelerate=!1,r(i,e))},end:function(e){t(this),e&&(e.decelerate=!0)},stop:function(e){var n=t(this);a(n,e)},detach:function(e){var n=t(this);d(n,e),n.removeClass(i).css("cursor","")},attach:function(e){var n=t(this);v(n,e),n.addClass(i).css("cursor","move")}}},t.fn.kinetic=function(t){return"string"==typeof t?u.apply(this,arguments):f.call(this,t),this}})(window.jQuery||window.Zepto);
//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n"," ":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);

var pushNotification;

// iOS getting the push notification
var onNotificationAPN = function( event ) {

  if ( event.alert ) {
    navigator.notification.alert( event.alert );
  }

  if ( event.sound ) {
    var sound = new Media( event.sound );
    sound.play();
  }

  if ( event.badge ) {
    pushNotification.setApplicationIconBadgeNumber( application.successHandler, application.errorHandler, event.badge );
  }
};

// Android getting the push notification
var onNotificationGCM = function( x ) {
  switch( x.event ) {

    case 'registered':
      if ( x.regid.length > 0 ) {
        // alert('registration id = '+x.regid);
        if( localStorage.getItem('selected_location') !== null && localStorage.getItem('selected_class') !== null ) {
          application.process_notification( {
            push      : 'update',
            type      : 'android',
            device_id : x.regid,
            klas      : localStorage.getItem('selected_class'),
            locatie   : localStorage.getItem('selected_location'),
          } );
        }
        localStorage.setItem('device_id', x.regid);
      }
    break;

    case 'message':
      alert( x.payload.message );
    break;

    case 'error':
      alert( 'error: ' + x.msg );
    break;

    default:
      // alert( 'unknown event' );
    break;
  }
};


(function ($) {
  $.fn.niceCheck = function() {
    // hebben we een label met class is-checkbox, zo nee, maak deze
    var myId = jQuery(this).attr('id');
    var myCheck = $(this).siblings(".is-checkbox[for='"+myId+"']");
    if (myCheck.length === 0) {
      // maken
      $(this).before('<label id="checkbox-label" class="is-checkbox" for="'+myId+'" />');
    }
    // bind change/click
    jQuery(this).bind('change', function() {
      jQuery(this).animate({ zoom: 1 }, 100, function() {
        var myCheck = jQuery(this).siblings(".is-checkbox[for='"+myId+"']");
        if (jQuery(this).is(':checked')) {
          myCheck.addClass('checked');
        }
        else {
          myCheck.removeClass('checked');
        }
      });
    });
    return jQuery(this).addClass('real-checkbox');
  };
})(jQuery);

/*
  FUNC : IE sucks so it needs special treatment
  */
  var ie = (function () {
    var undef, v = 3, div = document.createElement('div');

    while (
      div.innerHTML = '<!--[if gt IE '+(++v)+']><i></i><![endif]-->',
      div.getElementsByTagName('i')[0]
      );

      return v > 4 ? v : undef;
  }());

/*
FUNC : Older android versions suck, too
*/
var android_version = (function () {
  var user_agent = navigator.userAgent;

  if( user_agent.indexOf("Android") >= 0 ) {
    return parseFloat(user_agent.slice(user_agent.indexOf("Android") + 8));
  }
}());

var application = {
  _done: false,

  initialize: function () {
    if (application._done)
      return;
    application._done = true;
    application.build_interface();
  },

  activate_push: function() {
    if (window.hasOwnProperty('plugins') && window.plugins.hasOwnProperty('pushNotification')) {
      pushNotification = window.plugins.pushNotification;
    }
    else {
      return false;
    }

      // Android register
    if ( device.platform == 'android' || device.platform == 'Android' ) {
      pushNotification.register(
        application.successHandler,
        application.errorHandler,
        {
          'senderID'  : '149469167081',
          'ecb'   : 'onNotificationGCM'
        }
      );
    }
    // iOS register
    else {

      pushNotification.register(
        application.tokenHandler,
        application.errorHandler,
        {
          'badge' : 'true',
          'sound' : 'true',
          'alert' : 'true',
          'ecb' : 'onNotificationAPN'
        }
      );
    }
  },

  // Android succesfully registered
  successHandler: function( result ) {
    // alert( 'result: ' + result );
  },

  // Android + iOS, error while registering
  errorHandler: function( error ) {
    // alert( 'error: ' + error );
  },

  // iOS token handler
  tokenHandler: function( token ) {
    if( localStorage.getItem('user_agent') == 'ios' ) {
      if( localStorage.getItem('selected_location') !== null && localStorage.getItem('selected_class') !== null) {
        application.process_notification( {
          push      : 'update',
          type      : 'ios',
          device_id : token,
          klas      : localStorage.getItem('selected_class'),
          locatie   : localStorage.getItem('selected_location'),
        } );
      }
      localStorage.setItem('device_id', token);
    }
  },

  /*
   FUNC : Processing the devicetoken
   */
  process_notification: function(data_parameters) {
  	$.ajax({
      url      : "http://www.oosterlicht.nl/mobile_app.ajax.php?callback=?",
      type     : "GET",
      async    : false,
      data     : data_parameters,
      dataType : "jsonp"
    });
  },

/*
	FUNC : Requesting and showing the data
	*/
	request_data: function(hash, data_parameters) {
		var template,
		template_id,
		front_class   = $('#front-class'),
		main_content  = $('#main-content'),
		loading       = $('.loading');

		$.ajax( {
			url      : "http://www.oosterlicht.nl/mobile_app.ajax.php?callback=?",
			type     : "GET",
			async    : false,
			data     : data_parameters,
			dataType : "jsonp",
			beforeSend: function() {
				loading.css("opacity", "1");
			},
			success: function(rows){
        if ( hash == 0 ) {
          front_class.html("");
  				template = _.template(jQuery("#front_class_template").html());
  				front_class.append(template( { data: rows } ));
  			}
  			if ( hash == 1 )
  				template_id = "#schedule_changes_template";
  			if ( hash == 2 )
  				template_id = "#back_class_template";
  			if ( hash == 3 )
  				template_id = "#marquee_template";
        if ( hash == 4 )
          template_id = "#teacher_info_template";
  			if ( hash != 0 ) {
  				main_content.html("");
  				template = _.template(jQuery(template_id).html());
  				main_content.append(template({data : rows}));
  			}
  			loading.css("opacity", "0");
  		}
  	} );
	},

/*
	FUNC : Used to reload the page
	*/
	reload_page: function() {
		document.location.reload(true);
	},

/*
	FUNC : Used to clear both cookies if needed
	*/
	clear_cookies: function() {
		localStorage.removeItem('selected_class');
		localStorage.removeItem('selected_location');
	},


/*
	FUNC : Used to open the menu after toggling
	*/
	open_menu: function() {
		var animateable = $(".animateable");
		// Bloody IE and older androids
		if ( ie < 10 || android_version < 2.4 ) {
			animateable.css("marginLeft", "17em");
		} else {
			animateable.css("webkitTransform",  "translate3d(17em, 0, 0)")
					   .css("transform",        "translate3d(17em, 0, 0)")
			     	   .css("mozTransform",     "translate3d(17em, 0, 0)");
		}
	},

/*
	FUNC : Used to close the menu after toggling
	*/
	close_menu: function() {
		var animateable = $(".animateable");
		// Curse you, IE and older androids!
		if ( ie < 10 || android_version < 2.4 ) {
			animateable.css("marginLeft", "0");
		} else {
			animateable.css("webkitTransform",  "translate3d(0, 0, 0)")
					   .css("transform",        "translate3d(0, 0, 0)")
					   .css("mozTransform",     "translate3d(0, 0, 0)");
		}
	},

/*
 	FUNC : Used to print the current date in Dutch
 	*/
 	translate_date: function(date) {
		var current_date  = date,

		arr_day           = new Array('Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'),
		arr_month         = new Array('Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'),

		current_day       = current_date.getDate(),
		current_day_num   = current_date.getDay(),
		current_month     = current_date.getMonth(),

		to_return         = '';

		to_return += arr_day[current_day_num] + " ";  // Woensdag
		to_return += current_day + " ";               // 25
		to_return += arr_month[current_month] + " ";  // September

		return to_return;
	},

/*
	FUNC : When page loads, get the menu item that needs the active class
	*/
	init_menu_active: function(hash) {
		if ( hash == 1 )
			$(".menu-icon-one").addClass('active');
		if ( hash == 2 || hash == 5 )
			$(".menu-icon-two").addClass('active');
		if ( hash == 3 )
			$(".menu-icon-three").addClass('active');
		if ( hash == 4 )
			$(".menu-icon-four").addClass('active');
	},

/*
	FUNC : When page loads, get the appropriate content
	*/
	get_required_page_info: function(needed_hash) {
		if ( needed_hash == 1 )
			application.request_data( needed_hash,  { request : 'roosterwijzigingen',  required : [ localStorage.getItem('selected_class'), localStorage.getItem( 'selected_location' ) ] } );
		else if ( needed_hash == 2 )
			application.request_data( needed_hash,  { request : 'klassen',             required : localStorage.getItem('selected_location') } );
		else if ( needed_hash == 3 )
			application.request_data( needed_hash,  { request : 'lichtkrant',          required : localStorage.getItem('selected_location') } );
    else if ( needed_hash == 4 )
      application.request_data( needed_hash,  { request : 'docenten',            required : localStorage.getItem('selected_location') } );
		else if ( needed_hash == 5 ) {
			$("#main-top-bar-back").fadeIn('fast');
			application.request_data( 1,            { request : 'roosterwijzigingen',  required : localStorage.getItem('second_selected_class') });
		}
	},

/*
	FUNC : Showing the back page
	*/
	show_back_page: function() {
		$("#back-page").show();
		$("#front-page").hide();
	},

/*
	FUNC : Showing the front page
	*/
	show_front_page: function() {
		$("#front-page").show();
		$("#back-page").hide();
	},

/*
	FUNC : Initializing the checkbox on the back page, checked or not checked
	*/
	init_checkbox: function() {
		if( localStorage.getItem('checkbox_active') == 'yes' ) {
			$(".is-checkbox").addClass('checked');
			$(".push-checkbox").attr('checked', true);
		}
	},

/*
	FUNC : Checking if the device is touch
	*/
	is_touch_device: function() {
		try {
			document.createElement("TouchEvent");
			return true;
		} catch( e ) {
			return false;
		}
	},

/*
	FUNC : Fallback scrolling for older android devices, which can't scroll because older android browsers suck
	*/
	fallback_scroll: function(id) {
		if( application.is_touch_device() ) {
			var el = document.getElementById(id);
			var scrollStartPos = 0;

			document.getElementById(id).addEventListener("touchstart", function(event) {
				scrollStartPos = this.scrollTop + event.touches[0].pageY;
				event.preventDefault();
			} , false );

			document.getElementById(id).addEventListener("touchmove", function(event) {
				this.scrollTop = scrollStartPos - event.touches[0].pageY;
				event.preventDefault();
			} , false );
		}
	}
};


application.build_interface = function() {
  if( is_phonegap_app ) { // PhoneGap

	/*
		FUNC : Setting the user agent string (PhoneGap only)
		*/
		if( navigator.userAgent.match(/(iPod|iPhone|iPad)/) )
		 	localStorage.setItem('user_agent', 'ios');
	 	else
		 	localStorage.setItem('user_agent', 'android');

	/*
		FUNC : Setting the checkbox to the right value (PhoneGap only)
		*/
		application.init_checkbox();

	} else { // Browser

	/*
		FUNC : Hiding the checkbox if we're in a browser
		*/
		$(".push-notis").hide();

	}

/*
	FUNC : Older android browsers suck and have 0 css support
	*/
	if( android_version < 2.4 ) {
		$('#main-section').kinetic({triggerHardware: true});
		$('#navigation').kinetic({triggerHardware: true});
	 	// application.fallback_scroll("main-section");
	 	// application.fallback_scroll("navigation");
 }

/*
	FUNC : Making all the click events fast (removing the delay)
	*/
	FastClick.attach(document.body);

/*
	FUNC : Solve at least most of the problems on PhoneGap involving changing orientation
	*/
	$(window).resize(function() {
		$("#main-section").width( $(window).width() );
	});

/*
	FUNC : The page that has to be shown
	*/
	if( localStorage.getItem('selected_location') === null || localStorage.getItem('selected_class') === null )
		application.show_front_page();
	else
		application.show_back_page();

/*
	FUNC : Used to determine the current value of the push notification checkbox (PhoneGap only)
	*/
	var checkbox_value,

/*
	FUNC : Used to toggle the menu
	*/
	menu_is_open = false,

/*
	FUNC : Used to get the content for the current page
	*/
	current_index = location.hash.substring(1);

	//Fallback if something goes wrong by any chance
	if( current_index === "" )
		current_index = 1;

/*
	FUNC : To configure the menu on first page load. This ensures the correct menu item is highlighted
	*/
	application.init_menu_active( current_index );

/*
	FUNC : If the page reload, sets the content to the latest hash
	*/
	if( localStorage.getItem('selected_location') !== null && localStorage.getItem('selected_class') !== null )
		application.get_required_page_info( current_index );

/*
	FUNC : Showing the classes for the selected location
	*/
	$("#front-locations li").click(function() {
		$("#front-locations li").each(function() {
			$(this).css('background', 'url("../img/BG-panel.jpg")');
		});
		$(this).css('background', '#f99d1c');
		localStorage.setItem('selected_location', $(this).html());
		$("#front-hidden").fadeIn('fast');
		application.request_data( 0, { request : 'klassen', required : $(this).html() } );
	});

/*
	FUNC : Setting the cookies after selecting a class
	EXTRA: .on() is used because the contents are generated dynamically
	*/
	$("#front-class").on("click", "li", function() {
		localStorage.setItem('selected_class', $(this).html());
		location.hash = "#1";
		application.reload_page();
	});

/*
	FUNC : Switching the active class within the menu
	*/
	$("#left-navigation a").click(function() {
		$('#main-section').scrollTop(0);
		$("#main-top-bar-back").fadeOut('fast');
		$("#left-navigation a").removeClass("active");
		$(this).addClass("active");
		menu_is_open = false;
		application.close_menu();
    var needed_hash = $(this).attr("href") || "#0";
		needed_hash = needed_hash.substring(1);
		application.get_required_page_info(needed_hash);
	});

/*
	FUNC : Deleting the cookies so we can change location/class
	*/
	$("li#change-class").click(function() {
		location.hash = "";
		application.clear_cookies();
		application.reload_page();
	});

/*
	FUNC : Redirecting to the main website
	*/
	$(".go-to-website").click(function(e) {
		e.preventDefault();
		location.hash = "";
		var target;
		if( is_phonegap_app )
			target = '_system';
		else
			target = '_blank';

		// Seriously, Android? Not even opening links properly?
		if( android_version < 2.4 )
			if( localStorage.getItem('selected_location') !== null )
				window.location = 'http://www.oosterlicht.nl/?locatie=' + localStorage.getItem('selected_location').toLowerCase() + '&skipmobiledetect=true' ;
			else
				window.location = 'http://www.oosterlicht.nl/?skipmobiledetect=true' ;
		else
			if( localStorage.getItem('selected_location') !== null )
				window.open( 'http://www.oosterlicht.nl/?locatie=' + localStorage.getItem('selected_location').toLowerCase() + '&skipmobiledetect=true' , target );
			else
				window.open( 'http://www.oosterlicht.nl/?skipmobiledetect=true' , target );
	});

/*
	FUNC : Redirecting to information about selected class after click ('alle-wijzigingen')
	*/
	$("#main-content").on("click", "td.main-table-td-hoverable", function(e) {
		e.stopPropagation();
		application.request_data( 1, { request : 'roosterwijzigingen', required : $(this).html() } );
		location.hash= "#5";
		$("#main-top-bar-back").fadeIn('fast');
		localStorage.setItem('second_selected_class', $(this).html());

		if( menu_is_open ) {
			menu_is_open = false;
			application.close_menu();
		}
	});

/*
	FUNC : Going back after selecting (the wrong) class
	*/
	$("#main-top-bar-back").click(function() {
		location.hash = "#2";
		application.request_data( 2, { request : 'klassen', required : localStorage.selected_location } );
		$("#main-top-bar-back").fadeOut('fast');
		menu_is_open = false;
		application.close_menu();
	});

/*
	FUNC : Making the menu toggleable
	*/
	$("#main-top-bar-show-hide-menu").click(function() {
		if( menu_is_open ) {
			menu_is_open = false;
			application.close_menu();
			return;
		}
		menu_is_open = true;
		application.open_menu();
	});

/*
	FUNC : Reloading the page after clicked on refresh
	*/
	$("#main-top-bar-refresh").click(function() {
		application.reload_page();
	});

/*
	FUNC : Styling the push notification checkbox and handling the changes
	*/
	$(".push-checkbox").niceCheck().change(function() {
		checkbox_value = $(this).is(':checked');
		if( checkbox_value ) {
			application.process_notification( {
				push      : 'on',
				type      : localStorage.getItem('user_agent'),
				device_id : localStorage.getItem('device_id'),
				klas      : localStorage.getItem('selected_class'),
				locatie   : localStorage.getItem('selected_location'),
			} );
			localStorage.setItem('checkbox_active', 'yes');
		} else {
			application.process_notification( {
				push      : 'off',
				type      : localStorage.getItem('user_agent'),
				device_id : localStorage.getItem('device_id'),
				klas      : localStorage.getItem('selected_class'),
				locatie   : localStorage.getItem('selected_location'),
			} );
			localStorage.setItem('checkbox_active', 'no');
		}
	});

/*
	FUNC : Swiping to open / close menu
	*/
	$("#main-section").swipe( {
		tap: function(e, t) {
			e.stopPropagation();
			jQuery(t).trigger('click');
		},
		swipeLeft: function() {
			if(menu_is_open) {
				menu_is_open = false;
				application.close_menu();
			}
		},
		swipeRight: function() {
			if(!menu_is_open) {
				menu_is_open = true;
				application.open_menu();
			}
		}
	} );
};
