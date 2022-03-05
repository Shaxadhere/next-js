/* eslint-disable react/jsx-key */
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function Category() {
  const router = useRouter()
  const { name } = router.query
  return (
    <>
      <Layout>Category: {name}</Layout>
    </>
  );
}
