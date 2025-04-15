function confirmAppointment() {
    const doctor = document.getElementById('doctor-search').value;
    const department = document.getElementById('department-select').value;
    const location = document.getElementById('location-select').value;
    const date = document.getElementById('appointment-date').value;
    const time = document.getElementById('appointment-time').value;
  
    if (!doctor || department === "Select Department" || location === "Select Location" || !date || time === "Select Time") {
      alert("Please fill in all fields before booking.");
    } else {
      alert(`Appointment confirmed with Dr. ${doctor} in ${department} at ${location} on ${date} at ${time}.`
        + "you will be getting mail or sms shortly");
      
    }
  }
  
  
  document.addEventListener("DOMContentLoaded", function () {
    // Login form submission
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
  
      if (email && password) {
        alert("Login successful! Welcome to Hopewell Healthcare.");
        loginForm.reset();
      } else {
        alert("Please fill in all fields for login.");
      }
    });
  
    // Signup form submission
    const signupForm = document.getElementById("signupForm");
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("signupName").value;
      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;
  
      if (name && email && password) {
        alert("Signup successful! Your account has been created.");
        signupForm.reset();
      } else {
        alert("Please complete all fields for signup.");
      }
    });
  });
  