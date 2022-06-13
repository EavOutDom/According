import React, { useState } from "react";
import { BsFillPatchMinusFill, BsFillPatchPlusFill } from "react-icons/bs";
const Question = ({ info, title }) => {
    const [show, setShow] = useState(false);
    return (
        <div className="py-4 p-6 ring-1 ring-gray-400 mb-3 rounded-md shadow-md max-w-md">
            <div>
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="font-bold">{title}</h2>
                    </div>
                    <div className="flex items-cent ">
                        <button
                        className="hover:text-slate-400"
                            onClick={() => {
                                if (show) {
                                    setShow(false);
                                } else {
                                    setShow(true);
                                }
                            }}
                        >
                           {show ? <BsFillPatchMinusFill /> : <BsFillPatchPlusFill/>} 
                        </button>
                    </div>
                </div>
                <div>{show && <p>{info}</p>}</div>
            </div>
        </div>
    );
};

export default Question;
