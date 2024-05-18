require('ts-node').register({
    transpileOnly: true,
    require: ['tsconfig-paths/register']
  });
  
  require('ignore-styles').default(['.css', '.scss']);