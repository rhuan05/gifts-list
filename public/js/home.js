let back = document.querySelector('.back');
let giftBtn = document.querySelectorAll('.giftBtn');
let seeMoreBtn = document.querySelector('.seeMoreBtn');
let reserveBtn = document.querySelector('.reserveBtn');
let close = document.querySelector('.close');
var thisProduct = 'opa';

giftBtn.forEach(e => {
    e.addEventListener('click', () => {
        document.querySelector('.model').style.display = 'block';
        thisProduct = e.parentNode.childNodes[3];
        document.querySelector('.productNameParagrath').innerHTML = `Produto: <strong class="productNameStrong">${thisProduct.innerHTML}</strong>`;
        console.log(thisProduct);
    });
});

back.addEventListener('click', () => {
    document.querySelector('.model').style.display = 'none';
});

seeMoreBtn.addEventListener('click', () => {
    document.querySelector('.main__seeMore').style.height = '100%';
    seeMoreBtn.style.display = 'none';
});

reserveBtn.addEventListener('click', e => {
    document.querySelector('.model').style.display = 'none';
    document.querySelector('.model_end').style.display = 'block';
});

close.addEventListener('click', () => {
    document.querySelector('.model_end').style.display = 'none';
});