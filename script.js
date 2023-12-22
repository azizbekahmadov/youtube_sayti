const menuBtn = document.getElementById("menu_btn");
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("main")

function toggleSidebar (event) {
  content.classList.toggle('extend')
  sidebar.classList.toggle('hidden')
}

menuBtn.addEventListener("click", toggleSidebar);
