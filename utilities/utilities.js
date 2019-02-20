const titleize = (string) => {
    return string
        .toLowerCase()
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

const time = (string) => {
    
}


module.exports = {
    titleize
}