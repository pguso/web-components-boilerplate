const template = document.createElement('template')

template.innerHTML = `
  <style>
    .text {
      color: var(--base-purple);
    }
  </style>
  <div class="text">
    App root component
  </div>
`

class Root extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  /**
   * Observe changes of your attributes
   */
  static get observedAttributes() {
    return ['your-attribute']
  }

  /**
   * Handle attribute changes
   *
   * @param {*} name
   * @param {*} oldValue
   * @param {*} newValue
   * @returns
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return
    }

    if (name === 'your-attribute') {
      this.yourAttribute = newValue
    }
  }

  set yourAttribute(yourAttribute) {
    this._yourAttribute = yourAttribute
    console.log('yourAttribute', yourAttribute)
  }

  set data(data) {
    this._data = data
    console.log('data', this._data)
  }
}

customElements.define('app-root', Root)
