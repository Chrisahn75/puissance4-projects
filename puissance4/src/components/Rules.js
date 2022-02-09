// REACT
import React from "react";
// IMAGES
// import logo from "../assets/logo.png";
import children from "../assets/children.png";

class Rules extends React.Component {
  render() {
    return (
      <aside className="gameRules">
        {/* <img className="logo" src={logo} alt="logo jeu"></img> */}
        <div className="logoTitle">
          <p>
            <span className="letterM">M</span>
            <span className="letterB">B</span>
          </p>
          <p className="subtitle">JEUX</p>
        </div>

        <div className="ref">
          <img className="children" src={children} alt="children" />
          <p>6 ans-Adulte</p>
          <p className="players">2 joueurs</p>
        </div>

        <div className="separator"></div>

        <div className="rules">
          <p className="r1">
            Insérez un jeton dans la grille à tour de rôle. Le premier joueur
            qui réussit à aligner quatre jetons (horizontalement, verticalement
            ou diagonalement) gagne la partie.
          </p>
          <p>
            Si toutes les cases de la grille sont remplies et qu'aucun des deux
            joueurs n'a réalisé un tel alignement, la partie est déclarée nulle.
          </p>
          <p className="rules">
            Appuyez sur le bouton "Reset" pour commencer une nouvelle partie.
          </p>
        </div>
      </aside>
    );
  }
}

export default Rules;
