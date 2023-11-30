import formatPrice from "@/lib/formatCorrency";
import { Product } from "@prisma/client";
import Link from "next/link";

interface PriceTagProps {
  price: number;
  className?: string;
}

export default function PriceTag({ price, className }: PriceTagProps) {
  return <span className={`badge ${className}`}>{formatPrice(price)}</span>;
}
