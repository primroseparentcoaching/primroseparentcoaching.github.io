// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced navbar scroll effects and scroll hint
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollHint = document.querySelector('.scroll-hint');
    const scrolled = window.scrollY > 50;
    
    navbar.classList.toggle('scrolled', scrolled);
    
    // Hide scroll hint when scrolled
    if (scrollHint) {
        scrollHint.classList.toggle('hidden', scrolled);
    }
});

// Smooth reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

// Parallax effect for hero section (limited to hero only)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroHeight = hero ? hero.offsetHeight : 0;
    
    // Only apply parallax when still within hero section
    if (hero && scrolled < heroHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    } else if (hero) {
        hero.style.transform = 'translateY(0)';
    }
});

// Enhanced button interactions
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.02)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    button.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(-1px) scale(1.01)';
    });
    
    button.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-3px) scale(1.02)';
    });
});

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    // Get form data for validation
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
        e.preventDefault();
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        e.preventDefault();
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Show sending state
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Let the form submit naturally to Formspree
    // The page will redirect or show Formspree's thank you page
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 10000;
        min-width: 300px;
        max-width: 500px;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        font-family: var(--font-primary);
        font-size: 0.875rem;
        line-height: 1.5;
    `;
    
    // Set colors based on type
    if (type === 'success') {
        notification.style.background = '#dcfce7';
        notification.style.color = '#166534';
        notification.style.border = '1px solid #bbf7d0';
    } else if (type === 'error') {
        notification.style.background = '#fef2f2';
        notification.style.color = '#dc2626';
        notification.style.border = '1px solid #fecaca';
    } else {
        notification.style.background = '#eff6ff';
        notification.style.color = '#2563eb';
        notification.style.border = '1px solid #dbeafe';
    }
    
    // Style notification content
    const content = notification.querySelector('.notification-content');
    content.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    `;
    
    // Style close button
    const closeButton = notification.querySelector('.notification-close');
    closeButton.style.cssText = `
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.2s ease;
    `;
    
    // Add close functionality
    closeButton.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Add hover effect to close button
    closeButton.addEventListener('mouseenter', () => {
        closeButton.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    });
    
    closeButton.addEventListener('mouseleave', () => {
        closeButton.style.backgroundColor = 'transparent';
    });
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Intersection Observer for animations
const animationObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, animationObserverOptions);

// Form input enhancements
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    // Add floating label effect
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
    
    // Check if input has value on page load
    if (input.value) {
        input.parentElement.classList.add('focused');
    }
});

// Keyboard navigation improvements
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounced scroll handler
const debouncedScrollHandler = debounce(() => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Preload critical resources
document.addEventListener('DOMContentLoaded', () => {
    // Preload fonts
    const fontPreloads = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600&display=swap'
    ];
    
    fontPreloads.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = font;
        link.as = 'style';
        document.head.appendChild(link);
    });
});

// Error handling for form submission
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to an error reporting service
});

// Testimonial Carousel Functionality
class TestimonialCarousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.testimonial-slide');
        this.dots = document.querySelectorAll('.dot');
        this.prevBtn = document.querySelector('.carousel-prev');
        this.nextBtn = document.querySelector('.carousel-next');
        this.autoPlayInterval = null;
        this.autoPlayDelay = 10000; // 10 seconds
        
        if (this.slides.length > 0) {
            this.init();
        }
    }
    
    init() {
        // Add event listeners
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Add dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
        
        // Add touch/swipe support
        this.addTouchSupport();
        
        // Start autoplay
        this.startAutoPlay();
        
        // Pause autoplay on hover
        const carousel = document.querySelector('.testimonial-carousel');
        carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
        carousel.addEventListener('mouseleave', () => this.startAutoPlay());
        
        // Pause autoplay when page is not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.stopAutoPlay();
            } else {
                this.startAutoPlay();
            }
        });
    }
    
    showSlide(index) {
        // Remove active class from all slides and dots
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        this.slides[index].classList.add('active');
        this.dots[index].classList.add('active');
        
        this.currentSlide = index;
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(nextIndex);
        this.resetAutoPlay();
    }
    
    prevSlide() {
        const prevIndex = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
        this.showSlide(prevIndex);
        this.resetAutoPlay();
    }
    
    goToSlide(index) {
        this.showSlide(index);
        this.resetAutoPlay();
    }
    
    startAutoPlay() {
        this.stopAutoPlay(); // Clear any existing interval
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
    
    addTouchSupport() {
        const carousel = document.querySelector('.testimonial-slides');
        let startX = 0;
        let endX = 0;
        
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        carousel.addEventListener('touchmove', (e) => {
            endX = e.touches[0].clientX;
        });
        
        carousel.addEventListener('touchend', () => {
            const threshold = 50; // Minimum distance for swipe
            const distance = startX - endX;
            
            if (Math.abs(distance) > threshold) {
                if (distance > 0) {
                    this.nextSlide(); // Swipe left - next slide
                } else {
                    this.prevSlide(); // Swipe right - previous slide
                }
            }
        });
    }
}

