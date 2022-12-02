var countmessage = 0, showmessage = "";

function desenhar(context)
 {
  var message = "WELCOME TO MY GITHUB";

  if(countmessage < message.split("").length)
  {
  showmessage += message.split("")[countmessage];
  countmessage++;
  }

  context.fillStyle ="#48D1CC";
  context.font = '30pt Impact, fantasy';
  context.fillText(showmessage, 350, 460);
 }

 module.exports = { desenhar };