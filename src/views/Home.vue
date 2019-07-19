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
          <i class="fas" :class="[play?'fa-play':'fa-pause']" @click="sameCountDown()"></i>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div class="word">Focus!</div>
      </div>
      <div class="calculate-num">
        <i
          class="fas fa-apple-alt"
          v-for="(item, index) in 5"
          :key="item"
          :data-id="index+1"
          @click="calculateTomato(item)"
        ></i>
      </div>
      <!-- v-if="!done.toDoTasking" -->
      <div class="calculate-title">{{done.toDoTasking}}</div>
      <!-- <div class="calculate-title" v-else>{{done.toDoTasking}}</div> -->
      <div class="calculate-count">
        {{moment(time).format('mm:ss')}}
        <i class="fas fa-redo-alt" @click="stopInterval()"></i>
      </div>
    </div>

    <div class="mission">
      <div class="mission-add">
        <input type="text" placeholder="New Task" @keyup.enter="toDo()" v-model="toDoTask" />
        <i class="fas fa-plus" @click="toDo()"></i>
      </div>
      <div class="mission-all">
        <div class="mission-all-title">TO-DO</div>
        <template v-for="(item,index) in todo.allToDoTask">
          <div class="mission-all-item" v-if="index<3">
            <input
              type="radio"
              name="mission"
              :value="item"
              v-model="done.toDoTasking"
              @click="checkRest($event)"
            />
            {{item}}
          </div>
        </template>
        <p v-if="todo.allToDoTask.length>3">其餘到任務列表確認</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
@import "../assets/tomato.scss";
/* .smallTomato{
  position: absolute;
  bottom: -180px;
  right: -50px;
  .calculate-count{
    z-index: 10;
    position: absolute;
    top: 0;
    left: 130px;
    color: white;
  }
} */
.home {
  display: flex;
  margin-top: 55px;
  padding: 0 30px;
}

