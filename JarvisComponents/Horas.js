var pontoshoras=0,pontos=true,sentidoarohora=0,somadorhora=0;

function desenhar(context)
 {
  var color = "#48D1CC";
  var data = new Date();
  var hora = data.getHours();
  var minutes = data.getMinutes();

  if(pontoshoras >= 7)
  {
   if(pontos==true){color = "#000000"; pontos=false;}
   else if(pontos==false){color = "#48D1CC"; pontos=true}
   pontoshoras=0;
  }

  if(sentidoarohora <= 0) somadorhora = 0.2;
  else if(sentidoarohora >= 2) somadorhora = (-0.2);

  if(minutes<10) minutes= "0"+minutes;
  if(hora<10) hora= "0"+hora;

  context.beginPath();
  context.strokeStyle = "#48D1CC";
  context.lineWidth = 6;
  context.arc(350, 60, 55, 0,Math.PI + (Math.PI * 2) / 2, true);
  context.stroke();

  context.beginPath();
  context.strokeStyle = "#48D1CC";
  context.lineWidth = 2;
  context.arc(350, 60, 39, 0,Math.PI + (Math.PI * 2) / 2, true);
  context.stroke();

  context.beginPath();
  context.strokeStyle = "#48D1CC";
  context.lineWidth = 5;
  context.arc(350, 60, 40, 0.5+sentidoarohora,Math.PI + (Math.PI * 0.5+sentidoarohora) / 2, true);
  context.stroke();

  context.fillStyle = color;
  context.font = '20pt Tahoma';
  context.fillText(":",344,68);

  context.fillStyle = "#48D1CC";
  context.font = '20pt Tahoma';
  context.fillText(hora+" "+minutes,315,70);

  pontoshoras++;
  sentidoarohora = sentidoarohora + somadorhora;
 }

module.exports = { desenhar };