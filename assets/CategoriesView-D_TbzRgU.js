import{r as i,m as F,c as r,a as $,b as s,d as q,F as B,p as S,f as T,t as b,w as y,v as I,j,M as v,h as d,g as z,o as u,q as E}from"./index-ehUiTKS-.js";import{_ as A}from"./ToastNotification-Ck8PgkN6.js";import{S as h}from"./sweetalert2.esm.all-DvhyLlFx.js";const P={class:"container-fluid"},G={class:"row mb-4"},H={class:"col"},J={class:"d-flex align-items-center justify-content-between"},K={class:"breadcrumb mb-0"},Q={class:"breadcrumb-item"},W={class:"row"},X={class:"col-6"},Y={class:"card"},Z={class:"p-4"},ss={class:"justify-content-between d-flex"},es={class:"card-body p-0"},ts={class:"table table-borderless align-middle table-hover"},os={colspan:"1",class:"text-end"},as=["onClick"],ls=["onClick"],ns=["onClick"],is={class:"col-6"},ds={class:"card"},cs={class:"p-4"},rs={class:"justify-content-between d-flex"},us=["disabled"],bs={class:"card-body p-0"},vs={key:0,class:"text-center p-3"},ps={key:1,class:"table-responsive"},ms={class:"table table-borderless align-middle table-hover"},gs={colspan:"1",class:"text-end"},fs=["onClick"],ys=["onClick"],hs={class:"modal-dialog modal-dialog-centered"},_s={class:"modal-content"},ws={class:"modal-header"},Cs={class:"modal-title"},xs={class:"modal-body"},ks={class:"row"},Ms={class:"mb-4 col-12"},$s={class:"mb-4 col-12"},Bs={class:"modal-footer"},Ss={class:"modal-dialog modal-dialog-centered"},Ts={class:"modal-content"},Is={class:"modal-header"},js={class:"modal-title"},Es={class:"modal-body"},Vs={class:"row"},Ds={class:"mb-4 col-12"},Rs={class:"mb-4 col-12"},Us={class:"modal-footer"},zs={__name:"CategoriesView",setup(Ls){const n=i(null),_=i([]),a=i({name:"",is_enabled:"",subcategories:""}),w=i(null),p=i(null),m=i([]),l=i({name:"",is_enabled:""}),C=i(null),x=t=>{a.value={...t},new v(w.value).show()},V=()=>{const t=document.getElementById("categoryModal");t&&(v.getInstance(t)||new v(t)).hide()},g=async()=>{const{data:t}=await d.get("undefined/categories/all");_.value=Object.values(t.data)},D=async()=>{try{if(a.value.id){const e=(await d.put(`undefined/categories/${a.value.id}`,a.value)).data.message||"類別已成功更新";n.value.showSuccessToast(e)}else{const e=(await d.post("undefined/categories/category",a.value)).data.message||"類別已成功儲存";n.value.showSuccessToast(e)}await g(),V()}catch(t){console.error("儲存類別失敗:",t)}},R=async t=>{try{if((await h.fire({title:"刪除主類",text:"確定要刪除主類別嗎",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"確定",cancelButtonText:"取消"})).isConfirmed){const o=(await d.delete(`undefined/categories/${t}`)).data.message||"類別已成功刪除";n.value.showSuccessToast(o),await h.fire({title:"成功!",text:"刪除主類別成功",icon:"success"}),await g()}}catch(e){console.error("刪除類別失敗:",e),n.value.showErrorToast("刪除類別失敗，請稍後再試")}},k=t=>{l.value={...t},new v(C.value).show()},U=()=>{const t=document.getElementById("subCategoryModal");t&&(v.getInstance(t)||new v(t)).hide()},M=async t=>{try{const{data:e}=await d.get(`undefined/categories/${t}/subcategories`);m.value=Object.values(e.data)}catch(e){console.error("取得子類別資料失敗:",e)}},L=t=>{try{m.value=Object.values(t.subcategories),p.value=t.id}catch(e){console.error("開啟子類別失敗:",e)}},N=async()=>{try{const t=p.value;if(l.value.categoryId){const c=(await d.put(`undefined/categories/${t}/subcategories`,l.value)).data.message||"子類別已成功更新";n.value.showSuccessToast(c)}else{const c=(await d.post(`undefined/categories/${t}/subcategories`,l.value)).data.message||"子類別已成功儲存";n.value.showSuccessToast(c)}l.value={},await g(),await M(t),U()}catch(t){console.error("儲存類別失敗:",t)}},O=async t=>{try{if((await h.fire({title:"刪除主類",text:"確定要刪除子類別嗎",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"確定",cancelButtonText:"取消"})).isConfirmed){const o=(await d.delete(`undefined/categories/${p.value}/subcategories/${t}`)).data.message||"子類別已成功刪除";n.value.showSuccessToast(o),await h.fire({title:"成功!",text:"刪除子類別成功",icon:"success"}),await M(p.value),m.value.length===0&&n.value.showInfoToast("目前沒有子類別資料")}}catch(e){console.error("刪除子類別失敗:",e)}};return F(async()=>{try{await g()}catch(t){console.error("API 請求失敗:",t)}}),(t,e)=>{const c=z("router-link");return u(),r("div",P,[$(A,{ref_key:"toast",ref:n},null,512),s("div",G,[s("div",H,[s("div",J,[s("div",null,[e[10]||(e[10]=s("h2",null,"類別",-1)),s("nav",null,[s("ol",K,[s("li",Q,[$(c,{to:"/admin/dashboard"},{default:q(()=>e[8]||(e[8]=[T("首頁")])),_:1})]),e[9]||(e[9]=s("li",{class:"breadcrumb-item active"},"類別",-1))])])])])])]),s("div",W,[s("div",X,[s("div",Y,[s("div",Z,[s("div",ss,[e[11]||(e[11]=s("select",{class:"form-select w-auto"},[s("option",{value:""},"狀態"),s("option",{value:"published"},"已上架"),s("option",{value:"unpublished"},"未上架")],-1)),s("button",{onClick:e[0]||(e[0]=o=>x({})),type:"button",class:"btn btn-primary"},"新增分類")])]),s("div",es,[s("table",ts,[e[13]||(e[13]=s("thead",{class:"table-light"},[s("tr",null,[s("th",{colspan:"1"},[s("input",{class:"form-check-input",type:"checkbox"})]),s("th",{colspan:"1"},"名稱"),s("th",{colspan:"1"},"狀態"),s("th",{colspan:"1"})])],-1)),s("tbody",null,[(u(!0),r(B,null,S(_.value,o=>(u(),r("tr",{key:o.id},[e[12]||(e[12]=s("td",{colspan:"1"},[s("input",{class:"form-check-input",type:"checkbox"})],-1)),s("td",null,b(o.name),1),s("td",null,[s("span",{class:E(["badge",[o.is_enabled?"bg-success":"bg-secondary"]])},b(o.is_enabled?"已上架":"未上架"),3)]),s("td",os,[s("button",{onClick:f=>x(o),class:"btn text-primary"},"編輯",8,as),s("button",{onClick:f=>R(o.id),class:"btn text-danger"},"刪除",8,ls),s("button",{onClick:f=>L(o),class:"btn text-secondary"},"子選單",8,ns)])]))),128))])]),e[14]||(e[14]=s("div",{class:"border-top d-md-flex justify-content-between align-items-center p-3"},[s("div",null,"顯示1到 10 個項目 （共14 個項目）"),s("nav",{class:"mt-2 mt-md-0 navbar navbar-expand"},[s("ul",{class:"mb-0 pagination"},[s("li",{class:"page-item mx-1 disabled"},[s("span",{class:"page-link"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-chevron-left",viewBox:"0 0 16 16"},[s("path",{"fill-rule":"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"})])])]),s("li",{class:"page-item mx-1 active"},[s("span",{class:"page-link rounded-1"},[T("1"),s("span",{class:"visually-hidden"},"(current)")])]),s("li",{class:"page-item mx-1"},[s("a",{class:"page-link rounded-1",role:"button",tabindex:"0",href:"#"},"2")]),s("li",{class:"page-item mx-1"},[s("a",{class:"page-link",role:"button",tabindex:"0",href:"#"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-chevron-right",viewBox:"0 0 16 16"},[s("path",{"fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"})])])])])])],-1))])])]),s("div",is,[s("div",ds,[s("div",cs,[s("div",rs,[e[15]||(e[15]=s("select",{class:"form-select w-auto"},[s("option",{value:""},"狀態"),s("option",{value:"published"},"已上架"),s("option",{value:"unpublished"},"未上架")],-1)),s("button",{onClick:e[1]||(e[1]=o=>k({})),type:"button",class:"btn btn-primary",disabled:!p.value},"新增子選單",8,us)])]),s("div",bs,[m.value.length===0?(u(),r("div",vs,e[16]||(e[16]=[s("p",{class:"text-muted"},"尚無子類別資料",-1)]))):(u(),r("div",ps,[s("table",ms,[e[18]||(e[18]=s("thead",{class:"table-light"},[s("tr",null,[s("th",{colspan:"1"},[s("input",{class:"form-check-input",type:"checkbox"})]),s("th",{colspan:"1"},"名稱"),s("th",{colspan:"1"},"狀態"),s("th",{colspan:"1"})])],-1)),s("tbody",null,[(u(!0),r(B,null,S(m.value,o=>(u(),r("tr",{key:o.id},[e[17]||(e[17]=s("td",{colspan:"1"},[s("input",{class:"form-check-input",type:"checkbox"})],-1)),s("td",null,b(o.name),1),s("td",null,[s("span",{class:E(["badge",[o.is_enabled?"bg-success":"bg-secondary"]])},b(o.is_enabled?"已上架":"未上架"),3)]),s("td",gs,[s("button",{onClick:f=>k(o),type:"button",class:"btn text-primary"},"編輯",8,fs),s("button",{onClick:f=>O(o.id),type:"button",class:"btn text-danger"},"刪除",8,ys)])]))),128))])])]))])])])]),s("div",{class:"modal fade",id:"categoryModal",ref_key:"categoryModalRef",ref:w},[s("div",hs,[s("div",_s,[s("div",ws,[s("h5",Cs,b(a.value.id?"編輯主類別":"新增主類別"),1),e[19]||(e[19]=s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal"},null,-1))]),s("div",xs,[s("div",ks,[s("div",Ms,[e[20]||(e[20]=s("label",{class:"form-label"},"類別名稱",-1)),y(s("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>a.value.name=o),class:"form-control",type:"text"},null,512),[[I,a.value.name]])]),s("div",$s,[e[22]||(e[22]=s("label",{class:"form-label"},"狀態",-1)),y(s("select",{class:"form-select","onUpdate:modelValue":e[3]||(e[3]=o=>a.value.is_enabled=o)},e[21]||(e[21]=[s("option",{value:1},"上架",-1),s("option",{value:0},"下架",-1)]),512),[[j,a.value.is_enabled]])])])]),s("div",Bs,[s("button",{onClick:e[4]||(e[4]=o=>D(a.value.id)),type:"button",class:"btn btn-primary"},"儲存")])])])],512),s("div",{class:"modal fade",id:"subCategoryModal",ref_key:"subCategoryModalRef",ref:C},[s("div",Ss,[s("div",Ts,[s("div",Is,[s("h5",js,b(l.value.categoryId?"編輯子類別":"新增子類別"),1),e[23]||(e[23]=s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal"},null,-1))]),s("div",Es,[s("div",Vs,[s("div",Ds,[e[24]||(e[24]=s("label",{class:"form-label"},"名稱",-1)),y(s("input",{"onUpdate:modelValue":e[5]||(e[5]=o=>l.value.name=o),class:"form-control",type:"text"},null,512),[[I,l.value.name]])]),s("div",Rs,[e[26]||(e[26]=s("label",{class:"form-label"},"狀態",-1)),y(s("select",{class:"form-select","onUpdate:modelValue":e[6]||(e[6]=o=>l.value.is_enabled=o)},e[25]||(e[25]=[s("option",{value:1},"上架",-1),s("option",{value:0},"下架",-1)]),512),[[j,l.value.is_enabled]])])])]),s("div",Us,[s("button",{onClick:e[7]||(e[7]=o=>N()),type:"button",class:"btn btn-primary"},"儲存")])])])],512)])}}};export{zs as default};