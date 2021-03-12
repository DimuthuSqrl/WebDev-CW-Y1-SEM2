// js for the Ask us page
var element = document.getElementById("reservation-form");
var sname, phone, email, subject, details;
function viewQuery(){
    element.classList.add("none");
    sname = document.getElementById("name").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    var subjectArr = document.getElementsByName("theme");
    console.log(typeof subjectArr);
    for(var i = 0; i < subjectArr.length; i++) { 
        if(subjectArr[i].checked) 
        subject = subjectArr[i].value;
    }   
    details = document.getElementById("comments-box").value;
    console.log(sname + " " + phone + " " + email +  " " + subject +  " " + details);
}