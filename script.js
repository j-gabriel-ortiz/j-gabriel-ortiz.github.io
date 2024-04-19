const sectionProjects = document.getElementById('projects');
const copyBtn = document.getElementById('copyClipboard');

const projectsMakes = [
  { name: 'E-commerce (building🚫)',
  imagen: 'img/Working.jpg',
  code: 'https://github.com/j-gabriel-ortiz/CodoACodo-C24261-Grupo13/tree/Gaby',
  repo: '#' },
  { name: 'ToDo List',
  imagen: 'img/Lista-de-Tareas.jpg',
  code: 'https://github.com/j-gabriel-ortiz/To-Do-List-HTML-CSS-JavaScript',
  repo: 'https://j-gabriel-ortiz.github.io/To-Do-List-HTML-CSS-JavaScript/' },
  { name: 'Hangman',
  imagen: 'img/Ahorcado.jpg',
  code: 'https://github.com/j-gabriel-ortiz/PlayHangman-Pyton-Tkinter',
  repo: 'https://j-gabriel-ortiz.github.io/PlayHangman-Pyton-Tkinter/'},
  { name: 'Encryptor',
  imagen: 'img/Encriptador.jpg',
  code: 'https://github.com/j-gabriel-ortiz/Encriptador-HTML5-CSS-JavaScript',
  repo: 'https://j-gabriel-ortiz.github.io/Encriptador-HTML5-CSS-JavaScript/' },
  { name: 'Snake Game',
  imagen: 'img/Snake-Game.jpg',
  code: 'https://github.com/j-gabriel-ortiz/Snake-Game-HTML-CSS-JavaScript',
  repo: 'https://j-gabriel-ortiz.github.io/Snake-Game-HTML-CSS-JavaScript/' }
];


function showProjects () {
    projectsMakes.forEach(project => {
        let divProject = document.createElement('div');
        divProject.classList.add('project');
        divProject.innerHTML = `
            <h3>${project.name}</h3>
            <img class='img-project' src='${project.imagen}' alt='${project.name}'>
            <div class='container-link'>
                <a href='${project.repo}' target="_blank"><img src='img/globe-solid.svg' alt='World icon'>Project</a>
                <a href='${project.code}' target="_blank"><img src='img/github.svg' alt='Git Hub icon'>Code</a>
            </div>
        `
        sectionProjects.append(divProject)
    })

};

copyBtn.addEventListener('click', () => navigator.clipboard.writeText('ojgabriel.88@gmail.com'));

showProjects();
