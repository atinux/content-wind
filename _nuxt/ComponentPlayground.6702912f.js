import{b as m,u as c,Q as p,a as i,a8 as u,r as l,M as e,x as d}from"./entry.7d514228.js";import{u as f}from"./asyncData.cc90537f.js";import y from"./Ellipsis.4ecc8c4c.js";import g from"./ComponentPlaygroundData.eaa9810f.js";import"./TabsHeader.17ee4a48.js";import"./ComponentPlaygroundProps.391eec7d.js";import"./ProseH4.5a62821a.js";import"./ProseCodeInline.404c341d.js";import"./Badge.d0f19163.js";import"./ContentSlot.018db038.js";import"./ProseP.c852605e.js";import"./index.381359a9.js";import"./ComponentPlaygroundSlots.vue.31841f27.js";import"./ComponentPlaygroundTokens.vue.347b971d.js";async function h(o){m();const t=c(o);{const{data:n}=await f(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const _=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await h(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(y,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(g,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=d(_,[["__scopeId","data-v-a9c00f9d"]]);export{V as default};
