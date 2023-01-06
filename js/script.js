const sidebarMenuButton = document.querySelector('.gnb-icon-button')

const sidebar = document.querySelector('.sidebar')

const sidebarOverlay = document.querySelector('.overlay')

function openSidebar() {
  sidebar.classList.add('is-active');
  sidebarOverlay.classList.add('is-active');
}

sidebarMenuButton.addEventListener('click', openSidebar);

function closeSidebar() {
  sidebar.classList.remove('is-active');
  sidebarOverlay.classList.remove('is-active');
}

sidebarOverlay.addEventListener('click', closeSidebar);

const sidebarMenuButtonList = document.querySelectorAll('.sidebar-menu-button')

function toggleSidebarMenu() {
  const sidebarMenu = this.parentNode;
  sidebarMenu.classList.toggle('is-open');
}

sidebarMenuButtonList.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', toggleSidebarMenu);
})