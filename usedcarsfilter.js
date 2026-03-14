const usedCars = [
  {
    year: 2018,
    make: "Toyota",
    model: "Camry",
    mileage: 30000,
    price: 18000,
    color: "Silver",
    gasMileage: "25 mpg city, 35 mpg highway",
  },
  {
    year: 2016,
    make: "Honda",
    model: "Civic",
    mileage: 45000,
    price: 14000,
    color: "White",
    gasMileage: "30 mpg city, 40 mpg highway",
  },
  {
    year: 2017,
    make: "Ford",
    model: "Fusion",
    mileage: 35000,
    price: 16000,
    color: "Black",
    gasMileage: "28 mpg city, 38 mpg highway",
  },
  {
    year: 2019,
    make: "Nissan",
    model: "Altima",
    mileage: 25000,
    price: 17000,
    color: "Blue",
    gasMileage: "27 mpg city, 36 mpg highway",
  },
  {
    year: 2015,
    make: "Chevrolet",
    model: "Malibu",
    mileage: 50000,
    price: 12000,
    color: "Red",
    gasMileage: "25 mpg city, 37 mpg highway",
  },
  // Additional entries:
  {
    year: 2016,
    make: "Volkswagen",
    model: "Passat",
    mileage: 40000,
    price: 15000,
    color: "Gray",
    gasMileage: "29 mpg city, 40 mpg highway",
  },
  {
    year: 2020,
    make: "Hyundai",
    model: "Elantra",
    mileage: 22000,
    price: 16000,
    color: "Silver",
    gasMileage: "30 mpg city, 41 mpg highway",
  },
  {
    year: 2014,
    make: "Subaru",
    model: "Outback",
    mileage: 60000,
    price: 14000,
    color: "Green",
    gasMileage: "22 mpg city, 30 mpg highway",
  },
  {
    year: 2017,
    make: "Mazda",
    model: "CX-5",
    mileage: 32000,
    price: 19000,
    color: "Blue",
    gasMileage: "24 mpg city, 31 mpg highway",
  },
  {
    year: 2018,
    make: "Kia",
    model: "Sorento",
    mileage: 28000,
    price: 17000,
    color: "White",
    gasMileage: "22 mpg city, 29 mpg highway",
  },
  // Five more entries:
  {
    year: 2015,
    make: "Dodge",
    model: "Challenger",
    mileage: 30000,
    price: 24000,
    color: "Black",
    gasMileage: "19 mpg city, 30 mpg highway",
  },
  {
    year: 2017,
    make: "Cadillac",
    model: "XT5",
    mileage: 28000,
    price: 32000,
    color: "Red",
    gasMileage: "19 mpg city, 27 mpg highway",
  },
  {
    year: 2018,
    make: "Jaguar",
    model: "F-PACE",
    mileage: 26000,
    price: 38000,
    color: "Blue",
    gasMileage: "18 mpg city, 23 mpg highway",
  },
  {
    year: 2019,
    make: "Tesla",
    model: "Model S",
    mileage: 18000,
    price: 55000,
    color: "Black",
    gasMileage: "Electric (370 miles per charge)",
  },
  {
    year: 2020,
    make: "Porsche",
    model: "Cayenne",
    mileage: 22000,
    price: 68000,
    color: "White",
    gasMileage: "20 mpg city, 26 mpg highway",
  },
  {
    year: 2017,
    make: "Lexus",
    model: "ES",
    mileage: 29000,
    price: 26000,
    color: "White",
    gasMileage: "21 mpg city, 30 mpg highway",
  },
  {
    year: 2016,
    make: "BMW",
    model: "5 Series",
    mileage: 32000,
    price: 27000,
    color: "Black",
    gasMileage: "23 mpg city, 34 mpg highway",
  },
];




function displayCars(cars){

const container=document.getElementById("car-listings");
container.innerHTML="";

if(cars.length===0){
container.innerHTML="<p>No cars match your criteria. Try again.</p>";
return;
}

for (let i=0; i<cars.length; i++){
    const car=cars[i];
    const card=document.createElement("div");
    card.className="car-card";

    card.innerHTML=`
    <img src="images/${car.make}.jpg" alt="Car Image">
    <h3>${car.make} ${car.model}</h3>
    <p>Year: ${car.year}</p>
    <p>Mileage: ${car.mileage}</p>
    <p>Color: ${car.color}</p>
    <p class="price">$${car.price}</p>
    <p>Gas Mileage: ${car.gasMileage}</p>
    `;
    container.appendChild(card);
}

}

function searchCars(){

const minYear=document.getElementById("minYear").value;
const maxYear=document.getElementById("maxYear").value;
const maxMileage=document.getElementById("maxMileage").value;
const maxPrice=document.getElementById("maxPrice").value;
const make=document.getElementById("make").value;
const color=document.getElementById("color").value;

let results = [];
for (let i = 0; i < usedCars.length; i++) {
    let fitsCriteria = true;
    if (minYear && usedCars[i].year < minYear) {
        fitsCriteria = false;
    }
    if (maxYear && usedCars[i].year > maxYear) {
        fitsCriteria = false;
    }
    if (maxMileage && usedCars[i].mileage > maxMileage) {
        fitsCriteria = false;
    }
    if (maxPrice && usedCars[i].price > maxPrice) {
        fitsCriteria = false;
    }
    if (make && usedCars[i].make !== make) {
        fitsCriteria = false;
    }
    if (color && usedCars[i].color !== color) {
        fitsCriteria = false;
    }
    if (fitsCriteria === true) {
        results.push(usedCars[i]);
    }
}
displayCars(results);
}
window.onload=function(){
displayCars(usedCars);
};