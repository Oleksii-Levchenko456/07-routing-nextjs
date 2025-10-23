import { fetchNotes } from "@/lib/api"
import NotesClient from "./Notes.client"

interface Props {
    params: Promise<{ slug: string[] }>
}

const NotesByCategory = async ({ params }: Props) => {
    const { slug } = await params
    const tag = slug[0] === 'all' ? undefined : slug[0]
    const response = await fetchNotes(1, 12, undefined, tag)
    console.log(response)

    return (
        <NotesClient initialData={response} tag={tag} />
    )
}
export default NotesByCategory