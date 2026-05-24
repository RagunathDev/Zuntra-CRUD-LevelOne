import { IconType } from 'react-icons';
import { HiShieldCheck } from 'react-icons/hi';
import { IoCardOutline } from 'react-icons/io5';
import { MdSwipe } from 'react-icons/md';
import { FaRegStar, FaTasks } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';

export interface FeatureItem {
  title: string;
  description: string;
  icon: IconType;
  accent: string;
}

export const features: FeatureItem[] = [
  {
    title: 'Bill payments',
    description: 'One-tap credit card and bill management with instant rewards.',
    icon: IoCardOutline,
    accent: 'from-violet-500 to-blue-400',
  },
  {
    title: 'Rewards system',
    description: 'Exclusive premium offers and loyalty points for every payment.',
    icon: FaRegStar,
    accent: 'from-pink-500 to-violet-500',
  },
  {
    title: 'Credit score',
    description: 'Realtime score monitoring and smart insights for growth.',
    icon: HiShieldCheck,
    accent: 'from-sky-500 to-cyan-400',
  },
  {
    title: 'UPI payments',
    description: 'Seamless UPI transfers and secure QR payments in seconds.',
    icon: MdSwipe,
    accent: 'from-fuchsia-500 to-rose-500',
  },
  {
    title: 'Cashback',
    description: 'Elevated cashback streams across lifestyle and travel spends.',
    icon: GiMoneyStack,
    accent: 'from-emerald-400 to-lime-400',
  },
  {
    title: 'CRED Coins',
    description: 'Collect coins, access premium experiences and curated perks.',
    icon: FaTasks,
    accent: 'from-yellow-400 to-orange-400',
  },
];
