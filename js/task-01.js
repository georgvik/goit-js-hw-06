const itemEl = document.querySelectorAll(".item");
console.log("Number of categories:",itemEl.length);
itemEl.forEach(function(el) {
console.log("Category:", el.firstElementChild.textContent);
console.log("Elements:", el.lastElementChild.children.length);
});