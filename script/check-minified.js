(async function() {
  var HyperFormula = require("../dist/optimized-full/bundle.js")
  var Engine = HyperFormula.HyperFormula
  var Config = HyperFormula.Config
  var assert = require('assert')

  var engine = await Engine.buildFromArray([
    ['42', '=A1 + 2']
  ], new Config({ gpuMode: "cpu" }))
  var valueA1 = engine.getCellValue('A1')
  var valueB1 = engine.getCellValue('B1')

  assert(valueA1 === 42)
  assert(valueB1 === 44)
  console.log("OK")
})()
