// SPDX-License-Identifier: UNLICENSE
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

import 'hardhat/console.sol';

/*

1 line = <100 character
4 lines = 1 stanza
4 stanza = 1 chapter = 16 lines

*/

contract TheTapestry is ERC721 {
	uint256 currentLine;
	mapping(uint256 => string) public tapestryLines;

	constructor() ERC721('TheTapestry', 'TAPESTRY') {}

	// anyone should be able to add a line to the tapestry
	function weave(string memory _line) public {
		// require(_line.length > 0, "Line must be non-empty");
		require(
			bytes(_line).length < 101,
			'Lines are limited to 100 characters'
		);

		// require number of lines in author wallet to be less than 1
		require(
			balanceOf(msg.sender) < 1,
			'Authors CANT add more than 1 line to the tapestry'
		);

		// start with line 1
		currentLine++;
		tapestryLines[currentLine] = _line;

		_safeMint(msg.sender, currentLine);
	}
}
