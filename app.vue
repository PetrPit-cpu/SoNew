<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@use "~/assets/scss/colors" as c;
@use "~/assets/scss/fonts";

body {
  background-color: #000;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  box-sizing: border-box;
}

.container {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>