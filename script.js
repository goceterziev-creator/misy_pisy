:root {
    --midnight: #0a0a0a;
    --velvet: #1a1a1a;
    --gold: #d4af37;
    --soft-gold: #f4e4a6;
    --success: #2ecc71;
}

body {
    background: linear-gradient(135deg, var(--midnight) 0%, var(--velvet) 100%);
    color: #f0e6d2;
    font-family: 'Raleway', sans-serif;
    margin: 0;
    padding: 20px;
    min-height: 100vh;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 300px 1fr 300px;
    gap: 30px;
}

.misy-avatar {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 3px solid var(--gold);
    filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.3));
    animation: gentleBreath 4s infinite ease-in-out;
}

@keyframes gentleBreath {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.avatar-glow {
    position: absolute;
    width: 270px;
    height: 270px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%);
    animation: pulse 3s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 0.8; }
}

.chat-container {
    background: rgba(26, 26, 26, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 30px;
    border: 1px solid rgba(212, 175, 55, 0.2);
}

.chat-messages {
    height: 400px;
    overflow-y: auto;
    margin: 20px 0;
    padding: 20px;
    background: rgba(10, 10, 10, 0.5);
    border-radius: 10px;
}

.pricing-card.featured {
    border: 2px solid var(--gold);
    transform: scale(1.05);
}

.cta-btn.primary {
    background: linear-gradient(135deg, var(--gold) 0%, #b8941f 100%);
    color: var(--midnight);
    font-weight: bold;
    padding: 15px 30px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s;
}

.cta-btn.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
}

/* Добави това в края на style.css файла */
.fanvue-btn {
    display: inline-block;
    background: linear-gradient(135deg, #d4af37 0%, #b8941f 100%);
    color: #0a0a0a;
    padding: 15px 40px;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    border-radius: 10px;
    transition: all 0.3s;
    box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
    margin: 20px 0;
}

.fanvue-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(212, 175, 55, 0.5);
}

.fanvue-section {
    text-align: center;
    margin: 40px 0;
    padding: 30px;
    background: rgba(26, 26, 26, 0.8);
    border-radius: 15px;
    border: 1px solid #d4af37;
}

@media (max-width: 1024px) {
    .container {
        grid-template-columns: 1fr;
    }
}
