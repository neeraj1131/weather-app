console.log('Client side javascript file is loaded!')
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.getElementById('message-1')
const messageTwo = document.getElementById('message-2')
// messageOne.textContent = '';
// messageTwo.textContent = '';
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(search.value);
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    fetch('/weather?address=' +search.value).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
            messageOne.textContent = data.error;
        } else {
            messageOne.textContent = data.forecast;
            messageTwo.textContent = data.location;
        }
    })
})
}) 
// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })