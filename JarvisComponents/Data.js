var barradata=40,somadordata = 1;

function desenhar(context)
 {
  var data = new Date();
  var dia = data.getDate();
  var mes = data.getMonth()+1;
  var ano = data.getFullYear();

  if(barradata <= 40) somadordata = 1;
  else if(barradata >= 55) somadordata = (-1);

  if(dia<10) dia= "0"+dia;
  if(mes<10) mes= "0"+mes;
  if(ano<10) ano= "0"+ano;

  context.fillStyle = "#48D1CC";
  context.font = '13pt Tahoma';
  context.fillText(dia+"/"+mes+"/"+ano,420,35);
  context.fillText(dia+"/"+mes+"/"+ano,420,35);
  context.fillText(dia+"/"+mes+"/"+ano,420,35);

  context.fillRect(420,38,barradata,5);
  context.fillRect(460,38,50,2);

  context.beginPath();
  context.lineWidth = 3;
  context.moveTo(420,38);
  context.lineTo(403,70);
  context.stroke();

  barradata = barradata + somadordata;
 }

module.exports = { desenhar };