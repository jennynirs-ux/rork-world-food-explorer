const fs = require('fs');
const path = require('path');

const dishToImageMap = {
  'Kabuli Pulao': 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600',
  'Firnee': 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=600',
  
  'Tavë Kosi': 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=600',
  'Ballokume': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600',
  
  'Algerian Couscous': 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600',
  'Makroud': 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600',
  
  'Escudella': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600',
  'Crema Catalana': 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600',
  
  'Muamba de Galinha': 'https://images.unsplash.com/photo-1598511726623-d2e9996892f0?w=600',
  'Cocada Amarela': 'https://images.unsplash.com/photo-1612882521431-88e296c8f8f2?w=600',
  
  'Pepperpot': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600',
  'Ducana': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600',
  
  'Asado': 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600',
  'Alfajores': 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600',
  
  'Khorovats': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600',
  'Gata': 'https://images.unsplash.com/photo-1612882521431-88e296c8f8f2?w=600',
  
  'Meat Pie': 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600',
  'Lamingtons': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600',
  
  'Wiener Schnitzel': 'https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=600',
  'Sachertorte': 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600',
  
  'Plov': 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  'Pakhlava': 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600',
  
  'Conch Salad': 'https://images.unsplash.com/photo-1580959375944-0b6ab60c2ebc?w=600',
  'Guava Duff': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600',
  
  'Machboos': 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  'Halwa': 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600',
  
  'Kacchi Biryani': 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600',
  'Mishti Doi': 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600',
  
  'Flying Fish': 'https://images.unsplash.com/photo-1580959375944-0b6ab60c2ebc?w=600',
  'Coconut Bread': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600',
  
  'Draniki': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600',
  'Syrniki': 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600',
  
  'Moules-frites': 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=600',
  'Belgian Waffles': 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600',
  
  'Rice and Beans': 'https://images.unsplash.com/photo-1580959375944-0b6ab60c2ebc?w=600',
  'Tableta': 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600',
  
  'Chicken Teriyaki': 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=600',
  'Mochi Ice Cream': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600',
  
  'Spaghetti Carbonara': 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600',
  'Tiramisu': 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600',
  
  'Paella': 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=600',
  'Churros': 'https://images.unsplash.com/photo-1543364195-bfe6e4932397?w=600',
  
  'Pad Thai': 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600',
  'Mango Sticky Rice': 'https://images.unsplash.com/photo-1601266987673-a4d9c9159a48?w=600',
  
  'Fish and Chips': 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600',
  'Sticky Toffee Pudding': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600',
  
  'Hamburger': 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=600',
  'Apple Pie': 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=600',
  
  'Pho': 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600',
  'Che': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600',
  
  'Coq au Vin': 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600',
  'Crème Brûlée': 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600',
  
  'Currywurst': 'https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=600',
  'Black Forest Cake': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600',
  
  'Moussaka': 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600',
  'Baklava': 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600',
  
  'Peking Duck': 'https://images.unsplash.com/photo-1585937421612-70a008356fdf?w=600',
  'Egg Tart': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600',
  
  'Kimchi Jjigae': 'https://images.unsplash.com/photo-1585937421612-70a008356fdf?w=600',
  'Bingsu': 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600',
  
  'Tacos': 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600',
  'Tres Leches': 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600',
};

const genericImages = {
  curry: 'https://images.unsplash.com/photo-1585937421612-70a008356fdf?w=600',
  rice: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600',
  meat: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600',
  stew: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600',
  seafood: 'https://images.unsplash.com/photo-1580959375944-0b6ab60c2ebc?w=600',
  pasta: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600',
  bread: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600',
  dessert: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600',
  sweet: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600',
  cake: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600',
};

function getImageForDish(dishName, isDessert = false) {
  for (const [key, url] of Object.entries(dishToImageMap)) {
    if (dishName.includes(key)) {
      return url;
    }
  }
  
  const lowerName = dishName.toLowerCase();
  
  if (isDessert) {
    if (lowerName.includes('cake') || lowerName.includes('torte')) return genericImages.cake;
    if (lowerName.includes('pudding') || lowerName.includes('custard')) return genericImages.dessert;
    if (lowerName.includes('ice cream') || lowerName.includes('gelato')) return 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600';
    return genericImages.sweet;
  }
  
  if (lowerName.includes('curry') || lowerName.includes('masala')) return genericImages.curry;
  if (lowerName.includes('rice') || lowerName.includes('pilaf') || lowerName.includes('biryani')) return genericImages.rice;
  if (lowerName.includes('fish') || lowerName.includes('seafood') || lowerName.includes('shrimp')) return genericImages.seafood;
  if (lowerName.includes('pasta') || lowerName.includes('spaghetti') || lowerName.includes('noodle')) return genericImages.pasta;
  if (lowerName.includes('stew') || lowerName.includes('soup')) return genericImages.stew;
  if (lowerName.includes('bread') || lowerName.includes('pita')) return genericImages.bread;
  
  return genericImages.meat;
}

function updateCountryFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  const mainDishMatch = content.match(/mainDish:\s*\{[\s\S]*?name:\s*['"]([^'"]+)['"]/);
  const dessertMatch = content.match(/dessert:\s*\{[\s\S]*?name:\s*['"]([^'"]+)['"]/);
  
  if (mainDishMatch) {
    const dishName = mainDishMatch[1];
    const imageUrl = getImageForDish(dishName, false);
    
    const hasMainImage = /mainDish:\s*\{[\s\S]*?imageUrl:/.test(content);
    
    if (!hasMainImage) {
      content = content.replace(
        /(mainDish:\s*\{[\s\S]*?steps:\s*\[[^\]]*\],)\s*(\n\s*)/,
        `$1\n    imageUrl: '${imageUrl}',\n  `
      );
      modified = true;
    } else {
      content = content.replace(
        /(mainDish:\s*\{[\s\S]*?)imageUrl:\s*['"][^'"]*['"]/,
        `$1imageUrl: '${imageUrl}'`
      );
      modified = true;
    }
  }
  
  if (dessertMatch) {
    const dessertName = dessertMatch[1];
    const imageUrl = getImageForDish(dessertName, true);
    
    const hasDessertImage = /dessert:\s*\{[\s\S]*?imageUrl:/.test(content);
    
    if (!hasDessertImage) {
      content = content.replace(
        /(dessert:\s*\{[\s\S]*?steps:\s*\[[^\]]*\],)\s*(\n\s*)/,
        `$1\n    imageUrl: '${imageUrl}',\n  `
      );
      modified = true;
    } else {
      content = content.replace(
        /(dessert:\s*\{[\s\S]*?)imageUrl:\s*['"][^'"]*['"]/,
        `$1imageUrl: '${imageUrl}'`
      );
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  
  return false;
}

function main() {
  const countriesDir = path.join(__dirname, 'data', 'countries');
  const files = fs.readdirSync(countriesDir).filter(f => f.endsWith('.ts'));
  
  let updatedCount = 0;
  
  console.log(`Processing ${files.length} country files...\n`);
  
  files.forEach(file => {
    const filePath = path.join(countriesDir, file);
    if (updateCountryFile(filePath)) {
      updatedCount++;
      console.log(`✓ Updated: ${file}`);
    }
  });
  
  console.log(`\n✅ Successfully updated ${updatedCount} country files with dish images!`);
}

main();
