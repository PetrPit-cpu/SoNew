<template>
  <section id="community" class="community">
    <div class="container">
      <div class="community__content">
        <h2 class="community__title">
          <span class="community__title-text"
            >Присоединяйтесь к сообществу&thinsp;</span
          >
          <span class="community__title-text-short">Сообщество</span>
          <span class="community__title-accent">Science64</span>
        </h2>
        <p class="community__description">
          Узнайте, что говорит наше сообщество о своем опыте использования
          платформы
        </p>
      </div>

      <div class="community__slider">
        <SwiperSlider />
      </div>
    </div>
  </section>
</template>

<script setup>
import SwiperSlider from "@/components/SwiperSlider.vue";
</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables" as v;
@use "~/assets/scss/colors" as c;

.community {
  margin-bottom: 150px;

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

    &-accent {
      color: c.$primary-blue;
    }
  }

  &__description {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    font-size: v.$font-size-base;
    line-height: 1.4;
    color: c.$grey-description;
    margin: 0;
  }

  &__slider {
    width: 100%;
  }

  .community__title-text-short {
    display: none;
  }
}

@media (max-width: v.$breakpoint-lg) {
  .community {
    margin-bottom: 120px;
  }
}

@media (max-width: v.$breakpoint-md) {
  .community {
    margin-bottom: 180px;

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
  .community {
    margin-bottom: 180px;

    &__title {
      font-size: v.$font-size-ms-mob;

      .community__title-text {
        display: none;
      }
      .community__title-text-short {
        display: flex;
      }
    }

    &__content {
      margin-bottom: 25px;
    }
  }
}
</style>
