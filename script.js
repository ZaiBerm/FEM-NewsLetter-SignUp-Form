addEventListener('DOMContentLoaded', function () {
  let image = document.getElementById('mainimg');

  if (window.innerWidth < 1200)
  {
    image.src = "./assets/images/illustration-sign-up-mobile.svg";
  }
})




let button = document.getElementById('btn1');
let noticeButton = document.getElementById('btn2');

button.addEventListener('click', function () {

  let mainDiv = document.getElementById('mainDiv');
  let notice = document.getElementById('notice');
  let textBox = document.getElementById('txtbox1');
  let input = textBox.value;
  let span = document.getElementById('span');
  

  if (input.endsWith('.com') && input.includes('@')|| input.endsWith('.org') && input.includes('@'))
  {
    mainDiv.style.display = 'none';
    span.textContent = input;
    notice.style.display = 'flex';
  }
  else
  {
  
  }

})

noticeButton.addEventListener('click', function () {
  let mainDiv = document.getElementById('mainDiv');
  let notice = document.getElementById('notice');
  let textBox = document.getElementById('txtbox1');

  textBox.value = "";
  mainDiv.style.display = 'flex';
  notice.style.display = 'none';
})