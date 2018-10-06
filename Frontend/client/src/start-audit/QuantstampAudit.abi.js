const abi = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "requestId",
        "type": "uint256"
      }
    ],
    "name": "isAuditFinished",
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
        "name": "price",
        "type": "uint256"
      }
    ],
    "name": "setAuditNodePrice",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "contractUri",
        "type": "string"
      },
      {
        "name": "price",
        "type": "uint256"
      }
    ],
    "name": "requestAudit",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "requestId",
        "type": "uint256"
      }
    ],
    "name": "refund",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "price",
        "type": "uint256"
      },
      {
        "name": "requestId",
        "type": "uint256"
      }
    ],
    "name": "getNextAuditByPrice",
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
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "requestId",
        "type": "uint256"
      },
      {
        "name": "toRequester",
        "type": "bool"
      }
    ],
    "name": "resolveErrorReport",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "requestId",
        "type": "uint256"
      }
    ],
    "name": "getNextAssignedRequest",
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
    "inputs": [],
    "name": "paused",
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
    "name": "auditData",
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
    "inputs": [],
    "name": "anyRequestAvailable",
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
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
    "constant": false,
    "inputs": [
      {
        "name": "requestId",
        "type": "uint256"
      },
      {
        "name": "auditResult",
        "type": "uint8"
      },
      {
        "name": "reportHash",
        "type": "string"
      }
    ],
    "name": "submitReport",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "price",
        "type": "uint256"
      }
    ],
    "name": "getNextPrice",
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
    "inputs": [],
    "name": "getNextAuditRequest",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "assignedRequestCount",
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
        "name": "_newOwner",
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
    "inputs": [
      {
        "name": "auditDataAddress",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "requestId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "auditor",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "auditResult",
        "type": "uint8"
      },
      {
        "indexed": false,
        "name": "reportHash",
        "type": "string"
      }
    ],
    "name": "LogAuditFinished",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "requestId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "requestor",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "uri",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "price",
        "type": "uint256"
      }
    ],
    "name": "LogAuditRequested",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "requestId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "auditor",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "requestor",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "uri",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "price",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "requestBlockNumber",
        "type": "uint256"
      }
    ],
    "name": "LogAuditAssigned",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "requestId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "auditor",
        "type": "address"
      }
    ],
    "name": "LogReportSubmissionError_InvalidAuditor",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "requestId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "auditor",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "state",
        "type": "uint8"
      }
    ],
    "name": "LogReportSubmissionError_InvalidState",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "requestId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "auditor",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "state",
        "type": "uint8"
      }
    ],
    "name": "LogReportSubmissionError_InvalidResult",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "requestId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "auditor",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "allowanceBlockNumber",
        "type": "uint256"
      }
    ],
    "name": "LogReportSubmissionError_ExpiredAudit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "auditor",
        "type": "address"
      }
    ],
    "name": "LogAuditAssignmentError_ExceededMaxAssignedRequests",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "requestId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "allowanceBlockNumber",
        "type": "uint256"
      }
    ],
    "name": "LogAuditAssignmentUpdate_Expired",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "LogAuditQueueIsEmpty",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "requestId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "auditor",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "LogPayAuditor",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "auditor",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "LogAuditNodePriceChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "requestId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "requestor",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "LogRefund",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "requestId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "requestor",
        "type": "address"
      }
    ],
    "name": "LogRefundInvalidRequestor",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "requestId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "state",
        "type": "uint8"
      }
    ],
    "name": "LogRefundInvalidState",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "requestId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "currentBlock",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "fundLockEndBlock",
        "type": "uint256"
      }
    ],
    "name": "LogRefundInvalidFundsLocked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "auditor",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "LogAuditNodePriceHigherThanRequests",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "requestId",
        "type": "uint256"
      }
    ],
    "name": "LogInvalidResolutionCall",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "requestId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "auditPrice",
        "type": "uint256"
      }
    ],
    "name": "LogErrorReportResolved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "Pause",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "Unpause",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipRenounced",
    "type": "event"
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
];

export default abi;