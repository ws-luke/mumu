import{_ as g}from"./ToastNotification-IqRnBvBS.js";import{r as d,n as w,c,d as n,a as s,e as p,l as m,F as f,q as x,b as a,h as y,g as _,o as u,t as o,s as k}from"./index-DzMFcgOL.js";import"./sweetalert2.esm.all-DvhyLlFx.js";const V={class:"container-fluid"},C={class:"row mb-4"},z={class:"col"},M={class:"d-flex align-items-center justify-content-between"},B={class:"breadcrumb mb-0"},L={class:"breadcrumb-item"},N={class:"row"},j={class:"col"},H={class:"card"},A={class:"card-body p-0"},q={class:"table table-borderless align-middle table-hover"},D={class:"dropdown"},F={class:"dropdown-menu dropdown-menu-end py-0","aria-labelledby":""},S={class:"p-2 list-unstyled mb-0"},G={__name:"CustomersView",setup($){const v="https://mumuapi.zeabur.app/api",b=d(null),i=d([]);d({});const h=async()=>{try{const{data:e}=await y.get(`${v}/admin/users`);i.value=Object.values(e.data),console.log(i.value)}catch(e){console.log(e)}};return w(async()=>{try{await h()}catch(e){console.error(e.message)}}),(e,t)=>{const r=_("router-link");return u(),c("div",V,[n(g,{ref_key:"toast",ref:b},null,512),s("div",C,[s("div",z,[s("div",M,[s("div",null,[t[2]||(t[2]=s("h2",null,"會員",-1)),s("nav",null,[s("ol",B,[s("li",L,[n(r,{to:"/admin/dashboard"},{default:p(()=>t[0]||(t[0]=[a("首頁")])),_:1})]),t[1]||(t[1]=s("li",{class:"breadcrumb-item active","aria-current":"page"},"會員",-1))])])]),n(r,{to:"/admin/customer",class:"btn btn-primary"},{default:p(()=>t[3]||(t[3]=[a(" 新增會員 ")])),_:1})])])]),s("div",N,[s("div",j,[s("div",H,[t[11]||(t[11]=m('<div class="p-4"><div class="justify-content-between row"><div class="mb-2 mb-lg-0 col-lg-4 col-md-6 col-12"><form class="d-flex"><input placeholder="搜尋類別" class="form-control" type="search"></form></div><div class="col-lg-2 col-md-4 col-12"><select class="form-select"><option value="">狀態</option><option value="published">已上架</option><option value="unpublished">未上架</option></select></div></div></div>',1)),s("div",A,[s("table",q,[t[9]||(t[9]=s("thead",{class:"table-light"},[s("tr",null,[s("th",{colspan:"1"},[s("input",{class:"form-check-input",type:"checkbox"})]),s("th",{colspan:"1"},"姓名"),s("th",{colspan:"1"},"狀態"),s("th",{colspan:"1"},"電話"),s("th",{colspan:"1"},"電子郵件"),s("th",{colspan:"1"},"總消費金額"),s("th",{colspan:"1"},"註冊日期"),s("th",{colspan:"1"})])],-1)),s("tbody",null,[(u(!0),c(f,null,x(i.value,l=>(u(),c("tr",{key:l.id},[t[7]||(t[7]=s("td",{colspan:"1"},[s("input",{class:"form-check-input",type:"checkbox"})],-1)),s("td",null,o(l.userName),1),s("td",null,[s("span",{class:k(["badge",[l.verified?"bg-success":"bg-secondary"]])},o(l.verified?"已驗證":"未驗證"),3)]),s("td",null,o(l.phoneNumber),1),s("td",null,o(l.email),1),t[8]||(t[8]=s("td",null,"4,000,000",-1)),s("td",null,o(l.createdAt),1),s("td",null,[s("div",D,[t[6]||(t[6]=m('<button class="text-reset btn p-0 border-0" id="" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fs-5"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button>',1)),s("div",F,[s("ul",S,[s("li",null,[n(r,{to:"/admin/customer",class:"dropdown-item px-1 d-flex align-items-center",href:"#"},{default:p(()=>t[4]||(t[4]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash me-2",viewBox:"0 0 16 16"},[s("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"}),s("path",{d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"})],-1),a(" 編輯 ")])),_:1})]),t[5]||(t[5]=s("li",null,[s("button",{class:"dropdown-item px-1 d-flex align-items-center btn"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil-square me-2",viewBox:"0 0 16 16"},[s("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),s("path",{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"})]),a(" 刪除 ")])],-1))])])])])]))),128))])]),t[10]||(t[10]=s("div",{class:"border-top d-md-flex justify-content-between align-items-center p-3"},[s("div",null,"顯示1到 10 個項目 （共14 個項目）"),s("nav",{class:"mt-2 mt-md-0 navbar navbar-expand"},[s("ul",{class:"mb-0 pagination"},[s("li",{class:"page-item mx-1 disabled"},[s("span",{class:"page-link"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-chevron-left",viewBox:"0 0 16 16"},[s("path",{"fill-rule":"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"})])])]),s("li",{class:"page-item mx-1 active"},[s("span",{class:"page-link rounded-1"},[a("1"),s("span",{class:"visually-hidden"},"(current)")])]),s("li",{class:"page-item mx-1"},[s("a",{class:"page-link rounded-1",role:"button",tabindex:"0",href:"#"},"2")]),s("li",{class:"page-item mx-1"},[s("a",{class:"page-link",role:"button",tabindex:"0",href:"#"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-chevron-right",viewBox:"0 0 16 16"},[s("path",{"fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"})])])])])])],-1))])])])])])}}};export{G as default};
