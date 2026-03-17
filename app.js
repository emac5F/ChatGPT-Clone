const App = {
    //Selectores de elementos
    elements: {
        root: document.documentElement,
        themeBtn: document.querySelector('.toggle-theme'),
        chatForm: document.querySelector('#chat-form'),
        userInput: document.querySelector('#user-input'),
        chatList: document.querySelector('#chat-list'),
        messagesArea: document.querySelector('#messages-area'),
        template: document.querySelector('#message-template')
    },

    //Inicialización
    init() {
        this.bindEvents();
        this.loadTheme();
    },

    //Eventos
    bindEvents() {
        // Cambio de tema
        this.elements.themeBtn.addEventListener('click', () => this.toggleTheme());

        // Envío de mensaje
        this.elements.chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleUserMessage();
        });
    },

    //Funciones de Tema
    toggleTheme() {
        const currentTheme = this.elements.root.dataset.theme;
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        this.elements.root.dataset.theme = newTheme;
        localStorage.setItem('theme', newTheme);
    },

    loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.elements.root.dataset.theme = savedTheme;
    },

    //Funciones de Chat
    handleUserMessage() {
        const text = this.elements.userInput.value.trim();
        
        if (text) {
            this.renderMessage(text, 'user');
            this.elements.userInput.value = '';
            
            // Simular respuesta del Bot
            this.showTypingIndicator();
        }
    },

    renderMessage(text, sender) {
        const { template, chatList, messagesArea } = this.elements;
        
        const clone = template.content.cloneNode(true);
        const li = clone.querySelector('.message');
        const p = clone.querySelector('p');

        li.classList.add(sender);
        p.textContent = text;

        chatList.appendChild(clone);
        
        // Scroll automático
        messagesArea.scrollTo({
            top: messagesArea.scrollHeight,
            behavior: 'smooth'
        });
    },

    showTypingIndicator() {
        // Simulación de "pensamiento" del bot
        setTimeout(() => {
            this.renderMessage("¡Hola! Soy tu asistente. Has escrito un mensaje con " + 
            "éxito en este clon profesional.", 'bot');
        }, 800);
    }
};

// Arrancar la aplicación
document.addEventListener('DOMContentLoaded', () => App.init());