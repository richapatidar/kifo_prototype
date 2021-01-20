//right kite
class kitegreen {

  constructor(x1, y1, x2, y2, x3, y3, ID) {
    this.a = createVector(x1, y1);
    this.b = createVector(x2, y2);
    this.c = createVector(x3, y3);
   
    
     this.ID = ID;
        
    this.pointers; // = []
    switch (ID) {
      case (1):
        this.pointers = new Pointer(310, 320, 109, 121, 135);
        break;
         case (2):
        this.pointers = new Pointer(310, 320, 90, 98, 109);
        break;
        case (3):
        this.pointers = new Pointer(310, 320, 431, 440, 450);
        break;
         case (4):
        this.pointers = new Pointer(310, 320, 405, 420, 431);
        break;}
//     this.pointers = [];
    
    
//   this.pointers.push(new Pointer(310, 320, 109, 121, 135));
//     this.pointers.push(new Pointer(310, 320, 90, 98, 109));
//     this.pointers.push(new Pointer(310, 320, 431, 440, 450));
//     this.pointers.push(new Pointer(310, 320, 405, 420, 431));

    this.self = this
    
    this.isSet =false;
  }

  //first triangle
  kone(value) {
    if (this.userValue !== undefined)
      value = this.userValue

    value = map(value, 0, 1000, 1, numberOfSegments);

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

        fill(244, 167, 0); //orange
      } else {
        noFill();
      }
      
      Bx = this.a.x + (i * ABSegmentLength) * sin(radians(135));
      By = this.a.y + (i * ABSegmentLength) * cos(radians(135));
      Cx = this.a.x + (i * ACSegmentLength) * sin(radians(109));
      Cy = this.a.y + (i * ACSegmentLength) * cos(radians(109));

      stroke(0, 104, 55, 90);
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
  }


  //second triangle
  ktwo(value) {
if (this.userValue !== undefined)
      value = this.userValue

    value = map(value, 0, 1000, 1, numberOfSegments);
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

        fill(244, 167, 0); //orange
      } else {
        noFill();
      }

      Cx = this.a.x + (i * ADSegmentLength) * sin(radians(90));
      Cy = this.a.y + (i * ADSegmentLength) * cos(radians(90));
      Dx = this.a.x + (i * ACSegmentLength) * sin(radians(109));
      Dy = this.a.y + (i * ACSegmentLength) * cos(radians(109));

      stroke(0, 104, 55, 90);
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
    //print(midLength, userDist, this.kTwoUserValue)
  }


  //third triangle
  kthree(value) {
 if (this.userValue !== undefined)
      value = this.userValue

    value = map(value, 0, 1000,1, numberOfSegments);

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

        fill(200, 45, 27); //red
      } else {
        noFill();
      }

      Dx = this.a.x + (i * AESegmentLength) * sin(radians(431));
      Dy = this.a.y + (i * AESegmentLength) * cos(radians(431));
      Ex = this.a.x + (i * ADSegmentLength) * sin(radians(450));
      Ey = this.a.y + (i * ADSegmentLength) * cos(radians(450));

      stroke(0, 104, 55, 90);
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
  }


  //fourth triangle
  kfour(value) {

   if (this.userValue !== undefined)
      value = this.userValue

    value = map(value, 0, 1000, 1, numberOfSegments);
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

        fill(200, 45, 27); //red
      } else {
        noFill();
      }

      Ex = this.a.x + (i * AFSegmentLength) * sin(radians(405));
      Ey = this.a.y + (i * AFSegmentLength) * cos(radians(405));
      Fx = this.a.x + (i * AESegmentLength) * sin(radians(431));
      Fy = this.a.y + (i * AESegmentLength) * cos(radians(431));

      stroke(0, 104, 55, 90);
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
  }
}