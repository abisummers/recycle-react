import React, { Component } from "react";

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      field: {
        images: "",
        produits: "",
        typologie_des_dechets: "",
        qu_est_ce_que_j_en_fais: "",
        que_va_t_il_devenir: "",
        comment_eviter_de_le_produire: []
      }
    };
  }

  //----------------- UPDATE STATE ------------

  updateTypologie(event) {
    const { value } = event.target;
    this.setState({ typologie: value });
  }

  updateFais(event) {
    const { value } = event.target;
    this.setState({ fais: value });
  }

  addProduit(event) {
    const { value } = event.target;
    const stateCopy = this.state.field;
    stateCopy.produits = value;
    this.setState({ field: stateCopy });
  }

  produitProduire(event) {
    const { value } = event.target;
    this.setState({ comment_eviter_de_le_produire: value });
  }

  produitDevenir(event) {
    const { value } = event.target;
    this.setState({ que_va_t_il_devenir: value });
  }

  // --------------------- FORM SUBMIT -------------
  handleSubmit(event) {
    const { params } = this.props.match;
    event.preventDefault();
    console.log(params);
  }

  //--------------------- RENDER --------------------

  render() {
    const {
      produits,
      qu_est_ce_que_j_en_fais,
      comment_eviter_de_le_produire,
      que_va_t_il_devenir,
      images,
      typologie_des_dechets
    } = this.state.field;

    return (
      <section>
        <h2>ADD</h2>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Produits
            <input
              value={produits}
              type="text"
              onChange={event => this.addProduit(event)}
              name=""
              placeholder="produits"
            />
          </label>

          <label>
            Qu'est ce que j'en fais
            <select id="fais" onChange={event => this.updateFais(event)}>
              <option value="associations">associations</option>
              <option value="bois de chauffage">bois de chauffage</option>
              <option value="composteur">composteur</option>
              <option value="déchèterie">déchèterie</option>
              <option value="garagiste">garagiste</option>
              <option value="magasins de la grande distribution">
                magasins de la grande distribution
              </option>
              <option value="opticien">opticien</option>
              <option value="ordures ménagères">ordures ménagères</option>
              <option value="pharmacie">pharmacie</option>
              <option value="tri(conteneur de verre)">
                tri(conteneur de verre)
              </option>
              <option value="tri (sac - bac - point d'apport volontaire)">
                tri (sac - bac - point d'apport volontaire)
              </option>
            </select>
          </label>

          <label>
            Comment eviter de le produire
            <input
              value={comment_eviter_de_le_produire}
              type="text"
              onChange={event => this.produitProduire(event)}
              placeholder="comment_eviter_de_le_produire"
            />
          </label>

          <label>
            que va t'il devenir
            <input
              value={que_va_t_il_devenir}
              type="text"
              onChange={event => this.produitDevenir(event)}
              placeholder="que_va_t_il_devenir"
            />
          </label>

          <label>
            images
            <input
              value={images}
              type="file"
              onChange={event => this.imageUpload(event)}
              name=""
            />
          </label>

          <label>
            typologie des dechets
            <select
              id="typologie"
              onChange={event => this.updateTypologie(event)}
            >
              <option value="Bois" name="bois">
                Bois
              </option>
              <option value="Déchets du Bâtiment" name="dehets-de-cuisine">
                Déchets du Bâtiment
              </option>
              <option value="Déchets de cuisine" name="dechets-de-cusine">
                Déchets de cuisine
              </option>
              <option value="Déchets Dangereux" name="dechets-dangereux">
                Déchets Dangereux
              </option>
              <option
                value="Déchets Electriques et électroniques"
                name="dechets-electriques-et-electroniques"
              >
                Déchets Electriques et électroniques
              </option>
              <option value="Divers" name="divers">
                Divers
              </option>
              <option value="Métaux" name="metaux">
                Métaux
              </option>
              <option value="Mobilier" name="mobilier">
                Mobilier
              </option>
              <option value="Papiers-Cartons" name="papiers-cartons">
                Papiers-Cartons
              </option>
              <option value="Plastiques" name="plastiques">
                Plastiques
              </option>
              <option value="Textiles et cuir" name="textiles-et-cuir">
                Textiles et cuir
              </option>
              <option value="Verre" name="verre">
                Verre
              </option>
              <option value="Déchets de jardin" name="dechets-de-jardin">
                Déchets de jardin
              </option>
            </select>
          </label>

          <button>Save</button>
        </form>
      </section>
    );
  }
}

export default AddProduct;
