if (process.env.NODE_ENV === 'production') {
    module.exports = require('./root/Root.prod.js');
} else {
    module.exports = require('./root/Root.prod.js');
}
