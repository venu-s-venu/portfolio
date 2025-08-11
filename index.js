document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Sticky header on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        }); 