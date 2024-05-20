let back = document.querySelector('.back');
let giftBtn = document.querySelectorAll('.giftBtn');
let seeMoreBtn = document.querySelector('.seeMoreBtn');
let reserveBtn = document.querySelector('.reserveBtn');
let close = document.querySelector('.close');

giftBtn.forEach(e => {
    e.addEventListener('click', () => {
        document.querySelector('.model').style.display = 'block';
        thisProduct = e.parentNode.childNodes[3].innerText;
        document.querySelector('#currentProduct').innerText = thisProduct;
        document.querySelector('.container').style.opacity = '.5';
        document.querySelector('img').style.opacity = '.5';
        document.querySelector('button:not(.reserveBtn)').style.opacity = '.5';
    });
});

back.addEventListener('click', () => {
    document.querySelector('.model').style.display = 'none';
    document.querySelector('.container').style.opacity = '1';
    document.querySelector('img').style.opacity = '1';
    document.querySelector('button:not(.reserveBtn)').style.opacity = '1';
});

seeMoreBtn.addEventListener('click', () => {
    document.querySelector('.main__seeMore').style.height = '100%';
    seeMoreBtn.style.display = 'none';
});

reserveBtn.addEventListener('click', e => {
    document.querySelector('#produtoSelecionado').value = document.querySelector('#currentProduct').innerText
    document.querySelector('.model').style.display = 'none';
});

close.addEventListener('click', () => {
    document.querySelector('.container').style.opacity = '1';
    document.querySelector('img').style.opacity = '1';
    document.querySelector('button:not(.reserveBtn)').style.opacity = '1';
    document.querySelector('.model_end').style.display = 'none';
});