

// =========================
// CURSOR GLOW EFFECT
// =========================

const glow = document.querySelector(".cursor-glow");

if(glow){


document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


}

// =========================
// SCROLL REVEAL
// =========================

ScrollReveal().reveal('.project-card',{

distance:'100px',
duration:1400,
easing:'ease',
origin:'bottom',
interval:200,
reset:false


});

// =========================
// PROJECT CARD TILT
// =========================

const cards = document.querySelectorAll(".project-card");

cards.forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.transform =

        `rotateY(${(x - rect.width/2)/25}deg)
         rotateX(${-(y - rect.height/2)/25}deg)
         translateY(-10px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =

        `rotateY(0deg)
         rotateX(0deg)
         translateY(0px)`;

    });

});

// =========================
// PORTFOLIO PARALLAX
// =========================

const portfolioText =
document.querySelector(".portfolio-text");

window.addEventListener("scroll",()=>{

    let scrollY = window.scrollY;

    if(portfolioText){

        portfolioText.style.transform =

        `translateY(${scrollY * 0.08}px)
         scaleY(1.20)`;

    }

});




// =========================
// TECH BALL MOVEMENT
// =========================

const techBalls = document.querySelectorAll(".tech-ball");

document.addEventListener("mousemove",(e)=>{

    techBalls.forEach((ball)=>{

        const rect = ball.getBoundingClientRect();

        const ballX = rect.left + rect.width/2;
        const ballY = rect.top + rect.height/2;

        const dx = e.clientX - ballX;
        const dy = e.clientY - ballY;

        const distance = Math.sqrt(dx*dx + dy*dy);

        if(distance < 300){

            gsap.to(ball,{
                x:-dx * 0.12,
                y:-dy * 0.12,
                duration:0.4
            });

        }else{

            gsap.to(ball,{
                x:0,
                y:0,
                duration:0.4
            });

        }

    });

});

// =========================
// IMAGE REVEAL
// =========================

const image =
document.querySelector(".center-image");

if(image){


window.addEventListener("scroll",()=>{

    if(window.scrollY > 200){

        image.classList.add("active");

    }

});


}

// =========================
// SECTION REVEAL
// =========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold: 0.2
});
document.querySelectorAll("section").forEach((section)=>{

    section.classList.add("hidden");

    observer.observe(section);

});



// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll",()=>{


if(!navbar) return;

if(window.scrollY > 50){

    navbar.classList.add("nav-active");

}else{

    navbar.classList.remove("nav-active");

}


});

// =========================
// GSAP HERO ANIMATION
// =========================

const tl = gsap.timeline();

tl.from(".top-line",{
    opacity:0,
    y:40,
    duration:1,
    ease:"power3.out"
})

.from(".intro h1",{
    opacity:0,
    y:200,
    duration:2,
    ease:"power4.out"
},"-=0.5")

.from(".intro h2",{
    opacity:0,
    y:200,
    duration:1.5,
    ease:"power4.out"
},"-=1")

.from(".scroll-line",{
    height:0,
    duration:1.2,
    ease:"power3.out"
},"-=0.8")

.from(".scroll-text",{
    opacity:0,
    duration:1
},"-=0.8");
