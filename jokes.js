const jokes = [
    "Why did the chicken cross the road?... To get to the other side",
    "What do you call a cow with 3 legs?... Tri-tip",
    "What do you call a cow with 2 legs?... Lean beef",
    "What do you call a cow with no legs?... Ground beef"
];

function getJoke() {
    let random = Math.floor(Math.random() * jokes.length);
    return jokes[random];
}

module.exports = { getJoke };