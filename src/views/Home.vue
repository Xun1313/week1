<template>
  <div class="home">
    <div class="calculate">
      <div class="calculate-pic">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
      <div class="calculate-num">123</div>
      <div class="calculate-title">123456</div>
      <div class="calculate-count">12:50</div>
    </div>

    <div class="mission">
      <div class="mission-add">
        <input type="text" placeholder="New Task" @change="toDo()" v-model="toDoTask" />
        <i class="fas fa-plus"></i>
      </div>
      <div class="mission-all">
        <div class="mission-all-title">TO-DO</div>
        <div class="mission-all-item" v-for="item in allToDoTask" :key="item">
          <input type="radio" name="mission" />
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
.home {
  display: flex;
}
.calculate {
  width: 50%;
  padding: 30px;
  &-pic {
    width: 450px;
    height: 285px;
    outline: 1px solid red;
    position: relative;
    .circle {
      position: absolute;
      width: 50%;
      height: 100%;
      border-radius: 50%;
      background-color: $highOrange;
    }
    .circle:nth-child(1){
      top:-11px;
      left: 62px;
    }
    .circle:nth-child(2){
      top:-11px;
      right: 62px;
    }
    .circle:nth-child(3){
      border-radius: 42%;
      height: 50%;
      bottom:0;
      left: 110px;
    }
  }
  &-title {
    color: $doing;
  }
  &-count {
    color: $highOrange;
    text-align: right;
  }
}
.mission {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 50px;
  &-add {
    outline: $middleOrange 1px solid;
    margin-bottom: 40px;
  }
  &-all {
    &-title {
      color: $middleOrange;
    }
    &-item {
      border-bottom: $borderBottom 1px solid;
      color: $doing;
      padding: 10px;
      input {
        margin-right: 5px;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      toDoTask: "",
      allToDoTask: ["123"]
    };
  },
  methods: {
    toDo() {
      this.allToDoTask.push(this.toDoTask);
      this.toDoTask = "";
    }
  }
};
</script>
