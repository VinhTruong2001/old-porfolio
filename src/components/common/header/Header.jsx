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
					<div class={ `line first ${active ? 'active' : ''}` }></div>
					<div class={ `line second ${active ? 'active' : ''}` }></div>
					<div class={ `line third ${active ? 'active' : ''}` }></div>
				</div>
			</div>
		</div>
    )
}

export default Header