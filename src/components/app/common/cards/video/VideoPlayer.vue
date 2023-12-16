<template>
  <div class="video-card">
    <iframe
      class="video-frame"
      :src="embedVideoLink"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: {
    videoLink: {
      type: String,
      required: true,
    },
    allowances: {
      type: String,
      default:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    },
  },
  computed: {
    embedVideoLink() {
      return this.videoLink
        ? `https://www.youtube.com/embed/${this.videoLink}`
        : "";
    },
  },
  beforeMount() {
    console.log("VideoPlayer mounted with video link:", this.embedVideoLink);
  },
};
</script>

<style scoped>
.video-card {
  border-radius: 15px;
  border: 1px solid #ccc;
  height: 70vh;
  margin: 1rem auto;
  padding: 1rem;
  position: relative;
  width: 60vw;
}

.video-frame {
  height: 100%;
  padding: 1rem;
  position: relative;
  width: 100%;
}
</style>
