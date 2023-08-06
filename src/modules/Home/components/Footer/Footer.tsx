import * as S from './styled';
import Text from '@/components/Text';

const CONTACT_LIST = [
  '101/4 HT01, Khu phố 5, Phường Hiệp Thành, Quận 12, Tp.HCM, Vietnam.',
  '+84 (0)858823969',
  'contact@unifur.store',
];

const WORKING_TIME = ['Thứ 2 - Thứ 6: 8h - 18h', 'Thứ 7: 8h - 13h'];

const SOCIAL_LIST = [
  {
    name: 'UNIFUR.store',
    link: 'https://unifur.store/',
  },
  {
    name: 'Chat',
    link: 'https://www.facebook.com/officialUNIFUR',
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/@officialUNIFUR',
  },
];

const Footer = () => {
  const renderContact = (item: string) => {
    return (
      <S.ContactItem key={item}>
        <S.Dot />
        <S.ContentText size="20">{item}</S.ContentText>
      </S.ContactItem>
    );
  };

  return (
    <S.Container>
      <Text size="36" fontWeight="semibold" color="white">
        Công ty TNHH UNIFUR
      </Text>
      <S.ContactList className="mt-32">{CONTACT_LIST.map(renderContact)}</S.ContactList>
      <S.WorkingTime className="mt-32">
        <S.ContentText size="20">Thời gian làm việc</S.ContentText>
        <S.WorkingTimeList>{WORKING_TIME.map(renderContact)}</S.WorkingTimeList>
      </S.WorkingTime>
      <S.SocialList className="mt-32">
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
