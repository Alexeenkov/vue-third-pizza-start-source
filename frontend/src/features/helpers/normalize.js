import doughData from "@/features/mocks/dough.json";
import sizesData from "@/features/mocks/sizes.json";
import saucesData from "@/features/mocks/sauces.json";
import ingredientsData from "@/features/mocks/ingredients.json";
import {
  DOUGH_SIZES,
  DOUGH_TYPES,
  FILLINGS,
  SAUCES,
} from "@/features/constants";

export const normalizeDoughTypes = doughData.map((item) => ({
  ...item,
  value: DOUGH_TYPES[item.id],
}));

export const normalizeDoughSizes = sizesData.map((item) => ({
  ...item,
  value: DOUGH_SIZES[item.id],
}));

export const normalizeSauces = saucesData.map((item) => ({
  ...item,
  value: SAUCES[item.id],
}));

export const normalizeFillings = ingredientsData.map((item) => ({
  ...item,
  value: FILLINGS[item.id],
}));
