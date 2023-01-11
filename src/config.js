const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Toonverse";
const description =
  "The Catz are the genesis collection, they acquire benefits from all subsequent Toonverse collections. Revenue-sharing and sizable dividend disbursement are game for the most devoted investors, all funded from future project endeavors! In other words, those who represent the Devil Cats community will receive these dividends from future ToonVerse creations, mini collections, 1 of 1 collections, and “ArtPad” launch projects that get accepted.";
const baseUri = "https://devilcatz.s3.us-east-2.amazonaws.com/images"; //https://toonverse.s3.amazonaws.com
const original_image =
  "https://devilcatz.s3.us-east-2.amazonaws.com/images/DevilCats.png";

//Set up this later.
const animation_url =
  "https://pnmhsm44k7.execute-api.us-east-2.amazonaws.com/toonStage/?id=";

const pixelBaseUri = "https://devilcatz.s3.us-east-2.amazonaws.com/A"; //https://toonverse.s3.amazonaws.com/pixel_images/A

const solanaMetadata = {
  symbol: "TV",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  // external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "0x1eC686856cBD57d732bc02Dc76FA8D7189c16264",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 2222,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Head" },
      { name: "LeftEye" },
      { name: "Mouth" },
      { name: "Nose" },
      { name: "RightEye" }
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 2048,
  height: 2048,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 50,
  delay: 1000,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 7 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  pixelBaseUri,
  original_image,
  animation_url,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
