<template>
  <div class="counter counter--orange">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="isDisabled"
      @click="decreasesCounter"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input type="text" name="counter" class="counter__input" :value="count" />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="increasesCounter"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script setup>
import { computed, ref, unref } from "vue";

const count = ref(0);

const isDisabled = computed(() => unref(count) === 0);

const increasesCounter = () => {
  count.value++;
};
const decreasesCounter = () => {
  count.value--;
};
</script>

<style scoped lang="scss">
@import "@/components/common/styles/ui-counter/ui-counter";
</style>
