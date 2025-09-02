<template>
  <section id="pricing" class="pricing">
    <div class="pricing__wrapper">
      <div class="pricing__content">
        <h2 class="pricing__title">Тарифы</h2>

        <div class="pricing__plans">

          <div class="pricing__period flex flex-column">
            <div class="pricing__block-column flex flex-column">
              <span class="pricing__season">Период подписки</span>

              <div class="pricing__period-option flex align-items-center">
                <input
                  type="radio"
                  name="period"
                  value="1"
                  class="pricing__period-checkbox"
                  id="period-1"
                />
                <label for="period-1" class="pricing__period-label"
                  >1 месяц</label
                >
              </div>

              <div class="pricing__period-option flex align-items-center">
                <input
                  type="radio"
                  name="period"
                  value="3"
                  class="pricing__period-checkbox"
                  id="period-3"
                  checked
                />
                <label for="period-3" class="pricing__period-label"
                  >3 месяца</label
                >
              </div>
            </div>

            <ul class="pricing__list-items-text flex flex-column list-reset">
              <li class="pricing__list-item-text">
                <span class="pricing__name-options">
                  Анализ шахматных партий
                </span>
                <p>Полный доступ к сервису</p>
                <p>Максимальное количество партий</p>
                <p>Мгновенная оценка позиции</p>
                <p>Визуализация дебютного дерева</p>
                <p>Автоматические рекомендации по корректировке репертуара</p>
              </li>
              <li class="pricing__list-item-text">
                <span class="pricing__name-options">
                  Анализ шахматных партий
                </span>
                <p>Приоритетная поддержка</p>
                <p>Сохранение плана тренировки</p>
                <p>Индивидуальный план занятий</p>
                <p>Работа с тренером</p>
              </li>
            </ul>
          </div>

          <div class="pricing__plan pricing__plan--trial">
            <h3 class="pricing__plan-title">Пробный</h3>
            <span class="pricing__plan-title-free">Бесплатно</span>
            <p class="pricing__plan-free-text">Доступ на 3 дня</p>
            <button class="pricing__plan-button">Подключить</button>
            <ul class="pricing__list-items flex flex-column list-reset">
              <li class="pricing__list-item flex flex-column">
                <img
                  src="/images/x.svg"
                  alt="✕"
                  class="pricing__list-item-icon"
                />
                <span class="pricing__number">1 000</span>
                <img
                  src="/images/check.svg"
                  alt="check"
                  class="pricing__list-item-icon"
                />
                <img
                  src="/images/check.svg"
                  alt="check"
                  class="pricing__list-item-icon"
                />
                <img
                  src="/images/check.svg"
                  alt="check"
                  class="pricing__list-item-icon"
                />
              </li>
              <li class="pricing__list-item flex flex-column">
                <img
                  src="/images/x.svg"
                  alt="✕"
                  class="pricing__list-item-icon"
                />
                <img
                  src="/images/x.svg"
                  alt="✕"
                  class="pricing__list-item-icon"
                />
                <img
                  src="/images/x.svg"
                  alt="✕"
                  class="pricing__list-item-icon"
                />
                <img
                  src="/images/x.svg"
                  alt="✕"
                  class="pricing__list-item-icon"
                />
              </li>
            </ul>
          </div>

          <div class="pricing__plan pricing__plan--mobile">
            <h3 class="pricing__plan-title">Пробный</h3>
            <ul class="pricing__features">
              <li>Доступ на 3 дня</li>
              <li>Анализ 1000 партий</li>
              <li>Мгновенная оценка позиций</li>
              <li>Визуализация дебютного дерева</li>
            </ul>
            <div class="pricing__plan-price-block">
              <span class="pricing__plan-title-free">0&nbsp;₽/месяц</span>
            </div>
            <button class="pricing__plan-button">Подключить</button>
          </div>

          <div class="pricing__plan pricing__plan--trial">
            <h3 class="pricing__plan-title">Базовый</h3>
            <span class="pricing__plan-title-free">2 799₽</span>
            <p class="pricing__plan-free-text">
              Есть промокод? Введите для скидки
            </p>
            <button class="pricing__plan-button">Подключить</button>
            <ul class="pricing__list-items flex flex-column list-reset">
              <li class="pricing__list-item flex flex-column">
                <img
                  src="/images/check.svg"
                  alt="check"
                  class="pricing__list-item-icon"
                />
                <span class="pricing__number">1 500</span>
                <img
                  src="/images/check.svg"
                  alt="check"
                  class="pricing__list-item-icon"
                />
                <img
                  src="/images/check.svg"
                  alt="check"
                  class="pricing__list-item-icon"
                />
                <img
                  src="/images/check.svg"
                  alt="check"
                  class="pricing__list-item-icon"
                />
              </li>
              <li class="pricing__list-item flex flex-column">
                <img
                  src="/images/check.svg"
                  alt="check"
                  class="pricing__list-item-icon"
                />
                <img
                  src="/images/check.svg"
                  alt="check"
                  class="pricing__list-item-icon"
                />
                <img
                  src="/images/x.svg"
                  alt="✕"
                  class="pricing__list-item-icon"
                />
                <img
                  src="/images/x.svg"
                  alt="✕"
                  class="pricing__list-item-icon"
                />
              </li>
            </ul>
          </div>

          <div class="pricing__plan pricing__plan--mobile">
            <h3 class="pricing__plan-title">Базовый</h3>
            <ul class="pricing__features">
              <li>Полный доступ на 1 или 3 месяца</li>
              <li>Анализ 1 500 партий</li>
              <li>Автоматические рекомендации</li>
              <li>Приоритетная поддержка</li>
              <li>Сохранение плана тренировок</li>
            </ul>
            <div class="pricing__plan-price-block">
              <span class="pricing__plan-title-free">1 199₽/месяц</span><br />
              <span class="pricing__plan-title-free">2 799₽/месяц</span>
            </div>
            <button class="pricing__plan-button">Купить</button>
          </div>

          <div class="pricing__plan pricing__plan--trial">
            <h3 class="pricing__plan-title">Персональный</h3>
            <span class="pricing__plan-title-free">2 799₽</span>
            <p class="pricing__plan-free-text pricing__plan-free-text--last">
              Введите промокод, чтобы увидеть цену
            </p>
            <button class="pricing__plan-button">Подключить</button>
            <ul class="pricing__list-items flex flex-column list-reset">
              <li class="pricing__list-item flex flex-column">
                <img
                  src="/images/check.svg"
                  alt="check"
                  class="pricing__list-item-icon"
                />
                <span class="pricing__number">3 000</span>
                <img
                  src="/images/check.svg"
                  alt="check"
                  class="pricing__list-item-icon"
                />
                <img
                  src="/images/check.svg"
                  alt="check"
                  class="pricing__list-item-icon"
                />
                <img
                  src="/images/check.svg"
                  alt="check"
                  class="pricing__list-item-icon"
                />
              </li>
              <li class="pricing__list-item flex flex-column">
                <img
                  src="/images/check.svg"
                  alt="check"
                  class="pricing__list-item-icon"
                />
                <img
                  src="/images/check.svg"
                  alt="check"
                  class="pricing__list-item-icon"
                />
                <img
                  src="/images/check.svg"
                  alt="check"
                  class="pricing__list-item-icon"
                />
                <img
                  src="/images/check.svg"
                  alt="check"
                  class="pricing__list-item-icon"
                />
              </li>
            </ul>
          </div>

          <div class="pricing__plan pricing__plan--mobile">
            <h3 class="pricing__plan-title">Персональный</h3>
            <ul class="pricing__features">
              <li>До 3 000 партий</li>
              <li>Индивидуальный план занятий</li>
              <li>Работа с тренером</li>
              <li>Все функции сервиса</li>
            </ul>
            <div class="pricing__plan-price-block">
              <span class="pricing__plan-title-free"
                >Цена доступна после ввода промокода</span
              >
            </div>
            <button class="pricing__plan-button">Ввести промокод</button>
          </div>
        </div>

        <p class="pricing__info">
          Ознакомиться с
          <a class="pricing__pay-link" href="#">способами оплаты</a> и
          <a class="pricing__pay-link" href="#">условиями возврата</a>
        </p>
        <ul class="pricing__list-payment list-reset flex">
          <li class="pricing__list-payment-item">
            <a href="#">
              <img
                src="/images/payments/visa.svg"
                alt="visa"
                class="pricing__list-payment-icon"
              />
            </a>
          </li>
          <li class="pricing__list-payment-item">
            <a href="#">
              <img
                src="/images/payments/master-card.svg"
                alt="mastercard"
                class="pricing__list-payment-icon"
              />
            </a>
          </li>
          <li class="pricing__list-payment-item">
            <a href="#">
              <img
                src="/images/payments/spb.svg"
                alt="mir"
                class="pricing__list-payment-icon"
              />
            </a>
          </li>
          <li class="pricing__list-payment-item">
            <a href="#">
              <img
                src="/images/payments/t-bank.svg"
                alt="yoomoney"
                class="pricing__list-payment-icon"
              />
            </a>
          </li>
          <li class="pricing__list-payment-item">
            <a href="#">
              <img
                src="/images/payments/mir.svg"
                alt="sberbank"
                class="pricing__list-payment-icon"
              />
            </a>
          </li>
          <li class="pricing__list-payment-item">
            <a href="#">
              <img
                src="/images/payments/pci.svg"
                alt="sberbank"
                class="pricing__list-payment-icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables" as v;
