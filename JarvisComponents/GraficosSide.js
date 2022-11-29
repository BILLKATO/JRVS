
function desenhar(context)
{
  var rand1= Math.random()*100;
  var rand2= Math.random()*100;
  var rand3= Math.random()*100;
  var rand4= Math.random()*100;

  context.fillStyle = "#008080";
  context.fillRect(150,400,100,10);
  context.fillRect(150,415,100,10);
  context.fillRect(150,430,100,10);
  context.fillRect(150,445,100,10);

 context.fillStyle = "#48D1CC";
 context.fillRect(150,400,rand1,10);
 context.fillRect(150,415,rand2,10);
 context.fillRect(150,430,rand3,10);
 context.fillRect(150,445,rand4,10);

 context.fillStyle = "#008080";
 context.fillRect(138,400,10,55);
};

module.exports = { desenhar };