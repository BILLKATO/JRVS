const core = require('@actions/core');
const github = require('@actions/github');
const cvs = require("canvas");
const GIFEncoder = require("gif-encoder-2");
const fs = require("fs");
const jarvis = require("./DesenhaJarvis.js");

var canvaswidth=1080, canvasheight=520;
const canvas = cvs.createCanvas(canvaswidth,canvasheight);
const ctx = canvas.getContext('2d');
const encoder = new GIFEncoder(canvaswidth,canvasheight);

try {
   console.log(`Processo Iniciado`);
   const nameToGreet = core.getInput('who-to-greet');
   console.log(`Hello ${nameToGreet}!`);
   const time = (new Date()).toTimeString();
   core.setOutput("time", time);
   encoder.setDelay(100);
	encoder.start();

	ctx.clearRect(0, 0, canvaswidth, canvasheight);
	ctx.fillStyle ="#000000";

	for(var i=0; i<100; i++)
	 {
		jarvis.desenha(ctx, canvaswidth, canvasheight);
		encoder.addFrame(ctx);
	 }

	encoder.finish();

	const buffer = encoder.out.getData();
	fs.writeFile('jarvis.gif', buffer, error => {
	   error ? console.log(error) : null;
	});  

   console.log(`Processo Finalizado`);
} catch (error) {
  core.setFailed(error.message);
}