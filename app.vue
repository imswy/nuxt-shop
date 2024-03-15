<template>
  <!-- 后台管理系统布局 -->
  <template v-if="($route.name as any).split('-')[0] === 'admin'">
    <NuxtLayout name="admin">
      <NuxtPage />
    </NuxtLayout>
  </template>
  <!-- 前台布局 -->
  <template v-else>
    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </template>
</template>
<script setup lang="ts"></script>
