// ============================================
// DRIVEON - Premium Car Rental Website
// JavaScript Functionality
// ============================================

// ============================================
// 1. DATA
// ============================================

const carsData = [
    {
        id: 1,
        name: 'Toyota Corolla',
        brand: 'Toyota',
        model: 'Corolla',
        category: 'economy',
        image: 'images/toyota-corolla.jpg',
        price: 45,
        rating: 4.5,
        reviews: 128,
        seats: 5,
        doors: 4,
        transmission: 'automatic',
        fuel: 'petrol',
        features: ['Air Conditioning', 'Power Steering', 'ABS', 'Backup Camera'],
        description: 'An affordable and reliable compact sedan perfect for daily commuting and short trips.'
    },
    {
        id: 2,
        name: 'Honda Civic',
        brand: 'Honda',
        model: 'Civic',
        category: 'sedan',
        image: 'images/honda-civic.jpg',
        price: 55,
        rating: 4.7,
        reviews: 156,
        seats: 5,
        doors: 4,
        transmission: 'automatic',
        fuel: 'petrol',
        features: ['Air Conditioning', 'Power Steering', 'ABS', 'Touchscreen Display', 'Backup Camera'],
        description: 'Sleek and stylish sedan combining comfort with excellent fuel efficiency.'
    },
    {
        id: 3,
        name: 'Toyota RAV4',
        brand: 'Toyota',
        model: 'RAV4',
        category: 'suv',
        image: 'images/toyota-rav4.jpg',
        price: 75,
        rating: 4.8,
        reviews: 243,
        seats: 5,
        doors: 4,
        transmission: 'automatic',
        fuel: 'hybrid',
        features: ['Air Conditioning', 'Power Steering', 'ABS', 'All-Wheel Drive', 'Cruise Control', 'Backup Camera'],
        description: 'Spacious SUV with great handling and fuel efficiency, perfect for family trips.'
    },
    {
        id: 4,
        name: 'Mercedes-Benz S-Class',
        brand: 'Mercedes-Benz',
        model: 'S-Class',
        category: 'luxury',
        image: 'images/mercedes-s-class.jpg',
        price: 299,
        rating: 4.9,
        reviews: 87,
        seats: 5,
        doors: 4,
        transmission: 'automatic',
        fuel: 'petrol',
        features: ['Air Conditioning', 'Power Steering', 'ABS', 'Leather Seats', 'Panoramic Roof', 'Premium Sound System', 'Backup Camera'],
        description: 'Ultimate luxury sedan with cutting-edge technology and supreme comfort.'
    },
    {
        id: 5,
        name: 'Porsche 911',
        brand: 'Porsche',
        model: '911',
        category: 'sports',
        image: 'images/porsche-911.jpg',
        price: 399,
        rating: 4.9,
        reviews: 64,
        seats: 4,
        doors: 2,
        transmission: 'automatic',
        fuel: 'petrol',
        features: ['Air Conditioning', 'Power Steering', 'ABS', 'Sport Suspension', 'Premium Sound System', 'Navigation'],
        description: 'Legendary sports car delivering pure driving excitement and performance.'
    },
    {
        id: 6,
        name: 'Tesla Model 3',
        brand: 'Tesla',
        model: 'Model 3',
        category: 'electric',
        image: 'images/tesla-model-3.jpg',
        price: 85,
        rating: 4.8,
        reviews: 192,
        seats: 5,
        doors: 4,
        transmission: 'automatic',
        fuel: 'electric',
        features: ['Air Conditioning', 'Power Steering', 'ABS', 'Autopilot', 'Touchscreen Display', 'Premium Sound System'],
        description: 'Eco-friendly electric sedan with superior performance and cutting-edge technology.'
    },
    {
        id: 7,
        name: 'BMW X5',
        brand: 'BMW',
        model: 'X5',
        category: 'suv',
        image: 'images/bmw-x5.jpg',
        price: 125,
        rating: 4.7,
        reviews: 134,
        seats: 7,
        doors: 4,
        transmission: 'automatic',
        fuel: 'diesel',
        features: ['Air Conditioning', 'Power Steering', 'ABS', 'Leather Seats', 'Panoramic Roof', '3rd Row Seating'],
        description: 'Premium luxury SUV with advanced technology and superior comfort for the whole family.'
    },
    {
        id: 8,
        name: 'Nissan Altima',
        brand: 'Nissan',
        model: 'Altima',
        category: 'sedan',
        image: 'images/nissan-altima.jpg',
        price: 50,
        rating: 4.6,
        reviews: 98,
        seats: 5,
        doors: 4,
        transmission: 'automatic',
        fuel: 'petrol',
        features: ['Air Conditioning', 'Power Steering', 'ABS', 'Cruise Control', 'Backup Camera', 'Touchscreen Display'],
        description: 'Elegant sedan offering a smooth ride and excellent value for money.'
    }
];

