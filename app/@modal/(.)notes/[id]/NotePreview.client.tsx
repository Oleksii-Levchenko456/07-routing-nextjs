'use client'

import type { Note } from '@/types/note'
import NewModal from '@/components/NewModal/NewModal'
interface Props {
    note: Note
}

export default function NotePreview({ note }: Props) {
    return (
        <NewModal>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
        </NewModal>
    )
}
