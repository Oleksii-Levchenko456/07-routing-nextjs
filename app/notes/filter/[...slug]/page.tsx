import { fetchNotes } from "@/lib/api"
import NotesClient from "./Notes.client"
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query"


interface Props {
    params: Promise<{ slug: string[] }>
}

const NotesByCategory = async ({ params }: Props) => {
    const { slug } = await params
    const tag = slug[0] === 'all' ? undefined : slug[0]

    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
        queryKey: ['notes', 1, '', tag],
        queryFn: () => fetchNotes(1, 12, '', tag)
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NotesClient tag={tag} />
        </HydrationBoundary>)
}
export default NotesByCategory