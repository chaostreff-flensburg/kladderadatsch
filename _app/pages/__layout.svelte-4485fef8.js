import{F as Me,S as U,i as j,s as L,e as h,c as g,a as v,d as c,g as D,G as _,H as de,I as _e,J as $e,q as $,K as se,L as ye,o as p,l as B,n as X,M as Le,p as Z,N as Y,O as pe,P as Ce,Q as ce,b as f,R as Ee,w as k,x as T,y,B as E,k as S,m as q,T as re,U as Pe,V as Re,W as Be,X as Ue,Y as Te,Z as je,t as J,h as K,_ as Ne,$ as Ie,a0 as We,a1 as Fe,a2 as Ye,a3 as He,a4 as De,a5 as ze,a6 as Ge}from"../chunks/vendor-b7bc0d3d.js";import{s as Q}from"../chunks/store-0551302c.js";const Je=()=>{const o=Me("__svelte__");return{page:{subscribe:o.page.subscribe},navigating:{subscribe:o.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:o.navigating.subscribe}},session:o.session,updated:o.updated}},ne={subscribe(o){return Je().page.subscribe(o)}};function Oe(o){let e,s,t,r,l;const n=o[2].default,a=pe(n,o,o[1],null);return{c(){e=h("div"),s=h("div"),a&&a.c()},l(i){e=g(i,"DIV",{});var u=v(e);s=g(u,"DIV",{});var d=v(s);a&&a.l(d),d.forEach(c),u.forEach(c)},m(i,u){D(i,e,u),_(e,s),a&&a.m(s,null),l=!0},p(i,u){a&&a.p&&(!l||u&2)&&de(a,n,i,i[1],l?$e(n,i[1],u,null):_e(i[1]),null)},i(i){l||($(a,i),t||se(()=>{t=ye(s,Ce,{}),t.start()}),r||se(()=>{r=ye(e,ce,{}),r.start()}),l=!0)},o(i){p(a,i),l=!1},d(i){i&&c(e),a&&a.d(i)}}}function Ke(o){let e=o[0].url.pathname,s,t,r=Oe(o);return{c(){r.c(),s=B()},l(l){r.l(l),s=B()},m(l,n){r.m(l,n),D(l,s,n),t=!0},p(l,[n]){n&1&&L(e,e=l[0].url.pathname)?(X(),p(r,1,1,Le),Z(),r=Oe(l),r.c(),$(r),r.m(s.parentNode,s)):r.p(l,n)},i(l){t||($(r),t=!0)},o(l){p(r),t=!1},d(l){l&&c(s),r.d(l)}}}function Qe(o,e,s){let t;Y(o,ne,n=>s(0,t=n));let{$$slots:r={},$$scope:l}=e;return o.$$set=n=>{"$$scope"in n&&s(1,l=n.$$scope)},[t,l,r]}class Xe extends U{constructor(e){super();j(this,e,Qe,Ke,L,{})}}function Ze(o){let e,s,t;const r=o[5].default,l=pe(r,o,o[4],null);return{c(){e=h("a"),l&&l.c(),this.h()},l(n){e=g(n,"A",{href:!0,class:!0});var a=v(e);l&&l.l(a),a.forEach(c),this.h()},h(){f(e,"href",o[0]),f(e,"class",s=o[2]+(o[3].url.pathname==o[0]?" "+o[1]:""))},m(n,a){D(n,e,a),l&&l.m(e,null),t=!0},p(n,[a]){l&&l.p&&(!t||a&16)&&de(l,r,n,n[4],t?$e(r,n[4],a,null):_e(n[4]),null),(!t||a&1)&&f(e,"href",n[0]),(!t||a&15&&s!==(s=n[2]+(n[3].url.pathname==n[0]?" "+n[1]:"")))&&f(e,"class",s)},i(n){t||($(l,n),t=!0)},o(n){p(l,n),t=!1},d(n){n&&c(e),l&&l.d(n)}}}function xe(o,e,s){let t;Y(o,ne,u=>s(3,t=u));let{$$slots:r={},$$scope:l}=e,{href:n}=e,{active:a="text-sky-600 scale-125"}=e,{transition:i="transition ease-out"}=e;return o.$$set=u=>{"href"in u&&s(0,n=u.href),"active"in u&&s(1,a=u.active),"transition"in u&&s(2,i=u.transition),"$$scope"in u&&s(4,l=u.$$scope)},[n,a,i,t,l,r]}class me extends U{constructor(e){super();j(this,e,xe,Ze,L,{href:0,active:1,transition:2})}}function Se(o,e,s){const t=o.slice();return t[4]=e[s],t}function et(o){let e,s;return e=new me({props:{href:"/",$$slots:{default:[rt]},$$scope:{ctx:o}}}),{c(){k(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,r){y(e,t,r),s=!0},p(t,r){const l={};r&128&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){E(e,t)}}}function tt(o){let e,s,t=o[2],r=[];for(let n=0;n<t.length;n+=1)r[n]=qe(Se(o,t,n));const l=n=>p(r[n],1,1,()=>{r[n]=null});return{c(){for(let n=0;n<r.length;n+=1)r[n].c();e=B()},l(n){for(let a=0;a<r.length;a+=1)r[a].l(n);e=B()},m(n,a){for(let i=0;i<r.length;i+=1)r[i].m(n,a);D(n,e,a),s=!0},p(n,a){if(a&6){t=n[2];let i;for(i=0;i<t.length;i+=1){const u=Se(n,t,i);r[i]?(r[i].p(u,a),$(r[i],1)):(r[i]=qe(u),r[i].c(),$(r[i],1),r[i].m(e.parentNode,e))}for(X(),i=t.length;i<r.length;i+=1)l(i);Z()}},i(n){if(!s){for(let a=0;a<t.length;a+=1)$(r[a]);s=!0}},o(n){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)p(r[a]);s=!1},d(n){Re(r,n),n&&c(e)}}}function rt(o){let e,s;return e=new Be({}),{c(){k(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,r){y(e,t,r),s=!0},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){E(e,t)}}}function qe(o){let e,s,t,r,l,n,a;s=new Ue({props:{class:"scale-75"}});function i(){return o[3](o[4])}return{c(){e=h("a"),k(s.$$.fragment),t=S(),this.h()},l(u){e=g(u,"A",{href:!0,class:!0});var d=v(e);T(s.$$.fragment,d),t=q(d),d.forEach(c),this.h()},h(){f(e,"href","?"),f(e,"class",r="scale-"+(o[1].tools.selected==o[4].name?"125 shadow-sm":"150 shadow-md")+" transition bg-"+o[4].color+" rounded-full text-neutral-50 shadow-sky-600/5 hover:shadow-sky-600/10")},m(u,d){D(u,e,d),y(s,e,null),_(e,t),l=!0,n||(a=re(e,"click",Pe(i)),n=!0)},p(u,d){o=u,(!l||d&2&&r!==(r="scale-"+(o[1].tools.selected==o[4].name?"125 shadow-sm":"150 shadow-md")+" transition bg-"+o[4].color+" rounded-full text-neutral-50 shadow-sky-600/5 hover:shadow-sky-600/10"))&&f(e,"class",r)},i(u){l||($(s.$$.fragment,u),l=!0)},o(u){p(s.$$.fragment,u),l=!1},d(u){u&&c(e),E(s),n=!1,a()}}}function st(o){let e,s,t,r;const l=[tt,et],n=[];function a(i,u){return i[0].url.pathname=="/"?0:1}return e=a(o),s=n[e]=l[e](o),{c(){s.c(),t=B()},l(i){s.l(i),t=B()},m(i,u){n[e].m(i,u),D(i,t,u),r=!0},p(i,[u]){let d=e;e=a(i),e===d?n[e].p(i,u):(X(),p(n[d],1,1,()=>{n[d]=null}),Z(),s=n[e],s?s.p(i,u):(s=n[e]=l[e](i),s.c()),$(s,1),s.m(t.parentNode,t))},i(i){r||($(s),r=!0)},o(i){p(s),r=!1},d(i){n[e].d(i),i&&c(t)}}}function nt(o,e,s){let t,r;return Y(o,ne,a=>s(0,t=a)),Y(o,Q,a=>s(1,r=a)),[t,r,[{name:"HabitTool",color:"sky-600"}],a=>{r.tools.selected==a.name?Ee(Q,r.tools.selected=null,r):Ee(Q,r.tools.selected=a.name,r)}]}class lt extends U{constructor(e){super();j(this,e,nt,st,L,{})}}function at(o){let e,s,t,r,l,n,a,i,u,d,P,A,N,m,I,b,O,H,M,le,C,ae,R,oe,ie,W,F,x,ue,he;return r=new Te({props:{class:"-mt-1 inline-block"}}),m=new je({props:{class:"-mr-2 -mt-0.5 inline h-4"}}),F=new Te({props:{class:"scale-150 sm:scale-110"}}),{c(){e=h("details"),s=h("summary"),t=J("Add Habit "),k(r.$$.fragment),l=S(),n=h("form"),a=h("input"),i=S(),u=h("div"),d=h("label"),P=J("Repeat every:"),A=S(),N=h("div"),k(m.$$.fragment),I=S(),b=h("input"),O=S(),H=h("select"),M=h("option"),le=J("Hours"),C=h("option"),ae=J("Days"),R=h("option"),oe=J("Weeks"),ie=S(),W=h("button"),k(F.$$.fragment),this.h()},l(w){e=g(w,"DETAILS",{class:!0});var V=v(e);s=g(V,"SUMMARY",{class:!0});var fe=v(s);t=K(fe,"Add Habit "),T(r.$$.fragment,fe),fe.forEach(c),l=q(V),n=g(V,"FORM",{id:!0,class:!0});var z=v(n);a=g(z,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),i=q(z),u=g(z,"DIV",{class:!0});var ee=v(u);d=g(ee,"LABEL",{for:!0,class:!0});var ge=v(d);P=K(ge,"Repeat every:"),ge.forEach(c),A=q(ee),N=g(ee,"DIV",{class:!0});var G=v(N);T(m.$$.fragment,G),I=q(G),b=g(G,"INPUT",{type:!0,name:!0,id:!0,min:!0,step:!0,class:!0}),O=q(G),H=g(G,"SELECT",{name:!0,id:!0,class:!0});var te=v(H);M=g(te,"OPTION",{});var ve=v(M);le=K(ve,"Hours"),ve.forEach(c),C=g(te,"OPTION",{});var be=v(C);ae=K(be,"Days"),be.forEach(c),R=g(te,"OPTION",{});var we=v(R);oe=K(we,"Weeks"),we.forEach(c),te.forEach(c),G.forEach(c),ee.forEach(c),ie=q(z),W=g(z,"BUTTON",{type:!0,class:!0});var ke=v(W);T(F.$$.fragment,ke),ke.forEach(c),z.forEach(c),V.forEach(c),this.h()},h(){f(s,"class","m-auto mt-1 max-w-xs cursor-pointer rounded-lg bg-sky-600 p-2 text-center text-lg font-bold text-white svelte-2uu7hq"),f(a,"type","text"),f(a,"name","title"),f(a,"placeholder","Habit Name"),a.required=!0,f(a,"class","mb-4 w-full flex-grow rounded-md bg-neutral-50 p-2 text-xl shadow-sm focus:outline-none dark:bg-neutral-700"),f(d,"for","interval"),f(d,"class","text-sm text-neutral-500 dark:text-neutral-400"),f(b,"type","number"),f(b,"name","interval"),f(b,"id","interval"),f(b,"min","1"),f(b,"step","1"),b.value="1",b.required=!0,f(b,"class","w-10 text-right focus:outline-none"),M.__value=36e5,M.value=M.__value,C.__value=864e5,C.value=C.__value,R.__value=6048e5,R.value=R.__value,f(H,"name","intervalMultiplier"),f(H,"id","intervalMultiplier"),H.required=!0,f(H,"class","focus:outline-none"),o[0].interval===void 0&&se(()=>o[3].call(H)),f(N,"class","mt-1.5"),f(u,"class","flex flex-grow-0 flex-col"),f(W,"type","submit"),f(W,"class","flex w-12 h-12 sm:w-fit sm:h-fit items-center justify-center rounded-full bg-sky-600 p-4 text-lg font-medium text-white shadow-sm shadow-sky-600/5 transition hover:shadow-md hover:shadow-sky-600/25"),f(n,"id","HabitCreator"),f(n,"class","flex flex-wrap justify-between"),f(e,"class","py-2 svelte-2uu7hq")},m(w,V){D(w,e,V),_(e,s),_(s,t),y(r,s,null),_(e,l),_(e,n),_(n,a),Ne(a,o[0].title),_(n,i),_(n,u),_(u,d),_(d,P),_(u,A),_(u,N),y(m,N,null),_(N,I),_(N,b),_(N,O),_(N,H),_(H,M),_(M,le),_(H,C),_(C,ae),_(H,R),_(R,oe),Ie(H,o[0].interval),_(n,ie),_(n,W),y(F,W,null),x=!0,ue||(he=[re(a,"input",o[2]),re(H,"change",o[3]),re(n,"submit",Pe(o[1]))],ue=!0)},p(w,[V]){V&1&&a.value!==w[0].title&&Ne(a,w[0].title),V&1&&Ie(H,w[0].interval)},i(w){x||($(r.$$.fragment,w),$(m.$$.fragment,w),$(F.$$.fragment,w),x=!0)},o(w){p(r.$$.fragment,w),p(m.$$.fragment,w),p(F.$$.fragment,w),x=!1},d(w){w&&c(e),E(r),E(m),E(F),ue=!1,We(he)}}}function Ae(){return new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}function ot(o,e,s){let t;Y(o,Q,i=>s(4,t=i));let r={title:"",interval:864e5,streak:0,preferedTime:Ae()};function l(){s(0,r._id=Fe(),r),t.habits.push(r),s(0,r.preferedTime=Ae(),r)}function n(){r.title=this.value,s(0,r)}function a(){r.interval=Ye(this),s(0,r)}return[r,l,n,a]}class it extends U{constructor(e){super();j(this,e,ot,at,L,{})}}function ut(o){let e,s,t;return s=new it({}),{c(){e=h("section"),k(s.$$.fragment)},l(r){e=g(r,"SECTION",{});var l=v(e);T(s.$$.fragment,l),l.forEach(c)},m(r,l){D(r,e,l),y(s,e,null),t=!0},p:Le,i(r){t||($(s.$$.fragment,r),t=!0)},o(r){p(s.$$.fragment,r),t=!1},d(r){r&&c(e),E(s)}}}class ft extends U{constructor(e){super();j(this,e,null,ut,L,{})}}function Ve(o){let e,s,t,r;var l=o[2].get(o[0].tools.selected);function n(a){return{}}return l&&(s=new l(n())),{c(){e=h("aside"),s&&k(s.$$.fragment),this.h()},l(a){e=g(a,"ASIDE",{class:!0});var i=v(e);s&&T(s.$$.fragment,i),i.forEach(c),this.h()},h(){f(e,"class","w-full border-b-2 border-neutral-200 p-2 pb-3 dark:border-neutral-700")},m(a,i){D(a,e,i),s&&y(s,e,null),r=!0},p(a,i){if(o=a,l!==(l=o[2].get(o[0].tools.selected))){if(s){X();const u=s;p(u.$$.fragment,1,0,()=>{E(u,1)}),Z()}l?(s=new l(n()),k(s.$$.fragment),$(s.$$.fragment,1),y(s,e,null)):s=null}},i(a){r||(s&&$(s.$$.fragment,a),se(()=>{t||(t=He(e,ce,{easing:De},!0)),t.run(1)}),r=!0)},o(a){s&&p(s.$$.fragment,a),t||(t=He(e,ce,{easing:De},!1)),t.run(0),r=!1},d(a){a&&c(e),s&&E(s),a&&t&&t.end()}}}function ct(o){let e,s,t=o[0].tools.selected&&o[1].url.pathname=="/"&&Ve(o);return{c(){t&&t.c(),e=B()},l(r){t&&t.l(r),e=B()},m(r,l){t&&t.m(r,l),D(r,e,l),s=!0},p(r,[l]){r[0].tools.selected&&r[1].url.pathname=="/"?t?(t.p(r,l),l&3&&$(t,1)):(t=Ve(r),t.c(),$(t,1),t.m(e.parentNode,e)):t&&(X(),p(t,1,1,()=>{t=null}),Z())},i(r){s||($(t),s=!0)},o(r){p(t),s=!1},d(r){t&&t.d(r),r&&c(e)}}}function mt(o,e,s){let t,r;Y(o,Q,n=>s(0,t=n)),Y(o,ne,n=>s(1,r=n));const l=new Map;return l.set("HabitTool",ft),[t,r,l]}class dt extends U{constructor(e){super();j(this,e,mt,ct,L,{})}}function _t(o){let e,s;return e=new ze({}),{c(){k(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,r){y(e,t,r),s=!0},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){E(e,t)}}}function $t(o){let e,s;return e=new Ge({}),{c(){k(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,r){y(e,t,r),s=!0},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){E(e,t)}}}function pt(o){let e,s,t,r,l,n,a,i,u,d,P,A,N;return t=new dt({}),n=new me({props:{href:"/resources",$$slots:{default:[_t]},$$scope:{ctx:o}}}),i=new lt({}),d=new me({props:{href:"/settings",$$slots:{default:[$t]},$$scope:{ctx:o}}}),{c(){e=h("div"),s=h("div"),k(t.$$.fragment),r=S(),l=h("nav"),k(n.$$.fragment),a=S(),k(i.$$.fragment),u=S(),k(d.$$.fragment),P=S(),A=h("div"),this.h()},l(m){e=g(m,"DIV",{class:!0});var I=v(e);s=g(I,"DIV",{class:!0});var b=v(s);T(t.$$.fragment,b),r=q(b),l=g(b,"NAV",{class:!0});var O=v(l);T(n.$$.fragment,O),a=q(O),T(i.$$.fragment,O),u=q(O),T(d.$$.fragment,O),O.forEach(c),b.forEach(c),I.forEach(c),P=q(m),A=g(m,"DIV",{class:!0}),v(A).forEach(c),this.h()},h(){f(l,"class","flex justify-between p-4"),f(s,"class","w-5/6 max-w-xl rounded-3xl bg-white pl-4 pr-4 shadow-xl dark:bg-neutral-800"),f(e,"class","fixed bottom-6 left-2 right-2 z-10 flex justify-center"),f(A,"class","fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-neutral-50 dark:from-neutral-900")},m(m,I){D(m,e,I),_(e,s),y(t,s,null),_(s,r),_(s,l),y(n,l,null),_(l,a),y(i,l,null),_(l,u),y(d,l,null),D(m,P,I),D(m,A,I),N=!0},p(m,[I]){const b={};I&1&&(b.$$scope={dirty:I,ctx:m}),n.$set(b);const O={};I&1&&(O.$$scope={dirty:I,ctx:m}),d.$set(O)},i(m){N||($(t.$$.fragment,m),$(n.$$.fragment,m),$(i.$$.fragment,m),$(d.$$.fragment,m),N=!0)},o(m){p(t.$$.fragment,m),p(n.$$.fragment,m),p(i.$$.fragment,m),p(d.$$.fragment,m),N=!1},d(m){m&&c(e),E(t),E(n),E(i),E(d),m&&c(P),m&&c(A)}}}class ht extends U{constructor(e){super();j(this,e,null,pt,L,{})}}function gt(o){let e;const s=o[0].default,t=pe(s,o,o[1],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,l){t&&t.m(r,l),e=!0},p(r,l){t&&t.p&&(!e||l&2)&&de(t,s,r,r[1],e?$e(s,r[1],l,null):_e(r[1]),null)},i(r){e||($(t,r),e=!0)},o(r){p(t,r),e=!1},d(r){t&&t.d(r)}}}function vt(o){let e,s,t,r,l;return s=new Xe({props:{$$slots:{default:[gt]},$$scope:{ctx:o}}}),r=new ht({}),{c(){e=h("main"),k(s.$$.fragment),t=S(),k(r.$$.fragment),this.h()},l(n){e=g(n,"MAIN",{class:!0});var a=v(e);T(s.$$.fragment,a),t=q(a),T(r.$$.fragment,a),a.forEach(c),this.h()},h(){f(e,"class","m-4")},m(n,a){D(n,e,a),y(s,e,null),_(e,t),y(r,e,null),l=!0},p(n,[a]){const i={};a&2&&(i.$$scope={dirty:a,ctx:n}),s.$set(i)},i(n){l||($(s.$$.fragment,n),$(r.$$.fragment,n),l=!0)},o(n){p(s.$$.fragment,n),p(r.$$.fragment,n),l=!1},d(n){n&&c(e),E(s),E(r)}}}function bt(o,e,s){let{$$slots:t={},$$scope:r}=e;return o.$$set=l=>{"$$scope"in l&&s(1,r=l.$$scope)},[t,r]}class yt extends U{constructor(e){super();j(this,e,bt,vt,L,{})}}export{yt as default};
