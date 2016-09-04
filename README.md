[![Build Status](https://travis-ci.org/GianlucaGuarini/jQuery.BlackAndWhite.svg?branch=master)](https://travis-ci.org/GianlucaGuarini/jQuery.BlackAndWhite) [![devDependency Status](https://david-dm.org/GianlucaGuarini/jQuery.BlackAndWhite/dev-status.svg)](https://david-dm.org/GianlucaGuarini/jQuery.BlackAndWhite#info=devDependencies) [![license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/cdnjs/cdnjs/blob/master/MIT-LICENSE)

This plug-in can easily convert every colored image (in an html page) into a B&W greyscale image.
Read the plugin API on here http://gianlucaguarini.github.io/jQuery.BlackAndWhite/.

# Usage

1 Include the plug into the page:

```html
<script src="js/jQuery.BlackAndWhite.js"></script>
```

2 Set the image wrappers using the css:

```css
.bwWrapper {
    position:relative;
    display:block;
}
```

3 Initialize the plug in:

```javascript
$('.bwWrapper').BlackAndWhite({
    hoverEffect : true, // default true
    // set the path to BnWWorker.js for a superfast implementation
    webworkerPath : false,
    // to invert the hover effect
    invertHoverEffect: false,
    // this option works only on the modern browsers ( on IE lower than 9 it remains always 1)
    intensity:1,
    // this option enables/disables the attribute crossorigin=anonymous on image tags. Default true.
    // please refer to https://github.com/GianlucaGuarini/jQuery.BlackAndWhite#important
    crossOrigin: true,
    speed: { //this property could also be just speed: value for both fadeIn and fadeOut
        fadeIn: 200, // 200ms for fadeIn animations
        fadeOut: 800 // 800ms for fadeOut animations
    },
    onImageReady:function(img) {
    	// this callback gets executed anytime an image is converted
    }
});
```

## IMPORTANT

the script works only for the images hosted on the same server in which the page is loaded!

## Lightweight solution

If you are looking for a lightweight solution, you can use the following css instead, __but it's not 100% crossbrowser__:

```css

img {
    filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale"); /* Firefox 10+, Firefox on Android */
    filter: gray; /* IE6-9 */
    -webkit-filter: grayscale(100%); /* Chrome 19+, Safari 6+, Safari 6+ iOS */
    transition: 0.3s ease-in;
}

img:hover {
    filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 1 0\'/></filter></svg>#grayscale");
    -webkit-filter: grayscale(0%);
}

```


## Plugin Showcase

*   [spartan-clean-responsive-business-template](http://themeforest.net/item/spartan-clean-responsive-business-template/full_screen_preview/3019206)
*   [Teocomi.com](http://teocomi.com/photos/)
*   [United Designers](http://www.unitedesigners.it/#!/124-tailored-branding)

