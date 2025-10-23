// =======================================================
// === INICIO: CÓDIGO DE DEPURACIÓN PARA LA HISTORIA ===
// =======================================================

// Checkpoint 1: Se ejecuta cuando el HTML termina de cargar.
document.addEventListener('DOMContentLoaded', function() {
    
    alert("ALERTA 1: ¡main.js se ha cargado correctamente!");

    // 1. Seleccionamos los elementos por sus IDs
    const botonCambiar = document.getElementById('btn-cambiar-historia');
    const tituloElemento = document.getElementById('titulo-historia');
    const parrafoElemento = document.getElementById('parrafo-historia');

    // 2. Comprobamos que existan
    if (botonCambiar && tituloElemento && parrafoElemento) {
        
        // Checkpoint 2: Si ves esto, significa que JavaScript ENCONTRÓ tus 3 IDs.
        alert("ALERTA 2: ¡Elementos (botón, título, párrafo) encontrados!");

        // 3. Creamos la lista con todos los textos
        const historiaCompleta = [
             {
                // Página 0 (El original)
                titulo: "llegada a la ciudad de Dirtmouth.",
                parrafo: "una pequeña ciudad situada sobre las ruinas de Hallownest, con la intención de aventurarse para descubrir lo que le espera allí. A medida que avanza por el reino olvidado, se encuentra con los restos reanimados de los antiguos residentes de Hallownest y otras criaturas, siendo transformados lentamente por una misteriosa fuerza. En su camino, el Caballero también se topa con Hornet, la autoproclamada protectora de las ruinas de Hallownest, quien intenta detener la búsqueda del jugador.\n\n¿Estás preparado para descubrir la historia completa?"
            },
            {
                // Página 1
                titulo: "El Reino Caído",
                parrafo: "Bajo la superficie del mundo, donde la luz apenas alcanza y las piedras conservan la memoria de una civilización perdida, se extendía Hallownest: un reino subterráneo que alguna vez fue próspero, hogar de insectos sabios, templos brillantes y canciones que hablaban del alma y el honor. Ahora, solo quedaban ecos. Las voces habían sido sustituidas por el murmullo de la infección, una fuerza luminosa que consumía cuerpos y mentes, despojando a sus habitantes de toda razón. Desde la soledad de la superficie, un pequeño ser sin nombre descendió hacia esa oscuridad. No tenía pasado, ni propósito visible. Su rostro era una máscara blanca, su cuerpo diminuto, y en su mano portaba un clavo, un arma que parecía parte de sí mismo. Aquel ser sería conocido como el Caballero."
            },
            {
                // Página 2
                titulo: "Los Cruces Olvidados",
                parrafo: "Su viaje comenzó en Dirtmouth, un pueblo desolado en la cima del abismo. Solo un anciano quedaba allí, un testigo cansado del fin. Bajo la tierra, le dijo, yacía un reino dormido. El Caballero, sin pronunciar palabra, bajó. El descenso lo llevó a los Cruces Olvidados, un laberinto de ruinas azules y estructuras huecas. En aquel silencio retumbaban los ecos de un esplendor desaparecido. Entre los escombros halló enemigos corrompidos, insectos sin mente movidos solo por la infección. Allí enfrentó a su primer gran enemigo: el Falso Caballero, un cuerpo descomunal que ocultaba una criatura diminuta en su interior. Al derrotarlo, el Caballero descubrió su primer poder interior: podía canalizar su Alma, usando esa energía espiritual para curarse o atacar con fuerza. Ese descubrimiento fue el inicio de su transformación."
            },
            // ... (el resto de tu historia va aquí, he cortado para abreviar)
            // ...
            {
                // Página 7
                titulo: "El Sacrificio Final",
                parrafo: "El combate fue un diálogo entre dos silencios. El Hollow Knight atacaba, pero sus golpes a veces se detenían, como si implorara que lo liberaran. El Caballero, sin emociones, cumplió con su propósito. Con cada impacto, la luz se filtraba por las grietas de su cuerpo. La infección, desesperada, buscaba un nuevo recipiente. Entonces, el Caballero avanzó. Aceptó su destino. El Vacío lo envolvió, sellando el templo una vez más. La infección quedó contenida en su cuerpo, y Hallownest cayó en un nuevo sueño."
            }
        ];

        // 4. Creamos un contador
        let historiaIndex = 0;

        // 5. Añadimos el evento de 'clic' al botón
        botonCambiar.addEventListener('click', function() {
            
            // Checkpoint 3: Si ves esto, significa que el CLIC funciona.
            alert("ALERTA 3: ¡Botón presionado!");

            // 6. Aumentamos el contador
            historiaIndex++;

            // 7. Si llegamos al final, volvemos al principio
            if (historiaIndex >= historiaCompleta.length) {
                historiaIndex = 0;
            }

            // 8. Actualizamos el texto en el HTML
            tituloElemento.textContent = historiaCompleta[historiaIndex].titulo;
            parrafoElemento.textContent = historiaCompleta[historiaIndex].parrafo;
        });

    } else {
        // Mensaje de error si no encuentra los IDs
        alert("ERROR: No se pudieron encontrar los IDs 'btn-cambiar-historia', 'titulo-historia', o 'parrafo-historia'. Revisa tu HTML.");
    }

    // =====================================================
    // === FIN: CÓDIGO DE DEPURACIÓN ===
    // =====================================================


    // --- TU CÓDIGO ORIGINAL (scroll, etc.) ---
    // (Lo muevo aquí abajo para que no interfiera con la prueba)
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link highlighting
    // (Tu código de 'scroll'...)

    // Form submission handling
    // (Tu código de 'contactForm'...)

    // Navbar collapse on mobile after clicking link
    // (Tu código de 'navbarCollapse'...)

});