<script>function clickA() {
         let a1 = document.getElementsByName("field1");
         let a2 = document.getElementsByName("field2");
         let b = document.getElementById("result");
         b.innerHTML = a1[0].value * a2[0].value;
         if ((a2[0].value == '0') || (a1[0].value == '0')) {
             b.innerHTML = "error";
             alert(" Недопустимые значения ");
         }
         return false;
     }</script>