<template>
  <footer id="footer" class="footer">
    <div class="container">
      <ul class="footer__list">
        <li class="footer__item">
          <div class="footer__logo-section">
            <img
              class="footer__logo"
              src="/images/header-logo.svg"
              alt="Science64 Logo"
            />
            <ul class="footer__social-list">
              <li class="footer__social-item">
                <a class="footer__social-link" href="#">
                  <img
                    class="footer__social-icon"
                    src="/images/brand-telegram.svg"
                    alt="Telegram"
                  />
                  <span class="footer__social-text">телеграм ник</span>
                </a>
              </li>
              <li class="footer__social-item">
                <a class="footer__social-link" href="#">
                  <img
                    class="footer__social-icon"
                    src="/images/mail.svg"
                    alt="Email"
                  />
                  <span class="footer__social-text"
                    >solutions.chess@gmail.com</span
                  >
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li class="footer__item">
          <h3 class="footer__section-title">О компании</h3>
          <ul class="footer__link-list">
            <li class="footer__link-item">
              <a class="footer__link" href="#"
                >ООО «ИНТЕЛЛЕКТУАЛЬНЫЕ СИСТЕМЫ»</a
              >
            </li>
            <li class="footer__link-item">
              <a class="footer__link" href="#">
                <span>Разработка аналитического</span>
                <span>программного обеспечения</span>
              </a>
            </li>
            <li class="footer__link-item">
              <a class="footer__link" href="#">
                <span>Амурская область, г. Благовещенск,</span>
                <span>ул. Горького, 174 офис 407</span>
              </a>
            </li>
            <li class="footer__link-item">
              <a class="footer__link" href="#">ИНН 2801277294</a>
            </li>
            <li class="footer__link-item">
              <a class="footer__link" href="#">КПП 280101001</a>
            </li>
          </ul>
        </li>

        <li class="footer__item">
          <h3 class="footer__section-title">Меню</h3>
          <ul class="footer__link-list">
            <li class="footer__link-item">
              <a class="footer__link" href="#">Главная</a>
            </li>
            <li class="footer__link-item">
              <a class="footer__link" href="#">О Science64</a>
            </li>
            <li class="footer__link-item">
              <a class="footer__link" href="#">Как работает</a>
            </li>
            <li class="footer__link-item">
              <a class="footer__link" href="#">Тарифы</a>
            </li>
            <li class="footer__link-item">
              <a class="footer__link" href="#">Отзывы</a>
            </li>
            <li class="footer__link-item">
              <a class="footer__link" href="#">FAQ</a>
            </li>
            <li class="footer__link-item">
              <a class="footer__link" href="#">Партнеры</a>
            </li>
            <li class="footer__link-item">
              <a class="footer__link" href="#"
                >Условия возврата и обмена покупки</a
              >
            </li>
            <li class="footer__link-item">
              <a class="footer__link" href="#">Политика конфиденциальности</a>
            </li>
            <li class="footer__link-item">
              <a class="footer__link" href="#">Публичная оферта</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="footer__copyright">
      <p class="footer__copyright-text">
        2025. ООО «ИНТЕЛЛЕКТУАЛЬНЫЕ СИСТЕМЫ» Все права защищены
      </p>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables" as v;
@use "~/assets/scss/colors" as c;

.footer {
  background-color: transparent;
  border-top: 1px solid c.$grey-description;
  margin-top: auto;

  &__list {
    display: flex;
    justify-content: space-between;
    padding: 80px 0;
    list-style: none;
    margin: 0;
    gap: 20px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    max-width: 255px;
    width: 100%;
  }

  &__logo-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__logo {
    max-width: 120px;
    height: auto;
    margin-bottom: 0;
  }

  &__section-title {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    font-size: v.$font-size-md-18;
    line-height: 1;
    color: c.$white;
    margin-bottom: 20px;
    margin-top: 0;
  }

  &__social-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__social-item {
    display: flex;
    align-items: center;
  }

  &__social-link {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }

    &:focus {
      outline: 2px solid c.$primary-blue;
      outline-offset: 2px;
      border-radius: 4px;
    }
  }

  &__social-icon {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }

  &__social-text {
    font-family: v.$font-inter;
    font-weight: v.$font-weight-medium;
    font-size: v.$font-size-sm;
    line-height: 1;
    color: c.$grey-description;
  }

  &__link-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__link-item {
    display: flex;
    flex-direction: column;
  }

  &__link {
    text-decoration: none;
    font-family: v.$font-inter;
    font-weight: v.$font-weight-medium;
    font-size: v.$font-size-sm;
    line-height: 1.4;
    color: c.$grey-description;
    transition: color 0.3s ease;

    &:hover {
      color: c.$primary-blue;
    }

    &:focus {
      outline: 2px solid c.$primary-blue;
      outline-offset: 2px;
      border-radius: 4px;
    }

    span {
      display: block;
    }
  }

  &__copyright {
    display: flex;
    justify-content: center;
    padding: 50px 0;
    border-top: 1px solid c.$grey-description;
  }

  &__copyright-text {
    font-family: v.$font-inter;
    font-weight: v.$font-weight-regular;
    font-size: v.$font-size-sm;
    line-height: 1;
    text-align: center;
    color: c.$white;
    margin: 0;
  }
}

@media (max-width: v.$breakpoint-lg) {
  .footer {
    &__list {
      gap: 40px;
      padding: 60px 0;
    }

    &__item {
      max-width: 100%;
    }
  }
}

@media (max-width: v.$breakpoint-md) {
  .footer {
    &__list {
      padding: 40px 0;
      gap: 30px;
    }

    &__copyright {
      padding: 30px 0;
    }
  }
}

@media (max-width: v.$breakpoint-sm) {
  .footer {
    &__list {
      padding: 50px 0;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      gap: 25px;
    }

    &__item {
      justify-content: center;
      align-items: center;
      text-align: center;
      &:nth-child(3) {
        display: none;
      }
    }

    &__social-item {
      justify-content: center;
    }

    &__section-title {
      display: none;
    }

    &__link {
      font-size: v.$font-size-sm;
    }

    &__social-list {
      gap: 9px;
    }

    &__logo {
      margin: 0 auto;
    }

    &__copyright {
      display: none;
    }
  }
}
</style>
