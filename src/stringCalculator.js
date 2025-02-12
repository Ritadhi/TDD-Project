const add = function (str) {
    if(str.length === 0) return 0;
    return str.split(',').map(el => el.split('\n')).flat().reduce((acc, curr) => {
        return acc + Number(curr);
    }, 0)
}

module.exports = {
    add
}