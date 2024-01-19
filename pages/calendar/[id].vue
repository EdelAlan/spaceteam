<template>
  <div class="wrapper view-training">
    <div class="view-training-img">
      <img :src="training.imgSrc">
    </div>

    <div class="view-training-info">
      <div
        class="view-training-info__close"
        @click="closeModal()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          role="presentation"
          viewBox="0 0 20 20"
        ><g
          name="close-modal"
          width="20"
          height="20"
          fill="none"
          hover="scale"
        ><rect
          x="1.16211"
          y="1.86914"
          width="1"
          height="23.9974"
          transform="rotate(-45 1.16211 1.86914)"
          fill="#fff"
        /><rect
          x="1.16211"
          y="1.86914"
          width="1"
          height="23.9974"
          transform="rotate(-45 1.16211 1.86914)"
          fill="#fff"
        /><rect
          x="1.86914"
          y="18.8379"
          width="1"
          height="23.9975"
          transform="rotate(-135 1.86914 18.8379)"
          fill="#fff"
        /><rect
          x="1.86914"
          y="18.8379"
          width="1"
          height="23.9975"
          transform="rotate(-135 1.86914 18.8379)"
          fill="#fff"
        /></g></svg>
      </div>

      <div class="view-training-info-img">
        <img
          :src="training.imgSrc"
        >
      </div>

      <div class="view-training-info-img-blur" />

      <div>
        <div class="view-training-info-text">
          <div class="view-training-info-text-left">
            <div>{{ training.name }}</div>
            <div>{{ training.coach }}</div>
            <div class="view-training-info-text-left__date">
              {{ training.date }}
            </div>
            <div>{{ training.time }}</div>

            <a
              class="view-training-info-text-left__location"
              target="_blank"
              :href="training.location"
            >
              {{ training.locationName }}
            </a>

            <div
              class="view-training-info-text-left__share"
              @click.stop="onShareClick()"
            >
              <svg
                data-v-23030b10=""
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                role="presentation"
                viewBox="0 0 24 24"
              ><g
                name="share-2"
                width="20"
                height="20"
                fill="none"
                hover=""
              ><rect
                x="5"
                y="11"
                width="1"
                height="10"
                fill="currentColor"
              /><rect
                x="18"
                y="20"
                width="1"
                height="12"
                transform="rotate(90 18 20)"
                fill="currentColor"
              /><rect
                x="18"
                y="11"
                width="1"
                height="10"
                fill="currentColor"
              /><rect
                x="11.5"
                y="3.65686"
                width="1"
                height="11.3431"
                fill="currentColor"
              /><rect
                x="11.2918"
                y="3.70711"
                width="1"
                height="6.3868"
                transform="rotate(-45 11.2918 3.70711)"
                fill="currentColor"
              /><rect
                x="12.0011"
                y="3"
                width="1"
                height="6.38684"
                transform="rotate(45 12.0011 3)"
                fill="currentColor"
              /></g></svg>
            </div>
          </div>

          <div class="view-training-info-text-coach">
            <img :src="training.coachImgUrl">
          </div>
        </div>

        <div class="view-training-info-description">
          {{ training.description }}
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
import { onMounted } from 'vue';

const props = defineProps({
  training: {
    type: Object,
    required: true,
  },
});
const { training } = props

const emit = defineEmits(['close', 'share'])
function closeModal() {
  emit('close')
}
function onShareClick() {
  emit('share')
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
})
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

  & .view-training {
    &-info {
      padding: 40px 20px 20px;

      &__close {
        position: absolute;
        background: none;
        top: 20px;
        right: 20px;
        width: 20px;
        height: 20px;
        transition: transform .3s ease-in-out,-webkit-transform .3s ease-in-out;
        cursor: pointer;
        z-index: 1;

        &:hover {
          transform: scale(1.05);
        }

        @media only screen and (max-width: 768px) {
          padding: 10px;
          border-radius: 50%;
          background: #000;
        }
      }

      &-text-left__location {
        font-size: 18px;
        line-height: 20px;
        text-decoration: underline;
      }

      &-description {
        position: relative;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid hsla(0,0%,100%,.3);

        @media only screen and (max-width: 768px) {
          font-size: 12px;
        }
      }

      @media only screen and (max-width: 768px) {
        position: initial;
        overflow-y: auto;
        height: 100%;
        background: #000;
        padding: 10px 10px 100px 10px;

        .view-training-info-img {
          display: none;
        }
        
        .view-training-info-img-blur {
          display: none;
        }

        .view-training-info__btn__book {
          display: block;
          position: fixed;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          background: #000;
          width: 90%;
        }

        .view-training-info-text-left__share {
          display: flex;
        }
      }
    }

    &-img  {
      height: 100%;
      max-height: 600px;

      @media only screen and (max-width: 768px) {
        height: 30%;
        z-index: 1;
        
        & > img {
          border-radius: 0;
        }
      }
    }
  }

  &:hover {
    box-shadow: none !important;
    cursor: default !important;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
}
</style>