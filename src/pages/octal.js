import React from "react";
import './style.css';

class Octal extends React.Component{
    constructor() {
        super();
        this.state = {
            oktal: "",
            konversi: "",
            hasil: "",
        };
    }

    changeState = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    
    hasilOctal = (e) => {
        e.preventDefault();
        let oktal = this.state.oktal;
        let konversi = this.state.konversi;

        let bil = Number(oktal);
        let dcml = parseInt(bil, 8);
        let jumlah;

        if (konversi === "biner") {
            jumlah = dcml.toString(2);
        } else if (konversi === "desimal") {
            jumlah = dcml;
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
                <h3 className="judul">Konversi Octal</h3>
                <form onSubmit={this.hasilOctal}>
                    <div className="sub">
                        <p>Octal</p>
                    </div>
                    <div className="form">
                        <input className="form-control" name="oktal" value={this.state.oktal} onChange={this.changeState} />
                    </div>
                    <div className="sub">
                        <p>Conversion Options</p>
                    </div>
                    <div className="form">
                        <select className="form-select" name="konversi" aria-label="Default select example" onChange={this.changeState} required>
                            <option></option>
                            <option value="biner">Biner</option>
                            <option value="desimal">Decimal</option>
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

export default Octal;