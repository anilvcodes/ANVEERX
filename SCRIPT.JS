
// ANVEERX WEBSITE JAVASCRIPT

const WHATSAPP_NUMBER = "917991912400";

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
  navigation.classList.toggle("active");

  menuToggle.textContent =
    navigation.classList.contains("active") ? "✕" : "☰";
});

// Close mobile menu after clicking a link
document.querySelectorAll("#navigation a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});

// Automatically update copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Select race distance from event cards
document.querySelectorAll("[data-distance]").forEach(link => {
  link.addEventListener("click", () => {
    const distance = link.dataset.distance;
    document.getElementById("runnerDistance").value = distance;
  });
});

// Runner registration through WhatsApp
const registrationForm =
  document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!registrationForm.reportValidity()) return;

  const name =
    document.getElementById("runnerName").value.trim();

  const phone =
    document.getElementById("runnerPhone").value.trim();

  const city =
    document.getElementById("runnerCity").value.trim();

  const distance =
    document.getElementById("runnerDistance").value;

  const message = `
Hello ANVEERX!

I am interested in joining an ANVEERX running event.

Runner Details:
Name: ${name}
Mobile: ${phone}
City: ${city}
Race Distance: ${distance}

Please share upcoming event details,
registration information and race dates.

GO BEYOND LIMITS!
  `;

  const whatsappURL =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
});

// Simple reveal animation
const revealElements = document.querySelectorAll(
  ".distance-card, .about-content, .vision-steps > div"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
  });
}
