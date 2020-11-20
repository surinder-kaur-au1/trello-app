import React from 'react';
import Icon from '@material-ui/core/Icon';
import TextareaAutosize from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import { NoEncryption } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
class TrelloActionButton extends React.Component {

        state = {
            formOpen : false
        }
    renderAddButton = () =>{
        const {List} = this.props;
        const buttonText = List ? "Add another list": "Add another card";
        const buttonTextOpacity = List? 1 : 0.5;
        const buttonTextColor = List? "white": "inherit";
        const buttonTextBackground= List? "rgba(0, 0, 0, 1.5)": "inherit";
    return (
        
        <div onclick = {this.openForm} style= {{...styles.openForButtonGroup,
             opacity: buttonTextOpacity,
            color: buttonTextColor,
            backgroundColor: buttonTextBackground,
        }}>
            <Icon>add</Icon>
            <p>{buttonText}</p>
        </div>
    
    )
    }

    

    openForm = () =>{
        this.setState({
            formOpen: true
        })
    }

    closeForm= (e)=>{
        this.setState({
            formOpen: false
        })
}

    renderForm=()=> {
        const {list} = this.props;
        const placeholder = list? "Enter list title...": "Enter titile for the card";
        
        const buttonTitle = list? "Add List": "Add Card";
        return <div>
                <Card>
                    <TextareaAutosize placeholder={placeholder} autoFocus onBlur={this.closeForm} 
                    ovalue= {this.state.text} onChange={ this.handleInput}
                    style = {{
                        resize: "none",
                        width: "100%",
                        overflow: "hidden",
                        outline: "none",
                        border: "none"
                    }}/>
                </Card>
                <div style= {styles.formButtonGroup}>
                <Button variant="contained" style={{color: "white", backgroundColor: "#5aac44"}}>{buttonTitle}{" "}</Button>
                </div>
        </div>
    }


    render() {
        return this.state.formOpen? this.renderForm: this.renderAddButton();
    }

}
    const styles= {
        openForButtonGroup : {
            display: "flex",
            alignItems: "center",
            cursor :"pointer",
            borderRadius:3,
            height: 36,
            width: 200,
            paddingLeft: 10
        },
        formButtonGroup : {
            marginTop: 8,
            display: "flex",
            alignItems: "center"
        }
    }

export default TrelloActionButton;