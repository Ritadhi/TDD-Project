const add = function (str) {
    if(str.length === 0) return 0;
    const delimeters = [',', '\n'];
    if(str.startsWith('//')) {
        str = str.split('\n');
        const delimeter = str.shift().replace(/\/\//g, '');
        delimeters.push(delimeter)
        str = str.join('\n');
    }
    let regex = new RegExp('[' + delimeters.join('') + ']+', 'g');
    const negativeNumbers = [];
    const result = str.split(regex).reduce((acc, curr) => {
        if(curr < 0) negativeNumbers.push(curr);
        return acc + Number(curr);
    }, 0)
    return negativeNumbers.length > 0 ? `negative numbers not allowed ${negativeNumbers.join(',')}` : result;
}

module.exports = {
    add
}