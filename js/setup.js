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

var getrandomName = function () {
  var randomName = Math.floor(Math.random() * WIZARD_NAMES.length);
  return WIZARD_NAMES[randomName];
};

var getrandomEyse = function () {
  var randomEyse = Math.floor(Math.random() * EYES_COLOR.length);
  return EYES_COLOR[randomEyse];
};

var getrandomCoat = function () {
  var randomCoat = Math.floor(Math.random() * COAT_COLOR.length);
  return COAT_COLOR[randomCoat];
};

var getrandomSurname = function () {
  var randomSurname = Math.floor(Math.random() * WIZARD_SURNAME.length);
  return WIZARD_SURNAME[randomSurname];
};

var wizards = [
  {
    name: getrandomName(),
    coatColor: getrandomCoat(),
    surname: getrandomSurname(),
    eyesColor: getrandomEyse()
  },
  {
    name: getrandomName(),
    coatColor: getrandomCoat(),
    surname: getrandomSurname(),
    eyesColor: EYES_COLOR[2]
  },
  {
    name: getrandomName(),
    coatColor: getrandomCoat(),
    surname: getrandomSurname(),
    eyesColor: getrandomCoat()
  },
  {
    name: getrandomName(),
    coatColor: getrandomCoat(),
    surname: getrandomSurname(),
    eyesColor: getrandomCoat()
  }
];


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + wizard.surname;
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

//
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});


var setupWizzard = document.querySelector('.setup-wizard');
var wizardCoat = document.querySelector('.wizard-coat');

var setupCoat = function (evt) {
  evt.preventDefault();
  wizardCoat.style = 'fill: + getrandomCoat()';
};

setupWizzard.addEventListener('click', setupCoat);

var wizardEyse = document.querySelector('.wizard-eyes');

var setupEyse = function (evt) {
  evt.preventDefault();
  wizardEyse.style = 'fill:' + getrandomEyse();
};

setupWizzard.addEventListener('click', setupEyse);


var fireBall = document.querySelector('.setup-fireball-wrap');
var fireBallColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var getrandomFireBall = function () {
  var randomBall = Math.floor(Math.random() * fireBallColor.length);
  return fireBallColor[randomBall];
};

var setupBall = function (evt) {
  evt.preventDefault();
  fireBall.style = 'fill: + getrandomFireBall()';
};

setupWizzard.addEventListener('click', setupBall);
