import{_ as s,g as a,a as n,b as c,d as r,j as d,i as l,k as t,G as p,B as h}from"./index-D91OSQoO.js";const b={style:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center",gap:"80px","padding-bottom":"200px"}},f=p('<div style="display:flex;flex-direction:column;gap:12px;align-items:center;" data-v-03b83d5b><h1 style="letter-spacing:0;color:#a29cfe;font-size:26px;" data-v-03b83d5b>Bookeep</h1><div style="display:flex;flex-direction:column;gap:6px;align-items:center;" data-v-03b83d5b><h2 style="font-weight:600;font-size:28px;" data-v-03b83d5b>로그인 후 이용이 가능합니다.</h2><h3 style="color:#999;font-weight:400;" data-v-03b83d5b>Github로 로그인하고 독서기록 시작해보세요 !</h3></div></div>',1),_={__name:"BeforeLogin",setup(g){const o=async()=>{const{error:e}=await h.auth.signInWithOAuth({provider:"github",options:{redirectTo:"https://yu-hazel.github.io/bookeep/"}});e&&console.error("Error: ",e.message)};return(e,u)=>{const i=a("v-icon");return n(),c("div",b,[f,r("button",{onClick:o,class:"signGithub"},[d(i,{style:{"font-size":"24px"}},{default:l(()=>[t("mdi-github")]),_:1}),t(" 로그인 ")])])}}},m=s(_,[["__scopeId","data-v-03b83d5b"]]);export{m as default};
