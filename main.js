




    gsap.to(".roule", {duration: 3, rotationX: 720,});
    gsap.to(".ail", {duration: 3, rotationX: 720 });
    gsap.to(".fleur", {duration: 3, rotationX: 720 });




    gsap.to(".containerSignup", {duration: 2, rotationY: 360 });
    gsap.to(".Logo", {duration: 2, rotationY: 1080 });


    gsap.to(".title", 2, {opacity:1, x: 50,  ease: "bounce"}, {opacity:0, x: 0});

gsap.to(".beetroot", 3, {opacity: 1, x: 80}, {opacity: 0, x: 0});
gsap.to(".rawsperry", 3, {opacity: 1, x: 80}, {opacity: 0, x: 0});
gsap.to(".present", 3, {opacity: 1, x: -300, y: 25}, {opacity: 0, x: 0});


gsap.to(".container", 3, {opacity: 1, y: -200}, {opacity: 0, y: 0});


gsap.fromTo(".roule", 2, {scale: 0.1}, {scale:1, ease:ExpoScaleEase.config(0.1, 3)});
gsap.fromTo(".ail", 2, {scale: 0.1}, {scale:1, ease:ExpoScaleEase.config(0.1, 3)});
gsap.fromTo(".fleur", 2, {scale: 0.1}, {scale:1, ease:ExpoScaleEase.config(0.1, 3)});
gsap.fromTo(".Logo", 2,  {x: 20, ease:ExpoScaleEase.config(0.1, 3)});