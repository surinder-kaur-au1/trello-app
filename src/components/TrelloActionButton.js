import { CardTravelSharp } from '@material-ui/icons';
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import TextareaAutosize from 'react-textarea-autosize';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addList } from '../actions';

const styles = {
    openFormButtonGroup:{
        display: 'flex',
        alignItem: 'center',
        curser: 'pointer',
        borderRadius: 2,
        height: 36,
        width: 272,
        paddingLeft:10
    },
    formButtonGroup: {
        marginTop: 8,
        display:'flex',
        alignItem: 'center'
    }
}
class TrelloActionButton extends Component {
        state ={
            formOpen : false
        };
    openForm =()=>{
            this.setState({
                formOpen: true
            })
    }
    renderForm =() => {
        const {list } = this.props
        const placeholder = list ? "Enter the list" : "Enter the title for card"
        const buttonText = list ? "Add list": "Add Card"
        return(
            <div>
                <Card style={{
                    minHeight: 85,
                    minWidth: 185,
                    padding: '8px 6px 2px'

                }}>
                    <TextareaAutosize  placeholder={placeholder} onBlur={this.closeForm} 
                    value= { this.state.text} onChange={this.handleInputChange}
                    style={{
                        resize: 'none',
                        width: '100%',
                        outline: 'none',
                        border:'none',
                        overflow: 'hidden',
                        padding: '8px 6px 2px'
                    }}
                    />

                    
                </Card>
                <div style={styles.formButtonGroup}><Button variant="contained" style={{color: 'white', backgroundColor:"#5aac44"}}>
                    {buttonText}{""}
                    </Button><Icon style={{marginLeft:8, cursor:'pointer'}}>close</Icon></div>
            </div>
        )
    }
    renderAddButton= ()=> {
      const  { list } = this.props

      const buttonText = list ? "Add another list": "Add another card";
      return(
          <div  onClick = {this.openForm} style = {styles.openFormButtonGroup}>
              <Icon>add</Icon>
               <p>{buttonText}</p>
          </div>
      );
    } 

    
    render() {
        return this.state.formOpen ? this.renderForm(): this.renderAddButton();
    }
}

export default connect()(TrelloActionButton); 