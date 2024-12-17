export default function initLocalClock(timeZone: string) {
    let zone: number = Number(timeZone)
    const date = new Date();

    const hours = date.getUTCHours() + zone;
    const minutes = date.getMinutes();
    const sec = date.getSeconds();
    

    const deg = {
        hours: hours * 30 + minutes / 2,
        minutes: minutes * 6,
        seconds: sec * 6,
    };

    return deg;
}