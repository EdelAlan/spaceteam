<template>
  <main class="view">
    <a
      v-show="showHeaderLogo"
      class="view-logo"
      href="/"
    >
      <div>Space</div>
      <div style="margin-left: 10px;">Team</div>
    </a>

    <nav class="view-header">
      <div 
        v-for="weekDay in weekDays"
        :key="weekDay.id"
        class="view-header__day"
      >
        <a 
          class="view-header__day-inner"
          :href="`#${weekDay.id}`"
          ref="menuRefs"
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
        </NuxtLink>
      </div>
    </div>

    <div v-if="isShowModal" class="modal__training">
      <div class="modal__inner">
        <NuxtPage :training="selectedTraining" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { interval, addDays, eachDayOfInterval, format } from 'date-fns'
import { ru } from 'date-fns/locale'

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

const selectedTraining = ref(null)
function selectTrainingModal(training) {
  selectedTraining.value = training
}

const route = useRoute()
const isShowModal = computed(() => route?.params?.id && selectedTraining.value)

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
        location: '',
      },
      {
        id: 1,
        imgSrc: 'https://images.unsplash.com/photo-1571008745438-2c05b20d8ef2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        date: formatDate(weekDay.day, 'EEE, LLL d').replace(/\./gm, ''),
        time: '7:30',
        name: 'Road Racing',
        coach: 'G. Zelenskiy',
        coachImgUrl: 'https://instagram.fala5-2.fna.fbcdn.net/v/t39.30808-6/403618445_18398683057017825_712476465359051504_n.jpg?stp=dst-jpg_e15_s480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=instagram.fala5-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=M0C-cGzL6kwAX9WOI1b&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfDVI9KZkCHGOjI2JTNZwC-1MRFslJWAKyfcpT8_wcBGcg&oe=656EEDF5&_nc_sid=8b3546',
        location: '',
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
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 11;
    cursor: pointer;
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
      }
    }
  }

  &-days {
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding: 0 20px;
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
        }
      }
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
</style>
