function desenhar(context, canvaswidth)
{
 var coresize = Math.random()*2;

 context.beginPath();
 context.fillStyle = "#5F9EA0";
 context.lineWidth = 17;
 context.arc((canvaswidth*300)/600, 230, 26, 0,Math.PI + (Math.PI * 2) / 2, true);
 context.fill();

 context.beginPath();
 context.fillStyle = "#008080";
 context.lineWidth = 17;
 context.arc((canvaswidth*300)/600, 230, 10, 0,Math.PI + (Math.PI * 2) / 2, true);
 context.fill();

 context.beginPath();
 context.fillStyle = "#48D1CC";
 context.lineWidth = 17;
 context.arc((canvaswidth*300)/600, 230, coresize, 0,Math.PI + (Math.PI * 2) / 2, true);
 context.fill();
};

module.exports = {desenhar};