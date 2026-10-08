/*
  script.js = the BEHAVIOR of the page.
  This is JavaScript. If you know Java or Python, a lot will look familiar,
  but note: variables use "const" (can't be reassigned) or "let" (can be),
  and you don't write types.
*/

// ---------- 1. MOBILE MENU ----------
// Find elements on the page by their id (set in index.html).
// This is called "selecting from the DOM" (Document Object Model).
const menuButton = document.getElementById("menu-button");
const mainNav = document.getElementById("main-nav");

// addEventListener says: "when this thing is clicked, run this function."
menuButton.addEventListener("click", function () {
  // classList.toggle adds the class "open" if it's missing, removes it if present.
  // The CSS in styles.css shows or hides the menu based on that class.
  mainNav.classList.toggle("open");
});

// Close the menu after a nav link is tapped (so it doesn't cover the page).
// querySelectorAll returns a list of every matching element.
const navLinks = mainNav.querySelectorAll("a");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mainNav.classList.remove("open");
  });
});


// ---------- 2. CONTACT FORM ----------
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
  // By default, submitting a form reloads the page. We stop that.
  event.preventDefault();

  // Read what the user typed in the name box.
  const name = document.getElementById("name").value;

  // Right now we just show a thank-you message.
  // LATER: this is where you'd send the data to a server using fetch().
  if (name.trim() === "") {
    formMessage.textContent = "Please enter your name.";
  } else {
    formMessage.textContent = "Thanks, " + name + "! We'll be in touch soon.";
    contactForm.reset();   // clear the form fields
  }
});


// ---------- 3. FOOTER YEAR ----------
// Fills in the current year automatically so you never have to update it.
document.getElementById("year").textContent = new Date().getFullYear();
