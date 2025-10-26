document.addEventListener("DOMContentLoaded", (e)=> {
    setTimeout(() => {
        document.querySelectorAll(".skeleton").forEach((item) => {
            item.classList.remove("skeleton");
        });
    }, 1000); // Wait 500ms before removing skeleton
})

const svgImgBar = document.querySelector(".svgImg")
const svgImgCross = document.querySelector(".svgImgCross")
const sidebar = document.querySelector(".sidebar")
const toggleSwitch = document.querySelector("#darkmode-toggle");
const liItems = document.querySelectorAll(".sidebar li")
const body = document.body;


// Check for saved user data in localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggleSwitch.checked = true;
}

// Toggle theme on checkbox change
toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
        body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
});

function showSideBar(e) {
    e.preventDefault();
    sidebar.style.display = "flex"
    setTimeout(() => {
        sidebar.classList.add("active"); // Apply transition after making it visible
    }, 10);
}
function hideSideBar(e) {
    e.preventDefault();
    sidebar.classList.remove("active"); // Apply transition after making it visible
    setTimeout(() => {
        sidebar.style.display = "none"
    }, 250);
}

if (svgImgBar) svgImgBar.addEventListener("click", showSideBar);
liItems.forEach((sidebarLi) => {
    sidebarLi.addEventListener("click", (e) => {
        sidebar.classList.remove("active"); // Apply transition after making it visible
        setTimeout(() => {
            sidebar.style.display = "none"
        }, 250);
    })
})
if (svgImgCross) svgImgCross.addEventListener("click", hideSideBar);