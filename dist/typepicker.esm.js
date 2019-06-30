/*!
 * TypePicker v5.9.5
 * 2019/6/30
 * A Typescript Datepicker
 * (c) 2017-2019,Fi2zzz <wenjingbiao@outlook.com>
 * https://github.com/Fi2zz/datepicker
 * MIT License
 */
!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports.TypePicker=e():t.TypePicker=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=2)}([function(t,e,n){"use strict";e.__esModule=!0;var r=function(t){return void 0===t||null===t};e.isBool=function(t){return"boolean"===typeof t};e.padding=function(t){return""+(t>9?t:"0"+t)},e.isNotEmpty=function(t){return!function(t){return r(t)||""==t}(t)},e.isDef=function(t){return!r(t)},e.isArray=function(t){return t instanceof Array},e.isDate=function(t){return t instanceof Date},e.$=function(t,e){var n=function(t,e){var n=Array.prototype.slice.call(t.querySelectorAll(e));return n.length<=0?null:1===n.length?n[0]:n};return"string"!==typeof t?n(t,e):0===t.indexOf("#")?(t=t.substr(1),document.getElementById(t)):0==t.indexOf(".")?n(document,t):null},e.dedupList=function(t,e){var n={},r=[];if(t.length<=0)return[];for(var a=0,i=t;a<i.length;a++){var u=i[a];e?n[e]=u:n[u]=u}for(var s in n)u=n[s],r.push(u);return r},e.yes=function(t){return!0===t},e.not=function(t){return!e.yes(t)},e.ifYes=function(t,e,n){t?e():"function"===typeof n&&n()},e.condition=function(t,e){return function(n){return function(r){e=e||!0;var a=("function"===typeof t?t(n):t)===e;if("function"===typeof r&&a)return r(n)}}},e.equal=function(t,e){return function(n){var r=t===e;if(r){if("function"!==typeof n)return r;n(t)}}},e.notEqual=function(t,e){return function(n){var r=t===e;if(r){if("function"!==typeof n)return r;n(t)}}},e.join=function(t,e){return e||(e=""),t.join(e)},e.createList=function(t,e){void 0===e&&(e=void 0);var n=[];if(!t||0===t)return n;for(var r=0;r<t;r++)n.push("function"===typeof e?e(r):e);return n},e.mapList=function(t,n,r){if(!e.isArray(t))return[];var a=t.map(function(t,e){return n(t,e)});return r?a.filter(r):a},e.filterList=function(t,e){return t.filter(e)},e.reduceList=function(t,n,r){return e.isArray?t.reduce(n,r):[]},e.sliceList=function(t,e,n){return t.slice(e,n)},e.toInt=function(t){return parseInt(t,10)},e.or=function(t,e){return function(n,r){t||e?n():r&&r()}},e.and=function(t,e){return function(n,r){t&&e?n():r&&r()}}},function(t,e,n){"use strict";e.__esModule=!0,e.DOMHelpers={select:function(t,e){if("string"!==typeof t&&!e)return t;var n=function(t,e){var n=Array.prototype.slice.call(t.querySelectorAll(e));return n.length<=0?null:1===n.length?n[0]:n};return"string"!==typeof t?n(t,e):0===t.indexOf("#")?(t=t.substr(1),document.getElementById(t)):0==t.indexOf(".")?n(document,t):null},attr:function(t,e){return t.getAttribute(e)},class:{cell:function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=["calendar-cell"];return 0===t?r.push("is-weekday"):6===t&&r.push("is-weekend"),e&&r.push.apply(r,e),r.join(" ").trim()},container:function(t){var e=["calendar"];return 1===t?e.push("calendar-single-view"):2===t?e.push("calendar-double-views"):e.push("calendar-flat-view"),e.join("  ").trim()}}}},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)};e.__esModule=!0,n(3);var a=n(1),i=n(4),u=n(5),s=n(0),o=null,l=new i.Disabled,c={auto:"auto",1:1,2:2};function f(t,e){return D().i18n.title.toLowerCase().replace(/y{1,}/g,s.padding(t)).replace(/m{1,}/g,D().i18n.months[e])}var d=function(t,e){var n=y(t),r=y(e);return n&&r?i.createDates(n,i.diffDates(r,n,!0),-1).map(g):[]},p=function(t,e){var n=i.diffDates(t,e);return s.createList(n,function(e){return g(new Date(t.getFullYear(),t.getMonth(),e+t.getDate()))})};function h(t,e){var n=D();t&&n.selected.push(t),n.selected.map(function(t){return"disabled"in t===!1&&(t.disabled=l.find(t.value)),t.selected=!0,t}).forEach(function(t){return function(t,e,n){var r=D(),a=r.lastSelectedItemCanBeInvalid,i=r.selection;if(!e.disabled||2===i){var u=t.length();if(2===i){var s=t.last(),o=0,c=!1;if(s){var f=p(y(e.value),y(s.value));o=f.length,c=l.some(function(t){return f.indexOf(t)>=0})}if(e.disabled){if(1!==u)return;if(s.disabled||o<0||c||!a)return}else 1===u&&c&&t.resetWithValue(e)}t.enqueue(e)(function(){var e=t.map(function(t){return t.value});n(e)})}}(o,t,e)}),n.selected=[]}var v={date:new Date,selection:1,views:1,startDate:null,endDate:null,reachEnd:!1,reachStart:!1,dateFormat:"YYYY-MM-DD",limit:1,i18n:i.defaultI18n(),lastSelectedItemCanBeInvalid:!1,selected:[],panelSize:1};function D(){return v}function g(t){return i.format(t,D().dateFormat)}function y(t){return i.parse(t,D().dateFormat)}var m=function(t,e,n){return l.oneOf(e,n)||l.outofRange(t)};function b(t){var e=t.range,n=t.value,r=t.expected,a=t.lower,i=e.indexOf(n);return a&&r!==a?i>r&&i<a:i===r}var M=function(){function t(t){this.element=null;var e=a.DOMHelpers.select(t.el);if(e&&t){var n={};s.condition(s.isDef)(t.format)(function(t){return n.dateFormat=t}),s.condition(s.isDef)(t.views)(function(t){var e=c[t];n.views=e||c[1]}),s.condition(function(t){return!isNaN(t)})(t.selection)(function(t){n.selection=t}),s.condition(s.isDate)(t.startDate)(function(t){n.startDate=t,n.reachStart=!0,n.date=t}),s.condition(s.isDate)(t.endDate)(function(t){return n.endDate=t}),s.condition(function(t){return!isNaN(t)||!1!==t})(t.limit)(function(t){n.limit=t}),s.equal(t.views,"auto")(function(){n.startDate||(n.startDate=new Date);var t=n.startDate;n.endDate||(n.endDate=new Date(t.getFullYear(),t.getMonth()+6,t.getDate())),n.date=n.startDate}),s.and(s.isDate(n.startDate),s.isDate(n.endDate))(function(){var t=n.startDate,e=new Date(t.getFullYear(),t.getMonth(),1),r=new Date(t.getFullYear(),t.getMonth(),t.getDate()-1);l.update("dates",d(e,r)),l.update("startDate",n.startDate),l.update("endDate",n.endDate)}),s.condition(s.isBool)(t.lastSelectedItemCanBeInvalid)(function(t){n.lastSelectedItemCanBeInvalid=t,!0===t&&(n.selection=2)}),this.element=e,this.element.className=a.DOMHelpers.class.container(n.views),o=new i.Queue({size:n.selection,limit:n.limit,useRange:2===n.selection,useFormatDate:g,useParseDate:y}),n.panelSize="auto"===n.views?i.diffMonths(n.endDate,n.startDate):n.views,this.update(n)}}return t.prototype.update=function(t){var e=this;if(!(t&&Object.keys(t).length<=0)){!function(t){v=t?r({},v,t):v}(t);var n=D(),s=n.date,c=n.startDate,d=n.endDate,p=n.reachEnd,y=n.reachStart,M=n.panelSize;this.date=s,this.startDate=c,this.endDate=d,this.element.innerHTML=function(){var t=D(),e=new i.MonthPanelData;return e.mapMonths(isNaN(t.views)?t.startDate:t.date,t.panelSize),e.mapDates({useFormatDate:g,usePanelTitle:f,useRange:function(t){var e=t.date,n=t.value,r=t.day,a=o.getRange(),i=b({range:a,value:n,expected:0,lower:a.length-1}),u=b({range:a,value:n,expected:a.length-1,lower:a.length-1}),s=b({range:a,value:n,expected:0,lower:0});return[o.has(n),m(e,n,r),o.useRange&&i,o.useRange&&s,o.useRange&&u]}}),e.mapDisabled(function(t){return l.update("all",t)}),u.template({data:e.data,days:t.i18n.days,reachStart:t.reachStart,reachEnd:t.reachEnd,switchable:!isNaN(t.views)})}();var w=function(t){return a.DOMHelpers.select(e.element,t)},Y=w(".calendar-cell"),O=w(".calendar-action.prev"),N=w(".calendar-action.next");i.publish("render",Y);var S=function(t){return h(t,function(t){i.publish("select",t),e.update(null)})};if(S(null),O&&N){var E=function(t,n){return function(){!t&&e.update(i.changeMonth(s,c,d)(n))}};O.addEventListener("click",E(y,-1*M)),N.addEventListener("click",E(p,M))}for(var F=function(t){var e=Y[t];e.addEventListener("click",function(){S({value:a.DOMHelpers.attr(e,"data-date"),disabled:"true"===a.DOMHelpers.attr(e,"data-disabled"),selected:!0})})},x=0;x<Y.length;x++)F(x)}},t.prototype.setDates=function(t){var e=D(),n=e.selection,r=e.limit,a=e.startDate,u=e.endDate;if(s.isArray(t)&&!(t.length<=0)&&!((t=s.sliceList(t,0,n+1)).length<=0||t.some(function(t){return!s.isDate(y(t))}))&&!((t=s.mapList(t,y,s.isDef)).length<=0)&&!((t=s.reduceList(t,function(t,e,a,u){if(2==n&&s.isDef(r)){var o=0;if(t&&e&&(o=i.diffDates(e,t)),o>r||o<0)return[]}return s.mapList(u,g,s.isDef)})).length<=0)){var o={selected:s.mapList(t,function(t){return{value:t,selected:!0}})},l=y(t[0]);l&&(a&&(o.reachStart=l<a),u&&(o.reachEnd=l>u),o.reachEnd||o.reachStart||(o.date=l)),this.update(o)}},t.prototype.disable=function(t){var e=t.to,n=t.from,r=t.days,a=t.dates,i=D();s.isArray(a)||(a=[]),s.isArray(r)||(r=[]);var u={startDate:i.startDate,endDate:i.endDate};s.condition(s.isDate)(y(n))(function(t){u.endDate=t,l.update("endDate",t)}),s.condition(s.isDate)(y(e))(function(t){u.startDate=t,u.reachStart=!0,u.date=t,l.update("startDate",t)}),s.or(!s.isDate(u.startDate),!s.isDate(u.endDate))(function(){u.reachEnd=!1,u.reachStart=!1},function(){var t=i.startDate,e=i.endDate;t>e&&(u.startDate=e,u.endDate=t,u.date=e,u.reachStart=!0)}),r.length>0&&l.update("days",s.filterList(s.mapList(r,s.toInt,function(t){return t>=0&&t<=6}),s.isNotEmpty)),a.length>0&&l.update("dates",s.filterList(s.dedupList(s.mapList(l.dates.concat(a),y,s.isNotEmpty)),s.isNotEmpty)),this.update(u)},t.prototype.i18n=function(t){var e=this;i.i18nValidator(t,function(t){return e.update({i18n:t})})},t.prototype.onRender=function(t){i.subscribe("render",t)},t.prototype.onSelect=function(t){i.subscribe("select",t)},t}();e.default=M},function(t,e,n){},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0);function a(t){var e=t.isActive,n=t.isStart,r=t.isEnd,a=t.isDisabled,i=t.inRange;if(t.isEmpty)return"empty disabled";var u="";return e&&(u="active",n?u="active start-date":r&&(u="active end-date")),i?"in-range":(a&&!e&&(u="disabled"),u)}function i(t,e,n,a){var i;if(void 0===n&&(n="month"),!r.isDate(t)||!r.isDate(e))return 0;if("month"===n)i=Math.abs(12*t.getFullYear()+t.getMonth())-(12*e.getFullYear()+e.getMonth());else if("days"===n){var u=new Date(t.getFullYear(),t.getMonth(),t.getDate()),s=new Date(e.getFullYear(),e.getMonth(),e.getDate()),o=Math.ceil(u-s)/864e5;i=a?Math.abs(o):o}return i}e.classname=a,e.timeDiff=i,e.diffDates=function(t,e,n){return i(t,e,"days",n)},e.diffMonths=function(t,e,n){return i(t,e,"month",n)},e.format=function(t,e){if(!r.isDate(t))return null;e||(e="YYYY-MM-DD"),e=e.toUpperCase();var n={YYYY:t.getFullYear(),DD:r.padding(t.getDate()),MM:r.padding(t.getMonth()+1),D:t.getDate(),M:t.getMonth()+1};return e.replace(/(?:\b|%)([dDMyY]+)(?:\b|%)/g,function(t){return void 0===n[t]?t:n[t]})},e.parse=function(t,e){if(r.isDate(t))return t;if(!t||!function(t){var e=t.replace(u,"").trim(),n=t.split(/\W/).map(function(t,n){var r=t.length,a=n-1===-1?"":e[n-1]?e[n-1]:"",i="";if(0===n)i="(^[0-9]{"+r+"})";else if(1===n){var u=1===r?"":"0";i="("+u+"[1-9]|1[0-2])"}else if(2===n){var s=((2===r?0:"")+"[1-9]").trim();i=("(("+s+")|((1|2)[0-9])|(30|31))").trim()}return a+i}).join("");return new RegExp(n+"$")}(e).test(t))return null;var n=function(t){if(!t)return new Date;if(t instanceof Date)return t;var e=t.split(/\W/).map(r.toInt),n=new Date(e.join(" "));return n.getTime()?new Date(n.getFullYear(),n.getMonth(),n.getDate()):null}(t);if(n)return n;var a=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,i={D:[/\d{1,2}/,function(t,e){return t.day=parseInt(e)}],M:[/\d{1,2}/,function(t,e){return t.month=parseInt(e)-1}],DD:[/\d{2}/,function(t,e){return t.day=parseInt(e)}],MM:[/\d{2}/,function(t,e){return t.month=parseInt(e)-1}],YY:[/\d{2,4}/,function(t,e){return t.year=parseInt(e)}],YYYY:[/\d{4}/,function(t,e){return t.year=parseInt(e)}]};return(n=function(t,e){if(t.length>1e3)return null;var n=!0,r={year:0,month:0,day:0};if(e.replace(a,function(e){if(i[e]){var a=i[e],u=a[0],s=a[a.length-1],o=t.search(u);~o?t.replace(a[0],function(e){return s(r,e),t=t.substr(o+e.length),e}):n=!1}return i[e]?"":e.slice(1,e.length-1)}),!n)return null;var u=new Date(r.year,r.month,r.day);return new Date(u.getFullYear(),u.getMonth(),u.getDate())})(t,e)};var u=/[A-Za-z0-9]/g;function s(t,e,n){n=n||1;var a=function(t,e){return n>0?t+e:t-e},i=[];if(!r.isDate(t))return i;for(var u=0;u<=e;u++){var s=t.getFullYear(),o=t.getMonth(),l=t.getDate();l=a(l,u),i.push(new Date(s,o,l))}return i}e.createDates=s,e.defaultI18n=function(){return{title:"YYYY\u5e74MM\u6708",days:["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"],months:["01","02","03","04","05","06","07","08","09","10","11","12"]}},e.i18nValidator=function(t,e){r.isArray(t.days)&&r.isArray(t.months)&&"string"===typeof t.title&&e(t)},e.changeMonth=function(t,n,r){return function(a){var i=new Date(t.getFullYear(),t.getMonth()+a,t.getDate()),u=r?e.diffMonths(r,i):1,s=r?e.diffMonths(i,n):2,o=s<1&&u>=0,l=s>1&&u<=1;return n&&r||(l=!1,o=!1),{reachEnd:l,reachStart:o,date:i}}},e.createDateDataOfMonth=function(t,e,n){e=e||!1;var a=(n=n||{}).year,i=n.month,u=n.day,s=null;return r.isDate(t)&&(a=t.getFullYear(),i=t.getMonth(),u=t.getDay(),s=t.getDate()),{origin:t,month:i,year:a,day:u,date:s,disabled:e,selected:!1}};var o=function(){var t={};return{subscribe:function(e,n){t[e]||(t[e]=[]),t[e].push(n)},publish:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=[].shift.call(e),a=t[r];if(!a||0===a.length)return!1;for(var i=0,u=void 0;u=a[i++];)u.apply(this,e)}}}();e.publish=function(t,e){return o.publish(t,e)},e.subscribe=o.subscribe;var l=function(){function t(){this.days=[],this.dates=[],this.all=[]}return t.prototype.update=function(t,e){this[t]=e},t.prototype.findDay=function(t){return this.days.indexOf(t)>=0},t.prototype.findDate=function(t){return this.dates.indexOf(t)>=0},t.prototype.findBoth=function(t,e){return this.findDate(t)&&this.findDay(e)},t.prototype.oneOf=function(t,e){return this.findDate(t)||this.findDay(e)},t.prototype.find=function(t){return this.all.indexOf(t)>=0},t.prototype.outofRange=function(t){return r.isDate(t)&&r.isDate(this.startDate)&&r.isDate(this.endDate)&&(t>this.endDate||t<this.startDate)},t.prototype.some=function(t){return this.all.some(t)},t}();e.Disabled=l;var c=function(){function t(){this.data=[]}return t.prototype.mapMonths=function(t,n){this.data=r.createList(n,function(e){return new Date(t.getFullYear(),t.getMonth()+e,1)}).map(function(t){var n=new Date(Date.UTC(t.getFullYear(),t.getMonth()+1,0)).getUTCDate(),a=t.getDay(),i=r.createList(a,function(e){return{year:t.getFullYear(),month:t.getMonth(),day:e}}).map(function(t){return e.createDateDataOfMonth(null,!0,t)}),u=s(t,n-1).map(function(t){return e.createDateDataOfMonth(t)});return{month:t.getMonth(),year:t.getFullYear(),dates:i.concat(u)}})},t.prototype.mapDates=function(t){var e=t.useFormatDate,n=t.usePanelTitle,i=t.useRange;return this.data=this.data.map(function(t){return{dates:t.dates.map(function(t){var n=e(t.origin),u=t.date,s=i({date:t.origin,value:n,day:t.day}),o=s[0],l=s[1],c=s[2],f=s[3],d=s[4],p=l||t.disabled;return{value:n,disabled:p,date:u,className:a({isActive:o,isStart:f,isEnd:d,inRange:c,isDisabled:p,isEmpty:!r.isNotEmpty(n)})}}),heading:n(t.year,t.month)}}),this.data},t.prototype.mapDisabled=function(t){for(var e=[],n=0,r=this.data;n<r.length;n++)for(var a=0,i=r[n].dates;a<i.length;a++){var u=i[a];u.disabled&&u.date&&e.push(u.value)}t(e)},t}();e.MonthPanelData=c;var f=function(){function t(t){var e=this;this.size=1,this.limit=1,this.parse=null,this.useRange=!1,this.useFormatDate=null,this.useParseDate=null,this.enqueue=function(t){return function(n){e.front();var r=e.last();r&&(r.value==t.value&&e.dequeue(),e.useParseDate(r.value)>e.useParseDate(t.value)&&(e.list=[]));e.list.push(t),e.reset(n)}},this.list=[];var n=t.size,r=t.limit,a=t.useRange,i=t.useFormatDate,u=t.useParseDate;this.size=n,this.limit=r,this.useRange=a,this.useFormatDate=i,this.useParseDate=u}return t.prototype.dequeue=function(){this.list.shift()},t.prototype.reset=function(t){if(this.list.length>this.size)this.replace([this.last()]);else{var n=this.list,r=n[0],a=n[1];if(r&&a)e.diffDates(this.useParseDate(r.value),this.useParseDate(a.value),!0)>this.limit&&this.dequeue()}if("function"===typeof t)var i=setTimeout(function(){t(),clearTimeout(i)},0)},t.prototype.resetWithValue=function(t){this.empty(),this.list.push(t)},t.prototype.last=function(){return this.list[this.length()-1]},t.prototype.pop=function(){this.list.pop()},t.prototype.empty=function(){this.list=[]},t.prototype.front=function(){return this.list[0]},t.prototype.find=function(t){return this.list.filter(function(e){return e.value===t}).pop()},t.prototype.length=function(){return this.list.length},t.prototype.replace=function(t){this.list=t},t.prototype.include=function(t){return this.list.indexOf(t)>=0},t.prototype.has=function(t){return!!this.find(t)},t.prototype.map=function(t){return this.list.map(t)},t.prototype.getRange=function(){if(this.length()<=0)return[];if(!this.useRange)return this.map(function(t){return t.value});var t=this.front(),n=this.last();if(t.value===n.value)return[];var r=this.useParseDate(t.value),a=this.useParseDate(n.value);return s(r,e.diffDates(a,r)).map(this.useFormatDate.bind(this))},t}();e.Queue=f},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0),a=n(1);function i(t){var e=t.tag,n=t.props,a=void 0===n?{}:n,i=t.render;if(!e||!(void 0===i||i))return"";var u="",s=[];for(var o in a){var l=a[o];"className"===o&&(o="class"),"children"!==o?r.isDef(l)&&s.push(o+'="'+l+'"'):u=!1===u||void 0===u||null===u?"":Array.isArray(l)?l.filter(r.isDef).join(""):l}return"<"+e+" "+s.join("")+">"+u+"</"+e+">"}var u=function(t){return i({tag:"div",props:{className:"calendar-body",children:t.map(function(t){return function(t){var e=[];r.isNotEmpty(t.date)&&e.push(i({tag:"div",props:{className:"date",children:t.date}})),t.value&&e.push(i({tag:"div",props:{className:"placeholder"}}));var n={className:a.DOMHelpers.class.cell(t.day,t.className),children:e};return r.isNotEmpty(t.disabled)&&(n["data-disabled"]=t.disabled),r.isNotEmpty(t.value)&&(n["data-date"]=t.value),i({tag:"div",props:n})}(t)})}})},s=function(t){return function(e){return n=[(r=e.year,a=e.month,s=e.heading,i({tag:"div",props:{className:"calendar-head",children:[i({tag:"div",props:{className:"calendar-title","data-year":r,"data-month":a,children:s}})]}})),t,u(e.dates)],i({tag:"div",props:{className:"calendar-item",children:n}});var n,r,a,s}},o=function(t,e){return t.map(s(e)).filter(r.isNotEmpty)},l=function(t,e){return i({tag:"div",props:{className:a.DOMHelpers.class.cell(e),children:t}})},c=function(t){return i({tag:"div",props:{className:"calendar-day",children:t.map(l)}})};e.template=function(t){var e=t.data,n=t.days,a=t.reachStart,u=t.reachEnd,s=t.switchable,l=c(n),f=o(e,s?l:""),d=[];return s?d=function(t,e){var n=function(t,e){var n=["calendar-action",t];return e&&n.push("disabled"),i({tag:"div",props:{className:r.join(n," ")}})};return[n("prev",t),n("next",e)]}(a,u):f.unshift(l),r.join(d.concat(f))}}])});