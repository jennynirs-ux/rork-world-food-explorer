import { TranslatedString } from '@/types';

export type EndangeredDish = {
  id: string;
  name: TranslatedString;
  countryId: string;
  region: TranslatedString;
  description: TranslatedString;
  threatLevel: 'critical' | 'endangered' | 'vulnerable';
  reason: TranslatedString;
  howToHelp: TranslatedString;
};

/**
 * Dishes and culinary traditions at risk of disappearing.
 * A curated list highlighting food heritage worth preserving.
 */
export const endangeredDishes: EndangeredDish[] = [
  {
    id: 'ed-01',
    name: { en: 'Pemmican', sv: 'Pemmikan' },
    countryId: 'canada',
    region: { en: 'Canadian Plains' },
    description: { en: 'Dried meat pounded with fat and berries. Originally made by Indigenous peoples as a high-energy travel food that can last for years.' },
    threatLevel: 'endangered',
    reason: { en: 'Loss of traditional knowledge as elders pass, commercial alternatives replacing handmade versions.' },
    howToHelp: { en: 'Support Indigenous food sovereignty initiatives and try making it yourself with traditional methods.' },
  },
  {
    id: 'ed-02',
    name: { en: 'Hákarl (Fermented Shark)', sv: 'Hákarl (fermenterad haj)' },
    countryId: 'iceland',
    region: { en: 'Iceland' },
    description: { en: 'Greenland shark fermented for 4-5 months, producing an intensely pungent ammonia-rich delicacy central to Icelandic identity.' },
    threatLevel: 'vulnerable',
    reason: { en: 'Fewer producers, younger generations less interested, strict fishing regulations on Greenland shark.' },
    howToHelp: { en: 'Visit Iceland during Þorrablót festival (January-February) to try traditional foods.' },
  },
  {
    id: 'ed-03',
    name: { en: 'Witchetty Grub Preparation' },
    countryId: 'australia',
    region: { en: 'Central Australia' },
    description: { en: 'Traditional Aboriginal bush food — large white larvae eaten raw or lightly cooked, tasting of almonds and scrambled eggs.' },
    threatLevel: 'endangered',
    reason: { en: 'Urbanization, loss of bush knowledge, reduced access to traditional lands.' },
    howToHelp: { en: 'Support Aboriginal-led food tours and cultural preservation programs.' },
  },
  {
    id: 'ed-04',
    name: { en: 'Authentic Neapolitan Pizza Craft' },
    countryId: 'italy',
    region: { en: 'Naples, Italy' },
    description: { en: 'UNESCO-listed art of Neapolitan pizza making — specific dough-spinning techniques passed down through generations of pizzaioli.' },
    threatLevel: 'vulnerable',
    reason: { en: 'Mass industrialization, franchise models replacing artisan methods, fewer young apprentices.' },
    howToHelp: { en: 'Seek out pizzerias certified by Associazione Verace Pizza Napoletana (AVPN).' },
  },
  {
    id: 'ed-05',
    name: { en: 'Kava Ceremony Preparation' },
    countryId: 'fiji',
    region: { en: 'Pacific Islands' },
    description: { en: 'Ritual preparation of kava root drink with specific pounding, straining, and sharing protocols integral to Pacific Islander culture.' },
    threatLevel: 'vulnerable',
    reason: { en: 'Commercial kava production replacing ceremonial methods, young people migrating to cities.' },
    howToHelp: { en: 'Participate respectfully in traditional kava ceremonies when visiting Pacific Island nations.' },
  },
  {
    id: 'ed-06',
    name: { en: 'Slow-Fermented Miso' },
    countryId: 'japan',
    region: { en: 'Rural Japan' },
    description: { en: 'Traditional miso aged 2-3 years in wooden barrels. Industrial miso is made in weeks with accelerants, losing complexity.' },
    threatLevel: 'endangered',
    reason: { en: 'Only ~1,000 traditional miso makers remain (down from 10,000+). Most miso is now factory-made in weeks.' },
    howToHelp: { en: 'Buy traditionally fermented miso (look for "tennen jozo" on labels) and support craft producers.' },
  },
  {
    id: 'ed-07',
    name: { en: 'Injera from Wild Teff' },
    countryId: 'ethiopia',
    region: { en: 'Ethiopian Highlands' },
    description: { en: 'Sourdough flatbread made from ancient wild teff varieties, with unique flavors lost when using commercial teff.' },
    threatLevel: 'vulnerable',
    reason: { en: 'Wild teff varieties being replaced by higher-yield commercial strains. Climate change affecting highland growing regions.' },
    howToHelp: { en: 'Support Ethiopian seed preservation organizations and small-scale teff farmers.' },
  },
  {
    id: 'ed-08',
    name: { en: 'Oaxacan Chocolate Preparation' },
    countryId: 'mexico',
    region: { en: 'Oaxaca, Mexico' },
    description: { en: 'Hand-ground cacao on stone metates with specific spice blends unique to each family, a tradition spanning millennia.' },
    threatLevel: 'endangered',
    reason: { en: 'Electric grinders replacing metates, industrial chocolate dominating market, younger generation not learning.' },
    howToHelp: { en: 'Visit Oaxacan chocolate houses, buy stone-ground chocolate, support artisan producers.' },
  },
  {
    id: 'ed-09',
    name: { en: 'Traditional Kimchi (Kimjang)' },
    countryId: 'south-korea',
    region: { en: 'South Korea' },
    description: { en: 'UNESCO-listed communal kimchi-making tradition where communities gather to prepare winter kimchi together.' },
    threatLevel: 'vulnerable',
    reason: { en: 'Apartment living, factory-made kimchi convenience, fewer multigenerational households sharing knowledge.' },
    howToHelp: { en: 'Participate in kimjang events, learn from Korean grandmothers, make kimchi at home.' },
  },
  {
    id: 'ed-10',
    name: { en: 'Smoked Salt from Bamboo (Jugyeom)' },
    countryId: 'south-korea',
    region: { en: 'South Korea' },
    description: { en: 'Sea salt packed in bamboo cylinders and fired 9 times in a pine-fueled kiln. A 1,000-year-old Buddhist monk tradition.' },
    threatLevel: 'critical',
    reason: { en: 'Only a handful of masters remain. The 9-firing process takes months and is extremely labor-intensive.' },
    howToHelp: { en: 'Purchase authentic jugyeom salt and spread awareness about this remarkable tradition.' },
  },
];
