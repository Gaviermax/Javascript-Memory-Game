const cards = document.querySelectorAll(".cardItem");
let card1, card2;
cards.forEach(card=>{
    card.addEventListener("click", (event) => {
        console.log(event.target);
        let cardClicked = event.target;

        if(cardClicked !== card1){
            cardClicked.classList.add("flipped");
            if(!card1){
                return card1 = cardClicked;
            }
            card2 = cardClicked;

            let card1Img = document.querySelector("img").src;
            let card2Img = document.querySelector("img").src;

            matchCards(card1Img, card2Img);

        }
    });

});

function matchCards(img1 , img2){
    console.log(img1)
    console.log(img2)

    // if(img1 === img2){
    //     return console.log("matched")
    // }

    // card1.classList.add("shake");
    // card2.classList.add("shake");
}