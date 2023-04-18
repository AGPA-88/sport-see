import './welcome.css'

function Welcome({userInfos}) {
    return (
        <div className='welcome'>
            <div className='user-container'>
                <div>
                    Hello
                </div> 
                
                <div className='user-name'>
                    {userInfos.firstName}
                </div>
            </div>
            <div className='goals'>
                Congratulations! You reached yesterday's goal!
            </div>
        </div>

    )

}

export default Welcome;