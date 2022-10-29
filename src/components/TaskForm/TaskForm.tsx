import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react'

import styles from './TaskForm.module.css'

//Interface
import {ITask} from '../../Interfaces/ITask'

type Props = {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    task?:ITask | null
    handleUpdate?(id:number, title:string, difficulty:number):void
}

const TaskForm = ({btnText, taskList, setTaskList,task,handleUpdate}: Props) => {
    
    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [difficulty, setDifficulty] = useState<number>(0)


    useEffect(() => {
        if(task){
            setId(task.id)
            setTitle(task.title)
            setDifficulty(task.difficulty)
        }
    },[task])



    function handleAddTask(evt: FormEvent<HTMLFormElement>){
        evt.preventDefault()

        if(title === ''){
            alert("Preencha o nome da sua tarefa")
            return
        }

       if(handleUpdate){
        handleUpdate(id, title, difficulty)
       }else{
        const id = Math.floor(Math.random() * 1000)

        const newTask: ITask = {id,title,difficulty}


        setTaskList!([...taskList,newTask])

        setTitle("")
        setDifficulty(0)
       }
    }

    function handleInputChange(evt: ChangeEvent<HTMLInputElement>){
        if(evt.target.name === 'title'){
            setTitle(evt.target.value)
        }else{
            setDifficulty(parseInt(evt.target.value))
        }
    }
    
  
    return (
    <form onSubmit={handleAddTask} className={styles.form}>
        <div className={styles.input_form}>
            <label htmlFor="title">Título da Tarefa</label>
            <input 
                type="text" 
                name='title' 
                placeholder='Escreva aqui sua tarefa...'
                onChange={handleInputChange}
                value={title}
            />
        </div>
        
        
        <div className={styles.input_form}>
            <label htmlFor="difficulty">Dificuldade da tarefa:</label>
            <input 
                type="number" 
                name='difficulty' 
                placeholder='Dificuldade da tarefa...' 
                onChange={handleInputChange}
                value={difficulty}
            />
        </div>
            <input type="submit" value={btnText}/>
    </form>
  )
}

export default TaskForm