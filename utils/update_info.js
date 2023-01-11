const basePath = process.cwd();
const { NETWORK } = require(`${basePath}/constants/network.js`);
const { randomBytes, randomInt } = require("crypto");
const fs = require("fs");

const {
  baseUri,
  description,
  namePrefix,
  original_image,
  animation_url,
  pixelBaseUri,
  network,
  solanaMetadata,
} = require(`${basePath}/src/config.js`);

// read json data
// let rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);

for (var i = 1; i <= 2222; i++) {
  let rawdata = fs.readFileSync(`${basePath}/builds/json/${i}.json`);

  let data = JSON.parse(rawdata);

  if (network == NETWORK.sol) {
    data.name = `${namePrefix} #${i}`;
    data.description = description;
    data.creators = solanaMetadata.creators;
  } else {
    // if(randomInt(0,10) == 0){
    let test2 = data.attributes[2].trait_type;
    if (test2 === "FruitTownGremlins.Wtf") {
    
      data.attributes[2] ={
        trait_type: "FruitTownGremlins.Wtf",
        value: getGoblinName(randomInt(5))
      }
    } 
    else  {

      // let gremlinId = randomInt(0, 5);
      // console.log(data.attributes[data.attributes.length -1])
      // data.attributes = getGoblinName(cloudId);
      data.attributes[12] ={
        trait_type: "FruitTownGremlins.Wtf",
        value: getGoblinName(randomInt(5))
      }

   // let test = data.attributes[12];
      //  console.log(test.value)
      // if (test.value === "Pineapple") {
      //   console.log("Pineapple found #" + i);
      // }


      // data.name = `${namePrefix} #${i}`;
      // data.description = description;
      // data.image = `${baseUri}/${i}.png`;
      // data.pixel = `${pixelBaseUri}/${i}.png`;
      // data.animation_url = `${animation_url}${i}`;
      // data.original_image = `${original_image}`;

      // let cloudId = randomInt(0, 4);
      // console.log(data.attributes[data.attributes.length -1])
      // data.attributes[11] = {
      //   trait_type: "CrazyCloudClan",
      //   // value: getCloudName(cloudId),
      //   value: "Music",

      // };

      // let cloudId = randomInt(0, 5);
      // // console.log(data.attributes[data.attributes.length -1])
      // // data.attributes = getGoblinName(cloudId);
      // data.attributes[12] ={
      //   trait_type: "FruitTownGremlins.Wtf",
      //   value: getGoblinName(cloudId),
      // }

      // data.attributes.trait_type = getCloudName(cloudId);
      //data.cloudUrl = getCloudURL(cloudId);

      fs.writeFileSync(
        `${basePath}/builds/json/${i}.json`,
        JSON.stringify(data, null, 2)
      );

      fs.appendFileSync(
        `${basePath}/builds/json/_metadata.json`,
        JSON.stringify(data, null, 2)
      );

      // if (network == NETWORK.sol) {
      //   console.log(`Updated description for images to ===> ${description}`);
      //   console.log(`Updated name prefix for images to ===> ${namePrefix}`);
      //   console.log(
      //     `Updated creators for images to ===> ${JSON.stringify(
      //       solanaMetadata.creators
      //     )}`
      //   );
      // } else {
      //   console.log(`Updated baseUri for images to ===> ${baseUri}`);
      //   console.log(`Updated description for images to ===> ${description}`);
      //   console.log(`Updated name prefix for images to ===> ${namePrefix}`);
      // }
    }
  }



  function getGoblinName(id) {
    switch (id) {
      case 0:
        return "Apple";
      case 1:
        return "Dragonfruit";
      case 2:
        return "Banana";
      case 3:
        return "Pear";
      case 4:
        console.log("Pineapple set!!!!!" + i)
        return "Pineapple";
    }
  }
  function getGoblinURL(id) {
    switch (id) {
      case 0:
        return "https://devilcatz.s3.us-east-2.amazonaws.com/FruityGoblins/Apple.PNG";
      case 1:
        return "https://devilcatz.s3.us-east-2.amazonaws.com/FruityGoblins/Dragonfruit.PNG";
      case 2:
        return "https://devilcatz.s3.us-east-2.amazonaws.com/FruityGoblins/Banana.PNG";
      case 3:
        return "https://devilcatz.s3.us-east-2.amazonaws.com/FruityGoblins/Pear.PNG";
      case 4:
        return "https://devilcatz.s3.us-east-2.amazonaws.com/FruityGoblins/Pineapple.PNG";
    }
  }
}


  //Cloud getters.
  // function getCloudURL(id) {
  //   switch (id) {
  //     case 0:
  //       return "https://devilcatz.s3.us-east-2.amazonaws.com/images/Lightening.png";
  //     case 1:
  //       return "https://devilcatz.s3.us-east-2.amazonaws.com/images/Rainy.png";
  //     case 2:
  //       return "https://devilcatz.s3.us-east-2.amazonaws.com/images/Snowy.png";
  //     case 3:
  //       return "https://devilcatz.s3.us-east-2.amazonaws.com/images/Sunny.png";
  //     case 4:
  //       return "https://devilcatz.s3.us-east-2.amazonaws.com/images/Thunder.png";
  //   }

  // function getCloudName(id) {
  //   switch (id) {
  //     case 0:
  //       return "Lightening";
  //     case 1:
  //       return "Rainy";
  //     case 2:
  //       return "Snowy";
  //     case 3:
  //       return "Sunny";
  //     case 4:
  //       return "Thunder";
  //   }
  // }



      //     // if (JSON.parse(JSON.stringify(test2)).value === "Lightening") {
      //     //   console.log("true for Special# " + i);
      //       data.attributes[1] = {
      //         trait_type: "CrazyCloudClan",
      //         // value: getCloudName(cloudId),
      //         value: "Music",
      //       };
      //     // }
      //   } else {
      //     let test = data.attributes[11];

      //     if (JSON.parse(JSON.stringify(test)).trait_type === "CrazyCloudClan") {
      //       console.log("Normal found #" +i);
      //       data.attributes[11] = {
      //         trait_type: "CrazyCloudClan",
      //         // value: getCloudName(cloudId),
      //         value: "Music",
      //       };
      //     }
      //   }

      // }