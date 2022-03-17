import React from "react";
import './style.css';

class Hargaakhir extends React.Component{
    constructor(){
        super()
        this.state={
            hargaawal: 0,
            ppn: 0,
            diskon: 0,
            hasil: 0
        }
    }
    changeState = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    hasilAkhir = (e) => {
        e.preventDefault()
        let hargaawal = this.state.hargaawal
        let ppn = this.state.ppn
        let diskon = this.state.diskon
        let hitungppn = Number(hargaawal)*(Number(ppn)/100)
        let hasilppn = Number(hargaawal)+hitungppn
        let hitungdiskon = Number(hasilppn)*(Number(diskon)/100)
        let hasildiskon = Number(hasilppn)-hitungdiskon
        this.setState({
            hasil: hasildiskon
        })

    }
    render(){
        return(
            <div className="container">
            <h3 className="judul">Harga Akhir</h3>
            <form onSubmit={this.hasilAkhir}>
                <p className="sub">Harga Awal</p>
                <div className="form">
                    <input className="form-control" name='hargaawal' onChange={this.changeState}/>
                </div>
                <p className="sub">PPN</p>
                <div className="form">
                    <input className="form-control" name='ppn' onChange={this.changeState} />
                </div>
                <p className="sub">Diskon</p>
                <div className="form">
                    <input className="form-control" name='diskon' onChange={this.changeState} />
                </div>
                <div className="center-btn">
                    <button className="btn-hasilakhir" type="submit">Hitung</button>
                </div>
            </form>
            <p className="hasilakhir">Hasil: Rp. {this.state.hasil}</p>
        </div>
        );
    }
}

export default Hargaakhir;