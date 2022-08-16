const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0a50b04f25mshd1fe4e1b692f0f7p1623e2jsndc7d0d43ce9e',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};

async function getCurrentWeather(city) {
	    
        
	    const response = await fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`, options)
		const data = await response.json()
		const { country } = await data.location
        const { temperature } = await data.current_observation.condition
        const { text } = await data.forecasts[0]
        const { day } = await data.forecasts[0]
        const { low } = await data.forecasts[0]
        const { high } = await data.forecasts[0]
        const d = new Date();
        date = d.getDate();

        const myWeatherObj = {
        	"country": country,
        	"temperature": temperature,
        	"text": text,
        	"day": day,
        	"low": low,
        	"high": high,
        	"date": date
        }
        

        jsCountry = (JSON.stringify(myWeatherObj.country))// Stringify Object's Country
        jsCountry = jsCountry.replaceAll('"', "");

        jsTemp = (JSON.stringify(myWeatherObj.temperature))// Stringify Object's Temperature
        jsTemp = jsTemp.replaceAll('"', "");
        jsTemp = parseInt(jsTemp)
        jsTempInCelsius = (jsTemp - 32) * 5/9
        jsTempInCelsius = Math.round(jsTempInCelsius)

        jsMain = (JSON.stringify(myWeatherObj.text))// Stringify Object's Main weather
        jsMain = jsMain.replaceAll('"', "");

        jsDay = (JSON.stringify(myWeatherObj.day))// Stringify Object's Main weather
        jsDay = jsDay.replaceAll('"', "");
        

        jsNextCurrentLow = (JSON.stringify(myWeatherObj.low))
        jsNextCurrentLow = jsNextCurrentLow.replaceAll('"', "");

        jsNextCurrentLow = parseInt(jsNextCurrentLow)
        jsNextCurrentLow = (jsNextCurrentLow - 32) * 5/9
        jsNextCurrentLow = Math.round(jsNextCurrentLow)

        jsNextCurrentHigh = (JSON.stringify(myWeatherObj.high))
        jsNextCurrentHigh = jsNextCurrentHigh.replaceAll('"', "");

        jsNextCurrentHigh = parseInt(jsNextCurrentHigh)
        jsNextCurrentHigh = (jsNextCurrentHigh - 32) * 5/9
        jsNextCurrentHigh = Math.round(jsNextCurrentHigh)

        jsDateNow = (JSON.stringify(myWeatherObj.date))
        jsDateNow = jsDateNow.replaceAll('"', "");
        jsDateNow = parseInt(jsDateNow)
        


        let inputValue = document.getElementById("cityInput").value; 
		document.getElementById("city").innerHTML = jsCountry + ": " + inputValue;
        document.getElementById("Temp").innerHTML = "Temperature: " + jsTempInCelsius +"°C";
        document.getElementById("Description").innerHTML = "Weather: " + jsMain;
        document.getElementById("Day").innerHTML = "Day: " + jsDay + " " + jsDateNow
        document.getElementById("LowAndHigh").innerHTML = "Temperature : " + "Low: " + jsNextCurrentLow +"   High: " + jsNextCurrentHigh

        if (jsMain == "Sunny"){
           document.getElementById("Image").src="sunny.svg";
        }
        else if(jsMain == "Mostly Cloudy"){
        	document.getElementById("Image").src="MostlyCloudy.webp";
        }
        else if (jsMain == "Scattered Thunderstorms"){
        	document.getElementById("Image").src="ScatteredThunderstorms.png";
        }
        else if (jsMain == "Mostly Sunny"){
        	document.getElementById("Image").src="sunny.svg";
        }
        else if(jsMain == "Cloudy"){
        	document.getElementById("Image").src="Cloudy.jpg";
        }

    
}


async function getNextWeather(city, num) {
	    
        
	    const response = await fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`, options)
		const data = await response.json()
		const { country } = await data.location
        const { day } = await data.forecasts[num+1]
        const { text } = await data.forecasts[num]
        const { low } = await data.forecasts[num]
        const { high } = await data.forecasts[num]
        const d = new Date();
        date = d.getDate();
        date = date + num



        const myWeatherObj = {
        	"country": country,
        	"day": day,
        	"text": text,
        	"low": low,
        	"high": high,
        	"date": date
        	
        }


        jsNextdayCountry = (JSON.stringify(myWeatherObj.country))
        jsNextdayCountry = jsNextdayCountry.replaceAll('"', "");

        jsNextdayDay = (JSON.stringify(myWeatherObj.day))
        jsNextdayDay = jsNextdayDay.replaceAll('"', "");

        jsNextdayText = (JSON.stringify(myWeatherObj.text))
        jsNextdayText = jsNextdayText.replaceAll('"', "");

        jsNextdayLow = (JSON.stringify(myWeatherObj.low))
        jsNextdayLow = jsNextdayLow.replaceAll('"', "");
        jsNextdayLow = parseInt(jsNextdayLow)
        jsNextdayLow = (jsNextdayLow - 32) * 5/9
        jsNextdayLow = Math.round(jsNextdayLow)

        jsNextdayHigh = (JSON.stringify(myWeatherObj.high))
        jsNextdayHigh = jsNextdayHigh.replaceAll('"', "");
        jsNextdayHigh = parseInt(jsNextdayHigh)
        jsNextdayHigh = (jsNextdayHigh - 32) * 5/9
        jsNextdayHigh = Math.round(jsNextdayHigh)
        
        jsDateNow = (JSON.stringify(myWeatherObj.date))
        jsDateNow = jsDateNow.replaceAll('"', "");
        jsDateNow = parseInt(jsDateNow)
        jsDateNow = jsDateNow + 1


        let inputValue = document.getElementById("cityInput").value; 
		document.getElementById("city").innerHTML = jsNextdayCountry + ": " + inputValue;
        document.getElementById("Description").innerHTML = "Weather: " + jsNextdayText;
        document.getElementById("Temp").innerHTML = "Median Temperature: " +((jsNextdayLow + jsNextdayHigh)/2) +"°C";
        document.getElementById("Day").innerHTML = "Day: " + jsNextdayDay + " " + jsDateNow
        document.getElementById("LowAndHigh").innerHTML = "Temperature : " + "Low: " + jsNextdayLow +"   High: " + jsNextdayHigh

        if (jsNextdayText == "Sunny"){
           document.getElementById("Image").src="sunny.svg";
        }
        else if(jsNextdayText == "Mostly Cloudy"){
        	document.getElementById("Image").src="MostlyCloudy.webp";
        }
        else if (jsNextdayText == "Scattered Thunderstorms"){
        	document.getElementById("Image").src="ScatteredThunderstorms.png";
        }
        else if (jsNextdayText == "Mostly Sunny"){
        	document.getElementById("Image").src="sunny.svg";
        }
        else if(jsNextdayText == "Cloudy"){
        	document.getElementById("Image").src="Cloudy.jpg";
        }
        else if(jsNextdayText == "Partly Cloudy"){
        	document.getElementById("Image").src="Cloudy.jpg";
        }
        
}



const getValueInput = () =>{
		      let inputValue = document.getElementById("cityInput").value; 
		      
		      getCurrentWeather(inputValue)
		      
    
}


const AfterDay = (num) => {
	          let inputValue = document.getElementById("cityInput").value; 
		      
		      getNextWeather(inputValue, num)
		     
}




















// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '0a50b04f25mshd1fe4e1b692f0f7p1623e2jsndc7d0d43ce9e',
// 		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
// 	}
// };

// async function getCurrentWeather(num) {
	    
        
// 	    const response = await fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=city&format=json&u=f`, options)
// 		const data = await response.json()
//         console.log(data.forecasts[num])




        
// }

// getCurrentWeather(5)
//data.forecasts[0] - forecast
//current main -  data.current_observation.condition['text']
//Temperature in Farenheit - data.current_observation.condition['temperature']
//Country - data.location['country']
//City - data.location['city']