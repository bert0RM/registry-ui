import './App.css';

import * as Slider from '@radix-ui/react-slider';

import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className="btn">Button</button>
        <button className="btn">Bruh</button>
        <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <form>
          <Slider.Root
            className="relative flex items-center select-none touch-none w-[200px] h-5"
            defaultValue={[50]}
            max={100}
            step={1}
          >
            <Slider.Track className="bg-blackA7 relative grow rounded-full h-[3px]">
              <Slider.Range className="absolute bg-white rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb
              className="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA4 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA5"
              aria-label="Volume"
            />
          </Slider.Root>
        </form>
      </div>
      </header>
    </div>
  );
}

export default App;
