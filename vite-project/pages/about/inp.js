let inp2 = document.querySelector('.emai2');
let btn4 = document.querySelector('.btn4');


// btn4.onclick = () => {
//     if (inp !== inp2) {
//         inp2.style.border = '1px solid red';
//       } else {
//         inp2.style.border = '';
       
//         localStorage.setItem('password', inp);
//       }

// }




inp2.value = localStorage.getItem('email');