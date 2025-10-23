'use client';

import css from './NewModal.module.css'
import { useRouter } from 'next/navigation';

type Props = {
    children: React.ReactNode;
};

const NewModal = ({ children }: Props) => {

    const router = useRouter();
    const close = () => router.back();

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            close()
        }
    }

    return (
        <div className={css.modalOverlay} onClick={handleBackdropClick}>
            <div className={css.modalContent}>
                {children}
                <button className={css.closeButton} onClick={close}>Close</button>
            </div>
        </div>
    );
};

export default NewModal;
