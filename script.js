// Romantic Birthday JS
// Generate Floating Balloons for (let i = 0; i < 12; i++) { let b = document.createElement('div'); b.className = 'balloon'; b.style.left = Math.random() * 100 + 'vw'; b.style.animationDelay = Math.random() * 5 + 's'; b.style.transform = scale(${Math.random() * 0.6 + 0.7}); document.body.appendChild(b); }
// Set Name Function function setName() { const nameValue = document.getElementById('nameInput').value; if (nameValue.trim() !== "") { document.getElementById('name').innerText = nameValue; } }
// Blow Candle Manually function blowCandle() { const flame = document.getElementById('flame'); flame.style.display = 'none'; launchConfetti(); }
// Confetti Effect function launchConfetti() { for (let i = 0; i < 80; i++) { let c = document.createElement('div'); c.className = 'confetti'; c.style.left = Math.random() * 100 + 'vw'; c.style.background = hsl(${Math.random() * 360}, 100%, 70%); c.style.animationDuration = (Math.random() * 2 + 2) + 's'; document.body.appendChild(c); setTimeout(() => c.remove(), 3000); } }
// Blow Sensor (Microphone Detection) navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => { let audioContext = new AudioContext(); let mic = audioContext.createMediaStreamSource(stream); let analyser = audioContext.createAnalyser(); analyser.fftSize = 256; mic.connect(analyser);
let data = new Uint8Array(analyser.frequencyBinCount);
function detectBlow() { analyser.getByteFrequencyData(data); let volume = data.reduce((a, b) => a + b) / data.length;
if (volume > 70) { // Blow threshold const flame = document.getElementById('flame'); if (flame.style.display !== 'none') { flame.style.display = 'none'; launchConfetti(); } } requestAnimationFrame(detectBlow); 
} detectBlow(); });
