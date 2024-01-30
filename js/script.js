

// Shows original search/map when going back from trail page.
// maybe i should just make the search and main page different pages?

const getTrail = sessionStorage.getItem('sortedTrails')
if(getTrail){
  const retrievedSortedTrailsJSON = sessionStorage.getItem('sortedTrails');
  const retrievedSortedTrails = JSON.parse(retrievedSortedTrailsJSON);
  showFilteredTrails(retrievedSortedTrails)
}




// const happyTrailsMapId = '5323d059acfa9244'
// const newApiKey = 'AIzaSyB28bmNkVX6s0hpsj2Zk6kKU_HXJ739ArQ'




let currentLocation = {lat: 0, long: 0}
let showInfo = false






// MANAGE SEARCH INPUT/BUTTON/ MAP

const zipcodeInput = document.getElementById('zipcode-input')
const searchZipButton = document.getElementById('search-zip-button')
searchZipButton.addEventListener('click', () => {
  const inputValue = zipcodeInput.value
  if (inputValue.length !== 5 || /[a-zA-Z]/.test(inputValue)) {
    showErrorMessage()
  } else {
    document.getElementById('map').style.display = 'block'
    document.querySelector('.main-search').style.display = 'none'
    document.getElementById('main-image').style.display = 'none'
    showMap(inputValue, allTrails)
    getLatWithZipcode(inputValue)
    .then(result => {
      currentLocation.lat = result.lat;
      currentLocation.long = result.lng;
      showFilteredTrails(sortLocationsByDistance(allTrails, result.lat, result.lng))
    })
  }
})

const sidebarZipcodeInput = document.getElementById('zipcode-input2')
const sidebarZipButton = document.getElementById('search-zip-button2')
sidebarZipButton.addEventListener('click', () => {
  const inputValue = sidebarZipcodeInput.value
  if (inputValue.length !== 5 || /[a-zA-Z]/.test(inputValue)) {
    showErrorMessage()
  } else {
    getLatWithZipcode(inputValue)
    .then(result => showFilteredTrails(sortLocationsByDistance(filterTrails(), result.lat, result.lng)))
    sidebarZipcodeInput.value = ''
  }
})




