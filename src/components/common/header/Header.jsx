import './header.scss'

function Header({ active, setActive }) {
    return (
		<div className="header">
			<div className="header__content">
				<div className="logo">VINH TRƯƠNG</div>
				<div
					className={ `menu-toggle ${active ? 'active' : ''}` }
					onClick={ () => setActive(!active) }
				>
					<div className={ `line first ${active ? 'active' : ''}` }></div>
					<div className={ `line second ${active ? 'active' : ''}` }></div>
					<div className={ `line third ${active ? 'active' : ''}` }></div>
				</div>
			</div>
		</div>
    )
}

export default Header