/**
 * A functional component that displays a welcome message and congratulates the user for reaching their goals.
 * @param {string} name - The name of the user.
 * @returns {JSX.Element} - A JSX element that displays the welcome message and congratulatory note.
 */

import './welcome.css'

function Welcome({name}) {
    return (
        <div className='welcome'>
            <div className='user-container'>
                <div>
                    Hello
                </div> 
                
                <div className='user-name'>
                    {name}
                </div>
            </div>
            <div className='goals'>
                Congratulations! You reached yesterday's goal!
            </div>
        </div>

    )

}

export default Welcome;