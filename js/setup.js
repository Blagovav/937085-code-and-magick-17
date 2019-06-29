'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


var wizards = [
  {
    name: WIZARD_NAMES[0],
    coatColor: COAT_COLOR[0],
    surname: WIZARD_SURNAME[1],
    eyesColor: EYES_COLOR[1]
  },
  {
    name: WIZARD_NAMES[1],
    coatColor: 'rgb(215, 210, 55)',
    surname: WIZARD_SURNAME[2],
    eyesColor: EYES_COLOR[2]
  },
  {
    name: WIZARD_NAMES[2],
    coatColor: 'rgb(101, 137, 164)',
    surname: WIZARD_SURNAME[3],
    eyesColor: EYES_COLOR[3]
  },
  {
    name: WIZARD_NAMES[3],
    coatColor: 'rgb(127, 127, 127)',
    surname: WIZARD_SURNAME[4],
    eyesColor: EYES_COLOR[4]
  }
];


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
