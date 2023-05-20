import { PharagraphBold } from "../GeneralComponents/PharagraphBold";
import { PharagraphLight } from "../GeneralComponents/PharagraphLight";
import React from 'react'



export const StayProductive = () =>{

    return(
        <div className="stayProductive-div">
            <div className="stayProductive-div-img">
                <img className="stayProductive-img" src="./public/images/illustration-stay-productive.png" alt=""/>
            </div>
            <div className="stayProductive-main">
                <div className="stayProductive-title">
                    <PharagraphBold text="Stay productive, wherever you are"/>
                </div>
                <div className="stayProductive-text">
                <PharagraphLight text="Never let location be an issue when accessing your files. Fylo has you covered for all of your file storafe needs"/>
                <PharagraphLight text="Securely share files and folders with friends, family and collegues for live collaboration. No email attachements required."/>
                </div>
               
                <span className="stayProductive-span_hipervinculo"><a className="stayProductive-hipervinculo" href="">See how Fylo works <img src="./public/icons/icon-arrow.svg" alt="" /></a></span>
            </div> 
        </div>
       
    );
};
