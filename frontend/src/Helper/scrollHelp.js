// scrollHelp.js

export const scrollToServices = () => {
    const servicesSection = document.querySelector("#services");
    if (servicesSection) {
      window.scrollTo({
        top: servicesSection.offsetTop,
        behavior: "smooth"
      });
    }
  };
  

  
  export const scrollToTestimonials = () => {
    const testimonialsSection = document.querySelector("#testimonials");
    if (testimonialsSection) {
      window.scrollTo({
        top: testimonialsSection.offsetTop,
        behavior: "smooth"
      });
    }
  };