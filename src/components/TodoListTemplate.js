import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {
    //form -> App.js에서 넘겨주는 form props라고 생각하자
    //children -> TodoListTemplate의 자식인 TodoItemList
    console.log(form, children)
    
    return(
        <main className="todo-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};
export default TodoListTemplate;