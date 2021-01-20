
//upper kite
class kitewater {

  constructor(x1, y1, x2, y2, x3, y3, ID) {
    //console.log(x1)
    this.a = createVector(x1, y1);
    this.b = createVector(x2, y2);
    this.c = createVector(x3, y3);

    this.ID = ID;
        
    this.pointers; // = []
    switch (ID) {
      case (1):
        this.pointers = new Pointer(x1, y1, 199, 211, 225);
        break;
         case (2):
        this.pointers = new Pointer(x1, y1, 180, 188, 199);
        break;
        case (3):
        this.pointers = new Pointer(x1, y1, 161, 170, 180);
        break;
         case (4):
        this.pointers = new Pointer(x1, y1, 135, 150, 161);
        break;
    }

//     this.pointers = []

//     this.pointers.push(new Pointer(x1, y1, 199, 211, 225));
//     this.pointers.push(new Pointer(x1, y1, 180, 188, 199));
//     this.pointers.push(new Pointer(x1, y1, 161, 170, 180));
//     this.pointers.push(new Pointer(x1, y1, 135, 150, 161));

    this.self = this
    
    this.isSet =false;// [false, false, false, false];
   
  }



  //first triangle
  kone(value) {
        //print("kone")
     if (this.userValue !== undefined)
      value = this.userValue

    value =  map(value, 0,100, 1, numberOfSegments);
    // console.log(value)
    let AB = dist(this.a.x, this.a.y, this.b.x, this.b.y);
    let AC = dist(this.a.x, this.a.y, this.c.x, this.c.y);

    let ABSegmentLength = AB / numberOfSegments;
    let ACSegmentLength = AC / numberOfSegments;

    let Bx 
    let By
    let Cx 
    let Cy

    for (var i = numberOfSegments; i >= 0; i--) {

      if ((i <= value && this.isSet)  || (i <= value &&showEstimation)) {

        fill(217, 210, 27); //green one

      } else {
        noFill();
      }

      Bx = this.a.x + (i * ABSegmentLength) * sin(radians(225));
      By = this.a.y + (i * ABSegmentLength) * cos(radians(225));
      Cx = this.a.x + (i * ACSegmentLength) * sin(radians(199));
      Cy = this.a.y + (i * ACSegmentLength) * cos(radians(199));

      stroke(0, 0, 255, 99);
      triangle(this.a.x, this.a.y, Bx, By, Cx, Cy);


    }

    this.pointers.parent = this.self
    this.isSet =this.pointers.show(Bx, By, Cx, Cy, this.b, this.c);
    
    let midLength = (AB+AC)/2
    let userDist = dist(this.a.x, this.a.y, this.pointers.value.x, this.pointers.value.y)+ABSegmentLength
    let proportion = userDist/midLength
    
    this.kOneUserValue = Math.round(60*proportion)

  }


  //second triangle
  ktwo(value) {
       // print("ktwo")
     if (this.userValue !== undefined)
      value = this.userValue

    value = map(value, 0, 100, 1, numberOfSegments);
    let AC = dist(this.a.x, this.a.y, this.b.x, this.b.y);
    let AD = dist(this.a.x, this.a.y, this.c.x, this.c.y);

    let ACSegmentLength = AC / numberOfSegments;
    let ADSegmentLength = AD / numberOfSegments;

    let Cx 
    let Cy
    let Dx 
    let Dy 

    for (var i = numberOfSegments; i >= 0; i--) {

      if ((i <= value && this.isSet)  || (i <= value &&showEstimation)) {

        fill(171, 191, 22); //green two
      } else {
        noFill();
      }

      Cx = this.a.x + (i * ADSegmentLength) * sin(radians(180));
      Cy = this.a.y + (i * ADSegmentLength) * cos(radians(180));
      Dx = this.a.x + (i * ACSegmentLength) * sin(radians(199));
      Dy = this.a.y + (i * ACSegmentLength) * cos(radians(199));

      stroke(0, 0, 255, 90);
      triangle(this.a.x, this.a.y, Cx, Cy, Dx, Dy);

    }

    this.pointers.parent = this.self
   this.isSet = this.pointers.show(Cx, Cy, Dx, Dy, this.b, this.c);
    
    let midLength = (AC+AD)/2
    let userDist = dist(this.a.x, this.a.y, this.pointers.value.x, this.pointers.value.y)+ACSegmentLength
    let proportion = userDist/midLength
    
    this.kTwoUserValue = Math.round(60*proportion)
//print(this.isSet)
  }

