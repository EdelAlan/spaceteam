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
      <a 
        v-for="weekDay in weekDays"
        :key="weekDay.id"
        ref="menuRefs"
        :href="`#${weekDay.id}`"
        class="view-header__day"
      >
        {{ weekDay.day }}
      </a>
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
          {{ weekDay.dayFull }}
        </div>

        <div
          v-for="(training, id) in weekDay.trainingList"
          :key="id"
          class="view-training"
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
                <div>{{ training.time }}</div>
              </div>

              <div class="view-training-info-text-coach">
                <img :src="training.coachImgUrl">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const weekDays = ref([
  {
    id: 'monday',
    day: 'Пн',
    dayFull: 'Понедельник',
    trainingList: [
      {
        imgSrc: 'https://images.unsplash.com/photo-1456613820599-bfe244172af5?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        time: '6:30',
        name: 'Trail Running',
        coach: 'A. Burasheva',
        coachImgUrl: '/anara.jpg',
      },
      {
        imgSrc: 'https://images.unsplash.com/photo-1571008745438-2c05b20d8ef2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        time: '7:30',
        name: 'Road Racing',
        coach: 'G. Zelenskiy',
        coachImgUrl: 'https://instagram.fala5-2.fna.fbcdn.net/v/t39.30808-6/403618445_18398683057017825_712476465359051504_n.jpg?stp=dst-jpg_e15_s480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=instagram.fala5-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=M0C-cGzL6kwAX9WOI1b&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfDVI9KZkCHGOjI2JTNZwC-1MRFslJWAKyfcpT8_wcBGcg&oe=656EEDF5&_nc_sid=8b3546',
      },
    ]
  },
  {
    id: 'tuesday',
    day: 'Вт',
    dayFull: 'Вторник',
    trainingList: [
      {
        imgSrc: 'https://images.unsplash.com/photo-1456613820599-bfe244172af5?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        time: '6:30',
        name: 'Trail Running',
        coach: 'A. Burasheva',
        coachImgUrl: '/anara.jpg',
      },
      {
        imgSrc: 'https://images.unsplash.com/photo-1571008745438-2c05b20d8ef2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        time: '7:30',
        name: 'Road Racing',
        coach: 'G. Zelenskiy',
        coachImgUrl: 'https://instagram.fala5-2.fna.fbcdn.net/v/t39.30808-6/403618445_18398683057017825_712476465359051504_n.jpg?stp=dst-jpg_e15_s480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=instagram.fala5-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=M0C-cGzL6kwAX9WOI1b&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfDVI9KZkCHGOjI2JTNZwC-1MRFslJWAKyfcpT8_wcBGcg&oe=656EEDF5&_nc_sid=8b3546',
      },
    ]
  },
  {
    id: 'wednesday',
    day: 'Ср',
    dayFull: 'Среда',
    trainingList: [
      {
        imgSrc: 'https://images.unsplash.com/photo-1456613820599-bfe244172af5?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        time: '6:30',
        name: 'Trail Running',
        coach: 'A. Burasheva',
        coachImgUrl: '/anara.jpg',
      },
      {
        imgSrc: 'https://images.unsplash.com/photo-1571008745438-2c05b20d8ef2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        time: '7:30',
        name: 'Road Racing',
        coach: 'G. Zelenskiy',
        coachImgUrl: 'https://instagram.fala5-2.fna.fbcdn.net/v/t39.30808-6/403618445_18398683057017825_712476465359051504_n.jpg?stp=dst-jpg_e15_s480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=instagram.fala5-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=M0C-cGzL6kwAX9WOI1b&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfDVI9KZkCHGOjI2JTNZwC-1MRFslJWAKyfcpT8_wcBGcg&oe=656EEDF5&_nc_sid=8b3546',
      },
    ]
  },
  {
    id: 'thursday',
    day: 'Чт',
    dayFull: 'Четверг',
    trainingList: [
      {
        imgSrc: 'https://images.unsplash.com/photo-1456613820599-bfe244172af5?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        time: '6:30',
        name: 'Trail Running',
        coach: 'A. Burasheva',
        coachImgUrl: '/anara.jpg',
      },
      {
        imgSrc: 'https://images.unsplash.com/photo-1571008745438-2c05b20d8ef2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        time: '7:30',
        name: 'Road Racing',
        coach: 'G. Zelenskiy',
        coachImgUrl: 'https://instagram.fala5-2.fna.fbcdn.net/v/t39.30808-6/403618445_18398683057017825_712476465359051504_n.jpg?stp=dst-jpg_e15_s480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=instagram.fala5-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=M0C-cGzL6kwAX9WOI1b&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfDVI9KZkCHGOjI2JTNZwC-1MRFslJWAKyfcpT8_wcBGcg&oe=656EEDF5&_nc_sid=8b3546',
      },
    ]
  },
  {
    id: 'friday',
    day: 'Пт',
    dayFull: 'Пятница',
    trainingList: [
      {
        imgSrc: 'https://images.unsplash.com/photo-1456613820599-bfe244172af5?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        time: '6:30',
        name: 'Trail Running',
        coach: 'A. Burasheva',
        coachImgUrl: '/anara.jpg',
      },
      {
        imgSrc: 'https://images.unsplash.com/photo-1571008745438-2c05b20d8ef2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        time: '7:30',
        name: 'Road Racing',
        coach: 'G. Zelenskiy',
        coachImgUrl: 'https://instagram.fala5-2.fna.fbcdn.net/v/t39.30808-6/403618445_18398683057017825_712476465359051504_n.jpg?stp=dst-jpg_e15_s480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=instagram.fala5-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=M0C-cGzL6kwAX9WOI1b&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfDVI9KZkCHGOjI2JTNZwC-1MRFslJWAKyfcpT8_wcBGcg&oe=656EEDF5&_nc_sid=8b3546',
      },
    ]
  },
  {
    id: 'saturday',
    day: 'Сб',
    dayFull: 'Субота',
    trainingList: [
      {
        imgSrc: 'https://images.unsplash.com/photo-1456613820599-bfe244172af5?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        time: '6:30',
        name: 'Trail Running',
        coach: 'A. Burasheva',
        coachImgUrl: '/anara.jpg',
      },
      {
        imgSrc: 'https://images.unsplash.com/photo-1571008745438-2c05b20d8ef2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        time: '7:30',
        name: 'Road Racing',
        coach: 'G. Zelenskiy',
        coachImgUrl: 'https://instagram.fala5-2.fna.fbcdn.net/v/t39.30808-6/403618445_18398683057017825_712476465359051504_n.jpg?stp=dst-jpg_e15_s480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=instagram.fala5-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=M0C-cGzL6kwAX9WOI1b&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfDVI9KZkCHGOjI2JTNZwC-1MRFslJWAKyfcpT8_wcBGcg&oe=656EEDF5&_nc_sid=8b3546',
      },
    ]
  },
  {
    id: 'sunday',
    day: 'Вс',
    dayFull: 'Воскресенье',
    trainingList: [
      {
        imgSrc: 'https://images.unsplash.com/photo-1456613820599-bfe244172af5?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        time: '6:30',
        name: 'Trail Running',
        coach: 'A. Burasheva',
        coachImgUrl: '/anara.jpg',
      },
      {
        imgSrc: 'https://images.unsplash.com/photo-1571008745438-2c05b20d8ef2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        time: '7:30',
        name: 'Road Racing',
        coach: 'G. Zelenskiy',
        coachImgUrl: 'https://instagram.fala5-2.fna.fbcdn.net/v/t39.30808-6/403618445_18398683057017825_712476465359051504_n.jpg?stp=dst-jpg_e15_s480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=instagram.fala5-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=M0C-cGzL6kwAX9WOI1b&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfDVI9KZkCHGOjI2JTNZwC-1MRFslJWAKyfcpT8_wcBGcg&oe=656EEDF5&_nc_sid=8b3546',
      },
    ]
  }
])

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
      filteredItems[0].classList.add("active");
    });
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style lang="scss" scoped>

a {
  color: #fff;
}

.view {
  max-width: 1700px;
  width: 100%;
  padding-bottom: 100px;
  color: #fff;

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
      padding: 20px;
      cursor: pointer;

      &.active {
        text-decoration: underline;
      }

      &:hover {
        text-decoration: underline;
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

      &-img {
        position: absolute;
        height: 100%;
        width: 100%;

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
        padding: 20px;

        &-left {
          font-size: 36px;
          line-height: 36px;
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
    }
  }
}
</style>
