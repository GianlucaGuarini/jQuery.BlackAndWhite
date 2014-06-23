this.onmessage = function (event) {
	var imagedata = event.data.imgData,
		intensity = event.data.intensity,
		px = imagedata.data,
		grey = null,
		length = px.length;

	for (var i = 0; i < length; i += 4) {
		var k = px[i] * 0.3 + px[i + 1] * 0.59 + px[i + 2] * 0.11;
		px[i] = ~~ (k * intensity + px[i] * (1 - intensity));
		px[i + 1] = ~~ (k * intensity + px[i + 1] * (1 - intensity));
		px[i + 2] = ~~ (k * intensity + px[i + 2] * (1 - intensity));
	}

	postMessage(imagedata);

};