function desenhar(context, canvaswidth)
{
 for(var i=0; i<6; i++)
 {
  context.beginPath();
  context.strokeStyle = "#48D1CC";
  context.lineWidth = 1;
  chooseCircuit(context, canvaswidth, i)
  context.stroke();
 }
};

function chooseCircuit(context, canvaswidth, circuitType)
{
 switch (circuitType) {
   case 0:
     context.arc((canvaswidth*300)/600, 230, 30, 0,Math.PI + (Math.PI * 2) / 2, true);
   break;
   case 1:
    context.arc((canvaswidth*300)/600, 230, 33, 0,Math.PI + (Math.PI * 0.1) / 2, true);
   break;
   case 2:
    context.arc((canvaswidth*300)/600, 230, 35, 0,Math.PI + (Math.PI * 1.5) / 2, true);
   break;
   case 3:
    context.arc((canvaswidth*300)/600, 230, 35, -1,Math.PI + (Math.PI * 3.5) / 2, true);
   break;
   case 4:
    context.arc((canvaswidth*300)/600, 230, 37, -1,Math.PI + (Math.PI * 3) / 2, true);
   break;
   case 5:
    context.arc((canvaswidth*300)/600, 230, 39, 0,Math.PI + (Math.PI * 2) / 2, true);
   break;
 }
}

module.exports = { desenhar };