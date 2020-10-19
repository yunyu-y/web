
 
        // var a = document.getElementById("btn");
        // a.onclick = function bm(){
        //     var b = document.getElementById("cm").value;
        //     var c = document.getElementById("kg").value;
        //     var bmi = c/((0.01*b)*(0.01*b))
        //     document.getElementById("bmi").value = bmi;
        //     return bmi;
        // }

        // var z = bm();
        // document.write(z);


window.addEventListener("load", init, false);

function init(){
        var a = document.getElementById("btn");

        a.onclick = function bm(){

            var b = document.getElementById("cm").value;
            var c = document.getElementById("kg").value;
            var bmi = c/((0.01*b)*(0.01*b))
            document.getElementById("bmi").value = bmi;

            if (bmi >= 35) {
                document.getElementById("now").value = "重度肥胖";  
            } else if ( bmi >= 30) {
                document.getElementById("now").value = "中度肥胖";  
            } else if ( bmi >= 27) {
                document.getElementById("now").value = "輕度肥胖";  
            } else if ( bmi >= 24) {
                document.getElementById("now").value = "過重";  
            } else if ( bmi >= 18.5) {
                document.getElementById("now").value = "正常";  
            } else{
                document.getElementById("now").value = "體重過輕";  
            }

        }

        var j = document.getElementById("clear");

        j.onclick = function cl(){
            document.getElementById("cm").value = "";
            document.getElementById("kg").value = "";
            document.getElementById("bmi").value = "";
            document.getElementById("now").value = "";
        }    
}


  

