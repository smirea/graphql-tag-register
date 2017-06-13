
const gql = require('graphql-tag');
const fs = require('fs');

const compile = fileName => {
    const content = '' + fs.readFileSync(fileName);
    const doc = gql`${content}`;
    return `module.exports = ${JSON.stringify(doc)}`;
}

const register = () => {
    require.extensions['.gql'] = (mod, fileName) => {
        mod._compile(compile(fileName), fileName);
    };
}

module.exports = () => {
    register();
}
