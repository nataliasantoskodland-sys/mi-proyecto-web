 // Filtrar servicios con buscador 
function filterServices() { 
    const query = document.getElementById('searchInput').value.toLowerCase(); 
    const cards = document.querySelectorAll('.service-card'); 
    cards.forEach(card => { 
    const title = card.querySelector('h3').textContent.toLowerCase(); 
    const desc = card.querySelector('p').textContent.toLowerCase(); 
    if (title.includes(query) || desc.includes(query)) { 
        card.classList.remove('hidden'); 
    } else { 
        card.classList.add('hidden'); 
    } 
    }); 
} 

// Simulación de Base de Datos con LocalStorage 
document.getElementById('contactForm').addEventListener('submit', function(e) { 
    e.preventDefault(); 
    const formData = { 
        id: Date.now(), 
        nombre: document.getElementById('name').value, 
        email: document.getElementById('email').value, 
        mensaje: document.getElementById('message').value, 
        fecha: new Date().toLocaleString() 
    }; 
 
    // Obtener registros previos 
    const existingData = JSON.parse(localStorage.getItem('contactos')) || []; 
    existingData.push(formData); 
             
    // Guardar en "Base de Datos" (LocalStorage) 
    localStorage.setItem('contactos', JSON.stringify(existingData)); 
 
    // Feedback visual 
    const btn = e.target.querySelector('button'); 
    const originalText = btn.textContent; 
    btn.textContent = '¡Mensaje Enviado con Éxito!'; 
    btn.classList.replace('from-blue-600', 'from-emerald-600'); 
             
    e.target.reset(); 
 
    setTimeout(() => { 
        btn.textContent = originalText; 
        btn.classList.replace('from-emerald-600', 'from-blue-600'); 
    }, 3000); 
});


// Animación para la llave cuando abre 
const menuToggle = document.getElementById('menu-toggle'); 
        const mobileMenu = document.getElementById('mobile-menu'); 
        const menuBtnImg = document.getElementById('menu-btn-img'); 
 
        menuToggle.addEventListener('click', () => { 
            // Toggle de visibilidad del menú 
            mobileMenu.classList.toggle('hidden'); 
             
            // Efecto visual en la imagen del botón 
            if (!mobileMenu.classList.contains('hidden')) { 
                menuBtnImg.style.transform = "rotate(90deg) scale(1.1)"; 
                menuBtnImg.style.borderColor = "#3182ce"; 
            } else { 
                menuBtnImg.style.transform = "rotate(0deg) scale(1)"; 
                menuBtnImg.style.borderColor = "rgba(49, 130, 206, 0.5)"; 
            } 
        }); 
 
        // Cerrar menú al hacer clic en un enlace de móvil 
        const mobileLinks = mobileMenu.querySelectorAll('a'); 
        mobileLinks.forEach(link => { 
            link.addEventListener('click', () => { 
                mobileMenu.classList.add('hidden'); 
                menuBtnImg.style.transform = "rotate(0deg) scale(1)"; 
            }); 
        }); 
 
        // Suavizado de scroll para anclas 
        document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
            anchor.addEventListener('click', function (e) { 
                e.preventDefault(); 
                document.querySelector(this.getAttribute('href')).scrollIntoView({ 
                    behavior: 'smooth' 
                }); 
            }); 
        }); 







