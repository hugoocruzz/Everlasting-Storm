const option1 = document.getElementById('opt1');
const option2 = document.getElementById('opt2');
const desc1 = document.getElementById('des1');
const desc2 = document.getElementById('des2');

option1.addEventListener('click', () => {
  desc1.style.display = 'block';
  desc2.style.display = 'none';
});

option2.addEventListener('click', () => {
  desc1.style.display = 'none';
  desc2.style.display = 'block';
});