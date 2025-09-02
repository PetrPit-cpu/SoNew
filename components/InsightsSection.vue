<template>
  <section id="insights" class="insights">
    <div class="container">
      <div class="insights__content">
        <h2 class="insights__title">Science64</h2>
        <p class="insights__description">
          — это интеллектуальная платформа для шахматистов, стремящихся не просто изучать дебюты,
          а глубоко понимать свои ошибки и целенаправленно улучшать свою дебютную стратегию
        </p>
      </div>

      <div class="insights__video">
        <img
          src="/images/insights-img.jpg"
          alt="Science64 Platform Demo"
          class="insights__video-image"
        >
      </div>

    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables" as v;
@use "~/assets/scss/colors" as c;

.insights {
  margin-top: 200px;
  margin-bottom: 183px;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 773px;
    width: 100%;
    min-height: 89px;
    margin: 0 auto;
  }

  &__title {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    color: c.$primary-blue;
    margin: 0 0 20px 0;
    font-size: v.$font-size-ms;
    text-align: center;
  }

  &__description {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    font-size: v.$font-size-base;
    line-height: 1.4;
    color: c.$grey-description;
    margin: 0;
    text-align: center;
  }

  &__video {
    max-width: 100%;
    width: 100%;
    min-height: 436px;
    margin: 64px 0 20px 0;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }

  &__video-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  &__subtitle {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    color: c.$white;
    margin: 0;
    font-size: v.$font-size-ms;
    text-align: center;

    &-accent {
      color: c.$primary-blue;
    }
  }
}

@media (max-width: v.$breakpoint-lg) {
  .insights {
    margin-bottom: 120px;

    &__video {
      min-height: 350px;
      margin: 50px 0 20px 0;
    }
  }
}

@media (max-width: v.$breakpoint-md) {
  .insights {
    margin-top: 150px;
    margin-bottom: 150px;

    &__title,
    &__subtitle {
      font-weight: v.$font-weight-semi-bold;
      font-size: v.$font-size-xxl;
      line-height: 1.1;
    }

    &__description {
      font-weight: v.$font-weight-regular;
      font-size: v.$font-size-md;
    }

    &__video {
      min-height: 280px;
      margin: 20px 0 20px 0;
      border-radius: 20px;
    }
  }
}

@media (max-width: v.$breakpoint-sm) {
  .insights {
    margin-bottom: 150px;

    &__title {
      font-weight: v.$font-weight-bold;
      font-size: v.$font-size-xxl;
      line-height: 1.1;
    }
    &__subtitle {
      font-size: v.$font-size-lg;
    }

    &__video {
      min-height: 220px;
      margin: 20px 0 0 0;
      border-radius: 15px;
    }

    &__description {
      line-height: 1.1;
    }
  }
}
</style>