@use "~/assets/scss/colors" as c;
@use "~/assets/scss/utilities" as u;

.pricing {
  margin-bottom: 150px;

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 756px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    align-items: center;
  }

  &__content {
    width: 100%;
  }

  &__title {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    color: c.$white;
    font-size: v.$font-size-ms;
    width: 100%;
    margin-bottom: 55px;
    text-align: center;
  }

  &__plans {
    display: flex;
    width: 716px;
    margin: 0 auto 12px auto;
    gap: 0;
  }

  &__period {
    width: 250px;
    margin-right: 12px;
    gap: 84px;
  }

  &__block-column {
    padding: 20px 0 20px;
    gap: 16px;
  }

  &__name-options {
    color: c.$white-f;
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    font-size: v.$font-size-md;
    margin-bottom: 8px;
    display: block;
  }

  &__list-item-text {
    p {
      font-weight: v.$font-weight-regular;
      font-size: v.$font-size-base;
      color: c.$gray-light-a;
      line-height: 1.2;
      margin-bottom: 6px;
    }

    p:nth-of-type(5) {
      line-height: 16px;
    }
  }

  &__plan {
    display: flex;
    flex-direction: column;
    width: 146px;
    padding: 14px 12px 20px 12px;
    border-radius: 16px;
    background-color: c.$almost-black;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:nth-child(4) {
      padding: 14px 6px 20px 6px;
    }

    &:not(:last-child) {
      margin-right: 8px;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
  }

  &__plan-title {
    font-family: v.$font-secondary;
    font-weight: v.$font-weight-medium;
    font-size: v.$font-size-md-18;
    color: c.$white-f;
    margin-bottom: 20px;
    display: block;
    text-align: center;
  }

  .pricing__plan:nth-child(4) &__plan-title {
    margin-bottom: 15px;
  }

  &__plan-title-free {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    color: c.$primary-blue;
    font-size: v.$font-size-md-18;
    text-align: center;
    margin-bottom: 12px;
  }

  .pricing__plan:nth-child(4) &__plan-title-free {
    opacity: 0;
    margin-bottom: 15px;
  }

  .pricing__plan:nth-child(4) &__plan-free-text {
    margin-bottom: 20px;
    line-height: 1;
  }

  .pricing__plan:nth-child(3) &__plan-free-text {
    margin-bottom: 19px;
    line-height: 1;
  }

  &__plan-free-text {
  font-family: v.$font-primary;
  font-weight: v.$font-weight-regular;
  color: c.$gray-light-a;
  font-size: v.$font-size-sm;
  text-align: center;
  margin-bottom: 25px;

  &--last {
    margin-bottom: 5px;
  }
}


  &__plan-button {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    font-size: v.$font-size-base;
    color: c.$white-f;
    border: none;
    padding: 16.5px 17px;
    background-color: c.$primary-blue;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 52px;
  }

  &__info {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    font-size: v.$font-size-base;
    color: c.$grey-light-text;
    line-height: 1.2;
    text-align: left;
    margin: 0 0 20px 0;
    max-width: 716px;
    width: 100%;
  }

  &__pay-link {
    color: c.$white;
    text-decoration: none;
  }

  &__list-payment {
    justify-content: space-between;
    align-items: center;
    max-width: 716px;
    width: 100%;
  }

  &__list-item-icon {
    max-width: 20px;
    width: 100%;
    min-height: 20px;
  }

  &__list-items-text {
    gap: 20px;
  }

  &__list-items {
    gap: 52px;
  }

  &__list-item {
    align-items: center;
    gap: 6px;
  }

  &__number {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-regular;
    font-size: v.$font-size-base;
    color: c.$gray-light-a;
    line-height: 1.2;
  }

  &__plan-price {
    display: flex;
    align-items: center;
    gap: 21px;
    margin-bottom: 20px;
  }

  &__plan-old-price {
    font-family: v.$font-secondary;
    font-weight: v.$font-weight-regular;
    font-size: v.$font-size-sm;
    line-height: 16px;
    color: c.$gray-light-a;
    text-decoration: line-through;
  }

  &__plan-discount {
    font-family: v.$font-secondary;
    font-weight: v.$font-weight-regular;
    font-size: v.$font-size-sm;
    color: c.$white-f;
    line-height: 16px;
    padding: 3px 10px;
    border-radius: 20px;
    background-color: c.$primary-blue;
  }

  &__plan-promo {
    position: relative;
    width: 100%;
    margin-bottom: 20px;
  }

  &__plan-input {
    font-family: v.$font-secondary;
    font-weight: v.$font-weight-regular;
    font-size: v.$font-size-base;
    width: 100%;
    height: 32px;
    border-radius: 5px;
    border: 1px solid c.$color-disabled;
    padding: 6px 12px;
    box-sizing: border-box;
    background-color: transparent;
    color: c.$white;
    transition: border-color 0.3s ease;

    &::placeholder {
      color: c.$color-placeholder;
    }

    &:focus {
      outline: none;
      border-color: c.$primary-blue;
    }
  }

  &__plan-clear {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: none;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__plan-input:not(:placeholder-shown) + &__plan-clear {
    display: block;
  }

  &__plan-agreement {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
  }

  &__plan-checkbox {
    width: 29px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid c.$color-disabled;
    appearance: none;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;

    &:checked {
      background-color: c.$primary-blue;
      border-color: c.$primary-blue;
    }

    &:checked::after {
      content: "";
      position: absolute;
      left: 6px;
      top: 2px;
      width: 5px;
      height: 10px;
      border: solid c.$white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }

    &:focus {
      outline: 2px solid c.$primary-blue;
      outline-offset: 2px;
    }
  }

  &__plan-label {
    font-family: v.$font-secondary;
    font-weight: v.$font-weight-regular;
    font-size: v.$font-size-sm;
    line-height: 16px;
    color: c.$gray-light-a;
    cursor: pointer;
  }

  &__plan-link {
    text-decoration: none;
    color: c.$white-f;
    transition: color 0.3s ease;

    &:hover {
      color: c.$primary-blue;
    }
  }

  &__payment {
    margin-bottom: 20px;
    text-align: center;
  }

  &__payment-image {
    max-width: 735px;
    width: 100%;
    min-height: 98px;
    border-radius: 8px;
  }

  &__info-link {
    color: c.$primary-blue;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: c.$primary-blue-hover;
    }
  }

  &__season {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    color: c.$white;
    font-size: v.$font-size-base;
  }

  &__period-option {
    gap: 12px;
    cursor: pointer;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__period-checkbox {
    width: 20px;
    height: 20px;
    border: 2px solid c.$color-disabled;
    border-radius: 50%;
    appearance: none;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
    background: transparent;

    &:checked {
      background: c.$primary-blue;
    }

    &:checked::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      background: c.$white;
      border-radius: 50%;
    }

    &:focus {
      outline: 2px solid c.$primary-blue;
      outline-offset: 2px;
    }
  }

  &__period-label {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-regular;
    color: c.$gray-light-a;
    font-size: v.$font-size-base;
    cursor: pointer;
    user-select: none;
  }

  .pricing__plan--mobile {
    display: none;
    flex-direction: column;
    position: relative;
  }
}

