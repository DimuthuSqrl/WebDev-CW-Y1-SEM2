// js for the Ask us page

var sname, phone, email, subject, details;



sname = document.getElementById("name").value;
email = document.getElementById("email").value;
phone = document.getElementById("phone").value;
details = document.getElementById("comments-box").value;

var element = document.getElementById("reservation-form");

var divEl = document.getElementById("written-query");

// function to view query
function viewQuery() {
    // retrieve the values of the elements
    sname = document.getElementById("name").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    details = document.getElementById("comments-box").value;

    var subjectArr = document.getElementsByName("theme");
    for (var i = 0; i < subjectArr.length; i++) {
        if (subjectArr[i].checked)
            subject = subjectArr[i].value;
    }

    // validating input
    if (!isInvalid()) {
        // hiding the form element
        element = document.getElementById("reservation-form");
        element.classList.add("none");

        //displaying the query in a div
        divEl = document.getElementById("written-query");
        divEl.classList.remove("none");
        
        //concatenating the input from the fields

        document.getElementById("name-given").innerHTML = sname;
        document.getElementById("email-given").innerHTML = email;
        document.getElementById("number-given").innerHTML = phone;
        document.getElementById("subject").innerHTML = subject;
        document.getElementById("details").innerHTML = details;

    }
}


// validate input function
function isInvalid() {
    invalid = false;
    if (subject == undefined) {
        alert("please select the subject of the query!");
        invalid = true;
    }
    if (sname == '') {
        alert("Pleas fill your name!");
        invalid = true;
    }

    // for the phone number validate that this a valid phone number or .... create a functions
    if (phone == '') {
        alert("please fill in your phone number!");
        invalid = true;
    }

    if (!validateEmail(email)) {
        alert("please check you email address!");
        invalid = true;
    }

    if (details == '') {
        alert("please enter the query details!")
        invalid = true;
    }
    return invalid;
}


// function to validate email address
function validateEmail(email) {
    var valid = true;
	if (email == "") {
        valid = false;
	}
    else if (email.includes("@") == false) {
        valid = false;
    }
    return valid;
}

// function to validate phone number

function editForm(){
    // hide the the results show the form back
    console.log("this btn is working")
    element.classList.remove("none");
    divEl.classList.add("none");

}

function sendForm(){
    //re load the page so the so the form is empty and the user is allowed to enter new details in new query
    document.getElementById("submit-btn");
    document.write("Query Sent");
    setTimeout("location.reload()",3000);
}