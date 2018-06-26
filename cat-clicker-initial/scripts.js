(function(){
  const catNumber = document.querySelector('[data-id="catNumber"]');
  const catImage = document.querySelector('[data-click="catImage"]');

  catImage.addEventListener('click', function() {
    const newNumber = parseInt(catNumber.innerHTML) + 1;
    catNumber.innerHTML = newNumber;
  });
})()