const testimonialsData = [
    {
        id: 1,
        name: 'Sarah Johnson',
        car: 'Toyota Corolla',
        rating: 5,
        image: 'images/sarah-johnson.jpg',
        text: 'Outstanding service! The booking process was smooth and the car was immaculate. Highly recommended!'
    },
    {
        id: 2,
        name: 'Michael Chen',
        car: 'BMW X5',
        rating: 5,
        image: 'images/michael-chen.jpg',
        text: 'Excellent experience with DRIVEON. The BMW was luxurious and the customer support was exceptional.'
    },
    {
        id: 3,
        name: 'Emma Wilson',
        car: 'Tesla Model 3',
        rating: 5,
        image: 'images/emma-wilson.jpg',
        text: 'Best car rental experience ever! Great selection of vehicles and very professional team.'
    },
    {
        id: 4,
        name: 'David Martinez',
        car: 'Mercedes-Benz S-Class',
        rating: 4.5,
        image: 'images/david-martinez.jpg',
        text: 'Premium service from start to finish. The luxury car made our trip absolutely memorable.'
    }
];

// ============================================
// 2. DOM ELEMENTS
// ============================================

// Navigation
const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-link');

// Hero & Booking
const pickupDate = document.getElementById('pickup-date');
const returnDate = document.getElementById('return-date');
const searchCarsBtn = document.getElementById('search-cars-btn');
const searchSummary = document.getElementById('search-summary');
const summaryText = document.getElementById('summary-text');

// Cars
const carsContainer = document.getElementById('cars-container');
const carsCount = document.getElementById('cars-count');

// Filters
const carSearch = document.getElementById('car-search');
const categoryFilter = document.getElementById('category-filter');
const transmissionFilter = document.getElementById('transmission-filter');
const fuelFilter = document.getElementById('fuel-filter');
const seatsFilter = document.getElementById('seats-filter');
const sortFilter = document.getElementById('sort-filter');
const resetFilters = document.getElementById('reset-filters');

// Modals
const carModal = document.getElementById('car-modal');
const bookingModal = document.getElementById('booking-modal');
const modalClose = carModal.querySelector('.modal-close');
const bookingModalClose = bookingModal.querySelector('.booking-modal-close');

// Testimonials
const testimonialSlider = document.getElementById('testimonials-slider');
const prevBtn = document.getElementById('prev-testimonial');
const nextBtn = document.getElementById('next-testimonial');
const testimonialDots = document.getElementById('testimonials-dots');

// FAQ
const faqItems = document.querySelectorAll('.faq-item');
const faqQuestions = document.querySelectorAll('.faq-question');

// Contact
const contactForm = document.getElementById('contact-form');
const contactSuccess = document.getElementById('contact-success');

// Newsletter
const newsletterForm = document.getElementById('newsletter-form');

// ============================================
// 3. NAVIGATION
// ============================================

// Set minimum date to today
const today = new Date().toISOString().split('T')[0];
pickupDate.setAttribute('min', today);
returnDate.setAttribute('min', today);

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// 4. CAR RENDERING
// ============================================

let filteredCars = [...carsData];
let selectedCarForBooking = null;
let bookingStepData = {
    selectedCar: null,
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    returnDate: '',
    pickupTime: '09:00',
    returnTime: '09:00',
    extras: [],
    currentStep: 1
};

