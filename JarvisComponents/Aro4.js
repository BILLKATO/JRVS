const ReatorArc = require("./ReatorArc.js");
var movearo4 = 150, sentido_aro4 = 0;

function desenhar(context, canvaswidth)
{
 context.beginPath();
 context.strokeStyle = "#48D1CC";
 context.lineWidth = 2;
 context.arc((canvaswidth*300)/600, 230, movearo4, 0,Math.PI + (Math.PI * 2) / 2, true);
 context.stroke();

 ReatorArc.desenhar(context, canvaswidth, 3,sentido_aro4);

 if(movearo4 <= 150) sentido_aro4 = 1;
 if(movearo4 >= 170) sentido_aro4 = -1;

 movearo4 = movearo4 + sentido_aro4;
};

module.exports = { desenhar };