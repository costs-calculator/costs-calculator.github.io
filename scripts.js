function getLanguage() {
    return window.navigator.userLanguage || window.navigator.language;
}

function getTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

function setFooter() {
    footer = document.getElementsByTagName('footer')[0]
    backToHome = document.createElement('a')
    backToHome.textContent = "back"
    backToHome.href = "index.html"
    footer.appendChild(backToHome)
    window.top.document.body.appendChild(footer)
}