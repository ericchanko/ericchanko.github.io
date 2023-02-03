import "./App.css";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/Sphere";

function App() {
  return (
    <>
      <section className='App-header'>
        <Canvas>
           <pointLight position={[10, 10, 10]} />
           <ambientLight />
          <Sphere position={[-1.2, 0, 0]} />
        </Canvas>
      </section>
    </>
  );
}

export default App;