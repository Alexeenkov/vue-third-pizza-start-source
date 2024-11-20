<template>
  <div class="diameter-list">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>

      <div class="sheet__content diameter-list__items">
        <DiameterListItem
          v-for="size in normalizeDoughSizes"
          :key="`diameter-list__input--${size.id}`"
          :size="size"
          :checked-size="activeSize"
          class="diameter-list__input"
          @change-size="setSizeValue"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import DiameterListItem from "@/components/DiameterListItem.vue";
import { ref } from "vue";
import { DEFAULT_DOUGH_SIZE } from "@/features/constants";
import { normalizeDoughSizes } from "@/features/helpers/normalize";

const activeSize = ref(DEFAULT_DOUGH_SIZE);

const setSizeValue = (changedSize) => {
  activeSize.value = changedSize;
};
</script>

<style scoped lang="scss">
@import "@/components/common/styles/sheet/sheet";
@import "@/components/common/styles/title/title";
@import "@/components/styles/diameter-list/diameter-list";
</style>
