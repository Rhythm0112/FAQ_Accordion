
const faq = document.querySelectorAll('.faq');

faq.forEach(item =>{
  let question = item.querySelector('.title');
  let answer = item.querySelector('.hidden');
  let title = item.querySelector('h3');
  console.log(title);
  question.addEventListener('click', ()=>{
    answer.classList.toggle('show');
    title.classList.toggle('bold-title');
  })
})
