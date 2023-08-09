import * as S from './styled';
import Text from '@/components/Text';
import Accordion from 'react-bootstrap/Accordion';
import AccordionComponent from '@/components/Accordion';

const FAQ_LIST = [
  {
    header: '1. UNIFUR.store nhận gia công các loại sản phẩm nào?',
    content: [
      'UNIFUR.store nhận thiết kế và sản xuất tất cả các sản phẩm nội thất làm từ gỗ công nghiệp. Chuyên ván gỗ MDF và Plywood phủ Melamine.',
    ],
  },
  {
    header: '2. Thời gian sản xuất sản phẩm theo yêu cầu là bao lâu?',
    content: [
      'Quý khách sẽ nhận được sản phẩm trong vòng 5 - 7 ngày làm việc (*), tính từ thời điểm duyệt thiết kế chính thức.',
      '(*) Lưu ý: Ngày làm việc không tính T7, CN và các ngày Lễ, Tết theo quy định Nhà nước.',
    ],
  },
  {
    header: '3. Quy định thanh toán đối với đơn hàng sản phẩm theo yêu cầu là gì?',
    content: [
      'Khi tiến hành đặt sản phẩm theo yêu cầu, Quý khách cần đặt cọc 50% trước khi thiết kế và thanh toán đủ 100% sau khi nhận được sản phẩm.',
      <>
        Vui lòng tham khảo chi tiết chính sách thanh toán của UNIFUR.store tại{' '}
        <a href="https://unifur.store/pages/quy-dinh-ve-thanh-toan-tai-unifur-store" target="_blank">
          đây
        </a>
        .
      </>,
    ],
  },
  {
    header: '4. Quy định về sở hữu thiết kế đối với các sản phẩm theo yêu cầu.',
    content: [
      <>
        Đối tác Thiết kế chính thức của UNIFUR.store là{' '}
        <a href="https://www.facebook.com/rabstudio" target="_blank">
          Rab Studio
        </a>
        . Vì vậy, UNIFUR.store có toàn quyền sở hữu đối với tất cả thiết kế sản phẩm do Rab Studio thực hiện.
      </>,
      'Tuy nhiên, UNIFUR.store sẽ xin sự đồng thuận của Quý khách hàng trước khi dùng các mẫu thiết kế cho bất kỳ mục đích quảng cáo công khai nào.',
    ],
  },
  {
    header: '5. UNIFUR.store có giao hàng toàn quốc không?',
    content: [
      'UNIFUR.store có xưởng sản xuất tại quận 12, TpHCM. Hiện tại UNIFUR.store nhận sản xuất và giao hàng Nội thành khu vực TpHCM.',
      'Các tỉnh thành khác:  tùy số lượng đặt hàng xin liên hệ để được tư vấn giao hàng.',
    ],
  },
];

const FAQ = () => {
  const renderFAQ = (item: any) => {
    return (
      <AccordionComponent
        key={item.header}
        header={item.header}
        content={
          <Accordion.Body>
            {item.content.map((content: any[], index: number) => (
              <Text key={index} size="20" color="txt-primary" className="mb-16">
                {content}
              </Text>
            ))}
          </Accordion.Body>
        }
      />
    );
  };

  return (
    <>
      <S.Container id="faq">
        <S.Content>
          <Text size="56" fontWeight="semibold" align="center" className="mt-32">
            Câu hỏi thường gặp
          </Text>
          <S.AccordionWrapper>{FAQ_LIST.map(renderFAQ)}</S.AccordionWrapper>
        </S.Content>
      </S.Container>
    </>
  );
};

export default FAQ;
