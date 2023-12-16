<template>
  <div class="navigation-panel">
    <div class="navigation">
      <navCard></navCard>
    </div>
  </div>
</template>

<script>
import navCard from "@/components/app/mainElements/NavCard.vue";
export default {
  name: "navigationPanel",
  components: {
    navCard,
  },
};
</script>

<style scoped>
.navigation-panel {
  background-color: var(--primary-panel-color); /* Set a background color */
  border-radius: 15px;
  box-sizing: border-box; /* Include padding in the width */
  display: block;
  height: 92vh; /* Take 100% of the viewport height */
  left: 5px; /* Stick to the left */
  overflow-y: auto; /* Enable vertical scrolling if needed */
  padding: 1rem; /* Add some padding */
  position: fixed; /* Fix the position */
  top: 10px; /* Stick to the top */
}

.navigation {
  justify-content: start; /* Center the child elements */
}

/* Add your additional styles for navCard as needed */

/* Adjustments for better responsiveness */
@media (max-width: 768px) {
  .navigation-panel {
    max-width: 100%; /* Adjust the maximum width for smaller screens */
  }
}
</style>
