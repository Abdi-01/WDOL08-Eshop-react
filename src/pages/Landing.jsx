import React from 'react';
import { Text } from '@chakra-ui/react';
import Carousel from '../components/Carousel';

const Landing = (props) => {
    return <div>
        <div id='banner'>
            
        </div>
        <div className="container p-5">
            <div className="row">
                <div className="col-12 order-md-2 col-md-7" style={{ padding: "auto 10%" }}>
                    <h2 style={{ fontSize: "50px", marginTop: "25%" }}>IDALINNEA D
                        <br />
                        <span className="text-muted">IKEA | Kitchen</span></h2>
                    <p>Ritsleting yang tersembunyi membuat sarung mudah dilepas.  Sarung bantal dengan tampilan cermin karena memiliki pola yang sama di kedua sisi.  Katun adalah bahan alami lembut dan mudah dirawat yang dapat Anda cuci dengan mesin.</p>
                </div>
                <div className="col-12 order-md-1 col-md-5">
                    <img className="shadow bg-white" src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/107/0810720_PE771385_S4.jpg"
                        width="100%" alt="imgCtn" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-7" style={{ padding: "auto 10%" }}>
                    <h2 style={{ fontSize: "50px", marginTop: "25%" }}>HAUGA V.2
                        <br />
                        <span className="text-muted">Mr. DIY | Bedroom</span></h2>
                    <p>
                        Mudah untuk menyembunyikan kabel dan stopkontak tapi tetap dapat dijangkau dengan jalur kabel di bagian belakang.
                    </p>
                </div>
                <div className="col-md-5">
                    <img className="shadow bg-white" src={"https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/594/0959497_PE806037_S4.jpg"}
                        width="100%" alt="imgCtn" />
                </div>
            </div>
            <div className="row">
                <div className="col-12 order-md-2 col-md-7" style={{ padding: "auto 10%" }}>
                    <h2 style={{ fontSize: "50px", marginTop: "25%" }}>LINNEBÄCK
                        <br />
                        <span className="text-muted"> IKEA | Livingroom</span></h2>
                    <p>
                        Lebar:\t55 cm Kedalaman:\t69,5 cm Tinggi:\t72,4 cm Lebar dudukan:\t57 cm Kedalaman dudukan:\t50 cm Tinggi dudukan:\t42,4 cm Berat total:\t6,50 kg
                    </p>
                </div>
                <div className="col-12 order-md-1 col-md-5">
                    <img className="shadow bg-white" src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/334/0933452_PE791908_S4.jpg"
                        width="100%" alt="imgCtn" />
                </div>
            </div>
        </div>
    </div>;
}

export default Landing;