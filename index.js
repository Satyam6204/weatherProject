const mainDiv = document.getElementById('result')
const cityInput = document.getElementById('inp');
const bt = document.getElementById('btn');

bt.addEventListener('click',getData);
   async function getData(){
       mainDiv.textContent=' ';
       
       const cityName = cityInput.value;
       const res = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=c71d877fa4098a434d8e1032df84812f`);
        const data = await res.json();
          displayData(data);
        }
/////////////////////////////////////////////////
      function displayData(data){
        const resultDiv = document.createElement('div')
        resultDiv.classList.add('boxx')
        const inputName= document.createElement('h1')
        inputName.textContent='City :'+data.name;
        const title = document.createElement('h3') 
        title.textContent= 'Humidity :'+data.main.humidity;
        const tem = document.createElement('p')
        tem.textContent='Temp :'+data.main.temp+'⛅';
        resultDiv.append(inputName,title,tem);
        mainDiv.appendChild(resultDiv);
        
        }

       
// const mainDiv = document.getElementById('result');
// const cityInput = document.getElementById('inp');
// const btn = document.getElementById('btn');

// async function getData() {
//     // Clear the result div before displaying new data
//     mainDiv.textContent = ' '; 

//     const cityName = cityInput.value;
//     if (!cityName) {
//         alert("Please enter a city name.");
//         return;
//     }

//     try {
//         const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=c71d877fa4098a434d8e1032df84812f`);
        
//         if (!res.ok) {
//             throw new Error('City not found or invalid response from the API');
//         }

//         const data = await res.json();
//         displayData(data);
        
//         // Show a success alert when data is successfully fetched
//         alert(`Weather data for ${data.name} fetched successfully!`);
//     } catch (error) {
//         // Show an error alert if something goes wrong
//         alert(`Error: ${error.message}`);
//     }
// }

// btn.addEventListener('click', getData);

// // DOM Function to display weather data
// function displayData(data) {
//     const resultDiv = document.createElement('div');
//     resultDiv.classList.add('boxx');

//     // Create the city name element
//     const inputName = document.createElement('h1');
//     inputName.textContent = `Weather in ${data.name}, ${data.sys.country}`;

//     // Create the weather description element
//     const title = document.createElement('h2');
//     title.textContent = `Condition: ${data.weather[0].description}`;

//     // Create the temperature element
//     const temp = document.createElement('p');
//     temp.textContent = `Temperature: ${data.main.temp}°C`;

//     // Create the humidity element
//     const humidity = document.createElement('p');
//     humidity.textContent = `Humidity: ${data.main.humidity}%`;

//     // Create the wind speed element
//     const windSpeed = document.createElement('p');
//     windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

//     // Append all elements to the result div
//     resultDiv.append(inputName, title, temp, humidity, windSpeed);

//     // Append the result div to the mainDiv
//     mainDiv.appendChild(resultDiv);
// }

    

     


     

     