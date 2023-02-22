let askedBox = document.querySelectorAll('.asked__box')
let btn = document.querySelectorAll('#btn')
let span = document.querySelectorAll('.span')

askedBox.forEach(el => {
    el.addEventListener('click', () => {
        let span = el.childNodes[5]
        let btn = el.childNodes[3]
        let askedBox = el
        if(span.style.maxHeight == `0px`){
            span.style.maxHeight = span.scrollHeight + `px`
            btn.style.transform = 'rotate(180deg)'
            askedBox.style.background = '#fff'
        }else{
            span.style.maxHeight = 0
            btn.style.transform = 'rotate(0deg)'
            askedBox.style.background = '#FCFAFF'
        }
    })
})