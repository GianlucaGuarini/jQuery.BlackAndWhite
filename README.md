[![Build Status](https://travis-ci.org/GianlucaGuarini/jQuery.BlackAndWhite.svg?branch=master)](https://travis-ci.org/GianlucaGuarini/jQuery.BlackAndWhite) [![devDependency Status](https://david-dm.org/GianlucaGuarini/jQuery.BlackAndWhite/dev-status.svg)](https://david-dm.org/GianlucaGuarini/jQuery.BlackAndWhite#info=devDependencies) [![license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/cdnjs/cdnjs/blob/master/MIT-LICENSE)

This plug-in can easily convert every colored image (in an html page) into a B&W greyscale image.
Read the plugin API on here http://gianlucaguarini.github.io/jQuery.BlackAndWhite/.

#Usage

1 Include the plug into the page:

<pre lang="html">
&lt;script src="js/jQuery.BlackAndWhite.js"&gt;&lt;/script&gt;
</pre>

2 Set the image wrappers using the css:

<pre lang="css">
.bwWrapper {
    position:relative;
    display:block;
}
</pre>

3 Initialize the plug in:

<pre lang="javascript">
$('.bwWrapper').BlackAndWhite({
    hoverEffect : true, // default true
    // set the path to BnWWorker.js for a superfast implementation
    webworkerPath : false,
    // to invert the hover effect
    invertHoverEffect: false,
    // this option works only on the modern browsers ( on IE lower than 9 it remains always 1)
    intensity:1,
    speed: { //this property could also be just speed: value for both fadeIn and fadeOut
        fadeIn: 200, // 200ms for fadeIn animations
        fadeOut: 800 // 800ms for fadeOut animations
    },
    onImageReady:function(img) {
    	// this callback gets executed anytime an image is converted
    }
});
</pre>

## IMPORTANT

the script works only for the images hosted on the same server in which the page is loaded!


## Plugin Showcase

*   [Circle Theme](http://kopatheme.com/demo/circle/html/portfolio-1col.html)
*   [spartan-clean-responsive-business-template](http://themeforest.net/item/spartan-clean-responsive-business-template/full_screen_preview/3019206)
*   [Teocomi.com](http://teocomi.com/photos/)
*   [United Designers](http://www.unitedesigners.it/#!/124-tailored-branding)

