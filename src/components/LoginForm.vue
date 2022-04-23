<template>
  <form @submit.prevent="onSubmit">
    <label for="event" >Form Submit
    <input id="event" data-testid='name-input' type="text" v-model="name" />
    <button type="submit">Submit</button>
    </label>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    };
  },
  emits: ['formSubmitted'],
  methods: {
    onSubmit() {
      this.$emit('formSubmitted', { name: this.name });
    },
  },
};
</script>
