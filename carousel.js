class Carousel {
  constructor() {
    this.slides = document.querySelectorAll('.carousel-slide');
    this.dots = document.querySelectorAll('.dot');
    this.prevBtn = document.querySelector('.prev-btn');
    this.nextBtn = document.querySelector('.next-btn');
    this.currentGroup = 0;
    this.slidesPerView = 3;
    this.totalGroups = Math.ceil(this.slides.length / this.slidesPerView);
    
    this.init();
  }
  
  init() {
    this.prevBtn.addEventListener('click', () => this.prevGroup());
    this.nextBtn.addEventListener('click', () => this.nextGroup());
    
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToGroup(index));
    });
    
    this.showGroup(0);
  }
  
  showGroup(groupIndex) {
    // Hide all slides
    this.slides.forEach(slide => slide.classList.remove('active'));
    
    // Show current group of 3 slides
    const startIndex = groupIndex * this.slidesPerView;
    const endIndex = startIndex + this.slidesPerView;
    
    for (let i = startIndex; i < endIndex && i < this.slides.length; i++) {
      this.slides[i].classList.add('active');
    }
    
    // Update dots
    this.dots.forEach(dot => dot.classList.remove('active'));
    this.dots[groupIndex].classList.add('active');
    
    this.currentGroup = groupIndex;
  }
  
  nextGroup() {
    let next = this.currentGroup + 1;
    if (next >= this.totalGroups) next = 0;
    this.showGroup(next);
  }
  
  prevGroup() {
    let prev = this.currentGroup - 1;
    if (prev < 0) prev = this.totalGroups - 1;
    this.showGroup(prev);
  }
  
  goToGroup(index) {
    this.showGroup(index);
  }
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', () => {
  new Carousel();
});
