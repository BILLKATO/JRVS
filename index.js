const core = require('@actions/core');
const github = require('@actions/github');
const cvs = require("canvas");
const GIFEncoder = require("gif-encoder-2");
const fs = require("fs");

try {
    console.log(`Processo iniciado`);
   // `who-to-greet` input defined in action metadata file
   const nameToGreet = core.getInput('who-to-greet');
   console.log(`Hello ${nameToGreet}!`);
   const time = (new Date()).toTimeString();
   core.setOutput("time", time);

    var size = 200;
    const canvas = cvs.createCanvas(size,size) // set the height and width of the canvas
    const ctx = canvas.getContext('2d');
    console.log(`Canvas Criado`);

    const encoder = new GIFEncoder(size,size);
    encoder.setDelay(100);
    encoder.start(); // starts the encoder
    console.log(`Enconder iniciado`);

    const background = () => {
        ctx.fillStyle = '##ff9505';
        ctx.fillRect(0, 0, size, size); // fill the entire canvas
     };
     const slice = size / 5; // this is the width of each rectangle
     
     // frame 1
     background();
     ctx.fillStyle = '#cc5803';
     ctx.fillRect(0, 0, slice, size);
     encoder.addFrame(ctx);
     console.log(`Frame 1 concluido`);
     
     // frame 2
     background();
     ctx.fillStyle = '#e2711d';
     ctx.fillRect(slice, 0, slice, size);
     encoder.addFrame(ctx);
     console.log(`Frame 2 concluido`);
     
     // frame 3
     background();
     ctx.fillStyle = '#fc7b03';
     ctx.fillRect(slice * 2, 0, slice, size);
     encoder.addFrame(ctx);
     console.log(`Frame 3 concluido`);
     
     // frame 4
     background();
     ctx.fillStyle = '#ffb627';
     ctx.fillRect(slice * 3, 0, slice, size);
     encoder.addFrame(ctx);
     console.log(`Frame 4 concluido`);
     
     // frame 5
     background();
     ctx.fillStyle = '#ffc971';
     ctx.fillRect(slice * 4, 0, slice, size);
     encoder.addFrame(ctx);
     console.log(`Frame 5 concluido`);
     
     // end the encoding
     encoder.finish();
     console.log(`Enconder Finalizado`);

     const buffer = encoder.out.getData();
     fs.writeFile('/home/runner/work/JRVS/JRVS/example.gif', buffer, error => {
        error ? console.log(error) : null;
     });
     console.log(`Arquivo criado`);    

} catch (error) {
  core.setFailed(error.message);
}