<template>
  <div>
    <div class="quote-card" v-if="randomQuote">
      <p>
        {{ sentencedQuote }}
      </p>
      -
      <a :href="randomQuote.source" target="blank">
        {{ titledAuthor }}
      </a>
    </div>
    <div v-else>
      <p>There is no quote to display</p>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted } from "vue";

export default {
  name: "quoteDisplay",
  data() {
    return {
      someData: "",
    };
  },
  computed: {
    randomQuote() {
      return this.$store.getters["quotes/getRandomQuote"];
    },
    sentencedQuote() {
      return (
        this.$stringUtils.convertStringToCase(
          this.randomQuote.quote,
          "sentence"
        ) ?? ""
      );
    },
    titledAuthor() {
      return (
        this.$stringUtils.convertStringToCase(
          this.randomQuote.author,
          "title"
        ) ?? ""
      );
    },
  },
  setup() {
    const store = useStore();
    const dispatchString = "quotes/fetchAll";

    // Fetch on component mount
    onMounted(async () => {
      await store.dispatch(dispatchString);
    });
  },
};
</script>
