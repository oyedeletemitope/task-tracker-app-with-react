import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title, onAdd, showAdd}) => {
 
  return(

    <header className='header'>
      <h1>{title}</h1>
     <Button color={showAdd ?'green':'blue'} text={showAdd ?'close' :'add'} onClick={onAdd}/> 
    </header>
  )
}
Header.defaultProps = {
  title:"task tracker",
}

Header.propTypes = {
  title:PropTypes.string,
}

export default Header