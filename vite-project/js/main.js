import { fooditem } from './array';
import '../styles/style.css'

const DOMSelectors = {
  startbutton: document.querySelector('.startbutton'),
  cardcontainer: document.querySelector('.cardcontainer'),
  sparklingwaterrecipe: document.querySelector('.sparklingwaterrecipe'),
  icecreamrecipe: document.querySelector('.icecreamrecipe'),
  tomatosouprecipe: document.querySelector('.tomatosouprecipe'),
  greeksaladrecipe: document.querySelector('.greeksaladrecipe'),
  shrimpcocktailrecipe: document.querySelector('.shrimpcocktailrecipe'),
  sushiplatterrecipe: document.querySelector('.sushiplatterrecipe'),
  salmonfilletrecipe: document.querySelector('.salmonfilletrecipe'),
  crepesrecipe: document.querySelector('.crepesrecipe'),
  butteredlobsterrecipe: document.querySelector('.butteredlobsterrecipe'),
  rackoflambrecipe: document.querySelector('.rackoflambrecipe'),
  mangocheesecakerecipe: document.querySelector('.mangocheesecakerecipe'),
  macaroonseventrecipe: document.querySelector('.macaroonrecipe'),
  pastarecipe: document.querySelector('.pastarecipe'),
  wagyurecipe: document.querySelector('.wagyurecipe'),
  checkbutton: document.querySelector('.checkbutton')
  //intentional blank; properties will be added on later 
}

function clearHTML(){
  DOMSelectors.cardcontainer.innerHTML='';
}

DOMSelectors.startbutton.addEventListener('click', () => makeacard(fooditem))
//the () sets a callback arguement which means that a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

function makeacard(arr){
  clearHTML()
  arr.forEach((fooditem) => {
    DOMSelectors.cardcontainer.insertAdjacentHTML(
      'beforeend',
      `<div class = "recipe">
      <h4>${fooditem.name}</h4>
      <h4>${fooditem.description}</h4>
      <h5>Difficulty Level:${fooditem.difficulty}</h5>
      ${fooditem.button}
      </div>`
    )
  })
  sparklingwatereventlistener()
  icecreameventlistener()
  tomatosoupeventlistener()
  greeksaladeventlistener()
  shrimpcocktaileventlistener()
  sushiplattereventlistener()
  salmonfilleteventlistener()
  crepeseventlistener()
  butteredlobstereventlistener()
  rackoflambeventlistener()
  macaroonseventlistener()
  mangocheesecakeeventlistener()
  pastaeventlistener()
  wagyueventlistener()
}

function sparklingwatereventlistener() {
  DOMSelectors.sparklingwaterrecipe = document.querySelector('.sparklingwaterrecipe')
  DOMSelectors.sparklingwaterrecipe.addEventListener('click',sparklingwateringredients)
}

function icecreameventlistener() {
  DOMSelectors.icecreamrecipe = document.querySelector('.icecreamrecipe')
  DOMSelectors.icecreamrecipe.addEventListener('click',icecreamingredients)
}

function tomatosoupeventlistener() {
  DOMSelectors.tomatosouprecipe = document.querySelector('.tomatosouprecipe')
  DOMSelectors.tomatosouprecipe.addEventListener('click', tomatosoupstep1)
}

function greeksaladeventlistener() {
  DOMSelectors.greeksaladrecipe = document.querySelector('.greeksaladrecipe')
  DOMSelectors.greeksaladrecipe.addEventListener('click',greeksaladstep1)
}

function shrimpcocktaileventlistener() {
  DOMSelectors.shrimpcocktailrecipe = document.querySelector('.shrimpcocktailrecipe')
  DOMSelectors.shrimpcocktailrecipe.addEventListener('click',shrimpcocktailstep1)
}

function sushiplattereventlistener() {
  DOMSelectors.sushiplatterrecipe = document.querySelector('.sushiplatterrecipe')
  DOMSelectors.sushiplatterrecipe.addEventListener('click',sushiplatterstep1)
}

function salmonfilleteventlistener() {
  DOMSelectors.salmonfilletrecipe = document.querySelector('.salmonfilletrecipe')
  DOMSelectors.salmonfilletrecipe.addEventListener('click',salmonfilletstep1)
}

function crepeseventlistener() {
  DOMSelectors.crepesrecipe = document.querySelector('.crepesrecipe')
  DOMSelectors.crepesrecipe.addEventListener('click',crepestep1)
}

function butteredlobstereventlistener() {
  DOMSelectors.butteredlobsterrecipe = document.querySelector('.butteredlobsterrecipe')
  DOMSelectors.butteredlobsterrecipe.addEventListener('click',butteredlobsterstep1)
}

function rackoflambeventlistener() {
  DOMSelectors.rackoflambrecipe = document.querySelector('.rackoflambrecipe')
  DOMSelectors.rackoflambrecipe.addEventListener('click',rackoflambstep1)
}

