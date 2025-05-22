import PageLayout from "@/components/Layout";
import CategoriesInHome from "@/containers/Homepages/categoriesInHome";
import NewProducts from "@/containers/Homepages/NewProducts";



export default function Home() {
  return (
    <PageLayout>
      <div className="">
        <CategoriesInHome/>
        <NewProducts/>
      </div>
    </PageLayout>
  );
}
