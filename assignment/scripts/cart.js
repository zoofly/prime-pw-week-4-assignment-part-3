console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket=[];
const maxItems=5;

function addItem(item){
basket.push(item)
  return true;
}
console.log(`Basket is ${basket}`);
console.log('Added to basket', addItem('Pop'));
console.log(`New item in basket: ${basket}`);
//end addItem


function listItems(item){
console.log('In your basket:');
  for(let item of basket){
    console.log(item);
  }
  return basket;
}

//end listItems

function empty(){
  console.log('Basket is empty.')
basket.length=0;
return basket;
}

//end empty

function isFull(){
if(basket.length<maxItems){
  return false;
}
  else(basket.length>=maxItems)
    return true;

}

//end isFull

function removeItem(){

}

//end removeItem
