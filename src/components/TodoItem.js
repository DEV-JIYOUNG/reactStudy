import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        //부모 컴포넌트로 전달받은 props
        const { text, checked, id, onToggle, onRemove } = this.props;
        console.log(text, checked);
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함 이벤트 버블링 때문
                    onRemove(id)
                }
                }>&times;</div>
                {/* `안에 들어가있는 checked를 변수로 인식하기 위해서는 $가 필요하다 
                    true && 'abc' -> 'abc'  /   false && 'abc' -> false
                */}
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default TodoItem;