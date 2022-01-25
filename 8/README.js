window.addEventListener("DOMContentLoaded", function () {
    var email = document.getElementById("email");
    email.oninput = save;
    var nick = document.getElementById("nick");
    nick.oninput = save;
    var anotherInput = document.getElementById("anotherInput");
    anotherInput.oninput = save;
    var check = document.getElementById("check");
    check.onchange = save;

    email.value = localStorage.getItem("email");
    nick.value = localStorage.getItem("nick");
    anotherInput.value = localStorage.getItem("anotherInput");
    var q = localStorage.getItem("check");
    if (q==1) {
        check.checked = true;
    }
    if (q==0){
        check.checked = false;
    }
});

function save(){
  localStorage.setItem("email", email.value);
  localStorage.setItem("nick", nick.value);
  localStorage.setItem("anotherInput", anotherInput.value);
  if (check1.checked) {
      localStorage.setItem("check",1);
  }
  else {
      localStorage.setItem("check",0);
  }

}
$(function(){
