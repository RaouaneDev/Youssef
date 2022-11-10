import React from "react";
import Image1 from "../../assets/profile1.jpg";
import Image2 from "../../assets/profile2.webp";
import Image3 from "../../assets/profile3.jpg";
import Image4 from "../../assets/profile4.jpg";


const Equipe = () => {
  return (
    <div className="equipe bg-warning" id="equipe">
      <div className="container ">
        <h2>Voici notre equipe</h2>
        <div className="row ">
          <div className="col-md-3">
            <div className="card m-3">
              <img src={Image1} className="img-fluid" style={{height:300}} alt="Res" />
              <h3 className="card-title fw-bold p-2">Raou Mohamed</h3>
              <p className="p-2 text-warning">Plombier</p>
              <p className="p-2">
              Plombier professionnel d'urgence abordable près de chez vous. Pas de frais cachés. Il est important si vous avez un problème de Plomberie que vous le fassiez réparer dès que possible
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card m-3">
              <img src={Image2} className="img-fluid" style={{height:300}} alt="Res" />
              <h3 className="card-title fw-bold p-2">Raouane Lassad</h3>
              <p className="p-2 text-warning">Plombier</p>
              <p className="p-2">
              Plombier professionnel d'urgence abordable près de chez vous. Pas de frais cachés. Il est important si vous avez un problème de Plomberie que vous le fassiez réparer dès que possible
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card m-3">
              <img src={Image3} className="img-fluid" style={{height:300}} alt="Res" />
              <h3 className="card-title fw-bold p-2">Raouane Tahar</h3>
              <p className="p-2 text-warning">Plombier</p>
              <p className="p-2">
              Plombier professionnel d'urgence abordable près de chez vous. Pas de frais cachés. Il est important si vous avez un problème de Plomberie que vous le fassiez réparer dès que possible
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card m-3">
              <img src={Image4} className="img-fluid" style={{height:300}} alt="Res" />
              <h3 className="card-title fw-bold p-2">Raouane Amine</h3>
              <p className="p-2 text-warning">Plombier</p>
              <p className="p-2">
              Plombier professionnel d'urgence abordable près de chez vous. Pas de frais cachés. Il est important si vous avez un problème de Plomberie que vous le fassiez réparer dès que possible
              </p>
            </div>
          </div>
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Equipe;
