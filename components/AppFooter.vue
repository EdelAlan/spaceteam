<template>
  <footer>
    <div class="links">
      <NuxtLink to="/">
        ГЛАВНАЯ →
      </NuxtLink>
      <NuxtLink to="/calendar">
        РАСПИСАНИЕ →
      </NuxtLink>
      <NuxtLink
        to="https://www.instagram.com/spaceteamalmaty/"
        target="_blank"
      >
        INSTAGRAM →
      </NuxtLink>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  padding: 20px;
  background: rgb(238, 236, 231);
}

a {
  color: #000;
}

.links {
  display: flex;
  gap: 20px;
  font-size: 12px;
  line-height: 1.15;
}

</style>