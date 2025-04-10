const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https.//developer.mozilla.org";

const sec = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride!";
sec.appendChild(para);

const text = document.createTextNode(
    "- the premier source for web development knowledge.",
);
const linkPara = document.querySelector("p");
linkPara.append(text);

// Moving Elements & Removing Elements
sec.appendChild(linkPara);
// sec.removeChild(linkPara); OR to remove a node only by the reference to itself:
// linkPara.remove()

// Manipulating Styles --------
// inline
// para.style.color = "white";
// para.style.backgroundColor = "black";
// para.style.padding = "10px";
// para.style.width = "250px";
// para.style.textAlign = "center";

// Reference css style with setAttribute()
para.setAttribute("class", "highlight");