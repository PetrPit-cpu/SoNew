<template>
  <div class="accordion">
    <div
      class="accordion__item"
      v-for="(item, index) in items"
      :key="index"
      @click="$emit('toggle', index)"
    >
      <div class="accordion__header">
        <span class="accordion__question">{{ item.question }}</span>
        <img
          src="/images/on-start.svg"
          class="accordion__icon"
          :class="{ 'accordion__icon--rotated': item.isOpen }"
          alt="Toggle"
        >
      </div>
      <transition name="accordion">
        <div class="accordion__content" v-show="item.isOpen">
          <p class="accordion__answer">{{ item.answer }}</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})

defineEmits(['toggle'])
</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables" as v;
@use "~/assets/scss/colors" as c;

.accordion {
  width: 100%;
  border-top: 1px solid c.$bg-card-border;
  border-bottom: 1px solid c.$bg-card-border;

  &__item {
    border-bottom: 1px solid c.$bg-card-border;
    padding: 19px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.02);
    }

    &:last-child {
      border-bottom: none;
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  }

  &__question {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    font-size: v.$font-size-md-18;
    line-height: 1.2;
    flex: 1;
    color: c.$white;
    transition: color 0.3s ease;
  }

  &__icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    opacity: 0.7;
  }

  &__content {
    padding-top: 12px;
    padding-right: 35px;
    overflow: hidden;
  }

  &__answer {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-regular;
    font-size: v.$font-size-base;
    line-height: 1.5;
    color: c.$grey-description;
    margin: 0;
  }
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
}

.accordion-enter-to,
.accordion-leave {
  opacity: 1;
  max-height: 200px;
  padding-top: 12px;
}


@media (max-width: v.$breakpoint-md) {
  .accordion {
    &__question {
      font-size: v.$font-size-md-18;
    }

    &__answer {
      font-size: v.$font-size-base;
      line-height: 1.2;
    }

    &__content {
      padding-right: 20px;
    }
  }
}

@media (max-width: v.$breakpoint-sm) {
  .accordion {
    &__item {
      padding: 15px 0;
    }

    &__question {
      line-height: 1.1;
    }

    &__content {
      padding-right: 15px;
      padding-top: 10px;
    }
  }
}
</style>