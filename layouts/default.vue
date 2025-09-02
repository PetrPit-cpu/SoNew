<template>
  <div class="layout">
    <slot /> <!-- Сюда будут подставляться страницы -->
  </div>
</template>

<style>
.layout {
  display: flex;
  flex-direction: column;
}
</style>