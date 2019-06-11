import Component from '../Component.js';


export default class PhonesCatalog extends Copponent {
  constructor(element, props) {
    super(element, props)

    this.render();

    this.element.addEventListener('click', (event) => {
      const delegateTarget = event.target.closest('[data-element="phone-link"]');

      if (!delegateTarget) {
        return;
      }

      this.props.onPhoneSelected(delegateTarget.dataset.phoneId);
    });

    // на PhonesCatalog и PhoneViewer одинаковые обработчики событий, добавляющие в корзину. Как здесь избежать дубля?
    this.element.addEventListener('click', (event) => {
      const delegateTarget = event.target.closest('[data-element="add-button"]');

      if (!delegateTarget) {
        return;
      }

      this.props.addToBasket(delegateTarget.dataset.phoneId)
    });
  }

  render() {
    this.element.innerHTML = `
      <ul class="phones">
        ${ this.props.phones.map(phone => `

          <li class="thumbnail">
            <a
              data-element="phone-link"
              data-phone-id="${phone.id}"
              href="#${phone.id}"
              class="thumb"
            >
              <img alt="${phone.name}" src="${phone.imageUrl}">
            </a>

            <div class="phones__btn-buy-wrapper">
              <a
              class="btn btn-success"
              data-element="add-button"
              data-phone-id="${phone.id}"
              >
                Add
              </a>
            </div>

            <a
              data-element="phone-link"
              data-phone-id="${phone.id}"
              href="#${phone.id}"
            >
              ${phone.name}
            </a>

            <p>${phone.snippet}</p>
          </li>

        `).join('') }
      </ul>
    `;
  }
}
