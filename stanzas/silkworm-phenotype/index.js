import Stanza from 'togostanza/stanza';

export default class SilkwormPhenotype extends Stanza {
  async render() {
    this.renderTemplate(
      {
        template: 'stanza.html.hbs',
        parameters: {
          greeting: `Hello, ${this.params['say-to']}!`
        }
      }
    );
  }
}
