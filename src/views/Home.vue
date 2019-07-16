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
          <i class="fas" v-if="!rest" :class="[play?'fa-play':'fa-pause']" @click="countDown()"></i>
          <i class="fas" v-if="rest" :class="[play?'fa-play':'fa-pause']" @click="countDown2()"></i>
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
        <i
          class="fas fa-apple-alt"
          v-for="(item, index) in 5"
          :key="item"
          :data-id="index+1"
          @click="calculateTomato(item)"
        ></i>
      </div>
      <div class="calculate-title" v-if="!toDoTasking">請選擇一個任務</div>
      <div class="calculate-title" v-else>{{toDoTasking}}</div>
      <div class="calculate-count">
        {{moment(time).format('mm:ss')}}
        <i class="fas fa-redo-alt" @click="stopInterval()"></i>
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
.yellowBack {
  background-color: $yellowApple !important;
}
.yellowFont {
  color: $yellowApple !important;
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
      transition: background-color 0.5s;
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
      z-index: 8;
      position: absolute;
      top: 30px;
      left: -30px;
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
    transition: color 0.5s;
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
        padding: 10px
      }
    }
  }
}
.bright {
  color: red;
}
</style>

<script>
import $ from "jquery";
import moment from "moment";
import { clearInterval } from "timers";
export default {
  data() {
    return {
      rest: false, //true是休息的倒數,false是工作的倒數
      play: true, //true代表出現播放鍵,false代表出現暫停鍵
      time: "", //現在倒數的時間
      stop: "", //setInterval的回傳值
      tomatoNum: "", //已按下幾個番茄  *要被放到done
      isPress: false, //控制有無按下番茄
      toDoTasking: "", //*要被放到done
      toDoTask: "", //*要被放到todo
      allToDoTask: ["123"], //所有的todo
      myInterval: "", //用到停止計時
      moment: moment
    };
  },
  methods: {
    countDown() {
      if (this.toDoTasking&&  this.tomatoNum) {
        //先篩選有無選到任一個任務
        const vm = this;
        this.play = !this.play;
        if (this.play) {
          //停止
          window.clearInterval(this.myInterval);
        } else {
          //播放
          let isFinish = "";
          this.myInterval = window.setInterval(() => {
            console.log(456);

            const timeString = this.time
              .toString()
              .split(" ")[4]
              .split(":");

            if (timeString[1] === "24" && timeString[2] === "57") {
              //時間到要做的事
              isFinish = true;
              this.play = true;
            } else {
              isFinish = false;
            }

            if (isFinish) {
              //時間到要做的事
              window.clearInterval(this.myInterval);
              this.rest = true;
              const time = new Date();
              time.setMinutes(5);
              time.setSeconds(0);
              this.time = time;
              //改顏色
              document.querySelectorAll(".circle").forEach(e => {
                e.classList.add("yellowBack");
              });
              document
                .querySelector(".calculate-count")
                .classList.add("yellowFont");
              //改字
              document.querySelector(".word").textContent = "Break time!";
            } else {
              vm.time = new Date(vm.time.setSeconds(vm.time.getSeconds() - 1));
            }
          }, 1000);
          this.stop = this.myInterval;
        }
      } else {
        alert("請先選擇任務及番茄數量");
      }
    },
    stopInterval() {
      if (!this.stop) {
        return;
      } else {
        window.clearInterval(this.stop);
        const time = new Date();
        time.setMinutes(25);
        time.setSeconds(0);
        this.time = time;
        this.play = true;
        //改顏色
        if (this.rest) {
          document.querySelectorAll(".circle").forEach(e => {
            e.classList.remove("yellowBack");
          });
          document
            .querySelector(".calculate-count")
            .classList.remove("yellowFont");
          //改字
          document.querySelector(".word").textContent = "Break time!";
        }
        this.rest = false;
      }
    },
    countDown2() {
      this.play = !this.play;
      if (this.play) {
        //停止
        window.clearInterval(this.myInterval);
      } else {
        //播放
        let isFinish = "";
        this.myInterval = window.setInterval(() => {
          const timeString = this.time
            .toString()
            .split(" ")[4]
            .split(":");
          if (timeString[1] === "04" && timeString[2] === "30") {
            //時間到要做的事
            console.log(123);
            isFinish = true;
            this.play = true;
          } else {
            isFinish = false;
          }
          if (isFinish) {
            //時間到要做的事
            window.clearInterval(this.myInterval);
            this.rest = false;
            const time = new Date();
            time.setMinutes(25);
            time.setSeconds(0);
            this.time = time;
            //改顏色
            document.querySelectorAll(".circle").forEach(e => {
              e.classList.remove("yellowBack");
            });
            document
              .querySelector(".calculate-count")
              .classList.remove("yellowFont");
            //改字
            document.querySelector('.word').textContent='Break time!'
          } else {
            this.time = new Date(
              this.time.setSeconds(this.time.getSeconds() - 1)
            );
          }
        }, 1000);
        this.stop = this.myInterval;
      }
    },
    toDo() {
      this.allToDoTask.push(this.toDoTask);
      this.toDoTask = "";
    },
    calculateTomato(val) {
      this.isPress = true;
      this.tomatoNum ? "" : (this.tomatoNum = val);
    }
  },
  computed: {
    toBright() {
      this.brightDom;
    }
  },
  mounted() {
    const vm = this;
    document.querySelectorAll(".calculate-num i").forEach(function(item) {
      item.addEventListener("mouseenter", function(e) {
        vm.isPress
          ? ""
          : $(this)
              .prevAll()
              .addBack()
              .addClass("bright");
      });
      item.addEventListener("mouseleave", function(e) {
        vm.isPress
          ? ""
          : $(this)
              .prevAll()
              .addBack()
              .removeClass("bright");
      });
    });
    const time = new Date();
    time.setMinutes(25);
    time.setSeconds(0);
    this.time = time;
  }
};
</script>
