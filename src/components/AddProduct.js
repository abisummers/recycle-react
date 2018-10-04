import React, { Component } from "react";
import api from "../api";

const productObj = {
  Bois: "bois",
  "Déchets du Bâtiment": "dechets-du-batiment",
  "Déchets de cuisine": "dechets-de-cuisine",
  "Déchets Dangereux": "dechets-dangereux",
  "Déchets Electriques et électronique": "dechets-electriques-et-electronique",
  Divers: "divers",
  Métaux: "metaux",
  Mobilier: "mobilier",
  "Papiers-Cartons": "papiers-cartons",
  Plastiques: "plastiques",
  "Textiles et cuir": "textiles-et-cuir",
  Verre: "verre"
};

console.log(productObj);
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
    const stateCopy = this.state.field;
    stateCopy.typologie_des_dechets = value;
    this.setState({ field: stateCopy });
  }

  updateFais(event) {
    const { value } = event.target;
    const stateCopy = this.state.field;
    stateCopy.qu_est_ce_que_j_en_fais = value;
    this.setState({ field: stateCopy });
  }

  addProduit(event) {
    const { value } = event.target;
    const stateCopy = this.state.field;
    stateCopy.produits = value;
    this.setState({ field: stateCopy });
  }

  produitProduire(event) {
    const { value } = event.target;
    const stateCopy = this.state.field;
    stateCopy.comment_eviter_de_le_produire = value;
    this.setState({ field: stateCopy });
  }

  produitDevenir(event) {
    const { value } = event.target;
    const stateCopy = this.state.field;
    stateCopy.que_va_t_il_devenir = value;
    this.setState({ field: stateCopy });
  }

  // ------------------- IMAGE UPLOAD -----------------

  imageUpload(event) {
    const { files } = event.target;
    console.log(files);
    console.log("file selected", files[0]);

    if (!files[0]) {
      return;
    }

    const uploadData = new FormData();

    //"imageFile" comes from the backend
    uploadData.append("imageFile", files[0]);

    api
      .post("/upload-image", uploadData)

      .then(res => {
        console.log("file uploaded", res.data);
        const { imageUrl } = res.data;
        const stateCopy = this.state.field;
        stateCopy.images = imageUrl;
        this.setState({ field: stateCopy });
      })
      .catch(err => {
        console.log(err);
        alert("there was an error editing the phone");
      });
  }

  // --------------------- FORM SUBMIT -------------
  handleSubmit(event) {
    event.preventDefault();

    const url = productObj[this.state.field.typologie_des_dechets];

    api
      .post("/add", { state: this.state, url: url })
      .then(res => {
        const { addedProduct } = this.props;
        addedProduct(res.data.userDoc);
      })
      .catch(err => {
        console.log(err);
        alert("there was a mistake");
      });
  }

  //--------------------- RENDER --------------------

  render() {
    // console.log("MY STATE", this.state);
    // console.log(productOb  j.value);
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
            <select
              onChange={event => this.updateFais(event)}
              value={qu_est_ce_que_j_en_fais}
            >
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
            Image
            <input type="file" onChange={event => this.imageUpload(event)} />
          </label>

          <img src={images} alt=""/>

          <label>
            typologie des dechets
            <select
              onChange={event => this.updateTypologie(event)}
              value={typologie_des_dechets}
            >
              <option value="Bois">Bois</option>
              <option value="Déchets du Bâtiment">Déchets du Bâtiment</option>
              <option value="Déchets de cuisine">Déchets de cuisine</option>
              <option value="Déchets Dangereux">Déchets Dangereux</option>
              <option value="Déchets Electriques et électroniques">
                Déchets Electriques et électroniques
              </option>
              <option value="key">Divers</option>
              <option value="Métaux">Métaux</option>
              <option value="Mobilier">Mobilier</option>
              <option value="Papiers-Cartons">Papiers-Cartons</option>
              <option value="Plastiques">Plastiques</option>
              <option value="Textiles et cuir">Textiles et cuir</option>
              <option value="Verre">Verre</option>
              <option value="Déchets de jardin">Déchets de jardin</option>
            </select>
          </label>

          <button>Save</button>
        </form>
      </section>
    );
  }
}

export default AddProduct;
