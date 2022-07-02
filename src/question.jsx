import React, { useState } from "react";
import { BsFillPatchMinusFill, BsFillPatchPlusFill } from "react-icons/bs";
const Question = ({ info, title }) => {
    const [show, setShow] = useState(false);
    return (
        <div className="p-4 ring-1 ring-gray-400 mb-3 rounded-md shadow-md max-w-md">
            <div>
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="font-bold">{title}</h2>
                        <div>{show && <p>{info}</p>}</div>
                    </div>
                    <div className="flex items-center">
                        <button
                            className="md:hover:text-slate-400 mx-2 my-2 text-3xl md:text-base duration-500"
                            onClick={() => {
                                if (show) {
                                    setShow(false);
                                } else {
                                    setShow(true);
                                }
                            }}
                        >
                            {show ? (
                                <BsFillPatchMinusFill />
                            ) : (
                                <BsFillPatchPlusFill />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;
