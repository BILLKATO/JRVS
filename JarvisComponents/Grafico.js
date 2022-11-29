var graficball = 805, somadorgrafic = 0;

function desenhar(context)
 {
	var rand1= Math.random()*100;
	var rand2= Math.random()*100;
	var rand3= Math.random()*100;
	var rand4= Math.random()*100;
	var rand5= Math.random()*1000;

	if(graficball <= 805) somadorgrafic = 1;
	else if(graficball >= 885) somadorgrafic = -1;

    context.beginPath();
    context.lineWidth = 3;
	context.moveTo(889,315);
	context.lineTo(920,360);
	context.stroke();

	context.fillRect(918,358,105,3);

	context.fillStyle = "#48D1CC";
    context.fillRect(800,300-rand1,20,5+rand1);
    context.fillRect(842,300-rand2,20,5+rand2);

    context.fillStyle = "#008080";
    context.fillRect(821,300-rand3,20,5+rand3);
    context.fillRect(863,300-rand4,20,5+rand4);

    context.fillRect(800,310,90,10);

	context.fillStyle = "#48D1CC";
    context.font = '7.3pt Tahoma';
    context.fillText(rand5,800,330);

 	context.beginPath();
	context.strokeStyle = "#48D1CC";
	context.lineWidth = 6;
	context.arc(graficball, 315, 5, 0,Math.PI + (Math.PI * 2) / 2, true);
	context.fill();

	graficball = graficball + somadorgrafic;
 }

module.exports = { desenhar };