let popupClosed = true;
const popup = document.querySelector('.my-popup-new');
const link = popup.querySelector('a');

setTimeout(function() {

  if (popupClosed) {
    popup.style.display = 'block';
  }
}, 3000); 


link.addEventListener('click', function() {
  popupClosed = false;
  setTimeout(function() {
    if (!window.closed) {
      popup.style.display = 'none';
    }
  }, 3000);
});

window.addEventListener('popstate', function(event) {
  
  if (event.state && event.state.isLinkPage && event.state.timeSpent >= 3000) {
    popupClosed = false;
    popup.style.display = 'none';
  }
});
