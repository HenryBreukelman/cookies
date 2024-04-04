'use strict';

/*
  selectors
*/

const accept = document.querySelector('.accept');
const settings = document.querySelector('.settings');
const save = document.querySelector('.save');
const browser = document.querySelector('.browser');
const operatingSysten = document.querySelector('.operatingSysten');
const screenWidth = document.querySelector('.screenWidth');
const screenHeight = document.querySelector('.screenHeight');

/*
  functions
*/

function openDialog() {
  
}

function acceptAll() {

}

function openSettings() {

}

function saveSettings() {

}

/*
  eventlisteners
*/

accept.addEventListener('click', acceptAll);
settings.addEventListener('click', openSettings);
save.addEventListener('click', saveSettings);
window.addEventListener('load', openDialog);