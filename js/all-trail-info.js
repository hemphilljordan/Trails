
class Trail {
  constructor(name, coordinates, length, avgTimeMinutes, elevationFeet, vibes, photo, difficulty, ascend, youTube){
    this.name = name,
    this.coordinates = coordinates,
    this.length = length,
    this.avgTimeMinutes = avgTimeMinutes,
    this.elevationFeet = elevationFeet,
    this.vibes = vibes,
    this.photo = photo,
    this.difficulty = difficulty,
    this.ascend = ascend,
    this.youTube = youTube,
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
  ['waterfalls'], ['images/stoddard-canyon/stoddard-falls.jpeg'], 'Easy', 'flat', 'C815VPzZt1I?si=G_OHsQODD56V2YLq'
)

const millardCanyon = new Trail(
  'Millard Canyon Falls', {lat: 34.217557910820425, long: -118.14545050248032}, 1.2, 25, 246,
  ['waterfalls'], ['images/millard-falls/millard-falls-2.jpeg', 'images/millard-falls/millard-falls.jpeg'], 'Easy', 'flat', 'ynZYsb4ji_Q?si=s14p6fF0gbRM-2xK'
)

const cooperCanyonFalls = new Trail(
  'Cooper Canyon Falls', {lat: 34.362078497081896, long: -117.90213784374819}, 6.3, 180, 1361,
  ['waterfalls'],['images/cooper-canyon-falls/cooper-canyon-falls.webp'], 'Hard', 'flat', 'jgfnYvxzhJE?si=OeQ-ORSQcDKynw2Z'
)

const switzerFalls = new Trail(
  'Switzer Falls', {lat: 34.26659384655261, long: -118.14573470633138}, 3.7, 108, 695, 
  ['waterfalls'], ['images/switzer-falls/switzer-falls.jpeg', 'images/switzer-falls/switzer-falls-2.webp', 'images/switzer-falls/switzer-falls-3.webp'], 'Medium', 'flat', 'k_7uyewI4wc?si=hHbzoixJyWGDrV2D'
)

const trailCanyonFalls = new Trail(
  'Trail Canyon Falls', {lat: 34.320529003886165, long: -118.25542873060434}, 4.6, 140, 1003, 
  ['waterfalls'], ['images/trail-canyon-falls/trail-canyon-falls.jpeg'], 'Hard', 'flat', 'OQqjWhjSlNQ?si=GpABm4Y74gkqvZFU'
)

const paradiseFalls = new Trail(
  'Paradise Falls', {lat: 34.21463922996386, long: -118.91057509325464}, 2.8, 81, 515, 
  ['waterfalls'], ['images/paradise-falls/paradise-falls.jpeg', 'images/paradise-falls/paradise-falls-2.webp', 'images/paradise-falls/paradise-falls-3.webp'], 'Medium', 'flat', 'whsHRFvaM_o?si=8cJrpr3wS_A5iQxa'
)

const escondidoFalls = new Trail(
  'Escondido Falls', {lat: 34.043358074543335, long: -118.77939657294368}, 3.5, 90, 475, 
  ['waterfalls'], ['images/escondido-falls/escondido-falls.jpeg', 'images/escondido-falls/escondido-falls-2.jpeg', 'images/escondido-falls/escondido-falls-3.jpeg'], 'Medium', 'flat', 'Z110CjWT1ko?si=MnS2vrZ3v9Kf0FeX'
)

const blackStarCanyon = new Trail(
  'Black Star Canyon Falls', {lat: 33.76506071702694, long: -117.67787575597563}, 6.7, 180, 846,
  ['waterfalls'], ['images/black-star-canyon/black-star-canyon.jpeg'], 'Hard', 'uphill', 'JvPR7QMuqN8?si=9Azuioa_AlAlPMm1'
)

const sanAntonioFalls = new Trail(
  'San Antonio Falls', {lat: 34.26639363892356, long: -117.6267970884988}, 1.4, 42, 285, ['waterfalls'], ['images/san-antonio-falls/san-antonio-falls.webp', 'images/san-antonio-falls/san-antonio-falls-2.webp'], 'Easy', 'flat', 'DgoEcNlctgk?si=C6J-HbDN57oiQB0w'
)

const cedarCreekFalls = new Trail(
  'Cedar Creek Falls', {lat: 32.99736679923003, long: -116.72575466042868}, 5.4, 160, 1069, ['waterfalls'], ['images/cedar-creek-falls/cedar-creek-falls-2.webp', 'images/cedar-creek-falls/cedar-creek-falls.webp'], 'Hard', 'uphill', 'QtduKdTKpwQ?si=e_HXXM_pfP4MDTsF'
)

const bigFalls = new Trail(
  'Big Falls', {lat: 34.08246159261607, long: -116.8935097615996}, 0.7, 27, 226, ['waterfalls'], ['images/big-falls/big-falls-2.jpg', 'images/big-falls/big-falls.webp'], 'Medium', 'flat', 'Ym_Z-neSzsU?si=PHjID4Nt36f_DtVd'
)

const threeSistersFalls = new Trail(
  'Three Sisters Falls', {lat: 32.981283470767025, long: -116.68420030397677}, 4.1, 100, 984, ['waterfalls'], ['images/three-sisters-falls/three-sisters-falls.jpeg', 'images/three-sisters-falls/three-sisters-falls-2.webp', 'images/three-sisters-falls/three-sisters-falls-3.jpeg', 'images/three-sisters-falls/three-sisters-falls-4.webp'], 'Medium', 'uphill', 'MvW_cc2X5xg?si=ypIukAw-eChyobOV'
)

const santaPaulaCanyonFalls = new Trail(
  'Santa Paula Canyon Falls', {lat: 34.453048617919954, long: -119.05752440373074}, 7.4, 240, 961, ['waterfalls'], ['images/santa-paula-canyon-falls/santa-paula-canyon.webp', 'images/santa-paula-canyon-falls/santa-paula-canyon-2.webp'], 'Medium', 'flat', '4vQ8vX_ust4?si=bMc_egtdWqD6qdon'
)

const eatonCanyonFalls = new Trail(
  'Eaton Canyon Falls', {lat: 34.19475983401327, long: -118.10249027508937}, 3.5, 88, 446, ['waterfalls'], ['images/eaton-canyon-falls/eaton-canyon-falls.jpeg', 'images/eaton-canyon-falls/eaton-canyon-falls-2.webp', 'images/eaton-canyon-falls/eaton-canyon-falls-3.webp'], 'Medium', 'flat', '1oPM791nPu8?si=Fw_kJyflWMQIEogl'
)

const etiwandaFalls = new Trail(
  'Etiwanda Falls', {lat: 34.16614839652092, long: -117.52324135767023}, 3.2, 104, 774, ['waterfalls'], ['images/etiwanda-falls/etiwanda-falls.jpeg', 'images/etiwanda-falls/etiwanda-falls-2.webp', 'images/etiwanda-falls/etiwanda-falls-3.webp'], "Medium", 'flat', '5-pG3OqVz8o?si=dXA9HOaCnTZhBeIM'
)

const lewisFalls = new Trail(
  'Lewis Falls', {lat: 34.307249068723124, long: -117.8367087192599}, 0.8, 20, 360, ['waterfalls'], ['images/lewis-falls/lewis-falls.png', 'images/lewis-falls/lewis-falls-2.webp', 'images/lewis-falls/lewis-falls-3.webp'], 'Easy', 'flat', 'o5hiMq7qo3M?si=IIPiPHnOVyEK-i9o'
)

const bonitaFalls = new Trail(
  'Bonita Falls', {lat: 34.23177288847652, long: -117.50494530007941}, 1.5, 48, 334, ['waterfalls'], ['images/bonita-falls/bonita-falls.jpeg', 'images/bonita-falls/bonita-falls-2.webp', 'images/bonita-falls/bonita-falls-3.webp'], 'Easy', 'flat', 'FKxMqVGeaRU?si=gZ9w6oirk-u294Gt'
)

const tahquitzCanyon = new Trail(
  'Tahquitz Canyon', {lat: 33.81022239084388, long: -116.5526890885015}, 2, 54, 324, ['waterfalls'], ['images/tahquitz-canyon/tahquitz-canyon.jpeg', 'images/tahquitz-canyon/tahquitz-canyon-2.webp', 'images/tahquitz-canyon/tahquitz-canyon-2.webp'], 'Easy', 'flat', 'v6FcGKKH9Gs?si=PqaL0ZRUNr_QTz1b'
)

const tenajaFalls = new Trail(
  'Tenaja Falls', {lat: 33.549396419185506, long: -117.3945231591763}, 1.6, 45, 321, ['waterfalls'], ['images/tenaja-falls/tenaja-falls.jpeg', 'images/tenaja-falls/tenaja-falls-2.webp'], "Easy", 'flat', 'EN8AZ8-M1eM?si=ETDmJXZVGNMv8jKo'
)

const ortegaFalls = new Trail(
  'Ortega Falls', {lat: 33.62649470561559, long: -117.42801090859582}, 0.2, 30, 19, ['waterfalls'], ['images/ortega-falls/ortega-falls.jpeg', 'images/ortega-falls/ortega-falls-2.webp', 'images/ortega-falls/ortega-falls-3.webp'], 'Easy', 'flat', 'ugoz7bfCBfI?si=KvYVE47ExYlOq2kh'
)

const whiskeytownFalls = new Trail(
  'Whiskeytown Falls', {lat: 40.62708339835631, long: -122.66887813504691}, 2.6, 90, 705, ['waterfalls'], ['images/whiskeytown-falls/whiskeytown-falls.webp', 'images/whiskeytown-falls/whiskeytown-falls-2.webp'], 'Easy', 'flat', 'CvyD1mCefMU?si=Hq8Jc6Q0FCUT5fTF'
)

const mistTrail = new Trail(
  'Mist Trail', {lat: 37.817739254270414, long: -119.52543598477757}, 6.4, 250, 2208, ['waterfalls'], ['images/mist-trail/mist-trail.webp', 'images/mist-trail/mist-trail-2.webp'], 'Hard', 'uphill', '3Kdh6nrZI0U?si=Ra7AkNmhrjWpngxr'
)











// Mountains

const bridgeToNowhere = new Trail(
  'Bridge To Nowhere', {lat: 34.28352575151904, long: -117.74552970060647}, 9.5, 220, 1246,
  ['mountains', 'landmark'], ['images/bridge-to-nowhere/Bridge-to-Nowhere.webp'], 'Hard', 'uphill', '3hm0TgQKQoE?si=4J-4LF97ieYahON2'
  )

const wisdomTree = new Trail(
  'Wisdom Tree', {lat: 34.13616651908845, long: -118.33206920947036}, 1.8, 90, 1690, ['mountains'], ['images/wisdom-tree/wisdom-tree-3.jpeg', 'images/wisdom-tree/wisdom-tree2.jpeg'], 'Medium', 'uphill', 'Brmb7MjK0ws?si=-KtW3LwbCZFtzofU'
)

const mountIslip = new Trail(
  'Mount Islip', {lat: 34.34636714245459, long: -117.84047098234949}, 2.5, 102, 990, ['mountains'], ['images/mount-islip/mount-islip.jpeg'], 'Medium', 'uphill', 'Gp1ok0KHiaA?si=M9V7XM70evfpr2ds'
)








//Rock formations

const gardenOfTheGods = new Trail(
  'Garden of the Gods', {lat: 34.27579486060916, long: -118.60955544492191}, 0.3, 15, 95, ['rocks'], ['images/garden-of-gods/garden-of-gods.jpeg', 'images/garden-of-gods/garden-of-gods-2.avif'], 'Easy', 'uphill', 'dZsW-VoezLk?si=DMheb6MHzWdXw03k'
)

const skullRock = new Trail(
  'Skull Rock', {lat: 33.99802501198664, long: -116.05983922209107}, 1.7, 50, 147, ['rocks'], ['images/skull-rock/skull-rock-2.jpeg', 'images/skull-rock/skull-rock.jpeg'], 'Easy', 'uphill', 'fn9jNudbzcA?si=zJer4Y5uCUxRiAPF'
)








// Landmarks

const generalSherman = new Trail(
  'General Sherman', {lat: 36.58193176669674, long: -118.75142337468358}, 1.2, 40, 196, ['landmark'], ['images/general-sherman/general-sherman.jpeg'], 'Easy', 'flat', 'TfcJJFtkDRM?si=5KY83tNoD-xNOKXs'
)

const goatCanyonTrestle = new Trail(
  'Goat Canyon Trestle', {lat: 32.73209664609713, long: -116.18356671647969}, 5.8, 200, 2408, ['landmark'], ['images/goat-canyon-trestle/goat-canyon-trestle.webp', 'images/goat-canyon-trestle/goat-canyon-trestle-2.webp'], 'Hard', 'flat', 'z9whE1W4e0E?si=0fVeIdoyGwdBjAlp'
)

const elCapitan = new Trail(
  'El Capitan', {lat: 37.73431753817104, long: -119.63771303257994}, 13.6, 540, 4799, ['landmark'], ['images/el-capitan/el-capitan.webp', 'images/el-capitan/el-capitan-2.webp'], 'Hard', 'uphill', '_h1tbeu1zzQ?si=ny2vXdCvzecYz4xY'
)










//Aerial Views

const cucamongaPeak = new Trail(
  'Cucamonga Peak', {lat: 34.22361928240816, long: -117.58531296783475}, 11.1, 300, 4186, ['aerial'], ['images/cucamonga-peak/cucamonga-2.jpeg', 'images/cucamonga-peak/cucamonga.jpeg'], 'Hard', 'uphill', '5TGA-wT8ftw?si=eCopHZFwPLMuz4kp'
)

const ontarioPeak = new Trail(
  'Ontario Peak', {lat: 34.22983984477077, long: -117.6243725905854}, 12.1, 300, 3894, ['aerial'], ['images/ontario-peak/ontario-peak-2.webp', 'images/ontario-peak/ontario-peak.jpeg'], 'Hard', 'uphill', 'z1JDZoKDTio?si=LYLs98L6mRYrxwRY'
)

const strawberryPeak = new Trail(
  'Strawberry Peak', {lat: 34.285170559991805, long: -118.12077809042643}, 7, 130, 1771, ['aerial'], ['images/strawberry-peak/strawberry-peak.jpeg'],'Hard', 'uphill', 'tvc7coUddJw?si=ageNXMd7tbl-BTfa'
)

const sittonPeak = new Trail(
  'Sitton Peak Truck Trail', {lat: 33.58895098537922, long: -117.44632590031806}, 9.4, 200, 2060, ['aerial'], ['images/sitton-peak/sitton-peak.jpeg'],  'Hard', 'uphill', '7V2s4jdvHO4?si=zrS2ZUeySWrHqLUc'
)

const sanGorgonioPeak = new Trail(
  'San Gorgonio Peak', {lat: 34.1003732391318, long: -116.82447344541995}, 17.9, 400, 5479, ['aerial'], ['images/san-gorgonio/san-gorgonio.webp'], 'Hard', 'uphill', 'Au8VWqdveEw?si=ztMZLMp4a2HcByKs'
)

const mountBadenPowell = new Trail(
  'Mount Baden-Powell', {lat: 34.360805945918976, long: -117.76476172882963}, 7.8, 200, 2775, ['aerial'], ['images/mount-baden-powell/mount-baden-powell.jpeg'], 'Hard', 'uphill', '75-MF8D_T3g?si=TOMWCWz4oB_tz-tV'
)

const lembertDome = new Trail(
  'Lembert Dome', {lat: 37.881619928978246, long: -119.34810220763195}, 3.8, 120, 839, ['aerial'], ['images/lembert-dome/lembert-dome.webp', 'images/lembert-dome/lembert-dome-2.webp'], 'Medium', 'uphill', 'DoUs0eP1eVU?si=J68r_TIOFzl9Mi5r'
)

const taftPoint = new Trail(
  'Taft Point', {lat: 37.714677880205954, long: -119.60460861498373}, 2.3, 62, 354, ['aerial'], ['images/taft-point/taft-point.webp', 'images/taft-point/taft-point-2.webp'], 'Easy', 'uphill', 'q8PW-vdzmyQ?si=l6pWWApWjC-5QapS'
)

const sierraButtes = new Trail(
  'Sierra Buttes', {lat: 39.5957756325786, long: -120.64083407514376}, 5.1, 186, 1545, ['aerial'], ['images/sierra-buttes/sierra-buttes.webp', 'images/sierra-buttes/sierra-buttes-2.webp'], 'Hard', 'uphill', '00QPqBqU168?si=hsKz325VncQuawvC'
)

const sandstonePeak = new Trail(
  'Sandstone Peak', {lat: 34.12191380269343, long: -118.93143994091709}, 3, 113, 997, ['aerial'], ['images/sandstone-peak/sandstone-peak.webp', 'images/sandstone-peak/sandstone-peak-2.webp'], 'Medium', 'uphill', 'npUMpJiSe4w?si=2eTMC2fCZwE9LK6J'
)

const mountDiablo = new Trail(
  'Mount Diablo', {lat: 37.88307937819731, long: -121.91398135311844}, 12.8, 455, 3710, ['aerial'], ['images/mount-diablo/mount-diablo.webp', 'images/mount-diablo/mount-diablo-2.webp'], 'Hard', 'uphill', 'Wnxk26Tm4sc?si=YjJIcJ7rm4urIE0A'
)

const lassenPeak = new Trail(
  'Lassen Peak', {lat: 40.476191773634206, long: -121.5063034976187}, 4.9, 210, 1971, ['aerial'], ['images/lassen-peak/lassen-peak.webp', 'images/lassen-peak/lassen-peak-2.webp'], 'Hard', 'uphill', 'qFccxwJqHQM?si=2Zvro34IdfDTuPpY'
)

const crastleCragDome = new Trail(
  'Castle Crag Dome', {lat: 41.163203033748694, long: -122.30566012301671}, 5.2, 180, 2066, ['aerial'], ['images/crags-trail/crags-trail.webp', 'images/crags-trail/crags-trail-2.webp'], 'Hard', 'uphill', 'hUl2ifJLims?si=Z2nFN-MfyyKOQbFi'
)

const cloudsRest = new Trail(
  'Clouds Rest', {lat: 37.76892878987193, long: -119.48892276139284}, 13.5, 500, 3152, ['aerial'], ['images/clouds-rest/clouds-rest.webp', 'images/clouds-rest/clouds-rest-2.webp'], 'Hard', 'uphill', 'tY2kmikEJZg?si=MYHf4TZdApn8q-4Z'
)

const mountBaldy = new Trail(
  'Mount Baldy', {lat: 34.26640459398345, long: -117.62685381314479}, 11, 420, 3990, ['aerial'], ['images/mount-baldy/mount-baldy.webp', 'images/mount-baldy/mount-baldy-2.webp'], 'Hard', 'uphill', 'K_EYGrojE8w?si=HaY0FwJ0xqHVnWJi'
)

const telescopePeak = new Trail(
  'Telescope Peak', {lat: 36.171401788840846, long: -117.08956594215147}, 12.2, 460, 3244, ['aerial'], ['images/telescope-peak/telescope-peak.webp','images/telescope-peak/telescope-peak-2.webp'], 'Hard', 'uphill', 'l4TfIjJmSho?si=GwNlKImIERZBZmxA'
)

const whiteMountain = new Trail(
  'White Mountain', {lat: 37.635135466416585, long: -118.25546025045857}, 15.2, 480, 3425, ['aerial'], ['images/white-mountain/white-mountain.webp', 'images/white-mountain/white-mountain-2.webp'], 'Hard', 'uphill', 'i_OuaTfL8fg?si=stRwKxhuk3Hhf_V8'
)

const halfDome = new Trail(
  'Half Dome', {lat: 37.74720641802438, long: -119.53285609214268}, 16.5, 500, 5305, ['aerial'], ['images/half-dome/half-dome.webp','images/half-dome/half-dome-2.webp'], 'Hard', 'uphill', 'N4Gw4baD63o?si=HBxFxDY1tWhV1cLx'
)


//WHY WON'T MOUNT WHITNEY SHOW UP IN THE SEARCH!?!?!!?

const mountWhitney = new Trail(
  'Mount Whitney', {lat: 36.57694711294313, long: -118.29701480861813}, 7, 660, 6663, ['aerial', 'landmark'], ['images/mount-whitney/mount-whitney.webp', 'images/mount-whitney/mount-whitney-2.webp'], 'Hard', 'uphill', 'U0Cd8jbj5zg?si=-6habRgz7pKWUtoM'
)





// water

const peanutLake = new Trail(
  'Peanut Lake', {lat: 36.56206983201087, long: -118.23763027373333}, 2.3, 30, 485, ['water'], ['images/peanut-lake/peanut-lake-2.jpeg', 'images/peanut-lake/peanut-lake.jpeg'], 'Easy', 'flat', 'qAUdq--2J7M?si=BpFKRdg7hEt5fZGd'
)

const wildMustardLoop = new Trail(
  'Wild Mustard Loop', {lat: 34.09130495440742, long: -118.19352931712376}, 2.3, 30, 505, ['water'], ['images/wild-mustard/wild-mustard.webp'], 'Easy', 'flat', 'z93MlXtZBNs?si=h_Do0vWvt6Mv8Ta2'
)

const eagleLake = new Trail(
  'Eagle Lake', {lat: 38.949054756723974, long: -120.11656701685457}, 1.8, 57, 429, ['water'], ['images/eagle-lake/eagle-lake.webp', 'images/eagle-lake/eagle-lake-2.webp'], 'Medium', 'flat', 'Hb-4_Y3oy60?si=0fk5dcGS1uOWE7xG'
)

const rubiconTrail = new Trail(
  'Rubicon Trail', {lat: 38.98047574362248, long: -120.09644835104072}, 18.2, 200, 2080, ['water'], ['images/rubicon-trail/rubicon-trail.webp', 'images/rubicon-trail/rubicon-trail-2.webp'], 'Hard', 'flat', 'BPCKS5S2lnQ?si=z6T0SpqjGcCxm3hd'
)

const littleLakesValley = new Trail(
  'Little Lakes Valley', {lat: 37.450682082878316, long: -118.73809471916091}, 7.2, 188, 1033, ['water'], ['images/little-lakes-valley/little-lakes-valley.webp', 'images/little-lakes-valley/little-lakes-valley-2.webp'], 'Medium', 'flat', 'g6DAfefk9vw?si=4Fo2Ex_heLSPdy8N'
)

const bigPineLakes = new Trail(
  'Big Pine Lakes', {lat: 37.131581323727666, long: -118.50701692117455}, 15.4, 516, 3986, ['water'], ['images/big-pine-lakes/big-pine-lakes.webp', 'images/big-pine-lakes/big-pine-lakes-2.webp'], 'Hard', 'uphill', 'XT6nUMr8PJY?si=Um6svFJ_RkQ0DTxd'
)






// Forest

const fernCanyon = new Trail(
  'Fern Canyon', {lat: 41.429452426202715, long: -124.07114639490095}, 1.1, 30, 127, ['forest'], ['images/fern-canyon/fern-canyon.webp', 'images/fern-canyon/fern-canyon-2.webp'], 'Easy', 'flat', 'SkH5WKHgklI?si=1z7mxnnc0kfTblue'
)


// Sand Dunes

const kelsoDunes = new Trail(
  'Kelso Dunes', {lat: 34.912367923060565, long: -115.73136661495643}, 2.9, 80, 479, ['dunes'], ['images/kelso-dunes/kelso-dunes.webp', 'images/kelso-dunes/kelso-dunes-2.webp'], 'Medium', 'flat', '20jXHfDe5j0?si=feBp5U9_hvQpX0ea'
)




const allTrails = Trail.getAllTrails();

