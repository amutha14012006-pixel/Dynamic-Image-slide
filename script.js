// Array of image URLs (can later be fetched from API or database)
const images = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1025/1000/600/",
  "https://picsum.photos/id/1035/1000/600/",
  "https://picsum.photos/id/1041/1000/600/"
];

const slider = document.querySelector(".slider");
const dotsContainer = document.querySelector(".dots");

// Dynamically create slides and dots
images.forEach((img, index) => {
  const slide = document.createElement("div");
  slide.classList.add("slide");
  slide.innerHTML = `<img src="${img}" alt="Image ${index + 1}">`;
  slider.appendChild(slide);

  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function showSlide(index) {
  if (index >= slides.length) currentIndex = 0;
  else if (index < 0) currentIndex = slides.length - 1;
  else currentIndex = index;

  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateDots();
}

function updateDots() {
  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

// Event listeners for buttons
document.querySelector(".next").addEventListener("click", () => showSlide(currentIndex + 1));
document.querySelector(".prev").addEventListener("click", () => showSlide(currentIndex - 1));

// Dot navigation
dots.forEach((dot, i) => dot.addEventListener("click", () => showSlide(i)));

// Auto-slide every 4 seconds
setInterval(() => showSlide(currentIndex + 1), 4000);
