<template>
  <a-layout-footer class="footer">
    <div class="footer-content">
      <p
        >© {{ currentYear }} Arco Design Pro Vue Template. All rights
        reserved.</p
      >
      <p>Powered by Xinjiang Mengsen Software Development Studio</p>
    </div>
  </a-layout-footer>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';

  const currentYear = computed(() => {
    const year = new Date().getFullYear();
    return year < 2025 ? 2025 : year;
  });
</script>

<style lang="less" scoped>
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-2);
    text-align: center;

    .footer-content {
      padding: 10px 0;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      gap: 6px;
      font-size: 14px;
      p {
        margin: 0;
      }
    }
  }
</style>
