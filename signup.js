"use strict";
const containerEl = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
registerBtn.addEventListener("click", () =>
  containerEl.classList.add("active"),
);
loginBtn.addEventListener("click", () =>
  containerEl.classList.remove("active"),
);

function validateForm() {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "") {
    alert("Please enter your name.");
    return false;
  }

  if (email === "") {
    alert("Please enter your email.");
    return false;
  }

  if (!email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (password === "") {
    alert("Please enter a password.");
    return false;
  }

  return true;
}
function validateForms() {
  const email = document.getElementById("email-new").value.trim();
  const password = document.getElementById("passwords").value.trim();
  if (email === "") {
    alert("Please enter your email.");
    return false;
  }

  if (!email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (password === "") {
    alert("Please enter a password.");
    return false;
  }

  return true;
}
