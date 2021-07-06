<template>
  <div class="app-layout">
    <AppHeader />
    <AppIndex />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppIndex from "@/views/Index.vue";

export default {
  name: "AppLayout",
  components: {
    AppHeader,
    AppIndex,
  },
};
</script>