// FAQ Accordion Functionality
class FAQAccordion {
    constructor() {
        this.faqItems = document.querySelectorAll('.faq-item');
        this.init();
    }
    
    init() {
        this.faqItems.forEach((item, index) => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const toggle = item.querySelector('.faq-toggle');
            
            // Add click event listener
            question.addEventListener('click', () => {
                this.toggleFAQ(item, answer, toggle);
            });
            
            // Add keyboard support
            question.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleFAQ(item, answer, toggle);
                }
            });
            
            // Make focusable for keyboard navigation
            question.setAttribute('tabindex', '0');
            question.setAttribute('role', 'button');
            question.setAttribute('aria-expanded', 'false');
            answer.setAttribute('aria-hidden', 'true');
            
            // Set unique IDs for accessibility
            const answerId = `faq-answer-${index}`;
            answer.id = answerId;
            question.setAttribute('aria-controls', answerId);
        });
    }
    
    toggleFAQ(item, answer, toggle) {
        const isActive = item.classList.contains('active');
        
        if (isActive) {
            // Close the FAQ
            item.classList.remove('active');
            answer.style.maxHeight = null;
            item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            answer.setAttribute('aria-hidden', 'true');
        } else {
            // Close all other FAQs first (optional - for accordion behavior)
            // Comment out the next 6 lines if you want multiple FAQs open at once
            this.faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                    otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                    otherItem.querySelector('.faq-answer').setAttribute('aria-hidden', 'true');
                }
            });
            
            // Open the clicked FAQ
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            item.querySelector('.faq-question').setAttribute('aria-expanded', 'true');
            answer.setAttribute('aria-hidden', 'false');
        }
    }
}

// Parenting Style Quiz Functionality
class ParentingQuiz {
    constructor() {
        this.currentQuestion = 1;
        this.totalQuestions = 6;
        this.answers = {};
        this.questions = document.querySelectorAll('.quiz-question');
        this.progressFill = document.getElementById('progressFill');
        this.currentQuestionSpan = document.getElementById('currentQuestion');
        this.totalQuestionsSpan = document.getElementById('totalQuestions');
        this.quizContent = document.getElementById('quizContent');
        this.quizResults = document.getElementById('quizResults');
        
        this.init();
    }
    
