import { getSingleNote } from '@/lib/api'
import NotesPreview from './NotePreview.client'

type Props = {
    params: { id: string }
}

export default async function Page({ params }: Props) {
    const note = await getSingleNote(params.id)
    return <NotesPreview note={note} />
}
