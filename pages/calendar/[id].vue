<template>
  <div class="wrapper view-training">
    <div class="view-training-img">
      <img :src="training.imgSrc">
    </div>

    <div class="view-training-info">
      <div class="view-training-info-img">
        <img
          :src="training.imgSrc"
        >
      </div>

      <div class="view-training-info-img-blur" />

      <div class="view-training-info-text">
        <div class="view-training-info-text-left">
          <div>{{ training.name }}</div>
          <div>{{ training.coach }}</div>
          <div class="view-training-info-text-left__date">{{ training.date }}</div>
          <div>{{ training.time }}</div>
        </div>

        <div class="view-training-info-text-coach">
          <img :src="training.coachImgUrl">
        </div>
      </div>

      <button
        class="view-training-info__btn__book"
        @click.stop="openBookModal(training)"
      >
        Записаться
        <span>→</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  training: {
    type: Object,
    required: true,
  },
});

onMounted(() => {
  document.body.style.overflow = 'hidden';
})

const { training } = props
</script>

<style lang="scss">
.wrapper {
  position: relative;
  width: 1200px;
  height: 600px;
  border-radius: 10px;
  box-shadow: 0 0 100px rgba(0,0,0,.25);

  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);

  &.view-training {
    &:hover {
      filter: unset;
      cursor: default;
    }

    & > .view-training-img {
      height: 100%;
    }
  }
}
</style>