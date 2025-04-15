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
  
  // Login and signup
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
  
// my reports
  const form = document.getElementById('searchForm');
  const nameInput = document.getElementById('nameInput');
  const mobileInput = document.getElementById('mobileInput');
  const tableBody = document.getElementById('reportTableBody');

  let reportData = [
    { name: "Aditi Sharma", mobile: "9876543210", report: "Blood Test", date: "2025-04-01" },
    { name: "Ravi Kumar", mobile: "9823456789", report: "X-Ray", date: "2025-03-30" },
    { name: "Meera Joshi", mobile: "9834567890", report: "MRI", date: "2025-04-10" },
    { name: "Anil Verma", mobile: "9812345678", report: "CT Scan", date: "2025-04-12" },
    { name: "Preeti Nair", mobile: "9809876543", report: "ECG", date: "2025-04-05" },
    { name: "Suman Rao", mobile: "9876567890", report: "Ultrasound", date: "2025-04-02" },
    { name: "Vikas Yadav", mobile: "9876501234", report: "CBC", date: "2025-04-07" },
    { name: "Manisha Kapoor", mobile: "9876549876", report: "Thyroid", date: "2025-04-08" },
    { name: "Rohit Sen", mobile: "9812341234", report: "Liver Test", date: "2024-04-03" },
    { name: "Shreya Patel", mobile: "9843471234", report: "X-Ray", date: "2023-04-11" },
    { name: "Shruti Sharma", mobile: "9844571234", report: "ECG", date: "2024-04-11" },
    { name: "Sneha Das", mobile: "9867571234", report: "MRI", date: "2023-04-11" },
    { name: "Sneh Rao", mobile: "9845671234", report: "Uric Acid", date: "2023-04-11" },
    { name: "Litton Das", mobile: "9823171234", report: "CBC", date: "2024-04-11" }
  ];

  function renderReports(data) {
    tableBody.innerHTML = '';
    data.forEach(r => {
      const row = `<tr data-name="${r.name}" data-mobile="${r.mobile}">
        <td>${r.name}</td>
        <td>${r.mobile}</td>
        <td>${r.report}</td>
        <td>${r.date}</td>
        <td><button class="btn btn-sm btn-primary">Download</button></td>
      </tr>`;
      tableBody.innerHTML += row;
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = nameInput.value.toLowerCase();
    const mobile = mobileInput.value;

    const filtered = reportData.filter(r => {
      return (
        (!name || r.name.toLowerCase().includes(name)) &&
        (!mobile || r.mobile === mobile)
      );
    });
    renderReports(filtered);
  });

  tableBody.addEventListener('click', e => {
    if (e.target.classList.contains('btn-primary')) {
      alert('Report downloaded successfully.');
    }
  });

  function updateReports() {
    const newReport = {
      name: `Patient ${Math.floor(Math.random() * 1000)}`,
      mobile: `98${Math.floor(10000000 + Math.random() * 89999999)}`,
      report: ["Blood Test", "X-Ray", "MRI", "CT Scan", "ECG", "CBC", "Thyroid"][Math.floor(Math.random() * 7)],
      date: new Date().toISOString().split('T')[0]
    };
    reportData.unshift(newReport);
    if (reportData.length > 20) reportData.pop();
    renderReports(reportData);
  }

  setInterval(updateReports, 10000);

  // Initial render
  renderReports(reportData);