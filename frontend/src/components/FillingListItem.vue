<template>
  <li class="filling-list-item">
    <span :class="fillingNameClassName" class="filling-list-item__name">
      {{ filling.name }}
    </span>

    <UiCounter class="filling-list-item__counter" />
  </li>
</template>

<script setup>
import UiCounter from "@/components/common/UiCounter.vue";

const props = defineProps({
  filling: {
    type: Object,
    required: true,
  },
});

const fillingNameClassName = `filling-list-item__name--${props.filling.value}`;
</script>

<style scoped lang="scss">
@import "@/components/styles/filling-list-item/filling-list-item";
</style>
