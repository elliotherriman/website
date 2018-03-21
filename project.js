// -----------------------------------

// attempt to preload all files before starting the story
import "./patches/preload.js";

options.preload_tags.image.push("frame");
options.preload_extrafiles = [
	"./images/work/adayofmaintenance.png",
	"./images/work/cmil.png",
	"./images/work/winter.png",
	"./images/work/calico.png",
] 

// always attempt to break to a new line in a way that
// preserves a minimum number of words per line
import "./patches/minwordsperline.js";

// style choices using tags that appear on the same line
import "./patches/choicetags.js";

// convert markdown to HTML tags
import "./patches/markdowntohtml.js"

import "./patches/shorthandclasstags.js"
options.shorthandclasstags_tags.push("center")

import "./patches/parallaxframes.js"

import "./patches/autosave.js";

// -----------------------------------

options.linedelay = 0.0;
options.passagedelay = 50.0;
options.showlength = 750.0;
options.hidelength = 500.0;

// create our game
var story = new Story("website.json");

// let innerdiv = document.getElementById("story");
// let outerdiv = document.getElementById("container");
// outerdiv.style.opacity = 0;

// window.getComputedStyle(outerdiv).opacity;

// let noscript = document.getElementsByTagName("noscript")[0];

// let element = document.createElement("div");

// element.innerHTML = noscript.innerHTML;

// innerdiv.appendChild(element);

// outerdiv.style.transition = "opacity 500ms linear";

// outerdiv.style.opacity = 1;