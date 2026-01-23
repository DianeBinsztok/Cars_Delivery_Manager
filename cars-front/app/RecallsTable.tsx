export default function RecallsTable() {
    return  <table className="w-full border-table-lines border-2 rounded-md p-4 mt-8">
                <thead>
                    <tr>
                        <th colSpan={8}><h3>Rappels constructeurs</h3></th>
                    </tr>
                </thead>
                <thead className="border-background border-1">
                    <tr>
                        <th>n° Cmde</th>
                        <th>n° campagne</th>
                        <th>Statut</th>
                        <th>Client</th>
                        <th>Véhicule(s)</th>
                        <th>Dernière action, note</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>45</td>
                        <td>2023-AB12</td>
                        <td>En atelier</td>
                        <td>ENM</td>
                        <td>Peugeot 208</td>
                        <td>---</td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>2022-CD34</td>
                        <td>En atelier</td>
                        <td>ARS Aquitaine</td>
                        <td>Peugeot 2008</td>
                        <td>---</td>
                    </tr>
                    <tr>
                        <td>51</td>
                        <td>2023-EF56</td>
                        <td>En atelier</td>
                        <td>Domofrance</td>
                        <td>Peugeot 308</td>
                        <td>---</td>
                    </tr>
                    <tr>
                        <td>61</td>
                        <td>2023-GH78</td>
                        <td>Dossier demandé</td>
                        <td>ENM</td>
                        <td>Peugeot 3008</td>
                        <td>---</td>
                    </tr>
                    <tr>
                        <td>49</td>
                        <td>2023-IJ90</td>
                        <td>Dossier demandé</td>
                        <td>Domofrance</td>
                        <td>Peugeot 208</td>
                        <td>---</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>2022-KL12</td>
                        <td>Dossier demandé</td>
                        <td>Domofrance</td>
                        <td>Peugeot 3008</td>
                        <td>---</td>
                    </tr>
                </tbody>
            </table>
}