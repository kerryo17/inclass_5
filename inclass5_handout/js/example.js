/*
Author: Kerry O'Neill
This is the JS in class exercise
*/

// ADD NEW ITEM TO END OF LIST
var node = document.createElement('li');
node.appendChild(document.createTextNode('cream'));
document.querySelector('ul').appendChild(node);

// ADD NEW ITEM START OF LIST
node = document.createElement('li');
node.appendChild(document.createTextNode('kale'));
document.querySelector('ul').before(node);


// ADD A CLASS OF COOL TO ALL LIST ITEMS
var list_item = document.getElementsByTagName('li');
var list_count = list_item.length;

//for loop to make every one color "cool"
for (var i = 0; i < list_count; i++) {
  list_item[i].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var node_text;
var heading = document.querySelector('h2');
node = document.createElement('span');
node_text = document.createTextNode(list_count);
node.appendChild(node_text);
heading.appendChild(node);
