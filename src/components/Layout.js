import React, { useEffect, useState } from "react";

const Layout = () => {

    const [elements, setElements] = useState(0)
    const addBentoElement = () => {
        setElements(elements + 1)
    }

    useEffect(() => {
    }, [elements])

    const addElement = (col,row) => {
        return (
            <div onClick={addBentoElement} className={`col-span-${col} row-span-${row} border-2 bg-sky-100 border-dashed cursor-pointer border-sky-500 rounded-md flex items-center justify-center`}>
                <p>Click To Add Bento Element</p>
            </div>
        )
    }

    const element = (col,row) => {
        console.log(col,row)
        return (
            <div className={`col-span-${col} row-span-${row} bg-pink-200  flex items-center justify-center border-2 border-rose-500 rounded-lg`}>
                <p>BENTO</p>
            </div>
        )
    }
        

    return (
        <div>
            <div className="flex h-screen w-screen items-center justify-center ">
                <div className="grid h-screen w-screen gap-4 p-2 grid-cols-4 grid-rows-4 ">
                    {elements === 0 && addElement(4,4)}  
                    {elements === 1 &&
                        <>
                            {element(2,4)}
                            {addElement(2,4)}
                        </>
                    }  
                    {elements === 2 &&
                        <>
                            {element(2,2)}
                            {element(2,2)}
                            {addElement(4,2)}
                            
                        </>
                    } 
                    {elements === 3 &&
                        <>
                            {element(3,2)}
                            {element(1,2)}
                            {element(1,2)}
                            {addElement(3,2)}
                        </>
                    } 
                    {elements === 4 &&
                        <>
                            {element(2,1)}
                            {element(2,1)}
                            {element(4,2)}
                            {element(2,1)}
                            {addElement(2,1)}
                        </>
                    } 
                    {elements === 5 &&
                        <>
                            {element(2,1)}
                            {element(2,1)}
                            {element(1,4)}
                            {element(2,2)}
                            {element(1,2)}
                            {addElement(3,2)}
                        </>
                    } 
                    
                    {elements === 6 &&
                        <>
                            {element(2,1)}
                            {element(2,1)}
                            {element(1,2)}
                            {element(2,2)}
                            {element(1,2)}
                            {element(2,2)}
                            {addElement(2,2)}
                        </>
                    } 
                    {elements === 7 &&
                        <>
                            {element(2,1)}
                            {element(2,1)}
                            {element(1,2)}
                            {element(2,2)}
                            {element(1,2)}
                            {element(2,2)}
                            {element(2,2)}
                        </>
                    } 
                </div>
            </div>
        </div>
    );
}

export default Layout;  