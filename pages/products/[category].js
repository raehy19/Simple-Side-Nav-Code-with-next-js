import { useRouter } from "next/router";

const Category = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div style={{ position: "fixed", left: 300, top: 100, fontSize: "30px" }}>
      {category}
    </div>
  );
};

export default Category;
