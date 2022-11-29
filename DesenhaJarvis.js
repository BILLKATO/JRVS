const ReatorArc = require("./JarvisComponents/ReatorArc.js");
const Nucleo1 = require("./JarvisComponents/Nucleo1.js");
const NucleoAro = require("./JarvisComponents/NucleoAro.js");
const Aro1 = require("./JarvisComponents/Aro1.js");
const Aro2 = require("./JarvisComponents/Aro2.js");
const Aro3 = require("./JarvisComponents/Aro3.js");
const Aro4 = require("./JarvisComponents/Aro4.js");
const Circuitos = require("./JarvisComponents/Circuitos.js");
const Horas = require("./JarvisComponents/Horas.js");
const Data = require("./JarvisComponents/Data.js");
const Graficos = require("./JarvisComponents/Grafico.js");
const Email = require("./JarvisComponents/Email.js");
const Numbers = require("./JarvisComponents/Numbers.js");
const Lines = require("./JarvisComponents/Lines.js");
const Dots = require("./JarvisComponents/Dots.js");
const Grade = require("./JarvisComponents/Grade.js");
const Senoide = require("./JarvisComponents/Senoide.js");
const GraficosSide = require("./JarvisComponents/GraficosSide.js");
const ProgramLanguage = require("./JarvisComponents/ProgramLanguage.js");


	function desenha(context, canvaswidth, canvasheight)
	{
		context.clearRect(0, 0, canvaswidth, canvasheight);
		context.fillStyle ="#000000";
		context.fillRect(0,0,canvaswidth,canvasheight);

		Lines.desenhar(context, canvaswidth, canvasheight);
		//jarvis.lines2.desenhar(context);
		//jarvis.lines3.desenhar(context);
		ReatorArc.desenhar(context, canvaswidth, 2, null);
		ReatorArc.desenhar(context, canvaswidth, 1, null);
		Nucleo1.desenhar(context, canvaswidth);
		NucleoAro.desenhar(context, canvaswidth);
		Aro1.desenhar(context, canvaswidth);
		Aro2.desenhar(context, canvaswidth);
		Aro3.desenhar(context, canvaswidth);
		Aro4.desenhar(context, canvaswidth);
		Circuitos.desenhar(context, canvaswidth);
		Horas.desenhar(context);
		Data.desenhar(context);
		Graficos.desenhar(context, canvaswidth, canvasheight);
		Email.desenhar(context);
		Numbers.desenhar(context);
		Dots.desenhar(context, canvaswidth, canvasheight);
		Grade.desenhar(context);
		Senoide.desenhar(context);
		GraficosSide.desenhar(context);
		ProgramLanguage.desenhar(context);
	}

module.exports = { desenha };