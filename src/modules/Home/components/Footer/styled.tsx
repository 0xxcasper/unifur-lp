import styled from 'styled-components';
import px2rem from '@/utils/px2rem';
import Text from '@/components/Text';

const Container = styled.div`
  background-color: rgba(45, 50, 43, 1);
  margin-top: 100px;
  padding: 52px 68px;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${px2rem(16)}};
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Dot = styled.div`
  margin-right: ${px2rem(12)};
  text-align: center;
  background-color: #abadaa;
  width: 4px;
  height: 4px;
  border-radius: 50%;
`;

const WorkingTime = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${px2rem(16)}};
`;

const WorkingTimeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${px2rem(16)};
  padding-left: ${px2rem(16)}};
`;

const ContentText = styled(Text)`
  font-size: ${px2rem(20)};
  color: #abadaa;
`;

const SocialList = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${px2rem(70)};
  margin-top: ${px2rem(16)};
`;

const SocialItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${px2rem(8)};
  :hover {
    cursor: pointer;
    opacity: 0.8;
    text-decoration: underline;
  }
`;

export { Container, ContactList, ContactItem, Dot, WorkingTime, WorkingTimeList, ContentText, SocialList, SocialItem };
