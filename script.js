var active = 1;
var mncircle = document.querySelectorAll(".mncircle");
var second = document.querySelectorAll(".Second");
gsap.to("#circle", {
    rotate: 0,
    ease: "power2.inOut", // Change easing for smoother animation
    duration: 2,
  });
gsap.to(mncircle[active - 1], {
  opacity: 1,
});

gsap.to(second[active - 1], {
  opacity: 1,
});

mncircle.forEach(function (val, index) {
  val.addEventListener("click", function () {
    gsap.to("#circle", {
      rotate: index * -20,
      ease: "power2.easeinOut",
      duration: 0.6,
    });

    greyout();

    gsap.to(this, {
      opacity: 1,
    });

    gsap.to(second[index], {
      opacity: 1,
      color: "black",
      duration: 0.5,
    });
  });
});

function greyout() {
  gsap.to(mncircle, {
    opacity: 0.2,
  });
  gsap.to(second, {
    opacity: 0.3,
    color: "springgreen",
    duration: 0.5,
  });
}
