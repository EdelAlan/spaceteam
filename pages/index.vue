<template>
  <div class="main">
    <div class="parallax parallax-first sticky" />
    <div class="parallax-text">
      <span style="background-color: rgba(0, 0, 0, 0.5);">Run with us!</span>
    </div>

    <section class="articles_wrapper">
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
    </section>

    <div class="parallax parallax-second sticky" />
    <div class="parallax-text">
      <span>Leading skyrunning and road racing team in Almaty🏔</span>
    </div>

    <section class="articles_wrapper">
      <article
        v-for="(el, id) in programs"
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
            {{ el.price }}
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
    name: 'Heath run',
    price: '₸55 000',
    imgUrl: 'https://images.unsplash.com/photo-1616119024154-df380bfd87e9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    shortDescription: 'Бег + Здоровье + Натроение',
    description: 'Пару слов туда сюда, пару слов туда сюда, пару слов туда сюда, пару слов туда сюда<br><br>Пару слов туда сюда, пару слов туда сюда, пару слов туда сюда'
  },
  {
    name: 'Champion run',
    price: '₸85 000',
    imgUrl: 'https://images.unsplash.com/photo-1564390645033-5a70e0a6f323?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    shortDescription: 'Бег + достижения + труд',
    description: 'Пару слов туда сюда, пару слов туда сюда, пару слов туда сюда, пару слов туда сюда<br><br>Пару слов туда сюда, пару слов туда сюда, пару слов туда сюда'
  },
  {
    name: 'Trail',
    price: '₸55 000',
    imgUrl: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    shortDescription: 'горы + бег + медитация',
    description: 'Пару слов туда сюда, пару слов туда сюда, пару слов туда сюда, пару слов туда сюда<br><br>Пару слов туда сюда, пару слов туда сюда, пару слов туда сюда'
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
  perspective: 1px;
  -webkit-perspective: 1px;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
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

.articles_wrapper {
  position: relative;
  z-index: 1;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 100px 20px;
  background: #eeece7;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 20px 10px;
    align-items: center;
    gap: 20px;
  }
}

.article {
  width: 50%;
  overflow: hidden;

  &-label {
    margin: 10px 0 50px 0;

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
    font-size: 20px;
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