let btn = document.querySelectorAll('.question-container')

btn.forEach(e => {
    e.addEventListener('click' , () =>{
        for(let bt of btn){
            if(e.parentElement.classList == 'faq-container active-faq'){
                continue
            }
            else{
                bt.parentElement.classList.remove('active-faq')
                bt.children[0].classList.remove('active-q')
                bt.children[1].classList.remove('active-btn')
            }
        }
        e.parentElement.classList.toggle('active-faq')
        e.children[0].classList.toggle('active-q')
        e.children[1].classList.toggle('active-btn')
        
    })   
});