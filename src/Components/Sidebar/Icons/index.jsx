/**
A component that displays an icon in the sidebar.
@param {Object} props - The props object of the component.
@param {JSX.Element} props.icon - The JSX element that represents the icon to be displayed.
@returns {JSX.Element} - A JSX element representing the sidebar icon.
@example
<SidebarIcons icon={<Icon />} />
*/

import './icons.css'

function SidebarIcons ({icon}){
    return(
    <div className='sidebar'>
            <div className="icon-buttons">
                    {icon}
            </div>
    </div>
    )
}

export default SidebarIcons;