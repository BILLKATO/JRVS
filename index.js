const core = require('@actions/core');
const github = require('@actions/github');
const cvs = require("canvas");
const GIFEncoder = require("gif-encoder-2");
const fs = require("fs");

try {
    var size = 200;

    const canvas = cvs.createCanvas(size,size) // set the height and width of the canvas
    const ctx = canvas.getContext('2d');
    const encoder = new GIFEncoder(size,size);
    encoder.setDelay(100);
    encoder.start(); // starts the encoder

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
     
     // frame 2
     background();
     ctx.fillStyle = '#e2711d';
     ctx.fillRect(slice, 0, slice, size);
     encoder.addFrame(ctx);
     
     // frame 3
     background();
     ctx.fillStyle = '#fc7b03';
     ctx.fillRect(slice * 2, 0, slice, size);
     encoder.addFrame(ctx);
     
     // frame 4
     background();
     ctx.fillStyle = '#ffb627';
     ctx.fillRect(slice * 3, 0, slice, size);
     encoder.addFrame(ctx);
     
     // frame 5
     background();
     ctx.fillStyle = '#ffc971';
     ctx.fillRect(slice * 4, 0, slice, size);
     encoder.addFrame(ctx);
     
     // end the encoding
     encoder.finish();

     const buffer = encoder.out.getData();
     fs.writeFile('example.gif', buffer, error => {
        error ? console.log(error) : null;
     });    

  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}