
let now = 1;
const buttons = document.querySelectorAll('.button_con .but');

function moveContainer(px) {
    document.querySelector('.container').style.transform = `translate(${px}px)`;
}

buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
        moveContainer(-330 * (index));
        now = index+1;
        //console.log(now);
    });
});


const img_num = buttons.length+1;


function rightClick() {
if (now < img_num-1) {
    document.querySelector('.container').style.transform = `translateX(-${now * 330}px)`;
    now += 1;
}
else if (now == img_num-1) {
    document.querySelector('.container').style.transform = `translateX(0px)`;
    now = 1;
}
}

document.querySelector('.right_img').addEventListener('click', rightClick);

function leftClick() {
if (now > 1) {
    now -= 1;
    document.querySelector('.container').style.transform = `translateX(-${(now-1) * 330}px)`;
}
else if (now == 1) {
    now = img_num - 1; 
    document.querySelector('.container').style.transform = `translateX(-${(now-1) * 330}px)`;
}
}

document.querySelector('.left_img').addEventListener('click', leftClick);

setInterval(rightClick, 2000);