function renderCars(cars = carsData) {
    carsContainer.innerHTML = '';
    
    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card fade-in';
        
        const starsHtml = generateStars(car.rating);
        
        carCard.innerHTML = `
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}" loading="lazy">
                <span class="car-badge">${car.category.charAt(0).toUpperCase() + car.category.slice(1)}</span>
            </div>
            <div class="car-info">
                <div class="car-header">
                    <div class="car-name">
                        <h3>${car.name}</h3>
                        <p class="car-category">${car.brand}</p>
                    </div>
                    <div class="car-rating">
                        <div class="stars">${starsHtml}</div>
                        <span class="rating-count">${car.reviews} reviews</span>
                    </div>
                </div>
                
                <div class="car-specs">
                    <div class="spec">
                        <i class="fas fa-users"></i>
                        ${car.seats} Seats
                    </div>
                    <div class="spec">
                        <i class="fas fa-cog"></i>
                        ${car.transmission.charAt(0).toUpperCase() + car.transmission.slice(1)}
                    </div>
                    <div class="spec">
                        <i class="fas fa-gas-pump"></i>
                        ${car.fuel.charAt(0).toUpperCase() + car.fuel.slice(1)}
                    </div>
                </div>
                
                <div class="car-price">
                    <div>
                        <span class="price-value">$${car.price}</span>
                        <span class="price-period">/day</span>
                    </div>
                </div>
                
                <div class="car-actions">
                    <button class="btn btn-details" data-id="${car.id}">View Details</button>
                    <button class="btn btn-book" data-id="${car.id}">Book Now</button>
                </div>
            </div>
        `;
        
        carsContainer.appendChild(carCard);
    });
    
    updateCarsCount(cars.length);
    attachCarButtonListeners();
    triggerScrollAnimations();
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function updateCarsCount(count) {
    carsCount.textContent = count;
}

// ============================================
// 5. FILTERING & SORTING
// ============================================

function applyFilters() {
    let filtered = [...carsData];
    
    // Search filter
    const searchTerm = carSearch.value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(car =>
            car.name.toLowerCase().includes(searchTerm) ||
            car.brand.toLowerCase().includes(searchTerm) ||
            car.model.toLowerCase().includes(searchTerm)
        );
    }
    
    // Category filter
    const category = categoryFilter.value;
    if (category) {
        filtered = filtered.filter(car => car.category === category);
    }
    
    // Transmission filter
    const transmission = transmissionFilter.value;
    if (transmission) {
        filtered = filtered.filter(car => car.transmission === transmission);
    }
    
    // Fuel filter
    const fuel = fuelFilter.value;
    if (fuel) {
        filtered = filtered.filter(car => car.fuel === fuel);
    }
    
    // Seats filter
    const seats = seatsFilter.value;
    if (seats) {
        filtered = filtered.filter(car => car.seats === parseInt(seats));
    }
    
    // Sorting
    const sortBy = sortFilter.value;
    if (sortBy === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    }
    
    filteredCars = filtered;
    renderCars(filtered);
}

function resetAllFilters() {
    carSearch.value = '';
    categoryFilter.value = '';
    transmissionFilter.value = '';
    fuelFilter.value = '';
    seatsFilter.value = '';
    sortFilter.value = '';
    filteredCars = [...carsData];
    renderCars(carsData);
}

// Event listeners for filters
carSearch.addEventListener('input', applyFilters);
categoryFilter.addEventListener('change', applyFilters);
transmissionFilter.addEventListener('change', applyFilters);
fuelFilter.addEventListener('change', applyFilters);
seatsFilter.addEventListener('change', applyFilters);
sortFilter.addEventListener('change', applyFilters);
resetFilters.addEventListener('click', resetAllFilters);

// ============================================
// 6. CAR DETAILS MODAL
// ============================================

