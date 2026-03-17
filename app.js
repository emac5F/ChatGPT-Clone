const buttonToggle = document.querySelector('.toggle-node');
const root = document.documentElement;

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const chatList = document.querySelector('.chat ul');
const template = document.querySelector('#chat-template');


buttonToggle.addEventListener('click', function(){
    if(root.dataset.theme === 'light'){
        root.dataset.theme = 'dark';
    } else{
        root.dataset.theme = 'light';
    }
});

form.addEventListener('submit', function(e){
    e.preventDefault();
    const messageText = input.value.trim();

    if(messageText !== ""){
        addMessage(messageText, 'user');
        input.value = '';
        setTimeout(() => {
            addMessage("Esta es una respuesta automática del clon.", 'bot');
        }, 1000);
    }
});

function addMessage(text, sender) {
    const clone = template.content.cloneNode(true);
    const li = clone.querySelector('li');
    const p = clone.querySelector('p');

    li.classList.add(sender);
    p.textContent = text;

    chatList.appendChild(clone);
    
    // Auto-scroll al último mensaje
    const chatContainer = document.querySelector('.chat');
    chatContainer.scrollTop = chatContainer.scrollHeight;
}