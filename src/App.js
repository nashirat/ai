import React from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import map from './map.gif';

function App() {
  return (
    <div className="App">
      <div class="Text">
        <p class="tittle">Dijkstra Visualizer & Use Case</p>
      </div>
      <PathfindingVisualizer></PathfindingVisualizer>
      <div className="usecase">
        <p class="expTittle">
          Use Case
        </p>
        <p class="exp">
          Dengan menggunakan grid, banyak yang dapat divisualisasikan dari kegunaan Dijkstra. Dibawah adalah contoh penggunaan dengan grid yang dibentuk seperti peta, seperti yang digunakan oleh aplikasi Maps yang ada. Anda dapat membentuk sendiri wall pada Visualizer diatas.
        </p>
        <img id="map" src={map} alt="loading..." />
      </div>
    </div>
  );
}

export default App;
