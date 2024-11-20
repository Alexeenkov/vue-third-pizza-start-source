<template>
  <div class="ingredients-list">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

      <div class="sheet__content ingredients">
        <SaucesList class="ingredients-list__sauce" />

        <FillingList class="ingredients-list__filling" />
      </div>
    </div>
  </div>
</template>

<script setup>
import SaucesList from "@/components/SaucesList.vue";
import FillingList from "@/components/FillingList.vue";
</script>

<style scoped lang="scss">
@import "@/components/common/styles/sheet/sheet";
@import "@/components/common/styles/title/title";
@import "@/components/styles/ingredients-list/ingredients-list";
</style>
