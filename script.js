/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/

var natural_phenomena, image;


natural_phenomena = ['https://www.thefactsite.com/wp-content/uploads/2009/11/rainbow.jpg', 'https://www.light2015.org/.imaging/stk/pop/content/dam/LearnAboutLight/LightInNature/NorthenLights/jcr:content/NorthenLights.2014-07-17-18-31-38.png', 'https://www.ecmwf.int/sites/default/files/ThinkstockPhotos-Lightning-146914924-690px.jpg'];
let element_exhibition_cyf = document.getElementById('exhibition-cyf');
image = natural_phenomena.shift();
element_exhibition_cyf.setAttribute("src", image);
natural_phenomena.push(image);


document.getElementById('next-img-cyf').addEventListener('click', (event) => {
  let element_exhibition_cyf2 = document.getElementById('exhibition-cyf');
  image = natural_phenomena.shift();
  element_exhibition_cyf2.setAttribute("src", image);
  natural_phenomena.push(image);

});

document.getElementById('previous-img-cyf').addEventListener('click', (event) => {
  let element_exhibition_cyf3 = document.getElementById('exhibition-cyf');
  element_exhibition_cyf3.setAttribute("src", image);
  image = natural_phenomena.pop();
  natural_phenomena.unshift(image);

});






