<template>
  <div class="dashboard">
    <div class="dashboard-title">
      <h1>POMODORO</h1>
      <p>WEEK1</p>
      <div></div>
    </div>
    <div class="dashboard-content">
      <div class="dashboard-content-menu">
        <router-link to="/">
          <i class="fas fa-apple-alt"></i>
        </router-link>
        <router-link to="/todo">
          <i class="fas fa-list-ul"></i>
        </router-link>
        <router-link to="/statistic">
          <i class="fas fa-chart-bar"></i>
        </router-link>

        <i class="fas fa-music"></i>
      </div>
      <div class="dashboard-content-all">
        <p class="title">ToMATo</p>
        <router-view></router-view>

        <div class="smallTomato" v-if="smallTomato">
          <div class="calculate-pic">
            <div class="grasses">
              <div class="grass grass-1"></div>
              <div class="grass grass-2"></div>
              <div class="grass grass-3"></div>
            </div>
            <div class="circles">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
            <p class="calculate-count">25:00</p>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
@import '../assets/tomato.scss';
.dashboard {
  display: flex;
  background-color: $background;
  /* min- */
  height: 100vh;
  &-title {
    width: 30%;
    margin: auto 30px;
    h1 {
      color: $highOrange;
      background-color: white;
      padding: 20px;
      text-align: center;
    }
    p {
      color: white;
      text-align: right;
    }
  }
  &-content {
    width: 70%;
    display: flex;
    height: 90vh;
    margin: auto;
    margin-right: 50px;
    &-menu {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      background-color: $middleOrange;
      padding: 0 20px;
      i {
        margin-bottom: 20px;
        font-size: 30px;
        cursor: pointer;
      }
      i:hover {
        color: lighten(#00000062, 10%);
      }
    }
    &-all {
      background-color: white;
      width: 100%;
      overflow: hidden;
      position: relative;
      .title {
        color: $highOrange;
        text-align: right;
        margin-right: 20px;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      smallTomato:true,
      time:'',
    }
  },
  mounted() {
    this.$bus.$on("tomato", (smallTomato) => {
      this.smallTomato=smallTomato;
    });
  },
}
</script>
