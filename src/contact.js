const contentDiv = document.getElementById('content');
const contact = document.getElementById("contact");

function renderContactUs () {
    contentDiv.innerHTML = "";
    const containerDiv = document.createElement("div");
    const contactContainer = document.createElement("div");
    const contactHeader = document.createElement("h1");

    const dfragHeading = ["Address", "Days", "Timings", "Email", "Phone"];
    const dfragPara = ["123 Imaginary Lane Fantasia District Lucknow, Uttar Pradesh PIN: 226001, India", "Monday - Saturday", "8 AM - 11:30 PM", "tuennytuener@gmail.com", "+91 1234567890"] 
    const dFrag = document.createDocumentFragment();

    for (let x in dfragHeading) {
        const paraDiv = document.createElement("div");
        paraDiv.setAttribute("class", "para-div");

        const li = document.createElement("h2");
        li.textContent = dfragHeading[x];
        li.setAttribute("class", "contact-headings");

        const parali = document.createElement("p");
        parali.textContent = dfragPara[x];
        parali.setAttribute("class", "contact-para");

        paraDiv.append(li, parali);
        dFrag.appendChild(paraDiv);
        
        console.log(paraDiv);
    }

    containerDiv.setAttribute("id", "container-div");
    contactContainer.setAttribute("id", "contact-container");
    
    contactContainer.appendChild(dFrag);
    containerDiv.appendChild(contactContainer);
    contentDiv.appendChild(containerDiv);
}

contact.onclick = renderContactUs;