(function nav () {
    document.getElementById('header').addEventListener('click', function () {
        if (document.getElementById('nav-input').checked === true) {
            document.getElementById('nav-input').checked = false;
        }
    });

    document.getElementById('footer').addEventListener('click', function () {
        if (document.getElementById('nav-input').checked === true) {
            document.getElementById('nav-input').checked = false;
        }
    });

    document.getElementById('article').addEventListener('click', function () {
        if (document.getElementById('nav-input').checked === true) {
            document.getElementById('nav-input').checked = false;
        }
    });
})();