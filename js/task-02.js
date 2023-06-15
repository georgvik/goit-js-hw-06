const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const list = document.querySelector('ul');
ingredients.forEach(function(ingredient) {
  const listEL = document.createElement('li');
  listEL.classList.add('item');
  listEL.textContent = ingredient;
list.append(listEL);
console.log(listEL);
});

