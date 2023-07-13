function showResult(){
    event.preventDefault();
    let percentage = document.getElementById("userValue").value;
    
    if(percentage >= 80 && percentage <= 100){
        document.getElementById('result').innerHTML = "Congratulations!!! <br> you are Pass in Merrit " + '<br> Your percentage is ' + percentage + '%';
    }
    else if (percentage >= 60 && percentage <= 79){
        document.getElementById('result').innerHTML = "Congratulations!!! <br> you are Pass in 1 <sup> st </sup> class" + '<br>Your percentage is ' + percentage + '%';
    }
    else if (percentage >= 45 && percentage <= 59) {
        document.getElementById('result').innerHTML = "Congratulations!!! <br> you are Pass in 2 <sup> nd </sup> class" + '<br>Your percentage is ' + percentage + '%';
    }
    else if (percentage >= 35 && percentage <= 44) {
        document.getElementById('result').innerHTML = "Congratulations!!! <br> you are Pass" + '<br> Your percentage is ' + percentage + '%';
    }
    else if (percentage <= 34 ){
        document.getElementById('result').innerHTML = "Sorry !!! <br> you are Failed" + '<br> Your percentage is ' + percentage + '% <br> Work Hard Again' ;
    }
    else{
        document.getElementById('result').innerHTML = "You Enter Invalid Percentages "  + percentage + '% <br> Please enter a valid percentage under the 100%';
    }
}