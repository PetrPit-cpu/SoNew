<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__logo">
        <img
          src="/images/header-logo.svg"
          alt="Science64 Logo"
          class="header__logo-image"
        />
      </div>

      <nav class="header__nav" aria-label="Главная навигация">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <a href="#insights" class="header__nav-link">О нас</a>
          </li>
          <li class="header__nav-item">
            <a href="#pricing" class="header__nav-link">Тарифы</a>
          </li>
          <li class="header__nav-item">
            <a href="#community" class="header__nav-link">Форум</a>
          </li>
          <li class="header__nav-item">
            <a href="#footer" class="header__nav-link">Контакты</a>
          </li>
        </ul>
      </nav>

      <div class="header__block-right flex">
        <button class="header__lang-btn">
          <img
            src="/images/icon-multy.svg"
            alt="Language"
            class="header__lang-icon"
          />
          <span class="header__lang-text">Русский</span>
          <img
            src="/images/witch.svg"
            alt="Dropdown"
            class="header__lang-arrow"
          />
        </button>
        <a class="header__link" href="#" aria-label="Войти">
          <img
            src="/images/login-out.svg"
            alt=""
            class="header__link-icon"
            aria-hidden="true"
          />
        </a>
      </div>

      <button
        class="header__burger"
        :aria-expanded="isMenuOpen"
        aria-label="Открыть меню"
        aria-controls="mobile-menu"
        @click="toggleMenu"
      >
        <span class="header__burger-line" />
        <span class="header__burger-line" />
        <span class="header__burger-line" />
      </button>
    </div>

    <transition name="fade">
      <div v-if="isMenuOpen" class="mobile-menu__backdrop" @click="closeMenu" />
    </transition>

    <transition name="slide">
      <aside
        v-if="isMenuOpen"
        id="mobile-menu"
        class="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Мобильное меню"
        @keydown.esc="closeMenu"
      >
        <div class="mobile-menu__header">

          <button
            class="mobile-menu__close"
            aria-label="Закрыть меню"
            @click="closeMenu"
          >
            <span class="mobile-menu__close-line" />
            <span class="mobile-menu__close-line" />
          </button>
        </div>

        <nav class="mobile-menu__nav" aria-label="Мобильная навигация">
          <ul class="mobile-menu__list">
            <li class="mobile-menu__item">
              <a href="#insights" class="mobile-menu__link" @click="closeMenu">О нас</a>
            </li>
            <li class="mobile-menu__item">
              <a href="#pricing" class="mobile-menu__link" @click="closeMenu"
                >Тарифы</a
              >
            </li>
            <li class="mobile-menu__item">
              <a href="#community" class="mobile-menu__link" @click="closeMenu">Форум</a>
            </li>
            <li class="mobile-menu__item">
              <a href="#footer" class="mobile-menu__link" @click="closeMenu"
                >Контакты</a
              >
            </li>
            <li class="mobile-menu__item">
              <a href="#" class="mobile-menu__link" @click="closeMenu"
                >Условия возврата и обмена покупки</a
              >
            </li>
            <li class="mobile-menu__item">
              <a href="#" class="mobile-menu__link" @click="closeMenu"
                >Политика конфиденциальности</a
              >
            </li>
            <li class="mobile-menu__item">
              <a href="#" class="mobile-menu__link" @click="closeMenu"
                >Публичная оферта</a
              >
            </li>
          </ul>
        </nav>

        <div class="mobile-menu__footer">
          <button class="header__lang-btn mobile-menu__lang">
            <img
              src="/images/icon-multy.svg"
              alt="Language"
              class="header__lang-icon"
            />
            <span class="header__lang-text">Русский</span>
            <img
              src="/images/witch.svg"
              alt="Dropdown"
              class="header__lang-arrow"
            />
          </button>
        </div>
      </aside>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from "vue";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

function lockScroll(lock: boolean) {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  if (lock) {
    const scrollBarCompensation = window.innerWidth - html.clientWidth;
    html.style.overflow = "hidden";
    if (scrollBarCompensation > 0) {
      html.style.paddingRight = `${scrollBarCompensation}px`;
    }
  } else {
    html.style.overflow = "";
    html.style.paddingRight = "";
  }
}

watch(isMenuOpen, (open) => {
  lockScroll(open);
});

