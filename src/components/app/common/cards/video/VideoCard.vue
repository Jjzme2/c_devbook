<template>
  <!-- Video List -->
  <div class="video-card" @click="sendVideo">
    <span hidden>{{ video.id }}</span>
    <p class="video-title">{{ video.title }}</p>

    <p class="video-description">
      {{ video.description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "VideoCard",
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
  emit: ["videoSelected"],
  methods: {
    sendVideo() {
      this.$emit("videoSelected", this.video);
    },
  },
};
</script>

<style scoped>
.video-card {
  border-radius: 15px;
  border: 1px solid #ccc;
  height: 100%;
  margin: 1rem auto;
  padding: 1rem;
  position: relative;
  width: 100%;
}

.video-title {
  color: var(--primary-text-color);
  font-size: 1.15rem;
  font-weight: bold;
}

.video-description {
  color: var(--secondary-text-color);
  font-size: 1rem;
}
</style>
