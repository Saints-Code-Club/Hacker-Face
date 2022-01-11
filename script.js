var capture;
function setup() {
	p5.disableFriendlyErrors = true;
  w = windowWidth;
  h = windowHeight;
  createCanvas(w, h);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();

  res = 10;
  pic = [];
  for(i = 0; i < capture.width; i += res) {
    pic[i] = [];
  }

  chars = [];

  /*
  chars[0] = " ";
  chars[1] = ".";
  chars[2] = ":";
  chars[3] = "[";
  chars[4] = "q";
  chars[5] = "#";
  chars[6] = "@";
  */
  /*
  chars[0] = " ";
  chars[1] = "1";
  chars[2] = "0";
  */
  /*
  chars[0] = " ";
  chars[1] = "░";
  chars[2] = "▒";
  chars[3] = "▓";
  chars[4] = "█";
  */
  /*
  chars[0] = ".";
  chars[1] = "*";
  chars[2] = "o";
  chars[3] = String.fromCharCode(4053);
  */
  /*
  chars[0] = String.fromCharCode(5771);
  chars[1] = String.fromCharCode(5772);
  chars[2] = String.fromCharCode(5773);
  chars[3] = String.fromCharCode(5774);
  chars[4] = String.fromCharCode(5775);
  chars[5] = String.fromCharCode(5785);//ᚙ
  */
  /*
  chars[0] = " ";
  chars[1] = ".";
  chars[2] = "*";
  chars[3] = "=";
  //chars[1] = String.fromCharCode(1421);
  //chars[2] = String.fromCharCode(1161);
  //chars[3] = String.fromCharCode(1160);
  //chars[4] = String.fromCharCode(1758);
  //chars[5] = String.fromCharCode(1757);
  //chars[6] = String.fromCharCode(2274);
  chars[4] = String.fromCharCode(4053);//badbad
  */
  
  /*
  chars[0] = " ";
  chars[1] = String.fromCharCode(176);
  chars[2] = String.fromCharCode(177);
  chars[3] = String.fromCharCode(178);
  chars[4] = String.fromCharCode(219);
  */
  /*
  chars[5] = "@";
  chars[4] = "1";
  chars[3] = "/";
  chars[2] = ":";
  chars[1] = ".";
  chars[0] = " ";
  */
  
  chars[11] = String.fromCharCode(4053);//"@"
  chars[10] = String.fromCharCode(4053);//"#"
  chars[9] = "$";
  chars[8] = "%";
  chars[7] = "*";
  chars[6] = "!";
  chars[5] = "~";
  chars[4] = ":";
  chars[3] = ";";
  chars[2] = "'";
  chars[1] = ".";
  chars[0] = " ";
  

/*
  chars[chars.length] = " ";
  chars[chars.length] = " | ";
  chars[chars.length] = "||";
  chars[chars.length] = "|||";
  //chars[chars.length] = "||||";
  //chars[chars.length] = "||||";
  //chars[chars.length] = "|||||";
*/
  //NECESARY FINAL CHARACTER
  chars[chars.length] = " ";


}


function draw() {
  //RADNNOME CHALENGING ASSCIII\
  /*
  if(frameCount%5 == 0) {
    chars[0] = String.fromCharCode(random()*10000);
    chars[1] = String.fromCharCode(random()*10000);
    chars[2] = String.fromCharCode(random()*10000);
    chars[3] = String.fromCharCode(random()*10000);
    chars[4] = String.fromCharCode(random()*10000);
    chars[5] = String.fromCharCode(random()*10000);
    chars[6] = String.fromCharCode(random()*100000);
    chars[7] = String.fromCharCode(random()*100000);
    chars[8] = String.fromCharCode(random()*100000);
    chars[9] = String.fromCharCode(random()*100000);
    chars[10] = String.fromCharCode(random()*100000);
    chars[11] = String.fromCharCode(random()*100000);
  }
  */

  background(0);
  noStroke();
  
  capture.loadPixels();
  if(frameCount%30 < -1) {
    image(capture, 0, 0);
  }
  fill(0, 255, 0);
  textSize(res/10*12);
  //completely fill pic with black and white
  for(let x = 0; x < capture.width; x += res) {
    for(let y = 0; y < capture.height; y += res) {
      let i = getIndex(x, y);
      let r = getR(i);
      let g = getG(i);
      let b = getB(i);
      let bright = (r+g+b)/3;
      pic[x][y] = bright;
      //PICK AND DRAW CHARACTERS
      let picVal = pic[x][y]/255;
      let charIndex = int(picVal * (chars.length-1));
      let char = chars[charIndex];
      if(frameCount%30 > -1) {
        fill(0, 255, 0);
        text(char, x*1.1 - 100, y*1.5 - 70)
        ;
        
      }
    }
  }

  //DRAW GREY PHOTO
  /*
  for(x = 0; x < pic.length; x += res) {
    for(y = 0; y < pic[x].length; y += res) {
      fill(pic[x][y]);
      rect(x, y, res, res);
    }
  }
  */
}

function getIndex(x, y) {
  return (y*capture.width + x) * 4;
}
function getR(i) {
  return capture.pixels[i];
}
function getG(i) {
  return capture.pixels[i + 1];
}
function getB(i) {
  return capture.pixels[i + 2];
}