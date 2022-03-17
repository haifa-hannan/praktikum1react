import React from "react";
import './style.css'

export default class Biner extends React.Component {
  constructor() {
    super();
    this.state = {
      biner: "",
      konversi: "",
      hasil: "",
    };
  }

  changeState = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  hasilBiner = (e) => {
    e.preventDefault();
    let biner = this.state.biner;
    let konversi = this.state.konversi;

    let bil = Number(biner);
    let dcml = parseInt(bil, 2);
    let jumlah;

    if (konversi === "oktal") {
      jumlah = dcml.toString(8);
    } else if (konversi === "desimal") {
      jumlah = dcml;
    } else if (konversi === "hexadesimal") {
      jumlah = dcml.toString(16).toUpperCase();
    }

    this.setState({
      hasil: jumlah,
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="judul">Konversi Biner</h3>
        <form onSubmit={this.hasilBiner}>
            <div className="sub">
                <p>Binary</p>
            </div>
            <div className="form">
                <input className="form-control" name="biner"  value={this.state.biner} onChange={this.changeState} />
            </div>
            <div className="sub">
                <p>Conversion Options</p>
            </div>
            <div className="form">
                <select className="form-select" name="konversi" aria-label="Default select example" onChange={this.changeState} required>
                    <option></option>
                    <option value="oktal">Octal</option>
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