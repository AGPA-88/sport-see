/**
A component that displays nutrient data in square boxes with icons.
@component
@param {Object} props - The component's props.
@param {Object} props.keyData - An object containing nutrient data.
@return {JSX.Element} - A JSX element representing a collection of nutrient squares.
@example
<Squares keyData={keyData} />
*/

import Icon from '../Icons/';
import { ReactComponent as CaloriesIcon } from '../../Icons/calories.svg';
import { ReactComponent as ProteinsIcon } from '../../Icons/proteins.svg';
import { ReactComponent as CarbsIcon } from '../../Icons/carbs.svg';
import { ReactComponent as LipidsIcon } from '../../Icons/lipids.svg';


function Squares ({keyData}) {
    const iconMapping = {
      calories: <CaloriesIcon />,
      proteins: <ProteinsIcon />,
      carbs: <CarbsIcon />,
      lipids: <LipidsIcon />
    };

/**
* An object mapping nutrient names to their respective icons.
*
* @type {Object}
* @property {JSX.Element} calories - The calories icon.
* @property {JSX.Element} proteins - The proteins icon.
* @property {JSX.Element} carbs - The carbs icon.
* @property {JSX.Element} lipids - The lipids icon.
*/
    
    const colors = {
        calories: '#FF0000', //red
        proteins: '#0000FF', //blue
        carbs: '#FFFF00', //yellow
        lipids: '#FFC0CB' //pink
      };
      
    return(
        <div className="key-data">
            <div className="square">
                <div>
                    <Icon color={colors.calories} units='kCal' unit_name='Calories' value={keyData.calorieCount} icon={iconMapping['calories']}/>
                    <Icon color={colors.proteins} units='g' unit_name='Proteins' value={keyData.proteinCount} icon={iconMapping['proteins']}/>
                    <Icon color={colors.carbs} units='g' unit_name='Carbs' value={keyData.carbohydrateCount} icon={iconMapping['carbs']}/>
                    <Icon color={colors.lipids} units='g' unit_name='Lipids' value={keyData.lipidCount} icon={iconMapping['lipids']}/>
                </div>
            </div>

        </div>
    )
}

export default Squares;