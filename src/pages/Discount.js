// src/pages/Discount.js
import { useRouter } from 'next/router';
import DiscountComponent from '../../components/Discount';

export default function DiscountPage() {
  const router = useRouter();
  
  return (
    <div>
      <DiscountComponent />
    </div>
  );
}
