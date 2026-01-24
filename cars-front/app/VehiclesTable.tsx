import VehicleTableItem from "./VehicleTableItem";

export default function VehiclesTable(){
    return  <table className="border-table-lines border-2 rounded-md p-4 mt-8">
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
                <VehicleTableItem/>
                <VehicleTableItem/>
                <VehicleTableItem/>
              </tbody>
          </table>;
}