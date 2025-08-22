<template>
  <div class="about-page">
    <AppHeader />
    <main class="main-content">
      <div class="about-section">
        <div class="container">
          <div class="about-block">
            <h1>Дебюты под контролем вместе с <span>Science64</span></h1>
            <p>Инновационный инструмент для анализа системных ошибок и усиления дебютной подготовки в шахматах</p>
            <button>Начать анализ</button>
          </div>
        </div>
      </div>
      <div class="insights">
        <div class="container">
          <div class="insights__block">
            <h2>Science64</h2>
              <p class="insights__text">
              &mdash;&nbsp;это интеллектуальная платформа для шахматистов, стремящихся не&nbsp;просто изучать дебюты,
              а&nbsp;глубоко понимать свои ошибки и&nbsp;целенаправленно улучшать свою дебютную стратегию
              </p>
          </div>
          <div class="insights__video"></div>
          <div class="insights__thesis">Что делает <span>Science64</span> уникальным</div>
        </div>
      </div>
      <div class="card">
        <div class="container">
          <div class="card-list">
            <div class="card-item-max">
              <div class="card-block-group">
                <img src="/public/images/icon-max.svg" alt="icon">
                <span class="card-title-bold">
                  Системный анализ ошибок
                </span>
              </div>
              <p class="card-thesis">
                Выявляет повторяющиеся ошибки - прямой доступ к проблемам вашего дебютного репертуара
              </p>
              <ul class="card-items">
                <li class="card-item">
                  Разграничиваются корневые и усугубляющие ошибки
                </li>
                <li class="card-item">
                  Если проработать корень проблемы, не обязательно переходить к тому, где вы ошибались далее — скорее всего эти позиции больше не возникнут
                </li>
              </ul>
            </div>
            <div class="card-item-min">
              <div class="card-block-group-m">
                <div class="card-element">
                  <div class="card-group-element">
                    <img src="/public/images/chart-pie.svg" alt="icon">
                      <span class="card-title-bold">
                        Точные оценки
                      </span>
                  </div>
                  <div class="card-description">
                    <span class="card-bold-text">Стабильные оценки, мгновенно</span>
                    <p class="card-text-thesis">Без «скачущих» значений движков</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-item-min">
              <div class="card-block-group-m">
                <div class="card-element">
                  <div class="card-group-element">
                    <img src="/public/images/market-analysis.svg" alt="icon">
                      <span class="card-title-bold">
                        Дерево вариантов
                      </span>
                  </div>
                  <div class="card-description">
                    <span class="card-bold-text">Стабильные оценки, мгновенно</span>
                    <p class="card-text-thesis">Без «скачущих» значений движков</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-block-element">
            <div class="card-item-max-element">
              <div class="card-block-group-description">
                <img src="/public/images/arrow-merge-both.svg" alt="icon">
                <span class="card-title-bold">
                  Персональные рекомендации
                </span>
              </div>
              <p class="card-thesis">
                Автоматические рекомендации по корректировка игры <span>не отдельными ходами, а целыми вариантам с учетом уровня игры ваших оппонентов</span>
              </p>
            </div>
            <div class="card-item-max-element">
              <div class="card-block-group">
                <img src="/public/images/icon-skill.svg" alt="icon">
                <span class="card-title-bold">
                  Тренировка
                </span>
              </div>
              <p class="card-thesis">
                Отработка вариантов, <span>чтобы закрепить изменения в игре</span>
              </p>
            </div>
          </div>
          <div class="card-color-group">Почему выбирают <span>Science64</span></div>
        </div>
      </div>
      <div class="stairs-wrapper">
        <div class="stairs-background">
          <img src="/public/images/bg-group.png" alt="Фон" class="bg-image">
        </div>
        <div class="stairs">
          <div class="container">
            <div class="text-stairs">
              <div class="stair-item" style="transform: translateY(0); margin-right: 13px;">
                Выявление и систематизация проблемных позиций
              </div>
              <div class="stair-item" style="transform: translateY(-85px); margin-right: 12px;">
                Иерархия ошибок: как корневые, так и ещё больше усугубляющие позицию
              </div>
              <div class="stair-item" style="transform: translateY(-88px); margin-right: 32px;">
                Возможность разбирать варианты в виде удобного дерева шахматной теории
              </div>
              <div class="stair-item" style="transform: translateY(-180px); margin-right: 15px;">
                Формирование и коррекция дебютного репертуара
              </div>
              <div class="stair-item" style="transform: translateY(-295px);">
                Получение качественных оценок немедленно, без затрат времени
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="work-wrapper">
        <div class="work">
          <div class="container">
            <div class="work-title">Как работает <span>Science64</span></div>
            <p class="work-text">
              Всего 4 шага — и вы работаете над игрой осознанно и целенаправленно:
            </p>

            <div class="work-block-card">
              <!-- Карточка 1 -->
              <div class="work-card">
                <div class="card-number">1</div>
                <div class="card-content">
                  <div class="card-subtitle">Загрузите партии</div>
                  <p class="worc-card-text">Укажите никнейм и игровую площадку — партии будут скачаны и проанализированы автоматически</p>
                </div>
                <div class="card-image"></div>
              </div>

              <!-- Карточка 2 -->
              <div class="work-card">
                <div class="card-number">2</div>
                <div class="card-content">
                  <div class="card-subtitle">Выберите позиции для тренировки</div>
                  <p class="worc-card-text">Просмотрите критические позиции и выберите наиболее актуальные</p>
                </div>
                <div class="card-image"></div>
              </div>

              <!-- Карточка 3-->
              <div class="work-card">
                <div class="card-number">3</div>
                <div class="card-content">
                  <div class="card-subtitle">Проанализируйте варианты</div>
                  <p class="worc-card-text">Изучите предложенные варианты в форме дерева; если требуется, скорректируйте ветки</p>
                </div>
                <div class="card-image"></div>
              </div>

              <!-- Карточка 4-->
              <div class="work-card">
                <div class="card-number">4</div>
                <div class="card-content">
                  <div class="card-subtitle">Закрепите навыки</div>
                  <p class="worc-card-text">Отработайте изученные варианты в режиме тренировке и проверьте навыки в режиме тестирования</p>
                </div>
                <div class="card-image"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="price-wrapper">
        <div class="price">
        <div class="container">
          <div class="price-title">
            Тарифы
          </div>
          <div class="price-content-link">
            <button class="price-btn">
              1 месяц
            </button>
            <button class="price-btn">
              2 месяца
            </button>
          </div>
          <ul class= "price-list flex">
            <li class="price-item">
              <span class="span-price-subtitle">
                Пробный
              </span>
              <ul class="price-list-content">
                <li class="price-item-text">
                  Доступ ко всем или почти всем функциям сервиса
                </li>
                <li class="price-item-text">
                  Возможность протестировать платные инструменты
                </li>
                <li class="price-item-text">
                  <span class="price-text-decoration">
                    Поддержка (иногда в приоритете)
                  </span>
                </li>
                <li class="price-item-text">
                  <span class="price-text-decoration">
                    Без автоматического продления
                  </span>
                </li>
              </ul>
              <div class="price-element flex">
                <strong class="price-text-bold">
                  0 ₽/мес
                </strong>
                <span class="price-end-text">
                  доступ до 07.08.2025
                </span>
              </div>
            </li>

            <li class="price-item">
              <span class="span-price-subtitle">
                Базовый
              </span>
              <ul class="price-list-content">
                <li class="price-item-text">
                  Доступ ко всем или почти всем функциям сервиса
                </li>
                <li class="price-item-text">
                  Возможность протестировать платные инструменты
                </li>
                <li class="price-item-text">
                  <span class="price-text-decoration">
                    Поддержка (иногда в приоритете)
                  </span>
                </li>
                <li class="price-item-text">
                  <span class="price-text-decoration">
                    Без автоматического продления
                  </span>
                </li>
              </ul>
              <div class="price-promotions flex">
                <strong class="price-text-bold">
                  1199 ₽/мес
                </strong>
                <span class="price-reduction-text">
                  1499
                </span>
                <span class="price-discount">
                  -20%
                </span>
              </div>
              <div class="price-input-wrapper">
                <input type="text" class="price-nickname-input" placeholder="Ввести промокод" />
                <button type="button" class="price-input-clear">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15L15 5M5 5L15 15" stroke="#797C84" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              </div>
              <div class="price-agreement flex">
                <input type="checkbox" class="price-checkbox" id="tariff-agreement" />
                <label for="tariff-agreement" class="price-end-text">
                Подтверждаю согласие с <strong><a class="price-link" href="#">условиями тарифа</a></strong>
                </label>
              </div>
              <button class="price-button">
                Купить
              </button>
            </li>

            <li class="price-item">
              <span class="span-price-subtitle">
                Базовый
              </span>
              <ul class="price-list-content">
                <li class="price-item-text">
                  Доступ ко всем или почти всем функциям сервиса
                </li>
                <li class="price-item-text">
                  Возможность протестировать платные инструменты
                </li>
                <li class="price-item-text">
                  <span class="price-text-decoration">
                    Поддержка (иногда в приоритете)
                  </span>
                </li>
                <li class="price-item-text">
                  <span class="price-text-decoration">
                    Без автоматического продления
                  </span>
                </li>
              </ul>
              <div class="price-promotions flex">
                <strong class="price-text-bold">
                  3499 ₽/мес
                </strong>
                <span class="price-reduction-text">
                  1499
                </span>
                <span class="price-discount">
                  -20%
                </span>
              </div>
              <div class="price-input-wrapper">
                <input type="text" class="price-nickname-input" placeholder="Ввести промокод" />
                <button type="button" class="price-input-clear">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15L15 5M5 5L15 15" stroke="#797C84" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              </div>
              <div class="price-agreement flex">
                <input type="checkbox" class="price-checkbox" id="tariff-agreement" />
                <label for="tariff-agreement" class="price-end-text">
                Подтверждаю согласие с <strong><a class="price-link" href="#">условиями тарифа</a></strong>
                </label>
              </div>
              <button class="price-button">
                Купить
              </button>
            </li>
          </ul>
          <div class="price-pay">
            <img class="price-image" src="/public/images/pay.jpg">
          </div>
          <strong class="price-how">
            Ознакомиться с <a class="price-how-link" href="#">способами оплаты</a> и <a class="price-how-link" href="#">условиями возврата</a>
          </strong>
        </div>
      </div>
      </div>
      <div class="community">
        <div class="container">
          <div class="community-title">Присоединяйтесь к сообществу <span>Science64</span></div>
          <div class="community-text">
            Узнайте, что говорит наше сообщество о своем опыте использования платформы
          </div>
        </div>
        <SwiperSlider />
      </div>
      <div class="faq">
        <div class="container">
          <div class="faq-block flex">
            <div class="faq-left flex">
              <div class="faq-title">
                Часто задаваемые вопросы
              </div>
              <p class="faq-text">
                Мы собрали ответы на самые популярные вопросы о Science64 — от принципов работы до настройки анализа. Если вы не нашли нужную информацию, напишите нам!
              </p>
            </div>
            <AppAccordion
              :items="accordionItems"
              class="faq-accordion"
              @toggle="handleAccordionToggle"
            />
          </div>
        </div>
      </div>
      <div class="trust">
        <div class="container">
          <div class="trust-block">
            <div class="trust-title">
            Нам доверяют
          </div>
          <div class="trust-text">
            <p>Спасибо нашим партнёрам за идеи, экспертизу и поддержку, которые делают Science64 сильнее.</p>
            <p>Вместе мы создаём больше, чем продукт — мы создаём движущую силу индустрии</p>
          </div>
          </div>
          <div class="trust-clients">
            <img class="trust-image" src="/public/images/trust-img.jpg">
          </div>
        </div>
      </div>
      <AppFooter />
    </main>
  </div>
