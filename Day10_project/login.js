const loginForm = document.getElementById("login_form");
const loginButton = document.getElementById("login_submit");
const errorMsg = document.getElementById("error_msg_box");

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "jiwon" && password === "1234") {
        alert("로그인 성공하였습니다.");
        location.reload();
    } else {
        errorMsg.style.display="inline";
    }
});
