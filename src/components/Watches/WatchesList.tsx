import { WatchParams } from "../data/data"
import WatchItem from "./WatchItem/WatchItem"
import './WatchesList.css'

interface WatchesListParams {
    watchesData: WatchParams[],
    onDelete: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void,
}

export default function WatchesList(props: WatchesListParams) {
    const {watchesData, onDelete} = props
    return (
        <ul className="watches-list">
            {watchesData.map((item, index) => {
                return (
                    <WatchItem item={item} onDelete={onDelete} key={index}/>
                )
            })}
        </ul>
    )
}