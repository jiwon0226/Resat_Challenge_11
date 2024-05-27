
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
    
    
    const img_num = buttons.length+1; // 실제로 이동할 수 있는 최대 횟수

    document.querySelector('.right_img').addEventListener('click', function() {
        //console.log(now+"오 전에위치");
        //console.log(img_num+"오");
        if (now < img_num-1) { // 'now'가 'img_num'보다 작은 경우에만 이동
            document.querySelector('.container').style.transform = `translateX(-${now * 100}vw)`;
            now += 1; // 이동 후 'now' 증가
            //console.log(now+"오 현재위치");
        }

    });

    document.querySelector('.left_img').addEventListener('click', function() {
        //console.log(now+"왼 전에위치");
        //console.log(img_num+"왼");
        if (now > 1) { // 'now'가 1보다 클 경우에만 이동 가능
            now -= 1;// 먼저 'now' 감소
            document.querySelector('.container').style.transform = `translateX(-${(now-1) * 100}vw)`;
            //console.log(now+"왼 지금위치");
        }
        
        
    });
