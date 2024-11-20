<template>
  <div class="dough-list">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough-list__items">
        <DoughListItem
          v-for="dough in normalizeDoughTypes"
          :key="`dough-list__input-${dough.id}`"
          :dough="dough"
          :checked-dough="activeDoughValue"
          class="dough-list__input dough-list__input--light"
          @change-dough="setDoughValue"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import DoughListItem from "@/components/DoughListItem.vue";
import { ref } from "vue";
import { DEFAULT_DOUGH_TYPE } from "@/features/constants";
import { normalizeDoughTypes } from "@/features/helpers/normalize";

const activeDoughValue = ref(DEFAULT_DOUGH_TYPE);

const setDoughValue = (changedDough) => {
  activeDoughValue.value = changedDough;
};
</script>

<style scoped lang="scss">
@import "@/components/common/styles/sheet/sheet";
@import "@/components/common/styles/title/title";
@import "@/components/styles/dough-list/dough-list";
</style>
