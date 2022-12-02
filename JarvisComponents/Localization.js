var localizationfade = 0;

function desenhar(context)
 {
	var x = 425;
	var y = 50;
	var localizationcolor = "#48D1CC";
	var localizationtext = 'Osasco, S\u0061\u0303o Paulo - Brazil';

	if(localizationfade == 0)
	{
	 localizationcolor = "#48D1CC";
	}
	else if(localizationfade == 5)
	{
	 localizationcolor = "#000000";
	 localizationfade = 0;
	}

	context.beginPath();
	context.strokeStyle = localizationcolor;
	context.lineWidth = 3;
	context.arc(x, y, 4, 0,Math.PI + (Math.PI * 2) / 2, true);
	context.stroke();

    context.beginPath();
    context.fillStyle = localizationcolor;
    context.lineWidth = 2;
	context.moveTo(x-4, y+3);
	context.lineTo(x+4, y+3);
	context.lineTo(x, y+10);
	context.lineTo(x-4, y+3);
	context.fill();

	context.fillStyle ="#48D1CC";
    context.font = 'bold 8pt Tahoma';
    context.fillText(localizationtext, x+10, y+5);

    localizationfade++;
 }

 module.exports = { desenhar };