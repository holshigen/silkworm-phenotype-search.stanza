import { S as Stanza, d as defineStanzaElement } from './stanza-4d5e4756.js';

class Hello extends Stanza {
  async render() {
    const res = await fetch('https://api.ipify.org?format=json');
    const data = await res.json();

    console.log(data); // {"ip": "..."}

    this.renderTemplate({
      template: 'stanza.html.hbs',
      parameters: {
        greeting: `Hello, you're accessing from ${data.ip}!`,
      },
    });
  }
}

var stanzaModule = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Hello
});

var metadata = {
	"@context": {
	stanza: "http://togostanza.org/resource/stanza#"
},
	"@id": "hello",
	"stanza:label": "Hello",
	"stanza:definition": "",
	"stanza:type": "Stanza",
	"stanza:display": "Text",
	"stanza:provider": "",
	"stanza:license": "MIT",
	"stanza:author": "",
	"stanza:address": "",
	"stanza:contributor": [
],
	"stanza:created": "2021-09-07",
	"stanza:updated": "2021-09-07",
	"stanza:parameter": [
	{
		"stanza:key": "say-to",
		"stanza:type": "string",
		"stanza:example": "world",
		"stanza:description": "who to say hello to",
		"stanza:required": false
	}
],
	"stanza:menu-placement": "bottom-right",
	"stanza:style": [
	{
		"stanza:key": "--greeting-color",
		"stanza:type": "color",
		"stanza:default": "#eb7900",
		"stanza:description": "text color of greeting"
	},
	{
		"stanza:key": "--greeting-align",
		"stanza:type": "single-choice",
		"stanza:choice": [
			"left",
			"center",
			"right"
		],
		"stanza:default": "center",
		"stanza:description": "text align of greeting"
	}
],
	"stanza:incomingEvent": [
],
	"stanza:outgoingEvent": [
]
};

var templates = [
  ["stanza.html.hbs", {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<p class=\"greeting\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"greeting") || (depth0 != null ? lookupProperty(depth0,"greeting") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"greeting","hash":{},"data":data,"loc":{"start":{"line":1,"column":20},"end":{"line":1,"column":32}}}) : helper)))
    + "</p>\n";
},"useData":true}],
["stanza1.rq", {"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "PREFIX brso: <http://purl.jp/bio/10/brso/>\r\nPREFIX sio: <http://semanticscience.org/resource/>\r\nPREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\r\nPREFIX so: <http://purl.obolibrary.org/obo/so#>\r\nPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\r\nPREFIX faldo: <http://biohackathon.org/resource/faldo#>\r\nPREFIX dct: <http://purl.org/dc/terms/>\r\nPREFIX insdc: <http://ddbj.nig.ac.jp/ontologies/nucleotide/>\r\nPREFIX foaf: <http://xmlns.com/foaf/0.1/>\r\nPREFIX org: <http://www.w3.org/ns/org#>\r\n\r\nSELECT\r\ndct:identifier as ?uri_identifier\r\nrdfs:label as ?uri_label\r\nFROM <http://iruddat2.nig.ac.jp:8120/silkworm>\r\nWHERE {\r\n}\r\nlimit 1\r\n";
},"useData":true}]
];

const url = import.meta.url.replace(/\?.*$/, '');

defineStanzaElement({stanzaModule, metadata, templates, url});
//# sourceMappingURL=hello.js.map
