import{_ as a,c,a as o,d as e,w as t,b as n,r as d,o as r,e as i}from"./index-COB-q4dU.js";const b={},m={class:"container-fluid"},v={class:"row mb-4"},p={class:"col d-flex justify-content-between align-items-center"},u={class:"breadcrumb mb-0"},f={class:"breadcrumb-item"},h={class:"breadcrumb-item active","aria-current":"page"};function y(g,l){const s=d("router-link");return r(),c("div",m,[o("div",v,[o("div",p,[o("div",null,[l[3]||(l[3]=o("h2",null,"新增產品",-1)),o("nav",null,[o("ol",u,[o("li",f,[e(s,{to:"/admin/dashboard"},{default:t(()=>l[0]||(l[0]=[i("首頁")])),_:1})]),o("li",h,[e(s,{to:"/admin/products"},{default:t(()=>l[1]||(l[1]=[i("產品")])),_:1})]),l[2]||(l[2]=o("li",{class:"breadcrumb-item active","aria-current":"page"}," 新增產品 ",-1))])])]),e(s,{to:"/admin/products",class:"btn btn-primary"},{default:t(()=>l[4]||(l[4]=[i("回訂單列表")])),_:1})])]),l[5]||(l[5]=n('<div class="row"><div class="col-12 col-lg-8"><div class="card mb-4"><div class="card-body"><h4 class="h5 mb-4">產品資訊</h4><div class="row"><div class="mb-3 col-lg-6"><label class="form-label">產品名稱</label><input placeholder="產品名稱" class="form-control" type="text"></div><div class="mb-3 col-lg-6"><label class="form-label">重量</label><input placeholder="重量" class="form-control" type="number"></div><div class="mb-3 col-lg-6"><label class="form-label">材質</label><input placeholder="材質" class="form-control" type="text"></div><div class="mb-3 col-lg-6"><label class="form-label">保固</label><input placeholder="保固" class="form-control" type="text"></div><div class="mb-3 mt-4 col-lg-12"><h4 class="mb-4 h5">產品圖片</h4><img class="productImg img-fluid mb-3" src="" alt=""><input class="form-control" type="file" id="fileUploader" accept="image/*" multiple></div></div></div></div><div class="card mb-4"><div class="card-body"><div class="d-flex align-items-center justify-content-between mb-3"><h4 class="mb-0 h5">顏色</h4><button type="button" class="btn btn-primary">新增</button></div><div class="row mb-3"><div class="col-5"><input placeholder="顏色" class="form-control" type="text"></div><div class="col-5"><input placeholder="數量" class="form-control" type="number"></div><div class="col-2"><button type="button" class="btn btn-outline-danger w-100"> 刪除 </button></div></div></div></div><div class="card mb-4"><div class="card-body"><div class="d-flex align-items-center justify-content-between mb-3"><h4 class="mb-0 h5">規格</h4><button type="button" class="btn btn-primary">新增</button></div><div class="row mb-3"><div class="col-5"><input placeholder="規格" class="form-control" type="text"></div><div class="col-5"><input placeholder="數量" class="form-control" type="number"></div><div class="col-2"><button type="button" class="btn btn-outline-danger w-100"> 刪除 </button></div></div></div></div></div><div class="col-12 col-lg-4"><div class="card mb-4"><div class="card-body"><h4 class="mb-4 h5">產品類別</h4><div class="mb-3 col"><label class="form-label">產品類別</label><select class="form-select"><option>產品類別</option><option value="線材類">線材類</option><option value="掛繩類">掛繩類</option><option value="手機殼">手機殼</option><option value="充電頭">充電頭</option><option value="螢幕保護貼">螢幕保護貼</option><option value="行動電源">行動電源</option><option value="藍芽耳機">藍芽耳機</option><option value="觸控筆">觸控筆</option></select></div><div class="mb-3 col"><label class="form-label">子類別</label><select class="form-select"><option>子類別</option><option value="USB A – Type C">USB A – Type C</option><option value="USB C – Type C">USB C – Type C</option><option value="USB A – Lightning">USB A – Lightning</option><option value="USB C - Lightning">USB C - Lightning</option></select></div></div></div><div class="card mb-4"><div class="card-body"><div class="form-check form-switch mb-3"><input id="flexSwitchStock" class="form-check-input" type="checkbox" checked=""><label for="flexSwitchStock" class="form-check-label">有庫存</label></div><div><div class="mb-3"><label class="form-label">產品編號</label><input placeholder="輸入產品編號" class="form-control" type="text"></div><div class="mb-3"><label class="form-label">產品庫存數量</label><input placeholder="輸入產品庫存數量" class="form-control" type="number"></div><div class="mb-3"><label class="form-label">狀態</label><br><div class="form-check form-check-inline"><input id="inlineRadio1" class="form-check-input" type="radio" name="inlineRadioOptions"><label title="" for="inlineRadio1" class="form-check-label">上架</label></div><div class="form-check form-check-inline"><input id="inlineRadio2" class="form-check-input" type="radio" name="inlineRadioOptions"><label title="" for="inlineRadio2" class="form-check-label">下架</label></div></div></div></div></div><div class="card mb-4"><div class="card-body"><h4 class="mb-4 h5">產品價格</h4><div class="mb-3"><label class="form-label">原價</label><input placeholder="" class="form-control" type="number"></div><div class="mb-3"><label class="form-label">特價</label><input placeholder="" class="form-control" type="number"></div></div></div><button type="button" class="btn btn-success w-100">儲存</button></div></div>',1))])}const w=a(b,[["render",y]]);export{w as default};