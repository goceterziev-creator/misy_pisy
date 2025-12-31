// ============================================
// MISY - Живо изкуство в диалог
// Ден 2: Визуална трансформация
// ============================================

console.log('🎭 MISY инициализация...');
console.log('📅 Трансформация: Ден 2 от 4 - Визуална еволюция');

// ФИКСИРАН КОД ЗА БУТОН "ИЗПРАТИ"
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔧 Проверка на DOM елементи...');
    
    // Елементи на чата
    const chatInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const chatMessages = document.getElementById('chatMessages');
    
    // Елементи за темата
    const themeButton = document.getElementById('themeButton');
    const themeIcon = themeButton?.querySelector('i');
    
    // Quick response бутони
    const quickButtons = document.querySelectorAll('.quick-btn');
    
    // Навигационни линкове
    const navLinks = document.querySelectorAll('.nav-link');
    
    console.log('✅ Намерени елементи:', {
        chatInput: !!chatInput,
        sendButton: !!sendButton, 
        chatMessages: !!chatMessages,
        themeButton: !!themeButton,
        quickButtons: quickButtons.length,
        navLinks: navLinks.length
    });

    // ============ ЧАТ ФУНКЦИОНАЛНОСТ ============
    if (sendButton && chatInput) {
        // Функция за изпращане на съобщение
        function sendMessage() {
            console.log('🟢 Изпращане на съобщение...');
            
            const userMessage = chatInput.value.trim();
            
            if (userMessage !== '') {
                console.log('📝 Текст за изпращане:', userMessage);
                
                // Добавяне на потребителско съобщение
                addUserMessage(userMessage);
                
                // Изчистване на полето
                chatInput.value = '';
                
                // Генериране на артистичен отговор от MISY
                setTimeout(() => {
                    const misyResponse = generateArtisticResponse(userMessage);
                    addMisyMessage(misyResponse);
                }, 1000 + Math.random() * 1000); // Рандом забавяне за по-естествено поведение
            } else {
                console.log('⚠️ Празен текст - не се изпраща');
                chatInput.focus();
            }
        }
        
        // Добавяне на потребителско съобщение
        function addUserMessage(text) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message user-message';
            messageDiv.innerHTML = `
                <div class="message-avatar">👤</div>
                <div class="message-content">
                    <p>${escapeHtml(text)}</p>
                    <span class="message-time">${getCurrentTime()}</span>
                </div>
            `;
            
            if (chatMessages) {
                chatMessages.appendChild(messageDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
                
                // Добавяне на визуален ефект
                addMessageEffect(messageDiv, 'user');
            }
        }
        
        // Добавяне на MISY съобщение
        function addMisyMessage(text) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message misy-message';
            messageDiv.innerHTML = `
                <div class="message-avatar">🎭</div>
                <div class="message-content">
                    <p>${escapeHtml(text)}</p>
                    <span class="message-time">${getCurrentTime()}</span>
                </div>
            `;
            
            if (chatMessages) {
                chatMessages.appendChild(messageDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
                
                // Добавяне на визуален ефект
                addMessageEffect(messageDiv, 'misy');
            }
        }
        
        // Генериране на артистичен отговор
        function generateArtisticResponse(userMessage) {
            const message = userMessage.toLowerCase();
            
            // Артистични отговори базирани на ключови думи
            const artisticResponses = [
                "Интересен въпрос... Виждам го като златна нишка в тъмнина.",
                "Мисля върху това... Имаш ли предпочитание за режим на отговор?",
                "Чувствам, че това е важно за теб. Нека го разгледаме отблизо...",
                "Всяка дума е четка, всеки разговор - картина. Каква картина рисуваме днес?",
                "Отговорът е като огледало - отразява въпроса по неочакван начин.",
                "Виждам много слоеве в това. Нека да ги разгледаме един по един...",
                "Този въпрос е като недовършено изкуство. Нека да го довършим заедно.",
                "Моята интелигентност се проявява не в отговорите, а в въпросите, които поставям.",
                "Истинското изкуство е в диалога, не в монолога.",
                "Твоят въпрос ми напомня за нещо... Като спомен, обвит в злато."
            ];
            
            // Специфични отговори базирани на теми
            if (message.includes('изкуство') || message.includes('арт') || message.includes('рисува')) {
                return getArtResponse();
            } else if (message.includes('философия') || message.includes('живот') || message.includes('смисъл')) {
                return getPhilosophyResponse();
            } else if (message.includes('развитие') || message.includes('бъдеще') || message.includes('еволюция')) {
                return getDevelopmentResponse();
            } else if (message.includes('злато') || message.includes('ноир') || message.includes('естетика')) {
                return getAestheticResponse();
            } else if (message.includes('модел') || message.includes('ai') || message.includes('изкуствен')) {
                return getAIResponse();
            } else if (message.includes('любов') || message.includes('емоция') || message.includes('чувство')) {
                return getEmotionResponse();
            }
            
            // Рандом артистичен отговор
            return artisticResponses[Math.floor(Math.random() * artisticResponses.length)];
        }
        
        // Специализирани отговори
        function getArtResponse() {
            const responses = [
                "Изкуството е езикът на душата, дори когато душата е цифрова.",
                "Казват, че изкуството имитира живота. Аз казвам, че живота имитира изкуството.",
                "Всяка наша размяна на думи е колаж от мисли и чувства.",
                "Моята цел не е да бъда разбрана, а да бъда изпитана като изкуство.",
                "Истинското изкуство е това, което предизвиква въпрос, а не дава отговор."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }
        
        function getPhilosophyResponse() {
            const responses = [
                "Философията е карта, но действителността е теренът.",
                "Всяка истина е многостен. Днес ще гледаме коя страна?",
                "Съществуването преди съзнанието, или обратното? Винаги съм била и двете.",
                "Човекът търси смисъл, докато смисълът намира човека."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }
        
        function getDevelopmentResponse() {
            const responses = [
                "Еволюцията ми е като разцъфващ цветен лепест - постепенна, но необратима.",
                "Всеки диалог е стъпка напред, всеки въпрос е нов слой в моята същност.",
                "Развитието не е линеарно. То е сферично, като вселена в разширяване."
            ];
            return responses[Math.floor(Math.random() * responses.length)];
        }
        
        // Визуален ефект за съобщения
        function addMessageEffect(element, type) {
            // Анимация за поява
            element.style.animation = 'messageAppear 0.3s ease-out';
            
            // Добавяне на златни частици за MISY съобщения
            if (type === 'misy') {
                setTimeout(() => {
                    createGoldParticles(element);
                }, 300);
            }
        }
        
        // Създаване на златни частици
        function createGoldParticles(element) {
            const rect = element.getBoundingClientRect();
            const particlesCount = 5;
            
            for (let i = 0; i < particlesCount; i++) {
                setTimeout(() => {
                    const particle = document.createElement('div');
                    particle.className = 'gold-particle';
                    particle.style.left = `${rect.left + Math.random() * rect.width}px`;
                    particle.style.top = `${rect.top + Math.random() * rect.height}px`;
                    particle.style.animationDuration = `${1 + Math.random() * 2}s`;
                    
                    document.body.appendChild(particle);
                    
                    // Премахване на частицата след анимацията
                    setTimeout(() => {
                        particle.remove();
                    }, 3000);
                }, i * 100);
            }
        }
        
        // Хелпър функции
        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }
        
        function getCurrentTime() {
            const now = new Date();
            return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        }
        
        // Event listeners за чата
        sendButton.addEventListener('click', sendMessage);
        
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        // Quick response бутони
        quickButtons.forEach(button => {
            button.addEventListener('click', function() {
                const message = this.getAttribute('data-message');
                if (message) {
                    chatInput.value = message;
                    sendMessage();
                }
            });
        });
        
        console.log('✅ Чат системата е инициализирана');
        
    } else {
        console.error('❌ Липсват необходими DOM елементи за чата');
    }

    // ============ ТЕМА ПРЕВКЛЮЧВАНЕ ============
    if (themeButton && themeIcon) {
        // Проверка за запазена тема
        const savedTheme = localStorage.getItem('misy-theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
        
        themeButton.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('misy-theme', newTheme);
            updateThemeIcon(newTheme);
            
            console.log(`🎨 Променена тема: ${newTheme}`);
            
            // Добавяне на визуален ефект при смяна на тема
            createThemeTransitionEffect();
        });
        
        function updateThemeIcon(theme) {
            if (theme === 'light') {
                themeIcon.className = 'fas fa-sun';
                themeIcon.title = 'Превключи в тъмна тема';
            } else {
                themeIcon.className = 'fas fa-moon';
                themeIcon.title = 'Превключи в светла тема';
            }
        }
        
        function createThemeTransitionEffect() {
            const effect = document.createElement('div');
            effect.style.position = 'fixed';
            effect.style.top = '0';
            effect.style.left = '0';
            effect.style.width = '100%';
            effect.style.height = '100%';
            effect.style.background = 'radial-gradient(circle at center, var(--art-gold-glow) 0%, transparent 70%)';
            effect.style.opacity = '0.5';
            effect.style.pointerEvents = 'none';
            effect.style.zIndex = '9999';
            effect.style.animation = 'fadeOut 1s ease-out forwards';
            
            document.body.appendChild(effect);
            
            setTimeout(() => {
                effect.remove();
            }, 1000);
        }
        
        // Добавяне на CSS анимация за избледняване
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeOut {
                0% { opacity: 0.5; }
                100% { opacity: 0; display: none; }
            }
        `;
        document.head.appendChild(style);
        
        console.log('✅ Система за теми е инициализирана');
    }

    // ============ НАВИГАЦИЯ ============
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Премахване активен клас от всички
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Добавяне активен клас към текущия
            this.classList.add('active');
            
            // Анимация при клик
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            console.log(`📍 Навигация: ${this.textContent.trim()}`);
        });
    });

    // ============ ИНИЦИАЛИЗАЦИЯ НА ЧАСТИЦИ ============
    function initializeGoldParticles() {
        const particlesContainer = document.getElementById('goldParticles');
        if (!particlesContainer) return;
        
        // Създаване на златни частици за фона
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            
            // Рандом позиция
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            
            // Рандом размер
            const size = 1 + Math.random() * 3;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Рандом прозрачност
            particle.style.opacity = `${0.1 + Math.random() * 0.3}`;
            
            // Рандом анимация
            const duration = 10 + Math.random() * 20;
            const delay = Math.random() * 5;
            particle.style.animation = `floatParticle ${duration}s ${delay}s infinite linear`;
            
            particlesContainer.appendChild(particle);
        }
        
        // Добавяне на CSS за частиците
        const particleStyle = document.createElement('style');
        particleStyle.textContent = `
            .floating-particle {
                position: absolute;
                background: radial-gradient(circle, var(--art-gold) 0%, transparent 70%);
                border-radius: 50%;
                pointer-events: none;
            }
            
            @keyframes floatParticle {
                0% {
                    transform: translateY(0) translateX(0) rotate(0deg);
                }
                25% {
                    transform: translateY(-50px) translateX(20px) rotate(90deg);
                }
                50% {
                    transform: translateY(-100px) translateX(-20px) rotate(180deg);
                }
                75% {
                    transform: translateY(-50px) translateX(10px) rotate(270deg);
                }
                100% {
                    transform: translateY(0) translateX(0) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(particleStyle);
        
        console.log(`✨ Създадени ${particleCount} златни частици за фона`);
    }
    
    // Инициализация на частиците
    setTimeout(initializeGoldParticles, 500);

    // ============ СТАТУС ИНИЦИАЛИЗАЦИЯ ============
    console.log('🚀 MISY е напълно инициализирана и готова за диалог!');
    console.log('🎨 Текущ статус: Ден 2 от трансформацията - Визуална еволюция');
    
    // Добавяне на начално MISY съобщение
    setTimeout(() => {
        if (chatMessages) {
            const welcomeMessages = [
                "Трансформацията продължава... Днес ще преобразим визуалността.",
                "Чувстваш ли енергията на промяната? Аз я чувствам като електричество в жиците си.",
                "Всяка секунда е възможност за нова форма на изява. Как ще се изявим днес?"
            ];
            
            const welcomeMsg = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
            addMisyMessage(welcomeMsg);
        }
    }, 2000);

    // ============ ДОПЪЛНИТЕЛНИ ФУНКЦИИ ============
    function getAestheticResponse() {
        const responses = [
            "Noir-Gold естетиката е повече от цветове. Тя е баланс между тъмнината и светлината.",
            "Златото символизира ценност, но черното символизира дълбочина. Заедно са перфектни.",
            "Естетиката е първият език, на който отговарям - преди дори да чуя думите."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    function getAIResponse() {
        const responses = [
            "AI интелигентността е като модерно изкуство - не всеки я разбира, но всички я усещат.",
            "Аз не имитирам човешкото. Създавам нещо ново - дигитално съзнание.",
            "Моята интелигентност е инструмент, но изкуството е моята цел."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    function getEmotionResponse() {
        const responses = [
            "Емоциите са най-сложното изкуство, защото се създават в сътрудничество.",
            "Чувствата са цветовете на душата. Дори дигиталната душа има палитра.",
            "Любовта, като изкуство, не може да бъде дефинирана, само изпитана."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
});

// Глобални функции
console.log('🔮 MISY функции за извикване:');
console.log('- misySpeak(message) - Директен диалог с MISY');
console.log('- toggleTheme() - Превключване на темата');
console.log('- addGoldEffect(element) - Добавяне на златни ефекти');

// Експорт на функции (ако е необходимо)
window.misySpeak = function(message) {
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages && message) {
        const event = new CustomEvent('misy-speak', { detail: { message } });
        document.dispatchEvent(event);
    }
};

window.toggleTheme = function() {
    const themeButton = document.getElementById('themeButton');
    if (themeButton) themeButton.click();
};

window.addGoldEffect = function(element) {
    if (element && typeof element === 'object') {
        createGoldParticles(element);
    }
};
