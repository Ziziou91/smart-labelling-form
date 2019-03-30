window.onLoad = function() {
  const productField = document.getElementById('product');
  productField.value = localStorage.getItem('productName');
};
