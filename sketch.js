let table;
let Kite;
let Kiteset;
let numberOfSegments = 10;
let slider;
let sliderValDisplay;
let food = [];
var w = window.innerWidth;
var h = window.innerHeight;
let foodIndex = 0;
let foodSelection;
let label;
var img;
let image = [];

let Name;
let overallXOffset = w * 0.25;
let overallYOffset = 0;
let overallScale = 1.2;


let isKeyShowing = false;
let showEstimation = false;

function preload() {
  table = loadTable("Food DC.csv", "csv", "header");
  //img = loadImage('4154.png');

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(w, h);

  div = createDiv("");
  div.position(0, 0);
  div.style("width", "300px");
  div.style("height", "720px");
  div.style("background-color", "white");

  div = createDiv("");
  div.position(w * 0.785, 0);
  div.style("width", "300px");
  div.style("height", "720px");
  div.style("background-color", "white");
  // site = createP("yourFoodQuadrats");
  // site.position(1280,30)

  Name = createP("");
  Name.position((width * 0.46), h - 250);
  Name.style("text-align", "center");
  Name.style("width", "100px");
  Name.style("height", "22px");
  Name.style("font-family", "Helvetica");
  Name.style("font-size", "0.8rem");

  // image(img, 0, 0);
  // img.hide();

  home = createButton('Home');
  home.position(w * 0.896, 20);
  home.mousePressed(homepage);
  home.style("background-color", "E6E6E6");
  home.style("width", "60px");
  home.style("height", "22px");
  home.style("color", "black");
  home.style("border-style", "none");
  home.style("font-family", "Helvetica");
  home.style("font-size", "0.8rem");

  reset = createButton('Reset');
  reset.position(w * 0.896, 50);
  reset.mousePressed();
  reset.style("background-color", "E6E6E6");
  reset.style("width", "60px");
  reset.style("height", "22px");
  reset.style("color", "black");
  reset.style("border-style", "none");
  reset.style("font-family", "Helvetica");
  reset.style("font-size", "0.8rem");

  
  food = table.getColumn('Name');


  title = createP("Ingredient:");
  title.position(w * 0.8, 70);
  title.style("font-family", "Helvetica");
  title.style("font-size", "0.8rem");

  foodSelection = createSelect();
  foodSelection.position(w * 0.8, 110);
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

  title = createP("Quantity:");
  title.position(w*0.8, 140);
  title.style("font-family", "Helvetica");
  title.style("font-size", "0.8rem");

  slider = createSlider(225, 1500, 1000);
  slider.position(w*0.8, 170);
  slider.style("background-color", "black");
  slider.style("width", "120px");
  sliderValDisplay = createP("1000");
  sliderValDisplay.position(w * 0.885, 160);
  sliderValDisplay.style("color", "black");
  sliderValDisplay.style("font-family", "Helvetica");
  sliderValDisplay.style("font-size", "0.8rem");
  sliderValDisplay.id('sliderDisplay');  


  title = createP("User Estimation:");
  title.position(w * 0.8, 200);
  title.style("font-family", "Helvetica");
  title.style("font-size", "0.8rem");


  EstimationOn = createButton("On");
  EstimationOn.position(w * 0.8, 240);
  EstimationOn.mousePressed(userOff);
  EstimationOn.style("background-color", "#E6E6E6");
  EstimationOn.style("width", "100px");
  EstimationOn.style("height", "22px");
  //EstimationOn.style("color", "white");
  EstimationOn.style("border-style", "none");
  EstimationOn.style("font-family", "Helvetica");
  EstimationOn.style("font-size", "0.8rem");

  EstimationOff = createButton("Off");
  EstimationOff.position(w * 0.865, 240);
  EstimationOff.mousePressed(userOn);
  EstimationOff.style("background-color", "black");
  EstimationOff.style("width", "100px");
  EstimationOff.style("height", "22px");
  EstimationOff.style("color", "white");
  EstimationOff.style("border-style", "none");
  EstimationOff.style("font-family", "Helvetica");
  EstimationOff.style("font-size", "0.8rem");



  title = createP("Impact on:");
  title.position(w * 0.8, 280);
  title.style("font-family", "Helvetica");
  title.style("font-size", "0.8rem");

  Impact = createButton("Water");
  Impact.position(w * 0.8, 320);
  Impact.mousePressed(changeColor);
  Impact.mousePressed(revertColor);
  Impact.style("background-color", "black");
  Impact.style("width", "100px");
  Impact.style("height", "22px");
  Impact.style("color", "white");
  Impact.style("font-family", "Helvetica");
  Impact.style("font-size", "0.8rem");

  Impact = createButton("GHG");
  Impact.position(w * 0.865, 320);
  Impact.mousePressed(changeColor);
  Impact.mousePressed(revertColor);
  Impact.style("background-color", "black");
  Impact.style("width", "100px");
  Impact.style("height", "22px");
  Impact.style("color", "white");
  Impact.style("font-family", "Helvetica");
  Impact.style("font-size", "0.8rem");

  Impact = createButton("Land");
  Impact.position(w * 0.8, 340);
  Impact.mousePressed(changeColor);
  Impact.mousePressed(revertColor);
  Impact.style("background-color", "black");
  Impact.style("width", "100px");
  Impact.style("height", "22px");
  Impact.style("color", "white");
  Impact.style("font-family", "Helvetica");
  Impact.style("font-size", "0.8rem");

  Impact = createButton("");
  Impact.position(w * 0.865, 340);
  Impact.mousePressed(changeColor);
  Impact.mousePressed(revertColor);
  Impact.style("background-color", "black");
  Impact.style("width", "100px");
  Impact.style("height", "22px");
  Impact.style("color", "white");
  Impact.style("font-family", "Helvetica");
  Impact.style("font-size", "0.8rem");

  title = createP("Stage:");
  title.position(w * 0.8, 380);
  title.style("font-family", "Helvetica");
  title.style("font-size", "0.8rem");

  Stage = createButton("Production");
  Stage.position(w * 0.8, 420);
  Stage.mousePressed(changeColor);
  Stage.mousePressed(revertColor);
  Stage.style("background-color", "black");
  Stage.style("width", "100px");
  Stage.style("height", "22px");
  Stage.style("color", "white");
  Stage.style("font-family", "Helvetica");
  Stage.style("font-size", "0.8rem");

  Stage = createButton("Processing");
  Stage.position(w * 0.865, 420);
  Stage.mousePressed(changeColor);
  Stage.mousePressed(revertColor);
  Stage.style("background-color", "black");
  Stage.style("width", "100px");
  Stage.style("height", "22px");
  Stage.style("color", "white");
  Stage.style("font-family", "Helvetica");
  Stage.style("font-size", "0.8rem");

  Stage = createButton("Distribution");
  Stage.position(w * 0.8, 440);
  Stage.mousePressed(changeColor);
  Stage.mousePressed(revertColor);
  Stage.style("background-color", "black");
  Stage.style("width", "100px");
  Stage.style("height", "22px");
  Stage.style("color", "white");
  Stage.style("font-family", "Helvetica");
  Stage.style("font-size", "0.8rem");

  Stage = createButton("Consumption");
  Stage.position(w * 0.865, 440);
  Stage.mousePressed(changeColor);
  Stage.mousePressed(revertColor);
  Stage.style("background-color", "black");
  Stage.style("width", "100px");
  Stage.style("height", "22px");
  Stage.style("color", "white");
  Stage.style("font-family", "Helvetica");
  Stage.style("font-size", "0.8rem");

  title = createP("Grid:");
  title.position(w * 0.8, 480);
  title.style("font-family", "Helvetica");
  title.style("font-size", "0.8rem");


  Grid = createButton("On");
  Grid.position(w * 0.8, 520);
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
  Gridoff.position(w * 0.865, 520);
  Gridoff.mousePressed(revertColor);
  Gridoff.style("background-color", "black");
  Gridoff.style("width", "100px");
  Gridoff.style("height", "22px");
  Gridoff.style("color", "white");
  Gridoff.style("border-style", "none");
  Gridoff.style("font-family", "Helvetica");
  Gridoff.style("font-size", "0.8rem");


  title = createP("Layout:");
  title.position(w * 0.8,560);
  title.style("font-family", "Helvetica");
  title.style("font-size", "0.8rem");


  Layout1 = createImg('L1.png');
  Layout1.position(w * 0.8, 600);
  Layout1.mousePressed(changeLayout);
  // Layout1.mousePressed(revertColor);
  Layout1.style("background-color", "black");
  Layout1.style("width", "100px");
  Layout1.style("height", "45px");
  Layout1.style("border-style", "none");
  Layout1.style("color", "white");
  Layout1.style("font-family", "Helvetica");
  Layout1.style("font-size", "0.8rem");

  // img2 = createImg();
  // img.position(20, 50);
  //img2.style("width", "50px");
  Layout2 = createImg('L2.png');
  Layout2.position(w * 0.865,600);
  Layout2.mousePressed(changeLayout);
  Layout2.style("background-color", "black");
  Layout2.style("width", "100px");
  Layout2.style("height", "45px");
  Layout2.style("color", "white");
  Layout2.style("border-style", "none");
  Layout2.style("font-family", "Helvetica");
  Layout2.style("font-size", "0.8rem");


  Export = createButton("EXPORT");
  Export.position(w * 0.8, 685);
  //Export.mousePressed(changeColor);
  Export.style("background-color", "#262626");
  Export.style("width", "100px");
  Export.style("height", "22px");
  Export.style("border-style", "none");
  Export.style("color", "white");
  Export.style("font-family", "Helvetica");
  Export.style("font-size", "0.8rem");


  Share = createButton("SHARE");
  Share.position(w * 0.865, 685);
  Share.mousePressed(revertColor);
  Share.style("background-color", "black");
  Share.style("width", "100px");
  Share.style("height", "22px");
  Share.style("color", "white");
  Share.style("border-style", "none");
  Share.style("font-family", "Helvetica");
  Share.style("font-size", "0.8rem");



  chart = createP("CHART");
  chart.position(30, 5);
  chart.style("font-family", "Helvetica");
  chart.style("font-size", "0.9rem");
  var button = createImg('right-arrow.png');
  button.mousePressed(showKey);
  button.position(270, 20);
  button.style("color", "black");
  button.style("background-color", "white");
  button.style("width", "10px");
  button.style("font-family", "Helvetica");
  button.style("font-size", "0.8rem");
  img = createImg('chart.png', 'chart.png');
  img.position(w * 0.262, 25);
  img.style("width", "700px");
  img.style("background-color", "#E6E6E6");
  // img.style("height", "600px");
  img.hide();


  readkey = createP("READING KEY");
  readkey.position(30, 45);
  readkey.style("font-family", "Helvetica");
  readkey.style("font-size", "0.9rem");
  key = createImg('key.png');
  key.position(30, 100);
  key.style("width", "220px");


  //   img3 = createImg('chart.png', 'chart.png');
  // img3.position(w * 0.262, 25);
  // img3.style("width", "700px");
  //img3.style("background-color", "#E6E6E6");





  Kiteset = new kiteset();


}

function draw() {
  push()
  background(230);


  translate(overallXOffset, 0);

  scale(overallScale);
  Kiteset.show();
  // Kiteset.showUser();

  Kiteset.kiteWater();
  Kiteset.kiteGreen();
  Kiteset.kiteLand();
  pop()

  let slideDisp = document.getElementById('sliderDisplay');
  // print(slider.value())


 slideDisp.innerText = slider.value() + ' Grams';
 
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
  EstimationOff.style("color", "black");
  EstimationOn.style("background-color", "black");
EstimationOn.style("color", "white");

}

function userOff() {
  // print('on')

  showEstimation = false;
  EstimationOn.style("background-color", "#E6E6E6");
  EstimationOn.style("color", "black");
  EstimationOff.style("background-color", "black");
EstimationOff.style("color", "white");
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



function changeLayout(){

}





function keyTyped() {
  if (key == 'f') {
    let fs = fullscreen();
    fullscreen(!fs);
  } else {
    !fullscreen(!fs);
  }
}


function homepage() {
  // creA('https://richapatidar.github.io/kifo_1/', 'this is a link');
  location.href = 'https://richapatidar.github.io/kifo_1/';
}