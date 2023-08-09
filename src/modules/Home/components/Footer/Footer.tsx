import * as S from './styled';
import useElementHeightByID from '@/hooks/useElementHeightByID';

// const CONTACT_LIST = [
//   '101/4 HT01, Khu phố 5, Phường Hiệp Thành, Quận 12, Tp.HCM, Vietnam.',
//   '+84 (0)858823969',
//   'contact@unifur.store',
// ];

// const WORKING_TIME = ['Thứ 2 - Thứ 6: 8h - 18h', 'Thứ 7: 8h - 13h'];

const SOCIAL_LIST = [
  {
    name: 'contact@unifur.store',
    // link: 'https://www.facebook.com/officialUNIFUR',
  },
  {
    name: 'UNIFUR.store',
    link: 'https://unifur.store/',
  },
  {
    name: '085.882.3969',
    // link: 'https://www.youtube.com/@officialUNIFUR',
  },
];

const Footer = () => {
  return (
    <S.Container id="FOOTER">
      <S.SocialList>
        {SOCIAL_LIST.map(item => (
          <S.SocialItem key={item.name}>
            <a href={item.link} target="_blank" className="link">
              <S.ContentText size="20">{item.name}</S.ContentText>
            </a>
          </S.SocialItem>
        ))}
      </S.SocialList>
    </S.Container>
  );
};

export default Footer;
