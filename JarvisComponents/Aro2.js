
function desenhar(context,canvaswidth)
{
 var trava = Math.random()*100,trava2 = Math.random()*100,color="#48D1CC",raio=64;

 if(trava >= 80) color="#008080";
 else color="#48D1CC";

 if(trava2 >= 50) raio++;
 else raio--;

 context.beginPath();
 context.strokeStyle = color;
 context.lineWidth = 9;
 context.arc((canvaswidth*300)/600, 230, raio, 0,Math.PI + (Math.PI * 2) / 2, true);
 context.stroke();
};

module.exports = { desenhar };