<template>
  <div class="dashboard-card" :class="customClass" @click="emitData">
    <i :class="icon"> &mdash; {{ title }}</i>
  </div>
</template>

<script>
export default {
  name: "dashboardCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    customClass: {
      type: String,
      required: false,
      default: "w-25 centered light pop target",
    },
  },
  methods: {
    emitData() {
      this.$emit("cardClicked", {
        title: this.title,
      });
    },
  },
};
</script>
