import PropTypes from 'prop-types'
//import Button from './Button'

 const MainBody = ({title}) => 
 {	
	return(
		<header className = 'mainBody'>
			<h1>{title}</h1>
		</header>
	)
}

MainBody.defaultProps =
{
	title: 'Home Page',
}

MainBody.propTypes = 
{
	title: PropTypes.string.isRequired,
}

export default MainBody