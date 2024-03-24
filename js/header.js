function sidebarFunc() {
  //!home sidebar start
  const btnOpenSidebar = document.querySelector("#btn-menu");
  const sidebar = document.querySelector("#sidebar");
  const btnCloseSidebar = document.querySelector("#close-sidebar");
  btnOpenSidebar.addEventListener("click", function () {
    sidebar.style.left = "0";
  });
  btnCloseSidebar.addEventListener("click", function () {
    sidebar.style.left = "-100%";
  });
  /*click outside start */
  document.addEventListener("click", function (event) {
    if (
      !event.composedPath().includes(sidebar) &&
      !event.composedPath().includes(btnOpenSidebar)
    ) {
      sidebar.style.left = "-100%";
    }
  });
  /*click outside end */
  //!home sidebar end
}
function serachModalFunc() {
  //search modal start
  const btnOpenSearch = document.querySelector(".search-button");
  const btnCloseSearch = document.querySelector("#close-search");
  const modalSearch = document.querySelector(".modal-search");
  const modalSearchWrapper = document.querySelector(".modal-wrapper");
  btnOpenSearch.addEventListener("click", function () {
    modalSearch.style.visibility = "visible";
    modalSearch.style.opacity = "1";
  });
  btnCloseSearch.addEventListener("click", function () {
    modalSearch.style.visibility = "hidden";
    modalSearch.style.opacity = "0";
  });
  /*click outside start */
  document.addEventListener("click", function (event) {
    if (
      !event.composedPath().includes(modalSearchWrapper) &&
      !event.composedPath().includes(btnOpenSearch)
    ) {
      modalSearch.style.visibility = "hidden";
    }
  });
  /*click outside end*/
  //search modal end
}
function headerFunc(){
    sidebarFunc()
    serachModalFunc()
}
export default headerFunc() 