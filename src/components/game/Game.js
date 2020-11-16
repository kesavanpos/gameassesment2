import Team from "../team/Team";
import barca from "../../assets/barca.png";
import madrid from "../../assets/madrid.png"

/* Game component
props.venue : venue name to be displayed on game component
*/
export default function Game(props){
    return (
      <div style={{display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center'}}>
        <h1>Welcome to {props.venue}</h1>
        <div style={{display: 'flex', flexDirection: 'row', gap: '12px'}}>
          <Team name="FC.Barcelona" logo={barca}/>
          <Team name="Real Madrid" logo={madrid} />
        </div>
      </div>
    )
  }