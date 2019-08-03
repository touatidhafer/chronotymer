import React,{Component} from 'react';
import './convert.css';
class Convert extends Component {
    constructor() {
        super()
        this.state = {
          value: '',
         
         
        }
      } 
      
      timer = (e) => {
        this.setState({
          value: e.target.value
          
        })
      }  
        toTime = (props) => {
        
        var  seconds=parseInt((props/ 1000) % 60),
             minutes= parseInt((props / (1000 * 60)) % 60),
             hours =parseInt((props/ (1000 * 60 * 60)) % 24);

             hours = (hours < 10) ? "0" + hours : hours;
             minutes = (minutes < 10) ? "0" + minutes : minutes;
             seconds = (seconds < 10) ? "0" + seconds : seconds;

          return hours + " : " + minutes + " : " + seconds;
          
         }   
       
       
         render() { 
          let x = this.state.value 
        
        return ( 
                  <div className='Convert'>
                    
                      <h1>Number to convert!</h1>
                      <input type="text" name="name"
                          value={this.state.value}
                            onChange={this.timer} />
                            <div className='result'>
                               <p> {this.toTime(x)} </p>
                              
                            </div>
                            <div className="description">
                                    <p>Hours</p>
                                   <p>Minutes</p>
                                   <p>Seconds</p>
                                </div>
                    

                    </div>
                 );
    }
}
 
export default Convert;