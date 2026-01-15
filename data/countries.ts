import { Country } from '@/types';
import { countryLandscapes } from './country-landscapes';

import { afghanistan } from './countries/afghanistan';
import { albania } from './countries/albania';
import { algeria } from './countries/algeria';
import { argentina } from './countries/argentina';
import { austria } from './countries/austria';
import { azerbaijan } from './countries/azerbaijan';
import { bahamas } from './countries/bahamas';
import { bangladesh } from './countries/bangladesh';
import { bolivia } from './countries/bolivia';
import { australia } from './countries/australia';
import { belgium } from './countries/belgium';
import { brazil } from './countries/brazil';
import { chile } from './countries/chile';
import { colombia } from './countries/colombia';
import { costaRica } from './countries/costa-rica';
import { croatia } from './countries/croatia';
import { czechRepublic } from './countries/czech-republic';
import { canada } from './countries/canada';
import { china } from './countries/china';
import { cuba } from './countries/cuba';
import { ecuador } from './countries/ecuador';
import { denmark } from './countries/denmark';
import { egypt } from './countries/egypt';
import { ethiopia } from './countries/ethiopia';
import { finland } from './countries/finland';
import { france } from './countries/france';
import { germany } from './countries/germany';
import { ghana } from './countries/ghana';
import { greece } from './countries/greece';
import { india } from './countries/india';
import { iran } from './countries/iran';
import { ireland } from './countries/ireland';
import { italy } from './countries/italy';
import { jamaica } from './countries/jamaica';
import { japan } from './countries/japan';
import { kenya } from './countries/kenya';
import { lebanon } from './countries/lebanon';
import { mexico } from './countries/mexico';
import { morocco } from './countries/morocco';
import { netherlands } from './countries/netherlands';
import { newZealand } from './countries/new-zealand';
import { nigeria } from './countries/nigeria';
import { norway } from './countries/norway';
import { peru } from './countries/peru';
import { poland } from './countries/poland';
import { portugal } from './countries/portugal';
import { southAfrica } from './countries/south-africa';
import { southKorea } from './countries/south-korea';
import { spain } from './countries/spain';
import { sweden } from './countries/sweden';
import { thailand } from './countries/thailand';
import { turkey } from './countries/turkey';
import { unitedStates } from './countries/united-states';
import { vietnam } from './countries/vietnam';
import { russia } from './countries/russia';
import { ukraine } from './countries/ukraine';
import { romania } from './countries/romania';
import { bulgaria } from './countries/bulgaria';
import { serbia } from './countries/serbia';
import { slovenia } from './countries/slovenia';
import { switzerland } from './countries/switzerland';
import { hungary } from './countries/hungary';
import { slovakia } from './countries/slovakia';
import { iceland } from './countries/iceland';
import { lithuania } from './countries/lithuania';
import { latvia } from './countries/latvia';
import { estonia } from './countries/estonia';
import { malta } from './countries/malta';
import { cyprus } from './countries/cyprus';
import { pakistan } from './countries/pakistan';
import { sriLanka } from './countries/sri-lanka';
import { nepal } from './countries/nepal';
import { singapore } from './countries/singapore';
import { indonesia } from './countries/indonesia';
import { philippines } from './countries/philippines';
import { malaysia } from './countries/malaysia';

const generateCountryId = (name: string): string => {
  return name.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[*()]/g, '')
    .replace(/\./g, '')
    .replace(/'/g, '')
    .replace(/,/g, '')
    .replace(/é/g, 'e')
    .replace(/ô/g, 'o')
    .replace(/ã/g, 'a')
    .replace(/í/g, 'i');
};

