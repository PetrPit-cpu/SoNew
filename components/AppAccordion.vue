<template>
  <div class="accordion">
    <div
      class="accordion-item"
      v-for="(item, index) in items"
      :key="index"
      @click="$emit('toggle', index)"
    >
      <div class="accordion-header">
        <span class="accordion-question">{{ item.question }}</span>
        <img
          src="/public/images/on-start.svg"
          class="accordion-icon"
          :class="{ 'accordion-icon--rotated': item.isOpen }"
        >
      </div>
      <transition name="accordion">
        <div class="accordion-content" v-show="item.isOpen">
          {{ item.answer }}
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

<style scoped>
.accordion {
  width: 100%;
  border-top: 1px solid #535353;
  border-bottom: 1px solid #535353;
}

.accordion-item {
  border-bottom: 1px solid #535353;
  padding: 19px 0;
  cursor: pointer;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordion-question {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  flex: 1;
  color: #FFFFFF;
}

.accordion-icon {
  transition: transform 0.3s ease;
  width: 20px;
  height: 20px;
  margin-left: 15px;
}

.accordion-icon--rotated {
  transform: rotate(180deg);
}

.accordion-content {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  padding-top: 12px;
  padding-right: 35px;
  color: #A9A9A9;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: opacity 0.3s, max-height 0.3s;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}

.accordion-enter-to,
.accordion-leave {
  opacity: 1;
  max-height: 200px;
}
</style>