.yellowBack {
  background-color: $yellowApple !important;
}
.yellowFont {
  color: $yellowApple !important;
}
/* .calculate,
.smallTomato {
  width: 50%;
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
    margin-bottom: 72px;
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
} */
.mission {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 50px;
  &-add {
    outline: $middleOrange 1px solid;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 5px #888888;
    input {
      width: 100%;
      border: none;
      outline: none;
      padding: 15px;
    }
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: $middleOrange;
      opacity: 0.5;
    }
    i {
      margin-right: 15px;
      cursor: pointer;
      color: $middleOrange;
      font-size: 30px;
    }
    i:hover {
      color: lighten($middleOrange, 15%);
    }
  }
  &-all {
    &-title {
      color: $middleOrange;
    }
    &-item {
      border-bottom: $borderBottom 1px solid;
      color: $doing;
      padding: 10px;
      border-bottom: 1px solid rgba(128, 128, 128, 0.5);
      margin-bottom: 15px;
      input {
        margin-right: 5px;
        padding: 10px;
        transform: scale(1.5);
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
//import { clearInterval } from "timers";
export default {
  data() {
    return {
      smallTomato: false,
      rest: false, //true是休息的倒數,false是工作的倒數
      play: true, //true代表出現播放鍵,false代表出現暫停鍵
      time: "", //現在倒數的時間
      stop: "", //setInterval的回傳值
      toDoTask: "", //*要被放到todo
      done: {
        tomatoNum: "", //已按下幾個番茄  *要被放到done
        toDoTasking: "請選擇一個任務" //*正在進行的任務 done
      },
      todo: {
        allToDoTask: [] //所有的todo
      },
      isPress: false, //控制有無按下番茄
      myInterval: "", //用到停止計時
      moment: moment
    };
  },
  methods: {
    countDown(isFinish) {
      //時間到要做的事
      const getDone = localStorage.getItem("done");
      if (getDone) {
        //本來就有值
        const tempDone = JSON.parse(getDone);
        tempDone.unshift(this.done);
        localStorage.setItem("done", JSON.stringify(tempDone));
      } else {
        //本來沒值
        localStorage.setItem("done", JSON.stringify([this.done]));
      }

      //清空done的物件,才能執行下一次任務,以及番茄要能重新選
      const toDoTasking = this.done.toDoTasking;
      const allToDoTask = this.todo.allToDoTask;
      let spliceIndex = allToDoTask.indexOf(toDoTasking);
      allToDoTask.splice(spliceIndex, 1);
      localStorage.setItem("todo", JSON.stringify(allToDoTask));
      this.isPress = false;
      allToDoTask.length
        ? (this.done.toDoTasking = allToDoTask[0])
        : (this.done.toDoTasking = "請選擇一個任務");
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
          //重新選番茄
        }
        this.isPress = false;
        this.rest = false;
      }
    },
    sameCountDown() {
      if (this.done.toDoTasking && this.done.tomatoNum) {
        //先篩選有無選到任一個任務
        let minutes = "";
        let seconds = "";
        let toMinute = "";
        this.play = !this.play;
        if (this.rest) {
          minutes = "04";
          seconds = "59";
        } else {
          minutes = "24";
          seconds = "59";
        }
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
            if (timeString[1] === minutes && timeString[2] === seconds) {
              //時間到要做的事
              isFinish = true;
              this.play = true;
            } else {
              isFinish = false;
            }
            if (isFinish) {
              //時間到要做的事
              window.clearInterval(this.myInterval);
              this.rest = !this.rest;
              const time = new Date();
              this.rest ? (toMinute = 5) : (toMinute = 25);
              time.setMinutes(toMinute);
              time.setSeconds(0);
              this.time = time;
              //改顏色
              document.querySelectorAll(".circle").forEach(e => {
                e.classList.toggle("yellowBack");
              });
              document
                .querySelector(".calculate-count")
                .classList.toggle("yellowFont");
              //改字
              document.querySelector(".word").textContent = "Break time!";
              this.rest ? this.countDown() : (this.done.tomatoNum = ""); //用來呼叫計時器不同處
            } else {
              this.time = new Date(
                this.time.setSeconds(this.time.getSeconds() - 1)
              );
            }
          }, 1000);
          this.stop = this.myInterval;
        }
      } else {
        alert("請先選擇任務及番茄數量");
      }
    },
    toDo() {
      this.todo.allToDoTask.unshift(this.toDoTask);
      localStorage.setItem("todo", JSON.stringify(this.todo.allToDoTask));
      this.toDoTask = "";
    },
    calculateTomato(val) {
      this.isPress = true;
      this.done.tomatoNum ? "" : (this.done.tomatoNum = val);
    },
    checkRest(e) {
      if (this.rest) {
        alert("現在是休息時間");
        e.preventDefault();
      } else if (moment(this.time).format("mm:ss") !== "25:00") {
        alert("工作進行中");
        e.preventDefault();
      }
    }
  },
  mounted() {
    this.$bus.$emit("tomato", false);
    const vm = this;
    document.querySelectorAll(".calculate-num i").forEach(function(item) {
      item.addEventListener("mouseenter", function(e) {
        vm.isPress && !vm.rest //沒按下去又不是休息時間
          ? ""
          : $(this)
              .prevAll()
              .addBack()
              .addClass("bright");
      });
      item.addEventListener("mouseleave", function(e) {
        vm.isPress && !vm.rest //沒按下去又不是休息時間
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

    const todo = JSON.parse(localStorage.getItem("todo"));
    todo ? (this.todo.allToDoTask = todo) : "";
  },
  watch: {
    time:{
      handler(val,oldVal){
        this.$bus.$emit("push", this.time);
      },
      deep:true
    }
  },
  beforeDestroy() {
    window.clearInterval(this.myInterval);
    this.smallTomato = true;
  }
};
</script>
