<template>
  <section class="features">
    <div class="container">
      <h2 class="features__subtitle">
        Что делает
        <span class="features__subtitle-accent">Science64</span> уникальным
      </h2>
      <div class="features__grid">
        <div class="features__card features__card--large">
          <div class="features__card-header card-mob">
            <img
              src="/images/icon-max.svg"
              alt="System Analysis"
              class="features__card-icon"
            />
            <h3 class="features__card-title">Системный анализ ошибок</h3>
          </div>
          <p class="features__card-description">
            Выявляет повторяющиеся ошибки -
            <span class="features__card-accent">
              прямой доступ к проблемам вашего дебютного репертуара</span
            >
          </p>
          <ul class="features__card-list">
            <li class="features__card-item">
              Разграничиваются корневые и усугубляющие ошибки
            </li>
            <li class="features__card-item">
              Если проработать корень проблемы, не обязательно переходить к
              тому, где вы ошибались далее — скорее всего эти позиции больше не
              возникнут
            </li>
          </ul>
          <div class="features__card-bg"></div>
        </div>

        <div class="features__card features__card--small">
          <div class="features__card-content">
            <div class="features__card-header">
              <img
                src="/images/chart-pie.svg"
                alt="Accurate Estimates"
                class="features__card-icon"
              />
              <h3 class="features__card-title">Точные оценки</h3>
            </div>
            <div class="features__card-details">
              <span class="features__card-highlight"
                >Стабильные оценки, мгновенно</span
              >
              <p class="features__card-text">Без «скачущих» значений движков</p>
            </div>
          </div>
        </div>

        <div class="features__card features__card--small">
          <div class="features__card-content">
            <div class="features__card-header">
              <img
                src="/images/market-analysis.svg"
                alt="Variation Tree"
                class="features__card-icon"
              />
              <h3 class="features__card-title">Дерево вариантов</h3>
            </div>
            <div class="features__card-details">
              <span class="features__card-highlight"
                >Стабильные оценки, мгновенно</span
              >
              <p class="features__card-text">Без «скачущих» значений движков</p>
            </div>
          </div>
        </div>
      </div>

      <div class="features__grid features__grid--bottom">
        <div class="features__card features__card--mob-two">
          <div class="features__card-content">
            <div class="features__card-header">
              <img
                src="/public/images/chart-pie.svg"
                alt="Accurate Estimates"
                class="features__card-icon"
              />
              <h3 class="features__card-title">Точные оценки</h3>
            </div>
            <div class="features__card-details">
              <span class="features__card-highlight"
                >Стабильные оценки, мгновенно</span
              >
              <p class="features__card-text">Без «скачущих» значений движков</p>
            </div>
          </div>
        </div>

        <div class="features__card features__card--mob-one">
          <div class="features__card-content">
            <div class="features__card-header">
              <img
                src="/public/images/market-analysis.svg"
                alt="Variation Tree"
                class="features__card-icon"
              />
              <h3 class="features__card-title">Дерево вариантов</h3>
            </div>
            <div class="features__card-details">
              <span class="features__card-highlight"
                >Наглядная демонстрация вариантов в наглядном виде дерева
              </span>
              <p class="features__card-text">
                Удобное редактирование и отображение
              </p>
            </div>
          </div>
        </div>

        <div class="features__card features__card--large">
          <div class="features__card-header">
            <img
              src="/public/images/arrow-merge-both.svg"
              alt="Personal Recommendations"
              class="features__card-icon"
            />
            <h3 class="features__card-title">Персональные рекомендации</h3>
          </div>
          <p class="features__card-description">
            Автоматические рекомендации по корректировка игры
            <span class="features__card-accent">
              не отдельными ходами, а целыми вариантам с учетом уровня игры
              ваших оппонентов</span
            >
          </p>
        </div>

        <div class="features__card features__card--large">
          <div class="features__card-header">
            <img
              src="/public/images/icon-skill.svg"
              alt="Training"
              class="features__card-icon"
            />
            <h3 class="features__card-title">Тренировка</h3>
          </div>
          <p class="features__card-description">
            Отработка вариантов,
            <span class="features__card-accent"
              >чтобы закрепить изменения в игре</span
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "~/assets/scss/variables" as v;
@use "~/assets/scss/colors" as c;

