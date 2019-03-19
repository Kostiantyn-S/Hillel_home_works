"use strict";function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function turnOnSlider1(){var e=new CreateElement;!function(){clearInterval(slider1.timerId)}(),function(){e.create("article","div").id("slider1-wrap")["class"]("slider-wrap").position(1),e.create("slider1-wrap","div").id("slider1-title")["class"]("slider-title").innerHTML("North Pole").position(0),e.create("slider1-wrap","div").id("slider1")["class"]("slider").position(1),e.create("slider1","div").id("slider1-button-left")["class"]("slider-button-left").position(0),e.create("slider1","div").id("slider1-indicators")["class"]("slider1-indicators").position(1),e.create("slider1-indicators","div").id("slider1-slide0")["class"]("slider1-slide").position(0),e.create("slider1-indicators","div").id("slider1-slide1")["class"]("slider1-slide").position(1),e.create("slider1-indicators","div").id("slider1-slide2")["class"]("slider1-slide").position(2),e.create("slider1-indicators","div").id("slider1-slide3")["class"]("slider1-slide").position(3),e.create("slider1-indicators","div").id("slider1-slide4")["class"]("slider1-slide").position(4),e.create("slider1","div").id("slider1-button-right")["class"]("slider-button-right").position(2),e.create("slider1-wrap","div").id("slider1-hover")["class"]("slider1-hover").position(2),document.getElementById("slider1-hover").hidden=!0}(),function(){slider1.set("slider1",slider1.slides[slider1.startIndex]),slider1.indicator("slider1","slider1-indicators","white"),slider1.timing("slider1","slider1-indicators","white")}(),function(){document.getElementById("slider1").addEventListener("mouseover",function(){clearInterval(slider1.timerId),document.getElementById("slider1-hover").hidden=!1,document.getElementById("slider1-hover").innerHTML=""+document.getElementById("slider1").style.backgroundImage}),document.getElementById("slider1").addEventListener("mousemove",function(e){var t=document.getElementById("slider1-hover");t.style.left=e.clientX+20+"px",t.style.top=e.clientY+500+"px"}),document.getElementById("slider1").addEventListener("mouseout",function(){slider1.timing("slider1","slider1-indicators","white"),document.getElementById("slider1-hover").hidden=!0}),document.getElementById("slider1-button-left").addEventListener("click",function(){slider1.scrollLeft("slider1"),slider1.indicator("slider1","slider1-indicators","white")}),document.getElementById("slider1-button-right").addEventListener("click",function(){slider1.scrollRight("slider1"),slider1.indicator("slider1","slider1-indicators","white")}),document.getElementById("slider1-slide0").addEventListener("click",function(){slider1.set("slider1",slider1.slides[0]),slider1.indicator("slider1","slider1-indicators","white")}),document.getElementById("slider1-slide1").addEventListener("click",function(){slider1.set("slider1",slider1.slides[1]),slider1.indicator("slider1","slider1-indicators","white")}),document.getElementById("slider1-slide2").addEventListener("click",function(){slider1.set("slider1",slider1.slides[2]),slider1.indicator("slider1","slider1-indicators","white")}),document.getElementById("slider1-slide3").addEventListener("click",function(){slider1.set("slider1",slider1.slides[3]),slider1.indicator("slider1","slider1-indicators","white")}),document.getElementById("slider1-slide4").addEventListener("click",function(){slider1.set("slider1",slider1.slides[4]),slider1.indicator("slider1","slider1-indicators","white")})}()}function studentsTableCreateDOM(){var e=new CreateElement;!function(){""!==document.getElementById("article").innerHTML&&(clearInterval(slider.timerId),clearInterval(slider1.timerId),document.getElementById("article").innerHTML="")}(),function(){e.create("article","div").id("studentsTable-title")["class"]("studentsTable-title").innerHTML("Students table").position(0),e.create("article","form").id("studentsForm")["class"]("studentsForm").position(1),e.create("studentsForm","div").id("studentsForm-inputs")["class"]("studentsForm-inputs").position(0),e.create("studentsForm-inputs","div").id("studentsForm-name")["class"]("studentsForm-inputConteiner").position(0),e.create("studentsForm-name","label").id("label-name")["class"]("studentsForm-label")["for"]("input-name").innerHTML("Name: ").position(0),e.create("studentsForm-name","input").id("input-name")["class"]("studentsForm-input").type("text").required(!0).placeholder("Kostiantyn").position(1),e.create("studentsForm-name","span").id("message-name")["class"]("studentsForm-message").innerHTML('The name must consist of uppercase or lowercase latin letters or symbols "-" and "space", max length 20 symbols.').position(2),e.create("studentsForm-inputs","div").id("studentsForm-surname")["class"]("studentsForm-inputConteiner").position(1),e.create("studentsForm-surname","label").id("label-surname")["class"]("studentsForm-label")["for"]("input-surname").innerHTML("Surname: ").position(0),e.create("studentsForm-surname","input").id("input-surname")["class"]("studentsForm-input").type("text").required(!0).placeholder("Starchyk").position(1),e.create("studentsForm-surname","span").id("message-surname")["class"]("studentsForm-message").innerHTML('The surname must consist of uppercase or lowercase latin letters or symbols "-" and "space", max length 20 symbols.').position(2),e.create("studentsForm-inputs","div").id("studentsForm-admission")["class"]("studentsForm-inputConteiner").position(2),e.create("studentsForm-admission","label").id("label-admission")["class"]("studentsForm-label")["for"]("input-admission").innerHTML("Admission year: ").position(0),e.create("studentsForm-admission","input").id("input-admission")["class"]("studentsForm-input").type("number").required(!0).placeholder("2006").position(1),e.create("studentsForm-admission","span").id("message-admission")["class"]("studentsForm-message").innerHTML("The admission year must be positive integer consists of four numbers.").position(2),e.create("studentsForm-inputs","div").id("studentsForm-ending")["class"]("studentsForm-inputConteiner").position(3),e.create("studentsForm-ending","label").id("label-ending")["class"]("studentsForm-label")["for"]("input-ending").innerHTML("Year of ending: ").position(0),e.create("studentsForm-ending","input").id("input-ending")["class"]("studentsForm-input").type("number").required(!0).placeholder("2011").position(1),e.create("studentsForm-ending","span").id("message-ending")["class"]("studentsForm-message").innerHTML("The year of ending must be positive integer consists of four numbers.").position(2),e.create("studentsForm-inputs","div").id("studentsForm-site")["class"]("studentsForm-inputConteiner").position(4),e.create("studentsForm-site","label").id("label-site")["class"]("studentsForm-label")["for"]("input-site").innerHTML("Site: ").position(0),e.create("studentsForm-site","input").id("input-site")["class"]("studentsForm-input").type("text").placeholder("www.google.com").position(1),e.create("studentsForm-inputs","div").id("studentsForm-filter")["class"]("studentsForm-inputConteiner").position(5),e.create("studentsForm-filter","label").id("label-filter")["class"]("studentsForm-label")["for"]("input-filter").innerHTML("Filter: ").position(0),e.create("studentsForm-filter","input").id("input-filter")["class"]("studentsForm-input").type("text").placeholder("St").position(1),e.create("studentsForm","div").id("studentsForm-buttons")["class"]("studentsForm-buttons").position(1),e.create("studentsForm-buttons","input").type("button").value("Add to table").id("button-add")["class"]("studentsForm-button").position(0),e.create("studentsForm-buttons","input").type("button").value("Clear form").id("button-clear")["class"]("studentsForm-button").position(1),e.create("studentsForm-buttons","input").type("button").value("Save table").id("button-save")["class"]("studentsForm-button").position(2),e.create("studentsForm-buttons","input").type("button").value("Apply filter").id("button-applyFilter")["class"]("studentsForm-button").position(3),e.create("studentsForm-buttons","input").type("button").value("Delete filter").id("button-delFilter")["class"]("studentsForm-button").position(4)}(),function(){e.create("article","table").id("studentsTable")["class"]("studentsTable").position(2),e.create("studentsTable","tr").id("studentsTable-head")["class"]("studentsTable-head").position(0),e.create("studentsTable-head","td").id("head-name")["class"]("head-name").innerHTML("Name").position(0),e.create("studentsTable-head","td").id("head-surname")["class"]("head-surname").innerHTML("Surname").position(1),e.create("studentsTable-head","td").id("head-admission")["class"]("head-admission").innerHTML("Admission year &#11015&#11014").position(2),e.create("studentsTable-head","td").id("head-ending")["class"]("head-ending").innerHTML("Year of ending &#11015&#11014").position(3),e.create("studentsTable-head","td").id("head-site")["class"]("head-site").innerHTML("Site").position(4),e.create("studentsTable-head","td").id("head-edit")["class"]("head-edit").position(5),e.create("studentsTable-head","td").id("head-delete")["class"]("head-delete").position(6)}(),function(){null!==localStorage.getItem("table")&&(document.getElementById("studentsTable").innerHTML=localStorage.getItem("table"))}()}function turnOnValidation(){var e=new FormValidation;!function(){document.getElementById("input-name").addEventListener("input",function(){e.valideToLatinSymbols("input-name","message-name"),e.valideStringToLength("input-name","message-name")})}(),function(){document.getElementById("input-surname").addEventListener("input",function(){e.valideToLatinSymbols("input-surname","message-surname"),e.valideStringToLength("input-surname","message-surname")})}(),function(){document.getElementById("input-admission").addEventListener("input",function(){e.validateNumber("input-admission","message-admission")})}(),function(){document.getElementById("input-ending").addEventListener("input",function(){e.validateNumber("input-ending","message-ending")})}()}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();!function(){document.addEventListener("click",function(){event.target!==document.getElementById("nav-input")&&event.target!==document.getElementById("nav-menu")&&document.getElementById("nav-input").checked===!0&&(document.getElementById("nav-input").checked=!1)})}();var CreateElement=function(){function e(){_classCallCheck(this,e),this.parrent,this.element}return _createClass(e,[{key:"create",value:function(e,t){return this.parrent=document.getElementById(e),this.element=document.createElement(t),this}},{key:"id",value:function(e){return this.element.id=e,this}},{key:"class",value:function(e){return this.element.className=e,this}},{key:"type",value:function(e){return this.element.type=e,this}},{key:"value",value:function(e){return this.element.value=e,this}},{key:"innerHTML",value:function(e){return this.element.innerHTML=e,this}},{key:"for",value:function(e){return this.element.htmlFor=e,this}},{key:"required",value:function(e){return this.element.required=e,this}},{key:"placeholder",value:function(e){return this.element.placeholder=e,this}},{key:"hidden",value:function(e){return this.element.hidden=e,this}},{key:"position",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.parrent.insertBefore(this.element,this.parrent.children[e]),this}}]),e}(),Clock=function(){function e(t,n,i,s,d){_classCallCheck(this,e),this.daysConteinerId=t,this.weeksKonteinerId=n,this.hoursConteinerId=i,this.minutesConteinerId=s,this.secondsConteinerId=d}return _createClass(e,[{key:"showDate",value:function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,i=e.getDay(),s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],d=e.getDate();!function(){n=n<10?"0"+n:n}(),function(){d=d<10?"0"+d:d}(),document.getElementById(this.daysConteinerId).innerHTML=d+"/"+n+"/"+t,document.getElementById(this.weeksKonteinerId).innerHTML=s[i]}},{key:"showHours",value:function(){var e=new Date,t=e.getHours();return t=t<10?"0"+t:t,document.getElementById(this.hoursConteinerId).innerHTML=t,t}},{key:"showMinutes",value:function(){var e=new Date,t=e.getMinutes();return t=t<10?"0"+t:t,document.getElementById(this.minutesConteinerId).innerHTML=":"+t,t}},{key:"showSeconds",value:function(){var e=new Date,t=e.getSeconds();return t=t<10?"0"+t:t,document.getElementById(this.secondsConteinerId).innerHTML=":"+t,t}},{key:"change",value:function(){var e=this.showSeconds(),t=void 0,n=void 0;"00"===e&&(t=this.showMinutes()),"00"===t&&(n=this.showHours()),"00"===n&&this.showDate()}}]),e}();!function(){var e=new CreateElement;e.create("header","div").id("date")["class"]("date").position(0),e.create("date","span").id("date-week").position(),e.create("date","span").id("date-day").position(),e.create("header","div").id("time")["class"]("time").position(1),e.create("time","span").id("time-hours").position(),e.create("time","span").id("time-minutes").position(),e.create("time","span").id("time-seconds").position();var t=new Clock("date-day","date-week","time-hours","time-minutes","time-seconds");t.showDate(),t.showHours(),t.showMinutes(),t.showSeconds(),setInterval(t.change.bind(t),1e3)}();var WindowSize=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"showSize",value:function(e){var t=document.documentElement.clientWidth,n=document.documentElement.clientHeight;document.getElementById(e).innerHTML=t+" x "+n}}]),e}();!function(){var e=new CreateElement;e.create("footer","div").id("window-size")["class"]("window-size").position();var t=new WindowSize;t.showSize("window-size"),window.addEventListener("resize",function(){setTimeout(t.showSize,2e3,"window-size")})}();var SpentTime=function(){function e(t){_classCallCheck(this,e),this.value=0,this.intervalId,this.conteinerId=t}return _createClass(e,[{key:"stopWatch",value:function(){var e=this;this.intervalId=setInterval(function(){++e.value,e.value=e.value<10?"0"+e.value:e.value,document.getElementById(e.conteinerId).innerHTML=e.value},1e3)}},{key:"addRefreshAtEscKey",value:function(){var e=this;window.addEventListener("keydown",function(){27===event.keyCode&&(clearInterval(e.intervalId),e.value=0,e.stopWatch())})}},{key:"stopTheStopwatchWhenHoveringAndViceVersa",value:function(e){var t=this;document.getElementById(e).addEventListener("mouseover",function(){clearInterval(t.intervalId)}),document.getElementById(e).addEventListener("mouseout",this.stopWatch.bind(t))}}]),e}();!function(){var e=new CreateElement,t=new SpentTime("spentTime_value");e.create("footer","div").id("spentTime")["class"]("spentTime").position(0),e.create("spentTime","div").id("spentTime_title")["class"]("spentTime_title").innerHTML("You spent in this page:").position(0),e.create("spentTime","div").id("spentTime_value-and-text")["class"]("spentTime_value-and-text").position(1),e.create("spentTime_value-and-text","div").id("spentTime_value")["class"]("spentTime_value").position(0),e.create("spentTime_value-and-text","div").id("spentTime_text")["class"]("spentTime_text").innerHTML("seconds").position(1),t.stopWatch(),t.addRefreshAtEscKey(),t.stopTheStopwatchWhenHoveringAndViceVersa("spentTime")}();var CreateTable=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"validatingInput",value:function(e,t){document.getElementById(e).addEventListener("input",function(){var n=parseInt(document.getElementById(e).value);document.getElementById(t).hidden=!(n>100||n<1)})}},{key:"clearOldResult",value:function(e){document.getElementById(e).innerHTML!==!1&&(document.getElementById(e).innerHTML="")}},{key:"renderTable",value:function(e,t,n){var i=parseInt(document.getElementById(e).value),s=parseInt(document.getElementById(t).value),d=void 0,r=void 0;d=document.getElementById(n);for(var l=0;l<i;l++){r=d.insertRow();for(var o=0;o<s;o++)r.insertCell()}}},{key:"showIndex",value:function(e){document.getElementById(e).addEventListener("click",function(){alert("Строка "+(event.target.parentNode.rowIndex+1)+" Колонка "+(event.target.cellIndex+1))})}},{key:"activateButton",value:function(e,t,n,i,s,d){var r=this;document.getElementById(e).addEventListener("click",function(){document.getElementById(s).hidden!==!1&&document.getElementById(d).hidden!==!1&&document.getElementById(n).value!==!1&&document.getElementById(i).value!==!1&&(r.clearOldResult(t),r.renderTable(n,i,t),r.showIndex(t))})}}]),e}();!function(){var e=new CreateElement,t=new CreateTable;document.getElementById("nav_item-createTable").addEventListener("click",function(){!function(){""!==document.getElementById("article").innerHTML&&(clearInterval(slider.timerId),clearInterval(slider1.timerId),document.getElementById("article").innerHTML="")}(),function(){e.create("article","form").id("create-table")["class"]("create-table").position(0),e.create("create-table","div").id("table-rows-conteiner")["class"]("table-rows-conteiner").position(0),e.create("table-rows-conteiner","label")["for"]("table-rows").innerHTML("How much rows in table you want to create?").position(0),e.create("table-rows-conteiner","input").id("table-rows").type("number").placeholder("28").required(!0).position(1),e.create("table-rows-conteiner","span").id("popup-row")["class"]("popup-row").hidden(!0).innerHTML("Value must be integer more than 0 but less than 100").position(2),e.create("create-table","div").id("table-columns-conteiner")["class"]("table-columns-conteiner").position(1),e.create("table-columns-conteiner","label")["for"]("table-columns").innerHTML("How much columns in table you want to create?").position(0),e.create("table-columns-conteiner","input").id("table-columns").type("number").placeholder("35").required(!0).position(1),e.create("table-columns-conteiner","span").id("popup-column")["class"]("popup-column").hidden(!0).innerHTML("Value must be integer more than 0 but less than 100").position(2),e.create("create-table","div").id("table-button-conteiner")["class"]("table-button-conteiner").position(2),e.create("table-button-conteiner","input").type("button").value("Create").id("table-button")["class"]("table-button").position(),e.create("article","table").id("result-table")["class"]("result-table").position(1)}(),function(){t.validatingInput("table-rows","popup-row"),t.validatingInput("table-columns","popup-column")}(),t.activateButton("table-button","result-table","table-rows","table-columns","popup-row","popup-column")})}();var Slider=function(){function e(){_classCallCheck(this,e),this.slides=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"],this.startIndex=0,this.timerId=0}return _createClass(e,[{key:"set",value:function(e,t){document.getElementById(e).style.backgroundImage="url('img/slider/"+t+"')"}},{key:"scrollRight",value:function(e){this.startIndex++,this.startIndex===this.slides.length&&(this.startIndex=0),this.set(e,this.slides[this.startIndex])}},{key:"scrollLeft",value:function(e){this.startIndex--,this.startIndex<0&&(this.startIndex=this.slides.length-1),this.set(e,this.slides[this.startIndex])}},{key:"timing",value:function(e){var t=this;this.timerId=setInterval(function(){t.scrollRight(e)},6e3)}}]),e}(),slider=new Slider;!function(){var e=new CreateElement;document.getElementById("nav_item-slider").addEventListener("click",function(){!function(){clearInterval(slider.timerId),document.getElementById("article").innerHTML=""}(),function(){e.create("article","div").id("slider-wrap")["class"]("slider-wrap").position(2),e.create("slider-wrap","div").id("slider-title")["class"]("slider-title").innerHTML("Triumph Bonneville").position(0),e.create("slider-wrap","div").id("slider")["class"]("slider").position(1),e.create("slider","div").id("slider-button-left")["class"]("slider-button-left").position(),e.create("slider","div").id("slider-button-right")["class"]("slider-button-right").position()}(),function(){slider.set("slider",slider.slides[slider.startIndex]),slider.timing("slider")}(),function(){document.getElementById("slider").addEventListener("mouseover",function(){clearInterval(slider.timerId)}),document.getElementById("slider").addEventListener("mouseout",function(){slider.timing("slider")}),document.getElementById("slider-button-left").addEventListener("click",function(){slider.scrollLeft("slider")}),document.getElementById("slider-button-right").addEventListener("click",function(){slider.scrollRight("slider")})}(),turnOnSlider1()})}();var Slider1=function(e){function t(){_classCallCheck(this,t);var e=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.slides=["5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"],e}return _inherits(t,e),_createClass(t,[{key:"indicator",value:function(e,t,n){for(var i=0;i<this.slides.length;i++)document.getElementById(e).style.backgroundImage==='url("img/slider/'+this.slides[i]+'")'?document.getElementById(t).childNodes[i].style.background=n:document.getElementById(t).childNodes[i].style.background=null}},{key:"timing",value:function(e,t,n){var i=this;this.timerId=setInterval(function(){i.scrollRight(e),i.indicator(e,t,n)},6e3)}}]),t}(Slider),slider1=new Slider1;!function(){var e=new CreateElement;e.create("header","a").id("clearAll")["class"]("clearAll").innerHTML("Clear All").position(0),document.getElementById("clearAll").addEventListener("click",function(){clearInterval(slider.timerId),clearInterval(slider1.timerId),document.getElementById("article").innerHTML=""})}();var SuperButtons=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"clickMe",value:function(e){e.target.style.background!==e.target.background?e.target.style.background=e.target.background:e.target.style.background="grey"}},{key:"clear",value:function(e){""!==document.getElementById(e).innerHTML&&(clearInterval(slider.timerId),clearInterval(slider1.timerId),document.getElementById(e).innerHTML="")}}]),e}();!function(){document.getElementById("nav_item-superButtons").addEventListener("click",function(){var e=new SuperButtons,t=new CreateElement;e.clear("article"),t.create("article","input").id("firstButton")["class"]("superButton").value("First Button").type("button").position(0),document.getElementById("firstButton").background="red",t.create("article","input").id("secondButton")["class"]("superButton").value("Second Button").type("button").position(1),document.getElementById("secondButton").background="green",t.create("article","input").id("thirdButton")["class"]("superButton").value("Third Button").type("button").position(2),document.getElementById("thirdButton").background="blue",document.getElementById("firstButton").addEventListener("click",e.clickMe),document.getElementById("secondButton").addEventListener("click",e.clickMe),document.getElementById("thirdButton").addEventListener("click",e.clickMe)})}();var FormValidation=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"valideToLatinSymbols",value:function(e,t){for(var n=document.getElementById(e),i=0;i<n.value.length;i++){if((n.value.charCodeAt(i)<65||n.value.charCodeAt(i)>90)&&(n.value.charCodeAt(i)<97||n.value.charCodeAt(i)>122)&&45!==n.value.charCodeAt(i)&&32!==n.value.charCodeAt(i)){document.getElementById(t).style.visibility="visible";break}document.getElementById(t).style.visibility="hidden"}}},{key:"valideStringToLength",value:function(e,t){var n=document.getElementById(e);(document.getElementById(t).style.visibility=n.value.length>20)&&(document.getElementById(t).style.visibility="visible")}},{key:"validateNumber",value:function(e,t){var n=document.getElementById(e);n.value.length<4||n.value.length>4||n.value<0||Number.isInteger(Number(n.value))===!1?document.getElementById(t).style.visibility="visible":document.getElementById(t).style.visibility="hidden"}}]),e}(),FormFunctions=function(){function e(){_classCallCheck(this,e),this.cellClassNames=["result-name","result-syrname","result-admission","result-ending","result-site"]}return _createClass(e,[{key:"addData",value:function(e){var t=document.getElementById(e),n=void 0,i=void 0;n=t.insertRow();for(var s=arguments.length,d=Array(s>1?s-1:0),r=1;r<s;r++)d[r-1]=arguments[r];for(var l=0;l<d.length;l++)i=n.insertCell(),i.className=this.cellClassNames[l],i.innerHTML=document.getElementById(d[l]).value;i=n.insertCell(),i.className="result-edit",i.innerHTML="&#9998",i=n.insertCell(),i.className="result-delete",i.innerHTML="&#10008"}},{key:"clearForm",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i=0;i<t.length;i++)document.getElementById(arguments[i]).value=""}},{key:"saveTable",value:function(e){localStorage.setItem("table",document.getElementById(e).innerHTML)}},{key:"applyFilter",value:function(e,t){for(var n=document.getElementById(e).value,i=document.getElementById(t).childNodes[0].childNodes,s=void 0,d=1;d<i.length;d++)for(var r=0;r<5;r++){if(s=i[d].childNodes[r].innerHTML,s.indexOf(n)!==-1){i[d].style.display=null;break}i[d].style.display="none"}}},{key:"deleteFilter",value:function(e,t){for(var n=document.getElementById(t).childNodes[0].childNodes,i=0;i<n.length;i++)"none"===n[i].style.display&&(n[i].style.display=null);document.getElementById(e).value=""}},{key:"sortToHigher",value:function(e,t){for(var n=document.getElementById(e).childNodes[0].childNodes,i=[],s=1;s<n.length;s++)i[s]={elem:n[s],value:n[s].childNodes[t].innerHTML};i.sort(function(e,t){return e.value-t.value});for(var d=0;d<i.length-1;d++)document.getElementById(e).childNodes[0].appendChild(i[d].elem)}},{key:"sortToLower",value:function(e,t){for(var n=document.getElementById(e).childNodes[0].childNodes,i=[],s=1;s<n.length;s++)i[s]={elem:n[s],value:n[s].childNodes[t].innerHTML};i.sort(function(e,t){return t.value-e.value});for(var d=0;d<i.length-1;d++)document.getElementById(e).childNodes[0].appendChild(i[d].elem)}},{key:"deleteRow",value:function(){event.target.parentElement.remove()}},{key:"editRow",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i=0;i<t.length;i++)document.getElementById(t[i]).value=event.target.parentElement.children[i].innerHTML;this.deleteRow()}}]),e}();!function(){var e=new FormFunctions,t=!1;document.getElementById("nav_item-studentsTable").addEventListener("click",function(){function n(n){t===!1?(e.sortToLower("studentsTable",n),t=!0):(e.sortToHigher("studentsTable",n),t=!1)}studentsTableCreateDOM(),turnOnValidation(),function(){document.getElementById("button-add").addEventListener("click",function(){""!==document.getElementById("input-name").value&&""!==document.getElementById("input-surname").value&&""!==document.getElementById("input-admission").value&&""!==document.getElementById("input-ending").value&&"visible"!==document.getElementById("message-name").style.visibility&&"visible"!==document.getElementById("message-surname").style.visibility&&"visible"!==document.getElementById("message-admission").style.visibility&&"visible"!==document.getElementById("message-ending").style.visibility&&(e.addData("studentsTable","input-name","input-surname","input-admission","input-ending","input-site"),e.clearForm("input-name","input-surname","input-admission","input-ending","input-site"))})}(),function(){document.getElementById("button-clear").addEventListener("click",function(){e.clearForm("input-name","input-surname","input-admission","input-ending","input-site","input-filter")})}(),function(){document.getElementById("button-save").addEventListener("click",function(){e.saveTable("studentsTable")})}(),function(){document.getElementById("button-applyFilter").addEventListener("click",function(){e.applyFilter("input-filter","studentsTable")})}(),function(){document.getElementById("button-delFilter").addEventListener("click",function(){e.deleteFilter("input-filter","studentsTable")})}(),function(){document.getElementById("studentsTable").addEventListener("click",function(){"head-admission"===event.target.id?n(2):"head-ending"===event.target.id&&n(3)})}(),function(){document.getElementById("studentsTable").addEventListener("click",function(){"result-edit"===event.target.className&&e.editRow("input-name","input-surname","input-admission","input-ending","input-site")})}(),function(){document.getElementById("studentsTable").addEventListener("click",function(){"result-delete"===event.target.className&&e.deleteRow()})}()})}();