function onResize() {
  // Закрываем меню при переходе на десктоп
  if (window.innerWidth > 992 && isMenuOpen.value) {
    closeMenu();
  }
}

onMounted(() => {
  window.addEventListener("resize", onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
  lockScroll(false);
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables" as v;
@use "~/assets/scss/colors" as c;

.header {
  padding: 28px 0;
  background-color: transparent;
  position: relative;
  z-index: 50;

  &__link {
    height: 24px;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    display: flex;
    align-items: center;

    &-image {
      height: auto;
      max-width: 100%;
    }
  }

  &__nav {
    display: flex;
    align-items: center;

    &-list {
      display: flex;
      gap: 16px;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    &-item {
      display: flex;
      align-items: center;
    }

    &-link {
      font-family: v.$font-primary;
      font-weight: v.$font-weight-medium;
      font-size: v.$font-size-base;
      color: c.$white;
      text-decoration: none;
      transition: color 0.3s ease, background-color 0.3s ease;
      border-radius: 4px;
      padding: 6px 8px;

      &:hover {
        color: c.$primary-blue;
        background-color: rgba(29, 133, 221, 0.1);
      }

      &:focus {
        outline: 2px solid c.$primary-blue;
        outline-offset: 2px;
      }
    }
  }

  &__lang-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 6px;
    background: transparent;
    color: c.$white;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;
    font-family: v.$font-primary;
    font-size: v.$font-size-base;

    &:hover {
      border-color: c.$primary-blue;
      background-color: rgba(29, 133, 221, 0.1);
    }

    &:focus {
      outline: 2px solid c.$primary-blue;
      outline-offset: 2px;
    }
  }

  &__lang {
    &-icon,
    &-arrow {
      width: 16px;
      height: 16px;
      object-fit: contain;
    }

    &-text {
      font-weight: v.$font-weight-medium;
    }
  }

  &__block-right {
    gap: 12px;
    align-items: center;
    display: flex;
  }

  &__burger {
    display: none;
    width: 44px;
    height: 44px;
    border-radius: 8px;
    border: none;
    background: transparent;
    align-items: center;
    justify-content: center;
    gap: 4px;
    cursor: pointer;
    transition: border-color 0.3s ease, background-color 0.3s ease;

    &:hover {
      border-color: c.$primary-blue;
      background-color: rgba(29, 133, 221, 0.08);
    }

    &:focus {
      outline: 2px solid c.$primary-blue;
      outline-offset: 2px;
    }

    &-line {
      width: 25px;
      height: 2px;
      background: c.$white;
      display: block;
      border-radius: 2px;

      &:not(:last-child) {
        margin-bottom: 4px;
      }
    }
  }
}

.mobile-menu__backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 60;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 233px;
  min-height: 446px;
  background: #0d0f14;
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 70;
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;

  &__header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  &__close {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    background: transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;

    &:hover {
      border-color: c.$primary-blue;
      background-color: rgba(29, 133, 221, 0.08);
    }

    &-line {
      position: absolute;
      width: 18px;
      height: 2px;
      background: c.$white;
      transform-origin: center;

      &:first-child {
        transform: rotate(45deg);
      }
      &:last-child {
        transform: rotate(-45deg);
      }
    }
  }

  &__nav {
    padding: 12px 0;
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 16px;
  }

  &__link {
    display: block;
    color: c.$white;
    text-decoration: none;
    border-radius: 8px;
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    font-size: v.$font-size-base;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      color: c.$primary-blue;
      background-color: rgba(29, 133, 221, 0.1);
    }

    &:focus {
      outline: 2px solid c.$primary-blue;
      outline-offset: 2px;
    }
  }

  &__footer {
    margin-top: auto;
    display: flex;
    padding-top: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  &__lang {
    width: 100%;

  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}


@media (max-width: v.$breakpoint-md) {
  .header {
    padding: 20px 0;

    &__nav {
      display: none;
    }

    &__block-right {
      display: none;
    }

    &__burger {
      display: flex;
      flex-direction: column;
    }

    &__lang-btn {
      padding: 6px 10px;
      font-size: v.$font-size-sm;
    }
  }
}

@media (max-width: v.$breakpoint-sm) {
  .header {
    padding: 16px 0;

    &__logo-image {
      max-width: 120px;
    }
  }
}
</style>
