import Table from "./Table";
import VehiclesTable from "./Vehicles/VehiclesTable"

/* MODALE : DÉTAIL D'UNE COMMANDE */
export default function Popup() {
    return (
        <section id="order-detail">
          <h3 className="text-2xl font-medium">Commande n°1258 - En cours</h3>
          <h4>Véhicule(s)</h4>
          <Table title="Véhicules"
                  columns={["VIN", "Statut", "Date", "Condition", "Accessoires", "Marque", "Modèle", "Couleur", "Immatriculation"]} 
                  rows={[
                    {"vin": "VF7 SBHHZ1AW554823", "status": "Sur place", "date":"---", "condition": "---", "accessories":false, "brand": "Renault", "model": "Clio", "color": "Blanc", "plate": "AB-123-CD"},
                    {"vin": "VF7 SBHHZ1AW554823", "status": "Déstockage en cours", "date":"03/12/2026", "condition": "---", "accessories":false, "brand": "Peugeot", "model": "308", "color": "Bleu", "plate": "AB-173-CD"},
                    {"vin": "VF7 SBHHZ1AW554823", "status": "Déstockage en cours", "date":"03/12/2026", "condition": "---", "accessories":true, "brand": "Citroën", "model": "C3", "color": "Bleu", "plate": "AB-123-CD"},
                    {"vin": "VF7 SBHHZ1AW554823", "status": "", "date":"10/03/2026", "condition": "---", "accessories":false, "brand": "Renault", "model":"Clio","color":"Gris","plate":"AB-153-CD"},
                    {"vin":"VF7 SBHHZ1AW554823","status":"En attente de déstockage","date":"","condition":"Appel du gestionnaire","accessories":false,"brand":"Peugeot","model":"208","color":"Jaune","plate":"AB-753-CD"}
          ]}/>
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