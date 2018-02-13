(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.

    planetsArray = planetsString.split("|");

    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?

    // var newPlanetsString = planetsArray.join("<br>");
    // console.log(newPlanetsString);

    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.


    // long way

    // <ul>
    //     <li>Mercury</li>
    //     <li>Venus</li>
    //     <li>Earth</li>
    // </ul>

    // var outputString = "";
    // outputString += "<ul><li>";
    //
    // outputString += "Mercury";
    // outputString += "</li><li>";
    // outputString += "Venus";
    // outputString += "</li><li>";
    // outputString += "Earth";
    // outputString += "</li><li>";
    // outputString += "Mars";
    // outputString += "</li><li>";
    // outputString += "Jupiter";
    // outputString += "</li><li>";
    // outputString += "Saturn";
    // outputString += "</li><li>";
    // outputString += "Uranus";
    // outputString += "</li><li>";
    // outputString += "Neptune";
    // outputString += "</li></ul>";
    //
    // console.log(outputString);
    //
    // document.write(outputString);


    // With join

    var outputString = "";
    planetsArray = planetsString.split("|");
    outputString += "<ul><li>";
    outputString += planetsArray.join("</li><li>");
    outputString += "</li></ul>";

    console.log(outputString);

    document.write(outputString);


    // With looping
    var planetsHTML = "<ul>";

    planetsArray.forEach(function(planet) {
        planetsHTML += "<li>" + planet + "</li>";
    });

    planetsHTML += "</ul>";

    console.log(planetsHTML);

    document.write(planetsHTML);


})();
