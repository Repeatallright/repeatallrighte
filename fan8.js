const allSlider = [
    slider1 = {
        background: '1.png'
    },
    slider2 = {
        background: '2.png'
    },
    slider3 = {
        background: '3.png'
    },
    slider4 = {
        background: '4.png'
    },
    slider5 = {
        background: '5.png'
    },
    slider6 = {
        background: '6.png'
    },
    slider7 = {
        background: '7.png'
    },
    slider8 = {
        background: '8.png'
    },
    slider9 = {
        background: '9.png'
    },
    slider10 = {
        background: '10.png'
    },
    slider11 = {
        background: '11.png'
    },
    slider12 = {
        background: '12.png'
    },
    slider13 = {
        background: '13.png'
    },
    slider14 = {
        background: '14.png'
    },
    slider15 = {
        background: '15.png'
    }
]

let block = document.querySelector('.slider');
let entry = 0;


let leftBut = document.querySelector('.leftBut');
let rightBut = document.querySelector('.rightBut');
let first = false;
let inputEl = document.querySelector('.easterEgg')
inputEl.addEventListener('change', () => {
    if (inputEl.value == 'let') {
        createImgRain()
        setInterval(createImgRain, 30)
        setInterval(down, 5)
    }
})


class Slider {
    constructor(slide) {
        this.slide = slide
    }
    create(side) {
        let widthEl = document.scrollingElement.clientWidth;
        let sl = parseInt(block.style.transform.slice(11)) + widthEl || widthEl
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.className = 'slideImg'
        div.style.width = `${widthEl}px`;
        img.style.height = `${document.scrollingElement.clientHeight}px`;
        div.className = 'slide';
        img.src = `img/${this.slide.background}`;

        div.appendChild(img)
        first = true
        side == 'right' ? block.appendChild(div) : block.prepend(div);
        if (side == 'right') block.style.transform = `translate(-${sl}px)`;
        if (side == 'left') {
            block.style.transition = `0s`;
            block.style.transform = `translate(-${sl}px)`;
            setTimeout(() => {
                block.style.transition = `.5s`;
                block.style.transform = `translate(-${sl - widthEl}px)`;
            }, 0)

        }

    }

}
function check() {
    if (entry == -1) entry = allSlider.length - 1;
    if (entry == allSlider.length) entry = 0;
}

let slide = new Slider(allSlider[entry]);
slide.create();

leftBut.addEventListener('click', () => {
    entry -= 1
    check();
    let slide = new Slider(allSlider[entry]);
    slide.create('left');
})

rightBut.addEventListener('click', () => {
    entry += 1;
    check();
    let slide = new Slider(allSlider[entry]);
    slide.create('right');
})
console.log('Выступал Левченко С.');