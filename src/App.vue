<template>
  <div id="app">
    <div class="content">
      <div class="content__wrap">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "./assets/lib/reset.css";
@import url("https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=cyrillic,cyrillic-ext");
body {
  font-family: "Roboto", sans-serif;
}
.content {
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #fff;

  transition: background-color .4s ease;

  &__wrap {
    width: 700px;
    padding-top: 100px;
    padding-bottom: 100px;
  }
}
@media screen and (max-width: 767px) {
  .content {
    &__wrap {
      width: 700px;
      padding: 20px;
    }
  }
}
</style>