function macaroonseventlistener() {
  DOMSelectors.macaroonsrecipe = document.querySelector('.macaroonsrecipe')
  DOMSelectors.macaroonsrecipe.addEventListener('click',macaroonstep1)
}

function mangocheesecakeeventlistener() {
  DOMSelectors.mangocheesecakerecipe = document.querySelector('.mangocheesecakerecipe')
  DOMSelectors.mangocheesecakerecipe.addEventListener('click',mangocheesecakestep1)
}

function pastaeventlistener() {
  DOMSelectors.pastarecipe = document.querySelector('.pastarecipe')
  DOMSelectors.pastarecipe.addEventListener('click',pastastep1)
}

function wagyueventlistener() {
  DOMSelectors.wagyurecipe = document.querySelector('.wagyurecipe')
  DOMSelectors.wagyurecipe.addEventListener('click',wagyustep1)
}

function sparklingwateringredients() {
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <h1>Sparkling Water</h1>
    <h2>Ingredients:</h2>
    <h4>Sparkling Water</h4>
    <h4>Crushed Ice</h4>
    <button class= "sparklingwaterskipbutton">Skip</button>
    </div>`
  );
  DOMSelectors.sparklingwaterskipbutton = document.querySelector('.sparklingwaterskipbutton')
  DOMSelectors.sparklingwaterskipbutton.addEventListener('click', sparklingwaterquestions)
}

let sparklingwaterdrink = null 
let sparklingwaterice = null 

function rightsparklingwaterchoices() {
  return(
    sparklingwaterdrink === 'Sparkling Water' &&
    sparklingwaterice === 'Crushed Ice'
  )
}

function sparklingwaterquestions() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <h2>What drink do you get?</h2>
    <button class = "sparklingwaterdrink">Sparkling Water</button>
    <button class = "sparklingwaterdrink">Water</button>
    <button class = "sparklingwaterdrink">Tea</button>
    <h2>What kind of ice?</h2>
    <button class = "sparklingwaterice">Cubed Ice</button>
    <button class = "sparklingwaterice">Ice Pellets</button>
    <button class = "sparklingwaterice">Crushed Ice</button>
    <button class = "submitsparklingwater">Submit Dish</button>
    </div>`
    )

  DOMSelectors.submitsparklingwater = document.querySelector('.submitsparklingwater')
  DOMSelectors.submitsparklingwater.addEventListener('click', () => {
    if (rightsparklingwaterchoices()) {
      clearHTML()
      DOMSelectors.cardcontainer.insertAdjacentElement(
        'beforeend', 
        `<div class = "card">
        <h1>Correct!</h1>
        <button class = "doneicecream">Pick your next order</button>
      </div>`
      )
      DOMSelectors.doneicecream = document.querySelector('.doneicecream');
      DOMSelectors.doneicecream.addEventListener('click', () => makeacard(fooditem));
    } else {
      clearHTML();
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class = "card">
          <h1>Try again...</h1>
          <button class = "wrongsparklingwater">Back to the recipe</button>
        </div>`
      );
      DOMSelectors.wrongsparklingwater = document.querySelector('.wrongsparklingwater');
      DOMSelectors.wrongsparklingwater.addEventListener('click', sparklingwateringredients);
    }
  }
)}

function icecreamingredients() {
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <h1>Ice Cream</h1>
    <h2>Ingredients:</h2>
    <h4>2 Scoops of Matcha Ice Cream</h4>
    <h4>Whipped Cream</h4>
    <h4>Maraschino Cherries</h4>
    <button class = "icecreamskipbutton">Skip</button>
    </div>`
  );
  DOMSelectors.icecreamskipbutton = document.querySelector('.icecreamskipbutton');
  DOMSelectors.icecreamskipbutton.addEventListener('click', icecreamquestions);
}

let icecreamflavor = null;
let icecreamscoops = null;
let icecreamsprinkles = null;
let icecreamwhippedcream = null;
let icecreammaraschinocherries = null;

function righticecreamchoices() {
  return (
    icecreamflavor === 'Matcha' &&
    icecreamscoops === 'Two scoops' &&
    icecreamsprinkles === 'No' &&
    icecreamwhippedcream === 'Yes' &&
    icecreammaraschinocherries === 'Yes'
  );
}

function icecreamquestions() {
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
      <h2>What flavor of ice cream do you get?</h2>
      <button class = "icecreamflavor" >Vanilla Bean</button>
      <button class = "icecreamflavor" >Chocolate</button>
      <button class = "icecreamflavor" >Matcha</button>
      <h2>How many scoops of ice cream?</h2>
      <button class = "icecreamscoops" >One scoop</button>
      <button class = "icecreamscoops" >Two scoops</button>
      <button class = "icecreamscoops" >Three scoops</button>
      <h2>Do you put sprinkles?</h2>
      <button class = "icecreamsprinkles" >Yes</button>
      <button class = "icecreamsprinkles" >No</button>
      <h2>Do you put whipped cream?</h2>
      <button class = "icecreamwhippedcream" >Yes</button>
      <button class = "icecreamwhippedcream" >No</button>
      <h2>Do you add Maraschino Cherries?</h2>
      <button class = "icecreammaraschinocherries" >Yes</button>
      <button class = "icecreammaraschinocherries" >No</button>
      <button class = "submiticecream">Submit Dish</button>
    </div>`
  );

  DOMSelectors.submiticecreamButton = document.querySelector('.submiticecream');
  DOMSelectors.submiticecreamButton.addEventListener('click', () => {
    if (righticecreamchoices()) {
      clearHTML();
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class = "card">
          <h1>Correct!</h1>
          <button class = "doneicecream">Pick your next order</button>
        </div>`
      );
      DOMSelectors.doneicecream = document.querySelector('.doneicecream');
      DOMSelectors.doneicecream.addEventListener('click', () => makeacard(fooditem));
    } else {
      clearHTML();
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class = "card">
          <h1>Try again...</h1>
          <button class = "wrongicecream">Back to the recipe</button>
        </div>`
      );
      DOMSelectors.wrongicecream = document.querySelector('.wrongicecream');
      DOMSelectors.wrongicecream.addEventListener('click', icecreamingredients);
    }
  });
}

function tomatosoupstep1(){
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
   'beforeend',
   `<div class = "card">
   <h1>Tomato Soup</h1>
   <h2>Step 1:</h2>
   <h2>Melt in half a stick of butter </h2>
   <h2>Saute diced onions until soft and golden</h2>
   <h2>Add 3 minced garlic cloves</h2>
   <button class = "tomatosoupstep1skipbutton">Skip</button>
   </div>`
  )
  DOMSelectors.tomatosoupstep1skipbutton = document.querySelector('.tomatosoupstep1skipbutton')
  DOMSelectors.tomatosoupstep1skipbutton.addEventListener('click',tomatosoupstep1questions)
}

function tomatosoupstep1questions() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentElement(
    'beforeend',
    `<div class = "card">
    <h2>What do you add first?</h2>
    <button class = "tomatosoupbutter">Oil</button>
    <button class = "tomatosoupbutter">Butter</button>
    <button class = "tomatosoupbutter">Vegetable Shortening</button>
    <button class = "tomatosoupbutter">Margarine</button>
    <h2>How much do you add?</h2>
    <button class = "tomatosoupbutterquantity">Half Cup</button>
    <button class = "tomatosoupbutterquantity">Whole Cup</button>
    <button class = "tomatosoupbutterquantity">Half Stick</button>
    <button class = "tomatosoupbutterquantity">Whole Stick</button>
    <h2>How do you cut the onion?</h2>
    <button class = "tomatosouponioncut">Minced</button>
    <button class = "tomatosouponioncut">Rings</button>
    <button class = "tomatosouponioncut">Uncut</button>
    <button class = "tomatosouponioncut">Diced</button>
    <h2>How many garlic cloves do you add?</h2>
    <button class = "tomatosoupgarlicquantity">1/2 Clove</button>
    <button class = "tomatosoupgarlicquantity">1 Clove</button>
    <button class = "tomatosoupgarlicquantity">2 Cloves</button>
    <button class = "tomatosoupgarlicquantity">3 Cloves</button>
    <button class = "submittomatosoupstep1">Next Step</button>
    </div>`
  )
}

function tomatosoupstep2() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <h1>Tomato Soup</h1>
    <h2>Step 2:</h2>
    <h2>Add 56 ounces of crushed tomatoes, chicken stock, chopped basil, sugar, and black pepper</h2>
    <h2>Bring the mixture to a boil, reduce heat, partially cover, then simmer for 10 minutes</h2>
    <h2>Blend with an imersion blender</h2>
    <button class = "tomatosoupstep2skipbutton">Skip</button>
    </div>`
  )
}

function tomatosoupstep3(){
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <h1>Tomato Soup</h1>
    <h2>Step 3:</h2>
    <h2>Add heavy cream and shredded parmesan cheese and simmer for 3 minutes</h2>
    <button class = "tomatosoupstep3skipbutton">Skip</button>
    </div>`
  )
}

function tomatosoupstep4(){
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentElement(
    'beforeend',
    `<div class = "card">
    <h1>Tomato Soup</h1>
    <h2>Step 4:</h2>
    <h2>Serve with basil leaves and more parmesan cheese</h2>
    </div>`
  )
}

function greeksaladstep1( ){
  clearHTML()
}

function shrimpcocktailstep1() {
  clearHTML()
}

function sushiplatterstep1() {
  clearHTML()
}

function salmonfilletstep1() {
  clearHTML()
}

function crepestep1() {
  clearHTML()
}

function butteredlobsterstep1() {
  clearHTML()
}

function rackoflambstep1() {
  clearHTML()
}

function macaroonstep1() {
  clearHTML()
}

function mangocheesecakestep1() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <h1>Mango Cheesecake</h1>
    <h2></h2>
    </div>`
  )
}

function pastastep1() {
  clearHTML()
}

function wagyustep1() {
  clearHTML()
}