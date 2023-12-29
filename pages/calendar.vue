<template>
  <main class="view">
    <a
      v-show="showHeaderLogo"
      class="view-logo"
      href="/"
    >
      <img src="/logo.png">
      <div>
        <div>Space</div>
        <div style="margin-left: 10px;">Community</div>
        <div style="margin-left: 20px;">Runners</div>
      </div>
    </a>

    <nav class="view-header">
      <div 
        v-for="weekDay in weekDays"
        :key="weekDay.id"
        class="view-header__day"
      >
        <a 
          ref="menuRefs"
          class="view-header__day-inner"
          :href="`#${weekDay.id}`"
        >
          <div>{{ weekDay.weekDayShort }}</div>
          <div>{{ weekDay.dayOfMonth }}</div>
        </a>
      </div>
    </nav>

    <div class="view-days">
      <div
        v-for="weekDay in weekDays"
        :id="weekDay.id"
        :key="weekDay.id"
        ref="daysRefs"
        class="view-day"
      >
        <div class="view-day__header">
          {{ weekDay.weekDayLong }}
        </div>

        <NuxtLink
          v-for="(training) in weekDay.trainingList"
          :key="training.id"
          :to="`/calendar/${training.id}`"
          class="view-training"
          @click="selectTrainingModal(training)"
        >
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
                <div class="view-training-info-text-left__date">
                  {{ training.date }}
                </div>
                <div>{{ training.time }}</div>
                <a
                  class="view-training-info-text-left__location"
                  :href="training.location"
                >{{ training.locationName }}</a>

                <div
                  class="view-training-info-text-left__share"
                  @click.prevent="onShareClick(training)"
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

            <button
              class="view-training-info__btn__book"
              @click.stop="openBookModal(training)"
            >
              Записаться
              <span>→</span>
            </button>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div
      v-if="isShowModal"
      class="modal__training"
      @click="onBlurClick($event)"
    >
      <div class="modal__inner">
        <NuxtPage
          :training="selectedTraining"
          @close="closeModal()"
          @share="onShareClick(selectedTraining)"
        />
      </div>
    </div>

    <div
      v-show="isCopied"
      class="copy-success"
    >
      <span>Ссылка скопирована!</span>
    </div>
  </main>
</template>

<script setup>
import { interval, addDays, eachDayOfInterval, format } from 'date-fns'
import { ru } from 'date-fns/locale'

// Init header dates
function formatDate(date, formatStr) {
  return format(
    date,
    formatStr,
    {
      locale: ru
    }
  )
}
const daysInterval = interval(
  new Date,
  addDays(new Date, 6)
)
const weekDays = ref(eachDayOfInterval(daysInterval).map((day, id) => {
  return {
    id,
    day,
    weekDayShort: formatDate(day, 'EEEEEE').toUpperCase(),
    weekDayLong: formatDate(day, 'EEEE, MMM d').replace(/\./gm, ''),
    dayOfMonth: formatDate(day, 'd'),
  }
}))

// Training modal
const route = useRoute()
const router = useRouter();
const isShowModal = computed(() => route?.params?.id && selectedTraining.value)

const selectedTraining = ref(null)
function selectTrainingModal(training) {
  selectedTraining.value = training
}

function closeModal() {
  selectTrainingModal(null)
  router.replace({ path: '/calendar' })
}

function onBlurClick(event) {
  if (event?.target?.className?.includes('modal__training'))
    closeModal()
}

const isCopied = ref(false)
function onShareClick(training) {
  isCopied.value = true
  const link = `${window.location.origin}/calendar/${training.id}`
  navigator.clipboard.writeText(link)
  setTimeout(() => isCopied.value = false, 5000)
}

