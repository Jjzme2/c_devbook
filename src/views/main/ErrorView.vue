<template>
  <BaseView :includeHeader="includeHeader" :includeFooter="includeFooter">
    <template #default>
      <div class="dashboard-view">
        <!--
			In this component, the error can be called and retrieved via the store.


			Consider the example:
			----------------------------------------

				if (this.availableContent.length === 0) {

				const errorObject =  {
					message: "No content available",
					type: "warning",
					origin: "dashboardFlashCardCategory.vue",
					notify: true,
				};

				this.$store.dispatch("appState/setError",errorObject);
				this.$router.push({
				name: "ErrorView",
				});
				return;
			}


		 -->
        <dashboard :error="getError"></dashboard>
      </div>
    </template>
  </BaseView>
</template>

<script>
import { mapGetters } from "vuex";
import BaseView from "@/views/main/BaseView.vue";
import dashboard from "@/components/app/mainElements/dashboards/main/dashboardError.vue";

export default {
  name: "FlashCardCategoryView",
  components: {
    BaseView,
    dashboard,
  },
  data() {
    return {
      includeHeader: false,
      includeFooter: true,
    };
  },
  computed: {
    ...mapGetters("appState", ["getError"]),
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
