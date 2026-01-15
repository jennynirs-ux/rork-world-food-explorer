import { Badge } from '@/types';
import { Globe, Map, Plane, Earth, Book, GraduationCap, Sparkles, ChefHat, Flame, Cake, MapPin, Home, Medal, Award } from 'lucide-react-native';

export const allBadges: Omit<Badge, 'earned' | 'earnedDate'>[] = [
  {
    id: 'first-country',
    name: 'First Steps',
    description: 'Complete your first country',
    icon: Globe,
  },
  {
    id: 'five-countries',
    name: 'Explorer',
    description: 'Complete 5 countries',
    icon: Map,
  },
  {
    id: 'ten-countries',
    name: 'World Traveler',
    description: 'Complete 10 countries',
    icon: Plane,
  },
  {
    id: 'all-continents',
    name: 'Continental',
    description: 'Visit all continents',
    icon: Earth,
  },
  {
    id: 'first-quiz',
    name: 'Knowledge Seeker',
    description: 'Complete your first quiz',
    icon: Book,
  },
  {
    id: 'ten-quizzes',
    name: 'Quiz Master',
    description: 'Complete 10 quizzes',
    icon: GraduationCap,
  },
  {
    id: 'perfect-quiz',
    name: 'Perfect Score',
    description: 'Get 100% on a quiz',
    icon: Sparkles,
  },
  {
    id: 'first-dish',
    name: 'Chef Apprentice',
    description: 'Cook your first dish',
    icon: ChefHat,
  },
  {
    id: 'ten-dishes',
    name: 'Master Chef',
    description: 'Cook 10 dishes',
    icon: Flame,
  },
  {
    id: 'dessert-lover',
    name: 'Sweet Tooth',
    description: 'Cook 5 desserts',
    icon: Cake,
  },
  {
    id: 'europe-complete',
    name: 'European Expert',
    description: 'Complete all European countries',
    icon: MapPin,
  },
  {
    id: 'asia-complete',
    name: 'Asian Master',
    description: 'Complete all Asian countries',
    icon: Home,
  },
  {
    id: 'africa-complete',
    name: 'African Explorer',
    description: 'Complete all African countries',
    icon: Medal,
  },
  {
    id: 'americas-complete',
    name: 'Americas Champion',
    description: 'Complete all countries in the Americas',
    icon: Award,
  },
];
