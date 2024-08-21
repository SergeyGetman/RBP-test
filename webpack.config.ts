const path = require('path');

module.exports = {
  // Точка входа
  entry: path.resolve(__dirname, 'src', 'index.tsx'),

  // Точка выхода
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // Расширения файлов, которые будет искать Webpack
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  // Модули и правила
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Регулярное выражение для поиска .ts и .tsx файлов
        use: 'ts-loader', // Использование ts-loader для компиляции TypeScript
        exclude: /node_modules/, // Исключение папки node_modules
      },
    ],
  },

  // Режим разработки для улучшенного отладки
  mode: 'development',
};