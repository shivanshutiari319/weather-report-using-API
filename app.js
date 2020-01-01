window.addEventListener('load',()=>{
let long,lat;
let temperatureDescription=document.querySelector(".temperature-description");
let temperatureDegree=document.querySelector(".temperature-degree");
let temperatureLocation=document.querySelector(".location-timezone");

if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(position =>{
    long=position.coords.longitude;
    lat=position.coords.latitude;

    const proxy='https://cors-anywhere.herokuapp.com/';
    const api=`${proxy}https://api.darksky.net/forecast/ab8b411fe7409742d9ce605370037f59/${lat},${long}`;
   fetch(api)
     .then(response =>{return response.json();})
      .then(data => {
          console.log(data);
        const {temperature,summary} = data.currently;

        temperatureDegree.textContent =temperature;
        temperatureDescription.textContent=summary;
        temperatureLocation.textContent=data.timezone;
    
    });
     



});


}else console.log('check your net connectio');




});
