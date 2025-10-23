// app/@modal/(.)notes/[id]/page.tsx

import { getSingleNote } from '@/lib/api';
import NewModal from '@/components/NewModal/NewModal';
type Props = {
    params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: Props) => {
    const { id } = await params;
    const note = await getSingleNote(id);

    return (
        <>
            <NewModal>
                <h2>{note.title}</h2>
                <p>{note.content}</p>
            </NewModal>



        </>
    );
};

export default NotePreview;
