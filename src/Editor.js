import React, { useEffect, useState, useRef } from 'react';
import { fabric } from 'fabric';
import './Editor.css';
import { useLocation } from 'react-router';

const Editor = props => {
    const [canvas, setCanvas] = useState('');
    const [caption, setCaption] = useState('');
    const location = useLocation(); 

    useEffect(() => {
      setCanvas(initCanvas());
    }, [location]);

    const onHandleChange = e => {
        setCaption(e.target.value);
    }

    const initCanvas = () => (
      new fabric.Canvas('canvas', {
        height: 400,
        width: 600,
        backgroundColor: 'lightblue'
      })
    )


    const addRect = canvi => {
        const rect = new fabric.Rect({
          height: 280,
          width: 200,
          fill: 'yellow'
        });
        canvi.add(rect);
        canvi.renderAll();
      }

      const addCircle = canvi => {
        const circle = new fabric.Circle({
          radius: 50,
          fill: 'yellow'
        });
        canvi.add(circle);
        canvi.renderAll();
      }
    
      const addTriangle = canvi => {
        const triangle = new fabric.Triangle({
          cornerSize: 20,          
          fill: 'yellow'
        });
        canvi.add(triangle);
        canvi.renderAll();
      }

      const addImage = canvi => {
        fabric.Image.fromURL(location.state, img => {
            img.scale(0.5);
            img.crossOrigin = "Anonymous";
            img.src = location.state;
            console.log("This is image -- ", location.state, img.crossOrigin);
            canvi.add(img);
            
          }, {crossOrigin: 'Anonymous'});
          canvi.renderAll();
      }

      const addText = canvi => {
        const text = new fabric.Text(caption, { left: 100, top: 100, fontFamily: 'Impact', stroke: '#c3bfbf', strokeWidth: 3 });
        canvi.add(text);
        canvi.renderAll();
      }

      const print = () => {
        const dataURI = canvas.toDataURL("image/png");
        //For IE/Edge
        if(window.navigator.msSaveBlob) {
          window.navigator.msSaveBlob(canvas.msToBlob(), "captioned-image.png");
        } else {
          const a = document.createElement("a");
          document.body.appendChild(a);
          a.href = dataURI;
          a.download = "captioned-image.jpeg";
          a.click();
          document.body.removeChild(a);
        }
      }
    

    return(
        <> <div className="pa2 tc">
            <input
                className='tc pa3 w-50 ba b--light-gray bg-washed-green'
                type='text'
                placeholder='Enter Caption'
                onChange = {onHandleChange}            
            />
            <br /><br />
            <button onClick={() => addText(canvas)}>Add Caption</button>
            </div>
            <br />
            <div className='editor'>
                <div className="item">
                    <canvas id="canvas" />
                </div>
                <div className="shadow-5 br4 bg-light-gray button-manage">
                    <button  onClick={() => addRect(canvas)}>Rectangle</button>
                    <button  onClick={() => addCircle(canvas)}>Circle</button>
                    <button  onClick={() => addTriangle(canvas)}>Triangle</button>
                    <button  onClick={() => addImage(canvas)}>Image</button>
                    <button onClick={print}>Download</button>
                </div>
                
            </div>
            <br /><br /><br /><br />
      </>
    );
  }

export default Editor;