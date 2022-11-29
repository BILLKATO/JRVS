var changecolor_nucleoaro = 0;

function desenhar(context,canvaswidth)
{
 var color1 = "#48D1CC",color2 = "#008080";

 if(changecolor_nucleoaro == 0){color1="#48D1CC"; color2="#008080";}
 else if(changecolor_nucleoaro == 10){color1="#008080"; color2="#48D1CC"; changecolor_nucleoaro=0;}
 changecolor_nucleoaro++;

 context.beginPath();
 context.strokeStyle = color1;
 context.lineWidth = 5;
 context.arc((canvaswidth*300)/600, 230, 12, 0,Math.PI + (Math.PI * 2) / 2, true);
 context.stroke();

 context.beginPath();
 context.strokeStyle = color2;
 context.lineWidth = 5;
 context.arc((canvaswidth*300)/600, 230, 12, 0,Math.PI + (Math.PI * 3) / 2, true);
 context.stroke();

 context.beginPath();
 context.strokeStyle = color1;
 context.lineWidth = 5;
 context.arc((canvaswidth*300)/600, 230, 12, 0,Math.PI + (Math.PI * 0.1) / 2, true);
 context.stroke();

 context.beginPath();
 context.strokeStyle = color2;
 context.lineWidth = 5;
 context.arc((canvaswidth*300)/600, 230, 12, 0,Math.PI + (Math.PI * 1) / 2, true);
 context.stroke();
};

module.exports = {desenhar};