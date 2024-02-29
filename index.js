const locationResult = document.querySelector("#locationResult");
document.querySelector("#getLocation").addEventListener("click", () => {
  locationResult.textContent = "Retrieving Your Current Location";

  function success(position) {
    const { coords } = position;
    locationResult.textContent = "Location Retrieved";

    locationResult.href = `https://www.openstreetmap.org?mlat=${coords.latitude}&mlon=${coords.longitude}`;
  }
  navigator.geolocation.getCurrentPosition(success);
});

// This has to be used in case of locating the postion of the user while he/she changes their position

// function success(position) {
//   const { coords } = position;
//   console.log("Latitude data",coords.latitude)
//   console.log("longitute data", coords.longitude)
// }

// const watcherID = navigation.geolocation.watchPosition(success);
// navigation.geolocation.clearWatch(watcherID);
