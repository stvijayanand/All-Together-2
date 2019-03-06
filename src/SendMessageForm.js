import React from "react"

const isDisabled = (e) => {
    return true;
  };

const SendMessageForm = props => {
    return(<div>
        <form className="input-group">
          <input type="text" className="form-control" placeholder="Enter your message..." />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={isDisabled.call(null)}>
              SEND
            </button>
          </div>
        </form>
      </div>);
}

// class SendMessageForm extends Component{
    
//     isDisabled = () => {
//         return true;
//     }

//     render(){
//         return(<div>
//             <form className="input-group">
//               <input type="text" className="form-control" placeholder="Enter your message..." />
//               <div className="input-group-append">
//                 <button className="btn submit-button" disabled={this.isDisabled()}>
//                   SEND
//                 </button>
//               </div>
//             </form>
//           </div>);
//     }
// }

export default SendMessageForm