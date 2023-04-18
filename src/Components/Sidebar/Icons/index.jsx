import './icons.css'

function SidebarIcons ({icon}){
    return(
    <div className='sidebar'>
            <div className="icon-buttons">
                <div>
                    {icon}
                </div>
            </div>
    </div>
    )
}

export default SidebarIcons;