// JavaScript Animations for Buttons and Effects
document.addEventListener("DOMContentLoaded", () => {
    // Button hover animations
    const buttons = document.querySelectorAll("button, a.btn");
  
    buttons.forEach((button) => {
      button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
        button.style.transition = "transform 0.2s ease, background-color 0.3s";
        button.style.backgroundColor = "#555";
      });
  
      button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
        button.style.backgroundColor = "";
      });
  
      // Button click effect
      button.addEventListener("click", () => {
        button.style.transform = "scale(0.95)";
        setTimeout(() => {
          button.style.transform = "scale(1)";
        }, 200);
      });
    });
  
    // Navbar link color change on hover
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
      link.addEventListener("mouseover", () => {
        link.style.color = "#ccc";
      });
      link.addEventListener("mouseout", () => {
        link.style.color = "#fff";
      });
      
      // Highlight active navbar link
      if (window.location.pathname === link.getAttribute("href")) {
        link.style.color = "#f39c12";  // Active link color
      }
    });
  
    // Smooth Scroll for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset to prevent covering the content under the navbar
          behavior: 'smooth'
        });
      });
    });
  
    // Card hover animations
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "transform 0.2s ease";
        card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
      });
  
      card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "none";
      });
    });
  
    // Scroll Animations (fade in)
    const fadeInElements = document.querySelectorAll('.fade-in');
    window.addEventListener('scroll', () => {
      fadeInElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    });
  
    // Add fade-in class on page load for existing elements
    fadeInElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) {
        element.classList.add('visible');
      }
    });
  });
  