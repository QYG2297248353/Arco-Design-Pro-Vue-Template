<template>
  <a-layout class="layout" :class="{ mobile: appStore.hideMenu }">
    <a-layout-header class="layout-header">
      <div class="layout-navbar">
        <NavBar />
      </div>
    </a-layout-header>
    <a-layout-content
      class="layout-content"
      style="padding: 0 60px"
      :style="paddingStyle"
    >
      <PageLayout />
    </a-layout-content>
    <Footer v-if="footer" class="layout-footer" />
  </a-layout>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useAppStore } from '@/store';
  import NavBar from '@/components/navbar-web/index.vue';
  import Footer from '@/components/footer/index.vue';
  import PageLayout from './page-layout.vue';

  const appStore = useAppStore();
  const footer = computed(() => appStore.footer);
  const navbarHeight = `60px`;
  const navbar = computed(() => appStore.navbar);
  const paddingStyle = computed(() => {
    const paddingTop = navbar.value ? { paddingTop: navbarHeight } : {};
    return { ...paddingTop };
  });
</script>

<style scoped lang="less">
  @nav-size-height: 60px;
  @layout-max-width: 1100px;

  .layout {
    width: 100%;
    height: 100%;
  }

  .layout-header {
    .layout-navbar {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      width: 100%;
      height: @nav-size-height;
    }
  }

  .layout-content {
    min-height: 100vh;
    background-color: var(--color-fill-2);
  }

  .layout-footer {
    text-align: center;
    background-color: var(--color-fill-2);
  }
</style>
