import{S as de,i as me,s as pe,e as h,t as L,k as A,c as v,a as b,h as P,d as _,m as B,b as p,g as G,G as s,V as Q,j as ae,q as O,w as q,x as R,y as F,K as le,W as Y,P as te,o as U,B as W,n as fe,p as ce,Q as He,X as Be,l as Ne,N as ge,v as Ce,Y as xe,M as be,Z as qe,_ as Me,$ as je,a0 as Re,a1 as Fe,a2 as ue,a3 as Oe,a4 as We,a5 as Ge,a6 as Je,a7 as Ye,a8 as Ke,a9 as Qe,aa as Xe,ab as re,ac as Ze,ad as ze,ae as et}from"../chunks/vendor-e5ae0f74.js";import{s as $e}from"../chunks/store-9d8061e0.js";function ve(i){return new Date(i).valueOf()}function Se(i){let t,e,r,a,n=i[0].title+"",o,d,l,u,I,f,c,m,H,g,T,y,N;function D(E,S){return E[0].lastDone?rt:tt}let $=D(i),x=$(i),k=i[0].streak&&Ve(i),w=i[2]&&Le(i);return{c(){t=h("div"),e=h("div"),r=h("div"),a=h("div"),o=L(n),d=A(),l=h("div"),x.c(),u=A(),k&&k.c(),I=A(),f=h("div"),c=A(),m=h("button"),H=L("\u25CF"),g=A(),w&&w.c(),this.h()},l(E){t=v(E,"DIV",{class:!0});var S=b(t);e=v(S,"DIV",{class:!0});var C=b(e);r=v(C,"DIV",{class:!0});var j=b(r);a=v(j,"DIV",{class:!0});var X=b(a);o=P(X,n),X.forEach(_),d=B(j),l=v(j,"DIV",{class:!0});var M=b(l);x.l(M),u=B(M),k&&k.l(M),M.forEach(_),j.forEach(_),I=B(C),f=v(C,"DIV",{class:!0}),b(f).forEach(_),c=B(C),m=v(C,"BUTTON",{class:!0});var Z=b(m);H=P(Z,"\u25CF"),Z.forEach(_),C.forEach(_),g=B(S),w&&w.l(S),S.forEach(_),this.h()},h(){p(a,"class","text-xl font-semibold"),p(l,"class","flex justify-between text-sm font-light text-slate-500 dark:text-slate-400"),p(r,"class","grow cursor-pointer p-4"),p(f,"class","h-12 self-center justify-self-end border-r-2"),p(m,"class","p-4"),p(e,"class","flex"),p(t,"class","mb-2 w-full max-w-lg divide-y-2 divide-neutral-100 rounded-md bg-white shadow-sm dark:divide-neutral-700 dark:bg-neutral-800")},m(E,S){G(E,t,S),s(t,e),s(e,r),s(r,a),s(a,o),s(r,d),s(r,l),x.m(l,null),s(l,u),k&&k.m(l,null),s(e,I),s(e,f),s(e,c),s(e,m),s(m,H),s(t,g),w&&w.m(t,null),T=!0,y||(N=[Q(r,"click",i[4]),Q(m,"click",i[5])],y=!0)},p(E,S){(!T||S&1)&&n!==(n=E[0].title+"")&&ae(o,n),$===($=D(E))&&x?x.p(E,S):(x.d(1),x=$(E),x&&(x.c(),x.m(l,u))),E[0].streak?k?(k.p(E,S),S&1&&O(k,1)):(k=Ve(E),k.c(),O(k,1),k.m(l,null)):k&&(fe(),U(k,1,1,()=>{k=null}),ce()),E[2]?w?(w.p(E,S),S&4&&O(w,1)):(w=Le(E),w.c(),O(w,1),w.m(t,null)):w&&(fe(),U(w,1,1,()=>{w=null}),ce())},i(E){T||(O(k),O(w),T=!0)},o(E){U(k),U(w),T=!1},d(E){E&&_(t),x.d(),k&&k.d(),w&&w.d(),y=!1,Be(N)}}}function tt(i){let t;return{c(){t=h("span")},l(e){t=v(e,"SPAN",{}),b(t).forEach(_)},m(e,r){G(e,t,r)},p:be,d(e){e&&_(t)}}}function rt(i){let t,e;return{c(){t=h("span"),e=L(i[3])},l(r){t=v(r,"SPAN",{});var a=b(t);e=P(a,i[3]),a.forEach(_)},m(r,a){G(r,t,a),s(t,e)},p(r,a){a&8&&ae(e,r[3])},d(r){r&&_(t)}}}function Ve(i){let t,e=i[0].streak+"",r,a,n,o;return a=new qe({props:{class:"mt-[0.5px] ml-px h-4 w-4"}}),{c(){t=h("span"),r=L(e),q(a.$$.fragment),this.h()},l(d){t=v(d,"SPAN",{class:!0});var l=b(t);r=P(l,e),R(a.$$.fragment,l),l.forEach(_),this.h()},h(){p(t,"class","flex")},m(d,l){G(d,t,l),s(t,r),F(a,t,null),o=!0},p(d,l){(!o||l&1)&&e!==(e=d[0].streak+"")&&ae(r,e)},i(d){o||(O(a.$$.fragment,d),le(()=>{n||(n=Y(t,te,{},!0)),n.run(1)}),o=!0)},o(d){U(a.$$.fragment,d),n||(n=Y(t,te,{},!1)),n.run(0),o=!1},d(d){d&&_(t),W(a),d&&n&&n.end()}}}function Le(i){let t,e,r=(i[0].interval/36e5).toFixed(2)+"",a,n,o,d,l,u=i[0].preferedTime+"",I,f,c,m,H,g,T,y,N;return o=new Me({props:{class:"-mt-1 inline h-5"}}),f=new je({props:{class:"mb-1 inline h-5"}}),H=new Re({}),{c(){t=h("div"),e=h("div"),a=L(r),n=L(" h"),q(o.$$.fragment),d=A(),l=h("div"),I=L(u),q(f.$$.fragment),c=A(),m=h("button"),q(H.$$.fragment),this.h()},l(D){t=v(D,"DIV",{class:!0});var $=b(t);e=v($,"DIV",{class:!0});var x=b(e);a=P(x,r),n=P(x," h"),R(o.$$.fragment,x),x.forEach(_),d=B($),l=v($,"DIV",{class:!0});var k=b(l);I=P(k,u),R(f.$$.fragment,k),k.forEach(_),c=B($),m=v($,"BUTTON",{class:!0});var w=b(m);R(H.$$.fragment,w),w.forEach(_),$.forEach(_),this.h()},h(){p(e,"class","col-start-2 text-right"),p(l,"class","col-start-2 mt-2 hidden text-right"),p(m,"class","mt-2 w-fit rounded-md bg-red-600 p-2 px-4 text-white"),p(t,"class","grid grid-cols-2 p-4")},m(D,$){G(D,t,$),s(t,e),s(e,a),s(e,n),F(o,e,null),s(t,d),s(t,l),s(l,I),F(f,l,null),s(t,c),s(t,m),F(H,m,null),T=!0,y||(N=Q(m,"click",i[6]),y=!0)},p(D,$){(!T||$&1)&&r!==(r=(D[0].interval/36e5).toFixed(2)+"")&&ae(a,r),(!T||$&1)&&u!==(u=D[0].preferedTime+"")&&ae(I,u)},i(D){T||(O(o.$$.fragment,D),O(f.$$.fragment,D),O(H.$$.fragment,D),le(()=>{g||(g=Y(t,He,{},!0)),g.run(1)}),T=!0)},o(D){U(o.$$.fragment,D),U(f.$$.fragment,D),U(H.$$.fragment,D),g||(g=Y(t,He,{},!1)),g.run(0),T=!1},d(D){D&&_(t),W(o),W(f),W(H),D&&g&&g.end(),y=!1,N()}}}function at(i){let t,e,r=!i[1]&&Se(i);return{c(){r&&r.c(),t=Ne()},l(a){r&&r.l(a),t=Ne()},m(a,n){r&&r.m(a,n),G(a,t,n),e=!0},p(a,[n]){a[1]?r&&(fe(),U(r,1,1,()=>{r=null}),ce()):r?(r.p(a,n),n&2&&O(r,1)):(r=Se(a),r.c(),O(r,1),r.m(t.parentNode,t))},i(a){e||(O(r),e=!0)},o(a){U(r),e=!1},d(a){r&&r.d(a),a&&_(t)}}}function lt(i,t,e){let r,a;ge(i,$e,c=>e(8,a=c));let{_id:n}=t,o=!1,d=!1;function l(){e(2,d=!d)}let u=a.habits[a.habits.findIndex(c=>c._id===n)];Ce(()=>{let c=setInterval(()=>{e(3,r=xe(u.lastDone)),Date.now()-ve(u.lastDone)>u.interval&&e(0,u.streak=0,u)},6e4);return()=>{clearInterval(c)}});function I(){Date.now()-ve(u.lastDone)<=u.interval?e(0,u.streak++,u):e(0,u.streak=1,u),e(0,u.lastDone=new Date().toISOString(),u)}function f(){e(1,o=!0),a.habits.splice(a.habits.findIndex(c=>c._id===u._id),1)}return i.$$set=c=>{"_id"in c&&e(7,n=c._id)},i.$$.update=()=>{i.$$.dirty&1&&e(3,r=xe(u.lastDone))},[u,o,d,r,l,I,f,n]}class nt extends de{constructor(t){super();me(this,t,lt,at,pe,{_id:7})}}function st(i){let t,e,r,a,n,o,d,l,u,I,f,c,m,H,g,T,y,N,D,$,x,k,w,E,S,C,j,X,M,Z,K,ne,_e,we;return f=new Me({props:{class:"-mr-1 inline h-5"}}),j=new je({props:{class:"mb-1.5 inline h-5"}}),K=new Fe({props:{class:"ml-1"}}),{c(){t=h("details"),e=h("summary"),r=L("New Habit"),a=A(),n=h("form"),o=h("input"),d=A(),l=h("div"),u=h("div"),I=h("label"),q(f.$$.fragment),c=A(),m=h("input"),H=A(),g=h("select"),T=h("option"),y=L("Hours"),N=h("option"),D=L("Days"),$=h("option"),x=L("Weeks"),k=A(),w=h("div"),E=h("input"),S=A(),C=h("label"),q(j.$$.fragment),X=A(),M=h("button"),Z=L(`Create Habit
      `),q(K.$$.fragment),this.h()},l(V){t=v(V,"DETAILS",{class:!0});var J=b(t);e=v(J,"SUMMARY",{class:!0});var ke=b(e);r=P(ke,"New Habit"),ke.forEach(_),a=B(J),n=v(J,"FORM",{id:!0,class:!0});var z=b(n);o=v(z,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),d=B(z),l=v(z,"DIV",{class:!0});var se=b(l);u=v(se,"DIV",{});var ee=b(u);I=v(ee,"LABEL",{for:!0});var Ee=b(I);R(f.$$.fragment,Ee),Ee.forEach(_),c=B(ee),m=v(ee,"INPUT",{type:!0,name:!0,id:!0,min:!0,step:!0,class:!0}),H=B(ee),g=v(ee,"SELECT",{name:!0,id:!0,class:!0});var ie=b(g);T=v(ie,"OPTION",{});var ye=b(T);y=P(ye,"Hours"),ye.forEach(_),N=v(ie,"OPTION",{});var De=b(N);D=P(De,"Days"),De.forEach(_),$=v(ie,"OPTION",{});var Ie=b($);x=P(Ie,"Weeks"),Ie.forEach(_),ie.forEach(_),ee.forEach(_),k=B(se),w=v(se,"DIV",{class:!0});var oe=b(w);E=v(oe,"INPUT",{type:!0,name:!0,id:!0,class:!0}),S=B(oe),C=v(oe,"LABEL",{for:!0});var Te=b(C);R(j.$$.fragment,Te),Te.forEach(_),oe.forEach(_),se.forEach(_),X=B(z),M=v(z,"BUTTON",{type:!0,class:!0});var he=b(M);Z=P(he,`Create Habit
      `),R(K.$$.fragment,he),he.forEach(_),z.forEach(_),J.forEach(_),this.h()},h(){p(e,"class","cursor-pointer outline-none"),p(o,"type","text"),p(o,"name","title"),p(o,"placeholder","Habit Name"),o.required=!0,p(o,"class","text-2xl focus:outline-none"),p(I,"for","interval"),p(m,"type","number"),p(m,"name","interval"),p(m,"id","interval"),p(m,"min","1"),p(m,"step","1"),m.value="1",m.required=!0,p(m,"class","w-10 text-right focus:outline-none"),T.__value=36e5,T.value=T.__value,N.__value=864e5,N.value=N.__value,$.__value=6048e5,$.value=$.__value,p(g,"name","intervalMultiplier"),p(g,"id","intervalMultiplier"),g.required=!0,p(g,"class","focus:outline-none"),i[0].interval===void 0&&le(()=>i[3].call(g)),p(E,"type","time"),p(E,"name","preferedTime"),p(E,"id","preferedTime"),p(E,"class","focus:outline-none svelte-1gketa"),p(C,"for","preferedTime"),p(w,"class","hidden"),p(l,"class","mt-2 flex justify-between"),p(M,"type","submit"),p(M,"class","mt-4 flex max-w-fit items-center justify-center self-end rounded-md bg-sky-600 p-2 px-4 text-lg font-medium text-white"),p(n,"id","HabitCreator"),p(n,"class","mt-2 flex w-full max-w-lg flex-col"),p(t,"class","mt-2 w-full max-w-lg rounded-md bg-white p-4 shadow-sm dark:bg-neutral-800")},m(V,J){G(V,t,J),s(t,e),s(e,r),s(t,a),s(t,n),s(n,o),ue(o,i[0].title),s(n,d),s(n,l),s(l,u),s(u,I),F(f,I,null),s(u,c),s(u,m),s(u,H),s(u,g),s(g,T),s(T,y),s(g,N),s(N,D),s(g,$),s($,x),Oe(g,i[0].interval),s(l,k),s(l,w),s(w,E),ue(E,i[0].preferedTime),s(w,S),s(w,C),F(j,C,null),s(n,X),s(n,M),s(M,Z),F(K,M,null),ne=!0,_e||(we=[Q(o,"input",i[2]),Q(g,"change",i[3]),Q(E,"input",i[4]),Q(n,"submit",We(i[1]))],_e=!0)},p(V,[J]){J&1&&o.value!==V[0].title&&ue(o,V[0].title),J&1&&Oe(g,V[0].interval),J&1&&ue(E,V[0].preferedTime)},i(V){ne||(O(f.$$.fragment,V),O(j.$$.fragment,V),O(K.$$.fragment,V),ne=!0)},o(V){U(f.$$.fragment,V),U(j.$$.fragment,V),U(K.$$.fragment,V),ne=!1},d(V){V&&_(t),W(f),W(j),W(K),_e=!1,Be(we)}}}function Pe(){return new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}function it(i,t,e){let r;ge(i,$e,u=>e(5,r=u));let a={title:"",interval:864e5,streak:0,preferedTime:Pe()};function n(){e(0,a._id=Ge(),a),r.habits.push(a),e(0,a.preferedTime=Pe(),a)}function o(){a.title=this.value,e(0,a)}function d(){a.interval=Je(this),e(0,a)}function l(){a.preferedTime=this.value,e(0,a)}return[a,n,o,d,l]}class ot extends de{constructor(t){super();me(this,t,it,st,pe,{})}}function Ue(i,t,e){const r=i.slice();return r[5]=t[e],r}function Ae(i,t){let e,r,a,n,o=be,d;return r=new nt({props:{_id:t[5]._id}}),{key:i,first:null,c(){e=h("li"),q(r.$$.fragment),this.h()},l(l){e=v(l,"LI",{class:!0});var u=b(e);R(r.$$.fragment,u),u.forEach(_),this.h()},h(){p(e,"class","flex w-full justify-center"),this.first=e},m(l,u){G(l,e,u),F(r,e,null),d=!0},p(l,u){t=l;const I={};u&1&&(I._id=t[5]._id),r.$set(I)},r(){n=e.getBoundingClientRect()},f(){Ye(e),o(),Ke(e,n)},a(){o(),o=Qe(e,n,Ze,{easing:re})},i(l){d||(O(r.$$.fragment,l),le(()=>{a||(a=Y(e,te,{intro:!0,easing:re},!0)),a.run(1)}),d=!0)},o(l){U(r.$$.fragment,l),a||(a=Y(e,te,{intro:!0,easing:re},!1)),a.run(0),d=!1},d(l){l&&_(e),W(r),l&&a&&a.end()}}}function ut(i){let t,e=[],r=new Map,a,n,o,d,l,u=i[0];const I=f=>f[5]._id;for(let f=0;f<u.length;f+=1){let c=Ue(i,u,f),m=I(c);r.set(m,e[f]=Ae(m,c))}return o=new ot({}),{c(){t=h("ul");for(let f=0;f<e.length;f+=1)e[f].c();a=A(),n=h("li"),q(o.$$.fragment),this.h()},l(f){t=v(f,"UL",{class:!0});var c=b(t);for(let H=0;H<e.length;H+=1)e[H].l(c);a=B(c),n=v(c,"LI",{class:!0});var m=b(n);R(o.$$.fragment,m),m.forEach(_),c.forEach(_),this.h()},h(){p(n,"class","flex w-full justify-center"),p(t,"class","m-auto flex flex-col items-center p-2")},m(f,c){G(f,t,c);for(let m=0;m<e.length;m+=1)e[m].m(t,null);s(t,a),s(t,n),F(o,n,null),l=!0},p(f,[c]){if(i=f,c&1){u=i[0],fe();for(let m=0;m<e.length;m+=1)e[m].r();e=Xe(e,c,I,1,i,u,r,t,ze,Ae,a,Ue);for(let m=0;m<e.length;m+=1)e[m].a();ce()}},i(f){if(!l){for(let c=0;c<u.length;c+=1)O(e[c]);O(o.$$.fragment,f),le(()=>{d||(d=Y(n,te,{intro:!0,easing:re},!0)),d.run(1)}),l=!0}},o(f){for(let c=0;c<e.length;c+=1)U(e[c]);U(o.$$.fragment,f),d||(d=Y(n,te,{intro:!0,easing:re},!1)),d.run(0),l=!1},d(f){f&&_(t);for(let c=0;c<e.length;c+=1)e[c].d();W(o),f&&d&&d.end()}}}function ft(i,t,e){let r,a;ge(i,$e,l=>e(1,a=l)),Ce(()=>{let l=setInterval(()=>{n()},6e4);return()=>{clearInterval(l)}});function n(){return e(0,r=[...a.habits.toJSON()]),r.forEach((l,u)=>{e(0,r[u].weight=o(l),r)}),r.sort((l,u)=>!l.lastDone||l.weight>=u.weight?-1:1)}function o(l){return d(l)}function d(l){return(Date.now()-ve(l.lastDone))/l.interval*100}return i.$$.update=()=>{i.$$.dirty&2&&e(0,r=n(a.habits.toJSON()))},[r,a]}class ct extends de{constructor(t){super();me(this,t,ft,ut,pe,{})}}function dt(i){let t,e,r,a,n,o,d,l,u,I,f,c,m,H,g,T;return r=new et({props:{class:"mb-1 mr-2 inline h-8 text-red-500"}}),g=new ct({}),{c(){t=h("div"),e=h("h1"),q(r.$$.fragment),a=L(`Unstable
    Software!`),n=A(),o=h("p"),d=L(`This app is in development. Things will change and break, features are
    missing and `),l=h("b"),u=L("data entered may be lost"),I=L(`. Bug reports and feedback are
    welcome at
    `),f=h("a"),c=L("our GitHub repo"),m=L("."),H=A(),q(g.$$.fragment),this.h()},l(y){t=v(y,"DIV",{class:!0});var N=b(t);e=v(N,"H1",{class:!0});var D=b(e);R(r.$$.fragment,D),a=P(D,`Unstable
    Software!`),D.forEach(_),n=B(N),o=v(N,"P",{class:!0});var $=b(o);d=P($,`This app is in development. Things will change and break, features are
    missing and `),l=v($,"B",{});var x=b(l);u=P(x,"data entered may be lost"),x.forEach(_),I=P($,`. Bug reports and feedback are
    welcome at
    `),f=v($,"A",{href:!0,target:!0,class:!0});var k=b(f);c=P(k,"our GitHub repo"),k.forEach(_),m=P($,"."),$.forEach(_),N.forEach(_),H=B(y),R(g.$$.fragment,y),this.h()},h(){p(e,"class","text-lg font-medium"),p(f,"href","http://github.com/chaostreff-flensburg/kladderadatsch"),p(f,"target","_blank"),p(f,"class","text-sky-500"),p(o,"class","text-xs"),p(t,"class","m-auto mb-2 w-full max-w-lg rounded-md border border-red-500 p-4 font-mono")},m(y,N){G(y,t,N),s(t,e),F(r,e,null),s(e,a),s(t,n),s(t,o),s(o,d),s(o,l),s(l,u),s(o,I),s(o,f),s(f,c),s(o,m),G(y,H,N),F(g,y,N),T=!0},p:be,i(y){T||(O(r.$$.fragment,y),O(g.$$.fragment,y),T=!0)},o(y){U(r.$$.fragment,y),U(g.$$.fragment,y),T=!1},d(y){y&&_(t),W(r),y&&_(H),W(g,y)}}}class _t extends de{constructor(t){super();me(this,t,null,dt,pe,{})}}export{_t as default};
