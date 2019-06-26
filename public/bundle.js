/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_PhonesPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


new _components_PhonesPage_js__WEBPACK_IMPORTED_MODULE_0__["default"](
  document.querySelector('App')
);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhonesPage; });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _PhonesCatalog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _PhoneViewer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _api_phone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _Basket_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _Filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);








class PhonesPage extends _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]{
  constructor(element) {
    super(element)

    const initialItem = localStorage.getItem('basketItems')
      ? localStorage.getItem('basketItems').split(',')
      : [];

    this.state = {
      phones: [],
      selectedPhone: null,
      basketItems: initialItem,
      query: 'moto',
      sortField: 'name',
    };


    this.addBasketItem = (phoneId) => {
      this.setState({
        basketItems: [
          ...this.state.basketItems,
          phoneId
        ],
      });

      localStorage.setItem('basketItems', this.state.basketItems.join(','))
    };
    this.deleteBasketItem = (index) => {
      const items = this.state.basketItems;

      this.setState({
        basketItems: [
          ...items.slice(0, index),
          ...items.slice(index + 1)
        ]
      });

      localStorage.setItem('basketItems', this.state.basketItems.join(','))
    }
    this.showPhone = (phoneId) => {
      Object(_api_phone_js__WEBPACK_IMPORTED_MODULE_3__["getById"])(phoneId)
        .then(phoneDetails => {
          this.setState({ selectedPhone: phoneDetails })
        })
      this.setState({
        selectedPhone: Object(_api_phone_js__WEBPACK_IMPORTED_MODULE_3__["getById"])(phoneId),
      })
    };
    this.hidePhone = () => {
      this.setState({
        selectedPhone: null,
      })
    };
    this.setQuery = (query) => {
      this.setState({ query });
      this.loadPhones();
    };
    this.setSortField = (sortField) => {
      this.setState({ sortField });
      this.loadPhones();
    };

    this.render();

    this.loadPhones();
  }

  loadPhones() {
    Object(_api_phone_js__WEBPACK_IMPORTED_MODULE_3__["getAll"])({
      query: this.state.query,
      sortField: this.state.sortField,
    })
    .then(phones => {
      this.setState({ phones })
    })
  }

  render() {
    this.element.innerHTML = `
      <div class="row">
        <!--Sidebar-->
        <div class="col-md-2">
          <Filter></Filter>
          <Basket></Basket>
        </div>

        <!--Main content-->
        <div class="col-md-10">
          ${ this.state.selectedPhone ? `
            <PhoneViewer></PhoneViewer>
          ` : `
            <PhonesCatalog></PhonesCatalog>
          ` }
        </div>
      </div>
    `;

    this.initComponent(_PhonesCatalog_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
      phones: this.state.phones,

      onPhoneSelected: this.showPhone,
      onAdd: this.addBasketItem,
    });

    this.initComponent(_PhoneViewer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      phone: this.state.selectedPhone,

      onBack: this.hidePhone,
      onAdd: this.addBasketItem,

    });

    this.initComponent(_Basket_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      items: this.state.basketItems,

      onDelete: this.deleteBasketItem,
    });

    this.initComponent(_Filter_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      query: this.state.query,
      sortField: this.state.sortField,

      onQueryChange: this.setQuery,
      onSortChange: this.setSortField,
    });
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
class Component {
  constructor(element, props = {}) {
    this.element = element;
    this.props = props;

    this.childred = {};
  }

  on(eventName, elementName, callback) {
    this.element.addEventListener(eventName, (event) => {
      const delegateTarget =
        event.target.closest(`[data-element="${elementName}"]`);

      if (!delegateTarget) {
        return;
      }
      event.delegateTarget = delegateTarget;
      callback(event);
    });
  }

  setState(data) {
    this.state = {
      ...this.state,
      ...data,
    };

    this.render();
  }

  initComponent(constructor, props) {
    const container = this.element.querySelector(constructor.name);

    if (!container) {
      delete this.childred[constructor.name];

      return;
    }

    const current = this.childred[constructor.name]

    if(current && _.isEqual(props, current.props)) {
      container.replaceWith(current.element);
    } else {
      this.childred[constructor.name] = new constructor(container, props)
    }
  }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhonesCatalog; });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);



class PhonesCatalog extends _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element, props) {
    super(element, props);

    this.render();

    this.on('click', 'phone-link', (event) => {
      this.props.onPhoneSelected(
        event.delegateTarget.dataset.phoneId
      );
    });

    this.on('click', 'add-button', (event) => {
      this.props.onAdd(
        event.delegateTarget.dataset.phoneId
      );
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


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhoneViewer; });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class PhoneViewer extends _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element, props) {
    super(element, props)


    this.state = {
      currentPicture: this.props.phone.images[0],
    };

    this.render();


    this.on('click', 'back-button', this.props.onBack);
    this.on('click', 'thumbnail', (event) => {
      this.setState({
          currentPicture: event.delegateTarget.src,
      })
      // this.state = {
      //   ...this.state,
      // };
    });
    this.on('click', 'add-button', () => {
      this.props.onAdd(this.props.phone.id)
    });
  }




  render() {
    const { phone } = this.props;
    const { currentPicture } = this.state;

    this.element.innerHTML = `
      <div>
        <img class="phone" src="${ currentPicture }">

        <button data-element="back-button">Back</button>
        <button data-element="add-button" data-phone-id="${phone.id}">Add to basket</button>


        <h1>${phone.name}</h1>

        <p>${phone.description}</p>
        <ul class="phone-thumbs">
          ${phone.images.map((imageUrl, number) => `
            <li>
              <img
              src="${imageUrl}"
              data-element="thumbnail">
            </li>
            `).join('')}
        </ul>
      </div>
    `;
  }
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getById", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
// const API_URL = 'https://mgrinko.github.io/js-20190426/api'
const API_URL = 'http://127.0.0.1:3000/api'

const getById = async (phoneId) => {
  let response = await fetch(`${API_URL}/phones/${phoneId}.json`);
  return response.json()
};

const getAll = async (params) => {
  let response = await fetch(`${API_URL}/phones.json?query=${params.query}&sortField=${params.sortField}`);
  let phones = await response.json();
  let normalizeQuery = params.query.toLowerCase();
  let key = params.sortField;

  return phones
    .filter(
      phone => phone.name.toLowerCase().includes(normalizeQuery)
    )
    .sort((phoneA, phoneB) => {
      return phoneA[key] > phoneB[key] ? 1 : -1;
    });
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Basket; });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Basket extends _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
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


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class Filter extends _Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element, props) {
    super(element, props);


    this.render();

    this.on('change', 'query-field', (event) => {
      this.props.onQueryChange(event.target.value);
    });

    this.on('change', 'sort-field', (event) => {
      this.props.onSortChange(event.target.value);
    })
  }

  render() {
    this.element.innerHTML = `
      <section>
        <p>
          Search:
          <input
          value="${this.props.query}"
          data-element="query-field"
          >
        </p>

        <p>
          Sort by:
          <select
            value="${this.props.sortField}"
            data-element="sort-field"
          >
            <option
              value="name"
              ${this.props.sortField === 'name' ? 'selected' : ''}
            >
            Alphabetical
            </option>
            <option
              value="age"
              ${this.props.sortField === 'age' ? 'selected' : ''}
            >
            Newest
            </option>
          </select>
        </p>
      </section>
    `
  }
}


/***/ })
/******/ ]);