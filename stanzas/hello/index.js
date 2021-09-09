import Stanza from 'togostanza/stanza';

export default class SilkwormPhenotype extends Stanza {
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
