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
  
  