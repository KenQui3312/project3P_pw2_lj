class SliderController {
    constructor() {
        this.slider = document.querySelector('.slider');
        this.track = document.querySelector('.slider .frametrack');
        this.slides = document.querySelectorAll('.slider .slide');
        this.currentIndex = 0;
        this.intervalTime = 3000;
        this.intervalId = null;
        this.isAnimating = false;

        if (!this.slider || !this.track || this.slides.length === 0) {
            console.error('Slider elements not found');
            return;
        }

        this.init();
    }

    init() {
        this.setupSlides();
        this.createNavigation();
        this.startAutoPlay();
        this.addEventListeners();
    }

    setupSlides() {
        // Asegura que cada slide tenga el ancho correcto
        this.slides.forEach(slide => {
            slide.style.width = `${this.slider.offsetWidth}px`;
        });
        
        // Clona el primer y último slide para efecto infinito
        const firstClone = this.slides[0].cloneNode(true);
        const lastClone = this.slides[this.slides.length - 1].cloneNode(true);
        
        firstClone.id = 'first-clone';
        lastClone.id = 'last-clone';
        
        this.track.appendChild(firstClone);
        this.track.insertBefore(lastClone, this.slides[0]);
        
        // Actualiza la lista de slides
        this.slides = document.querySelectorAll('.slider .slide');
    }

    createNavigation() {
        // Botones de navegación
        const prevBtn = document.createElement('button');
        prevBtn.className = 'navigation-btn navigate-left';
        prevBtn.innerHTML = '&lt;';
        prevBtn.addEventListener('click', () => this.prevSlide());

        const nextBtn = document.createElement('button');
        nextBtn.className = 'navigation-btn navigate-right';
        nextBtn.innerHTML = '&gt;';
        nextBtn.addEventListener('click', () => this.nextSlide());

        this.slider.appendChild(prevBtn);
        this.slider.appendChild(nextBtn);

        // Indicadores
        const navContainer = document.createElement('div');
        navContainer.className = 'navigation-container';
        
        this.slides.forEach((_, index) => {
            if (index === 0 || index === this.slides.length - 1) return;
            
            const dot = document.createElement('div');
            dot.className = 'navigation-index';
            if (index === 1) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index - 1));
            navContainer.appendChild(dot);
        });

        this.slider.appendChild(navContainer);
    }

    updateNavigation() {
        const dots = document.querySelectorAll('.navigation-index');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }

    nextSlide() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        this.currentIndex++;
        this.animateSlide();

        if (this.currentIndex >= this.slides.length - 2) {
            setTimeout(() => {
                this.track.style.transition = 'none';
                this.currentIndex = 0;
                this.track.style.transform = `translateX(-${(this.currentIndex + 1) * 100}%)`;
                setTimeout(() => {
                    this.track.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
                }, 50);
            }, 600);
        }
    }

    prevSlide() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        this.currentIndex--;
        this.animateSlide();

        if (this.currentIndex < 0) {
            setTimeout(() => {
                this.track.style.transition = 'none';
                this.currentIndex = this.slides.length - 3;
                this.track.style.transform = `translateX(-${(this.currentIndex + 1) * 100}%)`;
                setTimeout(() => {
                    this.track.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
                }, 50);
            }, 600);
        }
    }

    animateSlide() {
        this.track.style.transform = `translateX(-${(this.currentIndex + 1) * 100}%)`;
        this.updateNavigation();
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 600);
    }

    goToSlide(index) {
        if (this.isAnimating) return;
        this.currentIndex = index;
        this.animateSlide();
    }

    startAutoPlay() {
        this.intervalId = setInterval(() => {
            this.nextSlide();
        }, this.intervalTime);
    }

    stopAutoPlay() {
        clearInterval(this.intervalId);
    }

    addEventListeners() {
        this.slider.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.slider.addEventListener('mouseleave', () => this.startAutoPlay());

        // Touch events para móviles
        let touchStartX = 0;
        let touchEndX = 0;

        this.slider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            this.stopAutoPlay();
        }, { passive: true });

        this.slider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
            this.startAutoPlay();
        }, { passive: true });
    }

    handleSwipe(startX, endX) {
        const difference = startX - endX;
        if (difference > 50) {
            this.nextSlide();
        } else if (difference < -50) {
            this.prevSlide();
        }
    }
}
// Exporta la clase para poder usarla
export default SliderController;
///////////////////////////////////////////////////////////
export const index = {
    pilares: [
        {
            imgurl:'https://aveshonduras.org/wp-content/uploads/2021/10/Foto-5_Whiskered-Screech-Olw-Rofous-morph-Hotel-La-Casona-Campestre-Marcala-La-Paz_Walter-Ricardo-Paguada.jpeg',
            imgdsc:'Conservación de especies',
            enlace: 'https://www.google.com/'
        },
        {
            imgurl:'https://aveshonduras.org/wp-content/uploads/elementor/thumbs/IMG-20210328-WA0079-pzp1wqysaj5wrz50omusky8ay1etgvod3rgdmhvyiw.jpg',
            imgdsc:'Investigación',
            enlace: 'https://www.google.com/'
        },
        {
            imgurl:'https://aveshonduras.org/wp-content/uploads/elementor/thumbs/img_2064-2-pzp1wn7fj70rhjahal8aaz6gkhxcm39fr8ufpe1j7s.jpg',
            imgdsc:'Educación',
            enlace: 'https://www.google.com/'
        },
        {
            imgurl:'https://aveshonduras.org/wp-content/uploads/2021/07/OT-Parakeet-Sta-Cruz-de-Yojoa-Oliver-Komar.jpg',
            imgdsc:'Aviturismo',
            enlace: 'https://www.google.com/'
        },
    ]
}
