const presets = [
  [
    "@babel/env",
    {
      useBuiltIns: "usage",
      corejs: "2"
    }
  ],
  [
    "@babel/react",
    {
      
    }
  ]
];

const plugins = [ '@babel/plugin-transform-runtime' ];

module.exports = { presets, plugins };