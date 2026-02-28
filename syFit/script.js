document.addEventListener('DOMContentLoaded', () => {
    
    // Header & Navigation
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    
    // Sticky Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileToggle.querySelector('span');
        if (navLinks.classList.contains('active')) {
            icon.textContent = 'close';
            document.body.style.overflow = 'hidden';
        } else {
            icon.textContent = 'menu';
            document.body.style.overflow = 'auto';
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileToggle.querySelector('span').textContent = 'menu';
            document.body.style.overflow = 'auto';
        });
    });

    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else {
        // Default to dark if prefers-color-scheme is dark
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            htmlElement.setAttribute('data-theme', 'dark');
        }
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Language Toggle logic
    const translations = {
        en: {
            nav_home: "Home",
            nav_services: "Services",
            nav_programs: "Programs",
            nav_results: "Results",
            nav_coach: "Coach",
            nav_contact: "Contact",
            hero_we_are: "Welcome to",
            hero_subtitle: "Transform your body and mind at Mila's premier fitness destination.",
            hero_join: "Join Now",
            hero_explore: "Explore Services",
            gallery_subtitle: "Weight Loss Challenge",
            gallery_title: "Weight Loss Season 7",
            footer_legal: "Legal",
            footer_privacy: "Privacy Policy",
            footer_terms: "Terms of Service",
            footer_crafted: "Crafted by",
        },


        ar: {
            nav_home: "الرئيسية",
            nav_services: "خدماتنا",
            nav_programs: "البرامج",
            nav_results: "النتائج",
            nav_coach: "المدرب",
            nav_contact: "اتصل بنا",
            hero_we_are: "مرحبًا بكم في ",
            hero_subtitle: "حول جسمك وعقلك في أفضل واجهة للياقة البدنية في ميلة.",
            hero_join: "انضم الآن",
            hero_explore: "اكتشف خدماتنا",
            why_subtitle: "لماذا تختارنا",
            why_title: "تجاوز حدودك",
            feat_1_title: "أفضل المعدات",
            feat_1_desc: "أحدث الآلات المطلوبة لكل مجموعة عضلية.",
            feat_2_title: "مدربون خبراء",
            feat_2_desc: "توجيه احترافي لمساعدتك في الوصول إلى أقصى إمكاناتك.",
            feat_3_title: "أوقات مرنة",
            feat_3_desc: "جداول مفتوحة تناسب نمط حياتك المزدحم تمامًا.",
            services_subtitle: "ما نقدمه",
            services_title: "خدماتنا المتميزة",
            serv_1_title: "تدريب شخصي",
            serv_1_desc: "جلسات فردية مصممة خصيصًا لأهدافك واحتياجاتك.",
            serv_2_title: "دروس جماعية",
            serv_2_desc: "دروس مليئة بالطاقة تبقيك متحفزًا وتتحرك معًا.",
            serv_3_title: "تدريب القوة",
            serv_3_desc: "ابنِ العضلات والقوة مع منطقة الأوزان الحرة الواسعة لدينا.",
            serv_4_title: "تمارين القلب",
            serv_4_desc: "عزز قدرتك على التحمل مع أجهزة الجري والدراجات المتقدمة.",
            serv_5_title: "توجيه غذائي",
            serv_5_desc: "خطط غذائية مخصصة لدعم تمارينك وتعافيك.",
            serv_6_title: "برامج متخصصة",
            serv_6_desc: "إجراءات مستهدفة لفقدان الوزن، اكتساب العضلات، والمزيد.",
            promo_subtitle: "عروض حصرية",
            promo_title: "العروض الحالية",
            programs_title: "برامجنا التدريبية",
            prog_men_title: "برنامج الرجال",
            prog_men_desc: "أطلق العنان للقوة والقدرة. انقر لعرض البرنامج الكامل.",
            prog_women_title: "برنامج النساء",
            prog_women_desc: "شد، نحت، وتمكين. انقر لعرض البرنامج الكامل.",
            results_subtitle: "نتائج حقيقية",
            results_title: "تحولات الجسم",
            coach_role: "المدرب الرئيسي",
            coach_name: "سيف الدين بوطبجة",
            coach_bio: "مدرب كمال أجسام محترف وأستاذ تربية بدنية (تعليم متوسط). متخصص في لياقة الرجال والأطفال، يجلب سيف الدين سنوات من الخبرة والشغف لمساعدتك في تحقيق أفضل ما لديك. سواء كنت مبتدئًا أو رياضيًا، فإن توجيهه يضمن النتائج.",
            coach_spec_1: "تدريب شخصي",
            coach_spec_2: "تكييف الرياضيين",
            coach_spec_3: "لياقة الأطفال",
            winners_subtitle: "قاعة المشاهير",
            winners_title: "جوائز التحدي الشهري",
            place_1: "المركز الأول",
            place_2: "المركز الثاني",
            place_3: "المركز الثالث",
            testi_subtitle: "آراء العملاء",
            testi_title: "ماذا يقول عملاؤنا",
            testi_1_text: "\"معدات ممتازة وجو رائع. لقد حققت أهدافي في الوزن أسرع مما كنت أتوقع!\"",
            testi_1_prog: "برنامج إنقاص الوزن",
            testi_2_text: "\"المدربون محترفون للغاية ودائمًا موجودون للمساعدة. أوصي بشدة بـ Syfit للجميع.\"",
            testi_2_prog: "اكتساب العضلات",
            testi_3_text: "\"صالة نظيفة، دروس جماعية مكثفة، ونتائج مذهلة. إنه أفضل جزء في يومي.\"",
            testi_3_prog: "دروس جماعية",
            testi_4_text: "\"فقدت 10 كجم في 3 أشهر بفضل التدريب الشخصي. شكرًا للمدرب سيف!\"",
            testi_4_prog: "تدريب شخصي",
            testi_5_text: "\"مرافق من الدرجة الأولى في ميلة. الخطط الغذائية تحدث فرقًا حقيقيًا.\"",
            testi_5_prog: "تدريب الرياضيين",
            testi_6_text: "\"المدربة فاطمة مذهلة! احترافيتها وتوجيهها ساعدتني على الشعور بالراحة والتحفيز.\"",
            testi_6_prog: "لياقة نسائية",
            testi_7_text: "\"أحب البيئة المخصصة للنساء فقط. شكراً للمدربة فاطمة على كل شيء!\"",
            testi_7_prog: "فقدان الوزن",
            contact_title: "اتصل بنا",
            contact_desc: "جاهز لبدء رحلتك؟ تواصل معنا أو قم  موقعنا بزيارتنا  اليوم موقعنا موضّح على الخريطة أدناه .",
            contact_loc: "الموقع",
            contact_phone: "الهاتف",
            contact_email: "البريد الإلكتروني",
            footer_slogan: "هدفك هو مهمتنا. انضم إلى عائلة Syfit اليوم.",
            footer_links: "روابط سريعة",
            prog_type_1: "فقدان الوزن",
            prog_type_2: "اكتساب العضلات",
            prog_type_3: "كارديو",
            prog_type_4: "تدريب شخصي",
            challenge_subtitle: "تجاوز حدودك",
            challenge_title: "تحدي إنقاص الوزن الشهري",
            challenge_desc: "انضم إلى تحدينا الشهري الحصري بقيادة المدرب الرئيسي سيف الدين. كل شهر، ندفع مجتمعنا لتحقيق نتائج مذهلة في إنقاص الوزن، والفوز بجوائز، وتغيير حياتهم معًا. هل أنت مستعد لتكون البطل التالي؟",
            challenge_btn: "انضم إلى التحدي",
            gallery_subtitle: "تحدي إنقاص الوزن",
            gallery_title: "تحدي إنقاص الوزن - الموسم 7",
            footer_legal: "قانوني",
            footer_privacy: "سياسة الخصوصية",
            footer_terms: "شروط الخدمة",
            footer_crafted: "تصميم وتنفيذ",
        }


    };

    const langToggle = document.getElementById('lang-toggle');
    const langText = langToggle.querySelector('.lang-text');
    let currentLang = localStorage.getItem('lang') || 'en';

    function updateLanguage(lang) {
        // Set dir and lang attribute
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        
        // Update button text
        langText.textContent = lang === 'ar' ? 'EN' : 'AR';

        // Update content
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        localStorage.setItem('lang', lang);
        currentLang = lang;
    }

    // Initialize Language
    updateLanguage(currentLang);

    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        updateLanguage(newLang);
    });

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation class to sections headers and cards
    document.querySelectorAll('.section-header, .service-card, .feature-card, .coach-wrapper, .winner-card').forEach(el => {
        el.style.opacity = '0';
        el.classList.add('animate-up'); // Pre-add class structure but control via observer
        el.classList.remove('animate-up'); // Remove initially
        observer.observe(el);
    });

    // Generic Slider Function
    function setupSlider(containerId, autoSlideTime = 5000) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const track = container.querySelector('.slider-track');
        const slides = Array.from(track.children);
        const nextBtn = container.querySelector('.next');
        const prevBtn = container.querySelector('.prev');
        let slideIndex = 0;

        function updateSlider() {
            // For RTL, we need to invert calculation usually, or CSS dir='rtl' handles it visually
            // but transform translateX works on logical pixels.
            // In RTL, -100% moves left, which is 'forward' in LTR but 'backward' in RTL.
            // However, browsers don't automatically flip transform directions for RTL usually.
            // We need to check direction.
            const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
            const value = isRTL ? (slideIndex * 100) : -(slideIndex * 100);
            track.style.transform = `translateX(${value}%)`;
        }

        // We also might want to swap next/prev logic or keep buttons fixed?
        // Usually Next moves "forward". In RTL "forward" is left.
        // So hitting Next (Right arrow visually in UI) should act as Next.
        // Let's stick to logical index increment.
        
        function nextSlide() {
            slideIndex = (slideIndex + 1) % slides.length;
            updateSlider();
        }

        function prevSlide() {
            slideIndex = (slideIndex - 1 + slides.length) % slides.length;
            updateSlider();
        }

        if(nextBtn && prevBtn) {
            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);
        }

        if (autoSlideTime > 0) {
            setInterval(nextSlide, autoSlideTime);
        }
        
        // Listen for lang change to update slider position immediately
        // (Optional optimization)
        const observer = new MutationObserver(() => {
           updateSlider(); 
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });
    }

    // Initialize Sliders
    setupSlider('promo-slider', 5000);
    setupSlider('gallery-slider', 5000);
    setupSlider('testimonial-slider', 6000);
    setupSlider('results-slider', 4500);
    setupSlider('winners-slider', 4000);


    // Modal / Lightbox Logic
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementsByClassName('close-modal')[0];

    // Event Delegation for Modal Triggers (Fixes 'not working' issue)
    document.body.addEventListener('click', (e) => {
        const trigger = e.target.closest('.zoomed-trigger');
        if (trigger) {
            // Find the image inside this trigger
            const img = trigger.querySelector('img');
            
            if (img) {
                // Get text content safely
                let title = '';
                // Check for specific h3 inside
                const h3 = trigger.querySelector('h3');
                if (h3) {
                   title = h3.innerText;
                } else {
                    // Check if it's a winner card
                    const ribbon = trigger.querySelector('.ribbon');
                    if (ribbon) {
                        title = (currentLang === 'ar' ? "الفائز: " : "Winner: ") + ribbon.innerText;
                    } else {
                        // Fallback to alt text (for promotions)
                        title = img.alt;
                    }
                }
                
                modal.style.display = "flex";
                modalImg.src = img.src;
                captionText.innerHTML = title;
            }
        }
    });

    // Close when clicking (x)
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    }

    // Close when clicking outside the image
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Scroll to Top Logic
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Active Navigation Link on Scroll (Scroll Spy)
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinkElements = document.querySelectorAll('.nav-link');

    const navObserverOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the middle of viewport
        threshold: 0
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                
                // Remove active class from all nav links
                navLinkElements.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to the corresponding nav link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, navObserverOptions);

    // Observe all sections
    sections.forEach(section => {
        navObserver.observe(section);
    });
});
