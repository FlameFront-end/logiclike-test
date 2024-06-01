import { FC } from 'react'

import s from './Nav.module.scss'

type NavProps = {
	courses: Course[]
	active: number
	setActive: (value: number) => void
}

const Nav: FC<NavProps> = ({ courses, active, setActive }) => {
	const uniqueTagsArray = Array.from(
		new Set(courses.flatMap(course => course.tags))
	)

	return (
		<nav className={s.nav}>
			<ul className={s.list}>
				{uniqueTagsArray.map((item, index) => (
					<li
						key={index}
						className={active === index ? s.active : ''}
						onClick={() => {
							setActive(index)
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
