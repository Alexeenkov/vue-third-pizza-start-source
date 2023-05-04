import doughSizes from '@/common/data/doughSizes.js';
import ingredients from '@/common/data/ingredients.js';
import sauces from '@/common/data/sauces.js';
import sizes from '@/common/data/sizes.js';

export const normalizeDough = (dough) => {
    return {
        ...dough,
        value: doughSizes[dough.id],
    };
};

export const normalizeIngredients = (ingredient) => {
    return {
        ...ingredient,
        value: [ingredients.id],
    };
};

export const normalizeSauces = (sauce) => {
    return {
        ...sauce,
        value: sauces[sauce.id],
    };
};

export const normalizeSizes = (size) => {
    return {
        ...size,
        value: sizes[size.id],
    };
};