
const { Control, h1, h2, section } = require('jsgui3-html');
const {prop} = require('obext');

class Basic_Webpage_Section extends section {
    constructor(spec = {}) {
        super(spec);
        //this.add_class('section');

        // Give it a proper title property (or field?)


        // Make is so using a string for control initialisation works....?

        /*
        const h1_title = new h1({
            content: this.title
        });
        */
        let h2_title;

        // Some kind of bound property may work better soon...
        prop(this, 'title', spec.title, e_change => {
            //h1_title.content = e_change.value;
            //h1_title.content.clear();
            //h1_title.content.add(e_change.value);

            h2_title.content = e_change.value;
            
        });

        //console.log('this.title', this.title);
        //console.log('typeof this.title', typeof this.title);
        h2_title = new h2(); // Need to investigate why the shorthand was not working there.
        //h2_title.content.add(this.title);
        h2_title.content = this.title;

        // h1 not working so well right now. Can't construct with string only.
        // . String contructors may be worth doing.
        
        this.content.add(h2_title);
    }
}

module.exports = Basic_Webpage_Section;