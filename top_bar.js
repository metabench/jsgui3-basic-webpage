
const { Control, h1 } = require('jsgui3-html');
const {prop} = require('obext');

class Basic_Webpage_Top_Bar extends Control {
    constructor(spec = {}) {
        super(spec);
        this.add_class('top-bar');

        // Give it a proper title property (or field?)


        // Make is so using a string for control initialisation works....?

        /*
        const h1_title = new h1({
            content: this.title
        });
        */
        let h1_title;

        // Some kind of bound property may work better soon...
        prop(this, 'title', spec.title, e_change => {
            //h1_title.content = e_change.value;
            //h1_title.content.clear();
            //h1_title.content.add(e_change.value);

            h1_title.content = e_change.value;
            
        });

        h1_title = new h1(this.title);

        // h1 not working so well right now. Can't construct with string only.
        // . String contructors may be worth doing.
        
        this.content.add(h1_title)
    }
}

module.exports = Basic_Webpage_Top_Bar;