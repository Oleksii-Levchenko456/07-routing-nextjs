import css from './SidebarNotes.module.css'

export default function SidebarNotes() {

    const tags = ['all', 'Work', 'Personal', 'Meeting', 'Shopping', 'Todo']

    return (
        <aside >
            <ul className={css.menuList}
            >

                {tags.map(tag => (
                    <li key={tag} className={css.menuItem}
                    >
                        <a href={`/notes/filter/${tag}`} className={css.menuLink}>
                            {tag}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
