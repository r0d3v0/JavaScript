let session = JSON.parse(localStorage.getItem(`session`)) || [];
//JSON.parse(
console.log(session);

let x = JSON.stringify(session);

console.log(x);

let sessionBlock = document.getElementById(`sessionList`);
session.forEach(sessions  => {
    const sessionElement = document.createElement(`div`)
    sessionElement.classList.add(`session_element`)
    sessionElement.textContent =`Дата та час відвідування: ${sessions.timestamp}`
    sessionBlock.appendChild(sessionElement)
})