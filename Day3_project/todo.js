const selectStateButs = document.querySelectorAll("#todo_state button");
const todoInput = document.querySelector("#input_put input");
const hardEasyButs = document.querySelectorAll("#input_put button");
const hardEasyList = ["낮음", "보통", "높음", "아주 높음"];
let hardNum;
const addButton = document.getElementById("add_but");
const todoContainer = document.getElementById("todoes_box");

// 완료, 미완료 상태
selectStateButs.forEach((element) => {
  element.addEventListener("click", (a) => {
    selectStateButs.forEach((element) => element.classList.remove("IsSelect"));
    a.target.classList.add("IsSelect");

    const todoList = document.querySelectorAll("#todoes_box div");
    if (a.target.innerText == "완료") {
      todoList.forEach((element) => {
        if (!element.children[0].checked) {
          element.style = "display:none";
        } else {
          element.style = "display:block";
        }
      });
    } else if (a.target.innerText == "미완료") {
      todoList.forEach((element) => {
        if (element.children[0].checked) {
          element.style = "display:none";
        } else {
          element.style = "display:block";
        }
      });
    } else {
      todoList.forEach((element) => {
        element.style = "display:block";
      });
    }
  });
});

// 난이도 버튼
hardEasyButs.forEach((element) => {
  if (element.id !== "add_but") {
    element.addEventListener("click", (a) => {
      hardEasyButs.forEach((element) => element.classList.remove("IsSelect"));
      a.target.classList.add("IsSelect");
      hardNum = a.target.value;
    });
  }
});

// todo list 추가 버튼
addButton.addEventListener("click", () => {
  if (todoInput.value == "") {
    alert("할 일을 입력해주세요.");
    return;
  }
  if (hardNum == undefined) {
    alert("난이도를 선택해주세요.");
    return;
  }
  const div = document.createElement("div");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  div.appendChild(checkbox);

  const span = document.createElement("span");
  span.innerText = todoInput.value;
  todoInput.value = "";

  div.appendChild(span);

  const button = document.createElement("span");
  button.innerText = " [ "+hardEasyList[Number(hardNum)]+" ]";
  switch (Number(hardNum)) {
    case 0:
      button.classList.add("blue-text");
      break;
    case 1:
      button.classList.add("yellow-text");
      break;
    case 2:
      button.classList.add("orange-text");
      break;
    case 3:
      button.classList.add("red-text");
      break;
    default:
      break;
  }
  button.value = Number(hardNum);
  hardNum = null;
  hardEasyButs.forEach((element) => element.classList.remove("IsSelect"));

  div.appendChild(button);
  //todoes_box.appendChild(div);
  
  //삭제 버튼
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "삭제";
  deleteButton.addEventListener("click", () => {
    todoes_box.removeChild(div);
  });
  div.appendChild(deleteButton);

  todoes_box.appendChild(div);

  // 수정 버튼 추가
  const editButton = document.createElement("button");
  editButton.innerText = "수정";
  editButton.addEventListener("click", () => {
    span.contentEditable = true;
    span.focus();
    span.addEventListener("blur", () => {
      span.contentEditable = false;
    });
  });
  div.appendChild(editButton);

  todoes_box.appendChild(div);
});

function remove() {

}