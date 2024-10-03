import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';


function LightSwitch() {
  const { themeName, setThemeName } = useTheme(); 
function themeSwitch(){
  if (themeName == 'day') {
    setThemeName('night')
  } else {
    setThemeName('day')
  }
}
  
  return (
    <div className={`light-switch ${themeName}`} onClick={themeSwitch}>
      <div className="on">DAY</div>
      <div className="off">NIGHT</div>
    </div>
  );
}

export default LightSwitch;
