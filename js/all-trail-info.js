
class Trail {
  constructor(name, coordinates, length, avgTimeMinutes, elevationFeet, vibes, photo, difficulty, ascend){
    this.name = name,
    this.coordinates = coordinates,
    this.length = length,
    this.avgTimeMinutes = avgTimeMinutes,
    this.elevationFeet = elevationFeet,
    this.vibes = vibes,
    this.photo = photo,
    this.difficulty = difficulty,
    this.ascend = ascend,
    Trail.allTrailArray.push(this)
  }

  static allTrailArray = []; // Array to store instances

  static getAllTrails() {
    return Trail.allTrailArray;
  }
}




//Waterfalls

const stoddardCanyon = new Trail(
  'Stoddard Canyon', {lat: 34.21977115987134, long: -117.66544554780964}, 1.41, 57, 236,
  ['waterfalls'], ['images/stoddard-canyon/stoddard-falls.jpeg'], 'Easy', 'flat'
)

const millardCanyon = new Trail(
  'Millard Canyon Falls', {lat: 34.217557910820425, long: -118.14545050248032}, 1.2, 25, 246,
  ['waterfalls'], ['images/millard-falls/millard-falls.jpeg'], 'Easy', 'flat'
)

const cooperCanyonFalls = new Trail(
  'Cooper Canyon Falls', {lat: 34.362078497081896, long: -117.90213784374819}, 6.3, 180, 1361,
  ['waterfalls'],['images/cooper-canyon-falls/cooper-canyon-falls.jpeg'], 'Hard', 'flat'
)

const switzerFalls = new Trail(
  'Switzer Falls', {lat: 34.26659384655261, long: -118.14573470633138}, 3.7, 108, 695, 
  ['waterfalls'], ['images/switzer-falls/switzer-falls.jpeg', 'images/switzer-falls/switzer-falls-2.webp', 'images/switzer-falls/switzer-falls-3.webp'], 'Medium', 'flat'
)

const trailCanyonFalls = new Trail(
  'Trail Canyon Falls', {lat: 34.320529003886165, long: -118.25542873060434}, 4.6, 140, 1003, 
  ['waterfalls'], ['images/trail-canyon-falls/trail-canyon-falls.jpeg'], 'Hard', 'flat'
)

const paradiseFalls = new Trail(
  'Paradise Falls', {lat: 34.21463922996386, long: -118.91057509325464}, 2.8, 81, 515, 
  ['waterfalls'], ['images/paradise-falls/paradise-falls.jpeg', 'images/paradise-falls/paradise-falls-2.webp', 'images/paradise-falls/paradise-falls-3.webp'], 'Medium', 'flat'
)

const escondidoFalls = new Trail(
  'Escondido Falls', {lat: 34.043358074543335, long: -118.77939657294368}, 3.5, 90, 475, 
  ['waterfalls'], ['images/escondido-falls/escondido-falls.jpeg', 'images/escondido-falls/escondido-falls-2.jpeg', 'images/escondido-falls/escondido-falls-3.jpeg'], 'Medium', 'flat'
)

const blackStarCanyon = new Trail(
  'Black Star Canyon Falls', {lat: 33.76506071702694, long: -117.67787575597563}, 6.7, 180, 846,
  ['waterfalls'], ['images/black-star-canyon/black-star-canyon.jpeg'], 'Hard', 'uphill'
)

const sanAntonioFalls = new Trail(
  'San Antonio Falls', {lat: 34.26639363892356, long: -117.6267970884988}, 1.4, 42, 285, ['waterfalls'], ['images/san-antonio-falls/san-antonio-falls.webp', 'images/san-antonio-falls/san-antonio-falls-2.webp'], 'Easy', 'flat'
)

const cedarCreekFalls = new Trail(
  'Cedar Creek Falls', {lat: 32.99736679923003, long: -116.72575466042868}, 5.4, 160, 1069, ['waterfalls'], ['images/cedar-creek-falls/cedar-creek-falls.webp', 'images/cedar-creek-falls/cedar-creek-falls-2.webp'], 'Hard', 'uphill'
)

const bigFalls = new Trail(
  'Big Falls', {lat: 34.08246159261607, long: -116.8935097615996}, 0.7, 27, 226, ['waterfalls'], ['images/big-falls/big-falls.webp'], 'Medium', 'flat'
)

const threeSistersFalls = new Trail(
  'Three Sisters Falls', {lat: 32.981283470767025, long: -116.68420030397677}, 4.1, 100, 984, ['waterfalls'], ['images/three-sisters-falls/three-sisters-falls.webp', 'images/three-sisters-falls/three-sisters-falls-2.webp', 'images/three-sisters-falls/three-sisters-falls-3.jpeg'], 'Medium', 'uphill'
)

const santaPaulaCanyonFalls = new Trail(
  'Santa Paula Canyon Falls', {lat: 34.453048617919954, long: -119.05752440373074}, 7.4, 240, 961, ['waterfalls'], ['images/santa-paula-canyon-falls/santa-paula-canyon.webp', 'images/santa-paula-canyon-falls/santa-paula-canyon-2.webp'], 'Medium', 'flat'
)

const eatonCanyonFalls = new Trail(
  'Eaton Canyon Falls', {lat: 34.19475983401327, long: -118.10249027508937}, 3.5, 88, 446, ['waterfalls'], ['images/eaton-canyon-falls/eaton-canyon-falls.webp', 'images/eaton-canyon-falls/eaton-canyon-falls-2.webp'], 'Medium', 'flat'
)

const etiwandaFalls = new Trail(
  'Etiwanda Falls', {lat: 34.16614839652092, long: -117.52324135767023}, 3.2, 104, 774, ['waterfalls'], ['images/etiwanda-falls/etiwanda-falls.webp', 'images/etiwanda-falls/etiwanda-falls-2.webp'], "Medium", 'flat'
)

