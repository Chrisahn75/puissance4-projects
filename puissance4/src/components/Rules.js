// REACT
import React from "react";
// IMAGES
import logo from "../assets/logo.png";
import children from "../assets/children.png";

class Rules extends React.Component {
  render() {
    return (
      <aside className="gameRules">
        <img className="logo" src={logo} alt="logo jeu"></img>
        <img className="children" src={children} alt="children" />
        <p className="ref">6 ans-Adulte</p>
        <p className="ref players">2 joueurs</p>
        <div className="separator"></div>
        <p className="rules r1">
          Insérez un jeton dans la grille à tour de rôle. Le premier joueur qui
          réussit à aligner quatre jetons (horizontalement, verticalement ou
          diagonalement) gagne la partie.
        </p>
        <p className="rules">
          Si toutes les cases de la grille sont remplies et qu'aucun des deux
          joueurs n'a réalisé un tel alignement, la partie est déclarée nulle.
        </p>
        <p className="rules">
          Appuyez sur le bouton "Reset" pour commencer une nouvelle partie.
        </p>
      </aside>
    );
  }
}

export default Rules;
