```javascript
/* =========================================
   COSTA CROATA
   JAVASCRIPT
========================================= */


/* =========================================
   1. MENU COM ROLAGEM SUAVE
========================================= */

const linksMenu = document.querySelectorAll("nav a");

linksMenu.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const destino = this.getAttribute("href");

        const secao = document.querySelector(destino);

        if (secao) {

            secao.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================================
   2. ANIMAÇÃO DAS SEÇÕES
========================================= */

const elementos = document.querySelectorAll(
    ".sobre, .gastronomia, .produto, .fritule, .cultura"
);

const observador = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("mostrar");

            }

        });

    },

    {
        threshold: 0.15
    }

);

elementos.forEach(function(elemento) {

    elemento.classList.add("animacao");

    observador.observe(elemento);

});


/* =========================================
   3. BOTÃO DE VOLTAR AO TOPO
========================================= */

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

botaoTopo.classList.add("topo-btn");

document.body.appendChild(botaoTopo);


window.addEventListener("scroll", function() {

    if (window.scrollY > 500) {

        botaoTopo.classList.add("mostrar-topo");

    } else {

        botaoTopo.classList.remove("mostrar-topo");

    }

});


botaoTopo.addEventListener("click", function() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================
   4. MODO ESCURO
========================================= */

const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", function() {

    document.body.classList.toggle("modo-escuro");


    if (document.body.classList.contains("modo-escuro")) {

        temaBtn.innerHTML = "☀️";

        localStorage.setItem("tema", "escuro");

    } else {

        temaBtn.innerHTML = "🌙";

        localStorage.setItem("tema", "claro");

    }

});


/* =========================================
   5. SALVAR O TEMA ESCOLHIDO
========================================= */

const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {

    document.body.classList.add("modo-escuro");

    temaBtn.innerHTML = "☀️";

}


/* =========================================
   6. MENSAGEM SOBRE O FRITULE
========================================= */

const frituleBtn = document.querySelector(".btn");

frituleBtn.addEventListener("click", function() {

    const fritule = document.querySelector("#fritule");

    if (fritule) {

        fritule.scrollIntoView({
            behavior: "smooth"
        });

    }

});


/* =========================================
   7. EFEITO NOS CARDS DE COMIDA
========================================= */

const cards = document.querySelectorAll(".produto");

cards.forEach(function(card) {

    card.addEventListener("mouseenter", function() {

        this.style.transform = "translateY(-12px)";

    });


    card.addEventListener("mouseleave", function() {

        this.style.transform = "translateY(0)";

    });

});


/* =========================================
   8. MENSAGEM NO CONSOLE
========================================= */

console.log(
    "🇭🇷 Bem-vindo ao Costa Croata!"
);

console.log(
    "Conheça a cultura e a gastronomia da Croácia."
);
```

