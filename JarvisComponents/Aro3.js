var movearo3 = 0, sentido_aro3 = 0;

function desenhar(context,canvaswidth)
{
   var validatrava = Math.random()*100, trava = false;

  if(movearo3 <=0){ sentido_aro3 = 0.2; trava=true;}
  if(movearo3 >=2){ sentido_aro3= -0.2; trava=true;}

  if(validatrava >= 90) trava=false;

  context.beginPath();
  context.strokeStyle = "#FF0000";
  context.lineWidth = 5;
  context.arc((canvaswidth*300)/600, 230, 110, (Math.PI * (movearo3+1.70)) ,Math.PI + (Math.PI * (movearo3+0.8)) / 2, true);
  context.stroke();

  context.beginPath();
  context.strokeStyle = "#FF0000";
  context.lineWidth = 5;
  context.arc((canvaswidth*300)/600, 230, 114, (Math.PI * (movearo3+1.50)) ,Math.PI + (Math.PI * (movearo3+0.8)) / 2, true);
  context.stroke();

  context.beginPath();
  context.strokeStyle = "#008080";
  context.lineWidth = 8;
  context.arc((canvaswidth*300)/600, 230, 96, 0,Math.PI + (Math.PI * 2) / 2, true);
  context.stroke();

  context.beginPath();
  context.strokeStyle = "#48D1CC";
  context.lineWidth = 17;
  context.arc((canvaswidth*300)/600, 230, 100, movearo3,Math.PI + (Math.PI * (movearo3+0.8)) / 2, true);
  context.stroke();

  if(trava == false) movearo3 = movearo3 + sentido_aro3;
};

module.exports = { desenhar };