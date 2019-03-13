(function closeNav () {
    document.addEventListener('click', function () {
        if (event.target !== document.getElementById('nav-input') && event.target !== document.getElementById('nav-menu') &&
             document.getElementById('nav-input').checked === true) {
            document.getElementById('nav-input').checked = false;
        };
    });
})();