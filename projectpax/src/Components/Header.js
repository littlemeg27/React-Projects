import PropTypes from 'prop-types'
import Goldens from './Goldens'


const Header = ({title}) => 
 {	
	return(
		<header className = 'header'>
			<h1>{title}</h1>
			<Link to="./Goldens" className="btn btn-primary">Goldens</Link>
		</header>
	)
}


Header.propTypes = 
{
	title: PropTypes.string.isRequired,
}

export default Header