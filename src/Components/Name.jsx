
function Welcome({userInfos}) {
    console.log(userInfos);
    return (
        <div className='welcome'>
            <div className='user-name'>
                Hello {userInfos.firstName}
            </div>
            <div>
                Congratulations! You reached yesterday's goal!
            </div>
        </div>

    )

}

export default Welcome;