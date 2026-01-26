/*
export default function VehicleTableItem() {
    return <tr>
    <td>VF7 SBHHZ1 AW554823 - Peugeot - 308 - bleue - options - QD-495-YU - microhybride</td>
    <td>En déstockage</td>
    <td>Arrivée prévue le 15/03/2026</td>
    <td>---</td>
    <td>---</td>
    </tr>;
}
*/
export default function VehicleTableItem(props:{vin:string, status:string, date:string, condition:string, accessories:boolean, brand:string, model:string, color:string, plate:string}) {
    return <tr>
    <td>{props.vin}</td>
    <td>{props.status}</td>
    <td>{props.date}</td>
    <td>{props.condition}</td>
    <td>{props.accessories ? "Oui" : "Non"}</td>
    <td>{props.brand}</td>
    <td>{props.model}</td>
    <td>{props.color}</td>
    <td>{props.plate}</td>
    </tr>;
}