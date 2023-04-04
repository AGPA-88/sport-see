function SidebarIcons ({icon}){
    return(
    <div className='sidebar' style={{display: 'table', padding: 8, backgroundColor: 'black'}}>
            <div className="icon-buttons">
                <div>
                    {icon}
                </div>
            </div>
    </div>
    )
}

export default SidebarIcons;