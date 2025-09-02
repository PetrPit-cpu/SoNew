<template>
  <section class="how-it-works">
    <div class="how-it-works__wrapper">
      <div class="how-it-works__content">
        <div class="container">
          <h2 class="how-it-works__title">
            Как работает <span class="how-it-works__title-accent">Science64</span>
          </h2>
          <p class="how-it-works__description">
            Всего 4 шага — и вы работаете над игрой осознанно и целенаправленно:
          </p>

          <div class="how-it-works__steps">

            <div class="how-it-works__step">
              <div class="how-it-works__step-number">1</div>
              <div class="how-it-works__step-content">
                <h3 class="how-it-works__step-title">Загрузите партии</h3>
                <p class="how-it-works__step-text">
                  Укажите никнейм и игровую площадку — партии будут скачаны и проанализированы автоматически
                </p>
              </div>
              <div class="how-it-works__step-image how-it-works__step-image--step1"></div>
            </div>

            <div class="how-it-works__step">
              <div class="how-it-works__step-number">2</div>
              <div class="how-it-works__step-content">
                <h3 class="how-it-works__step-title">Выберите позиции для тренировки</h3>
                <p class="how-it-works__step-text">
                  Просмотрите критические позиции и выберите наиболее актуальные
                </p>
              </div>
              <div class="how-it-works__step-image how-it-works__step-image--step2"></div>
            </div>

            <div class="how-it-works__step">
              <div class="how-it-works__step-number">3</div>
              <div class="how-it-works__step-content">
                <h3 class="how-it-works__step-title">Проанализируйте варианты</h3>
                <p class="how-it-works__step-text">
                  Изучите предложенные варианты в форме дерева; если требуется, скорректируйте ветки
                </p>
              </div>
              <div class="how-it-works__step-image how-it-works__step-image--step3"></div>
            </div>

            <div class="how-it-works__step">
              <div class="how-it-works__step-number">4</div>
              <div class="how-it-works__step-content">
                <h3 class="how-it-works__step-title">Закрепите навыки</h3>
                <p class="how-it-works__step-text">
                  Отработайте изученные варианты в режиме тренировке и проверьте навыки в режиме тестирования
                </p>
              </div>
              <div class="how-it-works__step-image how-it-works__step-image--step4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables" as v;
@use "~/assets/scss/colors" as c;

.how-it-works {
  width: 100%;
  margin-bottom: 154px;
  padding-top: 550px;

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 940px;
    width: 100%;
    align-items: center;
    margin: 0 auto;
  }

  &__content {
    width: 100%;
  }

  &__title {
    max-width: 587px;
    width: 100%;
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    color: c.$white;
    margin: 0 0 20px 0;
    font-size: v.$font-size-ms;
    text-align: left;

    &-accent {
      color: c.$primary-blue;
    }
  }

  &__description {
    max-width: 587px;
    width: 100%;
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    font-size: v.$font-size-base;
    line-height: 1.4;
    color: c.$grey-description;
    margin: 0 0 40px 0;
    text-align: left;
  }

  &__steps {
    max-width: 900px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  &__step {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 10px;
    border: 1px solid c.$bg-card-border;
    background-color: c.$bg-card;
    transition: all 0.3s ease;
    padding-right: 454px;

    &:hover {
      border-color: c.$primary-blue;
      box-shadow: 0 8px 24px rgba(29, 133, 221, 0.2);
    }

    &:last-child {
      margin: 0;
    }
  }

  &__step-number {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    font-size: 160px;
    line-height: 1;
    color: rgba(255, 255, 255, 0.05);
    position: absolute;
    z-index: 0;
    left: 28px;
    top: 0;
  }

  &__step-content {
    max-width: 351px;
    z-index: 1;
    padding: 32px 0 18px 57px;
  }

  &__step:first-of-type &__step-content {
    padding-bottom: 30px;
  }

  &__step-title {
    /*max-width: 185px;*/
    min-height: 56px;
    color: c.$white;
    font-family: v.$font-primary;
    font-weight: v.$font-weight-bold;
    font-size: 28px;
    line-height: 1.2;
    margin-bottom: 94px;
    margin-top: 0;
  }

  &__step:nth-child(3) &__step-title {
    max-width: 291px;
  }

  &__step:nth-child(4) &__step-title {
    max-width: 280px;
  }

  &__step:nth-child(5) &__step-title {
    max-width: 264px;
  }

  &__step-text {
    color: c.$grey-description;
    font-family: v.$font-primary;
    font-weight: v.$font-weight-regular;
    font-size: v.$font-size-base;
    line-height: 1.4;
    margin: 0;
  }

  &__step:nth-child(3) &__step-text {
    max-width: 343px;
  }

  &__step:nth-child(4) &__step-text {
    max-width: 371px;
  }

  &__step:nth-child(5) &__step-text {
    max-width: 403px;
  }

  &__step-image {
    max-width: 434px;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-left: 20px;
    transition: transform 0.3s ease;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;

    &--step1 {
      background-image: url('/images/work-bg.jpg');
    }

    &--step2 {
      background-image: url('/images/bg-card-2.jpg');
    }

    &--step3 {
      background-image: url('/images/bg-card-3.jpg');
    }

    &--step4 {
      background-image: url('/images/bg-card-4.jpg');
    }
  }
}


@media (max-width: v.$breakpoint-lg) {
  .how-it-works {
    margin-bottom: 120px;

    &__step {
      /*flex-direction: column;*/
      padding: 24px 32px;
      padding-right: 32px;
      gap: 20px;
    }

    &__step-content {
      padding: 0;
      max-width: 350px;
      width: 100%;
    }

    &__step-image {
      margin-left: 0;
      max-width: 434px;
      min-height: 200px;
    }
  }
}

@media (max-width: v.$breakpoint-md) {
  .how-it-works {
    margin-bottom: 100px;
    padding-top: 640px;

    &__title {
      font-size: v.$font-size-ms-mob;
    }

    &__description {
      font-size: v.$font-size-md;
    }

    &__step {
      padding: 20px 24px;
    }

    &__step-number {
      font-size: 120px;
      left: 20px;
    }

    &__step-title {
      font-size: v.$font-size-xxl;
      margin-bottom: 60px;
    }

    &__step-text {
      font-size: v.$font-size-base;
      line-height: 1.2;
    }
  }
}

@media (max-width: v.$breakpoint-sm) {
  .how-it-works {
    margin-bottom: 118px;

    &__title {
      font-weight: v.$font-weight-bold;
      font-size: v.$font-size-xxl;
      line-height: 1.1;
    }

    &__description {
      font-weight: v.$font-weight-regular;
      margin: 0 0 44px 0;
    }

    &__step {
      padding: 16px 20px;
    }

    &__step-number {
      font-size: v.$font-size-bs-mob;
      left: 16px;
    }

    &__step-title {
      font-size: v.$font-size-xxl;
      line-height: 1.1;
      margin-bottom: 32px;
    }

    &__step-content {
      margin-top: 84px;
    }

    &__step-image {
      min-height: 150px;
    }

    &__step-content {
    padding-bottom: 16px;
    }

    &__step:first-of-type &__step-content {
      padding-bottom: 16px;
    }

    &__step-image--step1 {
      z-index: 0;
    }

    &__step-image--step2 {
      z-index: 0;
    }

    &__step-image--step3 {
      z-index: 0;
    }

    &__step-image--step4 {
      z-index: 0;
    }

    &__step-number {
      z-index: 2;
    }
  }
}

@media (max-width: 468px) {
    .how-it-works {
      padding-top: 1150px;
    }
}
</style>
