import { FC } from 'react'

import s from './Nav.module.scss'

type NavProps = {
	courses: Course[]
	activeTag: string
	setActiveTag: (value: string) => void
}

const Nav: FC<NavProps> = ({ courses, activeTag, setActiveTag }) => {
	const uniqueTagsArray = Array.from(
		new Set(courses.flatMap(course => course.tags))
	)

	return (
		<nav className={s.nav}>
			<ul className={s.list}>
				{uniqueTagsArray.map((item, index) => (
					<li
						key={index}
						className={activeTag === item ? s.active : ''}
						onClick={() => {
							setActiveTag(item)
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Nav