const createPlaceholderCountry = (
  name: string,
  code: string,
  continent: string,
  flag: string,
  coordinates: { x: number; y: number }
): Country => ({
  id: generateCountryId(name),
  name,
  code,
  continent,
  flag,
  landscapeImage: countryLandscapes[name] || `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80`,
  description: `${name} is a country located in ${continent}. Discover its unique culture, traditions, and cuisine.`,
  facts: [
    `${name} is located in ${continent}`,
    `The country code is ${code}`,
    'Rich cultural heritage',
    'Unique local traditions',
  ],
  foodCulture: `${name} has a diverse and rich culinary tradition that reflects its unique geography and cultural heritage.`,
  mainDish: {
    id: `${generateCountryId(name)}-main`,
    name: `Traditional ${name} Dish`,
    description: `A popular traditional dish from ${name}`,
    cookingTime: 45,
    servings: 4,
    dietType: 'meat' as const,
    ingredients: [
      { name: 'Main ingredient', amount: 500, unit: 'g' },
      { name: 'Spices', amount: 2, unit: 'tbsp' },
    ],
    steps: [
      'Prepare ingredients',
      'Cook according to local traditions',
      'Serve hot',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600',
  },
  drinks: {
    alcoholic: 'Local wine or beer',
    nonAlcoholic: 'Traditional tea',
  },
  music: ['Traditional folk music'],
  decorationIdeas: ['Local textiles', 'Traditional colors'],
  conversationStarters: [`What do you know about ${name}?`],
  quiz: [
    {
      id: `${generateCountryId(name)}-q1`,
      question: `What continent is ${name} located in?`,
      options: ['Africa', 'Asia', 'Europe', continent],
      correctAnswer: 3,
    },
  ],
  coordinates,
});

export const countries: Country[] = [
  afghanistan,
  albania,
  algeria,
  argentina,
  australia,
  austria,
  azerbaijan,
  bahamas,
  bangladesh,
  belgium,
  bolivia,
  brazil,
  canada,
  chile,
  china,
  colombia,
  costaRica,
  croatia,
  cuba,
  czechRepublic,
  denmark,
  ecuador,
  egypt,
  ethiopia,
  finland,
  france,
  germany,
  ghana,
  greece,
  india,
  iran,
  ireland,
  italy,
  jamaica,
  japan,
  kenya,
  lebanon,
  mexico,
  morocco,
  netherlands,
  newZealand,
  nigeria,
  norway,
  peru,
  poland,
  portugal,
  southAfrica,
  southKorea,
  spain,
  sweden,
  thailand,
  turkey,
  unitedStates,
  vietnam,
  romania,
  russia,
  serbia,
  ukraine,
  bulgaria,
  hungary,
  slovakia,
  slovenia,
  switzerland,
  estonia,
  iceland,
  latvia,
  lithuania,
  malta,
  cyprus,
  createPlaceholderCountry('Tunisia', 'TN', 'Africa', '🇹🇳', { x: 49, y: 36 }),
  createPlaceholderCountry('Libya', 'LY', 'Africa', '🇱🇾', { x: 50, y: 32 }),
  createPlaceholderCountry('Sudan', 'SD', 'Africa', '🇸🇩', { x: 53, y: 25 }),
  createPlaceholderCountry('Somalia', 'SO', 'Africa', '🇸🇴', { x: 58, y: 18 }),
  createPlaceholderCountry('Tanzania', 'TZ', 'Africa', '🇹🇿', { x: 56, y: 15 }),
  createPlaceholderCountry('Uganda', 'UG', 'Africa', '🇺🇬', { x: 55, y: 20 }),
  createPlaceholderCountry('Rwanda', 'RW', 'Africa', '🇷🇼', { x: 55, y: 18 }),
  createPlaceholderCountry('Mozambique', 'MZ', 'Africa', '🇲🇿', { x: 56, y: 12 }),
  createPlaceholderCountry('Zimbabwe', 'ZW', 'Africa', '🇿🇼', { x: 55, y: 12 }),
  createPlaceholderCountry('Botswana', 'BW', 'Africa', '🇧🇼', { x: 53, y: 12 }),
  createPlaceholderCountry('Namibia', 'NA', 'Africa', '🇳🇦', { x: 51, y: 12 }),
  createPlaceholderCountry('Angola', 'AO', 'Africa', '🇦🇴', { x: 50, y: 15 }),
  createPlaceholderCountry('Zambia', 'ZM', 'Africa', '🇿🇲', { x: 54, y: 13 }),
  createPlaceholderCountry('Malawi', 'MW', 'Africa', '🇲🇼', { x: 56, y: 14 }),
  createPlaceholderCountry('Madagascar', 'MG', 'Africa', '🇲🇬', { x: 58, y: 12 }),
  createPlaceholderCountry('Mauritius', 'MU', 'Africa', '🇲🇺', { x: 60, y: 10 }),
  createPlaceholderCountry('Seychelles', 'SC', 'Africa', '🇸🇨', { x: 59, y: 18 }),
  createPlaceholderCountry('Senegal', 'SN', 'Africa', '🇸🇳', { x: 44, y: 25 }),
  createPlaceholderCountry('Côte d\'Ivoire', 'CI', 'Africa', '🇨🇮', { x: 46, y: 18 }),
  createPlaceholderCountry('Mali', 'ML', 'Africa', '🇲🇱', { x: 46, y: 28 }),
  createPlaceholderCountry('Niger', 'NE', 'Africa', '🇳🇪', { x: 48, y: 28 }),
  createPlaceholderCountry('Chad', 'TD', 'Africa', '🇹🇩', { x: 50, y: 28 }),
  createPlaceholderCountry('Cameroon', 'CM', 'Africa', '🇨🇲', { x: 49, y: 18 }),
  createPlaceholderCountry('Central African Republic', 'CF', 'Africa', '🇨🇫', { x: 52, y: 18 }),
  createPlaceholderCountry('Democratic Republic of the Congo', 'CD', 'Africa', '🇨🇩', { x: 52, y: 15 }),
  createPlaceholderCountry('Republic of the Congo', 'CG', 'Africa', '🇨🇬', { x: 50, y: 18 }),
  createPlaceholderCountry('Gabon', 'GA', 'Africa', '🇬🇦', { x: 49, y: 16 }),
  createPlaceholderCountry('Equatorial Guinea', 'GQ', 'Africa', '🇬🇶', { x: 49, y: 19 }),
  createPlaceholderCountry('Burkina Faso', 'BF', 'Africa', '🇧🇫', { x: 46, y: 25 }),
  createPlaceholderCountry('Togo', 'TG', 'Africa', '🇹🇬', { x: 47, y: 18 }),
  createPlaceholderCountry('Benin', 'BJ', 'Africa', '🇧🇯', { x: 48, y: 19 }),
  createPlaceholderCountry('Liberia', 'LR', 'Africa', '🇱🇷', { x: 45, y: 18 }),
  createPlaceholderCountry('Sierra Leone', 'SL', 'Africa', '🇸🇱', { x: 44, y: 20 }),
  createPlaceholderCountry('Guinea', 'GN', 'Africa', '🇬🇳', { x: 44, y: 22 }),
  createPlaceholderCountry('Guinea-Bissau', 'GW', 'Africa', '🇬🇼', { x: 44, y: 24 }),
  createPlaceholderCountry('Gambia', 'GM', 'Africa', '🇬🇲', { x: 44, y: 26 }),
  createPlaceholderCountry('Mauritania', 'MR', 'Africa', '🇲🇷', { x: 45, y: 32 }),
  createPlaceholderCountry('Cape Verde', 'CV', 'Africa', '🇨🇻', { x: 42, y: 28 }),
  createPlaceholderCountry('Comoros', 'KM', 'Africa', '🇰🇲', { x: 58, y: 14 }),
  createPlaceholderCountry('São Tomé and Príncipe', 'ST', 'Africa', '🇸🇹', { x: 48, y: 16 }),
  createPlaceholderCountry('Eritrea', 'ER', 'Africa', '🇪🇷', { x: 56, y: 26 }),
  createPlaceholderCountry('Djibouti', 'DJ', 'Africa', '🇩🇯', { x: 57, y: 24 }),
  createPlaceholderCountry('Lesotho', 'LS', 'Africa', '🇱🇸', { x: 53, y: 9 }),
  createPlaceholderCountry('Eswatini', 'SZ', 'Africa', '🇸🇿', { x: 55, y: 10 }),
  pakistan,
  sriLanka,
  nepal,
  createPlaceholderCountry('Bhutan', 'BT', 'Asia', '🇧🇹', { x: 74, y: 36 }),
  createPlaceholderCountry('Myanmar', 'MM', 'Asia', '🇲🇲', { x: 75, y: 30 }),
  createPlaceholderCountry('Laos', 'LA', 'Asia', '🇱🇦', { x: 76, y: 28 }),
  createPlaceholderCountry('Cambodia', 'KH', 'Asia', '🇰🇭', { x: 77, y: 24 }),
  malaysia,
  singapore,
  indonesia,
  philippines,
  createPlaceholderCountry('Brunei', 'BN', 'Asia', '🇧🇳', { x: 79, y: 19 }),
  createPlaceholderCountry('East Timor', 'TL', 'Asia', '🇹🇱', { x: 83, y: 15 }),
  createPlaceholderCountry('Mongolia', 'MN', 'Asia', '🇲🇳', { x: 78, y: 48 }),
  createPlaceholderCountry('North Korea', 'KP', 'Asia', '🇰🇵', { x: 82, y: 42 }),
  createPlaceholderCountry('Taiwan', 'TW', 'Asia', '🇹🇼', { x: 83, y: 33 }),
  createPlaceholderCountry('Hong Kong', 'HK', 'Asia', '🇭🇰', { x: 80, y: 31 }),
  createPlaceholderCountry('Macau', 'MO', 'Asia', '🇲🇴', { x: 80, y: 30 }),
  createPlaceholderCountry('Maldives', 'MV', 'Asia', '🇲🇻', { x: 70, y: 19 }),
  createPlaceholderCountry('Kazakhstan', 'KZ', 'Asia', '🇰🇿', { x: 65, y: 48 }),
  createPlaceholderCountry('Uzbekistan', 'UZ', 'Asia', '🇺🇿', { x: 64, y: 42 }),
  createPlaceholderCountry('Turkmenistan', 'TM', 'Asia', '🇹🇲', { x: 62, y: 42 }),
  createPlaceholderCountry('Kyrgyzstan', 'KG', 'Asia', '🇰🇬', { x: 66, y: 42 }),
  createPlaceholderCountry('Tajikistan', 'TJ', 'Asia', '🇹🇯', { x: 67, y: 40 }),

  createPlaceholderCountry('Armenia', 'AM', 'Asia', '🇦🇲', { x: 57, y: 42 }),
  createPlaceholderCountry('Georgia', 'GE', 'Asia/Europe', '🇬🇪', { x: 58, y: 43 }),
  createPlaceholderCountry('Iraq', 'IQ', 'Asia', '🇮🇶', { x: 58, y: 36 }),
  createPlaceholderCountry('Syria', 'SY', 'Asia', '🇸🇾', { x: 55, y: 37 }),
  createPlaceholderCountry('Jordan', 'JO', 'Asia', '🇯🇴', { x: 54, y: 35 }),
  createPlaceholderCountry('Israel', 'IL', 'Asia', '🇮🇱', { x: 54, y: 36 }),
  createPlaceholderCountry('Palestine', 'PS', 'Asia', '🇵🇸', { x: 54, y: 36 }),
  createPlaceholderCountry('Saudi Arabia', 'SA', 'Asia', '🇸🇦', { x: 58, y: 32 }),
  createPlaceholderCountry('Yemen', 'YE', 'Asia', '🇾🇪', { x: 58, y: 27 }),
  createPlaceholderCountry('Oman', 'OM', 'Asia', '🇴🇲', { x: 61, y: 30 }),
  createPlaceholderCountry('United Arab Emirates', 'AE', 'Asia', '🇦🇪', { x: 59, y: 33 }),
  createPlaceholderCountry('Qatar', 'QA', 'Asia', '🇶🇦', { x: 59, y: 34 }),
  createPlaceholderCountry('Bahrain', 'BH', 'Asia', '🇧🇭', { x: 59, y: 35 }),
  createPlaceholderCountry('Kuwait', 'KW', 'Asia', '🇰🇼', { x: 58, y: 35 }),
  createPlaceholderCountry('Papua New Guinea', 'PG', 'Oceania', '🇵🇬', { x: 87, y: 15 }),
  createPlaceholderCountry('Fiji', 'FJ', 'Oceania', '🇫🇯', { x: 92, y: 12 }),
  createPlaceholderCountry('Solomon Islands', 'SB', 'Oceania', '🇸🇧', { x: 90, y: 15 }),
  createPlaceholderCountry('Vanuatu', 'VU', 'Oceania', '🇻🇺', { x: 91, y: 12 }),
  createPlaceholderCountry('New Caledonia', 'NC', 'Oceania', '🇳🇨', { x: 90, y: 10 }),
  createPlaceholderCountry('Samoa', 'WS', 'Oceania', '🇼🇸', { x: 95, y: 14 }),
  createPlaceholderCountry('Tonga', 'TO', 'Oceania', '🇹🇴', { x: 94, y: 10 }),
  createPlaceholderCountry('Palau', 'PW', 'Oceania', '🇵🇼', { x: 84, y: 22 }),
  createPlaceholderCountry('Micronesia', 'FM', 'Oceania', '🇫🇲', { x: 87, y: 22 }),
  createPlaceholderCountry('Marshall Islands', 'MH', 'Oceania', '🇲🇭', { x: 90, y: 22 }),
  createPlaceholderCountry('Kiribati', 'KI', 'Oceania', '🇰🇮', { x: 93, y: 19 }),
  createPlaceholderCountry('Nauru', 'NR', 'Oceania', '🇳🇷', { x: 91, y: 19 }),
  createPlaceholderCountry('Tuvalu', 'TV', 'Oceania', '🇹🇻', { x: 92, y: 16 }),

  createPlaceholderCountry('Barbados', 'BB', 'North America', '🇧🇧', { x: 26, y: 25 }),
  createPlaceholderCountry('Trinidad and Tobago', 'TT', 'North America', '🇹🇹', { x: 26, y: 22 }),
  createPlaceholderCountry('Belize', 'BZ', 'North America', '🇧🇿', { x: 17, y: 27 }),
  createPlaceholderCountry('Guatemala', 'GT', 'North America', '🇬🇹', { x: 17, y: 26 }),
  createPlaceholderCountry('Honduras', 'HN', 'North America', '🇭🇳', { x: 18, y: 26 }),
  createPlaceholderCountry('Nicaragua', 'NI', 'North America', '🇳🇮', { x: 18, y: 25 }),

  createPlaceholderCountry('Panama', 'PA', 'North America', '🇵🇦', { x: 19, y: 21 }),
  createPlaceholderCountry('El Salvador', 'SV', 'North America', '🇸🇻', { x: 17, y: 25 }),
  createPlaceholderCountry('Dominican Republic', 'DO', 'North America', '🇩🇴', { x: 24, y: 29 }),
  createPlaceholderCountry('Haiti', 'HT', 'North America', '🇭🇹', { x: 23, y: 29 }),
  createPlaceholderCountry('Puerto Rico', 'PR', 'North America', '🇵🇷', { x: 25, y: 28 }),
  createPlaceholderCountry('Grenada', 'GD', 'North America', '🇬🇩', { x: 26, y: 24 }),
  createPlaceholderCountry('Saint Lucia', 'LC', 'North America', '🇱🇨', { x: 26, y: 25 }),
  createPlaceholderCountry('Saint Vincent and the Grenadines', 'VC', 'North America', '🇻🇨', { x: 26, y: 25 }),
  createPlaceholderCountry('Dominica', 'DM', 'North America', '🇩🇲', { x: 26, y: 26 }),
  createPlaceholderCountry('Antigua and Barbuda', 'AG', 'North America', '🇦🇬', { x: 26, y: 27 }),
  createPlaceholderCountry('Saint Kitts and Nevis', 'KN', 'North America', '🇰🇳', { x: 26, y: 27 }),

  createPlaceholderCountry('Venezuela', 'VE', 'South America', '🇻🇪', { x: 24, y: 22 }),



  createPlaceholderCountry('Paraguay', 'PY', 'South America', '🇵🇾', { x: 26, y: 12 }),
  createPlaceholderCountry('Uruguay', 'UY', 'South America', '🇺🇾', { x: 27, y: 9 }),
  createPlaceholderCountry('Guyana', 'GY', 'South America', '🇬🇾', { x: 26, y: 20 }),
  createPlaceholderCountry('Suriname', 'SR', 'South America', '🇸🇷', { x: 27, y: 20 }),
  createPlaceholderCountry('French Guiana', 'GF', 'South America', '🇬🇫', { x: 28, y: 20 }),
];
