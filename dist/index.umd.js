!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@formatjs/intl-utils")):"function"==typeof define&&define.amd?define(["exports","@formatjs/intl-utils"],t):t((e||self).customCardHelpers={},e.intlUtils)}(this,function(e,t){var r,n,i=function(e,t){return a(t).format(e)},a=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric"})};e.NumberFormat=void 0,(r=e.NumberFormat||(e.NumberFormat={})).language="language",r.system="system",r.comma_decimal="comma_decimal",r.decimal_comma="decimal_comma",r.space_comma="space_comma",r.none="none",e.TimeFormat=void 0,(n=e.TimeFormat||(e.TimeFormat={})).language="language",n.system="system",n.am_pm="12",n.twenty_four="24";var o=function(t){if(t.time_format===e.TimeFormat.language||t.time_format===e.TimeFormat.system){var r=t.time_format===e.TimeFormat.language?t.language:void 0,n=(new Date).toLocaleString(r);return n.includes("AM")||n.includes("PM")}return t.time_format===e.TimeFormat.am_pm},u=function(e,t){return c(t).format(e)},c=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:o(e)?"numeric":"2-digit",minute:"2-digit",hour12:o(e)})},m=function(e,t){return s(t).format(e)},s=function(e){return new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hour12:o(e)})};function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e){return e.substr(0,e.indexOf("."))}function f(e){var t,r=(null==e||null==(t=e.locale)?void 0:t.language)||"en";return e.translationMetadata.translations[r]&&e.translationMetadata.translations[r].isRTL||!1}function g(e){return d(e.entity_id)}var p=function(e){return!!e.attributes.unit_of_measurement||!!e.attributes.state_class},h=function(t){switch(t.number_format){case e.NumberFormat.comma_decimal:return["en-US","en"];case e.NumberFormat.decimal_comma:return["de","es","it"];case e.NumberFormat.space_comma:return["fr","sv","cs"];case e.NumberFormat.system:return;default:return t.language}},b=function(e,t){return void 0===t&&(t=2),Math.round(e*Math.pow(10,t))/Math.pow(10,t)},_=function(t,r,n){var i=r?h(r):void 0;if(Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},(null==r?void 0:r.number_format)!==e.NumberFormat.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(i,v(t,n)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,v(t,n)).format(Number(t))}return"string"==typeof t?t:b(t,null==n?void 0:n.maximumFractionDigits).toString()+("currency"===(null==n?void 0:n.style)?" "+n.currency:"")},v=function(e,t){var r=l({maximumFractionDigits:2},t);if("string"!=typeof e)return r;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){var n=e.indexOf(".")>-1?e.split(".")[1].length:0;r.minimumFractionDigits=n,r.maximumFractionDigits=n}return r},y="mdi:bookmark",w=["closed","locked","off"],k=new Set(["fan","input_boolean","light","switch","group","automation"]),T=function(e,t,r,n){n=n||{},r=null==r?{}:r;var i=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return i.detail=r,e.dispatchEvent(i),i},D=new Set(["call-service","divider","section","weblink","cast","select"]),F={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},N={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function S(e,t){if(e in N)return N[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return t&&"off"===t?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===t?"mdi:window-closed":"mdi:window-open";case"lock":return t&&"unlocked"===t?"mdi:lock-open":"mdi:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"mdi:cast-connected":"mdi:cast";case"zwave":switch(t){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),y}}var I=function(e){T(window,"haptic",e)},x=function(e,t,r){void 0===r&&(r=!1),r?history.replaceState(null,"",t):history.pushState(null,"",t),T(window,"location-changed",{replace:r})},O=function(e,t,r){void 0===r&&(r=!0);var n,i=d(t),a="group"===i?"homeassistant":i;switch(i){case"lock":n=r?"unlock":"lock";break;case"cover":n=r?"open_cover":"close_cover";break;default:n=r?"turn_on":"turn_off"}return e.callService(a,n,{entity_id:t})},E=function(e,t){var r=w.includes(e.states[t].state);return O(e,t,r)},A=function(e,t,r,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some(function(e){return e.user===t.user.id})||(I("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(r.entity||r.camera_image)&&T(e,"hass-more-info",{entityId:r.entity?r.entity:r.camera_image});break;case"navigate":n.navigation_path&&x(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":r.entity&&(E(t,r.entity),I("success"));break;case"call-service":if(!n.service)return void I("failure");var i=n.service.split(".",2);t.callService(i[0],i[1],n.data,n.target),I("success");break;case"fire-dom-event":T(e,"ll-custom",n)}},M={humidity:"mdi:water-percent",illuminance:"mdi:brightness-5",temperature:"mdi:thermometer",pressure:"mdi:gauge",power:"mdi:flash",signal_strength:"mdi:wifi"},C={binary_sensor:function(e,t){var r="off"===e;switch(null==t?void 0:t.attributes.device_class){case"battery":return r?"mdi:battery":"mdi:battery-outline";case"battery_charging":return r?"mdi:battery":"mdi:battery-charging";case"cold":return r?"mdi:thermometer":"mdi:snowflake";case"connectivity":return r?"mdi:server-network-off":"mdi:server-network";case"door":return r?"mdi:door-closed":"mdi:door-open";case"garage_door":return r?"mdi:garage":"mdi:garage-open";case"power":return r?"mdi:power-plug-off":"mdi:power-plug";case"gas":case"problem":case"safety":case"tamper":return r?"mdi:check-circle":"mdi:alert-circle";case"smoke":return r?"mdi:check-circle":"mdi:smoke";case"heat":return r?"mdi:thermometer":"mdi:fire";case"light":return r?"mdi:brightness-5":"mdi:brightness-7";case"lock":return r?"mdi:lock":"mdi:lock-open";case"moisture":return r?"mdi:water-off":"mdi:water";case"motion":return r?"mdi:walk":"mdi:run";case"occupancy":return r?"mdi:home-outline":"mdi:home";case"opening":return r?"mdi:square":"mdi:square-outline";case"plug":return r?"mdi:power-plug-off":"mdi:power-plug";case"presence":return r?"mdi:home-outline":"mdi:home";case"running":return r?"mdi:stop":"mdi:play";case"sound":return r?"mdi:music-note-off":"mdi:music-note";case"update":return r?"mdi:package":"mdi:package-up";case"vibration":return r?"mdi:crop-portrait":"mdi:vibrate";case"window":return r?"mdi:window-closed":"mdi:window-open";default:return r?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}},cover:function(e){var t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"mdi:garage-open":"mdi:garage";case"door":return t?"mdi:door-open":"mdi:door-closed";case"shutter":return t?"mdi:window-shutter-open":"mdi:window-shutter";case"blind":return t?"mdi:blinds-open":"mdi:blinds";case"window":return t?"mdi:window-open":"mdi:window-closed";default:return S("cover",e.state)}},sensor:function(e){var t=e.attributes.device_class;if(t&&t in M)return M[t];if("battery"===t){var r=Number(e.state);if(isNaN(r))return"mdi:battery-unknown";var n=10*Math.round(r/10);return n>=100?"mdi:battery":n<=0?"mdi:battery-alert":"hass:battery-"+n}var i=e.attributes.unit_of_measurement;return"°C"===i||"°F"===i?"mdi:thermometer":S("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?S("input_datetime"):"mdi:calendar":"mdi:clock"}};e.DEFAULT_DOMAIN_ICON=y,e.DEFAULT_PANEL="lovelace",e.DEFAULT_VIEW_ENTITY_ID="group.default_view",e.DOMAINS_HIDE_MORE_INFO=["input_number","input_select","input_text","scene","weblink"],e.DOMAINS_MORE_INFO_NO_HISTORY=["camera","configurator","history_graph","scene"],e.DOMAINS_TOGGLE=k,e.DOMAINS_WITH_CARD=["climate","cover","configurator","input_select","input_number","input_text","lock","media_player","scene","script","timer","vacuum","water_heater","weblink"],e.DOMAINS_WITH_MORE_INFO=["alarm_control_panel","automation","camera","climate","configurator","cover","fan","group","history_graph","input_datetime","light","lock","media_player","script","sun","updater","vacuum","water_heater","weather"],e.STATES_OFF=w,e.UNIT_C="°C",e.UNIT_F="°F",e.applyThemesOnElement=function(e,t,r,n){void 0===n&&(n=!1),e._themes||(e._themes={});var i=t.default_theme;("default"===r||r&&t.themes[r])&&(i=r);var a=l({},e._themes);if("default"!==i){var o=t.themes[i];Object.keys(o).forEach(function(t){var r="--"+t;e._themes[r]="",a[r]=o[t]})}if(e.updateStyles?e.updateStyles(a):window.ShadyCSS&&window.ShadyCSS.styleSubtree(e,a),n){var u=document.querySelector("meta[name=theme-color]");if(u){u.hasAttribute("default-content")||u.setAttribute("default-content",u.getAttribute("content"));var c=a["--primary-color"]||u.getAttribute("default-content");u.setAttribute("content",c)}}},e.computeCardSize=function(e){return"function"==typeof e.getCardSize?e.getCardSize():4},e.computeDomain=d,e.computeEntity=function(e){return e.substr(e.indexOf(".")+1)},e.computeRTL=f,e.computeRTLDirection=function(e){return f(e)?"rtl":"ltr"},e.computeStateDisplay=function(e,t,r,n){var a=void 0!==n?n:t.state;if("unknown"===a||"unavailable"===a)return e("state.default."+a);if(p(t)){if("monetary"===t.attributes.device_class)try{return _(a,r,{style:"currency",currency:t.attributes.unit_of_measurement})}catch(e){}return _(a,r)+(t.attributes.unit_of_measurement?" "+t.attributes.unit_of_measurement:"")}var o=g(t);if("input_datetime"===o){var c;if(void 0===n)return t.attributes.has_date&&t.attributes.has_time?(c=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day,t.attributes.hour,t.attributes.minute),u(c,r)):t.attributes.has_date?(c=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day),i(c,r)):t.attributes.has_time?((c=new Date).setHours(t.attributes.hour,t.attributes.minute),m(c,r)):t.state;try{var s=n.split(" ");if(2===s.length)return u(new Date(s.join("T")),r);if(1===s.length){if(n.includes("-"))return i(new Date(n+"T00:00"),r);if(n.includes(":")){var l=new Date;return m(new Date(l.toISOString().split("T")[0]+"T"+n),r)}}return n}catch(e){return n}}return"humidifier"===o&&"on"===a&&t.attributes.humidity?t.attributes.humidity+" %":"counter"===o||"number"===o||"input_number"===o?_(a,r):t.attributes.device_class&&e("component."+o+".state."+t.attributes.device_class+"."+a)||e("component."+o+".state._."+a)||a},e.computeStateDomain=g,e.createThing=function(e,t){void 0===t&&(t=!1);var r=function(e,t){return n("hui-error-card",{type:"error",error:e,config:t})},n=function(e,t){var n=window.document.createElement(e);try{if(!n.setConfig)return;n.setConfig(t)}catch(n){return console.error(e,n),r(n.message,t)}return n};if(!e||"object"!=typeof e||!t&&!e.type)return r("No type defined",e);var i=e.type;if(i&&i.startsWith("custom:"))i=i.substr("custom:".length);else if(t)if(D.has(i))i="hui-"+i+"-row";else{if(!e.entity)return r("Invalid config given.",e);var a=e.entity.split(".",1)[0];i="hui-"+(F[a]||"text")+"-entity-row"}else i="hui-"+i+"-card";if(customElements.get(i))return n(i,e);var o=r("Custom element doesn't exist: "+e.type+".",e);o.style.display="None";var u=setTimeout(function(){o.style.display=""},2e3);return customElements.whenDefined(e.type).then(function(){clearTimeout(u),T(o,"ll-rebuild",{},o)}),o},e.debounce=function(e,t,r){var n;return void 0===r&&(r=!1),function(){var i=[].slice.call(arguments),a=this,o=function(){n=null,r||e.apply(a,i)},u=r&&!n;clearTimeout(n),n=setTimeout(o,t),u&&e.apply(a,i)}},e.domainIcon=S,e.evaluateFilter=function(e,t){var r=t.value||t,n=t.attribute?e.attributes[t.attribute]:e.state;switch(t.operator||"=="){case"==":return n===r;case"<=":return n<=r;case"<":return n<r;case">=":return n>=r;case">":return n>r;case"!=":return n!==r;case"regex":return n.match(r);default:return!1}},e.fireEvent=T,e.fixedIcons=N,e.formatDate=i,e.formatDateMonth=function(e,t){return function(e){return new Intl.DateTimeFormat(e.language,{month:"long"})}(t).format(e)},e.formatDateMonthYear=function(e,t){return function(e){return new Intl.DateTimeFormat(e.language,{month:"long",year:"numeric"})}(t).format(e)},e.formatDateNumeric=function(e,t){return function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"numeric",day:"numeric"})}(t).format(e)},e.formatDateShort=function(e,t){return function(e){return new Intl.DateTimeFormat(e.language,{day:"numeric",month:"short"})}(t).format(e)},e.formatDateTime=u,e.formatDateTimeNumeric=function(e,t){return function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",hour12:o(e)})}(t).format(e)},e.formatDateTimeWithSeconds=function(e,t){return function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:o(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:o(e)})}(t).format(e)},e.formatDateWeekday=function(e,t){return function(e){return new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric"})}(t).format(e)},e.formatDateYear=function(e,t){return function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric"})}(t).format(e)},e.formatNumber=_,e.formatTime=m,e.formatTimeWeekday=function(e,t){return function(e){return new Intl.DateTimeFormat(e.language,{hour:o(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:o(e)})}(t).format(e)},e.formatTimeWithSeconds=function(e,t){return function(e){return new Intl.DateTimeFormat(e.language,{hour:o(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:o(e)})}(t).format(e)},e.forwardHaptic=I,e.getLovelace=function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null},e.handleAction=function(e,t,r,n){var i;"double_tap"===n&&r.double_tap_action?i=r.double_tap_action:"hold"===n&&r.hold_action?i=r.hold_action:"tap"===n&&r.tap_action&&(i=r.tap_action),A(e,t,r,i)},e.handleActionConfig=A,e.handleClick=function(e,t,r,n,i){var a;if(i&&r.double_tap_action?a=r.double_tap_action:n&&r.hold_action?a=r.hold_action:!n&&r.tap_action&&(a=r.tap_action),a||(a={action:"more-info"}),!a.confirmation||a.confirmation.exemptions&&a.confirmation.exemptions.some(function(e){return e.user===t.user.id})||confirm(a.confirmation.text||"Are you sure you want to "+a.action+"?"))switch(a.action){case"more-info":(a.entity||r.entity||r.camera_image)&&(T(e,"hass-more-info",{entityId:a.entity?a.entity:r.entity?r.entity:r.camera_image}),a.haptic&&I(a.haptic));break;case"navigate":a.navigation_path&&(x(0,a.navigation_path),a.haptic&&I(a.haptic));break;case"url":a.url_path&&window.open(a.url_path),a.haptic&&I(a.haptic);break;case"toggle":r.entity&&(E(t,r.entity),a.haptic&&I(a.haptic));break;case"call-service":if(!a.service)return;var o=a.service.split(".",2),u=o[0],c=o[1],m=l({},a.data);"entity"===m.entity_id&&(m.entity_id=r.entity),t.callService(u,c,m,a.target),a.haptic&&I(a.haptic);break;case"fire-dom-event":T(e,"ll-custom",a),a.haptic&&I(a.haptic)}},e.hasAction=function(e){return void 0!==e&&"none"!==e.action},e.hasConfigOrEntityChanged=function(e,t,r){if(t.has("config")||r)return!0;if(e.config.entity){var n=t.get("hass");return!n||n.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1},e.hasDoubleClick=function(e){return void 0!==e&&"none"!==e.action},e.isNumericState=p,e.navigate=x,e.numberFormatToLocale=h,e.relativeTime=function(e,r,n,i){void 0===i&&(i=!0);var a=t.selectUnit(e,n);return i?function(e){return new Intl.RelativeTimeFormat(e.language,{numeric:"auto"})}(r).format(a.value,a.unit):Intl.NumberFormat(r.language,{style:"unit",unit:a.unit,unitDisplay:"long"}).format(Math.abs(a.value))},e.round=b,e.stateIcon=function(e){if(!e)return y;if(e.attributes.icon)return e.attributes.icon;var t=d(e.entity_id);return t in C?C[t](e):S(t,e.state)},e.timerTimeRemaining=function(e){var t,r=3600*(t=e.attributes.remaining.split(":").map(Number))[0]+60*t[1]+t[2];if("active"===e.state){var n=(new Date).getTime(),i=new Date(e.last_changed).getTime();r=Math.max(r-(n-i)/1e3,0)}return r},e.toggleEntity=E,e.turnOnOffEntities=function(e,t,r){void 0===r&&(r=!0);var n={};t.forEach(function(t){if(w.includes(e.states[t].state)===r){var i=d(t),a=["cover","lock"].includes(i)?i:"homeassistant";a in n||(n[a]=[]),n[a].push(t)}}),Object.keys(n).forEach(function(t){var i;switch(t){case"lock":i=r?"unlock":"lock";break;case"cover":i=r?"open_cover":"close_cover";break;default:i=r?"turn_on":"turn_off"}e.callService(t,i,{entity_id:n[t]})})},e.turnOnOffEntity=O});
//# sourceMappingURL=index.umd.js.map
