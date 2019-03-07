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

    document.getElementById('article').addEventListener('DOMNodeInserted', function () {
        if (document.getElementById('article').scrollHeight > 500) {
            document.getElementById('article').style.height = "auto";
        } else {
            document.getElementById('article').style.height = "80vh";
        }
    });

    document.getElementById('article').addEventListener('click', function () {
        if (document.getElementById('nav-input').checked === true) {
            document.getElementById('nav-input').checked = false;
        }
    });
})();