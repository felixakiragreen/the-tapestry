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
  "0x60806040523480156200001157600080fd5b506040518060400160405280600b81526020017f54686554617065737472790000000000000000000000000000000000000000008152506040518060400160405280600881526020017f5441504553545259000000000000000000000000000000000000000000000000815250816000908051906020019062000096929190620000b8565b508060019080519060200190620000af929190620000b8565b505050620001cd565b828054620000c69062000168565b90600052602060002090601f016020900481019282620000ea576000855562000136565b82601f106200010557805160ff191683800117855562000136565b8280016001018555821562000136579182015b828111156200013557825182559160200191906001019062000118565b5b50905062000145919062000149565b5090565b5b80821115620001645760008160009055506001016200014a565b5090565b600060028204905060018216806200018157607f821691505b602082108114156200019857620001976200019e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b612ab180620001dd6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342842e0e11610097578063a22cb46511610066578063a22cb46514610296578063b88d4fde146102b2578063c87b56dd146102ce578063e985e9c5146102fe576100f5565b806342842e0e146101fc5780636352211e1461021857806370a082311461024857806395d89b4114610278576100f5565b8063095ea7b3116100d3578063095ea7b31461017857806323b872dd146101945780632def75b7146101b05780632f1248fd146101cc576100f5565b806301ffc9a7146100fa57806306fdde031461012a578063081812fc14610148575b600080fd5b610114600480360381019061010f9190611b58565b61032e565b6040516101219190611f90565b60405180910390f35b610132610410565b60405161013f9190611fab565b60405180910390f35b610162600480360381019061015d9190611bfb565b6104a2565b60405161016f9190611f29565b60405180910390f35b610192600480360381019061018d9190611b18565b610527565b005b6101ae60048036038101906101a99190611a02565b61063f565b005b6101ca60048036038101906101c59190611bb2565b61069f565b005b6101e660048036038101906101e19190611bfb565b610734565b6040516101f39190611fab565b60405180910390f35b61021660048036038101906102119190611a02565b6107d4565b005b610232600480360381019061022d9190611bfb565b6107f4565b60405161023f9190611f29565b60405180910390f35b610262600480360381019061025d9190611995565b6108a6565b60405161026f91906121ad565b60405180910390f35b61028061095e565b60405161028d9190611fab565b60405180910390f35b6102b060048036038101906102ab9190611ad8565b6109f0565b005b6102cc60048036038101906102c79190611a55565b610b71565b005b6102e860048036038101906102e39190611bfb565b610bd3565b6040516102f59190611fab565b60405180910390f35b610318600480360381019061031391906119c2565b610c7a565b6040516103259190611f90565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103f957507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610409575061040882610d0e565b5b9050919050565b60606000805461041f90612403565b80601f016020809104026020016040519081016040528092919081815260200182805461044b90612403565b80156104985780601f1061046d57610100808354040283529160200191610498565b820191906000526020600020905b81548152906001019060200180831161047b57829003601f168201915b5050505050905090565b60006104ad82610d78565b6104ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e39061210d565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610532826107f4565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059a9061216d565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105c2610de4565b73ffffffffffffffffffffffffffffffffffffffff1614806105f157506105f0816105eb610de4565b610c7a565b5b610630576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106279061206d565b60405180910390fd5b61063a8383610dec565b505050565b61065061064a610de4565b82610ea5565b61068f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106869061218d565b60405180910390fd5b61069a838383610f83565b505050565b60658151106106e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106da9061208d565b60405180910390fd5b600660008154809291906106f690612466565b91905055508060076000600654815260200190815260200160002090805190602001906107249291906117a9565b50610731336006546111df565b50565b6007602052806000526040600020600091509050805461075390612403565b80601f016020809104026020016040519081016040528092919081815260200182805461077f90612403565b80156107cc5780601f106107a1576101008083540402835291602001916107cc565b820191906000526020600020905b8154815290600101906020018083116107af57829003601f168201915b505050505081565b6107ef83838360405180602001604052806000815250610b71565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561089d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610894906120cd565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610917576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090e906120ad565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461096d90612403565b80601f016020809104026020016040519081016040528092919081815260200182805461099990612403565b80156109e65780601f106109bb576101008083540402835291602001916109e6565b820191906000526020600020905b8154815290600101906020018083116109c957829003601f168201915b5050505050905090565b6109f8610de4565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a66576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5d9061202d565b60405180910390fd5b8060056000610a73610de4565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610b20610de4565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610b659190611f90565b60405180910390a35050565b610b82610b7c610de4565b83610ea5565b610bc1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bb89061218d565b60405180910390fd5b610bcd848484846111fd565b50505050565b6060610bde82610d78565b610c1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c149061214d565b60405180910390fd5b6000610c27611259565b90506000815111610c475760405180602001604052806000815250610c72565b80610c5184611270565b604051602001610c62929190611f05565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610e5f836107f4565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610eb082610d78565b610eef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ee69061204d565b60405180910390fd5b6000610efa836107f4565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610f6957508373ffffffffffffffffffffffffffffffffffffffff16610f51846104a2565b73ffffffffffffffffffffffffffffffffffffffff16145b80610f7a5750610f798185610c7a565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610fa3826107f4565b73ffffffffffffffffffffffffffffffffffffffff1614610ff9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ff09061212d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611069576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110609061200d565b60405180910390fd5b6110748383836113d1565b61107f600082610dec565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110cf9190612319565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111269190612292565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6111f98282604051806020016040528060008152506113d6565b5050565b611208848484610f83565b61121484848484611431565b611253576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124a90611fcd565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060008214156112b8576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506113cc565b600082905060005b600082146112ea5780806112d390612466565b915050600a826112e391906122e8565b91506112c0565b60008167ffffffffffffffff8111156113065761130561259c565b5b6040519080825280601f01601f1916602001820160405280156113385781602001600182028036833780820191505090505b5090505b600085146113c5576001826113519190612319565b9150600a8561136091906124af565b603061136c9190612292565b60f81b8183815181106113825761138161256d565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856113be91906122e8565b945061133c565b8093505050505b919050565b505050565b6113e083836115c8565b6113ed6000848484611431565b61142c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142390611fcd565b60405180910390fd5b505050565b60006114528473ffffffffffffffffffffffffffffffffffffffff16611796565b156115bb578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261147b610de4565b8786866040518563ffffffff1660e01b815260040161149d9493929190611f44565b602060405180830381600087803b1580156114b757600080fd5b505af19250505080156114e857506040513d601f19601f820116820180604052508101906114e59190611b85565b60015b61156b573d8060008114611518576040519150601f19603f3d011682016040523d82523d6000602084013e61151d565b606091505b50600081511415611563576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155a90611fcd565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506115c0565b600190505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611638576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161162f906120ed565b60405180910390fd5b61164181610d78565b15611681576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161167890611fed565b60405180910390fd5b61168d600083836113d1565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546116dd9190612292565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600080823b905060008111915050919050565b8280546117b590612403565b90600052602060002090601f0160209004810192826117d7576000855561181e565b82601f106117f057805160ff191683800117855561181e565b8280016001018555821561181e579182015b8281111561181d578251825591602001919060010190611802565b5b50905061182b919061182f565b5090565b5b80821115611848576000816000905550600101611830565b5090565b600061185f61185a846121ed565b6121c8565b90508281526020810184848401111561187b5761187a6125d0565b5b6118868482856123c1565b509392505050565b60006118a161189c8461221e565b6121c8565b9050828152602081018484840111156118bd576118bc6125d0565b5b6118c88482856123c1565b509392505050565b6000813590506118df81612a1f565b92915050565b6000813590506118f481612a36565b92915050565b60008135905061190981612a4d565b92915050565b60008151905061191e81612a4d565b92915050565b600082601f830112611939576119386125cb565b5b813561194984826020860161184c565b91505092915050565b600082601f830112611967576119666125cb565b5b813561197784826020860161188e565b91505092915050565b60008135905061198f81612a64565b92915050565b6000602082840312156119ab576119aa6125da565b5b60006119b9848285016118d0565b91505092915050565b600080604083850312156119d9576119d86125da565b5b60006119e7858286016118d0565b92505060206119f8858286016118d0565b9150509250929050565b600080600060608486031215611a1b57611a1a6125da565b5b6000611a29868287016118d0565b9350506020611a3a868287016118d0565b9250506040611a4b86828701611980565b9150509250925092565b60008060008060808587031215611a6f57611a6e6125da565b5b6000611a7d878288016118d0565b9450506020611a8e878288016118d0565b9350506040611a9f87828801611980565b925050606085013567ffffffffffffffff811115611ac057611abf6125d5565b5b611acc87828801611924565b91505092959194509250565b60008060408385031215611aef57611aee6125da565b5b6000611afd858286016118d0565b9250506020611b0e858286016118e5565b9150509250929050565b60008060408385031215611b2f57611b2e6125da565b5b6000611b3d858286016118d0565b9250506020611b4e85828601611980565b9150509250929050565b600060208284031215611b6e57611b6d6125da565b5b6000611b7c848285016118fa565b91505092915050565b600060208284031215611b9b57611b9a6125da565b5b6000611ba98482850161190f565b91505092915050565b600060208284031215611bc857611bc76125da565b5b600082013567ffffffffffffffff811115611be657611be56125d5565b5b611bf284828501611952565b91505092915050565b600060208284031215611c1157611c106125da565b5b6000611c1f84828501611980565b91505092915050565b611c318161234d565b82525050565b611c408161235f565b82525050565b6000611c518261224f565b611c5b8185612265565b9350611c6b8185602086016123d0565b611c74816125df565b840191505092915050565b6000611c8a8261225a565b611c948185612276565b9350611ca48185602086016123d0565b611cad816125df565b840191505092915050565b6000611cc38261225a565b611ccd8185612287565b9350611cdd8185602086016123d0565b80840191505092915050565b6000611cf6603283612276565b9150611d01826125f0565b604082019050919050565b6000611d19601c83612276565b9150611d248261263f565b602082019050919050565b6000611d3c602483612276565b9150611d4782612668565b604082019050919050565b6000611d5f601983612276565b9150611d6a826126b7565b602082019050919050565b6000611d82602c83612276565b9150611d8d826126e0565b604082019050919050565b6000611da5603883612276565b9150611db08261272f565b604082019050919050565b6000611dc8602383612276565b9150611dd38261277e565b604082019050919050565b6000611deb602a83612276565b9150611df6826127cd565b604082019050919050565b6000611e0e602983612276565b9150611e198261281c565b604082019050919050565b6000611e31602083612276565b9150611e3c8261286b565b602082019050919050565b6000611e54602c83612276565b9150611e5f82612894565b604082019050919050565b6000611e77602983612276565b9150611e82826128e3565b604082019050919050565b6000611e9a602f83612276565b9150611ea582612932565b604082019050919050565b6000611ebd602183612276565b9150611ec882612981565b604082019050919050565b6000611ee0603183612276565b9150611eeb826129d0565b604082019050919050565b611eff816123b7565b82525050565b6000611f118285611cb8565b9150611f1d8284611cb8565b91508190509392505050565b6000602082019050611f3e6000830184611c28565b92915050565b6000608082019050611f596000830187611c28565b611f666020830186611c28565b611f736040830185611ef6565b8181036060830152611f858184611c46565b905095945050505050565b6000602082019050611fa56000830184611c37565b92915050565b60006020820190508181036000830152611fc58184611c7f565b905092915050565b60006020820190508181036000830152611fe681611ce9565b9050919050565b6000602082019050818103600083015261200681611d0c565b9050919050565b6000602082019050818103600083015261202681611d2f565b9050919050565b6000602082019050818103600083015261204681611d52565b9050919050565b6000602082019050818103600083015261206681611d75565b9050919050565b6000602082019050818103600083015261208681611d98565b9050919050565b600060208201905081810360008301526120a681611dbb565b9050919050565b600060208201905081810360008301526120c681611dde565b9050919050565b600060208201905081810360008301526120e681611e01565b9050919050565b6000602082019050818103600083015261210681611e24565b9050919050565b6000602082019050818103600083015261212681611e47565b9050919050565b6000602082019050818103600083015261214681611e6a565b9050919050565b6000602082019050818103600083015261216681611e8d565b9050919050565b6000602082019050818103600083015261218681611eb0565b9050919050565b600060208201905081810360008301526121a681611ed3565b9050919050565b60006020820190506121c26000830184611ef6565b92915050565b60006121d26121e3565b90506121de8282612435565b919050565b6000604051905090565b600067ffffffffffffffff8211156122085761220761259c565b5b612211826125df565b9050602081019050919050565b600067ffffffffffffffff8211156122395761223861259c565b5b612242826125df565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061229d826123b7565b91506122a8836123b7565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156122dd576122dc6124e0565b5b828201905092915050565b60006122f3826123b7565b91506122fe836123b7565b92508261230e5761230d61250f565b5b828204905092915050565b6000612324826123b7565b915061232f836123b7565b925082821015612342576123416124e0565b5b828203905092915050565b600061235882612397565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156123ee5780820151818401526020810190506123d3565b838111156123fd576000848401525b50505050565b6000600282049050600182168061241b57607f821691505b6020821081141561242f5761242e61253e565b5b50919050565b61243e826125df565b810181811067ffffffffffffffff8211171561245d5761245c61259c565b5b80604052505050565b6000612471826123b7565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156124a4576124a36124e0565b5b600182019050919050565b60006124ba826123b7565b91506124c5836123b7565b9250826124d5576124d461250f565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4c696e657320617265206c696d6974656420746f20313030206368617261637460008201527f6572730000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b612a288161234d565b8114612a3357600080fd5b50565b612a3f8161235f565b8114612a4a57600080fd5b50565b612a568161236b565b8114612a6157600080fd5b50565b612a6d816123b7565b8114612a7857600080fd5b5056fea2646970667358221220eddaa533af8cdc6b61016781e37d85ed58b8cde3a2cef6c04dcff5e9ac5ebff264736f6c63430008070033";

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
