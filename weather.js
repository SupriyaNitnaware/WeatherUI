
// function validate()
// {
//     var b = document.getElementById("city").value;

//     console.log("city is "+b);
// }

function abc(){

    const xttp=new XMLHttpRequest();
    
    XMLHttpRequest.onload=function(){
    
    console.log(this.responseText);// response send by server
    
    renderData(this.responseText);
    
    }
    
    xttp.open("GET","https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={8567faa1b4c669eee96916622d3883e4}",true); // request by a client
    
    // url
    
    xttp.send();
    
}
