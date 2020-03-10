const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading');
const API_URL = 'http://localhost:3000/messages';

loadingElement.style.display = ""; //none

listAllMessages();

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content')

    const message = {
        name,
        content
    };
    form.style.display = 'none';
    loadingElement.style.display = '';

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(message),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
    .then(createdMessage => {
        console.log(createdMessage)
        form.reset();
        form.style.display = '';
        loadingElement.style.display = 'none';
    })
    
})

function listAllMessages() {
    fetch(API_URL)
        .then(response => response.json())
        .then(messages => {
            console.log(messages)
            messages.forEach(message)
        });
}
