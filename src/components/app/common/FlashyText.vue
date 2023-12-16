<template>
  <div class="flashy-text">
    <span :class="['animated-text', animationType]">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "FlashyText",
  props: {
    text: String,
    animationType: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style scoped>
.flashy-text {
  display: inline-block;
  position: relative;
  font-size: 24px;
}

.animated-text {
  position: relative;
  display: inline-block;
  animation: flashyAnimation 2s infinite;
}

.animated-text.bounce {
  animation: bounceAnimation 2s infinite;
}

.animated-text.slide {
  animation: slideAnimation 2s infinite;
}

.animated-text.shine {
  animation: shineAnimation 8s infinite;
  background-image: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.5),
    transparent
  );
  background-size: 200% 100%;
  background-position: 200% 0;
  color: transparent;
  background-clip: text;
}

@keyframes flashyAnimation {
  0%,
  100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-20px);
    opacity: 0.5;
  }
}

@keyframes bounceAnimation {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes slideAnimation {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px);
  }
}

@keyframes shineAnimation {
  to {
    background-position: -200% 0;
  }
}
</style>
