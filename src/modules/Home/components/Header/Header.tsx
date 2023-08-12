import * as S from './styled';
import Text from '@/components/Text';
import Logo from '@/images/logo.svg';

const Header = () => {
  return (
    <>
      <S.Background />
      <S.Container>
        <S.Content>
          <S.AppLogo src={Logo} alt="app-logo" />
          <S.MainSection>
            <Text color="txt-primary" size="72" fontWeight="medium" className="main-text">
              NỘI THẤT ĐA NĂNG
            </Text>
            <S.ShadowText>tối đa hóa</S.ShadowText>
            <Text color="txt-primary" size="72" fontWeight="semibold" className="main-text">
              TRẢI NGHIỆM SỐNG
            </Text>
          </S.MainSection>
          <S.Action>
            <a href="https://shopee.vn/unifur.store" target="_blank">
              Xem cửa hàng
            </a>
          </S.Action>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Header;
