import PageLayout from "@/components/Layout";
import CategoriesInHome from "@/containers/Homepages/categoriesInHome";
import NewProducts from "@/containers/Homepages/NewProducts";
import BannerSlider from "../containers/Homepages/BannerSlider";
import Services from "../containers/Homepages/services";



export default function Home() {
  return (
    <PageLayout>
      <div className="">
        <CategoriesInHome/>
        <NewProducts/>
        <BannerSlider/>
        <Services/>
      </div>
    </PageLayout>
  );
}
