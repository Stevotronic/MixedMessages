const arrayFirstPart = ["The sky is not blue, ", "Pizza is not a food, ", "Laughter is not the best medicine, ", "The Earth is not round, ", "Water is not wet, "];
const arraySecondPart = ["it's just a figment of our imagination. ", "it's a state of mind. ", "it's just a placebo effect. ", "it's actually a triangle. ", "it's just an illusion created by our senses. "];
const arrayThirdPart = ["Therefore, techno music is a way to release pent-up energy and feel alive.", "Therefore, techno music is not just about the beat, it's about the way it makes you feel.", "Therefore, techno music is a journey of self-discovery and exploration.", "Therefore, techno music is a sonic landscape that allows you to escape from reality.", "Therefore, techno music is a powerful force that brings people together and creates a sense of community."];

const Quote = [];

const randomNumber = () => {
    return Math.floor(Math.random() * 5);
}

const fillQuote = () => {
    Quote.push(arrayFirstPart[randomNumber()]);
    Quote.push(arraySecondPart[randomNumber()]);
    Quote.push(arrayThirdPart[randomNumber()]);
    console.log(Quote.join(""))

}

fillQuote();

