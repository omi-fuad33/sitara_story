!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=20)}([function(e,t){e.exports=window.wp.element},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,r){var n=r(16);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},function(e,t,r){var n=r(17),a=r(18);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?a(e):t}},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.apiFetch},function(e,t){e.exports=window.React},function(e,t){e.exports=window.wp.blockEditor},function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},function(e,t,r){"use strict";(function(e){var n=r(9),a=r.n(n),o=r(14),i=r.n(o);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function l(e){var t=e.attributes,r=void 0===t?{}:t,n=e.children,o=void 0===n?null:n,i=e.selfClose,c=void 0!==i&&i,s=e.tagName;return c?a.a.createElement(s,r):a.a.createElement(s,r,o)}var u=function(){function e(){}var t=e.prototype;return t.attribute=function(e,t){return t},t.node=function(e,t){return t},e}(),p=/(url|image|image-set)\(/i,d=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.attribute=function(e,t){return"style"===e&&Object.keys(t).forEach((function(e){String(t[e]).match(p)&&delete t[e]})),t},n}(u),f={a:{content:9,self:!1,type:105},address:{invalid:["h1","h2","h3","h4","h5","h6","address","article","aside","section","div","header","footer"],self:!1},audio:{children:["track","source"]},br:{type:9,void:!0},body:{content:127},button:{content:8,type:105},caption:{content:1,parent:["table"]},col:{parent:["colgroup"],void:!0},colgroup:{children:["col"],parent:["table"]},details:{children:["summary"],type:97},dd:{content:1,parent:["dl"]},dl:{children:["dt","dd"],type:1},dt:{content:1,invalid:["footer","header"],parent:["dl"]},figcaption:{content:1,parent:["figure"]},footer:{invalid:["footer","header"]},header:{invalid:["footer","header"]},hr:{type:1,void:!0},img:{void:!0},li:{content:1,parent:["ul","ol","menu"]},main:{self:!1},ol:{children:["li"],type:1},picture:{children:["source","img"],type:25},rb:{parent:["ruby","rtc"]},rp:{parent:["ruby","rtc"]},rt:{content:8,parent:["ruby","rtc"]},rtc:{content:8,parent:["ruby"]},ruby:{children:["rb","rp","rt","rtc"]},source:{parent:["audio","video","picture"],void:!0},summary:{content:8,parent:["details"]},table:{children:["caption","colgroup","thead","tbody","tfoot","tr"],type:1},tbody:{parent:["table"],children:["tr"]},td:{content:1,parent:["tr"]},tfoot:{parent:["table"],children:["tr"]},th:{content:1,parent:["tr"]},thead:{parent:["table"],children:["tr"]},tr:{parent:["table","tbody","thead","tfoot"],children:["th","td"]},track:{parent:["audio","video"],void:!0},ul:{children:["li"],type:1},video:{children:["track","source"]},wbr:{type:9,void:!0}};function m(e){return function(t){f[t]=c({},e,f[t])}}["address","main","div","figure","p","pre"].forEach(m({content:1,type:65})),["abbr","b","bdi","bdo","cite","code","data","dfn","em","i","kbd","mark","q","ruby","samp","strong","sub","sup","time","u","var"].forEach(m({content:8,type:73})),["p","pre"].forEach(m({content:8,type:65})),["s","small","span","del","ins"].forEach(m({content:8,type:9})),["article","aside","footer","header","nav","section","blockquote"].forEach(m({content:1,type:67})),["h1","h2","h3","h4","h5","h6"].forEach(m({content:8,type:69})),["audio","canvas","iframe","img","video"].forEach(m({type:89}));var b=Object.freeze(f),y=["applet","base","body","command","embed","frame","frameset","head","html","link","meta","noscript","object","script","style","title"],h=Object.keys(b).filter((function(e){return"canvas"!==e&&"iframe"!==e})),v=Object.freeze({alt:1,cite:1,class:1,colspan:3,controls:4,datetime:1,default:4,disabled:4,dir:1,height:1,href:1,id:1,kind:1,label:1,lang:1,loading:1,loop:4,media:1,muted:4,poster:1,role:1,rowspan:3,scope:1,sizes:1,span:3,start:3,style:5,src:1,srclang:1,srcset:1,target:1,title:1,type:1,width:1}),g=Object.freeze({class:"className",colspan:"colSpan",datetime:"dateTime",rowspan:"rowSpan",srclang:"srcLang",srcset:"srcSet"}),O=/^<(!doctype|(html|head|body)(\s|>))/i,j=/^(aria\x2D|data\x2D|[0-9A-Z_a-z\u017F\u212A]+:)/i,E=/{{{(\w+)\/?}}}/;function N(){if("undefined"!=typeof window&&"undefined"!=typeof document)return document.implementation.createHTMLDocument("Interweave")}var _=function(){function t(e,t,r,n){void 0===t&&(t={}),void 0===r&&(r=[]),void 0===n&&(n=[]),this.allowed=void 0,this.banned=void 0,this.blocked=void 0,this.container=void 0,this.content=[],this.props=void 0,this.matchers=void 0,this.filters=void 0,this.keyIndex=void 0,this.props=t,this.matchers=r,this.filters=[].concat(n,[new d]),this.keyIndex=-1,this.container=this.createContainer(e||""),this.allowed=new Set(t.allowList||h),this.banned=new Set(y),this.blocked=new Set(t.blockList)}var r=t.prototype;return r.applyAttributeFilters=function(e,t){return this.filters.reduce((function(t,r){return null!==t&&"function"==typeof r.attribute?r.attribute(e,t):t}),t)},r.applyNodeFilters=function(e,t){return this.filters.reduce((function(t,r){return null!==t&&"function"==typeof r.node?r.node(e,t):t}),t)},r.applyMatchers=function(e,t){var r=this,n={},a=this.props,o=e,i=0,l=null;return this.matchers.forEach((function(e){var u=e.asTag().toLowerCase(),p=r.getTagConfig(u);if(!a[e.inverseName]&&r.isTagAllowed(u)&&r.canRenderChild(t,p)){for(var d="";o&&(l=e.match(o));){var f=l,m=f.index,b=f.length,y=f.match,h=f.valid,v=f.void,g=s(f,["index","length","match","valid","void"]),O=e.propName+i;m>0&&(d+=o.slice(0,m)),h?(d+=v?"{{{"+O+"/}}}":"{{{"+O+"}}}"+y+"{{{/"+O+"}}}",r.keyIndex+=1,i+=1,n[O]={children:y,matcher:e,props:c({},a,g,{key:r.keyIndex})}):d+=y,e.greedy?(o=d+o.slice(m+b),d=""):o=o.slice(m+(b||y.length))}e.greedy||(o=d+o)}})),0===i?e:this.replaceTokens(o,n)},r.canRenderChild=function(e,t){return!(!e.tagName||!t.tagName)&&(!e.void&&(e.children.length>0?e.children.includes(t.tagName):!(e.invalid.length>0&&e.invalid.includes(t.tagName))&&(t.parent.length>0?t.parent.includes(e.tagName):!(!e.self&&e.tagName===t.tagName)&&Boolean(e&&e.content&t.type))))},r.convertLineBreaks=function(e){var t=this.props,r=t.noHtml,n=t.disableLineBreaks;if(r||n||e.match(/<((?:\/[ a-z]+)|(?:[ a-z]+\/))>/gi))return e;var a=e.replace(/\r\n/g,"\n");return a=(a=a.replace(/\n{3,}/g,"\n\n\n")).replace(/\n/g,"<br/>")},r.createContainer=function(t){var r=(e.INTERWEAVE_SSR_POLYFILL||N)();if(r){var n=this.props.containerTagName||"body",a="body"===n||"fragment"===n?r.body:r.createElement(n);return t.match(O)||(a.innerHTML=this.convertLineBreaks(this.props.escapeHtml?i()(t):t)),a}},r.extractAttributes=function(e){var t=this,r=this.props.allowAttributes,n={},a=0;return 1===e.nodeType&&e.attributes?(Array.from(e.attributes).forEach((function(o){var i=o.name,c=o.value,s=i.toLowerCase(),l=v[s]||v[i];if(t.isSafe(e)&&(s.match(j)||(r||l&&2!==l)&&!s.match(/^on/)&&!c.replace(/(\s|\0|&#x0([9AD]);)/,"").match(/(javascript|vbscript|livescript|xss):/i))){var u="style"===s?t.extractStyleAttribute(e):c;4===l?u=!0:3===l?u=Number.parseFloat(String(u)):5!==l&&(u=String(u)),n[g[s]||s]=t.applyAttributeFilters(s,u),a+=1}})),0===a?null:n):null},r.extractStyleAttribute=function(e){var t={};return Array.from(e.style).forEach((function(r){var n=e.style[r];"string"!=typeof n&&"number"!=typeof n||(t[r.replace(/-([a-z])/g,(function(e,t){return t.toUpperCase()}))]=n)})),t},r.getTagConfig=function(e){var t={children:[],content:0,invalid:[],parent:[],self:!0,tagName:"",type:0,void:!1};return b[e]?c({},t,b[e],{tagName:e}):t},r.isSafe=function(e){if("undefined"!=typeof HTMLAnchorElement&&e instanceof HTMLAnchorElement){var t=e.getAttribute("href");if(t&&"#"===t.charAt(0))return!0;var r=e.protocol.toLowerCase();return":"===r||"http:"===r||"https:"===r||"mailto:"===r||"tel:"===r}return!0},r.isTagAllowed=function(e){return!this.banned.has(e)&&!this.blocked.has(e)&&(this.props.allowElements||this.allowed.has(e))},r.parse=function(){return this.container?this.parseNode(this.container,this.getTagConfig(this.container.nodeName.toLowerCase())):[]},r.parseNode=function(e,t){var r=this,n=this.props,o=n.noHtml,i=n.noHtmlExceptMatchers,s=n.allowElements,u=n.transform,p=[],d="";return Array.from(e.childNodes).forEach((function(e){if(1===e.nodeType){var n=e.nodeName.toLowerCase(),f=r.getTagConfig(n);d&&(p.push(d),d="");var m,b=r.applyNodeFilters(n,e);if(!b)return;if(u){r.keyIndex+=1;var y=r.keyIndex;m=r.parseNode(b,f);var h=u(b,m,f);if(null===h)return;if(void 0!==h)return void p.push(a.a.cloneElement(h,{key:y}));r.keyIndex=y-1}if(r.banned.has(n))return;if(o||i&&"br"!==n||!r.isTagAllowed(n)||!s&&!r.canRenderChild(t,f))p=p.concat(r.parseNode(b,f.tagName?f:t));else{r.keyIndex+=1;var v=r.extractAttributes(b),g={tagName:n};v&&(g.attributes=v),f.void&&(g.selfClose=f.void),p.push(a.a.createElement(l,c({},g,{key:r.keyIndex}),m||r.parseNode(b,f)))}}else if(3===e.nodeType){var O=o&&!i?e.textContent:r.applyMatchers(e.textContent||"",t);Array.isArray(O)?p=p.concat(O):d+=O}})),d&&p.push(d),p},r.replaceTokens=function(e,t){if(!e.includes("{{{"))return e;for(var r=[],n=e,a=null;a=n.match(E);){var o=a,i=o[0],c=o[1],s=a.index,l=i.includes("/");0,s>0&&(r.push(n.slice(0,s)),n=n.slice(s));var u=t[c],p=u.children,d=u.matcher,f=u.props,m=void 0;if(l)m=i.length,r.push(d.createElement(p,f));else{var b=n.match(new RegExp("{{{/"+c+"}}}"));0,m=b.index+b[0].length,r.push(d.createElement(this.replaceTokens(n.slice(i.length,b.index),t),f))}n=n.slice(m)}return n.length>0&&r.push(n),0===r.length?"":1===r.length&&"string"==typeof r[0]?r[0]:r},t}();function w(e){var t,r=e.attributes,n=e.containerTagName,o=e.content,i=e.emptyContent,c=e.parsedContent,s=e.tagName,u=n||s||"div",p="fragment"===u||e.noWrap;if(c)t=c;else{var d=new _(o||"",e).parse();d.length>0&&(t=d)}return t||(t=i),p?a.a.createElement(a.a.Fragment,null,t):a.a.createElement(l,{attributes:r,tagName:u},t)}!function(){function e(e,t,r){this.greedy=!1,this.options=void 0,this.propName=void 0,this.inverseName=void 0,this.factory=void 0,this.options=c({},t),this.propName=e,this.inverseName="no"+(e.charAt(0).toUpperCase()+e.slice(1)),this.factory=r||null}var t=e.prototype;t.createElement=function(e,t){return this.factory?a.a.createElement(this.factory,t,e):this.replaceWith(e,t)},t.doMatch=function(e,t,r,n){return void 0===n&&(n=!1),function(e,t,r,n){void 0===n&&(n=!1);var a=e.match(t instanceof RegExp?t:new RegExp(t,"i"));return a?c({match:a[0],void:n},r(a),{index:a.index,length:a[0].length,valid:!0}):null}(e,t,r,n)},t.onBeforeParse=function(e,t){return e},t.onAfterParse=function(e,t){return e}}();
/**
 * @copyright   2016-2019, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */t.a=function(e){var t=e.attributes,r=e.content,n=void 0===r?"":r,o=e.disableFilters,i=void 0!==o&&o,c=e.disableMatchers,l=void 0!==c&&c,u=e.emptyContent,p=void 0===u?null:u,d=e.filters,f=void 0===d?[]:d,m=e.matchers,b=void 0===m?[]:m,y=e.onAfterParse,h=void 0===y?null:y,v=e.onBeforeParse,g=void 0===v?null:v,O=e.tagName,j=void 0===O?"span":O,E=e.noWrap,N=void 0!==E&&E,k=s(e,["attributes","content","disableFilters","disableMatchers","emptyContent","filters","matchers","onAfterParse","onBeforeParse","tagName","noWrap"]),x=l?[]:b,R=i?[]:f,S=g?[g]:[],P=h?[h]:[];x.forEach((function(e){e.onBeforeParse&&S.push(e.onBeforeParse.bind(e)),e.onAfterParse&&P.push(e.onAfterParse.bind(e))}));var D=S.reduce((function(t,r){return r(t,e)}),n||""),C=new _(D,k,x,R),T=P.reduce((function(t,r){return r(t,e)}),C.parse());return a.a.createElement(w,{attributes:t,containerTagName:e.containerTagName,emptyContent:p,tagName:j,noWrap:N,parsedContent:0===T.length?void 0:T})}}).call(this,r(19))},function(e,t){e.exports=window.wp.blocks},function(e,t,r){"use strict";
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var n=/["'&<>]/;e.exports=function(e){var t,r=""+e,a=n.exec(r);if(!a)return r;var o="",i=0,c=0;for(i=a.index;i<r.length;i++){switch(r.charCodeAt(i)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}c!==i&&(o+=r.substring(c,i)),c=i+1,o+=t}return c!==i?o+r.substring(c,i):o}},function(e,t){e.exports=window.wp.serverSideRender},function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(2),o=r(13),i=r(3),c=r.n(i),s=r(4),l=r.n(s),u=r(5),p=r.n(u),d=r(6),f=r.n(d),m=r(1),b=r.n(m),y=r(10),h=r(7),v=r(8),g=r.n(v);function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b()(e);if(t){var a=b()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var j=function(e){p()(r,e);var t=O(r);function r(){return c()(this,r),t.apply(this,arguments)}return l()(r,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.episodeRef,a=e.episodeId,o=e.episodes,i=e.activateEpisode;return Object(n.createElement)("div",{className:t},"Select podcast Episode",Object(n.createElement)("select",{ref:r,className:"castos-select",defaultValue:a},o.map((function(e,t){return Object(n.createElement)("option",{key:e.id,value:e.id},e.title)}))),Object(n.createElement)("button",{className:"button",onClick:i},"Go"))}}]),r}(n.Component),E=r(12);function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b()(e);if(t){var a=b()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var _=function(e){p()(r,e);var t=N(r);function r(){return c()(this,r),t.apply(this,arguments)}return l()(r,[{key:"render",value:function(){return Object(n.createElement)("p",{className:this.props.className},Object(n.createElement)(E.a,{content:this.props.audioPlayer}))}}]),r}(n.Component);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b()(e);if(t){var a=b()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var k=function(e){p()(r,e);var t=w(r);function r(e){var n,a=e.attributes,o=e.setAttributes,i=e.className;c()(this,r),(n=t.apply(this,arguments)).episodeRef=React.createRef();var s=!0;a.audio_player&&(s=!1);var l={audioPlayer:a.audio_player||""};return n.state={className:i,editing:s,episode:l,episodes:[],setAttributes:o},n}return l()(r,[{key:"componentDidMount",value:function(){var e=this;g()({path:"ssp/v1/episodes"}).then((function(t){var r=[];Object.keys(t).map((function(e){var n={id:t[e].id,title:t[e].title.rendered};r.push(n)})),e.setState({episodes:r})}))}},{key:"render",value:function(){var e=this,t=this.state,r=t.editing,o=t.episodes,i=t.episode,c=t.className,s=t.setAttributes,l=Object(n.createElement)(y.BlockControls,{key:"controls"},Object(n.createElement)(h.Toolbar,null,Object(n.createElement)(h.Button,{className:"components-icon-button components-toolbar__control",label:Object(a.__)("Select Podcast","seriously-simple-podcasting"),onClick:function(){e.setState({editing:!0})},icon:"edit"})));return r?Object(n.createElement)(j,{className:c,episodeRef:this.episodeRef,episodes:o,activateEpisode:function(){var t=e.episodeRef.current.value,r="ssp/v1/audio_player?ssp_podcast_id="+t;g()({path:r}).then((function(r){var n={episodeId:t,audioPlayer:r.audio_player};e.setState({episode:n,editing:!1}),s({id:t,audio_player:n.audioPlayer})}))}}):[l,Object(n.createElement)(_,{className:c,audioPlayer:i.audioPlayer})]}}]),r}(n.Component),x=r(11),R=r.n(x);function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b()(e);if(t){var a=b()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var P=function(e){p()(r,e);var t=S(r);function r(){return c()(this,r),t.apply(this,arguments)}return l()(r,[{key:"render",value:function(){var e=this.props,t=(e.className,e.episodeId),r=e.episodeTitle,a=e.episodeFileUrl,o=e.episodeData,i=o.rssFeedUrl,c=o.subscribeUrls,s=o.embedCode,l=[];return Object.keys(c).forEach((function(e,t){var r=c[e].url;if(""!==r){var a=c[e].key,o=c[e].label,i="Subscribe on "+c[e].label;l.push(Object(n.createElement)("a",{key:e,href:r,target:"_blank",className:a,title:i,rel:"noopener noreferrer"},Object(n.createElement)("span",null),o))}})),Object(n.createElement)("div",{className:"player-panels player-panels-"+t},Object(n.createElement)("div",{className:"subscribe player-panel subscribe-"+t},Object(n.createElement)("div",{className:"close-btn close-btn-"+t},Object(n.createElement)("span",null),Object(n.createElement)("span",null)),Object(n.createElement)("div",{className:"panel__inner"},Object(n.createElement)("div",{className:"subscribe-icons"},l),Object(n.createElement)("div",{className:"player-panel-row"},Object(n.createElement)("div",{className:"title"},"RSS Feed"),Object(n.createElement)("div",null,Object(n.createElement)("input",{readOnly:!0,value:i,className:"input-rss input-rss-"+t})),Object(n.createElement)("button",{className:"copy-rss copy-rss-"+t})))),Object(n.createElement)("div",{className:"share share-"+t+" player-panel"},Object(n.createElement)("div",{className:"close-btn close-btn-"+t},Object(n.createElement)("span",null),Object(n.createElement)("span",null)),Object(n.createElement)("div",{className:"player-panel-row"},Object(n.createElement)("div",{className:"title"},"Share"),Object(n.createElement)("div",{className:"icons-holder"},Object(n.createElement)("a",{href:"https://www.facebook.com/sharer/sharer.php?u="+a+"&t="+r,target:"_blank",className:"share-icon facebook",title:"Share on Facebook",rel:"noopener noreferrer"},Object(n.createElement)("span",null)),Object(n.createElement)("a",{href:"https://twitter.com/intent/tweet?text="+a+"&url="+r,target:"_blank",className:"share-icon twitter",title:"Share on Twitter",rel:"noopener noreferrer"},Object(n.createElement)("span",null)),Object(n.createElement)("a",{href:a,target:"_blank",className:"share-icon download",title:"Download",rel:"noopener noreferrer"},Object(n.createElement)("span",null)))),Object(n.createElement)("div",{className:"player-panel-row"},Object(n.createElement)("div",{className:"title"},"Link"),Object(n.createElement)("div",null,Object(n.createElement)("input",{readOnly:!0,value:a,className:"input-link input-link-"+t})),Object(n.createElement)("button",{className:"copy-link copy-link-"+t})),Object(n.createElement)("div",{className:"player-panel-row"},Object(n.createElement)("div",{className:"title"},"Embed"),Object(n.createElement)("div",{style:{height:"10px"}},Object(n.createElement)("input",{readOnly:!0,value:s,className:"input-embed input-embed-"+t})),Object(n.createElement)("button",{className:"copy-embed copy-embed-"+t}))))}}]),r}(n.Component);function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b()(e);if(t){var a=b()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var C=function(e){p()(r,e);var t=D(r);function r(){return c()(this,r),t.apply(this,arguments)}return l()(r,[{key:"render",value:function(){try{var e=this.props,t=e.className,r=e.episodeId,a=e.episodeImage,o=e.episodeTitle,i=e.episodeFileUrl,c=e.episodeDuration,s=e.episodeData,l=s.playerMode,u=R()(t,"castos-player",l+"-mode"),p={background:"url("+a+") center center no-repeat",WebkitBackgroundSize:"cover",backgroundSize:"cover"},d="player__artwork player__artwork-"+r,f="play-btn play-btn-"+r,m="pause-btn pause-btn-"+r+" hide",b="loader loader-"+r+" hide",y="clip clip-"+r,h="ssp-progress progress-"+r,v="progress__filled progress__filled-"+r,g="playback playback-"+r,O="player-btn__volume player-btn__volume-"+r,j="player-btn__speed player-btn__speed-"+r,E="timer-"+r,N="duration-"+r,_="subscribe-btn-"+r,w="share-btn-"+r;return Object(n.createElement)("div",{className:u,"data-episode":r},Object(n.createElement)("div",{className:"player"},Object(n.createElement)("div",{className:"player__main"},Object(n.createElement)("div",{className:d,style:p}),Object(n.createElement)("div",{className:"player__body"},Object(n.createElement)("div",{className:"currently-playing"},Object(n.createElement)("div",{className:"show"},Object(n.createElement)("strong",null,o)),Object(n.createElement)("div",{className:"episode-title"},o)),Object(n.createElement)("div",{className:"play-progress"},Object(n.createElement)("div",{className:"play-pause-controls"},Object(n.createElement)("button",{title:"Play",className:f},Object(n.createElement)("span",{className:"screen-reader-text"},"Play Episode")),Object(n.createElement)("button",{alt:"Pause",className:m},Object(n.createElement)("span",{className:"screen-reader-text"},"Pause Episode")),Object(n.createElement)("img",{src:"/wp-content/plugins/seriously-simple-podcasting/assets/css/images/player/images/icon-loader.svg",className:b})),Object(n.createElement)("div",null,Object(n.createElement)("audio",{preload:"none",className:y},Object(n.createElement)("source",{loop:!0,preload:"none",src:i})),Object(n.createElement)("div",{className:h,title:"Seek"},Object(n.createElement)("span",{className:v})),Object(n.createElement)("div",{className:g},Object(n.createElement)("div",{className:"playback__controls"},Object(n.createElement)("button",{className:O,title:"Mute/Unmute"},Object(n.createElement)("span",{className:"screen-reader-text"},"Mute/Unmute Episode")),Object(n.createElement)("button",{"data-skip":"-10",className:"player-btn__rwd",title:"Rewind 10 seconds"},Object(n.createElement)("span",{className:"screen-reader-text"},"Rewind 10 Seconds")),Object(n.createElement)("button",{"data-speed":"1",className:j,title:"Playback Speed"},"1x"),Object(n.createElement)("button",{"data-skip":"30",className:"player-btn__fwd",title:"Fast Forward 30 seconds"},Object(n.createElement)("span",{className:"screen-reader-text"},"Fast Forward 30 seconds"))),Object(n.createElement)("div",{className:"playback__timers"},Object(n.createElement)("time",{id:E},"00:00"),Object(n.createElement)("span",null,"/"),Object(n.createElement)("time",{id:N},c))))),Object(n.createElement)("nav",{className:"player-panels-nav"},Object(n.createElement)("button",{className:"subscribe-btn",id:_,title:"Subscribe"},"Subscribe"),Object(n.createElement)("button",{className:"share-btn",id:w,title:"Share"},"Share"))))),Object(n.createElement)(P,{className:t,episodeId:r,episodeTitle:o,episodeFileUrl:i,episodeData:s}))}catch(e){console.log("Error:",e),this.state={error:e}}}}]),r}(n.Component);function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b()(e);if(t){var a=b()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var I=function(e){p()(r,e);var t=T(r);function r(e){var n,a=e.attributes,o=e.setAttributes,i=e.className;c()(this,r),(n=t.apply(this,arguments)).episodeRef=React.createRef();var s={episodeImage:a.image||"",episodeFileUrl:a.file||"",episodeTitle:a.title||"",episodeDuration:a.duration||"",episodeDownloadUrl:a.download||"",episodeData:a.episode_data||""},l=!0;return a.title&&(l=!1),n.state={editing:l,className:i,episodes:[],episode:s,setAttributes:o},n}return l()(r,[{key:"componentDidMount",value:function(){var e=this;g()({path:"ssp/v1/episodes"}).then((function(t){var r=[];Object.keys(t).map((function(e){var n={id:t[e].id,title:t[e].title.rendered};r.push(n)})),e.setState({episodes:r})}))}},{key:"render",value:function(){var e=this,t=this.state,r=t.editing,o=t.episodes,i=t.episode,c=t.className,s=t.setAttributes,l=Object(n.createElement)(y.BlockControls,{key:"controls"},Object(n.createElement)(h.Toolbar,null,Object(n.createElement)(h.Button,{className:"components-icon-button components-toolbar__control",label:Object(a.__)("Select Podcast","seriously-simple-podcasting"),onClick:function(){e.setState({editing:!0})},icon:"edit"})));return r?Object(n.createElement)(j,{className:c,episodeRef:this.episodeRef,episodes:o,activateEpisode:function(){var t=e.episodeRef.current.value,r="ssp/v1/episodes?include="+t;g()({path:r}).then((function(r){var n={episodeId:t,episodeImage:r[0].episode_player_image,episodeFileUrl:r[0].player_link,episodeTitle:r[0].title.rendered,episodeDuration:r[0].meta.duration,episodeDownloadUrl:r[0].download_link,episodeData:r[0].episode_data};e.setState({key:t,episode:n,editing:!1}),s({id:t,image:n.episodeImage,file:n.episodeFileUrl,title:n.episodeTitle,duration:n.episodeDuration,download:n.episodeDownloadUrl,episode_data:n.episodeData})}))}}):[l,Object(n.createElement)(C,{key:"castos-player",className:this.state.className,episodeId:i.episodeId,episodeImage:i.episodeImage,episodeTitle:i.episodeTitle,episodeFileUrl:i.episodeFileUrl,episodeDuration:i.episodeDuration,episodeData:i.episodeData})]}}]),r}(n.Component),A=r(15),F=r.n(A);function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b()(e);if(t){var a=b()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var M=function(e){p()(r,e);var t=B(r);function r(e){var n,a=e.attributes,o=e.setAttributes,i=e.className;c()(this,r),(n=t.apply(this,arguments)).episodeRef=React.createRef();var s=!0;return a.episodeId&&(s=!1),n.state={editing:s,className:i,episodes:[],setAttributes:o,episodeId:a.episodeId},n}return l()(r,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0;g()({path:"ssp/v1/episodes?per_page=100&get_additional_options=true"}).then((function(t){var r=[];Object.keys(t).map((function(e){var n={id:t[e].id,title:t[e].title.rendered};r.push(n)})),e.setState({episodes:r})}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this,t=this.state,r=t.editing,o=t.episodes,i=t.episodeId,c=t.className,s=t.setAttributes,l=Object(n.createElement)(y.BlockControls,{key:"controls"},Object(n.createElement)(h.Toolbar,null,Object(n.createElement)(h.Button,{className:"components-icon-button components-toolbar__control",label:Object(a.__)("Select Podcast","seriously-simple-podcasting"),onClick:function(){e.setState({editing:!0})},icon:"edit"})));return r?Object(n.createElement)(j,{className:c,episodeRef:this.episodeRef,episodes:o,activateEpisode:function(){var t=e.episodeRef.current.value;e.setState({episodeId:t,editing:!1}),s({episodeId:t})}}):[l,Object(n.createElement)(F.a,{className:c,key:"castos-player",block:"seriously-simple-podcasting/castos-html-player",attributes:{episodeId:i}})]}}]),r}(n.Component);function U(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b()(e);if(t){var a=b()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var L=function(e){p()(r,e);var t=U(r);function r(){return c()(this,r),t.apply(this,arguments)}return l()(r,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.post;return r.audio_player?Object(n.createElement)(_,{className:t,audioPlayer:r.audio_player}):Object(n.createElement)(C,{className:t,episodeImage:r.episode_player_image,episodeFileUrl:r.player_link,episodeTitle:r.title.rendered,episodeDuration:r.meta.duration,episodeDownloadUrl:r.download_link,episodeData:r.episode_data})}}]),r}(n.Component);function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b()(e);if(t){var a=b()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var H=function(e){p()(r,e);var t=z(r);function r(){return c()(this,r),t.apply(this,arguments)}return l()(r,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.title,o=e.download,i=e.duration,c=o+"?ref=download",s=o+"?ref=new_window";return Object(n.createElement)("p",{className:t},Object(n.createElement)("a",{href:c,title:r,className:"podcast-meta-download"},Object(a.__)("Download File","seriously-simple-podcasting"))," | ",Object(n.createElement)("a",{href:s,target:"_blank",title:r,className:"podcast-meta-new-window"},Object(a.__)("Play in new window","seriously-simple-podcasting"))," | ",Object(n.createElement)("span",{className:"podcast-meta-duration"},Object(a.__)("Duration","seriously-simple-podcasting"),": ",i))}}]),r}(n.Component);function W(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b()(e);if(t){var a=b()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var q=function(e){p()(r,e);var t=W(r);function r(){return c()(this,r),t.apply(this,arguments)}return l()(r,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.post,a=e.attributes;console.log(r);var o=R()("podcast-image-link",{"hide-featured-image":!a.featuredImage}),i=R()(t,"podcast-player",{"hide-player":!a.player}),c=R()("podcast-excerpt",{"hide-excerpt":!a.excerpt}),s=r.episode_featured_image?Object(n.createElement)("img",{src:r.episode_featured_image}):"";return Object(n.createElement)("article",{className:t},Object(n.createElement)("h2",null,Object(n.createElement)("a",{className:"entry-title-link",rel:"bookmark",href:r.link},Object(n.createElement)(E.a,{content:r.title.rendered}))),Object(n.createElement)("div",{className:"podcast-content"},Object(n.createElement)("a",{className:o,href:r.link,"aria-hidden":"true",tabIndex:"-1"},s),Object(n.createElement)(L,{className:i,post:r}),Object(n.createElement)(H,{className:i,title:r.title.rendered,download:r.download_link,duration:r.meta.duration}),Object(n.createElement)("div",{className:c},Object(n.createElement)(E.a,{content:r.excerpt.rendered}))))}}]),r}(n.Component);function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b()(e);if(t){var a=b()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var G=function(e){p()(r,e);var t=V(r);function r(e){var n,a=e.className;return c()(this,r),(n=t.apply(this,arguments)).state={className:a,episodes:[]},n}return l()(r,[{key:"componentDidMount",value:function(){var e=this;g()({path:"ssp/v1/episodes"}).then((function(t){var r=[];Object.keys(t).map((function(e){var n=t[e];r.push(n)})),e.setState({episodes:r})}))}},{key:"render",value:function(){var e=this.state,t=e.className,r=e.episodes,o=this.props,i=o.attributes,c=o.setAttributes,s=i.featuredImage,l=i.excerpt,u=i.player,p=Object(n.createElement)(y.InspectorControls,{key:"inspector-controls"},Object(n.createElement)(h.PanelBody,{key:"panel-1",title:Object(a.__)("Featured Image","seriously-simple-podcasting")},Object(n.createElement)(h.PanelRow,null,Object(n.createElement)("label",{htmlFor:"featured-image-form-toggle"},Object(a.__)("Show Featured Image","seriously-simple-podcasting")),Object(n.createElement)(h.FormToggle,{id:"high-contrast-form-toggle",label:Object(a.__)("Show Featured Image","seriously-simple-podcasting"),checked:s,onChange:function(){c({featuredImage:!s})}}))),Object(n.createElement)(h.PanelBody,{key:"panel-2",title:Object(a.__)("Podcast Player","seriously-simple-podcasting")},Object(n.createElement)(h.PanelRow,null,Object(n.createElement)("label",{htmlFor:"podcast-player-form-toggle"},Object(a.__)("Show Podcast Player","seriously-simple-podcasting")),Object(n.createElement)(h.FormToggle,{id:"podcast-player-form-toggle",label:Object(a.__)("Show Podcast Player","seriously-simple-podcasting"),checked:u,onChange:function(){c({player:!u})}}))),Object(n.createElement)(h.PanelBody,{key:"panel-3",title:Object(a.__)("Podcast Excerpt","seriously-simple-podcasting")},Object(n.createElement)(h.PanelRow,null,Object(n.createElement)("label",{htmlFor:"podcast-excerpt-form-toggle"},Object(a.__)("Show Podcast Excerpt","seriously-simple-podcasting")),Object(n.createElement)(h.FormToggle,{id:"podcast-excerpt-form-toggle",label:Object(a.__)("Show Podcast Excerpt","seriously-simple-podcasting"),checked:l,onChange:function(){c({excerpt:!l})}})))),d=r.map((function(e){return Object(n.createElement)(q,{key:"podcast-list-item-"+e.id,className:t,post:e,attributes:i})}));return[p,Object(n.createElement)("div",{key:"episode-items"},d)]}}]),r}(n.Component);Object(o.registerBlockType)("seriously-simple-podcasting/audio-player",{title:Object(a.__)("Audio Player","seriously-simple-podcasting"),icon:"controls-volumeon",category:"layout",supports:{multiple:!1},attributes:{id:{type:"string"},audio_player:{type:"string",source:"html",selector:"span"}},edit:k,save:function(e,t){var r=e.attributes,a=(r.id,r.audio_player);return Object(n.createElement)(_,{className:t,audioPlayer:a})}}),Object(o.registerBlockType)("seriously-simple-podcasting/castos-player",{title:Object(a.__)("Castos Player (OLD)","seriously-simple-podcasting"),icon:"controls-volumeon",category:"layout",supports:{multiple:!1},attributes:{id:{type:"string"},image:{type:"string"},file:{type:"string"},title:{type:"string"},duration:{type:"string"},download:{type:"string"},episode_data:{type:"object"}},edit:I,save:function(e,t){var r=e.attributes,a=r.id,o=r.image,i=r.file,c=r.title,s=r.duration,l=r.download,u=r.episode_data;return u?Object(n.createElement)(C,{className:t,episodeId:a,episodeImage:o,episodeFileUrl:i,episodeTitle:c,episodeDuration:s,episodeDownloadUrl:l,episodeData:u}):""}}),Object(o.registerBlockType)("seriously-simple-podcasting/castos-html-player",{title:Object(a.__)("Castos Player","seriously-simple-podcasting"),icon:"controls-volumeon",category:"layout",supports:{multiple:!1},attributes:{episodeId:{type:"string"}},edit:M,save:function(){return null}}),Object(o.registerBlockType)("seriously-simple-podcasting/podcast-list",{title:Object(a.__)("Podcast List","seriously-simple-podcasting"),icon:"megaphone",category:"widgets",supports:{multiple:!1},attributes:{featuredImage:{type:"boolean",default:!1},excerpt:{type:"boolean",default:!1},player:{type:"boolean",default:!1}},edit:G})}]);