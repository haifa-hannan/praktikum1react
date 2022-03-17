import React from "react";
import './style.css'

export default class Decimal extends React.Component{
    constructor() {
        super();
        this.state = {
          desimal: "",
          konversi: "",
          hasil: "",
        };
    }
    
    changeState = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
    };
    
    hasilDecimal = (e) => {
        e.preventDefault();
        let desimal = this.state.desimal;
        let konversi = this.state.konversi;
    
        let dcml = Number(desimal);
        let jumlah;
    
        if (konversi === "biner") {
          jumlah = dcml.toString(2);
        } else if (konversi === "oktal") {
          jumlah = dcml.toString(8);
        } else if (konversi === "hexadesimal") {
          jumlah = dcml.toString(16).toUpperCase();
        }
    
        this.setState({
          hasil: jumlah,
        });
    };
    render(){
        return(
            <div className="container">
                <h3 className="judul">Konversi Desimal</h3>
                <form onSubmit={this.hasilDecimal}>
                    <div className="sub">
                        <p>Desimal</p>
                    </div>
                    <div className="form">
                        <input className="form-control" name="desimal"  value={this.state.desimal} onChange={this.changeState} />
                    </div>
                    <div className="sub">
                        <p>Conversion Options</p>
                    </div>
                    <div className="form">
                        <select className="form-select" name="konversi" aria-label="Default select example" onChange={this.changeState} required>
                            <option></option>
                            <option value="biner">Biner</option>
                            <option value="oktal">Octal</option>
                            <option value="hexadesimal">Hexadecimal</option>
                        </select>
                    </div>
                    <div className="form">
                        <button type="submit" className="btn">
                        Hasil
                        </button>
                    </div>
                    <div className="form">
                        <p className="tampilhasil">{this.state.hasil}</p>
                    </div>
                    
                </form>
            </div>
        );
    }
}