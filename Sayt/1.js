// jQuery(document).ready(function($){
    
//   $('.button').on('click', function(e){
      
//     var text = '';
//     if(count < texts.length){
//       text = texts[count];
//     }
      
//     else {
//       text = '...'
//     }
      
//     $('ul').prepend('<li>' + text + '</li>');
//     count++;
        
      
      
      
//   });
    
// });


const popup = document.getElementById('popup');
const popupBtn = document.getElementById('button-3');
const closeBtn = document.querySelector('.close-btn');

popupBtn.addEventListener('click', function() {
  popup.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
  popup.style.display = 'none';
});

window.addEventListener('click', function(e) {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});