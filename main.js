let disPrice = document.querySelector('#disPrice').value;
let disPercentage = document.querySelector('#disPercentage').nodeValue;
let calculate = document.querySelector('#calculate');
let result = document.querySelector('#result');

calculate.addEventListener('click',function(e){
    let disAmount = disPrice/100*disPercentage;
    let afterDiscount = (disPrice - disAmount).toFixed(2);
    result.after(`<p>${afterDiscount}</p>`);
    console.log(disPrice);

    e.preventDefault();
});