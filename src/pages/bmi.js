import React from "react";
import './style.css';

class Bmi extends React.Component{
    constructor(){
        super()
        this.state = {
            tinggi: 0,
            berat: 0,
            hasil: 0
        }
    }
    changeState = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    hasilBmi = (e) => {
        e.preventDefault()
        let tinggi = this.state.tinggi
        let berat = this.state.berat
        let hitung = Number(berat) / (Number(tinggi)^2)
        this.setState({
            hasil: hitung
        })
    }
    render(){
        let status;
        if(this.state.hasil>=0.1 && this.state.hasil<=18.5){
            status=(
                <p className="tampil kuning">Kekurangan Berat Badan</p>
            );
        }else if(this.state.hasil>=18.5 && this.state.hasil<=24.9){
            status=(
                <p className="tampil hijau">Normal</p>
            );
        }else if(this.state.hasil>=25.0 && this.state.hasil<=29.9){
            status=(
                <p className="tampil oranye">Kelebihan Berat Badan</p>
            );
        }else if(this.state.hasil>30){
            status=(
                <p className="tampil merah">Kegemukan (Obesitas)</p>
            )
        }else{
            status=(
                <p className="tampil">Masukkan Nilai Terlebih Dahulu</p>
            )
        }
        return(
            <div className="container">
                <h3 className="judul">Hitung BMI</h3>
                <form onSubmit={this.hasilBmi}>
                    <p className="sub">Berat</p>
                    <div className="form">
                        <input className="form-control" name='berat' onChange={this.changeState}/>
                    </div>
                    <p className="sub">Tinggi (M)</p>
                    <div className="form">
                        <input className="form-control" name='tinggi' onChange={this.changeState} />
                    </div>
                    <div className="center-btn">
                        <button className="btn" type="submit">Hitung</button>
                    </div>
                </form>
                <p className="hasil">Hasil BMI : {this.state.hasil}</p>
                {status}
            </div>
        );
    }
}

export default Bmi