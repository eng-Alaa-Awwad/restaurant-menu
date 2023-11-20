const data = {
  appetizers: [
    {
      name: "Dynamite Shrimps",
      price: "7.00",
      disctiption: "Crispy battered shrimps with spicy dynamite sauce",
    },
    {
      name: "Crispy Chicken",
      price: "4.50",
      disctiption:
        "Golden fried chicken soaked with sweet chili and buffalo sauce",
    },
    {
      name: "Shrimp Tempura",
      price: "7.00",
      disctiption: "Crispy fried shrimps dipped in sweet chili sauce",
    },
    {
      name: "Nachos Slices",
      price: "5.50",
      disctiption:
        "Crispy tortilla chips topped with fried beans, Mexican salsa, cheese sauce ,melted cheddar, cheese , and jalapenos served with sour cream and guacamole",
    },
    {
      name: "Fried Calamari",
      price: "5.50",
      disctiption: "Batter fried marinated calamari with sweet chili sauce",
    },
    {
      name: "Cheese Sticks",
      price: "4.00",
      disctiption: "With marinara sauce",
    },
    {
      name: "Mac & Cheese Balls",
      price: "4.25",
      disctiption: "",
    },
    {
      name: "Greek Toast",
      price: "4.25",
      disctiption:
        "Freshly baked slices of bread topped with feta cheese, cherry tomato & Rocca leaves",
    },
    {
      name: "Rough Potato",
      price: "4.50",
      disctiption:
        "Baked baby potato with chicken & cheese served with marinara sauce",
    },
    {
      name: "Smoked Meat Balls",
      price: "5.50",
      disctiption: "",
    },
    {
      name: "Chicken With Konafa Dough",
      price: "5.50",
      disctiption: "",
    },
    {
      name: "Halloumi With Nuts",
      price: "5.00",
      disctiption: "",
    },
    {
      name: "Mexican Fajita Rolls",
      price: "6.00",
      disctiption: "",
    },
    {
      name: "Chicken Dynamite",
      price: "5.50",
      disctiption: "",
    },
  ],
  SALADS: [
    {
      name: "OIA Fusion",
      price: "4.90",
      disctiption:
        "Mixed greens, sundried tomato, tossed with balsamic dressing, topped with grilled halloumi, nuts and fig jam",
    },
    {
      name: "Simply Caesar",
      price: "4.00",
      disctiption:
        "Crunchy lettuce tossed with Cesar dressing topped with parmesan cheese & homemade croutons",
    },
    {
      name: "Simply Caesar",
      price: "4.00",
      disctiption:
        "Crunchy lettuce tossed with Cesar dressing topped with parmesan cheese & homemade croutons",
    },
    {
      name: "Rocca Salad",
      price: "4.00",
      disctiption:
        "Fresh Rocca, mushrooms, strawberry tossed with balsamic dressing, topped with parmesan cheese & nuts",
    },
    {
      name: "Crab Salad",
      price: "6.75",
      disctiption:
        "Japanese crab sticks, carrot, cucumber, mango, sesame seeds tossed with Japanese dressing",
    },
    {
      name: "Greek Peak",
      price: "4.00",
      disctiption:
        "Lettuce, tomatoes, cucumber, black olives, bell pepper tossed with vinaigrette &olive oil, topped with feta cheese",
    },
    {
      name: "Sea Food Salad",
      price: "7.50",
      disctiption:
        "Crab, calamari, shrimp, Muscles with Carrot and Rocca topped with herbs sauce",
    },
    {
      name: "Tabbouleh",
      price: "4.00",
      disctiption: "With pomegranate",
    },
    {
      name: "Asian Salad",
      price: "6.00",
      disctiption: "",
    },
  ],
};

const markUp = `<div class="category">
<h2 class="category--title">Pizza</h2>
<div class="category--items">
  <div class="category--item">
    <div class="item--header">
      <h3 class="item--name">alfrado</h3>
      <p class="item--divider">
        ..........................................................................................................................................................................................
      </p>
      <p class="item--price">7.00 <span>JD</span></p>
    </div>
    <div class="item--description">
      Crispy tortilla chips topped with fried beans, Mexican salsa,
      cheese sauce ,melted cheddar, cheese , and jalapenos served with
      sour cream and guacamole
    </div>
  </div>
</div>
</div>`;
let head;
let itemCotant;

for (let category in data) {
  head = "";
  itemCotant = "";
  head = `<div class="category">
  <h2 class="category--title">${category}</h2>
  <div class="category--items">`;
  for (let item of data[category]) {
    itemCotant += `<div class="category--item">
    <div class="item--header">
      <h3 class="item--name">${item.name}</h3>
      <p class="item--divider">
        ..........................................................................................................................................................................................
      </p>
      <p class="item--price">${item.price} <span>JD</span></p>
    </div>
    <div class="item--description">
    ${item.disctiption}
    </div>
  </div>`;
  }
  let foot = `</div>
  </div>`;
  let markup = head + itemCotant + foot;
  let element = document.querySelector("main");
  element.insertAdjacentHTML("beforeend", markup);
}
