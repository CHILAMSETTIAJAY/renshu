document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach(item => {
      const question = item.querySelector(".question");
      const answer = item.querySelector(".answer");
      const plus = item.querySelector(".bi-plus");
      const dash = item.querySelector(".bi-dash");
  
      question.addEventListener("click", function() {
        const isAnswerVisible = answer.classList.contains("show");
        answer.classList.toggle("show");
        answer.style.display = isAnswerVisible ? 'none' : 'block';
        dash.style.display = isAnswerVisible ? 'none' : 'block';
        plus.style.display = isAnswerVisible ? 'block' : 'none';
        cross.style.display = isAnswerVisible ? 'none' : 'block';
      });
    });
  });