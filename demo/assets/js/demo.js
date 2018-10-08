'use strict';
const isSite = (window.location.href.indexOf('draggable.github.io') !== -1);
let container = document.querySelector('.build-form');
let renderContainer = document.querySelector('.render-form');
let formeoOpts = {
  container: container,
  i18n: {
    preloaded: {
      'en-US': {'row.makeInputGroup': ' Repeatable Region'}
    }
  },
  // allowEdit: false,
  controls: {
    sortable: false,
    groupOrder: [
      'common',
      'html',
    ],
    elements: [
//     {
//   tag: 'input',
//   attrs: {
//     type: 'radio',
//     required: false
//   },
//   config: {
//     label: 'Radio Group',
//     disabledAttrs: ['type']
//   },
//   meta: {
//     group: 'common',
//     icon: 'radio-group',
//     id: 'radio'
//   },
//   options: (() => {
//     let options = [1, 2, 3].map(i => {
//       return {
//         label: 'Radio ' + i,
//         value: 'radio-' + i,
//         selected: false
//       };
//     });
//     let otherOption = {
//         label: 'Other',
//         value: 'other',
//         selected: false
//       };
//     options.push(otherOption);
//     return options;
//   })(),
//   action: {
//     mouseover: evt => {
//       console.log(evt);
//       const {target} = evt;
//       if (target.value === 'other') {
//         const otherInput = target.cloneNode(true);
//         otherInput.type = 'text';
//         target.parentElement.appendChild(otherInput);
//       }
//     }
//   }
// },

    ],
    elementOrder: {
      common: [
      'button',
      'checkbox',
      'date-input',
      'hidden',
      'upload',
      'number',
      'radio',
      'select',
      'text-input',
      'textarea',
      ]
    }
  },
  events: {
    // onUpdate: console.log,
    // onSave: console.log
  },
  svgSprite: 'https://draggable.github.io/formeo/assets/img/formeo-sprite.svg',
  // debug: true,
  sessionStorage: true,
  editPanelOrder: ['attrs', 'options']
};


const formeo = new window.Formeo(formeoOpts);
console.log(formeo);
let editing = true;

// let debugWrap = document.getElementById('debug-wrap');
// let debugBtn = document.getElementById('debug-demo');
let localeSelect = document.getElementById('locale');
let toggleEdit = document.getElementById('renderForm');
let viewDataBtn = document.getElementById('viewData');
let resetDemo = document.getElementById('reloadBtn');

let getHtmlBtn = document.getElementById('viewHtml');
// let htmlOutput = document.getElementById('showHtml');

// debugBtn.onclick = function() {
//   debugWrap.classList.toggle('open');
// };

resetDemo.onclick = function() {
  window.sessionStorage.removeItem('formData');
  location.reload();
};

toggleEdit.onclick = evt => {
  document.body.classList.toggle('form-rendered', editing);
  if (editing) {
    formeo.render(renderContainer);
    evt.target.innerHTML = '编辑';
    getHtmlBtn.style.display = 'inline-block';
    // htmlOutput.style.display = 'block';
  } else {
    evt.target.innerHTML = '预览';
    getHtmlBtn.style.display = 'none';
    // htmlOutput.style.display = 'none';
  }

  return editing = !editing;
};

viewDataBtn.onclick = evt => {
  console.log(formeo.formData);
};
getHtmlBtn.onclick = evt => {
  console.log(renderContainer.innerHTML);
};

let formeoLocale = window.sessionStorage.getItem('formeo-locale');
if (formeoLocale) {
  localeSelect.value = formeoLocale;
}

// localeSelect.addEventListener('change', function() {
//   window.sessionStorage.setItem('formeo-locale', localeSelect.value);
//   formeo.i18n.setLang(localeSelect.value);
// });
