<template>
  <div>
    <AppHeader />

    <slot></slot>
  </div>
</template>

<script setup>
import AppHeader from "@/layouts/AppHeader.vue";
</script>
