<template>
  <div class="sauces-list">
    <p>Основной соус:</p>

    <SaucesListItem
      v-for="sauce in normalizeSauces"
      :key="`sauces-list__item--${sauce.id}`"
      :sauce="sauce"
      :checked-sauce="activeSauce"
      class="sauces-list__item"
      @change-sauce="setSauceValue"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DEFAULT_SAUCE } from "@/features/constants";
import SaucesListItem from "@/components/SaucesListItem.vue";
import { normalizeSauces } from "@/features/helpers/normalize";

const activeSauce = ref(DEFAULT_SAUCE);

const setSauceValue = (changedSauce) => {
  activeSauce.value = changedSauce;
};
</script>

<style scoped lang="scss">
@import "@/components/common/styles/sheet/sheet";
@import "@/components/common/styles/title/title";
@import "@/components/styles/sauces-list/sauces-list";
</style>
