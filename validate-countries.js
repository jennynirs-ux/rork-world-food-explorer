const fs = require('fs');
const path = require('path');

const issues = [];
const countriesDir = path.join(__dirname, 'data', 'countries');

function validateCountry(filePath) {
  const fileName = path.basename(filePath, '.ts');
  const content = fs.readFileSync(filePath, 'utf8');
  
  const countryIssues = [];
  
  try {
    const match = content.match(/export const \w+: Country = ({[\s\S]*});/);
    if (!match) {
      countryIssues.push('Cannot parse country object');
      return countryIssues;
    }

    const countryStr = match[1];
    
    // 1. Basic data
    if (!countryStr.includes('id:')) countryIssues.push('Missing: id');
    if (!countryStr.includes('name:')) countryIssues.push('Missing: name');
    if (!countryStr.includes('code:')) countryIssues.push('Missing: code');
    if (!countryStr.includes('continent:')) countryIssues.push('Missing: continent');
    if (!countryStr.includes('flag:')) countryIssues.push('Missing: flag');
    
    // 2. Image
    if (!countryStr.includes('landscapeImage:')) {
      countryIssues.push('Missing: landscapeImage');
    }
    
    // 3. Description
    if (!countryStr.includes('description:')) {
      countryIssues.push('Missing: description');
    }
    
    // 4. Quick Facts - check for exactly 5
    const quickFactsMatch = countryStr.match(/quickFacts:\s*\[([\s\S]*?)\]/);
    if (!quickFactsMatch) {
      countryIssues.push('Missing: quickFacts');
    } else {
      const facts = quickFactsMatch[1].match(/\{[^}]+\}/g) || [];
      if (facts.length !== 5) {
        countryIssues.push(`quickFacts: Expected 5, got ${facts.length}`);
      }
      
      const factsText = quickFactsMatch[1];
      if (!factsText.includes('Capital')) countryIssues.push('quickFacts missing: Capital');
      if (!factsText.includes('Population')) countryIssues.push('quickFacts missing: Population');
      if (!factsText.includes('Official Language')) countryIssues.push('quickFacts missing: Official Language(s)');
      if (!factsText.includes('Currency')) countryIssues.push('quickFacts missing: Currency');
      if (!factsText.includes('Area')) countryIssues.push('quickFacts missing: Area');
    }
    
    // 5. Facts - check for 4-8 points
    const factsMatch = countryStr.match(/facts:\s*\[([\s\S]*?)\]/);
    if (!factsMatch) {
      countryIssues.push('Missing: facts');
    } else {
      const factItems = factsMatch[1].match(/'[^']*'/g) || [];
      if (factItems.length < 4) {
        countryIssues.push(`facts: Too few (${factItems.length}), need at least 4`);
      } else if (factItems.length > 8) {
        countryIssues.push(`facts: Too many (${factItems.length}), max 8`);
      }
    }
    
    // 6. Food Culture
    if (!countryStr.includes('foodCulture:')) {
      countryIssues.push('Missing: foodCulture');
    }
    
    // 7. History - at least 3 entries
    const historyMatch = countryStr.match(/history:\s*\[([\s\S]*?)\n\s*\]/);
    if (!historyMatch) {
      countryIssues.push('Missing: history');
    } else {
      const historyEntries = historyMatch[1].match(/\{\s*year:/g) || [];
      if (historyEntries.length < 3) {
        countryIssues.push(`history: Too few entries (${historyEntries.length}), need at least 3`);
      }
    }
    
    // 8. Innovations - at least 2-4 entries
    const innovationsMatch = countryStr.match(/innovations:\s*\[([\s\S]*?)\n\s*\]/);
    if (!innovationsMatch) {
      countryIssues.push('Missing: innovations');
    } else {
      const innovationEntries = innovationsMatch[1].match(/\{\s*name:/g) || [];
      if (innovationEntries.length < 2) {
        countryIssues.push(`innovations: Too few (${innovationEntries.length}), need at least 2`);
      }
    }
    
    // 9. Travel - mustVisit at least 3
    const mustVisitMatch = countryStr.match(/mustVisit:\s*\[([\s\S]*?)\]/);
    if (!mustVisitMatch) {
      countryIssues.push('Missing: mustVisit');
    } else {
      const mustVisitEntries = mustVisitMatch[1].match(/\{\s*name:/g) || [];
      if (mustVisitEntries.length < 3) {
        countryIssues.push(`mustVisit: Too few (${mustVisitEntries.length}), need at least 3`);
      }
    }
    
    // 9.2 Travel Essentials at least 3
    const travelEssentialsMatch = countryStr.match(/travelEssentials:\s*\[([\s\S]*?)\]/);
    if (!travelEssentialsMatch) {
      countryIssues.push('Missing: travelEssentials');
    } else {
      const travelEntries = travelEssentialsMatch[1].match(/\{\s*item:/g) || [];
      if (travelEntries.length < 3) {
        countryIssues.push(`travelEssentials: Too few (${travelEntries.length}), need at least 3`);
      }
    }
    
    // 10. Main Dish
    const mainDishMatch = countryStr.match(/mainDish:\s*\{([\s\S]*?)\n\s*\},/);
    if (!mainDishMatch) {
      countryIssues.push('Missing: mainDish');
    } else {
      const dish = mainDishMatch[1];
      if (!dish.includes('id:')) countryIssues.push('mainDish missing: id');
      if (!dish.includes('name:')) countryIssues.push('mainDish missing: name');
      if (!dish.includes('description:')) countryIssues.push('mainDish missing: description');
      if (!dish.includes('cookingTime:')) countryIssues.push('mainDish missing: cookingTime');
      if (!dish.includes('servings:')) countryIssues.push('mainDish missing: servings');
      if (!dish.includes('dietType:')) countryIssues.push('mainDish missing: dietType');
      if (!dish.includes('ingredients:')) countryIssues.push('mainDish missing: ingredients');
      if (!dish.includes('imageUrl:')) countryIssues.push('mainDish missing: imageUrl');
      
      const stepsMatch = dish.match(/steps:\s*\[([\s\S]*?)\]/);
      if (!stepsMatch) {
        countryIssues.push('mainDish missing: steps');
      } else {
        const steps = stepsMatch[1].match(/'[^']*'/g) || [];
        if (steps.length < 6) {
          countryIssues.push(`mainDish steps: Too few (${steps.length}), need at least 6`);
        }
      }
    }
    
    // 11. Dessert
    const dessertMatch = countryStr.match(/dessert:\s*\{([\s\S]*?)\n\s*\},/);
    if (!dessertMatch) {
      countryIssues.push('Missing: dessert');
    } else {
      const dessert = dessertMatch[1];
      if (!dessert.includes('id:')) countryIssues.push('dessert missing: id');
      if (!dessert.includes('name:')) countryIssues.push('dessert missing: name');
      if (!dessert.includes('description:')) countryIssues.push('dessert missing: description');
      if (!dessert.includes('cookingTime:')) countryIssues.push('dessert missing: cookingTime');
      if (!dessert.includes('servings:')) countryIssues.push('dessert missing: servings');
      if (!dessert.includes('dietType:')) countryIssues.push('dessert missing: dietType');
      if (!dessert.includes('ingredients:')) countryIssues.push('dessert missing: ingredients');
      if (!dessert.includes('imageUrl:')) countryIssues.push('dessert missing: imageUrl');
      
      const stepsMatch = dessert.match(/steps:\s*\[([\s\S]*?)\]/);
      if (!stepsMatch) {
        countryIssues.push('dessert missing: steps');
      } else {
        const steps = stepsMatch[1].match(/'[^']*'/g) || [];
        if (steps.length < 6) {
          countryIssues.push(`dessert steps: Too few (${steps.length}), need at least 6`);
        }
      }
      
      // Check cinnamon buns only for Sweden
      if (fileName === 'sweden') {
        if (!dessert.toLowerCase().includes('cinnamon') && !dessert.toLowerCase().includes('kanelbullar')) {
          countryIssues.push('Sweden must have cinnamon buns (kanelbullar) as dessert');
        }
      }
    }
    
    // 12. Drinks
    const drinksMatch = countryStr.match(/drinks:\s*\{([\s\S]*?)\}/);
    if (!drinksMatch) {
      countryIssues.push('Missing: drinks');
    } else {
      const drinks = drinksMatch[1];
      if (!drinks.includes('alcoholic:')) countryIssues.push('drinks missing: alcoholic');
      if (!drinks.includes('nonAlcoholic:')) countryIssues.push('drinks missing: nonAlcoholic');
    }
    
    // 13. Music - 3-5 examples
    const musicMatch = countryStr.match(/music:\s*\[([\s\S]*?)\]/);
    if (!musicMatch) {
      countryIssues.push('Missing: music');
    } else {
      const musicItems = musicMatch[1].match(/'[^']*'/g) || [];
      if (musicItems.length < 3) {
        countryIssues.push(`music: Too few (${musicItems.length}), need at least 3`);
      } else if (musicItems.length > 5) {
        countryIssues.push(`music: Too many (${musicItems.length}), max 5`);
      }
    }
    
    // 14. Decoration Ideas - 4-6 ideas
    const decorationMatch = countryStr.match(/decorationIdeas:\s*\[([\s\S]*?)\]/);
    if (!decorationMatch) {
      countryIssues.push('Missing: decorationIdeas');
    } else {
      const decorationItems = decorationMatch[1].match(/'[^']*'/g) || [];
      if (decorationItems.length < 4) {
        countryIssues.push(`decorationIdeas: Too few (${decorationItems.length}), need at least 4`);
      } else if (decorationItems.length > 6) {
        countryIssues.push(`decorationIdeas: Too many (${decorationItems.length}), max 6`);
      }
    }
    
    // 15. Conversation Starters - 3-5 questions
    const conversationMatch = countryStr.match(/conversationStarters:\s*\[([\s\S]*?)\]/);
    if (!conversationMatch) {
      countryIssues.push('Missing: conversationStarters');
    } else {
      const conversationItems = conversationMatch[1].match(/'[^']*'/g) || [];
      if (conversationItems.length < 3) {
        countryIssues.push(`conversationStarters: Too few (${conversationItems.length}), need at least 3`);
      } else if (conversationItems.length > 5) {
        countryIssues.push(`conversationStarters: Too many (${conversationItems.length}), max 5`);
      }
    }
    
    // 16. Quiz - exactly 10 questions
    const quizMatch = countryStr.match(/quiz:\s*\[([\s\S]*?)\]/);
    if (!quizMatch) {
      countryIssues.push('Missing: quiz');
    } else {
      const quizQuestions = quizMatch[1].match(/\{\s*id:/g) || [];
      if (quizQuestions.length !== 10) {
        countryIssues.push(`quiz: Expected exactly 10 questions, got ${quizQuestions.length}`);
      }
      
      // Check each quiz question structure
      const quizText = quizMatch[1];
      const questionBlocks = quizText.split(/\},\s*\{/);
      questionBlocks.forEach((block, index) => {
        if (!block.includes('id:')) countryIssues.push(`quiz question ${index + 1} missing: id`);
        if (!block.includes('question:')) countryIssues.push(`quiz question ${index + 1} missing: question`);
        if (!block.includes('options:')) countryIssues.push(`quiz question ${index + 1} missing: options`);
        if (!block.includes('correctAnswer:')) countryIssues.push(`quiz question ${index + 1} missing: correctAnswer`);
      });
    }
    
    // 17. Coordinates
    const coordinatesMatch = countryStr.match(/coordinates:\s*\{\s*x:\s*\d+,\s*y:\s*\d+\s*\}/);
    if (!coordinatesMatch) {
      countryIssues.push('Missing or invalid: coordinates (must have x and y)');
    }
    
  } catch (error) {
    countryIssues.push(`Error parsing file: ${error.message}`);
  }
  
  return countryIssues;
}

// Get all country files
const files = fs.readdirSync(countriesDir)
  .filter(f => f.endsWith('.ts'))
  .sort();

console.log(`Checking ${files.length} countries...\n`);

let totalIssues = 0;
const countriesWithIssues = [];

files.forEach(file => {
  const filePath = path.join(countriesDir, file);
  const countryIssues = validateCountry(filePath);
  
  if (countryIssues.length > 0) {
    totalIssues += countryIssues.length;
    countriesWithIssues.push({
      file,
      issues: countryIssues
    });
  }
});

// Print results
if (countriesWithIssues.length === 0) {
  console.log('✅ All countries are valid!');
} else {
  console.log(`❌ Found issues in ${countriesWithIssues.length} countries (${totalIssues} total issues):\n`);
  
  countriesWithIssues.forEach(({ file, issues }) => {
    console.log(`\n📍 ${file}:`);
    issues.forEach(issue => {
      console.log(`   ❌ ${issue}`);
    });
  });
  
  console.log(`\n\n📊 Summary:`);
  console.log(`   Total countries checked: ${files.length}`);
  console.log(`   Countries with issues: ${countriesWithIssues.length}`);
  console.log(`   Total issues found: ${totalIssues}`);
}
