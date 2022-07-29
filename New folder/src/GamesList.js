import React from 'react';
import Button from 'react-bootstrap/Button';

function GamesList() {
  return (
    <div className='conatiner mt-4'>
        <h1 className='text-center'>Follow your favourite Games</h1>
        <div className="container ms-400">
        <div className="container mx-auto pt-4 gap-4">
            <div className="row space-between">
                <div className="col-1 box">1</div>
                <div className="col-1 box">2</div>
                <div className="col-1 box">3</div>
                <div className="col-1 box">4</div>
                <div className="col-1 box">5</div>
                <div className="col-1 box" >6</div>
            </div>
            <div className="row space-between pt-4">
                <div className="col-1 box" >7</div>
                <div className="col-1 box" >8</div>
                <div className="col-1 box" >9</div>
                <div className="col-1 box" >10</div>
                <div className="col-1 box" >11</div>
                <div className="col-1 box" >12</div>
            </div>
            <div className="container mx-auto p-4" style={{width: 200}}>
              <Button variant="outline-secondary" className='d-flex justify-content-center m-4'>All Games</Button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default GamesList