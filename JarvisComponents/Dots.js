

function desenhar(context, canvaswidth, canvasheight)
 {
	 for(var i=10;i <= canvaswidth; i++)
	 	{
	 	  for(var j=0;j <= canvasheight; j++)
	 	    {
	 	      if(i%50==0 && j%50==0)
	 	       {
	 	        context.fillStyle = "#48D1CC";
				context.fillRect(i,j,2,2);
				}
			 }
	 	 }
 }

module.exports = { desenhar };