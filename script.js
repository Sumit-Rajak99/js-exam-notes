const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;
    const department = document.getElementById("department").value;
    const doctor = document.getElementById("doctor").value;
    const appointmentDate =
        document.getElementById("appointmentDate").value;
    const time = document.getElementById("time").value;

    let valid = true;

    // Clear errors
    document.querySelectorAll("small").forEach(function (element) {
        element.textContent = "";
    });

    // Name validation
    if (name === "") {
        document.getElementById("nameError").textContent =
            "Name is required";
        valid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Enter a valid email";
        valid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent =
            "Enter a valid 10 digit phone number";
        valid = false;
    }

    // DOB validation
    if (dob === "") {
        document.getElementById("dobError").textContent =
            "Date of birth is required";
        valid = false;
    }

    // Department validation
    if (department === "") {
        document.getElementById("departmentError").textContent =
            "Please select department";
        valid = false;
    }

    // Doctor validation
    if (doctor === "") {
        document.getElementById("doctorError").textContent =
            "Please select doctor";
        valid = false;
    }

    // Appointment date validation
    if (appointmentDate === "") {
        document.getElementById("dateError").textContent =
            "Please select appointment date";
        valid = false;
    }

    // Time validation
    if (time === "") {
        document.getElementById("timeError").textContent =
            "Please select appointment time";
        valid = false;
    }

    // Stop if invalid
    if (!valid) {
        return;
    }

    // Show success message
    const successMessage =
        document.getElementById("successMessage");

    const appointmentInfo =
        document.getElementById("appointmentInfo");

    appointmentInfo.innerHTML = `
        <strong>Patient:</strong> ${name}<br>
        <strong>Doctor:</strong> ${doctor}<br>
        <strong>Department:</strong> ${department}<br>
        <strong>Date:</strong> ${appointmentDate}<br>
        <strong>Time:</strong> ${time}
    `;

    successMessage.style.display = "block";

    // Save appointment in localStorage
    const appointment = {
        name: name,
        email: email,
        phone: phone,
        dob: dob,
        department: department,
        doctor: doctor,
        appointmentDate: appointmentDate,
        time: time
    };

    localStorage.setItem(
        "doctorAppointment",
        JSON.stringify(appointment)
    );

    // Reset form
    form.reset();
});