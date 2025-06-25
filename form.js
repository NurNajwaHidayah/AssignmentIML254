function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let comment = document.getElementById("comment").value.trim();
  let errorMsg = document.getElementById("errorMsg");

  if (name === "" || email === "") {
    errorMsg.textContent = "Please enter your name and email.";
    return false;
  }

  if (!email.includes("@")) {
    errorMsg.textContent = "Please enter a valid email address.";
    return false;
  }

  errorMsg.textContent = "";
  alert("Thank you, " + name + "! Your form has been submitted.");
  return true;
}
