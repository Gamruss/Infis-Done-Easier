document.addEventListener("DOMContentLoaded", function() {
var files = document.getElementsByClassName('files');
for (var i = 0; i < files.length; i++) {
files[i].style.display = 'none';
}
});

function showCategory(category) {
    var files = document.getElementsByClassName('files');
    for (var i = 0; i < files.length; i++) {
        files[i].style.display = 'none';
    }
    document.getElementsByClassName(category)[0].style.display = 'block';
    var categories = document.getElementsByClassName('category');
    for (var i = 0; i < categories.length; i++) {
        categories[i].style.backgroundColor = '#282828';
    }
    document.getElementsByClassName(category)[1].style.backgroundColor = '#580000';
}

var categories = document.getElementsByClassName('category');
for (var i = 0; i < categories.length; i++) {
    categories[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = '#580000';
    });
    categories[i].addEventListener('mouseout', function() {
        this.style.backgroundColor = '#282828';
    });
    categories[i].addEventListener('click', function() {
        this.style.backgroundColor = '#720000';
    });
}