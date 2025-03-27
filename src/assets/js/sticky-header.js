export default function stickyHeader() {

  const headerEl = document.querySelector('.site-header');
  if (!headerEl) return;

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // If near the top of the page, always show the header
    if (currentScrollY < 30) {
      headerEl.classList.remove('-translate-y-80', 'bg-white');
    z
    }
    // If scrolling down and past the 30px threshold, hide the header
    else if (currentScrollY > lastScrollY) {
      headerEl.classList.add('-translate-y-80');
      headerEl.classList.remove('bg-white');

    }
    // If scrolling up, show the header again
    else if (currentScrollY < lastScrollY) {
      headerEl.classList.remove('-translate-y-80');
      headerEl.classList.add('bg-white');
    }
    
    lastScrollY = currentScrollY;
  });

	// const hamburgerBtn = document.getElementById("hamburger-menu");
  // const mobileMenuEl = document.getElementById("mobile-menu");
  // if (!hamburgerBtn || !mobileMenuEl) return;

  // // Helper function to set the menu state
  // function setMenuState(isOpen) {
  //   if (isOpen) {
  //     mobileMenuEl.classList.remove("h-0");
  //     mobileMenuEl.classList.add("h-[100vh]");
  //   } else {
  //     mobileMenuEl.classList.remove("h-[100vh]");
  //     mobileMenuEl.classList.add("h-0");
  //   }
  //   console.log("Mobile menu classes:", mobileMenuEl.className);
  // }

  // // Toggle function: toggles the current state
  // function toggleMenu() {
  //   const isOpen = mobileMenuEl.classList.contains("h-[100vh]");
  //   setMenuState(!isOpen);
  // }

  // // Attach the toggle function to the hamburger button
  // hamburgerBtn.addEventListener("click", toggleMenu);

  // // Attach click handlers to all mobile menu <a> items to close the menu
  // const mobileMenuItems = mobileMenuEl.querySelectorAll("li a");
  // mobileMenuItems.forEach(item => {
  //   item.addEventListener("click", () => {
  //     if (mobileMenuEl.classList.contains("h-[100vh]")) {
  //       setMenuState(false);
  //     }
  //   });
  // });
}