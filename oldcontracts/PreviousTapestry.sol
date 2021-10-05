
contract Tapestry is ERC721, Ownable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  mapping(string => uint8) public myTokenURI;
  mapping(string => uint8) public myTokenName;
  mapping(uint256 => Line) public lines;
  mapping(address => uint8) public linesOwned;
  mapping(address => uint256) public lastLineForOwner;

  bool private reentrancyLock = false;
  bool public communityGrant = true;

  struct Line {
    string text;
  }

  event TokenBought(
    uint256 mintedTokenID,
    string line,
    uint256 lineLength
  );

  modifier reentrancyGuard {
    if (reentrancyLock) {
      revert();
    }
    reentrancyLock = true;
    _;
    reentrancyLock = false;
  }

  constructor() public ERC721("Tapestry", "TPS") {}

  function mint(
    string memory _myTokenURI,
    string memory _line,
    uint256 position
  ) external payable reentrancyGuard {
    // new token id
    uint256 newItemId = _tokenIds.current();
    // ensure the line is in the wanted position
    require(newItemId == position, "Position is incorrect");
    // ensure the owner doesn't already have more than 10 lines
    require(linesOwned[msg.sender] < 10, "Address has already minted 10 lines");
    // ensure there are at least 16 lines between mints of the same address
    require(lastLineForOwner[msg.sender] < (newItemId - 16), "Address has already minted 10 lines");
    // Validate token to be minted
    _validateTokenToBeMinted(_myTokenURI, _line);
    // mark token URI as minted
    myTokenURI[_myTokenURI] = 1;
    // mark token name as taken, avoid same line minted twice
    myTokenName[_line] = 1;
    // save line on chain
    lines[newItemId].text = _line;
    // increment lines owned by this account
    linesOwned[msg.sender] ++;
    // mark the last line number for this owner (need to have 16 lines inbetween mints)
    lastLineForOwner[msg.sender] = newItemId;
    // mint token && assign ownership of token to msg.sender
    _safeMint(msg.sender, newItemId);
    // set token url
    _setTokenURI(newItemId, _myTokenURI);
    // emit TokenBought event
    emit TokenBought(newItemId, _line, bytes(_line).length);
    // increment token counter for sold token
    _tokenIds.increment();
  }
    
  function _validateTokenToBeMinted(
    string memory _myTokenURI,
    string memory _line
  ) internal view {
    // avoid minting same uri
    require(myTokenURI[_myTokenURI] != 1, "Token URI is already minted");
    // avoid minting the same line
    require(myTokenName[_line] != 1, "Line is already minted");
    // enforce maximum length
    require(bytes(_line).length < 150, "Line is too long");
    
  }

  function withdraw() public payable onlyOwner {
    uint256 balance = address(this).balance;
    msg.sender.transfer(balance);
  }

  function getLine(uint256 _tokenID) public view returns (string memory) {
    require(_tokenID <= _tokenIds.current());
    return (lines[_tokenID].text);
  }

  function toggleCommunityGrant() external onlyOwner {
    communityGrant = !communityGrant;
  }

  receive() external payable {}
}