// ===== Contadores animados =====
function animateNum(id, end){
  const el = document.getElementById(id);
  let current = 0;
  const step = Math.ceil(end/30);
  const interval = setInterval(()=>{
    current += step;
    if(current >= end){ current = end; clearInterval(interval); }
    el.textContent = current + '%';
  },18);
}
animateNum('c1',36);
animateNum('c2',34);
animateNum('c3',32);
animateNum('c4',95);

// ===== Interacción del deslizador =====
const hours = document.getElementById('hours');
const hoursLabel = document.getElementById('hoursLabel');
const riskTitle = document.getElementById('riskTitle');
const riskText = document.getElementById('riskText');

function updateRisk(h){
  hoursLabel.textContent = h;
  if(h <= 2){
    riskTitle.textContent = 'Riesgo Bajo';
    riskText.textContent = 'Mantienes hábitos saludables. Sigue así y fijá tiempos claros.';
  } else if(h <= 5){
    riskTitle.textContent = 'Riesgo Moderado';
    riskText.textContent = 'Podés estar empezando a depender: revisá notificaciones y horarios.';
  } else if(h <= 8){
    riskTitle.textContent = 'Riesgo Alto';
    riskText.textContent = 'Es probable que el uso afecte sueño y atención. Probá estrategias de control.';
  } else {
    riskTitle.textContent = 'Riesgo Muy Alto';
    riskText.textContent = 'Peligro de impacto significativo en salud y rendimiento. Pedí ayuda y reducí el uso.';
  }
}
updateRisk(Number(hours.value));
hours.addEventListener('input', e => updateRisk(Number(e.target.value)));

// ===== Mini-quiz =====
document.querySelectorAll('.option').forEach(btn => {
  btn.addEventListener('click', () => {
    const correct = btn.dataset.correct === 'true';
    const res = document.getElementById('quizResult');
    if(correct){
      res.textContent = '¡Correcto! Es un disparador — un estímulo que provoca la acción de revisar.';
      res.style.color = 'var(--success)';
    } else {
      res.textContent = 'No exactamente. Esa opción no es el ejemplo principal. Pensá en qué inició la acción.';
      res.style.color = 'var(--danger)';
    }
  });
});

// ===== Smooth scroll para anclas =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});