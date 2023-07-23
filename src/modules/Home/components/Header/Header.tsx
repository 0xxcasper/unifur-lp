import * as S from './styled';
import Text from '@/components/Text';
import Logo from '@/images/logo.svg';
import { ArrowRight } from 'react-bootstrap-icons';

const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={Logo} alt="app-logo" className="ic-logo" />
        <S.RowContent>
          <div className="section-left">
            <Text color="txt-parallel-1" size="20" fontWeight="light">
              Thấu hiểu nhu cầu sở hữu những món nội thất mang đậm phong cách cá nhân, từng đường nét và số đo được tùy
              chỉnh theo mong muốn riêng, UNIFUR.store cung cấp dịch vụ Thiết kế - Gia công sản phẩm nội thất theo yêu
              cầu của khách hàng.
            </Text>
            <S.SpaceV />
            <a href="https://unifur.store/pages/about-us" target="_blank" className="link">
              Về UNIFUR.store <ArrowRight />
            </a>
          </div>
          <div className="section-center">
            <Text color="txt-parallel" size="72" fontWeight="light" align="center" className="main-text">
              {`NỘI THẤT LÀ\nPHONG CÁCH SỐNG`}
            </Text>
          </div>

          <div className="section-right">
            <a href="https://shopee.vn/unifur.store" target="_blank" className="link">
              Xem cửa hàng
            </a>
          </div>
        </S.RowContent>
      </S.Content>
    </S.Container>
  );
};

export default Header;
