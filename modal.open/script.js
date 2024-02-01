document.getElementById("toggleButton").addEventListener("click", function () {
    toggleSideBar();
});

document.getElementById("closeButton").addEventListener("click", function () {
    toggleSideBar();
});

document.getElementById("overlay").addEventListener("click", function () {
    toggleSideBar();
});

function toggleSideBar() {
    let sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("overlay");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        overlay.style.display = "none";
    } else {
        sidebar.style.width = "250px";
        overlay.style.display = "block";
    }
}

let openModalBtn = document.getElementById("openModal");
let modal = document.getElementById("myModal");
let closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});