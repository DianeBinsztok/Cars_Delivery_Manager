export default function Table(props: {title: string, columns: string[], rows:string[]}) {
    return <table className="border-table-lines border-2 rounded-md p-4 mt-8">
            <thead>
                <tr>
                    <th colSpan={props.columns.length}><h3>{props.title}</h3></th>
                </tr>
            </thead>
            <thead>
                <tr>
                    {props.columns.map((column, columnIndex) => (
                        <th key={columnIndex}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {props.rows.map((row, rowIndex) => (
                    <th key={rowIndex}>{row}</th>
                ))}
            </tbody>
        </table>;
}