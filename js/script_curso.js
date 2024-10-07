document.addEventListener('DOMContentLoaded', () => {
    const cursos = document.querySelectorAll('.curso');
    const cursosLin = document.querySelectorAll('.curso_lin');
    const proyectoTitulo = document.querySelector('.proyecto_titulo');
    const proyectoDescripcion = document.querySelector('.proyecto_descripcion');
    const projectImage = document.querySelector('.project-image');
    const leftArrow = document.querySelector('.nav-arrow-left');
    const rightArrow = document.querySelector('.nav-arrow-right');

    const proyectoData = {
        0: [
            {
                titulo: "PROYECTO TITULO - 1°1 - A",
                descripcion: "Información del proyecto 1°1 - A. Este es un proyecto innovador que combina tecnología y diseño para crear soluciones únicas.",
            },
            {
                titulo: "PROYECTO TITULO - 1°1 - B",
                descripcion: "Información del proyecto 1°1 - B. Exploramos nuevas fronteras en el desarrollo de software y la experiencia del usuario.",
            }
        ],
        1: [
            {
                titulo: "PROYECTO TITULO - 1°2 - A",
                descripcion: "Información del proyecto 1°2 - A. Nuestro enfoque se centra en la sostenibilidad y la eficiencia energética en el mundo digital.",
            },
            {
                titulo: "PROYECTO TITULO - 1°2 - B",
                descripcion: "Información del proyecto 1°2 - B. Cerramos el año con un proyecto revolucionario que cambiará la forma en que interactuamos con la tecnología.",
            }
        ],
        2: [
            {
                titulo: "PROYECTO TITULO - 1°3 - A",
                descripcion: "Información del proyecto 1°3 - A. Este proyecto se enfoca en la inteligencia artificial y el aprendizaje automático.",
            }
        ],
        3: [
            {
                titulo: "PROYECTO TITULO - 1°4 - A",
                descripcion: "Información del proyecto 1°4 - A. Exploramos las posibilidades de la realidad virtual y aumentada en la educación.",
            },
            {
                titulo: "PROYECTO TITULO - 1°4 - B",
                descripcion: "Información del proyecto 1°4 - B. Un proyecto innovador que combina robótica y programación.",
            }
        ]
    };

    const imagenes = ['/img/1.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg'];

    let currentCurso = 0;
    let currentProject = 0;

    function updateProject() {
        const proyecto = proyectoData[currentCurso][currentProject];
        
        proyectoTitulo.textContent = proyecto.titulo;
        proyectoDescripcion.textContent = proyecto.descripcion;
    }

    function updateCurso(index) {
        cursos.forEach(q => q.classList.remove('active'));
        cursosLin.forEach(d => d.classList.remove('active'));
        cursos[index].classList.add('active');
        cursosLin[index].classList.add('active');
        currentCurso = index;
        currentProject = 0;
        updateProject();
        projectImage.src = imagenes[index];
    }

    cursos.forEach((curso, index) => {
        curso.addEventListener('click', () => updateCurso(index));
    });

    cursosLin.forEach((cursoLin, index) => {
        cursoLin.addEventListener('click', () => updateCurso(index));
    });

    function changeProject(direction) {
        const projectCount = proyectoData[currentCurso].length;
        if (direction === 'next') {
            currentProject = (currentProject + 1) % projectCount;
        } else {
            currentProject = (currentProject - 1 + projectCount) % projectCount;
        }
        updateProject();
    }

    leftArrow.addEventListener('click', () => changeProject('prev'));
    rightArrow.addEventListener('click', () => changeProject('next'));

    // Inicializar con el primer curso y proyecto
    updateCurso(0);

    // Efecto de navbar pegajoso
    window.addEventListener("scroll", function() {
        const header = document.querySelector(".navbar_cicloB");
        header.classList.toggle("sticky", window.scrollY > 0);
    });

    // Scroll suave al hacer clic en el indicador de desplazamiento
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const proyectosContenedor = document.querySelector('.proyectos_contenedor');

    scrollIndicator.addEventListener('click', (e) => {
        e.preventDefault();
        proyectosContenedor.scrollIntoView({ behavior: 'smooth' });
    });
});