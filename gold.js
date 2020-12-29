
let target=$(".target");
let squareArray=[document.querySelectorAll(".square")]


$(document).ready(function(){
    $(".twelve").click(function(){
        $(".twelve").append(target)
        
        
        for(let i=0;i<squareArray.length;i++){
            if((i==11) || (i==12)||(i==3)||(i==10) ){
                $(squareArray[i]).css("background","green")
            }
            
            else { $(squareArray[i]).css("background","grey")
        }
    }
    $(squareArray[12]).css("border-color","black")
    
    function checkAdult(age) {
        return age >= target;
      }
    
    console.log(squareArray.indexOf(target));

    document.getElementById("demo").innerHTML = squareArray.findIndex(checkAdult);
   
        
    });
});


