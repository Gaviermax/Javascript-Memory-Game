const cards = document.querySelectorAll(".cardItem");
let card1, card2;
let disableCards = false;
let matchedcards =0;


const cardClickHandler = (event) =>{
    let cardClicked = event.target;

    if(cardClicked !== card1 && !disableCards){
        cardClicked.classList.add("flipped");
        if(!card1){
            return card1 = cardClicked;
        }
        card2 = cardClicked;
        disableCards = true;
        let card1Img = card1.querySelector(".backView img").src;
        let card2Img = card2.querySelector(".backView img").src;

        matchCards(card1Img, card2Img);

    }
}

cards.forEach(card=>{
    card.addEventListener("click", cardClickHandler);

});

function shuffleCards(){
    matchedcards = 0;
    card1 = card2 = "";
    let arr = [1,2,3,4,5,6,1,2,3,4,5,6]
    arr.sort(() => Math.random() > 0.5 ? 1 : -1 )

    cards.forEach((card,index) =>{
        card.classList.remove("flipped");
        card.addEventListener("click", cardClickHandler);
        let imgTag =card.querySelector(".backView img");
        imgTag.src = `Images/car${arr[index]}.png`;
    
    });
}
shuffleCards();

function matchCards(img1 , img2){
    if(img1 === img2){
        matchedcards++;
        console.log(matchedcards)
        if(matchedcards == 6){
            setTimeout(() => {
                return shuffleCards();
            }, 1000);
        }
        card1.removeEventListener("click", cardClickHandler);
        card2.removeEventListener("click", cardClickHandler);
        card1 = card2 ="";
        return disableCards = false;
    }

    setTimeout(() => {
        card1.classList.add("shake");
        card2.classList.add("shake");
    },400);

    setTimeout(() => {
        card1 .classList.remove("shake", "flipped");
        card2.classList.remove("shake", "flipped");
        card1 = card2 ="";
        disableCards = false;
    },1200);

}