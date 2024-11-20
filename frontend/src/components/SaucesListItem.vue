<template>
  <label class="sauces-list-item">
    <input
      type="radio"
      name="sauce"
      :value="sauce.value"
      :class="checkedSauceClassName"
      class="sauces-list-item__input"
      @click="emit('change-sauce', $event.target.value)"
    />
    <span class="sauces-list-item__name">
      {{ sauce.name }}
    </span>
  </label>
</template>

<script setup>
import { DEFAULT_SAUCE } from "@/features/constants";
import { computed } from "vue";

const props = defineProps({
  sauce: {
    type: Object,
    required: true,
  },
  checkedSauce: {
    type: String,
    default: DEFAULT_SAUCE,
  },
});

const emit = defineEmits(["change-sauce"]);

const checkedSauceClassName = computed(() => ({
  "sauces-list-item__input--checked": props.checkedSauce === props.sauce.value,
}));
</script>

<style scoped lang="scss">
@import "@/components/styles/sauces-list-item/sauces-list-item";
</style>
