<template>
  <div class="app-layout">
    <AppLayoutHeader :isAuthorized="isAuthorized" />
    <main class="layout">
      <AppLayoutMainSidebar />
    </main>

    <router-view />
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
import AppLayoutMainSidebar from "@/layouts/AppLayoutMainSidebar";

export default {
  name: "AppLayoutMain",
  components: {
    AppLayoutHeader,
    AppLayoutMainSidebar,
  },
  props: {
    isAuthorized: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
