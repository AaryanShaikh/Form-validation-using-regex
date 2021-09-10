function formValidate() {
  let name = document.forms["refform"]["name"];
  let address = document.forms["refform"]["address"];
  let email = document.forms["refform"]["email"];
  let pass = document.forms["refform"]["pass"];
  let cpass = document.forms["refform"]["cpass"];
  let phno = document.forms["refform"]["phno"];
  let errname = _("name");
  let erraddress = _("address");
  let erremail = _("email");
  let errpass = _("pass");
  let errcpass = _("cpass");
  let errphno = _("phno");

  const rePass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/; //min 8 letters,symbol,uppercase,lowercase,number

  if (name.value.length < 4) {
    errname.textContent = "Atleast 4 characters required!";
    name.focus();
    return false;
  } else {
    errname.textContent = "";
  }

  if (address.value == "") {
    erraddress.textContent = "Address cannot be Empty!";
    address.focus();
    return false;
  } else {
    erraddress.textContent = "";
  }

  if (email.value == "") {
    erremail.textContent = "Email cannot be Empty!";
    email.focus();
    return false;
  } else if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
  ) {
    erremail.textContent = "";
  } else {
    erremail.textContent = "Email is Invalid";
    email.focus();
    return false;
  }

  if (pass.value == "") {
    errpass.textContent = "Password cannot be Empty!";
    pass.focus();
    return false;
  } else if (!rePass.test(pass.value)) {
    errpass.textContent = "Password is Invalid!";
    pass.focus();
    return false;
  } else {
    errpass.textContent = "";
  }

  if (cpass.value == "") {
    errcpass.textContent = "Confirm Password cannot be Empty!";
    cpass.focus();
    return false;
  } else if (!rePass.test(cpass.value)) {
    errcpass.textContent = "Confirm Password is Invalid!";
    cpass.focus();
    return false;
  } else if (pass.value != cpass.value) {
    errcpass.textContent = "Password and Confirm Password don't match!";
    cpass.focus();
    return false;
  } else {
    errcpass.textContent = "";
  }

  if (phno.value == "") {
    errphno.textContent = "Phone Number cannot be empty!";
    phno.focus();
    return false;
  } else {
    return true;
  }
}
function _(id) {
  return document.getElementById(id);
}
