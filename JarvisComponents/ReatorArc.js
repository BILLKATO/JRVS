function desenhar(context, canvaswidth, reactorType, raio)
{
 var x = 0.05, y = 1.95, ray = 55;
 for(i=0; y >=0; i++)
  {
   context.beginPath();

   if(reactorType == 1)
   {
    context.strokeStyle = "#008080";
    context.lineWidth = 4;
   }
   else if(reactorType == 2)
   {
    context.strokeStyle = "#48D1CC";
    context.lineWidth = 3;
   }
   else if(reactorType == 3)
   {
    context.strokeStyle = "#008080";
    context.lineWidth = 9;
    ray = (140+raio);
   }

   context.arc((canvaswidth*300)/600, 230, ray, (x * Math.PI),(Math.PI * y), true);
   context.stroke();

   if(reactorType == 2)
   {
    x = y - 0.025;
    y = y - 0.05;
   }
   else
   {
    x = y - 0.1;
    y = y - 0.2;
   }
  }
};

module.exports = { desenhar };