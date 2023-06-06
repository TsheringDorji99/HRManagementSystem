import { showAlert } from "./alert.js";
export const register = async (name, employee_id, gender, dob, designation, department, appointment_date) => {
    try {
        const res = await axios({
            method: 'PATCH',
            url: `http://localhost:4001/api/v1/users/${localStorage.getItem('userId')}`,
            data: {
                name,
                employee_id,
                gender,
                dob,
                designation,
                department,
                appointment_date,
            },
        })
        if (res.data.status === 'success') {
            console.log("Account created successfully!")
            showAlert('success', 'Account created successfully!')
        }
    } catch (err) {
        let message =
            typeof err.response !== 'undefined'
                ? err.response.data.message
                : err.message
        showAlert('error', message)
    }
}

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    // Get form values
    var name = document.getElementById('name').value;
    var employeeId = document.getElementById('employeeId').value;
    var gender = document.getElementById('gender').value;
    var dob = document.getElementById('dob').value;
    var designation = document.getElementById('designation').value;
    var department = document.getElementById('department').value;
    var appointmentDate = document.getElementById('appointmentDate').value;

    register(name, employeeId, gender, dob, designation, department, appointmentDate)
    document.getElementById('registrationForm').reset();
});