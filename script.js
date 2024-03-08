// Write your JavaScript code here!
window.addEventListener("load", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let list = document.getElementById("faultyItems");
    let pilotStatus = document.querySelector("input[name=pilotName]").value;
    let copilotStatus = document.querySelector("input[name=copilotName]").value;
    let fuelStatus = document.querySelector("input[name=fuelLevel]").value;
    let cargoStatus = document.querySelector("input[name=cargoMass]").value;

    if (
      validateInput(pilotStatus) === `Empty` ||
      validateInput(copilotStatus) === `Empty` ||
      validateInput(fuelStatus) === `Empty` ||
      validateInput(cargoStatus) === `Empty`
    ) {
      alert(`All fields are required`);
    } else if (
      validateInput(pilotStatus) === "Is a Number" ||
      validateInput(copilotStatus) === "Is a Number"
    ) {
      alert("Please enter a valid name for pilot and co-pilot fields!");
    } else if (
      validateInput(fuelStatus) === "Not a Number" ||
      validateInput(cargoStatus) === "Not a Number"
    ) {
      alert("Please enter a valid number for fuellevel and cargo mass fields!");
    } else {
      formSubmission(
        document,
        list,
        pilotStatus,
        copilotStatus,
        fuelStatus,
        cargoStatus
      );
    }
  });
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  console.log(listedPlanetsResponse);
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let planet = pickPlanet(listedPlanets);
      let name = planet.name;
      let diameter = planet.diameter;
      let star = planet.star;
      let distance = planet.distance;
      let moons = planet.moons;
      let img = planet.image;
      addDestinationInfo(document, name, diameter, star, distance, moons, img);
    });
});
