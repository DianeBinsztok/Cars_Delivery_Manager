/* MODALE : DÉTAIL D'UNE COMMANDE */
export default function Popup() {
    return (
        <section id="order-detail">
          <h3 className="text-2xl font-medium">Commande n°1258 - En cours</h3>
          <h4>Véhicule(s)</h4>
          <table className="border-table-lines border-2 rounded-md p-4 mt-8">
              <thead>
                  <tr>
                    <th>Véhicule(s)</th>
                    <th>Statut</th>
                    <th>Date (Livraison, Arrivée, Déstockage)</th>
                    <th>Condition</th>
                    <th>Accessoire(s)</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <th>VF7 SBHMZ0 FX554573 - Peugeot - 308 - bleue - options - CG-750-OV - microhybride</th>
                    <th>En concession</th>
                    <th>---</th>
                    <th>---</th>
                    <th>---</th>
                  </tr>
                  <tr>
                    <th>VF7 SBHHZ1 AW554823 - Peugeot - 308 - bleue - options - QD-495-YU - microhybride</th>
                    <th>En déstockage</th>
                    <th>Arrivée prévue le 15/03/2026</th>
                    <th>---</th>
                    <th>---</th>
                  </tr>
                  <tr>
                    <th>VF7 SBLMZ0 EW454823 - Peugeot - 308 - bleue - options - ER-452-GT - microhybride</th>
                    <th>En déstockage</th>
                    <th>Arrivée prévue le 15/03/2026</th>
                    <th>---</th>
                    <th>---</th>
                  </tr>
              </tbody>
          </table>
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