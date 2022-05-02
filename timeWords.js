const hours = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'];

const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen', 'eighteen', 'nineteen'];

const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty'];

const timeWords = time => {
    if (time === '00:00') {
        return 'midnight';
    }

    if (time === '12:00') {
        return 'noon';
    }

    let [hrs, mins] = time.split(':');
    hrs = parseInt(hrs);
    mins = parseInt(mins);

    let timeWord = hours[hrs % 12] + ' ';

    if (mins >= 20) {
        timeWord += tens[Math.floor(mins / 10)] + ones[mins % 10]
    } else if (mins >= 10) {
        timeWord += ones[mins];
    } else if (mins > 0) {
        timeWord += `oh ${ones[mins]}`;
    } else {
        timeWord += `o'clock`;
    }

    if (hrs > 11) {
        timeWord += ' pm';
    }   else timeWord += ' am';
    return timeWord;
}

console.log(timeWords('15:15'))
console.log(timeWords('00:00'))
console.log(timeWords('12:00'))
console.log(timeWords('00:16'))
console.log(timeWords('17:00'))