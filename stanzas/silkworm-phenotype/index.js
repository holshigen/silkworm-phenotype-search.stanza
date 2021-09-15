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
            const checkboxElement = this.root.querySelector("#checkbox");
            checkboxElement.addEventListener('change', e => {
                if (e.target.checked) {
                    this.root.querySelector("#uri1").style.display = "";
                    this.root.querySelector("#uri2").style.display = "";
                    this.root.querySelector("#uri3").style.display = "";
                    this.root.querySelector("#uri4").style.display = "";
                    this.root.querySelector("#uri5").style.display = "";
                } else {
                    this.root.querySelector("#uri1").style.display = "none";
                    this.root.querySelector("#uri2").style.display = "none";
                    this.root.querySelector("#uri3").style.display = "none";
                    this.root.querySelector("#uri4").style.display = "none";
                    this.root.querySelector("#uri5").style.display = "none";
                }
            });

        } catch (e) {
            console.log(e);
        }
    }
}
