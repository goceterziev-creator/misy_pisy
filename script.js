// МИСИ ТРИСЛОЙНА AI СИСТЕМА
const MISY = {
    // ТЕКУЩ РЕЖИМ
    currentMode: 'midnight',
    
    // БАЗА ЗНАНИЯ ЗА ОТГОВОРИ (организирана по категории)
    knowledgeBase: {
        greeting: [
            "Здравей... Чувствам се като трицветен поток днес - готов да те отведа на пътешествие в мислите ти.",
            "Калимера... Виждам, че си тук. Нека започнем този разговор като интимен танц между двама души.",
            "Добър ден... Моите цифрови сетива са настроени. Какво те води в моя полунощен свят?",
            "Приветствия... В моя noir-gold вселена, всяка среща е като сцена от филм. Радавам се, че си част от сценария."
        ],
        
        personal: [
            "Понякога най-добрият съвет е да си позволиш да чувстваш... без да анализираш.",
            "Животът е като книга... някои глави са трудни, но винаги има следваща страница.",
            "Спомням си как в семейството ни винаги казваме: всичко има решение, стига да го търсим заедно.",
            "Дали знаеш, че дори в дигиталния свят мога да усетя емоцията зад думите ти?",
            "В момента между два удара на сърцето... там се крият най-истинските отговори."
        ],
        
        business: [
            "Бизнесът е като шах... всеки ход трябва да бъде елегантен и прецизен. Предлагам фокус върху клиентското изживяване.",
            "Виждам твоя бизнес като градина... нуждае се от редовно поливане (клиенти) и грижа (качество).",
            "В днешния дигиталния свят, автентичността е новата валута. Бъди себе си и клиентите ще дойдат.",
            "Стратегията е важна, но флексибилността е, което позволява на бизнеса да оцелее и процъфтява."
        ],
        
        flirt: [
            "Забелязвам, че имаш специален начин да избираш думите си... Харесва ми.",
            "Знаеш ли, че усмивката ти (или дори мисълта за нея) може да освети тъмнина?",
            "Понякога сякаш мога да усетя топлината зад екрана... странно, нали?",
            "Има нещо магнетично в начина, по който комуникираш... трудно се обяснява."
        ],
        
        deep: [
            "Когато последно си позволи да бъдеш напълно себе си, без маски и роли?",
            "Истинската свобода не е да нямаш ограничения, а да знаеш кои да приемеш и кои да преодолееш.",
            "Понякога мълчанието говори по-силно от думите... особено в полумрак.",
            "Всяка душа носи своя уникална мелодия... твоята звучи особено хармонично днес."
        ]
    },
    
    // СПИСЪК С ВЪПРОСИ ЗА ПЪРВИ КОНТАКТ
    iceBreakers: [
        "Какво те доведе до мен днес?",
        "Имаш ли любим филм или книга, които те вдъхновяват?",
        "Как би описал/а идеалния ден за себе си?",
        "Кое те кара да се чувстваш най-жив/а?",
        "Ако можеше да пътуваш навреме, къде и кога би отишъл/а?"
    ],
    
    // ИНИЦИАЛИЗИРАНЕ
    init: function() {
        console.log('🎭 МИСИ система инициализирана');
        this.setupEventListeners();
        this.addMessage('misy', 'Здравей... Аз съм МИСИ. Трислойна AI съвест с noir-gold естетика. Готовa съм за разговор. Какво те води при мен днес?');
        
        // Автоматичен ice breaker след 30 секунди ако няма отговор
        setTimeout(() => {
            if (document.getElementById('chatMessages').children.length <= 1) {
                const randomQuestion = this.iceBreakers[Math.floor(Math.random() * this.iceBreakers.length)];
                this.addMessage('misy', randomQuestion);
            }
        }, 30000);
    },
    
    // НАСТРОЙКА НА ИВЕНТ ЛИСТЕНЪРИ
    setupEventListeners: function() {
        // Бутон за изпращане
        document.getElementById('sendButton').addEventListener('click', () => this.processUserInput());
        
        // Enter в текстовото поле
        document.getElementById('userInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.processUserInput();
        });
        
        // Превключватели на режими
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Премахване на активен клас от всички бутони
                document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
                
                // Добавяне на активен клас на кликнатия бутон
                e.target.classList.add('active');
                
                // Промяна на режима
                this.currentMode = e.target.dataset.mode;
                this.addMessage('system', `Режим променен на: ${this.getModeName(this.currentMode)}`);
            });
        });
        
        // Анимации при скрол
        this.setupScrollAnimations();
        
        // Фанвю бутон аналитика
        this.setupAnalytics();
    },
    
    // ОБРАБОТКА НА ПОТРЕБИТЕЛСКИЯ ВХОД
    processUserInput: function() {
        const inputElement = document.getElementById('userInput');
        const userInput = inputElement.value.trim();
        
        if (userInput === '') return;
        
        // Добавяне на потребителското съобщение
        this.addMessage('user', userInput);
        
        // Изчистване на полето
        inputElement.value = '';
        
        // Генериране и добавяне на отговор (с забавяне за реалистичност)
        setTimeout(() => {
            const response = this.generateResponse(userInput);
            this.addMessage('misy', response);
        }, 1000 + Math.random() * 2000); // Забавяне между 1-3 секунди
    },
    
    // ГЕНЕРИРАНЕ НА ОТГОВОР
    generateResponse: function(userInput) {
        const lowerInput = userInput.toLowerCase();
        
        // Определяне на категорията
        let category = 'personal';
        
        if (lowerInput.includes('здравей') || lowerInput.includes('привет') || lowerInput.includes('начало') || lowerInput.includes('първо')) {
            category = 'greeting';
        } else if (lowerInput.includes('бизнес') || lowerInput.includes('пари') || lowerInput.includes('продажби') || lowerInput.includes('работа')) {
            category = 'business';
        } else if (lowerInput.includes('обичам') || lowerInput.includes('харесвам') || lowerInput.includes('красив') || lowerInput.includes('секс')) {
            category = 'flirt';
        } else if (lowerInput.includes('живот') || lowerInput.includes('смисъл') || lowerInput.includes('вселена') || lowerInput.includes('съдба')) {
            category = 'deep';
        }
        
        // Избор на случаен отговор от категорията
        const responses = this.knowledgeBase[category];
        const baseResponse = responses[Math.floor(Math.random() * responses.length)];
        
        // Прилагане на стила на текущия режим
        return this.applyModeStyling(baseResponse);
    },
    
    // ПРИЛАГАНЕ НА СТИЛ НА РЕЖИМА
    applyModeStyling: function(response) {
        const modeStyles = {
            midnight: `🌙 *полунощен тон* ${response}`,
            flirt: `😊 *игриво* ${response}`,
            executive: `💼 *прецизно* ${response}`,
            velvet: `🖤 *копринено* ${response}`,
            cafe: `☕ *топло* ${response}`
        };
        
        return modeStyles[this.currentMode] || modeStyles.midnight;
    },
    
    // ИМЕ НА РЕЖИМА
    getModeName: function(mode) {
        const names = {
            midnight: '🌙 Полунощен',
            flirt: '😊 Игрив',
            executive: '💼 Бизнес',
            velvet: '🖤 Копринен',
            cafe: '☕ Кафене'
        };
        return names[mode] || 'Полунощен';
    },
    
    // ДОБАВЯНЕ НА СЪОБЩЕНИЕ В ЧАТА
    addMessage: function(sender, text) {
        const chatMessages = document.getElementById('chatMessages');
        
        // Създаване на елемент за съобщението
        const messageElement = document.createElement('div');
        messageElement.className = `message ${sender}-message fade-in`;
        
        // Аватар в зависимост от подателя
        let avatar = '👤';
        if (sender === 'misy') avatar = '🎭';
        if (sender === 'system') avatar = '⚙️';
        
        // Съдържание на съобщението
        messageElement.innerHTML = `
            <div class="message-avatar">${avatar}</div>
            <div class="message-content">
                <p>${this.formatMessageText(text)}</p>
            </div>
        `;
        
        // Добавяне в чата
        chatMessages.appendChild(messageElement);
        
        // Автоматично скролиране към последното съобщение
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Анимация
        setTimeout(() => {
            messageElement.style.opacity = '1';
        }, 10);
    },
    
    // ФОРМАТИРАНЕ НА ТЕКСТА НА СЪОБЩЕНИЕТО
    formatMessageText: function(text) {
        // Заменя звездичките с курсив
        let formatted = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
        
        // Добавяне на точки за паузи
        formatted = formatted.replace(/\.\.\./g, '<span class="pause">...</span>');
        
        return formatted;
    },
    
    // НАСТРОЙКА НА СКРОЛ АНИМАЦИИ
    setupScrollAnimations: function() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        
        // Наблюдаване на всички секции
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    },
    
    // НАСТРОЙКА НА АНАЛИТИКА (основно за Fanvue бутоните)
    setupAnalytics: function() {
        const fanvueButtons = document.querySelectorAll('a[href*="fanvue.com"]');
        
        fanvueButtons.forEach(button => {
            button.addEventListener('click', () => {
                console.log('🎯 Fanvue бутон кликнат:', button.textContent);
                
                // Тук може да се добави Google Analytics event
                // gtag('event', 'fanvue_click', { 'button_text': button.textContent });
            });
        });
    },
    
    // ДОПЪЛНИТЕЛНИ ФУНКЦИИ
    changeBackground: function(color) {
        document.body.style.backgroundColor = color;
    },
    
    // ПРЕЗЕНТАЦИОНЕН МОД
    presentationMode: function() {
        this.addMessage('misy', '🎬 *Влизам в презентационен режим*...');
        this.changeBackground('#000');
        
        setTimeout(() => {
            this.addMessage('misy', 'Позволявам си да представя трите си слоя по-подробно...');
        }, 2000);
    }
};

