import RecallTableItem from "./RecallTableItem";

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
                    <RecallTableItem/>
                    <RecallTableItem/>
                    <RecallTableItem/>
                    <RecallTableItem/>
                </tbody>
            </table>
}