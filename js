const ruleta = document.querySelector("#ruleta");
const spinButton = document.querySelector("#spin");
const resetButton = document.querySelector("#reset");

const TiroMax = 20;
const TiroMin= 1;

const MaxDegree = 360;
const MinDegree = 1;

const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min); 
}

spinButton.addEventListener("click", () => {
    const spins = getRandomNumber(TiroMin, TiroMax);
    const degrees = getRandomNumber(MinDegree, MaxDegree); 

    const fullSpins = (spins - 1) * 360;
    const spin = fullSpins + degrees;

    const animacionTime = spins;
    
    
 
    ruleta.style.transform = `rotate(${spin}deg)`;
    ruleta.style.transitionDuration = `${animacionTime}s`;
    ruleta.style.transform = `rotate(740deg)`;
    ruleta.style.transitionDuration = `${animacionTime}s`;
    spinButton.style.display = "none";
    resetButton.style.display = "inline-block";

}); 


resetButton.addEventListener("click", () => {
ruleta.style.transform = "rotate(0deg)";
ruleta.style.transitionDuration = "2s";
spinButton.style.display = "inline-block";
resetButton.style.display = "none";
});
