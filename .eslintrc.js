module.exports = {
  root: true,
  env: {
    'react-native/react-native': true,
  },
  extends: ['prettier', '@react-native-community', 'eslint-config-prettier'],
  plugins: ['prettier', 'react', 'react-native', '@react-native-community'],
  globals: {
    Platform: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
};
