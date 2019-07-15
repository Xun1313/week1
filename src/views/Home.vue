<template>
  <div class="home">
    <div class="calculate">
      <div class="calculate-pic">
        <div class="grasses">
          <div class="grass grass-1"></div>
          <div class="grass grass-2"></div>
          <div class="grass grass-3"></div>
        </div>
        <div class="circles">
          <i class="fas" :class="[123?'fa-play':'fa-pause']"></i>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div class="word">Focus!</div>
      </div>
      <!-- :class="[picBright>=5?'bright':picBright>=4?'bright':picBright>=3?'bright':picBright>=2?'bright':picBright>=1?'bright':'']" -->
      <!-- :class="{
          'bright':toBright[index]>=5,'bright':toBright[index]>=4,'bright':toBright[index]>=3,'bright':toBright[index]>=2,'bright':toBright[index]>=1,
      }"-->
      <div class="calculate-num">
        <i class="fas fa-apple-alt" v-for="(item, index) in 5" :key="item" :data-id="index+1" @click="calculateTomato(item)"></i>
      </div>
      <div class="calculate-title" v-if="!toDoTasking">請選擇一個任務</div>
      <div class="calculate-title" v-if="toDoTasking">{{toDoTasking}}</div>
      <div class="calculate-count">
        12:50
        <i class="fas fa-redo-alt"></i>
      </div>
    </div>

    <div class="mission">
      <div class="mission-add">
        <input type="text" placeholder="New Task" @change="toDo()" v-model="toDoTask" />
        <i class="fas fa-plus"></i>
      </div>
      <div class="mission-all">
        <div class="mission-all-title">TO-DO</div>
        <div class="mission-all-item" v-for="item in allToDoTask" :key="item">
          <input type="radio" name="mission" :value="item" v-model="toDoTasking" />
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
    position: relative;
    margin-bottom: 20px;
    .grasses {
      z-index: 1;
      //outline: 1px red solid;
      width: 150px;
      height: 60px;
      position: absolute;
      top: -20px;
      left: 142px;
      .grass {
        position: absolute;
      }
      .grass-1 {
        top: -38px;
        left: 20px;
        background-color: $grass;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        position: relative;
      }
      .grass-1::after {
        //display: none;
        z-index: 4;
        content: "";
        position: absolute;
        top: -23px;
        left: 20px;
        width: 70px;
        height: 70px;
        background-color: white;
        transform: rotate(43deg);
      }
      .grass-2 {
        z-index: 5;
        top: -45px;
        left: 41px;
        background-color: $grass;
        width: 70px;
        height: 70px;
        position: absolute;
      }
      .grass-2::before {
        z-index: 3;
        content: "";
        position: absolute;
        background-color: white;
        width: 55px;
        height: 40px;
        top: -11px;
        left: -15px;
        transform: rotate(133deg);
      }
      .grass-2::after {
        z-index: 3;
        content: "";
        position: absolute;
        background-color: white;
        width: 60px;
        height: 40px;
        top: -18px;
        right: -16px;
        transform: rotate(47deg);
      }
      .grass-3 {
        background-color: $grass;
        top: -38px;
        right: 20px;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        position: absolute;
      }
      .grass-3::after {
        display: none;
        z-index: 3;
        content: "";
        position: absolute;
        top: -23px;
        right: 25px;
        width: 70px;
        height: 70px;
        background-color: white;
        transform: rotate(43deg);
      }
    }
    .circles {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      i {
        font-size: 70px;
        color: white;
        position: absolute;
        top: 100px;
        left: 200px;
        z-index: 7;
        cursor: pointer;
      }
      i:hover {
        color: darken(white, 10%);
      }
    }
    .circle {
      z-index: 2;
      position: absolute;
      width: 50%;
      height: 100%;
      border-radius: 50%;
      background-color: $highOrange;
    }
    .circle:nth-of-type(1) {
      top: -11px;
      left: 62px;
    }
    .circle:nth-of-type(2) {
      top: -11px;
      right: 62px;
    }
    .circle:nth-of-type(3) {
      border-radius: 42%;
      height: 50%;
      bottom: 0;
      left: 110px;
    }
    .word {
      position: absolute;
      top: 30px;
      left: 0;
      color: $doing;
      font-size: 25px;
      transform: rotate(-30deg);
    }
  }
  &-num {
    display: flex;
    justify-content: flex-end;
    i {
      cursor: pointer;
      //color: gray;
      margin-right: 5px;
      font-size: 22px;
    }
  }
  &-title {
    color: $doing;
    font-size: 50px;
    margin-bottom: 20px;
  }
  &-count {
    color: $highOrange;
    font-size: 80px;
    text-align: right;
    margin-bottom: 20px;
    i {
      cursor: pointer;
      font-size: 20px;
      color: $doing;
      vertical-align: top;
      margin-bottom: 20px;
    }
    i:hover {
      color: darken($doing, 10%);
    }
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
.bright {
  color: red;
}
</style>

<script>
import $ from 'jquery';
export default {
  data() {
    return {
      tomatoNum:'',
      isPress:false,
      toDoTasking: "",
      toDoTask: "",
      allToDoTask: ["123"]
    };
  },
  methods: {
    toDo() {
      this.allToDoTask.push(this.toDoTask);
      this.toDoTask = "";
    },
    calculateTomato(val){
      this.isPress=true
      this.tomatoNum?'':this.tomatoNum=val
    }
  },
  computed: {
    toBright(){
      this.brightDom
    }
  },
  mounted() {
    const vm=this
    document.querySelectorAll(".calculate-num i").forEach(function(item){
      item.addEventListener("mouseenter", function(e){
        vm.isPress?'':$(this).prevAll().addBack().addClass('bright');
      });
      item.addEventListener("mouseleave", function(e){
        vm.isPress?'':$(this).prevAll().addBack().removeClass('bright');
      });
    });
  }
};
</script>
