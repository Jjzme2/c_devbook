<template>
  <form @submit.prevent="send" :class="classes">
    <div v-for="(field, key) in formData" :key="key" class="input-area">
      <label :for="key">{{ field.label || key }}</label>
      <input
        :type="field.type || 'text'"
        :placeholder="field.placeholder || ''"
        :value="field.value"
        @input="updateFormData(key, $event.target.value)"
      />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "SimpleForm",
  data() {
    return {
      submittedData: {},
    };
  },
  props: {
    classes: {
      type: String,
      default: "flat light rounded spaced-md w-lg",
    },
    formData: {
      type: Object,
      default: () => ({
        Username: {
          label: "Username",
          placeholder: "Enter Username",
          defaultValue: "",
          type: "text",
          value: "",
        },
        Password: {
          label: "Password",
          placeholder: "Enter Password",
          defaultValue: "",
          type: "password",
          value: "",
        },
      }),
    },
  },
  emits: ["send"],
  methods: {
    updateFormData(key, value) {
      var data = this.formData[key];
      data.value = value;
      this.submittedData[key] = value;
      console.log(this.submittedData);
    },
    send() {
      this.$emit("send", this.submittedData);
    },
  },
};
</script>

<style scoped>
.input-area {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.input-area label {
  margin-bottom: 0.5rem;
}

.input-area input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  font-size: 1rem;
}

.input-area input:focus {
  outline: none;
  border-color: #333;
}

.input-area input::placeholder {
  color: #ccc;
}

.input-area input[type="date"] {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  font-size: 1rem;
}

.input-area input[type="date"]:focus {
  outline: none;
  border-color: #333;
}

.input-area input[type="date"]::placeholder {
  color: #ccc;
}
</style>
