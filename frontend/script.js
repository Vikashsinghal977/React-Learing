const FirstBaskitCount = document.querySelector('.basket-1 span');
const SecondBasketCount = document.querySelector('.basket-2 span')
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const totaleApple = 10;

let secondBasketApplesCount = 0
let firstBasketApplesCount = totaleApple - secondBasketApplesCount;

FirstBaskitCount.innerText = firstBasketApplesCount;
SecondBasketCount.innerText = secondBasketApplesCount;


rightArrow.addEventListener('click', () => {

    if (secondBasketApplesCount>=10){
        console.log("onloop",secondBasketApplesCount)
        return;
    }
    console.log("first", firstBasketApplesCount);
    console.log("second", "");
    firstBasketApplesCount--;
    FirstBaskitCount.innerText = firstBasketApplesCount;
    secondBasketApplesCount++;
    SecondBasketCount.innerText = secondBasketApplesCount;
})
leftArrow.addEventListener('click', () => {

    if (firstBasketApplesCount>=10){
        console.log("onloop2",firstBasketApplesCount)
        return;
    }
    console.log("first", firstBasketApplesCount);
    console.log("second", secondBasketApplesCount);
    firstBasketApplesCount++;
    FirstBaskitCount.innerText = firstBasketApplesCount;
    secondBasketApplesCount--;
    SecondBasketCount.innerText = secondBasketApplesCount;
})