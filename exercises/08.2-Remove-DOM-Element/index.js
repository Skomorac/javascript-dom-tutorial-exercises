let list = document.querySelector('#parentLi')
let childs = list.childNodes;
console.log(childs)
childs[3].parentNode.removeChild(childs[3]);