</template>


<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import SwiperSlider from '@/components/SwiperSlider.vue'
import AppAccordion from '@/components/AppAccordion.vue'
import { faqData } from '@/data/faqData'

const accordionItems = ref([...faqData])

const handleAccordionToggle = (index) => {
  accordionItems.value[index].isOpen = !accordionItems.value[index].isOpen
  console.log(`Toggled item at index ${index}`)
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables" as v;
@use "~/assets/scss/colors" as c;
.about-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.about-section {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 1000px;
  width: 100%;
  padding: 174px 0 263px;
  margin: 0 auto;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 105%;
    transform: translate(-50%, -50%);
    background-image: url('/images/image-about.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    max-width: 828px;
    width: 100%;
    min-height: 465px;
    border-radius: 10px;
    z-index: -1;
  }

  h1 {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    font-size: v.$font-size-bs;
    line-height: 1;
    margin: 0 0 20px 0;

    span {
      font: inherit;
      color: c.$primary-blue;
    }
  }

  p {
    max-width: 447px;
    width: 100%;
    min-height: 38px;
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    font-size: 16px;
    line-height: 1;
    margin: 0 0 45px 0;
    color: #9C9C9C;
  }

  button {
    background-color: #1D85DD;
    max-width: 143px;
    width: 100%;
    min-height: 38px;
    border-radius: 5px;
    color: #fff;
    font-family: v.$font-primary;
    font-weight: 500;
    font-size: 13.33px;
    line-height: 1;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #1570c2;
    }
  }
}

