var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(){return a("")}function p(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let h;function m(t){h=t}function g(){if(!h)throw new Error("Function called outside component initialization");return h}function $(){const t=g();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}const b=[],k=[],v=[],x=[],y=Promise.resolve();let _=!1;function E(t){v.push(t)}let C=!1;const w=new Set;function j(){if(!C){C=!0;do{for(let t=0;t<b.length;t+=1){const n=b[t];m(n),q(n.$$)}for(m(null),b.length=0;k.length;)k.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];w.has(n)||(w.add(n),n())}v.length=0}while(b.length);for(;x.length;)x.pop()();_=!1,C=!1,w.clear()}}function q(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const N=new Set;let A;function O(){A={r:0,c:[],p:A}}function L(){A.r||o(A.c),A=A.p}function T(t,n){t&&t.i&&(N.delete(t),t.i(n))}function B(t,n,e,o){if(t&&t.o){if(N.has(t))return;N.add(t),A.c.push((()=>{N.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function F(t,e,c,i){const{fragment:u,on_mount:l,on_destroy:s,after_update:a}=t.$$;u&&u.m(e,c),i||E((()=>{const e=l.map(n).filter(r);s?s.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(E)}function I(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function S(t,n){-1===t.$$.dirty[0]&&(b.push(t),_||(_=!0,y.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function U(n,r,c,i,u,s,a=[-1]){const f=h;m(n);const d=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:r.context||[]),callbacks:e(),dirty:a,skip_bound:!1};let p=!1;if(d.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&u(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&S(n,t)),e})):[],d.update(),p=!0,o(d.before_update),d.fragment=!!i&&i(d.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);d.fragment&&d.fragment.l(t),t.forEach(l)}else d.fragment&&d.fragment.c();r.intro&&T(n.$$.fragment),F(n,r.target,r.anchor,r.customElement),j()}m(f)}class z{$destroy(){I(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function M(n){let e,o,r,c,d,h,m,g,$,b,k=n[0].toUpperCase()+"";return{c(){var t,i,u;e=s("div"),o=s("button"),o.textContent="delete",r=f(),c=s("h3"),d=a(k),h=f(),m=s("p"),g=a(n[1]),t=e,i="class",null==(u="post svelte-1prdbex")?t.removeAttribute(i):t.getAttribute(i)!==u&&t.setAttribute(i,u)},m(t,l){var s,a,f,p;u(t,e,l),i(e,o),i(e,r),i(e,c),i(c,d),i(e,h),i(e,m),i(m,g),$||(s=o,a="click",f=n[2],s.addEventListener(a,f,p),b=()=>s.removeEventListener(a,f,p),$=!0)},p(t,[n]){1&n&&k!==(k=t[0].toUpperCase()+"")&&p(d,k),2&n&&p(g,t[1])},i:t,o:t,d(t){t&&l(e),$=!1,b()}}}function P(t,n,e){let{title:o="Title"}=n,{content:r="Eu reprehenderit id sit do sunt esse incididunt laborum. \n    In reprehenderit ad adipisicing ea quis et occaecat nisi aute sunt irure. \n    Occaecat officia duis sit dolor magna sit id. \n    Fugiat ad magna anim esse consequat laboris aute minim laborum dolore sunt. \n    Veniam reprehenderit consequat ipsum ad mollit nisi id enim. Enim duis ex \n    aliquip ut exercitation nisi laborum id. Id exercitation dolor minim labore pariatur."}=n;const c=$();return t.$$set=t=>{"title"in t&&e(0,o=t.title),"content"in t&&e(1,r=t.content)},[o,r,function(){c("delete")}]}class V extends z{constructor(t){super(),U(this,t,P,M,c,{title:0,content:1})}}function D(t,n,e){const o=t.slice();return o[2]=n[e],o[4]=e,o}function G(n){return{c:t,m:t,p:t,i:t,o:t,d:t}}function H(t){let n,e,o=t[1].paragraphs,r=[];for(let n=0;n<o.length;n+=1)r[n]=J(D(t,o,n));const c=t=>B(r[t],1,1,(()=>{r[t]=null}));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();n=d()},m(t,o){for(let n=0;n<r.length;n+=1)r[n].m(t,o);u(t,n,o),e=!0},p(t,e){if(1&e){let i;for(o=t[1].paragraphs,i=0;i<o.length;i+=1){const c=D(t,o,i);r[i]?(r[i].p(c,e),T(r[i],1)):(r[i]=J(c),r[i].c(),T(r[i],1),r[i].m(n.parentNode,n))}for(O(),i=o.length;i<r.length;i+=1)c(i);L()}},i(t){if(!e){for(let t=0;t<o.length;t+=1)T(r[t]);e=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)B(r[t]);e=!1},d(t){!function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(r,t),t&&l(n)}}}function J(n){let e,o;return e=new V({props:{title:n[2].title}}),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,n){F(e,t,n),o=!0},p:t,i(t){o||(T(e.$$.fragment,t),o=!0)},o(t){B(e.$$.fragment,t),o=!1},d(t){I(e,t)}}}function K(n){let e;return{c(){e=s("p"),e.textContent="Loading Contents"},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&l(e)}}}function Q(t){let n,e,o,r,c={ctx:t,current:null,token:null,hasCatch:!1,pending:K,then:H,catch:G,value:1,blocks:[,,,]};return function(t,n){const e=n.token={};function o(t,o,r,c){if(n.token!==e)return;n.resolved=c;let i=n.ctx;void 0!==r&&(i=i.slice(),i[r]=c);const u=t&&(n.current=t)(i);let l=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==o&&t&&(O(),B(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null)})),L())})):n.block.d(1),u.c(),T(u,1),u.m(n.mount(),n.anchor),l=!0),n.block=u,n.blocks&&(n.blocks[o]=u),l&&j()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const e=g();if(t.then((t=>{m(e),o(n.then,1,n.value,t),m(null)}),(t=>{if(m(e),o(n.catch,2,n.error,t),m(null),!n.hasCatch)throw t})),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var r}(t[0],c),{c(){n=s("h1"),n.textContent="app",e=f(),o=d(),c.block.c()},m(t,i){u(t,n,i),u(t,e,i),u(t,o,i),c.block.m(t,c.anchor=i),c.mount=()=>o.parentNode,c.anchor=o,r=!0},p(n,[e]){!function(t,n,e){const o=n.slice(),{resolved:r}=t;t.current===t.then&&(o[t.value]=r),t.current===t.catch&&(o[t.error]=r),t.block.p(o,e)}(c,t=n,e)},i(t){r||(T(c.block),r=!0)},o(t){for(let t=0;t<3;t+=1){B(c.blocks[t])}r=!1},d(t){t&&l(n),t&&l(e),t&&l(o),c.block.d(t),c.token=null,c=null}}}function R(t){return[fetch("contents.json").then((t=>t.json()))]}return new class extends z{constructor(t){super(),U(this,t,R,Q,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
