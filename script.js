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
        ease: Power4.inOut
    },"b")
}

spanReveal();
loadingAnimation();