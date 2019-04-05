//XHR - XmlHttpRequest 
let cities = [];


const domStringBuilder = (arrayToPrint) => {
    console.log(arrayToPrint);
    //loop over arrayToPrint and build domstring
    //call printToDom
    0
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
    myRequest.open('GET', './db/rides.json');
    myRequest.send();
    console.log(myRequest);
};

const init = () => {
    getCitiesData();
};

init();