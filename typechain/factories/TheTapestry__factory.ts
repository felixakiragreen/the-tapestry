/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TheTapestry, TheTapestryInterface } from "../TheTapestry";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chapterIndex",
        type: "uint256",
      },
    ],
    name: "readChapter2",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lineIndex",
        type: "uint256",
      },
    ],
    name: "readLine",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "stanzaIndex",
        type: "uint256",
      },
    ],
    name: "readStanza",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tapestryLines",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_line",
        type: "string",
      },
    ],
    name: "weave",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600b81526020017f54686554617065737472790000000000000000000000000000000000000000008152506040518060400160405280600881526020017f5441504553545259000000000000000000000000000000000000000000000000815250816000908051906020019062000096929190620000b8565b508060019080519060200190620000af929190620000b8565b505050620001cd565b828054620000c69062000168565b90600052602060002090601f016020900481019282620000ea576000855562000136565b82601f106200010557805160ff191683800117855562000136565b8280016001018555821562000136579182015b828111156200013557825182559160200191906001019062000118565b5b50905062000145919062000149565b5090565b5b80821115620001645760008160009055506001016200014a565b5090565b600060028204905060018216806200018157607f821691505b602082108114156200019857620001976200019e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b61304f80620001dd6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80635e9d1674116100a2578063a22cb46511610071578063a22cb46514610317578063b88d4fde14610333578063c87b56dd1461034f578063c9ef25dd1461037f578063e985e9c5146103af57610116565b80635e9d1674146102695780636352211e1461029957806370a08231146102c957806395d89b41146102f957610116565b806323b872dd116100e957806323b872dd146101b55780632def75b7146101d15780632f1248fd146101ed578063321d038b1461021d57806342842e0e1461024d57610116565b806301ffc9a71461011b57806306fdde031461014b578063081812fc14610169578063095ea7b314610199575b600080fd5b61013560048036038101906101309190611f09565b6103df565b6040516101429190612445565b60405180910390f35b6101536104c1565b6040516101609190612460565b60405180910390f35b610183600480360381019061017e9190611fac565b610553565b60405161019091906123de565b60405180910390f35b6101b360048036038101906101ae9190611ec9565b6105d8565b005b6101cf60048036038101906101ca9190611db3565b6106f0565b005b6101eb60048036038101906101e69190611f63565b610750565b005b61020760048036038101906102029190611fac565b6108bc565b6040516102149190612460565b60405180910390f35b61023760048036038101906102329190611fac565b61095c565b6040516102449190612460565b60405180910390f35b61026760048036038101906102629190611db3565b610a1e565b005b610283600480360381019061027e9190611fac565b610a3e565b6040516102909190612460565b60405180910390f35b6102b360048036038101906102ae9190611fac565b610ae3565b6040516102c091906123de565b60405180910390f35b6102e360048036038101906102de9190611d46565b610b95565b6040516102f09190612682565b60405180910390f35b610301610c4d565b60405161030e9190612460565b60405180910390f35b610331600480360381019061032c9190611e89565b610cdf565b005b61034d60048036038101906103489190611e06565b610e60565b005b61036960048036038101906103649190611fac565b610ec2565b6040516103769190612460565b60405180910390f35b61039960048036038101906103949190611fac565b610f69565b6040516103a69190612460565b60405180910390f35b6103c960048036038101906103c49190611d73565b61102b565b6040516103d69190612445565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104aa57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806104ba57506104b9826110bf565b5b9050919050565b6060600080546104d090612952565b80601f01602080910402602001604051908101604052809291908181526020018280546104fc90612952565b80156105495780601f1061051e57610100808354040283529160200191610549565b820191906000526020600020905b81548152906001019060200180831161052c57829003601f168201915b5050505050905090565b600061055e82611129565b61059d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610594906125c2565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105e382610ae3565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610654576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064b90612622565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610673611195565b73ffffffffffffffffffffffffffffffffffffffff1614806106a257506106a18161069c611195565b61102b565b5b6106e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d890612522565b60405180910390fd5b6106eb838361119d565b505050565b6107016106fb611195565b82611256565b610740576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073790612642565b60405180910390fd5b61074b838383611334565b505050565b6065815110610794576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078b90612542565b60405180910390fd5b6004600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410610816576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080d90612662565b60405180910390fd5b60066000815480929190610829906129b5565b9190505550806007600060065481526020019081526020016000209080519060200190610857929190611b5a565b50600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154809291906108a8906129b5565b91905055506108b933600654611590565b50565b600760205280600052604060002060009150905080546108db90612952565b80601f016020809104026020016040519081016040528092919081815260200182805461090790612952565b80156109545780601f1061092957610100808354040283529160200191610954565b820191906000526020600020905b81548152906001019060200180831161093757829003601f168201915b505050505081565b60608060005b6010811015610a1457600060108561097a919061280e565b6001836109879190612787565b6109919190612787565b9050826040518060400160405280600181526020017f0a00000000000000000000000000000000000000000000000000000000000000815250600760008481526020019081526020016000206040516020016109ef93929190612389565b6040516020818303038152906040529250508080610a0c906129b5565b915050610962565b5080915050919050565b610a3983838360405180602001604052806000815250610e60565b505050565b6060600760008381526020019081526020016000208054610a5e90612952565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8a90612952565b8015610ad75780601f10610aac57610100808354040283529160200191610ad7565b820191906000526020600020905b815481529060010190602001808311610aba57829003601f168201915b50505050509050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610b8c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8390612582565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c06576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bfd90612562565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060018054610c5c90612952565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8890612952565b8015610cd55780601f10610caa57610100808354040283529160200191610cd5565b820191906000526020600020905b815481529060010190602001808311610cb857829003601f168201915b5050505050905090565b610ce7611195565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d55576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4c906124e2565b60405180910390fd5b8060056000610d62611195565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610e0f611195565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610e549190612445565b60405180910390a35050565b610e71610e6b611195565b83611256565b610eb0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ea790612642565b60405180910390fd5b610ebc848484846115ae565b50505050565b6060610ecd82611129565b610f0c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0390612602565b60405180910390fd5b6000610f1661160a565b90506000815111610f365760405180602001604052806000815250610f61565b80610f4084611621565b604051602001610f519291906123ba565b6040516020818303038152906040525b915050919050565b60608060005b6005811015611021576000600485610f87919061280e565b600183610f949190612787565b610f9e9190612787565b9050826040518060400160405280600181526020017f0a0000000000000000000000000000000000000000000000000000000000000081525060076000848152602001908152602001600020604051602001610ffc93929190612389565b6040516020818303038152906040529250508080611019906129b5565b915050610f6f565b5080915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661121083610ae3565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061126182611129565b6112a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129790612502565b60405180910390fd5b60006112ab83610ae3565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061131a57508373ffffffffffffffffffffffffffffffffffffffff1661130284610553565b73ffffffffffffffffffffffffffffffffffffffff16145b8061132b575061132a818561102b565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661135482610ae3565b73ffffffffffffffffffffffffffffffffffffffff16146113aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a1906125e2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561141a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611411906124c2565b60405180910390fd5b611425838383611782565b61143060008261119d565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114809190612868565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114d79190612787565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6115aa828260405180602001604052806000815250611787565b5050565b6115b9848484611334565b6115c5848484846117e2565b611604576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115fb90612482565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000821415611669576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061177d565b600082905060005b6000821461169b578080611684906129b5565b915050600a8261169491906127dd565b9150611671565b60008167ffffffffffffffff8111156116b7576116b6612aeb565b5b6040519080825280601f01601f1916602001820160405280156116e95781602001600182028036833780820191505090505b5090505b60008514611776576001826117029190612868565b9150600a8561171191906129fe565b603061171d9190612787565b60f81b81838151811061173357611732612abc565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561176f91906127dd565b94506116ed565b8093505050505b919050565b505050565b6117918383611979565b61179e60008484846117e2565b6117dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117d490612482565b60405180910390fd5b505050565b60006118038473ffffffffffffffffffffffffffffffffffffffff16611b47565b1561196c578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261182c611195565b8786866040518563ffffffff1660e01b815260040161184e94939291906123f9565b602060405180830381600087803b15801561186857600080fd5b505af192505050801561189957506040513d601f19601f820116820180604052508101906118969190611f36565b60015b61191c573d80600081146118c9576040519150601f19603f3d011682016040523d82523d6000602084013e6118ce565b606091505b50600081511415611914576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161190b90612482565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611971565b600190505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156119e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119e0906125a2565b60405180910390fd5b6119f281611129565b15611a32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a29906124a2565b60405180910390fd5b611a3e60008383611782565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611a8e9190612787565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600080823b905060008111915050919050565b828054611b6690612952565b90600052602060002090601f016020900481019282611b885760008555611bcf565b82601f10611ba157805160ff1916838001178555611bcf565b82800160010185558215611bcf579182015b82811115611bce578251825591602001919060010190611bb3565b5b509050611bdc9190611be0565b5090565b5b80821115611bf9576000816000905550600101611be1565b5090565b6000611c10611c0b846126c2565b61269d565b905082815260208101848484011115611c2c57611c2b612b1f565b5b611c37848285612910565b509392505050565b6000611c52611c4d846126f3565b61269d565b905082815260208101848484011115611c6e57611c6d612b1f565b5b611c79848285612910565b509392505050565b600081359050611c9081612fbd565b92915050565b600081359050611ca581612fd4565b92915050565b600081359050611cba81612feb565b92915050565b600081519050611ccf81612feb565b92915050565b600082601f830112611cea57611ce9612b1a565b5b8135611cfa848260208601611bfd565b91505092915050565b600082601f830112611d1857611d17612b1a565b5b8135611d28848260208601611c3f565b91505092915050565b600081359050611d4081613002565b92915050565b600060208284031215611d5c57611d5b612b29565b5b6000611d6a84828501611c81565b91505092915050565b60008060408385031215611d8a57611d89612b29565b5b6000611d9885828601611c81565b9250506020611da985828601611c81565b9150509250929050565b600080600060608486031215611dcc57611dcb612b29565b5b6000611dda86828701611c81565b9350506020611deb86828701611c81565b9250506040611dfc86828701611d31565b9150509250925092565b60008060008060808587031215611e2057611e1f612b29565b5b6000611e2e87828801611c81565b9450506020611e3f87828801611c81565b9350506040611e5087828801611d31565b925050606085013567ffffffffffffffff811115611e7157611e70612b24565b5b611e7d87828801611cd5565b91505092959194509250565b60008060408385031215611ea057611e9f612b29565b5b6000611eae85828601611c81565b9250506020611ebf85828601611c96565b9150509250929050565b60008060408385031215611ee057611edf612b29565b5b6000611eee85828601611c81565b9250506020611eff85828601611d31565b9150509250929050565b600060208284031215611f1f57611f1e612b29565b5b6000611f2d84828501611cab565b91505092915050565b600060208284031215611f4c57611f4b612b29565b5b6000611f5a84828501611cc0565b91505092915050565b600060208284031215611f7957611f78612b29565b5b600082013567ffffffffffffffff811115611f9757611f96612b24565b5b611fa384828501611d03565b91505092915050565b600060208284031215611fc257611fc1612b29565b5b6000611fd084828501611d31565b91505092915050565b611fe28161289c565b82525050565b611ff1816128ae565b82525050565b600061200282612739565b61200c818561274f565b935061201c81856020860161291f565b61202581612b2e565b840191505092915050565b600061203b82612739565b6120458185612760565b935061205581856020860161291f565b80840191505092915050565b6000815461206e81612952565b6120788186612760565b9450600182166000811461209357600181146120a4576120d7565b60ff198316865281860193506120d7565b6120ad85612724565b60005b838110156120cf578154818901526001820191506020810190506120b0565b838801955050505b50505092915050565b60006120eb82612744565b6120f5818561276b565b935061210581856020860161291f565b61210e81612b2e565b840191505092915050565b600061212482612744565b61212e818561277c565b935061213e81856020860161291f565b80840191505092915050565b600061215760328361276b565b915061216282612b3f565b604082019050919050565b600061217a601c8361276b565b915061218582612b8e565b602082019050919050565b600061219d60248361276b565b91506121a882612bb7565b604082019050919050565b60006121c060198361276b565b91506121cb82612c06565b602082019050919050565b60006121e3602c8361276b565b91506121ee82612c2f565b604082019050919050565b600061220660388361276b565b915061221182612c7e565b604082019050919050565b600061222960238361276b565b915061223482612ccd565b604082019050919050565b600061224c602a8361276b565b915061225782612d1c565b604082019050919050565b600061226f60298361276b565b915061227a82612d6b565b604082019050919050565b600061229260208361276b565b915061229d82612dba565b602082019050919050565b60006122b5602c8361276b565b91506122c082612de3565b604082019050919050565b60006122d860298361276b565b91506122e382612e32565b604082019050919050565b60006122fb602f8361276b565b915061230682612e81565b604082019050919050565b600061231e60218361276b565b915061232982612ed0565b604082019050919050565b600061234160318361276b565b915061234c82612f1f565b604082019050919050565b6000612364603b8361276b565b915061236f82612f6e565b604082019050919050565b61238381612906565b82525050565b60006123958286612030565b91506123a18285612030565b91506123ad8284612061565b9150819050949350505050565b60006123c68285612119565b91506123d28284612119565b91508190509392505050565b60006020820190506123f36000830184611fd9565b92915050565b600060808201905061240e6000830187611fd9565b61241b6020830186611fd9565b612428604083018561237a565b818103606083015261243a8184611ff7565b905095945050505050565b600060208201905061245a6000830184611fe8565b92915050565b6000602082019050818103600083015261247a81846120e0565b905092915050565b6000602082019050818103600083015261249b8161214a565b9050919050565b600060208201905081810360008301526124bb8161216d565b9050919050565b600060208201905081810360008301526124db81612190565b9050919050565b600060208201905081810360008301526124fb816121b3565b9050919050565b6000602082019050818103600083015261251b816121d6565b9050919050565b6000602082019050818103600083015261253b816121f9565b9050919050565b6000602082019050818103600083015261255b8161221c565b9050919050565b6000602082019050818103600083015261257b8161223f565b9050919050565b6000602082019050818103600083015261259b81612262565b9050919050565b600060208201905081810360008301526125bb81612285565b9050919050565b600060208201905081810360008301526125db816122a8565b9050919050565b600060208201905081810360008301526125fb816122cb565b9050919050565b6000602082019050818103600083015261261b816122ee565b9050919050565b6000602082019050818103600083015261263b81612311565b9050919050565b6000602082019050818103600083015261265b81612334565b9050919050565b6000602082019050818103600083015261267b81612357565b9050919050565b6000602082019050612697600083018461237a565b92915050565b60006126a76126b8565b90506126b38282612984565b919050565b6000604051905090565b600067ffffffffffffffff8211156126dd576126dc612aeb565b5b6126e682612b2e565b9050602081019050919050565b600067ffffffffffffffff82111561270e5761270d612aeb565b5b61271782612b2e565b9050602081019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600081905092915050565b600061279282612906565b915061279d83612906565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156127d2576127d1612a2f565b5b828201905092915050565b60006127e882612906565b91506127f383612906565b92508261280357612802612a5e565b5b828204905092915050565b600061281982612906565b915061282483612906565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561285d5761285c612a2f565b5b828202905092915050565b600061287382612906565b915061287e83612906565b92508282101561289157612890612a2f565b5b828203905092915050565b60006128a7826128e6565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561293d578082015181840152602081019050612922565b8381111561294c576000848401525b50505050565b6000600282049050600182168061296a57607f821691505b6020821081141561297e5761297d612a8d565b5b50919050565b61298d82612b2e565b810181811067ffffffffffffffff821117156129ac576129ab612aeb565b5b80604052505050565b60006129c082612906565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156129f3576129f2612a2f565b5b600182019050919050565b6000612a0982612906565b9150612a1483612906565b925082612a2457612a23612a5e565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4c696e657320617265206c696d6974656420746f20313030206368617261637460008201527f6572730000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b7f417574686f72732043414e5420616464206d6f7265207468616e2034206c696e60008201527f657320696e20746f74616c20746f207468652074617065737472790000000000602082015250565b612fc68161289c565b8114612fd157600080fd5b50565b612fdd816128ae565b8114612fe857600080fd5b50565b612ff4816128ba565b8114612fff57600080fd5b50565b61300b81612906565b811461301657600080fd5b5056fea2646970667358221220a2daf5ebe2fb11d9120d0738740bfa58d0ac4488d76209ea76af1004cb44146864736f6c63430008070033";

export class TheTapestry__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TheTapestry> {
    return super.deploy(overrides || {}) as Promise<TheTapestry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TheTapestry {
    return super.attach(address) as TheTapestry;
  }
  connect(signer: Signer): TheTapestry__factory {
    return super.connect(signer) as TheTapestry__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TheTapestryInterface {
    return new utils.Interface(_abi) as TheTapestryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TheTapestry {
    return new Contract(address, _abi, signerOrProvider) as TheTapestry;
  }
}
