let timer_secs = 0;
let running = false;
let hours = 0;
let seconds = 0;
let minutes = 0;

function resetTimes() {
	hours = 0;
	seconds = 0;
	minutes = 0;
}

function updateDisplay() {
	document.getElementById('timeDisplay').textContent =
        `${String(hours).padStart(2, '0')}:
        ${String(minutes).padStart(2, '0')}:
        ${String(seconds).padStart(2, '0')}`;
}

function getTime(){
    hours = parseInt(document.getElementById('hours').value) || 0;
    minutes = parseInt(document.getElementById('minutes').value) || 0;
    seconds = parseInt(document.getElementById('seconds').value) || 0;
}

function start() {
	if (running) return;
	running = true;
	timer_secs = setInterval(()=>{
		if (hours >= 0) //남은 시간이 0보다 작으면 종료
		{
			seconds--; //초가 1씩 줄어든다.
			if(seconds < 0) //남은 초가 0보다 작으면
			{
				seconds = 59; //초 59로 초기화
				minutes--; //분 1감소
				if(minutes < 0)//남은 분이 0보다 작아짐
				{
					minutes = 59; //분 59로 초기화
					hours--; //시간 1감소
				}
			}
			updateDisplay();
		}
		else {
			stop(); //시간이 0보다 작아지면 실행 종료
		}
		
	}, 1000);
}

function stop() {
    running = false;
    clearInterval(timer_secs);
}

function reset() {
    stop();
    resetTimes();
    updateDisplay();
}

function checkTime() {
	getTime();
    running = false;
	const inputs = [
		{ value: hours, id: 'hours', message: "시간이 잘못 입력되어 0으로 초기화 됩니다.", range: [0, Infinity] },
		{ value: minutes, id: 'minutes', message: "분이 잘못 입력되어 0으로 초기화 됩니다.", range: [0, 59] },
		{ value: seconds, id: 'seconds', message: "초가 잘못 입력되어 0으로 초기화 됩니다.", range: [0, 59] }
	];

	for (const input of inputs) {
		if (input.value < input.range[0] || input.value > input.range[1]) {
			alert(input.message);
			document.getElementById(input.id).value = 0;
			input.value = 0;
            running = true;
		}
	}
	hours = inputs[0].value;
	minutes = inputs[1].value;
	seconds = inputs[2].value;
}

document.getElementById('start').addEventListener('click', () => {

    checkTime();

    updateDisplay();
    if (!running) start();
});

document.getElementById('stop').addEventListener('click', stop);
document.getElementById('reset').addEventListener('click', reset);
