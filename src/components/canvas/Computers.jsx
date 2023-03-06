import { Suspense, useEffect, useState } from "react";

//3DMODELS
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../Loader";

const Computers = () => {
  //Buscar documentacion three y fiber.
  //Import 3D MODEL
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    //Creamos una luz para poder ver el objeto.
    <mesh>
      //Luz General.
      <hemisphereLight intensity={0.15} groundColor="black" />
      //Luz Especifica.
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      //Le pasamos el objeto y lo tuneamos, le damos escala y posición.
      <primitive
        object={computer.scene}
        scale={0.75}
        //XYZ
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

//Para verlo creamos un Canvas dónde poner la cámara, la luz y el objeto.

const ComputersCanvas = () => {
  return (
    <Canvas
      //Situamos el Canvas y la Cámara.
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      //Suspense es "Cargando" mientras se renderiza nuestro modelo.
      <Suspense fallback={<CanvasLoader />}>
        //Mover el Modelo.
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
