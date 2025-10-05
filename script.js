// ===== Scroll suave ao clicar no menu ===== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
    anchor.addEventListener("click", function (e) { 
        e.preventDefault(); 
        document.querySelector(this.getAttribute("href")).scrollIntoView({ 
            behavior: "smooth" 
        }); 
    }); 
}); 

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona o botão e o menu no documento
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    // 2. Verifica se ambos existem para evitar erros
    if (menuToggle && menu) {
        // 3. Adiciona um "ouvinte" de evento de clique ao botão
        menuToggle.addEventListener('click', () => {
            // 4. A cada clique, adiciona ou remove a classe 'active' do menu
            menu.classList.toggle('active');
        });
    }
});





// ===== Animações de aparecer ao rolar a página ===== 
const elements = document.querySelectorAll(".fade-in, .slide-up"); 

function checkScroll() { 
    const triggerBottom = window.innerHeight * 0.85; 

    elements.forEach(el => { 
        const boxTop = el.getBoundingClientRect().top; 

        if (boxTop < triggerBottom) { 
            el.classList.add("show"); 
        } else { 
            el.classList.remove("show"); 
        } 
    }); 
} 

window.addEventListener("scroll", checkScroll); 
checkScroll(); // executa ao carregar 


// ===== Validação simples do formulário de contato ===== 
const form = document.querySelector(".contact-form"); 

if (form) { 
    form.addEventListener("submit", function (e) { 
        e.preventDefault(); 

        const name = form.querySelector("input[type='text']").value.trim(); 
        const email = form.querySelector("input[type='email']").value.trim(); 
        const message = form.querySelector("textarea").value.trim(); 

        if (name === "" || email === "" || message === "") { 
            alert("Por favor, preencha todos os campos!"); 
            return; 
        } 

        alert("Mensagem enviada com sucesso! 🚀"); 
        form.reset(); 
    }); 
} 

// ===== Botão voltar ao topo ===== 
const backToTop = document.createElement("button"); 
backToTop.innerText = "⬆"; 
backToTop.classList.add("back-to-top"); 
document.body.appendChild(backToTop); 

window.addEventListener("scroll", () => { 
    if (window.scrollY > 400) { 
        backToTop.classList.add("visible"); 
    } else { 
        backToTop.classList.remove("visible"); 
    } 
}); 

backToTop.addEventListener("click", () => { 
    window.scrollTo({ top: 0, behavior: "smooth" }); 
});

// ===== Alternar visibilidade das habilidades =====
function toggleSkills(id) {
    const skillsContainer = document.getElementById(id + '-skills');
    const allSkillsContainers = document.querySelectorAll('.skills-container');

    // Fecha todos os containers, exceto o clicado
    allSkillsContainers.forEach(container => {
        if (container.id !== skillsContainer.id) {
            container.classList.add('hidden');
        }
    });

    // Alterna a visibilidade do container clicado
    skillsContainer.classList.toggle('hidden');
    }





// ===== HOVER PROJETOS =====

    document.addEventListener('DOMContentLoaded', () => {

    // Lógica para os cards de projeto com delay
    const projectCards = document.querySelectorAll('.project-card');
    const delay = 1500; // Tempo em milissegundos (1.5 segundos)

    projectCards.forEach(card => {
        let leaveTimer; // Variável para guardar o nosso temporizador

        // Evento para quando o mouse entra no card
        card.addEventListener('mouseenter', () => {
            // Se houver um timer para remover a classe, cancele-o
            clearTimeout(leaveTimer);
            // Adiciona a classe ativa imediatamente
            card.classList.add('is-active');
        });

        // Evento para quando o mouse sai do card
        card.addEventListener('mouseleave', () => {
            // Inicia um timer para remover a classe após o 'delay'
            leaveTimer = setTimeout(() => {
                card.classList.remove('is-active');
            }, delay);
        });
    });

});