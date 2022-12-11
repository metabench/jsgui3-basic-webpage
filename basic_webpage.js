const { Client_HTML_Document } = require('jsgui3-html');
const {prop, field} = require('obext');

const Basic_Webpage_Top_Bar = require('./top_bar');
const Basic_Webpage_Section = require('./section.js');


// Webpage plugins could help.
// . Or maybe they are a type of Control.
// . Not only rendered to one part of the DOM.
// .  Could have a different rendering / document interaction strategy.

class Basic_Webpage extends Client_HTML_Document {
    constructor(spec) {
        super(spec);

        // Title field / property.
        // . Property should be best I think.
        // . Already going for a simple abstraction over Client_HTML_Document which is more implementation specific in character.


        this.on('change', (e_change) => {
            const {name, value} = e_change;
            if (name === 'title') {
                // Need to get the title element from the control (structure)
                // . Want some tests for querying within a Control.
                // .  Example code would help.
                // .  Readme files showing it.
                // . Within jsgui-html, not sure how close to the core.

                

            }
        })

        prop(this, 'title', spec.title || '[__--TITLE--__]', (e_change) => {
			//console.log('background change');
			// The background object itself has been changed.
			let {
				value
			} = e_change;



            this.raise('change', {
                'name': 'title',
                'value': e_change.value
            });

		});

        console.log('spec.title', spec.title);
        console.log('this.title', this.title);

        if (this.title) {
            //const titles = this.$match(ctrl => ctrl.dom.tag_name === 'title');
            //const titles = this.find(ctrl => ctrl.dom.tagName === 'title');
            //console.log('titles', titles);
            const ctrl_title = this.find(ctrl => ctrl.dom.tagName === 'title')[0];
            ctrl_title.content.add(this.title);
        }

        // use a field to represent to top bar perhaps.
        //  field may be out of place in obext. not sure for now.

        // Making it a Control Field perhaps.
        // . May be best not to (need to) do that right now.

        // Without giving it the context?
        //  It would be nice if it figured that out if needed.
        // . Though would miss out on being registered unless that were done properly.
        // .  Possibility of content that's not registered in the page_context?

        // A context property could use the parent's context (recursively).

        const tb = new Basic_Webpage_Top_Bar({
            title: this.title,
            context: this.context
        })

        

        this.body.add(tb);
        this.top_bar = tb;

        /*
        this.sections = [
            intro_section
        ]
        */

        // Maybe a better / more convenient API for managing sections.

        const intro_section = new Basic_Webpage_Section({
            title: 'Title of the main section',
            context: this.context
        });
        this.body.add(intro_section);

        const next_section = new Basic_Webpage_Section({
            title: 'Title of the next section',
            context: this.context
        });
        this.body.add(next_section);


    }
}

module.exports = Basic_Webpage;