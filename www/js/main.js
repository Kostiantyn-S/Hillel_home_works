"use strict";var clock={};clock.__proto__.creatingElement=function(e,t){var n=document.createElement("div"),o=document.getElementById(t);n.id=e,o.appendChild(n)},clock.__proto__.showTime=function(){function e(){r=i<10?"0"+i:i}function t(){u=c<10?"0"+c:c}function n(){l=d<10?"0"+d:d}var o=new Date,i=o.getHours(),c=o.getMinutes(),d=o.getSeconds(),r=void 0,u=void 0,l=void 0;!function(){l!==d&&n()}(),function(){u!==c&&t()}(),function(){r!==i&&e()}(),document.getElementById("time").innerHTML=r+":"+u+":"+l},clock.__proto__.showDate=function(){var e=new Date,t=e.getDate(),n=e.getMonth()+1,o=e.getFullYear(),i=void 0,c=void 0,d=void 0,r=function(){return t=t!==i?t:i};r();var u=function(){return n=n!==c?n:c};u();var l=function(){return o=o!==d?o:d};l(),document.getElementById("date").innerHTML=t+"/"+n+"/"+o},clock.creatingElement("date","footer"),setInterval(clock.showDate,1e3),clock.creatingElement("time","footer"),setInterval(clock.showTime,1e3);var windowSize={};windowSize.__proto__.creatingElement=function(e,t){var n=document.createElement("div"),o=document.getElementById(t);n.id=e,o.appendChild(n)},windowSize.__proto__.showSize=function(){var e=document.documentElement.clientWidth,t=document.documentElement.clientHeight,n=void 0,o=void 0;e!==n&&t!==o&&setTimeout(function(){document.getElementById("window-size").innerHTML=e+" x "+t},2e3),n=e,o=t},windowSize.creatingElement("window-size","header"),setInterval(windowSize.showSize,0);