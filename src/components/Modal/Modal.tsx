import React, {useEffect} from 'react'
import { ITask } from '../../Interfaces/ITask'

import styles from './Modal.module.css'

type Props = {
    children: React.ReactNode
    task?:ITask | null
}



const Modal = ({children,task}: Props) => {
    
    
    function closeModal(evt: React.MouseEvent){
        const modal = document.getElementById('modal')

        modal!.classList.add('hidden')
    }

    


  return (
    <div id='modal' className='hidden'>
        <div className={styles.fade} onClick={closeModal}></div>

        <div className={styles.modal}>
            <div className={styles.modalContent}>{children}</div>
        </div>
    </div>
  )
}

export default Modal