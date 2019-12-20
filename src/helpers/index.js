import {useEffect, useState} from "react";
import postcssJs from 'postcss-js';
import autoprefixer from 'autoprefixer';
import React from "react";
export const prefixer = postcssJs.sync([ autoprefixer ]);

export const useAsyncState = initialValue => {
  const [value, setValue] = useState(initialValue);
  const setter = x =>
    new Promise(resolve => {
      setValue(x);
      resolve(x);
    });
  return [value, setter];
};

export const dataFromClient = () => ({
  userAgent: window.navigator.userAgent,
  appVersion: window.navigator.appVersion,
  language: window.navigator.language,
  systemTime: new Date().toLocaleTimeString(),
  hash: window.location.hash,
  permittanceX: window.screen.width,
  permittanceY: window.screen.height,
});

export function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}

export function whatsBrowser() {
  navigator.sayswho= (function(){
    var N= navigator.appName, ua= navigator.userAgent, tem,
      M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*([\d\.]+)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    M= M? [M[1], M[2]]:[N, navigator.appVersion, '-?'];
    return M.join(' ');
  })();

  return navigator.sayswho;
}

export function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function getTransformSecondsToMinutes(time) {
  var minutes = Math.floor(time / 60);
  var seconds = time - minutes * 60;

  return `0${minutes}: ${seconds.toString().length === 1 ? '0' + seconds : seconds}`
  //
}

export const validAccordingToRegexp = (event, regExp) => {
  const value = event.target.value;
  if(regExp.test(value) && value.length < 20) {
    return void changeForRequest(event);
  }

  return false;
};


export const isNumber = num => {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

