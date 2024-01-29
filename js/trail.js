function toPage(page) {
  window.location.href = page
}

const getSessionStorage = sessionStorage.getItem('trail')
const currentTrail = JSON.parse(getSessionStorage)
console.log(currentTrail)

document.getElementById('trail-title').textContent = currentTrail.name
document.getElementById('main-pic').src = currentTrail.photo[0]
document.getElementById('trail-length').textContent = `${currentTrail.length} mi`
document.getElementById('trail-time').textContent = `${currentTrail.avgTimeMinutes} min`
document.getElementById('trail-elevation').textContent = `${currentTrail.elevationFeet} ft`
document.getElementById('trail-difficulty').textContent = currentTrail.difficulty









const apiKey = 'ead542eea68aa4b5b4481d2d89871d41'
const latitude = currentTrail.coordinates.lat
const longitude = currentTrail.coordinates.long


const currentDate = new Date();
let currentDay = currentDate.getDay()
const options = {
  weekday: 'long', // Full day name (e.g., Sunday)
  month: 'long',   // Full month name (e.g., January)
  day: 'numeric',  // Numeric day of the month
  year: 'numeric'  // Full year (four digits)
};
const formattedDate = currentDate.toLocaleDateString('en-US', options);

// Set Up Dates in Forecast Calendar
const dayInitials = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const daysOnPage = document.querySelectorAll('.get-day')
for (let i = 0; i < 5; i++) {
  if ((i + currentDay > 6)) {
    currentDay = currentDay - 7
  }
  daysOnPage[i].textContent = dayInitials[i + currentDay];
}

const dateNumArray = [currentDate.getDate()]
for (let i = 1; i <= 4; i++) {
  const nextDay = new Date();
  nextDay.setDate(currentDate.getDate() + i);
  dateNumArray.push(nextDay.getDate())
}

const datesOnPage = document.querySelectorAll('.get-date')
for (let i = 0; i < 5; i++) {
  datesOnPage[i].textContent = dateNumArray[i]
}



let currentlyActiveDate = document.querySelector('.get-date')
const dateOnPage = document.querySelectorAll('.get-date')
dateOnPage.forEach((date) => {
  date.addEventListener('click', () => {
    date.classList.add('active')
    currentlyActiveDate.classList.remove('active')
    currentlyActiveDate = date
  })
})


for (let i = 1; i < 5; i++) {
  dateOnPage[i].addEventListener('click', () => {
    const currentDateString = dateNumArray[i].toString()
    getWeatherForecast(currentDateString)
  })
}
dateOnPage[0].addEventListener('click', getCurrentWeather)





function getWeatherForecast(dayNum) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Process the API response data here
      console.log(data);
      const timestamp = data.list[0].dt
      const date = new Date(timestamp * 1000)


      // 2024-01-24 09:00:00
      const reducedNoonDates = []
      let chosenDateObject;

      data.list.forEach((date) => {
        if (date.dt_txt[11] + date.dt_txt[12] === '12') {
          //console.log(date)
          reducedNoonDates.push(date)
        }
      })

      reducedNoonDates.forEach((date) => {
        if (date.dt_txt[8] + date.dt_txt[9] === dayNum) {
          chosenDateObject = date
          console.log(chosenDateObject)
        }
      })


      document.getElementById('main-temp').textContent = Math.floor(chosenDateObject.main.temp)

      document.getElementById('high-low').textContent = `H:${Math.floor(chosenDateObject.main.temp_max)} L:${Math.floor(chosenDateObject.main.temp_min)}`

      document.getElementById('weather-description').textContent = chosenDateObject.weather[0].description.replace(/\b\w/g, match => match.toUpperCase());

      const currentWeather = chosenDateObject.weather[0].main
      getWeatherIcon(currentWeather)
    })
    .catch(error => console.error('Error:', error));
}




function getCurrentWeather() {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Process the API response data here
      document.getElementById('main-temp').textContent = Math.floor(data.main.temp)
      document.getElementById('weather-description').textContent = data.weather[0].description.replace(/\b\w/g, match => match.toUpperCase());

      document.getElementById('high-low').textContent = `H:${Math.floor(data.main.temp_max)} L:${Math.floor(data.main.temp_min)}`

      const currentWeather = data.weather[0].main
      getWeatherIcon(currentWeather)
    })
    .catch(error => console.error('Error:', error));
}

getCurrentWeather()


