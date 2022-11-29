function desenhar(context)
 {
  context.fillStyle = "#48D1CC";
  context.lineWidth = 2;
  context.strokeRect(250,300,20,15);

  context.beginPath();
  context.lineWidth = 2;
  context.moveTo(250,300);
  context.lineTo(260,307.5);
  context.lineTo(270,300);
  context.stroke();

  context.font = '8pt Tahoma';
  context.fillText("biel.mk@hotmail.com",274,312);
 }

module.exports = { desenhar };