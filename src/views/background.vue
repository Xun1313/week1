<template>
  <div class="dashboard">
    <div class="dashboard-title">
      <h1>POMODORO</h1>
      <p>WEEK1</p>
      <div></div>
    </div>
    <div class="dashboard-content">
      <div class="dashboard-content-menu">
        <i class="fas fa-apple-alt"></i>
        <i class="fas fa-list-ul"></i>
        <i class="fas fa-chart-bar"></i>
        <i class="fas fa-music"></i>
      </div>
      <div class="dashboard-content-all">
        <p class="title">ToMATo</p>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
.dashboard {
  display: flex;
  &-title {
    h1 {
      color: $highOrange;
      background-color: white;
      padding: 20px;
    }
    p {
      color: white;
    }
  }
  &-content {
    outline: red 1px solid;
    display: flex;
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
      i:hover{
        color: lighten(#00000062, 10%)
      }
    }
    &-all {
      /* display: flex;
      flex-direction: column; */
      .title {
        color: $highOrange;
        text-align: right;
        margin-right: 20px;
      }
    }
  }
}
</style>
