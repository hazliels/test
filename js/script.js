document.getElementById('openButton').addEventListener('click', function () {
  document.getElementById('details').hidden = false;
  this.textContent = 'Undangan Terbuka';
  this.disabled = true;
});
