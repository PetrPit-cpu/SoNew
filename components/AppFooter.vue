<template>
  <footer class="footer">
        <div class="container">
          <ul class="footer__list flex">
            <li class="footer__item flex">
              <a class="footer__link" href="#">
                <img class="footer__logo" src="/public/images/header-logo.svg">
                <ul class="footer__list-social flex">
                  <li class="footer__item-social flex">
                    <a class="footer__link-social" href="#">
                      <img class="footer__icon-tg" src="/public/images/brand-telegram.svg">
                      телеграм ник
                    </a>
                  </li>
                  <li class="footer__item-social">
                    <a class="footer__link-social" href="#">
                      <img class="footer__icon-tg" src="/public/images/mail.svg">
                      solutions.chess@gmail.com
                    </a>
                  </li>
                </ul>
              </a>
            </li>
            <li class="footer__item flex">
              <span class="footer__name-title">
                О компании
              </span>
              <ul class="footer__list-decription flex">
                <li class="footer__item-text">
                  <a class="footer__link-text" href="#">
                    ООО«ИНТЕЛЛЕКТУАЛЬНЫЕ СИСТЕМЫ»
                  </a>
                </li>
                <li class="footer__item-text">
                  <a class="footer__link-text" href="#">
                    <p>Разработка аналитического</p>
                    <p>программного обеспечения</p>
                  </a>
                </li>
                <li class="footer__item-text">
                  <a class="footer__link-text" href="#">
                    <p>Амурская область, г. Благовещенск,</p>
                    <p>ул. Горького, 174 офис 407</p>
                  </a>
                </li>
                <li class="footer__item-text">
                  <a class="footer__link-text" href="#">
                    <p>ИНН 2801277294</p>
                  </a>
                  <a class="footer__link-text" href="#">
                    <p>КПП 280101001</p>
                  </a>
                </li>
              </ul>
            </li>
            <li class="footer__item flex">
              <span class="footer__name-title">
                Меню
              </span>
              <ul class="footer__list-decription flex">
                <li class="footer__item-text">
                  <a class="footer__link-text" href="#">
                    Главная
                  </a>
                </li>
                <li class="footer__item-text">
                  <a class="footer__link-text" href="#">
                    О Science64
                  </a>
                </li>
                <li class="footer__item-text">
                  <a class="footer__link-text" href="#">
                    Как работает
                  </a>
                </li>
                <li class="footer__item-text">
                  <a class="footer__link-text" href="#">
                    Тарифы
                  </a>
                </li>
                <li class="footer__item-text">
                  <a class="footer__link-text" href="#">
                    Отзывы
                  </a>
                </li>
                <li class="footer__item-text">
                  <a class="footer__link-text" href="#">
                    FAQ
                  </a>
                </li>
                <li class="footer__item-text">
                  <a class="footer__link-text" href="#">
                    Партнеры
                  </a>
                </li>
                <li class="footer__item-text">
                  <a class="footer__link-text" href="#">
                    Условия возврата и обмена покупки
                  </a>
                </li>
                <li class="footer__item-text">
                  <a class="footer__link-text" href="#">
                    Политика конфиденциальности
                  </a>
                </li>
                <li class="footer__item-text">
                  <a class="footer__link-text" href="#">
                    Публичная оферта
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div class="footer__copyright-block">
            <span class="footer__copyright-text">
              2025. ООО «ИНТЕЛЛЕКТУАЛЬНЫЕ СИСТЕМЫ» Все права защищены
            </span>
          </div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables" as v;
@use "~/assets/scss/colors" as c;

.footer {
  &__logo {
    margin-bottom: 20px;
  }
  &__item {
    flex-direction: column;
    max-width: 255px;
    width: 100%;
  }
  &__list-social {
    flex-direction: column;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  &__list {
    padding: 0;
    margin: 0;
    list-style-type: none;
    justify-content: space-between;
    padding: 80px 0;
    border-top: 1px solid #9C9C9C;
    border-bottom: 1px solid #9C9C9C;
  }

  &__link-social {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: v.$font-inter;
    font-weight: v.$font-weight-medium;
    font-size: v.$font-size-sm;
    line-height: 1;
    color: c.$grey-description;
  }
  &__name-title {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    font-size: v.$ont-size-md-18;
    line-height: 1;
    color: c.$white;
    margin-bottom: 20px;
  }
  &__list-decription {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  &__link-text {
    text-decoration: none;
    font-family: v.$font-inter;
    font-weight: v.$font-weight-medium;
    font-size: v.$font-size-sm;
    line-height: 1;
    color: c.$grey-description;
  }
  &__list-decription {
    flex-direction: column;
    gap: 12px;
    max-width: 255px;
    width: 100%;
  }
  &__copyright-text {
    font-family: v.$font-inter;
    font-weight: v.$font-weight-regular;
    font-size: v.$font-size-sm;
    line-height: 1;
    text-align: center;
    color: c.$white;
    display: flex;
    justify-content: center;
    padding: 50px 0;
  }
}

.flex {
    display: flex;
}
</style>