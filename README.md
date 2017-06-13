## graphql-tag-register

Loads `.gql` files as [graphql-tag](https://github.com/apollographql/graphql-tag) at runtime in node
Useful in conjunction with react-apollo if you can't use the webpack [graphql loader](https://github.com/creditkarma/graphql-loader)

### Usage

```js
require('graphql-tag-register')();

const MyQuery = require('./my-query.gql');
```

### Example

There's a complex example built in !!

```bash
# will load ./example.gql
node ./example.js
```
