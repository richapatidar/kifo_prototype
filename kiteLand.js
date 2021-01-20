//left kite
class kiteland {

  constructor(x1, y1, x2, y2, x3, y3, ID) {
    this.a = createVector(x1, y1);
    this.b = createVector(x2, y2);
    this.c = createVector(x3, y3);

     this.ID = ID;
        
    this.pointers; // = []
    switch (ID) {
      case (1):
        this.pointers = new Pointer(290, 320, 289, 301, 315);
        break;
         case (2):
        this.pointers = new Pointer(290, 320,  270, 278, 289);
        break;
        case (3):
        this.pointers = new Pointer(290, 320,  251, 260, 270);
        break;
         case (4):
        this.pointers = new Pointer(290, 320, 225, 240, 251);
        break;
    }
//     this.pointers = []
   
//   this.pointers.push(new Pointer(290, 320, 289, 301, 315));
//     this.pointers.push(new Pointer(290, 320,  270, 278, 289));
//     this.pointers.push(new Pointer(290, 320,  251, 260, 270));
//     this.pointers.push(new Pointer(290, 320, 225, 240, 251));

    this.self = this
    this.isSet =false;
  }


  //first triangle
  kone(value) {
      if (this.userValue !== undefined)
      value = this.userValue

    value = map(value, 0, 10000, 1, numberOfSegments);
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

        fill(29, 162, 178); //light blue
      } else {
        noFill();
      }
      //print(ABSegmentLength)
      Bx = this.a.x + (i * ABSegmentLength) * sin(radians(315));
      By = this.a.y + (i * ABSegmentLength) * cos(radians(315));
      Cx = this.a.x + (i * ACSegmentLength) * sin(radians(289));
      Cy = this.a.y + (i * ACSegmentLength) * cos(radians(289));

      stroke(251, 176, 59, 90);
      triangle(this.a.x, this.a.y, Bx, By, Cx, Cy);
      // let pointer = new Pointer(300, 300);
      // pointer.show();
      //this.pointers[0].show(Bx, By, Cx, Cy, this.b, this.c);
    }
         this.pointers.parent = this.self
    this.isSet =this.pointers.show(Bx, By, Cx, Cy, this.b, this.c);
    
    let midLength = (AB+AC)/2
    let userDist = dist(this.a.x, this.a.y, this.pointers.value.x, this.pointers.value.y)+ABSegmentLength
    let proportion = userDist/midLength
    
    this.kOneUserValue = Math.round(60*proportion)
    //print(midLength, userDist, this.kOneUserValue)
  }


  //second triangle
  ktwo(value) {
    if (this.userValue !== undefined)
      value = this.userValue

    value = map(value, 0, 10000, 1, numberOfSegments);
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

        fill(29, 162, 178); //light blue
      } else {
        noFill();
      }

      Cx = this.a.x + (i * ADSegmentLength) * sin(radians(270));
      Cy = this.a.y + (i * ADSegmentLength) * cos(radians(270));
      Dx = this.a.x + (i * ACSegmentLength) * sin(radians(289));
      Dy = this.a.y + (i * ACSegmentLength) * cos(radians(289));

      stroke(251, 176, 59, 90);
      triangle(this.a.x, this.a.y, Cx, Cy, Dx, Dy);
      // let pointer = new Pointer(300, 300);
      // pointer.show();
    //this.pointers[1].show(Cx, Cy, Dx, Dy, this.b, this.c);
    }
           this.pointers.parent = this.self
   this.isSet = this.pointers.show(Cx, Cy, Dx, Dy, this.b, this.c);
    
    let midLength = (AC+AD)/2
    let userDist = dist(this.a.x, this.a.y, this.pointers.value.x, this.pointers.value.y)+ACSegmentLength
    let proportion = userDist/midLength
    
    this.kTwoUserValue = Math.round(60*proportion)
  }

  //third triangle
  kthree(value) {
  if (this.userValue !== undefined)
      value = this.userValue

    value = map(value, 0, 100000, 1, numberOfSegments);
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

        fill(21, 72, 139); //dark blue
      } else {
        noFill();
      }

      Dx = this.a.x + (i * AESegmentLength) * sin(radians(251));
      Dy = this.a.y + (i * AESegmentLength) * cos(radians(251));
      Ex = this.a.x + (i * ADSegmentLength) * sin(radians(270));
      Ey = this.a.y + (i * ADSegmentLength) * cos(radians(270));

      stroke(251, 176, 59, 90);
      triangle(this.a.x, this.a.y, Dx, Dy, Ex, Ey);
      // let pointer = new Pointer(300, 300);
      // pointer.show();
      //this.pointers[2].show(Dx, Dy, Ex, Ey, this.b, this.c);
    }
    this.pointers.parent = this.self
   this.isSet = this.pointers.show(Dx, Dy, Ex, Ey, this.b, this.c);
    
    let midLength = (AD+AE)/2
    let userDist = dist(this.a.x, this.a.y, this.pointers.value.x, this.pointers.value.y)+ADSegmentLength
    let proportion = userDist/midLength
    
    this.kThreeUserValue = Math.round(60*proportion)
    //print(midLength, userDist, this.kThreeUserValue)
  }

  //fourth triangle
  kfour(value) {
if (this.userValue !== undefined)
      value = this.userValue


    value = map(value, 0, 100000, 1, numberOfSegments);
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

        fill(21, 72, 139); //dark blue
      } else {
        noFill();
      }

      Ex = this.a.x + (i * AFSegmentLength) * sin(radians(225));
      Ey = this.a.y + (i * AFSegmentLength) * cos(radians(225));
      Fx = this.a.x + (i * AESegmentLength) * sin(radians(251));
      Fy = this.a.y + (i * AESegmentLength) * cos(radians(251));

      stroke(251, 176, 59, 90);
      triangle(this.a.x, this.a.y, Ex, Ey, Fx, Fy);
      // let pointer = new Pointer(300, 300);
      // pointer.show();
      //this.pointers[3].show(Ex, Ey, Fx, Fy, this.b, this.c);
    }
   this.pointers.parent = this.self
   this.isSet = this.pointers.show(Ex, Ey, Fx, Fy, this.b, this.c);
    
    let midLength = (AE+AF)/2
    let userDist = dist(this.a.x, this.a.y, this.pointers.value.x, this.pointers.value.y)+AESegmentLength
    let proportion = userDist/midLength
    
    this.kFourUserValue = Math.round(60*proportion)
   //print(midLength, userDist, this.kFourUserValue)
  }
}