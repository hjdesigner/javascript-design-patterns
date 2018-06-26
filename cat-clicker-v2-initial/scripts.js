(function(){
  const catNumberOne = document.querySelector('[data-id="catNumberOne"]');
  const catImageOne = document.querySelector('[data-click="catImageOne"]');
  const catNumberTwo = document.querySelector('[data-id="catNumberTwo"]');
  const catImageTwo = document.querySelector('[data-click="catImageTwo"]');

  function ClickCat(elementNumber) {
    const newNumber = parseInt(elementNumber.innerHTML) + 1;
    elementNumber.innerHTML = newNumber;
  }

  catImageOne.addEventListener('click', function() {
    ClickCat(catNumberOne)
  });
  catImageTwo.addEventListener('click', function() {
    ClickCat(catNumberTwo)
  });
})()