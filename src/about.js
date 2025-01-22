const contentDiv = document.getElementById('content');
const AboutUs = document.getElementById("about");
let foods = ["biriyani", "tandoori chicken", "Seek Kabab", "Shahi Paneer", "Palak Paneer", "Chhole Bhature"]

function renderAbout (){
    contentDiv.innerHTML = "";
    const menuDiv = document.createElement("div");

    menuDiv.setAttribute("id", "menu-div");

}

AboutUs.onclick = renderAbout;