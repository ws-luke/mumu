import{_ as j,r,m as I,n as D,p as M,c as o,a,d as _,e as b,F as h,q as m,t as u,s as x,x as q,y as z,h as C,g as F,o as l,b as k}from"./index-DzMFcgOL.js";const O={class:"container-fluid mt-4"},T={"aria-label":"breadcrumb",class:"mb-4"},A={class:"breadcrumb"},E={class:"breadcrumb-item"},R={class:"row"},U={class:"mb-6 mb-md-0 col-lg-3 col-xl-2 col-md-4 d-none d-lg-block"},G={class:"accordion",id:"accordionProductsPage"},H={class:"accordion-header"},J=["id"],K=["data-bs-target","aria-controls"],Q=["id","aria-labelledby"],W={class:"accordion-body p-0"},X={class:"navbar-nav px-3"},Y={class:"col-lg-9 col-xl-10 col-md-12"},Z={class:"row justify-content-between mb-4"},S={class:"col"},aa={key:0,class:"row row-cols-2 row-cols-lg-3 row-cols-xl-4 g-4 mb-4"},ea={key:0,class:"card-img-top bg-light placeholder-glow h-100"},ta={class:"card-img-top overflow-hidden"},sa=["src","alt","onLoad"],oa={class:"card-body"},la={class:"card-title text-center"},ca={class:"text-center price mb-0 fw-bold"},na={key:1,class:"text-center"},ra={key:2,"aria-label":"Page navigation example"},ia={class:"pagination justify-content-center my-5"},da=["onClick"],ua={__name:"ShopProductsView",setup(va){const p=z(),c=r(""),i=r(""),P=r([]),$="https://mumuapi.zeabur.app/api",y=r([]),n=r({}),g=r(0),L=r({}),f=async(s,t,d)=>{try{const e=await C.get(`${$}/products/all`,{params:{page:s,category:t,subcategory:d}});y.value=e.data.data.products||[],n.value=e.data.data.pagination,g.value=n.value.totalPages}catch(e){console.error("取得商品資料失敗:",e)}},V=I(()=>P.value.filter(s=>s.is_enabled===1)),B=async()=>{try{const s=await C.get(`${$}/categories/all`);s.data&&s.data.data&&(P.value=Object.values(s.data.data))}catch(s){console.error("API 請求失敗:",s)}},w=async s=>{await f(s,c.value,i.value)},N=s=>{L.value[s]=!0};return D(async()=>{var s,t;c.value=((s=p.query.category)==null?void 0:s.replace(/\+/g," "))||"",i.value=((t=p.query.subcategory)==null?void 0:t.replace(/\+/g," "))||"",await B(),await f(1,c.value,i.value)}),M(()=>[p.query.category,p.query.subcategory],([s,t])=>{c.value=(s==null?void 0:s.replace(/\+/g," "))||"",i.value=(t==null?void 0:t.replace(/\+/g," "))||"",(c.value!==""||i.value!==""||c.value==="")&&f(1,c.value,i.value)}),(s,t)=>{const d=F("router-link");return l(),o("div",null,[a("div",O,[a("nav",T,[a("ol",A,[a("li",E,[_(d,{to:"/",class:"text-decoration-none"},{default:b(()=>t[2]||(t[2]=[k("首頁")])),_:1})]),t[3]||(t[3]=a("li",{class:"breadcrumb-item active"},"產品列表",-1))])]),a("div",R,[a("aside",U,[a("div",G,[a("h2",H,[_(d,{to:{name:"shop-products",query:{category:""}},class:"nav-link accordion-button fw-bold border-0 shadow-none allProduct"},{default:b(()=>t[4]||(t[4]=[k("所有商品")])),_:1})]),(l(!0),o(h,null,m(V.value,e=>(l(),o("div",{key:e.id,class:"accordion-item border-0"},[a("h2",{class:"accordion-header",id:`productList${e.id}`},[a("button",{class:"accordion-button collapsed fw-bold border-0 shadow-none",type:"button","data-bs-toggle":"collapse","data-bs-target":`#collapse${e.id}`,"aria-expanded":"false","aria-controls":`collapse${e.id}`},u(e.name),9,K)],8,J),a("div",{id:`collapse${e.id}`,class:"accordion-collapse collapse","aria-labelledby":`productList${e.id}`,"data-bs-parent":"#accordionProductsPage"},[a("div",W,[a("ul",X,[(l(!0),o(h,null,m(Object.values(e.subcategories),v=>(l(),o("li",{key:v.id,class:"nav-item"},[_(d,{to:{name:"shop-products",query:{category:e.name,subcategory:v.name}},class:"nav-link ps-3"},{default:b(()=>[k(u(v.name),1)]),_:2},1032,["to"])]))),128))])])],8,Q)]))),128))])]),a("section",Y,[a("div",Z,[a("h4",S,u(c.value?c.value:"所有商品"),1)]),y.value.length>0?(l(),o("div",aa,[(l(!0),o(h,null,m(y.value,e=>(l(),o("div",{class:"col",key:e.id},[_(d,{class:"card h-100 text-decoration-none",to:`/shop/shop-product/${e.id}`},{default:b(()=>[L.value[e.id]?q("",!0):(l(),o("div",ea,t[5]||(t[5]=[a("span",{class:"placeholder w-100 h-100"},null,-1)]))),a("div",ta,[a("img",{src:e.imageUrl,class:"img-fluid",alt:e.title,onLoad:v=>N(e.id)},null,40,sa)]),a("div",oa,[a("p",la,u(e.title),1),a("p",ca," NT$ "+u(e.retail_Price),1)])]),_:2},1032,["to"])]))),128))])):(l(),o("p",na,"暫時沒有商品")),g.value>1?(l(),o("nav",ra,[a("ul",ia,[a("li",{class:x(["page-item mx-1",{disabled:n.value.currentPage===1}])},[a("button",{class:"page-link",onClick:t[0]||(t[0]=e=>w(n.value.currentPage-1))},t[6]||(t[6]=[a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-chevron-left",viewBox:"0 0 16 16"},[a("path",{"fill-rule":"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"})],-1)]))],2),(l(!0),o(h,null,m(g.value,e=>(l(),o("li",{key:e,class:x(["page-item mx-1",{active:e===n.value.currentPage}])},[a("button",{class:"page-link rounded-1",onClick:v=>w(e)},u(e),9,da)],2))),128)),a("li",{class:x(["page-item mx-1",{disabled:n.value.currentPage===g.value}])},[a("button",{class:"page-link",onClick:t[1]||(t[1]=e=>w(n.value.currentPage+1))},t[7]||(t[7]=[a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-chevron-right",viewBox:"0 0 16 16"},[a("path",{"fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"})],-1)]))],2)])])):q("",!0)])])])])}}},ga=j(ua,[["__scopeId","data-v-616be709"]]);export{ga as default};
