import React from 'react';

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  ClickOpen() {
    this.setState({isModalOpen: true});
  }
   
  ClickClose(){
    this.setState({isModalOpen:false});
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-lesson'>
              <p>{this.props.a}</p>
            </div>
            <div className='btn-close'>
                <button
                className='modal-close-btn'
                onClick={()=>{this.ClickClose()}}
                >
                Tutup
                </button>
            </div>
            
          </div>
        </div>
      );
    }

    return (
      <div className='lesson-card'>
        <div
          className='lesson-item'
          onClick={() => {this.ClickOpen()}}
        >
          {this.props.name}
        </div>
        {modal}
      </div>
    );
  }
}

export default Lesson;