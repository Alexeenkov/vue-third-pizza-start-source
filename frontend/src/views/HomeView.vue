<template>
    <main class="content">
        <form action="#" method="post">

            <div class="content__wrapper">
                <h1 class="title title--big">Конструктор пиццы</h1>

                <div class="content__dough">

                    <div class="sheet">
                        <h2 class="title title--small sheet__title">Выберите тесто</h2>

                        <div class="sheet__content dough">
                            <label v-for="(item, index) in doughItems" :key="`${item.id}-${index}`" class="dough__input">
                                <input type="radio" name="dough" :value="item.name" class="visually-hidden">
                                <b>
                                    {{ item.name }}
                                </b>
                                <span>
                                    {{ item.description }}
                                </span>
                            </label>
                        </div>

                    </div>

                </div>

                <div class="content__diameter">
                    <div class="sheet">
                        <h2 class="title title--small sheet__title">Выберите размер</h2>

                        <div class="sheet__content diameter">
                            <label v-for="sizeType in sizeItems" :key="sizeType.id" class="diameter__input"
                                :class="`diameter__input--${sizeType.value}`">
                                <input type="radio" name="diameter" :value="sizeType.value" class="visually-hidden" />
                                <span>
                                    {{ sizeType.name }}
                                </span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="content__ingredients">
                    <div class="sheet">
                        <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

                        <div class="sheet__content ingredients">

                            <div class="ingredients__sauce">
                                <p>Основной соус:</p>

                                <label v-for="sauceType in sauceItems" :key="sauceType.id" class="radio ingredients__input">
                                    <input type="radio" name="sauce" :value="sauceType.value" />
                                    <span>
                                        {{ sauceType.name }}
                                    </span>
                                </label>
                            </div>

                            <div class="ingredients__filling">
                                <p>Начинка:</p>

                                <ul class="ingredients__list">
                                    <li v-for="ingredientType in ingredientItems" :key="ingredientType.id"
                                        class="ingredients__item">
                                        <div class="filling">
                                            <img :src="getImage(ingredientType.image)" :alt="ingredientType.name" />
                                            {{ ingredientType.name }}
                                        </div>

                                        <div class="counter counter--orange ingredients__counter">
                                            <button type="button" class="counter__button counter__button--minus" disabled>
                                                <span class="visually-hidden">Меньше</span>
                                            </button>
                                            <input type="text" name="counter" class="counter__input" value="0" />
                                            <button type="button" class="counter__button counter__button--plus">
                                                <span class="visually-hidden">Больше</span>
                                            </button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content__pizza">
                    <label class="input">
                        <span class="visually-hidden">Название пиццы</span>
                        <input type="text" name="pizza_name" placeholder="Введите название пиццы">
                    </label>

                    <div class="content__constructor">
                        <div class="pizza pizza--foundation--big-tomato">
                            <div class="pizza__wrapper">
                                <div class="pizza__filling pizza__filling--ananas"></div>
                                <div class="pizza__filling pizza__filling--bacon"></div>
                                <div class="pizza__filling pizza__filling--cheddar"></div>
                            </div>
                        </div>
                    </div>

                    <div class="content__result">
                        <p>Итого: 0 ₽</p>
                        <button type="button" class="button" disabled>Готовьте!</button>
                    </div>
                </div>

            </div>

        </form>
    </main>
</template>

<script setup>
import {
    normalizeDough,
    normalizeIngredients,
    normalizeSauces,
    normalizeSizes
} from '@/common/helpers/normalize.js';

import doughJSON from '@/mocks/dough.json';
import ingredientsJSON from '@/mocks/ingredients.json';
import saucesJSON from '@/mocks/sauces.json';
import sizesJSON from '@/mocks/sizes.json';

const doughItems = doughJSON.map(normalizeDough);
const ingredientItems = ingredientsJSON.map(normalizeIngredients);
const sauceItems = saucesJSON.map(normalizeSauces);
const sizeItems = sizesJSON.map(normalizeSizes);

const getImage = image => {
    // https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url
    return new URL(`../assets/img/${image}`, import.meta.url).href
}
</script>

<style lang="scss">
@import "@/assets/scss/ds-system/ds.scss";
@import "@/assets/scss/mixins/mixins.scss";

.content {
    padding-top: 20px;
}

.content__wrapper {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    width: 920px;
    margin: 0 auto;
    padding-right: 2.12%;
    padding-bottom: 30px;
    padding-left: 2.12%;
}

.content__dough {
    width: 527px;
    margin-top: 15px;
    margin-right: auto;
    margin-bottom: 15px;
}

.content__diameter {
    width: 373px;
    margin-top: 15px;
    margin-bottom: 15px;
}

.content__ingredients {
    width: 527px;
    margin-top: 15px;
    margin-right: auto;
    margin-bottom: 15px;
}

.content__pizza {
    width: 373px;
    margin-top: 15px;
    margin-bottom: 15px;
}

.content__constructor {
    width: 315px;
    margin-top: 25px;
    margin-right: auto;
    margin-left: auto;
}

.content__result {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 25px;

    p {
        @include b-s24-h28;

        margin: 0;
    }

    button {
        margin-left: 12px;
        padding: 16px 45px;
    }
}
</style>