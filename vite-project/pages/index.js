let inp = document.querySelector('.email');
let btn = document.querySelector('.btn');
let inputs = document.querySelectorAll('input')
let btn5 = document.querySelector('.btn5')

console.log(inputs);




btn5.addEventListener('click', function() {
  let values = {};
  inputs.forEach(function(input) {
    values[input.id] = input.value;
  });
  let json = JSON.stringify(values);
  localStorage.setItem('myInputs', json);
});

let json = localStorage.getItem('myInputs');
let values = json ? JSON.parse(json) : {};
inputs.forEach(function(input) {
  input.value = values[input.id] || '';
});



btn.onclick = () => {
    localStorage.setItem('email', inp.value);
};