function openCarModal(carId) {
    const car = carsData.find(c => c.id === parseInt(carId));
    if (!car) return;
    
    selectedCarForBooking = car;
    
    // Update modal content
    document.getElementById('modal-car-image').src = car.image;
    document.getElementById('modal-car-name').textContent = car.name;
    document.getElementById('modal-car-price').textContent = '$' + car.price;
    document.getElementById('modal-car-rating').innerHTML = generateStars(car.rating);
    document.getElementById('modal-car-rating-text').textContent = car.rating + ' (' + car.reviews + ' reviews)';
    document.getElementById('modal-seats').textContent = car.seats;
    document.getElementById('modal-doors').textContent = car.doors;
    document.getElementById('modal-transmission').textContent = car.transmission.charAt(0).toUpperCase() + car.transmission.slice(1);
    document.getElementById('modal-fuel').textContent = car.fuel.charAt(0).toUpperCase() + car.fuel.slice(1);
    
    // Features list
    const featuresList = document.getElementById('modal-features-list');
    featuresList.innerHTML = '';
    car.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    document.getElementById('modal-description').textContent = car.description;
    
    // Show modal
    carModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCarModal() {
    carModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function attachCarButtonListeners() {
    const viewDetailsButtons = document.querySelectorAll('.btn-details');
    const bookButtons = document.querySelectorAll('.btn-book');
    
    viewDetailsButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const carId = e.target.dataset.id;
            openCarModal(carId);
        });
    });
    
    bookButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const carId = e.target.dataset.id;
            selectedCarForBooking = carsData.find(c => c.id === parseInt(carId));
            openBookingModal(selectedCarForBooking);
        });
    });
}

// Modal close listeners
if (modalClose) {
    modalClose.addEventListener('click', closeCarModal);
}

document.getElementById('book-modal-btn').addEventListener('click', () => {
    closeCarModal();
    if (selectedCarForBooking) {
        openBookingModal(selectedCarForBooking);
    }
});

const modalCloseBtns = document.querySelectorAll('.modal-close-btn');
modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.closest('#car-modal')) {
            closeCarModal();
        } else if (btn.closest('#booking-modal')) {
            closeBookingModal();
        }
    });
});

// Close booking modal button
if (bookingModalClose) {
    bookingModalClose.addEventListener('click', closeBookingModal);
}

// Close modals on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (carModal.classList.contains('active')) {
            closeCarModal();
        }
        if (bookingModal.classList.contains('active')) {
            closeBookingModal();
        }
    }
});

// ============================================
// 7. BOOKING SYSTEM
// ============================================

const extrasData = [
    { id: 1, name: 'Additional Driver', description: 'Add an extra driver to your rental', price: 15 },
    { id: 2, name: 'GPS Navigation', description: 'Advanced GPS system with real-time traffic', price: 12 },
    { id: 3, name: 'Child Seat', description: 'Safety-certified child seat for young passengers', price: 10 },
    { id: 4, name: 'Premium Insurance', description: 'Full coverage with zero deductible', price: 25 }
];

