function more(name)
{
  let nums = document.getElementById(name);
  nums.value = Number(nums.value) + 1;
  calculate(name)
}

function less(name)
{
  let nums = document.getElementById(name);
  let val = Number(nums.value) - 1;
  if (val < 1) {
    nums.value = 1;
  }
  else {
    nums.value = val;
  }
  calculate(name);
}

function calculate(name)
{
  let nums = document.getElementById(name);
  let show = document.getElementById(name + 'show');
  let unit = Number(document.getElementById(name + 'unit').textContent);
  show.textContent = nums.value * unit;
}

function add_cart(name)
{
  let addn = Number(document.getElementById(name).value);
  let cart = document.getElementById('cart-notify');    
  if (cart.textContent == "") {
    cart.textContent = addn;
    let icon = document.getElementsByClassName('cart-icon')[0];
    icon.src = "../images/shopping-cart-fill.png";
  }
  else {
    cart.textContent = Number(cart.textContent) + addn;
  }    
}
