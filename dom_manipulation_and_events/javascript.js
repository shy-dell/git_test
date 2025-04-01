const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";


const para = document.createElement("p");
para.classList.add("para");
para.textContent = "Hey I'm red!";
para.style.color = "red";

const headerThree = document.createElement("h3");
headerThree.classList.add("headerThree");
headerThree.textContent = "I'm a blue h3!"
headerThree.style.color = "blue";

const subcontent = document.createElement("div");
subcontent.classList.add("subcontent");

const headerOne = document.createElement("h1");
headerOne.classList.add("headerOne");
headerOne.textContent = "I'm in a div";

const paraTwo = document.createElement("p");
paraTwo.classList.add("paraTwo");
paraTwo.textContent = "ME TOO!";

subcontent.append(headerOne, paraTwo);
container.append(content, para, headerThree, subcontent);

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });  