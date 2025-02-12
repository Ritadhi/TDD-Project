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
    return str.split(regex).reduce((acc, curr) => {
        return acc + Number(curr);
    }, 0)
}

module.exports = {
    add
}