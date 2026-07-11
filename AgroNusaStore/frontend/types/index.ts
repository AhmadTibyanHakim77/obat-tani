export type ProductCategory = "Obat Tani" | "Pupuk" | "Benih" | "Alat" | "Aksesoris";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  activeIngredient: string;
  dosage: string;
  targetPests: string[];
  price: number;
  stock: number;
  rating: number;
  image: string;
  badges: string[];
};

export type Metric = {
  slug: string;
  label: string;
  value: string;
  detail: string;
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  readingTime: string;
  summary: string;
  details: string[];
};

export type ConsultationProgram = {
  slug: string;
  title: string;
  subtitle: string;
  schedule: string[];
  details: string[];
  output: string;
};

export type BankPayment = {
  id: string;
  name: string;
  accountNumber: string;
  accountName: string;
  color: string;
  logo: string;
};
