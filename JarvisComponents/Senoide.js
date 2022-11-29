var seny=90, sentidoSen=1, senInvert=false, sencont=11, senLimit=751;
function desenhar(context)
{
  for(var i=750; i<=senLimit; i++)
   {
    context.fillStyle = "#008080";
    context.fillRect(i,seny,4,4);
 
   if(i>760 && i<948)
   {
    if(i%20 == 0){senInvert = true; sencont=0;}
 
    if(senInvert == true || sencont<=10)
    {
     seny = seny + 0.5;
     senInvert = false;
     sencont++;
    }
   else
    {
     seny = seny - 0.5;
    }
   }
  }
 seny=90; 
 if(senLimit<=945) senLimit++;
 else senLimit=751;
};

module.exports = { desenhar };