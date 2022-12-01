
const secondsToMinutes = (value) => {
    
    let time = "";
    value = Number(value);

    let minutes = Math.floor(value % 3600 / 60);
    if(minutes < 10) minutes = `0${minutes}`

    let seconds = Math.floor(value % 3600 % 60);
    if(seconds < 10) seconds = `0${seconds}`

    time = `${minutes}:${seconds}`

    return time
}

export default secondsToMinutes