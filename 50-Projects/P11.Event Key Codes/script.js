const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
    <div class="key">
    ${event.key === ' ' ? "Space" : event.key}
    <small>You Enter</small>
    </div>

    <div class="key">
    ${event.keyCode}
    <small>Event KeyCode is</small>
    </div>

    <div class="key">
    ${event.code}
    <small>Event Code</small>
    </div>
    `
})