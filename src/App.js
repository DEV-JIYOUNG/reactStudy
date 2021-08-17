import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  //상태 초기화
  state = {
    value : '',
    // todos : ['안녕', '리액트', '반가워']
    todos : [
              {text:'안녕', checked:false}, 
              {text : '리액트', checked:false}, 
              {text : '반가워', checked: false}
            ]
  }

  //추가 버튼 클릭시 작동하는 함수
  onCreate = () => {
    console.log('onCreate');
    const {todos, value} = this.state; 
    this.setState({
      value : '',
      todos : todos.concat({text:value, checked:false})
      // todos : [...this.state.todos, this.state.value]
    })
  }

  //값을 입력할때마다 input value 상태 변경하기 위한 함수
  onChange = (e) => {
    console.log(e,'onChange');
    this.setState({
      value : e.target.value
    });
  }

  onKeyPress = (e) => {
    console.log(e,'onKeyPress');
  }

  //item 클릭시 체크처리 해주는 함수
  onToggle = (id) => {
     console.log(id);
    // const returnTodos = this.state.todos.map((todo, idx) => {
    //   return idx == id ? {...todo, checked: !todo.checked} : todo
    //   if(idx==id){
    //     todo['checked'] = !todo['checked'];
    //    }
    //    return todo 
    // });
    
    this.setState({
      todos : this.state.todos.map((todo, idx) => idx == id ? {...todo, checked: !todo.checked} : todo)
    })
  }

  onRemove = (id) => {
    this.setState({
      todos : this.state.todos.filter((todo, idx) => idx!=id)
    });
  }

  render() {
    const {value, todos} = this.state;
    return (
      //Form의 부모는 TodoListTemplate
      <TodoListTemplate form={<Form onCreate={this.onCreate} onChange={this.onChange} onKeyPress={this.onKeyPress} value={value}/>}>
        <TodoItemList todos={todos} onRemove={this.onRemove} onToggle={this.onToggle}/>
      </TodoListTemplate>
    );
  }
}
export default App;