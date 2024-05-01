// Form.tsx
import { useRef, useState } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { handleAdd, handleReset } from '../../store/slice/userSlice'
import Notes from '../Notes'
import SearchModal from '../Search/modal'
import classes from './Form.module.scss'

const Form: React.FC = (): JSX.Element => {
	const nameRef = useRef<HTMLInputElement>(null)
	const vacancyRef = useRef<HTMLInputElement>(null)
	const phoneRef = useRef<HTMLInputElement>(null)
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const dispatch = useAppDispatch()

	const handleAddClick = (): void => {
		const name = nameRef.current?.value || ''
		const vacancy = vacancyRef.current?.value || ''
		const phone = phoneRef.current?.value || ''
		dispatch(handleAdd({ name, vacancy, phone }))
	}

	return (
		<>
			<form className={classes.form}>
				<div className={classes.item}>
					<input
						type='text'
						id={classes.name}
						placeholder='Name'
						ref={nameRef}
					/>
				</div>
				<div className={classes.item}>
					<input
						type='text'
						ref={vacancyRef}
						id={classes.vacancy}
						placeholder='Vacancy'
					/>
				</div>
				<div className={classes.item}>
					<input
						type='tel'
						ref={phoneRef}
						id={classes.number}
						placeholder='Phone +X XXX XXX XX XX'
					/>
				</div>
				<div className={classes.item}>
					<button type='button' onClick={handleAddClick}>
						ADD
					</button>
				</div>
				<div className={classes.item}>
					<button type='button' onClick={() => dispatch(handleReset())}>
						Clear List
					</button>
				</div>
				<div className={classes.item}>
					<button type='button' onClick={() => setIsOpen(true)}>
						Search
					</button>
				</div>
			</form>
			<Notes />
			<SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
		</>
	)
}

export default Form
