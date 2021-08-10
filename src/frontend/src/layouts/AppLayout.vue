<template>
  <component :is="layout" @login="login" :isAuthorized="isAuthorized">
    <slot />
  </component>
</template>

<script>
const DEFAULT_LAYOUT = "AppLayoutDefault";

export default {
  name: "AppLayout",
  computed: {
    layout() {
      const layout = this.$route.meta.layout || DEFAULT_LAYOUT;
      return () => import(`@/layouts/${layout}`);
    },
  },
  data() {
    return {
      isAuthorized: false,
    };
  },
  methods: {
    login() {
      this.isAuthorized = true;
    },
  },
};
</script>
