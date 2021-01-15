let table;
let Kite;
let Kiteset;
let numberOfSegments = 10;

let food = [];
// var w = window.innerWidth;
// var h = window.innerHeight;
var w = window.innerWidth;
var h = window.innerHeight;
let foodIndex = 0;
let foodSelection;
let label;
var img;

let Name;
let overallXOffset = w *0.25;
let overallYOffset = 0;
let overallScale = 1.2;


let isKeyShowing = false;
let showEstimation = false;

function preload() {
  table = loadTable("Food DC.csv", "csv", "header");
  //img = loadImage('4154.png');

}

// function windowResized() {
//   resizeCanvas(w, h);
// }

function setup() {
  createCanvas(w, h);
  
  div = createDiv("");
  div.position(0,0);
  div.style("width", "300px");
  div.style("height", "720px");
  div.style("background-color", "white");

  div = createDiv("");
  div.position(w-300,0);
  div.style("width", "300px");
  div.style("height", "720px");
  div.style("background-color", "white");
  // site = createP("yourFoodQuadrats");
  // site.position(1280,30)

  Name = createP("");
  Name.position((width*0.46), h-250);
  Name.style("text-align","center");
  Name.style("width", "100px");
  Name.style("height", "22px");
  Name.style("font-family", "Helvetica");
  Name.style("font-size", "0.8rem");

  // image(img, 0, 0);
  // img.hide();


  food = table.getColumn('Name');


  title = createP("Ingredient");
  title.position(w-250, 10);
  title.style("font-family", "Helvetica");
  title.style("font-size", "0.8rem");

  foodSelection = createSelect();
  foodSelection.position(w-250, 50);
  for (let i = 0; i < food.length; i++) {
    foodSelection.option(food[i])
    // Name = createP("");
    // Name.html(foodSelection.value());
    // Name.position(650,400);
  }
  foodSelection.changed(mySelectItem);
  //foodSelection.html(mySelectItem);
  foodSelection.style("background-color", "black");
  foodSelection.style("color", "white");
  foodSelection.style("width", "100px");
  foodSelection.style("height", "22px");
  foodSelection.style("font-family", "Helvetica");
  foodSelection.style("font-size", "0.8rem");


  createP("");
  createP("");


  title = createP("User Estimation");
  title.position(w-250, 100);
  title.style("font-family", "Helvetica");
  title.style("font-size", "0.8rem");


  EstimationOn = createButton("On");
  EstimationOn.position(w-250, 140);
  EstimationOn.mousePressed(userOff);
  EstimationOn.style("background-color", "#E6E6E6");
  EstimationOn.style("width", "100px");
  EstimationOn.style("height", "22px");
  EstimationOn.style("color", "white");
  EstimationOn.style("border-style", "none");
  EstimationOn.style("font-family", "Helvetica");
  EstimationOn.style("font-size", "0.8rem");

  EstimationOff = createButton("Off");
  EstimationOff.position(w-150, 140);
  EstimationOff.mousePressed(userOn);
  EstimationOff.style("background-color", "black");
  EstimationOff.style("width", "100px");
  EstimationOff.style("height", "22px");
  EstimationOff.style("color", "white");
  EstimationOff.style("border-style", "none");
  EstimationOff.style("font-family", "Helvetica");
  EstimationOff.style("font-size", "0.8rem");



  title = createP("Impact on:");
  title.position(w-250, 200);
  title.style("font-family", "Helvetica");
  title.style("font-size", "0.8rem");

  Impact = createButton("Water");
  Impact.position(w-250, 240);
  Impact.mousePressed(changeColor);
  Impact.mousePressed(revertColor);
  Impact.style("background-color", "black");
  Impact.style("width", "100px");
  Impact.style("height", "22px");
  Impact.style("color", "white");
  Impact.style("font-family", "Helvetica");
  Impact.style("font-size", "0.8rem");

  Impact = createButton("GHG");
  Impact.position(w-150, 240);
  Impact.mousePressed(changeColor);
  Impact.mousePressed(revertColor);
  Impact.style("background-color", "black");
  Impact.style("width", "100px");
  Impact.style("height", "22px");
  Impact.style("color", "white");
  Impact.style("font-family", "Helvetica");
  Impact.style("font-size", "0.8rem");

  Impact = createButton("Land");
  Impact.position(w-250, 260);
  Impact.mousePressed(changeColor);
  Impact.mousePressed(revertColor);
  Impact.style("background-color", "black");
  Impact.style("width", "100px");
  Impact.style("height", "22px");
  Impact.style("color", "white");
  Impact.style("font-family", "Helvetica");
  Impact.style("font-size", "0.8rem");

  Impact = createButton("");
  Impact.position(w-150, 260);
  Impact.mousePressed(changeColor);
  Impact.mousePressed(revertColor);
  Impact.style("background-color", "black");
  Impact.style("width", "100px");
  Impact.style("height", "22px");
  Impact.style("color", "white");
  Impact.style("font-family", "Helvetica");
  Impact.style("font-size", "0.8rem");

  title = createP("Stage:");
  title.position(w-250, 320);
  title.style("font-family", "Helvetica");
  title.style("font-size", "0.8rem");

  Stage = createButton("Production");
  Stage.position(w-250, 360);
  Stage.mousePressed(changeColor);
  Stage.mousePressed(revertColor);
  Stage.style("background-color", "black");
  Stage.style("width", "100px");
  Stage.style("height", "22px");
  Stage.style("color", "white");
  Stage.style("font-family", "Helvetica");
  Stage.style("font-size", "0.8rem");

  Stage = createButton("Processing");
  Stage.position(w-150, 360);
  Stage.mousePressed(changeColor);
  Stage.mousePressed(revertColor);
  Stage.style("background-color", "black");
  Stage.style("width", "100px");
  Stage.style("height", "22px");
  Stage.style("color", "white");
  Stage.style("font-family", "Helvetica");
  Stage.style("font-size", "0.8rem");

  Stage = createButton("Distribution");
  Stage.position(w-250, 380);
  Stage.mousePressed(changeColor);
  Stage.mousePressed(revertColor);
  Stage.style("background-color", "black");
  Stage.style("width", "100px");
  Stage.style("height", "22px");
  Stage.style("color", "white");
  Stage.style("font-family", "Helvetica");
  Stage.style("font-size", "0.8rem");

  Stage = createButton("Consumption");
  Stage.position(w-150, 380);
  Stage.mousePressed(changeColor);
  Stage.mousePressed(revertColor);
  Stage.style("background-color", "black");
  Stage.style("width", "100px");
  Stage.style("height", "22px");
  Stage.style("color", "white");
  Stage.style("font-family", "Helvetica");
  Stage.style("font-size", "0.8rem");

  title = createP("Grid");
  title.position(w-250, 440);
  title.style("font-family", "Helvetica");
  title.style("font-size", "0.8rem");


  Grid = createButton("On");
  Grid.position(w-250, 480);
  Grid.mousePressed(changeColor);
  //Grid.mousePressed(revertColor);
  Grid.style("background-color", "black");
  Grid.style("width", "100px");
  Grid.style("height", "22px");
  Grid.style("border-style", "none");
  Grid.style("color", "white");
  Grid.style("font-family", "Helvetica");
  Grid.style("font-size", "0.8rem");


  Gridoff = createButton("Off");
  Gridoff.position(w-150, 480);
  Gridoff.mousePressed(revertColor);
  Gridoff.style("background-color", "black");
  Gridoff.style("width", "100px");
  Gridoff.style("height", "22px");
  Gridoff.style("color", "white");
  Gridoff.style("border-style", "none");
  Gridoff.style("font-family", "Helvetica");
  Gridoff.style("font-size", "0.8rem");





  var button = createImg('right-arrow.png');
  button.mousePressed(showKey);
  button.position(20, 20);
  button.style("background-color", "white");
  button.style("width", "22px");
  button.style("height", "22px");
  button.style("color", "white");
  button.style("font-family", "Helvetica");
  button.style("font-size", "0.8rem");
  img = createImg('key.png','key.png');
  img.position(20, 50);
  img.style("width", "200px");
  // img.style("height", "600px");
  img.hide();



  //   keyButton = createButton();
  //   keyButton.show(div);

  //   let keyButton = createButton("button");

  //   keyButton.position(0, 0);

  //   keyButton.mousePressed(showKey);
  //  keyButton.mousePressed(collapse);

    button2 = createButton('reset');
    button2.position(w-100,20);
    button2.mousePressed(webpage);


  Kiteset = new kiteset();
  // Name = createP("");
  // Name.html(foodSelection.value());
  // Name.position(650,400);
  // Name.changed(foodSelection.option(food[i]));

}

