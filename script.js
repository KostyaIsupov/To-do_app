const tg = window.Telegram.WebApp

console.log(tg.ColorScheme)

const body = document.querySelector("body")

body.classList.add(tg.ColorScheme)