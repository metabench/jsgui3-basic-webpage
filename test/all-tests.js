const Basic_Webpage = require('../basic_webpage');

const webpage = new Basic_Webpage({
    title: 'jsgui3 basic webpage' // Not just the HTML title element
});

let html = webpage.render(); // Looks like it should work. Make a render function that for the moment calls the HTML rendering.
    // Maybe even make DOMControl for both HTML and SVG, which does that. Others would not have specifically defined rendering methods.
    // . Or make flexibility on the rendering environment?
    // . Maybe too complex and best to really focus on the DOM.


console.log('html', html);

const top_bar = webpage.top_bar;
console.log('top_bar', top_bar);

// Nicer console output for Control could help.
// . We see a lot of them!
// . 1 line output even?
// .  Or tree-style like indented JSON?

top_bar.title = 'New topbar title';

html = webpage.render(); // Looks like it should work. Make a render function that for the moment calls the HTML rendering.
    // Maybe even make DOMControl for both HTML and SVG, which does that. Others would not have specifically defined rendering methods.
    // . Or make flexibility on the rendering environment?
    // . Maybe too complex and best to really focus on the DOM.


console.log('html', html);