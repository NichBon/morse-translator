export const toggleDarkMode = () => {
    const body = document.querySelector('body');
    const text = document.querySelector('#darkmode-text')
    console.log(text)
    console.log(body)
    if (body.classList == 'dark') {
        body.classList.remove('dark')
        body.classList.add('light')
        text.textContent = 'Light'
    } else {
        body.classList.remove('light')
        body.classList.add('dark')
        text.textContent = 'Dark'
    }
}