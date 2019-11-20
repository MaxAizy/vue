<template>
  <div class="url-parse">
    <div>
      <input
        v-model="newUrl"
        type="url"
        id="inputurl"
        class="form-control"
        placeholder="url"
        required
        autofocus
        autocomplete="off"
      />
    </div>
    <button
      @click.prevent="saveUrl"
      class="btn btn-lg btn-primary btn-block"
      type="submit"
    >Сохранить ссылку</button>
  </div>
</template>

<script>
const MIN_URL_LENGTH = 11;
export default {
  props: ["url"],

  data: () => ({
    newUrl: ""
  }),

  computed: {
    canCreateUrl() {
      if (this.newUrl.length > MIN_URL_LENGTH) {
        return true;
      }
      return false;
    }
  },

  methods: {
    saveUrl() {
      if (!this.canCreateUrl) return;
      this.$emit("transmit", this.newUrl);
      this.$router.push("/app");
    }
  }
};
</script>

<style>
.url-parse {
  margin: auto;
}
</style>
