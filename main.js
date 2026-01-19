const API_URL = "https://script.google.com/macros/s/AKfycbzY2fyc4hNN6haGrXGnba73MhFn4_mDap1z5pyiN2-d98bxWMQHmQIj8X6J5STbnNgc_A/exec";

// Show / Hide Sections
function showSignup() {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("signupBox").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("signupBox").classList.add("hidden");
  document.getElementById("forgotBox").classList.add("hidden");
  document.getElementById("loginBox").classList.remove("hidden");
}

function showForgot() {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("forgotBox").classList.remove("hidden");
}

// ================= SIGN UP =================
function signup() {
  const data = {
    action: "signup",
    fullName: fullName.value,
    email: email.value,
    mobile: mobile.value,
    password: password.value,
    address: address.value
  };

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(msg => {
    alert(msg);
    showLogin();
  });
}

// ================= LOGIN =================
function login() {
  const data = {
    action: "login",
    mobile: loginMobile.value,
    password: loginPassword.value
  };

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(msg => {
    if (msg.includes("successful")) {
      // Redirect to Home Page
      window.location.href = "home.html";
    } else {
      alert(msg);
    }
  });
}

// ================= FORGOT PASSWORD =================
function sendUniqueId() {
  const data = {
    action: "forgot",
    mobile: forgotMobile.value
  };

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(msg => alert(msg));
}

// ================= VERIFY UNIQUE ID =================
function verifyUniqueId() {
  const data = {
    action: "verify",
    mobile: forgotMobile.value,
    uniqueId: uniqueIdInput.value
  };

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(msg => {
    if (msg.includes("successful")) {
      window.location.href = "home.html";
    } else {
      alert(msg);
    }
  });
}
