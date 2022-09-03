let diagonal = 9 * 1.414;
document.getElementById('diagonal').innerHTML = "9 * 1.414=" + diagonal;

let s = ((5+6+7)/2)
let area = Math.sqrt(s * ((s-5)*(s-6)*(s-7)));
document.getElementById('area').innerHTML = "Area ="+area;

let circumference = 2 * Math.PI*4;
document.getElementById('circumference').innerHTML = "2πr (radius:4) =" + circumference; 


let circleArea = Math.pow( Math.PI * 4,2);
document.getElementById('circleArea').innerHTML = circleArea;

function largerNumbers(a,b){
    document.getElementById('largerNumBut').onclick = function(){
        a = document.getElementById('number1').value;
        b = document.getElementById('number2').value;
        console.log(a);
        console.log(b);

        if(a>b){
            alert(a + "is the larger number");
            

        }
        if(b>a){
            alert(b + "is the larger number");
        } else{
            alert("There is no larger number");

        }

    }
}

    function iCheck(a){
        document.getElementById('submit').onclick = function(){
            a= document.getElementById("integer").value;
            integerDivide = a%2;
            if(integerDivide == 0){
                alert(a + " is an even number");

            }else{
                alert(a + " is an odd number");

            }

        }


    }




largerNumbers();
iCheck();

