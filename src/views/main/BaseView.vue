<template>
  <mainLayout>
    <template #header v-if="includeHeader"></template>
    <template #header v-else-if="!includeHeader && miniHeader">
      <div v-if="!includeHeader">
        <GoToButton></GoToButton></div
    ></template>
    <template #default>
      <slot></slot>
    </template>
    <template #footer v-if="includeFooter"></template>
  </mainLayout>
</template>

<script>
import mainLayout from "@/components/app/layoutElements/MainLayout.vue";
import GoToButton from "@/components/app/common/buttons/GoToButton.vue";

export default {
  name: "BaseView",
  components: {
    mainLayout,
    GoToButton,
  },
  props: {
    includeHeader: {
      type: Boolean,
      default: true,
    },
    includeFooter: {
      type: Boolean,
      default: true,
    },
    miniHeader: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
