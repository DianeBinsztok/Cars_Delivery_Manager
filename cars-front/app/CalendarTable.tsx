export default function CalendarTable() {
    return  <table className="w-full border-table-lines border-2 rounded-md p-4 mt-8">
                <thead className="border-b-1-background">
                    <tr>
                        <th>Heure</th>
                        <th>Client</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>9:00</td>
                        <td>ENM</td>
                        <td>Livraison de 1 Peugeot 2008</td>
                    </tr>
                    <tr>
                        <td>11:00</td>
                        <td>Régie de l'Eau</td>
                        <td>Livraison de 5 Peugeot 208</td>
                    </tr>
                </tbody>
            </table>
}