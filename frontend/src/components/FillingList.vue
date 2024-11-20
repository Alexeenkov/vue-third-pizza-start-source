<template>
  <div class="filling-list">
    <p>Начинка:</p>

    <ul class="filling-list__items">
      <FillingListItem
        v-for="filling in normalizeFillings"
        :key="`filling-list__item--${filling.id}`"
        :filling="filling"
        class="filling-list__item"
      />
    </ul>
  </div>
</template>

<script setup>
import FillingListItem from "@/components/FillingListItem.vue";
import { normalizeFillings } from "@/features/helpers/normalize";
</script>

<style scoped lang="scss">
@import "@/components/common/styles/sheet/sheet";
@import "@/components/common/styles/title/title";
@import "@/components/styles/filling-list/filling-list";
</style>
