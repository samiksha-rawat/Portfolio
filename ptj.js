
  // SHOW MENU
  const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

  // Open menu
  if(navToggle){
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

  // Close menu
  if(navClose){
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }

  // Close menu when clicking a link (mobile)
  const navLink = document.querySelectorAll('.nav__link');

  navLink.forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  }));

