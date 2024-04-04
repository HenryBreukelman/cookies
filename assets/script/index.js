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
const operatingSystem = document.querySelector('.operatingSysten');
const screenWidth = document.querySelector('.screenWidth');
const screenHeight = document.querySelector('.screenHeight');

let cookieTime = 15;

/*
  functions
*/

//get/set cookies

function setCookie(name, value, maxAge) {
  const encodedName = encodeURIComponent(name)
  const encodedValue = encodeURIComponent(value)
  document.cookie = `${encodedName}=${encodedValue}; path=/; max-age=${maxAge}; SameSite=Lax`
}

function getCookie(name) {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    let cookieParts = cookie.split('=');
    let cookieName = decodeURIComponent(cookieParts[0]);
    let cookieValue = decodeURIComponent(cookieParts[1] || '');

    if (cookieName === name) {
      return `${cookieName}: ${cookieValue}`
    }
  }
}

// info

function getBrowser() {
  const browserMap = {
    "Firefox": "Firefox",
    "Edg": "Edge",
    "Chrome": "Chrome",
    "Safari": "Safari",
    "Opera": "Opera",
    "OPR": "Opera"
  };

  let browserName = window.navigator.userAgent;
  let detectedBrowser = Object.keys(browserMap).find(browser => 
    browserName.includes(browser)) || 'Unknown';
  return detectedBrowser
} //got from chatGPT

function getOperatingSystem() {
  const osMap = {
      "Windows": "Windows",
      "Mac": "Mac OS",
      "Linux": "Linux",
      "Android": "Android",
      "iOS": "iOS"
  };
  
  let Opsystem = window.navigator.userAgent;
  let detectedOS = Object.keys(osMap).find(os => Opsystem.includes(os)) || 'Unknown';
  return detectedOS
} //got from chatGPT

function getWidth() {
  return `${window.innerWidth}px`
}

function getHeight() {
 return `${window.innerHeight}px`
}

//dialog boxs

function openDialog() {
  cookieBox.classList.remove('hidden');
}

function acceptAll() {
  cookieBox.classList.add('hidden');
  browserCookie();
  osCookie();
  widthCookie();
  heightCookie();
  console.log(document.cookie);
  console.log(getCookie('Browser'));
  console.log(getCookie('OS'));
  console.log(getCookie('Width'));
  console.log(getCookie('Height'));
}

function openSettings() {
  settingsBox.classList.remove('hidden');
  cookieBox.classList.add('hidden');
}

function saveSettings() {
  settingsBox.classList.add('hidden');
  if (browser.checked) {
    browserCookie();
    console.log(getCookie('Browser'));
  }

  if (operatingSystem.checked) {
    osCookie();
    console.log(getCookie('OS'));
  }

  if (screenWidth.checked) {
    widthCookie();
    console.log(getCookie('Width'));
  }

  if (screenHeight.checked) {
    heightCookie();
    console.log(getCookie('Height'));
  }
}

//set cookies

function browserCookie() {
  let browserName = getBrowser();
  setCookie('Browser', browserName, cookieTime);
}

function osCookie() {
  let operatingSystemName = getOperatingSystem();
  setCookie('OS', operatingSystemName, cookieTime);
}

function widthCookie() {
  let width = getWidth();
  setCookie('Width', width, cookieTime);
}

function heightCookie() {
  let height = getHeight();
  setCookie('Height', height, cookieTime)
}

/*
  eventlisteners
*/

accept.addEventListener('click', acceptAll);
settings.addEventListener('click', openSettings);
save.addEventListener('click', saveSettings);
window.addEventListener('load', () => setTimeout(openDialog, 1000));