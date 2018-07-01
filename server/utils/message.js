var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: new Date().getTime()
    }
};

var generateLocationMessage = (from, latitute, longitute) => {
    return {
        from,
        url: `https://www.google.com/maps?q=${latitute},${longitute}`,
        createdAt: new Date().getTime()
    }
};

module.exports = {
    generateMessage,
    generateLocationMessage
};
