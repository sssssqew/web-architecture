"use strict";

/*home data
{
  title,
  order
}
*/

import home_page from "../pages/home.js";
import item_component from "../components/item.js";
import nav_component from "../components/nav.js";

var home_control = (function() {
  var home_data;
  var home_template;
  var item_template;
  var nav_template;

  function init() {
    home_data = null;
    home_template = "";
    item_template = "";
    nav_template = "";
  }

  // fetch data from server, REST API, localStorage, URL parameters, URL querystring
  function getData() {
    // home_data = fetch();
    home_data = { title: "home page", list: ["apple", "banana", "orange"] };
  }
  function bindData() {
    home_template = home_page.bindData(home_data);
    home_data.list.forEach(function(fruit) {
      item_template += item_component.bindData(fruit);
    });
    nav_template = nav_component.bindData(["about", "contact"]);
  }

  // render to root element and to parent element
  function render() {
    var root = document.getElementById("root");
    root.innerHTML = home_template;

    var list = document.getElementById("list");
    list.innerHTML = item_template;

    var nav = document.getElementById("nav");
    nav.innerHTML = nav_template;
  }

  // dictate all of handlers for page
  function attachHandler(routes) {
    console.log("homepage handler attached !");
    nav.addEventListener("click", function(e) {
      routes[e.target.dataset.url]();
      window.history.pushState({}, "", window.location.pathname);
    });
  }

  // watch out orders of methods
  function control(routes) {
    init();
    getData();
    bindData();
    render();
    attachHandler(routes);
  }
  return {
    control
  };
})();

export default home_control;
