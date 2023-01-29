
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