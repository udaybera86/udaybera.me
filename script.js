function valueSetters() {
    gsap.set(".home .parent .child", { y: "100%", rotateX: "135deg", opacity: 0 });
    gsap.set(".home .arrow-down", { opacity: 0 })
}

function spanReveal() {
    document.querySelectorAll(".reveal")
        .forEach(function (elem) {
            var parent = document.createElement("span");
            var child = document.createElement("span");

            parent.classList.add("parent");
            child.classList.add("child");

            child.innerHTML = elem.innerHTML;
            parent.appendChild(child);

            elem.innerHTML = "";
            elem.appendChild(parent);
        })
}

function loadingAnimation() {
    var tl = gsap.timeline();

tl
    .from("#loader .child span", {
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: .2,
        ease: Power3.easeInOut
    })
    .to("#loader .parent .child", {
        y: "-100%",
        duration: 1,
        ease: Circ.easeInOut
    }, "a")
    .to(".loading-anim", {
        y: "-100%",
        opacity: 0,
        duration: 1,
        ease: Circ.easeInOut
    }, "a")
    .to("#loader-bg-black", {
        height: 0,
        duration: 1,
        delay: -.6,
        ease: Circ.easeInOut
    })
    .to("#loader-bg-green", {
        height: "100%",
        duration: 1,
        delay: -1,
        ease: Circ.easeInOut
    },"b")
    .to("#loader-bg-green", {
        height: 0,
        bottom: "100%",
        duration: 1,
        delay: -.1,
        ease: Power4.inOut,
        onUpdate: function() {
            var progress = tl.progress();

            if (progress >= 0.8) {
                homeAnimation();
            }
        },
        onComplete: function() {
            homeAnimation();
        }
    },"b")
}

function homeAnimation() {
    var tl = gsap.timeline();

    tl
    .to(".home-title .child", {
        y: 0,
        rotateX: 0,
        opacity: 1,
        stagger: .1,
        duration: 1,
    })
    .to(".home-title-first-right .child", {
        y: 0,
        rotateX: 0,
        opacity: 1,
        stagger: .1,
        duration: 1,
    },"c")
    .to(".home .arrow-down", {
        opacity: 1,
        duration: 1,
        onComplete: function() {
            animateSvg();
        }
    },"c")
}

function animateSvg() {
    document.querySelectorAll("#web path").forEach(function(e) {
        e.style.strokeDasharray = e.getTotalLength() + "px";
        e.style.strokeDashoffset = e.getTotalLength() + "px";
    })

    gsap.to("#web>path, #web>mask>path", {
        strokeDasharray: 0,
        strokeDashoffset: 0,
        duration: 2,
    })
}


spanReveal();
valueSetters();
loadingAnimation();