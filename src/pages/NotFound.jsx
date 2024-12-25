import { Canvas } from "@react-three/fiber";
import { Fox } from "../models";
import { Suspense } from "react";
import { Loader } from "../components";

const NotFound = () => {
    return (
    <section className='relative flex lg:flex-row flex-col max-container'>

        <div className='flex-1 min-w-[50%] flex flex-col'>
            <h1 className='head-text'>404</h1>

            <h1 className="text-4xl font-bold text-red-600"> I coudn't find what you want</h1>
            <a href="/" className="mt-4 text-blue-500 underline">
            Let's Go Back Home
            </a>
            
        </div>
        
        <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
            <Canvas
            camera={{
                position: [0, 0, 5],
                fov: 75,
                near: 0.1,
                far: 1000,
            }}
            >
                <directionalLight position={[0, 0, 1]} intensity={2.5} />
                <ambientLight intensity={1} />
                <pointLight position={[5, 10, 0]} intensity={2} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={2}
                />

                <Suspense fallback={<Loader />}>
                    <Fox
                    currentAnimation={"walk"}
                    position={[0.5, 0.35, 0]}
                    rotation={[12.629, -0.6, 0]}
                    scale={[0.5, 0.5, 0.5]}
                    />
                </Suspense>
            </Canvas>
        </div>
    </section>
    );
  };
  
  export default NotFound;
  