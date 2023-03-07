import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, args, text, isAdmin, isROwner }) => {
let locale = 'en'

if (!text) throw `Example:\n${ usedPrefix + command } Ikratos`
let pp = './thumbnail.jpg'
wm = global.wm
 
const sections = [
{
title: `LIST OF EFFECTS`,
rows: [
      {
    title: "3d-deep-sea-metal",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo 3d-deep-sea-metal ${text}` 
  },
  {
    title: "American-flag-3D",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo American-flag-3D ${text}`
  },
  {
    title: "3D-sci-fi",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo 3D-sci-fi ${text}`
  },
  {
    title: "3D-rainbow-color-calligraphy",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo 3D-rainbow-color-calligraphy ${text}`
  },
  {
    title: "3D-water-pipe",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo 3D-water-pipe ${text}`
  },
  {
    title: "Halloween-skeleton",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Halloween-skeleton ${text}`
  },
  {
    title: "a-spooky-Halloween",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo a-spooky-Halloween ${text}`
  },
  {
    title: "a-cinematic-horror",
		description: `Use: ${ usedPrefix + command } Text1|Text2`,
    rowId: `.logo a-cinematic-horror ${text}`
  },
  {
    title: "a-sketch",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo a-sketch ${text}`
  },
  {
    title: "blue-circuit-style",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo blue-circuit-style ${text}`
  },
  {
    title: "space",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo space ${text}`
  },
  {
    title: "a-metallic",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo a-metallic ${text}`
  },
  {
    title: "Creat-glossy-metalic",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Creat-glossy-metalic ${text}`
  },
  {
    title: "a-Captain-America",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo a-Captain-America ${text}`
  },
  {
    title: "science-fiction",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo science-fiction ${text}`
  },
  {
    title: "Video-game-classic-8-bit",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Video-game-classic-8-bit ${text}`
  },
  {
    title: "green-horror-style",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo green-horror-style ${text}`
  },
  {
    title: "a-transformer",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo a-transformer ${text}`
  },
  {
    title: "berry",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo berry ${text}`
  },
  {
    title: "layered",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo layered ${text}`
  },
  {
    title: "Online-thunder--generator",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Online-thunder--generator ${text}`
  },
  {
    title: "a-magma-hot",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo a-magma-hot ${text}`
  },
  {
    title: "3D-stone-cracked-cool",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo 3D-stone-cracked-cool ${text}`
  },
  {
    title: "3D-neon-light",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo 3D-neon-light ${text}`
  },
  {
    title: "impressive-glitch",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo impressive-glitch ${text}`
  },
  {
    title: "a-glitch",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo a-glitch ${text}`
  },
  {
    title: "Harry-Potter",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Harry-Potter ${text}`
  },
  {
    title: "embossed--on-cracked-surface",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo embossed--on-cracked-surface ${text}`
  },
  {
    title: "Broken-glass",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Broken-glass ${text}`
  },
  {
    title: "art-paper-cut",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo art-paper-cut ${text}`
  },
  {
    title: "artistic-black-and-white-status-and-quote-with-your-photos",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo artistic-black-and-white-status-and-quote-with-your-photos ${text}`
  },
  {
    title: "Online-3D-gradient--generator",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Online-3D-gradient--generator ${text}`
  },
  {
    title: "a-3D-glossy-metal",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo a-3D-glossy-metal ${text}`
  },
  {
    title: "3D-realistic--on-the-beach",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo 3D-realistic--on-the-beach ${text}`
  },
  {
    title: "a-watercolor",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo a-watercolor ${text}`
  },
  {
    title: "Online-multicolor-3D-paper-cut",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Online-multicolor-3D-paper-cut ${text}`
  },
  {
    title: "Write-text-on-foggy-window",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Write-text-on-foggy-window ${text}`
  },
  {
    title: "neon-devil-wings",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo neon-devil-wings ${text}`
  },
  {
    title: "3D-underwater--generator",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo 3D-underwater--generator ${text}`
  },
  {
    title: "Online-black-and-white-bear-mascot-logo-creation",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Online-black-and-white-bear-mascot-logo-creation ${text}`
  },
  {
    title: "wonderful-graffiti-art",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo wonderful-graffiti-art ${text}`
  },
  {
    title: "a-cool-graffiti-text-on-the-wall",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo a-cool-graffiti-text-on-the-wall ${text}`
  },
  {
    title: "cool-wall-graffiti",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo cool-wall-graffiti ${text}`
  },
  {
    title: "a-christmas-holiday-snow",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo a-christmas-holiday-snow ${text}`
  },
  {
    title: "a-futuristic-technology-neon-light",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo a-futuristic-technology-neon-light ${text}`
  },
  {
    title: "snow--for-winter-holidays",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo snow--for-winter-holidays ${text}`
  },
  {
    title: "a-cloud--on-the-sky",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo a-cloud--on-the-sky ${text}`
  },
  {
    title: "3D-luxury-gold",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo 3D-luxury-gold ${text}`
  },
  {
    title: "3D-gradient",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo 3D-gradient ${text}`
  },
  {
    title: "Blackpink-logo-style",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Blackpink-logo-style ${text}`
  },
  {
    title: "realistic-vintage-style-light-bulb",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo realistic-vintage-style-light-bulb ${text}`
  },
  {
    title: "realistic-cloud",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo realistic-cloud ${text}`
  },
  {
    title: "a-cloud--in-the-sky",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo a-cloud--in-the-sky ${text}`
  },
  {
    title: "Write-in-Sand-Summer-Beach",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Write-in-Sand-Summer-Beach ${text}`
  },
  {
    title: "Sand-Writing",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Sand-Writing ${text}`
  },
  {
    title: "Sand-engraved-3d",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Sand-engraved-3d ${text}`
  },
  {
    title: "a-summery-sand-writing",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo a-summery-sand-writing ${text}`
  },
  {
    title: "Foil-Balloon--For-Birthday",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Foil-Balloon--For-Birthday ${text}`
  },
  {
    title: "3d-glue--with-realistic-style",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo 3d-glue--with-realistic-style ${text}`
  },
  {
    title: "space-3D",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo space-3D ${text}`
  },
  {
    title: "Metal-Dark-Gold",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Metal-Dark-Gold ${text}`
  },
  {
    title: "Glitch--Style-Tik-Tok",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Glitch--Style-Tik-Tok ${text}`
  },
  {
    title: "a-Stone",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo a-Stone ${text}`
  },
  {
    title: "Neon-Light--With-Galaxy-Style",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Neon-Light--With-Galaxy-Style ${text}`
  },
  {
    title: "1917-Style",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo 1917-Style ${text}`
  },
  {
    title: "80\'s-Retro-Neon",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo 80\'s-Retro-Neon ${text}`
  },
  {
    title: "Minion--3D",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Minion--3D ${text}`
  },
  {
    title: "Pornhub-Style-Logo",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Pornhub-Style-Logo ${text}`
  },
  {
    title: "Double-Exposure--Black-&-White",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Double-Exposure--Black-&-White ${text}`
  },
  {
    title: "Holographic-3D",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Holographic-3D ${text}`
  },
  {
    title: "3D-Avengers-logo",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo 3D-Avengers-logo ${text}`
  },
  {
    title: "Metal-Purple-Dual-Effect",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Metal-Purple-Dual-Effect ${text}`
  },
  {
    title: "logo-style-Marvel-studios-Ver:-metal",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo logo-style-Marvel-studios-Ver:-metal ${text}`
  },
  {
    title: "logo-style-Marvel-studios",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo logo-style-Marvel-studios ${text}`
  },
  {
    title: "Deluxe-Silver",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Deluxe-Silver ${text}`
  },
  {
    title: "Color-Full-Luxury-Metal",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Color-Full-Luxury-Metal ${text}`
  },
  {
    title: "Glossy-Blue-Metal",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Glossy-Blue-Metal ${text}`
  },
  {
    title: "Deluxe-Gold",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Deluxe-Gold ${text}`
  },
  {
    title: "Glossy-Carbon",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Glossy-Carbon ${text}`
  },
  {
    title: "Fabric",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Fabric ${text}`
  },
  {
    title: "Neon",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Neon ${text}`
  },
  {
    title: "New-Year-Cards-3D-By-Name",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo New-Year-Cards-3D-By-Name ${text}`
  },
  {
    title: "Happ-new-year-card-firework-gif",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Happ-new-year-card-firework-gif ${text}`
  },
  {
    title: "Fullcolor-Balloon",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Fullcolor-Balloon ${text}`
  },
  {
    title: "Text-Logo-3D-Metal",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Text-Logo-3D-Metal ${text}`
  },
  {
    title: "avatar-gold",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo avatar-gold ${text}`
  },
  {
    title: "Text-Logo-3D-Metal-Silver",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Text-Logo-3D-Metal-Silver ${text}`
  },
  {
    title: "Text-Logo-3D-Metal-Rose-Gold",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Text-Logo-3D-Metal-Rose-Gold ${text}`
  },
  {
    title: "Text-Logo-3D-Metal-Gold",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Text-Logo-3D-Metal-Gold ${text}`
  },
  {
    title: "Text-Logo-3D-Metal-Galaxy",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Text-Logo-3D-Metal-Galaxy ${text}`
  },
  {
    title: "Xmas-Cards-3D",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Xmas-Cards-3D ${text}`
  },
  {
    title: "Blood-Text-On-The-Frosted-Glass",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Blood-Text-On-The-Frosted-Glass ${text}`
  },
  {
    title: "Halloween-Fire",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Halloween-Fire ${text}`
  },
  {
    title: "Metal-Dark-Gold",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Metal-Dark-Gold ${text}`
  },
  {
    title: "Lion-Logo-Mascot",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Lion-Logo-Mascot ${text}`
  },
  {
    title: "Lion-Logo-Mascot",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Lion-Logo-Mascot ${text}`
  },
  {
    title: "Wolf-Logo-Galaxy",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Wolf-Logo-Galaxy ${text}`
  },
  {
    title: "Ninja-Logo",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Ninja-Logo ${text}`
  },
  {
    title: "Logo-Joker",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Logo-Joker ${text}`
  },
  {
    title: "Wicker",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Wicker ${text}`
  },
  {
    title: "Natural-Leaves",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Natural-Leaves ${text}`
  },
  {
    title: "Firework-Sparkle",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Firework-Sparkle ${text}`
  },
  {
    title: "Skeleton",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Skeleton ${text}`
  },
  {
    title: "Red-Foil-Balloon",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Red-Foil-Balloon ${text}`
  },
  {
    title: "Purple-Foil-Balloon",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Purple-Foil-Balloon ${text}`
  },
  {
    title: "Pink-Foil-Balloon",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Pink-Foil-Balloon ${text}`
  },
  {
    title: "Green-Foil-Balloon",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Green-Foil-Balloon ${text}`
  },
  {
    title: "Cyan-Foil-Balloon",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Cyan-Foil-Balloon ${text}`
  },
  {
    title: "Blue-Foil-Balloon",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Blue-Foil-Balloon ${text}`
  },
  {
    title: "Gold-Foil-Balloon",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Gold-Foil-Balloon ${text}`
  },
  {
    title: "Steel",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Steel ${text}`
  },
  {
    title: "Ultra-Gloss",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Ultra-Gloss ${text}`
  },
  {
    title: "Denim",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Denim ${text}`
  },
  {
    title: "Decorate-Green",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Decorate-Green ${text}`
  },
  {
    title: "Decorate-Purple",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Decorate-Purple ${text}`
  },
  {
    title: "Peridot-Stone",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Peridot-Stone ${text}`
  },
  {
    title: "Rock",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Rock ${text}`
  },
  {
    title: "Lava",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Lava ${text}`
  },
  {
    title: "Yellow-Glass",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Yellow-Glass ${text}`
  },
  {
    title: "Purple-Glass",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Purple-Glass ${text}`
  },
  {
    title: "Orange-Glass",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Orange-Glass ${text}`
  },
  {
    title: "Green-Glass",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Green-Glass ${text}`
  },
  {
    title: "Cyan-Glass",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Cyan-Glass ${text}`
  },
  {
    title: "Blue-Glass",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Blue-Glass ${text}`
  },
  {
    title: "Red-Glass",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Red-Glass ${text}`
  },
  {
    title: "Purple-Shiny-Glass",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Purple-Shiny-Glass ${text}`
  },
  {
    title: "Captain-America",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Captain-America ${text}`
  },
  {
    title: "Robot-R2-D2",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Robot-R2-D2 ${text}`
  },
  {
    title: "Rainbow-Equalizer",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Rainbow-Equalizer ${text}`
  },
  {
    title: "Toxic",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Toxic ${text}`
  },
  {
    title: "Pink-Sparkling-Jewelry",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo ink-Sparkling-Jewelry ${text}`
  },
  {
    title: "Blue-Sparkling-Jewelry",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Blue-Sparkling-Jewelry ${text}`
  },
  {
    title: "Green-Sparkling-Jewelry",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Green-Sparkling-Jewelry ${text}`
  },
  {
    title: "Purple-Sparkling-Jewelry",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Purple-Sparkling-Jewelry ${text}`
  },
  {
    title: "Gold-Sparkling-Jewelry",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Gold-Sparkling-Jewelry ${text}`
  },
  {
    title: "Red-Sparkling-Jewelry",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Red-Sparkling-Jewelry ${text}`
  },
  {
    title: "Cyan-Sparkling-Jewelry",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Cyan-Sparkling-Jewelry ${text}`
  },
  {
    title: "Purple-Glass",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Purple-Glass ${text}`
  },
  {
    title: "Decorative-Glass",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Decorative-Glass ${text}`
  },
  {
    title: "Chocolate-Cake",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Chocolate-Cake ${text}`
  },
  {
    title: "Strawberry",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Strawberry ${text}`
  },
  {
    title: "Koi-Fish",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Koi-Fish ${text}`
  },
  {
    title: "Bread",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Bread ${text}`
  },
  {
    title: "Matrix-Style",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Matrix-Style ${text}`
  },
  {
    title: "Horror-Blood",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Horror-Blood ${text}`
  },
  {
    title: "Neon-Light",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Neon-Light ${text}`
  },
  {
    title: "Thunder",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Thunder ${text}`
  },
  {
    title: "3D-Box",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo 3D-Box ${text}`
  },
  {
    title: "Neon",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Neon ${text}`
  },
  {
    title: "Road-Warning",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Road-Warning ${text}`
  },
  {
    title: "3D-Steel",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo 3D-Steel ${text}`
  },
  {
    title: "Bokeh",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Bokeh ${text}`
  },
  {
    title: "Green-Neon",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Green-Neon ${text}`
  },
  {
    title: "Free-Advanced-Glow",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Free-Advanced-Glow ${text}`
  },
  {
    title: "Dropwater",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Dropwater ${text}`
  },
  {
    title: "Break-Wall",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Break-Wall ${text}`
  },
  {
    title: "Chrismast-Gift",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Chrismast-Gift ${text}`
  },
  {
    title: "Honey",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Honey ${text}`
  },
  {
    title: "Plastic-Bag-Drug",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Plastic-Bag-Drug ${text}`
  },
  {
    title: "Horror-Gift",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Horror-Gift ${text}`
  },
  {
    title: "Marble-Slabs",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Marble-Slabs ${text}`
  },
  {
    title: "Marble",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Marble ${text}`
  },
  {
    title: "Ice-Cold",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Ice-Cold ${text}`
  },
  {
    title: "Fruit-Juice",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Fruit-Juice ${text}`
  },
  {
    title: "Rusty-Metal",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Rusty-Metal ${text}`
  },
  {
    title: "Abstra-Gold",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Abstra-Gold ${text}`
  },
  {
    title: "Biscuit",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Biscuit ${text}`
  },
  {
    title: "Bagel",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Bagel ${text}`
  },
  {
    title: "Wood",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Wood ${text}`
  },
  {
    title: "SCI---Fi",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo SCI---Fi ${text}`
  },
  {
    title: "Metal-Rainbow",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Metal-Rainbow ${text}`
  },
  {
    title: "Purple-Gem",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Purple-Gem ${text}`
  },
  {
    title: "Shiny-Metal",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Shiny-Metal ${text}`
  },
  {
    title: "Yellow-Jewelry",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Yellow-Jewelry ${text}`
  },
  {
    title: "Silver-Jewelry",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Silver-Jewelry ${text}`
  },
  {
    title: "Red-Jewelry",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Red-Jewelry ${text}`
  },
  {
    title: "Purple-Jewelry",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Purple-Jewelry ${text}`
  },
  {
    title: "Orange-Jewelry",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Orange-Jewelry ${text}`
  },
  {
    title: "Green-Jewelry",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Green-Jewelry ${text}`
  },
  {
    title: "Cyan-Jewelry",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Cyan-Jewelry ${text}`
  },
  {
    title: "Blue-Jewelry",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Blue-Jewelry ${text}`
  },
  {
    title: "Hot-Metal",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Hot-Metal ${text}`
  },
  {
    title: "Hexa-Golden",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Hexa-Golden ${text}`
  },
  {
    title: "Blue-Glitter",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Blue-Glitter ${text}`
  },
  {
    title: "Purple-Glitter",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Purple-Glitter ${text}`
  },
  {
    title: "Pink-Glitter",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Pink-Glitter ${text}`
  },
  {
    title: "Green-Glitter",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Green-Glitter ${text}`
  },
  {
    title: "Silver-Glitter",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Silver-Glitter ${text}`
  },
  {
    title: "Gold-Glitter",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Gold-Glitter ${text}`
  },
  {
    title: "Bronze-Glitter",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Bronze-Glitter ${text}`
  },
  {
    title: "Eroded-Metal",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Eroded-Metal ${text}`
  },
  {
    title: "Carbon",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Carbon ${text}`
  },
  {
    title: "Pink-Candy",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Pink-Candy ${text}`
  },
  {
    title: "Blue-Metal",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Blue-Metal ${text}`
  },
  {
    title: "Blue-Gem",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Blue-Gem ${text}`
  },
  {
    title: "Black-Metal",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo Black-Metal ${text}`
  },
  {
    title: "3D-Glowing-Metal",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo 3D-Glowing-Metal ${text}`
  },
  {
    title: "3D-Chrome",
		description: `Use: ${ usedPrefix + command } IKRATOS`,
    rowId: `.logo 3D-Chrome ${text}`
  },
 	]
    },
    {
        title: "GROUP",
	rows: [    
	      {title: "BOT GROUP", description: 'GROUP OF BOT', rowId: `${usedPrefix}linkgc`},
	       	]
                },
    {
	title: "OWNER",
	rows: [
                {title: "OWNER", description: 'OWNER OF BOT', rowId: `${usedPrefix}owner`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: `
 *🎨Ikratos-MD-v1 LOGO Maker🎨*

 
  🖼️Select The Effect From The List
	
 `, pp,
title: null,
footer: `ɪᴋʀᴀᴛᴏs-ᴍᴅ-ᴠ1 • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ\nowner: +92 347 0027813`,
buttonText: "LIST OF EFFECTS", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en']
handler.tags = ["maker"]
handler.command = /^(mmm|mimg|imgtp)$/i
export default handler