function openBookingModal(car) {
    bookingStepData.selectedCar = car;
    bookingStepData.currentStep = 1;
    
    renderBookingSteps();
    renderBookingStep(1);
    
    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
    bookingModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function renderBookingSteps() {
    const stepsContainer = document.querySelector('.booking-steps');
    stepsContainer.innerHTML = '';
    
    const steps = [
        { number: 1, label: 'Choose Vehicle' },
        { number: 2, label: 'Location & Dates' },
        { number: 3, label: 'Extras' },
        { number: 4, label: 'Review & Confirm' }
    ];
    
    steps.forEach(step => {
        const indicator = document.createElement('div');
        indicator.className = `step-indicator ${step.number === bookingStepData.currentStep ? 'active' : ''}`;
        indicator.innerHTML = `
            <div class="step-number">${step.number}</div>
            <div class="step-label">${step.label}</div>
        `;
        stepsContainer.appendChild(indicator);
    });
}

function renderBookingStep(step) {
    const contentDiv = document.querySelector('.booking-step-content');
    contentDiv.innerHTML = '';
    
    if (step === 1) {
        // Choose vehicle
        renderChooseVehicleStep();
    } else if (step === 2) {
        // Location and dates
        renderLocationDatesStep();
    } else if (step === 3) {
        // Extras
        renderExtrasStep();
    } else if (step === 4) {
        // Review
        renderReviewStep();
    }
}

function renderChooseVehicleStep() {
    const content = document.querySelector('.booking-step-content');
    
    content.innerHTML = `
        <h3 class="step-title">Select Your Vehicle</h3>
        <p>You selected: <strong>${bookingStepData.selectedCar.name}</strong></p>
        
        <div style="margin: 2rem 0; padding: 2rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); text-align: center;">
            <img src="${bookingStepData.selectedCar.image}" alt="${bookingStepData.selectedCar.name}" style="width: 100%; max-height: 250px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 1rem;">
            <h4>${bookingStepData.selectedCar.name}</h4>
            <p style="color: var(--text-secondary); margin: 0.5rem 0;">Category: ${bookingStepData.selectedCar.category}</p>
            <p style="color: var(--primary-color); font-size: 1.5rem; font-weight: 700; margin: 1rem 0;">$${bookingStepData.selectedCar.price}/day</p>
        </div>
        
        <p style="text-align: center; color: var(--text-secondary);">Click "Next" to continue with your booking</p>
        
        <div class="booking-actions">
            <button class="btn btn-secondary" onclick="closeBookingModal()">Cancel</button>
            <button class="btn btn-primary" onclick="goToBookingStep(2)">Next</button>
        </div>
    `;
}

function renderLocationDatesStep() {
    const content = document.querySelector('.booking-step-content');
    
    content.innerHTML = `
        <h3 class="step-title">Pickup & Return Details</h3>
        
        <div class="booking-form" style="display: grid; gap: 1.5rem;">
            <div class="form-group">
                <label for="booking-pickup-location">Pick-up Location</label>
                <input type="text" id="booking-pickup-location" placeholder="Enter city or location" value="${bookingStepData.pickupLocation}">
            </div>
            
            <div class="form-group">
                <label for="booking-dropoff-location">Drop-off Location</label>
                <input type="text" id="booking-dropoff-location" placeholder="Enter city or location" value="${bookingStepData.dropoffLocation}">
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div class="form-group">
                    <label for="booking-pickup-date">Pick-up Date</label>
                    <input type="date" id="booking-pickup-date" value="${bookingStepData.pickupDate}">
                </div>
                
                <div class="form-group">
                    <label for="booking-return-date">Return Date</label>
                    <input type="date" id="booking-return-date" value="${bookingStepData.returnDate}">
                </div>
            </div>
        </div>
        
        <div class="booking-actions">
            <button class="btn btn-secondary" onclick="goToBookingStep(1)">Back</button>
            <button class="btn btn-primary" onclick="goToBookingStep(3)">Next</button>
        </div>
    `;
    
    // Set min dates
    const minDate = new Date().toISOString().split('T')[0];
    document.getElementById('booking-pickup-date').setAttribute('min', minDate);
    document.getElementById('booking-return-date').setAttribute('min', minDate);
}

function renderExtrasStep() {
    const content = document.querySelector('.booking-step-content');
    
    content.innerHTML = `
        <h3 class="step-title">Optional Extras</h3>
        <p>Add extras to enhance your rental experience</p>
        
        <div class="extras-list">
            ${extrasData.map(extra => `
                <div class="extra-item">
                    <input type="checkbox" id="extra-${extra.id}" value="${extra.id}" ${bookingStepData.extras.includes(extra.id) ? 'checked' : ''}>
                    <div class="extra-info">
                        <div class="extra-name">${extra.name}</div>
                        <div class="extra-desc">${extra.description}</div>
                    </div>
                    <div class="extra-price">+$${extra.price}/day</div>
                </div>
            `).join('')}
        </div>
        
        <div class="booking-actions">
            <button class="btn btn-secondary" onclick="goToBookingStep(2)">Back</button>
            <button class="btn btn-primary" onclick="goToBookingStep(4)">Next</button>
        </div>
    `;
    
    // Attach checkbox listeners
    const checkboxes = content.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const extraId = parseInt(e.target.value);
            if (e.target.checked) {
                if (!bookingStepData.extras.includes(extraId)) {
                    bookingStepData.extras.push(extraId);
                }
            } else {
                bookingStepData.extras = bookingStepData.extras.filter(id => id !== extraId);
            }
        });
    });
}

