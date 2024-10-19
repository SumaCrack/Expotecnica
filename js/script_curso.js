document.addEventListener('DOMContentLoaded', () => {
    const cursos = document.querySelectorAll('.curso');
    const cursosLin = document.querySelectorAll('.curso_lin');
    const proyectoTitulo = document.querySelector('.proyecto_titulo');
    const proyectoDescripcion = document.querySelector('.proyecto_descripcion');
    const projectImage = document.querySelector('.project-image');
    const leftArrow = document.querySelector('.nav-arrow-left');
    const rightArrow = document.querySelector('.nav-arrow-right');

    // Actualizamos proyectoData para que cada proyecto tenga su propio grupo de imágenes
    const proyectoData = {
        0: [
            {
                titulo: "PROYECTO TITULO - 1°1 - A",
                descripcion: "Información del proyecto 1°1 - A...",
                imagenes: ['/img/1_cs.jpeg', '/img/2_cs.jpeg', '/img/3_cs.jpeg']  // Imágenes para 1°1 A
            },
            {
                titulo: "PROYECTO TITULO - 1°1 - B",
                descripcion: "Información del proyecto 1°1 - B...",
                imagenes: ['/img/1_cb.jpeg', '/img/2_cb.jpeg', '/img/3_cb.jpeg']  // Imágenes para 1°1 B
            },
            {
                titulo: "PROYECTO TITULO - 1°1 - C",
                descripcion: "Información del proyecto 1°1 - C...",
                imagenes: ['/img/1_1_c_1.jpeg', '/img/1_1_c_2.jpeg', '/img/1_1_c_3.jpeg']  // Imágenes para 1°1 C
            },
            {
                titulo: "PROYECTO TITULO - 1°1 - D",
                descripcion: "Información del proyecto 1°1 - D...",
                imagenes: ['/img/1_1_d_1.jpeg', '/img/1_1_d_2.jpeg', '/img/1_1_d_3.jpeg']  // Imágenes para 1°1 D
            }
        ],
        1: [
            {
                titulo: "PROYECTO TITULO - 1°2 - A",
                descripcion: "Información del proyecto 1°2 - A...",
                imagenes: ['/img/4_cb.jpeg', '/img/5_cb.jpeg', '/img/6_cb.jpeg']  // Imágenes para 1°2 A
            },
            {
                titulo: "PROYECTO TITULO - 1°2 - B",
                descripcion: "Información del proyecto 1°2 - B...",
                imagenes: ['/img/4_cs.jpeg', '/img/5_cs.jpeg', '/img/6_cs.jpeg']  // Imágenes para 1°2 B
            }
        ],
        2: [
            {
                titulo: "PROYECTO TITULO - 1°3 - A",
                descripcion: "Información del proyecto 1°3 - A...",
                imagenes: ['/img/1_3_a_1.jpeg', '/img/1_3_a_2.jpeg', '/img/1_3_a_3.jpeg']  // Imágenes para 1°3 A
            }
        ],
        3: [
            {
                titulo: "PROYECTO TITULO - 1°4 - A",
                descripcion: "Información del proyecto 1°4 - A...",
                imagenes: ['/img/1_4_a_1.jpeg', '/img/1_4_a_2.jpeg', '/img/1_4_a_3.jpeg']  // Imágenes para 1°4 A
            },
            {
                titulo: "PROYECTO TITULO - 1°4 - B",
                descripcion: "Información del proyecto 1°4 - B...",
                imagenes: ['/img/1_4_b_1.jpeg', '/img/1_4_b_2.jpeg', '/img/1_4_b_3.jpeg']  // Imágenes para 1°4 B
            }
        ]
    };

    let currentCurso = 0;
    let currentProject = 0;
    let currentImage = 0;

    function updateProject() {
        const proyecto = proyectoData[currentCurso][currentProject];
        proyectoTitulo.textContent = proyecto.titulo;
        proyectoDescripcion.textContent = proyecto.descripcion;
        currentImage = 0;  // Reiniciar a la primera imagen cuando se cambia de proyecto
        updateImage();  // Actualizar la imagen correspondiente al proyecto actual
    }

    function updateCurso(index) {
        cursos.forEach(q => q.classList.remove('active'));
        cursos[index].classList.add('active');
        currentCurso = index;
        currentProject = 0;
        updateProject();
        updateVerticalNavigation();
    }

    function updateVerticalNavigation() {
        const projectCount = proyectoData[currentCurso].length;
        cursosLin.forEach((lin, index) => {
            if (index < projectCount) {
                lin.style.display = 'block';
                lin.classList.toggle('active', index === currentProject);
            } else {
                lin.style.display = 'none';
            }
        });
    }

    function updateImage() {
        const imagenesProyecto = proyectoData[currentCurso][currentProject].imagenes;
        projectImage.src = imagenesProyecto[currentImage];
    }

    function changeImage(direction) {
        const imagenesProyecto = proyectoData[currentCurso][currentProject].imagenes;
        if (direction === 'next') {
            currentImage = (currentImage + 1) % imagenesProyecto.length;
        } else {
            currentImage = (currentImage - 1 + imagenesProyecto.length) % imagenesProyecto.length;
        }
        updateImage();  // Actualizar la imagen mostrada
    }

    cursos.forEach((curso, index) => {
        curso.addEventListener('click', () => updateCurso(index));
    });

    cursosLin.forEach((cursoLin, index) => {
        cursoLin.addEventListener('click', () => {
            currentProject = index;
            updateProject();
            updateVerticalNavigation();
        });
    });

    leftArrow.addEventListener('click', () => changeImage('prev'));
    rightArrow.addEventListener('click', () => changeImage('next'));

    // Initialize with the first course and project
    updateCurso(0);
});
