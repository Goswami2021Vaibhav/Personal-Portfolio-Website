const toggleMenu = document.querySelector('.toggle-menu')
const navigation = document.querySelector('.sticky-navigation')

toggleMenu.addEventListener('click', () => {
    navigation.classList.toggle('show')
})

document.addEventListener('click', (e) => {
    if (!navigation.contains(e.target) && !toggleMenu.contains(e.target)) {
        navigation.classList.remove('show')
    }
})