let body = document.querySelector('body')
let main = document.querySelector('.block')
main.style.top = '0'
let imgAll = ['1.jpg', '5.jpg', '6.jpg', '7.jpg']
let heightEl = document.scrollingElement.clientHeight / 150;
main.style.width = `${document.scrollingElement.clientWidth}px`;
main.style.height = `${document.scrollingElement.clientHeight}px`;




function createImgRain() {
    let rand = Math.floor(Math.random() * 4)
    let widthEl = document.scrollingElement.clientWidth;
    let img = document.createElement('img');
    img.className = 'lol'
    img.src = `imgs/${imgAll[rand]}`;
    img.style.top = '-100px'
    img.style.left = (widthEl * Math.random() - 100) + 'px';
    body.appendChild(img)
    setTimeout(() => {
        img.remove()
    }, 5000)
}


function down() {
    let imgs = [...document.querySelectorAll('img')];
    imgs.forEach(item => {
        item.style.top = `${parseInt(item.style.top) + heightEl / 2}px` || '0';
    })
    main.style.top = `${parseInt(main.style.top) + heightEl}px` || '0';

}

///createImgRain()

//setInterval(createImgRain, 100)
//setInterval(down, 10)

