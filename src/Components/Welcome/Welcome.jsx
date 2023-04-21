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