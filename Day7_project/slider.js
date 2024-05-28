
    let now = 1;
    const buttons = document.querySelectorAll('.button_con .but');
    
    function moveContainer(vw) {
        document.querySelector('.container').style.transform = `translate(${vw}vw)`;
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            moveContainer(-100 * (index));
            now = index+1;
            //console.log(now);
        });
    });
    
    
    const img_num = buttons.length+1;


function rightClick() {
    if (now < img_num-1) {
        document.querySelector('.container').style.transform = `translateX(-${now * 100}vw)`;
        now += 1;
    }
    else if (now == img_num-1) {
        document.querySelector('.container').style.transform = `translateX(0vw)`;
        now = 1;
    }
}

document.querySelector('.right_img').addEventListener('click', rightClick);

function leftClick() {
    if (now > 1) {
        now -= 1;
        document.querySelector('.container').style.transform = `translateX(-${(now-1) * 100}vw)`;
    }
    else if (now == 1) {
        now = img_num - 1; 
        document.querySelector('.container').style.transform = `translateX(-${(now-1) * 100}vw)`;
    }
}

document.querySelector('.left_img').addEventListener('click', leftClick);

setInterval(rightClick, 2000);

