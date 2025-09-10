<template>
  <section class="hero">
    <div class="container">
      <div class="hero__content">
        <h1 class="hero__title">
          Дебюты под контролем вместе с
          <span class="hero__title-accent">Science64</span>
        </h1>
        <p class="hero__description">
          Надёжный инструмент для выявления слабых мест и совершенствования
          дебютной подготовки шахматиста
        </p>
        <button class="hero__button" @click="goToAnalysis">Начать анализ</button>
      </div>
      <div class="hero__image-wrapper">
        <img
          src="/images/image-about.png"
          alt="Science64 Platform"
          class="hero__image"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const goToAnalysis = () => {
  window.open('https://science64.com/', '_blank', 'noopener,noreferrer');
};
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as v;
@use '~/assets/scss/colors' as c;

.hero {
  position: relative;
  z-index: v.$z-index-base;
  padding: 174px 0 263px;
  overflow: hidden;

  &__content {
    max-width: 663px;
    width: 100%;
    color: c.$white;
    position: relative;
    z-index: 2;
  }

  &__title {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    font-size: v.$font-size-bs;
    line-height: 1.2;
    margin: 0 0 20px 0;
    color: c.$white;

    &-accent {
      color: c.$primary-blue;
    }
  }

  &__description {
    max-width: 466px;
    width: 100%;
    min-height: 38px;
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    font-size: v.$font-size-md;
    line-height: 1.4;
    margin: 0 0 45px 0;
    color: c.$grey-description;
  }

  &__button {
    background-color: c.$primary-blue;
    max-width: 143px;
    width: 100%;
    min-height: 38px;
    border-radius: 5px;
    color: c.$white;
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    font-size: 13.33px;
    line-height: 1;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: c.$primary-blue-hover;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(29, 133, 221, 0.3);
    }

    &:focus {
      outline: 2px solid c.$primary-blue;
      outline-offset: 2px;
    }

    &:active {
      transform: translateY(0);
    }
  }

  &__image-wrapper {
    position: absolute;
    top: 50%;
    left: 105%;
    transform: translate(-50%, -50%);
    max-width: 828px;
    width: 100%;
    min-height: 465px;
    z-index: 1;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
  }
}

@media (min-width: v.$breakpoint-xl) {
  .hero {
    &__image-wrapper {
      left: 90%;
    }
  }
}

@media (max-width: v.$breakpoint-lg) {
  .hero {
    padding: 120px 0 200px;

    /*&__image-wrapper {
      position: relative;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      margin-top: 40px;
      max-width: 600px;
    }*/
  }
}

@media (max-width: v.$breakpoint-md) {
  .hero {
    padding: 100px 0 0px;

    &__title {
      font-size: v.$font-size-ms;
    }

    &__description {
      font-size: v.$font-size-base;
    }

    &__image-wrapper {
      position: relative;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      margin-top: 45px;
      max-width: 100%;
      min-height: 300px;
    }
  }
}

@media (max-width: v.$breakpoint-sm) {
  .hero {
    padding: 80px 0 0;

    &__title {
      font-weight: v.$font-weight-bold;
      font-size: v.$font-size-xxl;
      line-height: 1.1;
    }

    &__description {
      font-weight: v.$font-weight-regular;
      font-size: v.$font-size-md;
      line-height: 1.1;
    }

    &__button {
      max-width: 148px;
      min-height: 48px;
      font-size: v.$font-size-base;
    }
  }
}
</style>