function renderReviewStep() {
    const content = document.querySelector('.booking-step-content');
    
    // Get all input values
    const pickupLoc = document.getElementById('booking-pickup-location')?.value || bookingStepData.pickupLocation;
    const dropoffLoc = document.getElementById('booking-dropoff-location')?.value || bookingStepData.dropoffLocation;
    const pickDate = document.getElementById('booking-pickup-date')?.value || bookingStepData.pickupDate;
    const retDate = document.getElementById('booking-return-date')?.value || bookingStepData.returnDate;
    
    bookingStepData.pickupLocation = pickupLoc;
    bookingStepData.dropoffLocation = dropoffLoc;
    bookingStepData.pickupDate = pickDate;
    bookingStepData.returnDate = retDate;
    
    // Validate inputs
    if (!pickupLoc || !dropoffLoc || !pickDate || !retDate) {
        content.innerHTML = `
            <h3 class="step-title">Error</h3>
            <p style="color: var(--error-color);">Please fill in all required fields.</p>
            <div class="booking-actions">
                <button class="btn btn-secondary" onclick="goToBookingStep(2)">Back</button>
            </div>
        `;
        return;
    }
    
    // Validate date order BEFORE calculation
    const startDate = new Date(pickDate);
    const endDate = new Date(retDate);
    
    if (endDate < startDate) {
        content.innerHTML = `
            <h3 class="step-title">Error</h3>
            <p style="color: var(--error-color);">Return date must be on or after the pickup date.</p>
            <div class="booking-actions">
                <button class="btn btn-secondary" onclick="goToBookingStep(2)">Back</button>
            </div>
        `;
        return;
    }
    
    // Calculate rental days
    // Same day rental = 1 day, next day return = 2 days, etc.
    const rentalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    
    // Calculate pricing
    const basePrice = bookingStepData.selectedCar.price * rentalDays;
    const extrasPrice = bookingStepData.extras.reduce((sum, extraId) => {
        const extra = extrasData.find(e => e.id === extraId);
        return sum + (extra ? extra.price * rentalDays : 0);
    }, 0);
    const taxRate = 0.12;
    const taxes = (basePrice + extrasPrice) * taxRate;
    const totalPrice = basePrice + extrasPrice + taxes;
    
    const extrasHtml = bookingStepData.extras.length > 0
        ? bookingStepData.extras.map(extraId => {
            const extra = extrasData.find(e => e.id === extraId);
            return `<tr><td>${extra.name} (${rentalDays} days)</td><td>$${(extra.price * rentalDays).toFixed(2)}</td></tr>`;
        }).join('')
        : '';
    
    content.innerHTML = `
        <h3 class="step-title">Booking Summary</h3>
        
        <div style="background: var(--secondary-color); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 2rem;">
            <h4 style="margin-bottom: 1rem;">Rental Details</h4>
            <table class="summary-table">
                <tr>
                    <td>Vehicle:</td>
                    <td><strong>${bookingStepData.selectedCar.name}</strong></td>
                </tr>
                <tr>
                    <td>Pick-up:</td>
                    <td>${pickupLoc} - ${formatDate(pickDate)}</td>
                </tr>
                <tr>
                    <td>Return:</td>
                    <td>${dropoffLoc} - ${formatDate(retDate)}</td>
                </tr>
                <tr>
                    <td>Duration:</td>
                    <td>${rentalDays} day(s)</td>
                </tr>
            </table>
        </div>
        
        <div style="background: var(--secondary-color); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 2rem;">
            <h4 style="margin-bottom: 1rem;">Price Breakdown</h4>
            <table class="summary-table">
                <tr>
                    <td>Base Price (${rentalDays} days × $${bookingStepData.selectedCar.price}):</td>
                    <td>$${basePrice.toFixed(2)}</td>
                </tr>
                ${extrasHtml ? `${extrasHtml}<tr><td>Service Fee (12%):</td><td>$${taxes.toFixed(2)}</td></tr>` : `<tr><td>Service Fee (12%):</td><td>$${taxes.toFixed(2)}</td></tr>`}
                <tr>
                    <td><strong>Total Price:</strong></td>
                    <td><strong>$${totalPrice.toFixed(2)}</strong></td>
                </tr>
            </table>
        </div>
        
        <div class="booking-actions">
            <button class="btn btn-secondary" onclick="goToBookingStep(3)">Back</button>
            <button class="btn btn-primary" onclick="confirmBooking('${totalPrice.toFixed(2)}')">Confirm Booking</button>
        </div>
    `;
}