    init() {
        // Set total questions
        this.totalQuestionsSpan.textContent = this.totalQuestions;
        
        // Add click listeners to all quiz options
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', (e) => {
                this.selectOption(e.currentTarget);
            });
        });
        
        // Initialize progress
        this.updateProgress();
    }
    
    selectOption(selectedOption) {
        const questionDiv = selectedOption.closest('.quiz-question');
        const questionNumber = parseInt(questionDiv.dataset.question);
        const style = selectedOption.dataset.style;
        
        // Remove selected class from all options in this question
        questionDiv.querySelectorAll('.quiz-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Add selected class to clicked option
        selectedOption.classList.add('selected');
        
        // Store answer
        this.answers[questionNumber] = style;
        
        // Wait a moment for visual feedback, then proceed
        setTimeout(() => {
            if (questionNumber < this.totalQuestions) {
                this.nextQuestion();
            } else {
                this.showResults();
            }
        }, 800);
    }
    
    nextQuestion() {
        // Hide current question
        this.questions[this.currentQuestion - 1].classList.remove('active');
        
        // Show next question
        this.currentQuestion++;
        this.questions[this.currentQuestion - 1].classList.add('active');
        
        // Update progress
        this.updateProgress();
    }
    
    updateProgress() {
        const progressPercent = (this.currentQuestion / this.totalQuestions) * 100;
        this.progressFill.style.width = `${progressPercent}%`;
        this.currentQuestionSpan.textContent = this.currentQuestion;
    }
    
    showResults() {
        // Calculate dominant parenting style
        const styleCount = {};
        Object.values(this.answers).forEach(style => {
            styleCount[style] = (styleCount[style] || 0) + 1;
        });
        
        const dominantStyle = Object.keys(styleCount).reduce((a, b) => 
            styleCount[a] > styleCount[b] ? a : b
        );
        
        // Hide quiz content and show results
        this.quizContent.style.display = 'none';
        this.quizResults.style.display = 'block';
        
        // Display results based on dominant style
        this.displayStyleResults(dominantStyle);
    }
    
    displayStyleResults(style) {
        const resultTitle = document.getElementById('resultTitle');
        const resultDescription = document.getElementById('resultDescription');
        
        const styleResults = {
            authoritative: {
                title: "Balanced & Nurturing Parent",
                icon: "🌟",
                description: `
                    <h4>Your Parenting Strengths:</h4>
                    <p>You naturally balance warmth with structure, creating a supportive environment where your children can thrive. You're responsive to their needs while maintaining clear expectations.</p>
                    <ul>
                        <li>Strong emotional connection with your children</li>
                        <li>Clear communication and consistent boundaries</li>
                        <li>Age-appropriate expectations and flexibility</li>
                    </ul>
                    <h4>Growth Opportunities:</h4>
                    <p>Even with a solid foundation, coaching can help you fine-tune your approach, navigate new challenges as your children grow, and maintain balance during stressful periods.</p>
                `
            },
            permissive: {
                title: "Loving & Flexible Parent",
                icon: "💝",
                description: `
                    <h4>Your Parenting Strengths:</h4>
                    <p>You have a warm, accepting relationship with your children and value their autonomy. Your home is filled with love and your children feel heard and valued.</p>
                    <ul>
                        <li>Strong emotional bond with your children</li>
                        <li>Open communication and trust</li>
                        <li>Respect for your child's individuality</li>
                    </ul>
                    <h4>Growth Opportunities:</h4>
                    <p>Coaching can help you establish clearer boundaries and consistent expectations while maintaining your loving connection. Learn to be firm without losing warmth.</p>
                `
            },
            authoritarian: {
                title: "Structured & Dedicated Parent",
                icon: "🎯",
                description: `
                    <h4>Your Parenting Strengths:</h4>
                    <p>You're committed to raising responsible, well-behaved children. Your consistency and clear expectations provide security and structure in your home.</p>
                    <ul>
                        <li>Clear expectations and consistent follow-through</li>
                        <li>Strong focus on responsibility and respect</li>
                        <li>Reliable structure and routine</li>
                    </ul>
                    <h4>Growth Opportunities:</h4>
                    <p>Coaching can help you build warmer connections while maintaining your valuable structure. Learn to balance firmness with emotional responsiveness.</p>
                `
            },
            uninvolved: {
                title: "Seeking & Growing Parent",
                icon: "🌱",
                description: `
                    <h4>Your Parenting Journey:</h4>
                    <p>You're honest about feeling overwhelmed and unsure sometimes - and that self-awareness is actually a strength. Many parents feel this way but don't admit it.</p>
                    <ul>
                        <li>Self-aware and open to growth</li>
                        <li>Willing to seek help and support</li>
                        <li>Ready to develop new skills</li>
                    </ul>
                    <h4>Growth Opportunities:</h4>
                    <p>Coaching can provide you with confidence, practical strategies, and the support you need to feel empowered in your parenting role. You're already taking the first step!</p>
                `
            }
        };
        
        const result = styleResults[style];
        document.querySelector('.result-icon').textContent = result.icon;
        resultTitle.textContent = result.title;
        resultDescription.innerHTML = result.description;
    }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TestimonialCarousel();
    new FAQAccordion();
    
    // Initialize reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
    
    // Add smooth entrance animation to hero elements
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero .reveal');
        heroElements.forEach(el => el.classList.add('revealed'));
    }, 300);
    
    // Scroll hint functionality
    const scrollHint = document.querySelector('.scroll-hint');
    if (scrollHint) {
        scrollHint.addEventListener('click', () => {
            const servicesSection = document.querySelector('#services');
            if (servicesSection) {
                const headerOffset = 80;
                const elementPosition = servicesSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Service Worker registration (for future PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker can be added later for caching and offline functionality
        console.log('Service Worker support detected');
    });
}