.about-block {
  max-width: 663px;
  width: 100%;
  color: #fff;
}

.insights {
  margin-bottom: 183px;
  h2 {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    color: #1D85DD;
    margin: 0;
    font-size: v.$font-size-ms;
    margin-bottom: 20px;
  }
  &__text {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    font-size: 14px;
    line-height: 1;
    color: #9C9C9C;
    margin: 0;
    line-height: 1;
    text-align: center;
  }
  &__block {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 773px;
    width: 100%;
    min-height: 89px;
    margin: 0 auto;
  }
  &__video {
    max-width: 100%;
    width: 100%;
    min-height: 436px;
    background-image: url(/public/images/insights-image.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 30px;
    margin-top: 64px;
    margin-bottom: 20px;
  }
  &__thesis {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    color: c.$white;
    margin: 0;
    font-size: v.$font-size-ms;
    span {
      font: inherit;
      color: c.$primary-blue;
    }
  }
}

.card-item-max {
  position: relative;
  width: calc((100% - 40px) * 0.6417);
  min-height: 309px;
  border-radius: 10px;
  background-color: #171717;
  padding: 20px;
  box-sizing: border-box;
}

.card-item-max-element {
  width: calc((100% - 40px) * 0.6417);
  min-height: 309px;
  border-radius: 10px;
  background-color: #171717;
  padding: 20px;
  box-sizing: border-box;
}

.card-item-max::after {
  content: "";
  position: absolute;
  max-width: 205px;
  width: 100%;
  min-height: 205px;
  background-image: url('/public/images/bg-card.png');
  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  right: 0px;
  bottom: 40px;
  z-index: 1;
}

.card-block-group {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 18px;
  max-width: 275px;
  width: 100%;
}

.card-block-group-description {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 18px;
  max-width: 301px;
  width: 100%;
}

.card-block-group-m {
  display: flex;
  gap: 5px;
  align-items: center;
  max-width: 195px;
  width: 100%;
}

.card-group-element {
  display: flex;
  gap: 5px;
}

.card-thesis {
  font-family: v.$font-primary;
  font-weight: v.$font-weight-medium;
  font-size: v.$font-size-base;
  color: c.$white;
  margin-bottom: 61px;
  max-width: 275px;
  width: 100%;
}

.card-items {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 301px;
  width: 100%;
  box-sizing: border-box;
}

.card-item {
  font-family: v.$font-primary;
  font-weight: v.$font-weight-regular;
  font-size: v.$font-size-base;
  color: c.$white;
}

.card-item-min {
  width: calc((100% - 40px) * 0.6034 / 2);
  min-height: 309px;
  border-radius: 10px;
  background-color: #171717;
  padding: 20px;
  box-sizing: border-box;
}

.card-list {
  display: flex;
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;
}

.card-title-bold {
  font-family: v.$font-primary;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  color: c.$white;
}

.card-bold-text {
  font-family: v.$font-primary;
  font-weight: v.$font-weight-medium;
  font-size: v.$font-size-base;
  color: c.$white;
}

.card-text-thesis {
  font-family: v.$font-primary;
  font-weight: v.$font-weight-medium;
  font-size: v.$font-size-base;
  color: c.$grey-description;
}

.card-element {
  display: flex;
  flex-direction: column;
  gap: 13px;
}

p {
  margin: 0;
}

.card-block-element {
  display: flex;
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;
}

.card-thesis span {
  color: #9C9C9C;
}

.card-color-group {
  font-family: v.$font-primary;
  font-weight: v.$font-weight-medium;
  color: c.$white;
  margin: 0;
  font-size: v.$font-size-ms;
  margin-bottom: 20px;
  span {
    font: inherit;
    color: c.$primary-blue;
  }
}

.stairs {
  padding-top: 292px;
}

.text-stairs {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.text-stairs > div {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  border-radius: 4px;
  box-sizing: border-box;
  padding-bottom: 350px;
}

.text-stairs div {
  max-width: 189px;
  width: 100%;
  font-family: v.$font-primary;
  font-weight: v.$font-weight-regular;
  color: c.$white;
}

.stairs-wrapper {
  position: relative;
  max-width: 1200px;
  width: 100%;
  overflow: hidden;
}

.stairs-background {
  position: absolute;
  top: 100px;
  /*left: -82px;*/
  width: 100%;
  z-index: -1;
}

.bg-image {
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.work {
  width: 100%;
  margin-bottom: 154px;
}

.work-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 940px;
  width: 100%;
  align-items: center;
  margin: 0 auto;
}

.work-block-card {
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.work-title {
  max-width: 587px;
  width: 100%;
  font-family: v.$font-primary;
  font-weight: v.$font-weight-medium;
  color: c.$white;
  margin: 0;
  font-size: v.$font-size-ms;
  margin-bottom: 20px;
  span {
    font: inherit;
    color: c.$primary-blue;
  }
}

.work-text {
  max-width: 587px;
  width: 100%;
  font-family: v.$font-primary;
  font-weight: v.$font-weight-medium;
  font-size: 14px;
  line-height: 1;
  color: #9C9C9C;
  margin: 0;
  line-height: 1;
  margin-bottom: 40px;
}

.work-card {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: flex-start;
    /*padding: 32px 57px;*/
    border-radius: 10px;
    border: 1px solid #5D5D5D;
    background-color: #171717;
  }

  .work-card:last-child {
    margin: 0;
  }

  .card-subtitle {
    max-width: 185px;
    min-height: 56px;
    color: #FFFFFF;
    font-family: 'Rubik';
    font-weight: 700;
    font-size: 28px;
    line-height: 1;
    margin-bottom: 94px;
  }

  .work-card:nth-child(3) .card-subtitle {
    max-width: 291px;
  }

  .work-card:nth-child(4) .card-subtitle {
    max-width: 280px;
  }

  .work-card:nth-child(5) .card-subtitle {
    max-width: 264px;
  }

  .worc-card-text {
    color: #A9A9A9;
    font-family: 'Rubik';
    font-weight: 400;
    font-size: 14px;
    line-height: 1;
  }

  .work-card:nth-child(3) .worc-card-text {
    max-width: 343px;
  }

  .work-card:nth-child(4) .worc-card-text {
    max-width: 371px;
  }

  .work-card:nth-child(5) .worc-card-text {
    max-width: 403px;
  }

  .card-number {
    font-family: 'Rubik';
    font-weight: 500;
    font-size: 160.23px;
    line-height: 1;
    color: #FFFFFF0D;
    position: absolute;
    z-index: 0;
    left: 28px;
    top: 0;
  }

  .card-content {
    max-width: 351px;
    z-index: 1;
    padding: 32px 0 47px 57px;
  }

  .work-card:first-of-type .card-content {
    padding-bottom: 30px;
  }

  .card-image {
    max-width: 434px;
    width: 100%;
    min-height: 259px;
    border-radius: 15px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-left: 20px;
  }

  /* Изображения для конкретных карточек */
  .work-card:nth-child(1) .card-image {
    background-image: url('/public/images/work-bg.jpg');
  }

  .work-card:nth-child(2) .card-image {
    background-image: url('/public/images/bg-card-2.jpg');
  }

  .work-card:nth-child(3) .card-image {
    background-image: url('/public/images/bg-card-3.jpg');
  }

  .work-card:nth-child(4) .card-image  {
    background-image: url('/public/images/bg-card-4.jpg');
  }

.price-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 940px;
  width: 100%;
  align-items: center;
  margin: 0 auto;
}

.price-title {
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  color: #FFFFFF;
  font-size: 35px;
  width: 100%;
  margin-bottom: 55px;
  text-align: center;
}

.price-content-link {
  display: flex;
  justify-content: center;

  .price-btn {
    font-family: v.$font-secondary;
    font-weight: v.$font-weight-semi-bold;
    font-size: v.$font-size-base;
    line-height: 20px;
    text-align: center;
    padding: 6px 58.5px;
    border: none;
    cursor: pointer;

    & {
      padding: 6px 58.5px;
      line-height: 20px;
      font-size: v.$font-size-base;
      text-align: center;
    }

    &:first-of-type {
      background-color: c.$dusty-gray;
      border-radius: 20px 0 0 20px;
      color: c.$white-f;
    }

    &:last-of-type {
      background-color: c.$charcoal-gray;
      border-radius: 0 20px 20px 0;
      color: c.$gray-light-a;
    }
  }
}

.price {
  margin-bottom: 150px;
}

.price-item {
  display: flex;
  flex-direction: column;
  max-width: 249px;
  width: 100%;
  padding: 20px;
  border-radius: 16px;
  background-color: #232323;
}

.span-price-subtitle {
  font-family: v.$font-secondary;
  font-weight: v.$font-weight-semi-bold;
  font-size: v.$font-size-xl;
  color: c.$white-f;
  margin-bottom: 16px;
  display: block;
}

.price-item-text {
  font-family: v.$font-secondary;
  font-weight: v.$font-weight-regular;
  font-size: v.$font-size-base;
  color: c.$white-f;
}

.price-list-content {
  line-height: 20px;
  margin-bottom: 94px;
  padding-inline-start: 20px;
  flex-grow: 1;
}

.price-list .price-item:first-child .price-list-content {
  margin-bottom: 200px;
}

.flex {
  display: flex;
}

.price-element {
  flex-direction: column;
}

.price-text-bold {
  font-family: v.$font-secondary;
  color: c.$white-f;
  font-weight: v.$font-weight-semi-bold;
  font-size: v.$ont-size-md-18;
  line-height: 28px;
}

.price-end-text {
  font-family: v.$font-secondary;
  font-weight: v.$font-weight-regular;
  font-size: v.$font-size-sm;
  line-height: 16px;
  color: c.$gray-light-a;
}

.price-list {
  margin: 16px 0 16px 0;
  padding: 0;
  gap: calc((100% - 249px * 3) / 2);
}

.price-list .price-item:last-child .price-reduction-text,
.price-list .price-item:last-child .price-discount {
  display: none;
}

.price-reduction-text {
  font-family: v.$font-secondary;
  font-weight: v.$font-weight-regular;
  font-size: v.$font-size-sm;
  line-height: 16px;
  color: c.$gray-light-a;
  text-decoration: line-through;
}

.price-discount {
  font-family: v.$font-secondary;
  font-weight: v.$font-weight-regular;
  font-size: v.$font-size-sm;
  color: c.$white-f;
  line-height: 16px;
  padding: 3px 10px;
  border-radius: 20px;
  background-color: c.$primary-blue;
}

.price-promotions {
  align-items: center;
  gap: 21px;
}

.price-nickname-input {
  font-family: v.$font-secondary;
  font-weight: v.$font-weight-regular;
  font-size: v.$font-size-base;
  width: 100%;
  height: 32px;
  border-radius: 5px;
  border: 1px solid #3C3C3C;
  padding: 6px 12px;
  box-sizing: border-box;
  background-color: transparent;
  color: white;
  font-family: inherit;
}

.price-nickname-input::placeholder {
  color: #999;
}

.price-input-wrapper {
  position: relative;
  width: 100%;
  margin-top: 12px;
}

.price-input-clear {
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
}

.price-input-clear svg {
  width: 100%;
  height: 100%;
}

.price-nickname-input:not(:placeholder-shown) + .price-input-clear {
  display: block;
}

.price-agreement {
  align-items: center;
  gap: 16px;
  margin-top: 20px;
}

.price-checkbox {
  width: 29px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #3C3C3C;
  appearance: none;
  cursor: pointer;
  position: relative;
}

.price-checkbox:checked {
  background-color: #1D85DD;
  border-color: #1D85DD;
}

.price-checkbox:checked::after {
  content: "";
  position: absolute;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid #FFFFFF;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.price-link {
  text-decoration: none;
  color: c.$white-f;
}

.price-button {
  font-family: v.$font-secondary;
  font-weight: v.$font-weight-semi-bold;
  font-size: v.$font-size-base;
  line-height: 18px;
  color: c.$gray-light-a;
  padding: 6px 82px;
  border-radius: 10px;
  background-color: c.$bg-90-black;
  cursor: pointer;
  display: block;
  border: none;
  margin-top: 16px;
  transition: all 0.3s ease;
}

.price-button:hover {
  color: c.$white;
  background-color: c.$primary-blue;
}

.price-image {
  max-width: 735px;
  width: 100%;
  min-height: 98px;
  margin-bottom: 16px;
}

.price-how {
  font-family: v.$font-primary;
  font-weight: v.$font-weight-medium;
  font-size: v.$font-size-base;
  color: c.$white;
  line-height: 1;
}

.price-how-link {
  color: $primary-blue;
  text-decoration: none;
}

.community-title {
  max-width: 761px;
  width: 100%;
  font-family: v.$font-primary;
  font-weight: v.$font-weight-medium;
  color: c.$white;
  margin: 0;
  font-size: v.$font-size-ms;
  margin-bottom: 20px;
  span {
    font: inherit;
    color: c.$primary-blue;
  }
}

.community-text {
  max-width: 761px;
  width: 100%;
  font-family: v.$font-primary;
  font-weight: v.$font-weight-medium;
  font-size: 14px;
  line-height: 1;
  color: #9C9C9C;
  margin: 0;
  line-height: 1;
  margin-bottom: 40px;
}

.community {
  margin-bottom: 150px;
}

.faq {
  margin-bottom: 150px;
}

.faq-title {
  font-family: v.$font-primary;
  font-weight: v.$font-weight-medium;
  font-size: v.$font-size-ms;
  line-height: 1;
  color: c.$white;
}

.faq-text {
  font-family: v.$font-primary;
  font-weight: v.$font-weight-medium;
  font-size: v.$font-size-base;
  line-height: 1;
  color: c.$grey-description;
}

.faq-left {
  max-width: 405px;
  width: 100%;
  flex-direction: column;
  gap: 20px;
}

.trust-title {
  font-family: v.$font-primary;
  font-weight: v.$font-weight-medium;
  font-size: v.$font-size-ms;
  line-height: 1;
  color: c.$white;
  text-align: center;
  margin-bottom: 20px;
}

.trust-text {
  font-family: v.$font-primary;
  font-weight: v.$font-weight-medium;
  font-size: v.$font-size-base;
  line-height: 1;
  color: c.$grey-description;
  text-align: center;
  margin-bottom: 20px;
}

.trust-image {
  width: 100%;
  height: 181px;
  margin-bottom: 65px;
}

.trust-block {
  max-width: 915px;
  width: 100%;
  margin: 0 auto;
}

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

.container {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>