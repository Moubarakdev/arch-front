import axios from "axios";

class Auth {
  constructor() {
    this.token = localStorage.getItem("token");
    this.user = localStorage.getItem("user") || null;

    if (this.token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
    }
  }

  async login(token, user) {
    try {
      // Vérifiez les données de l'utilisateur ou effectuez toute autre opération nécessaire
      // ...

      // Enregistrez le token et les données de l'utilisateur dans le stockage local
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Définissez le token dans les en-têtes Axios pour les futures requêtes
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // Mettez à jour les propriétés de l'objet Auth
      this.token = token;
      this.user = user;

      return user; // Renvoyez les données de l'utilisateur en cas de succès
    } catch (error) {
      console.log(error);
      throw error; // Propagez l'erreur pour la gestion ultérieure
    }
  }

  logout() {
    // Effacez le token et les données de l'utilisateur du stockage local
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Supprimez le token des en-têtes Axios
    delete axios.defaults.headers.common["Authorization"];

    // Réinitialisez les propriétés de l'objet Auth
    this.token = null;
    this.user = null;
  }

  isAuthenticated() {
    // Vérifiez si l'utilisateur est authentifié en fonction de la présence du token
    return !!this.token;
  }
}

export default new Auth();
