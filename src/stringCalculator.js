const add = function (str) {
    if(str.length === 0) return 0;
    if(str.startsWith('//')) {
        str = str.split('\n');
        const delimeter = str.shift().replace(/\/\//g, '');
        str = str.join('\n');
        return str.split(',').map(el => el.split('\n')).flat().map(el => el.split(delimeter)).flat().reduce((acc, curr) => {
            return acc + Number(curr);
        }, 0)
    }
    return str.split(',').map(el => el.split('\n')).flat().reduce((acc, curr) => {
        return acc + Number(curr);
    }, 0)
}

module.exports = {
    add
}