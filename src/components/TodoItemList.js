import React, { Component } from 'react';
import TodoItem from './TodoItem';
class TodoItemList extends Component {
    render() {
        //App.js에서 넘겨주는 props (props는 부모 컴포넌트로 전달받는다.)
        const { todos, onToggle, onRemove } = this.props;
        console.log('todos',todos)
    
        //App.js에서 초기화한 상태 todos <TodoItem~과 같은 형태의 결과로 새로운 배열을 반환.
        const todoItems2 = todos.map((todo, idx) =>
            <TodoItem key={idx} text={todo.text} onRemove={onRemove} id={idx} onToggle={onToggle} checked={todo.checked}/>
        );
        return (
            <div>
                {todoItems2}
            </div>
        );
    }
}
export default TodoItemList;