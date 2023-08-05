// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const cite = [
    {
        text: "Controlling complexity is the essence of programming.",
        author: "Brian Kernigan"
    },
    {
        text: "Optimism is an occupational hazard of programming; feedback is treatment.",
        author: "Kent Beck"
    },
    {
        text: "Good code is your best documentation.",
        author: "Steve McConnell"
    },
    {
        text: "There is no elevator to success, you have to take the stairs.",
        author: "Zig Ziglar"
    },
    {
        text: "The only limit to our realization of tomorrow, will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "La vida es 10% lo que te sucede y 90% cómo reaccionas ante ello.",
        author: "Charles R. Swindoll"
    }
];
const citeBtn = document.querySelector(".btn");
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const modalContainer = document.querySelector(".text");


  modalBtn.addEventListener("click", () => {
    modal.classList.add("open-modal");
    displayCite(cite);
  });

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open-modal");
  });

const displayCite = (arr) => {
    //Generate a random number
    let randNum = Math.floor(Math.random() * arr.length);
    let randText = `<p class="text">'${arr[randNum].text}' <br><cite class="author">- ${arr[randNum].author}</cite></p>`;
    
    modalContainer.innerHTML = randText;
};

