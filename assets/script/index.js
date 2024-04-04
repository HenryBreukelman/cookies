'use strict';

/*
  selectors
*/

const cookieBox = document.querySelector('.cookie-box')
const settingsBox = document.querySelector('.settings-box')
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

function setCookie(name, value, maxAge) {
  document.cookie = `${name}=${value}; path=/; max-age=${maxAge}; SameSite=Lax`
}

function getCookie(name) {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    let cookieParts = cookie.split('=');
    let cookieName = decodeURIComponent(cookieParts[0]);
    let cookieValue = decodeURIComponent(cookieParts[1] || '');

    if (cookieName === name) {
      return cookieValue;
    }
  }
}

function openDialog() {
  cookieBox.classList.remove('hidden');
}

function acceptAll() {
  cookieBox.classList.add('hidden');
}

function openSettings() {
  settingsBox.classList.remove('hidden');
  cookieBox.classList.add('hidden');
}

function saveSettings() {
  settingsBox.classList.add('hidden');
}

/*
  eventlisteners
*/

accept.addEventListener('click', acceptAll);
settings.addEventListener('click', openSettings);
save.addEventListener('click', saveSettings);
window.addEventListener('load', () => setTimeout(openDialog, 1000));