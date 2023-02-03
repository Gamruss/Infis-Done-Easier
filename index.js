document.addEventListener("DOMContentLoaded", function() {
var files = document.getElementsByClassName('files');
for (var i = 0; i < files.length; i++) {
files[i].style.display = 'none';
}
});

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

document.querySelector(".FileType1").style.display = "none";

document.querySelector(".file-literatura-text-main-filetype").addEventListener("click", function() {
  var fileType = document.querySelector(".FileType1");
  if (fileType.style.display === "none") {
    fileType.style.display = "block";
  } else {
    fileType.style.display = "none";
  }
});

document.querySelector(".FileType2").style.display = "none";

document.querySelector(".file-literatura-text-second-filetype").addEventListener("click", function() {
  var fileType = document.querySelector(".FileType2");
  if (fileType.style.display === "none") {
    fileType.style.display = "block";
  } else {
    fileType.style.display = "none";
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

