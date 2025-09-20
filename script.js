const tg = window.Telegram.WebApp

console.log(tg.colorScheme)

const body = document.querySelector("body")

body.classList.add(tg.colorScheme)