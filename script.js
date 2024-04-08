let text = document.getElementById('text');
let copy = document.getElementById('copy');


copy.addEventListener('click',()=>{
    text.select();
    copy.style.backgroundColor='#b3e5fc'
    copy.innerHTML ='copyed'
    navigator.clipboard.writeText(text.value)
    setTimeout(() => {
        copy.style.backgroundColor='#03a9f4'
        copy.innerHTML ='copy';
        text.disable()

    }, 2000);

})