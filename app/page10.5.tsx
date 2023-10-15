// import Image from "next/image";
// import Link from "next/link";
// import ProductCard from "./components/ProductCard";
// import { getServerSession } from "next-auth";
// import { authOptions } from './api/auth/[...nextauth]/route';
// import { Metadata } from "next";

// export default async function Home() {
//   const session = await getServerSession(authOptions)

//   return (
//     <main>
//       <h1>Hello { session && <span>{session.user!.name}</span>}</h1>
//         <Link href="/users">Users</Link>
//         <ProductCard />
//     </main>
//   );
// }

// // Manual generate meta data
// // export const metadata: Metadata = {
// //   title: 'product.title', 
// //   description: 'product.description'
// // }

// // Auto generate meta data
// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch('');
//   return {
//     title: 'product.title', 
//     description: 'product.description'
//   }
// }