
import React, { useState} from 'react';
import s from './App.module.css'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';



export const App =() =>{
 const [good, setGood]= useState(0)
 const [neutral, setNeutral]= useState(0)
 const [bad, setBad]= useState(0)

      const onClickFeedback = e => {
        const eventBtn =e.target.name;
       
          switch (eventBtn){
          case 'good': setGood(good+1);
            break;
          case 'neutral': setNeutral(neutral+1);
            break;
          case 'bad': setBad(bad+1);
            break;
          default:
            return;
  }
};

  const countTotalFeedback= ()=> {return good + neutral + bad};
      
        
  const countPositiveFeedbackPercentage=()=>{
          return Math.round((good* 100) / countTotalFeedback()) 
         
        }
      
       


  return(
          <div className={s.container}>
          <Section title="Please leave feedback">
            
            <FeedbackOptions 
             
              options = {Object.keys({good, neutral, bad})}
              onLeaveFeedback={onClickFeedback}/>
          </Section>
    
          <Section title="Statistics">
            {countTotalFeedback() ?
            (
              <Statistics 
              good={good} 
              neutral={neutral} 
              bad={bad} 
              total={countTotalFeedback()} 
              positivePercentage={countPositiveFeedbackPercentage()}/>
              )
              : (<Notification message="There is no feedback"/>)
               } 
          </Section>
          </div>
          )

}







// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }

//   onClickFeedback = e => {
//     const value = e.currentTarget.textContent;
//     this.setState({
//       [value]: this.state[value] + 1,
//     });
//   };
  
//   countTotalFeedback() {
//     const {good, neutral, bad} = this.state
//     return good + neutral + bad;
//   }
//   countPositiveFeedbackPercentage(){
//     return Math.round(((this.state.good) / this.countTotalFeedback()) * 100)
   
//   }
  
 

//   render () {
//       const {good, neutral, bad} = this.state;
//       const total = this.countTotalFeedback();
   
//       return (
//       <div className={s.container}>
//       <Section title="Please leave feedback">
        
//         <FeedbackOptions 
//           // options={['good', 'neutral', 'bad']} 
//           options = {Object.keys(this.state)}
                  
//           onLeaveFeedback={this.onClickFeedback}/>
//       </Section>

//       <Section title="Statistics">
//         {total ?
//         (<Statistics 
//           good={good} 
//           neutral={neutral} 
//           bad={bad} 
//           total={total} 
//           positivePercentage={this.countPositiveFeedbackPercentage()}/>)
//           : (<Notification message="There is no feedback"/>)
//           }
//       </Section>
//       </div>
//       )
//   };
// };