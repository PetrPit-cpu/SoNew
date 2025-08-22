<template>
  <header class="header">
    <div class="header__container container">

      <div class="header__logo">
        <img src="/public/images/header-logo.svg" alt="Science64 Logo">
      </div>

      <nav class="header__nav">
        <ul class="header__nav-list">
          <li><a href="#">Главная</a></li>
          <li><a href="#">О Science64</a></li>
          <li><a href="#">Как работает</a></li>
          <li><a href="#">Отзывы</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Партнеры</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </nav>

      <button class="header__lang-btn">
        <img src="/public/images/icon-multy.svg" alt="Language" class="header__lang-icon">
        <span class="header__language">Русский</span>
        <img src="/public/images/witch.svg" alt="Dropdown" class="header__lang-arrow">
      </button>
    </div>
  </header>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables" as v;
@use "~/assets/scss/colors" as c;

.header {
  padding: 28px 0;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__nav-list {
    display: flex;
    gap: 16px;
    list-style: none;
    padding: 0;
    margin: 0;

    a {
      font-family: v.$font-primary;
      font-weight: v.$font-weight-medium;
      font-size: v.$font-size-base;
      color: c.$white;
      text-decoration: none;
    }
  }

  &__lang-btn {
    display: flex;
    align-items: center;
    border-radius: 6px;
    border: 1px solid c.$grey-rgba;
    background: transparent;
    color: c.$white;
    padding: 8px 12px;
    cursor: pointer;
  }
}
</style>