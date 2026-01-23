export default function BodyReservationsTable(){
    return  <table className="border-table-lines border-2 rounded-md p-4 mt-8">
                <thead className="border-bottom--foreground">
                    <tr>
                        <th colSpan={6}><h3>Réserves carrosseries</h3></th>
                    </tr>
                </thead>
                <thead className="border-bottom--foreground">
                    <tr>
                        <th>n° Cmde</th>
                        <th>Statut</th>
                        <th>Client</th>
                        <th>Véhicule</th>
                        <th>Dernière action, note</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>16</td>
                        <td>En atelier</td>
                        <td>ENM</td>
                        <td>Peugeot 208</td>
                        <td>---</td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td>En atelier</td>
                        <td>ARS Aquitaine</td>
                        <td>Peugeot 2008</td>
                        <td>---</td>
                    </tr>
                    <tr>
                        <td>27</td>
                        <td>En atelier</td>
                        <td>Domofrance</td>
                        <td>Peugeot 308</td>
                        <td>---</td>
                    </tr>
                    <tr>
                        <td>38</td>
                        <td>Dossier demandé</td>
                        <td>ENM</td>
                        <td>Peugeot 3008</td>
                        <td>---</td>
                    </tr>
                    <tr>
                        <td>29</td>
                        <td>Dossier demandé</td>
                        <td>Domofrance</td>
                        <td>Peugeot 208</td>
                        <td>---</td>
                    </tr>
                    <tr>
                        <td>19</td>
                        <td>Dossier demandé</td>
                        <td>Domofrance</td>
                        <td>Peugeot 3008</td>
                        <td>---</td>
                    </tr>
                </tbody>
            </table>;
}