function getWeatherIcon(currentWeather) {
  if (currentWeather == 'Snow') {
    document.getElementById('weather-img').src = 'images/weather-icons/snow.png'
  }
  if (currentWeather == 'Wind') {
    document.getElementById('weather-img').src = 'images/weather-icons/wind.png'
  }
  if (currentWeather == 'Rain') {
    document.getElementById('weather-img').src = 'images/weather-icons/rain.png'
  }
  if (currentWeather == 'Mist') {
    document.getElementById('weather-img').src = 'images/weather-icons/mist.png'
  }
  if (currentWeather == 'Humidity') {
    document.getElementById('weather-img').src = 'images/weather-icons/humidity.png'
  }
  if (currentWeather == 'Drizzle') {
    document.getElementById('weather-img').src = 'images/weather-icons/drizzle.png'
  }
  if (currentWeather == 'Clouds') {
    document.getElementById('weather-img').src = 'images/weather-icons/clouds.png'
  }
  if (currentWeather == 'Clear') {
    document.getElementById('weather-img').src = 'images/weather-icons/clear.png'
  }
}




// Icon Buttons - photo, directions, etc
let allSlides = []
let activeSlide = 0;
const photoScreen = document.querySelector('.photo-screen')
const photoButton = document.getElementById('photo')
const photoCollection = document.querySelector('.photo-collection')
photoButton.addEventListener('click', () => {
  photoCollection.innerHTML = ''
  photoScreen.style.display = 'flex'
  allSlides = []

  currentTrail.photo.forEach((photo, index) => {

    const photoDiv = document.createElement('div')
    photoDiv.innerHTML = `
    <img src="${photo}" alt="" class="front-image">
    <img src="${photo}" alt="" class="blur">`
    photoDiv.classList.add('slide')
    photoCollection.appendChild(photoDiv)
    allSlides.push(photoDiv)

    if (index === activeSlide) {
      photoDiv.classList.add('active')
    }
  })
  arrowDisplay()
})

const closePhotoButton = document.querySelector('.close-x')
closePhotoButton.addEventListener('click', () => {
  photoScreen.style.display = 'none'
})





const nextPhotoButton = document.getElementById('next')
nextPhotoButton.addEventListener('click', () => {
  allSlides[activeSlide + 1].classList.add('active')
  allSlides[activeSlide].classList.remove('active')
  activeSlide++
  arrowDisplay()

})
const previousPhotoButton = document.getElementById('previous')
previousPhotoButton.addEventListener('click', () => {
  allSlides[activeSlide - 1].classList.add('active')
  allSlides[activeSlide].classList.remove('active')
  activeSlide--
  arrowDisplay()
})

function arrowDisplay() {
  if (activeSlide === currentTrail.photo.length - 1) {
    nextPhotoButton.style.display = 'none'
  } else {
    nextPhotoButton.style.display = 'flex'
  }
  if (activeSlide > 0) {
    previousPhotoButton.style.display = 'flex'
  } else {
    previousPhotoButton.style.display = 'none'
  }
}


//will need to consider how link works to goto specific trail

const link = encodeURI(window.location.href);
// const link = 'https://www.el-bano.org'
const msg = encodeURIComponent('Hey, check out this dope trail!');
const title = encodeURIComponent(currentTrail.name)

const fb = document.querySelector('.facebook')
fb.href = `https://www.facebook.com/share.php?u=${link}`

const twitter = document.querySelector('.twitter')
twitter.href = `https://twitter.com/share?&url=${link}&text=${msg}`

const linkedIn = document.querySelector('.linkedin')
linkedIn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${link}`

const reddit = document.querySelector('.reddit')
reddit.href = `http://www.reddit.com/submit?url=${link}&title=${title}`

const closePopupButton = document.querySelector('.close-x-popup')
closePopupButton.addEventListener('click', () => {
  document.querySelector('.tint').style.display = 'none'
})

const shareButton = document.getElementById('share')
shareButton.addEventListener('click', () => {
  document.querySelector('.tint').style.display = 'flex'
})



function openAppleMaps(latitude, longitude) {
  //const mapsUrl = `http://maps.apple.com/?ll=${latitude},${longitude}`;
  const mapsUrl = `http://maps.apple.com/?daddr=${latitude},${longitude}&dirflg=d`;
  window.open(mapsUrl);
}

const directionsButton = document.getElementById('directions')
directionsButton.addEventListener('click', () => {
  openAppleMaps(currentTrail.coordinates.lat, currentTrail.coordinates.long)
})


