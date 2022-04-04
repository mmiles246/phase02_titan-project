import {Link} from 'react-router-dom'

function IntroScreen() {

    return (
        <div>
            <Link to='/home'>
                <img src="/wallMaria.jpeg" alt='Welcome to wall maria' />
            </Link>
        </div>
    )
}

export default IntroScreen;

