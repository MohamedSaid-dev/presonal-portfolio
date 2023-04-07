let home_btn = document.getElementById("home_btn");
home_btn.addEventListener('click', function() {
    window.scrollTo(0, 0)
})

let sections = document.querySelectorAll("section");

let links = document.querySelectorAll("#linksCon > li > a");

function active() {
    for (let index = 0; index < sections.length - 1; index++) {
        if (sections[index].offsetTop <= scrollY && sections[index].offsetTop + sections[index].offsetHeight - 50 > scrollY) {
            links[index].classList.add("active");
        } else {
            links[index].classList.remove("active");
        }
    }
}
window.addEventListener('scroll', active);

let hire_btn = document.getElementById("hire");
hire_btn.addEventListener('click', function() {
    window.scrollTo(0, sections[5].offsetTop + 50)
})