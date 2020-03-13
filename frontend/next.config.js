const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            /* development only config options here */
            env: {
                endpoint: `http://localhost:5000`
            }
        }
    }
    return {
        /* config options for all phases except development here */
        endpoint: `http://localhost:XXXX`
    }
}