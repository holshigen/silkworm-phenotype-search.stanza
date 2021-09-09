import Stanza from 'togostanza/stanza';
import { unwrapValueFromBinding } from 'togostanza/utils';

export default class Hello extends Stanza {
    async render() {
        try {
            const results1 = await this.query({
                endpoint : "https://rcshige3.nig.ac.jp/rdf/sparql/",
                template : "stanza1.rq",
            });
            //console.log(unwrapValueFromBinding(results1));

            this.renderTemplate({
                template: 'stanza.html.hbs',
                parameters: {
                    //greeting: `Hello, ${this.params['say-to']}!`
                    //greeting: `Hello, ${results1}!`
                    silkworm_phenotype_uri: unwrapValueFromBinding(results1)
                }
            });

            // URI表示チェックボックス
            //this.root.querySelectAll("#checkbox").change(function() {
            //    var checked = $(this).prop('checked');
            //    if (checked) {
            //        this.root.querySelectAll("#uri").show();
            //    } else {
            //        this.root.querySelectAll("#uri").hide();
            //    }
            //});

        } catch (e) {
            console.log(e);
        }
    }
}
