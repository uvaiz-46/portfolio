const cursor = document.createElement('div');
cursor.id = 'cursor';
document.body.appendChild(cursor);

cursor.style.position = 'fixed';
cursor.style.pointerEvents = 'none';
cursor.style.zIndex = '1000';
cursor.style.width = '40px';
cursor.style.height = '40px';
cursor.style.borderRadius = '50%';
cursor.style.backgroundColor = '#0E8388';
cursor.style.transition = 'transform 0.1s ease, width 0.1s ease, height 0.1s ease, opacity 0.1s ease';
cursor.style.transform = 'translate(-50%, -50%)';
cursor.style.opacity = '1';

document.addEventListener('mousemove', e => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    const content = document.querySelector('.content'); 
    const navbar = document.querySelector('nav');

    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        content.classList.toggle('blur-background'); 
    });

   
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
            content.classList.remove('blur-background');
        });
    });

    
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            gsap.to(navbar, { top: "-100px", duration: 0.3, onComplete: () => {
                navbar.classList.add('blur');
                content.classList.remove('blur-background');
            }});
        } else {
            gsap.to(navbar, { top: "0px", duration: 0.3, onComplete: () => {
                navbar.classList.remove('blur');
            }});
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

   
    document.addEventListener('mousemove', function(event) {
        if (event.clientY < 50) {
            gsap.to(navbar, { top: "0px", duration: 0.3 });
            navbar.classList.add('blur-background'); 
        }
    });
});


let navi = document.querySelectorAll("ul li ");
navi.forEach(item => {
    item.addEventListener("mouseover", () => {
        document.body.style.cursor = "none";
        cursor.style.width = "0px";
        cursor.style.height = "0px";
        cursor.style.transition = "width 0.2s ease-in-out, height 0.2s ease-in-out";
    });
    item.addEventListener("mouseout", () => {
        document.body.style.cursor = "default";
        cursor.style.width = "30px";
        cursor.style.height = "30px";
        cursor.style.transition = "width 0.2s ease-in-out, height 0.2s ease-in-out";
    });
});
const lets = document.querySelectorAll("button");
lets.forEach(item => {
    item.addEventListener("mouseover", () => {
        document.body.style.cursor = "none";
        cursor.style.width = "0px";
        cursor.style.height = "0px";
        cursor.style.transition = "width 0.2s ease-in-out, height 0.2s ease-in-out";
    });
    item.addEventListener("mouseout", () => {
        document.body.style.cursor = "default";
        cursor.style.width = "30px";
        cursor.style.height = "30px";
        cursor.style.transition = "width 0.2s ease-in-out, height 0.2s ease-in-out";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const check = document.getElementById('check');
    const menu = document.querySelector('.menu');

    check.addEventListener('change', function() {
        if (check.checked) {
            gsap.to(menu, {
                right: 0,
                duration: 0.5,
                ease: "power4.out"
            });
        } else {
            gsap.to(menu, {
                right: "-100%",
                duration: 0.5,
                ease: "power4.out"
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.from("h1, p",{
        duration:1,
        scale:3,
        opavcity:0,
       

    })
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 3000);
});


const elementsToHover = document.querySelectorAll('a, input');
elementsToHover.forEach(elem => {
    elem.addEventListener('mouseover', () => {
        document.body.style.cursor = "none";
        cursor.style.width = "0px";
        cursor.style.height = "0px";
        cursor.style.transition = "width 0.2s ease-in-out, height 0.2s ease-in-out";
    });
    elem.addEventListener('mouseout', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.width = '30px';
        cursor.style.height = '30px';
    });
});


const textElements = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6');
textElements.forEach(elem => {
    elem.addEventListener('mouseover', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.width = '2px';
        cursor.style.height = '30px';
    });
    elem.addEventListener('mouseout', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.width = '30px';
        cursor.style.height = '30px';
    });
});


let cursorTrailTimeout;
document.addEventListener('mousemove', () => {
    clearTimeout(cursorTrailTimeout);
    cursor.style.opacity = '1';
    cursorTrailTimeout = setTimeout(() => {
        cursor.style.opacity = '0.5';
    }, 100);
});


gsap.from("nav ul li", {
    duration: 0.5,
    y: -200,
    stagger: 0.6,
    ease: "bounce"
});

gsap.registerPlugin(TextPlugin);


const titleElement = document.querySelector('.title');


const textToType = "Web Developer.";

const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });


tl.to(titleElement, {
    duration: 2,
    text: {
        value: "",
        delimiter: ""
    }
}).to(titleElement, {
    duration: 2,
    text: {
        value: textToType,
        delimiter: ""
    }
});

const textT = "Frontend Developer.";
tl.to(titleElement, {
    duration: 2,
    text: {
        value: "",
        delimiter: ""
    }
}).to(titleElement, {
    duration: 2,
    text: {
        value: textT,
        delimiter: ""
    }
});

const textTo = "Backend Developer.";
tl.to(titleElement, {
    duration: 2,
    text: {
        value: "",
        delimiter: ""
    }
}).to(titleElement, {
    duration: 2,
    text: {
        value: textTo,
        delimiter: ""
    }
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".progress-bar", {
      width: 0,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".child-2", 
        start: "top 80%",   
        end: "bottom 60%", 
        toggleActions: "play none none none" 

      }
    });
  });

  let shre = document.querySelectorAll(".service-list ");
  shre.forEach(item => {
      item.addEventListener("mouseover", () => {
          document.body.style.cursor = "none";
          cursor.style.width = "0px";
          cursor.style.height = "0px";
          cursor.style.color ="black"
          cursor.style.transition = "width 0.2s ease-in-out, height 0.2s ease-in-out";
      });
      item.addEventListener("mouseout", () => {
          document.body.style.cursor = "default";
          cursor.style.width = "30px";
          cursor.style.height = "30px";
          cursor.style.transition = "width 0.2s ease-in-out, height 0.2s ease-in-out";
      });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('contactChatButton');
    
    chatButton.addEventListener('click', function() {
        alert("Let's Chat button clicked! Feel free to reach out to us with your project ideas.");
        
        
    });
});


