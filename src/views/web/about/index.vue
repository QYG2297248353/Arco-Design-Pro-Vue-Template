<template>
  <div class="container">
    <h1>关于我</h1>
    <p
      >项目属于模板项目，主项目来源于
      <a href="https://arco.design/vue/docs/start">Arco Design</a>。</p
    >
    <p>项目主要地址：后台 /admin，前台 /home，前缀路径，属于前后台项目。</p>
    <p>前台模板地址：<a href="/home/about"> 关于我 </a></p>
    <p>后台模板地址：<a href="/admin/dashboard/workplace"> 后台 </a></p>
    <p>登录地址：<a href="/login"> 登录 </a></p>
    <div class="links">
      <p
        >仓库地址：<a
          href="https://github.com/QYG2297248353/Arco-Design-Pro-Vue-Template"
          >GitHub 仓库</a
        ></p
      >
      <p>博客地址：<a href="https://blog.lifebus.top/">人生足迹 · 博客</a></p>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<script lang="ts">
  export default {
    name: 'About',
  };
</script>

<style lang="less" scoped>
  .container {
    background-color: var(--color-fill-2);
    padding: 16px 20px;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
  }

  .links {
    margin-top: 20px;
    font-size: 14px;
    color: var(--color-text);
  }

  .links a {
    color: var(--color-primary);
    text-decoration: underline;
  }
</style>

<style lang="less" scoped>
  // responsive
  .mobile {
    .container {
      display: block;
    }
  }
</style>
