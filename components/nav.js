"use strict";

var nav_component = (function() {
  var nav_data = {
    urls: null
  };

  function bindData(data) {
    nav_data.urls = data;
    return `<button data-url="/">home</button>
                <button data-url="/${nav_data.urls[0]}">${nav_data.urls[0]}</button>
                <button data-url="/${nav_data.urls[1]}">${nav_data.urls[1]}</button>
              `;
  }
  return {
    bindData
  };
})();

export default nav_component;
