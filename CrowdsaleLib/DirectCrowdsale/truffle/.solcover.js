module.exports = {
  testCommand: `truffle test --network coverage`,
  port: 8555,
  skipFiles: ['Array256Lib.sol','BasicMathLib.sol','CrowdsaleToken.sol','CrowdsaleTestTokenZeroD.sol','DirectCrowdsaleTestZeroD.sol','TokenLib.sol'],
  testrpcOptions: " --port 8555 --gasLimit 0xffffffffffff --account='0xfacec5711eb0a84bbd13b9782df26083fc68cf41b2210681e4d478687368fdc3,100000000000000000000000000' --account='0xb7d90a23546b263a9a68a26ed7045cd6ce7d3b0dfa7d3c7b66434a4a89453cf7,100000000000000000000000000' --account='0x58823bde84d19ad2bdb6739f9ef1fc8ca4ba0c617ecc9a1fa675282175a9bc02,100000000000000000000000000' --account='0x42891283028bba9611583fcaa0dea947251b9f980a1e3d9858cd33b0e8077195,100000000000000000000000000' --account='0x6009fc3fda6c5976cfecc36b9c0c9423f78bcc971ade88f32c0e016225c1601a,100000000000000000000000000' --account='0xe598179ebee08a9b1f1afaef6ac526e5cfe615d87831aed8b080c988773bda6d,100000000000000000000000000'"
};
