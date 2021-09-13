import Stanza from 'togostanza/stanza';
import { unwrapValueFromBinding } from 'togostanza/utils';

export default class Hello extends Stanza {
    async render() {
        try {
            var result1 = await this.query({
                endpoint : "https://rcshige3.nig.ac.jp/rdf/sparql/",
                template : "stanza1.rq",
            });
            console.log(this.params['language']);

            var rq;
            if (this.params['uri'] == '' || this.params['uri'] == null) {
                rq = "stanza21.rq";
            } else {
                rq = "stanza22.rq";
            }

            var result2 = await this.query({
                endpoint : "https://rcshige3.nig.ac.jp/rdf/sparql/",
                template : rq,
                parameters : this.params,
            });

            this.renderTemplate({
                template: 'stanza.html.hbs',
                parameters: {
                    silkworm_phenotype_uri: unwrapValueFromBinding(result1),
                    silkworm_phenotype_search: unwrapValueFromBinding(result2)
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
const checkboxElement = document.getElementsById('checkbox');

checkboxElement.addEventListener('valueChanged', (event) => {
  console.log('event received', event);
  console.log(event.detail); // {value: 42}
});

        } catch (e) {
            console.log(e);
        }
    }
}
