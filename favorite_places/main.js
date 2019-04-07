//XHR - XmlHttpRequest 
let cities = [];

const printToDom = (divId, textToPrint) => {
    const selectDiv= document.getElementById(divId);
    selectDiv.innerHTML =textToPrint;
}



const domStringBuilder = () =>{
    let domString = '';
    places.forEach((x) => {
        domString += `<div class="card col-3">`;
        domString += `<h5 class="card-title"><b>${x.cityName}, ${x.countryName}</b></h5>`;
        domString += `<img src="${x.cityImage}" class="card-img-top" alt="...">`;
        domString += `<ul>`;
        domString += `<li>Favorite Restaurant: ${x.favoriteRestaurant}</li>`;
        domString += `<li>Favorite Restaurant: ${x.favoriteBar}</li>`;
        domString += `<li>Favorite Restaurant: ${x.favoriteHotel}</li>`;
        domString += `<li>Favorite Restaurant: ${x.favoriteTouristAttraction}</li>`;
        domString += `</ul>`;
        domString += `</div>;`;
    });
    printToDom('placesDiv', domString);
};


function executeThisCodeAfterFileLoads(){
    const data = JSON.parse(this.responseText);
    cities = data.cities;
    domStringBuilder(data.cities); 
};

function executeThisCodeIfXHRFails(){
    console.error('oh shit');
}

const getCitiesData = () => {
    const myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
    myRequest.addEventListener('error', executeThisCodeIfXHRFails);
    myRequest.open('GET', './db/places.json');
    myRequest.send();
    console.log(myRequest);
};

const init = () => {
    getCitiesData();
    
};

init();