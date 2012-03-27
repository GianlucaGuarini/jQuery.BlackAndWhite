/**
 *
 * Version: 	0.1.7
 * Author:		Gianluca Guarini
 * Contact: 	gianluca.guarini@gmail.com
 * Website:		http://www.gianlucaguarini.com/
 * Twitter:		@gianlucaguarini
 *
 * Copyright (c) 2011 Gianluca Guarini
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 **/
(function ($) {

    $.fn.extend({
        BlackAndWhite: function (options)
		{
            var container = this;
            var defaults = 
			{
				hoverEffect : true,
				webworkerPath : false
            };
            var options = $.extend(defaults, options);
            //@public vars
			var hoverEffect =  options.hoverEffect,
				webworkerPath = options.webworkerPath;
			
            //@private var
			var supportsCanvas = !!document.createElement('canvas').getContext;
				/* Check if Web Workers are supported */
			var	supportWebworker = function () {
    				return (typeof(Worker) !== "undefined") ? true:false;
				};

   			//convert any image into B&W using HTML5 canvas
			function greyImages(img,canvas,width,height) {  
                var ctx = canvas.getContext('2d'),  
                    currImg = img,  
                    imageData, px, length, i = 0,  
                    grey;  
      			
					$(img).load(function(){
						
						ctx.drawImage(img, 0, 0);  
						
						var imageData = ctx.getImageData(0, 0, width, height),  
							px = imageData.data, 
							length = px.length; 
						// web worker superfast implementation
						if(supportWebworker && webworkerPath){
							try {
								var BnWWorker = new Worker ( webworkerPath  + "BnWWorker.js" );
								BnWWorker.onmessage = function (event) {
									imageData.data = event.data;
								    ctx.putImageData(event.data, 0, 0);
								    
								};
								BnWWorker.postMessage(imageData);
							} catch (e) {
								console.log(e);
							}
						} else {
							// no webworker slow implementation
							for ( ; i < length; i+= 4 ) {  
								grey = px[i] * .3 + px[i+1] * .59 + px[i+2] * .11;  
								px[i] = px[i+1] = px[i+2] = grey;  
							}  
							ctx.putImageData(imageData, 0, 0); 
						}
			  
						
			  
						
					});
				
            }  
			
			this.init = function(options)
			{
				
				
				if(supportsCanvas &&(!(jQuery.browser.msie && jQuery.browser.version == '9.0')))
				{
					
					
					$(container).each(function(index,currImageWrapper){
						
						var pic = $(currImageWrapper).find('img');
						var src = $(pic).prop('src');
						//getting the Pics proprieties
						
						
						var currWidth  = $(pic).prop('width');
						var currHeight = $(pic).prop('height');
						if (jQuery.browser.opera){
							var rand = Math.random();
							// fix opera bug decaching images
							$(pic).prop('src',src+'?'+ rand)
						}
						
						if(!currWidth || !currHeight){
							alert('Set the width and height on your images');
							}
						
						//adding the canvas
						$('<canvas width="'+currWidth+'" height="'+currHeight+'"></canvas>').prependTo(currImageWrapper);
						//getting the canvas
						var currCanvas = $(currImageWrapper).find('canvas');
						//setting the canvas position on the Pics
						$(currCanvas).css(
							{
								'position':'absolute',
								top:0,
								left:0
							});
						
						greyImages(pic[0],currCanvas[0],currWidth,currHeight);
						
				    })
					
					if(hoverEffect)
					{
						$(container).mouseenter(function()
						{
							$(this).find('canvas').stop(true,true).fadeOut();
						});
						$(container).mouseleave(function()
						{
							$(this).find('canvas').stop(true,true).fadeIn();
						});
					}
				} else 
				{
					$(container).each(function(index,currImageWrapper){
						var pic = $(currImageWrapper).find('img');
						var picSrc = $(currImageWrapper).find('img').prop('src');
						
						var currWidth  = $(pic).prop('width');
						var currHeight = $(pic).prop('height');
						if(!currWidth || !currHeight)
						{
							alert('Set the width and height on your images');
						}
						
						//adding the canvas
						$('<img src='+picSrc+' width="'+currWidth+'" height="'+currHeight+'" class="ieFix" /> ').prependTo(currImageWrapper);	
						$('.ieFix').css(
							{
								'position':'absolute',
								top:0,
								left:0,
								'filter': 'progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)'
						});
						
				    })
					
					if(hoverEffect)
					{
						$(container).mouseenter(function()
						{
							$(this).children('.ieFix').stop(true,true).fadeOut();
						});
						$(container).mouseleave(function()
						{
							$(this).children('.ieFix').stop(true,true).fadeIn();
						});
					}
					
				}
			}
			
            return this.init(options);
        }

    });

})(jQuery);