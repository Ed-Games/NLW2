export default function hourToMin(time: string){
    const [hour, min] =  time.split(':').map(Number)
    const timeMin = (hour * 60) + min;
    return timeMin;
}