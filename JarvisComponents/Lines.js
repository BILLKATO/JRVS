var linex=0,liney=Math.random()*480,linexx=linex,lineyy=liney,linexxx=linex,lineyyy=liney,linewidth=60,lineinvert=false;

function desenhar(context, canvaswidth, canvasheight)
 {
  if(linex>=canvaswidth+100){ linex=0; liney=Math.random()*canvasheight;lineyy=liney;lineyyy=liney;}

  context.fillStyle = "#48D1CC";
  context.fillRect(linex,liney,linewidth,2);

  if(linex >=50 && linewidth>=0 && lineinvert==false) linewidth--;
  else if(lineinvert==true && linewidth<=60) linewidth++;
  else if(lineinvert==true && linewidth>=60) lineinvert=false;

  if(linewidth>=0 && lineinvert==false){ linex++;}

  if(linewidth==60 && lineinvert==false){linexx=linex+60; linexxx=linex+60; lineyyy=liney;}

   if(linewidth<=60)
    {
       context.beginPath();
       context.lineWidth = 2;
       context.moveTo(linexxx,lineyyy);
       context.lineTo(linexx,lineyy);
       context.stroke();

       if(linexx<=linex+20 && lineinvert==false){linexx++; lineyy--;}
       else if(lineyyy != lineyy){linexxx++; lineyyy--;}

       if(lineyy == lineyyy-20) { lineinvert=true; liney=lineyy; linex=linexx;}
    }
 }

module.exports = { desenhar };