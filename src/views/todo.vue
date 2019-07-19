<template>
  <div class="container">
    <div class="mission">
      <input type="text" placeholder="New Task" @keyup.enter="toDo()" v-model="toDoTask" />
      <i class="fas fa-plus" @click="toDo()"></i>
    </div>
    <div class="list">
      <div class="list-title">TASK LIST</div>
      <p>Plan your time and keep going.</p>
      <div class="list-task">
        <div class="todo">
          <div class="todo-title">TO-DO</div>
          <div class="todo-item" v-for="(item, index) in todo.allToDoTask" :key="item+index">
            <input type="radio" name="todo" />
            <p class="m-0">{{item}}</p>
            <span @click="removeTodo(index)">刪除</span>
          </div>
        </div>
        <div class="done">
          <div class="done-title">DONE</div>
          <template v-for="(item,index) in done">
            <div class="done-item" v-if="index<4">
              <i class="fas fa-check"></i>
              <p class="m-0">{{item.toDoTasking}}</p>
              <div class="done-item-num">
                <i class="fas fa-apple-alt" v-for="num in item.tomatoNum" :key="num"></i>
              </div>
            </div>
          </template>

          <!-- <div class="done-item" v-for="item in done" :key="item.toDoTasking">
            <i class="fas fa-check"></i>
            <p class="m-0">{{item.toDoTasking}}</p>
            <div class="done-item-num">
              <i class="fas fa-apple-alt" v-for="num in item.tomatoNum" :key="num"></i>
            </div>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
.none {
  opacity: 0 !important;
}
.list {
  width: 75%;
  margin: 20px auto;
  &-title {
    color: $middleOrange;
    font-size: 40px;
  }
  p {
    color: $doing;
  }
  &-task {
    display: flex;
    justify-content: space-between;
    .todo,
    .done {
      width: 40%;
      &-title {
        margin-bottom: 15px;
        color: white;
        background-color: $middleOrange;
        padding: 10px;
      }
      &-item {
        opacity: 1;
        display: flex;
        align-items: center;
        transition: opacity 1s;
        border-bottom: 1px solid rgba(128, 128, 128, 0.5);
        margin-bottom: 15px;
        input {
          margin-right: 10px;
          transform: scale(1.5);
        }
        i {
          margin-right: 10px;
          color: $middleOrange;
        }
        p {
          color: $doing;
        }
        span {
          margin-left: auto;
          color: $lowOrange;
          cursor: pointer;
          transition: color 0.5s;
          &:hover {
            color: darken($lowOrange, 20%);
          }
        }
      }
    }
    .done {
      &-item {
        p:first-of-type {
          text-decoration: line-through;
        }
        &-num {
          color: $doing;
          margin-left: auto;
        }
      }
    }
  }
}

.mission {
  outline: $middleOrange 1px solid;
  margin: auto;
  width: 50%;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 5px #888888;
  input {
    padding: 15px;
    width: 100%;
    border: none;
    outline: none;
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: $middleOrange;
    opacity: 0.5;
  }
  i {
    margin-right: 15px;
    font-size: 30px;
    cursor: pointer;
    color: $middleOrange;
  }
  i:hover {
    color: lighten($middleOrange, 15%);
  }
}
</style>

<script>
import { clearTimeout } from "timers";
export default {
  data() {
    return {
      deleteAni: "",
      toDoTask: "",
      todo: {
        allToDoTask: [] //所有的todo
      },
      done: []
    };
  },
  methods: {
    toDo() {
      this.todo.allToDoTask.unshift(this.toDoTask);
      localStorage.setItem("todo", JSON.stringify(this.todo.allToDoTask));
      this.toDoTask = "";
    },
    removeTodo(val) {
      document.querySelectorAll(".todo-item")[val].classList.add("none");
      this.deleteAni = setTimeout(() => {
        this.todo.allToDoTask.splice(val, 1);
        const allTodo = JSON.parse(localStorage.getItem("todo"));
        allTodo.splice(val, 1);
        localStorage.setItem("todo", JSON.stringify(allTodo));
      }, 1000);
    }
  },
  mounted() {
    this.$bus.$emit("tomato", true);
    const allTodo = JSON.parse(localStorage.getItem("todo"));
    allTodo ? (this.todo.allToDoTask = allTodo) : "";

    const done = JSON.parse(localStorage.getItem("done"));
    done ? (this.done = done) : "";
  },
  beforeDestroy() {
    clearTimeout(this.deleteAni);
  }
};
</script>