@media (max-width: v.$breakpoint-lg) {
  .pricing {
    &__plans {
      width: 100%;
      max-width: 716px;
      /*flex-wrap: wrap;*/
      gap: 20px;
      justify-content: center;
    }

    &__period {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }

    &__plan {
      width: calc((100% - 40px) / 3);
      margin-right: 0;
    }
  }
}

@media (max-width: v.$breakpoint-md) {
  .pricing {
    margin-bottom: 100px;

    &__title {
      font-size: v.$font-size-ms-mob;
      margin-bottom: 40px;
    }

    &__plan {
      padding: 16px;
    }

    &__plan-title {
      font-size: v.$font-size-lg;
    }

    &__plans {
      width: 100%;
      max-width: 716px;
      /* flex-wrap: wrap; */
      gap: 5px;
    }
  }
}

@media (max-width: 644px) {
  .pricing {
    &__period {
      display: none;
    }

    &__plans {
      flex-direction: column;
      gap: 24px;
    }

    &__info {
      text-align: center;
    }

    &__plan--trial {
      display: none;
      max-width: 100%;
      width: 100%;
    }

    &__plan--mobile {
      max-width: 100%;
      width: 100%;
      padding: 20px;
      display: flex !important;
      flex-direction: column;
      min-height: 329px;
      position: relative;
    }

    &__features {
      padding: 0 0 0 15px;
    }

    &__plan-title {
      font-family: v.$font-primary;
      font-weight: v.$font-weight-bold;
      font-size: v.$font-size-xxl;
      margin-bottom: 16px;
      text-align: left;
    }

    &__features li {
      font-family: v.$font-primary;
      font-weight: v.$font-weight-regular;
      font-size: v.$font-size-base;
      line-height: 1.2;
      margin-bottom: auto;
    }

    &__plan-title-free {
      color: c.$white-f;
    }

    &__plan-price-block {
      line-height: 1.1;
      margin-bottom: 10px;

      order: 99;
      margin-top: auto;
    }

    &__plan-button {
      order: 100;
      margin-bottom: 0;
    }
  }

  .pricing__plan--desktop { display: none !important; }
  .pricing__plan--mobile  { display: flex !important; }
}

@media (max-width: v.$breakpoint-sm) {
  .pricing {
    margin-bottom: 150px;

    &__title {
      font-weight: v.$font-weight-bold;
      font-size: v.$font-size-xxl;
      line-height: 1.1;
      margin-bottom: 20px;
      text-align: left;
    }

    &__plans {
      width: 100%;
      flex-direction: column;
      align-items: center;
    }

    &__period {
      width: 100%;
      max-width: 300px;
      margin-right: 0;
      margin-bottom: 30px;
    }

    &__plan {
      width: 100%;
      max-width: 100%;
      margin-right: 0;
      border: 1px solid c.$grey-card-border;
    }
  }
}
</style>
