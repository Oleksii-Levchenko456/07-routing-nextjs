"use client"

import { createPortal } from 'react-dom'
import css from './Modal.module.css'
import { useEffect } from 'react'

interface ModalProps {
    onClose: (event?: React.MouseEvent<HTMLElement>) => void,
    children: React.ReactNode;
}


export default function Modal({ onClose, children }: ModalProps) {

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = "";
        }
    }, [onClose])

    const modalRoot = document.getElementById("modal-root");
    if (!modalRoot) { return null }

    return createPortal(
        <div
            className={css.backdrop}
            role="dialog"
            aria-modal="true"
            onClick={handleBackdropClick}
        >
            <div className={css.modal}>
                {children}
            </div>
        </div>,
        modalRoot
    )
}