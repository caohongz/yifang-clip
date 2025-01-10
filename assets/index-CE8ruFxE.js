import{d as R,r as m,o as F,c as i,a as s,b as l,w as o,F as H,e as K,u as L,n as S,f as c,g as r,h as u,i as D,v as h,p as z,t as g,j as P,k as A,E as $,l as I}from"./index-DozAKJfF.js";import{d as C,_ as q}from"./_plugin-vue_export-helper-DWoIcEeg.js";const G={class:"project-list"},J={class:"header"},O={key:0,class:"empty-state"},Q={class:"empty-content"},W={key:1,class:"projects-grid text-base"},X=["onClick"],Z=["src"],ee={key:1,class:"placeholder"},te={class:"info"},le={class:"flex justify-between items-center"},oe=R({__name:"index",setup(se){L();const k=m([]),p=m(!1),d=m({name:""}),V=m(),f=m(!1),v=m(null);F(async()=>{w()});const w=async()=>{k.value=await C.projects.toArray()},j=()=>{p.value=!0,S(()=>{V.value.focus()})},b=async()=>{d.value.name&&(await C.projects.add({name:d.value.name,createTime:new Date().getTime(),tracks:[],thumbnail:""}),p.value=!1,d.value.name="",w())},T=n=>{const e=window.location.origin,a=window.location.pathname,_=a.split("/projects")[0],y=`${e}${_}#/clip/${n.id}`;console.log(e,a,_,y),window.open(y,"_blank")},M=n=>{v.value=n,f.value=!0},U=async()=>{var n;if((n=v.value)!=null&&n.id)try{await C.projects.delete(v.value.id),$.success("项目删除成功"),f.value=!1,v.value=null,await w()}catch(e){$.error("删除项目失败"),console.error("删除项目失败:",e)}},B=n=>I(n).format("YYYY-MM-DD HH:mm:ss");return(n,e)=>{const a=c("el-button"),_=c("el-icon"),y=c("el-input"),N=c("el-form-item"),Y=c("el-form"),x=c("el-dialog");return r(),i("div",G,[s("div",J,[e[6]||(e[6]=s("h1",null,"我的剪辑项目",-1)),l(a,{type:"primary",onClick:j},{default:o(()=>e[5]||(e[5]=[u("新建项目")])),_:1})]),k.value.length?(r(),i("div",W,[(r(!0),i(H,null,K(k.value,t=>(r(),i("div",{key:t.id,class:"project-card"},[s("div",{class:"thumbnail",onClick:E=>T(t)},[t.thumbnail?(r(),i("img",{key:0,src:t.thumbnail,alt:"项目缩略图"},null,8,Z)):(r(),i("div",ee,"无缩略图"))],8,X),s("div",te,[s("div",le,[s("h3",null,g(t.name),1),l(a,{type:"danger",size:"small",onClick:P(E=>M(t),["stop"])},{default:o(()=>e[10]||(e[10]=[u(" 删除 ")])),_:2},1032,["onClick"])]),s("p",null,"更新时间："+g(B(t.updateTime)),1)])]))),128))])):(r(),i("div",O,[s("div",Q,[l(_,{class:"empty-icon"},{default:o(()=>[l(D(h))]),_:1}),e[8]||(e[8]=s("p",{class:"empty-text"},"还没有创建任何项目",-1)),e[9]||(e[9]=s("p",{class:"empty-subtext"},'点击"新建项目"开始创作吧！',-1)),l(a,{type:"primary",class:"mt-4",onClick:j},{default:o(()=>[l(_,{class:"mr-2"},{default:o(()=>[l(D(z))]),_:1}),e[7]||(e[7]=u(" 新建项目 "))]),_:1})])])),l(x,{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=t=>p.value=t),title:"新建项目"},{footer:o(()=>[l(a,{onClick:e[1]||(e[1]=t=>p.value=!1)},{default:o(()=>e[11]||(e[11]=[u("取消")])),_:1}),l(a,{type:"primary",onClick:b},{default:o(()=>e[12]||(e[12]=[u("确定")])),_:1})]),default:o(()=>[l(Y,{model:d.value,onSubmit:P(b,["prevent"])},{default:o(()=>[l(N,{label:"项目名称"},{default:o(()=>[l(y,{modelValue:d.value.name,"onUpdate:modelValue":e[0]||(e[0]=t=>d.value.name=t),ref_key:"inputRef",ref:V,onKeyup:A(b,["enter"])},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),l(x,{modelValue:f.value,"onUpdate:modelValue":e[4]||(e[4]=t=>f.value=t),title:"删除确认",width:"30%"},{footer:o(()=>[l(a,{onClick:e[3]||(e[3]=t=>f.value=!1)},{default:o(()=>e[13]||(e[13]=[u("取消")])),_:1}),l(a,{type:"danger",onClick:U},{default:o(()=>e[14]||(e[14]=[u("确定删除")])),_:1})]),default:o(()=>{var t;return[s("span",null,'确定要删除项目"'+g((t=v.value)==null?void 0:t.name)+'"吗？此操作不可恢复。',1)]}),_:1},8,["modelValue"])])}}}),ie=q(oe,[["__scopeId","data-v-afe4d2a1"]]);export{ie as default};
