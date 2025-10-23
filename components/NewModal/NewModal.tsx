'use client';

import css from './NewModal.module.css'
import { useRouter } from 'next/navigation';

type Props = {
    children: React.ReactNode;
};

const NewModal = ({ children }: Props) => {
    const router = useRouter();

    const close = () => router.back();

    return (
        <div className={css.modalOverlay}>
            <div className={css.modalContent}>
                {children}
                <button className={css.closeButton} onClick={close}>Close</button>
            </div>
        </div>
    );
};

export default NewModal;
