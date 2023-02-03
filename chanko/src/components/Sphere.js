import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function Sphere(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  // Return the view, these are regular Threejs elements expressed in JS
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <sphereGeometry
          attach="geometry" args={[1, 16, 16]}
      />
      <meshStandardMaterial
        wireframe={props.wireframe}
        color={hovered ? "hotpink" : "yellow"}
      />
    </mesh>
  );
}

export default Sphere;