'use client'

import NewModal from '@/components/NewModal/NewModal'
import { useQuery } from '@tanstack/react-query'
import { getSingleNote } from '@/lib/api'


interface Props {
    noteId: string
}

export default function NotePreview({ noteId }: Props) {

    const { data, } = useQuery({
        queryKey: ['note', noteId],
        queryFn: () => getSingleNote(noteId)
    })
    return (
        <NewModal>
            <h2>{data?.title}</h2>
            <p>{data?.content}</p>
        </NewModal>
    )
}
