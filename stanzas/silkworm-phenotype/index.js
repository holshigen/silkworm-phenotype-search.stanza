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

            $(stanza.select('#resultTable')).dataTable({
                "aLengthMenu" : [ 10, 25, 50, 100 ], // 表示件数の選択肢
                "iDisplayLength" : 10, // 表示件数のデフォルトの値
                "ordering" : false, // ソート
                "searching" : false, // 検索
                "oLanguage" : { // 表示される文字
                    "sEmptyTable" : "No data found.",
                    "sZeroRecords" : "No data found.",
                }
            });

            // URI表示チェックボックス
            //this.root.querySelector("#checkbox").change(function() {
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
//const stanzaElement = document.getElementById('checkbox');
//stanzaElement.addEventListener('valueChanged', (event) => {
//  console.log('event received', event);
//  console.log(event.detail); // {value: 42}
//});
