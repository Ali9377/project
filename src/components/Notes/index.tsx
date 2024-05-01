import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { User, handleDelete } from '../../store/slice/userSlice'
import classes from './Notes.module.scss'
import { word_one, word_two } from './words'

function Notes(): JSX.Element {
	const [openLetter, setOpenLetter] = useState<string>('')

	const dispatch = useAppDispatch()
	const users = useAppSelector<User[]>(state => state.user.users)

	const togglePopup = (letter: string): void => {
		setOpenLetter(openLetter === letter ? '' : letter)
	}
	const handleDeleteUser = (name: string): void => {
		dispatch(handleDelete(name))
	}
	const countUsersByFirstLetter = (letter: string): number => {
		return users.reduce((count, user) => {
			if (user.name.toLowerCase().startsWith(letter)) {
				count++
			}
			return count
		}, 0)
	}

	return (
		<div className={classes.notes__blocks}>
			<div>
				{word_one.map((item, index) => (
					<div className={classes.notes__block} key={index}>
						<div onClick={() => togglePopup(item)}>{item.toUpperCase()}</div>
						<div>
							<span>{countUsersByFirstLetter(item)}</span>
						</div>
						{openLetter === item && (
							<div
								className={classes.popup}
								style={{ display: 'inline-block' }}
							>
								{users
									.filter(user => user.name.toLowerCase().startsWith(item))
									.map((user, idx) => (
										<div key={idx} className={classes.block}>
											<div>
												Имя: {user.name}
												<button onClick={() => handleDeleteUser(user.name)}>
													x
												</button>
											</div>
											<div>Вакансия: {user.vacancy}</div>
											<div className={classes.block__last}>
												тел: {user.phone}
											</div>
										</div>
									))}
							</div>
						)}
					</div>
				))}
			</div>
			<div>
				{word_two.map((item, index) => (
					<div className={classes.notes__block} key={index}>
						<div onClick={() => togglePopup(item)}>{item.toUpperCase()}</div>
						<div>
							<span>{countUsersByFirstLetter(item)}</span>
						</div>
						{openLetter === item && (
							<div className={classes.popup}>
								{users
									.filter(user => user.name.toLowerCase().startsWith(item))
									.map((user, idx) => (
										<div key={idx} className={classes.block}>
											<div>
												Имя: {user.name}
												<button onClick={() => handleDeleteUser(user.name)}>
													x
												</button>
											</div>
											<div>Вакансия: {user.vacancy}</div>
											<div className={classes.block__last}>
												тел: {user.phone}
											</div>
										</div>
									))}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}

export default Notes
