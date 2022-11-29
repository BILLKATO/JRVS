
function desenhar(context)
{
  for(var i=750;i <= 950; i++)
  {
   if(i%10 == 0)
    {
     context.fillStyle = "#008080";
     context.fillRect(i,40,1,100);
    }
 }


 for(var i=40;i <= 140; i++)
  {
   if(i%10 == 0)
    {
     context.fillStyle = "#008080";
     context.fillRect(750,i,200,1);
    }
  }

  context.fillStyle ="#48D1CC";
  context.rect(750,40,200,100);
  context.stroke();
};

module.exports = { desenhar };