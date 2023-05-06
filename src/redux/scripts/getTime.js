function getTime() {
    const timeObject = {
        now: new Date(),
        get day() { return this.now.getDate() },
        get month() { return this.now.getMonth()+1 },
        get year() { return this.now.getFullYear() },
        get hours() { return this.now.getHours() },
        get minutes() { return this.now.getMinutes() },
    
        *[Symbol.iterator]() {
            for (let value of Object.values(this)) {
                yield value;
            };
        },
    }
    
    Object.defineProperty(timeObject, "now", {enumerable: false});
    
    const timeArray = Array.from(timeObject)
                           .map(value => value < 10 ? '0' + value.toString() : value.toString()); 
    return `${timeArray[0]}.${timeArray[1]}.${timeArray[2]} ${timeArray[3]}:${timeArray[4]}`;
}

export default getTime;