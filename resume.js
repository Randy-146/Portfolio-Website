const showresume = document.getElementById("showresume")

const closeresume = document.getElementById("closeresume")

const resume = document.getElementById("resume")

showresume.addEventListener("click", function() {
resume.style.display = 'inline-block'
});

closeresume.addEventListener("click", function() {
resume.style.display = 'none'
});