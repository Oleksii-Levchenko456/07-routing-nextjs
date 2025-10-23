// import css from './SidebarNotes.module.css'

export default function SidebarNotes() {

    const tags = ['all', 'Work', 'Personal', 'Meeting', 'Shopping', 'Todo']

    return (
        <aside >
            <ul >

                {tags.map(tag => (
                    <li key={tag} >
                        <a href={`/notes/filter/${tag}`} >
                            {tag}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
// className = { css.menuList }
// className = { css.menuItem }
// className = { css.menuLink }