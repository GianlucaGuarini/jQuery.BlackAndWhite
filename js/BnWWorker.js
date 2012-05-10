this.onmessage = function (event) {
	
	var	imagedata = event.data,
		px = imagedata.data,
		grey = null,
		length = px.length;  

	for (var i = 0 ; i < length; i+= 4 ) {  
		grey = px[i] * .3 + px[i+1] * .59 + px[i+2] * .11;  
		px[i] = px[i+1] = px[i+2] = grey;  
		
	}  
	
	postMessage(imagedata);
}