const lewisFalls = new Trail(
  'Lewis Falls', {lat: 34.307249068723124, long: -117.8367087192599}, 0.8, 20, 360, ['waterfalls'], ['images/lewis-falls/lewis-falls.webp', 'images/lewis-falls/lewis-falls-2.webp'], 'Easy', 'flat'
)

const bonitaFalls = new Trail(
  'Bonita Falls', {lat: 34.23177288847652, long: -117.50494530007941}, 1.5, 48, 334, ['waterfalls'], ['images/bonita-falls/bonita-falls.webp', 'images/bonita-falls/bonita-falls-2.webp'], 'Easy', 'flat'
)

const tahquitzCanyon = new Trail(
  'Tahquitz Canyon', {lat: 33.81022239084388, long: -116.5526890885015}, 2, 54, 324, ['waterfalls'], ['images/tahquitz-canyon/tahquitz-canyon.webp', 'images/tahquitz-canyon/tahquitz-canyon-2.webp'], 'Easy', 'flat'
)

const tenajaFalls = new Trail(
  'Tenaja Falls', {lat: 33.549396419185506, long: -117.3945231591763}, 1.6, 45, 321, ['waterfalls'], ['images/tenaja-falls/tenaja-falls.webp'], "Easy", 'flat'
)

const ortegaFalls = new Trail(
  'Ortega Falls', {lat: 33.62649470561559, long: -117.42801090859582}, 0.2, 30, 19, ['waterfalls'], ['images/ortega-falls/ortega-falls.webp', 'images/ortega-falls/ortega-falls-2.webp'], 'Easy', 'flat'
)

// Mountains

const bridgeToNowhere = new Trail(
  'Bridge To Nowhere', {lat: 34.28352575151904, long: -117.74552970060647}, 9.5, 220, 1246,
  ['mountains'], ['images/bridge-to-nowhere/Bridge-to-Nowhere.webp'], 'Hard', 'uphill'
  )

const wisdomTree = new Trail(
  'Wisdom Tree', {lat: 34.13616651908845, long: -118.33206920947036}, 1.8, 90, 1690, ['mountains'], ['images/wisdom-tree/wisdom-tree2.jpeg'], 'Medium', 'uphill'
)

const mountIslip = new Trail(
  'Mount Islip', {lat: 34.34636714245459, long: -117.84047098234949}, 2.5, 102, 990, ['mountains'], ['images/mount-islip/mount-islip.jpeg'], 'Medium', 'uphill'
)

//Rock formations

const gardenOfTheGods = new Trail(
  'Garden of the Gods', {lat: 34.27579486060916, long: -118.60955544492191}, 0.3, 15, 95, ['rocks'], ['images/garden-of-gods/garden-of-gods.avif'], 'Easy', 'uphill'
)

const skullRock = new Trail(
  'Skull Rock', {lat: 33.99802501198664, long: -116.05983922209107}, 1.7, 50, 147, ['rocks'], ['images/skull-rock/skull-rock.jpeg'], 'Easy', 'uphill'
)


// Landmarks

const generalSherman = new Trail(
  'General Sherman', {lat: 36.58193176669674, long: -118.75142337468358}, 1.2, 40, 196, ['landmark'], ['images/general-sherman/general-sherman.jpeg'], 'Easy', 'flat'
)

//Aerial Views

const cucamongaPeak = new Trail(
  'Cucamonga Peak', {lat: 34.22361928240816, long: -117.58531296783475}, 11.1, 300, 4186, ['aerial'], ['images/cucamonga-peak/cucamonga.jpeg'], 'Hard', 'uphill'
)

const ontarioPeak = new Trail(
  'Ontario Peak', {lat: 34.22983984477077, long: -117.6243725905854}, 12.1, 300, 3894, ['aerial'], ['images/ontario-peak/ontario-peak.jpeg'], 'Hard', 'uphill'
)

const strawberryPeak = new Trail(
  'Strawberry Peak', {lat: 34.285170559991805, long: -118.12077809042643}, 7, 130, 1771, ['aerial'], ['images/strawberry-peak/strawberry-peak.jpeg'],'Hard', 'uphill'
)

const sittonPeak = new Trail(
  'Sitton Peak Truck Trail', {lat: 33.58895098537922, long: -117.44632590031806}, 9.4, 200, 2060, ['aerial'], ['images/sitton-peak/sitton-peak.jpeg'],  'Hard', 'uphill'
)

const sanGorgonioPeak = new Trail(
  'San Gorgonio Peak', {lat: 34.1003732391318, long: -116.82447344541995}, 17.9, 400, 5479, ['aerial'], ['images/san-gorgonio/san-gorgonio.webp'], 'Hard', 'uphill'
)

const mountBadenPowell = new Trail(
  'Mount Baden-Powell', {lat: 34.360805945918976, long: -117.76476172882963}, 7.8, 200, 2775, ['aerial'], ['images/mount-baden-powell/mount-baden-powell.jpeg'], 'Hard', 'uphill'
)


// water

const peanutLake = new Trail(
  'Peanut Lake', {lat: 36.56206983201087, long: -118.23763027373333}, 2.3, 30, 485, ['water'], ['images/peanut-lake/peanut-lake.jpeg'], 'Easy', 'flat'
)

const wildMustardLoop = new Trail(
  'Wild Mustard Loop', {lat: 34.09130495440742, long: -118.19352931712376}, 2.3, 30, 505, ['water'], ['images/wild-mustard/wild-mustard.webp'], 'Easy', 'flat'
)


const allTrails = Trail.getAllTrails();

