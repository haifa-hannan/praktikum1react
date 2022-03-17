import React from "react";
import './style.css';

class Cicilanbank extends React.Component{
    constructor(){
        super()
        this.state={
            nominal: 0,
            bunga: 0,
            periode: 0,
            hasil: 0
        }
    }
    changeState = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    hasilBunga = (e) => {
        e.preventDefault()
        let nominal = this.state.nominal
        let bunga = this.state.bunga
        let periode = this.state.periode
        let jumlah;
        let hitungbunga = Number(nominal)*(Number(bunga)/100)

        if (periode === "1 Bulan"){
            jumlah = (Number(nominal)+hitungbunga)/1
        } else if (periode === "2 Bulan"){
            jumlah = (Number(nominal)+hitungbunga)/2
        } else if (periode === "3 Bulan"){
            jumlah = (Number(nominal)+hitungbunga)/3
        } else if (periode === "5 Bulan"){
            jumlah = (Number(nominal)+hitungbunga)/5
        } else if (periode === "10 Bulan"){
            jumlah = (Number(nominal)+hitungbunga)/10
        } else if (periode === "12 Bulan"){
            jumlah = (Number(nominal)+hitungbunga)/12
        } else if (periode === "24 Bulan"){
            jumlah = (Number(nominal)+hitungbunga)/24
        }
        this.setState({
            hasil: jumlah
        })
    }
    render(){
        return(
            <div className="container">
            <h3 className="judul">Cicilan Bank</h3>
            <form onSubmit={this.hasilBunga}>
                <p className="sub">Nominal</p>
                <div className="form">
                    <input className="form-control" name='nominal' onChange={this.changeState}/>
                </div>
                <p className="sub">Bunga (%)</p>
                <div className="form">
                    <input className="form-control" name='bunga' onChange={this.changeState} />
                </div>
                <p className="sub">Periode (Bulan)</p>
                <div className="form">
                    <select className="selected" name="periode" onChange={this.changeState}>
                        <option></option>
                        <option value="1 Bulan">1 Bulan</option>
                        <option value="2 Bulan">2 Bulan</option> 
                        <option value="3 Bulan">3 Bulan</option> 
                        <option value="5 Bulan">5 Bulan</option> 
                        <option value="10 Bulan">10 Bulan</option> 
                        <option value="12 Bulan">12 Bulan</option> 
                        <option value="24 Bulan">24 Bulan</option> 
                    </select>

                </div>
                <div className="center-btn">
                    <button className="btn-hasilakhir" type="submit">Hitung</button>
                </div>
            </form>
            <p className="hasilakhir">Hasil: Rp. {this.state.hasil}/Bulan</p>
        </div>
        );
    }
}

export default Cicilanbank;