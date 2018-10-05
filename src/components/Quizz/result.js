import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';

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
          <div> 
          <p> <b>1</b> Pour gagner de la place dans mon bac, je peux imbriquer les emballages les uns dans les autres : <b>Faux !</b> Au cours de la collecte, les emballages sont compressés dans la benne.Les emballages imbriqués ne pourront plus être désolidarisés, empêchant leur recyclage. </p>
          <p> <b>2</b> Dois-je laisser les bouchons sur les bouteilles en plastique? <b>Oui !</b> Les bouchons seront recyclés, à condition qu’ils soient vissés sur les bouteilles. </p>
          <p> <b>3</b> Que signifie ce symbole ? <b>Le fabricant de l'emballage a participé à sa valorisation</b> Il signifie que l'entreprise qui vend ce produit participe financièrement à la collecte, au tri et au recyclage des emballages </p>
          <p> <b>4</b> Pour gagner de la place dans mon bac, je peux imbriquer les emballages les uns dans les autres : <b>Faux !</b> Au cours de la collecte, les emballages sont compressés dans la benne.Les emballages imbriqués ne pourront plus être désolidarisés, empêchant leur recyclage. </p>
          <p> <b>5</b> Pour gagner de la place dans mon bac, je peux imbriquer les emballages les uns dans les autres : <b>Faux !</b> Au cours de la collecte, les emballages sont compressés dans la benne.Les emballages imbriqués ne pourront plus être désolidarisés, empêchant leur recyclage. </p>
          <p> <b>6</b> Pour gagner de la place dans mon bac, je peux imbriquer les emballages les uns dans les autres : <b>Faux !</b> Au cours de la collecte, les emballages sont compressés dans la benne.Les emballages imbriqués ne pourront plus être désolidarisés, empêchant leur recyclage. </p>
          <p> <b>7</b> Pour gagner de la place dans mon bac, je peux imbriquer les emballages les uns dans les autres : <b>Faux !</b> Au cours de la collecte, les emballages sont compressés dans la benne.Les emballages imbriqués ne pourront plus être désolidarisés, empêchant leur recyclage. </p>
          <p> <b>8</b> Pour gagner de la place dans mon bac, je peux imbriquer les emballages les uns dans les autres : <b>Faux !</b> Au cours de la collecte, les emballages sont compressés dans la benne.Les emballages imbriqués ne pourront plus être désolidarisés, empêchant leur recyclage. </p>
          <p> <b>9</b> Pour gagner de la place dans mon bac, je peux imbriquer les emballages les uns dans les autres : <b>Faux !</b> Au cours de la collecte, les emballages sont compressés dans la benne.Les emballages imbriqués ne pourront plus être désolidarisés, empêchant leur recyclage. </p>
          <p> <b>10</b> Pour gagner de la place dans mon bac, je peux imbriquer les emballages les uns dans les autres : <b>Faux !</b> Au cours de la collecte, les emballages sont compressés dans la benne.Les emballages imbriqués ne pourront plus être désolidarisés, empêchant leur recyclage. </p>
          </div>
      </div>
    </ReactCSSTransitionGroup>
  );

}

Result.propTypes = {
  quizResult: PropTypes.number.isRequired,
};

export default Result;