// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.

  let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `<h2>Mission Destination</h2>
                                    <ol>
                                        <li>Name: ${name} </li>
                                        <li>Diameter: ${diameter}</li>
                                        <li>Star: ${star}</li>
                                        <li>Distance from Earth: ${distance}</li>
                                        <li>Number of Moons: ${moons}</li>
                                    </ol>
                                    <img src="${imageUrl}">`;
}

function validateInput(testInput) {
  if (testInput === "" || testInput === null || testInput === 0) {
    return `Empty`;
  } else if (isNaN(Number(testInput))) {
    return `Not a Number`;
  } else {
    return `Is a Number`;
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let launchStatus = document.getElementById("launchStatus");
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");

  // update pilot and co-pilot name
  pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
  copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
  list.style.visibility = "hidden";

  //check for fuel level and update faultyItems status
  if (Number(fuelLevel) < 10000 && Number(cargoLevel) > 10000) {
    list.style.visibility = "visible";
    launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
    launchStatus.style.color = `red`;
    fuelStatus.innerHTML = `Fuel level too low for launch`;
    cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
  } else if (Number(fuelLevel) < 10000 && Number(cargoLevel) < 10000) {
    list.style.visibility = "visible";
    launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
    launchStatus.style.color = `red`;
    fuelStatus.innerHTML = `Fuel level too low for launch`;
    cargoStatus.innerHTML = `Cargo mass low enough for launch`;
  } else if (Number(fuelLevel) < 10000) {
    list.style.visibility = "visible";
    launchStatus.style.color = `red`;
    launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
    fuelStatus.innerHTML = `Fuel level too low for launch`;
  } else if (Number(cargoLevel) > 10000) {
    list.style.visibility = "visible";
    launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
    launchStatus.style.color = "red";
    fuelStatus.innerHTML = `Fuel level high enough for launch`;
    cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
  } else {
    list.style.visibility = "visible";
    launchStatus.innerHTML = `Shuttle is Ready for Launch`;
    launchStatus.style.color = `green`;
    fuelStatus.innerHTML = `Fuel level high enough for launch`;
    cargoStatus.innerHTML = `Cargo mass low enough for launch`;
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });
  return planetsReturned;
}

function pickPlanet(planets) {
  let index = Math.floor(Math.random() * planets.length);
  return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
