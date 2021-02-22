document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".first-section",
        start: "top top",
        end: "top top-=1000px",
        // markers: true,
        scrub: true,
        pin: true,
      },
    })
    .from(".first-section h1", {
      duration: "60",
      scale: 70,
      rotate: 90,
      stagger: 1,
      // skewX: 50,
    })
    .from(".section_1_01", {
      duration: "10",
      y: -100,
      x: -150,
      rotate: 90,
      stagger: 1,
      ease: Power3.easeInOut,
    })
    .from(
      ".section_1_02",
      {
        duration: "10",
        y: -150,
        x: -250,
        rotate: 90,
        stagger: 1,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .from(
      ".section_1_03",
      {
        duration: "10",
        y: -80,
        x: -100,
        rotate: 90,
        stagger: 1,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .from(
      ".section_1_04",
      {
        duration: "10",
        y: -100,
        x: -150,
        rotate: 90,
        stagger: 1,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .from(
      ".section_1_05",
      {
        duration: "10",
        y: -80,
        x: -200,
        rotate: 90,
        stagger: 1,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .from(
      ".section_1_06",
      {
        duration: "10",
        y: -100,
        x: -350,
        rotate: 90,
        stagger: 1,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .from(
      ".section_1_07",
      {
        duration: "10",
        y: -50,
        x: -150,
        rotate: 90,
        stagger: 1,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .from(
      ".section_1_08",
      {
        duration: "10",
        y: 50,
        x: -350,
        rotate: 90,
        stagger: 1,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .from(
      ".section_1_09",
      {
        duration: "10",
        y: 100,
        x: -200,
        rotate: 90,
        stagger: 1,
        ease: Power3.easeInOut,
      },
      "-=4"
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".second-section",
        start: "top top",
        scrub: true,
        pin: true,
        markers: true,
      },
    })
    .to(".top .image-container", {
      height: 0,
      // duration: '1'
    });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".third-section",
        start: "top top",
        scrub: 2,
        pin: true,
      },
    })
    .to(
      ".section_3_01",
      {
        y: -250,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .to(
      ".section_3_02",
      {
        y: -200,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .to(
      ".section_3_03",
      {
        y: -100,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .to(
      ".section_3_04",
      {
        y: 0,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .to(
      ".section_3_05",
      {
        y: 150,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .to(
      ".section_3_06",
      {
        y: 250,
        ease: Power3.easeInOut,
      },
      "-=4"
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".forth-section",
        start: "top top",
        scrub: 2,
        pin: true,
      },
    })
    .to(".section_4_01", 4, {
      autoAlpha: 0,
    })
    .from(
      ".section_4_02",
      4,
      {
        autoAlpha: 0,
      },
      "-=4"
    )
    .from(".section_4_03", 4, {
      autoAlpha: 0,
    })
    .from(".section_4_04", 4, {
      autoAlpha: 0,
    });
});
