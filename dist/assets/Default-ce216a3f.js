import{p as V,g as D,r as O,I as re,o as ce,w as ve,a as q,b as F,i as K,c as v,d as z,s as U,e as W,f as pe,h as L,j as fe,k as X,l as b,m as de,n as Y,q as G,t as J,u as me,v as ye,x as ge}from"./index-e55e7c64.js";const Q=V({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function ee(e){const l=D("useRender");l.render=e}function he(e){const l=O(),t=O();if(re){const s=new ResizeObserver(n=>{e==null||e(n,s),n.length&&(t.value=n[0].contentRect)});ce(()=>{s.disconnect()}),ve(l,(n,u)=>{u&&(s.unobserve(q(u)),t.value=void 0),n&&s.observe(q(n))},{flush:"post"})}return{resizeRef:l,contentRect:F(t)}}const P=Symbol.for("vuetify:layout"),_e=Symbol.for("vuetify:layout-item"),Z=1e3,be=V({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout");function xe(){const e=K(P);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}const Ie=(e,l,t,s)=>{let n={top:0,left:0,right:0,bottom:0};const u=[{id:"",layer:{...n}}];for(const r of e){const d=l.get(r),y=t.get(r),_=s.get(r);if(!d||!y||!_)continue;const g={...n,[d.value]:parseInt(n[d.value],10)+(_.value?parseInt(y.value,10):0)};u.push({id:r,layer:g}),n=g}return u};function we(e){const l=K(P,null),t=v(()=>l?l.rootZIndex.value-100:Z),s=O([]),n=z(new Map),u=z(new Map),r=z(new Map),d=z(new Map),y=z(new Map),{resizeRef:_,contentRect:g}=he(),te=v(()=>{const a=new Map,p=e.overlaps??[];for(const o of p.filter(c=>c.includes(":"))){const[c,i]=o.split(":");if(!s.value.includes(c)||!s.value.includes(i))continue;const m=n.get(c),h=n.get(i),S=u.get(c),R=u.get(i);!m||!h||!S||!R||(a.set(i,{position:m.value,amount:parseInt(S.value,10)}),a.set(c,{position:h.value,amount:-parseInt(R.value,10)}))}return a}),x=v(()=>{const a=[...new Set([...r.values()].map(o=>o.value))].sort((o,c)=>o-c),p=[];for(const o of a){const c=s.value.filter(i=>{var m;return((m=r.get(i))==null?void 0:m.value)===o});p.push(...c)}return Ie(p,n,u,d)}),T=v(()=>!Array.from(y.values()).some(a=>a.value)),I=v(()=>x.value[x.value.length-1].layer),ne=v(()=>({"--v-layout-left":L(I.value.left),"--v-layout-right":L(I.value.right),"--v-layout-top":L(I.value.top),"--v-layout-bottom":L(I.value.bottom),...T.value?void 0:{transition:"none"}})),w=v(()=>x.value.slice(1).map((a,p)=>{let{id:o}=a;const{layer:c}=x.value[p],i=u.get(o),m=n.get(o);return{id:o,...c,size:Number(i.value),position:m.value}})),E=a=>w.value.find(p=>p.id===a),M=D("createLayout"),k=U(!1);W(()=>{k.value=!0}),pe(P,{register:(a,p)=>{let{id:o,order:c,position:i,layoutSize:m,elementSize:h,active:S,disableTransitions:R,absolute:ae}=p;r.set(o,c),n.set(o,i),u.set(o,m),d.set(o,S),R&&y.set(o,R);const H=fe(_e,M==null?void 0:M.vnode).indexOf(a);H>-1?s.value.splice(H,0,o):s.value.push(o);const j=v(()=>w.value.findIndex($=>$.id===o)),A=v(()=>t.value+x.value.length*2-j.value*2),le=v(()=>{const $=i.value==="left"||i.value==="right",B=i.value==="right",ie=i.value==="bottom",N={[i.value]:0,zIndex:A.value,transform:`translate${$?"X":"Y"}(${(S.value?0:-110)*(B||ie?-1:1)}%)`,position:ae.value||t.value!==Z?"absolute":"fixed",...T.value?void 0:{transition:"none"}};if(!k.value)return N;const f=w.value[j.value];if(!f)throw new Error(`[Vuetify] Could not find layout item "${o}"`);const C=te.value.get(o);return C&&(f[C.position]+=C.amount),{...N,height:$?`calc(100% - ${f.top}px - ${f.bottom}px)`:h.value?`${h.value}px`:void 0,left:B?void 0:`${f.left}px`,right:B?`${f.right}px`:void 0,top:i.value!=="bottom"?`${f.top}px`:void 0,bottom:i.value!=="top"?`${f.bottom}px`:void 0,width:$?h.value?`${h.value}px`:void 0:`calc(100% - ${f.left}px - ${f.right}px)`}}),ue=v(()=>({zIndex:A.value-1}));return{layoutItemStyles:le,layoutItemScrimStyles:ue,zIndex:A}},unregister:a=>{r.delete(a),n.delete(a),u.delete(a),d.delete(a),y.delete(a),s.value=s.value.filter(p=>p!==a)},mainRect:I,mainStyles:ne,getLayoutItem:E,items:w,layoutRect:g,rootZIndex:t});const oe=v(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),se=v(()=>({zIndex:t.value,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:oe,layoutStyles:se,getLayoutItem:E,items:w,layoutRect:g,layoutRef:_}}function Se(){const e=U(!1);return W(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:v(()=>e.value?void 0:{transition:"none !important"}),isBooted:F(e)}}const Re=V({tag:{type:String,default:"div"}},"tag"),$e=V({scrollable:Boolean,...Q(),...Re({tag:"main"})},"VMain"),ze=X()({name:"VMain",props:$e(),setup(e,l){let{slots:t}=l;const{mainStyles:s}=xe(),{ssrBootStyles:n}=Se();return ee(()=>b(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[s.value,n.value,e.style]},{default:()=>{var u,r;return[e.scrollable?b("div",{class:"v-main__scroller"},[(u=t.default)==null?void 0:u.call(t)]):(r=t.default)==null?void 0:r.call(t)]}})),{}}}),Ve={__name:"View",setup(e){return(l,t)=>{const s=de("router-view");return Y(),G(ze,null,{default:J(()=>[b(s)]),_:1})}}};const Le=V({...Q(),...be({fullHeight:!0}),...me()},"VApp"),Me=X()({name:"VApp",props:Le(),setup(e,l){let{slots:t}=l;const s=ye(e),{layoutClasses:n,layoutStyles:u,getLayoutItem:r,items:d,layoutRef:y}=we(e),{rtlClasses:_}=ge();return ee(()=>{var g;return b("div",{ref:y,class:["v-application",s.themeClasses.value,n.value,_.value,e.class],style:[u.value,e.style]},[b("div",{class:"v-application__wrap"},[(g=t.default)==null?void 0:g.call(t)])])}),{getLayoutItem:r,items:d,theme:s}}}),Ce={__name:"Default",setup(e){return(l,t)=>(Y(),G(Me,null,{default:J(()=>[b(Ve)]),_:1}))}};export{Ce as default};
