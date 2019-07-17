<template>
  <div class="container">
    <div class="mission">
      <input type="text" placeholder="New Task" @change="toDo()" v-model="toDoTask" />
      <i class="fas fa-plus"></i>
    </div>
    <div class="list container">
      <div class="list-title">TASK LIST</div>
      <p>Plan your time and keep going.</p>
      <div class="list-task">
        <div class="todo">
          <div class="todo-title">TO-DO</div>
          <div class="todo-item" v-for="(item, index) in todo.allToDoTask" :key="item+index">
            <input type="radio" name="todo">
            <p class="m-0">{{item}}</p>
            <span>...</span>
          </div>
        </div>
        <div class="done">
          <div class="done-title">DONE</div>
          <div class="done-item" v-for="(item, index) in done" :key="index">
            <input type="checkbox">
            <p class="m-0">{{item.toDoTasking}}</p>
            <p class="m-0">{{item.tomatoNum}}</p>
            <span>...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
.list{
  &-title{
    color:$middleOrange;
    font-size: 30px;
  }
  p{
    color: $doing;
  }
  &-task{
    display: flex;
    .todo,.done{
      &-title{
        color: white;
        background-color: $middleOrange;
        padding: 10px;
      }
      &-item{
        display: flex;
        align-items: center;
        input{
          margin-right: 10px;
        }
        p{
          color: $doing
        }
        span{
          color: $doing
        }
      }
    }
    .done{

    }
  }
}

.mission{
  outline: $middleOrange 1px solid;
  margin: auto;
  input{
    padding:15px
  }
}
</style>

<script>
export default {
  data() {
    return {
      toDoTask:'',
      todo: {
        allToDoTask: [] //所有的todo
      },
      done: []

    }
  },
  methods: {
    toDo(){

    }
  },
  mounted() {
    this.todo.allToDoTask=JSON.parse(localStorage.getItem('todo'))
    this.done=JSON.parse(localStorage.getItem('done'))
  },
}
</script>
