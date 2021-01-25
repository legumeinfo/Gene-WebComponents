export class ListGenes extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h1>Hello, Genes!</h1>`;
  }
}
    

customElements.define('lis-gene-list', ListGenes);
