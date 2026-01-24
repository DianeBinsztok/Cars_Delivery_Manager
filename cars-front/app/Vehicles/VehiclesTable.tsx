import VehicleTableItem from "./VehicleTableItem";

export default function VehiclesTable(){
    return  <table className="border-table-lines border-2 rounded-md p-4 mt-8">
                <thead>
                    <tr>
                        <th colSpan={8}><h3>Véhicules</h3></th>
                    </tr>
                </thead>
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