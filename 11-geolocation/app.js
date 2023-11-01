"use strict";

function myLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position.coords),
      (error) => reject(error)
    );
  });
}

myLocation()
  .then((pos) => {
    console.log(
      `Ваша геолокация: Широта ${pos.latitude}, долгота ${pos.longitude}`
    );
  })
  .catch((err) => console.log(err.message));
