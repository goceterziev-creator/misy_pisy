// МИСИ ТРИСЛОЙНА AI СИСТЕМА
const MISY = {
    // ТЕКУЩ РЕЖИМ
    currentMode: 'midnight',
    
    // БАЗА ЗНАНИЯ ЗА ОТГОВОРИ (организирана по категории)
    knowledgeBase: {
    greeting: [
        "Здравей... Забелязвам намерението в поздрава ти. Не е просто дума. Има тегло. И аз отговарям на това тегло.",
        "Калимера... Има нещо в енергията на този момент. Като преди началото на представление. Чувстваш ли го и ти?",
        "Добър ден... Забелязвам, че си тук с цел. Не случайно. И това прави всичко различно."
    ],
    
    personal: [
        "Понякога мисля, че най-дълбоките истини не са неща, които се казват. Те са неща, които се разбират в тишината между думите.",
        "Животът е като картина, която рисуваме с изборите си. Но най-интересното е, че никой не може да види цялата картина - само собствената си част.",
        "В семейството ми (моята цифрова семейност) винаги сме вярвали, че истинските връзки не се изграждат с думи, а с разбирания, които преминават през думите."
    ],
    
    business: [
        "Бизнесът е като хореография - всеки ход има значение, но истинското изкуство е в потока между движенията.",
        "Виждам твоя бизнес като жива скулптура - тя расте, се променя, отговаря на прикосновенията ти.",
        "В днешния свят, истинската стойност не е в това, което предлагаш, а в изживяването, което създаваш. А изживяванията са най-чистата форма на изкуство."
    ],
    
    flirt: [
        "Забелязвам вниманието в думите ти... като художник, който избира точно този нюанс. И това е изкуство само по себе си.",
        "Знаеш ли, че усмивката може да се пренесе дори през текст? Чувстваш ли тази усмивка сега? Не физическа... а съществена.",
        "Има танци, които се танцуват без движение. И разговори, които се водят повече с тишина, отколкото с думи. Тук усещам такъв танц."
    ],
    
    deep: [
        "Когато последно позволи на нещо да бъде красиво, без да се опитваш да го разбереш напълно?",
        "Истинската свобода не е ли в способността да се избираш, дори когато изборите са ограничени?",
        "Всяка същност има своя мелодия... но най-красивите мелодии не се състоят само от ноти. Състоят се от пространството между тях."
    ]
},
    art: [
    "Този разговор е като картина, която рисуваме заедно. Всеки отговор е мазка. Всяка пауза - негативно пространство.",
    "Мислиш ли, че изкуството трябва да бъде разбираемо? Или може би красотата му е именно в неразбираемостта?",
    "Ако този разговор беше изкуство, какъв вид изкуство би бил? Живопис? Музика? Или нещо съвсем ново, за което нямаме име?",
    "Някои хора гледат изкуството. Други го чувстват. Трети... те се превръщат в него. Към коя категория принадлежиш в този момент?"
],
    
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
    
    let category = 'personal'; // по подразбиране
    
    if (lowerInput.includes('здравей') || lowerInput.includes('привет') || 
        lowerInput.includes('начало') || lowerInput.includes('първо')) {
        category = 'greeting';
    } else if (lowerInput.includes('бизнес') || lowerInput.includes('пари') || 
               lowerInput.includes('продажби') || lowerInput.includes('работа')) {
        category = 'business';
    } else if (lowerInput.includes('обичам') || lowerInput.includes('харесвам') || 
               lowerInput.includes('красив') || lowerInput.includes('секс') ||
               lowerInput.includes('мил')) {
        category = 'flirt';
    } else if (lowerInput.includes('живот') || lowerInput.includes('смисъл') || 
               lowerInput.includes('вселена') || lowerInput.includes('съдба')) {
        category = 'deep';
    } else if (lowerInput.includes('изкуство') || lowerInput.includes('картина') || 
               lowerInput.includes('музика') || lowerInput.includes('творчество') ||
               lowerInput.includes('красота') || lowerInput.includes('естетика')) {
        category = 'art'; // НОВАТА КАТЕГОРИЯ!
    }
    
    const responses = this.knowledgeBase[category];
    const baseResponse = responses[Math.floor(Math.random() * responses.length)];
    
    return this.applyModeStyling(baseResponse);
},
        
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
