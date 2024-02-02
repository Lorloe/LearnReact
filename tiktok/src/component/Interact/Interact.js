import React from 'react'
import './styles.css'
import Button from '../Button/Button'
import { doraemon } from '../../assets/index'

const Interact = () => {
  return (
    <div className='interact-wrapper'>
      <div className='container'>
        <button>
        <i class="fa-solid fa-plus"></i>
        <span className='upload-text'>
            Tải lên
        </span>
        </button>

        <button>
        <i className="fa-sharp fa-regular fa-paper-plane"></i>
        </button>

        <button>
        <i className="fa-regular fa-envelope"></i>
        </button>

        <img src = {doraemon} alt="doraemon" className='doraemon'/>
      </div>
    </div>
  )
}

export default Interact
