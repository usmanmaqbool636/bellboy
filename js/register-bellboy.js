function validateForm() {
    var name = document.forms["registerBellboy"]["name"].value;
    var email = document.forms["registerBellboy"]["email"].value;
    var contactNo = document.forms["registerBellboy"]["contactNo"].value;
    var description = document.forms["registerBellboy"]["description"].value;
    // var modal = document.getElementById("exampleModalCenter");
    // modal.classList.remove("show");
    document.getElementById("submitbutton")[0].setAttribute("data-dismiss", "modal");
    // data-dismiss="modal"
}