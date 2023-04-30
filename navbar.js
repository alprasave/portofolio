const menuNavs = document.querySelectorAll('.menu-nav');

menuNavs.forEach(function(menuNav) {
  menuNav.addEventListener('mouseover', function() {
    menuNav.classList.add('hovered');
  });

  menuNav.addEventListener('mouseout', function() {
    menuNav.classList.remove('hovered');
  });
});
