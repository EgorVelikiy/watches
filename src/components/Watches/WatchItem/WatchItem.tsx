import { useEffect, useState } from 'react'
import initLocalClock from './currTime'
import './WatchItem.css'

interface WatchItemParams {
    item: {
        name: string,
        timeZone: string,
        id: string
    },
    onDelete: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void,
}

export default function WatchItem(props: WatchItemParams) {
    const {item, onDelete} = props
    const [time, setTime] = useState(initLocalClock(item.timeZone))

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTime(initLocalClock(item.timeZone))
        }, 1000)

        return () => {
            clearTimeout(timeout)
        }
    })
    return (
        <li className="watches-item-li" id={item.id}>
            <div className='watch-tools'>
                <span className='watch-title'>{item.name}</span>
                <span className='watch_delete' onClick={onDelete}>
                    &#x2715;
                </span>
            </div>
            <div className="hours-container">
                <div 
                    className="hours"
                    style={{
                        transform: `rotateZ(${time.hours}deg)`,
                        WebkitTransform: `rotateZ(${time.hours}deg)`,
                    }}
                ></div>
            </div>
            <div className="minutes-container">
                <div 
                    className="minutes"
                    style={{
                        transform: `rotateZ(${time.minutes}deg)`,
                        WebkitTransform: `rotateZ(${time.minutes}deg)`,
                    }}
                ></div>
            </div>
            <div className="seconds-container">
                <div 
                    className="seconds"
                    style={{
                        transform: `rotateZ(${time.seconds}deg)`,
                        WebkitTransform: `rotateZ(${time.seconds}deg)`,
                    }}
                ></div>
            </div>
        </li>

    )
}