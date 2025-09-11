<template>
  <section id="insights" class="insights">
    <div class="container">
      <div class="insights__content">
        <h2 class="insights__title">Science64</h2>
        <p class="insights__description">
          — это интеллектуальная платформа для шахматистов, стремящихся не просто изучать дебюты,
          а глубоко понимать свои ошибки и целенаправленно улучшать свою дебютную стратегию
        </p>
      </div>

      <div ref="videoContainer" class="insights__video" @click="togglePlayPause">
        <video
          ref="videoElement"
          class="insights__video-element"
          controls
          preload="metadata"
          poster="/images/insights-img.jpg"
          playsinline
          webkit-playsinline
          muted
          @play="onPlay"
          @pause="onPause"
          @ended="onEnded"
        >
          <source src="/videos/Soince-video.webm" type="video/webm">
          <p>Ваш браузер не поддерживает видео. <a href="/videos/Soince-video-compressed.mp4">Скачать видео</a></p>
        </video>

        <div class="insights__video-overlay" :class="{ 'is-playing': isPlaying && !isHovered }" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
          <button class="insights__play-button" :class="{ 'is-paused': !isPlaying }">
            <svg v-if="!isPlaying" class="insights__play-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <svg v-else class="insights__pause-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const videoElement = ref(null)
const videoContainer = ref(null)
const isPlaying = ref(false)
const hasAutoPlayed = ref(false)
const isHovered = ref(false)
let observer = null

const togglePlayPause = () => {
  if (!videoElement.value) return

  if (isPlaying.value) {
    videoElement.value.pause()
  } else {
    videoElement.value.play()
  }
}

const onPlay = () => {
  isPlaying.value = true
}

const onPause = () => {
  isPlaying.value = false
}

const onEnded = () => {
  isPlaying.value = false
}

const onMouseEnter = () => {
  isHovered.value = true
}

const onMouseLeave = () => {
  isHovered.value = false
}

const handleIntersection = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasAutoPlayed.value && videoElement.value) {
      // Автозапуск видео при попадании в зону видимости
      console.log('Попали в секцию, запускаем видео...')

      const tryPlay = () => {
        // Сначала запускаем без звука (muted уже установлен)
        videoElement.value.play().then(() => {
          console.log('Видео успешно запущено без звука')

          // После успешного запуска пытаемся включить звук
          setTimeout(() => {
            videoElement.value.muted = false
            console.log('Звук включен')
          }, 100)
        }).catch(error => {
          console.log('Автозапуск заблокирован браузером:', error)
        })
      }

      // Убеждаемся что видео готово к воспроизведению
      if (videoElement.value.readyState >= 2) {
        tryPlay()
      } else {
        // Ждем когда видео будет готово
        videoElement.value.addEventListener('canplay', tryPlay, { once: true })
      }

      hasAutoPlayed.value = true
    }
  })
}

onMounted(() => {
  if (videoElement.value) {
    videoElement.value.addEventListener('play', onPlay)
    videoElement.value.addEventListener('pause', onPause)
    videoElement.value.addEventListener('ended', onEnded)
  }

  // Настройка Intersection Observer для автозапуска
  if (videoContainer.value) {
    observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Запуск когда 50% секции видно
      rootMargin: '0px 0px -10% 0px' // Запуск немного раньше
    })

    observer.observe(videoContainer.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables" as v;
@use "~/assets/scss/colors" as c;

.insights {
  margin-top: 200px;
  margin-bottom: 183px;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 773px;
    width: 100%;
    min-height: 89px;
    margin: 0 auto;
  }

  &__title {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    color: c.$primary-blue;
    margin: 0 0 20px 0;
    font-size: v.$font-size-ms;
    text-align: center;
  }

  &__description {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    font-size: v.$font-size-base;
    line-height: 1.4;
    color: c.$grey-description;
    margin: 0;
    text-align: center;
  }

  &__video {
    max-width: 100%;
    width: 100%;
    min-height: 436px;
    margin: 64px 0 20px 0;
    border-radius: 30px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
  }

  &__video-element {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    border-radius: 30px;
    outline: none;

    &:hover {
      transform: scale(1.02);
    }

    &:focus {
      outline: 2px solid c.$primary-blue;
      outline-offset: 2px;
    }
  }

  &__video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    transition: opacity 0.3s ease, background 0.3s ease;
    z-index: 2;
    pointer-events: none;

    &.is-playing {
      opacity: 0;
      pointer-events: none;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.5);
    }
  }

  &__play-button {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    pointer-events: auto;

    &:hover {
      background: rgba(255, 255, 255, 1);
      transform: scale(1.1);
      box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
    }

    &:active {
      transform: scale(0.95);
    }

    &.is-paused {
      background: rgba(29, 133, 221, 0.9);
      color: white;

      &:hover {
        background: rgba(29, 133, 221, 1);
      }
    }
  }

  &__play-icon,
  &__pause-icon {
    width: 32px;
    height: 32px;
    margin-left: 4px;
  }

  &__pause-icon {
    margin-left: 0;
  }

  &__subtitle {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    color: c.$white;
    margin: 0;
    font-size: v.$font-size-ms;
    text-align: center;

    &-accent {
      color: c.$primary-blue;
    }
  }
}

@media (max-width: v.$breakpoint-lg) {
  .insights {
    margin-bottom: 120px;

    &__video {
      min-height: 350px;
      margin: 50px 0 20px 0;
    }

    &__video-element {
      border-radius: 20px;
    }

    &__play-button {
      width: 70px;
      height: 70px;
    }

    &__play-icon,
    &__pause-icon {
      width: 28px;
      height: 28px;
    }
  }
}

@media (max-width: v.$breakpoint-md) {
  .insights {
    margin-top: 150px;
    margin-bottom: 150px;

    &__title,
    &__subtitle {
      font-weight: v.$font-weight-semi-bold;
      font-size: v.$font-size-xxl;
      line-height: 1.1;
    }

    &__description {
      font-weight: v.$font-weight-regular;
      font-size: v.$font-size-md;
    }

    &__video {
      min-height: 280px;
      margin: 20px 0 20px 0;
      border-radius: 20px;
    }

    &__video-element {
      border-radius: 20px;
    }

    &__play-button {
      width: 60px;
      height: 60px;
    }

    &__play-icon,
    &__pause-icon {
      width: 24px;
      height: 24px;
    }
  }
}

@media (max-width: v.$breakpoint-sm) {
  .insights {
    margin-bottom: 150px;

    &__title {
      font-weight: v.$font-weight-bold;
      font-size: v.$font-size-xxl;
      line-height: 1.1;
    }
    &__subtitle {
      font-size: v.$font-size-lg;
    }

    &__video {
      min-height: 220px;
      margin: 20px 0 0 0;
      border-radius: 15px;
    }

    &__video-element {
      border-radius: 15px;
    }

    &__play-button {
      width: 50px;
      height: 50px;
    }

    &__play-icon,
    &__pause-icon {
      width: 20px;
      height: 20px;
    }

    &__description {
      line-height: 1.1;
    }
  }
}
</style>
