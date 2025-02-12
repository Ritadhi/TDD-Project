const add = function (str) {
    if(str.length === 0) return 0;
    const delimeters = ['\n'];
    if(str.startsWith('//')) {
        str = str.split('\n');
        const delimeter = str.shift().replace(/\/\//g, '').split('][').map(el => el.replace(/[\[\]]/g, ''));
        delimeters.push(...delimeter)
        str = str.join('\n');
    }
    delimeters.forEach(del => str = str.replaceAll(del, ','));
    const numberArr = str.split(',');
    const negativeNumbers = numberArr.filter(el => el < 0);
    return negativeNumbers.length > 0 
        ? `negative numbers not allowed ${negativeNumbers.join(',')}` 
        : numberArr.reduce((acc, curr) => {
            if(isNaN(Number(curr))) return NaN
            return acc + (curr < 1000 ? Number(curr) : 0);
        }, 0);
}

module.exports = {
    add
}