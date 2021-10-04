// SPDX-License-Identifier: UNLICENSE
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

import 'hardhat/console.sol';

contract TheTapestry is ERC721 {
  constructor() ERC721('TheTapestry', 'TAPESTRY') {
    
  }
}
