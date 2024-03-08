document.getElementById('viewInAR').addEventListener('click', function() {
  const anchor = document.createElement('a');
  anchor.setAttribute('href', 'assets/monster.usdz');
  anchor.setAttribute('rel', 'ar');
  anchor.click();
});
