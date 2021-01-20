class Pointer {

  // constructor(Ax1, Ay1, Bx1, By1, Cx1, Cy1, lowAngle, midAngle, highAngle) {
  constructor(Ax1, Ay1, lowAngle, midAngle, highAngle) {

    this.a = createVector(Ax1, Ay1);
    // this.b = createVector(Bx1, By1);
    // this.c = createVector(Cx1, Cy1);

    this.value = createVector(Ax1, Ay1);

    this.lowAngle = lowAngle
    this.midAngle = midAngle
    this.highAngle = highAngle

    this.isSet = false;
    this.hasInitialValue = false;
  }

  mouseAngle(adjustedMouseX, adjustedMouseY, cx, cy) {
    //let xdist = mouseX-centre
    //let angle = degrees(asin(xdist/hypot))
    //print("       ", xdist, hypot, angle)
    //return angle


    push()
    translate(cx, cy);

    let a = atan2(adjustedMouseY - cy, adjustedMouseX - cx);
    if (a < 0)
      a = degrees(a) + 360
    else
      a = (degrees(a))
    pop()
    return (360 - a + 90)
  }

  show(Bx, By, Cx, Cy, b, c) {

    //print("Parent"+this.parent)


    let isDragged;
    let BC = 50;//dist(Bx, By, Cx, Cy);
// print(BC)

    let adjustedMouseX = (mouseX - overallXOffset) / overallScale
    let adjustedMouseY = (mouseY - overallYOffset) / overallScale

    if (mouseIsPressed) {

      if (dist(this.value.x, this.value.y, adjustedMouseX, adjustedMouseY) < BC) {
        isDragged = true;
       this.hasInitialValue = true;
        // print('clicked')
      }

    } else {
      isDragged = false;
      fill(255);
      if (this.parent !== undefined)
        this.parent.userValue = undefined

    }
    if (isDragged) {

      let length = dist(adjustedMouseX, adjustedMouseY, this.a.x, this.a.y);
      let a = this.mouseAngle(adjustedMouseX, adjustedMouseY, this.a.x, this.a.y)

      if (a > this.lowAngle && a < this.highAngle) {
        // 200, 200, 250, 150
        this.value.x = this.a.x + length * sin(radians(this.midAngle));
        this.value.y = this.a.y + length * cos(radians(this.midAngle));

        //print("here")
        let xMidway;
        let yMidway

        //print(b.x, b.y, c.x, c.y)
        if (b.y < c.y) {
          //print("A")
          if (b.x < c.x)
            xMidway = b.x + (abs(c.x - b.x) / 2);
          else
            xMidway = c.x + (abs(c.x - b.x) / 2);

          yMidway = c.y - (abs(b.y - c.y) / 2);

          if (dist(this.value.x, this.value.y, this.a.x, this.a.y) > dist(xMidway, yMidway, this.a.x, this.a.y)) {
            this.value.x = xMidway
            this.value.y = yMidway
          }


        } else {
          //print("B")
          if (b.x < c.x)
            xMidway = b.x + (abs(b.x - c.x) / 2);
          else
            xMidway = c.x + (abs(b.x - c.x) / 2);

          yMidway = c.y + (abs(b.y - c.y) / 2);

          if (dist(this.value.x, this.value.y, this.a.x, this.a.y) > dist(xMidway, yMidway, this.a.x, this.a.y)) {
            this.value.x = xMidway
            this.value.y = yMidway
          }
        }
        //push();
        
        push();
        stroke(255);
        strokeWeight(0.8);
        line(this.a.x, this.a.y, this.value.x, this.value.y);  
        pop();
        
        push();
        stroke(0);
        strokeWeight(0.5);
        fill(255);
        ellipse(this.value.x, this.value.y, 5);
        pop();

        noStroke();
        fill(0);
        ellipse(this.a.x, this.a.y, 10);
        //pop();

        // ellipse(b.x, b.y, 10, 10);
        // ellipse(c.x, c.y, 10, 10);
        //ellipse(xMidway, yMidway, 5, 5);

        // this.parent.userValue ;

      }
    } else {

      push();
      stroke(255);
      strokeWeight(0.8);
      line(this.a.x, this.a.y, this.value.x, this.value.y);  
      pop();

        push();
        stroke(0);
        strokeWeight(0.5);
        fill(255);
        ellipse(this.value.x, this.value.y, 5);
        pop();
      
      noStroke();
      fill(0);
      ellipse(this.a.x, this.a.y, 10);
    }
    
   if(isDragged ==false && this.hasInitialValue == true && this.value.x != this.a.x){
     this.isSet = true;
   }

   return this.isSet

  }
}