import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../../redux/store";
import closeBtn from '../../../asstets/icons/close-btn.png'
import { setCurrTodo } from "../../../redux/todo.store";
import { TodoForm } from "../../../cmps/Todo/TodoForm/TodoForm";
import './EditTodoModal.scss'

export const EditTodoModal: FunctionComponent = () => {
    const { currTodo } = useSelector((state: RootState) => state.todoStore);

    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        if (!id) return;
        dispatch(setCurrTodo(id))
    }, [id])

    const handleClose = () => {
        navigate('/todo')
    }

    return <section className="edit-todo-modal">
        {(currTodo && currTodo?.id === id) && <>
            <div className="modal-overlay" onClick={handleClose}></div>
            <div className="modal-container">
                <img className="close-btn" src={closeBtn} alt="close-button" onClick={handleClose} />
                <div className="modal-content">
                    <TodoForm todoToEdit={currTodo} />
                </div>
            </div>
        </>
        }
    </section>
}