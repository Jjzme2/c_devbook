<template>
  <BaseView :includeHeader="includeHeader" :includeFooter="includeFooter">
    <template #default>
      <div class="dashboard-view">
        <div class="component-view">
          <slot></slot>
        </div>
      </div>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "@/views/main/BaseView.vue";

export default {
  name: "ComponentView",
  components: {
    BaseView,
  },
  props: {
    includeHeader: {
      type: Boolean,
      default: false,
    },
    includeFooter: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
