import EmbarkJS from '../embarkjs';
let KernelProxyJSONConfig = {"contract_name":{"className":"KernelProxy","args":[],"code":"6060604052341561000f57600080fd5b60405160208061068e8339810160405280805191508190506000807fc681a85306374a5ab27f0bbc385296a54bcd314a1948b6cf61c4ea1bc44bb9f87f3b4bf6bf3ad5000ecf0f989d5befde585c6860fea3e574a4fab4c49d1c177d9c604051918252602082015260409081019051908190039020815260208101919091526040016000208054600160a060020a0392909216600160a060020a0319909216919091179055506105ca806100c46000396000f3006060604052600436106100e55763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630972077881146101a75780630ceafa2a146101cc5780631113ed0d146101df578063178e6079146101f257806325012699146102055780632b2584f61461021857806338bb6def1461022b5780634555d5c91461026a5780635c60da1b1461027d578063756f6049146102905780637e84a4ff146102a3578063a3b4b07f146102b6578063cbcc65eb146102c9578063cc473be3146102dc578063dabca019146102ef578063db8a61d414610302575b60006127105a1015610160576000341180156100ff575036155b151561010a57600080fd5b7f15eeaa57c7bd188c1388020bcadc2c436ec60d647d36ef5b9eb3c742217ddee1333460405173ffffffffffffffffffffffffffffffffffffffff909216825260208201526040908101905180910390a16101a4565b610168610315565b90506101a4816000368080601f016020809104026020016040519081016040528181529291906020840183838082843750610379945050505050565b50005b34156101b257600080fd5b6101ba610389565b60405190815260200160405180910390f35b34156101d757600080fd5b6101ba6103ad565b34156101ea57600080fd5b6101ba6103b3565b34156101fd57600080fd5b6101ba6103d7565b341561021057600080fd5b6101ba6103fb565b341561022357600080fd5b6101ba61041f565b341561023657600080fd5b610241600435610424565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b341561027557600080fd5b6101ba61044c565b341561028857600080fd5b610241610315565b341561029b57600080fd5b6101ba610451565b34156102ae57600080fd5b6101ba610475565b34156102c157600080fd5b6101ba61047a565b34156102d457600080fd5b6101ba61049e565b34156102e757600080fd5b6101ba6104c2565b34156102fa57600080fd5b6101ba6104e6565b341561030d57600080fd5b6101ba6104ec565b7f2b7d19d0575c228f8d9326801e14149d284dc5bb7b1541c5ad712ae4b2fcaadb60009081526020527f5c97793136c186a2fc0c24f575463224767ba16f02add9ccd8ea90f1684ed98c5473ffffffffffffffffffffffffffffffffffffffff1690565b61038582826000610510565b5050565b7f9065c3e7f7b7ef1ef4e53d2d0b8e0cef02874ab020c1ece79d5f0d3d0111c0ba81565b61271081565b7f3b4bf6bf3ad5000ecf0f989d5befde585c6860fea3e574a4fab4c49d1c177d9c81565b7fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb81565b7f2b7d19d0575c228f8d9326801e14149d284dc5bb7b1541c5ad712ae4b2fcaadb81565b600181565b60006020819052908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b600290565b7fc681a85306374a5ab27f0bbc385296a54bcd314a1948b6cf61c4ea1bc44bb9f881565b600281565b7f4b8e03a458a6ccec5d9077c2490964c1333dd3c72e2db408d7d9a7a36ef5c41a81565b7fe3262375f45a6e2026b7e7b18c2b807434f2508fe1a2a3dfb493c7df8f4aad6a81565b7f93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae81565b60015481565b7ff1f3eb40f5bc1ad1344716ced8b8a0431d840b5783aea1fd01786bc26f35ac0f81565b600080600061051e86610564565b151561052957600080fd5b5061271060008086516020880189855a03f43d935091508383101561054d57600080fd5b604051836000823e828015610560578482f35b8482fd5b60008073ffffffffffffffffffffffffffffffffffffffff8316151561058d5760009150610598565b823b90506000811191505b509190505600a165627a7a723058207a03217f373484674211c88c0df4f40620c48f8e188226559ad5791531c0a3a70029","runtimeBytecode":"6060604052600436106100e55763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630972077881146101a75780630ceafa2a146101cc5780631113ed0d146101df578063178e6079146101f257806325012699146102055780632b2584f61461021857806338bb6def1461022b5780634555d5c91461026a5780635c60da1b1461027d578063756f6049146102905780637e84a4ff146102a3578063a3b4b07f146102b6578063cbcc65eb146102c9578063cc473be3146102dc578063dabca019146102ef578063db8a61d414610302575b60006127105a1015610160576000341180156100ff575036155b151561010a57600080fd5b7f15eeaa57c7bd188c1388020bcadc2c436ec60d647d36ef5b9eb3c742217ddee1333460405173ffffffffffffffffffffffffffffffffffffffff909216825260208201526040908101905180910390a16101a4565b610168610315565b90506101a4816000368080601f016020809104026020016040519081016040528181529291906020840183838082843750610379945050505050565b50005b34156101b257600080fd5b6101ba610389565b60405190815260200160405180910390f35b34156101d757600080fd5b6101ba6103ad565b34156101ea57600080fd5b6101ba6103b3565b34156101fd57600080fd5b6101ba6103d7565b341561021057600080fd5b6101ba6103fb565b341561022357600080fd5b6101ba61041f565b341561023657600080fd5b610241600435610424565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b341561027557600080fd5b6101ba61044c565b341561028857600080fd5b610241610315565b341561029b57600080fd5b6101ba610451565b34156102ae57600080fd5b6101ba610475565b34156102c157600080fd5b6101ba61047a565b34156102d457600080fd5b6101ba61049e565b34156102e757600080fd5b6101ba6104c2565b34156102fa57600080fd5b6101ba6104e6565b341561030d57600080fd5b6101ba6104ec565b7f2b7d19d0575c228f8d9326801e14149d284dc5bb7b1541c5ad712ae4b2fcaadb60009081526020527f5c97793136c186a2fc0c24f575463224767ba16f02add9ccd8ea90f1684ed98c5473ffffffffffffffffffffffffffffffffffffffff1690565b61038582826000610510565b5050565b7f9065c3e7f7b7ef1ef4e53d2d0b8e0cef02874ab020c1ece79d5f0d3d0111c0ba81565b61271081565b7f3b4bf6bf3ad5000ecf0f989d5befde585c6860fea3e574a4fab4c49d1c177d9c81565b7fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb81565b7f2b7d19d0575c228f8d9326801e14149d284dc5bb7b1541c5ad712ae4b2fcaadb81565b600181565b60006020819052908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b600290565b7fc681a85306374a5ab27f0bbc385296a54bcd314a1948b6cf61c4ea1bc44bb9f881565b600281565b7f4b8e03a458a6ccec5d9077c2490964c1333dd3c72e2db408d7d9a7a36ef5c41a81565b7fe3262375f45a6e2026b7e7b18c2b807434f2508fe1a2a3dfb493c7df8f4aad6a81565b7f93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae81565b60015481565b7ff1f3eb40f5bc1ad1344716ced8b8a0431d840b5783aea1fd01786bc26f35ac0f81565b600080600061051e86610564565b151561052957600080fd5b5061271060008086516020880189855a03f43d935091508383101561054d57600080fd5b604051836000823e828015610560578482f35b8482fd5b60008073ffffffffffffffffffffffffffffffffffffffff8316151561058d5760009150610598565b823b90506000811191505b509190505600a165627a7a723058207a03217f373484674211c88c0df4f40620c48f8e188226559ad5791531c0a3a70029","realRuntimeBytecode":"6060604052600436106100e55763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630972077881146101a75780630ceafa2a146101cc5780631113ed0d146101df578063178e6079146101f257806325012699146102055780632b2584f61461021857806338bb6def1461022b5780634555d5c91461026a5780635c60da1b1461027d578063756f6049146102905780637e84a4ff146102a3578063a3b4b07f146102b6578063cbcc65eb146102c9578063cc473be3146102dc578063dabca019146102ef578063db8a61d414610302575b60006127105a1015610160576000341180156100ff575036155b151561010a57600080fd5b7f15eeaa57c7bd188c1388020bcadc2c436ec60d647d36ef5b9eb3c742217ddee1333460405173ffffffffffffffffffffffffffffffffffffffff909216825260208201526040908101905180910390a16101a4565b610168610315565b90506101a4816000368080601f016020809104026020016040519081016040528181529291906020840183838082843750610379945050505050565b50005b34156101b257600080fd5b6101ba610389565b60405190815260200160405180910390f35b34156101d757600080fd5b6101ba6103ad565b34156101ea57600080fd5b6101ba6103b3565b34156101fd57600080fd5b6101ba6103d7565b341561021057600080fd5b6101ba6103fb565b341561022357600080fd5b6101ba61041f565b341561023657600080fd5b610241600435610424565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b341561027557600080fd5b6101ba61044c565b341561028857600080fd5b610241610315565b341561029b57600080fd5b6101ba610451565b34156102ae57600080fd5b6101ba610475565b34156102c157600080fd5b6101ba61047a565b34156102d457600080fd5b6101ba61049e565b34156102e757600080fd5b6101ba6104c2565b34156102fa57600080fd5b6101ba6104e6565b341561030d57600080fd5b6101ba6104ec565b7f2b7d19d0575c228f8d9326801e14149d284dc5bb7b1541c5ad712ae4b2fcaadb60009081526020527f5c97793136c186a2fc0c24f575463224767ba16f02add9ccd8ea90f1684ed98c5473ffffffffffffffffffffffffffffffffffffffff1690565b61038582826000610510565b5050565b7f9065c3e7f7b7ef1ef4e53d2d0b8e0cef02874ab020c1ece79d5f0d3d0111c0ba81565b61271081565b7f3b4bf6bf3ad5000ecf0f989d5befde585c6860fea3e574a4fab4c49d1c177d9c81565b7fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb81565b7f2b7d19d0575c228f8d9326801e14149d284dc5bb7b1541c5ad712ae4b2fcaadb81565b600181565b60006020819052908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b600290565b7fc681a85306374a5ab27f0bbc385296a54bcd314a1948b6cf61c4ea1bc44bb9f881565b600281565b7f4b8e03a458a6ccec5d9077c2490964c1333dd3c72e2db408d7d9a7a36ef5c41a81565b7fe3262375f45a6e2026b7e7b18c2b807434f2508fe1a2a3dfb493c7df8f4aad6a81565b7f93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae81565b60015481565b7ff1f3eb40f5bc1ad1344716ced8b8a0431d840b5783aea1fd01786bc26f35ac0f81565b600080600061051e86610564565b151561052957600080fd5b5061271060008086516020880189855a03f43d935091508383101561054d57600080fd5b604051836000823e828015610560578482f35b8482fd5b60008073ffffffffffffffffffffffffffffffffffffffff8316151561058d5760009150610598565b823b90506000811191505b509190505600a165627a7a72305820","linkReferences":{},"swarmHash":"7a03217f373484674211c88c0df4f40620c48f8e188226559ad5791531c0a3a7","gasEstimates":{"creation":{"codeDepositCost":"296400","executionCost":"20970","totalCost":"317370"},"external":{"":"infinite","ACL_APP()":"infinite","ACL_APP_ID()":"infinite","APM_NODE()":"infinite","APP_ADDR_NAMESPACE()":"infinite","APP_BASES_NAMESPACE()":"infinite","CORE_NAMESPACE()":"infinite","ETH_NODE()":"infinite","FORWARDING()":"infinite","FWD_GAS_LIMIT()":"infinite","KERNEL_APP()":"infinite","KERNEL_APP_ID()":"infinite","UPGRADEABLE()":"infinite","apps(bytes32)":"infinite","implementation()":"infinite","proxyType()":"infinite","recoveryVaultId()":"infinite"}},"functionHashes":{"ACL_APP()":"a3b4b07f","ACL_APP_ID()":"cbcc65eb","APM_NODE()":"09720778","APP_ADDR_NAMESPACE()":"178e6079","APP_BASES_NAMESPACE()":"db8a61d4","CORE_NAMESPACE()":"756f6049","ETH_NODE()":"cc473be3","FORWARDING()":"2b2584f6","FWD_GAS_LIMIT()":"0ceafa2a","KERNEL_APP()":"25012699","KERNEL_APP_ID()":"1113ed0d","UPGRADEABLE()":"7e84a4ff","apps(bytes32)":"38bb6def","implementation()":"5c60da1b","proxyType()":"4555d5c9","recoveryVaultId()":"dabca019"},"abiDefinition":[{"constant":true,"inputs":[],"name":"APM_NODE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FWD_GAS_LIMIT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"KERNEL_APP_ID","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"APP_ADDR_NAMESPACE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"KERNEL_APP","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FORWARDING","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"apps","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proxyType","outputs":[{"name":"proxyTypeId","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CORE_NAMESPACE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"UPGRADEABLE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ACL_APP","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ACL_APP_ID","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ETH_NODE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"recoveryVaultId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"APP_BASES_NAMESPACE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_kernelImpl","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"ProxyDeposit","type":"event"}],"filename":"/Users/iurimatias/Projects/Status/liquid-funding-console/.embark/node_modules/@aragon/os/contracts/kernel/KernelProxy.sol","originalFilename":"contracts//Users/iurimatias/Projects/Status/liquid-funding-console/.embark/node_modules/@aragon/os/contracts/kernel/KernelProxy.sol","path":"/Users/iurimatias/Projects/Status/liquid-funding-console/contracts/.embark/node_modules/@aragon/os/contracts/kernel/KernelProxy.sol","gas":"auto","type":"file","deploy":false,"_gasLimit":6000000,"error":false},"code":"6060604052341561000f57600080fd5b60405160208061068e8339810160405280805191508190506000807fc681a85306374a5ab27f0bbc385296a54bcd314a1948b6cf61c4ea1bc44bb9f87f3b4bf6bf3ad5000ecf0f989d5befde585c6860fea3e574a4fab4c49d1c177d9c604051918252602082015260409081019051908190039020815260208101919091526040016000208054600160a060020a0392909216600160a060020a0319909216919091179055506105ca806100c46000396000f3006060604052600436106100e55763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630972077881146101a75780630ceafa2a146101cc5780631113ed0d146101df578063178e6079146101f257806325012699146102055780632b2584f61461021857806338bb6def1461022b5780634555d5c91461026a5780635c60da1b1461027d578063756f6049146102905780637e84a4ff146102a3578063a3b4b07f146102b6578063cbcc65eb146102c9578063cc473be3146102dc578063dabca019146102ef578063db8a61d414610302575b60006127105a1015610160576000341180156100ff575036155b151561010a57600080fd5b7f15eeaa57c7bd188c1388020bcadc2c436ec60d647d36ef5b9eb3c742217ddee1333460405173ffffffffffffffffffffffffffffffffffffffff909216825260208201526040908101905180910390a16101a4565b610168610315565b90506101a4816000368080601f016020809104026020016040519081016040528181529291906020840183838082843750610379945050505050565b50005b34156101b257600080fd5b6101ba610389565b60405190815260200160405180910390f35b34156101d757600080fd5b6101ba6103ad565b34156101ea57600080fd5b6101ba6103b3565b34156101fd57600080fd5b6101ba6103d7565b341561021057600080fd5b6101ba6103fb565b341561022357600080fd5b6101ba61041f565b341561023657600080fd5b610241600435610424565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b341561027557600080fd5b6101ba61044c565b341561028857600080fd5b610241610315565b341561029b57600080fd5b6101ba610451565b34156102ae57600080fd5b6101ba610475565b34156102c157600080fd5b6101ba61047a565b34156102d457600080fd5b6101ba61049e565b34156102e757600080fd5b6101ba6104c2565b34156102fa57600080fd5b6101ba6104e6565b341561030d57600080fd5b6101ba6104ec565b7f2b7d19d0575c228f8d9326801e14149d284dc5bb7b1541c5ad712ae4b2fcaadb60009081526020527f5c97793136c186a2fc0c24f575463224767ba16f02add9ccd8ea90f1684ed98c5473ffffffffffffffffffffffffffffffffffffffff1690565b61038582826000610510565b5050565b7f9065c3e7f7b7ef1ef4e53d2d0b8e0cef02874ab020c1ece79d5f0d3d0111c0ba81565b61271081565b7f3b4bf6bf3ad5000ecf0f989d5befde585c6860fea3e574a4fab4c49d1c177d9c81565b7fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb81565b7f2b7d19d0575c228f8d9326801e14149d284dc5bb7b1541c5ad712ae4b2fcaadb81565b600181565b60006020819052908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b600290565b7fc681a85306374a5ab27f0bbc385296a54bcd314a1948b6cf61c4ea1bc44bb9f881565b600281565b7f4b8e03a458a6ccec5d9077c2490964c1333dd3c72e2db408d7d9a7a36ef5c41a81565b7fe3262375f45a6e2026b7e7b18c2b807434f2508fe1a2a3dfb493c7df8f4aad6a81565b7f93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae81565b60015481565b7ff1f3eb40f5bc1ad1344716ced8b8a0431d840b5783aea1fd01786bc26f35ac0f81565b600080600061051e86610564565b151561052957600080fd5b5061271060008086516020880189855a03f43d935091508383101561054d57600080fd5b604051836000823e828015610560578482f35b8482fd5b60008073ffffffffffffffffffffffffffffffffffffffff8316151561058d5760009150610598565b823b90506000811191505b509190505600a165627a7a723058207a03217f373484674211c88c0df4f40620c48f8e188226559ad5791531c0a3a70029","runtime_bytecode":"6060604052600436106100e55763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630972077881146101a75780630ceafa2a146101cc5780631113ed0d146101df578063178e6079146101f257806325012699146102055780632b2584f61461021857806338bb6def1461022b5780634555d5c91461026a5780635c60da1b1461027d578063756f6049146102905780637e84a4ff146102a3578063a3b4b07f146102b6578063cbcc65eb146102c9578063cc473be3146102dc578063dabca019146102ef578063db8a61d414610302575b60006127105a1015610160576000341180156100ff575036155b151561010a57600080fd5b7f15eeaa57c7bd188c1388020bcadc2c436ec60d647d36ef5b9eb3c742217ddee1333460405173ffffffffffffffffffffffffffffffffffffffff909216825260208201526040908101905180910390a16101a4565b610168610315565b90506101a4816000368080601f016020809104026020016040519081016040528181529291906020840183838082843750610379945050505050565b50005b34156101b257600080fd5b6101ba610389565b60405190815260200160405180910390f35b34156101d757600080fd5b6101ba6103ad565b34156101ea57600080fd5b6101ba6103b3565b34156101fd57600080fd5b6101ba6103d7565b341561021057600080fd5b6101ba6103fb565b341561022357600080fd5b6101ba61041f565b341561023657600080fd5b610241600435610424565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b341561027557600080fd5b6101ba61044c565b341561028857600080fd5b610241610315565b341561029b57600080fd5b6101ba610451565b34156102ae57600080fd5b6101ba610475565b34156102c157600080fd5b6101ba61047a565b34156102d457600080fd5b6101ba61049e565b34156102e757600080fd5b6101ba6104c2565b34156102fa57600080fd5b6101ba6104e6565b341561030d57600080fd5b6101ba6104ec565b7f2b7d19d0575c228f8d9326801e14149d284dc5bb7b1541c5ad712ae4b2fcaadb60009081526020527f5c97793136c186a2fc0c24f575463224767ba16f02add9ccd8ea90f1684ed98c5473ffffffffffffffffffffffffffffffffffffffff1690565b61038582826000610510565b5050565b7f9065c3e7f7b7ef1ef4e53d2d0b8e0cef02874ab020c1ece79d5f0d3d0111c0ba81565b61271081565b7f3b4bf6bf3ad5000ecf0f989d5befde585c6860fea3e574a4fab4c49d1c177d9c81565b7fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb81565b7f2b7d19d0575c228f8d9326801e14149d284dc5bb7b1541c5ad712ae4b2fcaadb81565b600181565b60006020819052908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b600290565b7fc681a85306374a5ab27f0bbc385296a54bcd314a1948b6cf61c4ea1bc44bb9f881565b600281565b7f4b8e03a458a6ccec5d9077c2490964c1333dd3c72e2db408d7d9a7a36ef5c41a81565b7fe3262375f45a6e2026b7e7b18c2b807434f2508fe1a2a3dfb493c7df8f4aad6a81565b7f93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae81565b60015481565b7ff1f3eb40f5bc1ad1344716ced8b8a0431d840b5783aea1fd01786bc26f35ac0f81565b600080600061051e86610564565b151561052957600080fd5b5061271060008086516020880189855a03f43d935091508383101561054d57600080fd5b604051836000823e828015610560578482f35b8482fd5b60008073ffffffffffffffffffffffffffffffffffffffff8316151561058d5760009150610598565b823b90506000811191505b509190505600a165627a7a723058207a03217f373484674211c88c0df4f40620c48f8e188226559ad5791531c0a3a70029","real_runtime_bytecode":"6060604052600436106100e55763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630972077881146101a75780630ceafa2a146101cc5780631113ed0d146101df578063178e6079146101f257806325012699146102055780632b2584f61461021857806338bb6def1461022b5780634555d5c91461026a5780635c60da1b1461027d578063756f6049146102905780637e84a4ff146102a3578063a3b4b07f146102b6578063cbcc65eb146102c9578063cc473be3146102dc578063dabca019146102ef578063db8a61d414610302575b60006127105a1015610160576000341180156100ff575036155b151561010a57600080fd5b7f15eeaa57c7bd188c1388020bcadc2c436ec60d647d36ef5b9eb3c742217ddee1333460405173ffffffffffffffffffffffffffffffffffffffff909216825260208201526040908101905180910390a16101a4565b610168610315565b90506101a4816000368080601f016020809104026020016040519081016040528181529291906020840183838082843750610379945050505050565b50005b34156101b257600080fd5b6101ba610389565b60405190815260200160405180910390f35b34156101d757600080fd5b6101ba6103ad565b34156101ea57600080fd5b6101ba6103b3565b34156101fd57600080fd5b6101ba6103d7565b341561021057600080fd5b6101ba6103fb565b341561022357600080fd5b6101ba61041f565b341561023657600080fd5b610241600435610424565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b341561027557600080fd5b6101ba61044c565b341561028857600080fd5b610241610315565b341561029b57600080fd5b6101ba610451565b34156102ae57600080fd5b6101ba610475565b34156102c157600080fd5b6101ba61047a565b34156102d457600080fd5b6101ba61049e565b34156102e757600080fd5b6101ba6104c2565b34156102fa57600080fd5b6101ba6104e6565b341561030d57600080fd5b6101ba6104ec565b7f2b7d19d0575c228f8d9326801e14149d284dc5bb7b1541c5ad712ae4b2fcaadb60009081526020527f5c97793136c186a2fc0c24f575463224767ba16f02add9ccd8ea90f1684ed98c5473ffffffffffffffffffffffffffffffffffffffff1690565b61038582826000610510565b5050565b7f9065c3e7f7b7ef1ef4e53d2d0b8e0cef02874ab020c1ece79d5f0d3d0111c0ba81565b61271081565b7f3b4bf6bf3ad5000ecf0f989d5befde585c6860fea3e574a4fab4c49d1c177d9c81565b7fd6f028ca0e8edb4a8c9757ca4fdccab25fa1e0317da1188108f7d2dee14902fb81565b7f2b7d19d0575c228f8d9326801e14149d284dc5bb7b1541c5ad712ae4b2fcaadb81565b600181565b60006020819052908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b600290565b7fc681a85306374a5ab27f0bbc385296a54bcd314a1948b6cf61c4ea1bc44bb9f881565b600281565b7f4b8e03a458a6ccec5d9077c2490964c1333dd3c72e2db408d7d9a7a36ef5c41a81565b7fe3262375f45a6e2026b7e7b18c2b807434f2508fe1a2a3dfb493c7df8f4aad6a81565b7f93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae81565b60015481565b7ff1f3eb40f5bc1ad1344716ced8b8a0431d840b5783aea1fd01786bc26f35ac0f81565b600080600061051e86610564565b151561052957600080fd5b5061271060008086516020880189855a03f43d935091508383101561054d57600080fd5b604051836000823e828015610560578482f35b8482fd5b60008073ffffffffffffffffffffffffffffffffffffffff8316151561058d5760009150610598565b823b90506000811191505b509190505600a165627a7a72305820","swarm_hash":"7a03217f373484674211c88c0df4f40620c48f8e188226559ad5791531c0a3a7","gas_estimates":{"creation":{"codeDepositCost":"296400","executionCost":"20970","totalCost":"317370"},"external":{"":"infinite","ACL_APP()":"infinite","ACL_APP_ID()":"infinite","APM_NODE()":"infinite","APP_ADDR_NAMESPACE()":"infinite","APP_BASES_NAMESPACE()":"infinite","CORE_NAMESPACE()":"infinite","ETH_NODE()":"infinite","FORWARDING()":"infinite","FWD_GAS_LIMIT()":"infinite","KERNEL_APP()":"infinite","KERNEL_APP_ID()":"infinite","UPGRADEABLE()":"infinite","apps(bytes32)":"infinite","implementation()":"infinite","proxyType()":"infinite","recoveryVaultId()":"infinite"}},"function_hashes":{"ACL_APP()":"a3b4b07f","ACL_APP_ID()":"cbcc65eb","APM_NODE()":"09720778","APP_ADDR_NAMESPACE()":"178e6079","APP_BASES_NAMESPACE()":"db8a61d4","CORE_NAMESPACE()":"756f6049","ETH_NODE()":"cc473be3","FORWARDING()":"2b2584f6","FWD_GAS_LIMIT()":"0ceafa2a","KERNEL_APP()":"25012699","KERNEL_APP_ID()":"1113ed0d","UPGRADEABLE()":"7e84a4ff","apps(bytes32)":"38bb6def","implementation()":"5c60da1b","proxyType()":"4555d5c9","recoveryVaultId()":"dabca019"},"abi":[{"constant":true,"inputs":[],"name":"APM_NODE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FWD_GAS_LIMIT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"KERNEL_APP_ID","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"APP_ADDR_NAMESPACE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"KERNEL_APP","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FORWARDING","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"apps","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proxyType","outputs":[{"name":"proxyTypeId","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"implementation","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CORE_NAMESPACE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"UPGRADEABLE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ACL_APP","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ACL_APP_ID","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ETH_NODE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"recoveryVaultId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"APP_BASES_NAMESPACE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_kernelImpl","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"ProxyDeposit","type":"event"}]};
let KernelProxy = new EmbarkJS.Blockchain.Contract(KernelProxyJSONConfig);
export default KernelProxy;
