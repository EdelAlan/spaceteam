<template>
  <div class="main">
    <div class="parallax">
      <div style="background: #000;">
        Какой ниубдь красивый текст
      </div>
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
        
        <div
          class="article-description"
          v-html="el.description"
        />
      </article>
    </section>

    <div class="parallax">
      <div>
        И тут можно добавить текст про что нибудь
      </div>
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
        
        <div
          class="article-description"
          v-html="el.description"
        />
      </article>
    </section>

    <div class="parallax">
      <div>
        Привет, я текст
      </div>
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
    imgUrl: 'https://instagram.fala8-1.fna.fbcdn.net/v/t39.30808-6/403618445_18398683057017825_712476465359051504_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=instagram.fala8-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=rUcv68IF52EAX9gbbc4&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzI0MjM3MzAyOTIzODEzMTIyOQ%3D%3D.2-ccb7-5&oh=00_AfDQqirwHIvmQ2lySnW21umAPywMfCfFqEzR6TN3aPEz9w&oe=65738B35&_nc_sid=ee9879',
    shortDescription: 'тренер по технике бега',
    description: '“Вся моя жизнь состоит из любви к спорту и было бы глупо не заниматься этим еще и в передачи знаний и опыта всем желающим.<br><br>Тренирую 3 года.<br><br>Самое сложное в работе тренером это когда тебя не слышат или не хотят, тогда возникают непредвиденные проблемы, например травмы или перетренированность.<br><br>Доставляет удовольствие понимание того что посредством моих знаний, человек становится лучше, он меняется, становится более целеустремленные и позитивнее. “'
  },
  {
    name: 'Анар Бурашева',
    imgUrl: '/anara2.jpeg',
    shortDescription: 'трейл тренер',
    description: 'Бег в горах - это безграничное ощущение свободы, чувство полёта. Я родилась в окружении гор и живу в окружении гор, поэтому, я думаю, естественно, что они стали моим вдохновением.<br><br>Свои первые шаги в беге были сделаны около 8 лет назад с асфальтного бега. И позже, моя любовь к горам привела меня к трейл и скай раннингу и больше не отпустило. А ещё позже я пришла и в альпинизм.<br><br>Это мой первый опыт тренерства, и я мечтаю помочь своим ученикам именно наслаждаться бегом в горах -  ощутить то самое чувство полёта. И вместе мы сможем пробежаться в самых красивых уголках планеты.'
  },
])
</script>

<style lang="scss" scoped>
.main {
  background: #eeece7;
}

.parallax {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 100px;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  & > div {
    color: #eeece7;
    font-size: 67px;
    text-align: center;
  }
  
  &:first-of-type {
    background-image: url('https://images.unsplash.com/photo-1519703936-c4a3b3eb88e4?q=80&w=2304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  }

  &:nth-of-type(2) {
    background-image: url('https://images.unsplash.com/photo-1560073741-24b6f111d506?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  }
  
  &:nth-of-type(3) {
    background-image: url('https://images.unsplash.com/photo-1636736626666-d1246198608c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  }
}

.articles_wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 100px 20px;
}

.article {
  width: calc(100%/3);
  overflow: hidden;

  &-index {

  }

  &-label {
    margin: 10px 0 50px 0;

    &__main {
      font-size: 20px;
      line-height: 111%;
    }

    &__sub {
      font-size: 12px;
      line-height: 17px;
      margin-top: 4px;
      text-transform: uppercase;
      font-weight: 400;
    }
  }

  &-description {
    padding-right: 20px;
    font-size: 20px;
    line-height: 111%;
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
  }
}
</style>