
function changeTheme(){
    const themeStyle = document.getElementById('theme-style');
    if (themeStyle.getAttribute('href') === 'css/waterLight.css') {
        themeStyle.setAttribute('href', 'css/waterDark.css');
        document.getElementById('theme-toggle').textContent = '☀️';
        setTheme("dark");
    }else {
        themeStyle.setAttribute('href', 'css/waterLight.css');
        document.getElementById('theme-toggle').textContent = '🌙';
        setTheme("light");
    }
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function initTheme() {
    var theme = localStorage.getItem('theme');
    if (theme == "dark"){
        changeTheme();
    }
}

