import { getNetwork } from "./lib/hooks/useNetwork";
const ROUTES = {
  deployer: "/",
  jetton: "/jetton",
  jettonId: "/jetton/:id",
};

const APP_GRID = 1156;

const LOCAL_STORAGE_PROVIDER = "wallet_provider";

const APP_DISPLAY_NAME = "JETTON STAKE";

const JETTON_DEPLOYER_CONTRACTS_GITHUB = "https://github.com/ton-blockchain/minter-contract";

const EXAMPLE_ADDRESS =
  getNetwork(new URLSearchParams(window.location.search)) === "testnet"
    ? "kQDvx-NzGZsonJA0RYmPxJz6o2RpGxmMxqGMvCJmFqafy5AG"
    : "kQDvx-NzGZsonJA0RYmPxJz6o2RpGxmMxqGMvCJmFqafy5AG";

const SEARCH_HISTORY = "searchHistory";

export {
  ROUTES,
  LOCAL_STORAGE_PROVIDER,
  APP_GRID,
  JETTON_DEPLOYER_CONTRACTS_GITHUB,
  APP_DISPLAY_NAME,
  EXAMPLE_ADDRESS,
  SEARCH_HISTORY,
};
