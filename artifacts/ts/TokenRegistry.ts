export const TokenRegistry = 
{
  "contractName": "TokenRegistry",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "symbolHashToTokenIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "token",
          "type": "address"
        }
      ],
      "name": "setTokenAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "symbol",
          "type": "string"
        }
      ],
      "name": "getTokenIndexBySymbol",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "symbol",
          "type": "string"
        }
      ],
      "name": "getTokenAddressBySymbol",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getTokenAddressByIndex",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getTokenSymbolByIndex",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tokenSymbolList",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "tokenSymbolListLength",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "symbolHashToTokenAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    }
  ],
  "bytecode": "0x6060604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610de0806100536000396000f3006060604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806313b435ff146100b457806317456e56146100ef5780632e1e1bb31461016b5780633550b6d9146101dc5780635715c5b7146102795780636e7cbb0d146102dc5780638da5cb5b1461037857806395f121bf146103cd578063c51ccb4014610469578063deb5f37614610498578063f2fde38b146104ff575b600080fd5b34156100bf57600080fd5b6100d9600480803560001916906020019091905050610538565b6040518082815260200191505060405180910390f35b34156100fa57600080fd5b610169600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610550565b005b341561017657600080fd5b6101c6600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506107de565b6040518082815260200191505060405180910390f35b34156101e757600080fd5b610237600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610865565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561028457600080fd5b61029a600480803590602001909190505061090c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102e757600080fd5b6102fd60048080359060200190919050506109ce565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561033d578082015181840152602081019050610322565b50505050905090810190601f16801561036a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561038357600080fd5b61038b610a87565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103d857600080fd5b6103ee6004808035906020019091905050610aac565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561042e578082015181840152602081019050610413565b50505050905090810190601f16801561045b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561047457600080fd5b61047c610b5f565b604051808260ff1660ff16815260200191505060405180910390f35b34156104a357600080fd5b6104bd600480803560001916906020019091905050610b73565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561050a57600080fd5b610536600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ba6565b005b60026020528060005260406000206000915090505481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105ad57600080fd5b61010061010360009054906101000a900460ff1660ff161015156105d057600080fd5b826040518082805190602001908083835b60208310151561060657805182526020820191506020810190506020830392506105e1565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209050600073ffffffffffffffffffffffffffffffffffffffff1660016000836000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561077f5782600361010360009054906101000a900460ff1660ff16610100811015156106c957fe5b0190805190602001906106dd929190610cfb565b5061010360009054906101000a900460ff1660ff1660016000836000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610103600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff160217905550505b8160016000836000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b600060026000836040518082805190602001908083835b60208310151561081a57805182526020820191506020810190506020830392506107f5565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902060001916600019168152602001908152602001600020549050919050565b600060016000836040518082805190602001908083835b6020831015156108a1578051825260208201915060208101905060208303925061087c565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000806003836101008110151561091f57fe5b019050600160008260405180828054600181600116156101000203166002900480156109825780601f10610960576101008083540402835291820191610982565b820191906000526020600020905b81548152906001019060200180831161096e575b505091505060405180910390206000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915050919050565b6109d6610d7b565b600382610100811015156109e657fe5b018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a7b5780601f10610a5057610100808354040283529160200191610a7b565b820191906000526020600020905b815481529060010190602001808311610a5e57829003601f168201915b50505050509050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60038161010081101515610abc57fe5b016000915090508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b575780601f10610b2c57610100808354040283529160200191610b57565b820191906000526020600020905b815481529060010190602001808311610b3a57829003601f168201915b505050505081565b61010360009054906101000a900460ff1681565b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c0157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610c3d57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610d3c57805160ff1916838001178555610d6a565b82800160010185558215610d6a579182015b82811115610d69578251825591602001919060010190610d4e565b5b509050610d779190610d8f565b5090565b602060405190810160405280600081525090565b610db191905b80821115610dad576000816000905550600101610d95565b5090565b905600a165627a7a72305820d0e1f54de8c28dfa16205b2b690997f1101141c32c2430f9cc8b121f9693c5bd0029",
  "deployedBytecode": "0x6060604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806313b435ff146100b457806317456e56146100ef5780632e1e1bb31461016b5780633550b6d9146101dc5780635715c5b7146102795780636e7cbb0d146102dc5780638da5cb5b1461037857806395f121bf146103cd578063c51ccb4014610469578063deb5f37614610498578063f2fde38b146104ff575b600080fd5b34156100bf57600080fd5b6100d9600480803560001916906020019091905050610538565b6040518082815260200191505060405180910390f35b34156100fa57600080fd5b610169600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610550565b005b341561017657600080fd5b6101c6600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506107de565b6040518082815260200191505060405180910390f35b34156101e757600080fd5b610237600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610865565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561028457600080fd5b61029a600480803590602001909190505061090c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102e757600080fd5b6102fd60048080359060200190919050506109ce565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561033d578082015181840152602081019050610322565b50505050905090810190601f16801561036a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561038357600080fd5b61038b610a87565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103d857600080fd5b6103ee6004808035906020019091905050610aac565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561042e578082015181840152602081019050610413565b50505050905090810190601f16801561045b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561047457600080fd5b61047c610b5f565b604051808260ff1660ff16815260200191505060405180910390f35b34156104a357600080fd5b6104bd600480803560001916906020019091905050610b73565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561050a57600080fd5b610536600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ba6565b005b60026020528060005260406000206000915090505481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105ad57600080fd5b61010061010360009054906101000a900460ff1660ff161015156105d057600080fd5b826040518082805190602001908083835b60208310151561060657805182526020820191506020810190506020830392506105e1565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209050600073ffffffffffffffffffffffffffffffffffffffff1660016000836000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561077f5782600361010360009054906101000a900460ff1660ff16610100811015156106c957fe5b0190805190602001906106dd929190610cfb565b5061010360009054906101000a900460ff1660ff1660016000836000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610103600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff160217905550505b8160016000836000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b600060026000836040518082805190602001908083835b60208310151561081a57805182526020820191506020810190506020830392506107f5565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902060001916600019168152602001908152602001600020549050919050565b600060016000836040518082805190602001908083835b6020831015156108a1578051825260208201915060208101905060208303925061087c565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000806003836101008110151561091f57fe5b019050600160008260405180828054600181600116156101000203166002900480156109825780601f10610960576101008083540402835291820191610982565b820191906000526020600020905b81548152906001019060200180831161096e575b505091505060405180910390206000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915050919050565b6109d6610d7b565b600382610100811015156109e657fe5b018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a7b5780601f10610a5057610100808354040283529160200191610a7b565b820191906000526020600020905b815481529060010190602001808311610a5e57829003601f168201915b50505050509050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60038161010081101515610abc57fe5b016000915090508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b575780601f10610b2c57610100808354040283529160200191610b57565b820191906000526020600020905b815481529060010190602001808311610b3a57829003601f168201915b505050505081565b61010360009054906101000a900460ff1681565b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c0157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610c3d57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610d3c57805160ff1916838001178555610d6a565b82800160010185558215610d6a579182015b82811115610d69578251825591602001919060010190610d4e565b5b509050610d779190610d8f565b5090565b602060405190810160405280600081525090565b610db191905b80821115610dad576000816000905550600101610d95565b5090565b905600a165627a7a72305820d0e1f54de8c28dfa16205b2b690997f1101141c32c2430f9cc8b121f9693c5bd0029",
  "sourceMap": "717:2232:0:-;;;509:10:1;501:5;;:18;;;;;;;;;;;;;;;;;;717:2232:0;;;;;;",
  "deployedSourceMap": "717:2232:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;823:55;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1038:478;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2555:138;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1628:145;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2214:198;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2829:118;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;884:34:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;924:34:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;757:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;823:55:0;;;;;;;;;;;;;;;;;:::o;1038:478::-;1167:18;653:5:1;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;1152:3:0;1128:21;;;;;;;;;;;:27;;;1120:36;;;;;;;;1198:6;1188:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:2;51:6;36:153;;;182:3;176:5;171:3;164:6;98:2;93:3;89;82:19;;123:2;118:3;114;107:19;;148:2;143:3;139;132:19;;36:153;;;274:1;267:3;263:2;259:3;254;250;246;315:4;311:3;305;299:5;295:3;356:4;350:3;344:5;340:3;389:7;380;377:2;372:3;365:6;3:399;;;;;;;;;;;;;;;;;;;1167:38:0;;1268:1;1220:50;;:24;:36;1245:10;1220:36;;;;;;;;;;;;;;;;;;;;;;;;;;;:50;;;1216:239;;;1327:6;1286:15;1302:21;;;;;;;;;;;1286:38;;;;;;;;;;;;:47;;;;;;;;;;;;:::i;:::-;;1386:21;;;;;;;;;;;1347:60;;:24;:36;1372:10;1347:36;;;;;;;;;;;;;;;;;;:60;;;;;;;;;;;;;;;;;;1421:21;;:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1216:239;1504:5;1465:24;:36;1490:10;1465:36;;;;;;;;;;;;;;;;;;:44;;;;;;;;;;;;;;;;;;1038:478;;;:::o;2555:138::-;2622:4;2645:22;:41;2678:6;2668:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:2;51:6;36:153;;;182:3;176:5;171:3;164:6;98:2;93:3;89;82:19;;123:2;118:3;114;107:19;;148:2;143:3;139;132:19;;36:153;;;274:1;267:3;263:2;259:3;254;250;246;315:4;311:3;305;299:5;295:3;356:4;350:3;344:5;340:3;389:7;380;377:2;372:3;365:6;3:399;;;;;;;;;;;;;;;;;;;2645:41:0;;;;;;;;;;;;;;;;;;2638:48;;2555:138;;;:::o;1628:145::-;1697:7;1723:24;:43;1758:6;1748:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:2;51:6;36:153;;;182:3;176:5;171:3;164:6;98:2;93:3;89;82:19;;123:2;118:3;114;107:19;;148:2;143:3;139;132:19;;36:153;;;274:1;267:3;263:2;259:3;254;250;246;315:4;311:3;305;299:5;295:3;356:4;350:3;344:5;340:3;389:7;380;377:2;372:3;365:6;3:399;;;;;;;;;;;;;;;;;;;1723:43:0;;;;;;;;;;;;;;;;;;;;;;;;;;;1716:50;;1628:145;;;:::o;2214:198::-;2279:7;2298:21;2322:15;2338:5;2322:22;;;;;;;;;;2298:46;;2362:24;:43;2397:6;2387:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2362:43;;;;;;;;;;;;;;;;;;;;;;;;;;;2355:50;;2214:198;;;;:::o;2829:118::-;2893:6;;:::i;:::-;2918:15;2934:5;2918:22;;;;;;;;;;2911:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2829:118;;;:::o;238:20:1:-;;;;;;;;;;;;;:::o;884:34:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;924:::-;;;;;;;;;;;;;:::o;757:60::-;;;;;;;;;;;;;;;;;;;;;;:::o;832:169:1:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;717:2232:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity 0.4.18;\n\nimport \"zeppelin-solidity/contracts/ownership/Ownable.sol\";\n\n\n/**\n * The TokenRegistry is a basic registry mapping token symbols\n * to their known, deployed addresses on the current blockchain.\n *\n * Note that the TokenRegistry does *not* mediate any of the\n * core protocol's business logic, but, rather, is a helpful\n * utility for Terms Contracts to use in encoding, decoding, and\n * resolving the addresses of currently deployed tokens.\n *\n * At this point in time, administration of the Token Registry is\n * under Dharma Labs' control.  With more sophisticated decentralized\n * governance mechanisms, we intend to shift ownership of this utility\n * contract to the Dharma community.\n */\ncontract TokenRegistry is Ownable {\n    mapping (bytes32 => address) public symbolHashToTokenAddress;\n    mapping (bytes32 => uint) public symbolHashToTokenIndex;\n    string[256] public tokenSymbolList;\n    uint8 public tokenSymbolListLength;\n\n    /**\n     * Maps the given symbol to the given token address.\n     */\n    function setTokenAddress(string symbol, address token) public onlyOwner {\n        require(tokenSymbolListLength < 256);\n\n        bytes32 symbolHash = keccak256(symbol);\n\n        if (symbolHashToTokenAddress[symbolHash] == address(0)) {\n            tokenSymbolList[tokenSymbolListLength] = symbol;\n            symbolHashToTokenAddress[symbolHash] = tokenSymbolListLength;\n            tokenSymbolListLength++;\n        }\n\n        symbolHashToTokenAddress[symbolHash] = token;\n    }\n\n    /**\n     * Given a symbol, resolves the current address of the token the symbol is mapped to.\n     */\n    function getTokenAddressBySymbol(string symbol) public view returns (address) {\n        return symbolHashToTokenAddress[keccak256(symbol)];\n    }\n\n    /**\n     * Given the known index of a token within the registry's symbol list,\n     * returns the address of the token mapped to the symbol at that index.\n     *\n     * This is a useful utility for compactly encoding the address of a token into a\n     * TermsContractParameters string -- by encoding a token by its index in a\n     * a 256 slot array, we can represent a token by a 1 byte uint instead of a 20 byte address.\n     */\n    function getTokenAddressByIndex(uint index) public view returns (address) {\n        string storage symbol = tokenSymbolList[index];\n\n        return symbolHashToTokenAddress[keccak256(symbol)];\n    }\n\n    /**\n     * Given a symbol, resolves the index of the token the symbol is mapped to within the registry's\n     * symbol list.\n     */\n    function getTokenIndexBySymbol(string symbol) public view returns (uint) {\n        return symbolHashToTokenIndex[keccak256(symbol)];\n    }\n\n    /**\n     * Given an index, resolves the symbol of the token at that index in the registry's\n     * token symbol list.\n     */\n    function getTokenSymbolByIndex(uint index) public view returns (string) {\n        return tokenSymbolList[index];\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TokenRegistry.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TokenRegistry.sol",
      "exportedSymbols": {
        "TokenRegistry": [
          131
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.4",
            ".18"
          ]
        },
        "id": 1,
        "name": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "attributes": {
          "SourceUnit": 188,
          "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "scope": 132,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2,
        "name": "ImportDirective",
        "src": "25:59:0"
      },
      {
        "attributes": {
          "contractDependencies": [
            187
          ],
          "contractKind": "contract",
          "documentation": "The TokenRegistry is a basic registry mapping token symbols\nto their known, deployed addresses on the current blockchain.\n * Note that the TokenRegistry does *not* mediate any of the\ncore protocol's business logic, but, rather, is a helpful\nutility for Terms Contracts to use in encoding, decoding, and\nresolving the addresses of currently deployed tokens.\n * At this point in time, administration of the Token Registry is\nunder Dharma Labs' control.  With more sophisticated decentralized\ngovernance mechanisms, we intend to shift ownership of this utility\ncontract to the Dharma community.",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            131,
            187
          ],
          "name": "TokenRegistry",
          "scope": 132
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Ownable",
                  "referencedDeclaration": 187,
                  "type": "contract Ownable"
                },
                "id": 3,
                "name": "UserDefinedTypeName",
                "src": "743:7:0"
              }
            ],
            "id": 4,
            "name": "InheritanceSpecifier",
            "src": "743:7:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "symbolHashToTokenAddress",
              "scope": 131,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => address)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => address)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 5,
                    "name": "ElementaryTypeName",
                    "src": "766:7:0"
                  },
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 6,
                    "name": "ElementaryTypeName",
                    "src": "777:7:0"
                  }
                ],
                "id": 7,
                "name": "Mapping",
                "src": "757:28:0"
              }
            ],
            "id": 8,
            "name": "VariableDeclaration",
            "src": "757:60:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "symbolHashToTokenIndex",
              "scope": 131,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => uint256)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 9,
                    "name": "ElementaryTypeName",
                    "src": "832:7:0"
                  },
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 10,
                    "name": "ElementaryTypeName",
                    "src": "843:4:0"
                  }
                ],
                "id": 11,
                "name": "Mapping",
                "src": "823:25:0"
              }
            ],
            "id": 12,
            "name": "VariableDeclaration",
            "src": "823:55:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenSymbolList",
              "scope": 131,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string storage ref[256] storage ref",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "string storage ref[256] storage pointer"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 13,
                    "name": "ElementaryTypeName",
                    "src": "884:6:0"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "323536",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 256",
                      "value": "256"
                    },
                    "id": 14,
                    "name": "Literal",
                    "src": "891:3:0"
                  }
                ],
                "id": 15,
                "name": "ArrayTypeName",
                "src": "884:11:0"
              }
            ],
            "id": 16,
            "name": "VariableDeclaration",
            "src": "884:34:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenSymbolListLength",
              "scope": 131,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint8",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint8",
                  "type": "uint8"
                },
                "id": 17,
                "name": "ElementaryTypeName",
                "src": "924:5:0"
              }
            ],
            "id": 18,
            "name": "VariableDeclaration",
            "src": "924:34:0"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "setTokenAddress",
              "payable": false,
              "scope": 131,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "symbol",
                      "scope": 70,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 19,
                        "name": "ElementaryTypeName",
                        "src": "1063:6:0"
                      }
                    ],
                    "id": 20,
                    "name": "VariableDeclaration",
                    "src": "1063:13:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "token",
                      "scope": 70,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 21,
                        "name": "ElementaryTypeName",
                        "src": "1078:7:0"
                      }
                    ],
                    "id": 22,
                    "name": "VariableDeclaration",
                    "src": "1078:13:0"
                  }
                ],
                "id": 23,
                "name": "ParameterList",
                "src": "1062:30:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 26,
                "name": "ParameterList",
                "src": "1110:0:0"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 161,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 24,
                    "name": "Identifier",
                    "src": "1100:9:0"
                  }
                ],
                "id": 25,
                "name": "ModifierInvocation",
                "src": "1100:9:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 202,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 27,
                            "name": "Identifier",
                            "src": "1120:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint16",
                                "typeString": "uint16"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 18,
                                  "type": "uint8",
                                  "value": "tokenSymbolListLength"
                                },
                                "id": 28,
                                "name": "Identifier",
                                "src": "1128:21:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "323536",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 256",
                                  "value": "256"
                                },
                                "id": 29,
                                "name": "Literal",
                                "src": "1152:3:0"
                              }
                            ],
                            "id": 30,
                            "name": "BinaryOperation",
                            "src": "1128:27:0"
                          }
                        ],
                        "id": 31,
                        "name": "FunctionCall",
                        "src": "1120:36:0"
                      }
                    ],
                    "id": 32,
                    "name": "ExpressionStatement",
                    "src": "1120:36:0"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        34
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "symbolHash",
                          "scope": 70,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 33,
                            "name": "ElementaryTypeName",
                            "src": "1167:7:0"
                          }
                        ],
                        "id": 34,
                        "name": "VariableDeclaration",
                        "src": "1167:18:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 193,
                              "type": "function () pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 35,
                            "name": "Identifier",
                            "src": "1188:9:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 20,
                              "type": "string memory",
                              "value": "symbol"
                            },
                            "id": 36,
                            "name": "Identifier",
                            "src": "1198:6:0"
                          }
                        ],
                        "id": 37,
                        "name": "FunctionCall",
                        "src": "1188:17:0"
                      }
                    ],
                    "id": 38,
                    "name": "VariableDeclarationStatement",
                    "src": "1167:38:0"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8,
                                  "type": "mapping(bytes32 => address)",
                                  "value": "symbolHashToTokenAddress"
                                },
                                "id": 39,
                                "name": "Identifier",
                                "src": "1220:24:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 34,
                                  "type": "bytes32",
                                  "value": "symbolHash"
                                },
                                "id": 40,
                                "name": "Identifier",
                                "src": "1245:10:0"
                              }
                            ],
                            "id": 41,
                            "name": "IndexAccess",
                            "src": "1220:36:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 42,
                                "name": "ElementaryTypeNameExpression",
                                "src": "1260:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 43,
                                "name": "Literal",
                                "src": "1268:1:0"
                              }
                            ],
                            "id": 44,
                            "name": "FunctionCall",
                            "src": "1260:10:0"
                          }
                        ],
                        "id": 45,
                        "name": "BinaryOperation",
                        "src": "1220:50:0"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "string storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "string storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 16,
                                          "type": "string storage ref[256] storage ref",
                                          "value": "tokenSymbolList"
                                        },
                                        "id": 46,
                                        "name": "Identifier",
                                        "src": "1286:15:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 18,
                                          "type": "uint8",
                                          "value": "tokenSymbolListLength"
                                        },
                                        "id": 47,
                                        "name": "Identifier",
                                        "src": "1302:21:0"
                                      }
                                    ],
                                    "id": 48,
                                    "name": "IndexAccess",
                                    "src": "1286:38:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 20,
                                      "type": "string memory",
                                      "value": "symbol"
                                    },
                                    "id": 49,
                                    "name": "Identifier",
                                    "src": "1327:6:0"
                                  }
                                ],
                                "id": 50,
                                "name": "Assignment",
                                "src": "1286:47:0"
                              }
                            ],
                            "id": 51,
                            "name": "ExpressionStatement",
                            "src": "1286:47:0"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8,
                                          "type": "mapping(bytes32 => address)",
                                          "value": "symbolHashToTokenAddress"
                                        },
                                        "id": 52,
                                        "name": "Identifier",
                                        "src": "1347:24:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 34,
                                          "type": "bytes32",
                                          "value": "symbolHash"
                                        },
                                        "id": 53,
                                        "name": "Identifier",
                                        "src": "1372:10:0"
                                      }
                                    ],
                                    "id": 54,
                                    "name": "IndexAccess",
                                    "src": "1347:36:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 18,
                                      "type": "uint8",
                                      "value": "tokenSymbolListLength"
                                    },
                                    "id": 55,
                                    "name": "Identifier",
                                    "src": "1386:21:0"
                                  }
                                ],
                                "id": 56,
                                "name": "Assignment",
                                "src": "1347:60:0"
                              }
                            ],
                            "id": 57,
                            "name": "ExpressionStatement",
                            "src": "1347:60:0"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "++",
                                  "prefix": false,
                                  "type": "uint8"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 18,
                                      "type": "uint8",
                                      "value": "tokenSymbolListLength"
                                    },
                                    "id": 58,
                                    "name": "Identifier",
                                    "src": "1421:21:0"
                                  }
                                ],
                                "id": 59,
                                "name": "UnaryOperation",
                                "src": "1421:23:0"
                              }
                            ],
                            "id": 60,
                            "name": "ExpressionStatement",
                            "src": "1421:23:0"
                          }
                        ],
                        "id": 61,
                        "name": "Block",
                        "src": "1272:183:0"
                      }
                    ],
                    "id": 62,
                    "name": "IfStatement",
                    "src": "1216:239:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8,
                                  "type": "mapping(bytes32 => address)",
                                  "value": "symbolHashToTokenAddress"
                                },
                                "id": 63,
                                "name": "Identifier",
                                "src": "1465:24:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 34,
                                  "type": "bytes32",
                                  "value": "symbolHash"
                                },
                                "id": 64,
                                "name": "Identifier",
                                "src": "1490:10:0"
                              }
                            ],
                            "id": 65,
                            "name": "IndexAccess",
                            "src": "1465:36:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 22,
                              "type": "address",
                              "value": "token"
                            },
                            "id": 66,
                            "name": "Identifier",
                            "src": "1504:5:0"
                          }
                        ],
                        "id": 67,
                        "name": "Assignment",
                        "src": "1465:44:0"
                      }
                    ],
                    "id": 68,
                    "name": "ExpressionStatement",
                    "src": "1465:44:0"
                  }
                ],
                "id": 69,
                "name": "Block",
                "src": "1110:406:0"
              }
            ],
            "id": 70,
            "name": "FunctionDefinition",
            "src": "1038:478:0"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getTokenAddressBySymbol",
              "payable": false,
              "scope": 131,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "symbol",
                      "scope": 84,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 71,
                        "name": "ElementaryTypeName",
                        "src": "1661:6:0"
                      }
                    ],
                    "id": 72,
                    "name": "VariableDeclaration",
                    "src": "1661:13:0"
                  }
                ],
                "id": 73,
                "name": "ParameterList",
                "src": "1660:15:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 84,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 74,
                        "name": "ElementaryTypeName",
                        "src": "1697:7:0"
                      }
                    ],
                    "id": 75,
                    "name": "VariableDeclaration",
                    "src": "1697:7:0"
                  }
                ],
                "id": 76,
                "name": "ParameterList",
                "src": "1696:9:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 76
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8,
                              "type": "mapping(bytes32 => address)",
                              "value": "symbolHashToTokenAddress"
                            },
                            "id": 77,
                            "name": "Identifier",
                            "src": "1723:24:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bytes32",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 193,
                                  "type": "function () pure returns (bytes32)",
                                  "value": "keccak256"
                                },
                                "id": 78,
                                "name": "Identifier",
                                "src": "1748:9:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 72,
                                  "type": "string memory",
                                  "value": "symbol"
                                },
                                "id": 79,
                                "name": "Identifier",
                                "src": "1758:6:0"
                              }
                            ],
                            "id": 80,
                            "name": "FunctionCall",
                            "src": "1748:17:0"
                          }
                        ],
                        "id": 81,
                        "name": "IndexAccess",
                        "src": "1723:43:0"
                      }
                    ],
                    "id": 82,
                    "name": "Return",
                    "src": "1716:50:0"
                  }
                ],
                "id": 83,
                "name": "Block",
                "src": "1706:67:0"
              }
            ],
            "id": 84,
            "name": "FunctionDefinition",
            "src": "1628:145:0"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getTokenAddressByIndex",
              "payable": false,
              "scope": 131,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "index",
                      "scope": 104,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 85,
                        "name": "ElementaryTypeName",
                        "src": "2246:4:0"
                      }
                    ],
                    "id": 86,
                    "name": "VariableDeclaration",
                    "src": "2246:10:0"
                  }
                ],
                "id": 87,
                "name": "ParameterList",
                "src": "2245:12:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 104,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 88,
                        "name": "ElementaryTypeName",
                        "src": "2279:7:0"
                      }
                    ],
                    "id": 89,
                    "name": "VariableDeclaration",
                    "src": "2279:7:0"
                  }
                ],
                "id": 90,
                "name": "ParameterList",
                "src": "2278:9:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        92
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "symbol",
                          "scope": 104,
                          "stateVariable": false,
                          "storageLocation": "storage",
                          "type": "string storage pointer",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "string",
                              "type": "string storage pointer"
                            },
                            "id": 91,
                            "name": "ElementaryTypeName",
                            "src": "2298:6:0"
                          }
                        ],
                        "id": 92,
                        "name": "VariableDeclaration",
                        "src": "2298:21:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 16,
                              "type": "string storage ref[256] storage ref",
                              "value": "tokenSymbolList"
                            },
                            "id": 93,
                            "name": "Identifier",
                            "src": "2322:15:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 86,
                              "type": "uint256",
                              "value": "index"
                            },
                            "id": 94,
                            "name": "Identifier",
                            "src": "2338:5:0"
                          }
                        ],
                        "id": 95,
                        "name": "IndexAccess",
                        "src": "2322:22:0"
                      }
                    ],
                    "id": 96,
                    "name": "VariableDeclarationStatement",
                    "src": "2298:46:0"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 90
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8,
                              "type": "mapping(bytes32 => address)",
                              "value": "symbolHashToTokenAddress"
                            },
                            "id": 97,
                            "name": "Identifier",
                            "src": "2362:24:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bytes32",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_string_storage_ptr",
                                      "typeString": "string storage pointer"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 193,
                                  "type": "function () pure returns (bytes32)",
                                  "value": "keccak256"
                                },
                                "id": 98,
                                "name": "Identifier",
                                "src": "2387:9:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 92,
                                  "type": "string storage pointer",
                                  "value": "symbol"
                                },
                                "id": 99,
                                "name": "Identifier",
                                "src": "2397:6:0"
                              }
                            ],
                            "id": 100,
                            "name": "FunctionCall",
                            "src": "2387:17:0"
                          }
                        ],
                        "id": 101,
                        "name": "IndexAccess",
                        "src": "2362:43:0"
                      }
                    ],
                    "id": 102,
                    "name": "Return",
                    "src": "2355:50:0"
                  }
                ],
                "id": 103,
                "name": "Block",
                "src": "2288:124:0"
              }
            ],
            "id": 104,
            "name": "FunctionDefinition",
            "src": "2214:198:0"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getTokenIndexBySymbol",
              "payable": false,
              "scope": 131,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "symbol",
                      "scope": 118,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 105,
                        "name": "ElementaryTypeName",
                        "src": "2586:6:0"
                      }
                    ],
                    "id": 106,
                    "name": "VariableDeclaration",
                    "src": "2586:13:0"
                  }
                ],
                "id": 107,
                "name": "ParameterList",
                "src": "2585:15:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 118,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 108,
                        "name": "ElementaryTypeName",
                        "src": "2622:4:0"
                      }
                    ],
                    "id": 109,
                    "name": "VariableDeclaration",
                    "src": "2622:4:0"
                  }
                ],
                "id": 110,
                "name": "ParameterList",
                "src": "2621:6:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 110
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 12,
                              "type": "mapping(bytes32 => uint256)",
                              "value": "symbolHashToTokenIndex"
                            },
                            "id": 111,
                            "name": "Identifier",
                            "src": "2645:22:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bytes32",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 193,
                                  "type": "function () pure returns (bytes32)",
                                  "value": "keccak256"
                                },
                                "id": 112,
                                "name": "Identifier",
                                "src": "2668:9:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 106,
                                  "type": "string memory",
                                  "value": "symbol"
                                },
                                "id": 113,
                                "name": "Identifier",
                                "src": "2678:6:0"
                              }
                            ],
                            "id": 114,
                            "name": "FunctionCall",
                            "src": "2668:17:0"
                          }
                        ],
                        "id": 115,
                        "name": "IndexAccess",
                        "src": "2645:41:0"
                      }
                    ],
                    "id": 116,
                    "name": "Return",
                    "src": "2638:48:0"
                  }
                ],
                "id": 117,
                "name": "Block",
                "src": "2628:65:0"
              }
            ],
            "id": 118,
            "name": "FunctionDefinition",
            "src": "2555:138:0"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getTokenSymbolByIndex",
              "payable": false,
              "scope": 131,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "index",
                      "scope": 130,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 119,
                        "name": "ElementaryTypeName",
                        "src": "2860:4:0"
                      }
                    ],
                    "id": 120,
                    "name": "VariableDeclaration",
                    "src": "2860:10:0"
                  }
                ],
                "id": 121,
                "name": "ParameterList",
                "src": "2859:12:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 130,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 122,
                        "name": "ElementaryTypeName",
                        "src": "2893:6:0"
                      }
                    ],
                    "id": 123,
                    "name": "VariableDeclaration",
                    "src": "2893:6:0"
                  }
                ],
                "id": 124,
                "name": "ParameterList",
                "src": "2892:8:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 124
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 16,
                              "type": "string storage ref[256] storage ref",
                              "value": "tokenSymbolList"
                            },
                            "id": 125,
                            "name": "Identifier",
                            "src": "2918:15:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 120,
                              "type": "uint256",
                              "value": "index"
                            },
                            "id": 126,
                            "name": "Identifier",
                            "src": "2934:5:0"
                          }
                        ],
                        "id": 127,
                        "name": "IndexAccess",
                        "src": "2918:22:0"
                      }
                    ],
                    "id": 128,
                    "name": "Return",
                    "src": "2911:29:0"
                  }
                ],
                "id": 129,
                "name": "Block",
                "src": "2901:46:0"
              }
            ],
            "id": 130,
            "name": "FunctionDefinition",
            "src": "2829:118:0"
          }
        ],
        "id": 131,
        "name": "ContractDefinition",
        "src": "717:2232:0"
      }
    ],
    "id": 132,
    "name": "SourceUnit",
    "src": "0:2950:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0x780843cbbf6294d040e45954e871336ce52f0bea"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0x5833e409d1c61e4d3139654db5faea6ee819a664"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-25T23:15:13.019Z"
}