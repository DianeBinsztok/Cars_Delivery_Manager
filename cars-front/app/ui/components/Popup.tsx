import Table from "./Table";
/* IMPORTATION DES DONNÉES DE VÉHICULES DE PLACEHOLDER */
const vehicles = require("../../lib/placeholder-data/placeholder-data-vehicles.json");
/* RÉCUPÉRATION DES PROPRIÉTÉS DES VÉHICULES POUR LES COLONNES DU TABLEAU */
const vehiclesProps = Object.keys(vehicles[0]);

/* MODALE : DÉTAIL D'UNE COMMANDE */
export default function Popup() {
    return (
        <section id="order-detail">
          <h3 className="text-2xl font-medium">Commande n°1258 - En cours</h3>
          <h4>Véhicule(s)</h4>
          <Table title="Véhicules"
                  /* Les colones correspondent aux propriétés de "vehicles" */
                  columns={vehiclesProps.map((prop) => prop.charAt(0).toUpperCase() + prop.slice(1))} 
                  /* Chaque ligne affiche chaque valeur des props d'un véhicule */
                  rows={vehicles.map((vehicle:{}) => Object.values(vehicle))}/>
          <h4>Client(s)</h4>
          <h5>Société ENM</h5>
          <h5>Contact(s)</h5>
          <ul>
            <li>Bertrand Lizier - 06 98 42 57 16 - bertrandlizier@enm.fr</li>
            <li>Patricia Moran - 07 98 45 47 16 - 04 52 41 63 52 - patriciamoran@enm.fr</li>
            <li>Gestion du parc - parc@enm.fr</li>
          </ul>
        </section>
    );
}