import f from"./ContentSlot.018db038.js";import y from"./ButtonLink.5a7bdbde.js";import h from"./Terminal.579fa6a7.js";import k from"./VideoPlayer.c8af2548.js";import{a as $,o as s,i as a,k as o,m as c,l as r,w as i,U as u,c as l,F as v,t as d,L as w,x as B}from"./entry.7d514228.js";import"./index.381359a9.js";import"./NuxtImg.vue.4599f05d.js";const S={class:"block-hero"},V={class:"layout"},g={class:"content"},q={key:0,class:"announce"},C={class:"title"},H={class:"description"},N={key:1,class:"extra"},b={class:"actions"},x=["href"],A={class:"support"},T=$({__name:"BlockHero",props:{cta:{type:Array,required:!1,default:()=>[]},secondary:{type:Array,required:!1,default:()=>[]},video:{type:String,required:!1,default:""},snippet:{type:[Array,String],required:!1,default:""}},setup(e){return(t,F)=>{const n=f,p=y,m=h,_=k;return s(),a("section",S,[o("div",V,[o("div",g,[t.$slots.announce?(s(),a("p",q,[c(n,{use:t.$slots.announce,unwrap:"p"},null,8,["use"])])):r("",!0),o("h1",C,[c(n,{use:t.$slots.title,unwrap:"p"},{default:i(()=>[u(" Hero Title ")]),_:1},8,["use"])]),o("p",H,[c(n,{use:t.$slots.description,unwrap:"p"},{default:i(()=>[u(" Hero default description. ")]),_:1},8,["use"])]),t.$slots.extra?(s(),a("div",N,[c(n,{use:t.$slots.extra,unwrap:"p"},null,8,["use"])])):r("",!0),o("div",b,[t.$slots.actions?(s(),l(n,{key:0,use:t.$slots.actions,unwrap:"p"},null,8,["use"])):(s(),a(v,{key:1},[e.cta?(s(),l(p,{key:0,class:"cta",bold:"",size:"medium",href:e.cta[1]},{default:i(()=>[u(d(e.cta[0]),1)]),_:1},8,["href"])):r("",!0),e.secondary?(s(),a("a",{key:1,href:e.secondary[1],class:"secondary"},d(e.secondary[0]),9,x)):r("",!0)],64))])]),o("div",A,[w(t.$slots,"support",{},()=>[e.snippet?(s(),l(m,{key:0,content:e.snippet},null,8,["content"])):e.video?(s(),l(_,{key:1,src:e.video},null,8,["src"])):r("",!0)],!0)])])])}}}),j=B(T,[["__scopeId","data-v-4f56d8b4"]]);export{j as default};
