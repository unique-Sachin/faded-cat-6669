let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  setTimeout(() => {
    window.location.href = "otp.html";
  }, 1000);
  let mobileNumber = document.querySelector("#mobileNumber").value;
  localStorage.setItem("signupNumber", mobileNumber);
});

form.addEventListener("input", signup_Fun);
function signup_Fun() {
  // here mobileNumber is the ID of input tag and signup_button is the ID of submit button
  if (mobileNumber.value.length == 10) {
    signup_button.style.cursor = "pointer";
    signup_button.style.backgroundColor = "rgb(128, 53, 194)";
    signup_button.style.border = "none";
    signup_button.style.color = "white";
    signup_button.removeAttribute("disabled");
  } else {
    signup_button.setAttribute("disabled", "disabled");
    signup_button.style.cursor = "not-allowed";
    signup_button.style.backgroundColor = "transparent";
    signup_button.style.color = "#cfcdcb";
    signup_button.style.border = "1px solid #cfcdcb";
  }
}
