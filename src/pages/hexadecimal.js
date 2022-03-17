import React from "react";
import './style.css';

export default class Hexadecimal extends React.Component{
    constructor() {
        super();
        this.state = {
          hexadesimal: "",
          konversi: "",
          hasil: "",
        };
    }
    
    changeState = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
    };
    
    hasilHex = (e) => {
        e.preventDefault();
        let hexadesimal = this.state.hexadesimal;
        let konversi = this.state.konversi;
    
        let dcml = parseInt(hexadesimal, 16);
        let jumlah;
    
        if (konversi === "biner") {
          jumlah = dcml.toString(2);
        } else if (konversi === "oktal") {
          jumlah = dcml.toString(8);
        } else if (konversi === "desimal") {
          jumlah = dcml;
        }
    
        this.setState({
          hasil: jumlah,
        });
    };
    render(){
        return(
            <div className="container">
                <h3 className="judul">Konversi Hexadecimal</h3>
                <form onSubmit={this.hasilHex}>
                    <div className="sub">
                        <p>Hexadecimal</p>
                    </div>
                    <div className="form">
                        <input className="form-control" name="hexadesimal"  value={this.state.hexadesimal} onChange={this.changeState} />
                    </div>
                    <div className="sub">
                        <p>Conversion Options</p>
                    </div>
                    <div className="form">
                        <select className="form-select" name="konversi" aria-label="Default select example" onChange={this.changeState} required>
                            <option></option>
                            <option value="biner">Biner</option>
                            <option value="oktal">Octal</option>
                            <option value="desimal">Desimal</option>
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