import React, { useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io"
import { CloseButton, ModalBody, ModalContainer, ModalFooter, ModalHeader, Overlay } from './ModalStyle'

function Modal({ title, footer, closeModal, children}) {
    return (
        <Overlay>
            <ModalContainer>
                <ModalHeader>{title} <IoIosCloseCircleOutline onClick={closeModal} /></ModalHeader>
                <hr />
                <ModalBody>
                    {children}
                </ModalBody>
                <ModalFooter>
                    {footer}
                </ModalFooter>
            </ModalContainer>
        </Overlay>
    )
}

export default Modal