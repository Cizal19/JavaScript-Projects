const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Pancakes made from flour milled in the smokies, served with our house- made, maple syrup,and real whipped butter`,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `Beef burger patties seasoned with just a pinch of salt and pepper. It's topped with tangy pickles, chopped onions, ketchup, mustard and two slices of melty American cheese`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `Vanilla ice cream,caramel syrup, milk powder, fresh milk and toasted marshmallow on top.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Fried eggs, sausages, back bacon, accompanied by tea or coffee and hot, buttered toast.`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `Toasted bottom bun, tomato ketchup, onion, grilled burger, fried egg & toasted top bun.`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `A delicious beverage made using Oreo cookies, whole milk, and vanilla ice cream, topped with whipped cream (optional) and some drizzled chocolate sauce on top.`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `For the breakfast meat lover.2 eggs, bacon, sausage, ham, toast, and breakfast potatoes `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `delicious and juicy cheeseburger with melted American cheese, fresh tomato, crisp lettuce, onions and lean ground beef.`,
  },
  {
    id: 9,
    title: "kitkat shake",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `The kitkat shake has a luscious, chocolaty mouth-feel punctuated by crunchy titbits of Kit Kat.`,
  },
];

const sectionCenter = document.querySelector(".section-center");

const filterBtns = document.querySelectorAll(".filter-btn")


// load items
window.addEventListener('DOMContentLoaded', function(){
  displayMenuItems(menu);
});

// filter items
filterBtns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function(menuItem){
      if(menuItem.category === category){
        return menuItem;
      };
    });
    if(category === "all"){
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    };
  });
});

function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function (item) {

    return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}</p>
        </div>
        </article >`
  });

  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}