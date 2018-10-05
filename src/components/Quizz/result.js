import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import "../../CSS/quizz.css";

function Result(props) {

  return (
    <ReactCSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        <p>Résultat: <strong>{props.quizResult}</strong> </p>
        <ul>
          <li className="results"> <b>1</b> Pour gagner de la place dans mon bac, je peux imbriquer les emballages les uns dans les autres : <b>Faux !</b> Au cours de la collecte, les emballages sont compressés dans la benne.Les emballages imbriqués ne pourront plus être désolidarisés, empêchant leur recyclage. </li>
          <li className="results"> <b>2</b> Dois-je laisser les bouchons sur les bouteilles en plastique? <b>Oui !</b> Les bouchons seront recyclés, à condition qu’ils soient vissés sur les bouteilles. </li>
          <li className="results"> <b>3</b> Que signifie ce symbole ? <b>Le fabricant de l'emballage a participé à sa valorisation</b> Il signifie que l'entreprise qui vend ce produit participe financièrement à la collecte, au tri et au recyclage des emballages </li>
          <li className="results"> <b>4</b> Si je casse un verre d’eau, je peux le jeter dans bac pour le verre ? <b> Non </b> Tous les objets en verre n’ont pas la même composition chimique, même si on ne peut pas le voir à l’œil nu.Seul le verre d’emballage doit être placé dans les colonnes à verre: bouteilles, bocaux, pots.Ne mettez ni vaisselle en verre, ni ampoules, ni vitre, ni céramique, ni porcelaine… </li>
          <li className="results"> <b>5</b> Boîtes de conserve, cartons à pizza...Parfois, les déchets recyclables sont sales. Dois-je les laver au préalable ? <b>Non</b> Cela gaspille l'eau potable ! Les emballages triés seront lavés lors du processus de recyclage. Il suffit simplement que l’emballage soit bien vide. </li>
          <li className="results"> <b>6</b> Je vais déménager, est-ce que changer de commune peut modifier la façon dont je dois trier mes déchets ? <b> Oui</b> C'est possible, car la façon de collecter et de trier les déchets peut varier d'une commune à l'autre </li>
          <li className="results"> <b>7</b> J'ai tenté ma chance à un jeu de grattage, mais j'ai perdu. Où jeter le ticket ? <b> Dans la poubelle jaune </b> Il se recycle avec le papier</li>
          <li className="results"> <b>8</b> Les pots de yaourt, recyclage ou poubelle normale ? <b>Poubelle normale</b> Aujourd'hui, seuls les bouteilles et flacons en plastique se trient : bouteilles d'eau, d'huile, de lait, de soupe, de sauce, flacons d'adoucissant, de lessive, de liquide - vaisselle, les flacons de shampoing, bain moussant, gel douche...et leurs bouchons! Certaines communes expérimentent en ce moment le tri d'autres plastiques. </li>
          <li className="results"> <b>9</b> Les paquets de cigarettes, ça se recycle ? <b>Oui!</b> Le carton du paquet peut aller dans le bac papier / cartons / emballages, mais pas le plastique ni la feuille d'aluminium</li>
          <li className="results"> <b>10</b> Et si après tout ça j'ai encore un doute ?<b>Dans le doute, il vaut mieux mettre à la poubelle normale un objet recyclable, plutôt que de 'souiller' un container de tri</b>  </li>
        </ul>
      </div>
    </ReactCSSTransitionGroup>
  );

}

Result.propTypes = {
  quizResult: PropTypes.number.isRequired,
};

export default Result;