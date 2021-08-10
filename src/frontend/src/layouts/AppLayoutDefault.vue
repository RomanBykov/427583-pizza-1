<template>
  <div class="app-layout">
    <AppLayoutHeader />
    <slot />
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";

export default {
  name: "AppLayoutDefault",
  components: {
    AppLayoutHeader,
  },
};
</script>

<style lang="scss">
.app-layout {
  margin: 0;
  display: flex;
  flex-direction: column;
  min-width: 960px;
  min-height: 100vh;
  color: #000;
  background-color: #fff;
  font-family: "Roboto", Arial, sans-serif;
  font-size: 14px;
  line-height: 16px;
  text-rendering: optimizeLegibility;
}
</style>
