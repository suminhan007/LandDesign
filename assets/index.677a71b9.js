import Ge,{createElement as Aa,useContext as Na,useMemo as oe,useState as F,useEffect as P,useRef as K,useCallback as it,Fragment as eo}from"react";import Sa from"react-dom";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var Dr={},wn=Sa;Dr.createRoot=wn.createRoot,Dr.hydrateRoot=wn.hydrateRoot;var ce=function(){return ce=Object.assign||function(r){for(var n,o=1,a=arguments.length;o<a;o++){n=arguments[o];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])}return r},ce.apply(this,arguments)};function qt(e,r,n){if(n||arguments.length===2)for(var o=0,a=r.length,i;o<a;o++)(i||!(o in r))&&(i||(i=Array.prototype.slice.call(r,0,o)),i[o]=r[o]);return e.concat(i||Array.prototype.slice.call(r))}var G="-ms-",wt="-moz-",V="-webkit-",to="comm",er="rule",Qr="decl",La="@import",ro="@keyframes",Da="@layer",no=Math.abs,en=String.fromCharCode,$r=Object.assign;function $a(e,r){return ie(e,0)^45?(((r<<2^ie(e,0))<<2^ie(e,1))<<2^ie(e,2))<<2^ie(e,3):0}function oo(e){return e.trim()}function $e(e,r){return(e=r.exec(e))?e[0]:e}function M(e,r,n){return e.replace(r,n)}function Tt(e,r,n){return e.indexOf(r,n)}function ie(e,r){return e.charCodeAt(r)|0}function ut(e,r,n){return e.slice(r,n)}function Ae(e){return e.length}function ao(e){return e.length}function yt(e,r){return r.push(e),e}function ja(e,r){return e.map(r).join("")}function En(e,r){return e.filter(function(n){return!$e(n,r)})}var tr=1,lt=1,io=0,ge=0,re=0,pt="";function rr(e,r,n,o,a,i,u,s){return{value:e,root:r,parent:n,type:o,props:a,children:i,line:tr,column:lt,length:u,return:"",siblings:s}}function Me(e,r){return $r(rr("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},r)}function We(e){for(;e.root;)e=Me(e.root,{children:[e]});yt(e,e.siblings)}function Ta(){return re}function Ra(){return re=ge>0?ie(pt,--ge):0,lt--,re===10&&(lt=1,tr--),re}function be(){return re=ge<io?ie(pt,ge++):0,lt++,re===10&&(lt=1,tr++),re}function qe(){return ie(pt,ge)}function Rt(){return ge}function nr(e,r){return ut(pt,e,r)}function jr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ia(e){return tr=lt=1,io=Ae(pt=e),ge=0,[]}function Ma(e){return pt="",e}function Er(e){return oo(nr(ge-1,Tr(e===91?e+2:e===40?e+1:e)))}function Oa(e){for(;(re=qe())&&re<33;)be();return jr(e)>2||jr(re)>3?"":" "}function za(e,r){for(;--r&&be()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return nr(e,Rt()+(r<6&&qe()==32&&be()==32))}function Tr(e){for(;be();)switch(re){case e:return ge;case 34:case 39:e!==34&&e!==39&&Tr(re);break;case 40:e===41&&Tr(e);break;case 92:be();break}return ge}function _a(e,r){for(;be()&&e+re!==47+10;)if(e+re===42+42&&qe()===47)break;return"/*"+nr(r,ge-1)+"*"+en(e===47?e:be())}function Pa(e){for(;!jr(qe());)be();return nr(e,ge)}function Ha(e){return Ma(It("",null,null,null,[""],e=Ia(e),0,[0],e))}function It(e,r,n,o,a,i,u,s,c){for(var d=0,p=0,g=u,v=0,b=0,h=0,w=1,m=1,x=1,E=0,C="",A=a,S=i,N=o,D=C;m;)switch(h=E,E=be()){case 40:if(h!=108&&ie(D,g-1)==58){Tt(D+=M(Er(E),"&","&\f"),"&\f",no(d?s[d-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:D+=Er(E);break;case 9:case 10:case 13:case 32:D+=Oa(h);break;case 92:D+=za(Rt()-1,7);continue;case 47:switch(qe()){case 42:case 47:yt(Va(_a(be(),Rt()),r,n,c),c);break;default:D+="/"}break;case 123*w:s[d++]=Ae(D)*x;case 125*w:case 59:case 0:switch(E){case 0:case 125:m=0;case 59+p:x==-1&&(D=M(D,/\f/g,"")),b>0&&Ae(D)-g&&yt(b>32?Cn(D+";",o,n,g-1,c):Cn(M(D," ","")+";",o,n,g-2,c),c);break;case 59:D+=";";default:if(yt(N=Fn(D,r,n,d,p,a,s,C,A=[],S=[],g,i),i),E===123)if(p===0)It(D,r,N,N,A,i,g,s,S);else switch(v===99&&ie(D,3)===110?100:v){case 100:case 108:case 109:case 115:It(e,N,N,o&&yt(Fn(e,N,N,0,0,a,s,C,a,A=[],g,S),S),a,S,g,s,o?A:S);break;default:It(D,N,N,N,[""],S,0,s,S)}}d=p=b=0,w=x=1,C=D="",g=u;break;case 58:g=1+Ae(D),b=h;default:if(w<1){if(E==123)--w;else if(E==125&&w++==0&&Ra()==125)continue}switch(D+=en(E),E*w){case 38:x=p>0?1:(D+="\f",-1);break;case 44:s[d++]=(Ae(D)-1)*x,x=1;break;case 64:qe()===45&&(D+=Er(be())),v=qe(),p=g=Ae(C=D+=Pa(Rt())),E++;break;case 45:h===45&&Ae(D)==2&&(w=0)}}return i}function Fn(e,r,n,o,a,i,u,s,c,d,p,g){for(var v=a-1,b=a===0?i:[""],h=ao(b),w=0,m=0,x=0;w<o;++w)for(var E=0,C=ut(e,v+1,v=no(m=u[w])),A=e;E<h;++E)(A=oo(m>0?b[E]+" "+C:M(C,/&\f/g,b[E])))&&(c[x++]=A);return rr(e,r,n,a===0?er:s,c,d,p,g)}function Va(e,r,n,o){return rr(e,r,n,to,en(Ta()),ut(e,2,-2),0,o)}function Cn(e,r,n,o,a){return rr(e,r,n,Qr,ut(e,0,o),ut(e,o+1,-1),o,a)}function uo(e,r,n){switch($a(e,r)){case 5103:return V+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return V+e+e;case 4789:return wt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return V+e+wt+e+G+e+e;case 5936:switch(ie(e,r+11)){case 114:return V+e+G+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return V+e+G+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return V+e+G+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return V+e+G+e+e;case 6165:return V+e+G+"flex-"+e+e;case 5187:return V+e+M(e,/(\w+).+(:[^]+)/,V+"box-$1$2"+G+"flex-$1$2")+e;case 5443:return V+e+G+"flex-item-"+M(e,/flex-|-self/g,"")+($e(e,/flex-|baseline/)?"":G+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return V+e+G+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return V+e+G+M(e,"shrink","negative")+e;case 5292:return V+e+G+M(e,"basis","preferred-size")+e;case 6060:return V+"box-"+M(e,"-grow","")+V+e+G+M(e,"grow","positive")+e;case 4554:return V+M(e,/([^-])(transform)/g,"$1"+V+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,V+"$1"),/(image-set)/,V+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,V+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,V+"box-pack:$3"+G+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+V+e+e;case 4200:if(!$e(e,/flex-|baseline/))return G+"grid-column-align"+ut(e,r)+e;break;case 2592:case 3360:return G+M(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(o,a){return r=a,$e(o.props,/grid-\w+-end/)})?~Tt(e+(n=n[r].value),"span",0)?e:G+M(e,"-start","")+e+G+"grid-row-span:"+(~Tt(n,"span",0)?$e(n,/\d+/):+$e(n,/\d+/)-+$e(e,/\d+/))+";":G+M(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(o){return $e(o.props,/grid-\w+-start/)})?e:G+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,V+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ae(e)-1-r>6)switch(ie(e,r+1)){case 109:if(ie(e,r+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+V+"$2-$3$1"+wt+(ie(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~Tt(e,"stretch",0)?uo(M(e,"stretch","fill-available"),r,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,a,i,u,s,c,d){return G+a+":"+i+d+(u?G+a+"-span:"+(s?c:+c-+i)+d:"")+e});case 4949:if(ie(e,r+6)===121)return M(e,":",":"+V)+e;break;case 6444:switch(ie(e,ie(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+V+(ie(e,14)===45?"inline-":"")+"box$3$1"+V+"$2$3$1"+G+"$2box$3")+e;case 100:return M(e,":",":"+G)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function Zt(e,r){for(var n="",o=0;o<e.length;o++)n+=r(e[o],o,e,r)||"";return n}function Ua(e,r,n,o){switch(e.type){case Da:if(e.children.length)break;case La:case Qr:return e.return=e.return||e.value;case to:return"";case ro:return e.return=e.value+"{"+Zt(e.children,o)+"}";case er:if(!Ae(e.value=e.props.join(",")))return""}return Ae(n=Zt(e.children,o))?e.return=e.value+"{"+n+"}":""}function qa(e){var r=ao(e);return function(n,o,a,i){for(var u="",s=0;s<r;s++)u+=e[s](n,o,a,i)||"";return u}}function Za(e){return function(r){r.root||(r=r.return)&&e(r)}}function Ga(e,r,n,o){if(e.length>-1&&!e.return)switch(e.type){case Qr:e.return=uo(e.value,e.length,n);return;case ro:return Zt([Me(e,{value:M(e.value,"@","@"+V)})],o);case er:if(e.length)return ja(n=e.props,function(a){switch($e(a,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":We(Me(e,{props:[M(a,/:(read-\w+)/,":"+wt+"$1")]})),We(Me(e,{props:[a]})),$r(e,{props:En(n,o)});break;case"::placeholder":We(Me(e,{props:[M(a,/:(plac\w+)/,":"+V+"input-$1")]})),We(Me(e,{props:[M(a,/:(plac\w+)/,":"+wt+"$1")]})),We(Me(e,{props:[M(a,/:(plac\w+)/,G+"input-$1")]})),We(Me(e,{props:[a]})),$r(e,{props:En(n,o)});break}return""})}}var Xa={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},st=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",lo="active",so="data-styled-version",or="6.1.12",tn=`/*!sc*/
`,Gt=typeof window<"u"&&"HTMLElement"in window,Ya=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),ar=Object.freeze([]),ct=Object.freeze({});function Ka(e,r,n){return n===void 0&&(n=ct),e.theme!==n.theme&&e.theme||r||n.theme}var co=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ja=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Wa=/(^-|-$)/g;function kn(e){return e.replace(Ja,"-").replace(Wa,"")}var Qa=/(a)(d)/gi,St=52,Bn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Rr(e){var r,n="";for(r=Math.abs(e);r>St;r=r/St|0)n=Bn(r%St)+n;return(Bn(r%St)+n).replace(Qa,"$1-$2")}var Fr,po=5381,nt=function(e,r){for(var n=r.length;n;)e=33*e^r.charCodeAt(--n);return e},ho=function(e){return nt(po,e)};function ei(e){return Rr(ho(e)>>>0)}function ti(e){return e.displayName||e.name||"Component"}function Cr(e){return typeof e=="string"&&!0}var fo=typeof Symbol=="function"&&Symbol.for,mo=fo?Symbol.for("react.memo"):60115,ri=fo?Symbol.for("react.forward_ref"):60112,ni={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},oi={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},go={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ai=((Fr={})[ri]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fr[mo]=go,Fr);function An(e){return("type"in(r=e)&&r.type.$$typeof)===mo?go:"$$typeof"in e?ai[e.$$typeof]:ni;var r}var ii=Object.defineProperty,ui=Object.getOwnPropertyNames,Nn=Object.getOwnPropertySymbols,li=Object.getOwnPropertyDescriptor,si=Object.getPrototypeOf,Sn=Object.prototype;function vo(e,r,n){if(typeof r!="string"){if(Sn){var o=si(r);o&&o!==Sn&&vo(e,o,n)}var a=ui(r);Nn&&(a=a.concat(Nn(r)));for(var i=An(e),u=An(r),s=0;s<a.length;++s){var c=a[s];if(!(c in oi||n&&n[c]||u&&c in u||i&&c in i)){var d=li(r,c);try{ii(e,c,d)}catch{}}}}return e}function dt(e){return typeof e=="function"}function rn(e){return typeof e=="object"&&"styledComponentId"in e}function Ve(e,r){return e&&r?"".concat(e," ").concat(r):e||r||""}function Ln(e,r){if(e.length===0)return"";for(var n=e[0],o=1;o<e.length;o++)n+=r?r+e[o]:e[o];return n}function Ft(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ir(e,r,n){if(n===void 0&&(n=!1),!n&&!Ft(e)&&!Array.isArray(e))return r;if(Array.isArray(r))for(var o=0;o<r.length;o++)e[o]=Ir(e[o],r[o]);else if(Ft(r))for(var o in r)e[o]=Ir(e[o],r[o]);return e}function nn(e,r){Object.defineProperty(e,"toString",{value:r})}function kt(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var ci=function(){function e(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return e.prototype.indexOfGroup=function(r){for(var n=0,o=0;o<r;o++)n+=this.groupSizes[o];return n},e.prototype.insertRules=function(r,n){if(r>=this.groupSizes.length){for(var o=this.groupSizes,a=o.length,i=a;r>=i;)if((i<<=1)<0)throw kt(16,"".concat(r));this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(var u=a;u<i;u++)this.groupSizes[u]=0}for(var s=this.indexOfGroup(r+1),c=(u=0,n.length);u<c;u++)this.tag.insertRule(s,n[u])&&(this.groupSizes[r]++,s++)},e.prototype.clearGroup=function(r){if(r<this.length){var n=this.groupSizes[r],o=this.indexOfGroup(r),a=o+n;this.groupSizes[r]=0;for(var i=o;i<a;i++)this.tag.deleteRule(o)}},e.prototype.getGroup=function(r){var n="";if(r>=this.length||this.groupSizes[r]===0)return n;for(var o=this.groupSizes[r],a=this.indexOfGroup(r),i=a+o,u=a;u<i;u++)n+="".concat(this.tag.getRule(u)).concat(tn);return n},e}(),Mt=new Map,Xt=new Map,Ot=1,Lt=function(e){if(Mt.has(e))return Mt.get(e);for(;Xt.has(Ot);)Ot++;var r=Ot++;return Mt.set(e,r),Xt.set(r,e),r},di=function(e,r){Ot=r+1,Mt.set(e,r),Xt.set(r,e)},pi="style[".concat(st,"][").concat(so,'="').concat(or,'"]'),hi=new RegExp("^".concat(st,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),fi=function(e,r,n){for(var o,a=n.split(","),i=0,u=a.length;i<u;i++)(o=a[i])&&e.registerName(r,o)},mi=function(e,r){for(var n,o=((n=r.textContent)!==null&&n!==void 0?n:"").split(tn),a=[],i=0,u=o.length;i<u;i++){var s=o[i].trim();if(s){var c=s.match(hi);if(c){var d=0|parseInt(c[1],10),p=c[2];d!==0&&(di(p,d),fi(e,p,c[3]),e.getTag().insertRules(d,a)),a.length=0}else a.push(s)}}},Dn=function(e){for(var r=document.querySelectorAll(pi),n=0,o=r.length;n<o;n++){var a=r[n];a&&a.getAttribute(st)!==lo&&(mi(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function gi(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var yo=function(e){var r=document.head,n=e||r,o=document.createElement("style"),a=function(s){var c=Array.from(s.querySelectorAll("style[".concat(st,"]")));return c[c.length-1]}(n),i=a!==void 0?a.nextSibling:null;o.setAttribute(st,lo),o.setAttribute(so,or);var u=gi();return u&&o.setAttribute("nonce",u),n.insertBefore(o,i),o},vi=function(){function e(r){this.element=yo(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var o=document.styleSheets,a=0,i=o.length;a<i;a++){var u=o[a];if(u.ownerNode===n)return u}throw kt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(r,n){try{return this.sheet.insertRule(n,r),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},e.prototype.getRule=function(r){var n=this.sheet.cssRules[r];return n&&n.cssText?n.cssText:""},e}(),yi=function(){function e(r){this.element=yo(r),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(r,n){if(r<=this.length&&r>=0){var o=document.createTextNode(n);return this.element.insertBefore(o,this.nodes[r]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},e.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},e}(),bi=function(){function e(r){this.rules=[],this.length=0}return e.prototype.insertRule=function(r,n){return r<=this.length&&(this.rules.splice(r,0,n),this.length++,!0)},e.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},e.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},e}(),$n=Gt,xi={isServer:!Gt,useCSSOMInjection:!Ya},bo=function(){function e(r,n,o){r===void 0&&(r=ct),n===void 0&&(n={});var a=this;this.options=ce(ce({},xi),r),this.gs=n,this.names=new Map(o),this.server=!!r.isServer,!this.server&&Gt&&$n&&($n=!1,Dn(this)),nn(this,function(){return function(i){for(var u=i.getTag(),s=u.length,c="",d=function(g){var v=function(x){return Xt.get(x)}(g);if(v===void 0)return"continue";var b=i.names.get(v),h=u.getGroup(g);if(b===void 0||!b.size||h.length===0)return"continue";var w="".concat(st,".g").concat(g,'[id="').concat(v,'"]'),m="";b!==void 0&&b.forEach(function(x){x.length>0&&(m+="".concat(x,","))}),c+="".concat(h).concat(w,'{content:"').concat(m,'"}').concat(tn)},p=0;p<s;p++)d(p);return c}(a)})}return e.registerId=function(r){return Lt(r)},e.prototype.rehydrate=function(){!this.server&&Gt&&Dn(this)},e.prototype.reconstructWithOptions=function(r,n){return n===void 0&&(n=!0),new e(ce(ce({},this.options),r),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(r=function(n){var o=n.useCSSOMInjection,a=n.target;return n.isServer?new bi(a):o?new vi(a):new yi(a)}(this.options),new ci(r)));var r},e.prototype.hasNameForId=function(r,n){return this.names.has(r)&&this.names.get(r).has(n)},e.prototype.registerName=function(r,n){if(Lt(r),this.names.has(r))this.names.get(r).add(n);else{var o=new Set;o.add(n),this.names.set(r,o)}},e.prototype.insertRules=function(r,n,o){this.registerName(r,n),this.getTag().insertRules(Lt(r),o)},e.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},e.prototype.clearRules=function(r){this.getTag().clearGroup(Lt(r)),this.clearNames(r)},e.prototype.clearTag=function(){this.tag=void 0},e}(),wi=/&/g,Ei=/^\s*\/\/.*$/gm;function xo(e,r){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(r," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(r," ")),n.props=n.props.map(function(o){return"".concat(r," ").concat(o)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=xo(n.children,r)),n})}function Fi(e){var r,n,o,a=e===void 0?ct:e,i=a.options,u=i===void 0?ct:i,s=a.plugins,c=s===void 0?ar:s,d=function(v,b,h){return h.startsWith(n)&&h.endsWith(n)&&h.replaceAll(n,"").length>0?".".concat(r):v},p=c.slice();p.push(function(v){v.type===er&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(wi,n).replace(o,d))}),u.prefix&&p.push(Ga),p.push(Ua);var g=function(v,b,h,w){b===void 0&&(b=""),h===void 0&&(h=""),w===void 0&&(w="&"),r=w,n=b,o=new RegExp("\\".concat(n,"\\b"),"g");var m=v.replace(Ei,""),x=Ha(h||b?"".concat(h," ").concat(b," { ").concat(m," }"):m);u.namespace&&(x=xo(x,u.namespace));var E=[];return Zt(x,qa(p.concat(Za(function(C){return E.push(C)})))),E};return g.hash=c.length?c.reduce(function(v,b){return b.name||kt(15),nt(v,b.name)},po).toString():"",g}var Ci=new bo,Mr=Fi(),wo=Ge.createContext({shouldForwardProp:void 0,styleSheet:Ci,stylis:Mr});wo.Consumer;Ge.createContext(void 0);function jn(){return Na(wo)}var ki=function(){function e(r,n){var o=this;this.inject=function(a,i){i===void 0&&(i=Mr);var u=o.name+i.hash;a.hasNameForId(o.id,u)||a.insertRules(o.id,u,i(o.rules,u,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=n,nn(this,function(){throw kt(12,String(o.name))})}return e.prototype.getName=function(r){return r===void 0&&(r=Mr),this.name+r.hash},e}(),Bi=function(e){return e>="A"&&e<="Z"};function Tn(e){for(var r="",n=0;n<e.length;n++){var o=e[n];if(n===1&&o==="-"&&e[0]==="-")return e;Bi(o)?r+="-"+o.toLowerCase():r+=o}return r.startsWith("ms-")?"-"+r:r}var Eo=function(e){return e==null||e===!1||e===""},Fo=function(e){var r,n,o=[];for(var a in e){var i=e[a];e.hasOwnProperty(a)&&!Eo(i)&&(Array.isArray(i)&&i.isCss||dt(i)?o.push("".concat(Tn(a),":"),i,";"):Ft(i)?o.push.apply(o,qt(qt(["".concat(a," {")],Fo(i),!1),["}"],!1)):o.push("".concat(Tn(a),": ").concat((r=a,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||r in Xa||r.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return o};function Ze(e,r,n,o){if(Eo(e))return[];if(rn(e))return[".".concat(e.styledComponentId)];if(dt(e)){if(!dt(i=e)||i.prototype&&i.prototype.isReactComponent||!r)return[e];var a=e(r);return Ze(a,r,n,o)}var i;return e instanceof ki?n?(e.inject(n,o),[e.getName(o)]):[e]:Ft(e)?Fo(e):Array.isArray(e)?Array.prototype.concat.apply(ar,e.map(function(u){return Ze(u,r,n,o)})):[e.toString()]}function Ai(e){for(var r=0;r<e.length;r+=1){var n=e[r];if(dt(n)&&!rn(n))return!1}return!0}var Ni=ho(or),Si=function(){function e(r,n,o){this.rules=r,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&Ai(r),this.componentId=n,this.baseHash=nt(Ni,n),this.baseStyle=o,bo.registerId(n)}return e.prototype.generateAndInjectStyles=function(r,n,o){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,n,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=Ve(a,this.staticRulesId);else{var i=Ln(Ze(this.rules,r,n,o)),u=Rr(nt(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,u)){var s=o(i,".".concat(u),void 0,this.componentId);n.insertRules(this.componentId,u,s)}a=Ve(a,u),this.staticRulesId=u}else{for(var c=nt(this.baseHash,o.hash),d="",p=0;p<this.rules.length;p++){var g=this.rules[p];if(typeof g=="string")d+=g;else if(g){var v=Ln(Ze(g,r,n,o));c=nt(c,v+p),d+=v}}if(d){var b=Rr(c>>>0);n.hasNameForId(this.componentId,b)||n.insertRules(this.componentId,b,o(d,".".concat(b),void 0,this.componentId)),a=Ve(a,b)}}return a},e}(),Co=Ge.createContext(void 0);Co.Consumer;var kr={};function Li(e,r,n){var o=rn(e),a=e,i=!Cr(e),u=r.attrs,s=u===void 0?ar:u,c=r.componentId,d=c===void 0?function(A,S){var N=typeof A!="string"?"sc":kn(A);kr[N]=(kr[N]||0)+1;var D="".concat(N,"-").concat(ei(or+N+kr[N]));return S?"".concat(S,"-").concat(D):D}(r.displayName,r.parentComponentId):c,p=r.displayName,g=p===void 0?function(A){return Cr(A)?"styled.".concat(A):"Styled(".concat(ti(A),")")}(e):p,v=r.displayName&&r.componentId?"".concat(kn(r.displayName),"-").concat(r.componentId):r.componentId||d,b=o&&a.attrs?a.attrs.concat(s).filter(Boolean):s,h=r.shouldForwardProp;if(o&&a.shouldForwardProp){var w=a.shouldForwardProp;if(r.shouldForwardProp){var m=r.shouldForwardProp;h=function(A,S){return w(A,S)&&m(A,S)}}else h=w}var x=new Si(n,v,o?a.componentStyle:void 0);function E(A,S){return function(N,D,q){var O=N.attrs,ae=N.componentStyle,H=N.defaultProps,$=N.foldedComponentIds,Y=N.styledComponentId,W=N.target,Z=Ge.useContext(Co),R=jn(),z=N.shouldForwardProp||R.shouldForwardProp,Ee=Ka(D,Z,H)||ct,he=function(Ye,Le,Te){for(var Re,Fe=ce(ce({},Le),{className:void 0,theme:Te}),Ke=0;Ke<Ye.length;Ke+=1){var Je=dt(Re=Ye[Ke])?Re(Fe):Re;for(var Ce in Je)Fe[Ce]=Ce==="className"?Ve(Fe[Ce],Je[Ce]):Ce==="style"?ce(ce({},Fe[Ce]),Je[Ce]):Je[Ce]}return Le.className&&(Fe.className=Ve(Fe.className,Le.className)),Fe}(O,D,Ee),fe=he.as||W,Se={};for(var le in he)he[le]===void 0||le[0]==="$"||le==="as"||le==="theme"&&he.theme===Ee||(le==="forwardedAs"?Se.as=he.forwardedAs:z&&!z(le,fe)||(Se[le]=he[le]));var _e=function(Ye,Le){var Te=jn(),Re=Ye.generateAndInjectStyles(Le,Te.styleSheet,Te.stylis);return Re}(ae,he),Pe=Ve($,Y);return _e&&(Pe+=" "+_e),he.className&&(Pe+=" "+he.className),Se[Cr(fe)&&!co.has(fe)?"class":"className"]=Pe,Se.ref=q,Aa(fe,Se)}(C,A,S)}E.displayName=g;var C=Ge.forwardRef(E);return C.attrs=b,C.componentStyle=x,C.displayName=g,C.shouldForwardProp=h,C.foldedComponentIds=o?Ve(a.foldedComponentIds,a.styledComponentId):"",C.styledComponentId=v,C.target=o?a.target:e,Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(A){this._foldedDefaultProps=o?function(S){for(var N=[],D=1;D<arguments.length;D++)N[D-1]=arguments[D];for(var q=0,O=N;q<O.length;q++)Ir(S,O[q],!0);return S}({},a.defaultProps,A):A}}),nn(C,function(){return".".concat(C.styledComponentId)}),i&&vo(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}function Rn(e,r){for(var n=[e[0]],o=0,a=r.length;o<a;o+=1)n.push(r[o],e[o+1]);return n}var In=function(e){return Object.assign(e,{isCss:!0})};function Di(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];if(dt(e)||Ft(e))return In(Ze(Rn(ar,qt([e],r,!0))));var o=e;return r.length===0&&o.length===1&&typeof o[0]=="string"?Ze(o):In(Ze(Rn(o,r)))}function Or(e,r,n){if(n===void 0&&(n=ct),!r)throw kt(1,r);var o=function(a){for(var i=[],u=1;u<arguments.length;u++)i[u-1]=arguments[u];return e(r,n,Di.apply(void 0,qt([a],i,!1)))};return o.attrs=function(a){return Or(e,r,ce(ce({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},o.withConfig=function(a){return Or(e,r,ce(ce({},n),a))},o}var ko=function(e){return Or(Li,e)},B=ko;co.forEach(function(e){B[e]=ko(e)});var ir={exports:{}},ur={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $i=Ge,ji=Symbol.for("react.element"),Ti=Symbol.for("react.fragment"),Ri=Object.prototype.hasOwnProperty,Ii=$i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mi={key:!0,ref:!0,__self:!0,__source:!0};function Bo(e,r,n){var o,a={},i=null,u=null;n!==void 0&&(i=""+n),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(u=r.ref);for(o in r)Ri.call(r,o)&&!Mi.hasOwnProperty(o)&&(a[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)a[o]===void 0&&(a[o]=r[o]);return{$$typeof:ji,type:e,key:i,ref:u,props:a,_owner:Ii.current}}ur.Fragment=Ti;ur.jsx=Bo;ur.jsxs=Bo;(function(e){e.exports=ur})(ir);const _=ir.exports.Fragment,t=ir.exports.jsx,l=ir.exports.jsxs,U=({show:e,content:r,theme:n="light",placement:o="top",hideArrow:a=!1,style:i,className:u=""})=>{if(!!r)return l(Oi,{className:`land-pop ${e?"show":""} ${n} ${u}`,style:{top:o==="bottom"?"100%":o==="top"?"auto":"50%",bottom:o==="top"?"100%":"",left:o==="right"?"100%":o==="left"?"auto":"50%",right:o==="left"?"100%":"",transform:`translate(${o==="top"||o==="bottom"?"-50%":o==="left"?"-12px":"12px"}, ${o==="top"?"-12px":o==="bottom"?"12px":"-50%"})`,...i},hideArrow:a,children:[r,!a&&t("div",{className:"land-pop-arrow",style:{left:o==="left"?"100%":o==="right"?"0":"50%",top:o==="top"?"100%":o==="bottom"?"0px":"50%",bottom:o==="bottom"?"100%":"",transform:`translate(-50%, -50%) rotate(${o==="top"?"45":o==="bottom"?"-135":o==="right"?"135":"-45"}deg)`}})]})},Oi=B.div`
  position: absolute;
  padding: 8px 12px;
  width: max-content;
  font-size: 12px;
  color: var(--color-text-3);
  border-radius: 6px;
  background-color: var(--color-bg-white);
  box-shadow: var(--boxshadow-small);
  border: var(--border-1) solid var(--color-border-1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.15s linear;
  z-index: 100;
  .land-pop-arrow {
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    border-right: var(--border-1) solid var(--color-border-1);
    border-bottom: var(--border-1) solid var(--color-border-1);
    border-bottom-right-radius: var(--radius-4);
    background-color: var(--color-bg-white);
  }
  &.dark {
    background-color: ${e=>e.hideArrow?"rgba(0,0,0,0.68)":"var(--color-text-2)"};
    color: var(--color-text-light);
    border: 0;
    .land-pop-arrow {
      background-color: var(--color-text-2);
      border: 0;
    }
  }
  &.show{
    opacity: 1;
    pointer-events: auto;
  }
`,zi=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`arrow-line ${a}`,children:[t("path",{d:"M24 42V6",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M36 30L24 42L12 30",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),_i=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`arrow-double ${a}`,children:[t("path",{d:"M31 17L24 24L17 17",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M31 26L24 33L17 26",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),Pi=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>t("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`arrow ${a}`,children:t("path",{d:"M36 18L24 30L12 18",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})}),Hi=({fill:e="currentcolor",stroke:r="currentcolor",size:n=16,strokeWidth:o=2,style:a,className:i=""})=>t("svg",{width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:`arrow-triangle ${i}`,children:t("path",{d:"M36 19L24 31L12 19H36Z",fill:o===0?e:"none",stroke:o===0?"none":r,strokeWidth:o,strokeLinejoin:"round"})}),Vi=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`arrow-to ${a}`,children:[t("path",{d:"M24.0083 33.8995V6",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M36 22L24 34L12 22",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M36 42H12",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),Ui=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`arrow-nav ${a}`,children:[t("path",{d:"M14 12L26 24L14 36",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M34 12V36",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),qi=({fill:e="currentcolor",stroke:r="currentcolor",size:n=16,strokeWidth:o=2,style:a,className:i=""})=>t("svg",{fill:"none",viewBox:"0 0 24 24",width:n,height:n,className:`increase ${i}`,style:a,children:t("path",{d:"M15 12h4.5L12 2 4.5 12H9v10h6V12z",fill:o===0?e:"none",stroke:o===0?"none":r,strokeWidth:o})}),Zi=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`toggle ${a}`,children:[t("path",{d:"M6 9L42 9",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M6 19L42 19",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M6 26L24 40L42 26",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),Gi=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`collapse ${a}`,children:[t("path",{d:"M44 20H28V4",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M4 28H20V44",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),Xi=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`collection ${a}`,children:[t("path",{d:"M40.9898 8.02661H12.1818C9.45455 8.02661 4 9.55073 4 15.9674C4 22.3841 9.45455 24.0001 12.1818 24.0001H35.9939C38.7211 24.0001 44 25.5681 44 31.9848C44 38.4014 38.7211 40.0031 35.9939 40.0031H6.06499",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M8.04567 35.9927L4.06738 40.0592L8.04567 44.0001",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M38.0427 3.95386L42.021 8.02038L38.0427 11.9612",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),Yi=({stroke:e="currentcolor",size:r=20,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:o,className:`search ${a}`,children:[t("path",{d:"M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",fill:"none",stroke:e,strokeWidth:n,strokeLinejoin:"round"}),t("path",{d:"M33.2216 33.2217L41.7069 41.707",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),Ki=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`zoom-in-arrow ${a}`,children:[t("path",{d:"M6 6L16 15.8995",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M6 41.8995L16 32",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M42.0001 41.8995L32.1006 32",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M41.8995 6L32 15.8995",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M33 6H42V15",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M42 33V42H33",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M15 42H6V33",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M6 15V6H15",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),Ji=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`zoom-out-arrow ${a}`,children:[t("path",{d:"M6 6L16 15.8995",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M6 41.8995L16 32",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M42.0001 41.8995L32.1006 32",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M41.8995 6L32 15.8995",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M32 7V16H41",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M16 7V16H7",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M16 41V32H7",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M32 41V32H40.8995",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),Wi=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`zoom-in ${a}`,children:[t("path",{d:"M33 6H42V15",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M42 33V42H33",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M15 42H6V33",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M6 15V6H15",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),Qi=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`zoom-out ${a}`,children:[t("path",{d:"M33 6V15H42",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M15 6V15H6",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M15 42V33H6",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M33 42V33H41.8995",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),eu=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`loop ${a}`,children:[t("path",{d:"M43.8233 25.2305C43.7019 25.9889 43.5195 26.727 43.2814 27.4395C42.763 28.9914 41.9801 30.4222 40.9863 31.6785C38.4222 34.9201 34.454 37 30 37H16C9.39697 37 4 31.6785 4 25C4 18.3502 9.39624 13 16 13H44",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M38 7L44 13L38 19",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),tu=({stroke:e="currentcolor",size:r=16,strokeWidth:n=3,style:o,className:a="",onClick:i})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`download ${a}`,onClick:i,children:[t("path",{d:"M6 24.0083V42H42V24",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M33 23L24 32L15 23",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M23.9917 6V32",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),ru=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`out ${a}`,children:[t("path",{d:"M23.9917 6H6V42H24",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M33 33L42 24L33 15",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M16 23.9917H42",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),nu=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`reload ${a}`,children:[t("path",{d:"M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M42 8V17H33",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),ou=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`undo ${a}`,children:[t("path",{d:"M11.2721 36.7279C14.5294 39.9853 19.0294 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C19.0294 6 14.5294 8.01472 11.2721 11.2721C9.61407 12.9301 6 17 6 17",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M6 9V17H14",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),au=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`sort ${a}`,children:[t("path",{d:"M19 6V42",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M7 17.8994L19 5.89941",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M29 42.1006V6.10059",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M29 42.1006L41 30.1006",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),iu=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`back ${a}`,children:[t("path",{d:"M10 33C10 25.7011 14.103 19.4168 20 16.5919C22.1347 15.5693 24.5046 15 27 15C36.3888 15 44 23.0589 44 33",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M18 28L10 33L4 25",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),uu=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`ahead ${a}`,children:[t("path",{d:"M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M30 28L38 33L44 25",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),lu=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`drag ${a}`,children:[t("path",{d:"M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M30 28L38 33L44 25",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),su=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`refresh ${a}`,children:[t("path",{d:"M42 8V24",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M6 24L6 40",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),cu=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`check-stroke ${a}`,children:[t("path",{d:"M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",fill:"none",stroke:e,strokeWidth:n,strokeLinejoin:"round"}),t("path",{d:"M16 24L22 30L34 18",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),du=({fill:e="currentcolor",size:r=16,style:n,className:o=""})=>t("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:n,className:`check-fill ${o}`,children:t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM11.4142 24C11.4142 24.4142 11.7475 24.7475 12.4142 25.4142L19.5858 32.5858C20.2525 33.2525 20.5858 33.5858 21 33.5858C21.4142 33.5858 21.7475 33.2525 22.4142 32.5858L36.2525 18.7475C36.9191 18.0809 37.2525 17.7475 37.2525 17.3333C37.2525 16.9191 36.9191 16.5858 36.2525 15.9191L35.7475 15.4142C35.0809 14.7475 34.7475 14.4142 34.3333 14.4142C33.9191 14.4142 33.5858 14.7475 32.9191 15.4142L22.4142 25.9191C21.7475 26.5858 21.4142 26.9191 21 26.9191C20.5858 26.9191 20.2525 26.5858 19.5858 25.9191L15.7475 22.0809C15.0809 21.4142 14.7475 21.0809 14.3333 21.0809C13.9191 21.0809 13.5858 21.4142 12.9191 22.0809L12.4142 22.5858C11.7475 23.2525 11.4142 23.5858 11.4142 24Z",fill:e})}),pu=({fill:e="currentcolor",stroke:r="currentcolor",size:n=16,strokeWidth:o=2,style:a,className:i=""})=>t("svg",{width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:`check ${i}`,children:t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.41421 25.9142C2.74755 25.2475 2.41421 24.9142 2.41421 24.5C2.41421 24.0858 2.74755 23.7525 3.41421 23.0858L6.08579 20.4142C6.75245 19.7475 7.08579 19.4142 7.5 19.4142C7.91421 19.4142 8.24755 19.7475 8.91421 20.4142L17.0858 28.5858C17.7525 29.2525 18.0858 29.5858 18.5 29.5858C18.9142 29.5858 19.2475 29.2525 19.9142 28.5858L39.0858 9.41421C39.7525 8.74755 40.0858 8.41421 40.5 8.41421C40.9142 8.41421 41.2475 8.74755 41.9142 9.41421L44.5858 12.0858C45.2525 12.7525 45.5858 13.0858 45.5858 13.5C45.5858 13.9142 45.2525 14.2475 44.5858 14.9142L19.9142 39.5858C19.2475 40.2525 18.9142 40.5858 18.5 40.5858C18.0858 40.5858 17.7525 40.2525 17.0858 39.5858L3.41421 25.9142Z",fill:o===0?e:"none",stroke:o===0?"none":r,strokeWidth:o})}),hu=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`error-stroke ${a}`,children:[t("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:"none",stroke:e,strokeWidth:n,strokeLinejoin:"round"}),t("path",{d:"M29.6567 18.3432L18.343 29.6569",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M18.3433 18.3432L29.657 29.6569",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),fu=({fill:e="currentcolor",size:r=16,style:n,className:o=""})=>t("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:n,className:`error-fill ${o}`,children:t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM14.4146 16.8059C14.4258 17.2036 14.7468 17.5246 15.3889 18.1667L19.808 22.5858C20.4747 23.2525 20.808 23.5858 20.808 24C20.808 24.4142 20.4747 24.7475 19.808 25.4142L15.3889 29.8333C14.7468 30.4754 14.4258 30.7964 14.4146 31.1941C14.4141 31.2128 14.4141 31.2316 14.4146 31.2503C14.4258 31.648 14.7468 31.9691 15.3889 32.6111C16.0309 33.2532 16.352 33.5742 16.7497 33.5854C16.7684 33.5859 16.7872 33.5859 16.8059 33.5854C17.2036 33.5742 17.5246 33.2532 18.1667 32.6111L22.5858 28.192C23.2525 27.5253 23.5858 27.192 24 27.192C24.4142 27.192 24.7475 27.5253 25.4142 28.192L29.8333 32.6111C30.4754 33.2532 30.7964 33.5742 31.1941 33.5854C31.2128 33.5859 31.2316 33.5859 31.2503 33.5854C31.648 33.5742 31.9691 33.2532 32.6111 32.6111C33.2532 31.9691 33.5742 31.648 33.5854 31.2503C33.5859 31.2316 33.5859 31.2128 33.5854 31.1941C33.5742 30.7964 33.2532 30.4754 32.6111 29.8333L28.192 25.4142C27.5253 24.7475 27.192 24.4142 27.192 24C27.192 23.5858 27.5253 23.2525 28.192 22.5858L32.6111 18.1667C33.2532 17.5246 33.5742 17.2036 33.5854 16.8059C33.5859 16.7872 33.5859 16.7684 33.5854 16.7497C33.5742 16.352 33.2532 16.0309 32.6111 15.3889C31.9691 14.7468 31.648 14.4258 31.2503 14.4146C31.2316 14.4141 31.2128 14.4141 31.1941 14.4146C30.7964 14.4258 30.4754 14.7468 29.8333 15.3889L25.4142 19.808C24.7475 20.4747 24.4142 20.808 24 20.808C23.5858 20.808 23.2525 20.4747 22.5858 19.808L18.1667 15.3889C17.5246 14.7468 17.2036 14.4258 16.8059 14.4146C16.7872 14.4141 16.7684 14.4141 16.7497 14.4146C16.352 14.4258 16.0309 14.7468 15.3889 15.3889C14.7468 16.0309 14.4258 16.352 14.4146 16.7497C14.4141 16.7684 14.4141 16.7872 14.4146 16.8059Z",fill:e})}),mu=({fill:e="currentcolor",stroke:r="currentcolor",size:n=16,strokeWidth:o=2,style:a,className:i=""})=>t("svg",{width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:`error ${i}`,children:t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.41421 8.25217C2.74755 7.58551 2.41421 7.25218 2.41421 6.83796C2.41421 6.42375 2.74755 6.09042 3.41421 5.42375L5.42375 3.41421C6.09042 2.74755 6.42375 2.41421 6.83796 2.41421C7.25218 2.41421 7.58551 2.74755 8.25218 3.41421L18.0025 13.1645C18.6691 13.8312 19.0025 14.1645 19.4167 14.1645C19.8309 14.1645 20.1642 13.8312 20.8309 13.1645L30.5812 3.41421C31.2478 2.74755 31.5812 2.41421 31.9954 2.41421C32.4096 2.41421 32.7429 2.74755 33.4096 3.41421L35.4191 5.42375C36.0858 6.09042 36.4191 6.42375 36.4191 6.83796C36.4191 7.25218 36.0858 7.58551 35.4191 8.25218L25.6688 18.0025C25.0022 18.6691 24.6688 19.0025 24.6688 19.4167C24.6688 19.8309 25.0022 20.1642 25.6688 20.8309L35.4191 30.5812C36.0858 31.2478 36.4191 31.5812 36.4191 31.9954C36.4191 32.4096 36.0858 32.7429 35.4191 33.4096L33.4096 35.4191C32.7429 36.0858 32.4096 36.4191 31.9954 36.4191C31.5812 36.4191 31.2478 36.0858 30.5812 35.4191L20.8309 25.6688C20.1642 25.0022 19.8309 24.6688 19.4167 24.6688C19.0025 24.6688 18.6691 25.0022 18.0025 25.6688L8.25217 35.4191C7.58551 36.0858 7.25218 36.4191 6.83796 36.4191C6.42375 36.4191 6.09042 36.0858 5.42375 35.4191L3.41421 33.4096C2.74755 32.7429 2.41421 32.4096 2.41421 31.9954C2.41421 31.5812 2.74755 31.2478 3.41421 30.5812L13.1645 20.8309C13.8312 20.1642 14.1645 19.8309 14.1645 19.4167C14.1645 19.0025 13.8312 18.6691 13.1645 18.0025L3.41421 8.25217Z",fill:o===0?e:"none",stroke:o===0?"none":r,strokeWidth:o})}),gu=({size:e=16,stroke:r="currentcolor",style:n,className:o=""})=>t("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",style:n,className:`info-stroke ${o}`,children:t("path",{d:"M24 18.8889V26.8333V34.7778M24 16.3333V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",stroke:r,strokeWidth:"2"})}),vu=({fill:e="currentcolor",size:r=16,style:n,className:o=""})=>t("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:n,className:`info-fill ${o}`,children:t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 12.5C26.5 13.4428 26.5 13.9142 26.2071 14.2071C25.9142 14.5 25.4428 14.5 24.5 14.5H24C23.0572 14.5 22.5858 14.5 22.2929 14.2071C22 13.9142 22 13.4428 22 12.5V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V12.5ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V21.5C22 20.5572 22 20.0858 22.2929 19.7929C22.5858 19.5 23.0572 19.5 24 19.5H24.5C25.4428 19.5 25.9142 19.5 26.2071 19.7929C26.5 20.0858 26.5 20.5572 26.5 21.5V36.5Z",fill:e})}),yu=({fill:e="currentcolor",stroke:r="currentcolor",size:n=16,strokeWidth:o=2,style:a,className:i=""})=>l("svg",{width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:`info ${i}`,children:[t("path",{d:"M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41L21 21C21 20.0572 21 19.5858 21.2929 19.2929C21.5858 19 22.0572 19 23 19H26C26.9428 19 27.4142 19 27.7071 19.2929C28 19.5858 28 20.0572 28 21L28 41Z",fill:o===0?e:"none",stroke:o===0?"none":r,strokeWidth:o}),t("path",{d:"M28 10C28 10.9428 28 11.4142 27.7071 11.7071C27.4142 12 26.9428 12 26 12H23C22.0572 12 21.5858 12 21.2929 11.7071C21 11.4142 21 10.9428 21 10V7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5L26 5C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7V10Z",fill:o===0?e:"none",stroke:o===0?"none":r,strokeWidth:o})]}),bu=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>t("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`attention-stroke ${a}`,children:t("path",{d:"M24 34.7778V32M24 29V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",stroke:e,strokeWidth:n})}),xu=({fill:e="currentcolor",size:r=16,style:n,className:o=""})=>t("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:n,className:`attention-fill ${o}`,children:t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 27C26.5 27.9428 26.5 28.4142 26.2071 28.7071C25.9142 29 25.4428 29 24.5 29H24C23.0572 29 22.5858 29 22.2929 28.7071C22 28.4142 22 27.9428 22 27V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V27ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V36C22 35.0572 22 34.5858 22.2929 34.2929C22.5858 34 23.0572 34 24 34H24.5C25.4428 34 25.9142 34 26.2071 34.2929C26.5 34.5858 26.5 35.0572 26.5 36V36.5Z",fill:e})}),wu=({fill:e="currentcolor",stroke:r="currentcolor",size:n=16,strokeWidth:o=2,style:a,className:i=""})=>l("svg",{width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:`attention ${i}`,children:[t("path",{d:"M28 27C28 27.9428 28 28.4142 27.7071 28.7071C27.4142 29 26.9428 29 26 29H23C22.0572 29 21.5858 29 21.2929 28.7071C21 28.4142 21 27.9428 21 27L21 7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5H26C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7L28 27Z",fill:o===0?e:"none",stroke:o===0?"none":r,strokeWidth:o}),t("path",{d:"M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41V38C21 37.0572 21 36.5858 21.2929 36.2929C21.5858 36 22.0572 36 23 36H26C26.9428 36 27.4142 36 27.7071 36.2929C28 36.5858 28 37.0572 28 38V41Z",fill:o===0?e:"none",stroke:o===0?"none":r,strokeWidth:o})]}),Eu=({stroke:e="currentcolor",size:r=16,strokeWidth:n=2,style:o,className:a=""})=>t("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`question-stroke ${a}`,children:t("path",{d:"M24 34.7778V32M24 29V13.2222M47 24C47 36.7024 36.7024 47 24 47C11.2976 47 1 36.7024 1 24C1 11.2976 11.2976 1 24 1C36.7024 1 47 11.2976 47 24Z",stroke:e,strokeWidth:n})}),Fu=({fill:e="currentcolor",size:r=16,style:n,className:o=""})=>t("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:n,className:`question-fill ${o}`,children:t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM26.5 27C26.5 27.9428 26.5 28.4142 26.2071 28.7071C25.9142 29 25.4428 29 24.5 29H24C23.0572 29 22.5858 29 22.2929 28.7071C22 28.4142 22 27.9428 22 27V12C22 11.0572 22 10.5858 22.2929 10.2929C22.5858 10 23.0572 10 24 10H24.5C25.4428 10 25.9142 10 26.2071 10.2929C26.5 10.5858 26.5 11.0572 26.5 12V27ZM26.5 36.5C26.5 37.4428 26.5 37.9142 26.2071 38.2071C25.9142 38.5 25.4428 38.5 24.5 38.5H24C23.0572 38.5 22.5858 38.5 22.2929 38.2071C22 37.9142 22 37.4428 22 36.5V36C22 35.0572 22 34.5858 22.2929 34.2929C22.5858 34 23.0572 34 24 34H24.5C25.4428 34 25.9142 34 26.2071 34.2929C26.5 34.5858 26.5 35.0572 26.5 36V36.5Z",fill:e})}),Cu=({fill:e="currentcolor",stroke:r="currentcolor",size:n=16,strokeWidth:o=2,style:a,className:i=""})=>l("svg",{width:n,height:n,viewBox:"0 0 48 48",fill:"none",style:a,className:`question ${i}`,children:[t("path",{d:"M28 27C28 27.9428 28 28.4142 27.7071 28.7071C27.4142 29 26.9428 29 26 29H23C22.0572 29 21.5858 29 21.2929 28.7071C21 28.4142 21 27.9428 21 27L21 7C21 6.05719 21 5.58579 21.2929 5.29289C21.5858 5 22.0572 5 23 5H26C26.9428 5 27.4142 5 27.7071 5.29289C28 5.58579 28 6.05719 28 7L28 27Z",fill:o===0?e:"none",stroke:o===0?"none":r,strokeWidth:o}),t("path",{d:"M28 41C28 41.9428 28 42.4142 27.7071 42.7071C27.4142 43 26.9428 43 26 43H23C22.0572 43 21.5858 43 21.2929 42.7071C21 42.4142 21 41.9428 21 41V38C21 37.0572 21 36.5858 21.2929 36.2929C21.5858 36 22.0572 36 23 36H26C26.9428 36 27.4142 36 27.7071 36.2929C28 36.5858 28 37.0572 28 38V41Z",fill:o===0?e:"none",stroke:o===0?"none":r,strokeWidth:o})]}),ku=({size:e=16,stroke:r="currentcolor",strokeWidth:n=4,className:o="",style:a})=>l("svg",{width:e,height:e,viewBox:"0 0 48 48",className:`file ${o}`,style:a,children:[t("path",{d:"M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",fill:"none",stroke:r,strokeWidth:n,strokeLinejoin:"round"}),t("path",{d:"M43 22H5",stroke:r,strokeWidth:"4",strokeLinejoin:"round"})]}),Bu=({size:e=16,fill:r="currentcolor",className:n="",style:o})=>l("svg",{width:e,height:e,viewBox:"0 0 48 48",className:`more ${n}`,style:o,children:[t("circle",{cx:"12",cy:"24",r:"4",fill:r}),t("circle",{cx:"24",cy:"24",r:"4",fill:r}),t("circle",{cx:"36",cy:"24",r:"4",fill:r})]}),Au=({size:e=16,stroke:r="currentcolor",strokeWidth:n=4,className:o="",style:a})=>l("svg",{width:e,height:e,viewBox:"0 0 48 48",className:`more-line ${o}`,style:a,children:[t("path",{d:"M7.94971 11.9497H39.9497",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M7.94971 23.9497H39.9497",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M7.94971 35.9497H39.9497",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),Nu=({size:e=16,stroke:r="currentcolor",strokeWidth:n,className:o="",style:a})=>l("svg",{width:e,height:e,viewBox:"0 0 48 48",className:`add ${o}`,style:a,children:[t("path",{d:"M24.0605 10L24.0239 38",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M10 24L38 24",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),Su=({size:e=16,stroke:r="currentColor",className:n="",onClick:o})=>t("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`dec ${n}`,onClick:o,children:t("path",{d:"M10.5 24L38.5 24",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Lu=({size:e=16,stroke:r="currentcolor",strokeWidth:n=2,className:o="",style:a,onClick:i})=>l("svg",{width:e,height:e,viewBox:"0 0 48 48",className:`clear ${o}`,style:a,onClick:i,children:[t("path",{d:"M14 14L34 34",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M14 34L34 14",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),Du=({size:e=20,fill:r="currentcolor",className:n=""})=>l("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`application ${n}`,children:[t("path",{d:"M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z",fill:r}),t("path",{d:"M24 14C26.2091 14 28 12.2091 28 10C28 7.79086 26.2091 6 24 6C21.7909 6 20 7.79086 20 10C20 12.2091 21.7909 14 24 14Z",fill:r}),t("path",{d:"M38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10C34 12.2091 35.7909 14 38 14Z",fill:r}),t("path",{d:"M10 28C12.2091 28 14 26.2091 14 24C14 21.7909 12.2091 20 10 20C7.79086 20 6 21.7909 6 24C6 26.2091 7.79086 28 10 28Z",fill:r}),t("path",{d:"M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z",fill:r}),t("path",{d:"M38 28C40.2091 28 42 26.2091 42 24C42 21.7909 40.2091 20 38 20C35.7909 20 34 21.7909 34 24C34 26.2091 35.7909 28 38 28Z",fill:r}),t("path",{d:"M10 42C12.2091 42 14 40.2091 14 38C14 35.7909 12.2091 34 10 34C7.79086 34 6 35.7909 6 38C6 40.2091 7.79086 42 10 42Z",fill:r}),t("path",{d:"M24 42C26.2091 42 28 40.2091 28 38C28 35.7909 26.2091 34 24 34C21.7909 34 20 35.7909 20 38C20 40.2091 21.7909 42 24 42Z",fill:r}),t("path",{d:"M38 42C40.2091 42 42 40.2091 42 38C42 35.7909 40.2091 34 38 34C35.7909 34 34 35.7909 34 38C34 40.2091 35.7909 42 38 42Z",fill:r})]}),$u=({size:e=20,stroke:r="currentcolor",strokeWidth:n=3,className:o=""})=>l("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",className:`upload ${o}`,xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M6 24.0083V42H42V24",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M33 15L24 6L15 15",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M23.9917 32V6",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),ju=({size:e=20,stroke:r="currentcolor",strokeWidth:n=2,className:o="",onClick:a})=>l("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`close ${o}`,onClick:a,children:[t("path",{d:"M14 14L34 34",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M14 34L34 14",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),Tu=({fill:e,stroke:r="currentcolor",size:n=20,strokeWidth:o=2,className:a="",onClick:i})=>l("svg",{width:n,height:n,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`close-circle ${a}`,onClick:i,children:[t("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:e||"none",stroke:e||r,strokeWidth:o,strokeLinejoin:"round"}),t("path",{d:"M29.6567 18.3432L18.343 29.6569",stroke:e?"#fff":"none",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M18.3433 18.3432L29.657 29.6569",stroke:e?"white":"none",strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"})]}),Ru=({fill:e="currentcolor",size:r=20,className:n=""})=>t("svg",{width:r,height:r,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:`color-picker ${n}`,children:t("path",{d:"M762.517333 121.194667a49.621333 49.621333 0 0 1 70.144 0L902.826667 191.36a49.6 49.6 0 0 1 0 70.101333l-140.309334 140.309334 70.144 70.122666a49.578667 49.578667 0 0 1-16.085333 80.896 49.578667 49.578667 0 0 1-54.058667-10.752l-43.818666-43.818666-319.893334 319.829333a353.706667 353.706667 0 0 1-175.424 95.637333l-8.661333 1.578667a95.637333 95.637333 0 0 1-105.557333-116.48 360.128 360.128 0 0 1 96.106666-172.928L525.866667 305.322667l-43.818667-43.861334a49.642667 49.642667 0 0 1 15.296-82.176 49.6 49.6 0 0 1 54.826667 12.074667l70.144 70.101333 140.266666-140.266666h-0.042666z m-184.106666 236.714666L257.877333 678.485333a285.738667 285.738667 0 0 0-72.597333 123.136l-3.669333 14.037334a21.205333 21.205333 0 0 0 25.152 25.514666l15.146666-3.669333a279.296 279.296 0 0 0 124.309334-72.021333l319.872-319.893334-87.637334-87.68z",fill:e})}),Iu=({fill:e,stroke:r="currentcolor",size:n=16,strokeWidth:o=2,className:a=""})=>l("svg",{width:n,height:n,viewBox:"0 0 48 48",fill:"none",className:`copy ${a}`,children:[t("path",{d:"M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",fill:e||"none",stroke:e||r,strokeWidth:o,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",fill:e||"none",stroke:e||r,strokeWidth:o,strokeLinejoin:"round"})]}),Mu=({stroke:e="currentColor",size:r=24,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",style:o,className:`home ${a}`,children:[t("path",{d:"M9 18V42H39V18L24 6L9 18Z",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M19 29V42H29V29H19Z",stroke:e,strokeWidth:n,strokeLinejoin:"round"})]}),Ou=({stroke:e="currentColor",size:r=24,strokeWidth:n=2,fill:o,style:a,className:i=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:a,className:`light ${i}`,children:[t("path",{d:"M9.15039 9.15088L11.3778 11.3783",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M3 24H6.15",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M9.15039 38.8495L11.3778 36.6221",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M38.8495 38.8495L36.6221 36.6221",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M44.9996 24H41.8496",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M38.8495 9.15088L36.6221 11.3783",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M24 3V6.15",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z",fill:o||"none",stroke:o||e,strokeWidth:n,strokeLinejoin:"round"}),t("path",{d:"M24 45.0001V41.8501",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),zu=({stroke:e="currentColor",size:r=24,fill:n,strokeWidth:o=2,style:a,className:i=""})=>t("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:a,className:`dark ${i}`,children:t("path",{d:"M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z",fill:n||"none",stroke:n||e,strokeWidth:o,strokeLinejoin:"round"})}),_u=({stroke:e="currentColor",size:r=24,fill:n,strokeWidth:o=2,style:a,className:i=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:a,className:`setting ${i}`,children:[t("path",{d:"M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z",fill:n||"none",stroke:n||e,strokeWidth:o,strokeLinejoin:"round"}),t("path",{d:"M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",fill:n||"none",stroke:n||e,strokeWidth:o,strokeLinejoin:"round"})]}),Pu=({size:e=24,fill:r="currentColor",style:n,className:o=""})=>t("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:n,className:`video-play ${o}`,children:t("path",{d:"M16.875 3.75V16.25C16.875 16.5815 16.7433 16.8995 16.5089 17.1339C16.2745 17.3683 15.9565 17.5 15.625 17.5H12.5C12.1685 17.5 11.8505 17.3683 11.6161 17.1339C11.3817 16.8995 11.25 16.5815 11.25 16.25V3.75C11.25 3.41848 11.3817 3.10054 11.6161 2.86612C11.8505 2.6317 12.1685 2.5 12.5 2.5H15.625C15.9565 2.5 16.2745 2.6317 16.5089 2.86612C16.7433 3.10054 16.875 3.41848 16.875 3.75ZM7.5 2.5H4.375C4.04348 2.5 3.72554 2.6317 3.49112 2.86612C3.2567 3.10054 3.125 3.41848 3.125 3.75V16.25C3.125 16.5815 3.2567 16.8995 3.49112 17.1339C3.72554 17.3683 4.04348 17.5 4.375 17.5H7.5C7.83152 17.5 8.14946 17.3683 8.38388 17.1339C8.6183 16.8995 8.75 16.5815 8.75 16.25V3.75C8.75 3.41848 8.6183 3.10054 8.38388 2.86612C8.14946 2.6317 7.83152 2.5 7.5 2.5Z",fill:r,strokeLinejoin:"round",strokeLinecap:"round"})}),Hu=({size:e=24,fill:r="currentColor",style:n,className:o=""})=>t("svg",{width:e,height:e,viewBox:"0 0 21 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:n,className:`video-pause ${o}`,children:t("path",{d:"M14.3077 9.79704C15.2308 10.3317 15.2308 11.6683 14.3077 12.203L8.07693 15.8118C7.15385 16.3465 6 15.6782 6 14.6089V7.39113C6 6.32183 7.15385 5.65352 8.07692 6.18817L14.3077 9.79704Z",fill:r,strokeLinejoin:"round"})}),Vu=({stroke:e="currentColor",strokeWidth:r=2,size:n=24,style:o,className:a="",onClick:i})=>l("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:o,className:`volume ${a}`,onClick:i,children:[t("path",{d:"M12 3V21L5.89925 16.4195H3C2.44771 16.4195 2 15.9718 2 15.4195V8.5054C2 7.9531 2.44771 7.5054 3 7.5054H5.89925L12 3Z",fill:"none",stroke:e,strokeWidth:r,strokeLinejoin:"round"}),t("path",{d:"M16 7.5C16.3116 7.77825 16.5941 8.08985 16.8421 8.4294C17.5694 9.4252 18 10.6611 18 12C18 13.3273 17.5768 14.5534 16.8609 15.5447C16.6084 15.8943 16.3196 16.2147 16 16.5",fill:"none",stroke:e,strokeWidth:r,strokeLinejoin:"round",strokeLinecap:"round"}),t("path",{d:"M17.1172 20.5931C20.041 18.8479 21.9992 15.6527 21.9992 12.0002C21.9992 8.40447 20.1014 5.25197 17.2527 3.48975",fill:"none",stroke:e,strokeWidth:r,strokeLinejoin:"round",strokeLinecap:"round"})]}),Uu=({stroke:e="currentColor",strokeWidth:r=4,size:n=24,style:o,className:a="",onClick:i})=>l("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",onClick:i,style:o,className:`volume-muted ${a}`,children:[t("path",{d:"M12 3V21L5.89925 16.4195H3C2.44771 16.4195 2 15.9718 2 15.4195V8.5054C2 7.9531 2.44771 7.5054 3 7.5054H5.89925L12 3Z",fill:"none",stroke:e,strokeWidth:r,strokeLinejoin:"round"}),t("path",{d:"M20.3674 10.1431L16.1248 14.3857",fill:"none",stroke:e,strokeWidth:r,strokeLinejoin:"round",strokeLinecap:"round"}),t("path",{d:"M16.1248 10.1431L20.3674 14.3857",fill:"none",stroke:e,strokeWidth:r,strokeLinejoin:"round",strokeLinecap:"round"})]}),qu=({stroke:e="currentColor",size:r=24,fill:n,strokeWidth:o=2,style:a,className:i=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:a,className:`video-small-screen ${i}`,children:[t("path",{d:"M16 40H6C4.89543 40 4 39.1046 4 38V10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V16",fill:n||"none",stroke:n||e,strokeWidth:o,strokeLinejoin:"round"}),t("path",{d:"M42 24H26C24.8954 24 24 24.8954 24 26V38C24 39.1046 24.8954 40 26 40H42C43.1046 40 44 39.1046 44 38V26C44 24.8954 43.1046 24 42 24Z",fill:n||"none",stroke:n||e,strokeWidth:o,strokeLinejoin:"round"})]}),Mn=({stroke:e="currentColor",size:r=24,fill:n,strokeWidth:o=2,style:a,className:i="",reverse:u})=>l("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:a,className:`video-full-width ${i}`,children:[t("path",{d:u?"M18.5459 15.364L15.3639 12.182L18.5459 9.00005":"M15.1816 9L18.3636 12.182L15.1816 15.364",fill:n||"none",stroke:n||e,strokeWidth:o,strokeLinejoin:"round"}),t("path",{d:u?"M5.18164 9.00024L8.36362 12.1822L5.18164 15.3642":"M8.18164 15.364L4.99966 12.182L8.18164 9.00005",fill:n||"none",stroke:n||e,strokeWidth:o,strokeLinejoin:"round"}),t("rect",{x:o/2,y:"4.5",width:24-o,height:"16",rx:"2",fill:n||"none",stroke:n||e,strokeWidth:o,strokeLinejoin:"round"})]}),Zu=({stroke:e="currentColor",size:r=24,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:o,className:`avatar ${a}`,children:[t("circle",{cx:"24",cy:"12",r:"8",fill:"none",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"})]}),Gu=({stroke:e="currentColor",size:r=24,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:o,className:`delete ${a}`,children:[t("path",{d:"M9 10V44H39V10H9Z",fill:"none",stroke:e,strokeWidth:n,strokeLinejoin:"round"}),t("path",{d:"M20 20V33",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M28 20V33",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M4 10H44",stroke:e,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M16 10L19.289 4H28.7771L32 10H16Z",fill:"none",stroke:e,strokeWidth:n,strokeLinejoin:"round"})]}),Xu=({stroke:e="currentColor",size:r=24,strokeWidth:n=2,style:o,className:a=""})=>l("svg",{width:r,height:r,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:o,className:`tag ${a}`,children:[t("path",{d:"M42.1691 29.2451L29.2631 42.1511C28.5879 42.8271 27.6716 43.2069 26.7161 43.2069C25.7606 43.2069 24.8444 42.8271 24.1691 42.1511L8 26V8H26L42.1691 24.1691C43.5649 25.5732 43.5649 27.841 42.1691 29.2451Z",fill:"none",stroke:e,strokeWidth:n,strokeLinejoin:"round"}),t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z",fill:e})]}),Yu=({stroke:e="currentColor",size:r=24,fill:n="var(--color-text-1)",strokeWidth:o,value:a,style:i,className:u=""})=>l("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:i,className:`single-number ${u}`,children:[t("circle",{cx:"12",cy:"12",r:12,fill:o?"none":n,stroke:o?e:"none",strokeWidth:o}),t("text",{x:"9",y:"16",fontSize:12,fill:o?e:"white",children:a})]}),k=({name:e,...r})=>{switch(e){case"arrow-line":return t(zi,{...r});case"arrow-double":return t(_i,{...r});case"arrow":return t(Pi,{...r});case"arrow-triangle":return t(Hi,{...r});case"arrow-to":return t(Vi,{...r});case"arrow-nav":return t(Ui,{...r});case"arrow-increase":return t(qi,{...r});case"toggle":return t(Zi,{...r});case"collapse":return t(Gi,{...r});case"collection":return t(Xi,{...r});case"zoom-out":return t(Qi,{...r});case"zoom-in":return t(Wi,{...r});case"zoom-out-arrow":return t(Ji,{...r});case"zoom-in-arrow":return t(Ki,{...r});case"loop":return t(eu,{...r});case"download":return t(tu,{...r});case"out":return t(ru,{...r});case"reload":return t(nu,{...r});case"undo":return t(ou,{...r});case"sort":return t(au,{...r});case"back":return t(iu,{...r});case"ahead":return t(uu,{...r});case"drag":return t(lu,{...r});case"refresh":return t(su,{...r});case"check-stroke":return t(cu,{...r});case"check-fill":return t(du,{...r});case"check":return t(pu,{...r});case"error-stroke":return t(hu,{...r});case"error-fill":return t(fu,{...r});case"error":return t(mu,{...r});case"info-stroke":return t(gu,{...r});case"info-fill":return t(vu,{...r});case"info":return t(yu,{...r});case"attention-stroke":return t(bu,{...r});case"attention-fill":return t(xu,{...r});case"attention":return t(wu,{...r});case"question-stroke":return t(Eu,{...r});case"question-fill":return t(Fu,{...r});case"question":return t(Cu,{...r});case"more":return t(Bu,{...r});case"more-line":return t(Au,{...r});case"file":return t(ku,{...r});case"add":return t(Nu,{...r});case"dec":return t(Su,{...r});case"clear":return t(Lu,{...r});case"upload":return t($u,{...r});case"application":return t(Du,{...r});case"close":return t(ju,{...r});case"close-circle":return t(Tu,{...r});case"color-picker":return t(Ru,{...r});case"copy":return t(Iu,{...r});case"home":return t(Mu,{...r});case"search":return t(Yi,{...r});case"light":return t(Ou,{...r});case"dark":return t(zu,{...r});case"setting":return t(_u,{...r});case"video-play":return t(Pu,{...r});case"video-pause":return t(Hu,{...r});case"volume":return t(Vu,{...r});case"volume-muted":return t(Uu,{...r});case"video-small-screen":return t(qu,{...r});case"video-fulWidth":return t(Mn,{...r});case"video-contain-width":return t(Mn,{...r});case"avatar":return t(Zu,{...r});case"delete":return t(Gu,{...r});case"tag":return t(Xu,{...r});case"single-number":return t(Yu,{...r})}},f=({title:e,type:r="h1",prefix:n,sub:o,info:a,style:i,className:u="",onClick:s})=>l(Ku,{className:`land-title ${u}`,style:i,onClick:()=>s==null?void 0:s(),children:[n&&t("span",{className:"land-title-prefix",children:n}),r==="h1"&&t("h1",{children:e}),r==="h2"&&t("h2",{children:e}),r==="h3"&&t("h3",{children:e}),r==="p"&&t("p",{children:e}),a&&l("div",{className:"land-title-info hover-pop",children:[t(k,{name:"info-stroke",stroke:"var(--color-text-4)"}),t(U,{content:a,style:{maxWidth:"200px"}})]}),o&&typeof o=="string"?t("div",{className:"land-title-sub",children:o}):t(_,{children:o})]}),Ku=B.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  font-weight: 600;
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
  }
  .land-title-sub {
    position: absolute;
    top: -30%;
    right: -50%;
    padding: 2px 4px;
    font-size: 8px;
    font-weight: 400;
    color: white;
    background-color: #202023;
    border-radius: 4px;
  }
  .land-title-info {
    position: relative;
    display: flex;
    align-items: center;
  }
`,te=({direction:e="row",size:r=1,lang:n="100%",margin:o=0,type:a="solid",color:i="var(--color-border-2)",content:u,align:s="center",style:c,className:d=""})=>l(Ju,{className:`land-divider ${d}`,style:{width:e==="row"?`${n}`:`${r}px`,height:e==="column"?`${n}`:`${r}px`,margin:e==="row"?`${o}px 0`:`0 ${o}px`,...c},direction:e,gap:u?"8px":"",children:[t("div",{style:{flex:s==="left"?"10%":s==="right"?"90%":1,height:"0px",borderBottom:e==="row"?`${r}px ${a} ${i}`:"none",borderLeft:e==="column"?`${r}px ${a} ${i}`:"none"}}),u&&l(_,{children:[t("div",{style:{fontSize:"12px",color:"#999",writingMode:e==="column"?"vertical-rl":"unset",textOrientation:e==="column"?"upright":"unset"},children:u}),t("div",{style:{flex:s==="left"?"90%":s==="right"?"10%":1,height:"0px",borderBottom:e==="row"?`${r}px ${a} ${i}`:"none",borderLeft:e==="column"?`${r}px ${a} ${i}`:"none"}})]})]}),Ju=B.div`
  display: flex;
  flex-direction: ${e=>e.direction};
  align-items: center;
  gap: ${e=>e.gap};
`;var j=(e=>(e.SELF="self",e.OTHERS="others",e.SIMPLE="simple",e.DISABLED="disabled",e))(j||{});const ee=({active:e,data:r,direction:n="row",theme:o={hoverColor:"var(--color-text-1)",hoverBg:"var(--color-bg-1)",activeColor:"var(--color-text-1)"},border:a=!0,onChange:i,onDropChange:u,dropProps:s,itemStyle:c,itemClassName:d="",style:p,className:g=""})=>t(Wu,{className:`land-menu ${g}`,style:p,column:n==="column",border:a,children:r==null?void 0:r.map(v=>l("div",{className:`land-menu-item ${v.clickType==="simple"?"simple":""} ${v.clickType==="disabled"?"disabled":""}`,style:c,children:[l(Qu,{role:"button",className:`land-menu-link ${e===v.key?"active":""} ${d}`,onClick:()=>i==null?void 0:i(v),column:n==="column",theme:o,children:[typeof v.icon=="string"?t("img",{src:v.icon,className:"land-menu-icon"}):v.icon,t("p",{className:"land-menu-title","data-title":v.title,children:v.title}),t("span",{className:"land-menu-sub-title",children:v.subTitle}),v.isNew&&t("i",{className:"land-menu-new",children:typeof v.isNew=="boolean"?"NEW":v.isNew})]},v.key),v.dropData&&t("div",{className:`land-menu-drop-wrap ${v.open?"open":""}`,children:t("div",{className:"land-menu-drop",children:t(ee,{data:v.dropData,onChange:b=>u==null?void 0:u(b,v),direction:"column",...s})})})]}))}),Wu=B.div`
  display: flex;
  flex-direction: ${e=>e.column?"column":"row"};
  gap: var(--gap-4);
  height: ${e=>e.column?"":"100%"};
  width: ${e=>e.column?"100%":"fit-content"};
  border-bottom: ${e=>e.border&&!e.column?"var(--border-1) solid var(--color-border-1)":""};
  border-right: ${e=>e.border&&e.column?"var(--border-1) solid var(--color-border-1)":""};
  box-sizing: border-box;
  .land-menu-item {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: ${e=>e.column?"":"100%"};
    width: 100%;
    border-radius: var(--radius-4);
    transition: all var(--transition-15) linear;
    &.simple {
      cursor: default;
    }
    &.disabled {
      pointer-events: none;
      opacity: var(--opacity-68);
    }
    &:hover .land-menu-drop-wrap {
      opacity: 1;
      pointer-events: all;
      transform: scaleY(1);
    }
  }
  .land-menu-drop-wrap {
    width: 100%;
    .land-menu-drop {
      padding: 8px 0px;
    }
    &.open {
      padding: 0;
      .land-menu-link {
        padding-left: 32px;
      }
      .land-menu {
        position: static;
        border: none;
        padding: 0;
      }
    }
    &:not(.open) {
      position: absolute;
      top: 100%;
      left: 0;
      padding-top: 8px;
      z-index: 1;
      opacity: 0;
      transform: scaleY(0.8);
      transform-origin: top center;
      pointer-events: none;
      transition: all var(--transition-15) linear;
      .land-menu-drop {
        background-color: var(--color-bg-white);
        border-radius: var(--radius-8);
        box-shadow: var(--boxshadow-medium);
      }
    }
  }
`,Qu=B.a`
  position: relative;
  padding: var(--padding-medium);
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  font-size: var(--font-content-large);
  white-space: nowrap;
  box-sizing: border-box;
  transition: background-color var(--transition-15) linear;
  cursor: pointer;
  color: var(--color-text-3);
  &::after {
    content: "";
    display: block;
    position: absolute;
    right: ${e=>e.column?"0":"50%"};
    bottom: ${e=>e.column?"50%":"0"};
    width: ${e=>e.column?"2px":"12px"};
    height: ${e=>e.column?e.theme.activeBg?"100%":"calc(100% - 16px)":"2px"};
    transform: ${e=>e.column?"translateY(50%)":"translateX(50%)"};
    transform-origin: center center;
    border-radius: 1px;
    background-color: ${e=>e.theme.lineColor||"var(--color-text-1)"};
    opacity: 0;
  }
  &:hover {
    color: ${e=>e.theme.hoverColor};
    background-color: ${e=>e.theme.hoverBg};
    .land-menu-title::before {
      color: ${e=>e.theme.hoverColor};
      font-weight: 600;
    }
    svg path {
      stroke-width: 4px;
    }
  }
  &.active {
    color: ${e=>e.theme.hoverColor};
    background-color: ${e=>e.theme.activeBg};
    .land-menu-title::before {
      color: ${e=>e.theme.activeColor||"var(--color-text-1)"};
      font-weight: 600;
    }
    &::after {
      opacity: 1;
      transition: opacity var(--transition-15) linear;
    }
    svg path {
      stroke-width: 4px;
    }
  }
  .land-menu-title {
    position: relative;
    color: transparent;
    font-weight: 600;
    &::before {
      content: attr(data-title);
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      color: var(--color-text-3);
      font-weight: 400;
      text-align: center;
      line-height: 40px;
    }
  }

  svg,
  .land-menu-icon {
    width: 18px;
    height: 18px;
    margin-right: 4px;
  }
  svg path {
    stroke-width: 3px;
  }
  .land-menu-sub-title {
    font-size: var(--font-content-small);
    opacity: var(--opacity-68);
  }
  .land-menu-new {
    position: absolute;
    padding: var(--padding-small);
    top: -12px;
    right: -8px;
    font-size: var(--font-content-small);
    background-color: var(--color-link-1);
    color: var(--color-link-6);
    font-weight: 600;
    border-radius: 3px;
    box-sizing: border-box;
    transform: scale(0.65);
  }
  @media screen and (max-width: 800px) {
    font-size: var(--font-content-medium);
  }
`,L=({text:e,subText:r,icon:n,width:o,height:a,justify:i="center",type:u="border",status:s="default",size:c="default",disabled:d,pop:p,PopProps:g,href:v,target:b="_blank",onClick:h,children:w,style:m,className:x=""})=>{const E=oe(()=>{if(n){if(!e&&!r)return!0}else return!1},[n,e,r]),C=oe(()=>{switch(s){case"success":return"var(--color-green-";case"warning":return"var(--color-orange-";case"danger":return"var(--color-red-";case"primary":return"var(--color-primary-";default:return""}},[s]),A=oe(()=>{let S="36px";if(a)S=a;else switch(c){case"small":S="28px";break;case"default":S="36px";break;case"large":S="40px";break;default:S="36px";break}return S},[o,c]);return t(_,{children:v?l(el,{href:v,target:b,className:`land-button ${u} ${s} ${E?"iconOnly":""} ${d?"disabled":""} ${p?"hover-pop":""} ${x}`,style:m,width:o,height:a,justify:i,color:C,onClick:S=>h==null?void 0:h(S),children:[w,n,!E&&l("div",{children:[t("span",{children:e}),t("span",{className:"subText",children:r})]}),p&&t(U,{content:p,...g})]}):l(Ao,{className:`land-button ${u} ${s} ${E?"iconOnly":""} ${d?"disabled":""} ${p?"hover-pop":""} ${x}`,style:m,width:o,height:A,justify:i,color:C,onClick:S=>h==null?void 0:h(S),children:[w,n,!E&&l("div",{children:[t("span",{children:e}),r&&t("span",{className:"subText",children:r})]}),p&&t(U,{content:p,...g})]})})},Ao=B.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${e=>e.justify};
  gap: var(--gap-4);
  padding: ${e=>e.width&&e.width!=="100%"?"":"0 18px"};
  width: ${e=>e.width?e.width:"fit-content"};
  height: ${e=>e.height?e.height:"fit-content"};
  color: ${e=>e.color?`${e.color}6)`:"var(--color-text-2)"};
  &:hover:not(.disabled) {
    color: ${e=>e.color?`${e.color}5)`:"var(--color-text-3)"};
  }
  &:active:not(.disabled) {
    color: ${e=>e.color?`${e.color}7)`:"var(--color-text-1)"};
  }
  font-size: var(--font-content-medium);
  border-radius: var(--radius-6);
  box-sizing: border-box;
  transition: all var(--transition-15) linear;
  cursor: pointer;
  .subText {
    margin-left: 4px;
    font-size: var(--font-content-small);
    opacity: var(--opacity-68);
  }

  &.text,
  &.border.default {
    background-color: var(--color-bg-white);
    &:hover:not(.disabled) {
      background-color: var(--color-bg-1);
    }
    &:active:not(.disabled) {
      background-color: var(--color-bg-2);
    }
  }

  &.background {
    color: var(--color-text-white);
    background-color: ${e=>`${e.color}6)`};
    &.default {
      color: var(--color-text-2);
      background-color: var(--color-bg-2);
      &:hover:not(.disabled) {
        background-color: var(--color-bg-3);
      }
      &:active:not(.disabled) {
        background-color: var(--color-bg-3);
      }
    }
    &:hover:not(.disabled) {
      background-color: ${e=>`${e.color}7)`};
    }
    &:active:not(.disabled) {
      background-color: ${e=>`${e.color}8)`};
    }
  }

  &.border {
    padding: 7px 15px;
    border: ${e=>`var(--border-1) solid ${e.color}4)`};
    &.default {
      border-color: var(--color-border-2);
    }
    &:hover:not(.disabled) {
      background-color: ${e=>`${e.color}1)`};
    }
    &:active:not(.disabled) {
      background-color: ${e=>`${e.color}2)`};
    }
  }

  &.line {
    border-bottom: var(--border-1) solid transparent;
    border-color: ${e=>`${e.color}4)`};
    border-radius: 0;
    &.default {
      border-color: var(--color-text-2);
    }
    &:hover:not(.disabled) {
      border-color: ${e=>`${e.color}5)`};
    }
    &:active:not(.disabled) {
      border-color: ${e=>`${e.color}7)`};
    }
  }

  &.iconOnly {
    padding: 0;
    width: ${e=>e.height};
    height: ${e=>e.height};
  }
  &.disabled {
    background-color: ${e=>`${e.color}3)`};
    color: ${e=>e.color?`${e.color}4)`:"var(--color-text-5)"};
    cursor: not-allowed;
  }
`,el=B.a`
  ${Ao};
  text-decoration: none;
`,Yt=({h:e="64px",fixed:r,filter:n=0,borderBottom:o=!0,applications:a,logo:i,name:u,onLogoClick:s,divider:c=!0,align:d,menuProps:p,rightComponent:g,style:v,className:b=""})=>{var m;const[h,w]=F(!1);return P(()=>{window.onscroll=()=>w(!1),window.onresize=()=>w(!1)}),l(tl,{className:`land-header ${r?"fixed":""} ${b}`,style:v,height:e,filter:n,borderBottom:o,applications:Boolean(a),children:[l("div",{className:"land-header-logo",onClick:s,children:[a&&l("button",{className:"land-header-application",onClick:x=>x.stopPropagation(),children:[t(k,{name:"application"}),t("div",{className:"land-application-drop",children:a})]}),typeof i=="string"?t("img",{src:i}):i,c&&i&&u&&t(te,{direction:"column",lang:"24px"}),typeof u=="string"?t("img",{src:u}):u]}),t(rl,{className:"land-header-nav",align:d,showMobileNav:h,children:p&&t(ee,{border:!1,...p,onChange:x=>{var E;(E=p.onChange)==null||E.call(p,x),w(!1)},onDropChange:(x,E)=>{var C;(C=p.onDropChange)==null||C.call(p,x,E),w(!1)}})}),g&&t("div",{className:"land-header-btns",children:g}),p&&p.data&&((m=p.data)==null?void 0:m.length)>0&&t(L,{icon:t(k,{name:"more-line"}),type:"text",onClick:()=>w(!h)})]})},tl=B.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 0 24px;
  padding-left: ${e=>e.applications?"0":""};
  gap: var(--gap-32);
  width: 100%;
  height: ${e=>e.height};
  border-bottom: ${e=>e.borderBottom?"1px solid var(--color-border-2)":""};
  background: ${e=>e.filter?"rgba(255, 255, 255, 0.8)":"var(--color-bg-white)"};
  backdrop-filter: ${e=>e.filter?"var(--blur-small)":""};
  box-sizing: border-box;
  z-index: 1000;
  &.fixed {
    position: absolute;
    top: 0;
    left: 0;
  }
  .land-header-logo {
    display: flex;
    align-items: center;
    gap: var(--gap-12);
    height: 100%;
    cursor: pointer;
  }
  .land-header-application {
    appearance: none;
    border: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    height: 100%;
    background-color: var(--color-bg-1);
    &:hover .land-application-drop {
      transform: translate(0, 0);
      opacity: 1;
      pointer-events: all;
    }
  }
  .land-application-drop {
    position: absolute;
    left: 12px;
    top: 100%;
    padding: var(--padding-medium);
    background-color: var(--color-bg-white);
    border-radius: var(--radius-8);
    border: var(--border-1) solid var(--color-border-1);
    box-shadow: var(--boxshadow-medium);
    transform: translate(-12px, -40%);
    opacity: 0;
    pointer-events: none;
    transition: all var(--transition-15);
    will-change: transform, opacity;
    z-index: -1;
  }
  .land-header-btns {
    display: flex;
    align-items: center;
    gap: var(--gap-12);
  }
  .land-button {
    display: none;
  }
  @media screen and (max-width: 800px) {
    .land-button {
      display: flex;
    }
  }
`,rl=B.div`
  display: flex;
  flex: 1;
  justify-content: ${e=>e.align};
  height: 100%;
  .land-menu-item:hover .land-menu-drop-wrap {
    left: 50%;
    transform: translateX(-50%) scale(1);
  }
  .land-menu-drop-wrap {
    width: fit-content;
    &:not(.open) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  @media screen and (max-width: 800px) {
    position: fixed;
    top: 64px;
    right: 0px;
    flex: none;
    width: fit-content;
    height: fit-content;
    pointer-events: ${e=>e.showMobileNav?"all":"none"};
    display: ${e=>e.showMobileNav?"block":"none"};
    .land-menu {
      flex-direction: column;
      padding: 12px 4px;
      background: #fff;
      height: fit-content;
      border: 1px solid var(--color-border-1);
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      transition: opacity 0.2 linear;
      opacity: ${e=>e.showMobileNav?"1":"0"};
      .land-menu-link.active::after {
        opacity: 0;
      }
      .land-menu-drop-wrap {
        position: relative;
        opacity: 1;
        transform: scale(1);
        pointer-events: all;
        .land-menu-drop,
        .land-menu-drop .land-menu {
          border: none;
          box-shadow: none;
          padding: 0;
          text-indent: 1em;
        }
      }
    }
  }
`,Kt=({titleData:e,data:r=[],style:n,className:o=""})=>l(nl,{className:`land-table ${o}`,style:n,children:[t("thead",{children:t("tr",{children:e==null?void 0:e.map((a,i)=>t("th",{children:a.title},i))})}),t("tbody",{children:r.map(a=>t("tr",{children:Object.values(a).map(i=>t("td",{children:i}))}))})]}),nl=B.table`
    border-spacing: 0px;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    font-size: var(--font-content-medium);
    overflow: hidden;
    thead {
        background-color: #f9f9f9;
        td {
            text-align: center;
        }
    }
    tbody tr td{
        border-top: 1px solid #eaeaea;
    }
    thead tr th:not(:last-child),
    tbody tr td:not(:last-child) {
        border-right: 1px solid #eaeaea;
    }
    td,th {
        padding: var(--padding-medium);
        box-sizing: border-box;
        color: #333;
        line-height: 1.5em;
    }
`,No=({data:e,target:r=document.body,size:n,style:o,className:a})=>{const i=K(null),[u,s]=F(!1);return t(ol,{ref:i,className:`land-anchor-wrap ${a}`,style:o,children:t("ol",{className:"land-anchor-list",children:e==null?void 0:e.map(c=>t("li",{children:t("a",{href:c.href,className:`land-anchor-link ${u?"active":""}`,children:c.title})},c.title))})})},ol=B.nav`
  .land-anchor-list{
    display: flex;
    flex-direction: column;
    width: fit-content;
    list-style: none;
  }
  .land-anchor-link{
    display: inline-block;
    padding: var(--padding-medium);
    width: 100%;
    color: var(--color-text-2);
    border-left: 1px solid var(--color-border-2);
    transition: all var(--transition-15) linear;
    &:hover{
      background-color: var(--color-bg-1);
    }
    &.active {
      color: var(--color-primary-6);
      border-color: var(--color-primary-6);
    }
  }
`;function al(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u6309\u94AE\u7C7B\u578B",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(No,{data:[{key:"\u7EC4\u4EF6\u9884\u89C8",href:"#\u7EC4\u4EF6\u9884\u89C8",title:"\u7EC4\u4EF6\u9884\u89C8"},{key:"API",href:"#API",title:"API"},{key:"Type",href:"#Type",title:"Type"}]})}),t(f,{title:"\u6309\u94AE\u7981\u7528",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32"})]})})}const ze=({size:e=18,strokeSize:r=2,color:n="var(--color-text-1)",style:o,className:a=""})=>t(il,{className:`land-loading-container ${a}`,style:o,size:e,strokeSize:r,color:n}),il=B.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: ${e=>`${e.size}px`};
  width: ${e=>`${e.size}px`};
  -webkit-mask: ${e=>`radial-gradient(
      circle ${e.size/2-e.strokeSize}px,
      transparent 99%,
      #000 100%
    )`};
  mask: ${e=>`radial-gradient(
      circle ${e.size/2-e.strokeSize}px,
      transparent 99%,
      #000 100%
    )`};
  background-image: ${e=>`conic-gradient(transparent 25%, ${e.color})`};
  animation: spin 0.9s linear infinite;
  border-radius: 50%;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;function ul(){return l("div",{className:"flex column gap-24",children:[l("div",{className:"flex column gap-12",children:[t(f,{title:"\u6309\u94AE\u7C7B\u578B",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t(L,{text:"\u6309\u94AE",type:"text"}),t(L,{text:"\u6309\u94AE",type:"background"}),t(L,{text:"\u6309\u94AE",type:"border"}),t(L,{text:"\u6309\u94AE",type:"line"})]})]}),l("div",{className:"flex column gap-12",children:[t(f,{title:"\u6309\u94AE\u6837\u5F0F",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t(L,{text:"\u6309\u94AE",type:"text"}),t(L,{text:"\u6309\u94AE",type:"background"}),t(L,{text:"\u6309\u94AE",type:"border"}),t(L,{text:"\u6309\u94AE",type:"line"})]})]}),l("div",{className:"flex column gap-12",children:[t(f,{title:"\u6309\u94AE\u72B6\u6001",type:"h3"}),t("div",{className:"flex column items-center gap-24 border p-32",children:l("div",{className:"flex gap-24",children:[t(L,{text:"\u6309\u94AE",type:"background",status:"default"}),t(L,{text:"\u6309\u94AE",type:"background",status:"primary"}),t(L,{text:"\u6309\u94AE",type:"background",status:"warning"}),t(L,{text:"\u6309\u94AE",type:"background",status:"danger"}),t(L,{text:"\u6309\u94AE",type:"background",status:"success"})]})})]}),l("div",{className:"flex column gap-8",children:[t(f,{title:"\u6309\u94AE\u5C3A\u5BF8",type:"h3"}),l("div",{className:"flex column items-center gap-24 border p-32",children:[l("div",{className:"flex gap-24 items-center",children:[t(L,{text:"\u6309\u94AE",type:"border",status:"default",size:"small"}),t(L,{text:"\u6309\u94AE",type:"border",status:"default"}),t(L,{text:"\u6309\u94AE",type:"border",status:"default",size:"large"})]}),l("div",{className:"flex gap-24 items-center",children:[t(L,{icon:t(k,{name:"download"}),type:"border",status:"default",size:"small"}),t(L,{icon:t(k,{name:"download"}),type:"border",status:"default"}),t(L,{icon:t(k,{name:"download"}),type:"border",status:"default",size:"large"})]})]})]}),l("div",{className:"flex column gap-8",children:[t(f,{title:"\u56FE\u6807\u6309\u94AE",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t(L,{text:"\u4E0B\u8F7D",type:"border",icon:t(k,{name:"download"})}),t(L,{type:"border",icon:t(k,{name:"download"})})]})]}),l("div",{className:"flex column gap-8",children:[t(f,{title:"\u52A0\u8F7D\u72B6\u6001\u6309\u94AE",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(L,{text:"\u4FDD\u5B58\u4E2D",type:"border",icon:t(ze,{})})})]})]})}function ll(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5206\u5272\u7EBF\u65B9\u5411",type:"h3"}),l("div",{className:"flex column items-center gap-24 border p-32 width-100 border-box",children:[l("div",{className:"flex items-center width-100 fs-14 fw-400 no-wrap color-gray-3",children:["\u6A2A\u5411\u5206\u5272\u7EBF\uFF1A",t(te,{})]}),l("div",{className:"flex items-center width-100 fs-14 fw-400 no-wrap color-gray-3",children:["\u7EB5\u5411\u5206\u5272\u7EBF\uFF1A",t(te,{direction:"column",lang:"40px",className:"flex-1"})]})]}),t(f,{title:"\u5206\u5272\u7EBF\u7C7B\u578B",type:"h3"}),l("div",{className:"flex column items-center gap-24 border p-32",children:[t(te,{}),t(te,{type:"dashed"})]}),t(f,{title:"\u5305\u542B\u5185\u5BB9\u5206\u5272\u7EBF",type:"h3"}),l("div",{className:"flex column items-center gap-24 border p-32",children:[t(te,{content:"content"}),t(te,{content:"content",align:"left"}),t(te,{content:"content",align:"right"})]})]})})}const J=({w:e="100%",h:r,column:n,wrap:o,justify:a="start",align:i="start",gap:u,bothCenter:s,children:c,style:d,className:p=""})=>t(sl,{className:p,style:d,width:e,height:r,direction:n?"column":"row",gap:typeof u=="number"?`${u}px`:u,wrap:o,justify:s?"center":a,align:s?"center":i,children:c}),sl=B.div`
  display: flex;
  flex-direction: ${e=>e.direction};
  align-items: center;
  gap: ${e=>e.gap};
  flex-wrap: ${e=>e.wrap?"wrap":""};
  justify-content: ${e=>e.justify};
  align-items: ${e=>e.align};
  width: ${e=>e.width};
  height: ${e=>e.height};
`;function on(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u65B9\u5411",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:l(J,{children:[t(Qe,{}),t(et,{}),t(Qe,{}),t(et,{})]})}),t(f,{title:"\u5BF9\u9F50\u65B9\u5F0F",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:l(J,{justify:"center",children:[t(Qe,{}),t(et,{}),t(Qe,{}),t(et,{})]})}),t(f,{title:"\u95F4\u9699",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:l(J,{gap:"12px",children:[t(Qe,{}),t(et,{}),t(Qe,{}),t(et,{})]})})]})})}const Qe=B.div`
  width: 100px;
  height: 60px;
  background-color: var(--color-primary-3);
`,et=B.div`
  width: 100px;
  height: 60px;
  background-color: var(--color-primary-4);
`;var lr=(e=>(e.ColumnFit="column-fit",e.ColumnFill="column-fill",e.RowFit="row-fit",e.RowFill="row-fill",e.ColumnRepeat="column-repeat",e.RowRepeat="row-repeat",e.Default="default",e))(lr||{});const Et=({type:e="default",autoSize:r=100,repeatNum:n=1,gap:o=8,children:a,style:i,className:u=""})=>{const s=oe(()=>{let c={display:"grid",columnGap:typeof o=="number"?o:o[0],rowGap:typeof o=="number"?o:o[1]};if(e==="default")return Object.assign(c,i);switch(e){case"column-fit":return Object.assign(c,{gridTemplateColumns:`repeat(auto-fit, minmax(${r}, 1fr))`});case"column-fill":return Object.assign(c,{gridTemplateColumns:`repeat(auto-fill, minmax(${r}, 1fr))`});case"row-fit":return Object.assign(c,{gridTemplateRows:`repeat(auto-fit, minmax(${r}, 1fr))`});case"row-fill":return Object.assign(c,{gridTemplateRows:`repeat(auto-fill, minmax(${r}, 1fr))`});case"column-repeat":return Object.assign(c,{gridTemplateColumns:`repeat(${n}, 1fr)`});case"row-repeat":return Object.assign(c,{gridTemplateRows:`repeat(${n}, 1fr)`});default:return Object.assign(c,i)}},[e,r,n,o,i]);return t("div",{className:`land-grid ${u}`,style:s,children:a})};function cl(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u7C7B\u578B",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",style:{height:"200px"},children:l(Et,{className:"width-100",type:lr.ColumnFit,autoSize:60,style:{gridTemplateColumns:"repeat(2,1fr)"},children:[t(tt,{}),t(mt,{}),t(tt,{})]})}),t(f,{title:"\u5BF9\u9F50\u65B9\u5F0F",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:l(Et,{children:[t(tt,{}),t(mt,{}),t(tt,{}),t(mt,{})]})}),t(f,{title:"\u95F4\u9699",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:l(Et,{children:[t(tt,{}),t(mt,{}),t(tt,{}),t(mt,{})]})})]})})}const tt=B.div`
  background-color: var(--color-primary-3);
`,mt=B.div`
  background-color: var(--color-primary-4);
`,Be=({ltOption:e,rtOption:r,rtOption2:n,lbOption:o,rbOption:a,tcOption:i,bcOption:u,centerOption:s,lcOption:c,rcOption:d,customOption:p,disabled:g,onClick:v,children:b,className:h,style:w,...m})=>{const x=oe(()=>[{option:e,placement:"lt"},{option:r,placement:"rt"},{option:n,placement:"rt"},{option:o,placement:"lb"},{option:a,placement:"rb"},{option:c,placement:"lc"},{option:d,placement:"rc"},{option:i,placement:"tc"},{option:u,placement:"bc"},{option:s,placement:"center"},{option:p,placement:"custom"}],[e,r,o,a,c,d,i,u,s,p]),[E,C]=F(!1),[A,S]=F(!1),N=$=>$.hide?0:$.hoverShow?E?1:0:$.hoverHide&&A?0:1;P(()=>{const $=Y=>{C(!1),S(!1),Y.stopPropagation()};return document.body.addEventListener("wheel",$),()=>{document.body.removeEventListener("wheel",$)}},[]);const D=($,Y,W)=>{const Z=Y!==void 0?Y:"8px";switch($){case"lt":case"lb":case"lc":return Z;case"rt":case"rb":case"rc":return"auto";case"tc":case"bc":case"center":return"50%";case"custom":return W;default:return"auto"}},q=($,Y)=>{const W=Y!==void 0?Y:"8px";switch($){case"lt":case"lb":case"lc":case"tc":case"bc":case"center":return"auto";case"rt":case"rb":case"rc":return W;default:return"auto"}},O=($,Y,W)=>{const Z=Y!==void 0?Y:"8px";switch($){case"lt":case"rt":case"tc":return Z;case"lb":case"rb":case"bc":return"auto";case"lc":case"rc":case"center":return"50%";case"custom":return W;default:return"auto"}},ae=($,Y)=>{const W=Y!==void 0?Y:"8px";switch($){case"lt":case"rt":case"tc":case"lc":case"rc":case"center":return"auto";case"lb":case"rb":case"bc":return W;default:return"auto"}},H=$=>{switch($){case"lt":case"rt":case"lb":case"rb":return"";case"tc":case"bc":return"translateX(-50%)";case"lc":case"rc":return"translateY(-50%)";case"center":return"translate(-50%,-50%)";default:return""}};return l("div",{className:`StyleAffixContainer relative flex items-center justify-center ${g?"events-none cursor-not-allow":""} ${h}`,style:w,onClick:$=>v==null?void 0:v($),onMouseOver:()=>{g||(C(!0),S(!0))},onMouseLeave:()=>{C(!1),S(!1)},onWheel:$=>$.stopPropagation(),...m,children:[b,x==null?void 0:x.map(($,Y)=>{var W,Z;return $.option?t(dl,{style:{left:D($.placement,$.option.gap,$.option.left||0),right:q($.placement,$.option.gap),top:O($.placement,$.option.gap,$.option.top||0),bottom:ae($.placement,$.option.gap),borderRadius:typeof $.option.radius=="number"?`${$.option.radius}px`:$.option.radius,transform:H($.placement),opacity:N($.option),zIndex:$.option.zIndex||2,...$.option.style},className:`${$.placement} absolute ${(W=$.option.className)!=null?W:""} ${$.option.squareSize?"square":""}`,onClick:R=>{var z,Ee;R.stopPropagation(),(Ee=(z=$.option)==null?void 0:z.onClick)==null||Ee.call(z,R)},dark:$.option.dark,custom:$.option.custom,squareSize:$.option.squareSize,children:(Z=$.option)==null?void 0:Z.content},Y):null})]})},dl=B.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  opacity: ${e=>e.hoverShow?0:1};
  padding: ${e=>e.custom?"":"4px 8px"};
  border-radius: ${e=>e.custom?"":"6px"};
  font-family: inherit;
  font-size: 12px;
  background: ${e=>e.custom?"":e.dark?"rgba(0, 0, 0, 0.8)":"rgba(255, 255, 255, 0.8)"};
  color: ${e=>e.custom?"":e.dark?"var(--color-text-white)":"var(--color-text-2)"};
  backdrop-filter: ${e=>e.custom?"":"var(--ms-bg-blur-4)"};
  transition: opacity 0.2s linear;
  box-sizing: border-box;
  &.square{
    width: ${e=>e.squareSize?`${e.squareSize}px`:"24px"};
    height: ${e=>e.squareSize?`${e.squareSize}px`:"24px"};
  }
`,an=({value:e="var(--color-bg-1)",size:r,border:n=!1,useSelect:o=!0,onChange:a,onClick:i,style:u,className:s=""})=>{const[c,d]=F(e);return P(()=>d(e),[e]),t(pl,{className:s,style:r?{width:typeof r=="number"?`${r}px`:r,height:typeof r=="number"?`${r}px`:r,background:c,...u}:{background:c,...u},onClick:()=>i==null?void 0:i(c),border:n,children:o&&t("input",{type:"color",onChange:p=>a==null?void 0:a(p.target.value,p)})})},pl=B.label`
  border: ${e=>e.border?"4px solid var(--color-border-1)":""};
  input {
    width: 0px;
    height: 0px;
    opacity: 0;
  }
`,hl=(e,r)=>{const n=[];let o="",a="default",i=0;for(let u=0;u<e.length;u++)o+=e[u],n[i]={type:a,msg:o},r.some(c=>o.includes(c)?(a=c,!0):!1)&&(n[i].msg=o.split(a)[0],n.push({type:a,msg:a}),i+=2,o="",a="default");return n},se=({type:e="border",value:r,inputType:n="text",placeholder:o="\u8BF7\u8F93\u5165",beforeContent:a,afterContent:i,prefix:u,suffix:s,width:c,maxLength:d,disabled:p,highlightStr:g=["\u4E0D\u597D"],highlightStyle:v={background:"var(--color-primary-2)",color:"var(--color-primary-6)"},onChange:b,onEnter:h,onBlur:w,onClear:m,className:x="",wrapStyle:E,...C})=>{const A=K(null),[S,N]=F(0);P(()=>{const H=setTimeout(()=>{var $;N(Number(($=A.current)==null?void 0:$.clientWidth)+8)},100);return()=>clearTimeout(H)},[r,u]);const D=oe(()=>hl(String(r),g),[r,g]),q=K(null),O=it(()=>{!A.current||!q.current||(A.current.scrollLeft=q.current.scrollLeft)},[]),ae=it(H=>{A.current&&(A.current.scrollLeft=0),w==null||w(H)},[]);return l(fl,{className:`land-input ${p?"disabled":""} ${m?"clear":""} ${e} ${x}`,style:{width:typeof c=="number"?`${c}px`:c,...E},children:[a&&t("div",{className:"input-beforeContent",children:a}),u&&t("div",{className:"input-prefix",children:u}),l("div",{className:"land-input-content",children:[t("input",{ref:q,placeholder:o,type:n,value:r,max:d,onKeyDown:H=>{H.code==="Enter"&&(h==null||h(r,H))},onClick:H=>H.stopPropagation(),onBlur:ae,onChange:H=>{O==null||O(),b==null||b(H.target.value,H)},onScroll:O,...C}),r?t("div",{ref:A,className:"input-label",children:D==null?void 0:D.map((H,$)=>H.type==="default"?H.msg:t("span",{style:v,children:H.msg},H.msg+$))}):t("p",{className:"input-placeholder",children:o}),s&&r&&t("p",{className:"input-suffix",style:{transform:`translateX(${S}px)`},children:s})]}),i&&t("div",{children:i}),m&&t("div",{className:`land-input-clear-icon ${Boolean(r)?"show":""}`,onClick:m,children:t(k,{name:"error-fill",fill:"var(--color-text-5)"})})]})},fl=B.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--gap-4);
  padding: 0 12px;
  height: 36px;
  border-radius: var(--radius-4);
  transition: background-color var(--transition-15) linear;
  box-sizing: border-box;
  &.transparent{
    padding: 0;
    border-radius: 0px;
  }
  &.border{
    border: var(--border-1) solid var(--color-border-2);
    &:hover:not(.disabled){
    background-color: var(--color-bg-1);
    }
    &:active:not(.disabled){
      background-color: var(--color-bg-2);
    }
  }
  &.background{
    background-color: var(--color-bg-1);
    &:hover:not(.disabled){
    background-color: var(--color-bg-2);
    }
    &:active:not(.disabled){
      background-color: var(--color-bg-3);
    }
  }
  &.disabled{
    opacity: var(--opacity-68);
    background-color: var(--color-bg-1);
    cursor: not-allowed;
    pointer-events: none;
    input{
      opacity: var(--opacity-68);
      cursor: not-allowed;
      &::placeholder{
        opacity: var(--opacity-68);
      }
    }
  }
  
  &.clear .input-label{
    max-width: 100%; 
  }
  .land-input-content{
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
  }
  
  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    appearance: none;
    -moz-appearance: none;
    border: none;
    outline: none;
    font-size: 14px;
    caret-color: var(--color-primary-6);
    -webkit-text-fill-color: transparent;
    &:focus-within,
    &:focus,
    &:focus-visible,
    &:active,
    &:target {
      border: none;
      box-shadow: none;
      background-color: transparent;
      -webkit-text-fill-color: transparent;
    }
    &::selection {
      background-color: var(--color-primary-2);
    }
  }
  .land-input-clear-icon{
    opacity: 1;
    height: 16px;
    flex-shrink: 0;
    transition: opacity 0.2s linear;
    opacity: 0;
    transition: opacity 0.2s linear;
    svg path{
      transition: all 0.2s linear;
    }
    &:hover svg path{
      fill: var(--color-text-2);
    }
    &.show{
      opacity: 1;
    }
  }
  .input-beforeContent{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .input-prefix{
    display: flex;
    align-items: center;
    color: var(--color-text-5);
    white-space: nowrap;
    font-size: 14px;
  }
  .input-label{
    position: absolute;
    left: 0;
    max-width: 100%;
    box-sizing: border-box;
    color: var(--color-text-2);
    font-size: 14px;
    white-space: nowrap;
    overflow: scroll;
    &::-webkit-scrollbar{
    width: 0;
    display: none;
  }
  }
  .input-placeholder,
  .input-suffix{
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: var(--color-text-5);
    pointer-events: none;
  }
  .input-placeholder{
    padding-left: 4px;
    font-size: 14px;
  }
  &:hover{
    .land-input-clear-icon{
      opacity: 1;
    }
  }
`,je=({value:e,type:r="border",step:n=1,min:o=0,max:a=100,prefix:i,suffix:u,disabled:s,onChange:c,className:d,style:p,...g})=>{const[v,b]=F(e),h=(m,x)=>{m<o-n/2||m>a+n/2||(b(m),c==null||c(m,x))},w=it((m,x)=>{Number(m)>a||Number(m)<o||typeof m=="number"&&Boolean(m%n)||(b(Number(m)),c==null||c(Number(m),x))},[]);return l(ml,{className:"StyledNumberInputWrap",style:p,onClick:m=>m.stopPropagation(),children:[t(se,{type:r,inputType:"number",value:String(v),disabled:s,prefix:i,suffix:u,onChange:(m,x)=>w(m,x),wrapStyle:{paddingRight:"32px"},...g}),l("div",{className:"land-numberInput-arrow",style:{borderLeft:r==="border"?"1px solid var(--color-border-2)":"",background:"inherit"},children:[t("div",{className:`land-numberInput-add ${v===a?"disabled":""}`,onClick:m=>h==null?void 0:h(Number(v)+n,m),children:t(k,{name:"arrow"})}),r==="border"&&t(te,{margin:0,lang:"32px"}),t("div",{className:`land-numberInput-dec ${v===o?"disabled":""}`,onClick:m=>h==null?void 0:h(Number(v)-n,m),children:t(k,{name:"arrow"})})]})]})},ml=B.div`
  position: relative;
  input{
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      height: auto;
      -webkit-appearance: none;
    }
  }
  .land-numberInput-arrow{
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 100%;
    color: var(--color-text-4);
    
    .land-numberInput-add svg{
      transform: rotate(180deg);
    }
    .land-numberInput-add,
    .land-numberInput-dec{
      height: 18px;
      transition: color var(--transition-15) linear;
      cursor: pointer;
      &:hover:not(.disabled){
      color: var(--color-text-2);
    }
    &.disabled{
      cursor: not-allowed;
    }
    }
  }
`;function gl(){const[e,r]=F("var(--color-text-2)"),[n,o]=F(32),[a,i]=F(2),u=s=>{navigator.clipboard.writeText(`<Icon name='${s}' size={${n}} stroke='${e}' strokeWidth={${a}}/>`)};return l("div",{className:"flex column gap-12",children:[l("div",{className:"flex gap-24",children:[t(je,{prefix:"\u56FE\u6807\u5927\u5C0F",suffix:"px",width:172,min:12,max:96,value:n,step:2,onChange:s=>o(s)}),t(je,{prefix:"\u63CF\u8FB9\u7C97\u7EC6",suffix:"px",width:172,min:1,max:8,value:a,onChange:s=>i(s)}),t(an,{value:e,size:36,className:"radius-6",onChange:s=>r(s)})]}),sp.map((s,c)=>{var d;return l("div",{className:"flex column gap-8",children:[t(f,{title:s.title,type:"h3"}),t(vl,{children:(d=s.data)==null?void 0:d.map(p=>l(yl,{rtOption:{content:t(L,{onClick:()=>u==null?void 0:u(p),icon:t(k,{name:"copy"}),className:"relative hover-pop"}),hoverShow:!0},children:[t(k,{name:p,size:n,stroke:e,strokeWidth:a}),t(So,{className:"transition-15",children:p})]},p))})]},c)})]})}const So=B.div`
  height: 0px;
  padding-top: 8px;
  overflow: hidden;
  transition: all var(--transition-15) ease;
`,vl=B.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(132px,1fr));
  gap: 24px;
`,yl=B(Be)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  aspect-ratio: 1;
  color: var(--color-text-4);
  border-radius: var(--radius-8);
  font-size: 12px;
  border: 1px dashed var(--color-border-2);
  cursor: default;
  transition: background-color var(--transition-15) linear;
  &:hover {
    background-color: var(--color-bg-1);
    ${So}{
      height: 30px;
    }
  }
`,ot=({children:e,style:r,className:n})=>t(bl,{className:n,style:r,children:e}),bl=B.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`,at=({collapsed:e,width:r,fixed:n,placement:o,children:a,style:i,className:u})=>t(xl,{className:u,style:i,fixed:n,collapsed:e,width:typeof r=="number"?`${r}px`:r,placement:o,children:a}),xl=B.aside`
  padding: 24px;
  position: ${e=>e.fixed?"fixed":""};
  width: ${e=>e.collapsed?"0px":e.width};
  background: var(--color-bg-white);
  border-left: ${e=>e.placement==="right"?"var(--border-1) solid var(--color-border-2)":""};
  border-right: ${e=>e.placement==="left"?"var(--border-1) solid var(--color-border-2)":""};
`,zr=({children:e,style:r,className:n})=>{const[o,a]=F(132),i=document.querySelector(".land-header"),u=document.querySelector(".land-footer");return P(()=>{let s,c;i?s=i.getBoundingClientRect().height:s=0,u?c=u.getBoundingClientRect().height:c=0,a(s+c)}),t(wl,{className:n,style:r,$minHeight:o,children:e})},wl=B.main`
  flex: 1;
  min-height: ${e=>`calc(100vh - ${e.$minHeight}px)`};
  background: var(--color-bg-white);
`,_r=({children:e,style:r,className:n})=>t(El,{className:`land-footer ${n}`,style:r,children:e}),El=B.footer`
  padding: 24px;
  height: fit-content;
  width: 100%;
  background-color: var(--color-bg-1);
`;function Fl(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u57FA\u672C\u5E03\u5C40",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:l(ot,{className:"border width-100",style:{height:600},children:[t(Yt,{logo:t("p",{children:"\u{1F337}\u{1F337}\u{1F337}"}),name:t(f,{title:"Web Site",type:"h2"}),menuProps:{active:1,data:[{key:1,title:"\u8BBE\u8BA1",clickType:j.SELF},{key:2,title:"\u7EC4\u4EF6",clickType:j.SELF},{key:3,title:"\u6587\u6863",clickType:j.SELF}]},align:"end"}),l(ot,{children:[t(at,{placement:"left",children:t(J,{bothCenter:!0,h:"100%",children:"SiderLeft"})}),t(zr,{style:{minHeight:"464px"},children:t(J,{bothCenter:!0,h:"100%",children:"Content"})}),t(at,{placement:"right",children:t(J,{bothCenter:!0,h:"100%",children:"SiderRight"})})]}),t(_r,{children:t(J,{bothCenter:!0,children:"Footer"})})]})}),t(f,{title:"\u56FA\u5B9A\u9876\u90E8\u5BFC\u822A\u680Fs",type:"h3"}),t("div",{className:"flex justify-center gap-24 p-32 border",children:l(ot,{className:"border width-100",style:{height:600},children:[t(Yt,{logo:t("p",{children:"\u{1F337}\u{1F337}\u{1F337}"}),name:t(f,{title:"Web Site",type:"h2"}),fixed:!0,filter:10}),l(ot,{children:[t(at,{placement:"left",children:t(J,{bothCenter:!0,h:"100%",children:"SiderLeft"})}),t(zr,{style:{minHeight:"464px"},children:t(J,{bothCenter:!0,h:"100%",children:"Content"})}),t(at,{placement:"right",children:t(J,{bothCenter:!0,h:"100%",children:"SiderRight"})})]}),t(_r,{children:t(J,{bothCenter:!0,children:"Footer"})})]})})]})})}const X=({href:e,target:r="_blank",status:n="default",disabled:o,active:a,tip:i,tipProps:u,children:s,onClick:c,style:d,className:p=""})=>{const g=()=>{switch(n){case"default":return"var(--color-link-";case"primary":return"var(--color-primary-";case"success":return"var(--color-green-";case"danger":return"var(--color-red-";case"warning":return"var(--color-orange-";default:return"var(--color-link-"}};return l(Cl,{href:e,target:r,className:`land-link ${a?"active":""} ${o?"disabled hover-pop":""} ${p}`,style:d,color:g(),onClick:c,children:[s,i&&t(U,{content:i,...u})]})},Cl=B.a`
    position: relative;
    width: fit-content;
    font-size: 14px;
    color: ${e=>`${e.color}6)`};
    cursor: pointer;
    &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${e=>`${e.color}6)`};
        opacity: 0;
        transition: opacity 0.15s linear;
    }
    &:hover{
        color: ${e=>`${e.color}7)`};
        &::before {
            opacity: 1;
            background-color: ${e=>`${e.color}7)`};
        }
    }
    &:active,
    &.active {
        color: ${e=>`${e.color}8)`};
        &::before {
            background-color: ${e=>`${e.color}8)`};
        }
    }
    &.disabled {
        cursor: default;
        color: ${e=>`${e.color}2)`};
        &:hover::before {
            opacity: 0;
        }
    }
`;function kl(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u6309\u94AE\u7C7B\u578B",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t(X,{children:"\u5E38\u89C4\u94FE\u63A5"}),t(X,{status:"primary",children:"\u4E3B\u9898\u94FE\u63A5"}),t(X,{status:"warning",children:"\u8B66\u544A\u94FE\u63A5"}),t(X,{status:"danger",children:"\u5371\u9669\u94FE\u63A5"}),t(X,{status:"success",children:"\u5B89\u5168\u94FE\u63A5"})]}),t(f,{title:"\u6309\u94AE\u7981\u7528",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t(X,{disabled:!0,tip:"\u5E38\u89C4\u94FE\u63A5\u5931\u6548",children:"\u5E38\u89C4\u7981\u7528\u94FE\u63A5"}),t(X,{disabled:!0,status:"primary",tip:"\u4E3B\u9898\u94FE\u63A5\u5931\u6548",children:"\u4E3B\u9898\u7981\u7528\u94FE\u63A5"}),t(X,{disabled:!0,status:"warning",tip:"\u8B66\u544A\u94FE\u63A5\u5931\u6548",children:"\u8B66\u544A\u7981\u7528\u94FE\u63A5"}),t(X,{disabled:!0,status:"danger",tip:"\u5371\u9669\u94FE\u63A5\u5931\u6548",children:"\u5371\u9669\u7981\u7528\u94FE\u63A5"}),t(X,{disabled:!0,status:"success",tip:"\u5B89\u5168\u94FE\u63A5\u5931\u6548",children:"\u5B89\u5168\u7981\u7528\u94FE\u63A5"})]})]})})}function Bl(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u57FA\u672C\u7528\u6CD5",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(ee,{data:[{key:1,title:"Navigation 1",clickType:j.SELF},{key:2,title:"Navigation 2",clickType:j.SELF},{key:3,title:"Navigation 3",clickType:j.SELF},{key:4,title:"Navigation 4",clickType:j.SELF},{key:5,title:"Navigation 5",clickType:j.SELF}],active:1,border:!0})}),t(f,{title:"\u89D2\u6807",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(ee,{data:[{key:1,title:"Navigation 1",clickType:j.SELF},{key:2,title:"Navigation 2",clickType:j.SELF,isNew:!0},{key:3,title:"Navigation 3",clickType:j.SELF,isNew:"Hot"},{key:4,title:"Navigation 4",clickType:j.SELF},{key:5,title:"Navigation 5",clickType:j.SELF}],active:1})}),t(f,{title:"\u4E0D\u53EF\u70B9\u51FB & \u7981\u7528",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(ee,{data:[{key:1,title:"Navigation(cursor)",clickType:j.SELF},{key:2,title:"Navigation(default)",clickType:j.SIMPLE},{key:2,title:"Navigation(not-allowed)",clickType:j.DISABLED}],active:1})}),t(f,{title:"\u5305\u542B\u4E0B\u62C9\u6846",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(ee,{data:[{key:1,title:"Navigation(cursor)",clickType:j.SELF,dropData:[{key:1,title:"option1",clickType:j.SELF},{key:2,title:"option2",clickType:j.SELF},{key:3,title:"option3",clickType:j.SELF}]},{key:2,title:"Navigation(default)",clickType:j.SELF}],active:1})}),t(f,{title:"\u5217\u5411\u5BFC\u822A",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(ee,{data:[{key:1,title:"Navigation 1",clickType:j.SELF},{key:2,title:"Navigation 2",clickType:j.SELF},{key:3,title:"Navigation 3",clickType:j.SELF},{key:4,title:"Navigation 4",clickType:j.SELF},{key:5,title:"Navigation 5",clickType:j.SELF}],active:3,direction:"column",style:{width:132}})}),t(f,{title:"\u5B9A\u5236\u5BFC\u822A\u6837\u5F0F",type:"h3"}),l("div",{className:"flex column items-center gap-24 border p-32",children:[t(ee,{data:[{key:1,title:"Navigation 1",clickType:j.SELF},{key:2,title:"Navigation 2",clickType:j.SELF},{key:3,title:"Navigation 3",clickType:j.SELF}],active:1}),t(ee,{data:[{key:1,title:"Navigation 1",clickType:j.SELF},{key:2,title:"Navigation 2",clickType:j.SELF},{key:3,title:"Navigation 3",clickType:j.SELF}],active:1,theme:{hoverBg:"var(--color-bg-1)",activeBg:"var(--color-bg-1)"}}),t(ee,{data:[{key:1,title:"Navigation 1",clickType:j.SELF},{key:2,title:"Navigation 2",clickType:j.SELF},{key:3,title:"Navigation 3",clickType:j.SELF}],active:1,theme:{activeColor:"var(--color-primary-6)",lineColor:"var(--color-primary-6)"}}),t(ee,{data:[{key:1,title:"Navigation 1",clickType:j.SELF},{key:2,title:"Navigation 2",clickType:j.SELF},{key:3,title:"Navigation 3",clickType:j.SELF}],active:1,theme:{activeColor:"var(--color-primary-6)",activeBg:"var(--color-primary-1)",lineColor:"var(--color-primary-6)"}})]}),l("div",{className:"flex justify-center gap-32 border p-32",children:[t(ee,{data:[{key:1,title:"Navigation 1",clickType:j.SELF},{key:2,title:"Navigation 2",clickType:j.SELF},{key:3,title:"Navigation 3",clickType:j.SELF}],active:1,direction:"column"}),t(ee,{data:[{key:1,title:"Navigation 1",clickType:j.SELF},{key:2,title:"Navigation 2",clickType:j.SELF},{key:3,title:"Navigation 3",clickType:j.SELF}],active:2,direction:"column",theme:{hoverBg:"var(--color-bg-1)",activeBg:"var(--color-bg-1)"}}),t(ee,{data:[{key:1,title:"Navigation 1",clickType:j.SELF},{key:2,title:"Navigation 2",clickType:j.SELF},{key:3,title:"Navigation 3",clickType:j.SELF}],active:3,direction:"column",theme:{activeColor:"var(--color-primary-6)",lineColor:"var(--color-primary-6)"}}),t(ee,{data:[{key:1,title:"Navigation 1",clickType:j.SELF},{key:2,title:"Navigation 2",clickType:j.SELF},{key:3,title:"Navigation 3",clickType:j.SELF}],active:3,direction:"column",theme:{activeColor:"var(--color-primary-6)",activeBg:"var(--color-primary-1)",lineColor:"var(--color-primary-6)"}})]}),t(f,{title:"\u5E26\u56FE\u6807\u5BFC\u822A",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(ee,{data:[{key:1,title:"Home",icon:t(k,{name:"home"}),clickType:j.SELF}],active:1})})]})})}function Al(){return l("div",{className:"flex column gap-24",children:[l("div",{className:"flex column gap-12",children:[t(f,{title:"\u56FE\u9489\u4F4D\u7F6E",type:"h3"}),t(f,{title:"\u652F\u6301\u5DE6\u4E0A\u89D2\u3001\u53F3\u4E0A\u89D2\u3001\u5DE6\u4E0B\u89D2\u3001\u53F3\u4E0B\u89D2\u3001\u5DE6\u8FB9\u4E2D\u95F4\u3001\u53F3\u8FB9\u4E2D\u95F4\u3001\u9876\u90E8\u4E2D\u95F4\u3001\u5E95\u90E8\u4E2D\u95F4\u3001\u4E2D\u95F4 9 \u4E2A\u4F4D\u7F6E\u3002",type:"p"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Be,{style:{height:"200px"},className:"width-100 bg-gray",ltOption:{content:1},rtOption:{content:2},lbOption:{content:3},rbOption:{content:4},lcOption:{content:5},rcOption:{content:6},tcOption:{content:7},bcOption:{content:8},centerOption:{content:9}})})]}),l("div",{className:"flex column gap-12",children:[t(f,{title:"\u81EA\u5B9A\u4E49\u56FE\u9489\u4F4D\u7F6E",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Be,{style:{height:"200px"},className:"width-100 bg-gray",customOption:{content:"\u56FE\u9489",left:"20%",top:"60%"}})})]}),l("div",{className:"flex column gap-12",children:[t(f,{title:"\u56FE\u9489\u9ED8\u8BA4\u6837\u5F0F",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Be,{style:{height:"200px"},className:"width-100 bg-gray",ltOption:{content:"\u6D45\u8272\u56FE\u9489"},rtOption:{content:"\u6DF1\u8272\u56FE\u9489",dark:!0},centerOption:{content:"\u81EA\u5B9A\u4E49\u6837\u5F0F\u56FE\u9489 \u{1F4CC}",custom:!0,className:"border-primary-light radius-4 p-8 color-primary bg-white"}})})]}),l("div",{className:"flex column gap-12",children:[t(f,{title:"\u56FE\u9489\u663E\u793A\u65B9\u5F0F",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[l("div",{className:"flex-1 flex column gap-8 items-center shrink-0 fs-12 color-gray-4",children:[t(Be,{style:{height:"200px"},className:"width-100 bg-gray",centerOption:{content:"\u56FE\u9489"}}),"\u4E00\u76F4\u663E\u793A"]}),l("div",{className:"flex-1 flex column gap-8 items-center shrink-0 fs-12 color-gray-4",children:[t(Be,{style:{height:"200px"},className:"width-100 bg-gray",centerOption:{content:"\u56FE\u9489",hoverHide:!0}}),"\u9F20\u6807\u60AC\u6D6E\u65F6\u9690\u85CF"]}),l("div",{className:"flex-1 flex column gap-8 items-center shrink-0 fs-12 color-gray-4",children:[t(Be,{style:{height:"200px"},className:"width-100 bg-gray",centerOption:{content:"\u56FE\u9489",hoverShow:!0}}),"\u9F20\u6807\u60AC\u6D6E\u65F6\u663E\u793A"]})]})]}),l("div",{className:"flex column gap-12",children:[t(f,{title:"\u56FE\u9489\u5FEB\u6377\u6837\u5F0F",type:"h3"}),t(f,{title:"\u901A\u8FC7 gap \u5B57\u6BB5\u5FEB\u901F\u8BBE\u7F6E\u56FE\u9489\u5230\u5BB9\u5668\u7684\u8DDD\u79BB\uFF1B\u901A\u8FC7 radius \u5C5E\u6027\u5FEB\u6377\u8BBE\u7F6E\u56FE\u9489\u5706\u89D2\uFF1B\u901A\u8FC7 squareSize \u8BBE\u7F6E\u5706\u5F62\u56FE\u9489\u53CA\u5927\u5C0F\u3002",type:"p"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Be,{style:{height:"200px"},className:"width-100 bg-gray border-dash",ltOption:{content:"\u56FE\u9489"},rtOption:{content:"\u56FE\u9489",gap:20},lbOption:{content:"\u56FE\u9489",gap:0,radius:"0 6px 0 0"},rbOption:{content:"1",radius:"100%",dark:!0,squareSize:24}})})]})]})}const Lo=({data:e=[],onChange:r,style:n,className:o=""})=>{var s;const a=K(null),[i,u]=F(!1);return P(()=>{!a.current||(a.current.scrollWidth>=a.current.offsetWidth?u(!0):u(!1))},[]),t(Nl,{className:`land-breadCrumb-wrap overflow-auto ${o}`,style:n,children:(s=e.reverse())==null?void 0:s.map(c=>l("div",{className:"land-breadCrumb-item relative hover-pop",onClick:()=>r==null?void 0:r(c),children:[t("span",{ref:a,className:`land-breadcrumb-label ${c.maxWidth?"ellipsis":""}`,style:{maxWidth:`${c.maxWidth}px`},children:c.label}),t(k,{name:"arrow",className:"-rotate-90",size:16,strokeWidth:4}),i&&t(U,{content:c.label})]},c.key))})},Nl=B.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  .land-breadCrumb-item{
    display: flex;
    align-items: center;
    .land-breadcrumb-label{
      font-size: var(--font-content-medium);
      color: var(--color-text-4);
      white-space: nowrap;
      cursor: pointer;
      transition: all var(--transition-15) linear;
      &:hover{
        color: var(--color-text-2);
      }
    }
    svg{
      margin: 0 4px;
      color: var(--color-border-3);
    }
  }
`;function Sl(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u6309\u94AE\u7C7B\u578B",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Lo,{data:[{key:1,label:"\u9875\u97621"},{key:2,label:"\u9875\u9762\u9875\u9762\u9875\u9762\u9875\u97621-1",maxWidth:100},{key:3,label:"\u9875\u9762\u9875\u9762\u9875\u9762\u9875\u97621-1-2"}],style:{width:"320px"}})}),t(f,{title:"\u6309\u94AE\u7981\u7528",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32"})]})})}const bt=({current:e=1,pageSize:r=1,total:n=1,showTotal:o=!1,showInput:a=!1,onChange:i,style:u,className:s=""})=>{var m,x;const[c,d]=F(e);P(()=>{d(e)},[e]);const[p,g]=F(2),v=oe(()=>Array.from({length:n}).map((E,C)=>({id:C+1})).filter(E=>E.id>1&&E.id<n).filter(E=>E.id>=p&&E.id<p+r),[n,r,p]),b=E=>v.filter(C=>C.id===E).length===0&&c!==1&&c!==n,h=p<=r*2,w=n-p<r*2;return l(Ll,{className:s,style:u,children:[o&&l("div",{className:"land-pagination-total",children:["\u5171",n,"\u9875"]}),t("div",{onClick:()=>{c>1&&(d(c-1),i==null||i(c-1),b!=null&&b(c-1)&&g(h?2:c-1))},className:`land-pagination-arrow-prev ${c===1?"disabled":""}`,children:t(k,{name:"arrow",className:"rotate-90",strokeWidth:4})}),l("div",{className:"land-pagination-page",children:[t("div",{className:`land-pagination-num-item ${c===1?"active":""}`,onClick:()=>{d(1),i==null||i(1)},children:"1"}),((m=v[0])==null?void 0:m.id)>2&&l("div",{onClick:()=>g(h?2:p-r),className:"land-pagination-arrow-double-prev",children:[t(k,{name:"more",size:16}),t(k,{name:"arrow-double",className:"arrow rotate-90",size:24})]}),v==null?void 0:v.map(E=>t("div",{className:`land-pagination-num-item ${c===E.id?"active":""}`,onClick:()=>{d(E.id),i==null||i(E.id)},children:E.id},E.id)),((x=v[(v==null?void 0:v.length)-1])==null?void 0:x.id)<n-1&&l("div",{onClick:()=>g(w?n-r:p+r),className:"land-pagination-arrow-double-next",children:[t(k,{name:"more",size:16}),t(k,{name:"arrow-double",className:"arrow -rotate-90",size:24})]}),t("div",{className:`land-pagination-num-item ${c===n?"active":""}`,onClick:()=>{d(n),i==null||i(n)},children:n})]}),t("div",{onClick:()=>{c<n&&(d(c+1),i==null||i(c+1),b!=null&&b(c+1)&&g(w?n-r:c+1))},className:`land-pagination-arrow-next ${c===n?"disabled":""}`,children:t(k,{name:"arrow",className:"-rotate-90",strokeWidth:4})}),a&&l("div",{className:"land-pagination-input",children:["\u8DF3\u8F6C\u81F3",t(se,{onChange:E=>d(Number(E)),style:{height:"24px",width:"24px"}})," / ",n," \u9875"]})]})},Ll=B.div`
  display: flex;
  align-items: center;
  gap: var(--gap-12);
  font-size: var(--font-content-medium);
  .land-pagination-total {
    flex-shrink: 0;
    color: var(--color-text-4);
  }
  .land-pagination-page{
    flex: 1;
    display: flex;
    justify-content: space-between;
    gap: var(--gap-8);
    height: fit-content;
  }
  .land-pagination-num-item,
  .land-pagination-arrow-double-prev,
  .land-pagination-arrow-double-next{
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    font-size: var(--font-content-medium);
    color: var(--color-text-2);
    border-radius: var(--radius-6);
    border: 1px solid var(--color-border-2);
    box-sizing: border-box;
    cursor: pointer;
    transition: background-color var(--transition-15) linear;
    &:hover{
      background-color: var(--color-bg-1);
    }
    &:active{
      background-color: var(--color-bg-2);
    }
    &.active{
      background-color: var(--color-primary-6);
      color: var(--color-text-light);
      border-color: var(--color-primary-6);
    }
  }
  .land-pagination-arrow-prev,
  .land-pagination-arrow-next{
    flex-shrink: 0;
    color: var(--color-border-3);
    cursor: pointer;
    transition: color var(--transition-15) linear;
    &:hover:not(.disabled){
      color: var(--color-text-2);
    }
    &:active:not(.disabled){
      color: var(--color-text-1);
    }
    &.disabled{
      cursor: not-allowed;
    }
  }
  .land-pagination-arrow-double-prev,
  .land-pagination-arrow-double-next{
    position: relative;
    transition: opacity var(--transition-2s) linear;
    svg.arrow{
      position: absolute;
      top: 3px;
      left: 3px;
      background: inherit;
      opacity: 0;
      transition: opacity var(--transition-2s) linear;
    }
    &:hover{
      svg.arrow{
          opacity: 1;
      }
    }
  }
  .land-pagination-input{
    display: flex;
    align-items: center;
    gap: var(--gap-4);
    color: var(--color-text-4);
    white-space: nowrap;
    flex-shrink: 0;
  }
`;function Dl(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u5206\u9875",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(bt,{total:7,current:1,pageSize:5})}),t(f,{title:"\u7F29\u7565\u5206\u9875",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(bt,{total:24,current:1,pageSize:5})}),t(f,{title:"\u663E\u793A\u603B\u9875\u6570",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(bt,{total:24,current:1,pageSize:5,showTotal:!0})}),t(f,{title:"\u663E\u793A\u81EA\u5B9A\u4E49\u9875\u7801\u8F93\u5165\u6846",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(bt,{total:24,current:1,pageSize:5,showInput:!0})})]})})}const Do=({data:e=[],current:r=e[0].key,finished:n=[],onClick:o,useDivider:a=!0,dividerWidth:i="100%",style:u,className:s})=>t($l,{className:`land-steps-wrap ${s}`,style:u,children:e==null?void 0:e.map((c,d)=>l(eo,{children:[a&&d!==0&&t(te,{lang:i,style:{marginTop:"12px"}}),l("div",{className:`land-steps-item ${r===c.key?"active":""} ${n.includes(c.key)?"finished":""}`,onClick:()=>o==null?void 0:o(c),children:[t("div",{className:"land-steps-num",children:r===c.key||!n.includes(c.key)?d+1:t(k,{name:"check-stroke",size:32,strokeWidth:2,stroke:"var(--color-primary-6)"})}),l("div",{className:"land-steps-title",children:[c.title,t("div",{className:"land-steps-desc",children:c.desc})]})]})]},c.key))}),$l=B.div`
    display: flex;
    gap: var(--gap-16);
    justify-content: space-between;
    width: 100%;
  .land-steps-item{
    flex-shrink: 0;
    display: flex;
    gap: var(--gap-4);
    cursor: pointer;
    &.active{
      .land-steps-num{
        background-color: var(--color-primary-6);
        border-color: var(--color-primary-6);
        color: var(--color-text-light);
      }
      .land-steps-title{
        color: var(--color-text-2);
      }
    }
    &.finished:not(.active){
      .land-steps-num{
        border: none;
      }
      .land-steps-title{
        color: var(--color-text-2);
      }
    }
  }
  .land-steps-num{
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: var(--font-content-small);
    color: var(--color-text-5);
    border: 1px solid var(--color-text-5);
    border-radius: 50%;
    transform: all var(--transition-15) linear;
  }
  .land-steps-title{
    display: flex;
    flex-direction: column;
    gap: var(--gap-4);
    font-size: var(--font-title-small);
    color: var(--color-text-4);
  }
  .land-steps-desc{
    font-size: var(--font-content-small);
    color: var(--color-text-4);
  }
`;function jl(){const[e,r]=F(1);return t("div",{className:"flex column gap-24",children:t("div",{className:"flex column gap-12",children:t("div",{className:"flex justify-center gap-24 border p-32",children:t(Do,{data:[{key:1,title:"\u6B65\u9AA41",desc:"\u63CF\u8FF0\u6587\u5B57"},{key:2,title:"\u6B65\u9AA42",desc:"\u63CF\u8FF0\u6587\u5B57"},{key:3,title:"\u6B65\u9AA43",desc:"\u63CF\u8FF0\u6587\u5B57"}],current:e,onClick:n=>r(n.key),finished:[1]})})})})}const Pr=({tagData:e=[],placeholder:r="\u6309\u4E0B\u56DE\u8F66\u4EE5\u8F93\u5165\u6807\u7B7E",w:n="100%",maxLength:o=5,highlightStr:a=[],highlightStyle:i={background:"var(--color-primary-2)",color:"var(--color-primary-6)"},onChange:u,onEnter:s,onFocus:c,onBlur:d,tagStyle:p,tagClassName:g="",className:v="",wrapStyle:b,...h})=>{const[w,m]=F(""),[x,E]=F(e),C=A=>{x.length===o||!A||(E([...x,A]),m(""))};return P(()=>{const A=S=>{S.code==="Backspace"&&(x==null?void 0:x.length)>0&&!w&&(E(N=>N.slice(0,-1)),console.log(S.code))};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[w,x]),l(Tl,{className:`land-tagInput ${v}`,style:{width:typeof n=="number"?`${n}px`:n,...b},children:[l("div",{className:"flex-1 flex flex-wrap gap-4 w-fit-content shrink-0",children:[x==null?void 0:x.map((A,S)=>l(Rl,{className:`land-tagInput-tag ${g}`,style:p,children:[A,t(k,{name:"clear",onClick:()=>E(x.filter(N=>N!==A))})]},S)),t(se,{type:"transparent",value:w,placeholder:r,onEnter:(A,S)=>{C==null||C(A),s==null||s(x,S)},onBlur:A=>{C==null||C(w),d==null||d(x,A)},onChange:(A,S)=>{m(A),u==null||u(x,S)},className:"flex-1",wrapStyle:{height:"28px",minWidth:"80px"},...h})]}),l("div",{className:"land-tagInput-number",children:[t(k,{name:"error-fill",className:"land-input-clear-icon",fill:"var(--color-text-5)",onClick:()=>{E([])}}),l("div",{children:[t("span",{children:x.length}),"/",o]})]})]})},Tl=B.div`
    position: relative;
    display: flex;
    align-items: end;
    gap: var(--gap-4);
    padding: 4px 12px;
    height: fit-content;
    border-radius: var(--radius-4);
    background-color: var(--color-bg-2);
    overflow: auto;
    transition: background-color var(--transition-15) linear;
    &::-webkit-scrollbar{
      width: 0;
      display: none;
    }
    &:focus-within,
    &:hover{
      background-color: var(--color-bg-3);
    }
    

    .land-tagInput-number{
      display: flex;
      align-items: center;
      gap: var(--gap-8);
      height: 28px;
      font-size: 14px;
      color: var(--color-text-5);
      span{
        color: var(--color-text-3);
    }
  }
`,Rl=B.div`
    display: flex;
    align-items: center;
    gap: var(--gap-4);
    padding: 0 8px;
    height: 28px;
    background-color: var(--color-bg-white);
    border-radius: var(--radius-2);
    color: var(--color-text-2);
    font-size: var(--font-content-small);
    border: var(--border-1) solid var(--color-border-2);
    box-sizing: border-box;
    cursor: pointer;
`,un=(e,r)=>{const n=K(r);P(()=>{n.current=r},[r]),P(()=>{const o=a=>{e.current&&!e.current.contains(a.target)&&n.current(a)};return document.addEventListener("mousedown",o),document.addEventListener("touchstart",o),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("touchstart",o)}},[e])},Ne=({data:e,placeholder:r="\u8BF7\u9009\u62E9",selected:n="0",width:o="100px",title:a,titleInfo:i,info:u,disabled:s,onChange:c,className:d="",style:p})=>{const g=K(null),[v,b]=F(!1),[h,w]=F(n);return P(()=>w(n),[n]),un(g,()=>{b(!1)}),l(Il,{ref:g,style:{width:typeof o=="number"?`${o}px`:o,...p},className:d,children:[a&&t(f,{title:a,type:"p",info:i}),l(Ml,{className:`hover-pop ${v?"show":""} ${s?"disabled":""}`,onClick:m=>{s||(m.stopPropagation(),b(!v))},children:[t("p",{className:`${h!=="0"?"land-select-trigger":"land-select-placeholder"}`,children:h==="0"?r:e==null?void 0:e.filter(m=>m.value===h)[0].label}),t(k,{name:"arrow",className:"land-select-value-arrow"}),u&&t(U,{content:u,theme:"dark"})]}),t(Ol,{className:`land-select-results ${v?"show":""}`,children:t(zl,{children:e?e==null?void 0:e.map(m=>l(_l,{className:`${m.tip?"hover-pop":""} ${h===m.value?"selected":""} ${m.disabled?"disabled":""}`,onClick:()=>{m.disabled||(w(m.value),c==null||c(m),b(!1))},children:[t("div",{className:"land-select-results-item-label",children:m.label}),m.info&&l("div",{className:`land-select-item-info ${m.info?"hover-pop":""}`,children:[t(k,{name:"info-stroke",size:12}),m.info&&t(U,{content:m.info,placement:"right",theme:"dark",style:{marginLeft:"12px"}})]}),m.tip&&t(U,{content:m.tip,placement:"right",theme:"dark",style:{marginLeft:"8px"}})]},m.value)):t("span",{className:"land-select-drop-empty",children:"\u6682\u65E0\u5185\u5BB9"})})})]})},Il=B.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .land-select-title {
    font-size: var(--font-content-medium);
  }
`,Ml=B.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--gap-4);
  padding: 0 12px;
  width: 100%;
  height: 36px;
  font-size: 14px;
  border: 1px solid var(--color-border-2);
  border-radius: var(--radius-6);
  box-sizing: border-box;
  cursor: pointer;
  &.disabled{
    opacity: var(--opacity-68);
    background-color: var(--color-bg-3);
    cursor: not-allowed;
    .land-select-value-arrow{
      opacity: var(--opacity-04);
    }
  }
  p {
    flex: 1;
    font-size: 14px;
    &.land-select-placeholder {
      color: var(--color-text-5);
    }
    &.land-select-trigger {
      color: var(--color-text-2);
    }
  }
  svg {
    transition: transform var(--transition-15) ease;
  }
  &.show svg {
    transform: rotate(180deg);
  }
`,Ol=B.div`
  position: absolute;
  top: 100%;
  width: 100%;
  padding-top: 4px;
  opacity: 0;
  transform: scaleY(0.8);
  transform-origin: top center;
  pointer-events: none;
  transition: opacity var(--transition-15) ease,
    transform var(--transition-15) ease;
  z-index: 1;
  &.show {
    opacity: 1;
    transform: scaleY(1);
    pointer-events: all;
  }
`,zl=B.ul`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
  box-shadow: var(--boxshadow-small);
  .land-select-drop-empty{
    padding: 8px 12px;
    font-size: 14px;
    color: var(--color-text-4);
  }
`,_l=B.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--radius-4);
  padding: var(--padding-medium);
  color: var(--color-text-2);
  font-size: var(--font-content-medium);
  .land-select-item-info{
    height: 16px;
    position: relative;
    cursor: default;
  }
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.selected {
    background-color: var(--color-link-1);
  }
  &.disabled {
    .land-select-results-item-label,
    .land-select-item-info svg{
      opacity: var(--opacity-04);
    }
    cursor: not-allowed;
  }
`,Pl=({data:e,selectedValue:r,onClick:n})=>t(_,{children:e==null?void 0:e.map(o=>l(jo,{className:`${o.tip?"hover-pop":""} ${r===o.value?"selected":""} ${o.disabled?"disabled":""}`,onClick:()=>n==null?void 0:n(o),children:[t("div",{className:"land-select-results-item-label",children:o.label}),o.info&&l("div",{className:`land-select-item-info ${o.info?"hover-pop":""}`,children:[t(k,{name:"info-stroke"}),o.info&&t(U,{content:o.info,placement:"right",theme:"dark",style:{marginLeft:"12px"}})]}),o.tip&&t(U,{content:o.tip,placement:"right",theme:"dark",style:{marginLeft:"8px"}})]},o.value))}),$o=({data:e,placeholder:r="\u8BF7\u9009\u62E9",selected:n="0",width:o,title:a,titleInfo:i,info:u,disabled:s,onChange:c,className:d="",style:p})=>{const[g,v]=F(!1),[b,h]=F(n),[w,m]=F(void 0),[x,E]=F(),[C,A]=F();P(()=>{g||m(void 0)},[g]);const S=K(null);return un(S,()=>{v(!1)}),l(Hl,{ref:S,style:{width:o?"fit-content":typeof o=="number"?`${o}px`:o,...p},className:d,children:[a&&t(f,{title:a,type:"p",info:i}),l(Vl,{className:`hover-pop ${g?"show":""} ${s?"disabled":""}`,onClick:N=>{s||(N.stopPropagation(),v(!g))},children:[t("p",{className:`${b!=="0"?"land-select-trigger":"land-select-placeholder"}`,children:b==="0"?r:x}),t(k,{name:"arrow",className:"land-select-value-arrow"}),u&&t(U,{content:u,theme:"dark"})]}),t(Ul,{className:`land-select-results ${g?"show":""}`,children:t(ql,{children:e==null?void 0:e.map(N=>{var D,q;return l(jo,{className:`${N.tip?"hover-pop":""} ${x===N.label?"selected":""} ${w===N.value||((D=N.children)==null?void 0:D.filter(O=>O.value===C).length)>0?"open":""} ${N.disabled?"disabled":""}`,onClick:()=>{var O;N.disabled||(((O=N.children)==null?void 0:O.length)>0?m(N.value):(h(N.value),c==null||c(N),E(N.label),v(!1)))},children:[t("div",{className:"land-select-results-item-label",children:N.label}),N.info&&l("div",{className:`land-select-item-info ${N.info?"hover-pop":""}`,children:[t(k,{name:"info-stroke",size:12}),N.info&&t(U,{content:N.info,placement:"right",theme:"dark",style:{marginLeft:"12px"}})]}),N.tip&&t(U,{content:N.tip,placement:"right",theme:"dark",style:{marginLeft:"8px"}}),((q=N.children)==null?void 0:q.length)>0&&t(k,{name:"arrow",className:"land-select-item-arrow"}),N.children&&t(Zl,{show:w!=null,children:t(Pl,{data:N.children,selectedValue:C,onClick:O=>{h(O.value),A(O.value),c==null||c(O),E(l(J,{align:"center",gap:2,children:[N.label,t(k,{name:"arrow",stroke:"var(--color-text-5)",className:"land-select-value-divider-arrow"}),O.label]})),v(!1)}})})]},N.value)})})})]})},Hl=B.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .land-select-title {
    font-size: var(--font-content-medium);
  }
`,Vl=B.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--gap-4);
  padding: 0 12px;
  width: fit-content;
  height: 36px;
  font-size: 14px;
  border: 1px solid var(--color-border-2);
  border-radius: var(--radius-6);
  cursor: pointer;
  &.disabled{
    opacity: var(--opacity-68);
    background-color: var(--color-bg-3);
    cursor: not-allowed;
    .land-select-value-arrow{
      opacity: var(--opacity-04);
    }
  }
  p {
    flex: 1;
    font-size: 14px;
    white-space: nowrap;
    &.land-select-placeholder {
      color: var(--color-text-5);
    }
    &.land-select-trigger {
      color: var(--color-text-2);
    }
  }
  .land-select-value-arrow {
    transition: transform var(--transition-15) ease;
  }
  .land-select-value-divider-arrow{
    transform: rotate(-90deg);
  }
  &.show .land-select-value-arrow {
    transform: rotate(180deg);
  }
`,Ul=B.div`
  position: absolute;
  top: 100%;
  width: 100%;
  padding-top: 4px;
  opacity: 0;
  transform: scaleY(0.8);
  transform-origin: top center;
  pointer-events: none;
  transition: opacity var(--transition-15) ease,
    transform var(--transition-15) ease;
  z-index: 1;
  &.show {
    opacity: 1;
    transform: scaleY(1);
    pointer-events: all;
  }
`,ql=B.ul`
  padding: var(--padding-small);
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
  box-shadow: var(--boxshadow-small);
`,jo=B.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--radius-4);
  padding: var(--padding-medium);
  color: var(--color-text-2);
  font-size: var(--font-content-medium);
  .land-select-item-info{
    height: 16px;
    position: relative;
    cursor: default;
  }
  cursor: pointer;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.selected {
    background-color: var(--color-link-1);
  }
  &.open{
    background-color: var(--color-bg-1);
  }
  &.disabled {
    .land-select-results-item-label,
    .land-select-item-info svg{
      opacity: var(--opacity-04);
    }
    cursor: not-allowed;
  }

  .land-select-item-arrow{
    transform: rotate(-90deg);
  }
`,Zl=B.ul`
  position: absolute;
  left: 100%;
  top: 0;
  transform: translateX(8px);
  width: fit-content;
  display: flex;
  flex-direction: column;
  padding: var(--padding-small);
  max-height: 200px;
  overflow: auto;
  white-space: nowrap;
  border: 1px solid var(--color-border-2);
  background-color: var(--color-bg-white);
  border-radius: var(--radius-6);
  transition: opacity var(--transition-15) linear;
  box-shadow: var(--boxshadow-small);
  opacity: ${e=>e.show?1:0};
  pointer-events: ${e=>e.show?"all":"none"};
  &::-webkit-scrollbar{
    width: 0px;
    display: none;
  }

`,zt=({checked:e=1,data:r=[],onChange:n,style:o,className:a=""})=>t(Gl,{className:`land-radio-wrap ${a}`,style:o,children:r==null?void 0:r.map(i=>l(Xl,{className:`land-radio-item ${i.info?"hover-pop":""} ${i.disabled?"disabled":""}`,children:[t(U,{content:i.info,theme:"dark",style:{maxWidth:"200px"}}),l(Yl,{onClick:u=>{i.disabled||(u.stopPropagation(),n==null||n(i))},className:"land-radio-label",children:[t(Kl,{className:`${e===i.value?"checked":""}`,children:t(k,{name:"check",size:10,strokeWidth:0,fill:e===i.value?"var(--color-bg-white)":"inherit"})}),i.label]}),i.iconInfo&&l(Jl,{className:"hover-pop",children:[t(k,{name:"info-stroke",stroke:"var(--color-text-4)",size:12}),t(U,{content:i.iconInfo,theme:"dark",style:{maxWidth:"200px"}})]})]},i.value))}),Gl=B.div`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`,Xl=B.div`
  position: relative;
   display: flex;
  align-items: center;
  gap: var(--gap-4); 
  cursor: pointer;
  &.disabled{
    .land-radio-label{
      opacity: var(--opacity-04);
    }
    cursor: not-allowed;
  }
`,Yl=B.div`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  font-size: var(--font-content-medium);
  color: var(--color-text-2);
  white-space: nowrap;
`,Kl=B.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-8);
  border: 1px solid var(--color-border-3);
  flex-shrink: 0;
  transition: all var(--transition-15) linear;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.checked {
    border-color: var(--color-primary-6);
    background-color: var(--color-primary-6);
    svg path {
      fill: var(--color-bg-white);
    }
  }
`,Jl=B.div`
  position: relative;
  height: 12px;
  line-height: 12px;
`,xt=({type:e="border",disabled:r,style:n,className:o="",...a})=>t(Wl,{className:`land-datePicker-wrap ${r?"disabled":""} ${e} ${o}`,style:n,children:t("input",{type:"date",...a})}),Wl=B.a`
  padding: 0 12px;
  border-radius: var(--radius-6);
  transition: background-color var(--transition-15) linear;
  input{
    height: 36px;
    background-color: transparent;
    border: none;
    &:focus,
    &:focus-within,
    &:focus-visible,
    &:active{
      outline: 0px;
    }
  }
  &.border{
    border: var(--border-1) solid var(--color-border-2);
    &:hover:not(.disabled){
    background-color: var(--color-bg-1);
    }
    &:active:not(.disabled){
      background-color: var(--color-bg-2);
    }
  }
  &.background{
    background-color: var(--color-bg-1);
    &:hover:not(.disabled){
    background-color: var(--color-bg-2);
    }
    &:active:not(.disabled){
      background-color: var(--color-bg-3);
    }
  }
  &.disabled{
    opacity: var(--opacity-68);
    cursor: not-allowed;
  }
`,Oe=({checked:e,label:r,checkedLabel:n,icon:o,checkedIcon:a,info:i,iconInfo:u,popProps:s,onChange:c,dark:d,disabled:p,style:g,className:v=""})=>{const[b,h]=F(e);return P(()=>h(e),[e]),l(Ql,{className:`land-switch-wrap ${i?"hover-pop":""} ${p?"disabled":""}`,children:[t(U,{content:i,theme:"dark",...s}),l(es,{className:`land-switch-content ${d?"dark":""} ${b?"checked":""} ${v}`,style:g,onClick:()=>{p||(h(!b),c==null||c(b))},children:[t("div",{className:"land-switch-bar",children:t("div",{className:"land-switch-indicator",children:b?a:o})}),(r||n)&&t("div",{className:"land-switch-label",children:b?n:r})]}),u&&l("div",{className:"land-switch-label-iconInfo hover-pop",children:[t(k,{name:"info-stroke",size:16}),t(U,{content:u,theme:"dark",...s})]})]})},Ql=B.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  &.disabled{
    .land-switch-content{
      opacity: var(--opacity-04);
      cursor: not-allowed;
    }
    cursor: not-allowed;
  }
`,es=B.div`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  cursor: pointer;
  .land-switch-bar {
    display: flex;
    justify-content: start;
    padding: 2px;
    width: 40px;
    height: 24px;
    background-color: var(--color-bg-2);
    border-radius: 24px;
    flex-shrink: 0;
    transition: background-color var(--transition-15) linear;
    &:hover {
      background-color: var(--color-bg-2);
    }
    &:active {
      background-color: var(--color-bg-3);
    }
  }
  .land-switch-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    aspect-ratio: 1;
    background-color: var(--color-bg-white);
    border-radius: 100%;
    transform: translateX(0px);
    transition: transform var(--transition-15) linear;
  }
  .land-switch-label {
    font-size: var(--font-content-medium);
    color: var(--color-text-3);
  }
  & + .land-switch-label-iconInfo {
    position: relative;
    height: 16px;
    cursor: default;
  }
  &.checked {
    .land-switch-bar {
      background-color: var(--color-primary-6);
      transition-delay: 100ms;
    }
    .land-switch-indicator {
      transform: translateX(16px);
    }
  }
  &.dark{
    .land-switch-bar{
      background-color: rgba(0,0,0,0.2);
      &:hover {
        background-color: rgba(0,0,0,0.2);
      }
    }
    &.checked{
      .land-switch-bar {
      background-color: var(--color-primary-6);
      transition-delay: 100ms;
    }
    }
    }
`,He=({prefix:e,suffix:r,useDivider:n=!1,min:o=0,max:a=100,step:i=1,value:u=0,height:s=36,onChange:c,className:d})=>{const p=K(null);return l("div",{ref:p,className:"flex items-center gap-8 width-100",children:[e&&t("div",{className:"fs-12 color-gray-3",children:e}),t(ts,{useDivider:n,step:100*i/(a-o),className:`relative flex-1 p-2 radius-8 bg-gray hover:bg-gray transition-2s ${d||""}`,style:{height:`${s}px`},children:t(rs,{type:"range",value:u,min:o,max:a,step:i,onChange:g=>{c==null||c(Number(g.target.value))},style:{background:u<(a-o)/2?`linear-gradient(to right,var(--color-primary-6) calc(100% - 2px), var(--color-primary-6)  calc(100% - 2px)) 0 0 / ${(u-o)/(a-o)*100}% 100% no-repeat`:`linear-gradient(to right,var(--color-primary-6) calc(100% - 2px), var(--color-primary-6)  calc(100% - 2px)) 0 0 / ${(u-o)/(a-o)*100}% 100% no-repeat`},className:`width-100 radius-6 flex justify-center ${s<=16?"circle":""}`})}),r&&t("div",{className:"fs-12 color-gray-3",children:r})]})},ts=B.div`
  &::before {
    content: "";
    display: block;
    margin-top: 4px;
    width: 100%;
    height: calc(100% - 8px);
    border-radius: 8px;
    background: ${e=>e.useDivider?`linear-gradient(to right,transparent calc(100% - 1px), var(--color-bg-1)  calc(100% - 1px),var(--color-bg-1) 100%) 0 0 / 100% 100%,
          linear-gradient(to right,transparent calc(100% - 1px), var(--color-border-3) calc(100% - 1px),var(--color-border-3) 100%) 0 0 / ${e.step}% 100%,var(--color-bg-1) 0 0 / 100% 100%`:"transparent"};
    transition: all 0.2s linear;
  }
  &:hover::before {
    background: ${e=>e.useDivider?`linear-gradient(to right,transparent calc(100% - 1px), var(--color-bg-2)  calc(100% - 1px),var(--color-bg-2) 100%) 0 0 / 100% 100%,
          linear-gradient(to right,transparent calc(100% - 1px), var(--color-border-3) calc(100% - 1px),var(--color-border-3) 100%) 0 0 / ${e.step}% 100%,var(--color-bg-2) 0 0 / 100% 100%`:""};
  }
`,rs=B.input`
  position: absolute;
  top: 2px;
  height: calc(100% - 4px);
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  border: 0px;
  outline: none;
  object-fit: contain;
  &[type="range"] {
    width: 100% - 4px;
  }
  &::-webkit-slider-runnable-track {
    height: 100%;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 100%;
    border-radius: 6px;
    background: var(--color-text-white);
    border: 1px solid var(--color-border-3);
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.04);
    transition: border-color linear 0.2s;
    &:hover {
      border-color: rgba(69, 80, 102, 0.25);
      cursor: ew-resize;
    }
  }
  &.circle {
    &::-webkit-slider-thumb {
      width: auto;
      aspect-ratio: 1;
      height: calc(100% + 8px);
      transform: translateY(-4px);
    }
  }
`,Hr=({desc:e,fileType:r,onUpload:n,children:o,width:a="100%",height:i="100px",style:u,className:s="",innerClassName:c=""})=>{const d=K(null),[p,g]=F(),[v,b]=F(),[h,w]=F(!1),m=(C,A)=>{C.preventDefault(),w(!0),A&&(b(A),new FileReader().readAsDataURL(A),g(URL.createObjectURL(A)),w(!1))};P(()=>{n==null||n(p,v)},[p]);const[x,E]=F(!1);return l(ns,{className:`${x?"drag":""} ${s}`,style:u,onDragOver:C=>{E(!0),C.preventDefault()},onDrop:C=>m(C,C.dataTransfer.files[0]),onDragLeave:()=>E(!1),width:a,height:i,children:[t(os,{ref:d,type:"file",accept:r,className:c,onChange:C=>{m(C,C.target.files[0])}}),o||(h?t(_,{children:"\u4E0A\u4F20\u4E2D"}):x?t("div",{className:"land-uploader-desc",children:"\u91CA\u653E\u5373\u53EF\u4E0A\u4F20"}):l(_,{children:[t("div",{className:"land-uploader-icon",children:t(k,{name:"upload"})}),e&&t("div",{className:"land-uploader-desc",children:e})]}))]})},ns=B.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-8);
  padding: 16px;
  width: ${e=>e.width};
  height: ${e=>e.height};
  background-color: var(--color-bg-1);
  border: 1px dashed var(--color-border-2);
  transition: background-color var(--transition-15) linear;
  cursor: pointer;
  &.drag,
  &:hover {
    background-color: var(--color-bg-2);
  }
  &:active {
    background-color: var(--color-bg-3);
  }
  .land-uploader-icon {
    font-size: 20px;
    color: var(--color-text-5);
  }
  .land-uploader-desc {
    font-size: 14px;
    color: var(--color-text-5);
    transition: all var(--transition-15) linear;
  }
`,os=B.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`,To=({step:e=5,style:r,className:n=""})=>t(as,{className:`land-rate-wrap ${n}`,style:r,children:Array.from({length:e}).map((o,a)=>l("div",{className:"land-rate-character half",children:[t("div",{className:"land-rate-character-left",role:"radio","aria-checked":"true","aria-setsize":e,"aria-posinset":.5,children:t("svg",{fill:"none",stroke:"currentColor","stroke-width":"4",viewBox:"0 0 48 48","aria-hidden":"true",focusable:"false",className:"land-icon land-icon-star-fill",children:t("path",{fill:"currentColor",stroke:"none",d:"M22.683 5.415c.568-1.043 2.065-1.043 2.634 0l5.507 10.098a1.5 1.5 0 0 0 1.04.756l11.306 2.117c1.168.219 1.63 1.642.814 2.505l-7.902 8.359a1.5 1.5 0 0 0-.397 1.223l1.48 11.407c.153 1.177-1.058 2.057-2.131 1.548l-10.391-4.933a1.5 1.5 0 0 0-1.287 0l-10.39 4.933c-1.073.51-2.284-.37-2.131-1.548l1.48-11.407a1.5 1.5 0 0 0-.398-1.223L4.015 20.89c-.816-.863-.353-2.286.814-2.505l11.306-2.117a1.5 1.5 0 0 0 1.04-.756l5.508-10.098Z"})})}),t("div",{className:"land-rate-character-right",role:"radio","aria-checked":"true","aria-setsize":e,"aria-posinset":1,children:t("svg",{fill:"none",stroke:"currentColor","stroke-width":"4",viewBox:"0 0 48 48","aria-hidden":"true",focusable:"false",className:"land-icon land-icon-star-fill",children:t("path",{fill:"currentColor",stroke:"none",d:"M22.683 5.415c.568-1.043 2.065-1.043 2.634 0l5.507 10.098a1.5 1.5 0 0 0 1.04.756l11.306 2.117c1.168.219 1.63 1.642.814 2.505l-7.902 8.359a1.5 1.5 0 0 0-.397 1.223l1.48 11.407c.153 1.177-1.058 2.057-2.131 1.548l-10.391-4.933a1.5 1.5 0 0 0-1.287 0l-10.39 4.933c-1.073.51-2.284-.37-2.131-1.548l1.48-11.407a1.5 1.5 0 0 0-.398-1.223L4.015 20.89c-.816-.863-.353-2.286.814-2.505l11.306-2.117a1.5 1.5 0 0 0 1.04-.756l5.508-10.098Z"})})})]},a))}),as=B.div`
  &.land-rate-wrap {
    display: flex;
    gap: var(--gap-8);
  }
  .land-rate-character {
    width: 24px;
    height: 24px;
    .land-icon-star-fill path {
      fill: var(--color-bg-3);
    }
  }
`;function is(){const[e,r]=F(""),[n,o]=F("1, 200");return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u8F93\u5165\u6846",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(se,{value:e,onChange:a=>r(a),onClear:()=>r("")})}),t(f,{title:"\u8F93\u5165\u6846\u6837\u5F0F\u7C7B\u578B",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t(se,{value:e,onChange:a=>r(a),onClear:()=>r("")}),t(se,{type:"background",value:e,onChange:a=>r(a),onClear:()=>r("")}),t(se,{type:"transparent",value:e,onChange:a=>r(a),onClear:()=>r("")})]}),t(f,{title:"\u7981\u7528",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(se,{disabled:!0})}),t(f,{title:"\u8F93\u5165\u6846\u7ED3\u6784\u524D\u7F00",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(se,{value:e,inputType:"tel",beforeContent:t(k,{name:"search",stroke:"var(--color-text-5)"}),onChange:a=>r(a),onClear:()=>r("")})}),t(f,{title:"\u8F93\u5165\u6846\u7ED3\u6784\u540E\u7F00",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(se,{value:e,afterContent:t(L,{icon:t(k,{name:"download"}),size:"small",type:"text"}),onChange:a=>r(a)})}),t(f,{title:"\u8F93\u5165\u6846\u5185\u5BB9\u524D\u7F00",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(se,{value:e,prefix:"(+86)",onChange:a=>r(a),onClear:()=>r("")})}),t(f,{title:"\u8F93\u5165\u6846\u5185\u5BB9\u540E\u7F00\uFF08\u5E38\u7528\u8BED\u5355\u4F4D\u7B49\uFF09",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(se,{value:n,suffix:"\u4EBA\u6B21",onChange:a=>o(a),onClear:()=>o("")})})]})})}function us(){return l("div",{className:"flex column gap-24",children:[l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u8F93\u5165\u6846",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Pr,{maxLength:20})})]}),l("div",{className:"flex column gap-12",children:[t(f,{title:"\u9AD8\u4EAE\u6587\u5B57",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Pr,{highlightStr:["\u4E0D\u597D"]})})]})]})}function ls(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u5355\u9009\u6846",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Ne,{data:[{value:1,label:"\u9009\u98791"},{value:2,label:"\u9009\u98792"},{value:3,label:"\u9009\u98793"}]})}),t(f,{title:"\u5305\u542B\u63D0\u793A\u5185\u5BB9",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Ne,{data:[{value:1,label:"1"},{value:2,label:"5"},{value:3,label:"10"}],info:"\u9009\u6846\u63D0\u793A\u5185\u5BB9"})}),t(f,{title:"\u5305\u542B\u6807\u9898",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Ne,{data:[{value:1,label:"1"},{value:2,label:"5"},{value:3,label:"10"}],title:"\u9009\u62E9\u6570\u91CF",info:"\u9009\u6846\u63D0\u793A\u5185\u5BB9"})}),t(f,{title:"\u9009\u9879\u5305\u542B\u63D0\u793A\u5185\u5BB9",type:"h3",info:"\u63D0\u793A\u5185\u5BB9\u7684\u5C55\u793A\u5F62\u5F0F\u6709\u4E24\u79CD\uFF1A\u6574\u4E2A\u9009\u9879\u548C\u9009\u9879\u540E\u7F6E\u56FE\u6807"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Ne,{data:[{value:1,label:"\u9009\u98791",info:"\u63D0\u793A1"},{value:2,label:"\u9009\u98792",tip:"\u63D0\u793A2"},{value:3,label:"\u9009\u98793"}]})}),t(f,{title:"\u9009\u6846\u6574\u4F53\u7981\u7528",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Ne,{data:[{value:1,label:"\u9009\u98791"},{value:2,label:"\u9009\u98792"},{value:3,label:"\u9009\u98793"}],disabled:!0})}),t(f,{title:"\u9009\u9879\u7981\u7528",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Ne,{data:[{value:1,label:"\u9009\u98791"},{value:2,label:"\u9009\u98792"},{value:3,label:"\u9009\u98793",disabled:!0,info:"\u6B64\u9009\u9879\u6682\u65E0\u6CD5\u9009\u62E9"}]})})]})})}function ss(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u8F93\u5165\u6846",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t($o,{data:[{value:"all",label:"\u5168\u90E8"},{value:"shenzhen",label:"\u6DF1\u5733\u5E02",children:[{value:"nanshan",label:"\u5357\u5C71\u533A"},{value:"futian",label:"\u798F\u7530\u533A"},{value:"baoan",label:"\u5B9D\u5B89\u533A"}]}]})})]})})}const Ro=({url:e,className:r,imgClassName:n,imgStyle:o,style:a,ratio:i})=>{const u=K(null),[s,c]=F(!0),[d,p]=F(!1);return l(cs,{className:`${s?"loading":""} relative flex items-center justify-center ${s||d?"bg-gray radius-6 overflow-hidden":""} ${r}`,style:{aspectRatio:i&&(s||d)?`${i}`:"auto",...a},children:[d&&t(k,{name:"error-fill",fill:"var(--color-red-3)"}),t("img",{ref:u,src:e,className:`${s?"opacity-0":"opacity-1"} transition ${n}`,style:{zIndex:"1",maxWidth:"100%",...o},onLoad:()=>c(!1),onError:()=>p(!0)})]})},cs=B.div`
  &.loading {
    background: linear-gradient(90deg, #f2f4f7 25%, #edeff2 37%, #f2f4f7 63%);
    animation: skeleton-loading 1.4s ease infinite;
    @keyframes skeleton-loading {
      0% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0 50%;
      }
    }
  }
`;function ds(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u6309\u94AE\u7C7B\u578B",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Ro,{url:"https://ingenueland.online/crochet-time/images/colorcard_default.jpeg"})})]})})}function ps(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u8F93\u5165\u6846",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(zt,{data:[{value:1,label:"\u9009\u98791"},{value:2,label:"\u9009\u98792"},{value:3,label:"\u9009\u98793"}]})}),t(f,{title:"\u5305\u542B\u63D0\u793A\u5185\u5BB9",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(zt,{data:[{value:1,label:"\u9009\u98791",iconInfo:"\u63D0\u793A\u5185\u5BB9"},{value:2,label:"\u9009\u98792",info:"\u63D0\u793A\u5185\u5BB9"},{value:3,label:"\u9009\u98793"}]})}),t(f,{title:"\u5305\u542B\u7981\u7528\u9009\u9879",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(zt,{data:[{value:1,label:"\u9009\u98791"},{value:2,label:"\u9009\u98792",disabled:!0,info:"\u7981\u7528\u9009\u9879"},{value:3,label:"\u9009\u98793"}]})})]})})}const _t=({checked:e=[1],data:r=[{value:1,label:"\u9009\u98791"},{value:2,label:"\u9009\u98792"},{value:3,label:"\u9009\u98793"}],onChange:n,style:o,className:a=""})=>t(hs,{className:`land-checkbox-wrap ${a}`,style:o,children:r==null?void 0:r.map(i=>l(fs,{className:`land-checkbox-item ${i.info?"hover-pop":""} ${i.disabled?"disabled":""}`,children:[t(U,{content:i.info,theme:"dark",style:{maxWidth:"200px"}}),l(ms,{onClick:u=>{i.disabled||(u.stopPropagation(),n==null||n(i))},className:"land-checkbox-label",children:[t(gs,{className:`${e.includes(i.value)?"checked":""}`,children:t(k,{name:"check",size:10,strokeWidth:0,fill:"var(--color-bg-white)"})}),i.label]}),i.iconInfo&&l(vs,{className:"hover-pop",children:[t(k,{name:"info-stroke",size:12,stroke:"var(--color-text-4)"}),t(U,{content:i.iconInfo,theme:"dark",style:{maxWidth:"200px"}})]})]},i.value))}),hs=B.div`
  display: flex;
  align-items: center;
  gap: var(--gap-16);
`,fs=B.div`
  position: relative;
   display: flex;
  align-items: center;
  gap: var(--gap-4); 
  cursor: pointer;
  &.disabled{
    .land-checkbox-label{
      opacity: var(--opacity-04);
    }
    cursor: not-allowed;
  }
`,ms=B.div`
  display: flex;
  align-items: center;
  gap: var(--gap-8);
  font-size: var(--font-content-medium);
  color: var(--color-text-2);
`,gs=B.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-4);
  border: 1px solid var(--color-border-3);
  transition: all var(--transition-15) linear;
  &:hover {
    background-color: var(--color-bg-1);
  }
  &:active {
    background-color: var(--color-bg-2);
  }
  &.checked {
    border-color: var(--color-primary-6);
    background-color: var(--color-primary-6);
    svg path {
      fill: var(--color-bg-white);
    }
  }
`,vs=B.div`
  position: relative;
  height: 12px;
  line-height: 12px;
`;function ys(){const[e,r]=F([]);return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u8F93\u5165\u6846",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(_t,{data:[{value:1,label:"\u9009\u98791"},{value:2,label:"\u9009\u98792"},{value:3,label:"\u9009\u98793"}],checked:e,onChange:n=>{e.includes(n.value)?r(e.filter(o=>o!==n.value)):r([...e,n.value])}})}),t(f,{title:"\u5305\u542B\u63D0\u793A\u5185\u5BB9",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(_t,{data:[{value:1,label:"\u9009\u98791",iconInfo:"\u63D0\u793A\u5185\u5BB9"},{value:2,label:"\u9009\u98792",info:"\u63D0\u793A\u5185\u5BB9"},{value:3,label:"\u9009\u98793"}],checked:e,onChange:n=>{e.includes(n.value)?r(e.filter(o=>o!==n.value)):r([...e,n.value])}})}),t(f,{title:"\u5305\u542B\u7981\u7528\u9009\u9879",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(_t,{data:[{value:1,label:"\u9009\u98791"},{value:2,label:"\u9009\u98792",disabled:!0,info:"\u7981\u7528\u9009\u9879"},{value:3,label:"\u9009\u98793"}],checked:e,onChange:n=>{e.includes(n.value)?r(e.filter(o=>o!==n.value)):r([...e,n.value])}})})]})})}function bs(){const[e,r]=F("var(--color-primary-6)");return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u989C\u8272\u8F93\u5165\u6846",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(an,{value:e,size:32,onChange:n=>r(n)})})]})})}function xs(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u8F93\u5165\u6846",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(xt,{})}),t(f,{title:"\u8BBE\u7F6E\u7C7B\u578B",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t(xt,{type:"border"}),t(xt,{type:"background"})]}),t(f,{title:"\u7981\u7528",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(xt,{disabled:!0})})]})})}function ws(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u8F93\u5165\u6846",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(je,{value:0})}),t(f,{title:"\u8BBE\u7F6E\u7C7B\u578B",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t(je,{value:0}),t(je,{type:"background",value:0})]}),t(f,{title:"\u8BBE\u7F6E\u5185\u5BB9\u524D\u7F00",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(je,{value:0,prefix:"\u603B\u4EBA\u6570\uFF1A"})}),t(f,{title:"\u8BBE\u7F6E\u5185\u5BB9\u540E\u7F00",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(je,{value:0,suffix:"%"})}),t(f,{title:"\u7981\u7528",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(je,{value:0,disabled:!0})})]})})}function Es(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u8F93\u5165\u6846",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Hr,{})}),t(f,{title:"\u8BBE\u7F6E\u63CF\u8FF0\u4FE1\u606F",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Hr,{desc:"\u70B9\u51FB\u6216\u62D6\u62FD\u4E0A\u4F20\u56FE\u7247"})})]})})}function Fs(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u5F00\u5173",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Oe,{})}),t(f,{title:"\u5305\u542B\u6807\u9898",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Oe,{label:"\u662F\u5426\u5F00\u542F",checkedLabel:"\u662F\u5426\u5F00\u542F"})}),t(f,{title:"\u5305\u542B\u63D0\u793A\u5185\u5BB9",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Oe,{label:"\u662F\u5426\u5F00\u542F",checkedLabel:"\u662F\u5426\u5F00\u542F",iconInfo:"\u5F00\u542F\u540E..."})}),t(f,{title:"\u7981\u7528",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Oe,{label:"\u662F\u5426\u5F00\u542F",checkedLabel:"\u662F\u5426\u5F00\u542F",disabled:!0,info:"\u7981\u7528"})}),t(f,{title:"\u5305\u542B\u56FE\u6807",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Oe,{label:"\u662F\u5426\u5F00\u542F",checkedLabel:"\u662F\u5426\u5F00\u542F",icon:t(k,{name:"light",size:12,stroke:"var(--color-primary-6)"}),checkedIcon:t(k,{name:"dark",size:12,fill:"var(--color-primary-6)"})})})]})})}function Cs(){const[e,r]=F(20);return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u8F93\u5165\u6761",type:"h3"}),l("div",{className:"flex column justify-center gap-24 border p-32 width-100 border-box",children:[t(He,{height:16,step:10,value:e,onChange:n=>r(n)}),t(He,{height:36,step:10,value:e,onChange:n=>r(n)})]}),t(f,{title:"\u663E\u793A\u5206\u5272\u7EBF",type:"h3"}),t("div",{className:"flex column justify-center gap-24 border p-32 width-100 border-box",children:t(He,{height:36,step:10,useDivider:!0,value:e,onChange:n=>r(n)})}),t(f,{title:"\u663E\u793A\u8FB9\u754C\u503C",type:"h3"}),l("div",{className:"flex column justify-center gap-24 border p-32 width-100 border-box",children:[t(He,{height:36,step:10,max:100,useDivider:!0,prefix:"0%",suffix:"100%",value:e,onChange:n=>r(n)}),t(He,{height:36,step:10,max:100,useDivider:!0,prefix:t(L,{type:"background",size:"small",icon:t(k,{name:"dec"}),onClick:()=>e>=10&&r(e-10)}),suffix:t(L,{type:"background",size:"small",icon:t(k,{name:"add"}),onClick:()=>e<=90&&r(e+10)}),value:e,onChange:n=>r(n)})]})]})})}const ks=({type:e="img",url:r,className:n="",style:o,wrapClassName:a="",onChange:i})=>{const u=K(null),s=K(null),c=K(null),[d,p]=F({w:200,h:200,ratio:1});P(()=>{if(s.current){const b=s.current.getBoundingClientRect();p({w:b.width,h:b.height,ratio:b.width/b.height})}if(c.current){const b=c.current.getBoundingClientRect();p({w:b.width,h:b.height,ratio:b.width/b.height})}i==null||i(d.w,d.h),console.log(d)});const[g,v]=F("s");return P(()=>{if(!u.current)return;const b=w=>{w.forEach(m=>{const{width:x,height:E}=m.contentRect;console.log(x,E),x/E>d.ratio?v("h"):x/E<d.ratio?v("v"):v("s")})},h=new ResizeObserver(b);return h.observe(u.current),()=>h.disconnect()}),t("div",{ref:u,className:`land-auto-media flex items-center justify-center width-100 height-100 ${a}`,children:e==="img"?t("img",{ref:s,src:r,className:`${g==="h"?"height-100":"width-100"} ${n}`,style:o}):t("video",{src:r,ref:c,preload:"auto",muted:!0,autoPlay:!0,disablePictureInPicture:!0,"x-webkit-airplay":"deny",className:`${g==="h"?"height-100":"width-100"} ${n}`,style:o})})};function Bs(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u8F93\u5165\u6846",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(ks,{url:"https://cdn-bastani.stunning.kr/prod/portfolios/d0e17867-2326-4d2f-9a31-acc1d4e2f35b/contents/f3hniwKXamztM4VV.P20240302_094300270_5C7F44C7-3ECA-413A-A8FF-806ED34DD5FC.PNG"})})]})})}const As=({curPercentage:e=0,bufferPercentage:r=0,activeBg:n="var(--color-primary-6)",onClick:o,onMove:a,onMouseLeave:i})=>{const u=K(null),[s,c]=F();P(()=>{const m=E=>{E.forEach(C=>{c(C.contentRect.width)})},x=new ResizeObserver(m);return x.observe(u.current),()=>x.disconnect()},[]);const[d,p]=F(!1),[g,v]=F(!1),[b,h]=F(0),w=it(m=>{m.stopPropagation(),m.preventDefault();const x=m.target.getBoundingClientRect();x&&(h((m.clientX-x.left)/x.width),g&&(o==null||o((m.clientX-x.left)/x.width,m))),a==null||a((m.clientX-x.left)/x.width,m.clientX-x.left,x.width,m)},[g]);return l(Ns,{ref:u,className:`land-video-progress-bar ${d?"hover":""}`,children:[l("div",{className:"land-video-progress-bar-list",onMouseMove:w,onMouseDown:m=>{m.preventDefault()},onClick:()=>{v(!0),o==null||o(b,length)},onMouseLeave:m=>{h(0),p(!1),v(!1),i==null||i(m)},onMouseOver:()=>p(!0),onMouseUp:()=>v(!1),children:[t("div",{className:"land-video-progress-bar default"}),t("div",{className:"land-video-progress-bar buffer",style:{transform:`scaleX(${r})`}}),t("div",{className:"land-video-progress-bar hover",style:{transform:`scaleX(${b})`}}),t("div",{className:"land-video-progress-bar marker",onMouseMove:()=>console.log("move2"),style:{transform:`scaleX(${e})`,backgroundColor:n}})]}),t("div",{className:"land-video-progress-bar-thumb",style:{transform:`translateX(${e*s}px)`,backgroundColor:n}})]})},Ns=B.div`
  position: relative;
  width: 100%;
  height: 0.25rem;
  border-radius: 2px;
  .land-video-progress-bar-list{
    width: 100%;
    height: 100%;
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.2s linear;
  }
  .land-video-progress-bar.default{
    background-color: rgba(255,255,255,0.36);
  }
  .land-video-progress-bar.buffer{
    background-color: rgba(255,255,255,0.6);
  }
  .land-video-progress-bar.hover{
    background-color: rgba(255,255,255,0.8);
  }
  .land-video-progress-bar{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform-origin: left center;
    pointer-events: none;
  }
  .land-video-progress-bar-thumb{
    position: absolute;
    left: -0.5rem;
    top: -0.375rem;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    opacity: 0;
    transition: opacity 0.2s linear;
    pointer-events: none;
  }
  &.hover{
    .land-video-progress-bar-list{
      transform: scaleY(2);
    }
    .land-video-progress-bar-thumb{
        opacity: 1;
      }
  }
`,Ss=({rateData:e=[{key:1,value:.5},{key:2,value:1},{key:3,value:1.25},{key:4,value:1.5},{key:5,value:2},{key:6,value:3}],rateValue:r=1,onRateChange:n,loop:o=!1,onLoopChange:a})=>l(Ls,{children:[l(J,{gap:8,column:!0,children:[t("span",{children:"\u500D\u6570"}),t(Et,{gap:4,type:lr.ColumnRepeat,repeatNum:3,children:e==null?void 0:e.map((i,u)=>{var s;return l(Ds,{className:`${r===i.value?"active":""}`,onClick:c=>n==null?void 0:n(i.value,i,c),children:[i.value," x"]},(s=i.key)!=null?s:u)})})]}),l(J,{justify:"space-between",w:"100%",children:["\u81EA\u52A8\u5FAA\u73AF",t(Oe,{checked:o,dark:!0,onChange:a})]})]}),Ls=B.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  white-space: nowrap;
`,Ds=B.div`
  padding: 2px 0;
  width: 48px;
  font-size: 0.75rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  transition: all 0.2s linear;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  &.active {
    color: rgba(255, 255, 255, 1);
    border-color: rgba(255, 255, 255, 1);
  }
`,On=e=>{if(!e)return"00:00";if(typeof e=="string")return e;const r=Math.floor(e/3600),n=Math.floor(e%3600/60),o=Math.round(e%60),a=r<10?"0"+r:r,i=n<10?"0"+n:n,u=o<10?"0"+o:o;return r>0?a+":"+i+":"+u:i+":"+u},me=({type:e="default",direction:r="row",title:n,link:o,onLinkClick:a})=>{const i=oe(()=>r==="row"?16:24,[r]);return l($s,{direction:r,children:[e==="fail"&&t(k,{name:"error-fill",size:i,fill:"var(--color-red-6)"}),e==="default"&&t(k,{name:"attention-fill",size:i,fill:"var(--color-primary-6)"}),e==="warn"&&t(k,{name:"attention-fill",size:i,fill:"var(--color-orange-6)"}),e==="error"&&t(k,{name:"attention-fill",size:i,fill:"var(--color-red-6)"}),e==="success"&&t(k,{name:"check-fill",size:i,fill:"var(--color-green-6)"}),e==="loading"&&t(ze,{size:i,color:"var(--color-primary-6)"}),l("div",{className:"land-alert-title",children:[n,o&&l(_,{children:["\uFF0C",t(X,{onClick:a,children:o})]})]})]})},$s=B.div`
  display: flex;
  flex-direction: ${e=>e.direction};
  align-items: center;
  gap: ${e=>e.direction==="row"?"4px":"8px"};
  .land-alert-title {
    font-size: 14px;
    color: var(--color-text-3);
  }
`,Dt=({src:e,forwardSecond:r=5,useKeyImg:n,onFullWidthChange:o,useKeyControls:a,className:i="",style:u,videoClassName:s="",videoStyle:c,showControls:d,usePrevEpisode:p,useNextEpisode:g,prevEpisodeHref:v,nextEpisodeHref:b})=>{var yn,bn,xn;const h=K(null),[w,m]=F(1),[x,E]=F(0),[C,A]=F(0),[S,N]=F(0),[D,q]=F(!0),[O,ae]=F(!1),[H,$]=F(!1),Y=()=>{if(h.current){const T=h.current;if(A(T.currentTime),T.buffered.length>0){const Q=T.buffered.end(T.buffered.length-1);N(Q)}h.current.currentTime===0&&q(!0)}},W=it(()=>{!h.current||(h.current.paused?h.current.play():h.current.pause())},[e]),Z=K(null),[R,z]=F(0),[Ee,he]=F(!1),fe=oe(()=>w<1?100:200,[w]),Se=(T,Q,ue)=>{if(he(!0),console.log(Q,ue,fe),Q<fe/2?z(0):Q<ue-fe/2?z(Q-fe/2):z(ue-fe),!h.current||!Z.current)return;const Nt=h.current,wr=Z.current;wr.getContext("2d").drawImage(Nt,0,0,wr.width,wr.height)},[le,_e]=F(100),[Pe,Ye]=F(100),[Le,Te]=F(!0),Re=K(null),[Fe,Ke]=F(!1),Je=T=>{!h.current||(_e(T),h.current.volume=T/100)};P(()=>{le!==0&&(Ye(le),Te(!1),Ke(le<100)),le===0&&Te(!0)},[le]);const Ce=()=>{!h.current||(Le?Pe>0?(h.current.volume=Pe/100,_e(Pe)):(h.current.volume=1,_e(100)):(h.current.volume=0,_e(0)),Te(!Le))};P(()=>{h.current&&h.current.pause()},[e]),un(Re,()=>{Fe&&Ke(!1)});const[xa,wa]=F(1),mr=it((T,Q)=>{wa(Q.value),h.current&&(console.log(T,h.current.playbackRate),h.current.playbackRate=T)},[]),[gr,Ea]=F(!1),Fa=async()=>{if(!h.current)return;const T=h.current;try{T!==document.pictureInPictureElement?await T.requestPictureInPicture():await document.exitPictureInPicture()}catch(Q){console.error("Error with Picture-in-Picture:",Q)}},[vr,Ca]=F(!1),[At,ka]=F(!1),Ba=()=>{if(!h.current)return;const T=h.current;T.requestFullscreen&&T.requestFullscreen()},[yr,mn]=F(!1),[br,gn]=F(!1),[xr,vn]=F(!1);return P(()=>{if(yr){const T=setTimeout(()=>{mn(!1)},800);return()=>clearTimeout(T)}},[yr]),P(()=>{if(br){const T=setTimeout(()=>{gn(!1)},800);return()=>clearTimeout(T)}},[br]),P(()=>{if(xr){const T=setTimeout(()=>{vn(!1)},800);return()=>clearTimeout(T)}},[xr]),P(()=>{if(!h.current||!a)return;const T=h.current,Q=ue=>{if(ue.preventDefault(),ue.code==="ArrowLeft"||ue.key==="ArrowLeft"){if(T.paused)return;T.currentTime=Math.max(0,T.currentTime-r),A(Math.max(0,T.currentTime-r)),mn(!0)}if(ue.code==="ArrowRight"||ue.key==="ArrowRight"){if(T.paused)return;T.currentTime=Math.min(T.duration,T.currentTime+r),A(Math.min(T.duration,T.currentTime+r)),gn(!0)}(ue.code==="Space"||ue.key==="Space")&&(ue.preventDefault(),T.paused?T.play():T.pause(),vn(!0))};return window.addEventListener("keydown",Q),()=>{window.removeEventListener("keydown",Q)}},[]),l(js,{className:`land-video-wrap ${O?"error":""} ${At?"fullView":""} ${i}`,style:{aspectRatio:w&&O?`${w}`:"auto",...u},children:[O?t(me,{type:"error",title:"\u89C6\u9891\u9519\u8BEF",direction:"column"}):t("video",{ref:h,src:e,loop:gr,onTimeUpdate:Y,onWaiting:()=>$(!0),onCanPlay:()=>$(!1),onError:()=>ae(!0),onLoadedMetadata:T=>{var Q,ue,Nt;m(((Q=T.target)==null?void 0:Q.clientWidth)/((ue=T.target)==null?void 0:ue.clientHeight)),E((Nt=T.target)==null?void 0:Nt.duration)},style:c,className:`land-video ${s}`}),!O&&D&&t("div",{className:"absolute width-100 height-100 top-0 left-0",onClick:W,children:t(Be,{className:"height-100",bcOption:{content:l(Io,{className:`land-video-controls-wrap ${d?"show":""}`,children:[l(_,{children:[t(As,{curPercentage:C/x,bufferPercentage:S/x,onClick:T=>A(T*x),onMove:(T,Q,ue)=>Se==null?void 0:Se(T,Q,ue),onMouseLeave:()=>he(!1)}),n&&Ee&&t("div",{className:"land-video-controls-keyImg-container",style:{transform:`translateX(${R}px)`},children:t("canvas",{ref:Z,width:fe,height:fe/w})})]}),l("div",{className:"land-video-controls-container",children:[l("div",{className:"land-video-controls-left",children:[p&&t("a",{className:"land-video-controls-button prev",role:"button",href:v,children:t(k,{name:"arrow-nav",size:20,strokeWidth:4})}),t("button",{className:"land-video-controls-button play","aria-keyshortcuts":"k","data-title-no-tooltip":"\u64AD\u653E","aria-label":"\u64AD\u653E \u952E\u76D8\u5FEB\u6377\u952E (space)",title:"\u64AD\u653E (space)",onClick:W,children:(yn=h.current)!=null&&yn.paused?t(k,{name:"video-pause",size:32}):t(k,{name:"video-play",size:20})}),g&&t("a",{className:"land-video-controls-button next",role:"button",href:b,title:"\u4E0B\u4E00\u4E2A",children:t(k,{name:"arrow-nav",size:20,strokeWidth:4})}),l("div",{className:"land-video-controls-time",children:[On(C)," /"," ",On(x)]}),l("div",{className:"land-video-controls-volume-container",children:[t("button",{className:"land-video-controls-button volume",onClick:Ce,children:Le?t(k,{name:"volume-muted",size:20,strokeWidth:2}):t(k,{name:"volume",className:`${le<50?"small":""}`,size:20,strokeWidth:2})}),t("div",{ref:Re,className:`land-video-volume-slider ${Fe?"show":""}`,children:t(He,{height:4,value:le,max:100,step:1,onChange:T=>Je(T),defaultBg:"rgba(255,255,255,0.68)",activeBg:"rgba(255,255,255,1)",thumbSize:12})})]})]}),l("div",{className:"land-video-controls-right",children:[l("button",{className:"land-video-controls-button setting hover-pop",children:[t(k,{name:"setting",size:20,strokeWidth:4}),t("div",{className:"land-video-setting-panel",children:t("div",{className:"land-video-setting-content",children:t(Ss,{rateValue:xa,onRateChange:(T,Q)=>mr==null?void 0:mr(T,Q),loop:gr,onLoopChange:()=>Ea(!gr)})})})]}),l("button",{className:"land-video-controls-button small-screen hover-pop",onClick:Fa,children:[t(k,{name:"video-small-screen",size:20,strokeWidth:4}),t(U,{content:"\u753B\u4E2D\u753B\u6A21\u5F0F",theme:"dark"})]}),o&&l("button",{className:"land-video-controls-button full-width hover-pop",onClick:()=>{Ca(!vr),o==null||o(!vr)},children:[t(k,{name:"video-full-width",size:20,strokeWidth:2,reverse:vr}),t(U,{content:"\u5BBD\u5C4F\u6A21\u5F0F",theme:"dark"})]}),l("button",{className:"land-video-controls-button full-view hover-pop",onClick:()=>ka(!At),children:[At?t(k,{name:"zoom-out",size:20,strokeWidth:4}):t(k,{name:"zoom-in",size:20,strokeWidth:4}),t(U,{content:At?"\u9000\u51FA\u7F51\u9875\u5168\u5C4F\u6A21\u5F0F":"\u7F51\u9875\u5168\u5C4F\u6A21\u5F0F",theme:"dark"})]}),l("button",{className:"land-video-controls-button full-screen hover-pop",onClick:Ba,children:[t(k,{name:"zoom-in-arrow",size:20,strokeWidth:4}),t(U,{content:"\u5168\u5C4F\u6A21\u5F0F",theme:"dark"})]})]})]})]}),gap:0},centerOption:{content:H&&!D?t(ze,{size:32,color:"white",strokeSize:4}):t(Br,{className:"land-video-tags-container",children:(bn=h.current)!=null&&bn.paused?t(k,{name:"video-pause",size:32}):t(k,{name:"video-play",size:20})}),style:{opacity:xr||H||((xn=h.current)==null?void 0:xn.paused)?1:0,pointerEvents:"none"}},lcOption:{content:l(Br,{className:"land-video-tags-container",children:[t(k,{name:"arrow-double",className:"back",size:28}),r,"\u79D2"]}),style:{opacity:yr?1:0}},rcOption:{content:l(Br,{className:"land-video-tags-container",children:[t(k,{name:"arrow-double",className:"front",size:28}),r,"\u79D2"]}),style:{opacity:br?1:0}}})})]})},Io=B.div`
  &.land-video-controls-wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0.75rem 0.75rem;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s linear;
    &.show {
      opacity: 1;
      pointer-events: auto;
    }
  }
  .land-video-controls-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  }
  .land-video-controls-left,
  .land-video-controls-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .land-video-controls-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 2rem;
    height: 2rem;
    border: none;
    outline: none;
    color: rgba(255, 255, 255, 0.8);
    background-color: transparent;
    cursor: pointer;
    transform-origin: center center;
    transition: color 0.2s linear;
    &:hover:not(.disabled) {
      color: rgba(255, 255, 255, 1);
    }
    svg {
      transition: transform 0.2s linear;
    }
    path {
      transition: d 0.2s linear;
    }
    &.prev {
      transform: rotate(180deg);
    }
    &.full-screen,
    &.small-screen,
    &.full-view,
    &.full-width {
      &:hover svg {
        transform: scale(1.1);
      }
    }
    &.setting {
      &:hover svg {
        transform: rotate(15deg);
      }
      .land-video-setting-panel {
        position: absolute;
        bottom: 100%;
        padding-bottom: 24px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s linear;
        .land-video-setting-content {
          padding: 12px;
          background-color: rgba(0, 0, 0, 0.68);
          border-radius: 8px;
        }
      }
      &:hover .land-video-setting-panel {
        opacity: 1;
        pointer-events: auto;
      }
    }
    &.disabled {
      color: rgba(255, 255, 255, 0.36);
      cursor: not-allowed;
    }
  }
  .land-video-controls-time {
    font-size: 0.875rem;
    white-space: nowrap;
  }
  .land-video-controls-volume-container {
    position: relative;
    display: flex;
    align-items: center;
    &:hover .land-video-volume-slider {
      width: 60px;
      pointer-events: auto;
    }
    .land-video-volume-slider {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 0px;
      height: 28px;
      overflow: hidden;
      pointer-events: none;
      transition: width 0.2s linear;
      &.show {
        width: 60px;
      }
    }
    .volume svg.small {
      path:last-of-type {
        opacity: 0;
        transition: opacity 0.2s linear;
      }
    }
  }
  .land-video-controls-keyImg-container {
    position: absolute;
    left: 0;
    bottom: 100%;
    canvas {
      border-radius: 8px;
      overflow: hidden;
    }
  }
`,js=B.div`
  &.land-video-wrap {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    &.error {
      background-color: var(--color-bg-1);
      border-radius: 12px;
    }
    &.fullView {
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 1);
      z-index: var(--zIndex-5);
    }
  }
  .land-video {
    max-width: 100%;
    max-height: 100%;
  }
  &:hover {
    ${Io} {
      opacity: 1;
      pointer-events: auto;
    }
  }
`,Br=B.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 3.375rem;
    height: 3.375rem;
    font-size: 0.75rem;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.2);
    color: rgba(255,255,255,0.8);
    transition: opacity 0.2s linear;
    svg{
      color: rgba(255,255,255);
    }
    .arrow-double{
        &.back{
          transform: rotate(90deg);
          path:first-of-type{
            animation: flash 800ms linear infinite;
          }
          path:last-of-type{
            animation: flash 800ms 400ms linear infinite;
          }
        }
        &.front{
          transform: rotate(-90deg);
          path:last-of-type{
            animation: flash 800ms linear infinite;
          }
          path:first-of-type{
            animation: flash 800ms 400ms linear infinite;
          }
        }
        @keyframes flash {
          0%{
            opacity: 0;
          }
          100%{
            opacity: 1;
          }
        }
    }
`;function Ts(){const e=r=>{var u,s;const n=(u=document.querySelector(".video-example-container"))==null?void 0:u.parentNode,o=n==null?void 0:n.parentNode,a=o==null?void 0:o.previousSibling,i=(s=document.querySelector(".video-example-container"))==null?void 0:s.children[0].children[7];n&&o&&a&&i&&(r?(n.style="max-width:unset",o.style="padding: 24px 0;",a.style="width:0px;overflow:hidden;transition:width 0.2s linear;",i.style="padding:0px;"):(n.style="",o.style="",a.style="width: 240px; height: 100%;",i.style=""))};return t("div",{className:"video-example-container flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u57FA\u7840\u89C6\u9891",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Dt,{src:"https://asset.gdtimg.com/0bc35eaieaaabqac3d7lyztd32oeqluqbaqa.f0.mp4?dis_k=e91b096d31e564b3bf02b46ae94496d7&dis_t=1727244815",videoClassName:"radius-8"})}),t(f,{title:"\u663E\u793A\u89C6\u9891\u5E27",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Dt,{src:"https://asset.gdtimg.com/0bc35eaieaaabqac3d7lyztd32oeqluqbaqa.f0.mp4?dis_k=e91b096d31e564b3bf02b46ae94496d7&dis_t=1727244815",useKeyImg:!0})}),t(f,{title:"\u663E\u793A\u5207\u6362\u6309\u94AE",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Dt,{src:"https://asset.gdtimg.com/0bc35eaieaaabqac3d7lyztd32oeqluqbaqa.f0.mp4?dis_k=e91b096d31e564b3bf02b46ae94496d7&dis_t=1727244815",usePrevEpisode:!0,useNextEpisode:!0})}),t(f,{title:"\u5BBD\u5C4F\u64AD\u653E",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Dt,{src:"https://asset.gdtimg.com/0bc35eaieaaabqac3d7lyztd32oeqluqbaqa.f0.mp4?dis_k=e91b096d31e564b3bf02b46ae94496d7&dis_t=1727244815",onFullWidthChange:r=>e==null?void 0:e(r)})})]})})}function Rs(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u6309\u94AE\u7C7B\u578B",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(To,{})})]})})}const De=({name:e="",abbreviationName:r=e.slice(0,1),imgUrl:n,content:o,size:a=48,radius:i,bg:u="var(--color-primary-2)",color:s="var(--color-primary-6)",border:c="",style:d,className:p=""})=>l(Is,{className:`land-avatar hover-pop ${p}`,style:d,size:a,radius:i?`${i}px`:"100%",bg:u,color:s,border:c,children:[e&&l(_,{children:[t("p",{className:"land-avatar-name ellipsis",children:r}),t(U,{content:e})]}),n&&t("div",{className:"land-avatar-hidden-container",children:t(Ro,{url:n})}),o,!e&&!n&&!o&&t("div",{className:"land-avatar-hidden-container",children:t(k,{name:"avatar",stroke:s,size:a/1.2,strokeWidth:3})})]}),Is=B.div`
  &.land-avatar{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${e=>`${e.size}px`};
    height: ${e=>`${e.size}px`};
    border-radius: ${e=>e.radius};
    background-color: ${e=>e.bg};
    border: ${e=>e.border};
    box-sizing: border-box;
    cursor: default;
    .land-avatar-name{
      color: ${e=>e.color};
      font-size: 24px;
      font-weight: 500;
    }
    .land-avatar-hidden-container{
      display: flex;
      align-items: end;
      justify-content: center;
      width: 100%;
      height: 100%;
      border-radius: ${e=>e.radius};
      overflow: hidden;
    }
  }
`;function Ms(){return F("var(--color-primary-6)"),t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u9ED8\u8BA4\u5934\u50CF\u6846",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(De,{})}),t(f,{title:"\u6587\u5B57\u5934\u50CF\u6846",type:"h3"}),t(f,{title:"\u9ED8\u8BA4\u663E\u793A\u4F20\u5165\u540D\u79F0\u7684\u7B2C\u4E00\u4E2A\u5B57\u6BCD",type:"p"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t(De,{name:"\u6D77\u7EF5\u5B9D\u5B9D"}),t(De,{name:"\u6D77\u7EF5\u5B9D\u5B9D",abbreviationName:"\u7EF5"})]}),t(f,{title:"\u56FE\u7247\u5934\u50CF\u6846",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(De,{imgUrl:""})}),t(f,{title:"\u81EA\u5B9A\u4E49\u5934\u50CF\u6846\u6837\u5F0F",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t(De,{bg:"var(--color-bg-2)",color:"var(--color-text-5)",name:"\u6D77\u7EF5\u5B9D\u5B9D"}),t(De,{bg:"var(--color-primary-6)",color:"var(--color-text-white)",name:"\u6D77\u7EF5\u5B9D\u5B9D"}),t(De,{bg:"transparent",border:"1px solid var(--color-border-1)",color:"var(--color-text-2)",name:"\u6D77\u7EF5\u5B9D\u5B9D"}),t(De,{})]})]})})}const ke=({isDot:e,count:r,exceedCount:n=99,content:o,radius:a=20,bg:i="var(--color-red-6)",color:u="var(--color-text-white)",border:s="",children:c})=>{function d(p){return/^[A-Z]+$/.test(p)}return l(Os,{className:"land-badge-wrap",radius:`${a}px`,isDot:e,bg:i,color:u,border:s,large:d(`${r||o}`),children:[t("div",{className:"land-badge-content",children:e?null:o||(r<=n?r:`${n}+`)}),c]})},Os=B.div`
  &.land-badge-wrap{
    position: relative;
    .land-badge-content{
      position: absolute;
      right: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--gap-2);
      padding:${e=>e.isDot?"":"0 6px"};
      min-width: ${e=>e.isDot?"8px":"20px"};
      height: ${e=>e.isDot?"8px":"20px"};
      box-sizing: border-box;
      border-radius: ${e=>e.radius};
      background-color: ${e=>e.bg};
      color: ${e=>e.color};
      border: ${e=>e.border};
      font-size: ${e=>e.large?"10px":"12px"};
      font-weight: ${e=>e.large?500:400};
      transform: translate(30%,-30%);
    }
  }
`;function zs(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u5FBD\u6807",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t(ke,{isDot:!0,children:t("div",{className:"bg-gray",style:{width:72,height:72},children:t(k,{name:""})})}),t(ke,{count:20,exceedCount:99,children:t("div",{className:"bg-gray",style:{width:72,height:72},children:t(k,{name:""})})}),t(ke,{count:120,exceedCount:99,children:t("div",{className:"bg-gray",style:{width:72,height:72},children:t(k,{name:""})})})]}),t(f,{title:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u5185\u5BB9",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t(ke,{content:"NEW",radius:4,children:t("div",{className:"bg-gray",style:{width:72,height:72},children:t(k,{name:""})})}),t(ke,{content:"hot",radius:4,children:t("div",{className:"bg-gray",style:{width:72,height:72},children:t(k,{name:""})})}),t(ke,{content:"\u65B0",radius:4,children:t("div",{className:"bg-gray",style:{width:72,height:72},children:t(k,{name:""})})})]}),t(f,{title:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u6837\u5F0F",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t(ke,{content:"hot",radius:4,bg:"var(--color-orange-6)",children:t("div",{className:"bg-gray",style:{width:72,height:72},children:t(k,{name:""})})}),t(ke,{content:"hot",radius:4,border:"1px solid var(--color-orange-4)",bg:"var(--color-orange-2)",color:"var(--color-orange-6)",children:t("div",{className:"bg-gray",style:{width:72,height:72},children:t(k,{name:""})})}),t(ke,{content:"NEW",radius:4,border:"1px solid var(--color-link-4)",bg:"var(--color-link-2)",color:"var(--color-link-6)",children:t("div",{className:"bg-gray",style:{width:72,height:72},children:t(k,{name:""})})})]})]})})}function Mo(e,r){return function(){return e.apply(r,arguments)}}const{toString:_s}=Object.prototype,{getPrototypeOf:ln}=Object,sr=(e=>r=>{const n=_s.call(r);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),we=e=>(e=e.toLowerCase(),r=>sr(r)===e),cr=e=>r=>typeof r===e,{isArray:ht}=Array,Ct=cr("undefined");function Ps(e){return e!==null&&!Ct(e)&&e.constructor!==null&&!Ct(e.constructor)&&pe(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Oo=we("ArrayBuffer");function Hs(e){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&Oo(e.buffer),r}const Vs=cr("string"),pe=cr("function"),zo=cr("number"),dr=e=>e!==null&&typeof e=="object",Us=e=>e===!0||e===!1,Pt=e=>{if(sr(e)!=="object")return!1;const r=ln(e);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},qs=we("Date"),Zs=we("File"),Gs=we("Blob"),Xs=we("FileList"),Ys=e=>dr(e)&&pe(e.pipe),Ks=e=>{let r;return e&&(typeof FormData=="function"&&e instanceof FormData||pe(e.append)&&((r=sr(e))==="formdata"||r==="object"&&pe(e.toString)&&e.toString()==="[object FormData]"))},Js=we("URLSearchParams"),[Ws,Qs,ec,tc]=["ReadableStream","Request","Response","Headers"].map(we),rc=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Bt(e,r,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let o,a;if(typeof e!="object"&&(e=[e]),ht(e))for(o=0,a=e.length;o<a;o++)r.call(null,e[o],o,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),u=i.length;let s;for(o=0;o<u;o++)s=i[o],r.call(null,e[s],s,e)}}function _o(e,r){r=r.toLowerCase();const n=Object.keys(e);let o=n.length,a;for(;o-- >0;)if(a=n[o],r===a.toLowerCase())return a;return null}const Ue=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Po=e=>!Ct(e)&&e!==Ue;function Vr(){const{caseless:e}=Po(this)&&this||{},r={},n=(o,a)=>{const i=e&&_o(r,a)||a;Pt(r[i])&&Pt(o)?r[i]=Vr(r[i],o):Pt(o)?r[i]=Vr({},o):ht(o)?r[i]=o.slice():r[i]=o};for(let o=0,a=arguments.length;o<a;o++)arguments[o]&&Bt(arguments[o],n);return r}const nc=(e,r,n,{allOwnKeys:o}={})=>(Bt(r,(a,i)=>{n&&pe(a)?e[i]=Mo(a,n):e[i]=a},{allOwnKeys:o}),e),oc=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ac=(e,r,n,o)=>{e.prototype=Object.create(r.prototype,o),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:r.prototype}),n&&Object.assign(e.prototype,n)},ic=(e,r,n,o)=>{let a,i,u;const s={};if(r=r||{},e==null)return r;do{for(a=Object.getOwnPropertyNames(e),i=a.length;i-- >0;)u=a[i],(!o||o(u,e,r))&&!s[u]&&(r[u]=e[u],s[u]=!0);e=n!==!1&&ln(e)}while(e&&(!n||n(e,r))&&e!==Object.prototype);return r},uc=(e,r,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=r.length;const o=e.indexOf(r,n);return o!==-1&&o===n},lc=e=>{if(!e)return null;if(ht(e))return e;let r=e.length;if(!zo(r))return null;const n=new Array(r);for(;r-- >0;)n[r]=e[r];return n},sc=(e=>r=>e&&r instanceof e)(typeof Uint8Array<"u"&&ln(Uint8Array)),cc=(e,r)=>{const o=(e&&e[Symbol.iterator]).call(e);let a;for(;(a=o.next())&&!a.done;){const i=a.value;r.call(e,i[0],i[1])}},dc=(e,r)=>{let n;const o=[];for(;(n=e.exec(r))!==null;)o.push(n);return o},pc=we("HTMLFormElement"),hc=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,o,a){return o.toUpperCase()+a}),zn=(({hasOwnProperty:e})=>(r,n)=>e.call(r,n))(Object.prototype),fc=we("RegExp"),Ho=(e,r)=>{const n=Object.getOwnPropertyDescriptors(e),o={};Bt(n,(a,i)=>{let u;(u=r(a,i,e))!==!1&&(o[i]=u||a)}),Object.defineProperties(e,o)},mc=e=>{Ho(e,(r,n)=>{if(pe(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const o=e[n];if(!!pe(o)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},gc=(e,r)=>{const n={},o=a=>{a.forEach(i=>{n[i]=!0})};return ht(e)?o(e):o(String(e).split(r)),n},vc=()=>{},yc=(e,r)=>e!=null&&Number.isFinite(e=+e)?e:r,Ar="abcdefghijklmnopqrstuvwxyz",_n="0123456789",Vo={DIGIT:_n,ALPHA:Ar,ALPHA_DIGIT:Ar+Ar.toUpperCase()+_n},bc=(e=16,r=Vo.ALPHA_DIGIT)=>{let n="";const{length:o}=r;for(;e--;)n+=r[Math.random()*o|0];return n};function xc(e){return!!(e&&pe(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const wc=e=>{const r=new Array(10),n=(o,a)=>{if(dr(o)){if(r.indexOf(o)>=0)return;if(!("toJSON"in o)){r[a]=o;const i=ht(o)?[]:{};return Bt(o,(u,s)=>{const c=n(u,a+1);!Ct(c)&&(i[s]=c)}),r[a]=void 0,i}}return o};return n(e,0)},Ec=we("AsyncFunction"),Fc=e=>e&&(dr(e)||pe(e))&&pe(e.then)&&pe(e.catch),Uo=((e,r)=>e?setImmediate:r?((n,o)=>(Ue.addEventListener("message",({source:a,data:i})=>{a===Ue&&i===n&&o.length&&o.shift()()},!1),a=>{o.push(a),Ue.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",pe(Ue.postMessage)),Cc=typeof queueMicrotask<"u"?queueMicrotask.bind(Ue):typeof process<"u"&&process.nextTick||Uo,y={isArray:ht,isArrayBuffer:Oo,isBuffer:Ps,isFormData:Ks,isArrayBufferView:Hs,isString:Vs,isNumber:zo,isBoolean:Us,isObject:dr,isPlainObject:Pt,isReadableStream:Ws,isRequest:Qs,isResponse:ec,isHeaders:tc,isUndefined:Ct,isDate:qs,isFile:Zs,isBlob:Gs,isRegExp:fc,isFunction:pe,isStream:Ys,isURLSearchParams:Js,isTypedArray:sc,isFileList:Xs,forEach:Bt,merge:Vr,extend:nc,trim:rc,stripBOM:oc,inherits:ac,toFlatObject:ic,kindOf:sr,kindOfTest:we,endsWith:uc,toArray:lc,forEachEntry:cc,matchAll:dc,isHTMLForm:pc,hasOwnProperty:zn,hasOwnProp:zn,reduceDescriptors:Ho,freezeMethods:mc,toObjectSet:gc,toCamelCase:hc,noop:vc,toFiniteNumber:yc,findKey:_o,global:Ue,isContextDefined:Po,ALPHABET:Vo,generateString:bc,isSpecCompliantForm:xc,toJSONObject:wc,isAsyncFn:Ec,isThenable:Fc,setImmediate:Uo,asap:Cc};function I(e,r,n,o,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",r&&(this.code=r),n&&(this.config=n),o&&(this.request=o),a&&(this.response=a,this.status=a.status?a.status:null)}y.inherits(I,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:y.toJSONObject(this.config),code:this.code,status:this.status}}});const qo=I.prototype,Zo={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Zo[e]={value:e}});Object.defineProperties(I,Zo);Object.defineProperty(qo,"isAxiosError",{value:!0});I.from=(e,r,n,o,a,i)=>{const u=Object.create(qo);return y.toFlatObject(e,u,function(c){return c!==Error.prototype},s=>s!=="isAxiosError"),I.call(u,e.message,r,n,o,a),u.cause=e,u.name=e.name,i&&Object.assign(u,i),u};const kc=null;function Ur(e){return y.isPlainObject(e)||y.isArray(e)}function Go(e){return y.endsWith(e,"[]")?e.slice(0,-2):e}function Pn(e,r,n){return e?e.concat(r).map(function(a,i){return a=Go(a),!n&&i?"["+a+"]":a}).join(n?".":""):r}function Bc(e){return y.isArray(e)&&!e.some(Ur)}const Ac=y.toFlatObject(y,{},null,function(r){return/^is[A-Z]/.test(r)});function pr(e,r,n){if(!y.isObject(e))throw new TypeError("target must be an object");r=r||new FormData,n=y.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,m){return!y.isUndefined(m[w])});const o=n.metaTokens,a=n.visitor||p,i=n.dots,u=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&y.isSpecCompliantForm(r);if(!y.isFunction(a))throw new TypeError("visitor must be a function");function d(h){if(h===null)return"";if(y.isDate(h))return h.toISOString();if(!c&&y.isBlob(h))throw new I("Blob is not supported. Use a Buffer instead.");return y.isArrayBuffer(h)||y.isTypedArray(h)?c&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function p(h,w,m){let x=h;if(h&&!m&&typeof h=="object"){if(y.endsWith(w,"{}"))w=o?w:w.slice(0,-2),h=JSON.stringify(h);else if(y.isArray(h)&&Bc(h)||(y.isFileList(h)||y.endsWith(w,"[]"))&&(x=y.toArray(h)))return w=Go(w),x.forEach(function(C,A){!(y.isUndefined(C)||C===null)&&r.append(u===!0?Pn([w],A,i):u===null?w:w+"[]",d(C))}),!1}return Ur(h)?!0:(r.append(Pn(m,w,i),d(h)),!1)}const g=[],v=Object.assign(Ac,{defaultVisitor:p,convertValue:d,isVisitable:Ur});function b(h,w){if(!y.isUndefined(h)){if(g.indexOf(h)!==-1)throw Error("Circular reference detected in "+w.join("."));g.push(h),y.forEach(h,function(x,E){(!(y.isUndefined(x)||x===null)&&a.call(r,x,y.isString(E)?E.trim():E,w,v))===!0&&b(x,w?w.concat(E):[E])}),g.pop()}}if(!y.isObject(e))throw new TypeError("data must be an object");return b(e),r}function Hn(e){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(o){return r[o]})}function sn(e,r){this._pairs=[],e&&pr(e,this,r)}const Xo=sn.prototype;Xo.append=function(r,n){this._pairs.push([r,n])};Xo.toString=function(r){const n=r?function(o){return r.call(this,o,Hn)}:Hn;return this._pairs.map(function(a){return n(a[0])+"="+n(a[1])},"").join("&")};function Nc(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Yo(e,r,n){if(!r)return e;const o=n&&n.encode||Nc,a=n&&n.serialize;let i;if(a?i=a(r,n):i=y.isURLSearchParams(r)?r.toString():new sn(r,n).toString(o),i){const u=e.indexOf("#");u!==-1&&(e=e.slice(0,u)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Sc{constructor(){this.handlers=[]}use(r,n,o){return this.handlers.push({fulfilled:r,rejected:n,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){y.forEach(this.handlers,function(o){o!==null&&r(o)})}}const Vn=Sc,Ko={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Lc=typeof URLSearchParams<"u"?URLSearchParams:sn,Dc=typeof FormData<"u"?FormData:null,$c=typeof Blob<"u"?Blob:null,jc={isBrowser:!0,classes:{URLSearchParams:Lc,FormData:Dc,Blob:$c},protocols:["http","https","file","blob","url","data"]},cn=typeof window<"u"&&typeof document<"u",qr=typeof navigator=="object"&&navigator||void 0,Tc=cn&&(!qr||["ReactNative","NativeScript","NS"].indexOf(qr.product)<0),Rc=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Ic=cn&&window.location.href||"http://localhost",Mc=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:cn,hasStandardBrowserWebWorkerEnv:Rc,hasStandardBrowserEnv:Tc,navigator:qr,origin:Ic},Symbol.toStringTag,{value:"Module"})),de={...Mc,...jc};function Oc(e,r){return pr(e,new de.classes.URLSearchParams,Object.assign({visitor:function(n,o,a,i){return de.isNode&&y.isBuffer(n)?(this.append(o,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},r))}function zc(e){return y.matchAll(/\w+|\[(\w*)]/g,e).map(r=>r[0]==="[]"?"":r[1]||r[0])}function _c(e){const r={},n=Object.keys(e);let o;const a=n.length;let i;for(o=0;o<a;o++)i=n[o],r[i]=e[i];return r}function Jo(e){function r(n,o,a,i){let u=n[i++];if(u==="__proto__")return!0;const s=Number.isFinite(+u),c=i>=n.length;return u=!u&&y.isArray(a)?a.length:u,c?(y.hasOwnProp(a,u)?a[u]=[a[u],o]:a[u]=o,!s):((!a[u]||!y.isObject(a[u]))&&(a[u]=[]),r(n,o,a[u],i)&&y.isArray(a[u])&&(a[u]=_c(a[u])),!s)}if(y.isFormData(e)&&y.isFunction(e.entries)){const n={};return y.forEachEntry(e,(o,a)=>{r(zc(o),a,n,0)}),n}return null}function Pc(e,r,n){if(y.isString(e))try{return(r||JSON.parse)(e),y.trim(e)}catch(o){if(o.name!=="SyntaxError")throw o}return(n||JSON.stringify)(e)}const dn={transitional:Ko,adapter:["xhr","http","fetch"],transformRequest:[function(r,n){const o=n.getContentType()||"",a=o.indexOf("application/json")>-1,i=y.isObject(r);if(i&&y.isHTMLForm(r)&&(r=new FormData(r)),y.isFormData(r))return a?JSON.stringify(Jo(r)):r;if(y.isArrayBuffer(r)||y.isBuffer(r)||y.isStream(r)||y.isFile(r)||y.isBlob(r)||y.isReadableStream(r))return r;if(y.isArrayBufferView(r))return r.buffer;if(y.isURLSearchParams(r))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let s;if(i){if(o.indexOf("application/x-www-form-urlencoded")>-1)return Oc(r,this.formSerializer).toString();if((s=y.isFileList(r))||o.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return pr(s?{"files[]":r}:r,c&&new c,this.formSerializer)}}return i||a?(n.setContentType("application/json",!1),Pc(r)):r}],transformResponse:[function(r){const n=this.transitional||dn.transitional,o=n&&n.forcedJSONParsing,a=this.responseType==="json";if(y.isResponse(r)||y.isReadableStream(r))return r;if(r&&y.isString(r)&&(o&&!this.responseType||a)){const u=!(n&&n.silentJSONParsing)&&a;try{return JSON.parse(r)}catch(s){if(u)throw s.name==="SyntaxError"?I.from(s,I.ERR_BAD_RESPONSE,this,null,this.response):s}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:de.classes.FormData,Blob:de.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};y.forEach(["delete","get","head","post","put","patch"],e=>{dn.headers[e]={}});const pn=dn,Hc=y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Vc=e=>{const r={};let n,o,a;return e&&e.split(`
`).forEach(function(u){a=u.indexOf(":"),n=u.substring(0,a).trim().toLowerCase(),o=u.substring(a+1).trim(),!(!n||r[n]&&Hc[n])&&(n==="set-cookie"?r[n]?r[n].push(o):r[n]=[o]:r[n]=r[n]?r[n]+", "+o:o)}),r},Un=Symbol("internals");function gt(e){return e&&String(e).trim().toLowerCase()}function Ht(e){return e===!1||e==null?e:y.isArray(e)?e.map(Ht):String(e)}function Uc(e){const r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=n.exec(e);)r[o[1]]=o[2];return r}const qc=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Nr(e,r,n,o,a){if(y.isFunction(o))return o.call(this,r,n);if(a&&(r=n),!!y.isString(r)){if(y.isString(o))return r.indexOf(o)!==-1;if(y.isRegExp(o))return o.test(r)}}function Zc(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,n,o)=>n.toUpperCase()+o)}function Gc(e,r){const n=y.toCamelCase(" "+r);["get","set","has"].forEach(o=>{Object.defineProperty(e,o+n,{value:function(a,i,u){return this[o].call(this,r,a,i,u)},configurable:!0})})}class hr{constructor(r){r&&this.set(r)}set(r,n,o){const a=this;function i(s,c,d){const p=gt(c);if(!p)throw new Error("header name must be a non-empty string");const g=y.findKey(a,p);(!g||a[g]===void 0||d===!0||d===void 0&&a[g]!==!1)&&(a[g||c]=Ht(s))}const u=(s,c)=>y.forEach(s,(d,p)=>i(d,p,c));if(y.isPlainObject(r)||r instanceof this.constructor)u(r,n);else if(y.isString(r)&&(r=r.trim())&&!qc(r))u(Vc(r),n);else if(y.isHeaders(r))for(const[s,c]of r.entries())i(c,s,o);else r!=null&&i(n,r,o);return this}get(r,n){if(r=gt(r),r){const o=y.findKey(this,r);if(o){const a=this[o];if(!n)return a;if(n===!0)return Uc(a);if(y.isFunction(n))return n.call(this,a,o);if(y.isRegExp(n))return n.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,n){if(r=gt(r),r){const o=y.findKey(this,r);return!!(o&&this[o]!==void 0&&(!n||Nr(this,this[o],o,n)))}return!1}delete(r,n){const o=this;let a=!1;function i(u){if(u=gt(u),u){const s=y.findKey(o,u);s&&(!n||Nr(o,o[s],s,n))&&(delete o[s],a=!0)}}return y.isArray(r)?r.forEach(i):i(r),a}clear(r){const n=Object.keys(this);let o=n.length,a=!1;for(;o--;){const i=n[o];(!r||Nr(this,this[i],i,r,!0))&&(delete this[i],a=!0)}return a}normalize(r){const n=this,o={};return y.forEach(this,(a,i)=>{const u=y.findKey(o,i);if(u){n[u]=Ht(a),delete n[i];return}const s=r?Zc(i):String(i).trim();s!==i&&delete n[i],n[s]=Ht(a),o[s]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const n=Object.create(null);return y.forEach(this,(o,a)=>{o!=null&&o!==!1&&(n[a]=r&&y.isArray(o)?o.join(", "):o)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,n])=>r+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...n){const o=new this(r);return n.forEach(a=>o.set(a)),o}static accessor(r){const o=(this[Un]=this[Un]={accessors:{}}).accessors,a=this.prototype;function i(u){const s=gt(u);o[s]||(Gc(a,u),o[s]=!0)}return y.isArray(r)?r.forEach(i):i(r),this}}hr.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);y.reduceDescriptors(hr.prototype,({value:e},r)=>{let n=r[0].toUpperCase()+r.slice(1);return{get:()=>e,set(o){this[n]=o}}});y.freezeMethods(hr);const xe=hr;function Sr(e,r){const n=this||pn,o=r||n,a=xe.from(o.headers);let i=o.data;return y.forEach(e,function(s){i=s.call(n,i,a.normalize(),r?r.status:void 0)}),a.normalize(),i}function Wo(e){return!!(e&&e.__CANCEL__)}function ft(e,r,n){I.call(this,e==null?"canceled":e,I.ERR_CANCELED,r,n),this.name="CanceledError"}y.inherits(ft,I,{__CANCEL__:!0});function Qo(e,r,n){const o=n.config.validateStatus;!n.status||!o||o(n.status)?e(n):r(new I("Request failed with status code "+n.status,[I.ERR_BAD_REQUEST,I.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Xc(e){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return r&&r[1]||""}function Yc(e,r){e=e||10;const n=new Array(e),o=new Array(e);let a=0,i=0,u;return r=r!==void 0?r:1e3,function(c){const d=Date.now(),p=o[i];u||(u=d),n[a]=c,o[a]=d;let g=i,v=0;for(;g!==a;)v+=n[g++],g=g%e;if(a=(a+1)%e,a===i&&(i=(i+1)%e),d-u<r)return;const b=p&&d-p;return b?Math.round(v*1e3/b):void 0}}function Kc(e,r){let n=0,o=1e3/r,a,i;const u=(d,p=Date.now())=>{n=p,a=null,i&&(clearTimeout(i),i=null),e.apply(null,d)};return[(...d)=>{const p=Date.now(),g=p-n;g>=o?u(d,p):(a=d,i||(i=setTimeout(()=>{i=null,u(a)},o-g)))},()=>a&&u(a)]}const Jt=(e,r,n=3)=>{let o=0;const a=Yc(50,250);return Kc(i=>{const u=i.loaded,s=i.lengthComputable?i.total:void 0,c=u-o,d=a(c),p=u<=s;o=u;const g={loaded:u,total:s,progress:s?u/s:void 0,bytes:c,rate:d||void 0,estimated:d&&s&&p?(s-u)/d:void 0,event:i,lengthComputable:s!=null,[r?"download":"upload"]:!0};e(g)},n)},qn=(e,r)=>{const n=e!=null;return[o=>r[0]({lengthComputable:n,total:e,loaded:o}),r[1]]},Zn=e=>(...r)=>y.asap(()=>e(...r)),Jc=de.hasStandardBrowserEnv?function(){const r=de.navigator&&/(msie|trident)/i.test(de.navigator.userAgent),n=document.createElement("a");let o;function a(i){let u=i;return r&&(n.setAttribute("href",u),u=n.href),n.setAttribute("href",u),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return o=a(window.location.href),function(u){const s=y.isString(u)?a(u):u;return s.protocol===o.protocol&&s.host===o.host}}():function(){return function(){return!0}}(),Wc=de.hasStandardBrowserEnv?{write(e,r,n,o,a,i){const u=[e+"="+encodeURIComponent(r)];y.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),y.isString(o)&&u.push("path="+o),y.isString(a)&&u.push("domain="+a),i===!0&&u.push("secure"),document.cookie=u.join("; ")},read(e){const r=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Qc(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ed(e,r){return r?e.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):e}function ea(e,r){return e&&!Qc(r)?ed(e,r):r}const Gn=e=>e instanceof xe?{...e}:e;function Xe(e,r){r=r||{};const n={};function o(d,p,g){return y.isPlainObject(d)&&y.isPlainObject(p)?y.merge.call({caseless:g},d,p):y.isPlainObject(p)?y.merge({},p):y.isArray(p)?p.slice():p}function a(d,p,g){if(y.isUndefined(p)){if(!y.isUndefined(d))return o(void 0,d,g)}else return o(d,p,g)}function i(d,p){if(!y.isUndefined(p))return o(void 0,p)}function u(d,p){if(y.isUndefined(p)){if(!y.isUndefined(d))return o(void 0,d)}else return o(void 0,p)}function s(d,p,g){if(g in r)return o(d,p);if(g in e)return o(void 0,d)}const c={url:i,method:i,data:i,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,withXSRFToken:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:s,headers:(d,p)=>a(Gn(d),Gn(p),!0)};return y.forEach(Object.keys(Object.assign({},e,r)),function(p){const g=c[p]||a,v=g(e[p],r[p],p);y.isUndefined(v)&&g!==s||(n[p]=v)}),n}const ta=e=>{const r=Xe({},e);let{data:n,withXSRFToken:o,xsrfHeaderName:a,xsrfCookieName:i,headers:u,auth:s}=r;r.headers=u=xe.from(u),r.url=Yo(ea(r.baseURL,r.url),e.params,e.paramsSerializer),s&&u.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):"")));let c;if(y.isFormData(n)){if(de.hasStandardBrowserEnv||de.hasStandardBrowserWebWorkerEnv)u.setContentType(void 0);else if((c=u.getContentType())!==!1){const[d,...p]=c?c.split(";").map(g=>g.trim()).filter(Boolean):[];u.setContentType([d||"multipart/form-data",...p].join("; "))}}if(de.hasStandardBrowserEnv&&(o&&y.isFunction(o)&&(o=o(r)),o||o!==!1&&Jc(r.url))){const d=a&&i&&Wc.read(i);d&&u.set(a,d)}return r},td=typeof XMLHttpRequest<"u",rd=td&&function(e){return new Promise(function(n,o){const a=ta(e);let i=a.data;const u=xe.from(a.headers).normalize();let{responseType:s,onUploadProgress:c,onDownloadProgress:d}=a,p,g,v,b,h;function w(){b&&b(),h&&h(),a.cancelToken&&a.cancelToken.unsubscribe(p),a.signal&&a.signal.removeEventListener("abort",p)}let m=new XMLHttpRequest;m.open(a.method.toUpperCase(),a.url,!0),m.timeout=a.timeout;function x(){if(!m)return;const C=xe.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),S={data:!s||s==="text"||s==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:C,config:e,request:m};Qo(function(D){n(D),w()},function(D){o(D),w()},S),m=null}"onloadend"in m?m.onloadend=x:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(x)},m.onabort=function(){!m||(o(new I("Request aborted",I.ECONNABORTED,e,m)),m=null)},m.onerror=function(){o(new I("Network Error",I.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let A=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const S=a.transitional||Ko;a.timeoutErrorMessage&&(A=a.timeoutErrorMessage),o(new I(A,S.clarifyTimeoutError?I.ETIMEDOUT:I.ECONNABORTED,e,m)),m=null},i===void 0&&u.setContentType(null),"setRequestHeader"in m&&y.forEach(u.toJSON(),function(A,S){m.setRequestHeader(S,A)}),y.isUndefined(a.withCredentials)||(m.withCredentials=!!a.withCredentials),s&&s!=="json"&&(m.responseType=a.responseType),d&&([v,h]=Jt(d,!0),m.addEventListener("progress",v)),c&&m.upload&&([g,b]=Jt(c),m.upload.addEventListener("progress",g),m.upload.addEventListener("loadend",b)),(a.cancelToken||a.signal)&&(p=C=>{!m||(o(!C||C.type?new ft(null,e,m):C),m.abort(),m=null)},a.cancelToken&&a.cancelToken.subscribe(p),a.signal&&(a.signal.aborted?p():a.signal.addEventListener("abort",p)));const E=Xc(a.url);if(E&&de.protocols.indexOf(E)===-1){o(new I("Unsupported protocol "+E+":",I.ERR_BAD_REQUEST,e));return}m.send(i||null)})},nd=(e,r)=>{const{length:n}=e=e?e.filter(Boolean):[];if(r||n){let o=new AbortController,a;const i=function(d){if(!a){a=!0,s();const p=d instanceof Error?d:this.reason;o.abort(p instanceof I?p:new ft(p instanceof Error?p.message:p))}};let u=r&&setTimeout(()=>{u=null,i(new I(`timeout ${r} of ms exceeded`,I.ETIMEDOUT))},r);const s=()=>{e&&(u&&clearTimeout(u),u=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(i):d.removeEventListener("abort",i)}),e=null)};e.forEach(d=>d.addEventListener("abort",i));const{signal:c}=o;return c.unsubscribe=()=>y.asap(s),c}},od=nd,ad=function*(e,r){let n=e.byteLength;if(!r||n<r){yield e;return}let o=0,a;for(;o<n;)a=o+r,yield e.slice(o,a),o=a},id=async function*(e,r){for await(const n of ud(e))yield*ad(n,r)},ud=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const r=e.getReader();try{for(;;){const{done:n,value:o}=await r.read();if(n)break;yield o}}finally{await r.cancel()}},Xn=(e,r,n,o)=>{const a=id(e,r);let i=0,u,s=c=>{u||(u=!0,o&&o(c))};return new ReadableStream({async pull(c){try{const{done:d,value:p}=await a.next();if(d){s(),c.close();return}let g=p.byteLength;if(n){let v=i+=g;n(v)}c.enqueue(new Uint8Array(p))}catch(d){throw s(d),d}},cancel(c){return s(c),a.return()}},{highWaterMark:2})},fr=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",ra=fr&&typeof ReadableStream=="function",ld=fr&&(typeof TextEncoder=="function"?(e=>r=>e.encode(r))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),na=(e,...r)=>{try{return!!e(...r)}catch{return!1}},sd=ra&&na(()=>{let e=!1;const r=new Request(de.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!r}),Yn=64*1024,Zr=ra&&na(()=>y.isReadableStream(new Response("").body)),Wt={stream:Zr&&(e=>e.body)};fr&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(r=>{!Wt[r]&&(Wt[r]=y.isFunction(e[r])?n=>n[r]():(n,o)=>{throw new I(`Response type '${r}' is not supported`,I.ERR_NOT_SUPPORT,o)})})})(new Response);const cd=async e=>{if(e==null)return 0;if(y.isBlob(e))return e.size;if(y.isSpecCompliantForm(e))return(await new Request(de.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(y.isArrayBufferView(e)||y.isArrayBuffer(e))return e.byteLength;if(y.isURLSearchParams(e)&&(e=e+""),y.isString(e))return(await ld(e)).byteLength},dd=async(e,r)=>{const n=y.toFiniteNumber(e.getContentLength());return n==null?cd(r):n},pd=fr&&(async e=>{let{url:r,method:n,data:o,signal:a,cancelToken:i,timeout:u,onDownloadProgress:s,onUploadProgress:c,responseType:d,headers:p,withCredentials:g="same-origin",fetchOptions:v}=ta(e);d=d?(d+"").toLowerCase():"text";let b=od([a,i&&i.toAbortSignal()],u),h;const w=b&&b.unsubscribe&&(()=>{b.unsubscribe()});let m;try{if(c&&sd&&n!=="get"&&n!=="head"&&(m=await dd(p,o))!==0){let S=new Request(r,{method:"POST",body:o,duplex:"half"}),N;if(y.isFormData(o)&&(N=S.headers.get("content-type"))&&p.setContentType(N),S.body){const[D,q]=qn(m,Jt(Zn(c)));o=Xn(S.body,Yn,D,q)}}y.isString(g)||(g=g?"include":"omit");const x="credentials"in Request.prototype;h=new Request(r,{...v,signal:b,method:n.toUpperCase(),headers:p.normalize().toJSON(),body:o,duplex:"half",credentials:x?g:void 0});let E=await fetch(h);const C=Zr&&(d==="stream"||d==="response");if(Zr&&(s||C&&w)){const S={};["status","statusText","headers"].forEach(O=>{S[O]=E[O]});const N=y.toFiniteNumber(E.headers.get("content-length")),[D,q]=s&&qn(N,Jt(Zn(s),!0))||[];E=new Response(Xn(E.body,Yn,D,()=>{q&&q(),w&&w()}),S)}d=d||"text";let A=await Wt[y.findKey(Wt,d)||"text"](E,e);return!C&&w&&w(),await new Promise((S,N)=>{Qo(S,N,{data:A,headers:xe.from(E.headers),status:E.status,statusText:E.statusText,config:e,request:h})})}catch(x){throw w&&w(),x&&x.name==="TypeError"&&/fetch/i.test(x.message)?Object.assign(new I("Network Error",I.ERR_NETWORK,e,h),{cause:x.cause||x}):I.from(x,x&&x.code,e,h)}}),Gr={http:kc,xhr:rd,fetch:pd};y.forEach(Gr,(e,r)=>{if(e){try{Object.defineProperty(e,"name",{value:r})}catch{}Object.defineProperty(e,"adapterName",{value:r})}});const Kn=e=>`- ${e}`,hd=e=>y.isFunction(e)||e===null||e===!1,oa={getAdapter:e=>{e=y.isArray(e)?e:[e];const{length:r}=e;let n,o;const a={};for(let i=0;i<r;i++){n=e[i];let u;if(o=n,!hd(n)&&(o=Gr[(u=String(n)).toLowerCase()],o===void 0))throw new I(`Unknown adapter '${u}'`);if(o)break;a[u||"#"+i]=o}if(!o){const i=Object.entries(a).map(([s,c])=>`adapter ${s} `+(c===!1?"is not supported by the environment":"is not available in the build"));let u=r?i.length>1?`since :
`+i.map(Kn).join(`
`):" "+Kn(i[0]):"as no adapter specified";throw new I("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return o},adapters:Gr};function Lr(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ft(null,e)}function Jn(e){return Lr(e),e.headers=xe.from(e.headers),e.data=Sr.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),oa.getAdapter(e.adapter||pn.adapter)(e).then(function(o){return Lr(e),o.data=Sr.call(e,e.transformResponse,o),o.headers=xe.from(o.headers),o},function(o){return Wo(o)||(Lr(e),o&&o.response&&(o.response.data=Sr.call(e,e.transformResponse,o.response),o.response.headers=xe.from(o.response.headers))),Promise.reject(o)})}const aa="1.7.7",hn={};["object","boolean","number","function","string","symbol"].forEach((e,r)=>{hn[e]=function(o){return typeof o===e||"a"+(r<1?"n ":" ")+e}});const Wn={};hn.transitional=function(r,n,o){function a(i,u){return"[Axios v"+aa+"] Transitional option '"+i+"'"+u+(o?". "+o:"")}return(i,u,s)=>{if(r===!1)throw new I(a(u," has been removed"+(n?" in "+n:"")),I.ERR_DEPRECATED);return n&&!Wn[u]&&(Wn[u]=!0,console.warn(a(u," has been deprecated since v"+n+" and will be removed in the near future"))),r?r(i,u,s):!0}};function fd(e,r,n){if(typeof e!="object")throw new I("options must be an object",I.ERR_BAD_OPTION_VALUE);const o=Object.keys(e);let a=o.length;for(;a-- >0;){const i=o[a],u=r[i];if(u){const s=e[i],c=s===void 0||u(s,i,e);if(c!==!0)throw new I("option "+i+" must be "+c,I.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new I("Unknown option "+i,I.ERR_BAD_OPTION)}}const Xr={assertOptions:fd,validators:hn},Ie=Xr.validators;class Qt{constructor(r){this.defaults=r,this.interceptors={request:new Vn,response:new Vn}}async request(r,n){try{return await this._request(r,n)}catch(o){if(o instanceof Error){let a;Error.captureStackTrace?Error.captureStackTrace(a={}):a=new Error;const i=a.stack?a.stack.replace(/^.+\n/,""):"";try{o.stack?i&&!String(o.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+i):o.stack=i}catch{}}throw o}}_request(r,n){typeof r=="string"?(n=n||{},n.url=r):n=r||{},n=Xe(this.defaults,n);const{transitional:o,paramsSerializer:a,headers:i}=n;o!==void 0&&Xr.assertOptions(o,{silentJSONParsing:Ie.transitional(Ie.boolean),forcedJSONParsing:Ie.transitional(Ie.boolean),clarifyTimeoutError:Ie.transitional(Ie.boolean)},!1),a!=null&&(y.isFunction(a)?n.paramsSerializer={serialize:a}:Xr.assertOptions(a,{encode:Ie.function,serialize:Ie.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let u=i&&y.merge(i.common,i[n.method]);i&&y.forEach(["delete","get","head","post","put","patch","common"],h=>{delete i[h]}),n.headers=xe.concat(u,i);const s=[];let c=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(c=c&&w.synchronous,s.unshift(w.fulfilled,w.rejected))});const d=[];this.interceptors.response.forEach(function(w){d.push(w.fulfilled,w.rejected)});let p,g=0,v;if(!c){const h=[Jn.bind(this),void 0];for(h.unshift.apply(h,s),h.push.apply(h,d),v=h.length,p=Promise.resolve(n);g<v;)p=p.then(h[g++],h[g++]);return p}v=s.length;let b=n;for(g=0;g<v;){const h=s[g++],w=s[g++];try{b=h(b)}catch(m){w.call(this,m);break}}try{p=Jn.call(this,b)}catch(h){return Promise.reject(h)}for(g=0,v=d.length;g<v;)p=p.then(d[g++],d[g++]);return p}getUri(r){r=Xe(this.defaults,r);const n=ea(r.baseURL,r.url);return Yo(n,r.params,r.paramsSerializer)}}y.forEach(["delete","get","head","options"],function(r){Qt.prototype[r]=function(n,o){return this.request(Xe(o||{},{method:r,url:n,data:(o||{}).data}))}});y.forEach(["post","put","patch"],function(r){function n(o){return function(i,u,s){return this.request(Xe(s||{},{method:r,headers:o?{"Content-Type":"multipart/form-data"}:{},url:i,data:u}))}}Qt.prototype[r]=n(),Qt.prototype[r+"Form"]=n(!0)});const Vt=Qt;class fn{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const o=this;this.promise.then(a=>{if(!o._listeners)return;let i=o._listeners.length;for(;i-- >0;)o._listeners[i](a);o._listeners=null}),this.promise.then=a=>{let i;const u=new Promise(s=>{o.subscribe(s),i=s}).then(a);return u.cancel=function(){o.unsubscribe(i)},u},r(function(i,u,s){o.reason||(o.reason=new ft(i,u,s),n(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const n=this._listeners.indexOf(r);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const r=new AbortController,n=o=>{r.abort(o)};return this.subscribe(n),r.signal.unsubscribe=()=>this.unsubscribe(n),r.signal}static source(){let r;return{token:new fn(function(a){r=a}),cancel:r}}}const md=fn;function gd(e){return function(n){return e.apply(null,n)}}function vd(e){return y.isObject(e)&&e.isAxiosError===!0}const Yr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Yr).forEach(([e,r])=>{Yr[r]=e});const yd=Yr;function ia(e){const r=new Vt(e),n=Mo(Vt.prototype.request,r);return y.extend(n,Vt.prototype,r,{allOwnKeys:!0}),y.extend(n,r,null,{allOwnKeys:!0}),n.create=function(a){return ia(Xe(e,a))},n}const ne=ia(pn);ne.Axios=Vt;ne.CanceledError=ft;ne.CancelToken=md;ne.isCancel=Wo;ne.VERSION=aa;ne.toFormData=pr;ne.AxiosError=I;ne.Cancel=ne.CanceledError;ne.all=function(r){return Promise.all(r)};ne.spread=gd;ne.isAxiosError=vd;ne.mergeConfig=Xe;ne.AxiosHeaders=xe;ne.formToJSON=e=>Jo(y.isHTMLForm(e)?new FormData(e):e);ne.getAdapter=oa.getAdapter;ne.HttpStatusCode=yd;ne.default=ne;const bd=ne,ua=({language:e="zh",minYear:r=new Date().getFullYear(),maxYear:n=new Date().getFullYear(),onDayChange:o})=>{const[a,i]=F(new Date),u=(R,z)=>new Date(R,z+1,0).getDate(),s=(R,z)=>new Date(R,z,1).getDay(),[c,d]=F(new Date().getFullYear()),p=new Date().getDate(),g=new Date().getMonth(),v=new Date().getFullYear(),b=a.getFullYear(),h=a.getMonth(),w=u(c,h),m=s(b,h),[x,E]=F(p);async function C(R){try{return(await bd.get(`https://date.nager.at/api/v3/publicholidays/${R}/CN`)).data}catch{return[]}}const A=[];P(()=>{C(b).then(R=>{R.forEach(z=>{const Ee=z.date.split("-");A.push({date:`${Number(Ee[1])}-${Number(Ee[2])}`,zhName:z.localName,enName:z.name})})})},[a]);const S=()=>{h<=0||(h-1===g?E(p):E(void 0),i(R=>{const z=R.getMonth()-1;return new Date(R.getFullYear(),z,1)}))},N=()=>{h>=11||(h+1===g?E(p):E(void 0),i(R=>{const z=R.getMonth()+1;return new Date(R.getFullYear(),z,1)}))},D=oe(()=>W===0&&h<=0,[h]),q=oe(()=>W===0&&h>=11,[h]),O=()=>{i(new Date),E(p)},ae=R=>{isNaN(R)||(i(z=>new Date(R,z.getMonth(),1)),R==v?x===void 0&&E(p):E(void 0),d(R))},H=oe(()=>({1:{en:"January",zh:"\u4E00\u6708"},2:{en:"February",zh:"\u4E8C\u6708"},3:{en:"March",zh:"\u4E09\u6708"},4:{en:"April",zh:"\u56DB\u6708"},5:{en:"May",zh:"\u4E94\u6708"},6:{en:"June",zh:"\u516D\u6708"},7:{en:"July",zh:"\u4E03\u6708"},8:{en:"August",zh:"\u516B\u6708"},9:{en:"September",zh:"\u4E5D\u6708"},10:{en:"October",zh:"\u5341\u6708"},11:{en:"November",zh:"\u5341\u4E00\u6708"},12:{en:"December",zh:"\u5341\u4E8C\u6708"}}),[h]),$=[];for(let R=0;R<m;R++)$.push(t("div",{className:"land-calendar-item day empty"},`empty-${R}`));for(let R=1;R<=w;R++)$.push(t("div",{className:`land-calendar-item day ${b===v&&h===g&&p===R?"active":""} ${x==R?"selected":""}`,onClick:()=>{E(R),o==null||o(R,h,b)},children:R},R));const Y=[{zh:"\u65E5",en:"Su"},{zh:"\u4E00",en:"Mo"},{zh:"\u4E8C",en:"Tu"},{zh:"\u4E09",en:"We"},{zh:"\u56DB",en:"Th"},{zh:"\u4E94",en:"Fr"},{zh:"\u516D",en:"Sa"}],W=oe(()=>r>0&&n>0&&n>r?n-r:0,[r,n]),Z=[...Array.from({length:n-r}).map((R,z)=>({value:r+z,label:`${r+z}`}))];return l(xd,{className:"land-calendar",children:[t("div",{className:"land-calendar-filter",children:t(Oe,{})}),l("div",{className:"land-calendar-header",children:[t("div",{className:"land-calendar-year",children:W===0?t("div",{children:v}):t(Ne,{selected:c,data:Z,onChange:R=>ae==null?void 0:ae(Number(R.value))})}),l("div",{className:"land-calendar-right-btn",children:[l("div",{className:"land-calendar-month",children:[e==="zh"?H[h+1].zh:H[h+1].en,t(L,{type:"text",icon:t(k,{name:"back"}),className:`land-calendar-btn back ${g===h?"hide":""}`,disabled:q,pop:`\u8FD4\u56DE${e==="zh"?H[h+1].zh:H[h+1].en}}`,onClick:O})]}),t(L,{type:"text",icon:t(k,{name:"arrow"}),className:"land-calendar-btn prev",disabled:D,pop:D?"\u4E0D\u80FD\u518D\u5C11\u4E86":void 0,onClick:S}),t(L,{type:"text",icon:t(k,{name:"arrow"}),className:"land-calendar-btn next",disabled:q,pop:q?"\u4E0D\u80FD\u518D\u591A\u4E86":void 0,onClick:N})]})]}),t("div",{className:"land-calendar-weekdays",children:Y.map((R,z)=>t("div",{className:"land-calendar-item weekday",children:e==="zh"?R.zh:R.en},z))}),t("div",{className:"land-calendar-days",children:$})]})},xd=B.div`
  &.land-calendar {
  }
  .land-calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .land-calendar-right-btn {
      display: flex;
      gap: var(--gap-8);
      align-items: center;
    }
    .land-calendar-btn {
      &.prev svg {
        transform: rotate(90deg);
      }
      &.next svg {
        transform: rotate(-90deg);
      }
    }
    .land-calendar-month {
      position: relative;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      .land-calendar-btn.back {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: opacity var(--transition-15) linear;
        &.hide {
          opacity: 0;
          pointer-events: none;
        }
      }
      &:hover {
        .land-calendar-btn.back:not(.hide) {
          opacity: 1;
        }
      }
    }
  }
  .land-calendar-weekdays,
  .land-calendar-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: var(--gap-4);
  }
  .land-calendar-item {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-2);
    border-radius: var(--radius-4);
    transition: all 0.2s linear;
    will-change: background-color color;
    cursor: pointer;
    &.weekday {
      color: var(--color-text-5);
    }
    &.day {
      display: flex;
      flex-direction: column;
      align-items: center;
      &:hover {
        background-color: var(--color-bg-1);
      }
      &:active {
        background-color: var(--color-bg-2);
      }
      &.active {
        color: var(--color-primary-6);
        font-weight: 500;
      }
      &.active.selected {
        background-color: var(--color-primary-6);
        color: var(--color-text-white);
      }
      &.selected {
        background-color: var(--color-text-2);
        color: var(--color-text-white);
      }
    }
    .land-calendar-bottom-dot {
      width: 4px;
      height: 4px;
      background-color: var(--color-primary-6);
      border-radius: 100%;
    }
  }
`;function wd(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u6309\u94AE\u7C7B\u578B",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(ua,{})})]})})}function Ut({width:e="100%",value:r,data:n,useDivider:o=!1,onChange:a,activeClassName:i="",className:u="",switchDisabled:s,style:c}){return t(Ed,{className:`land-switchBar  ${u}`,style:{width:e,...c},children:n==null?void 0:n.map((d,p)=>l(eo,{children:[o&&p!==0&&t(te,{direction:"column",margin:0,lang:"14px",className:`transition-2s ${r!==d.value&&r!==d.value-1?"opacity-1":"opacity-0"}`}),l(Fd,{type:"background",disabled:d.disabled||s,pop:d.tip,className:`flex-1 flex items-center justify-center gap-4 transition-2s shrink-0 ${Array.isArray(r)?r==null?void 0:r.includes(d.value):r===d.value?`selected color-gray-2 ${i}`:d.disabled?"color-gray-5":"color-gray-3"}`,width:"auto",onClick:()=>!d.disabled&&(a==null?void 0:a(d.value,d)),children:[d.label,d.showIcon&&l("div",{className:"size-icon-16 fs-12 flex items-center color-icon-secondary hover-pop relative cursor-default",children:[t(k,{name:"info-stroke",size:12}),t(U,{content:d.iconTip})]})]})]},d.value))})}const Ed=B.div`
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  background-color: var(--color-bg-1);
  border-radius: var(--radius-8);
`,Fd=B(L)`
  border: none;
  padding: unset;
  &.background.default {
    background-color: transparent;
  }
  &:hover {
    background-color: var(--color-bg-2);
  }
  &:active {
    background-color: var(--color-bg-3);
  }
  &.background.default.selected {
    background-color: var(--color-text-white);
    &:hover,
    &:active {
      background-color: var(--color-text-white);
    }
  }
`;function Cd(){const[e,r]=F(1);return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u6A21\u5757\u5207\u6362",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Ut,{value:e,data:[{value:1,label:"\u6A21\u57571"},{value:2,label:"\u6A21\u57572"},{value:3,label:"\u6A21\u57573"}],onChange:n=>r(n),width:"300px"})}),t(f,{title:"\u5305\u542B\u63D0\u793A",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Ut,{value:e,data:[{value:1,label:"\u6A21\u57571",tip:"\u6A21\u5757 1 \u7684\u63D0\u793A"},{value:2,label:"\u6A21\u57572",showIcon:!0,iconTip:"\u6A21\u5757 2 \u7684\u56FE\u6807\u63D0\u793A"},{value:3,label:"\u6A21\u57573"}],onChange:n=>r(n),width:"300px"})}),t(f,{title:"\u7981\u7528\u72B6\u6001",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Ut,{value:e,data:[{value:1,label:"\u6A21\u57571"},{value:2,label:"\u6A21\u57572",disabled:!0},{value:3,label:"\u6A21\u57573"}],onChange:n=>r(n),width:"300px"})})]})})}function kd(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u6C14\u6CE1",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:l("div",{className:"relative radius-6 border px-12 py-8 fs-14 cursor-pointer hover-pop",children:["hover\u6211\u8BD5\u8BD5",t(U,{content:"\u6211\u662F\u6C14\u6CE1\uFF5E"})]})}),t(f,{title:"\u6C14\u6CE1\u989C\u8272\u98CE\u683C",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[l("div",{className:"relative radius-6 border px-12 py-8 fs-14 cursor-pointer hover-pop",children:["\u767D\u8272\u6C14\u6CE1",t(U,{content:"\u6211\u662F\u767D\u8272\u6C14\u6CE1\uFF5E"})]}),l("div",{className:"relative radius-6 border px-12 py-8 fs-14 cursor-pointer hover-pop",children:["\u9ED1\u8272\u6C14\u6CE1",t(U,{content:"\u6211\u662F\u9ED1\u8272\u6C14\u6CE1\uFF5E",theme:"dark"})]})]})]})})}function Bd(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u6807\u9898",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t(f,{title:"\u4E00\u7EA7\u6807\u9898",type:"h1"}),t(f,{title:"\u4E8C\u7EA7\u6807\u9898",type:"h2"}),t(f,{title:"\u4E09\u7EA7\u6807\u9898",type:"h3"}),t(f,{title:"\u666E\u901A\u6807\u9898",type:"p"})]})]})})}const Kr=({width:e="100%",height:r=24,start:n="#f2f4f7",stop:o="#edeff2",style:a,className:i=""})=>t(Ad,{className:i,style:{width:typeof e=="number"?`${e}px`:e,height:typeof r=="number"?`${r}px`:r,backgroundSize:"400% 100%",...a},start:n,stop:o}),Ad=B.div`
  background: ${e=>`linear-gradient(90deg, ${e.start} 25%, ${e.stop} 37%, ${e.start} 63%)`};
  animation: skeleton-loading 1.4s ease infinite;
  @keyframes skeleton-loading {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;function Nd(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u9AA8\u67B6\u5C4F",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Kr,{width:200,height:40,className:"radius-6"})}),t(f,{title:"\u5B9A\u5236\u9AA8\u67B6\u5C4F\u80CC\u666F\u8272",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Kr,{width:200,height:40,start:"var(--color-primary-1)",stop:"var(--color-primary-2)",className:"radius-6"})})]})})}function Sd(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u52A0\u8F7D\u56FE\u6807",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(ze,{})}),t(f,{title:"\u8BBE\u7F6E\u989C\u8272",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(ze,{color:"var(--color-primary-6)"})}),t(f,{title:"\u8BBE\u7F6E\u7C97\u7EC6",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(ze,{strokeSize:4})}),t(f,{title:"\u8BBE\u7F6E\u5C3A\u5BF8",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(ze,{size:32})})]})})}const la=({content:e,url:r})=>{const n=K(null);return t(Ld,{ref:n,className:"absolute top-0 left-0 grid p-32 width-100 height-100 overflow-hidden",children:Array.from({length:20}).map((o,a)=>r?t("img",{className:"land-watermark-item img"},a):t("div",{className:"land-watermark-item",children:e},a))})},Ld=B.div`
  gap: 64px;
  box-sizing: border-box;
  grid-template-columns: repeat(3, 1fr);
  .land-watermark-item {
    transform: rotate(-45deg);
    color: var(--color-border-3);
    font-size: 12px;
  }
`;function Dd(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u9AA8\u67B6\u5C4F",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t("div",{className:"relative width-100",style:{height:"200px"},children:t(la,{content:"Land Design"})})})]})})}const sa=({data:e,hideIcon:r,style:n,className:o=""})=>t(jd,{style:n,className:o,children:e==null?void 0:e.map((a,i)=>t($d,{title:a.title,content:a.details,hideIcon:r,open:a.open},i))}),$d=({open:e=!1,title:r,hideIcon:n,content:o})=>{var s;const[a,i]=F(e);P(()=>i(e),[e]);const u=K(null);return l("div",{className:`land-collapse-item ${a?"open":""}`,children:[l("div",{className:"land-collapse-item-title",onClick:()=>i(!a),children:[!n&&t(k,{name:"arrow",strokeWidth:4}),r]}),t("div",{ref:u,className:"land-collapse-item-details",style:{maxHeight:a?`${(s=u.current)==null?void 0:s.scrollHeight}px`:"0px"},children:t("div",{className:"land-collapse-item-details-content",children:o})})]})},jd=B.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  .land-collapse-item {
    font-size: 14px;
    transition: height 0var (--transition-15) cubic-bezier(0.38, 0, 0.24, 1);
    .land-collapse-item-title {
      display: flex;
      align-items: center;
      color: var(--color-text-2);
      cursor: pointer;
      svg {
        transform: rotate(-90deg);
        transition: transform var(--transition-15) linear;
      }
    }
    .land-collapse-item-details {
      color: var(--color-text-4);
      overflow: hidden;
      transition: max-height var(--transition-15) linear;
      .land-collapse-item-details-content {
        padding: 12px 12px 0;
      }
    }
    &.open {
      .land-collapse-item-title {
        svg {
          transform: rotate(0deg);
        }
      }
    }
  }
`;function Td(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u6298\u53E0\u9762\u677F",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(sa,{data:[{title:"\u6298\u53E0\u6807\u9898 1",details:"\u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9"},{title:"\u6298\u53E0\u6807\u9898 2 (\u5C55\u5F00)",details:"\u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9",open:!0},{title:"\u6298\u53E0\u6807\u9898 3",details:"\u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9\u8FD9\u90E8\u5206\u662F\u6BCF\u4E2A\u6298\u53E0\u9762\u677F\u6298\u53E0\u6216\u5C55\u5F00\u7684\u5185\u5BB9"}],style:{width:"300px"}})})]})})}const Jr=({type:e="empty",title:r,subTitle:n,titleLink:o,subTitleLink:a,button:i,onTiTleLinkClick:u,onSubTitleLinkClick:s})=>l(Rd,{children:[e==="empty"&&t(k,{name:"check-fill",size:48,fill:"var(--color-border-2)"}),e==="offline"&&t(k,{name:"error-fill",size:48,fill:"var(--color-border-2)"}),l("div",{className:"land-state-title",children:[r,o&&l(_,{children:["\uFF0C",t(X,{onClick:u,children:o})]})]}),(n||a)&&l("div",{className:"land-state-subTitle",children:[n,l(_,{children:["\uFF0C",t(X,{onClick:s,children:a})]})]}),i&&t(L,{children:i})]}),Rd=B.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .land-state-title {
    font-size: 14px;
    margin-top: 8px;
    color: var(--color-text-3);
  }
  .land-state-subTitle {
    font-size: 12px;
    margin-top: 4px;
    color: var(--color-text-4);
  }
`;function Id(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u7A7A\u72B6\u6001",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Jr,{type:"empty",title:"\u6682\u65E0\u5185\u5BB9"})}),t(f,{title:"\u79BB\u7EBF\u72B6\u6001",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Jr,{type:"offline",title:"\u7F51\u7EDC\u9519\u8BEF"})})]})})}function Md(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u9ED8\u8BA4\u72B6\u6001",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(me,{type:"default",title:"\u6B64\u529F\u80FD\u4E3A\u5B9E\u9A8C\u6027\u529F\u80FD"})}),t(f,{title:"\u9519\u8BEF\u72B6\u6001",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(me,{type:"error",title:"\u4ECA\u65E5\u64CD\u4F5C\u6B21\u6570\u5DF2\u8FBE\u4E0A\u9650\uFF01"})}),t(f,{title:"\u8B66\u544A\u72B6\u6001",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(me,{type:"warn",title:"\u4F60\u7684\u989D\u5EA6\u5373\u5C06\u7528\u5B8C\uFF01"})}),t(f,{title:"\u5931\u8D25\u72B6\u6001",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(me,{type:"fail",title:"\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u540E\u91CD\u8BD5"})}),t(f,{title:"\u6210\u529F\u72B6\u6001",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(me,{type:"success",title:"\u63D0\u4EA4\u6210\u529F\uFF01"})}),t(f,{title:"\u52A0\u8F7D\u4E2D\u72B6\u6001",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(me,{type:"loading",title:"\u52A0\u8F7D\u4E2D..."})}),t(f,{title:"\u5E26\u94FE\u63A5\u72B6\u6001",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(me,{type:"fail",title:"\u52A0\u8F7D\u5931\u8D25",link:"\u91CD\u8BD5"})}),t(f,{title:"\u72B6\u6001\u6392\u5217\u65B9\u5411",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(me,{type:"fail",title:"\u52A0\u8F7D\u5931\u8D25",link:"\u91CD\u8BD5",direction:"column"})})]})})}const ca=({url:e,iconSize:r=24})=>{const n=K(null),[o,a]=F(!1);return P(()=>{o?n.current.src=e:n.current.src=""},[o,e]),l(Od,{onClick:()=>a(!o),iconSize:r,children:[t("audio",{ref:n}),o?t(zd,{size:r/1.8}):t(k,{name:"video-pause",size:24,fill:"var(--color-primary-6)"})]})},Od=B.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-width: ${e=>`${e.iconSize}px`};
  min-height: ${e=>`${e.iconSize}px`};
  audio {
    position: absolute;
    top: 0px;
    left: 0px;
  }
`,zd=({color:e="var(--color-primary-6)",size:r=12})=>t(_d,{className:"flex items-center justify-between",style:{width:`${r}px`,height:`${r}px`},children:Array.from({length:4}).map((n,o)=>t("div",{className:"audioBar radius-2 height-100",style:{background:e}},o))}),_d=B.div`
  --speed: 1s;

  .audioBar {
    width: 2px;
    transition: background-color 0.3s ease;
    transform-origin: bottom;
  }

  .audioBar:nth-child(1) {
    animation: grow var(--speed) ease-in-out calc(var(--speed) * -0.45) infinite;
  }

  .audioBar:nth-child(2) {
    animation: grow var(--speed) ease-in-out calc(var(--speed) * -0.3) infinite;
  }

  .audioBar:nth-child(3) {
    animation: grow var(--speed) ease-in-out calc(var(--speed) * -0.15) infinite;
  }

  .audioBar:nth-child(4) {
    animation: grow var(--speed) ease-in-out infinite;
  }

  @keyframes grow {
    0%,
    100% {
      transform: scaleY(0.375);
    }

    50% {
      transform: scaleY(1);
    }
  }
`;function Pd(){return t("div",{className:"flex column gap-24",children:t("div",{className:"flex column gap-12",children:t("div",{className:"flex justify-center gap-24 border p-32",children:t(ca,{})})})})}const rt=({value:e,prefix:r,suffix:n,unit:o,trendIcon:a,animation:i})=>{const[u,s]=F(e);return P(()=>s(e),[e]),K(0),K(null),P(()=>{},[e]),l(Hd,{className:"land-statistic",children:[r&&t("div",{className:"land-statistic-prefix",children:r}),l("div",{className:"land-statistic-value",children:[u,o&&t("div",{className:"land-statistic-unit",children:o})]}),a&&l("div",{className:"land-statistic-trend-icon",children:[a==="up"&&t(k,{name:"arrow-increase",fill:"var(--color-green-6)"}),a==="down"&&t(k,{name:"arrow-increase",fill:"var(--color-red-6)"}),a==="default"&&t(k,{name:"arrow-increase",fill:"var(--color-red-6)"})]}),n&&t("div",{className:"land-statistic-suffix",children:n})]})},Hd=B.div`
  display: flex;
  .land-statistic-value {
    display: flex;
    align-items: baseline;
    font-size: 32px;
    font-weight: 700;
    color: var(--color-text-2);
    white-space: nowrap;
  }
  .land-statistic-unit {
    margin-left: 2px;
    font-size: 12px;
    color: var(--color-text-2);
  }
  .land-statistic-trend-icon {
    flex-shrink: 0;
    width: 24px;
  }
`;function Vd(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u6570\u503C"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(rt,{value:10,unit:"\u4EBF+"})}),t(f,{title:"\u5305\u542B\u53D8\u5316\u52A8\u753B"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(rt,{value:10,unit:"\u4EBF+",animation:!0})}),t(f,{title:"\u5305\u542B\u53D8\u5316\u8D8B\u52BF"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t(rt,{value:10,unit:"\u4EBF+",trendIcon:"up"}),t(rt,{value:10,unit:"\u4EBF+",trendIcon:"down"}),t(rt,{value:10,unit:"\u4EBF+",trendIcon:"default"})]})]})})}function Ud(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u8868\u683C",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Kt,{className:"width-100",titleData:[{title:"\u65F6\u95F4",value:"time"},{title:"\u5730\u70B9",value:"location"},{title:"\u82B1\u8D39",value:"cost"}],data:[{title:"8.2",value:"\u5317\u4EAC",cost:"122\u5143"},{title:"8.3",value:"\u6DF1\u5733",cost:"88\u5143"}]})})]})})}const vt=({children:e,icon:r,canDelete:n,color:o="var(--color-text-2)",border:a,background:i="var(--color-bg-3)",style:u,className:s})=>l(qd,{className:s,style:{border:a,background:i,color:o,...u},children:[r,e,n&&t(k,{name:"close"})]}),qd=B.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 2px;
  font-size: 14px;
  svg {
    flex-shrink: 0;
  }
`;function Zd(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u56FE\u6807\u6807\u7B7E",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(vt,{icon:t(k,{name:"tag",size:20}),children:"\u5E26\u56FE\u6807\u6807\u7B7E"})}),t(f,{title:"\u53EF\u5220\u9664\u6807\u7B7E",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(vt,{canDelete:!0,children:"\u53EF\u5220\u9664\u6807\u7B7E"})}),t(f,{title:"\u81EA\u5B9A\u4E49\u6807\u7B7E\u6837\u5F0F",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t(vt,{background:"var(--color-primary-1)",color:"var(--color-primary-6)",children:"\u4E3B\u9898\u8272\u6807\u7B7E"}),t(vt,{border:"1px solid var(--color-primary-3)",color:"var(--color-primary-6)",background:"transparent",children:"\u4E3B\u9898\u8272\u6807\u7B7E\uFF08\u8FB9\u6846\uFF09"}),t(vt,{border:"1px dashed var(--color-primary-3)",color:"var(--color-primary-6)",background:"transparent",children:"\u4E3B\u9898\u8272\u6807\u7B7E\uFF08\u865A\u7EBF\u8FB9\u6846\uFF09"})]})]})})}const $t=({data:e,direction:r="column",icon:n})=>t(Gd,{className:`${r==="row"?"row":""}`,children:e==null?void 0:e.map((o,a)=>l(Xd,{className:`land-timeline-item ${r==="row"?"row":""}`,children:[l("div",{className:"land-timeline-indicator-wrapper",children:[o.icon||n||t("div",{className:"land-timeline-indicator"}),a!==(e==null?void 0:e.length)-1&&t(te,{direction:r})]}),l("div",{className:"land-timeline-content",children:[o.title&&t("div",{className:"land-timeline-title",children:o.title}),o.subTitle&&t("div",{className:"land-timeline-subTitle",children:o.subTitle}),o.desc&&t("div",{className:"land-timeline-desc",children:o.desc})]})]},a))}),Gd=B.div`
  display: flex;
  flex-direction: column;
  &.row {
    flex-direction: row;
    align-items: flex-start;
  }
`,Xd=B.div`
  display: flex;
  gap: 12px;
  padding-top: 4px;
  .land-timeline-indicator-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    height: 100%;
  }
  .land-timeline-indicator {
    flex-shrink: 0;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: var(--color-primary-6);
  }
  svg{
    flex-shrink: 0;
  }
  .land-timeline-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-bottom: 24px;
    .land-timeline-title {
      font-size: 16px;
      color: var(--color-text-2);
    }
    .land-timeline-subTitle {
      font-size: 12px;
      color: var(--color-text-5);
    }
    .land-timeline-desc {
      font-size: 14px;
      color: var(--color-text-4);
    }
  }
  &.row{
    flex-direction: column;
    padding-top: 0px;
    padding-left: 4px;
    .land-timeline-indicator-wrapper{
      flex-direction: row;
    }
    .land-timeline-content{
      padding-bottom: 0px;
      padding-right: 24px;
    }
  }
`;function Yd(){const e=[{title:"\u4E8B\u4EF6\u4E00",subTitle:"2024-2-1"},{title:"\u4E8B\u4EF6\u4E8C",subTitle:"2024-3-1",desc:"\u4E8B\u4EF6\u4E8C\u7684\u63CF\u8FF0\u5185\u5BB9"},{title:"\u4E8B\u4EF6\u4E09",subTitle:"2024-5-1"}];return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u7EB5\u5411\u65F6\u95F4\u8F74",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t($t,{data:e})}),t(f,{title:"\u6A2A\u5411\u65F6\u95F4\u8F74",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t($t,{direction:"row",data:e})}),t(f,{title:"\u81EA\u5B9A\u4E49\u65F6\u95F4\u8F74\u8282\u70B9",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t($t,{data:[{title:"\u4E8B\u4EF6\u4E00",subTitle:"2024-2-1",icon:t(k,{name:"single-number",value:1})},{title:"\u4E8B\u4EF6\u4E8C",subTitle:"2024-3-1",desc:"\u4E8B\u4EF6\u4E8C\u7684\u63CF\u8FF0\u5185\u5BB9",icon:t(k,{name:"single-number",value:2})},{title:"\u4E8B\u4EF6\u4E09",subTitle:"2024-5-1",icon:t(k,{name:"single-number",value:3})}]}),t($t,{data:[{title:"\u4E8B\u4EF6\u4E00",subTitle:"2024-2-1",icon:t("p",{children:"\u{1F304}"})},{title:"\u4E8B\u4EF6\u4E8C",subTitle:"2024-3-1",desc:"\u4E8B\u4EF6\u4E8C\u7684\u63CF\u8FF0\u5185\u5BB9",icon:t("p",{children:"\u2600\uFE0F"})},{title:"\u4E8B\u4EF6\u4E09",subTitle:"2024-5-1",icon:t("p",{children:"\u{1F306}"})}]})]})]})})}const jt=({show:e=!1,type:r="default",text:n="\u5495\u565C\u5495\u565C\uFF5E",style:o,className:a=""})=>{const[i,u]=F(!1);P(()=>{u(e)},[e]),P(()=>{u(!0);const c=setTimeout(()=>{u(!1)},1e3);return()=>clearTimeout(c)},[e]);const s=oe(()=>{switch(r){case"default":return{color:"white",background:"black",icon:null}}},[r]);return t(Kd,{className:`StyleToastContainer ${i?"show":"close"} ${a}`,style:{color:s==null?void 0:s.color,backgroundColor:s==null?void 0:s.background,...o},children:n})},Kd=B.div`
  position: fixed;
  border-radius: 6px;
  padding: 4px 12px;
  font-size: 14px;
  z-index: var(--zIndex-5);
  left: 50%;
  transform: translateX(-50%);
  transition: opacity var(--transition-2) linear, top var(--transition-2) linear;
  &.show {
    top: 24px;
    opacity: 0.9;
  }
  &.close {
    top: 32px;
    opacity: 0;
  }
`;function Jd(){const[e,r]=F(!1),[n,o]=F(!1),[a,i]=F(!1),[u,s]=F(!1);return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5168\u5C40\u63D0\u793A\uFF08success\uFF09",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t(L,{onClick:()=>r(!e),children:"\u5168\u5C40\u63D0\u793A\uFF08success\uFF09"}),t(jt,{type:"success",text:"\u5168\u5C40\u63D0\u793A\uFF08success\uFF09",show:e}),t(L,{onClick:()=>o(!n),children:"\u5168\u5C40\u63D0\u793A\uFF08fail\uFF09"}),t(jt,{type:"fail",text:"\u5168\u5C40\u63D0\u793A\uFF08fail\uFF09",show:n}),t(L,{onClick:()=>i(!a),children:"\u5168\u5C40\u63D0\u793A\uFF08warn\uFF09"}),t(jt,{type:"warn",text:"\u5168\u5C40\u63D0\u793A\uFF08warn\uFF09",show:a})]}),t(f,{title:"\u5168\u5C40\u63D0\u793A\uFF08\u7B80\u6D01\u7248\uFF09",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t(L,{onClick:()=>s(!u),children:"\u5168\u5C40\u63D0\u793A\uFF08\u7B80\u6D01\u7248\uFF09"}),t(jt,{text:"\u5168\u5C40\u63D0\u793A\uFF08\u7B80\u6D01\u7248\uFF09",show:u})]})]})})}const ye=({show:e,mask:r,title:n,headerLeftComponent:o,headerRightComponent:a,headerComponent:i,useHeaderDivider:u,footerLeftComponent:s,footerRightComponent:c,footerComponent:d,useFooterDivider:p,cancelLabel:g="\u53D6\u6D88",submitLabel:v="\u786E\u5B9A",size:b="medium",onClose:h,onSubmit:w,onCancel:m,children:x,wrapStyle:E,wrapClassName:C,contentStyle:A,contentClassName:S,bodyStyle:N,bodyClassName:D,maskStyle:q})=>{const O=oe(()=>{let ae="320px";switch(b){case"small":ae="320px";break;case"medium":ae="600px";break;case"large":ae="1000px";break}return ae},[b]);return l(Wd,{className:`land-dialog ${e?"show":""} ${C}`,contentWidth:O,style:E,children:[r&&t("div",{className:"land-dialog-mask",style:q}),l("div",{className:`land-dialog-content ${S}`,style:A,children:[i||(n||h||o||a?l("div",{className:"land-dialog-header",children:[o||t("div",{className:"land-dialog-header-title",children:n}),a||h&&t("div",{className:"land-dialog-header-close",children:t(k,{name:"close",onClick:h})})]}):null),u&&t(te,{}),t("div",{className:`land-dialog-body ${D}`,style:N,children:x}),p&&t(te,{}),d||l("div",{className:"land-dialog-footer",children:[c||(g||v||m||w)&&l("div",{className:"land-dialog-footer-btn",children:[m&&t(L,{type:"background",status:"default",onClick:m,children:g}),w&&t(L,{type:"background",status:"primary",onClick:w,children:v})]}),s]})]})]})},Wd=B.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  .land-dialog-content{
    opacity: 0;
    transform: scale(0.9); 
  }
  .land-dialog-mask{
    opacity: 0;
  }
  pointer-events: none;
  z-index: 1000;
  &.show{
    .land-dialog-content{
      opacity: 1;
      transform: scale(1);
      pointer-events: auto;
      transition: opacity var(--transition-15) linear, transform var(--transition-15) linear;
    }
    .land-dialog-mask{
      opacity: 1;
      transition: opacity var(--transition-15) linear;
    }
  }
  .land-dialog-mask{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
  }
  .land-dialog-content{
    position: relative;
    width: ${e=>e.contentWidth};
    background-color: var(--color-bg-white);
    box-shadow: var(--boxshadow-medium);
    border-radius: 6px;
    .land-dialog-header{
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 24px;
      height: 64px;
      .land-dialog-header-title{
        font-size: 16px;
        font-weight: 500;
        color: var(--color-text-2);
      }
      .land-dialog-header-close{
        position: absolute;
        top: 0px;
        right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 100%;
        color: var(--color-text-2);
        transition: color var(--transition-15) linear;
        cursor: pointer;
        &:hover{
          color: var(--color-text-1);
        }
      }
    }
    .land-dialog-body{
      padding: 20px 24px;
    }
    .land-dialog-footer{
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      padding: 16px 24px 24px;
      .land-dialog-footer-btn{
        display: flex;
        gap: 8px;
      }
    }
  }
`;function Qd(){const[e,r]=F(!1),[n,o]=F(!1),[a,i]=F(!1),[u,s]=F(!1),[c,d]=F(!1),[p,g]=F(!1),[v,b]=F(!1),[h,w]=F(!1),[m,x]=F(!1),[E,C]=F(!1);return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u5F39\u7A97",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t(L,{onClick:()=>r(!0),children:"\u6253\u5F00\u5F39\u7A97"}),t(ye,{show:e,onClose:()=>r(!1),onCancel:()=>r(!1),onSubmit:()=>r(!1),children:"\u8FD9\u91CC\u662F\u5F39\u7A97\u7684\u5177\u4F53\u5185\u5BB9"})]}),t(f,{title:"\u81EA\u5B9A\u4E49\u5F39\u7A97\u5934\u90E8\uFF08\u6807\u9898\u3001\u5DE6\u4FA7\u3001\u53F3\u4FA7\u3001\u6574\u4F53\uFF09",type:"h3"}),l("div",{className:"flex column items-center justify-center gap-24 border p-32",children:[t(L,{onClick:()=>d(!0),children:"\u6253\u5F00\u5F39\u7A97\uFF08\u5F39\u7A97\u6807\u9898\uFF09"}),t(ye,{show:c,title:"\u5F39\u7A97\u6807\u9898",onClose:()=>d(!1),onCancel:()=>d(!1),onSubmit:()=>d(!1),children:"\u8FD9\u91CC\u662F\u5F39\u7A97\u7684\u5177\u4F53\u5185\u5BB9"}),t(L,{onClick:()=>o(!0),children:"\u6253\u5F00\u5F39\u7A97\uFF08\u81EA\u5B9A\u4E49\u5F39\u7A97\u5934\u90E8\u5DE6\u4FA7\uFF09"}),t(ye,{show:n,headerLeftComponent:t(se,{}),onClose:()=>o(!1),onCancel:()=>o(!1),onSubmit:()=>o(!1),children:"\u8FD9\u91CC\u662F\u5F39\u7A97\u7684\u5177\u4F53\u5185\u5BB9"}),t(L,{onClick:()=>i(!0),children:"\u6253\u5F00\u5F39\u7A97\uFF08\u81EA\u5B9A\u4E49\u5F39\u7A97\u5934\u90E8\u53F3\u4FA7\uFF09"}),t(ye,{show:a,headerRightComponent:t(Ne,{}),onClose:()=>i(!1),onCancel:()=>i(!1),onSubmit:()=>i(!1),children:"\u8FD9\u91CC\u662F\u5F39\u7A97\u7684\u5177\u4F53\u5185\u5BB9"}),t(L,{onClick:()=>s(!0),children:"\u6253\u5F00\u5F39\u7A97\uFF08\u81EA\u5B9A\u4E49\u5F39\u7A97\u5934\u90E8\uFF09"}),t(ye,{show:u,headerComponent:t("div",{style:{height:"64px"},className:"flex items-center justify-center",children:"\u81EA\u5B9A\u4E49\u5F39\u7A97\u5934\u90E8"}),onCancel:()=>s(!1),onSubmit:()=>s(!1),children:"\u8FD9\u91CC\u662F\u5F39\u7A97\u7684\u5177\u4F53\u5185\u5BB9"})]}),t(f,{title:"\u81EA\u5B9A\u4E49\u5F39\u7A97\u5C3E\u90E8\uFF08\u6309\u94AE\u6587\u6848\u3001\u5DE6\u4FA7\u3001\u53F3\u4FA7\u3001\u6574\u4F53\uFF09",type:"h3"}),l("div",{className:"flex column items-center justify-center gap-24 border p-32",children:[t(L,{onClick:()=>g(!0),children:"\u6253\u5F00\u5F39\u7A97\uFF08\u5F39\u7A97\u6309\u94AE\u6587\u6848\uFF09"}),t(ye,{show:p,title:"\u5F39\u7A97\u6807\u9898",submitLabel:"\u77E5\u9053\u4E86",onClose:()=>g(!1),onSubmit:()=>g(!1),children:"\u8FD9\u91CC\u662F\u5F39\u7A97\u7684\u5177\u4F53\u5185\u5BB9"}),t(L,{onClick:()=>b(!0),children:"\u6253\u5F00\u5F39\u7A97\uFF08\u81EA\u5B9A\u4E49\u5F39\u7A97\u5C3E\u90E8\u5DE6\u4FA7\uFF09"}),t(ye,{show:v,title:"\u5F39\u7A97\u6807\u9898",footerLeftComponent:t(me,{title:"\u5F39\u7A97\u5E95\u90E8\u63D0\u793A\u5185\u5BB9"}),onClose:()=>b(!1),onCancel:()=>b(!1),onSubmit:()=>b(!1),children:"\u8FD9\u91CC\u662F\u5F39\u7A97\u7684\u5177\u4F53\u5185\u5BB9"}),t(L,{onClick:()=>w(!0),children:"\u6253\u5F00\u5F39\u7A97\uFF08\u81EA\u5B9A\u4E49\u5F39\u7A97\u5C3E\u90E8\u53F3\u4FA7\uFF09"}),t(ye,{show:h,title:"\u5F39\u7A97\u6807\u9898",footerRightComponent:t(_,{children:"\u81EA\u5B9A\u4E49\u5F39\u7A97\u5C3E\u90E8\u53F3\u4FA7"}),onClose:()=>w(!1),children:"\u8FD9\u91CC\u662F\u5F39\u7A97\u7684\u5177\u4F53\u5185\u5BB9"}),t(L,{onClick:()=>x(!0),children:"\u6253\u5F00\u5F39\u7A97\uFF08\u81EA\u5B9A\u4E49\u5F39\u7A97\u5C3E\u90E8\uFF09"}),t(ye,{show:m,title:"\u5F39\u7A97\u6807\u9898",onClose:()=>x(!1),footerComponent:t("div",{style:{height:"64px"},className:"flex items-center justify-center",children:"\u81EA\u5B9A\u4E49\u5F39\u7A97\u5C3E\u90E8"}),children:"\u8FD9\u91CC\u662F\u5F39\u7A97\u7684\u5177\u4F53\u5185\u5BB9"})]}),t(f,{title:"\u5E38\u89C4\u5F39\u7A97",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t(L,{onClick:()=>C(!0),children:"\u6253\u5F00\u5F39\u7A97\uFF08\u542B\u906E\u7F69\uFF09"}),t(ye,{show:E,mask:!0,onClose:()=>C(!1),onCancel:()=>C(!1),onSubmit:()=>C(!1),children:"\u8FD9\u91CC\u662F\u5F39\u7A97\u7684\u5177\u4F53\u5185\u5BB9"})]})]})})}const ve=({show:e,placement:r="right",mask:n,title:o,headerLeftComponent:a,headerRightComponent:i,headerComponent:u,useHeaderDivider:s=!0,footerLeftComponent:c,footerRightComponent:d,footerComponent:p,useFooterDivider:g=!0,cancelLabel:v="\u53D6\u6D88",submitLabel:b="\u786E\u5B9A",minWidth:h,maxWidth:w,size:m="auto",onClose:x,onSubmit:E,onCancel:C,children:A,wrapStyle:S,wrapClassName:N,contentStyle:D,contentClassName:q,bodyStyle:O,bodyClassName:ae,maskStyle:H})=>{const $=oe(()=>{let Z="320px";if(r==="bottom")Z="100%";else switch(m){case"small":Z="32%";break;case"medium":Z="60%";break;case"large":Z="80%";break;case"auto":Z="fit-content";break}return Z},[m,r]),Y=oe(()=>{let Z="100%";if(r==="bottom")switch(m){case"small":Z="30%";break;case"medium":Z="60%";break;case"large":Z="90%";break;case"auto":Z="fit-content";break}return Z},[r]),W=oe(()=>x&&(o||u||a),[x,u,a]);return l(ep,{className:`land-drawer ${e?"show":""} ${r} ${N}`,contentWidth:$,contentHeight:Y,minWidth:h,maxWidth:w,style:S,children:[n&&t("div",{className:"land-drawer-mask",style:H}),l("div",{className:`land-drawer-content ${q}`,style:D,children:[l("div",{className:"land-drawer-header-wrapper",children:[x&&t("div",{className:"land-drawer-header-close",children:t(k,{name:"close",onClick:x,size:24})}),W&&t(te,{direction:"column",lang:"36px",margin:12}),u||(o||x||a||i?l("div",{className:"land-drawer-header",children:[a||t("div",{className:"land-drawer-header-title",children:o}),i&&t("div",{className:"land-drawer-header-right",children:i})]}):null)]}),s&&t(te,{}),t("div",{className:`land-drawer-body ${ae}`,style:O,children:A}),g&&t(te,{}),p||l("div",{className:"land-drawer-footer",children:[d||(v||b||C||E)&&l("div",{className:"land-drawer-footer-btn",children:[C&&t(L,{type:"background",status:"default",onClick:C,children:v}),E&&t(L,{type:"background",status:"primary",onClick:E,children:b})]}),c]})]})]})},ep=B.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: end;
  justify-content: end;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  overflow: auto;
  z-index: 1000;
  .land-drawer-mask{
    opacity: 0;
  }
  .land-drawer-content{
    opacity: 0;
  }
  &.show{
    pointer-events: auto;
    .land-drawer-mask{
      opacity: 1;
      transition: opacity var(--transition-15) linear;
    }
    &.left .land-drawer-content,
    &.right .land-drawer-content,
    &.bottom .land-drawer-content{
        opacity: 1;
        transform: translate(0,0);
        transition: opacity var(--transition-15) linear, transform var(--transition-15) linear;
      }
  }
  &.right{
    .land-drawer-content{
      transform: translateX(10%); 
      border-radius: 6px 0 0 6px;
    }
  }
  &.bottom{
    .land-drawer-content{
      transform: translateY(10%); 
      border-radius: 6px 6px 0 0;
      max-width: unset;
      min-width: unset;
    }
  }
  .land-drawer-mask{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
  }
  .land-drawer-content{
    position: relative;
    display: flex;
    flex-direction: column;
    width: ${e=>e.contentWidth};
    height: ${e=>e.contentHeight};
    min-width: ${e=>e.minWidth};
    max-width: ${e=>e.maxWidth};
    background-color: var(--color-bg-white);
    box-shadow: var(--boxshadow-medium);
    .land-drawer-header-wrapper{
      display: flex;
      align-items: center;
      padding: 0 24px;
      height: 64px;
    }
    .land-drawer-header-close{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: -4px;
        width: 32px;
        height: 100%;
        color: var(--color-text-2);
        transition: color var(--transition-15) linear;
        flex-shrink: 0;
        cursor: pointer;
        &:hover{
          color: var(--color-text-1);
        }
      }
    .land-drawer-header{
      flex: 1;
      position: relative;
      display: flex;
      align-items: center;
      height: 100%;
      .land-drawer-header-title{
        font-size: 16px;
        font-weight: 500;
        color: var(--color-text-2);
      }
      .land-drawer-header-right{
        margin-left: auto;
      }
    }
    .land-drawer-body{
      padding: 20px 24px;
      flex: 1;
    }
    .land-drawer-footer{
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      padding: 24px;
      .land-drawer-footer-btn{
        display: flex;
        gap: 8px;
      }
    }
  }
`;function tp(){const[e,r]=F(!1),[n,o]=F(!1),[a,i]=F(!1),[u,s]=F(!1),[c,d]=F(!1),[p,g]=F(!1),[v,b]=F(!1),[h,w]=F(!1),[m,x]=F(!1),[E,C]=F(!1),[A,S]=F(!1);return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u4FA7\u62C9\u7A97",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t(L,{onClick:()=>r(!0),children:"\u6253\u5F00\u4FA7\u62C9\u7A97"}),t(ve,{show:e,onClose:()=>r(!1),onCancel:()=>r(!1),onSubmit:()=>r(!1),children:"\u8FD9\u91CC\u662F\u4FA7\u62C9\u7A97\u7684\u5177\u4F53\u5185\u5BB9"})]}),t(f,{title:"\u81EA\u5B9A\u4E49\u4FA7\u62C9\u7A97\u5934\u90E8\uFF08\u6807\u9898\u3001\u5DE6\u4FA7\u3001\u53F3\u4FA7\u3001\u6574\u4F53\uFF09",type:"h3"}),l("div",{className:"flex column items-center justify-center gap-24 border p-32",children:[t(L,{onClick:()=>d(!0),children:"\u6253\u5F00\u4FA7\u62C9\u7A97\uFF08\u4FA7\u62C9\u7A97\u6807\u9898\uFF09"}),t(ve,{show:c,title:"\u4FA7\u62C9\u7A97\u6807\u9898",onClose:()=>d(!1),onCancel:()=>d(!1),onSubmit:()=>d(!1),children:"\u8FD9\u91CC\u662F\u4FA7\u62C9\u7A97\u7684\u5177\u4F53\u5185\u5BB9"}),t(L,{onClick:()=>o(!0),children:"\u6253\u5F00\u4FA7\u62C9\u7A97\uFF08\u81EA\u5B9A\u4E49\u4FA7\u62C9\u7A97\u5934\u90E8\u5DE6\u4FA7\uFF09"}),t(ve,{show:n,headerLeftComponent:t(se,{}),onClose:()=>o(!1),onCancel:()=>o(!1),onSubmit:()=>o(!1),children:"\u8FD9\u91CC\u662F\u4FA7\u62C9\u7A97\u7684\u5177\u4F53\u5185\u5BB9"}),t(L,{onClick:()=>i(!0),children:"\u6253\u5F00\u4FA7\u62C9\u7A97\uFF08\u81EA\u5B9A\u4E49\u4FA7\u62C9\u7A97\u5934\u90E8\u53F3\u4FA7\uFF09"}),t(ve,{show:a,headerRightComponent:t(Ne,{}),onClose:()=>i(!1),onCancel:()=>i(!1),onSubmit:()=>i(!1),children:"\u8FD9\u91CC\u662F\u4FA7\u62C9\u7A97\u7684\u5177\u4F53\u5185\u5BB9"}),t(L,{onClick:()=>s(!0),children:"\u6253\u5F00\u4FA7\u62C9\u7A97\uFF08\u81EA\u5B9A\u4E49\u4FA7\u62C9\u7A97\u5934\u90E8\uFF09"}),t(ve,{show:u,headerComponent:t("div",{style:{height:"64px"},className:"flex items-center justify-center",children:"\u81EA\u5B9A\u4E49\u4FA7\u62C9\u7A97\u5934\u90E8"}),onClose:()=>s(!1),onCancel:()=>s(!1),onSubmit:()=>s(!1),children:"\u8FD9\u91CC\u662F\u4FA7\u62C9\u7A97\u7684\u5177\u4F53\u5185\u5BB9"})]}),t(f,{title:"\u81EA\u5B9A\u4E49\u4FA7\u62C9\u7A97\u5C3E\u90E8\uFF08\u6309\u94AE\u6587\u6848\u3001\u5DE6\u4FA7\u3001\u53F3\u4FA7\u3001\u6574\u4F53\uFF09",type:"h3"}),l("div",{className:"flex column items-center justify-center gap-24 border p-32",children:[t(L,{onClick:()=>g(!0),children:"\u6253\u5F00\u4FA7\u62C9\u7A97\uFF08\u4FA7\u62C9\u7A97\u6309\u94AE\u6587\u6848\uFF09"}),t(ve,{show:p,title:"\u4FA7\u62C9\u7A97\u6807\u9898",submitLabel:"\u77E5\u9053\u4E86",onClose:()=>g(!1),onSubmit:()=>g(!1),children:"\u8FD9\u91CC\u662F\u4FA7\u62C9\u7A97\u7684\u5177\u4F53\u5185\u5BB9"}),t(L,{onClick:()=>b(!0),children:"\u6253\u5F00\u4FA7\u62C9\u7A97\uFF08\u81EA\u5B9A\u4E49\u4FA7\u62C9\u7A97\u5C3E\u90E8\u5DE6\u4FA7\uFF09"}),t(ve,{show:v,title:"\u4FA7\u62C9\u7A97\u6807\u9898",footerLeftComponent:t(me,{title:"\u4FA7\u62C9\u7A97\u5E95\u90E8\u63D0\u793A\u5185\u5BB9"}),onClose:()=>b(!1),onCancel:()=>b(!1),onSubmit:()=>b(!1),children:"\u8FD9\u91CC\u662F\u4FA7\u62C9\u7A97\u7684\u5177\u4F53\u5185\u5BB9"}),t(L,{onClick:()=>w(!0),children:"\u6253\u5F00\u4FA7\u62C9\u7A97\uFF08\u81EA\u5B9A\u4E49\u4FA7\u62C9\u7A97\u5C3E\u90E8\u53F3\u4FA7\uFF09"}),t(ve,{show:h,title:"\u4FA7\u62C9\u7A97\u6807\u9898",footerRightComponent:t(_,{children:"\u81EA\u5B9A\u4E49\u4FA7\u62C9\u7A97\u5C3E\u90E8\u53F3\u4FA7"}),onClose:()=>w(!1),children:"\u8FD9\u91CC\u662F\u4FA7\u62C9\u7A97\u7684\u5177\u4F53\u5185\u5BB9"}),t(L,{onClick:()=>x(!0),children:"\u6253\u5F00\u4FA7\u62C9\u7A97\uFF08\u81EA\u5B9A\u4E49\u4FA7\u62C9\u7A97\u5C3E\u90E8\uFF09"}),t(ve,{show:m,title:"\u4FA7\u62C9\u7A97\u6807\u9898",onClose:()=>x(!1),footerComponent:t("div",{style:{height:"64px"},className:"flex items-center justify-center",children:"\u81EA\u5B9A\u4E49\u4FA7\u62C9\u7A97\u5C3E\u90E8"}),children:"\u8FD9\u91CC\u662F\u4FA7\u62C9\u7A97\u7684\u5177\u4F53\u5185\u5BB9"})]}),t(f,{title:"\u5E26\u906E\u7F69\u4FA7\u62C9\u7A97",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t(L,{onClick:()=>C(!0),children:"\u6253\u5F00\u4FA7\u62C9\u7A97\uFF08\u5E26\u906E\u7F69\uFF09"}),t(ve,{show:E,mask:!0,onClose:()=>C(!1),onCancel:()=>C(!1),onSubmit:()=>C(!1),children:"\u8FD9\u91CC\u662F\u4FA7\u62C9\u7A97\u7684\u5177\u4F53\u5185\u5BB9"})]}),t(f,{title:"\u5E95\u90E8\u4FA7\u62C9\u7A97",type:"h3"}),l("div",{className:"flex justify-center gap-24 border p-32",children:[t(L,{onClick:()=>S(!0),children:"\u6253\u5F00\u5E95\u90E8\u4FA7\u62C9\u7A97"}),t(ve,{show:A,placement:"bottom",mask:!0,onClose:()=>S(!1),onCancel:()=>S(!1),onSubmit:()=>S(!1),children:"\u8FD9\u91CC\u662F\u4FA7\u62C9\u7A97\u7684\u5177\u4F53\u5185\u5BB9"})]})]})})}const rp=({show:e,content:r,theme:n="light",placement:o="top",hideArrow:a=!1,cancelButtonProps:i,submitButtonProps:u,onCancel:s,onSubmit:c,style:d,className:p=""})=>l(np,{className:`land-popConfirm ${e?"show":""} ${n} ${p}`,style:{top:o==="bottom"?"100%":o==="top"?"auto":"50%",bottom:o==="top"?"100%":"",left:o==="right"?"100%":o==="left"?"auto":"50%",right:o==="left"?"100%":"",transform:`translate(${o==="top"||o==="bottom"?"-50%":o==="left"?"-12px":"12px"}, ${o==="top"?"-12px":o==="bottom"?"12px":"-50%"})`,...d},hideArrow:a,children:[t("div",{className:"land-popConfirm-content",children:r}),l("div",{className:"land-popConfirm-btn",children:[t(L,{type:"background",size:"small",onClick:s,...i,children:"\u53D6\u6D88"}),t(L,{type:"background",status:"primary",size:"small",onClick:c,...u,children:"\u786E\u8BA4"})]}),!a&&t("div",{className:"land-popConfirm-arrow",style:{left:o==="left"?"100%":o==="right"?"0":"50%",top:o==="top"?"100%":o==="bottom"?"0px":"50%",bottom:o==="bottom"?"100%":"",transform:`translate(-50%, -50%) rotate(${o==="top"?"45":o==="bottom"?"-135":o==="right"?"135":"-45"}deg)`}})]}),np=B.div`
  position: absolute;
  padding: 12px;
  display: flex;
  flex-direction: column;
  width: max-content;
  font-size: 14px;
  color: var(--color-text-2);
  border-radius: 6px;
  background-color: var(--color-bg-white);
  box-shadow: var(--boxshadow-small);
  border: var(--border-1) solid var(--color-border-1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.15s linear;
  z-index: 100;

  .land-popConfirm-content{
    padding-bottom: 12px;
  }
  .land-popConfirm-btn{
    display: flex;
    gap: 8px;
    margin-left: auto;
  }
  .land-popConfirm-arrow {
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    border-right: var(--border-1) solid var(--color-border-1);
    border-bottom: var(--border-1) solid var(--color-border-1);
    border-bottom-right-radius: var(--radius-4);
    background-color: var(--color-bg-white);
  }
  &.dark {
    background-color: ${e=>e.hideArrow?"rgba(0,0,0,0.68)":"var(--color-text-2)"};
    color: var(--color-text-light);
    border: 0;
    .land-popConfirm-arrow {
      background-color: var(--color-text-2);
      border: 0;
    }
  }
  &.show{
    opacity: 1;
    pointer-events: auto;
  }
`;function op(){const[e,r]=F(!1);return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u786E\u8BA4\u63D0\u793A\u6C14\u6CE1",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:l("div",{className:"relative",children:[l(L,{className:"click-pop",onClick:()=>r(!0),children:[t(k,{name:"delete",size:16}),"\u70B9\u51FB\u5220\u9664"]}),t(rp,{show:e,content:"\u5220\u9664\u540E\u65E0\u6CD5\u6062\u590D\uFF01\u786E\u5B9A\u5220\u9664\u6B64\u6761\u5185\u5BB9\u5417\uFF1F",onCancel:()=>r(!1),onSubmit:()=>r(!1)})]})})]})})}const da=({value:e=.6,hideLabel:r,style:n,className:o=""})=>t(ap,{className:`land-progress ${o}`,style:n,children:l("div",{className:"land-progress-content",children:[!r&&l("div",{className:"land-progress-label",style:{left:`${e*100}%`},children:[e*100,"%"]}),t("div",{className:"land-progress-bar",children:t("div",{className:"land-progress-bar-finished",style:{transform:`scaleX(${e})`}})})]})}),ap=B.div`
  width: 100%;
  .land-progress-content{
    position: relative;
    width: 100%;
    .land-progress-label{
      position: absolute;
      bottom: 100%;
      left: 0;
      font-size: 14px;
      color: var(--color-text-3);
      transform: translate(-50%,-4px);
    }
    .land-progress-bar{
      position: relative;
      width: 100%;
      height: 12px;
      border-radius: 12px;
      background-color: var(--color-bg-3);
      overflow: hidden;
      .land-progress-bar-finished{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--color-primary-6);
        transform-origin: left;
      }
    }
  }
  
`;function ip(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u5E38\u89C4\u8868\u683C",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(da,{})})]})})}const Wr=({line:e=1,text:r})=>{const n=K(null),[o,a]=F(!1);return P(()=>{const i=()=>{e===1&&n.current&&a(n.current.offsetWidth<n.current.scrollWidth),e>1&&n.current&&a(n.current.offsetHeight<n.current.scrollHeight)},u=new MutationObserver(i);return u.observe(document,{childList:!0,subtree:!0}),window.addEventListener("resize",i),()=>{u.disconnect(),window.removeEventListener("resize",i)}},[r]),l(up,{className:`${o?"hover-pop":""} `,line:e,children:[t("div",{ref:n,className:"land-ellipsis-content",children:r}),o&&t(U,{content:"\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57",style:{maxWidth:"100%"}})]})},up=B.div`
  position: relative;
  width: 100%;
  .land-ellipsis-content{
    font-size: 14px;
    color: inherit;
    overflow: hidden;
    white-space: ${e=>e.line>1?"":"nowrap"};
    text-overflow: ellipsis;
    display: ${e=>e.line>1?"-webkit-box":""};
    -webkit-line-clamp: ${e=>e.line};
    -webkit-box-orient: vertical;
    cursor: default ;
  }
`;function lp(){return t("div",{className:"flex column gap-24",children:l("div",{className:"flex column gap-12",children:[t(f,{title:"\u6587\u5B57\u7F29\u7565\u663E\u793A",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Wr,{text:"\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57"})}),t(f,{title:"\u6587\u5B57\u7F29\u7565\u663E\u793A\uFF08\u4E24\u884C\uFF09",type:"h3"}),t("div",{className:"flex justify-center gap-24 border p-32",children:t(Wr,{text:"\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57",line:2})})]})})}const pa=[{id:"icon",en:"Icon",zh:"\u56FE\u6807",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"size",type:"number",desc:"\u56FE\u6807\u5927\u5C0F",optional:!0},{name:"fill",type:"string",desc:"\u56FE\u6807\u586B\u5145\u989C\u8272",optional:!0},{name:"stroke",type:"string",desc:"\u56FE\u6807\u63CF\u8FB9\u989C\u8272",optional:!0},{name:"strokeWidth",type:"number",desc:"\u56FE\u6807\u586B\u5145\u989C\u8272",optional:!0}],example:t(gl,{}),demo:t(k,{name:"check-fill",size:36})},{id:"button",en:"Button",zh:"\u6309\u94AE",desc:"\u6309\u94AE\u662F\u4E00\u79CD\u547D\u4EE4\u7EC4\u4EF6\uFF0C\u53EF\u53D1\u8D77\u4E00\u4E2A\u5373\u65F6\u64CD\u4F5C\u3002",props:[{name:"text",type:"string",desc:"\u6309\u94AE\u4E3B\u8981\u6587\u6848",optional:!0},{name:"subText",type:"string",desc:"\u6309\u94AE\u6B21\u8981\u6587\u6848",optional:!0},{name:"icon",type:"element",desc:"\u6309\u94AE\u56FE\u6807",optional:!0},{name:"width",type:"string | number",desc:"\u6309\u94AE\u5BBD\u5EA6",optional:!0},{name:"height",type:"string | number",desc:"\u6309\u94AE\u9AD8\u5EA6",optional:!0},{name:"justify",type:"'center' | 'start' | 'end'",desc:"\u6309\u94AE\u6587\u5B57\u5BF9\u9F50\u65B9\u5F0F",optional:!0},{name:"type",type:"'text' | 'background' | 'border' | 'line'",desc:"\u6309\u94AE\u98CE\u683C",optional:!0},{name:"status",type:"'default' | 'primary' | 'warning' | 'danger' | 'success'",desc:"\u6309\u94AE\u72B6\u6001",optional:!0},{name:"disabled",type:"boolean",desc:"\u6309\u94AE\u662F\u5426\u7981\u7528",optional:!0},{name:"loading",type:"boolean",desc:"\u6309\u94AE\u662F\u5426\u52A0\u8F7D\u4E2D",optional:!0},{name:"pop",type:"string | element",desc:"\u6309\u94AE\u6C14\u6CE1",optional:!0},{name:"popProps",type:"popProps",desc:"Popover\u6C14\u6CE1\u76F8\u5173\u5C5E\u6027",optional:!0},{name:"href",type:"string",desc:"\u8DF3\u8F6C\u94FE\u63A5\uFF1A\u6309\u94AE\u4F5C\u4E3A a \u6807\u7B7E",optional:!0},{name:"target",type:"'_self' | '_blank' | '_top' | '_parent'",desc:"a \u6807\u7B7E\u5BF9\u5E94\u7684 target \u5C5E\u6027"},{name:"onClick",type:"func",desc:"\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6"}],example:t(ul,{}),demo:t(L,{text:"\u6309\u94AE"})},{id:"link",en:"Link",zh:"\u94FE\u63A5",desc:"",props:[{name:"status",type:"'primary' | 'warning' | 'success' | 'error'",desc:"\u94FE\u63A5\u7C7B\u578B",optional:!0},{name:"disabled",type:"boolean",desc:"\u94FE\u63A5\u662F\u5426\u7981\u7528",optional:!0},{name:"active",type:"boolean",desc:"\u94FE\u63A5\u662F\u5426\u5DF2\u70B9\u51FB",optional:!0},{name:"tip",type:"element | string",desc:"\u94FE\u63A5\u63D0\u793A\u6C14\u6CE1",optional:!0},{name:"tipProps",type:t(X,{href:"#MenuItemType",children:"tipProps"}),desc:"\u94FE\u63A5\u63D0\u793A\u6C14\u6CE1\u5C5E\u6027",optional:!0},{name:"children",type:"element",desc:"\u94FE\u63A5\u5185\u5BB9",optional:!0}],example:t(kl,{}),demo:t(X,{children:"\u94FE\u63A5"})}],ha=[{id:"divider",en:"Divider",zh:"\u5206\u5272\u7EBF",desc:"",props:[{name:"direction",type:"'row' | 'column'",desc:"\u5206\u5272\u7EBF\u65B9\u5411",optional:!0},{name:"size",type:"number",desc:"\u5206\u5272\u7EBF\u7C97\u7EC6",optional:!0},{name:"margin",type:"number",desc:"\u5206\u5272\u7EBF\u4E0A\u4E0B\u6216\u5DE6\u53F3\u8FB9\u8DDD",optional:!0},{name:"type",type:"'solid' | 'dashed'",desc:"\u5206\u5272\u7EBF\u7C7B\u578B\uFF1A\u5B9E\u7EBF\u6216\u8005\u865A\u7EBF",optional:!0},{name:"color",type:"string",desc:"\u5206\u5272\u7EBF\u989C\u8272",optional:!0},{name:"content",type:"element | string",desc:"\u5206\u5272\u7EBF\u5305\u542B\u7684\u5185\u5BB9",optional:!0},{name:"align",type:"'left' | 'center' | 'right'",desc:"\u5206\u5272\u7EBF\u5305\u542B\u5185\u5BB9\u65F6\u5BF9\u9F50\u65B9\u5F0F",optional:!0}],example:t(ll,{}),demo:t(te,{})},{id:"flex",en:"Flex",zh:"\u5F39\u6027\u5E03\u5C40",desc:"\u5F39\u6027\u5E03\u5C40",props:[{name:"w",type:"string",desc:"\u76D2\u5B50\u7684\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A[100%]",nedd:!0},{name:"h",type:"string",desc:"\u76D2\u5B50\u7684\u9AD8\u5EA6",nedd:!0},{name:"column",type:"boolean",desc:"flex \u4E3B\u8F74\u7684\u65B9\u5411\u662F\u5426\u5782\u76F4",nedd:!0},{name:"wrap",type:"boolean",desc:"\u5143\u7D20\u662F\u5426\u6362\u884C",nedd:!0},{name:"justify",type:"'start' | 'center' | 'end'",desc:"\u5143\u7D20\u5728\u4E3B\u8F74\u65B9\u5411\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F",optional:!0},{name:"align",type:"'start' | 'center' | 'end'",desc:"\u5143\u7D20\u5728\u4EA4\u53C9\u8F74\u65B9\u5411\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F",optional:!0},{name:"gap",type:"string",desc:"\u5143\u7D20\u4E4B\u95F4\u7684\u95F4\u9699",optional:!0},{name:"bothCenter",type:"boolean",desc:"\u5143\u7D20\u662F\u5426\u5728\u4E3B\u8F74\u548C\u4EA4\u53C9\u8F74\u65B9\u5411\u4E0A\u90FD\u5C45\u4E2D\u663E\u793A",optional:!0},{name:"children",type:"element",desc:"\u81EA\u5B9A\u4E49\u5143\u7D20",optional:!0}],example:t(on,{}),demo:t(J,{gap:8,children:Array.from({length:3}).map(()=>t("div",{className:"bg-primary flex-1",style:{height:"40px"}}))})},{id:"grid",en:"Grid",zh:"\u6805\u683C",props:[{name:"type",type:"'column-fit' | 'column-fill' | 'row-fit' | 'row-fill' | 'column-repeat' | 'row-repeat' | 'default'",desc:"\u5E38\u89C1\u7684\u51E0\u79CD grid \u5E03\u5C40"},{name:"autoSize",type:"number",desc:"\u81EA\u52A8\u586B\u5145\u6A21\u5F0F\u4E0B\u7684\u6700\u5C0F\u5BBD\u5EA6/\u9AD8\u5EA6"},{name:"repeatNum",type:"number",desc:"\u6309\u884C\u6216\u6309\u5217\u91CD\u590D\u65F6\u7684\u91CD\u590D\u6570\u91CF"},{name:"gao",type:"number | number[]",desc:"\u884C\u5217\u95F4\u9699"},{name:"children",type:"element",desc:"\u81EA\u5B9A\u4E49\u5143\u7D20",optional:!0}],example:t(cl,{}),demo:t(Et,{className:"width-100",gap:8,type:lr.ColumnRepeat,repeatNum:2,children:Array.from({length:4}).map(()=>t("div",{className:"bg-primary",style:{height:"40px"}}))})},{id:"layout",en:"Layout",zh:"\u5E03\u5C40",props:[{name:"name",type:"type",desc:"desc"}],example:t(Fl,{}),demo:l(ot,{className:"border width-100 ratio-1",children:[t(Yt,{logo:t("p",{children:"\u{1F337}\u{1F337}\u{1F337}"}),name:t(f,{title:"Web Site",type:"h2"}),fixed:!0,filter:10}),l(ot,{children:[t(at,{placement:"left",children:t(J,{bothCenter:!0,h:"100%",children:"SiderLeft"})}),t(zr,{style:{minHeight:"40px"},children:t(J,{bothCenter:!0,h:"100%",children:"Content"})}),t(at,{placement:"right",children:t(J,{bothCenter:!0,h:"100%",children:"SiderRight"})})]}),t(_r,{children:t(J,{bothCenter:!0,children:"Footer"})})]})}],fa=[{id:"201",en:"affixContainer",zh:"\u56FE\u9489",desc:"\u56FE\u9489\u7528\u4E8E\u5728\u5BB9\u5668\u5185\u90E8\u6307\u5B9A\u4F4D\u7F6E\u5C55\u793A\u5185\u5BB9",props:[{name:"placement",type:"'lt' | 'lb' | 'rt' | 'rb'",desc:"\u5FEB\u6377\u8BBE\u7F6E\u56FE\u9489\u4F4D\u7F6E"},{name:"gap",type:"number",desc:"\u5FEB\u6377\u5B9A\u4F4D\u65F6\u56FE\u9489\u4E0E\u56DB\u5468\u7684\u8DDD\u79BB"},{name:"offsetData",type:"{ left?: number, right?: number, top?: number, bottom?: number }",desc:"\u57FA\u4E8E absolute \u5B9A\u4F4D\u7684\u81EA\u5B9A\u4E49\u4F4D\u7F6E"},{name:"hover",type:"boolean",desc:"\u9F20\u6807\u60AC\u6D6E\u65F6\u9690\u85CF\u56FE\u9489"},{name:"hoverShow",type:"boolean",desc:"\u9F20\u6807\u60AC\u6D6E\u65F6\u663E\u793A\u56FE\u9489"},{name:"innerStyle",type:"CSSProperties",desc:"\u56FE\u9489\u5143\u7D20\u5BF9\u5E94\u7684 style"},{name:"innerClassName",type:"string",desc:"\u56FE\u9489\u5143\u7D20\u5BF9\u5E94\u7684 className"},{name:"Style",type:"CSSProperties",desc:"\u56FE\u9489\u5B9A\u4F4D\u5BB9\u5668\u5BF9\u5E94\u7684style"},{name:"className",type:"string",desc:"\u56FE\u9489\u5B9A\u4F4D\u5BB9\u5668\u5BF9\u5E94\u7684className"},{name:"content",type:"element",desc:"\u56FE\u9489\u5143\u7D20"},{name:"children",type:"element",desc:"\u56FE\u9489\u5BB9\u5668\u5143\u7D20"}],example:t(Al,{}),demo:t(Be,{className:"ratio-1 border radius-8",style:{width:"60%"},rtOption:{content:t(L,{icon:t(k,{name:"copy"})})}})},{id:"anchor",en:"anchor",zh:"\u951A\u70B9",desc:"\u951A\u70B9\u7528\u4E8E\u8DF3\u8F6C\u81F3\u9875\u9762\u6307\u5B9A\u4F4D\u7F6E\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(al,{}),demo:t(No,{data:[{key:"\u7EC4\u4EF6\u9884\u89C8",href:"#\u7EC4\u4EF6\u9884\u89C8",title:"\u7EC4\u4EF6\u9884\u89C8"},{key:"API",href:"#API",title:"API"},{key:"Type",href:"#Type",title:"Type"}]})},{id:"breadCrumb",en:"Breadcrumb",zh:"\u9762\u5305\u5C51",desc:"\u951A\u70B9\u7528\u4E8E\u8DF3\u8F6C\u81F3\u9875\u9762\u6307\u5B9A\u4F4D\u7F6E\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(Sl,{}),demo:t(Lo,{data:[{key:1,label:"\u9875\u97621"},{key:2,label:"\u9875\u9762\u9875\u9762\u9875\u9762\u9875\u97621-1",maxWidth:100},{key:3,label:"\u9875\u9762\u9875\u9762\u9875\u9762\u9875\u97621-1-2"}]})},{id:"menu",en:"Menu",zh:"\u5BFC\u822A\u83DC\u5355",desc:"\u5BFC\u822A\u83DC\u5355\u3002",props:[{name:"data",type:l(_,{children:[t(X,{href:"#MenuItemType",children:"MenuItemType"})," []"]}),desc:"\u5BFC\u822A\u6570\u636E",optional:!0},{name:"active",type:"number",desc:"\u5F53\u524D\u9009\u4E2D\u7684\u5BFC\u822A\u9879\u5BF9\u5E94\u7684\u552F\u4E00key",optional:!0},{name:"direction",type:"'row' | 'column'",desc:"\u5BFC\u822A\u6392\u5217\u65B9\u5411",optional:!0},{name:"theme",type:l(_,{children:[t(X,{href:"#ThemeType",children:"ThemeType"})," []"]}),desc:"\u5B9A\u5236\u5BFC\u822A\u4E3B\u9898",optional:!0},{name:"border",type:"boollean",desc:"\u662F\u5426\u9700\u8981\u4E0B\u8FB9\u6846",optional:!0},{name:"itemStyle",type:"CSSProperties",desc:"\u4E00\u7EA7\u5BFC\u822A\u9009\u9879\u5BF9\u5E94\u7684 style",optional:!0},{name:"itemClassName",type:"string",desc:"\u4E00\u7EA7\u5BFC\u822A\u9009\u9879\u5BF9\u5E94\u7684 className ",optional:!0}],example:t(Bl,{}),demo:t(ee,{data:[{key:1,title:"Navigation 1",clickType:j.SELF},{key:2,title:"Navigation 2",clickType:j.SELF}],active:1}),types:[{name:"MenuItemType",data:[{name:"key",type:"number",desc:"\u552F\u4E00\u6807\u8BC6",optional:!1},{name:"title",type:"string",desc:"\u5BFC\u822A\u9879\u526F\u6807\u9898",optional:!0},{name:"subTitle",type:"string",desc:"\u5BFC\u822A\u9879\u4E3B\u6807\u9898",optional:!0},{name:"icon",type:"string | element",desc:"\u5BFC\u822A\u9879\u524D\u7F6E\u56FE\u6807",optional:!0},{name:"isNew",type:"string | element | boolean",desc:"\u5BFC\u822A\u9879\u53F3\u4E0A\u89D2\u89D2\u6807",optional:!0},{name:"href",type:"string",desc:"\u5BFC\u822A\u9879\u5BF9\u5E94\u7684\u94FE\u63A5",optional:!0},{name:"clickType",type:t(X,{href:"#ClickType",children:"ClickType"}),desc:"\u5BFC\u822A\u9879\u70B9\u51FB\u8DF3\u8F6C\u7C7B\u578B",optional:!0},{name:"dropData",type:l(_,{children:[t(X,{href:"#MenuItemType",children:"MenuItemType"})," []"]}),desc:"\u5BFC\u822A\u9879\u4E0B\u62C9\u6846\u526F\u5BFC\u822A\u6570\u636E",optional:!0}],desc:"\u5B9A\u4E49\u5BFC\u822A\u9879\u6570\u636E\u7C7B\u578B\u3002"}]},{id:"pagination",en:"Pagination",zh:"\u5206\u9875",desc:"\u5206\u9875\u3002",props:[{name:"current",type:"number",desc:"\u5F53\u524D\u9875\u7801"},{name:"total",type:"number",desc:"\u603B\u9875\u6570"},{name:"pageSize",type:"number",desc:"\u6BCF\u6B21\u52A0\u8F7D\u7684\u9875\u6570"},{name:"showTotal",type:"boolean",desc:"\u662F\u5426\u663E\u793A\u603B\u9875\u6570"},{name:"showInput",type:"boolean",desc:"\u662F\u5426\u663E\u793A\u8F93\u5165\u6846"},{name:"onChange",type:"(current:number) => void;",desc:"\u9875\u7801\u5207\u6362\u4E8B\u4EF6"}],example:t(Dl,{}),demo:t(bt,{total:4,current:1,pageSize:1})},{id:"step",en:"Steps",zh:"\u6B65\u9AA4\u6761",desc:"\u6B65\u9AA4\u6761\u3002",props:[{name:"data",type:t(X,{href:"#StepsItemType",children:"StepsItemType"}),desc:"\u6B65\u9AA4\u6761\u6570\u636E\u7C7B\u578B"},{name:"current",type:"number | string",desc:"\u5F53\u524D\u8FDB\u5EA6"},{name:"useDivider",type:"boolean",desc:"\u662F\u5426\u663E\u793A\u5206\u5272\u7EBF"},{name:"dividerWidth",type:"string",desc:"\u5206\u5272\u7EBF\u5BBD\u5EA6"},{name:"onClick",type:"(item: StepsItemType) => void;",desc:"\u6B65\u9AA4\u6761\u70B9\u51FB\u4E8B\u4EF6"}],example:t(jl,{}),demo:t(Do,{data:[{key:1,title:"\u6B65\u9AA41",desc:"\u63CF\u8FF0\u6587\u5B57"},{key:2,title:"\u6B65\u9AA42",desc:"\u63CF\u8FF0\u6587\u5B57"},{key:3,title:"\u6B65\u9AA43",desc:"\u63CF\u8FF0\u6587\u5B57"}],current:2,finished:[1]})},{id:"dropdown",en:"Dropdown",zh:"\u4E0B\u62C9\u83DC\u5355",desc:"\u951A\u70B9\u7528\u4E8E\u8DF3\u8F6C\u81F3\u9875\u9762\u6307\u5B9A\u4F4D\u7F6E\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(on,{}),demo:t(_,{})}],ma=[{id:"input",en:"Input",zh:"\u8F93\u5165\u6846",desc:"\u6B65\u9AA4\u6761\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(is,{}),demo:t(se,{})},{id:"tagInput",en:"TagInput",zh:"\u6807\u7B7E\u8F93\u5165\u6846",desc:"\u6807\u7B7E\u8F93\u5165\u6846\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(us,{}),demo:t(Pr,{})},{id:"select",en:"Select",zh:"\u9009\u62E9\u5668",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"data",type:t(X,{href:"#StepsItemType",children:"SelectTreeItemType"}),desc:"\u6570\u636E"},{name:"placeholder",type:"string",desc:"\u5360\u4F4D\u7B26"},{name:"selected",type:"string | number",desc:"\u5F53\u524D\u9009\u4E2D\u9879"},{name:"width",type:"number | string",desc:"\u5BBD\u5EA6"},{name:"title",type:"string",desc:"\u6807\u9898"},{name:"titleInfo",type:"string",desc:"\u6807\u9898\u63D0\u793A\u5185\u5BB9"},{name:"info",type:"Element",desc:"\u9009\u6846\u63D0\u793A\u5185\u5BB9"},{name:"disabled",type:"boolean",desc:"\u662F\u5426\u6574\u4F53\u7981\u7528"},{name:"onChange",type:"(item: SelectTreeItemType) => void",desc:"\u9009\u62E9\u4E8B\u4EF6"}],type:[{name:"SelectTreeItemType",data:[{name:"value",type:"string | number",desc:"\u552F\u4E00\u6807\u8BC6"},{name:"label",type:"string | Element",desc:"\u9009\u9879\u503C"},{name:"tip",type:"Element",desc:"\u9009\u9879\u63D0\u793A\u5185\u5BB9"},{name:"info",type:"Element",desc:"\u9009\u9879\u56FE\u6807\u7C7B\u578B\u63D0\u793A"},{name:"disabled",type:"boolean",desc:"\u662F\u5426\u7981\u7528\u8BE5\u9009\u9879"}]}],example:t(ls,{}),demo:t(Ne,{})},{id:"selectTree",en:"SelectTree",zh:"\u5C42\u7EA7\u9009\u62E9\u5668",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"data",type:t(X,{href:"#SelectTreeItemType",children:"SelectTreeItemType"}),desc:"\u6570\u636E"},{name:"placeholder",type:"string",desc:"\u5360\u4F4D\u7B26"},{name:"selected",type:"string | number",desc:"\u5F53\u524D\u9009\u4E2D\u9879"},{name:"width",type:"number | string",desc:"\u5BBD\u5EA6"},{name:"title",type:"string",desc:"\u6807\u9898"},{name:"titleInfo",type:"string",desc:"\u6807\u9898\u63D0\u793A\u5185\u5BB9"},{name:"info",type:"Element",desc:"\u9009\u6846\u63D0\u793A\u5185\u5BB9"},{name:"disabled",type:"boolean",desc:"\u662F\u5426\u6574\u4F53\u7981\u7528"},{name:"onChange",type:"(item: SelectTreeItemType) => void",desc:"\u9009\u62E9\u4E8B\u4EF6"}],type:[{name:"SelectTreeItemType",data:[{name:"value",type:"string | number",desc:"\u552F\u4E00\u6807\u8BC6"},{name:"label",type:"string | Element",desc:"\u9009\u9879\u503C"},{name:"tip",type:"Element",desc:"\u9009\u9879\u63D0\u793A\u5185\u5BB9"},{name:"info",type:"Element",desc:"\u9009\u9879\u56FE\u6807\u7C7B\u578B\u63D0\u793A"},{name:"disabled",type:"boolean",desc:"\u662F\u5426\u7981\u7528\u8BE5\u9009\u9879"},{name:"children",type:"SelectTreeItemType[]",desc:"\u4E8C\u7EA7\u6570\u636E"}]}],example:t(ss,{}),demo:t($o,{})},{id:"radio",en:"Radio",zh:"\u5355\u9009\u5217\u8868",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"data",type:t(X,{href:"#CheckItemType",children:"CheckItemType"}),desc:"\u6570\u636E\u7C7B\u578B"},{name:"checked",type:"number | string",desc:"\u5F53\u524D\u9009\u62E9\u9879"},{name:"onChange",type:"(item: CheckItemType) => void;",desc:"\u9009\u62E9\u4E8B\u4EF6"}],type:[{name:"CheckItemType",data:[{name:"value",type:"number | string",desc:"\u552F\u4E00\u6807\u8BC6"},{name:"label",type:"string | Element",desc:"\u9009\u9879\u503C"},{name:"info",type:"Element",desc:"\u9009\u9879\u63D0\u793A\u5185\u5BB9"},{name:"disabled",type:"boolean",desc:"\u662F\u5426\u7981\u7528\u8BE5\u9009\u9879"}]}],example:t(ps,{}),demo:t(zt,{})},{id:"checkbox",en:"Checkbox",zh:"\u591A\u9009\u6846",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"data",type:t(X,{href:"#CheckItemType",children:"CheckItemType"}),desc:"\u6570\u636E\u7C7B\u578B"},{name:"checked",type:"(number | string)[]",desc:"\u5F53\u524D\u9009\u62E9\u5217\u8868"},{name:"onChange",type:"(item: CheckItemType) => void;",desc:"\u9009\u62E9\u4E8B\u4EF6"}],type:[{name:"CheckItemType",data:[{name:"value",type:"number | string",desc:"\u552F\u4E00\u6807\u8BC6"},{name:"label",type:"string | Element",desc:"\u9009\u9879\u503C"},{name:"info",type:"Element",desc:"\u9009\u9879\u63D0\u793A\u5185\u5BB9"},{name:"disabled",type:"boolean",desc:"\u662F\u5426\u7981\u7528\u8BE5\u9009\u9879"}]}],example:t(ys,{}),demo:t(_t,{})},{id:"switchBar",en:"SwitchBar",zh:"\u6A21\u5757\u5207\u6362",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",example:t(Cd,{}),demo:t(Ut,{})},{id:"colorPicker",en:"ColorPicker",zh:"\u989C\u8272\u9009\u62E9\u5668",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"value",type:"string",desc:"\u5916\u90E8\u56DE\u4F20\u7684\u989C\u8272\u503C"},{name:"size",type:"string | number",desc:"\u5C3A\u5BF8"},{name:"useSelect",type:"boolean",desc:"\u662F\u5426\u53EF\u9009\u989C\u8272"},{name:"showList",type:"boolean",desc:"\u662F\u5426\u5C55\u793A\u9ED8\u8BA4\u989C\u8272\u5217\u8868"},{name:"defaultColorList",type:"string[][]",desc:"\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u989C\u8272\u5217\u8868"},{name:"showOpacity",type:"boolean",desc:"\u662F\u5426\u53EF\u63A7\u5236\u900F\u660E\u5EA6"},{name:"input",type:"boolean",desc:"\u662F\u5426\u4F7F\u7528\u5E95\u90E8\u8F93\u5165\u6846"},{name:"info",type:"Element",desc:"\u63D0\u793A\u5185\u5BB9"},{name:"onChange",type:"(color: string) => void;",desc:"\u989C\u8272\u9009\u62E9\u4E8B\u4EF6"},{name:"onCardClick",type:"(color: string) => void;",desc:"\u70B9\u51FB\u989C\u8272\u663E\u793A\u5757"}],example:t(bs,{}),demo:t(an,{})},{id:"datePicker",en:"DatePicker",zh:"\u65E5\u671F\u9009\u62E9\u5668",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(xs,{}),demo:t(xt,{})},{id:"numberInput",en:"NumberInput",zh:"\u6570\u5B57\u8F93\u5165\u6846",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(ws,{}),demo:t(je,{})},{id:"switch",en:"Switch",zh:"\u5F00\u5173",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(Fs,{}),demo:t(Oe,{})},{id:"slider",en:"Slider",zh:"\u6ED1\u52A8\u8F93\u5165\u6761",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(Cs,{}),demo:t(He,{max:100,step:10,value:10})},{id:"rate",en:"Rate",zh:"\u8BC4\u5206",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(Rs,{}),demo:t(To,{})},{id:"upload",en:"Upload",zh:"\u4E0A\u4F20\u6846",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(Es,{}),demo:t(Hr,{})}],ga=[{id:"avatar",en:"Avatar",zh:"\u5934\u50CF",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(Ms,{}),demo:t(De,{})},{id:"badge",en:"Badge",zh:"\u5FBD\u6807\u6570",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(zs,{}),demo:t(ke,{})},{id:"calendar",en:"Calendar",zh:"\u65E5\u5386",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(wd,{}),demo:t(ua,{})},{id:"carousel",en:"Carousel",zh:"\u8D70\u9A6C\u706F",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(on,{}),demo:t(_,{})},{id:"collapse",en:"Collapse",zh:"\u6298\u53E0\u9762\u677F",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(Td,{}),demo:t(sa,{})},{id:"state",en:"State",zh:"\u72B6\u6001",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(Id,{}),demo:t(Jr,{type:"empty",title:"\u6682\u65E0\u5185\u5BB9"})},{id:"image",en:"Image",zh:"\u56FE\u7247",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(ds,{}),demo:t(_,{})},{id:"video",en:"Video",zh:"\u89C6\u9891",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(Ts,{}),demo:t(_,{})},{id:"audio",en:"Audio",zh:"\u97F3\u9891",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(Pd,{}),demo:t(ca,{url:""})},{id:"popOver",en:"Popover",zh:"\u6C14\u6CE1",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(kd,{}),demo:t(L,{text:"hover",className:"hover-pop",children:t(U,{content:"\u6211\u662F\u6C14\u6CE1",theme:"dark"})})},{id:"statistic",en:"Statistic",zh:"\u6570\u503C\u7EDF\u8BA1",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(Vd,{}),demo:t(rt,{})},{id:"table",en:"Table",zh:"\u8868\u683C",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(Ud,{}),demo:t(Kt,{className:"width-100 mt-16",titleData:[{title:"\u65F6\u95F4",value:"time"},{title:"\u5730\u70B9",value:"location"},{title:"\u82B1\u8D39",value:"cost"}],data:[{title:"8.2",value:"\u5317\u4EAC",cost:"122\u5143"},{title:"8.3",value:"\u6DF1\u5733",cost:"88\u5143"}]})},{id:"tag",en:"Tag",zh:"\u6807\u7B7E",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(Zd,{}),demo:t(_,{})},{id:"timeline",en:"Timeline",zh:"\u65F6\u95F4\u8F74",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(Yd,{}),demo:t(_,{})},{id:"swiper",en:"Swiper",zh:"\u8F6E\u64AD\u56FE",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}]}],va=[{id:"alert",en:"Alert",zh:"\u8B66\u544A\u63D0\u793A",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(Md,{}),demo:t(me,{type:"success",title:"\u63D0\u4EA4\u6210\u529F\uFF01"})},{id:"message",en:"Message",zh:"\u5168\u5C40\u63D0\u793A",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(Jd,{}),demo:t(_,{})},{id:"dialog",en:"Dialog",zh:"\u5F39\u7A97",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(Qd,{}),demo:t(ye,{})},{id:"drawer",en:"Drawer",zh:"\u62BD\u5C49",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(tp,{}),demo:t(_,{})},{id:"popConfirm",en:"PopConfirm",zh:"\u6C14\u6CE1\u63D0\u793A\u6846",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(op,{}),demo:t(_,{})},{id:"progress",en:"Progress",zh:"\u8FDB\u5EA6\u6761",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(ip,{}),demo:t(da,{value:.8})},{id:"skeleton",en:"Skeleton",zh:"\u9AA8\u67B6\u5C4F",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(Nd,{}),demo:t(Kr,{})},{id:"loading",en:"Loading",zh:"\u52A0\u8F7D",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(Sd,{}),demo:t(ze,{})},{id:"watermark",en:"Watermark",zh:"\u6C34\u5370",desc:"Land Design\u5185\u7F6E\u5E38\u89C4\u56FE\u6807\u3002",props:[{name:"name",type:"type",desc:"desc"}],example:t(Dd,{}),demo:t(la,{})}],ya=[{id:"title",en:"Title",zh:"\u6807\u9898",desc:"",props:[{name:"name",type:"type",desc:"desc"}],example:t(Bd,{}),demo:l(J,{column:!0,gap:8,className:"mx-auto",style:{width:"fit-content"},children:[t(f,{title:"\u4E00\u7EA7\u6807\u9898"}),t(f,{title:"\u4E8C\u7EA7\u6807\u9898",type:"h2"}),t(f,{title:"\u4E09\u7EA7\u6807\u9898",type:"h3"})]})},{id:"ellipsis",en:"Ellipsis",zh:"\u7F29\u7565\u663E\u793A",desc:"",props:[{name:"name",type:"type",desc:"desc"}],example:t(lp,{}),demo:t(Wr,{text:"\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u957F\u7684\u6587\u5B57"})}],ba=[{id:"auto-media",en:"AutoMedia",zh:"\u5A92\u4F53\u81EA\u9002\u5E94\u5BB9\u5668",desc:"",props:[{name:"name",type:"type",desc:"desc"}],example:t(Bs,{}),demo:t(_,{})}],Qn=[{id:0,title:"\u7EC4\u4EF6\u6982\u89C8"},{id:"icon",title:"\u901A\u7528\u578B",data:pa},{id:"divider",title:"\u5E03\u5C40\u578B",data:ha},{id:"affix",title:"\u5BFC\u822A\u578B",data:fa},{id:"input",title:"\u6570\u636E\u8F93\u5165\u578B",data:ma},{id:"avatar",title:"\u8F93\u5165\u5C55\u793A\u578B",data:ga},{id:"alert",title:"\u53CD\u9988\u578B",data:va},{id:"title",title:"\u6587\u5B57\u578B",data:ya},{id:"auto-media",title:"\u5176\u4ED6",data:ba}],sp=[{title:"\u7BAD\u5934\u7C7B",data:["arrow-line","arrow","arrow-double","arrow-triangle","arrow-to","arrow-nav","arrow-increase","collapse","collection","zoom-out","zoom-in","zoom-out-arrow","zoom-in-arrow","loop","download","out","reload","undo","sort","back","ahead","refresh","close"]},{title:"\u63D0\u793A\u7C7B",data:["check-stroke","check-fill","check","error-stroke","error-fill","error","info-stroke","info-fill","info","attention-stroke","attention-fill","attention"]},{title:"\u4EA4\u4E92\u7C7B"},{title:"\u7F16\u8F91\u7C7B",data:[""]},{title:"\u6587\u5B57\u7C7B"},{title:"\u5A92\u4F53\u7C7B",data:["video-pause","video-play","video-small-screen","video-full-width","video-contain-width"]}],cp=[...[{title:"Attention Seekers",children:["bounce","flash","pulse","rubberBand","shakeX","shakeY","headShake","swing","tada","wobble","jello","heartBeat"]},{title:"Back Entrances",children:["backInDown","backInLeft","backInRight","backInUp"]},{title:"Back Exits",children:["backOutDown","backOutLeft","backOutRight","backOutUp"]},{title:"Bouncing Entrances",children:["bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp"]},{title:"Bouncing Exits",children:["bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp"]},{title:"Fading Entrances",children:["fadeIn","fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig","fadeInTopLeft","fadeInTopRight","fadeInBottomLeft","fadeInBottomRight"]},{title:"Fading Exits",children:["fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig","fadeOutTopLeft","fadeOutTopRight","fadeOutBottomLeft","fadeOutBottomRight"]},{title:"Flippers",children:["flip","flipInX","flipInY","flipOutX","flipOutY"]}].map((e,r)=>({key:r+1,title:e.title,open:!0,dropData:[...e.children.map((n,o)=>({key:`1-${o+1}`,title:n}))]}))],dp=({onClick:e})=>{const r=[{id:"icon",data:pa,title:"\u901A\u7528\u578B"},{id:"divider",data:ha,title:"\u5E03\u5C40\u578B"},{id:"affix",data:fa,title:"\u5BFC\u822A\u578B"},{id:"input",data:ma,title:"\u6570\u636E\u8F93\u5165\u578B"},{id:"avatar",data:ga,title:"\u8F93\u5165\u5C55\u793A\u578B"},{id:"alert",data:va,title:"\u53CD\u9988\u578B"},{id:"title",data:ya,title:"\u6587\u5B57\u578B"},{id:"icon",data:ba,title:"\u5176\u4ED6"}];return l("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:20},children:[t(f,{title:"\u7EC4\u4EF6\u7D22\u5F15"}),t(te,{}),r==null?void 0:r.map(n=>{var o;return l(J,{column:!0,gap:24,children:[t("div",{className:"color-gray-2 fw-500 fs-20",children:n.title}),t("div",{className:"grid gap-24 width-100",style:{gridTemplateColumns:"repeat(auto-fill, minmax(240px,1fr))"},children:(o=n.data)==null?void 0:o.map(a=>l("div",{className:"flex column gap-8 radius-8 pointer",onClick:()=>e==null?void 0:e(a,n),children:[a.demo&&t("div",{className:"relative flex items-center justify-center p-12 bg-gray hover:bg-gray ratio-1",children:a.demo}),l(J,{align:"center",gap:8,children:[t(f,{title:a.en,type:"h3"}),t(f,{title:a.zh,type:"p"})]})]}))})]})})]})},pp=({})=>{var i,u;const[e,r]=F(0),[n,o]=F("drawer"),a=oe(()=>{var c,d;let s={id:1,en:"Icon",zh:"\u56FE\u6807"};return s=(d=(c=Qn.filter(p=>p.id===e)[0])==null?void 0:c.data)==null?void 0:d.filter(p=>p.id===n)[0],s},[e,n]);return l(_,{children:[t(ee,{data:Qn.map(s=>({key:s.id,title:s.title,open:!0,dropData:s.data?s.data.map(c=>({key:c.id,title:c.en,subTitle:c.zh})):[]})),active:e,onChange:s=>{r(s.key),o(s.key)},onDropChange:(s,c)=>{r(c.key),o(s.key)},dropProps:{active:n,direction:"column",border:!1},direction:"column",theme:{activeBg:"var(--color-bg-1)",lineColor:"transparent"},style:{width:"240px",height:"100%"},className:"py-24 overflow-auto scrollbar-none"}),t("div",{className:"flex-1 p-24 height-100 overflow-auto border-box",children:l(hp,{className:"flex column width-100",children:[e===0&&t(dp,{onClick:(s,c)=>{r(c.id),o(s.id)}}),e!==0&&l(_,{children:[t(f,{title:`${a.zh} ${a.en}`,type:"h1"}),a.desc&&t(f,{title:a.desc,type:"p"}),t(te,{margin:20}),t(f,{title:"1. \u7EC4\u4EF6\u9884\u89C8",type:"h2",className:"mb-16"}),a.example,t(f,{title:"2. API",type:"h2",className:"my-16"}),a.props&&t(Kt,{titleData:[{title:"\u5C5E\u6027",value:"props"},{title:"\u7C7B\u578B",value:"type"},{title:"\u63CF\u8FF0",value:"desc"}],data:a.props,style:{width:"100%"}}),((i=a.types)==null?void 0:i.length)>0&&l(_,{children:[t(f,{title:"3. Type",type:"h2",className:"my-16"}),(u=a.types)==null?void 0:u.map(s=>l(_,{children:[t(f,{title:s.name,type:"h3",className:"mt-16"}),t(f,{title:s.desc,type:"p",className:"mt-8"}),t(Kt,{className:"width-100 mt-16",titleData:[{title:"\u5C5E\u6027",value:"props"},{title:"\u7C7B\u578B",value:"type"},{title:"\u63CF\u8FF0",value:"desc"}],data:s.data})]}))]})]})]})})]})},hp=B.div`
  max-width: 960px;
  margin: 0 auto;
  box-sizing: border-box;
`;function fp(){const[e,r]=F(1);return t(_,{children:t(ee,{data:[{key:1,title:"Principle",subTitle:"\u8BBE\u8BA1\u539F\u5219"},{key:2,title:"Colors",subTitle:"\u989C\u8272\u53D8\u91CF"},{key:3,title:"typeface",subTitle:"\u5B57\u4F53"},{key:4,title:"Evaluation",subTitle:"\u6295\u5F71"},{key:4,title:"Evaluation",subTitle:"\u5C42\u7EA7"}],active:e,onChange:n=>r(n.key),direction:"column",style:{width:"240px",height:"100%"},className:"py-24 overflow-auto scrollbar-none"})})}function mp(){const[e,r]=F(1),[n,o]=F();return l(_,{children:[t(ee,{data:cp,active:e,onChange:a=>r(a.key),onDropChange:(a,i)=>{r(i.key),o(a)},direction:"column",style:{width:"240px",height:"100%"},className:"py-24 overflow-auto scrollbar-none"}),t("div",{className:"flex-1 flex both-center",children:t("div",{className:`fs-32 fw-600 animate__animated animate__${n==null?void 0:n.title}`,children:"Animation"})})]})}function gp(){const[e,r]=F(3);return l("div",{className:"flex column",style:{height:"100vh"},children:[t(Yt,{borderBottom:!0,name:t(f,{title:"Component Demo Lib"}),menuProps:{data:[{key:1,title:"\u4F7F\u7528\u6307\u5357",clickType:j.SELF},{key:2,title:"\u8BBE\u8BA1\u8BED\u8A00",clickType:j.SELF},{key:3,title:"\u7EC4\u4EF6",clickType:j.SELF},{key:4,title:"\u52A8\u753B",clickType:j.SELF}],active:e,onChange:n=>r(n.key)},align:"end"}),l("div",{className:"flex-1 flex",style:{height:"0"},children:[e===2&&t(fp,{}),e===3&&t(pp,{}),e===4&&t(mp,{})]})]})}Dr.createRoot(document.getElementById("root")).render(t(Ge.StrictMode,{children:t(gp,{})}));
//# sourceMappingURL=index.677a71b9.js.map
