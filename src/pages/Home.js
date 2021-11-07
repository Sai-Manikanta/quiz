import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

function Home() {
    const [isTestStarted, setIsTestStarted] = useState(false);
    const [count, setCount] = useState(null);

    const history = useHistory();

    useEffect(() => {
        let xInterval = setInterval(() => {
          if (count <= 0) {
            clearInterval(xInterval);
          } else {
            setCount(() => count - 1);        
          }
        },1000)
        return () => {
          clearInterval(xInterval);
        }
    }, [count])

    useEffect(() => {
        if(count === 0){
            history.replace('/quiz/1');
        }
    }, [count])

    return (
        <div className="h-screen flex border justify-center items-center">
            <div className="border p-8 pb-6 bg-blue-500 text-white rounded-md">
                {!isTestStarted ? (
                    <>
                        <h1 className="text-3xl">10 React Quetions</h1>
                        <p className="mt-2 text-xl">Only one attemt!</p>
                        <button onClick={() => {
                            setIsTestStarted(true);
                            setCount(5);
                        }} className="bg-white px-4 py-2 rounded-full text-blue-500 mt-2">
                            Start Test
                        </button>
                    </>
                ) : (
                    <>
                        <p className="text-4xl">You test will starts in</p>
                        <p className="mt-4 text-center text-3xl">
                            { count }
                        </p>
                        <p className="text-center text-2xl">Seconds</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default Home
