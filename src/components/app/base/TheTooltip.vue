<template>
  <div>
    <span
      class="tooltip"
      :id="targetId"
      @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false"
    >
      {{ $slots.default[0].children[0].text }}
    </span>
    <div
      class="tooltip-content"
      :id="tooltipId"
      :title="text"
      v-if="showTooltip"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    targetId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      tooltipId: `tooltip-${Math.random().toString(36).substr(2, 9)}`,
      showTooltip: false,
    };
  },
};
</script>

<style scoped>
.tooltip {
  cursor: pointer;
}

.tooltip-content {
  content: attr(title);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px;
  background-color: var(--secondary_background_color);
  color: var(--secondary_text_color);
  font-size: 12px;
  white-space: nowrap;
  border-radius: 4px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  z-index: 1;
}

.tooltip:hover + .tooltip-content {
  opacity: 1;
  visibility: visible;
}
</style>
