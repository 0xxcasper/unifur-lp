import { Helmet } from 'react-helmet';

const Meta = () => {
  return (
    <Helmet>
      <title>UNIFUR - UNIFUR.store</title>
      <meta property="og:title" content="UNIFUR - UNIFUR.store" />
      <meta
        property="og:description"
        content="Local brand tại Tp.HCM từ năm 2022. Chuyên Sản xuất và Bán lẻ các sản phẩm nội thất từ gỗ công nghiệp. Nhận thiết kế và thi công trọn gói nội thất nhà ở, văn phòng hiện đại."
      />
      {/*<meta property="og:image" content="https://cdn.trustlesswallet.io/wallet-images/trustless-wallet-seo.jpg" />*/}
      <meta property="og:type" content="website" />
      <meta property="twitter:title" content="UNIFUR - UNIFUR.store" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:description"
        content="Local brand tại Tp.HCM từ năm 2022. Chuyên Sản xuất và Bán lẻ các sản phẩm nội thất từ gỗ công nghiệp. Nhận thiết kế và thi công trọn gói nội thất nhà ở, văn phòng hiện đại."
      />
      {/*<meta name="twitter:image" content="https://cdn.trustlesswallet.io/wallet-images/trustless-wallet-seo.jpg" />*/}
    </Helmet>
  );
};

export default Meta;
