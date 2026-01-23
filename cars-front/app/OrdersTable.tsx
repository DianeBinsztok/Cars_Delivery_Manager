export default function OrdersTable(){
    return <table className="w-full border-table-lines border-2 rounded-md p-4 mt-8">
                <thead>
                    <tr>
                        <th colSpan={8}><h3>Commandes en cours</h3></th>
                    </tr>
                </thead>
                <thead className="border-1 border-background">
                    <tr>
                        <th>n° Cmde</th>
                        <th>Statut</th>
                        <th>Date (Livraison, Arrivée, Déstockage)</th>
                        <th>Condition</th>
                        <th>Client</th>
                        <th>Véhicule(s)</th>
                        <th>Accessoire(s)</th>
                        <th>Dernière action, note</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>12</td>
                        <td>Livraison programmée</td>
                        <td>02/02/2026</td>
                        <td>---</td>
                        <td>ENM</td>
                        <td>5 Peugeot 208</td>
                        <td><input type="checkbox" /></td>
                        <td>---</td>
                    </tr>

                    <tr>
                        <td>16</td>
                        <td>Livraison programmée</td>
                        <td>15/02/2026</td>
                        <td>---</td>
                        <td>ENM</td>
                        <td>3 Peugeot 3008</td>
                        <td><input type="checkbox" /></td>
                        <td>---</td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td>Livraison programmée</td>
                        <td>15/02/2026</td>
                        <td>---</td>
                        <td>Domofrance</td>
                        <td>Peugeot 208</td>
                        <td><input type="checkbox" /></td>
                        <td>---</td>
                    </tr>
                    <tr>
                        <td>45</td>
                        <td>Déstockage en cours</td>
                        <td>Arrivée prévue le 02/03/2026</td>
                        <td>---</td>
                        <td>Client</td>
                        <td>Véhicule(s)</td>
                        <td><input type="checkbox" /></td>
                        <td>---</td>
                    </tr>
                    <tr>
                        <td>42</td>
                        <td>Déstockage en attente</td>
                        <td>---</td>
                        <td>Déstocker quand dossier complété</td>
                        <td>ENM</td>
                        <td>5 Peugeot 2008</td>
                        <td><input type="checkbox" /></td>
                        <td>---</td>
                    </tr>
                </tbody>
            </table>;
}