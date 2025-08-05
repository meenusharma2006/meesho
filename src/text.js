
  const slider = document.getElementById('brandSlider');
  const leftBtn = document.getElementById('leftBtn');
  const rightBtn = document.getElementById('rightBtn');

  const scrollAmount = 300 + 32; // Image + spacing

  leftBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });





    
    // Accordion toggle for mobile
    document.querySelectorAll('[data-toggle="accordion"]').forEach(header => {
      header.addEventListener('click', () => {
        if(window.innerWidth >= 640) return; // Only toggle on mobile

        const targetId = header.getAttribute('data-target');
        const target = document.getElementById(targetId);

        if (target.style.maxHeight) {
          target.style.maxHeight = null;
        } else {
          // Close others first
          document.querySelectorAll('.accordion-content').forEach(ac => {
            if(ac !== target) ac.style.maxHeight = null;
          });
          target.style.maxHeight = target.scrollHeight + "px";
        }
      });
    });
  
