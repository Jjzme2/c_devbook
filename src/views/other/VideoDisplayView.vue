<template>
  <BaseView>
    <template #default>
      <div class="dashboard-view">
        <goToButton></goToButton>
        <videoPlayer :videoLink="videoId"></videoPlayer>
      </div>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "./BaseView.vue";
import VideoPlayer from "@/components/app/common/cards/video/VideoPlayer.vue";
import goToButton from "@/components/app/common/buttons/GoToButton.vue";

export default {
  name: "VideoDisplayView",
  components: {
    BaseView,
    VideoPlayer,
    goToButton,
  },
  computed: {
    videoId() {
      // Extract video ID from the route parameter
      return this.$route.params.url;
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
