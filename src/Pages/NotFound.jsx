import {Link} from 'react-router-dom'
import '../ComponentCSS/NotFound.css'
const  NotFound = () => {
  return (
    <div className='found-container'>
        <img src="../images/NotFound.gif" alt="not found" className='image' />
        <div className="title-not-found">
      <h1 className="title-text">oooooops!</h1>
      <p className="subTitle"> Page Not Found</p>
      <div className="button-not-found">
        <Link to="/" className="btn-not">Go Back</Link>
        </div>
    </div>
    </div>
  )
}

export default  NotFound