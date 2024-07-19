import{_ as J,B as ie,u as ee,c as B,f as I,w as de,g as r,a as s,h as M,i as a,j as n,k as A,m as _,d as e,t as h,b as v,F as te,e as oe,p as ce,l as f,q as R,v as j,C as Z,A as F,D as re,s as le,x as se,o as ue,E as pe}from"./index-qPjtoz3x.js";const T=g=>(le("data-v-0f122593"),g=g(),se(),g),_e=T(()=>e("h3",null,"새로운 책",-1)),ve={class:"DataBox",style:{display:"flex",gap:"32px","flex-direction":"row"}},me={style:{display:"flex","align-items":"center"}},he={class:"bookData"},ge={style:{display:"flex","flex-direction":"column",gap:"4px"}},xe={class:"bookSubData"},fe={style:{display:"flex","flex-wrap":"wrap",gap:"4px"}},ye={style:{display:"flex","flex-direction":"row",gap:"16px"}},ke={style:{"padding-right":"12px","box-shadow":"5px 0 0 -3px #999"}},we={class:"bookDetailTxt"},be={class:"category-buttons mt-4"},Be={style:{display:"flex","flex-direction":"column",gap:"6px",width:"100%"}},De={key:0,class:"rating",style:{display:"flex","flex-direction":"column",width:"100%",gap:"6px","margin-top":"32px"}},Se=T(()=>e("h4",{style:{color:"#999"}},"책의 평점을 남겨주세요.",-1)),Ce={class:"bookCustomBox",style:{display:"flex","flex-direction":"column",gap:"12px",width:"100%"}},Ve={class:"bookDayBox"},$e={key:0,style:{flex:"1 1 0",display:"flex","flex-direction":"column",gap:"8px"}},Ie=T(()=>e("h4",null,"독서 시작일",-1)),Me={key:1,style:{flex:"1 1 0",display:"flex","flex-direction":"column",gap:"8px"}},Ue=T(()=>e("h4",null,"독서 종료일",-1)),Ne={key:2,class:"selectDay",style:{width:"100px"}},Ee={key:3,class:"selectDay",style:{width:"100px"}},Re={class:"commentBox",style:{padding:"0"}},je={class:"bottomBtBox"},Te=T(()=>e("h5",null,"저장",-1)),qe={__name:"BookDetailModal",setup(g){const m=ie();console.log("Router object:",m);const l=ee(),i=B(()=>l.selectedBook),U=B({get:()=>l.showModal,set:p=>{p||l.closeModal()}}),D=B(()=>l.categories),y=p=>B({get:()=>l[p],set:o=>{l[p]=o}}),S=y("pages"),C=y("comment"),u=y("selectedCategory"),k=I(""),d=I(""),x=I(0),w=I("");de(()=>l.selectedBook,p=>{p?(k.value=l.startDate,d.value=l.endDate,w.value=l.readingPage||"",x.value=l.rating||0):(k.value="",d.value="",w.value="",x.value=0)});const V=l.closeModal,N=async()=>{const{data:p}=await F.auth.getSession(),o=p.session;if(console.log("Session:",o),!o){console.log("Redirecting to /before-login"),await re(),m.push("/before-login");return}const $={user_id:o.user.id,title:i.value.title,publisher:i.value.publisher,datetime:i.value.datetime,thumbnail:i.value.thumbnail,authors:JSON.stringify(i.value.authors),isbn:i.value.isbn,pages:S.value,reading_page:w.value,comment:C.value,start_date:k.value===""?null:k.value,end_date:d.value===""?null:d.value,rating:x.value,category:u.value};try{const{data:t,error:b}=await F.from("books").select("isbn").eq("user_id",o.user.id);if(b)throw console.error("Error fetching books:",b),b;if(t.some(z=>z.isbn===i.value.isbn)){alert("이미 저장된 책입니다.");return}const{data:Q,error:E}=await F.from("books").insert([$]);if(E)throw console.error("Supabase error:",E),E;alert("책이 저장되었습니다."),loadBooks(),V()}catch(t){console.error("Error saving book:",t),alert("책 저장에 실패했습니다.")}},K=p=>p?p.split("-")[0]:"";return(p,o)=>{const $=r("v-icon"),t=r("v-spacer"),b=r("v-card-title"),L=r("v-img"),Q=r("v-btn"),E=r("v-rating"),z=r("v-card-text"),ae=r("v-card"),ne=r("v-dialog");return s(),M(ne,{modelValue:U.value,"onUpdate:modelValue":o[6]||(o[6]=P=>U.value=P),"max-width":"500","max-height":"850"},{default:a(()=>[n(ae,{style:{"border-radius":"30px","box-shadow":"0 4px 25px #767676",height:"100%"}},{default:a(()=>[n(b,null,{default:a(()=>[n(t,{class:"bookCategory"},{default:a(()=>[n($,{style:{color:"#A29cfe"}},{default:a(()=>[A("mdi-check")]),_:1}),_e]),_:1}),n($,{onClick:_(V),size:"x-small",style:{position:"absolute",right:"30px",top:"30px"}},{default:a(()=>[A("mdi-close")]),_:1},8,["onClick"])]),_:1}),n(z,{class:"bookDetailWrapper"},{default:a(()=>{var P,O,W,G,H,X,Y;return[e("div",ve,[e("div",me,[n(L,{src:(P=i.value)==null?void 0:P.thumbnail,class:"bookDetailImage"},null,8,["src"])]),e("div",he,[e("div",ge,[e("h1",null,h((O=i.value)==null?void 0:O.title),1),e("h3",null,"작가 : "+h(((G=(W=i.value)==null?void 0:W.authors)==null?void 0:G.join(", "))||"작가 정보 없음"),1)]),e("div",xe,[e("div",fe,[e("div",ye,[e("h4",ke,"발행연도 : "+h(K((H=i.value)==null?void 0:H.datetime)||"정보 없음"),1),e("h4",null,"출판사 : "+h(((X=i.value)==null?void 0:X.publisher)||"정보 없음"),1)]),e("h4",null,"ISBN: "+h((Y=i.value)==null?void 0:Y.isbn),1)])])])]),e("div",we,[e("div",be,[(s(!0),v(te,null,oe(D.value,c=>(s(),M(Q,{key:c,onClick:ot=>u.value=c,class:ce(["categoryBtn",{selectedCategory:_(u)===c}])},{default:a(()=>[e("h3",null,h(c),1)]),_:2},1032,["onClick","class"]))),128))]),e("div",Be,[_(u)==="다 읽은 책"?(s(),v("div",De,[Se,n(E,{modelValue:x.value,"onUpdate:modelValue":o[0]||(o[0]=c=>x.value=c),"background-color":"purple",color:"deep-purple-lighten-3",density:"compact",length:"5","half-increments":"",clearable:"",style:{"padding-left":"-2px"}},null,8,["modelValue"])])):f("",!0),e("div",Ce,[e("div",Ve,[_(u)!=="읽고 싶은 책"?(s(),v("div",$e,[Ie,_(u)!=="읽고 싶은 책"?R((s(),v("input",{key:0,"onUpdate:modelValue":o[1]||(o[1]=c=>k.value=c),label:"독서 시작일",type:"date",dense:"",class:"mt-4 selectDay",id:"modalStartDate",style:{width:"100%",display:"block"}},null,512)),[[j,k.value]]):f("",!0)])):f("",!0),_(u)==="다 읽은 책"?(s(),v("div",Me,[Ue,_(u)==="다 읽은 책"?R((s(),v("input",{key:0,"onUpdate:modelValue":o[2]||(o[2]=c=>d.value=c),type:"date",dense:"",class:"mt-4 selectDay",id:"modalEndDate",style:{width:"100%",display:"block"}},null,512)),[[j,d.value]]):f("",!0)])):f("",!0),_(u)!=="읽고 싶은 책"?(s(),v("div",Ne,[R(e("input",{"onUpdate:modelValue":o[3]||(o[3]=c=>Z(S)?S.value=c:null),dense:"",class:"mt-4 pageInput",id:"modalPages",placeholder:"전체"},null,512),[[j,_(S)]]),A("쪽 ")])):f("",!0),_(u)==="읽는 중인 책"?(s(),v("div",Ee,[_(u)==="읽는 중인 책"?R((s(),v("input",{key:0,"onUpdate:modelValue":o[4]||(o[4]=c=>w.value=c),placeholder:"읽은",dense:"",class:"mt-4 pageInput",id:"modalReadingPage"},null,512)),[[j,w.value]]):f("",!0),A("쪽 ")])):f("",!0)])]),e("div",Re,[R(e("textarea",{"onUpdate:modelValue":o[5]||(o[5]=c=>Z(C)?C.value=c:null),label:"코멘트",dense:"",class:"mt-4",id:"modalComment",style:{width:"100%","margin-top":"16px !important",padding:"0 16px 16px"},placeholder:"감상평을 작성해 주세요"},null,512),[[j,_(C)]])])])])]}),_:1}),e("div",je,[n(Q,{color:"#A29cfe",onClick:N,class:"mt-4 saveBt"},{default:a(()=>[Te]),_:1})])]),_:1})]),_:1},8,["modelValue"])}}},Pe=J(qe,[["__scopeId","data-v-0f122593"]]),q=g=>(le("data-v-6fbe1667"),g=g(),se(),g),Ae={key:0},Fe=q(()=>e("span",{class:"brandName"},"Bookeep",-1)),Ke=q(()=>e("h2",{style:{"padding-right":"6px"}},"과 함께 한 권의 책이 열어주는",-1)),Le=q(()=>e("h2",null,"새로운 세상을 만나 보세요. ",-1)),Qe=q(()=>e("p",null,"어떤 책들이 있나 검색해 보세요!",-1)),ze=[Fe,Ke,Le,Qe],Je={style:{width:"100%",display:"flex","flex-direction":"column","justify-content":"space-between",padding:"8px 0"}},Oe={style:{overflow:"hidden","text-overflow":"ellipsis",display:"-webkit-box","-webkit-line-clamp":"2","-webkit-box-orient":"vertical"}},We={style:{display:"flex","flex-direction":"column",gap:"4px"}},Ge={style:{display:"flex","flex-direction":"row",gap:"16px"}},He={style:{"padding-right":"12px","box-shadow":"5px 0 0 -3px #999"}},Xe=q(()=>e("h3",{style:{"text-align":"center",padding:"40px 0"}},"검색 결과가 없습니다.",-1)),Ye={__name:"SearchBook",setup(g){const m=ee(),l=I(m.query);B(()=>m.query);const i=B(()=>m.books),U=B(()=>m.showModal),D=I(!1),y=()=>{console.log("searchBooks 호출"),m.setQuery(l.value),m.searchBooks()},S=d=>{m.selectBook(d)},C=d=>d?d.split("-")[0]:"",u=["푸바오","인문학","신춘문예","우주","트렌드"],k=()=>{const d=Math.floor(Math.random()*u.length);return u[d]};return ue(async()=>{const{data:d}=await F.auth.getSession();D.value=!!d.session,console.log("isLoggedIn:",D.value),D.value||(l.value=k(),console.log("localQuery 설정:",l.value),y())}),(d,x)=>{const w=r("v-text-field"),V=r("v-col"),N=r("v-row"),K=r("v-img"),p=r("v-card-text"),o=r("v-card"),$=r("v-container");return s(),M($,null,{default:a(()=>[D.value?f("",!0):(s(),v("div",Ae,ze)),n(N,{"no-gutters":""},{default:a(()=>[n(V,{cols:" 12"},{default:a(()=>[n(w,{modelValue:l.value,"onUpdate:modelValue":x[0]||(x[0]=t=>l.value=t),label:"책 이름을 입력하세요",onKeyup:pe(y,["enter"]),"onClick:prependInner":y,"onClick:appendInner":y,"prepend-inner-icon":"mdi-magnify","append-inner-icon":"mdi-arrow-right",class:"searchField",filled:"",rounded:"",dense:""},null,8,["modelValue"])]),_:1})]),_:1}),i.value.length>0?(s(),M(N,{key:1,style:{display:"grid","grid-template-columns":"repeat(auto-fill, minmax(460px, 1fr))"}},{default:a(()=>[(s(!0),v(te,null,oe(i.value,(t,b)=>(s(),M(V,{key:b,style:{padding:"8px"}},{default:a(()=>[n(o,{class:"bookCard",onClick:L=>S(t),outlined:"",flat:""},{default:a(()=>[n(p,{class:"bookThumbnail"},{default:a(()=>[n(K,{src:t.thumbnail},null,8,["src"])]),_:2},1024),e("div",Je,[e("div",null,[e("p",Oe,h(t.title),1),e("h3",null,h(t.authors.length?t.authors.join(", "):"작가 정보 없음"),1)]),e("div",We,[e("div",Ge,[e("h4",He,"발행연도 : "+h(C(t==null?void 0:t.datetime)||"정보 없음"),1),e("h4",null,"출판사 : "+h((t==null?void 0:t.publisher)||"정보 없음"),1)]),e("h4",null,"ISBN: "+h(t==null?void 0:t.isbn),1)])])]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})):(s(),M(N,{key:2},{default:a(()=>[n(V,null,{default:a(()=>[Xe]),_:1})]),_:1})),n(Pe,{modelValue:U.value,"onUpdate:modelValue":x[1]||(x[1]=t=>U.value=t)},null,8,["modelValue"])]),_:1})}}},Ze=J(Ye,[["__scopeId","data-v-6fbe1667"]]),et={class:"main01",style:{width:"100%","max-width":"2000px"}},tt={__name:"SearchBooks",setup(g){return(m,l)=>(s(),v("div",et,[n(Ze,{class:"SearchBook"})]))}},st=J(tt,[["__scopeId","data-v-3d334f46"]]);export{st as default};
