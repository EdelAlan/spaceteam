<template>
  <div class="main">
    <div class="parallax parallax-first sticky" />
    <div class="parallax-text">
      <span style="background-color: rgba(0, 0, 0, 0.5);">Run with us!</span>
    </div>

    <section class="articles">
      <div class="articles_label">
        Our Coaches
      </div>

      <div class="articles_wrapper">
        <article
          v-for="(el, id) in coaches"
          :key="el.name"
          class="article"
        >
          <span class="article-index">{{ `0${id+1}` }}</span>

          <div class="article-img">
            <img :src="el.imgUrl">
          </div>

          <div class="article-label">
            <div class="article-label__main">
              {{ el.name }}
            </div>
            <div class="article-label__sub">
              {{ el.shortDescription }}
            </div>
          </div>
          
          <!-- <div
            class="article-description"
            v-html="el.description"
          /> -->
        </article>
      </div>
    </section>

    <div class="parallax parallax-second sticky" />
    <div class="parallax-text">
      <span>Leading skyrunning and road racing team in Almaty🏔</span>
    </div>

    <section class="articles">
      <div class="articles_label">
        Program & Services
      </div>

      <div class="articles_wrapper">
        <article
          v-for="(el, id) in programs"
          :key="el.name"
          class="article program"
        >
          <span class="article-index">{{ `0${id+1}` }}</span>

          <div class="article-img">
            <img :src="el.imgUrl">
          </div>

          <!-- <div class="article-label">
            <div class="article-label__main">
              {{ el.name }}
            </div>
            <div class="article-label__sub">
              {{ el.price }}
            </div>
            <div class="article-label__sub">
              {{ el.shortDescription }}
            </div>
          </div> -->
        
          <!-- <div
            class="article-description"
            v-html="el.description"
          /> -->
        </article>
      </div>
    </section>

    <div class="parallax parallax-third sticky" />
    <div class="parallax-text">
      <span style="background-color: rgba(0, 0, 0, 0.5);">Since 2017</span>
    </div>
  </div>
</template>

<script setup>
const programs = ref([
  {
    name: 'Community',
    price: '₸5 000 / занятие',
    imgUrl: '/community.jpeg',
    shortDescription: 'Бег + Здоровье + Натроение',
    description: 'Будь среди своих. Заряжайся энергией тех, кто знает секреты бодрости и здоровья. Ты с нами, когда тебе удобно'
  },
  {
    name: 'Health',
    price: '₸45 000 / месяц',
    imgUrl: '/health.jpeg',
    shortDescription: 'Бег + достижения + труд',
    description: 'Занимайся для здоровья. Твой организм скажет тебе «спасибо»'
  },
  {
    name: 'Base',
    price: '₸55 000 / месяц',
    imgUrl: '/base.jpeg',
    shortDescription: 'горы + бег + медитация',
    description: 'Заботься о себе. Сделай тренировки частью жизни и приди к своей лучшей форме'
  },
  {
    name: 'Elite',
    price: '₸85 000 / месяц',
    imgUrl: '/elite.jpg',
    shortDescription: 'горы + бег + медитация',
    description: 'Двигайся к своим целям. Тренируйся и улучшай результаты забег за забегом.'
  },
  {
    name: 'Elite 360',
    price: '₸500 000 / месяц',
    imgUrl: '/elite360.jpeg',
    shortDescription: 'горы + бег + медитация',
    description: 'Занимайся с комфортом. В своем темпе, по собственным потребностям и запросам'
  },
  {
    name: 'Corporate',
    price: 'Цена договарная',
    imgUrl: '/corparate.jpeg',
    shortDescription: 'горы + бег + медитация',
    description: 'Выбирай здоровые увлечения для своей команды'
  },
])

const coaches = ref([
  {
    name: 'Геннадий Зеленский',
    imgUrl: '/gena_1.jpeg',
    shortDescription: 'тренер по технике бега',
  },
  {
    name: 'Анар Бурашева',
    imgUrl: '/anara2.jpeg',
    shortDescription: 'трейл тренер',
  },
  {
    name: 'Канат Жузбаев',
    imgUrl: '/kanat_1.jpeg',
    shortDescription: 'тренер по технике бега',
  },
  {
    name: 'Алмаз Салимбаев',
    imgUrl: '/almaz_1.jpeg',
    shortDescription: 'тренер по технике бега',
  },
])
</script>

<style lang="scss">
html {
  overflow: hidden;
}

body {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;

  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
}

.main {
  background: #eeece7;
  position: relative;
  z-index: 0;
}

.sticky {
  margin-top: -100vh;
  width: 100vw;
  height: 100vh;
  position: sticky;
  top: 0;
  z-index: 0;
}

.parallax {
  top: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.parallax {
  &-first {
    background-image: url('https://images.unsplash.com/photo-1519703936-c4a3b3eb88e4?q=80&w=2304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  }

  &-second {
    background-image: url('https://images.unsplash.com/photo-1560073741-24b6f111d506?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  }
  
  &-third {
    background-image: url('https://images.unsplash.com/photo-1636736626666-d1246198608c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  }
}

.parallax-text {
  position: relative;
  z-index: 2;
  height: 50vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #eeece7;
  font-size: 67px;
  text-align: center;

  & > span {
    margin: 0 100px;

    @media only screen and (max-width: 768px) {
      margin: 0 10px;
    }
  }

  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
}

.articles {
  position: relative;
  z-index: 1;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  background: #eeece7;

  &_label {
    font-weight: 400;
    font-size: 20px;
    line-height: 111%;
    text-transform: uppercase;
    padding-bottom: 60px;
  }
  
  &_wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 20px 10px;
    gap: 20px;
  }
}

.article {
  width: 33%;
  max-width: 300px;
  overflow: hidden;

  &.program {
    max-width: unset;
    width: 40%;

    & > .article-img {
      aspect-ratio: unset;
    }
  }

  &-label {
    margin: 10px 0;

    &__main {
      font-size: 20px;
      line-height: 111%;

      @media only screen and (max-width: 768px) {
        font-size: 16px;
      }
    }

    &__sub {
      font-size: 12px;
      line-height: 17px;
      margin-top: 4px;
      text-transform: uppercase;
      font-weight: 400;

      @media only screen and (max-width: 768px) {
        font-size: 11px;
      }
    }

    @media only screen and (max-width: 768px) {
      margin: 10px 0 10px 0;
    }
  }

  &-description {
    padding-right: 20px;
    font-size: 16px;
    line-height: 111%;

    @media only screen and (max-width: 768px) {
      font-size: 11px;
      padding-right: 0;
    }
  }

  &-img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media only screen and (max-width: 768px) {
      aspect-ratio: 2/1;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
}
</style>