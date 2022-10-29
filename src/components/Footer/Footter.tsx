import React from 'react'

import { FaGithub } from "react-icons/fa";

import styles from './Footer.module.css'



const Footter = () => {
  return (
    <div className={styles.footer}>
        <p>
            <span>Todos os Direitos Reservados</span> 	&copy; João Cláudio  
        </p>
        <a target={'_blank'} href="https://github.com/JoaoClaudio22"> <FaGithub/> Github</a>
    </div>
  )
}

export default Footter