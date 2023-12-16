<template>
  <div class="video-list">
    <videoCard
      v-for="video in allVideos"
      :key="video.id"
      :video="video"
      @videoSelected="sendVideo"
    ></videoCard>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import videoCard from "@/components/app/common/cards/video/VideoCard.vue";

export default {
  name: "VideoList",
  components: {
    videoCard,
  },
  setup() {
    const store = useStore();
    const getterString = "videos/getAll";
    const dispatchString = "videos/fetchAll";

    const allVideos = computed(() => store.getters[getterString]);

    // Fetch on component mount
    onMounted(async () => {
      await store.dispatch(dispatchString);
    });

    return { allVideos };
  },
  methods: {
    sendVideo(video) {
      // console.log(video);
      this.$router.push(`/showVideo/${video.url}`);
      // this.$emit("videoSelected", video);
    },
  },
};
</script>
