import * as moduleAlias from 'module-alias';

moduleAlias.addAliases({
  '@models': __dirname + '/models',
  '@middlewares': __dirname + '/middlewares',
  '@helpers': __dirname + '/helpers',
  '@config': __dirname + '/config',
  '@controllers': __dirname + '/controllers',
  '@utils': __dirname + '/utils',
  '@routes': __dirname + '/routes',
  '@swagger': __dirname + '/swagger',
  '@interfaces': __dirname + '/types',
});
