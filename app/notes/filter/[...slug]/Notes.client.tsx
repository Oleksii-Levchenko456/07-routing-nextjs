"use client"


import css from './NotesPage.module.css'
import NoteList from '@/components/NoteList/NoteList'
import { fetchNotes } from '@/lib/api'
import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import SearchBox from '@/components/SearchBox/SearchBox'
import Pagination from '@/components/Pagination/Pagination'
import Modal from '@/components/Modal/Modal'
import { useDebouncedCallback } from 'use-debounce'
import Loader from '@/components/Loader/Loader'
import NoteForm from '@/components/NoteForm/NoteForm'
import type { FetchNotesResponse } from '@/lib/api'

interface Props {
    initialData: FetchNotesResponse,
    tag?: string
}

export default function NotesClient({ initialData, tag }: Props) {
    const [page, setPage] = useState(1)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [inputValue, setInputValue] = useState('')

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(value)
        handleSearch(value)
    }
    const handleSearch = useDebouncedCallback((value) => { setSearchValue(value) }, 700)

    const closeModal = () => {
        setIsOpenModal(false)
    }

    useEffect(() => {
        setPage(1)
    }, [inputValue])

    const { data, isFetching, } = useQuery({
        queryKey: ['notes', page, searchValue, tag],
        queryFn: () => fetchNotes(page, 12, searchValue, tag),
        refetchOnMount: false,
        placeholderData: initialData,

    })
    return (
        <div className={css.app}>
            <header className={css.toolbar}>

                <SearchBox value={inputValue} onChange={handleInputValue} />
                {data && data.totalPages > 1 && <Pagination totalPages={data.totalPages} page={page} setPage={setPage} />}
                <button className={css.button} onClick={() => { setIsOpenModal(true) }}>Create note +</button>
            </header>

            {isFetching && <Loader />}

            {isOpenModal && (
                <Modal onClose={closeModal}>
                    <NoteForm onClose={closeModal} />
                </Modal>)}
            {data?.notes?.length &&
                <NoteList notes={data.notes} />}
            {!NoteList && <p>Empty...</p>}

        </div>

    )
}
// неправильно типізував пропс