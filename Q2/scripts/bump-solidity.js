const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/

let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract HelloWorldVerifier');

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);


// [assignment] add your own scripts below to modify the other verifier contracts you will build during the assignment
// groth16 version
let content_mult = fs.readFileSync("./contracts/Multiplier3Verifier.sol", { encoding: 'utf-8' });
let bumped_mult = content_mult.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped_mult = bumped_mult.replace(verifierRegex, 'contract Multiplier3Verifier');

fs.writeFileSync("./contracts/Multiplier3Verifier.sol", bumped_mult);


// plonk version
let content_mult_plonk = fs.readFileSync("./contracts/Multiplier3_plonkVerifier.sol", { encoding: 'utf-8' });
let bumped_mult_plonk = content_mult_plonk.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped_mult_plonk = bumped_mult_plonk.replace(verifierRegex, 'contract Multiplier3_plonkVerifier');

fs.writeFileSync("./contracts/Multiplier3Verifier.sol", bumped_mult_plonk);