function draw() {

background(230);
  //console.log(mouseX, mouseY);

  // fill(255);
  // rect(250, 0, 1000, height);
  


  translate(overallXOffset, 0);

  scale(overallScale);
  Kiteset.show();
  // Kiteset.showUser();

  Kiteset.kiteWater();
  Kiteset.kiteGreen();
  Kiteset.kiteLand();


}

function collapse() {

}

function showKey() {

  isKeyShowing = !isKeyShowing;
  if (isKeyShowing) {
    img.show();
  } else {
    img.hide();
  }
  image(img, 0, 0);

}



function mySelectItem() {
  let item = foodSelection.value();

  foodIndex = food.indexOf(item);
  Name.html(foodSelection.value());
  
}

function userOn() {
  // print('on')

  showEstimation = true;
  EstimationOff.style("background-color", "#E6E6E6");
  EstimationOn.style("background-color", "black");

  
}

function userOff() {
  // print('on')

  showEstimation = false;
  EstimationOn.style("background-color", "#E6E6E6");
  EstimationOff.style("background-color", "black");
  
}

function changeColor() {
  // print('on')
  //  Grid.style("background-color", "#E6E6E6");
  // Gridoff.style("background-color", "black");
}



function revertColor() {
  // print('off')
 // Grid.style("background-color", "black");

}


function mousePressed() {

}

function keyPressed() {
 if(key = 'f'){
    let fs = fullscreen();
    fullscreen(!fs);
 }
}


function link(href, target) {
  if (target !== undef)  window.open(href, target);
  else                   window.location = href;
};
 
function webpage() {
    window.open(src="sketch1.js",blank);
}