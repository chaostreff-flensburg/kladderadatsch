_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function s({ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}={}){return e||t&&n}},0:function(e,t,n){n("J5xr"),e.exports=n("nOHt")},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},s=n("lwAK"),i=n("FYa8"),u=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function d(e=!1){const t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce(((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t)),[])):e.concat(t)}const l=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce(((e,t)=>{const n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){const e=new Set,t=new Set,n=new Set,a={};return r=>{let o=!0,s=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){s=!0;const t=r.key.slice(r.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(let e=0,t=l.length;e<t;e++){const t=l[e];if(r.props.hasOwnProperty(t))if("charSet"===t)n.has(t)?o=!1:n.add(t);else{const e=r.props[t],n=a[t]||new Set;"name"===t&&s||!n.has(e)?(n.add(e),a[t]=n):o=!1}}}return o}}()).reverse().map(((e,t)=>{const n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function h({children:e}){const t=(0,r.useContext)(s.AmpStateContext),n=(0,r.useContext)(i.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:f,headManager:n,inAmpMode:(0,u.isInAmpMode)(t)},e)}h.rewind=()=>{};var m=h;t.default=m},J5xr:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("YNMu")}])},Xuae:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a=n("q1tI");class r extends a.Component{constructor(e){super(e),this._hasHeadManager=void 0,this.emitChange=()=>{this._hasHeadManager&&this.props.headManager.updateHead(this.props.reduceComponentsToState([...this.props.headManager.mountedInstances],this.props))},this._hasHeadManager=this.props.headManager&&this.props.headManager.mountedInstances}componentDidMount(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}componentDidUpdate(){this.emitChange()}componentWillUnmount(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}render(){return null}}t.default=r},YNMu:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("g4pe"),s=n.n(o),i=r.a.createElement;t.default=function({Component:e,pageProps:t}){return i(r.a.Fragment,null,i(s.a,null,i("title",null,"Kladderadatsch"),i("meta",{name:"viewport",content:"width=device-width,minimum-scale=1"}),i("meta",{name:"theme-color",content:"#ffffff"}),i("meta",{name:"Description",content:"Mood based Task Tracking."}),i("link",{rel:"icon",type:"image/png",href:"/icon-512.png"}),i("link",{rel:"manifest",href:"/manifest.json"})),i(e,t))}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;const r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r}},[[0,0,1,2]]]);