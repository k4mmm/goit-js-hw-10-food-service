const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toggleBtn = document.querySelector('#theme-switch-toggle')

function checkStorage() {
    if (localStorage.getItem('checkbox') === 'true') {
        document.body.classList.add(localStorage.getItem('theme'))
        toggleBtn.checked = localStorage.getItem('checkbox')
    }
}

checkStorage()

toggleBtn.addEventListener('change', changeTheme);

function changeTheme() {
    if (toggleBtn.checked) {
        document.body.classList.remove(`${Theme.LIGHT}`);
        document.body.classList.add(`${Theme.DARK}`);
        localStorage.setItem('theme', Theme.DARK)
        localStorage.setItem('checkbox', true)
    } else if (!toggleBtn.checked) {
        document.body.classList.add(`${Theme.LIGHT}`);
        document.body.classList.remove(`${Theme.DARK}`);
        localStorage.setItem('theme', Theme.LIGHT)
        localStorage.setItem('checkbox', false)
    }
}


