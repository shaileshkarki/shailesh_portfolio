import React from 'react';
import './ResumeSection.css';


class ResumeSection extends React.Component {
    state = {
        panelStatus: "hide"
    }
  
    togglePanel = ()=> {
        let currentState = this.state.panelStatus
        this.setState({
            panelStatus: (currentState == "hide")? "panel":"hide" 
        })
    }

    render(){
        let activeClass = (this.state.panelStatus=="hide")?"accordion":"accordion active";

        return (
            <div className="resume-section">
               <button className={activeClass}  onClick={this.togglePanel}>{this.props.heading}</button>
                <div className={this.state.panelStatus}>
                    <p>{this.props.content}</p>
                </div> 
            </div>
        )
    }
}

export default ResumeSection;
