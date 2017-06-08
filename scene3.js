rainbow = [];

function drawScene3() {
    displayText("Y O U  W I N","black",120,30,200);

    image(wink,600,250);

    //Background fill animation, was originally rainbow coloured
    rainbow.push({x:random(0,width),y:530,speedX:random(-4.5,4.5),speedY:-2});
    for (i=0;i<rainbow.length;i++) {
      fill("white");
      rect(rainbow[i].x,rainbow[i].y,10,10);
      rainbow[i].x += rainbow[i].speedX;
      rainbow[i].y += rainbow[i].speedY;
      if (rainbow[i].y < 0) {
        rainbow.splice(i,1);
      }
    }
}
