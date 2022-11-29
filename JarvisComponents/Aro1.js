var movearo1=0, sentido_aro1=0;

function desenhar(context, canvaswidth)
{
 var validatrava = Math.random()*100, trava = false;

 if(movearo1 >= 12) {sentido_aro1 = (-0.5); trava=true;}
 else if(movearo1 <= 0) {sentido_aro1 = 0.5; trava=true;}

 if(validatrava >= 90) trava=false;

 context.beginPath();
 context.strokeStyle = "#008080";
 context.lineWidth = 8;
 context.arc((canvaswidth*300)/600, 230, 45, 0, Math.PI + (Math.PI * 2) / 2, true);
 context.stroke();

 context.beginPath();
 context.strokeStyle = "#48D1CC";
 context.lineWidth = 5;
 context.arc((canvaswidth*300)/600, 230, 43, movearo1, Math.PI + (Math.PI * (movearo1 + 1.50)) / 2, true);
 context.stroke();

 if(trava == false)
 movearo1 = movearo1 + sentido_aro1;
};

module.exports = { desenhar };