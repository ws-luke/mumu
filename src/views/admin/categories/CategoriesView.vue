<template>
  <div class="container-fluid">
    <div class="row mb-4">
      <div class="col">
        <div class="d-flex align-items-center justify-content-between">
          <div>
            <h2>類別</h2>
            <nav>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item">
                  <router-link to="/admin/dashboard">首頁</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">類別</li>
              </ol>
            </nav>
          </div>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#categoriesModal"
          >
            新增分類
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="p-4">
            <div class="justify-content-between row">
              <div class="mb-2 mb-lg-0 col-lg-4 col-md-6 col-12">
                <form class="d-flex">
                  <input
                    placeholder="搜尋類別"
                    class="form-control"
                    type="search"
                  />
                </form>
              </div>
              <div class="col-lg-2 col-md-4 col-12">
                <select class="form-select">
                  <option value="">狀態</option>
                  <option value="published">已上架</option>
                  <option value="unpublished">未上架</option>
                </select>
              </div>
            </div>
          </div>
          <div class="card-body p-0">
            <table class="table table-borderless align-middle table-hover">
              <thead class="table-light">
                <tr>
                  <th colspan="1">
                    <input class="form-check-input" type="checkbox" />
                  </th>
                  <th colspan="1">名稱</th>
                  <th colspan="1">狀態</th>
                  <th colspan="1"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="1">
                    <input class="form-check-input" type="checkbox" />
                  </td>
                  <td>線材類</td>
                  <td><span class="badge bg-success">已上架</span></td>
                  <td colspan="1" class="text-end">
                    <button
                      class="btn text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#categoriesModal"
                    >
                      編輯</button
                    ><button class="btn text-danger">刪除</button>
                    <button
                      class="btn text-secondary"
                      data-bs-toggle="collapse"
                      data-bs-target="#cableSubMenu"
                      aria-expanded="false"
                      aria-controls="cableSubMenu"
                    >
                      子選單
                    </button>
                  </td>
                </tr>
                <tr id="cableSubMenu" class="collapse">
                  <td colspan="4" class="p-0">
                    <table class="table mb-0 table-hover">
                      <thead class="table-light">
                        <tr>
                          <th colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </th>
                          <th colspan="1">名稱</th>
                          <th colspan="1">狀態</th>
                          <th colspan="1" class="text-end">
                            <button
                              class="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              新增子選單
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </td>
                          <td>USB A – Type C</td>
                          <td><span class="badge bg-success">已上架</span></td>
                          <td colspan="1" class="text-end">
                            <button
                              class="btn text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              編輯
                            </button>
                            <button class="btn text-danger">刪除</button>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </td>
                          <td>USB C – Type C</td>
                          <td><span class="badge bg-success">已上架</span></td>
                          <td colspan="1" class="text-end">
                            <button
                              class="btn text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              編輯
                            </button>
                            <button class="btn text-danger">刪除</button>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </td>
                          <td>USB A – Lightning</td>
                          <td><span class="badge bg-success">已上架</span></td>
                          <td colspan="1" class="text-end">
                            <button
                              class="btn text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              編輯
                            </button>
                            <button class="btn text-danger">刪除</button>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </td>
                          <td>USB C - Lightning</td>
                          <td><span class="badge bg-success">已上架</span></td>
                          <td colspan="1" class="text-end">
                            <button
                              class="btn text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              編輯
                            </button>
                            <button class="btn text-danger">刪除</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input class="form-check-input" type="checkbox" />
                  </td>
                  <td>掛繩類</td>
                  <td><span class="badge bg-success">已上架</span></td>
                  <td colspan="1" class="text-end">
                    <button
                      class="btn text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#categoriesModal"
                    >
                      編輯</button
                    ><button class="btn text-danger">刪除</button>
                    <button
                      class="btn text-secondary"
                      data-bs-toggle="collapse"
                      data-bs-target="#lanyardSubMenu"
                      aria-expanded="false"
                      aria-controls="lanyardSubMenu"
                    >
                      子選單
                    </button>
                  </td>
                </tr>
                <tr id="lanyardSubMenu" class="collapse">
                  <td colspan="4" class="p-0">
                    <table class="table mb-0 table-hover">
                      <thead class="table-light">
                        <tr>
                          <th colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </th>
                          <th colspan="1">名稱</th>
                          <th colspan="1">狀態</th>
                          <th colspan="1" class="text-end">
                            <button
                              class="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              新增子選單
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </td>
                          <td>充電掛繩</td>
                          <td><span class="badge bg-success">已上架</span></td>
                          <td colspan="1" class="text-end">
                            <button
                              class="btn text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              編輯
                            </button>
                            <button class="btn text-danger">刪除</button>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </td>
                          <td>一般掛繩</td>
                          <td><span class="badge bg-success">已上架</span></td>
                          <td colspan="1" class="text-end">
                            <button
                              class="btn text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              編輯
                            </button>
                            <button class="btn text-danger">刪除</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input class="form-check-input" type="checkbox" />
                  </td>
                  <td>手機殼</td>
                  <td><span class="badge bg-success">已上架</span></td>
                  <td colspan="1" class="text-end">
                    <button
                      class="btn text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#categoriesModal"
                    >
                      編輯</button
                    ><button class="btn text-danger">刪除</button>
                    <button
                      class="btn text-secondary"
                      data-bs-toggle="collapse"
                      data-bs-target="#phoneCaseSubMenu"
                      aria-expanded="false"
                      aria-controls="phoneCaseSubMenu"
                    >
                      子選單
                    </button>
                  </td>
                </tr>
                <tr id="phoneCaseSubMenu" class="collapse">
                  <td colspan="4" class="p-0">
                    <table class="table mb-0 table-hover">
                      <thead class="table-light">
                        <tr>
                          <th colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </th>
                          <th colspan="1">名稱</th>
                          <th colspan="1">狀態</th>
                          <th colspan="1" class="text-end">
                            <button
                              class="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              新增子選單
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </td>
                          <td>iphone 14</td>
                          <td><span class="badge bg-success">已上架</span></td>
                          <td colspan="1" class="text-end">
                            <button
                              class="btn text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              編輯
                            </button>
                            <button class="btn text-danger">刪除</button>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </td>
                          <td>iphone 15</td>
                          <td><span class="badge bg-success">已上架</span></td>
                          <td colspan="1" class="text-end">
                            <button
                              class="btn text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              編輯
                            </button>
                            <button class="btn text-danger">刪除</button>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </td>
                          <td>iphone 16</td>
                          <td><span class="badge bg-success">已上架</span></td>
                          <td colspan="1" class="text-end">
                            <button
                              class="btn text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              編輯
                            </button>
                            <button class="btn text-danger">刪除</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input class="form-check-input" type="checkbox" />
                  </td>
                  <td>充電頭</td>
                  <td><span class="badge bg-success">已上架</span></td>
                  <td colspan="1" class="text-end">
                    <button
                      class="btn text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#categoriesModal"
                    >
                      編輯</button
                    ><button class="btn text-danger">刪除</button>
                    <button
                      class="btn text-secondary"
                      data-bs-toggle="collapse"
                      data-bs-target="#chargerSubMenu"
                      aria-expanded="false"
                      aria-controls="chargerSubMenu"
                    >
                      子選單
                    </button>
                  </td>
                </tr>
                <tr id="chargerSubMenu" class="collapse">
                  <td colspan="4" class="p-0">
                    <table class="table mb-0 table-hover">
                      <thead class="table-light">
                        <tr>
                          <th colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </th>
                          <th colspan="1">名稱</th>
                          <th colspan="1">狀態</th>
                          <th colspan="1" class="text-end">
                            <button
                              class="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              新增子選單
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </td>
                          <td>20W</td>
                          <td><span class="badge bg-success">已上架</span></td>
                          <td colspan="1" class="text-end">
                            <button
                              class="btn text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              編輯
                            </button>
                            <button class="btn text-danger">刪除</button>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </td>
                          <td>33W</td>
                          <td><span class="badge bg-success">已上架</span></td>
                          <td colspan="1" class="text-end">
                            <button
                              class="btn text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              編輯
                            </button>
                            <button class="btn text-danger">刪除</button>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </td>
                          <td>65W</td>
                          <td><span class="badge bg-success">已上架</span></td>
                          <td colspan="1" class="text-end">
                            <button
                              class="btn text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              編輯
                            </button>
                            <button class="btn text-danger">刪除</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input class="form-check-input" type="checkbox" />
                  </td>
                  <td>螢幕保護貼</td>
                  <td><span class="badge bg-success">已上架</span></td>
                  <td colspan="1" class="text-end">
                    <button
                      class="btn text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#categoriesModal"
                    >
                      編輯</button
                    ><button class="btn text-danger">刪除</button>
                    <button
                      class="btn text-secondary"
                      data-bs-toggle="collapse"
                      data-bs-target="#screenProtectorSubMenu"
                      aria-expanded="false"
                      aria-controls="screenProtectorSubMenu"
                    >
                      子選單
                    </button>
                  </td>
                </tr>
                <tr id="screenProtectorSubMenu" class="collapse">
                  <td colspan="4" class="p-0">
                    <table class="table mb-0 table-hover">
                      <thead class="table-light">
                        <tr>
                          <th colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </th>
                          <th colspan="1">名稱</th>
                          <th colspan="1">狀態</th>
                          <th colspan="1" class="text-end">
                            <button
                              class="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              新增子選單
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </td>
                          <td>iphone 14</td>
                          <td><span class="badge bg-success">已上架</span></td>
                          <td colspan="1" class="text-end">
                            <button
                              class="btn text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              編輯
                            </button>
                            <button class="btn text-danger">刪除</button>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </td>
                          <td>iphone 15</td>
                          <td><span class="badge bg-success">已上架</span></td>
                          <td colspan="1" class="text-end">
                            <button
                              class="btn text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              編輯
                            </button>
                            <button class="btn text-danger">刪除</button>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </td>
                          <td>iphone 16</td>
                          <td><span class="badge bg-success">已上架</span></td>
                          <td colspan="1" class="text-end">
                            <button
                              class="btn text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              編輯
                            </button>
                            <button class="btn text-danger">刪除</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input class="form-check-input" type="checkbox" />
                  </td>
                  <td>行動電源</td>
                  <td><span class="badge bg-danger">未上架</span></td>
                  <td colspan="1" class="text-end">
                    <button
                      class="btn text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#categoriesModal"
                    >
                      編輯</button
                    ><button class="btn text-danger">刪除</button>
                    <button
                      class="btn text-secondary"
                      data-bs-toggle="collapse"
                      data-bs-target="#powerBankSubMenu"
                      aria-expanded="false"
                      aria-controls="powerBankSubMenu"
                    >
                      子選單
                    </button>
                  </td>
                </tr>
                <tr id="powerBankSubMenu" class="collapse">
                  <td colspan="4" class="p-0">
                    <table class="table mb-0 table-hover">
                      <thead class="table-light">
                        <tr>
                          <th colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </th>
                          <th colspan="1">名稱</th>
                          <th colspan="1">狀態</th>
                          <th colspan="1" class="text-end">
                            <button
                              class="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              新增子選單
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </td>
                          <td>10000mAh</td>
                          <td><span class="badge bg-success">已上架</span></td>
                          <td colspan="1" class="text-end">
                            <button
                              class="btn text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              編輯
                            </button>
                            <button class="btn text-danger">刪除</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input class="form-check-input" type="checkbox" />
                  </td>
                  <td>藍芽耳機</td>
                  <td><span class="badge bg-success">已上架</span></td>
                  <td colspan="1" class="text-end">
                    <button
                      class="btn text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#categoriesModal"
                    >
                      編輯</button
                    ><button class="btn text-danger">刪除</button>
                    <button
                      class="btn text-secondary"
                      data-bs-toggle="collapse"
                      data-bs-target="#bluetoothEarphonesSubMenu"
                      aria-expanded="false"
                      aria-controls="bluetoothEarphonesSubMenu"
                    >
                      子選單
                    </button>
                  </td>
                </tr>
                <tr id="bluetoothEarphonesSubMenu" class="collapse">
                  <td colspan="4" class="p-0">
                    <table class="table mb-0 table-hover">
                      <thead class="table-light">
                        <tr>
                          <th colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </th>
                          <th colspan="1">名稱</th>
                          <th colspan="1">狀態</th>
                          <th colspan="1" class="text-end">
                            <button
                              class="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              新增子選單
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </td>
                          <td>入耳式</td>
                          <td><span class="badge bg-success">已上架</span></td>
                          <td colspan="1" class="text-end">
                            <button
                              class="btn text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              編輯
                            </button>
                            <button class="btn text-danger">刪除</button>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </td>
                          <td>耳罩式</td>
                          <td><span class="badge bg-success">已上架</span></td>
                          <td colspan="1" class="text-end">
                            <button
                              class="btn text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              編輯
                            </button>
                            <button class="btn text-danger">刪除</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input class="form-check-input" type="checkbox" />
                  </td>
                  <td>觸控筆</td>
                  <td><span class="badge bg-success">已上架</span></td>
                  <td colspan="1" class="text-end">
                    <button
                      class="btn text-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#categoriesModal"
                    >
                      編輯</button
                    ><button class="btn text-danger">刪除</button>
                    <button
                      class="btn text-secondary"
                      data-bs-toggle="collapse"
                      data-bs-target="#stylusSubMenu"
                      aria-expanded="false"
                      aria-controls="stylusSubMenu"
                    >
                      子選單
                    </button>
                  </td>
                </tr>
                <tr id="stylusSubMenu" class="collapse">
                  <td colspan="4" class="p-0">
                    <table class="table mb-0 table-hover">
                      <thead class="table-light">
                        <tr>
                          <th colspan="1">
                            <input class="form-check-input" type="checkbox" />
                          </th>
                          <th colspan="1">名稱</th>
                          <th colspan="1">狀態</th>
                          <th colspan="1" class="text-end">
                            <button
                              class="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#submenuModal"
                            >
                              新增子選單
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colspan="4" class="text-center border-0">
                            無資料
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              class="border-top d-md-flex justify-content-between align-items-center p-3"
            >
              <div>顯示1到 10 個項目 （共14 個項目）</div>
              <nav class="mt-2 mt-md-0 navbar navbar-expand">
                <ul class="mb-0 pagination">
                  <li class="page-item mx-1 border-round disabled">
                    <span class="page-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                        />
                      </svg>
                    </span>
                  </li>
                  <li class="page-item mx-1 border-round active">
                    <span class="page-link"
                      >1<span class="visually-hidden">(current)</span></span
                    >
                  </li>
                  <li class="page-item mx-1 border-round">
                    <a class="page-link" role="button" tabindex="0" href="#"
                      >2</a
                    >
                  </li>
                  <li class="page-item mx-1 border-round">
                    <a class="page-link" role="button" tabindex="0" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 分類視窗 -->
    <div
      class="modal fade"
      id="categoriesModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">新增類別</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="mb-4 col-12">
                <label class="form-label">類別名稱</label
                ><input placeholder="" class="form-control" type="text" />
              </div>
              <div class="mb-4 col-12">
                <label class="form-label">排序</label
                ><input placeholder="" class="form-control" type="number" />
              </div>
              <div class="mb-4 col-12">
                <label class="form-label">狀態</label>
                <select class="form-select">
                  <option selected>選擇</option>
                  <option value="上架">上架</option>
                  <option value="下架">下架</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">儲存</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 子選單視窗 -->
    <div
      class="modal fade"
      id="submenuModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">新增子選單</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="mb-4 col-12">
                <label class="form-label">名稱</label
                ><input placeholder="" class="form-control" type="text" />
              </div>
              <div class="mb-4 col-12">
                <label class="form-label">排序</label
                ><input placeholder="" class="form-control" type="number" />
              </div>
              <div class="mb-4 col-12">
                <label class="form-label">狀態</label>
                <select class="form-select">
                  <option selected>選擇</option>
                  <option value="上架">上架</option>
                  <option value="下架">下架</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">儲存</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
