const quotes = [
  "Believe in yourself and keep moving forward.",
  "Success begins with a single step.",
  "Dream big, work hard, stay humble.",
  "Every day is a new opportunity.",
  "Small progress is still progress.",
  "Never give up on your dreams.",
  "Your future depends on what you do today.",
  "Difficult roads often lead to beautiful destinations.",
  "Stay patient and trust the process.",
  "Failure is simply another step toward success.",
  "Focus on progress, not perfection.",
  "Your only limit is your mind.",
  "Work hard in silence, let success speak.",
  "Great things take time and dedication.",
  "Be stronger than your excuses.",
  "Learn from yesterday and build tomorrow.",
  "Consistency turns ordinary efforts into extraordinary results.",
  "Believe you can, and you are halfway there.",
  "Success comes to those who never stop learning.",
  "Make today count and tomorrow better."
];

const button = document.querySelector("#button")
const quote = document.querySelector("#first");

button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*20);
    quote.textContent = quotes[index];
})
