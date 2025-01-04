import{_ as v,r as c,c as g,b as s,a as i,d,f as u,i as w,g as I,o as y,w as e,v as n,j as x,R as V,u as N,h as U,k as r}from"./index-ehUiTKS-.js";const _={class:"container mx-auto mt-3"},L={class:"col"},S={class:"mb-4"},k={class:"col"},C={class:"mb-4"},B={class:"col"},E={class:"mb-4"},M={class:"col"},T={class:"mb-4"},R={class:"col"},D={class:"mb-4"},H={class:"col"},j={class:"mb-4"},G={class:"col"},$={class:"mb-4"},q={class:"col"},z={class:"mb-4"},A={class:"col"},F={class:"mb-4"},J={class:"mb-4"},K={__name:"SignUpView",setup(O){const f=N(),p=void 0,o=c({email:"",password:"",userName:"",companyName:"",phoneNumber:"",address:"",salesChannels:"",ubn:"",businessLiaison:""}),m=async()=>{try{const a=await U.post(`${p}/sign_up`,o.value);a.data.success===!0&&(f.push({name:"SignIn"}),r.success("註冊成功，請至登入頁登入",{theme:"auto",type:"default",autoClose:2e3,dangerouslyHTMLString:!0})),console.log(a)}catch(a){r.error(a.response.data.message,{theme:"auto",type:"default",dangerouslyHTMLString:!0})}};return(a,l)=>{const b=I("from");return y(),g("div",null,[s("div",_,[l[22]||(l[22]=s("h1",{class:"mb-3 h2 fw-bold"},"註冊會員",-1)),i(b,{class:"row row-cols-1 row-cols-md-2"},{default:d(()=>[s("div",L,[s("div",S,[l[9]||(l[9]=s("label",{class:"form-label fw-bold fs-5",for:"floatingInput"},"Email",-1)),e(s("input",{"onUpdate:modelValue":l[0]||(l[0]=t=>o.value.email=t),type:"email",class:"form-control",id:"floatingInput"},null,512),[[n,o.value.email]])])]),s("div",k,[s("div",C,[l[10]||(l[10]=s("label",{class:"form-label fw-bold fs-5",for:"floatingInput"},"姓名",-1)),e(s("input",{"onUpdate:modelValue":l[1]||(l[1]=t=>o.value.userName=t),type:"text",class:"form-control",id:"floatingInput"},null,512),[[n,o.value.userName]])])]),s("div",B,[s("div",E,[l[11]||(l[11]=s("label",{class:"form-label fw-bold fs-5",for:"floatingInput"},"統編",-1)),e(s("input",{"onUpdate:modelValue":l[2]||(l[2]=t=>o.value.ubn=t),type:"text",class:"form-control",id:"floatingInput"},null,512),[[n,o.value.ubn]])])]),s("div",M,[s("div",T,[l[12]||(l[12]=s("label",{class:"form-label fw-bold fs-5",for:"floatingInput"},"公司名稱 / 賣場名稱",-1)),e(s("input",{"onUpdate:modelValue":l[3]||(l[3]=t=>o.value.companyName=t),type:"text",class:"form-control",id:"floatingInput"},null,512),[[n,o.value.companyName]])])]),s("div",R,[s("div",D,[l[13]||(l[13]=s("label",{class:"form-label fw-bold fs-5",for:"floatingInput"},"賣場通路(例：IG、蝦皮、臉書、LINE群)",-1)),e(s("input",{"onUpdate:modelValue":l[4]||(l[4]=t=>o.value.salesChannels=t),type:"text",class:"form-control",id:"floatingInput"},null,512),[[n,o.value.salesChannels]])])]),s("div",H,[s("div",j,[l[14]||(l[14]=s("label",{class:"form-label fw-bold fs-5",for:"floatingInput"},"地址",-1)),e(s("input",{"onUpdate:modelValue":l[5]||(l[5]=t=>o.value.address=t),type:"text",class:"form-control",id:"floatingInput"},null,512),[[n,o.value.address]])])]),s("div",G,[s("div",$,[l[15]||(l[15]=s("label",{class:"form-label fw-bold fs-5",for:"floatingInput"},"手機號碼",-1)),e(s("input",{"onUpdate:modelValue":l[6]||(l[6]=t=>o.value.phoneNumber=t),type:"text",class:"form-control",id:"floatingInput"},null,512),[[n,o.value.phoneNumber]])])]),s("div",q,[s("div",z,[l[16]||(l[16]=s("label",{class:"form-label fw-bold fs-5",for:"floatingInput"},"密碼",-1)),e(s("input",{"onUpdate:modelValue":l[7]||(l[7]=t=>o.value.password=t),type:"password",class:"form-control",id:"floatingInput"},null,512),[[n,o.value.password]])])]),l[19]||(l[19]=s("div",{class:"col"},[s("div",{class:"mb-4"},[s("label",{class:"form-label fw-bold fs-5",for:"floatingInput"},"確認密碼"),s("input",{type:"password",class:"form-control",id:"floatingInput"})])],-1)),s("div",A,[s("div",F,[l[18]||(l[18]=s("label",{class:"form-label fw-bold fs-5",for:"floatingInput"},"對接業務",-1)),e(s("select",{"onUpdate:modelValue":l[8]||(l[8]=t=>o.value.businessLiaison=t),class:"form-select"},l[17]||(l[17]=[s("option",{selected:""},"業務",-1),s("option",{value:"Sherry"},"Sherry",-1),s("option",{value:"Eileen"},"Eileen",-1),s("option",{value:"Billy"},"Billy",-1),s("option",{value:"Luke"},"Luke",-1)]),512),[[x,o.value.businessLiaison]])])]),s("div",{class:"col-12 align-content-end"},[s("button",{type:"button",onClick:m,class:"btn btn-primary w-100 mb-4"}," 註冊 ")])]),_:1}),s("p",J,[l[21]||(l[21]=u(" 已經有帳號？ ")),i(w(V),{to:"/users/signIn",class:""},{default:d(()=>l[20]||(l[20]=[u(" 登入 ")])),_:1})])])])}}},Q=v(K,[["__scopeId","data-v-602add07"]]);export{Q as default};