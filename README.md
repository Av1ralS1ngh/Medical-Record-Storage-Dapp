

# Medical-Record-Storage-Dapp

A decentralized application for secure medical record management built using Ethereum smart contracts and deployed on a blockchain network.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Running Tests](#running-tests)
5. [Creating a Node](#creating-a-node)
6. [Deploying Functions](#deploying-functions)
7. [Usage](#usage)
8. [Contributing](#contributing)

## Project Overview

This Medical Record System dApp is designed to securely store and manage medical records using blockchain technology. It leverages Ethereum smart contracts to ensure data integrity, privacy, and accessibility. The system allows patients to control access to their medical information and enables healthcare providers to retrieve authorized records efficiently.

Key features:
- Secure storage of medical records
- Patient-controlled access management
- Efficient retrieval of authorized records
- Immutable audit trail

## Prerequisites

To run this project, you need:

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Hardhat (for development and testing)
- An Ethereum wallet (e.g., MetaMask) for interacting with the deployed contract

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Av1ralS1ngh/Medical-Record-Storage-Dapp.git
   ```

2. Navigate to the project directory:
   ```
   cd Medical-Record-Storage-Dapp/medicalrecord
   ```

3. Install dependencies:
   ```
   npm install
   ```

## Running Tests

Before deploying the contract, it's crucial to run the tests to ensure everything works as expected:

```
npx hardhat test
```

This command will execute all the test scripts in the `test` folder.

## Creating a Node

To interact with the contract locally, you need to create a local Ethereum node:

```
npx hardhat node
```

This will start a local node and output account addresses and private keys. Keep these safe for later use.

## Deploying Functions

After setting up your local node, you can deploy the contract functions:

```
npx hardhat run scripts/00-deploy.js --network localhost
npx hardhat run scripts/01-seeding.js --network localhost
```

Replace `localhost` with your network name if deploying to a different network.


## Usage

Once deployed, you can interact with the Medical Record System dApp through our React-based user interface:

1. Start the React development server:
   ```
   npm run start
   ```

2. Open your web browser and navigate to `http://localhost:3000`.

3. The web interface will allow you to:
   - Connect your Ethereum wallet (e.g., MetaMask)
   - Add new medical records
   - View existing records
   - Delete records

4. Interact with the dApp through the intuitive web interface, which handles all the complex interactions with the blockchain behind the scenes.

Note: Ensure that your MetaMask wallet is connected to the same network where you deployed the contract.

## Contributing

Contributions are welcome! Please submit pull requests with clear explanations of the changes made.

