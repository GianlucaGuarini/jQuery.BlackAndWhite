/**
 *
 * Version: 0.2.4
 * Author:  Gianluca Guarini
 * Contact: gianluca.guarini@gmail.com
 * Website: http://www.gianlucaguarini.com/
 * Twitter: @gianlucaguarini
 *
 * Copyright (c) 2012 Gianluca Guarini
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
;(function(a){a.fn.extend({BlackAndWhite:function(c){var n=this;c=a.extend({hoverEffect:!0,webworkerPath:!1,responsive:!0,invertHoverEffect:!1,speed:500},c);var p=c.hoverEffect,q=c.webworkerPath,h=c.invertHoverEffect,s=c.responsive,j=a.isPlainObject(c.speed)?c.speed.fadeIn:c.speed,k=a.isPlainObject(c.speed)?c.speed.fadeOut:c.speed,t=!!document.createElement("canvas").getContext,u=a(window),v="undefined"!==typeof Worker?!0:!1,w=document.all&&!window.opera&&window.XMLHttpRequest?!0:!1,r=function(c,d){var b= c.src;if(t){var b=a(d).find("img").width(),e=a(d).find("img").height(),f=c.width,g=c.height;a('<canvas width="'+f+'" height="'+g+'"></canvas>').prependTo(d);var l=a(d).find("canvas");a(l).css({position:"absolute",top:0,left:0,width:b,height:e,display:h?"none":"block"});var m=l[0].getContext("2d"),b=0;m.drawImage(c,0,0,f,g);f=m.getImageData(0,0,f,g);e=f.data;l=e.length;if(v&&q)b=new Worker(q+"BnWWorker.js"),b.postMessage(f),b.onmessage=function(a){m.putImageData(a.data,0,0)};else{for(;b<l;b+=4)g=0.3* e[b]+0.59*e[b+1]+0.11*e[b+2],e[b]=e[b+1]=e[b+2]=g;m.putImageData(f,0,0)}p&&(a(d).mouseenter(function(){h?a(this).find("canvas").stop(!0,!0).fadeIn(j):a(this).find("canvas").stop(!0,!0).fadeOut(k)}),a(d).mouseleave(function(){h?a(this).find("canvas").stop(!0,!0).fadeOut(k):a(this).find("canvas").stop(!0,!0).fadeIn(j)}))}else f=a(d).find("img").prop("width"),g=a(d).find("img").prop("height"),a("<img src="+b+' width="'+f+'" height="'+g+'" class="ieFix" /> ').prependTo(d),a(".ieFix").css({position:"absolute", top:0,left:0,filter:"progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)",display:h?"none":"block"}),p&&(a(d).mouseenter(function(){h?a(this).children(".ieFix").stop(!0,!0).fadeIn(j):a(this).children(".ieFix").stop(!0,!0).fadeOut(k)}),a(d).mouseleave(function(){h?a(this).children(".ieFix").stop(!0,!0).fadeOut(k):a(this).children(".ieFix").stop(!0,!0).fadeIn(j)}))};this.init=function(){a(n).each(function(c,d){var b=new Image;b.src=a(d).find("img").prop("src");if(b.width)r(b,d);else a(b).on("load", function(){r(b,d)})});if(s)u.on("resize orientationchange",n.resizeImages)};this.resizeImages=function(){a(n).each(function(c,d){var b=a(d).find("img:not(.ieFix)"),e;w?(e=a(b).prop("width"),b=a(b).prop("height")):(e=a(b).width(),b=a(b).height());a(this).find(".ieFix, canvas").css({width:e,height:b})})};return this.init(c)}})})(jQuery);