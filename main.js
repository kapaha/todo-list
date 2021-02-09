(()=>{"use strict";function t(t,e,n){document.addEventListener(t,(t=>{t.target.matches(e)&&n(t)}))}function e(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function n(t){e(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):("string"!=typeof t&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function r(t){e(1,arguments);var r=n(t);return r.setHours(0,0,0,0),r}function o(){return r(Date.now())}function a(t){e(1,arguments);var r=n(t),o=r.getFullYear();return r.setFullYear(o+1,0,0),r.setHours(23,59,59,999),r}function i(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function u(t,r){e(2,arguments);var o=n(t),a=i(r);return isNaN(a)?new Date(NaN):a?(o.setDate(o.getDate()+a),o):o}function c(t,r){e(2,arguments);var o=n(t),a=i(r);if(isNaN(a))return new Date(NaN);if(!a)return o;var u=o.getDate(),c=new Date(o.getTime());c.setMonth(o.getMonth()+a+1,0);var s=c.getDate();return u>=s?c:(o.setFullYear(c.getFullYear(),c.getMonth(),u),o)}class s{constructor(t,e,n){this.name=t,this.dueDate=e,this.isComplete=!1,this.id=Rt()}}class d{constructor(t,e){this.name=t,this.color=e,this.id=Rt(),this.todoList=[],this.showCompleteTodos=!1}}const l="todoList.projects",f="todoList.selectedProjectId";function m(){if(l,localStorage.getItem("todoList.projects"))return JSON.parse(localStorage.getItem(l));{const t=[],r=function(){const t=new d("Default","grey");return function(){const t=_t((d=(r=new Date).getFullYear(),l=r.getMonth(),f=r.getDate(),(m=new Date(0)).setFullYear(d,l,f-1),m.setHours(0,0,0,0),m));var r,d,l,f,m;const h=_t(o()),g=_t(function(){var t=new Date,e=t.getFullYear(),n=t.getMonth(),r=t.getDate(),o=new Date(0);return o.setFullYear(e,n,r+1),o.setHours(0,0,0,0),o}()),w=_t(a(o())),p=_t(function(t,r){if(e(2,arguments),!r||"object"!=typeof r)return new Date(NaN);var o="years"in r?i(r.years):0,a="months"in r?i(r.months):0,s="weeks"in r?i(r.weeks):0,d="days"in r?i(r.days):0,l="hours"in r?i(r.hours):0,f="minutes"in r?i(r.minutes):0,m="seconds"in r?i(r.seconds):0,h=n(t),g=a||o?c(h,a+12*o):h,w=d||s?u(g,d+7*s):g,p=1e3*(m+60*(f+60*l));return new Date(w.getTime()+p)}(a(o()),{days:1}));return[new s("Pay Bills",t),new s("Grocery Shopping",h),new s("Visit Best Friend",g),new s("Prep for New Years party",w),new s("Write down New Years resolutions",p)]}().forEach((e=>{t.todoList.push(e)})),t}();return t.push(r),g(t),p(r.id),t}}function h(t,e,n){let r=m();r.forEach((r=>{r.id===e&&r.todoList.forEach((e=>{e.id===t&&Vt(e,n)}))})),g(r)}function g(t){localStorage.setItem(l,JSON.stringify(t))}function w(){return localStorage.getItem(f)}function p(t){localStorage.setItem(f,t)}const y={project:document.querySelector('[data-template="project"'),projectView:document.querySelector('[data-template="project-view"]'),todo:document.querySelector('[data-template="todo"]'),todoModal:document.querySelector('[data-template="modal-todo"]')};function v(t){if(null!=t)return document.importNode(t.content,!0)}function b(t,e,n,r,o,a){const i=v(y.todoModal),u=i.querySelector(".modal"),c=i.querySelector(".modal__title"),s=i.querySelector("form"),d=s.querySelector('[data-label="todo-name"]'),l=s.querySelector('[data-input="todo-name"]'),f=s.querySelector('[data-label="todo-due-date"]'),m=s.querySelector('[data-input="todo-due-date"]'),h=s.querySelector('[type="submit"]');return u.id=t,l.id=r,m.id=o,s.dataset.form=n,d.setAttribute("for",r),f.setAttribute("for",o),c.textContent=e,h.textContent=a,i}const C="project-row-btn--highlight";function T(){null!=Y.sideMenu&&(window.matchMedia("(min-width: 768px)").matches?(Y.body.classList.toggle("desktop-open"),Y.sideMenu.classList.remove("mobile-open")):(Y.body.classList.contains("desktop-open")||Y.body.classList.add("desktop-open"),Y.sideMenu.classList.toggle("mobile-open")))}function S(){document.querySelectorAll(".modal--active").forEach((t=>{L(t)})),N()}function M(t){L(t),N()}function D(){const t=document.createDocumentFragment();m().forEach((e=>{const n=function(t){const e=v(y.project),n=e.querySelector(".project-name"),r=e.querySelector(".project-color"),o=e.querySelector(".todo-count");return e.querySelector(".project").dataset.projectId=t.id,n.textContent=t.name,o.textContent=Jt(t),r.style.color=t.color,t.id===w()&&q(e.querySelector('[data-btn="show-project-view"]')),e}(e);t.appendChild(n)})),W(Y.projectsContainer),Y.projectsContainer.appendChild(t)}function x(t){if(null==t)return;const r=function(t){const r=v(y.projectView),o=r.querySelector(".project-view"),a=r.querySelector(".project-name"),i=r.querySelector('[data-container="todo-container"]'),u=r.querySelector('[data-btn="toggle-complete-todos"]'),c=r.querySelector(".fa-eye");return o.dataset.projectId=t.id,a.textContent=t.name,t.todoList.forEach((t=>{const r=function(t){const r=v(y.todo),o=r.querySelector(".todo"),a=r.querySelector('[data-checkbox="todo"]'),i=r.querySelector('[data-label="todo-checkbox"]'),u=r.querySelector(".todo-name"),c=r.querySelector(".todo-due-date");return o.dataset.todoId=t.id,t.isComplete&&o.classList.add("todo--complete"),a.id=`todo-checkbox-${t.id}`,a.checked=!!t.isComplete,i.setAttribute("for",`todo-checkbox-${t.id}`),u.textContent=t.name,c.textContent=function(t){if(""===t)return t;const n=new Date(t);return F(n)?"Today":I(n)?"Tomorrow":function(t){return e(1,arguments),O(t,H(Date.now(),1))}(n)?"Yesterday":function(t){return e(1,arguments),z(t,Date.now())}(n)?Ft(n,"do MMM"):Ft(n,"do MMM yyyy")}(t.dueDate),c.style.color=function(t){const r=new Date(t);return F(r)?"#2ecc71":I(r)?"#f1c40f":function(t){return e(1,arguments),n(t).getTime()<Date.now()}(r)?"#c0392b":void 0}(t.dueDate),r}(t);i.appendChild(r)})),t.showCompleteTodos?(U(c),i.style.setProperty("--complete-todo-display","flex")):i.style.setProperty("--complete-todo-display","none"),E(u,t.showCompleteTodos),r}(t);k(),Y.projectViewContainer.appendChild(r)}function k(){W(Y.projectViewContainer)}function q(t){!function(){const t=document.querySelector(".project-row-btn--highlight");null!=t&&t.classList.remove(C)}(),t.classList.add(C)}function P(t){const e=document.querySelector(`[data-project-id="${t.id}"] [data-todo-count]`),n=Jt(t);e.textContent=n}function j(t){return{name:t.querySelector('[data-input="todo-name"]').value,dueDate:t.querySelector('[data-input="todo-due-date"]').value}}function U(t){t.classList.toggle("fa-eye"),t.classList.toggle("fa-eye-slash")}function E(t,e){const n=e?"Hide Complete Todos":"Show Complete Todos";t.setAttribute("title",n)}const Y={body:document.body,sideMenu:document.querySelector("[data-side-menu]"),overlay:document.getElementById("overlay"),projectsContainer:document.getElementById("projects-container"),projectNameInput:document.getElementById("input-project-name"),projectColorInput:document.getElementById("input-project-color"),projectViewContainer:document.querySelector('[data-container="project-view"]')};function L(t){null!=t&&t.classList.remove("modal--active")}function N(){null!=Y.overlay&&Y.overlay.classList.remove("active")}function W(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function O(t,n){e(2,arguments);var o=r(t),a=r(n);return o.getTime()===a.getTime()}function F(t){return e(1,arguments),O(t,Date.now())}function I(t){return e(1,arguments),O(t,u(Date.now(),1))}function H(t,n){e(2,arguments);var r=i(n);return u(t,-r)}function z(t,r){e(2,arguments);var o=n(t),a=n(r);return o.getFullYear()===a.getFullYear()}function B(t){e(1,arguments);var r=n(t);return!isNaN(r)}var A={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function X(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var Q,G={date:X({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:X({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:X({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},R={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function V(t){return function(e,n){var r,o=n||{};if("formatting"===(o.context?String(o.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,i=o.width?String(o.width):a;r=t.formattingValues[i]||t.formattingValues[a]}else{var u=t.defaultWidth,c=o.width?String(o.width):t.defaultWidth;r=t.values[c]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function J(t){return function(e,n){var r=String(e),o=n||{},a=o.width,i=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],u=r.match(i);if(!u)return null;var c,s=u[0],d=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(d)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(s))return n}(d):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(s))return n}(d),c=t.valueCallback?t.valueCallback(c):c,{value:c=o.valueCallback?o.valueCallback(c):c,rest:r.slice(s.length)}}}const _={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof A[t]?A[t]:1===e?A[t].one:A[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:G,formatRelative:function(t,e,n,r){return R[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:V({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:V({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:V({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:V({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:V({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(Q={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},o=n.match(Q.matchPattern);if(!o)return null;var a=o[0],i=n.match(Q.parsePattern);if(!i)return null;var u=Q.valueCallback?Q.valueCallback(i[0]):i[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(a.length)}}),era:J({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:J({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:J({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:J({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:J({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function $(t,r){e(2,arguments);var o=n(t).getTime(),a=i(r);return new Date(o+a)}function K(t,n){e(2,arguments);var r=i(n);return $(t,-r)}function Z(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const tt=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return Z("yy"===e?r%100:r,e.length)},et=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):Z(n+1,2)},nt=function(t,e){return Z(t.getUTCDate(),e.length)},rt=function(t,e){return Z(t.getUTCHours()%12||12,e.length)},ot=function(t,e){return Z(t.getUTCHours(),e.length)},at=function(t,e){return Z(t.getUTCMinutes(),e.length)},it=function(t,e){return Z(t.getUTCSeconds(),e.length)},ut=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return Z(Math.floor(r*Math.pow(10,n-3)),e.length)};var ct=864e5;function st(t){e(1,arguments);var r=1,o=n(t),a=o.getUTCDay(),i=(a<r?7:0)+a-r;return o.setUTCDate(o.getUTCDate()-i),o.setUTCHours(0,0,0,0),o}function dt(t){e(1,arguments);var r=n(t),o=r.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(o+1,0,4),a.setUTCHours(0,0,0,0);var i=st(a),u=new Date(0);u.setUTCFullYear(o,0,4),u.setUTCHours(0,0,0,0);var c=st(u);return r.getTime()>=i.getTime()?o+1:r.getTime()>=c.getTime()?o:o-1}function lt(t){e(1,arguments);var n=dt(t),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var o=st(r);return o}var ft=6048e5;function mt(t,r){e(1,arguments);var o=r||{},a=o.locale,u=a&&a.options&&a.options.weekStartsOn,c=null==u?0:i(u),s=null==o.weekStartsOn?c:i(o.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=n(t),l=d.getUTCDay(),f=(l<s?7:0)+l-s;return d.setUTCDate(d.getUTCDate()-f),d.setUTCHours(0,0,0,0),d}function ht(t,r){e(1,arguments);var o=n(t,r),a=o.getUTCFullYear(),u=r||{},c=u.locale,s=c&&c.options&&c.options.firstWeekContainsDate,d=null==s?1:i(s),l=null==u.firstWeekContainsDate?d:i(u.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=new Date(0);f.setUTCFullYear(a+1,0,l),f.setUTCHours(0,0,0,0);var m=mt(f,r),h=new Date(0);h.setUTCFullYear(a,0,l),h.setUTCHours(0,0,0,0);var g=mt(h,r);return o.getTime()>=m.getTime()?a+1:o.getTime()>=g.getTime()?a:a-1}function gt(t,n){e(1,arguments);var r=n||{},o=r.locale,a=o&&o.options&&o.options.firstWeekContainsDate,u=null==a?1:i(a),c=null==r.firstWeekContainsDate?u:i(r.firstWeekContainsDate),s=ht(t,n),d=new Date(0);d.setUTCFullYear(s,0,c),d.setUTCHours(0,0,0,0);var l=mt(d,n);return l}var wt=6048e5;function pt(t,e){var n=t>0?"-":"+",r=Math.abs(t),o=Math.floor(r/60),a=r%60;if(0===a)return n+String(o);var i=e||"";return n+String(o)+i+Z(a,2)}function yt(t,e){return t%60==0?(t>0?"-":"+")+Z(Math.abs(t)/60,2):vt(t,e)}function vt(t,e){var n=e||"",r=t>0?"-":"+",o=Math.abs(t);return r+Z(Math.floor(o/60),2)+n+Z(o%60,2)}const bt={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return tt(t,e)},Y:function(t,e,n,r){var o=ht(t,r),a=o>0?o:1-o;return"YY"===e?Z(a%100,2):"Yo"===e?n.ordinalNumber(a,{unit:"year"}):Z(a,e.length)},R:function(t,e){return Z(dt(t),e.length)},u:function(t,e){return Z(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Z(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Z(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return et(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return Z(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,r,o,a){var i=function(t,r){e(1,arguments);var o=n(t),a=mt(o,r).getTime()-gt(o,r).getTime();return Math.round(a/wt)+1}(t,a);return"wo"===r?o.ordinalNumber(i,{unit:"week"}):Z(i,r.length)},I:function(t,r,o){var a=function(t){e(1,arguments);var r=n(t),o=st(r).getTime()-lt(r).getTime();return Math.round(o/ft)+1}(t);return"Io"===r?o.ordinalNumber(a,{unit:"week"}):Z(a,r.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):nt(t,e)},D:function(t,r,o){var a=function(t){e(1,arguments);var r=n(t),o=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var a=r.getTime(),i=o-a;return Math.floor(i/ct)+1}(t);return"Do"===r?o.ordinalNumber(a,{unit:"dayOfYear"}):Z(a,r.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var o=t.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return Z(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});case"eeee":default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var o=t.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return Z(a,e.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});case"cccc":default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),o=0===r?7:r;switch(e){case"i":return String(o);case"ii":return Z(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,o=t.getUTCHours();switch(r=12===o?"noon":0===o?"midnight":o/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,o=t.getUTCHours();switch(r=o>=17?"evening":o>=12?"afternoon":o>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return rt(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):ot(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):Z(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):Z(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):at(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):it(t,e)},S:function(t,e){return ut(t,e)},X:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();if(0===o)return"Z";switch(e){case"X":return yt(o);case"XXXX":case"XX":return vt(o);case"XXXXX":case"XXX":default:return vt(o,":")}},x:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return yt(o);case"xxxx":case"xx":return vt(o);case"xxxxx":case"xxx":default:return vt(o,":")}},O:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+pt(o,":");case"OOOO":default:return"GMT"+vt(o,":")}},z:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+pt(o,":");case"zzzz":default:return"GMT"+vt(o,":")}},t:function(t,e,n,r){var o=r._originalDate||t;return Z(Math.floor(o.getTime()/1e3),e.length)},T:function(t,e,n,r){return Z((r._originalDate||t).getTime(),e.length)}};function Ct(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function Tt(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}const St={p:Tt,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),o=r[1],a=r[2];if(!a)return Ct(t,e);switch(o){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",Ct(o,e)).replace("{{time}}",Tt(a,e))}};var Mt=6e4;function Dt(t){return t.getTime()%Mt}function xt(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());e.setSeconds(0,0);var r=n>0?(Mt+Dt(e))%Mt:Dt(e);return n*Mt+r}var kt=["D","DD"],qt=["YY","YYYY"];function Pt(t){return-1!==kt.indexOf(t)}function jt(t){return-1!==qt.indexOf(t)}function Ut(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var Et,Yt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Lt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Nt=/^'([^]*?)'?$/,Wt=/''/g,Ot=/[a-zA-Z]/;function Ft(t,r,o){e(2,arguments);var a=String(r),u=o||{},c=u.locale||_,s=c.options&&c.options.firstWeekContainsDate,d=null==s?1:i(s),l=null==u.firstWeekContainsDate?d:i(u.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=c.options&&c.options.weekStartsOn,m=null==f?0:i(f),h=null==u.weekStartsOn?m:i(u.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!c.localize)throw new RangeError("locale must contain localize property");if(!c.formatLong)throw new RangeError("locale must contain formatLong property");var g=n(t);if(!B(g))throw new RangeError("Invalid time value");var w=xt(g),p=K(g,w),y={firstWeekContainsDate:l,weekStartsOn:h,locale:c,_originalDate:g},v=a.match(Lt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,St[e])(t,c.formatLong,y):t})).join("").match(Yt).map((function(e){if("''"===e)return"'";var n=e[0];if("'"===n)return It(e);var o=bt[n];if(o)return!u.useAdditionalWeekYearTokens&&jt(e)&&Ut(e,r,t),!u.useAdditionalDayOfYearTokens&&Pt(e)&&Ut(e,r,t),o(p,e,c.localize,y);if(n.match(Ot))throw new RangeError("Format string contains an unescaped latin alphabet character `"+n+"`");return e})).join("");return v}function It(t){return t.match(Nt)[1].replace(Wt,"'")}var Ht=new Uint8Array(16);function zt(){if(!Et&&!(Et="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Et(Ht)}const Bt=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,At=function(t){return"string"==typeof t&&Bt.test(t)};for(var Xt=[],Qt=0;Qt<256;++Qt)Xt.push((Qt+256).toString(16).substr(1));const Gt=function(t,e,n){var r=(t=t||{}).random||(t.rng||zt)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=r[o];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(Xt[t[e+0]]+Xt[t[e+1]]+Xt[t[e+2]]+Xt[t[e+3]]+"-"+Xt[t[e+4]]+Xt[t[e+5]]+"-"+Xt[t[e+6]]+Xt[t[e+7]]+"-"+Xt[t[e+8]]+Xt[t[e+9]]+"-"+Xt[t[e+10]]+Xt[t[e+11]]+Xt[t[e+12]]+Xt[t[e+13]]+Xt[t[e+14]]+Xt[t[e+15]]).toLowerCase();if(!At(n))throw TypeError("Stringified UUID is invalid");return n}(r)};function Rt(){return Gt()}function Vt(t,e){for(const n in e)t.hasOwnProperty(n)&&(t[n]=e[n])}function Jt(t){return t.todoList.filter((t=>!t.isComplete)).length||""}function _t(t){return Ft(t,"yyyy-MM-dd")}function $t(t){t.preventDefault();const e=t.target,n={name:Y.projectNameInput.value,color:Y.projectColorInput.options[Y.projectColorInput.selectedIndex].dataset.cssColor};if(!function(t){return oe(t.name)}(n))return;const r=function(t){const e={...t};return e.name=e.name.trim(),e}(n),o=new d(r.name,r.color);!function(t){const e=m();e.push(t),g(e)}(o),D(),te(o),e.reset(),M(e.closest(".modal"))}function Kt(t){return t.closest("[data-project-id]").dataset.projectId}function Zt(t){return m().filter((e=>e.id===t))[0]}function te(t){p(t.id),q(function(t){return document.querySelector(`li[data-project-id="${t.id}"]`)}(t)),x(t)}function ee(t){t.preventDefault();const e=t.target,n=j(e);if(!re(n))return;const r=ae(n),o=w(),a=new s(r.name,r.dueDate),i=e.closest(".modal");!function(t,e){!function(t,e){const n=m();n.forEach((n=>{n.id===e&&n.todoList.push(t)})),g(n)}(t,e);const n=Zt(e);x(n),P(n)}(a,o),e.reset(),M(i)}function ne(t){t.preventDefault();const e=t.target,n=j(e);if(!re(n))return;const r=ae(n),o=w(),a=ie(e),i=e.closest(".modal");h(a,o,{name:r.name,dueDate:r.dueDate});const u=Zt(o);e.reset(),x(u),M(i)}function re(t){return oe(t.name)}function oe(t){return null!=t&&""!==t.trim()}function ae(t){const e={...t};return e.name=e.name.trim(),e}function ie(t){return t.closest("[data-todo-id]").dataset.todoId}function ue(t){const e=t.target,n=e.closest(".todo"),r=Kt(e),o=ie(e);n.classList.toggle("todo--complete"),h(o,r,{isComplete:!!e.checked}),function(t){let e=m();e.forEach((e=>{e.id===t&&(e.todoList=e.todoList.sort(((t,e)=>t.isComplete-e.isComplete)))})),g(e)}(r);const a=Zt(r);x(a),P(a)}function ce(t){const e=t.target,n=e.querySelector(".fas"),r=Kt(e),o=!!n.classList.contains("fa-eye");!function(t,e){let n=m();n.forEach((n=>{n.id===t&&Vt(n,e)})),g(n)}(r,{showCompleteTodos:o}),function(){const t=Y.projectViewContainer.querySelector('[data-container="todo-container"]'),e=getComputedStyle(t).getPropertyValue("--complete-todo-display").trim();t.style.setProperty("--complete-todo-display","none"===e?"flex":"none")}(),U(n),E(e,o)}(function(){const t=[],e=b("modal-add-todo","Add Todo","add-todo","input-add-todo-name","input-add-todo-due-date","Add"),n=b("modal-edit-todo","Edit Todo","edit-todo","input-edit-todo-name","input-edit-todo-due-date","Edit");return t.push(e,n),t})().forEach((t=>{Y.body.append(t)})),D(),x(Zt(w())),t("click","[data-header-toggle]",T),t("click","[data-modal-target]",(t=>{const e=t.target,n=document.querySelector(e.dataset.modalTarget);var r,o;"edit-todo"===e.dataset.btn&&function(t,e){const n=e.querySelector("#input-edit-todo-name"),r=e.querySelector("#input-edit-todo-due-date");e.dataset.todoId=t.id,n.value=t.name,r.value=t.dueDate}((r=Kt(e),o=ie(e),Zt(r).todoList.filter((t=>t.id===o))[0]),n),function(t){!function(t){null!=t&&t.classList.add("modal--active")}(t),null!=Y.overlay&&Y.overlay.classList.add("active")}(n)})),t("click","#overlay",S),t("click",'[data-btn="close-modal"]',(t=>{M(t.target.closest(".modal"))})),t("submit",'[data-form="create-project"]',$t),t("submit",'[data-form="add-todo"]',ee),t("submit",'[data-form="edit-todo"]',ne),t("click",'[data-btn="show-project-view"]',(t=>{const e=Kt(t.target);e!==w()&&te(Zt(e))})),t("click",'[data-btn="delete-project"]',(t=>{const e=Kt(t.target);!function(t){let e=m();e=e.filter((e=>e.id!==t)),g(e)}(e),D(),e===w()&&(localStorage.removeItem(f),k())})),t("click",'[data-btn="delete-todo"]',(t=>{const e=Kt(t.target);!function(t,e){!function(t,e){const n=m();n.forEach((n=>{n.id===e&&(n.todoList=n.todoList.filter((e=>e.id!==t)))})),g(n)}(t,e);const n=Zt(e);x(n),P(n)}(ie(t.target),e)})),t("change",'[data-checkbox="todo"]',ue),t("click",'[data-btn="toggle-complete-todos"]',ce)})();