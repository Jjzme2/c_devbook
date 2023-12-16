<template>
  <div
    class="panel"
    @click="handlePanelEvent('clicked', $slots.default)"
    @mouseenter="handlePanelEvent('hovered', $slots.default)"
    @mouseleave="handlePanelEvent('leave')"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ParentPanel",
  emits: ["panelEvent"],
  methods: {
    handlePanelEvent(eventName, slotContent) {
      this.$emit("panelEvent", { eventName, slotContent });
    },
  },
};
</script>

<style scoped>
.panel {
  background-color: var(--panel-background-color);
  border-radius: 0.2rem;
  border: var(--primary-border);
  box-shadow: var(--primary-shadow);
  margin: auto;
  max-width: 400px;
  padding: 1rem;
  transition: box-shadow 0.2s ease-in-out;
}
</style>
