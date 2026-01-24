import BodyReservationTableItem from "./BodyReservationTableItem";

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
                    <BodyReservationTableItem/>
                    <BodyReservationTableItem/>
                    <BodyReservationTableItem/>
                    <BodyReservationTableItem/>
                    <BodyReservationTableItem/>
                </tbody>
            </table>;
}