  //third triangle
  kthree(value) {
      //print("kthree")
     if (this.userValue !== undefined)
      value = this.userValue

    value = map(value, 0,100, 1, numberOfSegments);

    let AD = dist(this.a.x, this.a.y, this.b.x, this.b.y);
    let AE = dist(this.a.x, this.a.y, this.c.x, this.c.y);

    let ADSegmentLength = AD / numberOfSegments;
    let AESegmentLength = AE / numberOfSegments;

    let Dx 
    let Dy
    let Ex 
    let Ey 

    for (var i = numberOfSegments; i >= 0; i--) {

      if ((i <= value && this.isSet)  || (i <= value &&showEstimation)) {

        fill(70, 124, 35); //green three
      } else {
        noFill();
      }

      Dx = this.a.x + (i * AESegmentLength) * sin(radians(161));
      Dy = this.a.y + (i * AESegmentLength) * cos(radians(161));
      Ex = this.a.x + (i * ADSegmentLength) * sin(radians(180));
      Ey = this.a.y + (i * ADSegmentLength) * cos(radians(180));

      stroke(0, 0, 255, 90);
      triangle(this.a.x, this.a.y, Dx, Dy, Ex, Ey);
      // let pointer = new Pointer(300, 300);
      // pointer.show();
      //this.pointers.show(Dx, Dy, Ex, Ey, this.b, this.c);
    }
    this.pointers.parent = this.self
   this.isSet = this.pointers.show(Dx, Dy, Ex, Ey, this.b, this.c);
    
    let midLength = (AD+AE)/2
    let userDist = dist(this.a.x, this.a.y, this.pointers.value.x, this.pointers.value.y)+ADSegmentLength
    let proportion = userDist/midLength
    
    this.kThreeUserValue = Math.round(60*proportion)

  }



  //fourth triangle
  kfour(value) {
    //print("kfour")
    
    if (this.userValue !== undefined)
      value = this.userValue

    value = map(value, 0, 100,1, numberOfSegments);

    let AE = dist(this.a.x, this.a.y, this.b.x, this.b.y);
    let AF = dist(this.a.x, this.a.y, this.c.x, this.c.y);

    let AESegmentLength = AE / numberOfSegments;
    let AFSegmentLength = AF / numberOfSegments;

    let Ex 
    let Ey
    let Fx 
    let Fy 
      
    for (var i = numberOfSegments; i >= 0; i--) {

      if ((i <= value && this.isSet)  || (i <= value &&showEstimation)) {

        fill(40, 73, 28); //orange
      } else {
        noFill();
      }

      Ex = this.a.x + (i * AFSegmentLength) * sin(radians(135));
      Ey = this.a.y + (i * AFSegmentLength) * cos(radians(135));
      Fx = this.a.x + (i * AESegmentLength) * sin(radians(161));
      Fy = this.a.y + (i * AESegmentLength) * cos(radians(161));

      stroke(0, 0, 255, 90);
      triangle(this.a.x, this.a.y, Ex, Ey, Fx, Fy);
      
   }
    
    this.pointers.parent = this.self
   this.isSet = this.pointers.show(Ex, Ey, Fx, Fy, this.b, this.c);
    
    let midLength = (AE+AF)/2
    let userDist = dist(this.a.x, this.a.y, this.pointers.value.x, this.pointers.value.y)+AESegmentLength
    let proportion = userDist/midLength
    
    this.kFourUserValue = Math.round(60*proportion)

  }
  
}