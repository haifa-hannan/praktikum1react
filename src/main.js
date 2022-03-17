import React from "react";
// import './App.css';
import Lesson from "./lesson";
import Bmi from "./pages/bmi";
import Hargaakhir from "./pages/hargaakhir";
import Cicilanbank from "./pages/cicilanbank";
import Biner from "./pages/biner";
import Octal from "./pages/octal";
import Decimal from "./pages/decimal";
import Hexadecimal from "./pages/hexadecimal";

class Main extends React.Component{
    render(){
        const lessonList =[
            {
                a: <Bmi/>,
                name: "BMI"
            },
            {
                a: <Hargaakhir/>,
                name: "Harga Akhir"
            },
            {
                a: <Cicilanbank/>,
                name: "Cicilan Bank"
            },
            {
                a: <Biner/>,
                name: "Konversi Biner"
            },
            {
                a: <Octal/>,
                name: "Konversi Octal"
            },
            {
                a: <Decimal/>,
                name: "Konversi Desimal"
            },
            {
                a: <Hexadecimal/>,
                name: "Konversi Hex"
            }
        ]
        return(
            <div className="Main">
                <div className="content">
                    <div className="container1">
                        <h1 className="header-content">CALCULATOR</h1>
                        {lessonList.map((lessonItem)=>{
                            return(
                                <Lesson
                                a={lessonItem.a}
                                name={lessonItem.name}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;