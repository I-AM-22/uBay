import moduleAlias from 'module-alias';

moduleAlias.addAliases({
  '@database': __dirname + '/database',
  '@models': __dirname + '/models',
  '@middlewares': __dirname + '/middlewares',
  '@helpers': __dirname + '/helpers',
  '@config': __dirname + '/config',
  '@modules': __dirname + '/modules',
  '@controllers': __dirname + '/controllers',
  '@utils': __dirname + '/utils',
  '@routes': __dirname + '/routes',
  '@swagger': __dirname + '/swagger',
});
