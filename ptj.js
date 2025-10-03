
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

 const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      status.textContent = "✅ Thank you! Your message has been sent successfully.";
      status.className = "success";
      form.reset();
    } else {
      status.textContent = "❌ Oops! Something went wrong. Please try again.";
      status.className = "error";
    }
  });
