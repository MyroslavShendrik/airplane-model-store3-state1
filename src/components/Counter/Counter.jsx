import React, { Component } from "react";
import css from "@/components/App/App.module.css";

// export function Counter() {
//   return (
//     <div className={css.counter}>
//       <span className={css.counterValue}>0</span>
//       <div className={css.counterControls}>
//         <button className={css.buttonIncrement}>+ 1</button>
//         <button className={css.buttonDecrement}>- 1</button>
//       </div>
//     </div>
//   );
// }

export class Counter extends Component {
         state = {
     value: 0,
      };
       handleIncrement = () => {
          console.log("+1");
        //   this.setState({ value: 9 });
                this.setState(prevState => {
       return {
           value: prevState.value + 1,
       };
    });
  };

handleDecrement =() => {
    console.log("-1")
    this.setState(prevState => {
return {
           value: prevState.value - 1,
       };
        
    })
}


  render() {
    return (
      <div className={css.counter}>
        <span className={css.counterValue}>{this.state.value}</span>
        <div className={css.counterControls}>
          <button 
           className={css.buttonIncrement}
        //    onClick={() => { console.log("+1") }}
           onClick={this.handleIncrement}
          >
            + 1
           </button>
          <button
           className={css.buttonDecrement}
           onClick={this.handleDecrement}
           >
            - 1
            </button>
        </div>
      </div>
    );
  }
}
