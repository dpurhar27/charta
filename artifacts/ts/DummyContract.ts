export const DummyContract = 
{
  "contractName": "DummyContract",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "SECOND_SET",
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
      "constant": false,
      "inputs": [
        {
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "revokeInFirstSet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getSecondSetAuthorizedAgents",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
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
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "isAuthorizedInSecondSet",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "revokeInSecondSet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getFirstSetAuthorizedAgents",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
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
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "authorizeInSecondSet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "authorizeInFirstSet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "isAuthorizedInFirstSet",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "FIRST_SET",
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "agent",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "callingContext",
          "type": "string"
        }
      ],
      "name": "Authorized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "agent",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "callingContext",
          "type": "string"
        }
      ],
      "name": "AuthorizationRevoked",
      "type": "event"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b610cc68061001e6000396000f3006060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633dd6020f146100a95780633fe1b53314610137578063589e9a75146101705780637a381130146101da5780638eb509a11461022b578063a224cfac14610264578063b38b5e58146102ce578063bcd3486614610307578063c305630214610340578063ffe1712114610391575b600080fd5b34156100b457600080fd5b6100bc61041f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100fc5780820151818401526020810190506100e1565b50505050905090810190601f1680156101295780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561014257600080fd5b61016e600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610458565b005b341561017b57600080fd5b6101836104a6565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156101c65780820151818401526020810190506101ab565b505050509050019250505060405180910390f35b34156101e557600080fd5b610211600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506104bd565b604051808215151515815260200191505060405180910390f35b341561023657600080fd5b610262600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506104da565b005b341561026f57600080fd5b610277610528565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102ba57808201518184015260208101905061029f565b505050509050019250505060405180910390f35b34156102d957600080fd5b610305600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061053f565b005b341561031257600080fd5b61033e600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061058d565b005b341561034b57600080fd5b610377600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105db565b604051808215151515815260200191505060405180910390f35b341561039c57600080fd5b6103a46105f8565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103e45780820151818401526020810190506103c9565b50505050905090810190601f1680156104115780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6040805190810160405280601981526020017f64756d6d792d636f6e74726163742d7365636f6e642d7365740000000000000081525081565b6104a3816040805190810160405280601881526020017f64756d6d792d636f6e74726163742d66697273742d736574000000000000000081525060006106319092919063ffffffff16565b50565b6104ae610c09565b6104b86003610927565b905090565b60006104d38260036109bf90919063ffffffff16565b9050919050565b610525816040805190810160405280601981526020017f64756d6d792d636f6e74726163742d7365636f6e642d7365740000000000000081525060036106319092919063ffffffff16565b50565b610530610c09565b61053a6000610927565b905090565b61058a816040805190810160405280601981526020017f64756d6d792d636f6e74726163742d7365636f6e642d736574000000000000008152506003610a189092919063ffffffff16565b50565b6105d8816040805190810160405280601881526020017f64756d6d792d636f6e74726163742d66697273742d73657400000000000000008152506000610a189092919063ffffffff16565b50565b60006105f18260006109bf90919063ffffffff16565b9050919050565b6040805190810160405280601881526020017f64756d6d792d636f6e74726163742d66697273742d736574000000000000000081525081565b600080600061064086866109bf565b151561064b57600080fd5b8560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205492506001866002018054905003915085600201828154811015156106ad57fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508560000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff021916905580866002018481548110151561073e57fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828660010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009055856002018281548110151561082357fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001866002018181805490500391508161086b9190610c1d565b508473ffffffffffffffffffffffffffffffffffffffff167f0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c856040518080602001828103825283818151815260200191508051906020019080838360005b838110156108e55780820151818401526020810190506108ca565b50505050905090810190601f1680156109125780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050505050565b61092f610c09565b816002018054806020026020016040519081016040528092919081815260200182805480156109b357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610969575b50505050509050919050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610a228383610bf4565b1515610a2d57600080fd5b60018360000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550826002018054806001018281610a9d9190610c49565b9160005260206000209001600084909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018360020180549050038360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5826040518080602001828103825283818151815260200191508051906020019080838360005b83811015610bb5578082015181840152602081019050610b9a565b50505050905090810190601f168015610be25780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b6000610c0083836109bf565b15905092915050565b602060405190810160405280600081525090565b815481835581811511610c4457818360005260206000209182019101610c439190610c75565b5b505050565b815481835581811511610c7057818360005260206000209182019101610c6f9190610c75565b5b505050565b610c9791905b80821115610c93576000816000905550600101610c7b565b5090565b905600a165627a7a7230582064883f9a4c3cb7c4539d84bea2868effc17918d95047339155a82b6e1f99ece90029",
  "deployedBytecode": "0x6060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633dd6020f146100a95780633fe1b53314610137578063589e9a75146101705780637a381130146101da5780638eb509a11461022b578063a224cfac14610264578063b38b5e58146102ce578063bcd3486614610307578063c305630214610340578063ffe1712114610391575b600080fd5b34156100b457600080fd5b6100bc61041f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100fc5780820151818401526020810190506100e1565b50505050905090810190601f1680156101295780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561014257600080fd5b61016e600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610458565b005b341561017b57600080fd5b6101836104a6565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156101c65780820151818401526020810190506101ab565b505050509050019250505060405180910390f35b34156101e557600080fd5b610211600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506104bd565b604051808215151515815260200191505060405180910390f35b341561023657600080fd5b610262600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506104da565b005b341561026f57600080fd5b610277610528565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102ba57808201518184015260208101905061029f565b505050509050019250505060405180910390f35b34156102d957600080fd5b610305600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061053f565b005b341561031257600080fd5b61033e600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061058d565b005b341561034b57600080fd5b610377600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105db565b604051808215151515815260200191505060405180910390f35b341561039c57600080fd5b6103a46105f8565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103e45780820151818401526020810190506103c9565b50505050905090810190601f1680156104115780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6040805190810160405280601981526020017f64756d6d792d636f6e74726163742d7365636f6e642d7365740000000000000081525081565b6104a3816040805190810160405280601881526020017f64756d6d792d636f6e74726163742d66697273742d736574000000000000000081525060006106319092919063ffffffff16565b50565b6104ae610c09565b6104b86003610927565b905090565b60006104d38260036109bf90919063ffffffff16565b9050919050565b610525816040805190810160405280601981526020017f64756d6d792d636f6e74726163742d7365636f6e642d7365740000000000000081525060036106319092919063ffffffff16565b50565b610530610c09565b61053a6000610927565b905090565b61058a816040805190810160405280601981526020017f64756d6d792d636f6e74726163742d7365636f6e642d736574000000000000008152506003610a189092919063ffffffff16565b50565b6105d8816040805190810160405280601881526020017f64756d6d792d636f6e74726163742d66697273742d73657400000000000000008152506000610a189092919063ffffffff16565b50565b60006105f18260006109bf90919063ffffffff16565b9050919050565b6040805190810160405280601881526020017f64756d6d792d636f6e74726163742d66697273742d736574000000000000000081525081565b600080600061064086866109bf565b151561064b57600080fd5b8560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205492506001866002018054905003915085600201828154811015156106ad57fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508560000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff021916905580866002018481548110151561073e57fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828660010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009055856002018281548110151561082357fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001866002018181805490500391508161086b9190610c1d565b508473ffffffffffffffffffffffffffffffffffffffff167f0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c856040518080602001828103825283818151815260200191508051906020019080838360005b838110156108e55780820151818401526020810190506108ca565b50505050905090810190601f1680156109125780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050505050565b61092f610c09565b816002018054806020026020016040519081016040528092919081815260200182805480156109b357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610969575b50505050509050919050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610a228383610bf4565b1515610a2d57600080fd5b60018360000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550826002018054806001018281610a9d9190610c49565b9160005260206000209001600084909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018360020180549050038360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5826040518080602001828103825283818151815260200191508051906020019080838360005b83811015610bb5578082015181840152602081019050610b9a565b50505050905090810190601f168015610be25780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b6000610c0083836109bf565b15905092915050565b602060405190810160405280600081525090565b815481835581811511610c4457818360005260206000209182019101610c439190610c75565b5b505050565b815481835581811511610c7057818360005260206000209182019101610c6f9190610c75565b5b505050565b610c9791905b80821115610c93576000816000905550600101610c7b565b5090565b905600a165627a7a7230582064883f9a4c3cb7c4539d84bea2868effc17918d95047339155a82b6e1f99ece90029",
  "sourceMap": "653:1438:18:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "653:1438:18:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;947:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1260:121:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;1952:137;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;1663:142:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1387:124;;;;;;;;;;;;;;;;;;;;;;;;;;;;1811:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;1137:117:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;1017:114;;;;;;;;;;;;;;;;;;;;;;;;;;;;1517:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;880:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;947:63:18;;;;;;;;;;;;;;;;;;;;:::o;1260:121::-;1318:56;1357:5;1364:9;;;;;;;;;;;;;;;;;;1318:18;:38;;:56;;;;;:::i;:::-;1260:121;:::o;1952:137::-;2013:9;;:::i;:::-;2041:41;:19;:39;:41::i;:::-;2034:48;;1952:137;:::o;1663:142::-;1736:4;1759:39;1792:5;1759:19;:32;;:39;;;;:::i;:::-;1752:46;;1663:142;;;:::o;1387:124::-;1446:58;1486:5;1493:10;;;;;;;;;;;;;;;;;;1446:19;:39;;:58;;;;;:::i;:::-;1387:124;:::o;1811:135::-;1871:9;;:::i;:::-;1899:40;:18;:38;:40::i;:::-;1892:47;;1811:135;:::o;1137:117::-;1199:48;1229:5;1236:10;;;;;;;;;;;;;;;;;;1199:19;:29;;:48;;;;;:::i;:::-;1137:117;:::o;1017:114::-;1078:46;1107:5;1114:9;;;;;;;;;;;;;;;;;;1078:18;:28;;:46;;;;;:::i;:::-;1017:114;:::o;1517:140::-;1589:4;1612:38;1644:5;1612:18;:31;;:38;;;;:::i;:::-;1605:45;;1517:140;;;:::o;880:61::-;;;;;;;;;;;;;;;;;;;;:::o;2121:1168:16:-;2489:25;2551:23;2619:19;2452:25;2465:4;2471:5;2452:12;:25::i;:::-;2444:34;;;;;;;;2517:4;:17;;:24;2535:5;2517:24;;;;;;;;;;;;;;;;2489:52;;2608:1;2577:4;:21;;:28;;;;:32;2551:58;;2641:4;:21;;2663:18;2641:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;2619:63;;2745:4;:15;;:22;2761:5;2745:22;;;;;;;;;;;;;;;;2738:29;;;;;;;;;;;2894:11;2848:4;:21;;2870:20;2848:43;;;;;;;;;;;;;;;;;;;:57;;;;;;;;;;;;;;;;;;3009:20;2976:4;:17;;:30;2994:11;2976:30;;;;;;;;;;;;;;;:53;;;;3046:4;:17;;:24;3064:5;3046:24;;;;;;;;;;;;;;;3039:31;;;3144:4;:21;;3166:18;3144:41;;;;;;;;;;;;;;;;;;;3137:48;;;;;;;;;;;3227:1;3195:4;:21;;:33;;;;;;;;;;;;;;:::i;:::-;;3260:5;3239:43;;;3267:14;3239:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2121:1168:16;;;;;;:::o;3646:162::-;3748:9;;:::i;:::-;3780:4;:21;;3773:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3646:162;;;:::o;3295:166::-;3405:4;3432;:15;;:22;3448:5;3432:22;;;;;;;;;;;;;;;;;;;;;;;;;3425:29;;3295:166;;;;:::o;1732:383::-;1884:28;1900:4;1906:5;1884:15;:28::i;:::-;1876:37;;;;;;;;1949:4;1924;:15;;:22;1940:5;1924:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;1963:4;:21;;:33;;;;;;;;;;;:::i;:::-;;;;;;;;;;1990:5;1963:33;;;;;;;;;;;;;;;;;;;;;;;2064:1;2033:4;:21;;:28;;;;:32;2006:4;:17;;:24;2024:5;2006:24;;;;;;;;;;;;;;;:59;;;;2086:5;2075:33;;;2093:14;2075:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1732:383:16;;;:::o;3467:173::-;3580:4;3608:25;3621:4;3627:5;3608:12;:25::i;:::-;3607:26;3600:33;;3467:173;;;;:::o;653:1438:18:-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"../libraries/PermissionsLib.sol\";\n\n\ncontract DummyContract is PermissionEvents {\n    using PermissionsLib for PermissionsLib.Permissions;\n\n    PermissionsLib.Permissions private firstPermissionSet;\n    PermissionsLib.Permissions private secondPermissionSet;\n\n    string public constant FIRST_SET = \"dummy-contract-first-set\";\n    string public constant SECOND_SET = \"dummy-contract-second-set\";\n\n    function authorizeInFirstSet(address agent) public {\n        firstPermissionSet.authorize(agent, FIRST_SET);\n    }\n\n    function authorizeInSecondSet(address agent) public {\n        secondPermissionSet.authorize(agent, SECOND_SET);\n    }\n\n    function revokeInFirstSet(address agent) public {\n        firstPermissionSet.revokeAuthorization(agent, FIRST_SET);\n    }\n\n    function revokeInSecondSet(address agent) public {\n        secondPermissionSet.revokeAuthorization(agent, SECOND_SET);\n    }\n\n    function isAuthorizedInFirstSet(address agent) public constant returns (bool) {\n        return firstPermissionSet.isAuthorized(agent);\n    }\n\n    function isAuthorizedInSecondSet(address agent) public constant returns (bool) {\n        return secondPermissionSet.isAuthorized(agent);\n    }\n\n    function getFirstSetAuthorizedAgents() public view returns (address[]) {\n        return firstPermissionSet.getAuthorizedAgents();\n    }\n\n    function getSecondSetAuthorizedAgents() public view returns (address[]) {\n        return secondPermissionSet.getAuthorizedAgents();\n    }\n}\n",
  "sourcePath": "/Users/graemeboy/Dharma/charta/contracts/test/DummyContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/test/DummyContract.sol",
      "exportedSymbols": {
        "DummyContract": [
          9367
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
        "id": 9250,
        "name": "PragmaDirective",
        "src": "584:23:18"
      },
      {
        "attributes": {
          "SourceUnit": 5704,
          "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/libraries/PermissionsLib.sol",
          "file": "../libraries/PermissionsLib.sol",
          "scope": 9368,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 9251,
        "name": "ImportDirective",
        "src": "609:41:18"
      },
      {
        "attributes": {
          "contractDependencies": [
            5499
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            9367,
            5499
          ],
          "name": "DummyContract",
          "scope": 9368
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
                  "name": "PermissionEvents",
                  "referencedDeclaration": 5499,
                  "type": "contract PermissionEvents"
                },
                "id": 9252,
                "name": "UserDefinedTypeName",
                "src": "679:16:18"
              }
            ],
            "id": 9253,
            "name": "InheritanceSpecifier",
            "src": "679:16:18"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib",
                  "referencedDeclaration": 5703,
                  "type": "library PermissionsLib"
                },
                "id": 9254,
                "name": "UserDefinedTypeName",
                "src": "708:14:18"
              },
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib.Permissions",
                  "referencedDeclaration": 5523,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 9255,
                "name": "UserDefinedTypeName",
                "src": "727:26:18"
              }
            ],
            "id": 9256,
            "name": "UsingForDirective",
            "src": "702:52:18"
          },
          {
            "attributes": {
              "constant": false,
              "name": "firstPermissionSet",
              "scope": 9367,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "struct PermissionsLib.Permissions storage ref",
              "value": null,
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib.Permissions",
                  "referencedDeclaration": 5523,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 9257,
                "name": "UserDefinedTypeName",
                "src": "760:26:18"
              }
            ],
            "id": 9258,
            "name": "VariableDeclaration",
            "src": "760:53:18"
          },
          {
            "attributes": {
              "constant": false,
              "name": "secondPermissionSet",
              "scope": 9367,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "struct PermissionsLib.Permissions storage ref",
              "value": null,
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib.Permissions",
                  "referencedDeclaration": 5523,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 9259,
                "name": "UserDefinedTypeName",
                "src": "819:26:18"
              }
            ],
            "id": 9260,
            "name": "VariableDeclaration",
            "src": "819:54:18"
          },
          {
            "attributes": {
              "constant": true,
              "name": "FIRST_SET",
              "scope": 9367,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string memory",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string storage pointer"
                },
                "id": 9261,
                "name": "ElementaryTypeName",
                "src": "880:6:18"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "64756d6d792d636f6e74726163742d66697273742d736574",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "string",
                  "type": "literal_string \"dummy-contract-first-set\"",
                  "value": "dummy-contract-first-set"
                },
                "id": 9262,
                "name": "Literal",
                "src": "915:26:18"
              }
            ],
            "id": 9263,
            "name": "VariableDeclaration",
            "src": "880:61:18"
          },
          {
            "attributes": {
              "constant": true,
              "name": "SECOND_SET",
              "scope": 9367,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string memory",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string storage pointer"
                },
                "id": 9264,
                "name": "ElementaryTypeName",
                "src": "947:6:18"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "64756d6d792d636f6e74726163742d7365636f6e642d736574",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "string",
                  "type": "literal_string \"dummy-contract-second-set\"",
                  "value": "dummy-contract-second-set"
                },
                "id": 9265,
                "name": "Literal",
                "src": "983:27:18"
              }
            ],
            "id": 9266,
            "name": "VariableDeclaration",
            "src": "947:63:18"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "authorizeInFirstSet",
              "payable": false,
              "scope": 9367,
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
                      "name": "agent",
                      "scope": 9279,
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
                        "id": 9267,
                        "name": "ElementaryTypeName",
                        "src": "1046:7:18"
                      }
                    ],
                    "id": 9268,
                    "name": "VariableDeclaration",
                    "src": "1046:13:18"
                  }
                ],
                "id": 9269,
                "name": "ParameterList",
                "src": "1045:15:18"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9270,
                "name": "ParameterList",
                "src": "1068:0:18"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_string_memory",
                                  "typeString": "string memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "authorize",
                              "referencedDeclaration": 5573,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9258,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "firstPermissionSet"
                                },
                                "id": 9271,
                                "name": "Identifier",
                                "src": "1078:18:18"
                              }
                            ],
                            "id": 9273,
                            "name": "MemberAccess",
                            "src": "1078:28:18"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9268,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 9274,
                            "name": "Identifier",
                            "src": "1107:5:18"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9263,
                              "type": "string memory",
                              "value": "FIRST_SET"
                            },
                            "id": 9275,
                            "name": "Identifier",
                            "src": "1114:9:18"
                          }
                        ],
                        "id": 9276,
                        "name": "FunctionCall",
                        "src": "1078:46:18"
                      }
                    ],
                    "id": 9277,
                    "name": "ExpressionStatement",
                    "src": "1078:46:18"
                  }
                ],
                "id": 9278,
                "name": "Block",
                "src": "1068:63:18"
              }
            ],
            "id": 9279,
            "name": "FunctionDefinition",
            "src": "1017:114:18"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "authorizeInSecondSet",
              "payable": false,
              "scope": 9367,
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
                      "name": "agent",
                      "scope": 9292,
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
                        "id": 9280,
                        "name": "ElementaryTypeName",
                        "src": "1167:7:18"
                      }
                    ],
                    "id": 9281,
                    "name": "VariableDeclaration",
                    "src": "1167:13:18"
                  }
                ],
                "id": 9282,
                "name": "ParameterList",
                "src": "1166:15:18"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9283,
                "name": "ParameterList",
                "src": "1189:0:18"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_string_memory",
                                  "typeString": "string memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "authorize",
                              "referencedDeclaration": 5573,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9260,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "secondPermissionSet"
                                },
                                "id": 9284,
                                "name": "Identifier",
                                "src": "1199:19:18"
                              }
                            ],
                            "id": 9286,
                            "name": "MemberAccess",
                            "src": "1199:29:18"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9281,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 9287,
                            "name": "Identifier",
                            "src": "1229:5:18"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9266,
                              "type": "string memory",
                              "value": "SECOND_SET"
                            },
                            "id": 9288,
                            "name": "Identifier",
                            "src": "1236:10:18"
                          }
                        ],
                        "id": 9289,
                        "name": "FunctionCall",
                        "src": "1199:48:18"
                      }
                    ],
                    "id": 9290,
                    "name": "ExpressionStatement",
                    "src": "1199:48:18"
                  }
                ],
                "id": 9291,
                "name": "Block",
                "src": "1189:65:18"
              }
            ],
            "id": 9292,
            "name": "FunctionDefinition",
            "src": "1137:117:18"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "revokeInFirstSet",
              "payable": false,
              "scope": 9367,
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
                      "name": "agent",
                      "scope": 9305,
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
                        "id": 9293,
                        "name": "ElementaryTypeName",
                        "src": "1286:7:18"
                      }
                    ],
                    "id": 9294,
                    "name": "VariableDeclaration",
                    "src": "1286:13:18"
                  }
                ],
                "id": 9295,
                "name": "ParameterList",
                "src": "1285:15:18"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9296,
                "name": "ParameterList",
                "src": "1308:0:18"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_string_memory",
                                  "typeString": "string memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "revokeAuthorization",
                              "referencedDeclaration": 5659,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9258,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "firstPermissionSet"
                                },
                                "id": 9297,
                                "name": "Identifier",
                                "src": "1318:18:18"
                              }
                            ],
                            "id": 9299,
                            "name": "MemberAccess",
                            "src": "1318:38:18"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9294,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 9300,
                            "name": "Identifier",
                            "src": "1357:5:18"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9263,
                              "type": "string memory",
                              "value": "FIRST_SET"
                            },
                            "id": 9301,
                            "name": "Identifier",
                            "src": "1364:9:18"
                          }
                        ],
                        "id": 9302,
                        "name": "FunctionCall",
                        "src": "1318:56:18"
                      }
                    ],
                    "id": 9303,
                    "name": "ExpressionStatement",
                    "src": "1318:56:18"
                  }
                ],
                "id": 9304,
                "name": "Block",
                "src": "1308:73:18"
              }
            ],
            "id": 9305,
            "name": "FunctionDefinition",
            "src": "1260:121:18"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "revokeInSecondSet",
              "payable": false,
              "scope": 9367,
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
                      "name": "agent",
                      "scope": 9318,
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
                        "id": 9306,
                        "name": "ElementaryTypeName",
                        "src": "1414:7:18"
                      }
                    ],
                    "id": 9307,
                    "name": "VariableDeclaration",
                    "src": "1414:13:18"
                  }
                ],
                "id": 9308,
                "name": "ParameterList",
                "src": "1413:15:18"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9309,
                "name": "ParameterList",
                "src": "1436:0:18"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_string_memory",
                                  "typeString": "string memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "revokeAuthorization",
                              "referencedDeclaration": 5659,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9260,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "secondPermissionSet"
                                },
                                "id": 9310,
                                "name": "Identifier",
                                "src": "1446:19:18"
                              }
                            ],
                            "id": 9312,
                            "name": "MemberAccess",
                            "src": "1446:39:18"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9307,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 9313,
                            "name": "Identifier",
                            "src": "1486:5:18"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9266,
                              "type": "string memory",
                              "value": "SECOND_SET"
                            },
                            "id": 9314,
                            "name": "Identifier",
                            "src": "1493:10:18"
                          }
                        ],
                        "id": 9315,
                        "name": "FunctionCall",
                        "src": "1446:58:18"
                      }
                    ],
                    "id": 9316,
                    "name": "ExpressionStatement",
                    "src": "1446:58:18"
                  }
                ],
                "id": 9317,
                "name": "Block",
                "src": "1436:75:18"
              }
            ],
            "id": 9318,
            "name": "FunctionDefinition",
            "src": "1387:124:18"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isAuthorizedInFirstSet",
              "payable": false,
              "scope": 9367,
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
                      "name": "agent",
                      "scope": 9331,
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
                        "id": 9319,
                        "name": "ElementaryTypeName",
                        "src": "1549:7:18"
                      }
                    ],
                    "id": 9320,
                    "name": "VariableDeclaration",
                    "src": "1549:13:18"
                  }
                ],
                "id": 9321,
                "name": "ParameterList",
                "src": "1548:15:18"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9331,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 9322,
                        "name": "ElementaryTypeName",
                        "src": "1589:4:18"
                      }
                    ],
                    "id": 9323,
                    "name": "VariableDeclaration",
                    "src": "1589:4:18"
                  }
                ],
                "id": 9324,
                "name": "ParameterList",
                "src": "1588:6:18"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 9324
                    },
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
                          "type": "bool",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "isAuthorized",
                              "referencedDeclaration": 5674,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9258,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "firstPermissionSet"
                                },
                                "id": 9325,
                                "name": "Identifier",
                                "src": "1612:18:18"
                              }
                            ],
                            "id": 9326,
                            "name": "MemberAccess",
                            "src": "1612:31:18"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9320,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 9327,
                            "name": "Identifier",
                            "src": "1644:5:18"
                          }
                        ],
                        "id": 9328,
                        "name": "FunctionCall",
                        "src": "1612:38:18"
                      }
                    ],
                    "id": 9329,
                    "name": "Return",
                    "src": "1605:45:18"
                  }
                ],
                "id": 9330,
                "name": "Block",
                "src": "1595:62:18"
              }
            ],
            "id": 9331,
            "name": "FunctionDefinition",
            "src": "1517:140:18"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isAuthorizedInSecondSet",
              "payable": false,
              "scope": 9367,
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
                      "name": "agent",
                      "scope": 9344,
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
                        "id": 9332,
                        "name": "ElementaryTypeName",
                        "src": "1696:7:18"
                      }
                    ],
                    "id": 9333,
                    "name": "VariableDeclaration",
                    "src": "1696:13:18"
                  }
                ],
                "id": 9334,
                "name": "ParameterList",
                "src": "1695:15:18"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9344,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 9335,
                        "name": "ElementaryTypeName",
                        "src": "1736:4:18"
                      }
                    ],
                    "id": 9336,
                    "name": "VariableDeclaration",
                    "src": "1736:4:18"
                  }
                ],
                "id": 9337,
                "name": "ParameterList",
                "src": "1735:6:18"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 9337
                    },
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
                          "type": "bool",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "isAuthorized",
                              "referencedDeclaration": 5674,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9260,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "secondPermissionSet"
                                },
                                "id": 9338,
                                "name": "Identifier",
                                "src": "1759:19:18"
                              }
                            ],
                            "id": 9339,
                            "name": "MemberAccess",
                            "src": "1759:32:18"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9333,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 9340,
                            "name": "Identifier",
                            "src": "1792:5:18"
                          }
                        ],
                        "id": 9341,
                        "name": "FunctionCall",
                        "src": "1759:39:18"
                      }
                    ],
                    "id": 9342,
                    "name": "Return",
                    "src": "1752:46:18"
                  }
                ],
                "id": 9343,
                "name": "Block",
                "src": "1742:63:18"
              }
            ],
            "id": 9344,
            "name": "FunctionDefinition",
            "src": "1663:142:18"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getFirstSetAuthorizedAgents",
              "payable": false,
              "scope": 9367,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9345,
                "name": "ParameterList",
                "src": "1847:2:18"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9355,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "address[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 9346,
                            "name": "ElementaryTypeName",
                            "src": "1871:7:18"
                          }
                        ],
                        "id": 9347,
                        "name": "ArrayTypeName",
                        "src": "1871:9:18"
                      }
                    ],
                    "id": 9348,
                    "name": "VariableDeclaration",
                    "src": "1871:9:18"
                  }
                ],
                "id": 9349,
                "name": "ParameterList",
                "src": "1870:11:18"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 9349
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address[] memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                null
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "getAuthorizedAgents",
                              "referencedDeclaration": 5702,
                              "type": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9258,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "firstPermissionSet"
                                },
                                "id": 9350,
                                "name": "Identifier",
                                "src": "1899:18:18"
                              }
                            ],
                            "id": 9351,
                            "name": "MemberAccess",
                            "src": "1899:38:18"
                          }
                        ],
                        "id": 9352,
                        "name": "FunctionCall",
                        "src": "1899:40:18"
                      }
                    ],
                    "id": 9353,
                    "name": "Return",
                    "src": "1892:47:18"
                  }
                ],
                "id": 9354,
                "name": "Block",
                "src": "1882:64:18"
              }
            ],
            "id": 9355,
            "name": "FunctionDefinition",
            "src": "1811:135:18"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getSecondSetAuthorizedAgents",
              "payable": false,
              "scope": 9367,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9356,
                "name": "ParameterList",
                "src": "1989:2:18"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9366,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "address[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 9357,
                            "name": "ElementaryTypeName",
                            "src": "2013:7:18"
                          }
                        ],
                        "id": 9358,
                        "name": "ArrayTypeName",
                        "src": "2013:9:18"
                      }
                    ],
                    "id": 9359,
                    "name": "VariableDeclaration",
                    "src": "2013:9:18"
                  }
                ],
                "id": 9360,
                "name": "ParameterList",
                "src": "2012:11:18"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 9360
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address[] memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                null
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "getAuthorizedAgents",
                              "referencedDeclaration": 5702,
                              "type": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9260,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "secondPermissionSet"
                                },
                                "id": 9361,
                                "name": "Identifier",
                                "src": "2041:19:18"
                              }
                            ],
                            "id": 9362,
                            "name": "MemberAccess",
                            "src": "2041:39:18"
                          }
                        ],
                        "id": 9363,
                        "name": "FunctionCall",
                        "src": "2041:41:18"
                      }
                    ],
                    "id": 9364,
                    "name": "Return",
                    "src": "2034:48:18"
                  }
                ],
                "id": 9365,
                "name": "Block",
                "src": "2024:65:18"
              }
            ],
            "id": 9366,
            "name": "FunctionDefinition",
            "src": "1952:137:18"
          }
        ],
        "id": 9367,
        "name": "ContractDefinition",
        "src": "653:1438:18"
      }
    ],
    "id": 9368,
    "name": "SourceUnit",
    "src": "584:1508:18"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0x698966663bd661f008a4a3f2f8118e1d86a442e8"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0x55f17774d5de01592658891c3b3402cbbf9e8c0e"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-08-30T23:59:17.521Z"
}