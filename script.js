// DOM Elements
const sidebar = document.getElementById('sidebar');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeSidebarButton = document.getElementById('close-sidebar');
const overlay = document.getElementById('overlay');
const mobileDarkToggle = document.getElementById('mobile-dark-toggle');
const sidebarDarkToggle = document.getElementById('sidebar-dark-toggle');
const desktopDarkToggle = document.getElementById('desktop-dark-toggle');

// Check for saved theme preference or use preferred color scheme
function initTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setupEventListeners();
});

// Set up all event listeners
function setupEventListeners() {
    // Toggle sidebar on mobile
    mobileMenuButton.addEventListener('click', () => {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        document.body.classList.add('overflow-hidden'); // Prevent scrolling when sidebar is open
    });

    // Close sidebar when clicking the close button or overlay
    closeSidebarButton.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    // Add dark mode toggle event listeners
    mobileDarkToggle.addEventListener('click', toggleDarkMode);
    sidebarDarkToggle.addEventListener('click', toggleDarkMode);
    desktopDarkToggle.addEventListener('click', toggleDarkMode);

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !sidebar.classList.contains('-translate-x-full')) {
            closeSidebar();
        }
    });
}

// Close sidebar function
function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

// Toggle dark mode function
function toggleDarkMode() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }

    // Add animation effect
    document.documentElement.classList.add('color-transition-active');
    setTimeout(() => {
        document.documentElement.classList.remove('color-transition-active');
    }, 300);
}

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) { // md breakpoint
        closeSidebar();
    }
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
        
        // Close sidebar on mobile after clicking a link
        if (window.innerWidth < 768) {
            closeSidebar();
        }
    });
}); 