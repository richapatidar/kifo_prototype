function kiteset(x1, y1, x2, y2, x3, y3) {

  this.a = createVector(x1, y1);
  this.b = createVector(x2, y2);
  this.c = createVector(x3, y3);
  
  // print(width,"",height)
  //let temp = width * 0.365
  this.Kite1 = new kitewater(300, 300, 200, 200, 250, 150 ,1);
  this.Kite2 = new kitewater(300, 300, 250, 150, 300, 100, 2);
  this.Kite3 = new kitewater(300, 300, 300, 100, 350, 150, 3);
  this.Kite4 = new kitewater(300, 300, 350, 150, 400, 200, 4);
  
  
  this.Kite5 = new kitegreen(310, 320, 410, 220, 460, 270 ,1);
  this.Kite6 = new kitegreen(310, 320, 460, 270, 510, 320 ,2);
  this.Kite7 = new kitegreen(310, 320, 510, 320, 460, 370 ,3);
  this.Kite8 = new kitegreen(310, 320, 460, 370, 410, 420 ,4);

  
  this.Kite9 = new kiteland(290, 320, 190, 220, 140, 270 ,1);
  this.Kite10 = new kiteland(290, 320, 140, 270, 90, 320 ,2);
  this.Kite11 = new kiteland(290, 320, 90, 320, 140, 370 ,3);
  this.Kite12 = new kiteland(290, 320, 140, 370, 190, 420 ,4);

  
  
  this.show = function() {

    strokeWeight(0.2);

    
    let fName = table.getRow(foodIndex);

    this.kiteWater = function() {

      this.Kite1.kone(parseFloat(fName.getString(1)*slider.value()/1000));
      this.Kite2.ktwo(parseFloat(fName.getString(2)*slider.value()/1000));
      this.Kite3.kthree(parseFloat(fName.getString(3)*slider.value()/1000));
      this.Kite4.kfour(parseFloat(fName.getString(4)*slider.value()/1000));
      
      // if(this.Kite1.isSet !=undefined)
      // print(this.Kite1.pointers)
      //       print(this.Kite2.pointers)
      //       print(this.Kite3.pointers)
      //       print(this.Kite4.pointers)
     }
 
    this.kiteGreen = function() {

      // translate(630, 10);
      // rotate(PI / 2);
      this.Kite5.kone(parseFloat(fName.getString(5)*slider.value()/1000));
      this.Kite6.ktwo(parseFloat(fName.getString(5)*slider.value()/1000));
      this.Kite7.kthree(parseFloat(fName.getString(6)*slider.value()/1000));
      this.Kite8.kfour(parseFloat(fName.getString(6)*slider.value()/1000));     
    }
          
  this.kiteLand = function() {

//       translate(630, 10);
//       rotate(radians(PI/2));
      this.Kite9.kone(parseFloat(fName.getString(7)*slider.value()/1000));
      this.Kite10.ktwo(parseFloat(fName.getString(7)*slider.value()/1000));
      this.Kite11.kthree(parseFloat(fName.getString(8)*slider.value()/1000));
      this.Kite12.kfour(parseFloat(fName.getString(8)*slider.value()/1000));
    }
    
  }


/*user function*/

  this.showUser = function() {

    strokeWeight(0.2);  
    let fName = table.getRow(foodIndex);


    this.kiteWater = function() {

      this.Kite1.kone(this.Kite1.kOneUserValue);
      this.Kite2.ktwo(this.Kite2.kTwoUserValue);
      this.Kite3.kthree(this.Kite3.kThreeUserValue);
      this.Kite4.kfour(this.Kite4.kFourUserValue);      
    }
   

    this.kiteGreen = function() {

      this.Kite5.kone(this.Kite5.kOneUserValue);
      this.Kite6.ktwo(this.Kite6.kTwoUserValue);
      this.Kite7.kthree(this.Kite7.kThreeUserValue);
      this.Kite8.kfour(this.Kite8.kFourUserValue);
    }
    
      
    this.kiteLand = function() {

      this.Kite9.kone(this.Kite9.kOneUserValue);
      this.Kite10.ktwo(this.Kite10.kTwoUserValue);
      this.Kite11.kthree(this.Kite11.kThreeUserValue);
      this.Kite12.kfour(this.Kite12.kFourUserValue);
    }
    
  }  
}