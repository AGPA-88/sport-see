import Icon from '../Sidebar/Icons';
import { ReactComponent as ZenIcon } from '../../Icons/zen.svg';
import { ReactComponent as SwimIcon } from '../../Icons/swim.svg';
import { ReactComponent as BikeIcon } from '../../Icons/bike.svg';
import { ReactComponent as WeightIcon } from '../../Icons/weight.svg';

function Sidebar () {
    const iconMapping = {
        zen: <ZenIcon />,
        swim: <SwimIcon />,
        bike: <BikeIcon />,
        weight: <WeightIcon />
      };
    return(
        <div className="sidebar">
            <div className="icon-buttons">
                <div>
                    <Icon  icon={iconMapping['zen']}/>
                    <Icon  icon={iconMapping['swim']}/>
                    <Icon  icon={iconMapping['bike']}/>
                    <Icon  icon={iconMapping['weight']}/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;