<template>
  <label :class="doughClassName" class="dough-list-item">
    <input
      name="dough"
      :value="dough.value"
      type="radio"
      class="visually-hidden"
      @click="emit('change-dough', $event.target.value)"
    />
    <span :class="checkedDoughClassName" class="dough-list-item__name">
      {{ dough.name }}
    </span>
    <span class="dough-list-item__description"> {{ dough.description }} </span>
  </label>
</template>

<script setup>
import { computed } from "vue";
import { DEFAULT_DOUGH_TYPE } from "@/features/constants";

const props = defineProps({
  dough: {
    type: Object,
    required: true,
  },
  checkedDough: {
    type: String,
    default: DEFAULT_DOUGH_TYPE,
  },
});

const emit = defineEmits(["change-dough"]);

const doughClassName = `dough-list-item--${props.dough.value}`;

const checkedDoughClassName = computed(() => ({
  "dough-list-item__name--checked": props.checkedDough === props.dough.value,
}));
</script>

<style scoped lang="scss">
@import "@/components/styles/dough-list-item/dough-list-item";
</style>
