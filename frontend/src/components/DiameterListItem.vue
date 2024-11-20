<template>
  <label :class="sizeClassName" class="diameter-list-item">
    <input
      name="diameter"
      :value="size.value"
      type="radio"
      class="visually-hidden"
      @click="emit('change-size', $event.target.value)"
    />
    <span :class="checkedSizeClassName" class="diameter-list-item__size">
      {{ size.name }}
    </span>
  </label>
</template>

<script setup>
import { DEFAULT_DOUGH_SIZE } from "@/features/constants";
import { computed } from "vue";

const props = defineProps({
  size: {
    type: Object,
    required: true,
  },
  checkedSize: {
    type: String,
    default: DEFAULT_DOUGH_SIZE,
  },
});

const emit = defineEmits(["change-size"]);

const sizeClassName = `diameter-list-item--${props.size.value}`;

const checkedSizeClassName = computed(() => ({
  "diameter-list-item__size--checked": props.checkedSize === props.size.value,
}));
</script>

<style scoped lang="scss">
@import "@/components/styles/diameter-list-item/diameter-list-item";
</style>
