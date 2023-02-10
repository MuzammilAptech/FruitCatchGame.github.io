// Step 1
let game = document.querySelector (".Game");
let basket = document.querySelector (".basket");
let fruits = document.querySelector (".fruits");
let score = document.querySelector(".score");
    score = 0;
    score.textContent = score;
// Step 2
let basketleft = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
let basketbottom = parseInt(window.getComputedStyle(basket).getPropertyValue("bottom"));

// step 3 
function moveBasketleft (){
    if(basketleft >0 ){
    basketleft -=15;
    basket.style.left = basketleft + 'px';
    }
}
function moveBasketRight (){
    if(basketleft < 620 ){
    basketleft +=15;
    basket.style.left = basketleft + 'px';
    }
}
moveBasketleft();

// step 4
function control(e){
    if (e.key =="ArrowLeft"){
        moveBasketleft();
    }
    if (e.key =="ArrowRight"){
        moveBasketRight();
    }
}
document.addEventListener("keydown", control);  

// step 5 
function GenerateFruits(){
    let fruitbottom = 470;
    let fruitleft = Math.floor(Math.random() * 620);
    let fruit = document.createElement('div');
    fruit.setAttribute("class", "fruit");
    fruits.appendChild(fruit);
// Step 6
    function falldownfruit (){
        if (fruitbottom < basketbottom +50  && fruitbottom > basketbottom && 
            fruitbottom > basketbottom && fruitleft > basketleft - 30 && 
            fruitleft < basketleft + 80 ){
                fruits.removeChild(fruit);
                clearInterval(fallInteval);
                score++;
            }
        if (fruitbottom < basketbottom){
            alert ('Game Over ! Your Score is : ' + score);
            location.reload();
            clearInterval(fallInteval);
            clearTimeout(fruitTimeOut);
            }   
        fruitbottom -= 4;
        fruit.style.bottom = fruitbottom + 'px';
        fruit.style.left = fruitleft + 'px';
    }
    let fallInteval = setInterval(falldownfruit, 20);
    let fruitTimeOut = setTimeout(GenerateFruits, 2000);

}
GenerateFruits();