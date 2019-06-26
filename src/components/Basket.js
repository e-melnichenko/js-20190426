import Component from '../Component.js';
import './basket.css';

export default class Basket extends Component {
  constructor(element, props) {
    super(element, props);


    this.render();
    this.on('click', 'delete-button', (event) => {
      this.props.onDelete(
        +event.delegateTarget.dataset.itemIndex
      );
    })
  }

  render() {
    const {items} = this.props;
    this.element.innerHTML = `
    <section class="basket">
      <h4>Shopping Cart</h4>

      ${items.length > 0 ? `
        <ul>
        ${items.map((item, i) => `
          <li>
          ${item}
            <button
              data-element="delete-button"
              data-item-index="${i}"
            >
            x
            </button>
          </li>
        `).join('')}
        </ul>
        ` : `
          <p>No items yet</p>
        `}
    </section>
    `
  }
}
