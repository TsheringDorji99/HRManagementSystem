import { showAlert } from "./alert.js";
export const register = async (name, employee_id, gender, dob, designation, department, appointment_date) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:4001/api/v1/users/signup',
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

const allCarts = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: 'http://localhost:4001/api/v1/users'
        })
        displayCarts(res.data)

    } catch (err) {
        console.log(err)
    }
}

allCarts()

const displayCarts = (image) => {
    var arr = image.data
    var table = $('#example').DataTable();
    table.clear();
    for (let i = 0; i < arr.length; i++) {
        var element = arr[i]

        var newRow = $('<tr></tr>');
        newRow.append(`<td>${element.name}</td>`);
        newRow.append(`<td>${element.employee_id}</td>`);
        newRow.append(`<td>${element.gender}</td>`);
        newRow.append(`<td>${element.dob}</td>`);
        newRow.append(`<td>${element.designation}</td>`);
        newRow.append(`<td>${element.department}</td>`);
        newRow.append(`<td>${element.appointment_date}</td>`);
        var action = `<a class="delete-action" data-id="${element._id}"><i class="fa fa-trash"></i></a><br>
                        <a class="update-action" data-id="${element._id}"><i class="fa fa-edit"></i></a>`
        newRow.append(`<td>${action}</td>`);


        table.row.add(newRow)

        // var card = document.querySelector('.table1').cloneNode(true)
        // var el1 = card.querySelector('.name')
        // var el2 = card.querySelector('.EmployeeID')
        // var el3 = card.querySelector('.Gender')
        // var el4 = card.querySelector('.DOB')
        // var el5 = card.querySelector('.Designation')
        // var el6 = card.querySelector('.Department')
        // var el7 = card.querySelector('.AppointmentDate')
        // var deleteItem = card.querySelector('.delete')

        // const element = arr[i]
        // el1.innerHTML = '' + element.name
        // el2.innerHTML = '' + element.employee_id
        // el3.innerHTML = '' + element.gender
        // el4.innerHTML = '' + element.dob
        // el5.innerHTML = '' + element.designation
        // el6.innerHTML = '' + element.department
        // el7.innerHTML = '' + element.appointment_date


        // deleteItem.addEventListener('click', callit(element._id))
        // console.log("elementID", element._id)

        // var card2 = document.querySelector('.table1')

        // card2.insertAdjacentElement('afterend', card)
    }
    table.draw();
    $('.delete-action').on('click', function() {
        var id = $(this).attr('data-id');
        callit(id)
        
      });
  
      // Update action event listener
      $('.update-action').on('click', function() {
        var id = $(this).attr('data-id');
        /*get the edit page and get the userId using localStorage.getItem("userId")
        and use this id to edit the user detail*/
        localStorage.setItem('userId', id)
        console.log(id)
        // this will take to the edit page just rememember to to pass the correct route to edit page
        location.assign('/popup.html')
      });
    // document.querySelector('.table1').remove()
}

const callit = async(somevar) => {
    // return (e) => {
        try {
            const res = await axios({
                method: 'DELETE',
                url: 'http://localhost:4001/api/v1/users/' + somevar,

            })
            if (res.data.status === 'success') {
                location.reload(true)
            }
        } catch (err) {
            showAlert("err", "This is error", err)
        }
    // }
}
