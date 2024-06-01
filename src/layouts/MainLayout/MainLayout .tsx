import { FC, ReactNode } from 'react'

import s from './MainLayout.module.scss'

type MainLayoutProps = {
	children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<div className={s.wrapper}>
			<div className='content'>
				{/*<Nav handleMenu={() => setShowBurger(prevState => !prevState)} />*/}
				<div className={s.content}>{children}</div>
			</div>
		</div>
	)
}

export default MainLayout
