import{F as Q,S as j,i as q,s as D,e as h,c as v,a as b,d as c,g as y,G as N,H as C,I as M,J as P,q as m,K as F,L as G,o as _,l as H,n as R,M as U,p as W,N as K,O as T,P as X,Q as Y,b as p,w as k,k as S,x as w,m as A,y as E,B as I,R as Z,T as x,U as ee}from"../chunks/vendor-e5ae0f74.js";const te=()=>{const l=Q("__svelte__");return{page:{subscribe:l.page.subscribe},navigating:{subscribe:l.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:l.navigating.subscribe}},session:l.session,updated:l.updated}},O={subscribe(l){return te().page.subscribe(l)}};function J(l){let e,n,t,s,r;const a=l[2].default,i=T(a,l,l[1],null);return{c(){e=h("div"),n=h("div"),i&&i.c()},l(o){e=v(o,"DIV",{});var f=b(e);n=v(f,"DIV",{});var d=b(n);i&&i.l(d),d.forEach(c),f.forEach(c)},m(o,f){y(o,e,f),N(e,n),i&&i.m(n,null),r=!0},p(o,f){i&&i.p&&(!r||f&2)&&C(i,a,o,o[1],r?P(a,o[1],f,null):M(o[1]),null)},i(o){r||(m(i,o),t||F(()=>{t=G(n,X,{}),t.start()}),s||F(()=>{s=G(e,Y,{}),s.start()}),r=!0)},o(o){_(i,o),r=!1},d(o){o&&c(e),i&&i.d(o)}}}function se(l){let e=l[0].url.pathname,n,t,s=J(l);return{c(){s.c(),n=H()},l(r){s.l(r),n=H()},m(r,a){s.m(r,a),y(r,n,a),t=!0},p(r,[a]){a&1&&D(e,e=r[0].url.pathname)?(R(),_(s,1,1,U),W(),s=J(r),s.c(),m(s),s.m(n.parentNode,n)):s.p(r,a)},i(r){t||(m(s),t=!0)},o(r){_(s),t=!1},d(r){r&&c(n),s.d(r)}}}function ne(l,e,n){let t;K(l,O,a=>n(0,t=a));let{$$slots:s={},$$scope:r}=e;return l.$$set=a=>{"$$scope"in a&&n(1,r=a.$$scope)},[t,r,s]}class ae extends j{constructor(e){super();q(this,e,ne,se,D,{})}}function re(l){let e,n,t;const s=l[5].default,r=T(s,l,l[4],null);return{c(){e=h("a"),r&&r.c(),this.h()},l(a){e=v(a,"A",{href:!0,class:!0});var i=b(e);r&&r.l(i),i.forEach(c),this.h()},h(){p(e,"href",l[0]),p(e,"class",n=l[2]+(l[3].url.pathname==l[0]?" "+l[1]:""))},m(a,i){y(a,e,i),r&&r.m(e,null),t=!0},p(a,[i]){r&&r.p&&(!t||i&16)&&C(r,s,a,a[4],t?P(s,a[4],i,null):M(a[4]),null),(!t||i&1)&&p(e,"href",a[0]),(!t||i&15&&n!==(n=a[2]+(a[3].url.pathname==a[0]?" "+a[1]:"")))&&p(e,"class",n)},i(a){t||(m(r,a),t=!0)},o(a){_(r,a),t=!1},d(a){a&&c(e),r&&r.d(a)}}}function le(l,e,n){let t;K(l,O,f=>n(3,t=f));let{$$slots:s={},$$scope:r}=e,{href:a}=e,{active:i="text-sky-600 scale-125"}=e,{transition:o="transition ease-out"}=e;return l.$$set=f=>{"href"in f&&n(0,a=f.href),"active"in f&&n(1,i=f.active),"transition"in f&&n(2,o=f.transition),"$$scope"in f&&n(4,r=f.$$scope)},[a,i,o,t,r,s]}class B extends j{constructor(e){super();q(this,e,le,re,D,{href:0,active:1,transition:2})}}function ie(l){let e,n;return e=new Z({}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){E(e,t,s),n=!0},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function oe(l){let e,n;return e=new x({}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){E(e,t,s),n=!0},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function fe(l){let e,n;return e=new ee({}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){E(e,t,s),n=!0},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function ue(l){let e,n,t,s,r,a,i,o,f,d,L;return s=new B({props:{href:"/resources",$$slots:{default:[ie]},$$scope:{ctx:l}}}),a=new B({props:{href:"/",$$slots:{default:[oe]},$$scope:{ctx:l}}}),o=new B({props:{href:"/settings",$$slots:{default:[fe]},$$scope:{ctx:l}}}),{c(){e=h("div"),n=h("div"),t=h("nav"),k(s.$$.fragment),r=S(),k(a.$$.fragment),i=S(),k(o.$$.fragment),f=S(),d=h("div"),this.h()},l(u){e=v(u,"DIV",{class:!0});var $=b(e);n=v($,"DIV",{class:!0});var V=b(n);t=v(V,"NAV",{class:!0});var g=b(t);w(s.$$.fragment,g),r=A(g),w(a.$$.fragment,g),i=A(g),w(o.$$.fragment,g),g.forEach(c),V.forEach(c),$.forEach(c),f=A(u),d=v(u,"DIV",{class:!0}),b(d).forEach(c),this.h()},h(){p(t,"class","flex justify-between p-4"),p(n,"class","w-5/6 max-w-xl rounded-3xl bg-white pl-4 pr-4 shadow-xl dark:bg-neutral-800"),p(e,"class","fixed bottom-6 left-2 right-2 z-10 flex justify-center"),p(d,"class","fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-neutral-50 dark:from-neutral-900")},m(u,$){y(u,e,$),N(e,n),N(n,t),E(s,t,null),N(t,r),E(a,t,null),N(t,i),E(o,t,null),y(u,f,$),y(u,d,$),L=!0},p(u,[$]){const V={};$&1&&(V.$$scope={dirty:$,ctx:u}),s.$set(V);const g={};$&1&&(g.$$scope={dirty:$,ctx:u}),a.$set(g);const z={};$&1&&(z.$$scope={dirty:$,ctx:u}),o.$set(z)},i(u){L||(m(s.$$.fragment,u),m(a.$$.fragment,u),m(o.$$.fragment,u),L=!0)},o(u){_(s.$$.fragment,u),_(a.$$.fragment,u),_(o.$$.fragment,u),L=!1},d(u){u&&c(e),I(s),I(a),I(o),u&&c(f),u&&c(d)}}}class ce extends j{constructor(e){super();q(this,e,null,ue,D,{})}}function $e(l){let e;const n=l[0].default,t=T(n,l,l[1],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,r){t&&t.m(s,r),e=!0},p(s,r){t&&t.p&&(!e||r&2)&&C(t,n,s,s[1],e?P(n,s[1],r,null):M(s[1]),null)},i(s){e||(m(t,s),e=!0)},o(s){_(t,s),e=!1},d(s){t&&t.d(s)}}}function me(l){let e,n,t,s,r;return n=new ae({props:{$$slots:{default:[$e]},$$scope:{ctx:l}}}),s=new ce({}),{c(){e=h("main"),k(n.$$.fragment),t=S(),k(s.$$.fragment),this.h()},l(a){e=v(a,"MAIN",{class:!0});var i=b(e);w(n.$$.fragment,i),t=A(i),w(s.$$.fragment,i),i.forEach(c),this.h()},h(){p(e,"class","m-4")},m(a,i){y(a,e,i),E(n,e,null),N(e,t),E(s,e,null),r=!0},p(a,[i]){const o={};i&2&&(o.$$scope={dirty:i,ctx:a}),n.$set(o)},i(a){r||(m(n.$$.fragment,a),m(s.$$.fragment,a),r=!0)},o(a){_(n.$$.fragment,a),_(s.$$.fragment,a),r=!1},d(a){a&&c(e),I(n),I(s)}}}function _e(l,e,n){let{$$slots:t={},$$scope:s}=e;return l.$$set=r=>{"$$scope"in r&&n(1,s=r.$$scope)},[t,s]}class ge extends j{constructor(e){super();q(this,e,_e,me,D,{})}}export{ge as default};
