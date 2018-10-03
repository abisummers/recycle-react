import React, { Component } from "react";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      produits,
      qu_est_ce_que_j_en_fais,
      comment_eviter_de_le_produire,
      que_va_t_il_devenir,
      images,
      typologie_des_dechets
    } = this.state;
    return (
      <section>
        <h2>ADD</h2>
        <form>
          <label>
            produits
            <input
              value={produits}
              type="string"
              onChange=""
              name=""
              placeholder="produits"
            />
          </label>

          <label>
            qu_est_ce_que_j_en_fais
            <input
              value={qu_est_ce_que_j_en_fais}
              type=""
              onChange=""
              name=""
              placeholder="qu_est_ce_que_j_en_fais"
            />
          </label>

          {/* ["associations", "bois de chauffage", "composteur", "déchèterie", 
          "garagiste", "magasins de la grande distribution", "opticien", "ordures ménagères", 
          "pharmacie", "tri(conteneur de verre)", "tri (sac - bac - point d'apport volontaire)"], */}

          <label>
            comment_eviter_de_le_produire
            <input
              value={comment_eviter_de_le_produire}
              type=""
              onChange=""
              name=""
              placeholder="comment_eviter_de_le_produire"
            />
          </label>

          <label>
            que_va_t_il_devenir
            <input
              value={que_va_t_il_devenir}
              type=""
              onChange=""
              name=""
              placeholder="que_va_t_il_devenir"
            />
          </label>

          <label>
            images
            <input valueimages type="file" onChange="" name="" placeholder="" />
          </label>

          <label>
            typologie_des_dechets
            <select>
              <option>Bois</option>
              <option>Déchets du Bâtiment</option>
              <option>Déchets de cuisine</option>
              <option>Déchets Dangereux</option>
              <option>Déchets Electriques et électroniques</option>
              <option>Divers</option>
              <option>Métaux</option>
              <option>Mobilier</option>
              <option>Papiers-Cartons</option>
              <option>Plastiques</option>
              <option>Textiles et cuir</option>
              <option>Verre</option>
              <option>Déchets de jardin</option>
            </select>
          </label>

          <button>Save</button>
        </form>
      </section>
    );
  }
}

export default AddProduct;