// Scroll header behavior
const showHeaderLogo = ref(false)
const lastId = ref(null)
const daysRefs = ref([])
const menuRefs = ref([])
function onScroll () {
  // header logo
  const header = document.getElementsByClassName('header')[0]
  const rect = header.getBoundingClientRect()
  const bottom = rect?.bottom
  showHeaderLogo.value = bottom < 0

  // reactive navbar
  const mainHeroHeight = document.querySelector('.view-days').offsetTop;
  const fromTop = window.scrollY + mainHeroHeight;
  let cur = [];

  daysRefs.value.map((item) => {
    if (item.offsetTop < fromTop)
      cur.push(item);
  });

  cur = cur[cur.length - 1];
  const id = cur ? cur.id : "";

  if (lastId.value !== id) {
    lastId.value = id;

    menuRefs.value.forEach(elem => {
      elem.classList.remove("active");
      const filteredItems = menuRefs.value.filter(elem => elem.getAttribute("href") === `#${id}`);
      filteredItems?.[0]?.classList.add("active");
    });
  }
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', onScroll)

  weekDays.value = weekDays.value.map(weekDay => ({
    ...weekDay,
    trainingList: [
      {
        id: 0,
        imgSrc: 'https://images.unsplash.com/photo-1456613820599-bfe244172af5?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: formatDate(weekDay.day, 'EEE, LLL d').replace(/\./gm, ''),
        time: '6:30',
        name: 'Trail Running',
        coach: 'A. Burasheva',
        coachImgUrl: '/anara.jpg',
        location: 'https://go.2gis.com/2fi9w',
        locationName: 'Фонтан на Медео',
        description: 'This whole-body workout conditions your muscles, elevates your heart rate, targets your core, all while moving your joints through a healthy range of motion. Inspired by modalities such as yoga, Pilates, barre, and bodyweight training, this is a practice in rhythmic movement to reset body and mind. Breathwork techniques, ambient heat (room is set to 80 degrees F), and sound have been intentionally curated to amplify the physiological impact of each experience.',
      },
      {
        id: 1,
        imgSrc: 'https://images.unsplash.com/photo-1571008745438-2c05b20d8ef2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: formatDate(weekDay.day, 'EEE, LLL d').replace(/\./gm, ''),
        time: '7:30',
        name: 'Road Racing',
        coach: 'G. Zelenskiy',
        coachImgUrl: 'https://instagram.fala5-2.fna.fbcdn.net/v/t39.30808-6/403618445_18398683057017825_712476465359051504_n.jpg?stp=dst-jpg_e15_s480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=instagram.fala5-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=M0C-cGzL6kwAX9WOI1b&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfDVI9KZkCHGOjI2JTNZwC-1MRFslJWAKyfcpT8_wcBGcg&oe=656EEDF5&_nc_sid=8b3546',
        location: 'https://go.2gis.com/5wj0q',
        locationName: 'Цетнральный стадион',
        description: 'This whole-body workout conditions your muscles, elevates your heart rate, targets your core, all while moving your joints through a healthy range of motion. Inspired by modalities such as yoga, Pilates, barre, and bodyweight training, this is a practice in rhythmic movement to reset body and mind. Breathwork techniques, ambient heat (room is set to 80 degrees F), and sound have been intentionally curated to amplify the physiological impact of each experience.',
      },
    ]
  }))

  if (route?.params?.id) {
    selectTrainingModal(
      weekDays.value
        .reduce((acc, el) => [...acc, ...el.trainingList], [])
        .find(el => el.id.toString() === route.params.id.toString())
    )
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

const scrollPosition = ref(0)
onBeforeRouteUpdate((to) => {
  if (to.name === 'calendar-id') {
    scrollPosition.value = window.scrollY
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto';
    window.scrollTo({
      top: scrollPosition.value,
    })
  }
})
</script>

<style lang="scss">

a {
  color: #eeece7;
}

.view {
  max-width: 1700px;
  width: 100%;
  padding-bottom: 100px;
  margin: auto;
  color: #eeece7;

  &-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    position: fixed;
    top: 40px;
    left: 20px;
    z-index: 11;
    cursor: pointer;

    & > img {
      width: 40px;
      height: 40px;
    }

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  &-header {
    top: 0;
    position: sticky;
    padding-top: 20px;
    background-color: #000;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;

    &__day {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px 0;
      width: 80px;

      &-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 2px;
        border-bottom: 2px solid transparent;
        cursor: pointer;

        &:hover {
          border-bottom-color: #eeece7;
        }

        &.active {
          border-bottom-color: #eeece7;
        }

        @media only screen and (max-width: 768px) {
          & > div {
            &:first-child {
              font-size: 12px;
              line-height: 16px;
            }
          }
        }  
      }

      @media only screen and (max-width: 768px) {
        padding: 10px 0;
      }
    }

    @media only screen and (max-width: 768px) {
      padding-top: 0;
    }
  }

  &-days {
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding: 0 20px;

    @media only screen and (max-width: 768px) {
      gap: 20px;
    }
  }

  &-day {
    display: flex;
    flex-direction: column;
    gap: 20px;
  
    &__header {
      font-size: 60px;
      line-height: 56px;
      padding-bottom: 20px;
      text-transform: capitalize;

      @media only screen and (max-width: 768px) {
        font-size: 18px;
        line-height: 18px;
        padding-bottom: 0;
      }
    }

    @media only screen and (max-width: 768px) {
      gap: 10px;
    }
  }

  &-training {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 10px;
    cursor: pointer;
    
    &:hover {
      filter: drop-shadow(0 0 20px rgba(255,255,255,.2));
    }

    &-img {
      height: 380px;

      & img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 10px 0 0 10px;

        @media only screen and (max-width: 768px) {
          border-radius: 10px;
        }
      }

      @media only screen and (max-width: 768px) {
        overflow: hidden;
      }
    }

    &-info {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px;

      &-img {
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;

        & img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 0 10px 10px 0;

          @media only screen and (max-width: 768px) {
            display: none;
          }
        }

        &-blur {
          position: absolute;
          right: 0;
          left: 0;
          top: 0;
          width: 100%;
          background: rgba(0,0,0,.2);
          backdrop-filter: blur(80px);
          height: 100%;
          border-radius: 0 10px 10px 0;

          @media only screen and (max-width: 768px) {
            border-radius: 0 0 10px 10px;
          }
        }
      }

      &-text {
        position: relative;
        display: flex;
        justify-content: space-between;

        &-left {
          font-size: 36px;
          line-height: 40px;

          &__date {
            text-transform: capitalize;
          }

          &__share {
            margin-top: 20px;
            width: 40px;
            height: 40px;
            border-radius: 50%;

            position: relative;
            align-self: flex-end;
            color: #eeece7;
            border: 1px solid #eeece7;
            font-size: 18px;
            line-height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background .3s,color .3s;
            background: transparent;
            cursor: pointer;

            &:hover {
              background: #eeece7;
              color: #000;
              
              & > span {
                transform: translate(3px);
              }
            }

            @media only screen and (max-width: 768px) {
              display: none;
            }
          }

          &__location {
            display: none;

            @media only screen and (max-width: 768px) {
              display: block;
            }
          }

          @media only screen and (max-width: 768px) {
            font-size: 14px;
            line-height: 18px;

            & > div:not(:first-of-type) {
              font-size: 12px;
              line-height: 14px;
            }
          }
        }

        &-coach {
          width: 100px;
          height: 100px;

          & img {
            border-radius: 50%;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          @media only screen and (max-width: 768px) {
            width: 60px;
            height: 60px;
          }
        }
      }

      &__btn {
        &__book {
          position: relative;
          align-self: flex-end;
          width: fit-content;
          color: #eeece7;
          border: 1px solid #eeece7;
          padding: 0 40px;
          font-size: 18px;
          line-height: 20px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background .3s,color .3s;
          border-radius: 999px;
          background: transparent;
          cursor: pointer;

          & > span {
            margin-left: 3px;
            transition: transform .7s ease;
          }

          &:hover {
            background: #eeece7;
            color: #000;
            
            & > span {
              transform: translate(3px);
            }
          }

          @media only screen and (max-width: 768px) {
            display: none;
          }
        }
      }

      @media only screen and (max-width: 768px) {
        padding: 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }

    @media only screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      height: 290px;
      position: relative;
    }
  }
}

.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  overflow: hidden;
  z-index: 300;
  background: rgba(238,236,231,.2);

  &:before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    backdrop-filter: blur(40px);
  }

  &__inner {
    height: 100%;
  }

  &__training {
    @extend .modal;
  }
}

.copy-success {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  z-index: 301;

  & > span {
    color: #eeece7;
    font-size: 18px;
    line-height: 24px;
  }

  @media only screen and (max-width: 768px) {
    padding: 20px 0;
  }
}
</style>