.features {
  margin-bottom: 100px;

  &__grid {
    display: flex;
    gap: 20px;
    width: 100%;
    margin-bottom: 20px;

    &--bottom {
      margin-bottom: 20px;
    }
  }

  &__card {
    border-radius: 10px;
    background-color: c.$bg-card;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    &--large {
      width: calc((100% - 40px) * 0.6417);
      min-height: 309px;
    }

    &--small {
      width: calc((100% - 40px) * 0.6034 / 2);
      min-height: 309px;
    }

    &-header {
      display: flex;
      gap: 8px;
      align-items: center;
      margin-bottom: 18px;
      max-width: 275px;
      width: 100%;
    }

    &-icon {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }

    &-title {
      font-family: v.$font-primary;
      font-weight: v.$font-weight-bold;
      font-size: v.$font-size-md-18;
      line-height: 1.2;
      color: c.$white;
      margin: 0;
    }

    &-description {
      font-family: v.$font-primary;
      font-weight: v.$font-weight-medium;
      font-size: v.$font-size-base;
      color: c.$white;
      margin-bottom: 61px;
      max-width: 275px;
      width: 100%;
      line-height: 1.4;

      .features__card-accent {
        color: c.$grey-description;
      }
    }

    &-list {
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
      max-width: 301px;
      width: 100%;
      box-sizing: border-box;
      padding: 0 0 0 20px;
    }

    &-item {
      font-family: v.$font-primary;
      font-weight: v.$font-weight-regular;
      font-size: v.$font-size-base;
      color: c.$white;
      line-height: 1.4;
    }

    &-content {
      display: flex;
      flex-direction: column;
      gap: 13px;
    }

    &-details {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    &-highlight {
      font-family: v.$font-primary;
      font-weight: v.$font-weight-medium;
      font-size: v.$font-size-base;
      color: c.$white;
    }

    &-text {
      font-family: v.$font-primary;
      font-weight: v.$font-weight-medium;
      font-size: v.$font-size-base;
      color: c.$grey-description;
      margin: 0;
    }

    &-bg {
      position: absolute;
      max-width: 205px;
      width: 100%;
      min-height: 205px;
      background-image: url("/images/bg-card.png");
      background-size: cover;
      background-repeat: no-repeat;
      right: 0;
      bottom: 40px;
      z-index: 1;
      opacity: 0.9;
    }
  }

  &__subtitle {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    color: c.$white;
    margin: 0;
    font-size: v.$font-size-ms;
    text-align: left;
    margin-bottom: 62px;

    &-accent {
      color: c.$primary-blue;
    }
  }

  &__card--mob-two,
  &__card--mob-one {
    display: none;
  }
}

@media (max-width: v.$breakpoint-lg) {
  .features {
    &__grid {
      gap: 15px;

      &:first-child {
        flex-wrap: wrap;
        gap: 20px;
        justify-content: space-between;
      }
    }

    &__card {
      &--large,
      &--small {
        width: 100%;
        min-height: auto;
      }

      &--small {
        display: none;
      }
    }

    &__card-title {
      max-width: 100%;
    }

    &__card-description:nth-child(1) {
      max-width: 100%;
    }

    &__card-list {
      max-width: 350px;
    }

    &__grid:first-child .features__card--large {
      width: 100%;
      flex-basis: 100%;
    }

    &__grid:first-child {
      .features__card--small {
        width: calc((100% - 20px) / 2) !important;
        min-height: 250px !important;
        height: 250px !important;
      }
    }

    &__grid--bottom {
      flex-wrap: wrap;
      gap: 20px;
      justify-content: space-between;

      .features__card--large {
        width: calc((100% - 20px) / 2);
        min-height: 250px;
        height: 250px;
      }
    }

    &__card--mob-two,
    &__card--mob-one {
      display: flex;
      width: calc((100% - 20px) / 2);
      min-height: 250px;
      height: 250px;
    }

    .card-mob {
      max-width: 100%;
    }
  }
}

@media (max-width: v.$breakpoint-md) {
  .features {
    margin-bottom: 100px;

    &__card {
      padding: 15px;
      height: auto;

      &-title {
        font-weight: v.$font-weight-medium;
        font-size: v.$font-size-md-18;
      }

      &-description {
        font-size: v.$font-size-sm;
        margin-bottom: 40px;
      }

      &-item {
        font-size: v.$font-size-sm;
      }
    }

    &__subtitle {
      font-weight: v.$font-weight-bold;
      font-size: v.$font-size-xxl;
      margin-bottom: 20px;
    }

    &__grid {
      flex-wrap: nowrap;
      flex-direction: column;
      gap: 24px;
      margin-bottom: 0;
    }

    &__card--mob-two,
    &__card--mob-one {
      max-width: 100%;
      width: 100%;
      min-height: auto;
    }

    &__card--large {
      width: 100%;
    }

    &__card--large:nth-child(1) {
      width: 100%;
      margin-bottom: 24px;
    }

    .features__grid--bottom .features__card--large {
      width: 100%;
      min-height: auto;
      height: auto;
    }

    &__card-description {
      max-width: 100%;
      width: 100%;
      margin-bottom: 0;
      font-weight: v.$font-weight-medium;
    }

    &__card-list {
      display: none;
      max-width: 100%;
    }

    &__card-bg {
      display: none;
    }
  }
}

@media (max-width: v.$breakpoint-sm) {
  .features {
    margin-bottom: 120px;

    &__card {
      padding: 12px;
      border: 1px solid c.$grey-card-border;

      &-header {
        flex-direction: row;
        align-items: flex-start;
        gap: 12px;
      }

      &-icon {
        width: 20px;
        height: 20px;
      }
    }

    &__card-title {
      line-height: 1.1;
    }

    &__card-header {
      margin-bottom: 14px;
    }

    &__card-accent {
      font-weight: v.$font-weight-regular;
      line-height: 1.1;
    }

    &__subtitle {
      line-height: 1.1;
    }

    &__card-description {
      font-size: v.$font-size-base;
      line-height: 1.1;
    }
  }
}
</style>
