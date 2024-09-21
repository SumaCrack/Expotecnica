document.addEventListener('DOMContentLoaded', () => {
    const cursos = document.querySelectorAll('.curso');
    const cursosLin = document.querySelectorAll('.curso_lin');
    const proyectoDescripcion = document.querySelector('.proyecto_descripcion');
    const proyectoTitulo = document.querySelector('.proyecto_titulo');
    const projectImages = document.querySelectorAll('.project-image');
    const proyectosContenedor = document.querySelector('.proyectos_contenedor');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    const proyectoData = {
        1: {
            titulo: "PROYECTO TITULO - Q1",
            descripcion: "Información del proyecto Q1. Este es un proyecto innovador que combina tecnología y diseño para crear soluciones únicas."
        },
        2: {
            titulo: "PROYECTO TITULO - Q2",
            descripcion: "Información del proyecto Q2. Exploramos nuevas fronteras en el desarrollo de software y la experiencia del usuario."
        },
        3: {
            titulo: "PROYECTO TITULO - Q3",
            descripcion: "Información del proyecto Q3. Nuestro enfoque se centra en la sostenibilidad y la eficiencia energética en el mundo digital."
        },
        4: {
            titulo: "PROYECTO TITULO - Q4",
            descripcion: "Información del proyecto Q4. Cerramos el año con un proyecto revolucionario que cambiará la forma en que interactuamos con la tecnología."
        },
    };

    let currentImageIndex = 0;
    let currentCursoIndex = 0;

    function updateCurso(index) {
        cursos.forEach(q => q.classList.remove('active'));
        cursosLin.forEach(d => d.classList.remove('active'));
        
        cursos[index].classList.add('active');
        cursosLin[index].classList.add('active');
        
        const cursoData = proyectoData[cursos[index].dataset.curso];
        
        proyectoTitulo.textContent = cursoData.titulo;
        proyectoDescripcion.textContent = cursoData.descripcion;

        currentCursoIndex = index;
        currentImageIndex = index;
        updateImage(index);
    }

    function updateImage(index) {
        projectImages.forEach((img, i) => {
            if (i === index) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
    }

    cursos.forEach((curso, index) => {
        curso.addEventListener('click', () => updateCurso(index));
    });

    cursosLin.forEach((lin, index) => {
        lin.addEventListener('click', () => updateCurso(index));
    });

    const leftArrow = document.querySelector('.nav-arrow-left');
    const rightArrow = document.querySelector('.nav-arrow-right');

    function cambiarImagen(direccion) {
        if (direccion === 'right') {
            currentImageIndex = (currentImageIndex + 1) % projectImages.length;
        } else {
            currentImageIndex = (currentImageIndex - 1 + projectImages.length) % projectImages.length;
        }
        
        updateImage(currentImageIndex);
    }

    leftArrow.addEventListener('click', () => cambiarImagen('left'));
    rightArrow.addEventListener('click', () => cambiarImagen('right'));

    // Smooth scroll to projects section
    scrollIndicator.addEventListener('click', (e) => {
        e.preventDefault();
        proyectosContenedor.scrollIntoView({ behavior: 'smooth' });
    });

    // Hide scroll indicator when projects are in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                scrollIndicator.style.display = 'none';
            } else {
                scrollIndicator.style.display = 'block';
            }
        });
    }, { threshold: 0.1 });

    observer.observe(proyectosContenedor);

    // Initialize the first course
    updateCurso(0);
});