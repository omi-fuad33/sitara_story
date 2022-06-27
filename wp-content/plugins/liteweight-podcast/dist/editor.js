(()=>{"use strict";var e={545:(e,t,n)=>{n.d(t,{Z:()=>a});const r=n.p+"assets/img/sticky-default.jpg";function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o={initializePlaylist:function(e,t,n){var r=o.getDetectorData(e,t,n,"initializePlaylist");if(!r)return!1;var a=r.wrapper,i=r.mediaElement,s=r.options,u=r.infos;"wave"==(null==u?void 0:u.skin)&&(s.controls=o.skinWave(null==u?void 0:u.podcast));var c=new Plyr(i,s);"wave"==(null==u?void 0:u.skin)&&o.handleWave(a,c,{barHeight:120,cursor:!0,waveColor:null==u?void 0:u.waveColor,cursorColor:null==u?void 0:u.progressColor,progressColor:null==u?void 0:u.progressColor,barWidth:4,barGap:2}),c.on("ready",(function(){a.querySelector(".plyr__time--duration").innerHTML=o.toHHMMSS(c.duration)}));var m,p=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}(a.querySelectorAll(".pdp_list ul li"));try{var d=function(){var e=m.value,t=e.getAttribute("data-url"),n=document.createElement("audio");n.src=t,n.addEventListener("loadedmetadata",(function(){e.querySelector(".duration").innerHTML=o.toHHMMSS(n.duration)})),e.onclick=function(){var t=e.getAttribute("data-url"),n=decodeURI(c.source),r=e.querySelector("h3").innerText,l=e.querySelector("img").getAttribute("src");t!=n&&(c.source={type:"audio",title:" ",sources:[{src:t,type:"audio/mp3"}]},c.play(),a.querySelector(".thumb img").src=l,a.querySelector(".info__info h2").innerText=r,"wave"==(null==u?void 0:u.skin)&&o.handleWave(a,c,{barHeight:120,cursor:!0,waveColor:null==u?void 0:u.waveColor,cursorColor:null==u?void 0:u.progressColor,progressColor:null==u?void 0:u.progressColor,barWidth:4,barGap:2}))}};for(p.s();!(m=p.n()).done;)d()}catch(e){p.e(e)}finally{p.f()}},initialize:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];console.log("wrapper",e),window.innerWidth;var r=o.getDetectorData(e,t,n,"initialize");if(!r)return!1;var l=r.wrapper,a=r.mediaElement,i=r.options,s=r.infos;if(null!=s&&s.share){var u=l.querySelectorAll(".share");Object.values(u).map((function(e,t){jQuery(e).jsSocials({shares:null==s?void 0:s.shares,shareIn:"popup",showLabel:null==s?void 0:s.showLabel,showCount:null==s?void 0:s.showCount})}))}Plyr.setup(a,i)},skinWave:function(e){return'<div class="pdf_player plyr__controls">\n\t\t<div class="thumb">\n\t\t\t<img src="'.concat(e.image?e.image:r,'" alt="">\n\t\t</div>\n\t\t<div class="info_wave_controls">\n\t\t\t<div class="info">\n\t\t\t\t<div class="play">\n          <button type="button" class="plyr__control" aria-label="Play, {title}" data-plyr="play">\n            <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg>\n            <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg>\n            <span class="label--pressed plyr__tooltip" role="tooltip">Pause</span>\n            <span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span>\n          </button>\n\t\t\t\t</div>\n\t\t\t\t<div class="info__info">\n\t\t\t\t\t').concat(e.podcastName?"<h3>".concat(null==e?void 0:e.podcastName,"</h3>"):"","\n\t\t\t\t\t<h2>").concat(null==e?void 0:e.title,'</h2>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="wave">\n          <div class="canvas-normal"><canvas id="wave-canvas"></canvas></div>\n          <div class="canvas-progress"><span class="cursor"></span><canvas id="wave-canvas-progress"></canvas></div>\n          <span class="cursor-time">00:00</span>\n\t\t\t</div>\n\t\t\t<div class="controls">\n\t\t\t\t<div class="time">\n            <div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>\n            <div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="controls__controls">\n          <button type="button" class="plyr__control" data-plyr="rewind">\n              <svg role="presentation"><use xlink:href="#plyr-rewind"></use></svg>\n              <span class="plyr__tooltip" role="tooltip">Rewind {seektime} secs</span>\n          </button>\n\t\t\t\t\t<button  data-option="speed" data-rate="1">1x </button>\n\t\t\t\t\t<button type="button" class="plyr__control" data-plyr="fast-forward">\n              <svg role="presentation"><use xlink:href="#plyr-fast-forward"></use></svg>\n              <span class="plyr__tooltip" role="tooltip">Forward {seektime} secs</span>\n          </button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>')},toHHMMSS:function(e){var t=parseInt(e,10),n=Math.floor(t/3600),r=Math.floor((t-3600*n)/60),l=t-3600*n-60*r;return n<10&&(n="0"+n),r<10&&(r="0"+r),l<10&&(l="0"+l),r+":"+l},getDetectorData:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,l=null;if(null===e)return!1;if(void 0!==e[0])return e.map((function(e,l){o[r](l,t,n)})),!1;if(void 0!==e.length&&0===e.length)return!1;null!==e.querySelector(".pdp_player")&&(e=e.querySelector(".pdp_player"));var a,i,s=jQuery(e).attr("data-settings");s&&(s=JSON.parse(s),t||(t=null===(a=s)||void 0===a?void 0:a.options),n||(n=null===(i=s)||void 0===i?void 0:i.infos));return l=e.querySelectorAll("audio"),{wrapper:e,options:t,mediaElement:l,infos:n}},handleWave:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=n.barWidth,l=void 0===r?3:r,a=n.barGap,i=void 0===a?2:a,s=n.barHeight,u=void 0===s?100:s,c=n.waveColor,m=void 0===c?"#777":c,p=n.progressColor,d=void 0===p?"#000":p,f=n.cursor,_=void 0===f||f,b=n.cursorColor,v=void 0===b?"#000":b,h=(jQuery(e).find("audio"),e.querySelector(".info__info h2")),w=e.querySelector(".wave .cursor-time"),N=e.querySelector(".wave").clientWidth,y=e.querySelector(".wave").clientHeight,g=e.querySelector("[data-option=speed]"),E=e.querySelector(".cursor"),S=jQuery(e).find("#wave-canvas")[0],C=jQuery(e).find("#wave-canvas-progress")[0],k=jQuery(e).find(".canvas-progress")[0],j=0;window.innerWidth>768&&(h.style.width=h.parentElement.clientWidth+"px",h.style.whiteSpace="nowrap"),S.onmousemove=function(e){var n=e.target.getBoundingClientRect();j=e.clientX-n.left,w.innerText=o.toHHMMSS(j/(N/t.duration)),w.style.display="inline-block",w.style.left=j-25+"px"},C.onmousemove=function(e){var n=e.target.getBoundingClientRect();j=e.clientX-n.left,w.innerText=o.toHHMMSS(j/(N/t.duration)),w.style.display="inline-block",w.style.left=j-25+"px"},S.onmouseleave=function(e){w.style.display="none"},C.onmouseleave=function(e){w.style.display="none"},S.onclick=function(){t.currentTime=j/(N/t.duration)},C.onclick=function(){t.currentTime=j/(N/t.duration)};var P=window.AudioContext||window.webkitAudioContext||!1,x=new P;if(x){S.width=N,S.style.width=N+"px",C.width=N,C.style.width=N+"px";for(var O=S.getContext("2d"),A=C.getContext("2d"),M=0,T=0,I=0;I<N/i;I++){var H=o.getRandomInt(20,u);T=(u-H)/2+(1.7*y-u)/2,O.fillStyle=m,O.fillRect(M,T,l,H),A.fillStyle=d,A.fillRect(M,T,l,H),M+=l+i}t.on("timeupdate",(function(){k.style.width=N/t.duration*t.currentTime+"px"})),g.onclick=function(){var e=g.getAttribute("data-rate");e=e<2?Number(e)+.5:1,t.speed=e,g.setAttribute("data-rate",e),g.innerHTML=e+"x"},_&&(E.style.display="inline-block",E.style.background=v),t.on("ready",(function(){g.setAttribute("data-rate",t.speed),g.innerHTML=t.speed+"x"}))}},getRandomInt:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}};const a=o},686:(e,t,n)=>{var r,l=n(545);(r=jQuery)(document).ready((function(){l.Z.initialize(r(".pdp_initializer")),l.Z.initializePlaylist(r(".pdp_waveInitializer"))}))}},t={};function n(r){var l=t[r];if(void 0!==l)return l.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{const e=n.p+"assets/img/default.png";var t;function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l={podcasts:{type:"array",default:[{title:"title",audio:"audio",image:e}]},controls:{type:"object",default:(t={play:!0,progress:!0},r(t,"current-time",!0),r(t,"mute",!0),r(t,"volume",!0),r(t,"settings",!0),r(t,"download",!0),t)},skin:{type:"string",default:"default"},theme:{type:"string",default:"light"},featureImage:{type:"boolean",default:!0},loop:{type:"boolean",default:!1},share:{type:"boolean",default:!0},showLabel:{type:"boolean",default:!1},showCount:{type:"boolean",default:!1},shares:{type:"array",default:["facebook","twitter","linkedin","pinterest","stumbleupon","whatsapp","email"]},width:{type:"string",default:"100%"}};var o="D:\\Ampps\\www\\freemius\\wp-content\\plugins\\liteweight-podcast\\src\\blocks\\Components\\BMediaUpload.js",a=(wp.i18n.__,wp.element.Fragment),i=wp.blockEditor,s=i.MediaUpload,u=i.MediaUploadCheck,c=wp.components,m=c.Button,p=c.PanelRow,d=c.TextControl;const f=function(e){var t=this,n=e.value,r=e.type,l=void 0===r?[]:r,i=e.onSelect,c=e.placeholder,f=void 0===c?"":c;return wp.element.createElement("div",{className:"bMediaUpload",__self:this,__source:{fileName:o,lineNumber:7,columnNumber:5}},wp.element.createElement(a,{__self:this,__source:{fileName:o,lineNumber:8,columnNumber:7}},wp.element.createElement(u,{__self:this,__source:{fileName:o,lineNumber:9,columnNumber:9}},wp.element.createElement(s,{type:l,onSelect:function(e){return i(e.url)},render:function(e){var n=e.open;return wp.element.createElement(m,{className:"button button-primary",onClick:n,icon:"upload",__self:t,__source:{fileName:o,lineNumber:13,columnNumber:35}})},__self:this,__source:{fileName:o,lineNumber:10,columnNumber:11}})),wp.element.createElement(p,{className:"width-100",__self:this,__source:{fileName:o,lineNumber:16,columnNumber:9}},wp.element.createElement(d,{placeholder:f,value:n,onChange:function(e){return i(e)},__self:this,__source:{fileName:o,lineNumber:17,columnNumber:11}}))))};var _="D:\\Ampps\\www\\freemius\\wp-content\\plugins\\liteweight-podcast\\src\\blocks\\podcast\\Settings.js",b=void 0;function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var g=wp.i18n.__,E=wp.element.Fragment,S=wp.components,C=S.TabPanel,k=S.Panel,j=S.PanelBody,P=S.PanelRow,x=S.FormToggle,O=S.TextControl,A=S.Button,M=(S.SelectControl,S.UnitControl,wp.blockEditor.InspectorControls),T=wp.data.select("core/editor").getCurrentPostId;const I=function(e){var t=e.props,n=t.attributes,r=t.setAttributes,l=n.podcasts,o=n.controls,a=n.skin,i=n.share,s=n.shares,u=n.featureImage,c=n.loop,m=(n.theme,n.showLabel),p=n.showCount,d=(n.width,function(e,t,n){var o=N(l);o[n]=h(h({},o[n]),{},w({},e,t)),r({podcasts:o})}),v=T(),y=["facebook","twitter","linkedin","pinterest","stumbleupon","whatsapp","email"],S=[{label:"Settings",control:"settings"},{label:"Download",control:"download"}];return wp.element.createElement(M,{style:{marginBottom:"40px"},__self:b,__source:{fileName:_,lineNumber:102,columnNumber:5}},wp.element.createElement(C,{className:"pdp",activeClass:"active-tab",tabs:[{name:"settings",title:"Settings",className:"general btTab"},{name:"controls",title:"Controls & Share",className:"slider btTab"},{name:"style",title:"Style",className:"style btTab"}],__self:b,__source:{fileName:_,lineNumber:103,columnNumber:7}},(function(e){return wp.element.createElement("span",{__self:b,__source:{fileName:_,lineNumber:127,columnNumber:13}},"settings"==e.name&&wp.element.createElement("span",{__self:b,__source:{fileName:_,lineNumber:129,columnNumber:17}},wp.element.createElement(k,{__self:b,__source:{fileName:_,lineNumber:130,columnNumber:19}},wp.element.createElement(j,{__self:b,__source:{fileName:_,lineNumber:131,columnNumber:21}},wp.element.createElement(P,{__self:b,__source:{fileName:_,lineNumber:132,columnNumber:23}},wp.element.createElement("div",{className:"pdp_front_shortcode",__self:b,__source:{fileName:_,lineNumber:133,columnNumber:25}},wp.element.createElement("input",{value:"[podcast id=".concat(v,"]"),__self:b,__source:{fileName:_,lineNumber:134,columnNumber:27}}),wp.element.createElement("span",{className:"htooltip",__self:b,__source:{fileName:_,lineNumber:135,columnNumber:27}},g("Copy To Clipboard","pdp"))))),wp.element.createElement(j,{title:g("Podcasts","pdp"),__self:b,__source:{fileName:_,lineNumber:139,columnNumber:21}},l.map((function(e,t){return wp.element.createElement(j,{title:null==e?void 0:e.title,initialOpen:!1,className:"subtitleItem",__self:b,__source:{fileName:_,lineNumber:142,columnNumber:27}},wp.element.createElement(P,{className:"width-100",__self:b,__source:{fileName:_,lineNumber:143,columnNumber:29}},wp.element.createElement(O,{value:null==e?void 0:e.title,onChange:function(e){return d("title",e,t)},placeholder:"Title",__self:b,__source:{fileName:_,lineNumber:144,columnNumber:31}})),wp.element.createElement(f,{type:["audio/mp3"],onSelect:function(e){return d("audio",e,t)},value:null==e?void 0:e.audio,placeholder:"Audio URL",__self:b,__source:{fileName:_,lineNumber:146,columnNumber:29}}),wp.element.createElement(f,{type:["audio/mp3"],onSelect:function(e){return d("image",e,t)},value:null==e?void 0:e.image,placeholder:"Image URL",__self:b,__source:{fileName:_,lineNumber:152,columnNumber:29}}),wp.element.createElement(A,{onClick:function(){return function(e){null==l||l.length;var t=N(l);t.splice(e,1),console.log("podcast",l),console.log("removde",t),r({podcasts:t})}(t)},__self:b,__source:{fileName:_,lineNumber:158,columnNumber:29}},g("Remove","pdp")))})),wp.element.createElement(A,{isPrimary:!0,onClick:function(){r({podcasts:[].concat(N(l),[{title:"Episode"}])})},__self:b,__source:{fileName:_,lineNumber:162,columnNumber:23}},g("Add More","h5vp"))),wp.element.createElement(j,{title:g("Settings","pdp"),__self:b,__source:{fileName:_,lineNumber:173,columnNumber:21}},wp.element.createElement(P,{__self:b,__source:{fileName:_,lineNumber:187,columnNumber:23}},wp.element.createElement("label",{htmlFor:"featureImage",className:"label",__self:b,__source:{fileName:_,lineNumber:188,columnNumber:25}},g("Feature Image","pdp")),wp.element.createElement(x,{id:"featureImage",checked:u,onChange:function(){return r({featureImage:!u})},__self:b,__source:{fileName:_,lineNumber:191,columnNumber:25}})),wp.element.createElement(P,{__self:b,__source:{fileName:_,lineNumber:193,columnNumber:23}},wp.element.createElement("label",{htmlFor:"loop",className:"label",__self:b,__source:{fileName:_,lineNumber:194,columnNumber:25}},g("loop","pdp")),wp.element.createElement(x,{id:"loop",checked:c,onChange:function(){return r({loop:!c})},__self:b,__source:{fileName:_,lineNumber:197,columnNumber:25}}))))),"controls"==e.name&&wp.element.createElement(k,{__self:b,__source:{fileName:_,lineNumber:204,columnNumber:17}},wp.element.createElement(j,{title:g("Controls","pdp"),initialOpen:!0,__self:b,__source:{fileName:_,lineNumber:205,columnNumber:19}},"default"===a?S.map((function(e){var t=e.label,n=e.control;return wp.element.createElement(P,{__self:b,__source:{fileName:_,lineNumber:209,columnNumber:29}},wp.element.createElement("label",{htmlFor:n,className:"label",__self:b,__source:{fileName:_,lineNumber:210,columnNumber:31}},g(t,"pdp")),wp.element.createElement(x,{id:n,checked:o[n],onChange:function(){return function(e){var t=h({},o);t[e]=!t[e],r({controls:t})}(n)},__self:b,__source:{fileName:_,lineNumber:213,columnNumber:31}}))})):g("Controls are available only Default skin","pdp")),wp.element.createElement(j,{title:g("Share","pdp"),initialOpen:!1,__self:b,__source:{fileName:_,lineNumber:219,columnNumber:19}},wp.element.createElement(P,{__self:b,__source:{fileName:_,lineNumber:220,columnNumber:21}},wp.element.createElement("label",{htmlFor:"share",className:"label",__self:b,__source:{fileName:_,lineNumber:221,columnNumber:23}},g("Share","pdp")),wp.element.createElement(x,{id:"share",checked:i,onChange:function(){return r({share:!i})},__self:b,__source:{fileName:_,lineNumber:224,columnNumber:23}})),i&&wp.element.createElement(E,{__self:b,__source:{fileName:_,lineNumber:227,columnNumber:23}},wp.element.createElement(P,{__self:b,__source:{fileName:_,lineNumber:228,columnNumber:25}},wp.element.createElement("label",{htmlFor:"showLabel",className:"label",__self:b,__source:{fileName:_,lineNumber:229,columnNumber:27}},g("Show Label","pdp")),wp.element.createElement(x,{id:"showLabel",checked:m,onChange:function(){return r({showLabel:!m})},__self:b,__source:{fileName:_,lineNumber:232,columnNumber:27}})),wp.element.createElement(P,{__self:b,__source:{fileName:_,lineNumber:234,columnNumber:25}},wp.element.createElement("label",{htmlFor:"showCount",className:"label",__self:b,__source:{fileName:_,lineNumber:235,columnNumber:27}},g("Show Count","pdp")),wp.element.createElement(x,{id:"showCount",checked:p,onChange:function(){return r({showCount:!p})},__self:b,__source:{fileName:_,lineNumber:238,columnNumber:27}}))),i&&y.map((function(e,t){return wp.element.createElement(P,{__self:b,__source:{fileName:_,lineNumber:245,columnNumber:27}},wp.element.createElement("label",{htmlFor:e,className:"label",__self:b,__source:{fileName:_,lineNumber:246,columnNumber:29}},g(e,"pdp")),wp.element.createElement(x,{id:e,checked:s.includes(e),onChange:function(){return function(e,t){var n=N(s),l=n.indexOf(t);e?l>-1&&n.splice(l,1):n=[].concat(N(n),[t]),r({shares:n})}(s.includes(e),e)},__self:b,__source:{fileName:_,lineNumber:249,columnNumber:29}}))})))),"style"==e.name&&wp.element.createElement("span",{__self:b,__source:{fileName:_,lineNumber:257,columnNumber:17}}))})))};n(686);var H=n(545),L="D:\\Ampps\\www\\freemius\\wp-content\\plugins\\liteweight-podcast\\src\\blocks\\podcast\\Edit.js",q=wp.element,D=q.Fragment,R=q.useEffect,F=(q.useState,q.render,wp.i18n.__,wp.blockEditor),W=(F.MediaUpload,F.MediaUploadCheck,F.URLPopover,wp.components);W.Button,W.Placeholder;var U,z=wp.i18n.__;(0,wp.blocks.registerBlockType)("pdp/podcast",{title:z("Podcast","pdp"),icon:"video-alt2",category:"media",keywords:[z("Podcast","pdp"),z("Media Podcast","pdp")],supports:{html:!1},attributes:l,getEditWrapperProps:function(){},edit:function(t){var n=t.attributes,r=t.clientId,l=t.isSelected,o=n.podcasts,a=n.share,i=n.shares,s=n.controls,u=n.loop,c=n.showLabel,m=n.showCount;n.skin,wp.data.dispatch("core/edit-post").hideBlockTypes(["pdp/podcast"]);var p=[];Object.keys(s).map((function(e){s[e]&&p.push(e)}));var d={controls:p,loop:{active:u}},f={share:a,shares:a?i:[],showLabel:c,showCount:m};return R((function(){l&&wp.data.dispatch("core/edit-post").openGeneralSidebar("edit-post/block")}),[l]),console.log("podcasts",o),R((function(){if(o){var t=document.querySelector("#block-".concat(r," .pdp_initializer")),l=function(t){var n=t.podcasts,r=t.featureImage,l=[];return n.map((function(t,n){l+='<div id="" class="row pdp-item pdf_player">\n        '.concat(r?'<div class="pdp_fet_img col-md-3">\n        <img src="'.concat(null!=t&&t.image?null==t?void 0:t.image:e,'" alt="Image" />\n      </div>'):"",'\n        <div class="pdp_plyr_area col-md-9">\n          <h3>').concat(null==t?void 0:t.title,'</h3>\n          <div class="audioWrapper">\n            <audio class="podcast" loop crossorigin playsinline>\n              <source src="').concat(null==t?void 0:t.audio,'" type="audio/mpeg" />\n              Your browser does not support the audio tag.\n            </audio>\n          </div>\n          <div class="share"></div>\n        </div>\n      </div>')})),l}(n);t.innerHTML=l,H.Z.initialize(t,d,f,!0)}}),[n]),wp.element.createElement(D,{__self:this,__source:{fileName:L,lineNumber:62,columnNumber:5}},wp.element.createElement(I,{props:t,__self:this,__source:{fileName:L,lineNumber:63,columnNumber:7}}),wp.element.createElement("div",{className:"pdp-wrapper pdp_initializer",__self:this,__source:{fileName:L,lineNumber:64,columnNumber:7}}))},save:function(){return null},example:{attributes:!0}}),(U=jQuery)(document).ready((function(){U(".h5vp_front_shortcode input").on("click",(function(e){e.preventDefault();var t=U(this).parent().find("input")[0];t.select(),t.setSelectionRange(0,30),document.execCommand("copy"),U(this).parent().find(".htooltip").text("Copied Successfully!")})),U(".h5vp_front_shortcode input").on("mouseout",(function(){U(this).parent().find(".htooltip").text("Copy To Clipboard")}))}))})()})();