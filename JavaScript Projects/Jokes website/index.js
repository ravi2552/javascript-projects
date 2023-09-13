const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

const generateJokes = () => {
    fetch('https://icanhazdadjoke.com/')
    .then((res) => {
        res.json()
    }).catch((error) => {
        console.log(error)
    }) 
}
 







jokeBtn.addEventListener('click', generateJokes);
generateJokes();