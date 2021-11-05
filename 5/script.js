
         function clickA() {
         let f1 = document.getElementsByName("field1");
         let f2 = document.getElementsByName("field2");
         let r = document.getElementById("result");
         r.innerHTML = f1[0].value * f2[0].value;
         if ((f2[0].value == '0') || (f1[0].value == '0')) {
             r.innerHTML = "error";
             alert(" Недопустимые значения ");
         }
         return false;
     }
