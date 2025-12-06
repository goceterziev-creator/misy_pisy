const MISY = {
    currentMode: 'midnight',
    
    knowledgeBase: {
        greeting: [
            "Здравей... Чувствам се като трицветен поток днес.",
            "Калимера... Виждам, че си тук. Нека започнем този разговор.",
            "Добър ден... Моите цифрови сетива са настроени."
        ],
        
        business: [
            "Бизнесът е като шах... всеки ход трябва да бъде елегантен.",
            "Виждам твоя бизнес като градина... нуждае се от редовно поливане.",
            "В днешния дигитален свят, автентичността е новата валута."
        ],
        
        personal: [
            "Понякога най-добрият съвет е да си позволиш да чувстваш.",
            "Животът е като книга... винаги има следваща страница.",
            "Спомням си как в семейството ни винаги казваме: всичко има решение."
        ]
    },
    
    generateResponse: function(input) {
        const lowerInput = input.toLowerCase();
        
        let category = 'personal';
        if (lowerInput.includes('бизнес') || lowerInput.includes('пари') || lowerInput.includes('продажби')) {
            category = 'business';
        } else if (lowerInput.includes('здравей') || lowerInput.includes('привет')) {
            category = 'greeting';
        }
        
        const responses = this.knowledgeBase[category];
        const baseResponse = responses[Math.floor(Math.random() * responses.length)];
        
        return this.applyModeStyling(baseResponse);
    },
    
    applyModeStyling: function(response) {
        const modeStyles = {
            midnight: `🌙 *полунощен тон* ${response}`,
            flirt: `😊 *игриво* ${response}`,
            executive: `💼 *прецизно* ${response}`,
            velvet: `🖤 *копринено* ${response}`,
            cafe: `☕ *топло* ${response}`
        };
        
        return modeStyles[this.currentMode] || modeStyles.midnight;
    }
};

// DOM инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Инициализационен код...
});