function showMap(zipcode, trailArray, lat, long) {
  const apiKey = 'AIzaSyB28bmNkVX6s0hpsj2Zk6kKU_HXJ739ArQ';
  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=${apiKey}`;

  document.querySelector('.map-div').style.display = 'flex'

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const location = data.results[0].geometry.location;
      let latitude = location.lat;
      let longitude = location.lng;

      if (lat && long) {
        latitude = lat
        longitude = long
      }

      map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: latitude, lng: longitude },
        zoom: 12,
        mapId: '5323d059acfa9244',
        mapTypeControl: false,
        fullScreenControl: false,
        streetViewControl: false
      })

      markers = trailArray

      for (let i = 0; i < markers.length; i++) {
        const currMarker = markers[i];

        const marker = new google.maps.Marker({
          position: { lat: currMarker.coordinates.lat, lng: currMarker.coordinates.long },
          map,
          title: currMarker.name,
          icon: {
            url: 'images/hike-icon.svg',
            scaledSize: new google.maps.Size(38, 31),
          },
          animation: google.maps.Animation.DROP
        });

        const infowindow = new google.maps.InfoWindow({
          content: currMarker.name,
        })

        // Event listener for mouseover
        marker.addListener('mouseover', () => {
          infowindow.open(map, marker);
        });

        // Event listener for mouseout
        marker.addListener('mouseout', () => {
          infowindow.close();
        });

        marker.addListener('click', () => {
          goToTrailPage(currMarker)})
      }

    })
    .catch(error => console.error('Error:', error));
}



function goToTrailPage(trail){
  const stringifyTrailInfo = JSON.stringify(trail)
  sessionStorage.setItem('trail', stringifyTrailInfo)
  window.location.href = 'trail.html'
}



function showErrorMessage() {
  const errorMessage = document.querySelector('.error')
  errorMessage.style.opacity = 1

  setTimeout(() => {
    errorMessage.style.opacity = 0
  }, 3000)
}


function toPage(page) {
  window.location.href = page
}











function showFilteredTrails(array) {
  showMap('91602', array, array[0].coordinates.lat, array[0].coordinates.long)
  document.getElementById('map').style.display = 'block'
  document.querySelector('.main-search').style.display = 'none'
  document.getElementById('main-image').style.display = 'none'
  const mainImage = document.querySelector('.main-image')
  document.querySelector('.main-search h1').style.display = 'none'

  setTimeout(() => {
    mainImage.classList.remove('transition-height');
  }, 2000);

  const filterDiv = document.querySelector('.filter-div')
  filterDiv.innerHTML = ''
  array.forEach((trail) => {
    const trailDiv = document.createElement('div')
    trailDiv.innerHTML = `
    <div class="filter-result">
    <div class="image-div">
    <img src="${trail.photo[0]}" alt="" class="the-image">
    </div>
    <div class="trail-name">
    <h3 class="the-name">${trail.name}</h3><img src=images/location-icon.png onmouseover="showTrailOnMap(${trail.coordinates.lat}, ${trail.coordinates.long})">
    </div
    <p>Angeles National Forest</p>
    <p class="stats">${trail.length} mi    ${trail.difficulty}    ${trail.vibes[0]}    ${trail.ascend}</p>
  </div>
         `
    trailDiv.querySelector('.the-name').addEventListener('click', () => {
      goToTrailPage(trail)
    })
    filterDiv.appendChild(trailDiv)
  })
}

function showTrailOnMap(lat, long){
  const newCenter = new google.maps.LatLng(lat, long);
  map.setCenter(newCenter);
}


function showInfoWindow(infoWindow){
  infoWindow()
}




// FILTER TAB MENUS


const filterItems = document.querySelectorAll('.filter-items')
let currentlyActiveTab = null;

filterItems.forEach((filter) => {
  filter.addEventListener('click', () => {

    if (currentlyActiveTab) {
      if(currentlyActiveTab === filter){
        makeTabInactive(filter)
        return currentlyActiveTab = null;
      }
      makeTabInactive(currentlyActiveTab)
      makeTabActive(filter)
    } else {
      makeTabActive(filter)
    }
  })
})

function makeTabActive(tab) {
  const arrow = tab.querySelector('svg')
  const filterMenu = tab.nextElementSibling

  tab.style.backgroundColor = 'black'
  tab.style.color = 'white'
  arrow.style.fill = 'white'
  arrow.style.transform = 'rotate(-90deg)'
  filterMenu.style.display = 'block'
  currentlyActiveTab = tab
}

function makeTabInactive(tab) {
  const arrow = tab.querySelector('svg')
  const filterMenu = tab.nextElementSibling

  tab.style.backgroundColor = 'rgb(239, 230, 230)'
  tab.style.color = 'black'
  arrow.style.fill = 'black'
  arrow.style.transform = 'rotate(90deg)'
  filterMenu.style.display = 'none'
}







// Manage Filter buttons/choices

const chosenFilters = {
  vibes: null,
  length: 20,
  difficulty: null,
  ascend: null,
  sort: 'long'
}

// Length Tab Slider

const lengthSlider = document.getElementById('slider')
const chosenLength = document.querySelector('.length-miles')
lengthSlider.oninput = (() => {
  let value = lengthSlider.value;

  if(value > 19){
    chosenLength.textContent = '20+'
  } else {
    chosenLength.textContent = value
    chosenFilters.length = value
  }
});
function resetSlider(){
  lengthSlider.value = 20
  chosenLength.textContent = '20+'
  chosenFilters.length = 20;
}

function getFilterValue(filterName){
  const filterOptions = document.querySelectorAll(`input[name="${filterName}"]`)
  filterOptions.forEach((radioButton) => {
    radioButton.addEventListener('change', () => {
        if(radioButton.checked){
        chosenFilters[filterName] = radioButton.value
      }
    })
  })
}

getFilterValue('vibes')
getFilterValue('difficulty')
getFilterValue('ascend')
getFilterValue('sort')

//Apply filter button

document.getElementById('apply-difficulty').addEventListener('click', () => {
  getTrailsOrError('difficulty')
})
document.getElementById('apply-vibes').addEventListener('click', () => {
 getTrailsOrError('vibes')
})
document.getElementById('apply-slider').addEventListener('click', () => {
  getTrailsOrError('length')
})
document.getElementById('apply-ascend').addEventListener('click', () => {
  getTrailsOrError('ascend')
})
document.getElementById('apply-sort').addEventListener('click', () => {
  getTrailsOrError('sort')
})

function getTrailsOrError(filter){
  if(filterTrails() < 1 || filter === 'clear'){
    const errorMessage = document.getElementById(`${filter}-error`)
    errorMessage.style.display = 'block'
    setTimeout(() => {
      errorMessage.style.display = 'none'
    }, 1000)
  } else { 
    let sortedTrails;
    if(chosenFilters.sort === 'short'){
      sortedTrails = filterTrails().sort((a,b) => a.length - b.length)
    } else{
      sortedTrails = filterTrails().sort((a,b) => b.length - a.length)
    }
    showFilteredTrails(sortedTrails)
    makeTabInactive(currentlyActiveTab)
    const sortedTrailsJSON = JSON.stringify(sortedTrails);
    sessionStorage.setItem('sortedTrails', sortedTrailsJSON);
  }
}

//Clear filter button

document.getElementById('clear-vibes').addEventListener('click', () => {
  clearSelections('vibes')
  chosenFilters.vibes = null;
})
document.getElementById('clear-difficulty').addEventListener('click', () => {
  clearSelections('difficulty')
  chosenFilters.difficulty = null;
})
document.getElementById('clear-ascend').addEventListener('click', () => {
  clearSelections('ascend')
  chosenFilters.ascend = null;
})
document.getElementById('clear-slider').addEventListener('click', resetSlider)
document.getElementById('clear-all').addEventListener('click', () => {
  clearSelections('clear-all')
  getTrailsOrError('clear')
})

function clearSelections(filterName){
  if(filterName === 'clear-all'){
    chosenFilters.vibes = null,
    chosenFilters.length = 20,
    chosenFilters.difficulty = null,
    chosenFilters.ascend = null,
    chosenFilters.sort = 'long'
    resetSlider()

    Object.keys(chosenFilters).forEach(filter => {
      const radioOptions = document.querySelectorAll(`input[name="${filter}"]`)
      radioOptions.forEach((radioButton) => {
        radioButton.checked = false
      })
    })
  } else {
    const filterOptions = document.querySelectorAll(`input[name="${filterName}"]`)
    filterOptions.forEach((radioButton) => {
      radioButton.checked = false
    })
  }
}



function filterTrails(){
  return allTrails.filter(trail => {

    if (chosenFilters.vibes !== null && !trail.vibes.includes(chosenFilters.vibes)) {
      return false;
    }

    // Check the length filter
    if (chosenFilters.length !== null && trail.length > chosenFilters.length) {
      return false;
    }

    // Check the difficulty filter
    if (chosenFilters.difficulty !== null && trail.difficulty !== chosenFilters.difficulty) {
      return false;
    }

    // Check the ascend filter
    if (chosenFilters.ascend !== null && trail.ascend !== chosenFilters.ascend) {
      return false;
    }

    // All filters passed, include the trail in the result
    return true;
  });
}

// Function to calculate distance between two points using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in kilometers

  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
}

// Function to sort locations by distance
function sortLocationsByDistance(locations, referenceLat, referenceLon) {
  // Add a distance property to each location in the array
  locations.forEach((location) => {
    location.distance = calculateDistance(referenceLat, referenceLon, location.coordinates.lat, location.coordinates.long);
  });

  // Sort the array based on the distance property
  locations.sort((a, b) => a.distance - b.distance);

  // Remove the temporary distance property from the sorted array
  locations.forEach((location) => {
    delete location.distance;
  });

  return locations;
}



async function getLatWithZipcode(zipCode) {
  const apiKey = 'AIzaSyB28bmNkVX6s0hpsj2Zk6kKU_HXJ739ArQ'
  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === 'OK' && data.results.length > 0) {
      const location = data.results[0].geometry.location;
      const lat = location.lat;
      const lng = location.lng;

      return { lat: lat, lng: lng };
    } else {
      console.error('Unable to retrieve coordinates for the given zip code.');
      return null;
    }
  } catch (error) {
    console.error('Error fetching data from the Google Maps Geocoding API.', error);
    return null;
  }
}




  
// FILTERS ARE APPLIED TO CHOSENFILTERS OBJECT THE MOMENT THEY ARE SELECTED
// SHOULD I WAIT TO APPLY THEM TO OBJECT UNTIL 'APPLY' IS CLICKED?

// when zipcode is entered, arrange trails in order of closest


