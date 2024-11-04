// Basic form handling for student and staff login
document.getElementById('student-login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentId = document.getElementById('student-id').value;
    const studentPassword = document.getElementById('student-password').value;
    alert(`Student ID: ${studentId}, Password: ${studentPassword}`);
});

document.getElementById('staff-login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const staffId = document.getElementById('staff-id').value;
    const staffPassword = document.getElementById('staff-password').value;
    alert(`Staff ID: ${staffId}, Password: ${staffPassword}`);
});
