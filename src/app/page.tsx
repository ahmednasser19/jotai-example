import Products from "@/components/products/products-list";
import SearchBar from "@/components/search/search-bar";

export default function Home() {
  return (
    <main className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <SearchBar />
        <Products />
      </div>
    </main>
  );
}