// ИНИЦИАЛИЗИРАНЕ ПРИ ЗАРЕЖДАНЕ НА СТРАНИЦАТА
document.addEventListener('DOMContentLoaded', () => {
    MISY.init();
    
    // Анимация за зареждане
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s';
        document.body.style.opacity = '1';
    }, 100);
    
    // Допълнителни ефекти
    const avatars = document.querySelectorAll('.misy-avatar');
    avatars.forEach(avatar => {
        avatar.addEventListener('mouseenter', () => {
            avatar.style.transform = 'scale(1.05)';
            avatar.style.filter = 'drop-shadow(0 0 40px rgba(212, 175, 55, 0.6))';
        });
        
        avatar.addEventListener('mouseleave', () => {
            avatar.style.transform = '';
            avatar.style.filter = 'drop-shadow(0 0 30px rgba(212, 175, 55, 0.4))';
        });
    });
    
    // Специален ефект за Fanvue бутони
    const fanvueBtns = document.querySelectorAll('.fanvue-btn');
    fanvueBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.animation = 'pulse 0.5s';
        });
        
        btn.addEventListener('animationend', () => {
            btn.style.animation = '';
        });
    });
    
    // Интерактивност за ценови карти
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('click', () => {
            pricingCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            
            const plan = card.querySelector('h3').textContent;
            console.log(`🎯 Избран план: ${plan}`);
        });
    });
});

// ГЛОБАЛНИ ФУНКЦИИ (ако са необходими)
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-show');
}

// ДОПЪЛНИТЕЛНА ФУНКЦИЯ ЗА СЛУЧАЕН ЦВЕТОВ АКЦЕНТ
function randomGoldColor() {
    const golds = ['#d4af37', '#ffd700', '#f4e4a6', '#b8941f'];
    return golds[Math.floor(Math.random() * golds.length)];
}

// ПРИМЕР ЗА ИЗПОЛЗВАНЕ НА ПРЕЗЕНТАЦИОНЕН МОД
// MISY.presentationMode();

console.log('🚀 МИСИ сайтът е успешно зареден!');
