<template>
  <section class="trust">
    <div class="container">
      <div class="trust__content">
        <h2 class="trust__title">Нам доверяют</h2>
        <div class="trust__description">
          <p>
            Спасибо нашим партнёрам за идеи, экспертизу и поддержку, которые
            делают Science64 сильнее.
          </p>
          <p>
            Вместе мы создаём больше, чем продукт — мы создаём движущую силу
            индустрии
          </p>
        </div>
      </div>

      <div class="trust__slider">
        <TrustSlider />
      </div>
    </div>
  </section>
</template>

<script setup>
import TrustSlider from "@/components/TrustSlider.vue";
</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables" as v;
@use "~/assets/scss/colors" as c;

.trust {
  overflow-x: hidden;
  margin-bottom: 100px;

  &__content {
    max-width: 761px;
    width: 100%;
    margin: 0 auto 40px;
    text-align: center;
  }

  &__title {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    color: c.$white;
    margin: 0 0 20px 0;
    font-size: v.$font-size-ms;
    line-height: 1.2;
  }

  &__description {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    font-size: v.$font-size-base;
    line-height: 1.4;
    color: c.$grey-description;
    margin: 0;

    p {
      margin: 0 0 10px 0;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__slider {
    width: 100%;
  }
}

@media (max-width: v.$breakpoint-lg) {
  .trust {
    margin-bottom: 80px;
  }
}

@media (max-width: v.$breakpoint-md) {
  .trust {
    margin-bottom: 60px;

    &__title {
      font-size: v.$font-size-ms-mob;
      text-align: left;
    }

    &__description {
      font-weight: v.$font-weight-regular;
      font-size: v.$font-size-md;
      text-align: left;
    }

    &__content {
      margin-bottom: 20px;
    }
  }
}

@media (max-width: v.$breakpoint-sm) {
  .trust {
    margin-bottom: 100px;

    &__title {
      font-size: v.$font-size-ms-mob;
      text-align: left;
    }

    &__description {
      font-size: v.$font-size-sm;
      text-align: left;
    }

    &__content {
      margin-bottom: 25px;
    }
  }
}
</style>
