window.onload = function() {
  var getInput = prompt('Hey type something here: ');
  localStorage.setItem('productName', getInput);
  console.log(localStorage.getItem('productName'));
};
