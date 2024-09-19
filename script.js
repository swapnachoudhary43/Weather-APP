let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("inp") ;
let API_key = "6d83156e4e40ca97d0c6924b832fe00c";

const data = async function(search){
   let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
   console.log(getData);
   let jsonData =await getData.json();
   console.log(jsonData);
   console.log(jsonData.name);

   if(jsonData.cod == 400){
       alert("Please Enter Location")
       image.src="error1.png";
       city.innerHTML="";
       temp.innerHTML="";
       type.innerHTML="";
   }
   if(jsonData.cod == 404){
       alert("Please Enter Write Location")
       image.src="error2.png";
       city.innerHTML=search;
       temp.innerHTML="";
       type.innerHTML="";
   }
   city.innerHTML=search;
   temp.innerHTML=Math.floor(jsonData.main.temp)+"°C";
   type.innerHTML=jsonData.weather[0].main;
 const container = document.querySelector('.container');

   if (type.innerHTML == "Clouds") {
       container.style.backgroundImage = "url('images/cloud.png')";
   } else if (type.innerHTML == "Clear") {
       container.style.backgroundImage = "url('images/clear.png')";
   } else if (type.innerHTML == "Rain") {
       container.style.backgroundImage = "url('images/rain.png')";
   } else if (type.innerHTML == "Snow") {
       container.style.backgroundImage = "url('images/snow.png')";
   } else if (type.innerHTML == "Haze") {
       container.style.backgroundImage = "url('images/haze.png')";
   } else if (type.innerHTML == "Storm") {
       container.style.backgroundImage = "url('images/storm.png')";
   }
   
   input.value=""
}

function myFun(){
   search=input.value;
   data(search)
}
