function desenhar(context)
 {
  var i=370;

  context.fillStyle ="#32CD32";
  context.rect(918,360,105,105);
  context.stroke();

  while(i<470)
  {
   var rand= Math.random()*1000;
   context.font = '8pt Tahoma';
   context.fillText(rand,919,i);
   i =  i + 10;
  }
 }

module.exports = { desenhar };