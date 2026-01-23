import OrderTableItem from "./OrderTableItem";

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
                    <OrderTableItem/>
                    <OrderTableItem/>
                    <OrderTableItem/>
                    <OrderTableItem/>
                    <OrderTableItem/>
                </tbody>
            </table>;
}