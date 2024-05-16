const sectionProjects = document.getElementById("projects");
const copyBtn = document.getElementById("copyClipboard");

const projectsMakes = [
  {
    name: "E-commerce (building🚫)",
    imagen: "img/Working.jpg",
    code: "https://github.com/j-gabriel-ortiz/CodoACodo-C24261-Grupo13/tree/Gaby",
    repo: "#",
  },
  {
    name: "ToDo List",
    imagen: "img/Lista-de-Tareas.jpg",
    code: "https://github.com/j-gabriel-ortiz/To-Do-List-HTML-CSS-JavaScript",
    repo: "https://j-gabriel-ortiz.github.io/To-Do-List-HTML-CSS-JavaScript/",
  },
  {
    name: "Barcode & QR Generetor",
    imagen: "img/barcode-generetor.jpg",
    code: "https://github.com/j-gabriel-ortiz/Barcode-Generetor-JS-API",
    repo: "https://j-gabriel-ortiz.github.io/Barcode-Generetor-JS-API/",
  },
  {
    name: "Random Joke Generator",
    imagen: "img/Random-Joke-Generator.jpg",
    code: "https://github.com/j-gabriel-ortiz/Random-Joke-Generator-JS-API",
    repo: "https://j-gabriel-ortiz.github.io/Random-Joke-Generator-JS-API/",
  },
  {
    name: "Hangman",
    imagen: "img/Ahorcado.jpg",
    code: "https://github.com/j-gabriel-ortiz/PlayHangman-Python-Tkinter",
    repo: "https://j-gabriel-ortiz.github.io/PlayHangman-Python-Tkinter/",
  },
  {
    name: "Encryptor",
    imagen: "img/Encriptador.jpg",
    code: "https://github.com/j-gabriel-ortiz/Encriptador-HTML5-CSS-JavaScript",
    repo: "https://j-gabriel-ortiz.github.io/Encriptador-HTML5-CSS-JavaScript/",
  },
  {
    name: "Snake Game",
    imagen: "img/Snake-Game.jpg",
    code: "https://github.com/j-gabriel-ortiz/Snake-Game-HTML-CSS-JavaScript",
    repo: "https://j-gabriel-ortiz.github.io/Snake-Game-HTML-CSS-JavaScript/",
  },
  {
    name: "Palindrome",
    imagen: "img/Palindrome.jpg",
    code: "https://github.com/j-gabriel-ortiz/Palindromo-HTML-CSS-JavaScript",
    repo: "https://j-gabriel-ortiz.github.io/Palindromo-HTML-CSS-JavaScript/",
  },
  {
    name: "Roman Numeral Converter",
    imagen: "img/Roman-numeral-converter.jpg",
    code: "https://github.com/j-gabriel-ortiz/Roman-Numeral-Converter-HTML-CSS-JavaScript-Public",
    repo: "https://j-gabriel-ortiz.github.io/Roman-Numeral-Converter-HTML-CSS-JavaScript-Public/",
  },
];

function createCardsElement(project) {
  //Contenedor
  let divProject = document.createElement("div");
  divProject.classList.add("project");

  // Titulo
  let titleProject = document.createElement("h3");
  titleProject.textContent = project.name;

  // Imagen
  let imgProject = document.createElement("img");
  imgProject.src = project.imagen;
  imgProject.alt = "Picture of " + project.name;
  imgProject.classList.add("img-project");

  divProject.appendChild(titleProject);
  divProject.appendChild(imgProject);
  divProject.appendChild(createCardLinks(project));

  return divProject;
}

// Funcion con parametros para crear links
function createLink(href, imgSrc, imgAlt, text) {
  const link = document.createElement("a");
  link.target = "_blank";
  link.href = href;

  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = imgAlt;

  link.appendChild(img);
  link.appendChild(document.createTextNode(text));

  return link;
}

// Funcion para crear el contenedor de links
function createCardLinks(project) {
  const containerLinks = document.createElement("div");
  containerLinks.classList.add("container-link");

  const linkCode = createLink(project.repo, "img/globe-solid.svg", "Globe", "Project");
  const linkGithub = createLink(project.code, "img/github.svg", "Github", "Code");

  containerLinks.appendChild(linkCode);
  containerLinks.appendChild(linkGithub);

  return containerLinks;
}

//Funcion para renderizar proyectos
function showProjects(allProjects) {
  const lengthProjects = allProjects.length;
  for (let i = 0; i < lengthProjects; i++) {
    let item = createCardsElement(allProjects[i]);
    sectionProjects.appendChild(item);
  }
}

showProjects(projectsMakes);

copyBtn.addEventListener("click", () =>
  navigator.clipboard.writeText("ojgabriel.88@gmail.com")
);

