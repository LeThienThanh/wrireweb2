import React from 'react'

import Content from './content'

import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

const Read = () => {

  const [open, setOpen] = React.useState(false);
  
  const handleClickToOpen = () => {
    setOpen(true);
  };
  
  const handleToClose = () => {
    setOpen(false);
  };

  return (
    
  <div className='flex-col w-fit h-fit '>
    
    <div className='flex items-center'>

      <div className='mx-[150px] w-full'>
        <div className='text-[36px] text-center w-full bg-transparent'>
          Chapter 1
        </div>
        <div className='text-[16px] w-full text-center'>Chapter</div>
      </div>
      
      <div className='bg-[#13A846] rounded-[100px] px-[14px] mx-[10px] w-[100px] h-[60px] '>
        <button className='text-[#ffffff] text-[15px]'   onClick={handleClickToOpen}>
                Add Comment
        </button>
      </div> 

    </div>

    <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{"Write your comment"}</DialogTitle>
        <DialogContent>
          <textarea className='border-[1px] rounded p-[3px] w-[300px]'>
          </textarea>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToClose} 
                  color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    <div className='flex w-full'>
      <Content/>
      <div className='bg-[#fff] w-[160px] h-[500px] rounded-lg ml-[10px] shadow-sm border-[2px]'>{'Comment'}</div>
    </div>

    <div className='flex w-full h-fit mt-[10px] ml-[200px] pl-[150px]'>
      <div className='bg-[#6731DC] rounded-[100px] px-[14px] py-[2px] mx-[10px]'>
        <button className='mx-3 text-[#ffffff]'  onClick={()=> {}}>
                Approve
                
        </button>
        
      </div>   
      <div className='bg-[#6731DC] rounded-[100px] px-[14px] py-[2px] mx-[10px]'>
        <button className='mx-3 text-[#ffffff]'  onClick={() => {}}>
                Decline
        </button>
      </div>   
    </div>
  </div>
  )
}

export default Read