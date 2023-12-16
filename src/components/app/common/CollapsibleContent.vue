<template>
  <div class="extended-description">
    <div class="header" @click="toggleDescription">
      <div class="title">{{ title }}</div>
      <div class="icon-container">
        <i class="icon" :class="{ open: showDescription }"></i>
      </div>
    </div>
    <transition name="fade">
      <div class="content" v-if="showDescription">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ExtendedDescriptionElement",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showDescription: false,
    };
  },
  methods: {
    toggleDescription() {
      this.showDescription = !this.showDescription;
    },
  },
};
</script>

<style scoped>
.extended-description {
  border: var(--primary-border);
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background-color: var(--secondary-background-color);
  cursor: pointer;
}

.title {
  font-size: 16px;
  font-weight: bold;
}

.icon-container {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
}

.icon::before {
  content: "▼";
  font-size: 14px;
  transform: rotate(0deg);
}

.icon.open::before {
  transform: rotate(180deg);
}

.content {
  padding: 0 20px 12px;
  border-top: 1px solid #e0e0e0;
}
</style>
