(()=>{"use strict";function t(t,e,n){document.addEventListener(t,(t=>{t.target.matches(e)&&n(t)}))}function e(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function n(t){e(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):("string"!=typeof t&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function r(t){e(1,arguments);var r=n(t);return r.setHours(0,0,0,0),r}function a(){return r(Date.now())}function o(t){e(1,arguments);var r=n(t),a=r.getFullYear();return r.setFullYear(a+1,0,0),r.setHours(23,59,59,999),r}function i(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function u(t,r){e(2,arguments);var a=n(t),o=i(r);return isNaN(o)?new Date(NaN):o?(a.setDate(a.getDate()+o),a):a}function c(t,r){e(2,arguments);var a=n(t),o=i(r);if(isNaN(o))return new Date(NaN);if(!o)return a;var u=a.getDate(),c=new Date(a.getTime());c.setMonth(a.getMonth()+o+1,0);var s=c.getDate();return u>=s?c:(a.setFullYear(c.getFullYear(),c.getMonth(),u),a)}class s{constructor(t,e,n){this.name=t,this.dueDate=e,this.isComplete=!1,this.id=n||Ot()}}class d{constructor(t,e){this.name=t,this.color=e,this.id=Ot(),this.todoList=[]}}const l="todoList.projects",f="todoList.selectedProjectId";function m(){if(l,localStorage.getItem("todoList.projects"))return JSON.parse(localStorage.getItem(l));{const t=[],r=function(){const t=new d("Default","grey");return function(){const t=It((d=(r=new Date).getFullYear(),l=r.getMonth(),f=r.getDate(),(m=new Date(0)).setFullYear(d,l,f-1),m.setHours(0,0,0,0),m));var r,d,l,f,m;const h=It(a()),g=It(function(){var t=new Date,e=t.getFullYear(),n=t.getMonth(),r=t.getDate(),a=new Date(0);return a.setFullYear(e,n,r+1),a.setHours(0,0,0,0),a}()),w=It(o(a())),y=It(function(t,r){if(e(2,arguments),!r||"object"!=typeof r)return new Date(NaN);var a="years"in r?i(r.years):0,o="months"in r?i(r.months):0,s="weeks"in r?i(r.weeks):0,d="days"in r?i(r.days):0,l="hours"in r?i(r.hours):0,f="minutes"in r?i(r.minutes):0,m="seconds"in r?i(r.seconds):0,h=n(t),g=o||a?c(h,o+12*a):h,w=d||s?u(g,d+7*s):g,y=1e3*(m+60*(f+60*l));return new Date(w.getTime()+y)}(o(a()),{days:1}));return[new s("Pay Bills",t,"defaultTodo1"),new s("Grocery Shopping",h,"defaultTodo2"),new s("Visit Best Friend",g,"defaultTodo3"),new s("Prep for New Years party",w,"defaultTodo4"),new s("Write down New Years resolutions",y,"defaultTodo5")]}().forEach((e=>{t.todoList.push(e)})),t}();return t.push(r),g(t),y(r.id),t}}function h(t,e,n){let r=m();r.forEach((r=>{r.id===e&&r.todoList.forEach((e=>{e.id===t&&function(t,e){for(const n in e)t.hasOwnProperty(n)&&(t[n]=e[n])}(e,n)}))})),g(r)}function g(t){localStorage.setItem(l,JSON.stringify(t))}function w(){return localStorage.getItem(f)}function y(t){localStorage.setItem(f,t)}const p={project:document.querySelector('[data-template="project"'),projectView:document.querySelector('[data-template="project-view"]'),todo:document.querySelector('[data-template="todo"]'),todoModal:document.querySelector('[data-template="modal-todo"]')};function v(t){if(null!=t)return document.importNode(t.content,!0)}function b(t,e,n,r,a,o){const i=v(p.todoModal),u=i.querySelector(".modal"),c=i.querySelector(".modal__title"),s=i.querySelector("form"),d=s.querySelector('[data-label="todo-name"]'),l=s.querySelector('[data-input="todo-name"]'),f=s.querySelector('[data-label="todo-due-date"]'),m=s.querySelector('[data-input="todo-due-date"]'),h=s.querySelector('[type="submit"]');return u.id=t,l.id=r,m.id=a,s.dataset.form=n,d.setAttribute("for",r),f.setAttribute("for",a),c.textContent=e,h.textContent=o,i}const T="project-row-btn--highlight";function C(){null!=U.sideMenu&&(window.matchMedia("(min-width: 768px)").matches?(U.body.classList.toggle("desktop-open"),U.sideMenu.classList.remove("mobile-open")):(U.body.classList.contains("desktop-open")||U.body.classList.add("desktop-open"),U.sideMenu.classList.toggle("mobile-open")))}function M(){document.querySelectorAll(".modal--active").forEach((t=>{E(t)})),Y()}function D(t){E(t),Y()}function S(){const t=document.createDocumentFragment();m().forEach((e=>{const n=function(t){const e=v(p.project),n=e.querySelector(".project-name"),r=e.querySelector(".project-color"),a=e.querySelector(".todo-count");return e.querySelector(".project").dataset.projectId=t.id,n.textContent=t.name,a.textContent=Ft(t),r.style.color=t.color,t.id===w()&&q(e.querySelector('[data-btn="show-project-view"]')),e}(e);t.appendChild(n)})),N(U.projectsContainer),U.projectsContainer.appendChild(t)}function x(t){if(null==t)return;const r=function(t){const r=v(p.projectView),a=r.querySelector(".project-view"),o=r.querySelector(".project-name"),i=r.querySelector('[data-container="todo-container"]');return a.dataset.projectId=t.id,o.textContent=t.name,t.todoList.forEach((t=>{const r=function(t){const r=v(p.todo),a=r.querySelector(".todo"),o=r.querySelector('[data-checkbox="todo"]'),i=r.querySelector('[data-label="todo-checkbox"]'),u=r.querySelector(".todo-name"),c=r.querySelector(".todo-due-date");return a.dataset.todoId=t.id,o.id=`todo-checkbox-${t.id}`,o.checked=!!t.isComplete,i.setAttribute("for",`todo-checkbox-${t.id}`),u.textContent=t.name,c.textContent=function(t){if(""===t)return t;const n=new Date(t);return L(n)?"Today":O(n)?"Tomorrow":function(t){return e(1,arguments),W(t,F(Date.now(),1))}(n)?"Yesterday":function(t){return e(1,arguments),I(t,Date.now())}(n)?Wt(n,"do MMM"):Wt(n,"do MMM yyyy")}(t.dueDate),c.style.color=function(t){const r=new Date(t);return L(r)?"#2ecc71":O(r)?"#f1c40f":function(t){return e(1,arguments),n(t).getTime()<Date.now()}(r)?"#c0392b":void 0}(t.dueDate),r}(t);i.appendChild(r)})),r}(t);k(),U.projectViewContainer.appendChild(r)}function k(){N(U.projectViewContainer)}function q(t){!function(){const t=document.querySelector(".project-row-btn--highlight");null!=t&&t.classList.remove(T)}(),t.classList.add(T)}function P(t){const e=document.querySelector(`[data-project-id="${t.id}"] [data-todo-count]`),n=Ft(t);e.textContent=n}function j(t){return{name:t.querySelector('[data-input="todo-name"]').value,dueDate:t.querySelector('[data-input="todo-due-date"]').value}}const U={body:document.body,sideMenu:document.querySelector("[data-side-menu]"),overlay:document.getElementById("overlay"),projectsContainer:document.getElementById("projects-container"),projectNameInput:document.getElementById("input-project-name"),projectColorInput:document.getElementById("input-project-color"),projectViewContainer:document.querySelector('[data-container="project-view"]')};function E(t){null!=t&&t.classList.remove("modal--active")}function Y(){null!=U.overlay&&U.overlay.classList.remove("active")}function N(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function W(t,n){e(2,arguments);var a=r(t),o=r(n);return a.getTime()===o.getTime()}function L(t){return e(1,arguments),W(t,Date.now())}function O(t){return e(1,arguments),W(t,u(Date.now(),1))}function F(t,n){e(2,arguments);var r=i(n);return u(t,-r)}function I(t,r){e(2,arguments);var a=n(t),o=n(r);return a.getFullYear()===o.getFullYear()}function H(t){e(1,arguments);var r=n(t);return!isNaN(r)}var z={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function B(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var X,A={date:B({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:B({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:B({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},Q={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function G(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=a.width?String(a.width):o;r=t.formattingValues[i]||t.formattingValues[o]}else{var u=t.defaultWidth,c=a.width?String(a.width):t.defaultWidth;r=t.values[c]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function R(t){return function(e,n){var r=String(e),a=n||{},o=a.width,i=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],u=r.match(i);if(!u)return null;var c,s=u[0],d=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(s))return n}(d):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(s))return n}(d),c=t.valueCallback?t.valueCallback(c):c,{value:c=a.valueCallback?a.valueCallback(c):c,rest:r.slice(s.length)}}}const J={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof z[t]?z[t]:1===e?z[t].one:z[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:A,formatRelative:function(t,e,n,r){return Q[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:G({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:G({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:G({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:G({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:G({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(X={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(X.matchPattern);if(!a)return null;var o=a[0],i=n.match(X.parsePattern);if(!i)return null;var u=X.valueCallback?X.valueCallback(i[0]):i[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(o.length)}}),era:R({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:R({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:R({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:R({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:R({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function V(t,r){e(2,arguments);var a=n(t).getTime(),o=i(r);return new Date(a+o)}function _(t,n){e(2,arguments);var r=i(n);return V(t,-r)}function $(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const K=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return $("yy"===e?r%100:r,e.length)},Z=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):$(n+1,2)},tt=function(t,e){return $(t.getUTCDate(),e.length)},et=function(t,e){return $(t.getUTCHours()%12||12,e.length)},nt=function(t,e){return $(t.getUTCHours(),e.length)},rt=function(t,e){return $(t.getUTCMinutes(),e.length)},at=function(t,e){return $(t.getUTCSeconds(),e.length)},ot=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return $(Math.floor(r*Math.pow(10,n-3)),e.length)};var it=864e5;function ut(t){e(1,arguments);var r=1,a=n(t),o=a.getUTCDay(),i=(o<r?7:0)+o-r;return a.setUTCDate(a.getUTCDate()-i),a.setUTCHours(0,0,0,0),a}function ct(t){e(1,arguments);var r=n(t),a=r.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(a+1,0,4),o.setUTCHours(0,0,0,0);var i=ut(o),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var c=ut(u);return r.getTime()>=i.getTime()?a+1:r.getTime()>=c.getTime()?a:a-1}function st(t){e(1,arguments);var n=ct(t),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=ut(r);return a}var dt=6048e5;function lt(t,r){e(1,arguments);var a=r||{},o=a.locale,u=o&&o.options&&o.options.weekStartsOn,c=null==u?0:i(u),s=null==a.weekStartsOn?c:i(a.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=n(t),l=d.getUTCDay(),f=(l<s?7:0)+l-s;return d.setUTCDate(d.getUTCDate()-f),d.setUTCHours(0,0,0,0),d}function ft(t,r){e(1,arguments);var a=n(t,r),o=a.getUTCFullYear(),u=r||{},c=u.locale,s=c&&c.options&&c.options.firstWeekContainsDate,d=null==s?1:i(s),l=null==u.firstWeekContainsDate?d:i(u.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=new Date(0);f.setUTCFullYear(o+1,0,l),f.setUTCHours(0,0,0,0);var m=lt(f,r),h=new Date(0);h.setUTCFullYear(o,0,l),h.setUTCHours(0,0,0,0);var g=lt(h,r);return a.getTime()>=m.getTime()?o+1:a.getTime()>=g.getTime()?o:o-1}function mt(t,n){e(1,arguments);var r=n||{},a=r.locale,o=a&&a.options&&a.options.firstWeekContainsDate,u=null==o?1:i(o),c=null==r.firstWeekContainsDate?u:i(r.firstWeekContainsDate),s=ft(t,n),d=new Date(0);d.setUTCFullYear(s,0,c),d.setUTCHours(0,0,0,0);var l=lt(d,n);return l}var ht=6048e5;function gt(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+$(o,2)}function wt(t,e){return t%60==0?(t>0?"-":"+")+$(Math.abs(t)/60,2):yt(t,e)}function yt(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+$(Math.floor(a/60),2)+n+$(a%60,2)}const pt={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return K(t,e)},Y:function(t,e,n,r){var a=ft(t,r),o=a>0?a:1-a;return"YY"===e?$(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):$(o,e.length)},R:function(t,e){return $(ct(t),e.length)},u:function(t,e){return $(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return $(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return $(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return Z(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return $(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,r,a,o){var i=function(t,r){e(1,arguments);var a=n(t),o=lt(a,r).getTime()-mt(a,r).getTime();return Math.round(o/ht)+1}(t,o);return"wo"===r?a.ordinalNumber(i,{unit:"week"}):$(i,r.length)},I:function(t,r,a){var o=function(t){e(1,arguments);var r=n(t),a=ut(r).getTime()-st(r).getTime();return Math.round(a/dt)+1}(t);return"Io"===r?a.ordinalNumber(o,{unit:"week"}):$(o,r.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):tt(t,e)},D:function(t,r,a){var o=function(t){e(1,arguments);var r=n(t),a=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var o=r.getTime(),i=a-o;return Math.floor(i/it)+1}(t);return"Do"===r?a.ordinalNumber(o,{unit:"dayOfYear"}):$(o,r.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return $(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return $(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return $(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return et(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):nt(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):$(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):$(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):rt(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):at(t,e)},S:function(t,e){return ot(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return wt(a);case"XXXX":case"XX":return yt(a);case"XXXXX":case"XXX":default:return yt(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return wt(a);case"xxxx":case"xx":return yt(a);case"xxxxx":case"xxx":default:return yt(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+gt(a,":");case"OOOO":default:return"GMT"+yt(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+gt(a,":");case"zzzz":default:return"GMT"+yt(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return $(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return $((r._originalDate||t).getTime(),e.length)}};function vt(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function bt(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}const Tt={p:bt,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],o=r[2];if(!o)return vt(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",vt(a,e)).replace("{{time}}",bt(o,e))}};var Ct=6e4;function Mt(t){return t.getTime()%Ct}function Dt(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());e.setSeconds(0,0);var r=n>0?(Ct+Mt(e))%Ct:Mt(e);return n*Ct+r}var St=["D","DD"],xt=["YY","YYYY"];function kt(t){return-1!==St.indexOf(t)}function qt(t){return-1!==xt.indexOf(t)}function Pt(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var jt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ut=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Et=/^'([^]*?)'?$/,Yt=/''/g,Nt=/[a-zA-Z]/;function Wt(t,r,a){e(2,arguments);var o=String(r),u=a||{},c=u.locale||J,s=c.options&&c.options.firstWeekContainsDate,d=null==s?1:i(s),l=null==u.firstWeekContainsDate?d:i(u.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=c.options&&c.options.weekStartsOn,m=null==f?0:i(f),h=null==u.weekStartsOn?m:i(u.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!c.localize)throw new RangeError("locale must contain localize property");if(!c.formatLong)throw new RangeError("locale must contain formatLong property");var g=n(t);if(!H(g))throw new RangeError("Invalid time value");var w=Dt(g),y=_(g,w),p={firstWeekContainsDate:l,weekStartsOn:h,locale:c,_originalDate:g},v=o.match(Ut).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,Tt[e])(t,c.formatLong,p):t})).join("").match(jt).map((function(e){if("''"===e)return"'";var n=e[0];if("'"===n)return Lt(e);var a=pt[n];if(a)return!u.useAdditionalWeekYearTokens&&qt(e)&&Pt(e,r,t),!u.useAdditionalDayOfYearTokens&&kt(e)&&Pt(e,r,t),a(y,e,c.localize,p);if(n.match(Nt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+n+"`");return e})).join("");return v}function Lt(t){return t.match(Et)[1].replace(Yt,"'")}function Ot(){return Date.now().toString()}function Ft(t){return t.todoList.filter((t=>!t.isComplete)).length||""}function It(t){return Wt(t,"yyyy-MM-dd")}function Ht(t){t.preventDefault();const e=t.target,n={name:U.projectNameInput.value,color:U.projectColorInput.options[U.projectColorInput.selectedIndex].dataset.cssColor};if(!function(t){return Rt(t.name)}(n))return;const r=function(t){const e={...t};return e.name=e.name.trim(),e}(n),a=new d(r.name,r.color);!function(t){const e=m();e.push(t),g(e)}(a),S(),Xt(a),e.reset(),D(e.closest(".modal"))}function zt(t){return t.closest("[data-project-id]").dataset.projectId}function Bt(t){return m().filter((e=>e.id===t))[0]}function Xt(t){y(t.id),q(function(t){return document.querySelector(`li[data-project-id="${t.id}"]`)}(t)),x(t)}function At(t){t.preventDefault();const e=t.target,n=j(e);if(!Gt(n))return;const r=Jt(n),a=w(),o=new s(r.name,r.dueDate),i=e.closest(".modal");!function(t,e){!function(t,e){const n=m();n.forEach((n=>{n.id===e&&n.todoList.push(t)})),g(n)}(t,e);const n=Bt(e);x(n),P(n)}(o,a),e.reset(),D(i)}function Qt(t){t.preventDefault();const e=t.target,n=j(e);if(!Gt(n))return;const r=Jt(n),a=w(),o=Vt(e),i=e.closest(".modal");h(o,a,{name:r.name,dueDate:r.dueDate});const u=Bt(a);e.reset(),x(u),D(i)}function Gt(t){return Rt(t.name)}function Rt(t){return null!=t&&""!==t.trim()}function Jt(t){const e={...t};return e.name=e.name.trim(),e}function Vt(t){return t.closest("[data-todo-id]").dataset.todoId}function _t(t){const e=t.target,n=zt(e),r=Vt(e);e.checked?h(r,n,{isComplete:!0}):h(r,n,{isComplete:!1}),P(Bt(n))}(function(){const t=[],e=b("modal-add-todo","Add Todo","add-todo","input-add-todo-name","input-add-todo-due-date","Add"),n=b("modal-edit-todo","Edit Todo","edit-todo","input-edit-todo-name","input-edit-todo-due-date","Edit");return t.push(e,n),t})().forEach((t=>{U.body.append(t)})),S(),x(Bt(w())),t("click","[data-header-toggle]",C),t("click","[data-modal-target]",(t=>{const e=t.target,n=document.querySelector(e.dataset.modalTarget);var r,a;"edit-todo"===e.dataset.btn&&function(t,e){const n=e.querySelector("#input-edit-todo-name"),r=e.querySelector("#input-edit-todo-due-date");e.dataset.todoId=t.id,n.value=t.name,r.value=t.dueDate}((r=zt(e),a=Vt(e),Bt(r).todoList.filter((t=>t.id===a))[0]),n),function(t){!function(t){null!=t&&t.classList.add("modal--active")}(t),null!=U.overlay&&U.overlay.classList.add("active")}(n)})),t("click","#overlay",M),t("click",'[data-btn="close-modal"]',(t=>{D(t.target.closest(".modal"))})),t("submit",'[data-form="create-project"]',Ht),t("submit",'[data-form="add-todo"]',At),t("submit",'[data-form="edit-todo"]',Qt),t("click",'[data-btn="show-project-view"]',(t=>{const e=zt(t.target);e!==w()&&Xt(Bt(e))})),t("click",'[data-btn="delete-project"]',(t=>{const e=zt(t.target);!function(t){let e=m();e=e.filter((e=>e.id!==t)),g(e)}(e),S(),e===w()&&(localStorage.removeItem(f),k())})),t("click",'[data-btn="delete-todo"]',(t=>{const e=zt(t.target);!function(t,e){!function(t,e){const n=m();n.forEach((n=>{n.id===e&&(n.todoList=n.todoList.filter((e=>e.id!==t)))})),g(n)}(t,e);const n=Bt(e);x(n),P(n)}(Vt(t.target),e)})),t("change",'[data-checkbox="todo"]',_t)})();