function goToBookingStep(step) {
    if (step === 2) {
        // Validate step 1
    } else if (step === 3) {
        // Save step 2 data
        const pickupLoc = document.getElementById('booking-pickup-location')?.value;
        const dropoffLoc = document.getElementById('booking-dropoff-location')?.value;
        const pickDate = document.getElementById('booking-pickup-date')?.value;
        const retDate = document.getElementById('booking-return-date')?.value;
        
        if (!pickupLoc || !dropoffLoc || !pickDate || !retDate) {
            alert('Please fill in all required fields');
            return;
        }
        
        bookingStepData.pickupLocation = pickupLoc;
        bookingStepData.dropoffLocation = dropoffLoc;
        bookingStepData.pickupDate = pickDate;
        bookingStepData.returnDate = retDate;
    }
    
    bookingStepData.currentStep = step;
    renderBookingSteps();
    renderBookingStep(step);
}

function confirmBooking(totalPrice) {
    const confirmContent = document.querySelector('.booking-step-content');
    
    // Generate booking reference
    const bookingRef = 'DRV' + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    confirmContent.innerHTML = `
        <div class="confirmation-screen">
            <div class="confirmation-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3>Booking Confirmed!</h3>
            <p style="color: var(--text-secondary); margin-bottom: 2rem;">Your rental has been successfully booked</p>
            
            <div class="confirmation-ref">
                <div class="ref-label">Booking Reference</div>
                <div class="ref-number">${bookingRef}</div>
            </div>
            
            <div style="text-align: left; background: var(--secondary-color); padding: 1.5rem; border-radius: var(--radius-md); margin: 2rem 0;">
                <h4 style="margin-bottom: 1rem;">Booking Details</h4>
                <p><strong>Vehicle:</strong> ${bookingStepData.selectedCar.name}</p>
                <p><strong>Pick-up:</strong> ${bookingStepData.pickupLocation} - ${formatDate(bookingStepData.pickupDate)}</p>
                <p><strong>Return:</strong> ${bookingStepData.dropoffLocation} - ${formatDate(bookingStepData.returnDate)}</p>
                <p><strong>Total Price:</strong> <span style="color: var(--primary-color); font-weight: 700;">$${totalPrice}</span></p>
            </div>
            
            <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 2rem;">A confirmation email has been sent to your email address with all booking details.</p>
            
            <button class="btn btn-primary" style="width: 100%;" onclick="closeBookingModal()">Done</button>
        </div>
    `;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// Search cars button
searchCarsBtn.addEventListener('click', () => {
    const pickupLoc = document.getElementById('pickup-location').value;
    const dropoffLoc = document.getElementById('dropoff-location').value;
    const pickDate = document.getElementById('pickup-date').value;
    const returnDate = document.getElementById('return-date').value;
    
    if (!pickupLoc || !dropoffLoc || !pickDate || !returnDate) {
        alert('Please fill in all required fields');
        return;
    }
    
    summaryText.textContent = `${pickupLoc} → ${dropoffLoc} (${formatDate(pickDate)} - ${formatDate(returnDate)})`;
    searchSummary.style.display = 'block';
    
    // Scroll to cars section
    document.getElementById('cars').scrollIntoView({ behavior: 'smooth' });
});

// Book Now buttons
document.getElementById('nav-book-btn').addEventListener('click', (e) => {
    e.preventDefault();
    if (selectedCarForBooking) {
        openBookingModal(selectedCarForBooking);
    } else {
        openBookingModal(carsData[0]);
    }
});

const offerBookButtons = document.querySelectorAll('.btn-offer-book');
offerBookButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        openBookingModal(carsData[0]);
    });
});

// ============================================
// 8. TESTIMONIALS SLIDER
// ============================================

let currentTestimonial = 0;

