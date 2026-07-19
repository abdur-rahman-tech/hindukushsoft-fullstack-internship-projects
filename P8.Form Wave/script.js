const label = document.querySelectorAll('.form-control label')
lavel.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `span style="transition-delay:&{idz * 50}ms">${letter} </span>`)
    .join('')
})
