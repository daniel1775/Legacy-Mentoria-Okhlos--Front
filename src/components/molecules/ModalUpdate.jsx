import React, { useState } from 'react'
import Modal from 'react-modal';
import { XCloseBtn } from '../atoms';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');
const ModalUpdate = ({ state, setState, children, title }) => {


    function openModal() {
        setState(true);
    }


    function closeModal() {
        setState(false);
    }


    return (
        <div className=''>
            <Modal
                isOpen={state}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                className='h-[80%] overflow-scroll w-[85%] p-6 absolute bg-white rounded-lg lg:overflow-auto'
            >
                <div className="bg-PrimarioColor2 rounded-xl p-2 flex justify-between  ">
                    <div >
                        <h3 className=" font-Roboto text-lg font-bold">{title}</h3>
                    </div>
                    <XCloseBtn func={closeModal}/>
                </div>
                <br/>
                {children}
            </Modal>
        </div>
    )
}

export default ModalUpdate