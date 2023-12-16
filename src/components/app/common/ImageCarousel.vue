<template>
  <div class="carousel">
    <transition name="slide-fade">
      <img
        :src="images[currentIndex]"
        alt="Carousel Slide"
        class="carousel-image"
      />
    </transition>
    <button @click="prevSlide" class="nav-button">Previous</button>
    <button @click="nextSlide" class="nav-button">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  methods: {
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  max-width: 100%;
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  height: auto;
  transition: opacity 0.5s;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #3498db;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