function renderTestimonials() {
    testimonialSlider.innerHTML = '';
    testimonialsData.forEach((testimonial, index) => {
        const card = document.createElement('div');
        card.className = `testimonial-card ${index === 0 ? 'active' : ''}`;
        card.innerHTML = `
            <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-avatar">
            <h4 class="testimonial-name">${testimonial.name}</h4>
            <p class="testimonial-car">${testimonial.car}</p>
            <div class="testimonial-stars">${'★'.repeat(Math.floor(testimonial.rating))}${testimonial.rating % 1 !== 0 ? '☆' : ''}</div>
            <p class="testimonial-text">"${testimonial.text}"</p>
        `;
        testimonialSlider.appendChild(card);
    });
    
    renderTestimonialDots();
}

function renderTestimonialDots() {
    testimonialDots.innerHTML = '';
    testimonialsData.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `dot ${index === currentTestimonial ? 'active' : ''}`;
        dot.addEventListener('click', () => goToTestimonial(index));
        testimonialDots.appendChild(dot);
    });
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialDisplay();
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialsData.length;
    updateTestimonialDisplay();
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonialsData.length) % testimonialsData.length;
    updateTestimonialDisplay();
}

function updateTestimonialDisplay() {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    
    cards.forEach((card, index) => {
        card.classList.toggle('active', index === currentTestimonial);
    });
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonial);
    });
}

// Auto-rotate testimonials every 8 seconds
setInterval(nextTestimonial, 8000);

// Manual controls
prevBtn.addEventListener('click', prevTestimonial);
nextBtn.addEventListener('click', nextTestimonial);

// ============================================
// 9. FAQ ACCORDION
// ============================================

faqQuestions.forEach((question, index) => {
    question.addEventListener('click', () => {
        const faqItem = faqItems[index];
        faqItem.classList.toggle('active');
    });
});

// ============================================
// 10. CONTACT FORM
// ============================================

function validateContactForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
        }
    });
    
    const emailInput = form.querySelector('input[type="email"]');
    if (emailInput && !isValidEmail(emailInput.value)) {
        isValid = false;
    }
    
    return isValid;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateContactForm(contactForm)) {
        // Show success message
        contactSuccess.style.display = 'block';
        contactForm.style.display = 'none';
        
        // Reset form after 3 seconds
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'flex';
            contactSuccess.style.display = 'none';
        }, 3000);
    } else {
        alert('Please fill in all fields with valid information');
    }
});

// Newsletter form
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    
    if (isValidEmail(email)) {
        alert('Thank you for subscribing!');
        newsletterForm.reset();
    } else {
        alert('Please enter a valid email address');
    }
});

// ============================================
// 11. SCROLL ANIMATIONS
// ============================================

function triggerScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Animate statistics
function animateStatistics() {
    const statsObserverOptions = {
        threshold: 0.5
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.dataset.target);
                animateNumber(target, finalValue);
                statsObserver.unobserve(target);
            }
        });
    }, statsObserverOptions);
    
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => statsObserver.observe(stat));
}

function animateNumber(element, finalValue) {
    let currentValue = 0;
    const increment = Math.ceil(finalValue / 50);
    
    const counter = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
            element.textContent = finalValue;
            clearInterval(counter);
        } else {
            element.textContent = currentValue;
        }
    }, 30);
}

// ============================================
// 12. INITIALIZATION
// ============================================

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderCars();
    renderTestimonials();
    triggerScrollAnimations();
    
    // Delay animation of stats to wait for page to load
    setTimeout(() => {
        animateStatistics();
    }, 500);
});

// Close booking modal on escape
bookingModalClose.addEventListener('click', closeBookingModal);

// Make functions global for inline calls
window.openCarModal = openCarModal;
window.closeCarModal = closeCarModal;
window.openBookingModal = openBookingModal;
window.closeBookingModal = closeBookingModal;
window.goToBookingStep = goToBookingStep;
window.confirmBooking = confirmBooking;
window.nextTestimonial = nextTestimonial;
window.prevTestimonial = prevTestimonial;

// Handle responsive design
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        triggerScrollAnimations();
    }, 250);
});

