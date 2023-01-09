const cardData = [
    [{
            card: "cards/dh.png"
        },
        {
            card: "cards/dk"
        },
        {
            card: "cards/mage.png"
        },
        {
            card: "cards/dh.png"
        },
        {
            card: "cards/monk.png"
        },
        {
            card: "cards/warrior.png"
        },
        {
            card: "cards/mage.png"
        },
        {
            card: "cards/warlock.png"
        },
        {
            card: "cards/warrior.png"
        },
        {
            card: "cards/shaman.png"
        },
        {
            card: "cards/priest.png"
        },
        {
            card: "cards/dk"
        },
        {
            card: "cards/rogue.png"
        },
        {
            card: "cards/priest.png"
        },
        {
            card: "cards/monk.png"
        },
        {
            card: "cards/paladin.png"
        },
        {
            card: "cards/paladin.png"
        },
        {
            card: "cards/rogue.png"
        },
        {
            card: "cards/shaman.png"
        },
        {
            card: "cards/warlock.png"
        }
    ],
    [{
            card: "cards/dh.png"
        },
        {
            card: "cards/dh.png"
        },
        {
            card: "cards/dk"
        },
        {
            card: "cards/warrior.png"
        },
        {
            card: "cards/warlock.png"
        },
        {
            card: "cards/mage.png"
        },
        {
            card: "cards/mage.png"
        },
        {
            card: "cards/monk.png"
        },
        {
            card: "cards/warrior.png"
        },
        {
            card: "cards/paladin.png"
        },
        {
            card: "cards/priest.png"
        },
        {
            card: "cards/dk"
        },
        {
            card: "cards/rogue.png"
        },
        {
            card: "cards/priest.png"
        },
        {
            card: "cards/monk.png"
        },
        {
            card: "cards/shaman.png"
        },
        {
            card: "cards/paladin.png"
        },
        {
            card: "cards/rogue.png"
        },
        {
            card: "cards/shaman.png"
        },
        {
            card: "cards/warlock.png"
        }
    ]
];

const mainContainer = document.querySelector(".container");

let firstChoice;
let secondChoice;

let count = 0;

window.onload = () => {
    cardData[Math.floor(Math.random() * 2)].forEach((card, index) => {
        const gameCard = document.getElementById(`${index}`);
        gameCard.src = `${card.card}`;
        gameCard.setAttribute("class", "test");
    })
}

const deckCard = document.querySelectorAll(".card");



mainContainer.addEventListener("click", (e) => {
    const target = e.target;
    const gameCard = target.parentNode
    if (target == mainContainer) {
        return;
    }
    if (target.className == "card" && count < 2) {
        count++;
        target.style.display = "none";
        if (count == 1) {
            firstChoice = gameCard;
        } else {
            secondChoice = gameCard;
        }
    }

    if (secondChoice != undefined && firstChoice.firstElementChild.src == secondChoice.firstElementChild.src) {
        setTimeout(function (){
            secondChoice.style.opacity = "0"
            firstChoice.style.opacity = "0"
            secondChoice.firstElementChild.style.opacity = "0"
            firstChoice.firstElementChild.style.opacity = "0"
            secondChoice.firstElementChild.style.cursor = "default"
            firstChoice.firstElementChild.style.cursor = "default"
            firstChoice = "";
            secondChoice = "";
            count = 0;
        },700)
        
    } else if (secondChoice != undefined && firstChoice.firstElementChild.src != secondChoice.firstElementChild.src) {

        setTimeout(function () {
            secondChoice.lastElementChild.style.display = "block"
            firstChoice.lastElementChild.style.display = "block"
            firstChoice = "";
            secondChoice = "";
            count = 0;
        }, 700)
    }


})
