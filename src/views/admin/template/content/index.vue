<template>
  <div class="container">
    <Breadcrumb :items="['menu.template', 'menu.template.content']" />

    <a-card :title="$t('menu.template.content')" class="general-card"> </a-card>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
  .container {
    padding: 0 20px 20px 20px;
  }
</style>
