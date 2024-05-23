document.addEventListener('DOMContentLoaded', () => {
    /* DOMContentLoaded : 문서의 DOM 트리가 완전히 로드되고 파싱이 끝났을 때 실행할 코드를 정의
        -> 안전하게 DOM 조작을 할 수 있다. (스크립트가 DOM 요소를 찾지 못하는 문제를 피할 수 있다.)
        -> 빠르게 실행할 수 있다.
    */
    //HTML 요소들 변수에 저장
    const calendarDates = document.getElementById('calendarDates');
    const monthYear = document.getElementById('monthYear');
    const prevMonth = document.getElementById('prevMonth');
    const nextMonth = document.getElementById('nextMonth');
    const noteContainer = document.getElementById('noteContainer');
    const noteText = document.getElementById('noteText');
    const saveNote = document.getElementById('saveNote');
    
    //currentDate : 현재 날짜를 저장하는 변수
    //notes : 메모 저장하는 객체 (초기화)
    let currentDate = new Date();
    let notes = {};

    //달력 랜더링
    function renderCalendar(date) {
        const year = date.getFullYear(); //해당 년도
        const month = date.getMonth(); //해당 월
        const firstDay = new Date(year, month, 1).getDay(); //첫번째 날의 요일 반환
        const lastDate = new Date(year, month + 1, 0).getDate(); //해당 월의 마지막 날(=다음달의 0번째 날)
        
        // monthNames : 월 이름을 배열
        const monthNames = ["January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"];

        // 연도와 월을 표시
        monthYear.textContent = `${year} ${monthNames[month]}`;
        // 이전 날짜들 삭제
        calendarDates.innerHTML = '';
        
        //해당 월의 1일 이전 칸들 빈칸 만들기
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div'); //div 생성
            calendarDates.appendChild(emptyCell); //calendarDates 내부 삽입
        }

        //날짜 채우기
        for (let i = 1; i <= lastDate; i++) {
            const dateCell = document.createElement('div'); //div 생성
            dateCell.textContent = i; //숫자 1 ~ 마지막 날
            // 메모 객체 존재하면 표시
            if (notes[`${year}-${month + 1}-${i}`]) {
                dateCell.classList.add('has-note');
            }
            //날짜 div 클릭시 메모장이 열린다.' (해당 날짜, 연, 월)
            dateCell.addEventListener('click', () => {
                openNotePad(year, month + 1, i);
            });
            calendarDates.appendChild(dateCell);
        }
    }

    //메모장 함수
    function openNotePad(year, month, day) {
        //나타남
        noteContainer.classList.remove('hidden');
        const key = `${year}-${month}-${day}`;
        noteText.value = notes[key] || '';

        //저장 버튼 누리면 반영되고 사라짐
        saveNote.onclick = () => {
            notes[key] = noteText.value;
            renderCalendar(currentDate);
            noteContainer.classList.add('hidden');
        };
    }

    //이전달로 이동
    prevMonth.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    //다음달로 이동
    nextMonth.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    //달력 랜더랑
    renderCalendar(currentDate);
});
